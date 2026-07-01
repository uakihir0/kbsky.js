import {
  toCharArray32huqyw9tt7kx as toCharArray,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  VOID3gxj6tk5isa35 as VOID,
  createThis2j2avj17cvnv2 as createThis,
  copyOfRange3alro60z4hhf8 as copyOfRange,
  getKClassFromExpression348iqjl4fnx2f as getKClassFromExpression,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  Unit_instance3vdlo4e4f5ggx as Unit_instance,
  contentEquals1cdp6c846cfdi as contentEquals,
  contentHashCode25jw6rgkgywwr as contentHashCode,
  IndexOutOfBoundsException1qfr429iumro0 as IndexOutOfBoundsException,
  _UByte___init__impl__g9hnc430zp6cgd9f0jq as _UByte___init__impl__g9hnc4,
  _UByte___get_data__impl__jof9qryxuf3cmdpzyk as _UByte___get_data__impl__jof9qr,
  compareTo3ankvs086tmwq as compareTo,
  StringBuildermazzzhj6kkai as StringBuilder,
  _Char___init__impl__6a9atx2yltdocdrxs4d as _Char___init__impl__6a9atx,
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
    this.v1w_1 = ByteString.z1w(new Int8Array(0), null);
    this.w1w_1 = toCharArray('0123456789abcdef');
  }
  a1x(byteArray) {
    return ByteString.z1w(byteArray, null);
  }
}
class ByteString {
  constructor(data, dummy) {
    return new.target.z1w(data, dummy);
  }
  static z1w(data, dummy) {
    Companion_getInstance();
    var $this = createThis(this);
    $this.x1w_1 = data;
    $this.y1w_1 = 0;
    return $this;
  }
  static b1x(data, startIndex, endIndex) {
    Companion_getInstance();
    startIndex = startIndex === VOID ? 0 : startIndex;
    endIndex = endIndex === VOID ? data.length : endIndex;
    return this.z1w(copyOfRange(data, startIndex, endIndex), null);
  }
  l2() {
    return this.x1w_1.length;
  }
  equals(other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof ByteString))
      THROW_CCE();
    if (!(other.x1w_1.length === this.x1w_1.length))
      return false;
    if (!(other.y1w_1 === 0) && !(this.y1w_1 === 0) && !(other.y1w_1 === this.y1w_1))
      return false;
    return contentEquals(this.x1w_1, other.x1w_1);
  }
  hashCode() {
    var hc = this.y1w_1;
    if (hc === 0) {
      hc = contentHashCode(this.x1w_1);
      this.y1w_1 = hc;
    }
    return hc;
  }
  j2(index) {
    if (index < 0 || index >= this.l2())
      throw IndexOutOfBoundsException.je('index (' + index + ') is out of byte string bounds: [0..' + this.l2() + ')');
    return this.x1w_1[index];
  }
  g1w(startIndex, endIndex) {
    var tmp;
    if (startIndex === endIndex) {
      tmp = Companion_getInstance().v1w_1;
    } else {
      tmp = ByteString.b1x(this.x1w_1, startIndex, endIndex);
    }
    return tmp;
  }
  c1x(startIndex, endIndex, $super) {
    endIndex = endIndex === VOID ? this.l2() : endIndex;
    return $super === VOID ? this.g1w(startIndex, endIndex) : $super.g1w.call(this, startIndex, endIndex);
  }
  d1x(other) {
    if (other === this)
      return 0;
    var localData = this.x1w_1;
    var otherData = other.x1w_1;
    var inductionVariable = 0;
    var tmp0 = this.l2();
    // Inline function 'kotlin.math.min' call
    var b = other.l2();
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
        var tmp$ret$5 = _UByte___get_data__impl__jof9qr(other_0) & 255;
        var cmp = compareTo(tmp, tmp$ret$5);
        if (!(cmp === 0))
          return cmp;
      }
       while (inductionVariable < last);
    return compareTo(this.l2(), other.l2());
  }
  d(other) {
    return this.d1x(other instanceof ByteString ? other : THROW_CCE());
  }
  toString() {
    if (isEmpty(this)) {
      return 'ByteString(size=0)';
    }
    var sizeStr = this.l2().toString();
    var len = (22 + sizeStr.length | 0) + imul(this.l2(), 2) | 0;
    // Inline function 'kotlin.with' call
    var $this$with = StringBuilder.ec(len);
    $this$with.i1('ByteString(size=');
    $this$with.i1(sizeStr);
    $this$with.i1(' hex=');
    var localData = this.x1w_1;
    var inductionVariable = 0;
    var last = this.l2();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var b = localData[i];
        $this$with.k1(Companion_getInstance().w1w_1[(b >>> 4 | 0) & 15]);
        $this$with.k1(Companion_getInstance().w1w_1[b & 15]);
      }
       while (inductionVariable < last);
    return $this$with.k1(_Char___init__impl__6a9atx(41)).toString();
  }
  e1x() {
    return this.x1w_1;
  }
}
class UnsafeByteStringOperations {
  f1x(array) {
    return Companion_getInstance().a1x(array);
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
    tmp = Companion_getInstance().v1w_1;
  } else {
    tmp = Companion_getInstance().a1x(bytes);
  }
  return tmp;
}
function decodeToString_0(_this__u8e3s4) {
  return decodeToString(_this__u8e3s4.e1x());
}
function isEmpty(_this__u8e3s4) {
  return _this__u8e3s4.l2() === 0;
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
  UnsafeByteStringOperations_instance as UnsafeByteStringOperations_instance32go50d8u0bll,
  ByteString_0 as ByteString3c9fk8lsh3lvs,
  ByteString as ByteString10sanmoo66key,
  decodeToString_0 as decodeToString2ede220pr5xir,
};
//endregion

//# sourceMappingURL=kotlinx-io-kotlinx-io-bytestring.mjs.map
