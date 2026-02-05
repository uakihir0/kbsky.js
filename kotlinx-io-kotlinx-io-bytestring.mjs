import {
  toCharArray32huqyw9tt7kx as toCharArray,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  VOID3gxj6tk5isa35 as VOID,
  createThis2j2avj17cvnv2 as createThis,
  copyOfRange3alro60z4hhf8 as copyOfRange,
  getKClassFromExpression348iqjl4fnx2f as getKClassFromExpression,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  Unit_instance28fytmsmm6r23 as Unit_instance,
  contentEquals1cdp6c846cfdi as contentEquals,
  contentHashCode25jw6rgkgywwr as contentHashCode,
  IndexOutOfBoundsException1qfr429iumro0 as IndexOutOfBoundsException,
  _UByte___init__impl__g9hnc418b8pq346rvu4 as _UByte___init__impl__g9hnc4,
  _UByte___get_data__impl__jof9qrfg5oujomrowy as _UByte___get_data__impl__jof9qr,
  compareTo3ankvs086tmwq as compareTo,
  StringBuildermazzzhj6kkai as StringBuilder,
  _Char___init__impl__6a9atx1csff5kwtduxl as _Char___init__impl__6a9atx,
  Comparable198qfk8pnblz0 as Comparable,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  decodeToString1x4faah2liw2p as decodeToString,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
} from './kotlin-kotlin-stdlib.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
class Companion {
  constructor() {
    Companion_instance = this;
    this.h1i_1 = ByteString.l1i(new Int8Array(0), null);
    this.i1i_1 = toCharArray('0123456789abcdef');
  }
  m1i(byteArray) {
    return ByteString.l1i(byteArray, null);
  }
}
class ByteString {
  static l1i(data, dummy) {
    Companion_getInstance();
    var $this = createThis(this);
    $this.j1i_1 = data;
    $this.k1i_1 = 0;
    return $this;
  }
  static n1i(data, startIndex, endIndex) {
    Companion_getInstance();
    startIndex = startIndex === VOID ? 0 : startIndex;
    endIndex = endIndex === VOID ? data.length : endIndex;
    return this.l1i(copyOfRange(data, startIndex, endIndex), null);
  }
  q2() {
    return this.j1i_1.length;
  }
  equals(other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof ByteString))
      THROW_CCE();
    if (!(other.j1i_1.length === this.j1i_1.length))
      return false;
    if (!(other.k1i_1 === 0) && !(this.k1i_1 === 0) && !(other.k1i_1 === this.k1i_1))
      return false;
    return contentEquals(this.j1i_1, other.j1i_1);
  }
  hashCode() {
    var hc = this.k1i_1;
    if (hc === 0) {
      hc = contentHashCode(this.j1i_1);
      this.k1i_1 = hc;
    }
    return hc;
  }
  p2(index) {
    if (index < 0 || index >= this.q2())
      throw IndexOutOfBoundsException.te('index (' + index + ') is out of byte string bounds: [0..' + this.q2() + ')');
    return this.j1i_1[index];
  }
  o1i(startIndex, endIndex) {
    var tmp;
    if (startIndex === endIndex) {
      tmp = Companion_getInstance().h1i_1;
    } else {
      tmp = ByteString.n1i(this.j1i_1, startIndex, endIndex);
    }
    return tmp;
  }
  p1i(startIndex, endIndex, $super) {
    endIndex = endIndex === VOID ? this.q2() : endIndex;
    return $super === VOID ? this.o1i(startIndex, endIndex) : $super.o1i.call(this, startIndex, endIndex);
  }
  q1i(other) {
    if (other === this)
      return 0;
    var localData = this.j1i_1;
    var otherData = other.j1i_1;
    var inductionVariable = 0;
    var tmp0 = this.q2();
    // Inline function 'kotlin.math.min' call
    var b = other.q2();
    var last = Math.min(tmp0, b);
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.toUByte' call
        var this_0 = localData[i];
        var tmp0_0 = _UByte___init__impl__g9hnc4(this_0);
        // Inline function 'kotlin.toUByte' call
        var this_1 = otherData[i];
        // Inline function 'kotlin.UByte.compareTo' call
        var other_0 = _UByte___init__impl__g9hnc4(this_1);
        // Inline function 'kotlin.UByte.toInt' call
        var tmp = _UByte___get_data__impl__jof9qr(tmp0_0) & 255;
        // Inline function 'kotlin.UByte.toInt' call
        var tmp$ret$4 = _UByte___get_data__impl__jof9qr(other_0) & 255;
        var cmp = compareTo(tmp, tmp$ret$4);
        if (!(cmp === 0))
          return cmp;
      }
       while (inductionVariable < last);
    return compareTo(this.q2(), other.q2());
  }
  d(other) {
    return this.q1i(other instanceof ByteString ? other : THROW_CCE());
  }
  toString() {
    if (isEmpty(this)) {
      return 'ByteString(size=0)';
    }
    var sizeStr = this.q2().toString();
    var len = (22 + sizeStr.length | 0) + imul(this.q2(), 2) | 0;
    // Inline function 'kotlin.with' call
    var $this$with = StringBuilder.ic(len);
    $this$with.n1('ByteString(size=');
    $this$with.n1(sizeStr);
    $this$with.n1(' hex=');
    var localData = this.j1i_1;
    var inductionVariable = 0;
    var last = this.q2();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var b = localData[i];
        $this$with.p1(Companion_getInstance().i1i_1[(b >>> 4 | 0) & 15]);
        $this$with.p1(Companion_getInstance().i1i_1[b & 15]);
      }
       while (inductionVariable < last);
    return $this$with.p1(_Char___init__impl__6a9atx(41)).toString();
  }
  r1i() {
    return this.j1i_1;
  }
}
class UnsafeByteStringOperations {
  s1i(array) {
    return Companion_getInstance().m1i(array);
  }
}
//endregion
var Companion_instance;
function Companion_getInstance() {
  if (Companion_instance === VOID)
    new Companion();
  return Companion_instance;
}
function ByteString_0(bytes) {
  var tmp;
  // Inline function 'kotlin.collections.isEmpty' call
  if (bytes.length === 0) {
    tmp = Companion_getInstance().h1i_1;
  } else {
    tmp = Companion_getInstance().m1i(bytes);
  }
  return tmp;
}
function decodeToString_0(_this__u8e3s4) {
  return decodeToString(_this__u8e3s4.r1i());
}
function isEmpty(_this__u8e3s4) {
  return _this__u8e3s4.q2() === 0;
}
var UnsafeByteStringOperations_instance;
function UnsafeByteStringOperations_getInstance() {
  return UnsafeByteStringOperations_instance;
}
//region block: post-declaration
initMetadataForCompanion(Companion);
initMetadataForClass(ByteString, 'ByteString', VOID, VOID, [Comparable]);
initMetadataForObject(UnsafeByteStringOperations, 'UnsafeByteStringOperations');
//endregion
//region block: init
UnsafeByteStringOperations_instance = new UnsafeByteStringOperations();
//endregion
//region block: exports
export {
  UnsafeByteStringOperations_instance as UnsafeByteStringOperations_instance35zx8xrp4hu2p,
  ByteString_0 as ByteString3c9fk8lsh3lvs,
  ByteString as ByteString10sanmoo66key,
  decodeToString_0 as decodeToString2ede220pr5xir,
};
//endregion

//# sourceMappingURL=kotlinx-io-kotlinx-io-bytestring.mjs.map
