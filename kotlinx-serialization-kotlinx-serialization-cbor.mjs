import {
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  Unit_instance28fytmsmm6r23 as Unit_instance,
  VOID3gxj6tk5isa35 as VOID,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  captureStack1fzi4aczwc4hg as captureStack,
  StringBuildermazzzhj6kkai as StringBuilder,
  charCodeAt1yspne1d8erbm as charCodeAt,
  toString30pk9tzaqopn as toString,
  toString1pkumu07cwy4m as toString_0,
  ULongArray3nd0d80mdwjj8 as ULongArray,
  to2cs3ny02qtbcb as to,
  equals2au1ep9vhcato as equals,
  primitiveArrayConcatwxgknw08pmlb as primitiveArrayConcat,
  _ULongArray___init__impl__twm1l3177xx31ho2ogr as _ULongArray___init__impl__twm1l3,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  convertToByte2t4hntblnhq2k as convertToByte,
  convertToShortn6n5n7ruahkm as convertToShort,
  convertToInty04h231mmjoh as convertToInt,
  numberToChar93r9buh19yek as numberToChar,
  decodeToString1x4faah2liw2p as decodeToString,
  ArrayList3it5z8td81qkl as ArrayList,
  _ULong___init__impl__c78o9k2ace6d5rqjy3k as _ULong___init__impl__c78o9k,
  ULong3f9k7s38t3rfp as ULong,
  _ULongArray___get_size__impl__ju6dtr2nah336epvy32 as _ULongArray___get_size__impl__ju6dtr,
  toULongArray1o349t9kws2pb as toULongArray,
  ULongArray__toString_impl_wqk1p53k1ktpm1nidvw as ULongArray__toString_impl_wqk1p5,
  asList2qatwfkvahohi as asList,
  fromInt2ii0rejb1w62w as fromInt,
  negate13xrbakfwasjy as negate,
  add2suhfggl4zvkk as add,
  shiftLeft3tsh2sstjchzn as shiftLeft,
  IllegalStateExceptionkoljg5n0nrlr as IllegalStateException,
  toShort36kaw0zjdq3ex as toShort,
  get_lastIndex1yw0x4k50k51w as get_lastIndex,
  contentToString15oa15xiqsgux as contentToString,
  contentEqualscr5rim4sjoga as contentEquals,
  Triple1vhi3d0dgpnjb as Triple,
  FloatCompanionObject_instance3t6i70y0gcqkd as FloatCompanionObject_instance,
  floatFromBits1n9d03e2m5i5s as floatFromBits,
  DoubleCompanionObject_instance1ylw2yrid1slz as DoubleCompanionObject_instance,
  doubleFromBits153kwgwnt8ety as doubleFromBits,
  removeLastOrNull3odnlbetbttd4 as removeLastOrNull,
  arrayCopytctsywo3h7gj as arrayCopy,
  toBits279h5gq970cl4 as toBits,
  Collection1k04j3hzsbod0 as Collection,
  isInterface3d6p8outrmvmk as isInterface,
  firstOrNull1982767dljvdy as firstOrNull,
  IndexOutOfBoundsException1qfr429iumro0 as IndexOutOfBoundsException,
} from './kotlin-kotlin-stdlib.mjs';
import {
  EmptySerializersModule991ju6pz9b79 as EmptySerializersModule,
  SerializationExceptioneqrdve3ts2n9 as SerializationException,
  AbstractDecoder35guh02ubh2hm as AbstractDecoder,
  PolymorphicKindla9gurooefwb as PolymorphicKind,
  LIST_getInstance1utapkkkw66ts as LIST_getInstance,
  MAP_getInstanceoecfbvb4e1b6 as MAP_getInstance,
  ByteArraySerializersn06x87bo7h0 as ByteArraySerializer,
  Decoder23nde051s631g as Decoder,
  get_elementNamesl5b6t976dltd as get_elementNames,
} from './kotlinx-serialization-kotlinx-serialization-core.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
class ByteString {}
class Cbor {
  constructor(configuration, serializersModule) {
    Default_getInstance();
    this.v7e_1 = configuration;
    this.w7e_1 = serializersModule;
  }
  j10() {
    return this.w7e_1;
  }
  rw(deserializer, bytes) {
    var stream = new ByteArrayInput(bytes);
    var reader = new CborReader(this, new CborParser(stream, this.v7e_1.e7f_1));
    return reader.tz(deserializer);
  }
}
class Default extends Cbor {
  constructor() {
    Default_instance = null;
    super(new CborConfiguration(false, false, false, false, false, false, false, false, false, false, false), EmptySerializersModule());
    Default_instance = this;
    var tmp = this;
    tmp.u7e_1 = Cbor_0(VOID, Cbor$Default$CoseCompliant$lambda);
  }
}
class CborBuilder {
  constructor(cbor) {
    this.g7e_1 = cbor.v7e_1.x7e_1;
    this.h7e_1 = cbor.v7e_1.y7e_1;
    this.i7e_1 = cbor.v7e_1.z7e_1;
    this.j7e_1 = cbor.v7e_1.a7f_1;
    this.k7e_1 = cbor.v7e_1.b7f_1;
    this.l7e_1 = cbor.v7e_1.c7f_1;
    this.m7e_1 = cbor.v7e_1.d7f_1;
    this.n7e_1 = cbor.v7e_1.e7f_1;
    this.o7e_1 = cbor.v7e_1.f7f_1;
    this.p7e_1 = cbor.v7e_1.g7f_1;
    this.q7e_1 = cbor.v7e_1.h7f_1;
    this.r7e_1 = cbor.j10();
  }
}
class CborImpl extends Cbor {}
class CborArray {}
class CborConfiguration {
  constructor(encodeDefaults, ignoreUnknownKeys, encodeKeyTags, encodeValueTags, encodeObjectTags, verifyKeyTags, verifyValueTags, verifyObjectTags, useDefiniteLengthEncoding, preferCborLabelsOverNames, alwaysUseByteString) {
    this.x7e_1 = encodeDefaults;
    this.y7e_1 = ignoreUnknownKeys;
    this.z7e_1 = encodeKeyTags;
    this.a7f_1 = encodeValueTags;
    this.b7f_1 = encodeObjectTags;
    this.c7f_1 = verifyKeyTags;
    this.d7f_1 = verifyValueTags;
    this.e7f_1 = verifyObjectTags;
    this.f7f_1 = useDefiniteLengthEncoding;
    this.g7f_1 = preferCborLabelsOverNames;
    this.h7f_1 = alwaysUseByteString;
  }
  toString() {
    return 'CborConfiguration(encodeDefaults=' + this.x7e_1 + ', ignoreUnknownKeys=' + this.y7e_1 + ', ' + ('encodeKeyTags=' + this.z7e_1 + ', encodeValueTags=' + this.a7f_1 + ', encodeObjectTags=' + this.b7f_1 + ', ') + ('verifyKeyTags=' + this.c7f_1 + ', verifyValueTags=' + this.d7f_1 + ', verifyObjectTags=' + this.e7f_1 + ', ') + ('useDefiniteLengthEncoding=' + this.f7f_1 + ', ') + ('preferCborLabelsOverNames=' + this.g7f_1 + ', alwaysUseByteString=' + this.h7f_1 + ')');
  }
}
class CborLabel {}
class ObjectTags {}
class ValueTags {}
class KeyTags {}
class CborDecodingException extends SerializationException {
  static u7f(message) {
    var $this = this.cx(message);
    captureStack($this, $this.t7f_1);
    return $this;
  }
}
class CborReader extends AbstractDecoder {
  constructor(cbor, parser) {
    super();
    this.i7f_1 = cbor;
    this.j7f_1 = parser;
    this.k7f_1 = -1;
    this.l7f_1 = false;
    this.m7f_1 = 0;
    this.n7f_1 = false;
    this.o7f_1 = null;
  }
  b7g() {
    return this.i7f_1;
  }
  c7g(size) {
    if (size >= 0) {
      this.l7f_1 = true;
      this.k7f_1 = size;
    }
  }
  j10() {
    return this.b7g().j10();
  }
  d7g(objectTags) {
    return this.c7g(this.j7f_1.e7g(objectTags));
  }
  uz(descriptor) {
    var tmp;
    if (hasArrayTag(descriptor)) {
      tmp = new CborListReader(this.b7g(), this.j7f_1);
    } else {
      var tmp0_subject = descriptor.by();
      var tmp_0;
      var tmp_1;
      if (equals(tmp0_subject, LIST_getInstance())) {
        tmp_1 = true;
      } else {
        tmp_1 = tmp0_subject instanceof PolymorphicKind;
      }
      if (tmp_1) {
        tmp_0 = new CborListReader(this.b7g(), this.j7f_1);
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          tmp_0 = new CborMapReader(this.b7g(), this.j7f_1);
        } else {
          tmp_0 = new CborReader(this.b7g(), this.j7f_1);
        }
      }
      tmp = tmp_0;
    }
    var re = tmp;
    var objectTags = this.b7g().v7e_1.e7f_1 ? getObjectTags(descriptor) : null;
    var tmp1_safe_receiver = this.o7f_1;
    var tmp_2;
    var tmp_3 = tmp1_safe_receiver;
    if ((tmp_3 == null ? null : new ULongArray(tmp_3)) == null) {
      tmp_2 = null;
    } else {
      var tmp_4 = tmp1_safe_receiver;
      // Inline function 'kotlin.let' call
      var it = (tmp_4 == null ? null : new ULongArray(tmp_4)).yu_1;
      var tmp_5;
      var tmp_6 = objectTags;
      if ((tmp_6 == null ? null : new ULongArray(tmp_6)) == null) {
        tmp_5 = it;
      } else {
        // Inline function 'kotlin.ulongArrayOf' call
        tmp_5 = _ULongArray___init__impl__twm1l3(primitiveArrayConcat([it, objectTags]));
      }
      tmp_2 = tmp_5;
    }
    var tmp2_elvis_lhs = tmp_2;
    var tmp_7;
    var tmp_8 = tmp2_elvis_lhs;
    if ((tmp_8 == null ? null : new ULongArray(tmp_8)) == null) {
      tmp_7 = objectTags;
    } else {
      tmp_7 = tmp2_elvis_lhs;
    }
    re.d7g(tmp_7);
    return re;
  }
  vz(descriptor) {
    if (!this.l7f_1) {
      this.j7f_1.f7g();
    }
  }
  l10(descriptor) {
    var tmp;
    if (this.b7g().v7e_1.y7e_1) {
      var knownIndex;
      $l$loop: while (true) {
        if (isDone(this))
          return -1;
        var _destruct__k2r9zo = decodeElementNameWithTagsLenient(this, descriptor);
        var elemName = _destruct__k2r9zo.kl();
        var tmp_0 = _destruct__k2r9zo.ll();
        var tags = tmp_0 == null ? null : tmp_0.yu_1;
        this.m7f_1 = this.m7f_1 + 1 | 0;
        var tmp_1;
        if (elemName == null) {
          tmp_1 = null;
        } else {
          // Inline function 'kotlin.let' call
          tmp_1 = descriptor.gy(elemName);
        }
        var tmp1_elvis_lhs = tmp_1;
        var index = tmp1_elvis_lhs == null ? -3 : tmp1_elvis_lhs;
        if (index === -3) {
          this.j7f_1.g7g(tags);
        } else {
          verifyKeyTags(this, descriptor, index, tags);
          knownIndex = index;
          break $l$loop;
        }
      }
      tmp = knownIndex;
    } else {
      if (isDone(this))
        return -1;
      var _destruct__k2r9zo_0 = decodeElementNameWithTags(this, descriptor);
      var elemName_0 = _destruct__k2r9zo_0.kl();
      var tmp_2 = _destruct__k2r9zo_0.ll();
      var tags_0 = tmp_2 == null ? null : tmp_2.yu_1;
      this.m7f_1 = this.m7f_1 + 1 | 0;
      // Inline function 'kotlin.also' call
      var this_0 = getElementIndexOrThrow(descriptor, elemName_0);
      verifyKeyTags(this, descriptor, this_0, tags_0);
      tmp = this_0;
    }
    var index_0 = tmp;
    this.n7f_1 = isByteString(descriptor, index_0);
    this.o7f_1 = this.b7g().v7e_1.d7f_1 ? getValueTags(descriptor, index_0) : null;
    return index_0;
  }
  tz(deserializer) {
    var tmp;
    if ((this.n7f_1 || this.b7g().v7e_1.h7f_1) && equals(deserializer.mv(), ByteArraySerializer().mv())) {
      var tmp_0 = this.j7f_1.h7g(this.o7f_1);
      tmp = !(tmp_0 == null) ? tmp_0 : THROW_CCE();
    } else {
      this.n7f_1 = this.n7f_1 || isInlineByteString(deserializer.mv());
      tmp = super.tz(deserializer);
    }
    return tmp;
  }
  pz() {
    return this.j7f_1.i7g(this.o7f_1);
  }
  fz() {
    return !this.j7f_1.j7g();
  }
  nz() {
    return this.j7f_1.k7g(this.o7f_1);
  }
  mz() {
    return this.j7f_1.l7g(this.o7f_1);
  }
  hz() {
    return this.j7f_1.m7g(this.o7f_1);
  }
  iz() {
    return convertToByte(this.j7f_1.n7g(this.o7f_1));
  }
  jz() {
    return convertToShort(this.j7f_1.n7g(this.o7f_1));
  }
  oz() {
    return numberToChar(convertToInt(this.j7f_1.n7g(this.o7f_1)));
  }
  kz() {
    return convertToInt(this.j7f_1.n7g(this.o7f_1));
  }
  lz() {
    return this.j7f_1.n7g(this.o7f_1);
  }
  gz() {
    return this.j7f_1.o7g(this.o7f_1);
  }
  qz(enumDescriptor) {
    return getElementIndexOrThrow(enumDescriptor, this.j7f_1.i7g(this.o7f_1));
  }
}
class CborParser {
  constructor(input, verifyObjectTags) {
    this.v7f_1 = input;
    this.w7f_1 = verifyObjectTags;
    this.x7f_1 = -1;
    readByte(this);
  }
  t7g() {
    return this.x7f_1 === -1;
  }
  j7g() {
    return this.x7f_1 === 246 || this.x7f_1 === 160;
  }
  o7g(tags) {
    processTags(this, tags);
    if (this.x7f_1 === 246) {
      skipByte(this, 246);
    } else if (this.x7f_1 === 160) {
      skipByte(this, 160);
    }
    return null;
  }
  m7g(tags) {
    processTags(this, tags);
    var tmp;
    switch (this.x7f_1) {
      case 245:
        tmp = true;
        break;
      case 244:
        tmp = false;
        break;
      default:
        throw CborDecodingException_0('boolean value', this.x7f_1);
    }
    var ans = tmp;
    readByte(this);
    return ans;
  }
  u7g(tags) {
    return startSized(this, tags, 159, 128, 'array');
  }
  e7g(tags) {
    return startSized(this, tags, 191, 160, 'map');
  }
  z7f() {
    return this.x7f_1 === 255;
  }
  f7g() {
    return skipByte(this, 255);
  }
  h7g(tags) {
    processTags(this, tags);
    if (!((this.x7f_1 & 224) === 64))
      throw CborDecodingException_0('start of byte string', this.x7f_1);
    var arr = readBytes(this);
    readByte(this);
    return arr;
  }
  i7g(tags) {
    return nextTaggedString(this, tags).il_1;
  }
  a7g(expected, actual) {
    if (!contentEquals(expected, actual)) {
      var tmp;
      var tmp_0 = actual;
      if ((tmp_0 == null ? null : new ULongArray(tmp_0)) == null) {
        tmp = null;
      } else {
        tmp = contentToString(actual);
      }
      throw CborDecodingException.u7f('CBOR tags ' + tmp + ' do not match expected tags ' + contentToString(expected));
    }
  }
  y7f() {
    var collectedTags = processTags(this, null);
    if ((this.x7f_1 & 224) === 96) {
      var arr = readBytes(this);
      var ans = decodeToString(arr);
      readByte(this);
      var tmp = collectedTags;
      return new Triple(ans, null, tmp == null ? null : new ULongArray(tmp));
    } else {
      var res = readNumber(this);
      readByte(this);
      var tmp_0 = collectedTags;
      return new Triple(null, res, tmp_0 == null ? null : new ULongArray(tmp_0));
    }
  }
  n7g(tags) {
    processTags(this, tags);
    var res = readNumber(this);
    readByte(this);
    return res;
  }
  l7g(tags) {
    processTags(this, tags);
    var tmp;
    switch (this.x7f_1) {
      case 250:
        // Inline function 'kotlin.fromBits' call

        var bits = readInt(this);
        tmp = floatFromBits(bits);
        break;
      case 249:
        tmp = floatFromHalfBits(readShort(this));
        break;
      default:
        throw CborDecodingException_0('float header', this.x7f_1);
    }
    var res = tmp;
    readByte(this);
    return res;
  }
  k7g(tags) {
    processTags(this, tags);
    var tmp;
    switch (this.x7f_1) {
      case 251:
        // Inline function 'kotlin.fromBits' call

        var bits = readLong(this);
        tmp = doubleFromBits(bits);
        break;
      case 250:
        // Inline function 'kotlin.fromBits' call

        var bits_0 = readInt(this);
        tmp = floatFromBits(bits_0);
        break;
      case 249:
        tmp = floatFromHalfBits(readShort(this));
        break;
      default:
        throw CborDecodingException_0('double header', this.x7f_1);
    }
    var res = tmp;
    readByte(this);
    return res;
  }
  g7g(tags) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var lengthStack = ArrayList.s2();
    processTags(this, tags);
    $l$1: do {
      $l$0: do {
        if (this.t7g())
          throw CborDecodingException.u7f('Unexpected EOF while skipping element');
        if (isIndefinite(this)) {
          lengthStack.c2(-1);
        } else if (this.z7f()) {
          if (!(removeLastOrNull(lengthStack) === -1))
            throw CborDecodingException_0('next data item', this.x7f_1);
          prune(this, lengthStack);
        } else {
          var header = this.x7f_1 & 224;
          var length = elementLength(this);
          switch (header) {
            case 192:
              readNumber(this);
              break;
            case 128:
            case 160:
              if (length > 0)
                lengthStack.c2(length);
              else {
                prune(this, lengthStack);
              }

              break;
            default:
              this.v7f_1.v7g(length);
              prune(this, lengthStack);
              break;
          }
        }
        readByte(this);
      }
       while (false);
      // Inline function 'kotlin.collections.isNotEmpty' call
      var tmp$ret$1 = !lengthStack.o1();
    }
     while (tmp$ret$1);
  }
}
class CborListReader extends CborReader {
  constructor(cbor, decoder) {
    super(cbor, decoder);
    this.d7h_1 = 0;
  }
  d7g(objectTags) {
    var tmp0_safe_receiver = this.o7f_1;
    var tmp;
    var tmp_0 = tmp0_safe_receiver;
    if ((tmp_0 == null ? null : new ULongArray(tmp_0)) == null) {
      tmp = null;
    } else {
      var tmp_1 = tmp0_safe_receiver;
      // Inline function 'kotlin.let' call
      var it = (tmp_1 == null ? null : new ULongArray(tmp_1)).yu_1;
      var tmp_2;
      var tmp_3 = objectTags;
      if ((tmp_3 == null ? null : new ULongArray(tmp_3)) == null) {
        tmp_2 = it;
      } else {
        // Inline function 'kotlin.ulongArrayOf' call
        tmp_2 = _ULongArray___init__impl__twm1l3(primitiveArrayConcat([it, objectTags]));
      }
      tmp = tmp_2;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_4;
    var tmp_5 = tmp1_elvis_lhs;
    if ((tmp_5 == null ? null : new ULongArray(tmp_5)) == null) {
      tmp_4 = objectTags;
    } else {
      tmp_4 = tmp1_elvis_lhs;
    }
    return this.c7g(this.j7f_1.u7g(tmp_4));
  }
  l10(descriptor) {
    var tmp;
    if (!this.l7f_1 && this.j7f_1.z7f() || (this.l7f_1 && this.d7h_1 >= this.k7f_1)) {
      tmp = -1;
    } else {
      var _unary__edvuaz = this.d7h_1;
      this.d7h_1 = _unary__edvuaz + 1 | 0;
      // Inline function 'kotlin.also' call
      this.n7f_1 = isByteString(descriptor, _unary__edvuaz);
      tmp = _unary__edvuaz;
    }
    return tmp;
  }
}
class CborMapReader extends CborListReader {
  d7g(objectTags) {
    var tmp0_safe_receiver = this.o7f_1;
    var tmp;
    var tmp_0 = tmp0_safe_receiver;
    if ((tmp_0 == null ? null : new ULongArray(tmp_0)) == null) {
      tmp = null;
    } else {
      var tmp_1 = tmp0_safe_receiver;
      // Inline function 'kotlin.let' call
      var it = (tmp_1 == null ? null : new ULongArray(tmp_1)).yu_1;
      var tmp_2;
      var tmp_3 = objectTags;
      if ((tmp_3 == null ? null : new ULongArray(tmp_3)) == null) {
        tmp_2 = it;
      } else {
        // Inline function 'kotlin.ulongArrayOf' call
        tmp_2 = _ULongArray___init__impl__twm1l3(primitiveArrayConcat([it, objectTags]));
      }
      tmp = tmp_2;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_4;
    var tmp_5 = tmp1_elvis_lhs;
    if ((tmp_5 == null ? null : new ULongArray(tmp_5)) == null) {
      tmp_4 = objectTags;
    } else {
      tmp_4 = tmp1_elvis_lhs;
    }
    return this.c7g(imul(this.j7f_1.e7g(tmp_4), 2));
  }
}
class ByteArrayInput {
  constructor(array) {
    this.p7g_1 = array;
    this.q7g_1 = 0;
  }
  r7g() {
    return this.p7g_1.length - this.q7g_1 | 0;
  }
  b3x() {
    var tmp;
    if (this.q7g_1 < this.p7g_1.length) {
      var tmp_0 = this.p7g_1;
      var _unary__edvuaz = this.q7g_1;
      this.q7g_1 = _unary__edvuaz + 1 | 0;
      tmp = tmp_0[_unary__edvuaz] & 255;
    } else {
      tmp = -1;
    }
    return tmp;
  }
  s7g(b, offset, length) {
    if (offset < 0 || offset > b.length || length < 0 || length > (b.length - offset | 0)) {
      throw IndexOutOfBoundsException.se();
    }
    if (this.q7g_1 >= this.p7g_1.length) {
      return -1;
    }
    if (length === 0) {
      return 0;
    }
    var copied = (this.p7g_1.length - this.q7g_1 | 0) < length ? this.p7g_1.length - this.q7g_1 | 0 : length;
    var tmp0 = this.p7g_1;
    var tmp6 = this.q7g_1;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = this.q7g_1 + copied | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, b, offset, tmp6, endIndex);
    this.q7g_1 = this.q7g_1 + copied | 0;
    return copied;
  }
  v7g(length) {
    this.q7g_1 = this.q7g_1 + length | 0;
  }
}
//endregion
function Cbor$Default$CoseCompliant$lambda($this$Cbor) {
  $this$Cbor.g7e_1 = false;
  $this$Cbor.h7e_1 = false;
  $this$Cbor.i7e_1 = true;
  $this$Cbor.j7e_1 = true;
  $this$Cbor.k7e_1 = true;
  $this$Cbor.l7e_1 = true;
  $this$Cbor.m7e_1 = true;
  $this$Cbor.n7e_1 = true;
  $this$Cbor.o7e_1 = true;
  $this$Cbor.p7e_1 = true;
  $this$Cbor.q7e_1 = false;
  $this$Cbor.r7e_1 = EmptySerializersModule();
  return Unit_instance;
}
var Default_instance;
function Default_getInstance() {
  if (Default_instance === VOID)
    new Default();
  return Default_instance;
}
function Cbor_0(from, builderAction) {
  from = from === VOID ? Default_getInstance() : from;
  var builder = new CborBuilder(from);
  builderAction(builder);
  return new CborImpl(new CborConfiguration(builder.g7e_1, builder.h7e_1, builder.i7e_1, builder.j7e_1, builder.k7e_1, builder.l7e_1, builder.m7e_1, builder.n7e_1, builder.o7e_1, builder.p7e_1, builder.q7e_1), builder.r7e_1);
}
function CborDecodingException_0(expected, foundByte) {
  return CborDecodingException.u7f('Expected ' + expected + ', but found ' + printByte(foundByte));
}
function printByte(b) {
  var hexCode = '0123456789ABCDEF';
  // Inline function 'kotlin.text.buildString' call
  // Inline function 'kotlin.apply' call
  var this_0 = StringBuilder.m1();
  this_0.p1(charCodeAt(hexCode, b >> 4 & 15));
  this_0.p1(charCodeAt(hexCode, b & 15));
  return this_0.toString();
}
function get_normalizeBaseBits() {
  _init_properties_Decoder_kt__j583ji();
  return normalizeBaseBits;
}
var normalizeBaseBits;
function decodeElementNameWithTags($this, descriptor) {
  var _destruct__k2r9zo = $this.j7f_1.y7f();
  var elemName = _destruct__k2r9zo.kl();
  var cborLabel = _destruct__k2r9zo.ll();
  var tmp = _destruct__k2r9zo.mt();
  var tags = tmp == null ? null : tmp.yu_1;
  if (elemName == null && !(cborLabel == null)) {
    var tmp0_elvis_lhs = getElementNameForCborLabel(descriptor, cborLabel);
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      throw CborDecodingException.u7f('CborLabel unknown: ' + toString(cborLabel) + ' for ' + toString_0(descriptor));
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    elemName = tmp_0;
  }
  if (elemName == null) {
    throw CborDecodingException.u7f('Expected (tagged) string or number, got nothing for ' + toString_0(descriptor));
  }
  var tmp_1 = elemName;
  var tmp_2 = tags;
  return to(tmp_1, tmp_2 == null ? null : new ULongArray(tmp_2));
}
function decodeElementNameWithTagsLenient($this, descriptor) {
  var _destruct__k2r9zo = $this.j7f_1.y7f();
  var elemName = _destruct__k2r9zo.kl();
  var cborLabel = _destruct__k2r9zo.ll();
  var tmp = _destruct__k2r9zo.mt();
  var tags = tmp == null ? null : tmp.yu_1;
  if (elemName == null && !(cborLabel == null)) {
    elemName = getElementNameForCborLabel(descriptor, cborLabel);
  }
  var tmp_0 = elemName;
  var tmp_1 = tags;
  return to(tmp_0, tmp_1 == null ? null : new ULongArray(tmp_1));
}
function isDone($this) {
  return !$this.l7f_1 && $this.j7f_1.z7f() || ($this.l7f_1 && $this.m7f_1 >= $this.k7f_1);
}
function verifyKeyTags($this, descriptor, index, tags) {
  if ($this.b7g().v7e_1.c7f_1) {
    var tmp0_safe_receiver = getKeyTags(descriptor, index);
    var tmp = tmp0_safe_receiver;
    if ((tmp == null ? null : new ULongArray(tmp)) == null)
      null;
    else {
      var tmp_0 = tmp0_safe_receiver;
      // Inline function 'kotlin.let' call
      var keyTags = (tmp_0 == null ? null : new ULongArray(tmp_0)).yu_1;
      $this.j7f_1.a7g(keyTags, tags);
    }
  }
}
function readByte($this) {
  $this.x7f_1 = $this.v7f_1.b3x();
  return $this.x7f_1;
}
function skipByte($this, expected) {
  if (!($this.x7f_1 === expected))
    throw CborDecodingException_0('byte ' + printByte(expected), $this.x7f_1);
  readByte($this);
}
function startSized($this, tags, unboundedHeader, boundedHeaderMask, collectionType) {
  processTags($this, tags);
  if ($this.x7f_1 === unboundedHeader) {
    skipByte($this, unboundedHeader);
    return -1;
  }
  if (!(($this.x7f_1 & 224) === boundedHeaderMask))
    throw CborDecodingException_0('start of ' + collectionType, $this.x7f_1);
  var size = convertToInt(readNumber($this));
  readByte($this);
  return size;
}
function nextTaggedString($this, tags) {
  var collectedTags = processTags($this, tags);
  if (!(($this.x7f_1 & 224) === 96))
    throw CborDecodingException_0('start of string', $this.x7f_1);
  var arr = readBytes($this);
  var ans = decodeToString(arr);
  readByte($this);
  var tmp = collectedTags;
  return to(ans, tmp == null ? null : new ULongArray(tmp));
}
function readBytes($this) {
  var tmp;
  if (($this.x7f_1 & 31) === 31) {
    readByte($this);
    tmp = readIndefiniteLengthBytes($this);
  } else {
    var strLen = convertToInt(readNumber($this));
    tmp = readExactNBytes($this, $this.v7f_1, strLen);
  }
  return tmp;
}
function processTags($this, tags) {
  var index = 0;
  // Inline function 'kotlin.collections.mutableListOf' call
  var collectedTags = ArrayList.s2();
  while (($this.x7f_1 & 224) === 192) {
    // Inline function 'kotlin.toULong' call
    var this_0 = readNumber($this);
    var readTag = _ULong___init__impl__c78o9k(this_0);
    // Inline function 'kotlin.collections.plusAssign' call
    var element = new ULong(readTag);
    collectedTags.c2(element);
    if ($this.w7f_1) {
      var tmp = tags;
      if ((tmp == null ? null : new ULongArray(tmp)) == null)
        null;
      else {
        var tmp_0 = tags;
        // Inline function 'kotlin.let' call
        var it = (tmp_0 == null ? null : new ULongArray(tmp_0)).yu_1;
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        if (_unary__edvuaz >= _ULongArray___get_size__impl__ju6dtr(it))
          throw CborDecodingException.u7f('More tags found than the ' + _ULongArray___get_size__impl__ju6dtr(it) + ' tags specified');
      }
    }
    readByte($this);
  }
  var tmp_1 = collectedTags.o1() ? null : toULongArray(collectedTags);
  // Inline function 'kotlin.also' call
  var this_1 = tmp_1 == null ? null : new ULongArray(tmp_1);
  var tmp_2 = this_1;
  var collected = tmp_2 == null ? null : tmp_2.yu_1;
  var tmp_3 = tags;
  if ((tmp_3 == null ? null : new ULongArray(tmp_3)) == null)
    null;
  else {
    var tmp_4 = tags;
    // Inline function 'kotlin.let' call
    var it_0 = (tmp_4 == null ? null : new ULongArray(tmp_4)).yu_1;
    if ($this.w7f_1) {
      $this.a7g(it_0, collected);
    } else {
      if (collectedTags.q2() < _ULongArray___get_size__impl__ju6dtr(it_0) || !equals(collectedTags.d4(0, _ULongArray___get_size__impl__ju6dtr(it_0)), asList(it_0)))
        throw CborDecodingException.u7f('CBOR tags ' + toString_0(collectedTags) + ' do not start with specified tags ' + ULongArray__toString_impl_wqk1p5(it_0));
    }
  }
  var tmp_5 = this_1;
  return tmp_5 == null ? null : tmp_5.yu_1;
}
function readNumber($this) {
  var value = $this.x7f_1 & 31;
  var negative = ($this.x7f_1 & 224) === 32;
  var bytesToRead;
  switch (value) {
    case 24:
      bytesToRead = 1;
      break;
    case 25:
      bytesToRead = 2;
      break;
    case 26:
      bytesToRead = 4;
      break;
    case 27:
      bytesToRead = 8;
      break;
    default:
      bytesToRead = 0;
      break;
  }
  if (bytesToRead === 0) {
    return negative ? negate(fromInt(value + 1 | 0)) : fromInt(value);
  }
  var res = readExact($this, $this.v7f_1, bytesToRead);
  var tmp;
  if (negative) {
    // Inline function 'kotlin.Long.plus' call
    var tmp$ret$0 = add(res, fromInt(1));
    tmp = negate(tmp$ret$0);
  } else {
    tmp = res;
  }
  return tmp;
}
function readExact($this, _this__u8e3s4, bytes) {
  var arr = readExactNBytes($this, _this__u8e3s4, bytes);
  var result = 0n;
  var inductionVariable = 0;
  if (inductionVariable < bytes)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      result = shiftLeft(result, 8) | fromInt(arr[i] & 255);
    }
     while (inductionVariable < bytes);
  return result;
}
function readExactNBytes($this, _this__u8e3s4, bytesCount) {
  if (bytesCount > _this__u8e3s4.r7g()) {
    // Inline function 'kotlin.error' call
    var message = 'Unexpected EOF, available ' + _this__u8e3s4.r7g() + ' bytes, requested: ' + bytesCount;
    throw IllegalStateException.o(toString_0(message));
  }
  var array = new Int8Array(bytesCount);
  _this__u8e3s4.s7g(array, 0, bytesCount);
  return array;
}
function readLong($this) {
  var result = 0n;
  var inductionVariable = 0;
  if (inductionVariable <= 7)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var byte = $this.v7f_1.b3x();
      result = shiftLeft(result, 8) | fromInt(byte);
    }
     while (inductionVariable <= 7);
  return result;
}
function readShort($this) {
  var highByte = $this.v7f_1.b3x();
  var lowByte = $this.v7f_1.b3x();
  return toShort(highByte << 8 | lowByte);
}
function readInt($this) {
  var result = 0;
  var inductionVariable = 0;
  if (inductionVariable <= 3)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var byte = $this.v7f_1.b3x();
      result = result << 8 | byte;
    }
     while (inductionVariable <= 3);
  return result;
}
function prune($this, lengthStack) {
  var inductionVariable = get_lastIndex(lengthStack);
  if (0 <= inductionVariable)
    $l$loop_0: do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + -1 | 0;
      switch (lengthStack.p2(i)) {
        case -1:
          break $l$loop_0;
        case 1:
          lengthStack.u4(i);
          break;
        default:
          lengthStack.s4(i, lengthStack.p2(i) - 1 | 0);
          break $l$loop_0;
      }
    }
     while (0 <= inductionVariable);
}
function isIndefinite($this) {
  var majorType = $this.x7f_1 & 224;
  var value = $this.x7f_1 & 31;
  return value === 31 && (majorType === 128 || majorType === 160 || majorType === 64 || majorType === 96);
}
function elementLength($this) {
  var majorType = $this.x7f_1 & 224;
  var additionalInformation = $this.x7f_1 & 31;
  var tmp;
  switch (majorType) {
    case 64:
    case 96:
    case 128:
      tmp = convertToInt(readNumber($this));
      break;
    case 160:
      tmp = imul(convertToInt(readNumber($this)), 2);
      break;
    default:
      switch (additionalInformation) {
        case 24:
          tmp = 1;
          break;
        case 25:
          tmp = 2;
          break;
        case 26:
          tmp = 4;
          break;
        case 27:
          tmp = 8;
          break;
        default:
          tmp = 0;
          break;
      }

      break;
  }
  return tmp;
}
function readIndefiniteLengthBytes($this) {
  // Inline function 'kotlin.collections.mutableListOf' call
  var byteStrings = ArrayList.s2();
  do {
    byteStrings.c2(readBytes($this));
    readByte($this);
  }
   while (!$this.z7f());
  return flatten(byteStrings);
}
function getElementIndexOrThrow(_this__u8e3s4, name) {
  _init_properties_Decoder_kt__j583ji();
  var index = _this__u8e3s4.gy(name);
  if (index === -3)
    throw SerializationException.cx(_this__u8e3s4.nw() + " does not contain element with name '" + name + '.' + " You can enable 'CborBuilder.ignoreUnknownKeys' property to ignore unknown keys");
  return index;
}
function getElementNameForCborLabel(_this__u8e3s4, label) {
  _init_properties_Decoder_kt__j583ji();
  var tmp0 = get_elementNames(_this__u8e3s4);
  var tmp$ret$1;
  $l$block: {
    // Inline function 'kotlin.collections.firstOrNull' call
    var _iterator__ex2g4s = tmp0.q1();
    while (_iterator__ex2g4s.r1()) {
      var element = _iterator__ex2g4s.s1();
      if (getCborLabel(_this__u8e3s4, _this__u8e3s4.gy(element)) === label) {
        tmp$ret$1 = element;
        break $l$block;
      }
    }
    tmp$ret$1 = null;
  }
  return tmp$ret$1;
}
function floatFromHalfBits(bits) {
  _init_properties_Decoder_kt__j583ji();
  var intBits = bits;
  var negative = !((intBits & 32768) === 0);
  var halfExp = intBits >> 10 & 31;
  var halfMant = intBits & 1023;
  var exp;
  var mant;
  switch (halfExp) {
    case 31:
      exp = 255;
      mant = halfMant;
      break;
    case 0:
      if (halfMant === 0) {
        mant = 0;
        exp = 0;
      } else {
        // Inline function 'kotlin.fromBits' call
        var bits_0 = get_normalizeBaseBits() + halfMant | 0;
        var res = floatFromBits(bits_0);
        res = res - 0.5;
        return negative ? -res : res;
      }

      break;
    default:
      exp = halfExp + 112 | 0;
      mant = halfMant;
      break;
  }
  // Inline function 'kotlin.fromBits' call
  var bits_1 = exp << 23 | mant << 13;
  var res_0 = floatFromBits(bits_1);
  return negative ? -res_0 : res_0;
}
function flatten(_this__u8e3s4) {
  _init_properties_Decoder_kt__j583ji();
  // Inline function 'kotlin.collections.sumOf' call
  var sum = 0;
  var _iterator__ex2g4s = _this__u8e3s4.q1();
  while (_iterator__ex2g4s.r1()) {
    var element = _iterator__ex2g4s.s1();
    var tmp = sum;
    sum = tmp + element.length | 0;
  }
  var tmp$ret$1 = sum;
  var output = new Int8Array(tmp$ret$1);
  var position = 0;
  var _iterator__ex2g4s_0 = _this__u8e3s4.q1();
  while (_iterator__ex2g4s_0.r1()) {
    var chunk = _iterator__ex2g4s_0.s1();
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset = position;
    var endIndex = chunk.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = chunk;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp_0, output, destinationOffset, 0, endIndex);
    position = position + chunk.length | 0;
  }
  return output;
}
var properties_initialized_Decoder_kt_z73zkc;
function _init_properties_Decoder_kt__j583ji() {
  if (!properties_initialized_Decoder_kt_z73zkc) {
    properties_initialized_Decoder_kt_z73zkc = true;
    normalizeBaseBits = toBits(0.5);
  }
}
function hasArrayTag(_this__u8e3s4) {
  var tmp0 = _this__u8e3s4.ey();
  var tmp$ret$0;
  $l$block_0: {
    // Inline function 'kotlin.collections.any' call
    var tmp;
    if (isInterface(tmp0, Collection)) {
      tmp = tmp0.o1();
    } else {
      tmp = false;
    }
    if (tmp) {
      tmp$ret$0 = false;
      break $l$block_0;
    }
    var _iterator__ex2g4s = tmp0.q1();
    while (_iterator__ex2g4s.r1()) {
      var element = _iterator__ex2g4s.s1();
      if (element instanceof CborArray) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
    }
    tmp$ret$0 = false;
  }
  return tmp$ret$0;
}
function getObjectTags(_this__u8e3s4) {
  // Inline function 'kotlin.collections.filterIsInstance' call
  var tmp0 = _this__u8e3s4.ey();
  // Inline function 'kotlin.collections.filterIsInstanceTo' call
  var destination = ArrayList.s2();
  var _iterator__ex2g4s = tmp0.q1();
  while (_iterator__ex2g4s.r1()) {
    var element = _iterator__ex2g4s.s1();
    if (element instanceof ObjectTags) {
      destination.c2(element);
    }
  }
  var tmp0_safe_receiver = firstOrNull(destination);
  return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.m7h_1;
}
function isByteString(_this__u8e3s4, index) {
  // Inline function 'kotlin.collections.find' call
  var tmp0 = _this__u8e3s4.hy(index);
  var tmp$ret$1;
  $l$block: {
    // Inline function 'kotlin.collections.firstOrNull' call
    var _iterator__ex2g4s = tmp0.q1();
    while (_iterator__ex2g4s.r1()) {
      var element = _iterator__ex2g4s.s1();
      if (element instanceof ByteString) {
        tmp$ret$1 = element;
        break $l$block;
      }
    }
    tmp$ret$1 = null;
  }
  return !(tmp$ret$1 == null);
}
function getValueTags(_this__u8e3s4, index) {
  // Inline function 'kotlinx.serialization.cbor.internal.findAnnotation' call
  var tmp0 = _this__u8e3s4.hy(index);
  var tmp$ret$1;
  $l$block: {
    // Inline function 'kotlin.collections.firstOrNull' call
    var _iterator__ex2g4s = tmp0.q1();
    while (_iterator__ex2g4s.r1()) {
      var element = _iterator__ex2g4s.s1();
      if (element instanceof ValueTags) {
        tmp$ret$1 = element;
        break $l$block;
      }
    }
    tmp$ret$1 = null;
  }
  var tmp = tmp$ret$1;
  var tmp0_safe_receiver = (tmp == null ? true : tmp instanceof ValueTags) ? tmp : THROW_CCE();
  return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n7h_1;
}
function isInlineByteString(_this__u8e3s4) {
  return _this__u8e3s4.cy() && isByteString(_this__u8e3s4, 0);
}
function getKeyTags(_this__u8e3s4, index) {
  // Inline function 'kotlinx.serialization.cbor.internal.findAnnotation' call
  var tmp0 = _this__u8e3s4.hy(index);
  var tmp$ret$1;
  $l$block: {
    // Inline function 'kotlin.collections.firstOrNull' call
    var _iterator__ex2g4s = tmp0.q1();
    while (_iterator__ex2g4s.r1()) {
      var element = _iterator__ex2g4s.s1();
      if (element instanceof KeyTags) {
        tmp$ret$1 = element;
        break $l$block;
      }
    }
    tmp$ret$1 = null;
  }
  var tmp = tmp$ret$1;
  var tmp0_safe_receiver = (tmp == null ? true : tmp instanceof KeyTags) ? tmp : THROW_CCE();
  return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.o7h_1;
}
function getCborLabel(_this__u8e3s4, index) {
  // Inline function 'kotlinx.serialization.cbor.internal.findAnnotation' call
  var tmp0 = _this__u8e3s4.hy(index);
  var tmp$ret$1;
  $l$block: {
    // Inline function 'kotlin.collections.firstOrNull' call
    var _iterator__ex2g4s = tmp0.q1();
    while (_iterator__ex2g4s.r1()) {
      var element = _iterator__ex2g4s.s1();
      if (element instanceof CborLabel) {
        tmp$ret$1 = element;
        break $l$block;
      }
    }
    tmp$ret$1 = null;
  }
  var tmp = tmp$ret$1;
  var tmp0_safe_receiver = (tmp == null ? true : tmp instanceof CborLabel) ? tmp : THROW_CCE();
  return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.p7h_1;
}
//region block: post-declaration
initMetadataForClass(ByteString, 'ByteString');
initMetadataForClass(Cbor, 'Cbor');
initMetadataForObject(Default, 'Default');
initMetadataForClass(CborBuilder, 'CborBuilder');
initMetadataForClass(CborImpl, 'CborImpl');
initMetadataForClass(CborArray, 'CborArray');
initMetadataForClass(CborConfiguration, 'CborConfiguration');
initMetadataForClass(CborLabel, 'CborLabel');
initMetadataForClass(ObjectTags, 'ObjectTags');
initMetadataForClass(ValueTags, 'ValueTags');
initMetadataForClass(KeyTags, 'KeyTags');
initMetadataForClass(CborDecodingException, 'CborDecodingException');
initMetadataForClass(CborReader, 'CborReader', VOID, VOID, [AbstractDecoder, Decoder]);
initMetadataForClass(CborParser, 'CborParser');
initMetadataForClass(CborListReader, 'CborListReader');
initMetadataForClass(CborMapReader, 'CborMapReader');
initMetadataForClass(ByteArrayInput, 'ByteArrayInput');
//endregion
//region block: exports
export {
  Cbor_0 as Cbor2f4m7hu7pld6l,
};
//endregion

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-cbor.mjs.map
