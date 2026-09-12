(module
  (type $TypeInfoBase (sub (struct (field $$tag i32) (field $$parent (ref null $TypeInfoBase)))))
  (type $Object (sub (struct (field $$typeinfo (mut (ref $TypeInfoBase))))))
  (type $virtual1 (func (param $this (ref null any)) (result (ref null any))))
  (type $Box_typeinfo (sub $TypeInfoBase (struct (field $$tag i32) (field $$parent (ref null $TypeInfoBase)) (field $slot0 (mut (ref null $virtual1))))))
  (type $Box (sub $Object (struct (field $$typeinfo (mut (ref $TypeInfoBase))) (field $value (mut (ref null any))))))
  (type $Box_init (func (param $this (ref null any)) (param $value (ref null any)) (result (ref null any))))
  (type $Box_ctor (func (param $value (ref null any)) (result (ref null any))))
  (type $TypeInfoBase1 (sub (struct (field $$tag i32) (field $$parent (ref null $TypeInfoBase1)))))
  (type $Object1 (sub (struct (field $$typeinfo (mut (ref $TypeInfoBase1))))))
  (type $Unit (sub $Object1 (struct (field $$typeinfo (mut (ref $TypeInfoBase1))))))
  (type $entry (func (result (ref null any))))
  (import "system" "Unit$inst" (global $Unit$inst (mut (ref null $Unit))))
  (global $Box_typeinfo (export "Box_typeinfo") (ref $Box_typeinfo) (struct.new $Box_typeinfo
    (i32.const 1)
    (ref.null $TypeInfoBase)
    (ref.func $Box_answer)))
  (func $Box_init (export "Box_init") (type $Box_init) (param $this (ref null any)) (param $value (ref null any)) (result (ref null any))
    (block (result (ref null any))
      (struct.set $Box 1
        (ref.cast (ref $Box)
          (local.get $this))
        (local.get $value))
      (return
        (local.get $this))))
  (func $Box_ctor (export "Box_ctor") (type $Box_ctor) (param $value (ref null any)) (result (ref null any))
    (local $this (ref null any))
    (block (result (ref null any))
      (local.set $this
        (struct.new $Box
          (global.get $Box_typeinfo)
          (ref.null any)))
      (drop
        (call $Box_init
          (local.get $this)
          (local.get $value)))
      (return
        (local.get $this))))
  (func $Box_answer (export "Box_answer") (type $virtual1) (param $this (ref null any)) (result (ref null any))
    (block
      (return
        (struct.get $Box 1
          (ref.cast (ref $Box)
            (local.get $this))))
      (unreachable)))
  (func $entry (export "entry") (type $entry) (result (ref null any))
    (global.get $Unit$inst))
  (elem $Box_init declare func $Box_init)
  (elem $Box_ctor declare func $Box_ctor)
  (elem $Box_answer declare func $Box_answer)
  (elem $entry declare func $entry))