package hkmc2.utils

object StringOps:
  extension (s: String)
    def escaped: String =
      s.iterator.flatMap:
        case '\b' => "\\b"
        case '\t' => "\\t"
        case '\n' => "\\n"
        case '\r' => "\\r"
        case '\f' => "\\f"
        case '"' => "\\\""
        case '\\' => "\\\\"
        case c if c.isControl => f"\\u${c.toInt}%04x"
        case c => c.toString
      .mkString("\"", "", "\"")
