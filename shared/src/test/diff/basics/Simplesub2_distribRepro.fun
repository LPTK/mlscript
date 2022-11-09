// Tests ported from Simplesub

// --- rec-producer-consumer --- //


let rec produce = arg => { head: arg, tail: produce (succ arg) }
let rec consume = strm => add strm.head (consume strm.tail)
//│ produce: int -> 'a
//│   where
//│     'a :> {head: int, tail: 'a}
//│ consume: 'a -> int
//│   where
//│     'a <: {head: int, tail: 'a}

let codata = produce 42
//│ codata: 'a
//│   where
//│     'a :> {head: int, tail: 'a}

let rec codata2 = { head: 0, tail: { head: 1, tail: codata2 } }
//│ codata2: 'codata2
//│   where
//│     'codata2 :> {head: 0, tail: {head: 1, tail: 'codata2}}

let rec produce3 = b => { head: 123, tail: (if b then codata else codata2) }
//│ produce3: bool -> {head: 123, tail: forall 'codata2, 'a. 'codata2 | 'a}
//│   where
//│     'a :> {head: int, tail: 'a}
//│     'codata2 :> {head: 0, tail: {head: 1, tail: 'codata2}}

// :d
let res = x => consume (produce3 x)
//│ res: bool -> (forall 'a. int | 'a)
