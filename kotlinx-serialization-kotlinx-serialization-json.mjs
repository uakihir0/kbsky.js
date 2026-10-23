import {
  EmptySerializersModule991ju6pz9b79 as EmptySerializersModule,
  SerializationExceptioneqrdve3ts2n9 as SerializationException,
  SEALED_getInstance2pc3convncp73 as SEALED_getInstance,
  buildSerialDescriptor2873qmkp8r2ib as buildSerialDescriptor,
  serializerOrNull294cbc318ws50 as serializerOrNull,
  KSerializerzf77vz1967fq as KSerializer,
  Decoder23nde051s631g as Decoder,
  CompositeDecoder2tzm7wpwkr0og as CompositeDecoder,
  SerializerFactory1qv9hivitncuv as SerializerFactory,
  serializer1x79l67jvwntn as serializer,
  InlinePrimitiveDescriptor3i6ccn1a4fw94 as InlinePrimitiveDescriptor,
  SerializableWithd2dap36updxd as SerializableWith,
  MapSerializer11kmegt3g5c1g as MapSerializer,
  SerialDescriptor2pelqekb5ic3a as SerialDescriptor,
  STRING_getInstance1ov5zayfui8fl as STRING_getInstance,
  ListSerializer1hxuk9dx5n9du as ListSerializer,
  ENUM_getInstance1f3d4zr61j5rk as ENUM_getInstance,
  PrimitiveSerialDescriptor3egfp53lutxj2 as PrimitiveSerialDescriptor,
  serializer2lw83vwvpnyms as serializer_0,
  get_isNullable36pbikm8xb7bz as get_isNullable,
  get_isInline5x26qrhi9qs6 as get_isInline,
  get_annotationshjxdbdcl8kmv as get_annotations,
  Encoderqvmrpqtq8hnu as Encoder,
  CompositeEncoderknecpkexzn3v as CompositeEncoder,
  ElementMarker33ojvsajwmzts as ElementMarker,
  CLASS_getInstance3ax1g1upf6nuo as CLASS_getInstance,
  jsonCachedSerialNameslxufy2gu43jt as jsonCachedSerialNames,
  LIST_getInstance2xmlsct1exo3w as LIST_getInstance,
  CONTEXTUAL_getInstance2bsxm25kydylq as CONTEXTUAL_getInstance,
  PolymorphicKindla9gurooefwb as PolymorphicKind,
  PrimitiveKindndgbuh6is7ze as PrimitiveKind,
  MAP_getInstance173r3f2itu405 as MAP_getInstance,
  ENUMlmq49cvwy4ow as ENUM,
  contextual3hpp1gupsu4al as contextual,
  SerializersModuleCollector3dddz14wd7brg as SerializersModuleCollector,
  AbstractDecoder35guh02ubh2hm as AbstractDecoder,
  AbstractPolymorphicSerializer1ccxwp48nfy58 as AbstractPolymorphicSerializer,
  DeserializationStrategy1z3z5pj9f7zc8 as DeserializationStrategy,
  findPolymorphicSerializer1nm87hvemahcj as findPolymorphicSerializer,
  missingFieldExceptionWithNewMessage2gqddjx5jxge9 as missingFieldExceptionWithNewMessage,
  MissingFieldException24tqif29emcmi as MissingFieldException,
  AbstractEncoder2gxtu3xmy3f8j as AbstractEncoder,
  OBJECT_getInstance2hwgzvvdc8p80 as OBJECT_getInstance,
  findPolymorphicSerializerk638ixyjovk5 as findPolymorphicSerializer_0,
  SerializationStrategyh6ouydnm6hci as SerializationStrategy,
  serializer3ikrxnm8b29d6 as serializer_1,
  serializer36584sjyg5661 as serializer_2,
  serializer1q7c5q67ysppr as serializer_3,
  NamedValueDecoderzk26ztf92xbq as NamedValueDecoder,
  NamedValueEncoder1lca9edk1lf89 as NamedValueEncoder,
  getContextualDescriptor2n1gf3b895yb8 as getContextualDescriptor,
} from './kotlinx-serialization-kotlinx-serialization-core.mjs';
import {
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  VOID3gxj6tk5isa35 as VOID,
  Unit_instance3vdlo4e4f5ggx as Unit_instance,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  IllegalArgumentException2asla15b5jaob as IllegalArgumentException,
  toString1pkumu07cwy4m as toString,
  charSequenceLength3278n89t01tmv as charSequenceLength,
  charSequenceGet1vxk1y5n17t1z as charSequenceGet,
  _Char___init__impl__6a9atx2yltdocdrxs4d as _Char___init__impl__6a9atx,
  equals2au1ep9vhcato as equals,
  toString30pk9tzaqopn as toString_0,
  Enum3alwj03lh1n41 as Enum,
  getKClassFromExpression348iqjl4fnx2f as getKClassFromExpression,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  isInterface3d6p8outrmvmk as isInterface,
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  StringBuildermazzzhj6kkai as StringBuilder,
  hashCodeq5arwsb9dgti as hashCode,
  joinToString1cxrrlmo0chqs as joinToString,
  KtMap140uvy3s5zad8 as KtMap,
  numberRangeToNumber25vse2rgp6rs8 as numberRangeToNumber,
  ClosedRangehokgr73im9z3 as ClosedRange,
  contains2c50nlxg7en7o as contains,
  convertToInty04h231mmjoh as convertToInt,
  NumberFormatException3bgsm2s9o4t55 as NumberFormatException,
  toDoubleOrNullkxwozihadygj as toDoubleOrNull,
  toDouble1kn912gjoizjp as toDouble,
  IllegalStateExceptionkoljg5n0nrlr as IllegalStateException,
  KtList3hktaavzmj137 as KtList,
  getBooleanHashCode1bbj3u6b3v0a7 as getBooleanHashCode,
  getStringHashCode26igk1bx568vk as getStringHashCode,
  StringCompanionObject_instance3btc7up7fjjpg as StringCompanionObject_instance,
  LinkedHashMap1zhqxkxv3xnkl as LinkedHashMap,
  noWhenBranchMatchedException2a6r7ubxgky5j as noWhenBranchMatchedException,
  toLongOrNullutqivezb0wx1 as toLongOrNull,
  toULongOrNullojoyxi0i9tgj as toULongOrNull,
  ULong3f9k7s38t3rfp as ULong,
  Companion_getInstancehe6v7kxreu2f as Companion_getInstance,
  _ULong___get_data__impl__fggpzb35t7vg7og3i8u as _ULong___get_data__impl__fggpzb,
  toBooleanStrictOrNull2j0md398tkvbj as toBooleanStrictOrNull,
  KProperty1ca4yb4wlo496 as KProperty1,
  getPropertyCallableRef3hckxc0xueiaj as getPropertyCallableRef,
  constructCallableReference23y65rf941mch as constructCallableReference,
  lazy2hsh8ze7j6ikd as lazy,
  protoOf180f3jzyo7rfj as protoOf,
  captureStack1fzi4aczwc4hg as captureStack,
  fromInt2ii0rejb1w62w as fromInt,
  _UInt___init__impl__l7qpdl2rn8hu5x5mgv2 as _UInt___init__impl__l7qpdl,
  UInt__toString_impl_dbgl21yokvu77tk3i9 as UInt__toString_impl_dbgl21,
  _ULong___init__impl__c78o9k3fkiaf1q5xsf7 as _ULong___init__impl__c78o9k,
  ULong__toString_impl_f9au7km926x5dlwl9j as ULong__toString_impl_f9au7k,
  _UByte___init__impl__g9hnc430zp6cgd9f0jq as _UByte___init__impl__g9hnc4,
  UByte__toString_impl_v72jg7h00k2smi73g as UByte__toString_impl_v72jg,
  _UShort___init__impl__jigrne1zu56ujvuii2n as _UShort___init__impl__jigrne,
  UShort__toString_impl_edaoee309dhgco6do74 as UShort__toString_impl_edaoee,
  charSequenceSubSequence1iwpdba8s3jc7 as charSequenceSubSequence,
  coerceAtLeast2bkz8m9ik7hep as coerceAtLeast,
  coerceAtMost322komnqp70ag as coerceAtMost,
  isBlank1dvkhjjvox3p0 as isBlank,
  Collection1k04j3hzsbod0 as Collection,
  toSet1glep2u1u9tcb as toSet,
  ArrayList3it5z8td81qkl as ArrayList,
  singleOrNullrknfaxokm1sl as singleOrNull,
  emptyMapr06gerzljqtm as emptyMap,
  LinkedHashSet2tkztfx86kyx2 as LinkedHashSet,
  getValue48kllevslyh6 as getValue,
  copyOf2ng0t8oizk6it as copyOf,
  arrayCopytctsywo3h7gj as arrayCopy,
  DeepRecursiveFunction3r49v8igsve1g as DeepRecursiveFunction,
  invoke246lvi6tzooz1 as invoke,
  getKClass3t8tygqu4lcxf as getKClass,
  ensureNotNull1e947j3ixpazm as ensureNotNull,
  substringBefore3n7kj60w69hju as substringBefore,
  removeSuffix3d61x5lsuvuho as removeSuffix,
  substringAfter1hku067gwr5ve as substringAfter,
  contains3ue2qo8xhmpf1 as contains_0,
  plus17rl43at52ays as plus,
  convertToByte2t4hntblnhq2k as convertToByte,
  convertToShortn6n5n7ruahkm as convertToShort,
  isFinite1tx0gn65nl9tj as isFinite,
  isFinite2t9l5a275mxm6 as isFinite_0,
  charCodeAt1yspne1d8erbm as charCodeAt,
  toUInt21lx0mz8wkp7c as toUInt,
  _UInt___get_data__impl__f0vqqw18g8a2o14g87q as _UInt___get_data__impl__f0vqqw,
  toULong266mnyksbttkw as toULong,
  toUByteh6p4wmqswkrs as toUByte,
  _UByte___get_data__impl__jof9qryxuf3cmdpzyk as _UByte___get_data__impl__jof9qr,
  toUShort7yqspfnhrot4 as toUShort,
  _UShort___get_data__impl__g02451joe1vsk2vach as _UShort___get_data__impl__g0245,
  toString336ienavfnzn0 as toString_1,
  Companion_getInstance2bqk1h54tdzgh as Companion_getInstance_0,
  Companion_getInstance29en1y99grgx1 as Companion_getInstance_1,
  Companion_getInstancehpp5w6ty1u0b as Companion_getInstance_2,
  setOf45ia9pnfhe90 as setOf,
  Char__toInt_impl_vasixd1ka89vowck9tn as Char__toInt_impl_vasixd,
  equals2v6cggk171b6e as equals_0,
  numberToChar93r9buh19yek as numberToChar,
  toByte4i43936u611k as toByte,
  startsWith26w8qjqapeeq6 as startsWith,
  single29ec4rh52687r as single,
  Char19o2r8palgjof as Char,
  emptySetcxexqki71qfa as emptySet,
  plus1ogy4liedzq5j as plus_0,
  toInt2q8uldh7sc951 as toInt,
  toList3jhuyej2anx2q as toList,
  throwUninitializedPropertyAccessException14fok093f3k3t as throwUninitializedPropertyAccessException,
  enumEntries20mr21zbe3az4 as enumEntries,
  toNumber2e2hj9zugjwi2 as toNumber,
  last1vo29oleiqj36 as last,
  removeLast3759euu1xvfa3 as removeLast,
  lastIndexOf2d52xhix5ymjr as lastIndexOf,
  Char__minus_impl_a2frrh370khreoakmi6 as Char__minus_impl_a2frrh,
  multiply2k9eolhnz1bjv as multiply,
  add2suhfggl4zvkk as add,
  subtract2orl8z9upxd9l as subtract,
  numberToLong2pakxeg38estk as numberToLong,
  negate13xrbakfwasjy as negate,
  charArray2ujmm1qusno00 as charArray,
  indexOfwa4w6635jewi as indexOf,
  indexOf1xbs558u7wr52 as indexOf_0,
  substringiqarkczpya5m as substring,
  HashMap1a0ld5kgwhmhv as HashMap,
} from './kotlin-kotlin-stdlib.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
class Json {
  constructor(configuration, serializersModule) {
    Default_getInstance();
    this.j1i_1 = configuration;
    this.k1i_1 = serializersModule;
    this.l1i_1 = new DescriptorSchemaCache();
  }
  l10() {
    return this.k1i_1;
  }
  m1i(serializer, value) {
    var result = new JsonToStringWriter();
    try {
      encodeByWriter(this, result, serializer, value);
      return result.toString();
    }finally {
      result.s1i();
    }
  }
  n1i(deserializer, string) {
    var lexer = StringJsonLexer_0(this, string);
    var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.mv(), null);
    var result = input.vz(deserializer);
    lexer.g1j();
    return result;
  }
  o1i(serializer, value) {
    return writeJson(this, value, serializer);
  }
  p1i(deserializer, element) {
    return readJson(this, element, deserializer);
  }
  q1i(string) {
    return this.n1i(JsonElementSerializer_getInstance(), string);
  }
}
class Default extends Json {
  constructor() {
    Default_instance = null;
    super(new JsonConfiguration(), EmptySerializersModule());
    Default_instance = this;
  }
}
class JsonBuilder {
  constructor(json) {
    this.h1j_1 = json.j1i_1.b1k_1;
    this.i1j_1 = json.j1i_1.g1k_1;
    this.j1j_1 = json.j1i_1.c1k_1;
    this.k1j_1 = json.j1i_1.d1k_1;
    this.l1j_1 = json.j1i_1.f1k_1;
    this.m1j_1 = json.j1i_1.h1k_1;
    this.n1j_1 = json.j1i_1.i1k_1;
    this.o1j_1 = json.j1i_1.k1k_1;
    this.p1j_1 = json.j1i_1.r1k_1;
    this.q1j_1 = json.j1i_1.m1k_1;
    this.r1j_1 = json.j1i_1.n1k_1;
    this.s1j_1 = json.j1i_1.o1k_1;
    this.t1j_1 = json.j1i_1.p1k_1;
    this.u1j_1 = json.j1i_1.q1k_1;
    this.v1j_1 = json.j1i_1.l1k_1;
    this.w1j_1 = json.j1i_1.e1k_1;
    this.x1j_1 = json.j1i_1.j1k_1;
    this.y1j_1 = json.l10();
    this.z1j_1 = json.j1i_1.s1k_1;
  }
  a1k() {
    if (this.x1j_1) {
      // Inline function 'kotlin.require' call
      if (!(this.o1j_1 === 'type')) {
        var message = 'Class discriminator should not be specified when array polymorphism is specified';
        throw IllegalArgumentException.h2(toString(message));
      }
      // Inline function 'kotlin.require' call
      if (!this.p1j_1.equals(ClassDiscriminatorMode_POLYMORPHIC_getInstance())) {
        var message_0 = 'useArrayPolymorphism option can only be used if classDiscriminatorMode in a default POLYMORPHIC state.';
        throw IllegalArgumentException.h2(toString(message_0));
      }
    }
    if (!this.l1j_1) {
      // Inline function 'kotlin.require' call
      if (!(this.m1j_1 === '    ')) {
        var message_1 = 'Indent should not be specified when default printing mode is used';
        throw IllegalArgumentException.h2(toString(message_1));
      }
    } else if (!(this.m1j_1 === '    ')) {
      var tmp0 = this.m1j_1;
      var tmp$ret$6;
      $l$block: {
        // Inline function 'kotlin.text.all' call
        var inductionVariable = 0;
        while (inductionVariable < charSequenceLength(tmp0)) {
          var element = charSequenceGet(tmp0, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          if (!(element === _Char___init__impl__6a9atx(32) || element === _Char___init__impl__6a9atx(9) || element === _Char___init__impl__6a9atx(13) || element === _Char___init__impl__6a9atx(10))) {
            tmp$ret$6 = false;
            break $l$block;
          }
        }
        tmp$ret$6 = true;
      }
      var allWhitespaces = tmp$ret$6;
      // Inline function 'kotlin.require' call
      if (!allWhitespaces) {
        var message_2 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.m1j_1;
        throw IllegalArgumentException.h2(toString(message_2));
      }
    }
    return new JsonConfiguration(this.h1j_1, this.j1j_1, this.k1j_1, this.w1j_1, this.l1j_1, this.i1j_1, this.m1j_1, this.n1j_1, this.x1j_1, this.o1j_1, this.v1j_1, this.q1j_1, this.r1j_1, this.s1j_1, this.t1j_1, this.u1j_1, this.p1j_1, this.z1j_1);
  }
}
class JsonImpl extends Json {
  constructor(configuration, module_0) {
    super(configuration, module_0);
    validateConfiguration(this);
  }
}
class JsonClassDiscriminator {}
class JsonIgnoreUnknownKeys {}
class JsonNames {}
class JsonConfiguration {
  constructor(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, namingStrategy, decodeEnumsCaseInsensitive, allowTrailingComma, allowComments, classDiscriminatorMode, exceptionsWithDebugInfo) {
    encodeDefaults = encodeDefaults === VOID ? false : encodeDefaults;
    ignoreUnknownKeys = ignoreUnknownKeys === VOID ? false : ignoreUnknownKeys;
    isLenient = isLenient === VOID ? false : isLenient;
    allowStructuredMapKeys = allowStructuredMapKeys === VOID ? false : allowStructuredMapKeys;
    prettyPrint = prettyPrint === VOID ? false : prettyPrint;
    explicitNulls = explicitNulls === VOID ? true : explicitNulls;
    prettyPrintIndent = prettyPrintIndent === VOID ? '    ' : prettyPrintIndent;
    coerceInputValues = coerceInputValues === VOID ? false : coerceInputValues;
    useArrayPolymorphism = useArrayPolymorphism === VOID ? false : useArrayPolymorphism;
    classDiscriminator = classDiscriminator === VOID ? 'type' : classDiscriminator;
    allowSpecialFloatingPointValues = allowSpecialFloatingPointValues === VOID ? false : allowSpecialFloatingPointValues;
    useAlternativeNames = useAlternativeNames === VOID ? true : useAlternativeNames;
    namingStrategy = namingStrategy === VOID ? null : namingStrategy;
    decodeEnumsCaseInsensitive = decodeEnumsCaseInsensitive === VOID ? false : decodeEnumsCaseInsensitive;
    allowTrailingComma = allowTrailingComma === VOID ? false : allowTrailingComma;
    allowComments = allowComments === VOID ? false : allowComments;
    classDiscriminatorMode = classDiscriminatorMode === VOID ? ClassDiscriminatorMode_POLYMORPHIC_getInstance() : classDiscriminatorMode;
    exceptionsWithDebugInfo = exceptionsWithDebugInfo === VOID ? true : exceptionsWithDebugInfo;
    this.b1k_1 = encodeDefaults;
    this.c1k_1 = ignoreUnknownKeys;
    this.d1k_1 = isLenient;
    this.e1k_1 = allowStructuredMapKeys;
    this.f1k_1 = prettyPrint;
    this.g1k_1 = explicitNulls;
    this.h1k_1 = prettyPrintIndent;
    this.i1k_1 = coerceInputValues;
    this.j1k_1 = useArrayPolymorphism;
    this.k1k_1 = classDiscriminator;
    this.l1k_1 = allowSpecialFloatingPointValues;
    this.m1k_1 = useAlternativeNames;
    this.n1k_1 = namingStrategy;
    this.o1k_1 = decodeEnumsCaseInsensitive;
    this.p1k_1 = allowTrailingComma;
    this.q1k_1 = allowComments;
    this.r1k_1 = classDiscriminatorMode;
    this.s1k_1 = exceptionsWithDebugInfo;
  }
  toString() {
    return 'JsonConfiguration(encodeDefaults=' + this.b1k_1 + ', ignoreUnknownKeys=' + this.c1k_1 + ', isLenient=' + this.d1k_1 + ', ' + ('allowStructuredMapKeys=' + this.e1k_1 + ', prettyPrint=' + this.f1k_1 + ', explicitNulls=' + this.g1k_1 + ', ') + ("prettyPrintIndent='" + this.h1k_1 + "', coerceInputValues=" + this.i1k_1 + ', useArrayPolymorphism=' + this.j1k_1 + ', ') + ("classDiscriminator='" + this.k1k_1 + "', allowSpecialFloatingPointValues=" + this.l1k_1 + ', ') + ('useAlternativeNames=' + this.m1k_1 + ', namingStrategy=' + toString_0(this.n1k_1) + ', decodeEnumsCaseInsensitive=' + this.o1k_1 + ', ') + ('allowTrailingComma=' + this.p1k_1 + ', allowComments=' + this.q1k_1 + ', classDiscriminatorMode=' + this.r1k_1.toString() + ', exceptionsWithDebugInfo=' + this.s1k_1 + ')');
  }
}
class ClassDiscriminatorMode extends Enum {}
class JsonContentPolymorphicSerializer {
  constructor(baseClass) {
    this.t1k_1 = baseClass;
    this.u1k_1 = buildSerialDescriptor('JsonContentPolymorphicSerializer<' + this.t1k_1.f1() + '>', SEALED_getInstance(), []);
  }
  mv() {
    return this.u1k_1;
  }
  ew(encoder, value) {
    var tmp0_elvis_lhs = encoder.l10().w11(this.t1k_1, value);
    var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? serializerOrNull(getKClassFromExpression(value)) : tmp0_elvis_lhs;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      throwSubtypeNotRegistered(this, getKClassFromExpression(value), this.t1k_1);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var actualSerializer = tmp;
    (isInterface(actualSerializer, KSerializer) ? actualSerializer : THROW_CCE()).nv(encoder, value);
  }
  nv(encoder, value) {
    return this.ew(encoder, !(value == null) ? value : THROW_CCE());
  }
  ov(decoder) {
    var input = asJsonDecoder(decoder);
    var tree = input.v1k();
    var tmp = this.w1k(tree);
    var actualSerializer = isInterface(tmp, KSerializer) ? tmp : THROW_CCE();
    return input.x1k().p1i(actualSerializer, tree);
  }
}
class JsonDecoder {}
class Companion {}
class JsonElement {}
class JsonObject extends JsonElement {
  constructor(content) {
    super();
    this.y1k_1 = content;
  }
  equals(other) {
    return equals(this.y1k_1, other);
  }
  hashCode() {
    return hashCode(this.y1k_1);
  }
  toString() {
    var tmp = this.y1k_1.u2();
    return joinToString(tmp, ',', '{', '}', VOID, VOID, JsonObject$toString$lambda);
  }
  j1() {
    return this.y1k_1.j1();
  }
  z1k(key) {
    return this.y1k_1.a4(key);
  }
  a4(key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.z1k((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  }
  a1l(value) {
    return this.y1k_1.b4(value);
  }
  b4(value) {
    if (!(value instanceof JsonElement))
      return false;
    return this.a1l(value instanceof JsonElement ? value : THROW_CCE());
  }
  b1l(key) {
    return this.y1k_1.c4(key);
  }
  c4(key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.b1l((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  }
  asJsReadonlyMapView() {
    return this.y1k_1.asJsReadonlyMapView();
  }
  l2() {
    return this.y1k_1.l2();
  }
  d4() {
    return this.y1k_1.d4();
  }
  e4() {
    return this.y1k_1.e4();
  }
  u2() {
    return this.y1k_1.u2();
  }
}
class Companion_0 {}
class Companion_1 {}
class JsonPrimitive extends JsonElement {
  toString() {
    return this.d1l();
  }
}
class Companion_2 {}
class JsonArray extends JsonElement {
  constructor(content) {
    super();
    this.k1l_1 = content;
  }
  equals(other) {
    return equals(this.k1l_1, other);
  }
  hashCode() {
    return hashCode(this.k1l_1);
  }
  toString() {
    return joinToString(this.k1l_1, ',', '[', ']');
  }
  j1() {
    return this.k1l_1.j1();
  }
  l1l(element) {
    return this.k1l_1.t3(element);
  }
  t3(element) {
    if (!(element instanceof JsonElement))
      return false;
    return this.l1l(element instanceof JsonElement ? element : THROW_CCE());
  }
  l1() {
    return this.k1l_1.l1();
  }
  m1l(elements) {
    return this.k1l_1.u3(elements);
  }
  u3(elements) {
    return this.m1l(elements);
  }
  j2(index) {
    return this.k1l_1.j2(index);
  }
  n1l(element) {
    return this.k1l_1.v3(element);
  }
  v3(element) {
    if (!(element instanceof JsonElement))
      return -1;
    return this.n1l(element instanceof JsonElement ? element : THROW_CCE());
  }
  o1l(element) {
    return this.k1l_1.w3(element);
  }
  w3(element) {
    if (!(element instanceof JsonElement))
      return -1;
    return this.o1l(element instanceof JsonElement ? element : THROW_CCE());
  }
  x3() {
    return this.k1l_1.x3();
  }
  p2(index) {
    return this.k1l_1.p2(index);
  }
  y3(fromIndex, toIndex) {
    return this.k1l_1.y3(fromIndex, toIndex);
  }
  asJsReadonlyArrayView() {
    return this.k1l_1.asJsReadonlyArrayView();
  }
  l2() {
    return this.k1l_1.l2();
  }
}
class JsonNull extends JsonPrimitive {
  constructor() {
    JsonNull_instance = null;
    super();
    JsonNull_instance = this;
    this.p1l_1 = 'null';
  }
  c1l() {
    return false;
  }
  d1l() {
    return this.p1l_1;
  }
  q1l() {
    return JsonNullSerializer_getInstance();
  }
  o18(typeParamsSerializers) {
    return this.q1l();
  }
}
class JsonLiteral extends JsonPrimitive {
  constructor(body, isString, coerceToInlineType) {
    coerceToInlineType = coerceToInlineType === VOID ? null : coerceToInlineType;
    super();
    this.r1l_1 = isString;
    this.s1l_1 = coerceToInlineType;
    this.t1l_1 = toString(body);
    if (!(this.s1l_1 == null)) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.require' call
      if (!this.s1l_1.ey()) {
        var message = 'Failed requirement.';
        throw IllegalArgumentException.h2(toString(message));
      }
    }
  }
  c1l() {
    return this.r1l_1;
  }
  d1l() {
    return this.t1l_1;
  }
  toString() {
    var tmp;
    if (this.r1l_1) {
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder.h1();
      printQuoted(this_0, this.t1l_1);
      tmp = this_0.toString();
    } else {
      tmp = this.t1l_1;
    }
    return tmp;
  }
  equals(other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof JsonLiteral))
      THROW_CCE();
    if (!(this.r1l_1 === other.r1l_1))
      return false;
    if (!(this.t1l_1 === other.t1l_1))
      return false;
    return true;
  }
  hashCode() {
    var result = getBooleanHashCode(this.r1l_1);
    result = imul(31, result) + getStringHashCode(this.t1l_1) | 0;
    return result;
  }
}
class JsonObjectBuilder {
  constructor() {
    var tmp = this;
    // Inline function 'kotlin.collections.linkedMapOf' call
    tmp.v1l_1 = LinkedHashMap.l5();
  }
  w1l(key, element) {
    return this.v1l_1.f4(key, element);
  }
  a1k() {
    return new JsonObject(this.v1l_1);
  }
}
class JsonElementSerializer {
  constructor() {
    JsonElementSerializer_instance = this;
    var tmp = this;
    var tmp_0 = SEALED_getInstance();
    tmp.c1m_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonElement', tmp_0, [], JsonElementSerializer$descriptor$lambda);
  }
  mv() {
    return this.c1m_1;
  }
  d1m(encoder, value) {
    verify(encoder);
    if (value instanceof JsonPrimitive) {
      encoder.p11(JsonPrimitiveSerializer_getInstance(), value);
    } else {
      if (value instanceof JsonObject) {
        encoder.p11(JsonObjectSerializer_getInstance(), value);
      } else {
        if (value instanceof JsonArray) {
          encoder.p11(JsonArraySerializer_getInstance(), value);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
  }
  nv(encoder, value) {
    return this.d1m(encoder, value instanceof JsonElement ? value : THROW_CCE());
  }
  ov(decoder) {
    var input = asJsonDecoder(decoder);
    return input.v1k();
  }
}
class JsonObjectDescriptor {
  constructor() {
    JsonObjectDescriptor_instance = this;
    this.e1m_1 = MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).mv();
    this.f1m_1 = 'kotlinx.serialization.json.JsonObject';
  }
  nw() {
    return this.f1m_1;
  }
  hy(index) {
    return this.e1m_1.hy(index);
  }
  iy(name) {
    return this.e1m_1.iy(name);
  }
  jy(index) {
    return this.e1m_1.jy(index);
  }
  ky(index) {
    return this.e1m_1.ky(index);
  }
  ly(index) {
    return this.e1m_1.ly(index);
  }
  dy() {
    return this.e1m_1.dy();
  }
  wx() {
    return this.e1m_1.wx();
  }
  ey() {
    return this.e1m_1.ey();
  }
  fy() {
    return this.e1m_1.fy();
  }
  gy() {
    return this.e1m_1.gy();
  }
}
class JsonObjectSerializer {
  constructor() {
    JsonObjectSerializer_instance = this;
    this.a1m_1 = JsonObjectDescriptor_getInstance();
  }
  mv() {
    return this.a1m_1;
  }
  g1m(encoder, value) {
    verify(encoder);
    MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).nv(encoder, value);
  }
  nv(encoder, value) {
    return this.g1m(encoder, value instanceof JsonObject ? value : THROW_CCE());
  }
  ov(decoder) {
    verify_0(decoder);
    return new JsonObject(MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).ov(decoder));
  }
}
class JsonPrimitiveSerializer {
  constructor() {
    JsonPrimitiveSerializer_instance = this;
    this.x1l_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonPrimitive', STRING_getInstance(), []);
  }
  mv() {
    return this.x1l_1;
  }
  h1m(encoder, value) {
    verify(encoder);
    var tmp;
    if (value instanceof JsonNull) {
      encoder.p11(JsonNullSerializer_getInstance(), JsonNull_getInstance());
      tmp = Unit_instance;
    } else {
      var tmp_0 = JsonLiteralSerializer_getInstance();
      encoder.p11(tmp_0, value instanceof JsonLiteral ? value : THROW_CCE());
      tmp = Unit_instance;
    }
    return tmp;
  }
  nv(encoder, value) {
    return this.h1m(encoder, value instanceof JsonPrimitive ? value : THROW_CCE());
  }
  ov(decoder) {
    var jsonDecoder = asJsonDecoder(decoder);
    var result = jsonDecoder.v1k();
    if (!(result instanceof JsonPrimitive)) {
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var shortMessage = 'Unexpected JSON element, expected JsonPrimitive, had ' + toString(getKClassFromExpression(result));
      var tmp;
      if (jsonDecoder.x1k().j1i_1.s1k_1) {
        var tmp$ret$3 = toString(result);
        tmp = toString(minify(tmp$ret$3));
      } else {
        tmp = null;
      }
      var inputValue = tmp;
      throw JsonDecodingException.u1m(access$formatDecodingException$tJsonExceptionsKt(-1, shortMessage, null, null, inputValue), shortMessage, -1, null, inputValue, null);
    }
    return result;
  }
}
class JsonArrayDescriptor {
  constructor() {
    JsonArrayDescriptor_instance = this;
    this.v1m_1 = ListSerializer(JsonElementSerializer_getInstance()).mv();
    this.w1m_1 = 'kotlinx.serialization.json.JsonArray';
  }
  nw() {
    return this.w1m_1;
  }
  hy(index) {
    return this.v1m_1.hy(index);
  }
  iy(name) {
    return this.v1m_1.iy(name);
  }
  jy(index) {
    return this.v1m_1.jy(index);
  }
  ky(index) {
    return this.v1m_1.ky(index);
  }
  ly(index) {
    return this.v1m_1.ly(index);
  }
  dy() {
    return this.v1m_1.dy();
  }
  wx() {
    return this.v1m_1.wx();
  }
  ey() {
    return this.v1m_1.ey();
  }
  fy() {
    return this.v1m_1.fy();
  }
  gy() {
    return this.v1m_1.gy();
  }
}
class JsonArraySerializer {
  constructor() {
    JsonArraySerializer_instance = this;
    this.b1m_1 = JsonArrayDescriptor_getInstance();
  }
  mv() {
    return this.b1m_1;
  }
  x1m(encoder, value) {
    verify(encoder);
    ListSerializer(JsonElementSerializer_getInstance()).nv(encoder, value);
  }
  nv(encoder, value) {
    return this.x1m(encoder, value instanceof JsonArray ? value : THROW_CCE());
  }
  ov(decoder) {
    verify_0(decoder);
    return new JsonArray(ListSerializer(JsonElementSerializer_getInstance()).ov(decoder));
  }
}
class JsonNullSerializer {
  constructor() {
    JsonNullSerializer_instance = this;
    this.y1l_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonNull', ENUM_getInstance(), []);
  }
  mv() {
    return this.y1l_1;
  }
  y1m(encoder, value) {
    verify(encoder);
    encoder.s10();
  }
  nv(encoder, value) {
    return this.y1m(encoder, value instanceof JsonNull ? value : THROW_CCE());
  }
  ov(decoder) {
    verify_0(decoder);
    if (decoder.hz()) {
      throw decodingExceptionOf("Expected 'null' literal");
    }
    decoder.iz();
    return JsonNull_getInstance();
  }
}
class JsonLiteralSerializer {
  constructor() {
    JsonLiteralSerializer_instance = this;
    this.z1l_1 = PrimitiveSerialDescriptor('kotlinx.serialization.json.JsonLiteral', STRING_getInstance());
  }
  mv() {
    return this.z1l_1;
  }
  z1m(encoder, value) {
    verify(encoder);
    if (value.r1l_1) {
      return encoder.b11(value.t1l_1);
    }
    if (!(value.s1l_1 == null)) {
      return encoder.d11(value.s1l_1).b11(value.t1l_1);
    }
    var tmp0_safe_receiver = toLongOrNull(value.t1l_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.x10(tmp0_safe_receiver);
    }
    var tmp1_safe_receiver = toULongOrNull(value.t1l_1);
    var tmp = tmp1_safe_receiver;
    if ((tmp == null ? null : new ULong(tmp)) == null)
      null;
    else {
      var tmp_0 = tmp1_safe_receiver;
      // Inline function 'kotlin.let' call
      var it = (tmp_0 == null ? null : new ULong(tmp_0)).f3_1;
      var tmp_1 = encoder.d11(serializer_0(Companion_getInstance()).mv());
      // Inline function 'kotlin.ULong.toLong' call
      var tmp$ret$4 = _ULong___get_data__impl__fggpzb(it);
      tmp_1.x10(tmp$ret$4);
      return Unit_instance;
    }
    var tmp2_safe_receiver = toDoubleOrNull(value.t1l_1);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.z10(tmp2_safe_receiver);
    }
    var tmp3_safe_receiver = toBooleanStrictOrNull(value.t1l_1);
    if (tmp3_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.t10(tmp3_safe_receiver);
    }
    encoder.b11(value.t1l_1);
  }
  nv(encoder, value) {
    return this.z1m(encoder, value instanceof JsonLiteral ? value : THROW_CCE());
  }
  ov(decoder) {
    var jsonDecoder = asJsonDecoder(decoder);
    var result = jsonDecoder.v1k();
    if (!(result instanceof JsonLiteral)) {
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var shortMessage = 'Unexpected JSON element, expected JsonLiteral, had ' + toString(getKClassFromExpression(result));
      var tmp;
      if (jsonDecoder.x1k().j1i_1.s1k_1) {
        var tmp$ret$3 = toString(result);
        tmp = toString(minify(tmp$ret$3));
      } else {
        tmp = null;
      }
      var inputValue = tmp;
      throw JsonDecodingException.u1m(access$formatDecodingException$tJsonExceptionsKt(-1, shortMessage, null, null, inputValue), shortMessage, -1, null, inputValue, null);
    }
    return result;
  }
}
class defer$1 {
  constructor($deferred) {
    this.a1n_1 = lazy($deferred);
  }
  nw() {
    return _get_original__l7ku1m(this).nw();
  }
  dy() {
    return _get_original__l7ku1m(this).dy();
  }
  fy() {
    return _get_original__l7ku1m(this).fy();
  }
  hy(index) {
    return _get_original__l7ku1m(this).hy(index);
  }
  iy(name) {
    return _get_original__l7ku1m(this).iy(name);
  }
  jy(index) {
    return _get_original__l7ku1m(this).jy(index);
  }
  ky(index) {
    return _get_original__l7ku1m(this).ky(index);
  }
  ly(index) {
    return _get_original__l7ku1m(this).ly(index);
  }
}
class JsonEncoder {}
class JsonException extends SerializationException {
  static c1n(message) {
    var $this = this.cx(message);
    captureStack($this, $this.j1l_1);
    $this.i1l_1 = message;
    delete $this.message;
    return $this;
  }
  r() {
    return this.i1l_1;
  }
  get message() {
    return this.r();
  }
}
class JsonDecodingException extends JsonException {
  constructor(fullMessage, shortMessage, offset, path, input, hint) {
    return new.target.u1m(fullMessage, shortMessage, offset, path, input, hint);
  }
  static u1m(fullMessage, shortMessage, offset, path, input, hint) {
    var $this = this.c1n(fullMessage);
    captureStack($this, $this.t1m_1);
    $this.o1m_1 = shortMessage;
    $this.p1m_1 = offset;
    $this.q1m_1 = path;
    $this.r1m_1 = input;
    $this.s1m_1 = hint;
    return $this;
  }
}
class JsonEncodingException extends JsonException {
  constructor(shortMessage, classSerialName, hint) {
    return new.target.n1n(shortMessage, classSerialName, hint);
  }
  static n1n(shortMessage, classSerialName, hint) {
    classSerialName = classSerialName === VOID ? null : classSerialName;
    hint = hint === VOID ? null : hint;
    var $this = this.c1n(formatEncodingException(shortMessage, hint));
    captureStack($this, $this.m1n_1);
    $this.j1n_1 = shortMessage;
    $this.k1n_1 = classSerialName;
    $this.l1n_1 = hint;
    return $this;
  }
}
class JsonTransformingSerializer {
  constructor(tSerializer) {
    this.o1n_1 = tSerializer;
  }
  mv() {
    return this.o1n_1.mv();
  }
  nv(encoder, value) {
    var output = asJsonEncoder(encoder);
    var element = writeJson(output.x1k(), value, this.o1n_1);
    element = this.p1n(element);
    output.b1n(element);
  }
  ov(decoder) {
    var input = asJsonDecoder(decoder);
    var element = input.v1k();
    return input.x1k().p1i(this.o1n_1, this.q1n(element));
  }
  q1n(element) {
    return element;
  }
  p1n(element) {
    return element;
  }
}
class Composer {
  constructor(writer) {
    this.r1n_1 = writer;
    this.s1n_1 = true;
  }
  t1n() {
    this.s1n_1 = true;
  }
  u1n() {
    return Unit_instance;
  }
  v1n() {
    this.s1n_1 = false;
  }
  w1n() {
    this.s1n_1 = false;
  }
  x1n() {
    return Unit_instance;
  }
  y1n(v) {
    return this.r1n_1.z1n(v);
  }
  a1o(v) {
    return this.r1n_1.b1o(v);
  }
  c1o(v) {
    return this.r1n_1.b1o(v.toString());
  }
  d1o(v) {
    return this.r1n_1.b1o(v.toString());
  }
  e1o(v) {
    return this.r1n_1.f1o(fromInt(v));
  }
  g1o(v) {
    return this.r1n_1.f1o(fromInt(v));
  }
  h1o(v) {
    return this.r1n_1.f1o(fromInt(v));
  }
  i1o(v) {
    return this.r1n_1.f1o(v);
  }
  j1o(v) {
    return this.r1n_1.b1o(v.toString());
  }
  k1o(value) {
    return this.r1n_1.l1o(value);
  }
}
class ComposerForUnsignedNumbers extends Composer {
  constructor(writer, forceQuoting) {
    super(writer);
    this.o1o_1 = forceQuoting;
  }
  h1o(v) {
    if (this.o1o_1) {
      // Inline function 'kotlin.toUInt' call
      var tmp$ret$0 = _UInt___init__impl__l7qpdl(v);
      this.k1o(UInt__toString_impl_dbgl21(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUInt' call
      var tmp$ret$1 = _UInt___init__impl__l7qpdl(v);
      this.a1o(UInt__toString_impl_dbgl21(tmp$ret$1));
    }
  }
  i1o(v) {
    if (this.o1o_1) {
      // Inline function 'kotlin.toULong' call
      var tmp$ret$0 = _ULong___init__impl__c78o9k(v);
      this.k1o(ULong__toString_impl_f9au7k(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toULong' call
      var tmp$ret$1 = _ULong___init__impl__c78o9k(v);
      this.a1o(ULong__toString_impl_f9au7k(tmp$ret$1));
    }
  }
  e1o(v) {
    if (this.o1o_1) {
      // Inline function 'kotlin.toUByte' call
      var tmp$ret$0 = _UByte___init__impl__g9hnc4(v);
      this.k1o(UByte__toString_impl_v72jg(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUByte' call
      var tmp$ret$1 = _UByte___init__impl__g9hnc4(v);
      this.a1o(UByte__toString_impl_v72jg(tmp$ret$1));
    }
  }
  g1o(v) {
    if (this.o1o_1) {
      // Inline function 'kotlin.toUShort' call
      var tmp$ret$0 = _UShort___init__impl__jigrne(v);
      this.k1o(UShort__toString_impl_edaoee(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUShort' call
      var tmp$ret$1 = _UShort___init__impl__jigrne(v);
      this.a1o(UShort__toString_impl_edaoee(tmp$ret$1));
    }
  }
}
class ComposerForUnquotedLiterals extends Composer {
  constructor(writer, forceQuoting) {
    super(writer);
    this.r1o_1 = forceQuoting;
  }
  k1o(value) {
    if (this.r1o_1) {
      super.k1o(value);
    } else {
      super.a1o(value);
    }
  }
}
class ComposerWithPrettyPrint extends Composer {
  constructor(writer, json) {
    super(writer);
    this.u1o_1 = json;
    this.v1o_1 = 0;
  }
  t1n() {
    this.s1n_1 = true;
    this.v1o_1 = this.v1o_1 + 1 | 0;
  }
  u1n() {
    this.v1o_1 = this.v1o_1 - 1 | 0;
  }
  v1n() {
    this.s1n_1 = false;
    this.a1o('\n');
    // Inline function 'kotlin.repeat' call
    var times = this.v1o_1;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.a1o(this.u1o_1.j1i_1.h1k_1);
      }
       while (inductionVariable < times);
  }
  w1n() {
    if (this.s1n_1)
      this.s1n_1 = false;
    else {
      this.v1n();
    }
  }
  x1n() {
    this.y1n(_Char___init__impl__6a9atx(32));
  }
}
class JsonElementMarker {
  constructor(descriptor) {
    var tmp = this;
    tmp.w1o_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
    this.x1o_1 = false;
  }
  y1o(index) {
    this.w1o_1.f16(index);
  }
  z1o() {
    return this.w1o_1.g16();
  }
}
class Tombstone {}
class RedactedKey {}
class JsonPath {
  constructor(configuration) {
    this.g1p_1 = configuration;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.h1p_1 = Array(8);
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = new Int32Array(8);
    while (tmp_1 < 8) {
      tmp_2[tmp_1] = -1;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.i1p_1 = tmp_2;
    this.j1p_1 = -1;
  }
  k1p(sd) {
    this.j1p_1 = this.j1p_1 + 1 | 0;
    var depth = this.j1p_1;
    if (depth === this.h1p_1.length) {
      resize(this);
    }
    this.h1p_1[depth] = sd;
  }
  l1p(index) {
    this.i1p_1[this.j1p_1] = index;
  }
  m1p(key) {
    var tmp;
    if (!(this.i1p_1[this.j1p_1] === -2)) {
      this.j1p_1 = this.j1p_1 + 1 | 0;
      tmp = this.j1p_1 === this.h1p_1.length;
    } else {
      tmp = false;
    }
    if (tmp) {
      resize(this);
    }
    this.h1p_1[this.j1p_1] = this.g1p_1.s1k_1 ? key : RedactedKey_instance;
    this.i1p_1[this.j1p_1] = -2;
  }
  n1p() {
    if (this.i1p_1[this.j1p_1] === -2) {
      this.h1p_1[this.j1p_1] = Tombstone_instance;
    }
  }
  o1p() {
    var depth = this.j1p_1;
    if (this.i1p_1[depth] === -2) {
      this.i1p_1[depth] = -1;
      this.j1p_1 = this.j1p_1 - 1 | 0;
    }
    if (!(this.j1p_1 === -1)) {
      this.j1p_1 = this.j1p_1 - 1 | 0;
    }
  }
  p1p() {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder.h1();
    this_0.i1('$');
    // Inline function 'kotlin.repeat' call
    var times = this.j1p_1 + 1 | 0;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = this.h1p_1[index];
        if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
          if (equals(element.dy(), LIST_getInstance())) {
            if (!(this.i1p_1[index] === -1)) {
              this_0.i1('[');
              this_0.xg(this.i1p_1[index]);
              this_0.i1(']');
            }
          } else {
            var idx = this.i1p_1[index];
            if (idx >= 0) {
              this_0.i1('.');
              this_0.i1(element.hy(idx));
            }
          }
        } else {
          if (element === RedactedKey_instance) {
            this_0.i1('[<debug info disabled>]');
          } else {
            if (!(element === Tombstone_instance)) {
              this_0.i1('[');
              this_0.i1("'");
              this_0.o1(element);
              this_0.i1("'");
              this_0.i1(']');
            }
          }
        }
      }
       while (inductionVariable < times);
    return this_0.toString();
  }
  toString() {
    return this.p1p();
  }
}
class JsonSerializersModuleValidator {
  constructor(configuration) {
    this.q1p_1 = configuration.j1k_1;
    this.r1p_1 = !configuration.r1k_1.equals(ClassDiscriminatorMode_NONE_getInstance());
  }
  i1h(kClass, provider) {
  }
  l1h(baseClass, actualClass, actualSerializer) {
    var descriptor = actualSerializer.mv();
    checkKind(this, descriptor, actualClass);
  }
  m1h(baseClass, defaultSerializerProvider) {
  }
  n1h(baseClass, defaultDeserializerProvider) {
  }
}
class JsonTreeReader {
  constructor(configuration, lexer) {
    this.c1q_1 = lexer;
    this.d1q_1 = configuration.d1k_1;
    this.e1q_1 = configuration.p1k_1;
    this.f1q_1 = 0;
  }
  l1q() {
    var token = this.c1q_1.h1q();
    var tmp;
    if (token === 1) {
      tmp = readValue(this, true);
    } else if (token === 0) {
      tmp = readValue(this, false);
    } else if (token === 6) {
      var tmp_0;
      this.f1q_1 = this.f1q_1 + 1 | 0;
      if (this.f1q_1 === 200) {
        tmp_0 = readDeepRecursive(this);
      } else {
        tmp_0 = readObject(this);
      }
      var result = tmp_0;
      this.f1q_1 = this.f1q_1 - 1 | 0;
      tmp = result;
    } else if (token === 8) {
      tmp = readArray(this);
    } else {
      this.c1q_1.b1p('Cannot read Json element because of unexpected ' + tokenDescription(token));
    }
    return tmp;
  }
}
class Key {}
class DescriptorSchemaCache {
  constructor() {
    this.c1p_1 = createMapForCache(16);
  }
  o1q(descriptor, key, value) {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.c1p_1;
    var value_0 = this_0.c4(descriptor);
    var tmp;
    if (value_0 == null) {
      var answer = createMapForCache(2);
      this_0.f4(descriptor, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    var tmp0 = tmp;
    var tmp2 = key instanceof Key ? key : THROW_CCE();
    // Inline function 'kotlin.collections.set' call
    var value_1 = !(value == null) ? value : THROW_CCE();
    tmp0.f4(tmp2, value_1);
  }
  d1p(descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.p1q(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    var value = defaultValue();
    this.o1q(descriptor, key, value);
    return value;
  }
  p1q(descriptor, key) {
    var tmp0_safe_receiver = this.c1p_1.c4(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = tmp0_safe_receiver.c4(key instanceof Key ? key : THROW_CCE());
    }
    var tmp_0 = tmp;
    return !(tmp_0 == null) ? tmp_0 : null;
  }
}
class DiscriminatorHolder {
  constructor(discriminatorToSkip) {
    this.q1q_1 = discriminatorToSkip;
  }
}
class StreamingJsonDecoder extends AbstractDecoder {
  constructor(json, mode, lexer, descriptor, discriminatorHolder) {
    super();
    this.t1i_1 = json;
    this.u1i_1 = mode;
    this.v1i_1 = lexer;
    this.w1i_1 = this.t1i_1.l10();
    this.x1i_1 = -1;
    this.y1i_1 = discriminatorHolder;
    this.z1i_1 = this.t1i_1.j1i_1;
    this.a1j_1 = this.z1i_1.g1k_1 ? null : new JsonElementMarker(descriptor);
  }
  x1k() {
    return this.t1i_1;
  }
  l10() {
    return this.w1i_1;
  }
  v1k() {
    return (new JsonTreeReader(this.t1i_1.j1i_1, this.v1i_1)).l1q();
  }
  vz(deserializer) {
    try {
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.t1i_1.j1i_1.j1k_1;
      }
      if (tmp) {
        return deserializer.ov(this);
      }
      var discriminator = classDiscriminator(deserializer.mv(), this.t1i_1);
      var tmp0_elvis_lhs = this.v1i_1.z1q(discriminator, this.z1i_1.d1k_1);
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        var tmp2 = isInterface(deserializer, DeserializationStrategy) ? deserializer : THROW_CCE();
        var tmp$ret$0;
        $l$block: {
          // Inline function 'kotlinx.serialization.json.internal.decodeSerializableValuePolymorphic' call
          var tmp_1;
          if (!(tmp2 instanceof AbstractPolymorphicSerializer)) {
            tmp_1 = true;
          } else {
            tmp_1 = this.x1k().j1i_1.j1k_1;
          }
          if (tmp_1) {
            tmp$ret$0 = tmp2.ov(this);
            break $l$block;
          }
          var discriminator_0 = classDiscriminator(tmp2.mv(), this.x1k());
          var tmp2_0 = this.v1k();
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName = tmp2.mv().nw();
          if (!(tmp2_0 instanceof JsonObject)) {
            var tmp2_1 = 'Expected ' + getKClass(JsonObject).f1() + ', but had ' + getKClassFromExpression(tmp2_0).f1() + ' as the serialized body of ' + serialName;
            // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
            var path = this.v1i_1.d1j_1.p1p();
            var tmp_2;
            if (this.x1k().j1i_1.s1k_1) {
              var tmp$ret$6 = toString(tmp2_0);
              tmp_2 = toString(minify(tmp$ret$6));
            } else {
              tmp_2 = null;
            }
            var inputValue = tmp_2;
            throw JsonDecodingException.u1m(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_1, path, null, inputValue), tmp2_1, -1, path, inputValue, null);
          }
          var jsonTree = tmp2_0;
          var tmp0_safe_receiver = jsonTree.b1l(discriminator_0);
          var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
          var type = tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
          var tmp_3;
          try {
            tmp_3 = findPolymorphicSerializer(tmp2, this, type);
          } catch ($p) {
            var tmp_4;
            if ($p instanceof SerializationException) {
              var it = $p;
              // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
              var shortMessage = ensureNotNull(it.message);
              var tmp_5;
              if (this.x1k().j1i_1.s1k_1) {
                var tmp$ret$10 = jsonTree.toString();
                tmp_5 = toString(minify(tmp$ret$10));
              } else {
                tmp_5 = null;
              }
              var inputValue_0 = tmp_5;
              throw JsonDecodingException.u1m(access$formatDecodingException$tJsonExceptionsKt(-1, shortMessage, null, null, inputValue_0), shortMessage, -1, null, inputValue_0, null);
            } else {
              throw $p;
            }
          }
          var tmp_6 = tmp_3;
          var actualSerializer = isInterface(tmp_6, DeserializationStrategy) ? tmp_6 : THROW_CCE();
          tmp$ret$0 = readPolymorphicJson(this.x1k(), discriminator_0, jsonTree, actualSerializer);
        }
        return tmp$ret$0;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var type_0 = tmp_0;
      var tmp_7;
      try {
        tmp_7 = findPolymorphicSerializer(deserializer, this, type_0);
      } catch ($p_0) {
        var tmp_8;
        if ($p_0 instanceof SerializationException) {
          var it_0 = $p_0;
          var message = removeSuffix(substringBefore(ensureNotNull(it_0.message), _Char___init__impl__6a9atx(10)), '.');
          var hint = substringAfter(ensureNotNull(it_0.message), _Char___init__impl__6a9atx(10), '');
          this.v1i_1.b1p(message, VOID, hint);
        } else {
          throw $p_0;
        }
        tmp_7 = tmp_8;
      }
      var tmp_9 = tmp_7;
      var actualSerializer_0 = isInterface(tmp_9, DeserializationStrategy) ? tmp_9 : THROW_CCE();
      this.y1i_1 = new DiscriminatorHolder(discriminator);
      return actualSerializer_0.ov(this);
    } catch ($p_1) {
      if ($p_1 instanceof MissingFieldException) {
        var e = $p_1;
        if (contains_0(ensureNotNull(e.message), 'at path'))
          throw e;
        throw missingFieldExceptionWithNewMessage(e, plus(e.message, ' at path: ') + this.v1i_1.d1j_1.p1p());
      } else {
        throw $p_1;
      }
    }
  }
  wz(descriptor) {
    var newMode = switchMode(this.t1i_1, descriptor);
    this.v1i_1.d1j_1.k1p(descriptor);
    this.v1i_1.r1q(newMode.c1r_1);
    checkLeadingComma(this);
    var tmp;
    switch (newMode.s1_1) {
      case 1:
      case 2:
      case 3:
        tmp = new StreamingJsonDecoder(this.t1i_1, newMode, this.v1i_1, descriptor, this.y1i_1);
        break;
      default:
        var tmp_0;
        if (this.u1i_1.equals(newMode) && this.t1i_1.j1i_1.g1k_1) {
          tmp_0 = this;
        } else {
          tmp_0 = new StreamingJsonDecoder(this.t1i_1, newMode, this.v1i_1, descriptor, this.y1i_1);
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  }
  xz(descriptor) {
    if (descriptor.fy() === 0 && ignoreUnknownKeys(descriptor, this.t1i_1)) {
      skipLeftoverElements(this, descriptor);
    }
    if (this.v1i_1.s1q() && !this.t1i_1.j1i_1.p1k_1) {
      invalidTrailingComma(this.v1i_1, '');
    }
    this.v1i_1.r1q(this.u1i_1.d1r_1);
    this.v1i_1.d1j_1.o1p();
  }
  hz() {
    var tmp;
    var tmp0_safe_receiver = this.a1j_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x1o_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = !this.v1i_1.e1r();
    } else {
      tmp = false;
    }
    return tmp;
  }
  iz() {
    return null;
  }
  i10(descriptor, index, deserializer, previousValue) {
    var isMapKey = this.u1i_1.equals(WriteMode_MAP_getInstance()) && (index & 1) === 0;
    if (isMapKey) {
      this.v1i_1.d1j_1.n1p();
    }
    var value = super.i10(descriptor, index, deserializer, previousValue);
    if (isMapKey) {
      this.v1i_1.d1j_1.m1p(value);
    }
    return value;
  }
  n10(descriptor) {
    var index;
    switch (this.u1i_1.s1_1) {
      case 0:
        index = decodeObjectIndex(this, descriptor);
        break;
      case 2:
        index = decodeMapIndex(this);
        break;
      default:
        index = decodeListIndex(this);
        break;
    }
    if (!this.u1i_1.equals(WriteMode_MAP_getInstance())) {
      this.v1i_1.d1j_1.l1p(index);
    }
    return index;
  }
  jz() {
    return this.v1i_1.f1r();
  }
  kz() {
    var value = this.v1i_1.g1r();
    if (!(value === fromInt(convertToByte(value)))) {
      this.v1i_1.b1p("Failed to parse byte for input '" + value.toString() + "'");
    }
    return convertToByte(value);
  }
  lz() {
    var value = this.v1i_1.g1r();
    if (!(value === fromInt(convertToShort(value)))) {
      this.v1i_1.b1p("Failed to parse short for input '" + value.toString() + "'");
    }
    return convertToShort(value);
  }
  mz() {
    var value = this.v1i_1.g1r();
    if (!(value === fromInt(convertToInt(value)))) {
      this.v1i_1.b1p("Failed to parse int for input '" + value.toString() + "'");
    }
    return convertToInt(value);
  }
  nz() {
    return this.v1i_1.g1r();
  }
  oz() {
    var tmp0 = this.v1i_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.k1q();
      try {
        // Inline function 'kotlin.text.toFloat' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.b1p("Failed to parse type '" + 'float' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$0;
    var specialFp = this.t1i_1.j1i_1.l1k_1;
    if (specialFp || isFinite(result))
      return result;
    throwInvalidFloatingPointDecoded(this.v1i_1, result);
  }
  pz() {
    var tmp0 = this.v1i_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.k1q();
      try {
        tmp$ret$0 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.b1p("Failed to parse type '" + 'double' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$0;
    var specialFp = this.t1i_1.j1i_1.l1k_1;
    if (specialFp || isFinite_0(result))
      return result;
    throwInvalidFloatingPointDecoded(this.v1i_1, result);
  }
  qz() {
    var string = this.v1i_1.k1q();
    if (!(string.length === 1)) {
      this.v1i_1.b1p("Expected single char, but got '" + string + "'");
    }
    return charCodeAt(string, 0);
  }
  rz() {
    var tmp;
    if (this.z1i_1.d1k_1) {
      tmp = this.v1i_1.y1q();
    } else {
      tmp = this.v1i_1.j1q();
    }
    return tmp;
  }
  tz(descriptor) {
    return get_isUnsignedNumber(descriptor) ? new JsonDecoderForUnsignedTypes(this.v1i_1, this.t1i_1) : super.tz(descriptor);
  }
  sz(enumDescriptor) {
    return getJsonNameIndexOrThrow(enumDescriptor, this.t1i_1, this.rz(), ' at path ' + this.v1i_1.d1j_1.p1p());
  }
}
class JsonDecoderForUnsignedTypes extends AbstractDecoder {
  constructor(lexer, json) {
    super();
    this.h1r_1 = lexer;
    this.i1r_1 = json.l10();
  }
  l10() {
    return this.i1r_1;
  }
  n10(descriptor) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException.o(toString(message));
  }
  mz() {
    var tmp0 = this.h1r_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.k1q();
      try {
        // Inline function 'kotlin.UInt.toInt' call
        var this_0 = toUInt(input);
        tmp$ret$0 = _UInt___get_data__impl__f0vqqw(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.b1p("Failed to parse type '" + 'UInt' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  nz() {
    var tmp0 = this.h1r_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.k1q();
      try {
        // Inline function 'kotlin.ULong.toLong' call
        var this_0 = toULong(input);
        tmp$ret$0 = _ULong___get_data__impl__fggpzb(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.b1p("Failed to parse type '" + 'ULong' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  kz() {
    var tmp0 = this.h1r_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.k1q();
      try {
        // Inline function 'kotlin.UByte.toByte' call
        var this_0 = toUByte(input);
        tmp$ret$0 = _UByte___get_data__impl__jof9qr(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.b1p("Failed to parse type '" + 'UByte' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  lz() {
    var tmp0 = this.h1r_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.k1q();
      try {
        // Inline function 'kotlin.UShort.toShort' call
        var this_0 = toUShort(input);
        tmp$ret$0 = _UShort___get_data__impl__g0245(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.b1p("Failed to parse type '" + 'UShort' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
}
class StreamingJsonEncoder extends AbstractEncoder {
  constructor(composer, json, mode, modeReuseCache) {
    return new.target.j1r(composer, json, mode, modeReuseCache);
  }
  static j1r(composer, json, mode, modeReuseCache) {
    var $this = this.p10();
    $this.s1p_1 = composer;
    $this.t1p_1 = json;
    $this.u1p_1 = mode;
    $this.v1p_1 = modeReuseCache;
    $this.w1p_1 = $this.t1p_1.l10();
    $this.x1p_1 = $this.t1p_1.j1i_1;
    $this.y1p_1 = false;
    $this.z1p_1 = null;
    $this.a1q_1 = null;
    var i = $this.u1p_1.s1_1;
    if (!($this.v1p_1 == null)) {
      if (!($this.v1p_1[i] === null) || !($this.v1p_1[i] === $this)) {
        $this.v1p_1[i] = $this;
      }
    }
    return $this;
  }
  x1k() {
    return this.t1p_1;
  }
  static b1q(output, json, mode, modeReuseCache) {
    return this.j1r(Composer_0(output, json), json, mode, modeReuseCache);
  }
  l10() {
    return this.w1p_1;
  }
  b1n(element) {
    var tmp;
    if (!(this.z1p_1 == null)) {
      tmp = !(element instanceof JsonObject);
    } else {
      tmp = false;
    }
    if (tmp) {
      throwJsonElementPolymorphicException(this.a1q_1, element);
    }
    this.p11(JsonElementSerializer_getInstance(), element);
  }
  u11(descriptor, index) {
    return this.x1p_1.b1k_1;
  }
  p11(serializer, value) {
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
      if (this.x1k().j1i_1.j1k_1) {
        serializer.nv(this, value);
        break $l$block;
      }
      var isPolymorphicSerializer = serializer instanceof AbstractPolymorphicSerializer;
      var tmp;
      if (isPolymorphicSerializer) {
        tmp = !this.x1k().j1i_1.r1k_1.equals(ClassDiscriminatorMode_NONE_getInstance());
      } else {
        var tmp_0;
        switch (this.x1k().j1i_1.r1k_1.s1_1) {
          case 0:
          case 2:
            tmp_0 = false;
            break;
          case 1:
            // Inline function 'kotlin.let' call

            var it = serializer.mv().dy();
            tmp_0 = equals(it, CLASS_getInstance()) || equals(it, OBJECT_getInstance());
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }
        tmp = tmp_0;
      }
      var needDiscriminator = tmp;
      var baseClassDiscriminator = needDiscriminator ? classDiscriminator(serializer.mv(), this.x1k()) : null;
      var tmp_1;
      if (isPolymorphicSerializer) {
        var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
        $l$block_0: {
          // Inline function 'kotlin.requireNotNull' call
          if (value == null) {
            var message = 'Value for serializer ' + toString(serializer.mv()) + ' should always be non-null. Please report issue to the kotlinx.serialization tracker.';
            throw IllegalArgumentException.h2(toString(message));
          } else {
            break $l$block_0;
          }
        }
        var actual = findPolymorphicSerializer_0(casted, this, value);
        tmp_1 = isInterface(actual, SerializationStrategy) ? actual : THROW_CCE();
      } else {
        tmp_1 = serializer;
      }
      var actualSerializer = tmp_1;
      if (!(baseClassDiscriminator == null)) {
        access$checkEncodingConflicts$tPolymorphicKt(this.x1k(), serializer, actualSerializer, baseClassDiscriminator);
        checkKind_0(actualSerializer.mv().dy());
        var serialName = actualSerializer.mv().nw();
        this.z1p_1 = baseClassDiscriminator;
        this.a1q_1 = serialName;
      }
      actualSerializer.nv(this, value);
    }
  }
  wz(descriptor) {
    var newMode = switchMode(this.t1p_1, descriptor);
    if (!(newMode.c1r_1 === _Char___init__impl__6a9atx(0))) {
      this.s1p_1.y1n(newMode.c1r_1);
      this.s1p_1.t1n();
    }
    var discriminator = this.z1p_1;
    if (!(discriminator == null)) {
      var tmp0_elvis_lhs = this.a1q_1;
      encodeTypeInfo(this, discriminator, tmp0_elvis_lhs == null ? descriptor.nw() : tmp0_elvis_lhs);
      this.z1p_1 = null;
      this.a1q_1 = null;
    }
    if (this.u1p_1.equals(newMode)) {
      return this;
    }
    var tmp1_safe_receiver = this.v1p_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver[newMode.s1_1];
    return tmp2_elvis_lhs == null ? StreamingJsonEncoder.j1r(this.s1p_1, this.t1p_1, newMode, this.v1p_1) : tmp2_elvis_lhs;
  }
  xz(descriptor) {
    if (!(this.u1p_1.d1r_1 === _Char___init__impl__6a9atx(0))) {
      this.s1p_1.u1n();
      this.s1p_1.w1n();
      this.s1p_1.y1n(this.u1p_1.d1r_1);
    }
  }
  q10(descriptor, index) {
    switch (this.u1p_1.s1_1) {
      case 1:
        if (!this.s1p_1.s1n_1) {
          this.s1p_1.y1n(_Char___init__impl__6a9atx(44));
        }

        this.s1p_1.v1n();
        break;
      case 2:
        if (!this.s1p_1.s1n_1) {
          var tmp = this;
          var tmp_0;
          if ((index % 2 | 0) === 0) {
            this.s1p_1.y1n(_Char___init__impl__6a9atx(44));
            this.s1p_1.v1n();
            tmp_0 = true;
          } else {
            this.s1p_1.y1n(_Char___init__impl__6a9atx(58));
            this.s1p_1.x1n();
            tmp_0 = false;
          }
          tmp.y1p_1 = tmp_0;
        } else {
          this.y1p_1 = true;
          this.s1p_1.v1n();
        }

        break;
      case 3:
        if (index === 0)
          this.y1p_1 = true;
        if (index === 1) {
          this.s1p_1.y1n(_Char___init__impl__6a9atx(44));
          this.s1p_1.x1n();
          this.y1p_1 = false;
        }

        break;
      default:
        if (!this.s1p_1.s1n_1) {
          this.s1p_1.y1n(_Char___init__impl__6a9atx(44));
        }

        this.s1p_1.v1n();
        this.b11(getJsonElementName(descriptor, this.t1p_1, index));
        this.s1p_1.y1n(_Char___init__impl__6a9atx(58));
        this.s1p_1.x1n();
        break;
    }
    return true;
  }
  q11(descriptor, index, serializer, value) {
    if (!(value == null) || this.x1p_1.g1k_1) {
      super.q11(descriptor, index, serializer, value);
    }
  }
  d11(descriptor) {
    var tmp;
    if (get_isUnsignedNumber(descriptor)) {
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
      var tmp_0;
      var tmp_1 = this.s1p_1;
      if (tmp_1 instanceof ComposerForUnsignedNumbers) {
        tmp_0 = this.s1p_1;
      } else {
        var tmp0 = this.s1p_1.r1n_1;
        var p1 = this.y1p_1;
        tmp_0 = new ComposerForUnsignedNumbers(tmp0, p1);
      }
      var tmp$ret$0 = tmp_0;
      tmp = StreamingJsonEncoder.j1r(tmp$ret$0, this.t1p_1, this.u1p_1, null);
    } else if (get_isUnquotedLiteral(descriptor)) {
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
      var tmp_2;
      var tmp_3 = this.s1p_1;
      if (tmp_3 instanceof ComposerForUnquotedLiterals) {
        tmp_2 = this.s1p_1;
      } else {
        var tmp0_0 = this.s1p_1.r1n_1;
        var p1_0 = this.y1p_1;
        tmp_2 = new ComposerForUnquotedLiterals(tmp0_0, p1_0);
      }
      var tmp$ret$2 = tmp_2;
      tmp = StreamingJsonEncoder.j1r(tmp$ret$2, this.t1p_1, this.u1p_1, null);
    } else if (!(this.z1p_1 == null)) {
      // Inline function 'kotlin.apply' call
      this.a1q_1 = descriptor.nw();
      tmp = this;
    } else {
      tmp = super.d11(descriptor);
    }
    return tmp;
  }
  s10() {
    this.s1p_1.a1o('null');
  }
  t10(value) {
    if (this.y1p_1) {
      this.b11(value.toString());
    } else {
      this.s1p_1.j1o(value);
    }
  }
  u10(value) {
    if (this.y1p_1) {
      this.b11(value.toString());
    } else {
      this.s1p_1.e1o(value);
    }
  }
  v10(value) {
    if (this.y1p_1) {
      this.b11(value.toString());
    } else {
      this.s1p_1.g1o(value);
    }
  }
  w10(value) {
    if (this.y1p_1) {
      this.b11(value.toString());
    } else {
      this.s1p_1.h1o(value);
    }
  }
  x10(value) {
    if (this.y1p_1) {
      this.b11(value.toString());
    } else {
      this.s1p_1.i1o(value);
    }
  }
  y10(value) {
    if (this.y1p_1) {
      this.b11(value.toString());
    } else {
      this.s1p_1.c1o(value);
    }
    if (!this.x1p_1.l1k_1 && !isFinite(value)) {
      throw InvalidFloatingPointEncoded(value);
    }
  }
  z10(value) {
    if (this.y1p_1) {
      this.b11(value.toString());
    } else {
      this.s1p_1.d1o(value);
    }
    if (!this.x1p_1.l1k_1 && !isFinite_0(value)) {
      throw InvalidFloatingPointEncoded(value);
    }
  }
  a11(value) {
    this.b11(toString_1(value));
  }
  b11(value) {
    return this.s1p_1.k1o(value);
  }
  c11(enumDescriptor, index) {
    this.b11(enumDescriptor.hy(index));
  }
}
class AbstractJsonTreeDecoder extends NamedValueDecoder {
  constructor(json, value, polymorphicDiscriminator) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    super();
    this.m1r_1 = json;
    this.n1r_1 = value;
    this.o1r_1 = polymorphicDiscriminator;
    this.p1r_1 = this.x1k().j1i_1;
  }
  x1k() {
    return this.m1r_1;
  }
  w2() {
    return this.n1r_1;
  }
  l10() {
    return this.x1k().l10();
  }
  r1r() {
    var tmp0_safe_receiver = this.g1e();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = this.s1r(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? this.w2() : tmp1_elvis_lhs;
  }
  q1r(currentTag) {
    return this.i1e() + ('.' + currentTag);
  }
  v1k() {
    return this.r1r();
  }
  vz(deserializer) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.decodeSerializableValuePolymorphic' call
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.x1k().j1i_1.j1k_1;
      }
      if (tmp) {
        tmp$ret$0 = deserializer.ov(this);
        break $l$block;
      }
      var discriminator = classDiscriminator(deserializer.mv(), this.x1k());
      var tmp2 = this.v1k();
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = deserializer.mv().nw();
      if (!(tmp2 instanceof JsonObject)) {
        var tmp2_0 = 'Expected ' + getKClass(JsonObject).f1() + ', but had ' + getKClassFromExpression(tmp2).f1() + ' as the serialized body of ' + serialName;
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.i1e();
        var tmp_0;
        if (this.x1k().j1i_1.s1k_1) {
          var tmp$ret$6 = toString(tmp2);
          tmp_0 = toString(minify(tmp$ret$6));
        } else {
          tmp_0 = null;
        }
        var inputValue = tmp_0;
        throw JsonDecodingException.u1m(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, path, null, inputValue), tmp2_0, -1, path, inputValue, null);
      }
      var jsonTree = tmp2;
      var tmp0_safe_receiver = jsonTree.b1l(discriminator);
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
      var type = tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
      var tmp_1;
      try {
        tmp_1 = findPolymorphicSerializer(deserializer, this, type);
      } catch ($p) {
        var tmp_2;
        if ($p instanceof SerializationException) {
          var it = $p;
          // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
          var shortMessage = ensureNotNull(it.message);
          var tmp_3;
          if (this.x1k().j1i_1.s1k_1) {
            var tmp$ret$10 = jsonTree.toString();
            tmp_3 = toString(minify(tmp$ret$10));
          } else {
            tmp_3 = null;
          }
          var inputValue_0 = tmp_3;
          throw JsonDecodingException.u1m(access$formatDecodingException$tJsonExceptionsKt(-1, shortMessage, null, null, inputValue_0), shortMessage, -1, null, inputValue_0, null);
        } else {
          throw $p;
        }
      }
      var tmp_4 = tmp_1;
      var actualSerializer = isInterface(tmp_4, DeserializationStrategy) ? tmp_4 : THROW_CCE();
      tmp$ret$0 = readPolymorphicJson(this.x1k(), discriminator, jsonTree, actualSerializer);
    }
    return tmp$ret$0;
  }
  h1e(parentName, childName) {
    return childName;
  }
  wz(descriptor) {
    var currentObject = this.r1r();
    var tmp0_subject = descriptor.dy();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp_1 = this.x1k();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = descriptor.nw();
      if (!(currentObject instanceof JsonArray)) {
        var tmp2 = 'Expected ' + getKClass(JsonArray).f1() + ', but had ' + getKClassFromExpression(currentObject).f1() + ' as the serialized body of ' + serialName;
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.i1e();
        var tmp_2;
        if (this.x1k().j1i_1.s1k_1) {
          var tmp$ret$6 = toString(currentObject);
          tmp_2 = toString(minify(tmp$ret$6));
        } else {
          tmp_2 = null;
        }
        var inputValue = tmp_2;
        throw JsonDecodingException.u1m(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      tmp = new JsonTreeListDecoder(tmp_1, currentObject);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var this_0 = this.x1k();
        var keyDescriptor = carrierDescriptor(descriptor.ky(0), this_0.l10());
        var keyKind = keyDescriptor.dy();
        var tmp_3;
        var tmp_4;
        if (keyKind instanceof PrimitiveKind) {
          tmp_4 = true;
        } else {
          tmp_4 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_4) {
          var tmp_5 = this.x1k();
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName_0 = descriptor.nw();
          if (!(currentObject instanceof JsonObject)) {
            var tmp2_0 = 'Expected ' + getKClass(JsonObject).f1() + ', but had ' + getKClassFromExpression(currentObject).f1() + ' as the serialized body of ' + serialName_0;
            // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
            var path_0 = this.i1e();
            var tmp_6;
            if (this.x1k().j1i_1.s1k_1) {
              var tmp$ret$15 = toString(currentObject);
              tmp_6 = toString(minify(tmp$ret$15));
            } else {
              tmp_6 = null;
            }
            var inputValue_0 = tmp_6;
            throw JsonDecodingException.u1m(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, path_0, null, inputValue_0), tmp2_0, -1, path_0, inputValue_0, null);
          }
          tmp_3 = new JsonTreeMapDecoder(tmp_5, currentObject);
        } else {
          if (this_0.j1i_1.e1k_1) {
            var tmp_7 = this.x1k();
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
            // Inline function 'kotlinx.serialization.json.internal.cast' call
            var serialName_1 = descriptor.nw();
            if (!(currentObject instanceof JsonArray)) {
              var tmp2_1 = 'Expected ' + getKClass(JsonArray).f1() + ', but had ' + getKClassFromExpression(currentObject).f1() + ' as the serialized body of ' + serialName_1;
              // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
              var path_1 = this.i1e();
              var tmp_8;
              if (this.x1k().j1i_1.s1k_1) {
                var tmp$ret$23 = toString(currentObject);
                tmp_8 = toString(minify(tmp$ret$23));
              } else {
                tmp_8 = null;
              }
              var inputValue_1 = tmp_8;
              throw JsonDecodingException.u1m(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_1, path_1, null, inputValue_1), tmp2_1, -1, path_1, inputValue_1, null);
            }
            tmp_3 = new JsonTreeListDecoder(tmp_7, currentObject);
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp = tmp_3;
      } else {
        var tmp_9 = this.x1k();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        var serialName_2 = descriptor.nw();
        if (!(currentObject instanceof JsonObject)) {
          var tmp2_2 = 'Expected ' + getKClass(JsonObject).f1() + ', but had ' + getKClassFromExpression(currentObject).f1() + ' as the serialized body of ' + serialName_2;
          // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
          var path_2 = this.i1e();
          var tmp_10;
          if (this.x1k().j1i_1.s1k_1) {
            var tmp$ret$30 = toString(currentObject);
            tmp_10 = toString(minify(tmp$ret$30));
          } else {
            tmp_10 = null;
          }
          var inputValue_2 = tmp_10;
          throw JsonDecodingException.u1m(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_2, path_2, null, inputValue_2), tmp2_2, -1, path_2, inputValue_2, null);
        }
        tmp = new JsonTreeDecoder(tmp_9, currentObject, this.o1r_1);
      }
    }
    return tmp;
  }
  xz(descriptor) {
  }
  hz() {
    var tmp = this.r1r();
    return !(tmp instanceof JsonNull);
  }
  t1r(tag, enumDescriptor) {
    var tmp = this.x1k();
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
    var tmp2 = this.s1r(tag);
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var serialName = enumDescriptor.nw();
    if (!(tmp2 instanceof JsonPrimitive)) {
      var tmp2_0 = 'Expected ' + getKClass(JsonPrimitive).f1() + ', but had ' + getKClassFromExpression(tmp2).f1() + ' as the serialized body of ' + serialName;
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var path = this.q1r(tag);
      var tmp_0;
      if (this.x1k().j1i_1.s1k_1) {
        var tmp$ret$7 = toString(tmp2);
        tmp_0 = toString(minify(tmp$ret$7));
      } else {
        tmp_0 = null;
      }
      var inputValue = tmp_0;
      throw JsonDecodingException.u1m(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, path, null, inputValue), tmp2_0, -1, path, inputValue, null);
    }
    return getJsonNameIndexOrThrow(enumDescriptor, tmp, tmp2.d1l());
  }
  u1e(tag, enumDescriptor) {
    return this.t1r((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), enumDescriptor);
  }
  u1r(tag) {
    return !(this.s1r(tag) === JsonNull_getInstance());
  }
  k1e(tag) {
    return this.u1r((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  v1r(tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.s1r(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).f1() + ', but had ' + getKClassFromExpression(value).f1() + ' as the serialized body of ' + 'boolean';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.q1r(tag);
        var tmp;
        if (this.x1k().j1i_1.s1k_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw JsonDecodingException.u1m(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = get_booleanOrNull(literal);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'boolean', tag);
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'boolean', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  l1e(tag) {
    return this.v1r((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  w1r(tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.s1r(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).f1() + ', but had ' + getKClassFromExpression(value).f1() + ' as the serialized body of ' + 'byte';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.q1r(tag);
        var tmp;
        if (this.x1k().j1i_1.s1k_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw JsonDecodingException.u1m(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var result = parseLongImpl(literal);
        var tmp_0;
        // Inline function 'kotlin.ranges.contains' call
        var this_0 = numberRangeToNumber(-128, 127);
        if (contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
          tmp_0 = convertToByte(result);
        } else {
          tmp_0 = null;
        }
        var tmp0_elvis_lhs = tmp_0;
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'byte', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'byte', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  m1e(tag) {
    return this.w1r((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  x1r(tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.s1r(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).f1() + ', but had ' + getKClassFromExpression(value).f1() + ' as the serialized body of ' + 'short';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.q1r(tag);
        var tmp;
        if (this.x1k().j1i_1.s1k_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw JsonDecodingException.u1m(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var result = parseLongImpl(literal);
        var tmp_0;
        // Inline function 'kotlin.ranges.contains' call
        var this_0 = numberRangeToNumber(-32768, 32767);
        if (contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
          tmp_0 = convertToShort(result);
        } else {
          tmp_0 = null;
        }
        var tmp0_elvis_lhs = tmp_0;
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'short', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'short', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  n1e(tag) {
    return this.x1r((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  y1r(tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.s1r(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).f1() + ', but had ' + getKClassFromExpression(value).f1() + ' as the serialized body of ' + 'int';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.q1r(tag);
        var tmp;
        if (this.x1k().j1i_1.s1k_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw JsonDecodingException.u1m(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var result = parseLongImpl(literal);
        var tmp_0;
        // Inline function 'kotlin.ranges.contains' call
        var this_0 = numberRangeToNumber(-2147483648, 2147483647);
        if (contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
          tmp_0 = convertToInt(result);
        } else {
          tmp_0 = null;
        }
        var tmp0_elvis_lhs = tmp_0;
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'int', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'int', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  o1e(tag) {
    return this.y1r((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  z1r(tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.s1r(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).f1() + ', but had ' + getKClassFromExpression(value).f1() + ' as the serialized body of ' + 'long';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.q1r(tag);
        var tmp;
        if (this.x1k().j1i_1.s1k_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw JsonDecodingException.u1m(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = parseLongImpl(literal);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'long', tag);
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'long', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  p1e(tag) {
    return this.z1r((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  a1s(tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.s1r(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).f1() + ', but had ' + getKClassFromExpression(value).f1() + ' as the serialized body of ' + 'float';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.q1r(tag);
        var tmp;
        if (this.x1k().j1i_1.s1k_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw JsonDecodingException.u1m(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = get_float(literal);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'float', tag);
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'float', tag);
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$0;
    var specialFp = this.x1k().j1i_1.l1k_1;
    if (specialFp || isFinite(result))
      return result;
    // Inline function 'kotlinx.serialization.json.internal.InvalidFloatingPointDecoded' call
    var tmp2_0 = access$nonFiniteFpMessage$tJsonExceptionsKt(result, tag);
    // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
    var hint = "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'";
    var tmp_1;
    if (this.x1k().j1i_1.s1k_1) {
      var tmp$ret$13 = toString(this.r1r());
      tmp_1 = toString(minify(tmp$ret$13));
    } else {
      tmp_1 = null;
    }
    var inputValue_0 = tmp_1;
    throw JsonDecodingException.u1m(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, null, hint, inputValue_0), tmp2_0, -1, null, inputValue_0, hint);
  }
  q1e(tag) {
    return this.a1s((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  b1s(tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.s1r(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).f1() + ', but had ' + getKClassFromExpression(value).f1() + ' as the serialized body of ' + 'double';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.q1r(tag);
        var tmp;
        if (this.x1k().j1i_1.s1k_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw JsonDecodingException.u1m(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = get_double(literal);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'double', tag);
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'double', tag);
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$0;
    var specialFp = this.x1k().j1i_1.l1k_1;
    if (specialFp || isFinite_0(result))
      return result;
    // Inline function 'kotlinx.serialization.json.internal.InvalidFloatingPointDecoded' call
    var tmp2_0 = access$nonFiniteFpMessage$tJsonExceptionsKt(result, tag);
    // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
    var hint = "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'";
    var tmp_1;
    if (this.x1k().j1i_1.s1k_1) {
      var tmp$ret$13 = toString(this.r1r());
      tmp_1 = toString(minify(tmp$ret$13));
    } else {
      tmp_1 = null;
    }
    var inputValue_0 = tmp_1;
    throw JsonDecodingException.u1m(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, null, hint, inputValue_0), tmp2_0, -1, null, inputValue_0, hint);
  }
  r1e(tag) {
    return this.b1s((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  c1s(tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.s1r(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).f1() + ', but had ' + getKClassFromExpression(value).f1() + ' as the serialized body of ' + 'char';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.q1r(tag);
        var tmp;
        if (this.x1k().j1i_1.s1k_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw JsonDecodingException.u1m(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = new Char(single(literal.d1l()));
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'char', tag);
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_0.g3_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'char', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  s1e(tag) {
    return this.c1s((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  d1s(tag) {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = this.s1r(tag);
    if (!(value instanceof JsonPrimitive)) {
      var tmp2 = 'Expected ' + getKClass(JsonPrimitive).f1() + ', but had ' + getKClassFromExpression(value).f1() + ' as the serialized body of ' + 'string';
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var path = this.q1r(tag);
      var tmp;
      if (this.x1k().j1i_1.s1k_1) {
        var tmp$ret$6 = toString(value);
        tmp = toString(minify(tmp$ret$6));
      } else {
        tmp = null;
      }
      var inputValue = tmp;
      throw JsonDecodingException.u1m(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
    }
    var value_0 = value;
    if (!(value_0 instanceof JsonLiteral)) {
      var tmp2_0 = "Expected string value for a non-null key '" + tag + "', got null literal instead";
      var tmp4 = this.q1r(tag);
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var hint = "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.";
      var tmp_0;
      if (this.x1k().j1i_1.s1k_1) {
        var tmp$ret$10 = toString(this.r1r());
        tmp_0 = toString(minify(tmp$ret$10));
      } else {
        tmp_0 = null;
      }
      var inputValue_0 = tmp_0;
      throw JsonDecodingException.u1m(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, tmp4, hint, inputValue_0), tmp2_0, -1, tmp4, inputValue_0, hint);
    }
    if (!value_0.r1l_1 && !this.x1k().j1i_1.d1k_1) {
      var tmp2_1 = "String literal for value of key '" + tag + "' should be quoted";
      var tmp4_0 = this.q1r(tag);
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var hint_0 = "Use 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.";
      var tmp_1;
      if (this.x1k().j1i_1.s1k_1) {
        var tmp$ret$14 = toString(this.r1r());
        tmp_1 = toString(minify(tmp$ret$14));
      } else {
        tmp_1 = null;
      }
      var inputValue_1 = tmp_1;
      throw JsonDecodingException.u1m(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_1, tmp4_0, hint_0, inputValue_1), tmp2_1, -1, tmp4_0, inputValue_1, hint_0);
    }
    return value_0.t1l_1;
  }
  t1e(tag) {
    return this.d1s((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  e1s(tag, inlineDescriptor) {
    var tmp;
    if (get_isUnsignedNumber(inlineDescriptor)) {
      var tmp_0 = this.x1k();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      var tmp2 = this.s1r(tag);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = inlineDescriptor.nw();
      if (!(tmp2 instanceof JsonPrimitive)) {
        var tmp2_0 = 'Expected ' + getKClass(JsonPrimitive).f1() + ', but had ' + getKClassFromExpression(tmp2).f1() + ' as the serialized body of ' + serialName;
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.q1r(tag);
        var tmp_1;
        if (this.x1k().j1i_1.s1k_1) {
          var tmp$ret$7 = toString(tmp2);
          tmp_1 = toString(minify(tmp$ret$7));
        } else {
          tmp_1 = null;
        }
        var inputValue = tmp_1;
        throw JsonDecodingException.u1m(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, path, null, inputValue), tmp2_0, -1, path, inputValue, null);
      }
      var lexer = StringJsonLexer_0(tmp_0, tmp2.d1l());
      tmp = new JsonDecoderForUnsignedTypes(lexer, this.x1k());
    } else {
      tmp = super.v1e(tag, inlineDescriptor);
    }
    return tmp;
  }
  v1e(tag, inlineDescriptor) {
    return this.e1s((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
  }
  tz(descriptor) {
    return !(this.g1e() == null) ? super.tz(descriptor) : (new JsonPrimitiveDecoder(this.x1k(), this.w2(), this.o1r_1)).tz(descriptor);
  }
}
class JsonTreeDecoder extends AbstractJsonTreeDecoder {
  constructor(json, value, polymorphicDiscriminator, polyDescriptor) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    polyDescriptor = polyDescriptor === VOID ? null : polyDescriptor;
    super(json, value, polymorphicDiscriminator);
    this.l1s_1 = value;
    this.m1s_1 = polyDescriptor;
    this.n1s_1 = 0;
    this.o1s_1 = false;
  }
  w2() {
    return this.l1s_1;
  }
  n10(descriptor) {
    $l$loop: while (this.n1s_1 < descriptor.fy()) {
      var _unary__edvuaz = this.n1s_1;
      this.n1s_1 = _unary__edvuaz + 1 | 0;
      var name = this.b1e(descriptor, _unary__edvuaz);
      var index = this.n1s_1 - 1 | 0;
      this.o1s_1 = false;
      var tmp;
      // Inline function 'kotlin.collections.contains' call
      // Inline function 'kotlin.collections.containsKey' call
      var this_0 = this.w2();
      if ((isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).a4(name)) {
        tmp = true;
      } else {
        tmp = setForceNull(this, descriptor, index);
      }
      if (tmp) {
        if (!this.p1r_1.i1k_1)
          return index;
        var tmp0 = this.x1k();
        var tmp$ret$2;
        $l$block_2: {
          // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
          var isOptional = descriptor.ly(index);
          var elementDescriptor = descriptor.ky(index);
          var tmp_0;
          if (isOptional && !elementDescriptor.wx()) {
            var tmp_1 = this.p1s(name);
            tmp_0 = tmp_1 instanceof JsonNull;
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            tmp$ret$2 = true;
            break $l$block_2;
          }
          if (equals(elementDescriptor.dy(), ENUM_getInstance())) {
            var tmp_2;
            if (elementDescriptor.wx()) {
              var tmp_3 = this.p1s(name);
              tmp_2 = tmp_3 instanceof JsonNull;
            } else {
              tmp_2 = false;
            }
            if (tmp_2) {
              tmp$ret$2 = false;
              break $l$block_2;
            }
            var tmp_4 = this.p1s(name);
            var tmp0_safe_receiver = tmp_4 instanceof JsonPrimitive ? tmp_4 : null;
            var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : get_contentOrNull(tmp0_safe_receiver);
            var tmp_5;
            if (tmp0_elvis_lhs == null) {
              tmp$ret$2 = false;
              break $l$block_2;
            } else {
              tmp_5 = tmp0_elvis_lhs;
            }
            var enumValue = tmp_5;
            var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
            var coerceToNull = !tmp0.j1i_1.g1k_1 && elementDescriptor.wx();
            if (enumIndex === -3 && (isOptional || coerceToNull)) {
              if (setForceNull(this, descriptor, index))
                return index;
              tmp$ret$2 = true;
              break $l$block_2;
            }
          }
          tmp$ret$2 = false;
        }
        if (tmp$ret$2)
          continue $l$loop;
        return index;
      }
    }
    return -1;
  }
  hz() {
    return !this.o1s_1 && super.hz();
  }
  c1e(descriptor, index) {
    var strategy = namingStrategy(descriptor, this.x1k());
    var baseName = descriptor.hy(index);
    if (strategy == null) {
      if (!this.p1r_1.m1k_1)
        return baseName;
      if (this.w2().d4().t3(baseName))
        return baseName;
    }
    var deserializationNamesMap_0 = deserializationNamesMap(this.x1k(), descriptor);
    // Inline function 'kotlin.collections.find' call
    var tmp0 = this.w2().d4();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.l1();
      while (_iterator__ex2g4s.m1()) {
        var element = _iterator__ex2g4s.n1();
        if (deserializationNamesMap_0.c4(element) === index) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    var fallbackName = strategy == null ? null : strategy.f1p(descriptor, index, baseName);
    return fallbackName == null ? baseName : fallbackName;
  }
  s1r(tag) {
    return getValue(this.w2(), tag);
  }
  p1s(tag) {
    return this.w2().b1l(tag);
  }
  wz(descriptor) {
    if (descriptor === this.m1s_1) {
      var tmp = this.x1k();
      var tmp2 = this.r1r();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = this.m1s_1.nw();
      if (!(tmp2 instanceof JsonObject)) {
        var tmp2_0 = 'Expected ' + getKClass(JsonObject).f1() + ', but had ' + getKClassFromExpression(tmp2).f1() + ' as the serialized body of ' + serialName;
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.i1e();
        var tmp_0;
        if (this.x1k().j1i_1.s1k_1) {
          var tmp$ret$6 = toString(tmp2);
          tmp_0 = toString(minify(tmp$ret$6));
        } else {
          tmp_0 = null;
        }
        var inputValue = tmp_0;
        throw JsonDecodingException.u1m(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, path, null, inputValue), tmp2_0, -1, path, inputValue, null);
      }
      return new JsonTreeDecoder(tmp, tmp2, this.o1r_1, this.m1s_1);
    }
    return super.wz(descriptor);
  }
  xz(descriptor) {
    var tmp;
    if (ignoreUnknownKeys(descriptor, this.x1k())) {
      tmp = true;
    } else {
      var tmp_0 = descriptor.dy();
      tmp = tmp_0 instanceof PolymorphicKind;
    }
    if (tmp)
      return Unit_instance;
    var strategy = namingStrategy(descriptor, this.x1k());
    var tmp_1;
    if (strategy == null && !this.p1r_1.m1k_1) {
      tmp_1 = jsonCachedSerialNames(descriptor);
    } else if (!(strategy == null)) {
      tmp_1 = deserializationNamesMap(this.x1k(), descriptor).d4();
    } else {
      var tmp_2 = jsonCachedSerialNames(descriptor);
      var tmp0_safe_receiver = get_schemaCache(this.x1k()).p1q(descriptor, get_JsonDeserializationNamesKey());
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.d4();
      var tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
      tmp_1 = plus_0(tmp_2, tmp$ret$0);
    }
    var names = tmp_1;
    var _iterator__ex2g4s = this.w2().d4().l1();
    while (_iterator__ex2g4s.m1()) {
      var key = _iterator__ex2g4s.n1();
      if (!names.t3(key) && !(key === this.o1r_1)) {
        var tmp2 = "Encountered an unknown key '" + key + "'";
        var tmp4 = this.i1e();
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var hint = "Use 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.";
        var tmp_3;
        if (this.x1k().j1i_1.s1k_1) {
          var tmp$ret$4 = this.w2().toString();
          tmp_3 = toString(minify(tmp$ret$4));
        } else {
          tmp_3 = null;
        }
        var inputValue = tmp_3;
        throw JsonDecodingException.u1m(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, tmp4, hint, inputValue), tmp2, -1, tmp4, inputValue, hint);
      }
    }
  }
}
class JsonTreeListDecoder extends AbstractJsonTreeDecoder {
  constructor(json, value) {
    super(json, value);
    this.w1s_1 = value;
    this.x1s_1 = this.w1s_1.l2();
    this.y1s_1 = -1;
  }
  w2() {
    return this.w1s_1;
  }
  c1e(descriptor, index) {
    return index.toString();
  }
  s1r(tag) {
    return this.w1s_1.j2(toInt(tag));
  }
  n10(descriptor) {
    while (this.y1s_1 < (this.x1s_1 - 1 | 0)) {
      this.y1s_1 = this.y1s_1 + 1 | 0;
      return this.y1s_1;
    }
    return -1;
  }
}
class JsonPrimitiveDecoder extends AbstractJsonTreeDecoder {
  constructor(json, value, polymorphicDiscriminator) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    super(json, value, polymorphicDiscriminator);
    this.f1t_1 = value;
    this.w1e('primitive');
  }
  w2() {
    return this.f1t_1;
  }
  n10(descriptor) {
    return 0;
  }
  s1r(tag) {
    // Inline function 'kotlin.require' call
    if (!(tag === 'primitive')) {
      var message = "This input can only handle primitives with 'primitive' tag";
      throw IllegalArgumentException.h2(toString(message));
    }
    return this.f1t_1;
  }
}
class JsonTreeMapDecoder extends JsonTreeDecoder {
  constructor(json, value) {
    super(json, value);
    this.q1t_1 = value;
    this.r1t_1 = toList(this.q1t_1.d4());
    this.s1t_1 = imul(this.r1t_1.l2(), 2);
    this.t1t_1 = -1;
  }
  w2() {
    return this.q1t_1;
  }
  c1e(descriptor, index) {
    var i = index / 2 | 0;
    return this.r1t_1.j2(i);
  }
  n10(descriptor) {
    while (this.t1t_1 < (this.s1t_1 - 1 | 0)) {
      this.t1t_1 = this.t1t_1 + 1 | 0;
      return this.t1t_1;
    }
    return -1;
  }
  s1r(tag) {
    return (this.t1t_1 % 2 | 0) === 0 ? JsonPrimitive_0(tag) : getValue(this.q1t_1, tag);
  }
  xz(descriptor) {
  }
}
class AbstractJsonTreeEncoder extends NamedValueEncoder {
  constructor(json, nodeConsumer) {
    super();
    this.v1t_1 = json;
    this.w1t_1 = nodeConsumer;
    this.x1t_1 = this.v1t_1.j1i_1;
    this.y1t_1 = null;
    this.z1t_1 = null;
  }
  x1k() {
    return this.v1t_1;
  }
  l10() {
    return this.v1t_1.l10();
  }
  c1e(descriptor, index) {
    return getJsonElementName(descriptor, this.v1t_1, index);
  }
  b1n(element) {
    var tmp;
    if (!(this.y1t_1 == null)) {
      tmp = !(element instanceof JsonObject);
    } else {
      tmp = false;
    }
    if (tmp) {
      throwJsonElementPolymorphicException(this.z1t_1, element);
    }
    this.p11(JsonElementSerializer_getInstance(), element);
  }
  u11(descriptor, index) {
    return this.x1t_1.b1k_1;
  }
  h1e(parentName, childName) {
    return childName;
  }
  s11() {
  }
  s10() {
    var tmp0_elvis_lhs = this.g1e();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this.w1t_1(JsonNull_getInstance());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tag = tmp;
    this.j1u(tag);
  }
  j1u(tag) {
    return this.h1u(tag, JsonNull_getInstance());
  }
  c1f(tag) {
    return this.j1u((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  k1u(tag, value) {
    return this.h1u(tag, JsonPrimitive_1(value));
  }
  d1f(tag, value) {
    return this.k1u((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  }
  l1u(tag, value) {
    return this.h1u(tag, JsonPrimitive_1(value));
  }
  e1f(tag, value) {
    return this.l1u((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  }
  m1u(tag, value) {
    return this.h1u(tag, JsonPrimitive_1(value));
  }
  f1f(tag, value) {
    return this.m1u((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  }
  n1u(tag, value) {
    return this.h1u(tag, JsonPrimitive_1(value));
  }
  g1f(tag, value) {
    return this.n1u((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  }
  o1u(tag, value) {
    this.h1u(tag, JsonPrimitive_1(value));
    if (!this.x1t_1.l1k_1 && !isFinite(value)) {
      throw InvalidFloatingPointEncoded(value, tag);
    }
  }
  h1f(tag, value) {
    return this.o1u((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  }
  p11(serializer, value) {
    if (!(this.g1e() == null) || !get_requiresTopLevelTag(carrierDescriptor(serializer.mv(), this.l10()))) {
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
        if (this.x1k().j1i_1.j1k_1) {
          serializer.nv(this, value);
          break $l$block;
        }
        var isPolymorphicSerializer = serializer instanceof AbstractPolymorphicSerializer;
        var tmp;
        if (isPolymorphicSerializer) {
          tmp = !this.x1k().j1i_1.r1k_1.equals(ClassDiscriminatorMode_NONE_getInstance());
        } else {
          var tmp_0;
          switch (this.x1k().j1i_1.r1k_1.s1_1) {
            case 0:
            case 2:
              tmp_0 = false;
              break;
            case 1:
              // Inline function 'kotlin.let' call

              var it = serializer.mv().dy();
              tmp_0 = equals(it, CLASS_getInstance()) || equals(it, OBJECT_getInstance());
              break;
            default:
              noWhenBranchMatchedException();
              break;
          }
          tmp = tmp_0;
        }
        var needDiscriminator = tmp;
        var baseClassDiscriminator = needDiscriminator ? classDiscriminator(serializer.mv(), this.x1k()) : null;
        var tmp_1;
        if (isPolymorphicSerializer) {
          var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
          $l$block_0: {
            // Inline function 'kotlin.requireNotNull' call
            if (value == null) {
              var message = 'Value for serializer ' + toString(serializer.mv()) + ' should always be non-null. Please report issue to the kotlinx.serialization tracker.';
              throw IllegalArgumentException.h2(toString(message));
            } else {
              break $l$block_0;
            }
          }
          var actual = findPolymorphicSerializer_0(casted, this, value);
          tmp_1 = isInterface(actual, SerializationStrategy) ? actual : THROW_CCE();
        } else {
          tmp_1 = serializer;
        }
        var actualSerializer = tmp_1;
        if (!(baseClassDiscriminator == null)) {
          access$checkEncodingConflicts$tPolymorphicKt(this.x1k(), serializer, actualSerializer, baseClassDiscriminator);
          checkKind_0(actualSerializer.mv().dy());
          var serialName = actualSerializer.mv().nw();
          this.y1t_1 = baseClassDiscriminator;
          this.z1t_1 = serialName;
        }
        actualSerializer.nv(this, value);
      }
    } else {
      // Inline function 'kotlin.run' call
      (new JsonPrimitiveEncoder(this.v1t_1, this.w1t_1)).p11(serializer, value);
    }
  }
  p1u(tag, value) {
    this.h1u(tag, JsonPrimitive_1(value));
    if (!this.x1t_1.l1k_1 && !isFinite_0(value)) {
      throw InvalidFloatingPointEncoded(value, tag);
    }
  }
  i1f(tag, value) {
    return this.p1u((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  }
  q1u(tag, value) {
    return this.h1u(tag, JsonPrimitive_2(value));
  }
  j1f(tag, value) {
    return this.q1u((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  }
  r1u(tag, value) {
    return this.h1u(tag, JsonPrimitive_0(toString_1(value)));
  }
  k1f(tag, value) {
    return this.r1u((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  }
  s1u(tag, value) {
    return this.h1u(tag, JsonPrimitive_0(value));
  }
  l1f(tag, value) {
    return this.s1u((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  }
  t1u(tag, enumDescriptor, ordinal) {
    return this.h1u(tag, JsonPrimitive_0(enumDescriptor.hy(ordinal)));
  }
  m1f(tag, enumDescriptor, ordinal) {
    return this.t1u((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), enumDescriptor, ordinal);
  }
  u1u(tag, value) {
    this.h1u(tag, JsonPrimitive_0(toString(value)));
  }
  a1f(tag, value) {
    return this.u1u((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  }
  v1u(tag, inlineDescriptor) {
    return get_isUnsignedNumber(inlineDescriptor) ? inlineUnsignedNumberEncoder(this, tag) : get_isUnquotedLiteral(inlineDescriptor) ? inlineUnquotedLiteralEncoder(this, tag, inlineDescriptor) : super.n1f(tag, inlineDescriptor);
  }
  n1f(tag, inlineDescriptor) {
    return this.v1u((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
  }
  d11(descriptor) {
    var tmp;
    if (!(this.g1e() == null)) {
      if (!(this.y1t_1 == null))
        this.z1t_1 = descriptor.nw();
      tmp = super.d11(descriptor);
    } else {
      tmp = (new JsonPrimitiveEncoder(this.v1t_1, this.w1t_1)).d11(descriptor);
    }
    return tmp;
  }
  wz(descriptor) {
    var tmp;
    if (this.g1e() == null) {
      tmp = this.w1t_1;
    } else {
      tmp = AbstractJsonTreeEncoder$beginStructure$lambda(this);
    }
    var consumer = tmp;
    var tmp0_subject = descriptor.dy();
    var tmp_0;
    var tmp_1;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_1 = true;
    } else {
      tmp_1 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_1) {
      tmp_0 = new JsonTreeListEncoder(this.v1t_1, consumer);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var this_0 = this.v1t_1;
        var keyDescriptor = carrierDescriptor(descriptor.ky(0), this_0.l10());
        var keyKind = keyDescriptor.dy();
        var tmp_2;
        var tmp_3;
        if (keyKind instanceof PrimitiveKind) {
          tmp_3 = true;
        } else {
          tmp_3 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_3) {
          tmp_2 = new JsonTreeMapEncoder(this.v1t_1, consumer);
        } else {
          if (this_0.j1i_1.e1k_1) {
            tmp_2 = new JsonTreeListEncoder(this.v1t_1, consumer);
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp_0 = tmp_2;
      } else {
        tmp_0 = new JsonTreeEncoder(this.v1t_1, consumer);
      }
    }
    var encoder = tmp_0;
    var discriminator = this.y1t_1;
    if (!(discriminator == null)) {
      if (encoder instanceof JsonTreeMapEncoder) {
        encoder.h1u('key', JsonPrimitive_0(discriminator));
        var tmp1_elvis_lhs = this.z1t_1;
        encoder.h1u('value', JsonPrimitive_0(tmp1_elvis_lhs == null ? descriptor.nw() : tmp1_elvis_lhs));
      } else {
        var tmp2_elvis_lhs = this.z1t_1;
        encoder.h1u(discriminator, JsonPrimitive_0(tmp2_elvis_lhs == null ? descriptor.nw() : tmp2_elvis_lhs));
      }
      this.y1t_1 = null;
      this.z1t_1 = null;
    }
    return encoder;
  }
  o1f(descriptor) {
    this.w1t_1(this.i1u());
  }
}
class JsonTreeEncoder extends AbstractJsonTreeEncoder {
  constructor(json, nodeConsumer) {
    super(json, nodeConsumer);
    var tmp = this;
    // Inline function 'kotlin.collections.linkedMapOf' call
    tmp.g1u_1 = LinkedHashMap.l5();
  }
  h1u(key, element) {
    // Inline function 'kotlin.collections.set' call
    this.g1u_1.f4(key, element);
  }
  q11(descriptor, index, serializer, value) {
    if (!(value == null) || this.x1t_1.g1k_1) {
      super.q11(descriptor, index, serializer, value);
    }
  }
  i1u() {
    return new JsonObject(this.g1u_1);
  }
}
class AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1 extends AbstractEncoder {
  constructor(this$0, $tag) {
    return new.target.z1u(this$0, $tag);
  }
  static z1u(this$0, $tag, $box) {
    if ($box === VOID)
      $box = {};
    $box.x1u_1 = this$0;
    $box.y1u_1 = $tag;
    var $this = this.p10($box);
    $this.w1u_1 = this$0.v1t_1.l10();
    return $this;
  }
  l10() {
    return this.w1u_1;
  }
  e1v(s) {
    return this.x1u_1.h1u(this.y1u_1, new JsonLiteral(s, false));
  }
  w10(value) {
    // Inline function 'kotlin.toUInt' call
    var tmp$ret$0 = _UInt___init__impl__l7qpdl(value);
    return this.e1v(UInt__toString_impl_dbgl21(tmp$ret$0));
  }
  x10(value) {
    // Inline function 'kotlin.toULong' call
    var tmp$ret$0 = _ULong___init__impl__c78o9k(value);
    return this.e1v(ULong__toString_impl_f9au7k(tmp$ret$0));
  }
  u10(value) {
    // Inline function 'kotlin.toUByte' call
    var tmp$ret$0 = _UByte___init__impl__g9hnc4(value);
    return this.e1v(UByte__toString_impl_v72jg(tmp$ret$0));
  }
  v10(value) {
    // Inline function 'kotlin.toUShort' call
    var tmp$ret$0 = _UShort___init__impl__jigrne(value);
    return this.e1v(UShort__toString_impl_edaoee(tmp$ret$0));
  }
}
class AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1 extends AbstractEncoder {
  constructor(this$0, $tag, $inlineDescriptor) {
    return new.target.d1v(this$0, $tag, $inlineDescriptor);
  }
  static d1v(this$0, $tag, $inlineDescriptor, $box) {
    if ($box === VOID)
      $box = {};
    $box.a1v_1 = this$0;
    $box.b1v_1 = $tag;
    $box.c1v_1 = $inlineDescriptor;
    return this.p10($box);
  }
  l10() {
    return this.a1v_1.v1t_1.l10();
  }
  b11(value) {
    return this.a1v_1.h1u(this.b1v_1, new JsonLiteral(value, false, this.c1v_1));
  }
}
class JsonPrimitiveEncoder extends AbstractJsonTreeEncoder {
  constructor(json, nodeConsumer) {
    super(json, nodeConsumer);
    this.u1v_1 = null;
    this.w1e('primitive');
  }
  h1u(key, element) {
    // Inline function 'kotlin.require' call
    if (!(key === 'primitive')) {
      var message = "This output can only consume primitives with 'primitive' tag";
      throw IllegalArgumentException.h2(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.u1v_1 == null)) {
      var message_0 = 'Primitive element was already recorded. Does call to .encodeXxx happen more than once?';
      throw IllegalArgumentException.h2(toString(message_0));
    }
    this.u1v_1 = element;
    this.w1t_1(element);
  }
  i1u() {
    var tmp0 = this.u1v_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp0 == null) {
        var message = 'Primitive element has not been recorded. Is call to .encodeXxx is missing in serializer?';
        throw IllegalArgumentException.h2(toString(message));
      } else {
        tmp$ret$0 = tmp0;
        break $l$block;
      }
    }
    return tmp$ret$0;
  }
}
class JsonTreeListEncoder extends AbstractJsonTreeEncoder {
  constructor(json, nodeConsumer) {
    super(json, nodeConsumer);
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.b1w_1 = ArrayList.k2();
  }
  c1e(descriptor, index) {
    return index.toString();
  }
  h1u(key, element) {
    var idx = toInt(key);
    this.b1w_1.o4(idx, element);
  }
  i1u() {
    return new JsonArray(this.b1w_1);
  }
}
class JsonTreeMapEncoder extends JsonTreeEncoder {
  constructor(json, nodeConsumer) {
    super(json, nodeConsumer);
    this.n1v_1 = true;
  }
  h1u(key, element) {
    if (this.n1v_1) {
      var tmp = this;
      var tmp_0;
      if (element instanceof JsonPrimitive) {
        tmp_0 = element.d1l();
      } else {
        if (element instanceof JsonObject) {
          throw InvalidKeyKindException(JsonObjectSerializer_getInstance().a1m_1);
        } else {
          if (element instanceof JsonArray) {
            throw InvalidKeyKindException(JsonArraySerializer_getInstance().b1m_1);
          } else {
            noWhenBranchMatchedException();
          }
        }
      }
      tmp.m1v_1 = tmp_0;
      this.n1v_1 = false;
    } else {
      var tmp0 = this.g1u_1;
      // Inline function 'kotlin.collections.set' call
      var key_0 = _get_tag__e6h4qf(this);
      tmp0.f4(key_0, element);
      this.n1v_1 = true;
    }
  }
  i1u() {
    return new JsonObject(this.g1u_1);
  }
}
class WriteMode extends Enum {
  constructor(name, ordinal, begin, end) {
    super(name, ordinal);
    this.c1r_1 = begin;
    this.d1r_1 = end;
  }
}
class AbstractJsonLexer {
  constructor(configuration) {
    this.b1j_1 = configuration;
    this.c1j_1 = 0;
    this.d1j_1 = new JsonPath(this.b1j_1);
    this.e1j_1 = null;
    this.f1j_1 = StringBuilder.h1();
  }
  f1w() {
  }
  s1q() {
    var current = this.g1w();
    var source = this.d1w();
    if (current >= charSequenceLength(source) || current === -1)
      return false;
    if (charSequenceGet(source, current) === _Char___init__impl__6a9atx(44)) {
      this.c1j_1 = this.c1j_1 + 1 | 0;
      return true;
    }
    return false;
  }
  h1w(c) {
    return c === _Char___init__impl__6a9atx(125) || c === _Char___init__impl__6a9atx(93) || (c === _Char___init__impl__6a9atx(58) || c === _Char___init__impl__6a9atx(44)) ? false : true;
  }
  g1j() {
    var nextToken = this.m1q();
    if (!(nextToken === 10)) {
      this.b1p('Expected EOF after parsing, but had ' + toString_1(charSequenceGet(this.d1w(), this.c1j_1 - 1 | 0)) + ' instead');
    }
  }
  g1q(expected) {
    var token = this.m1q();
    if (!(token === expected)) {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected_0 = tokenDescription(expected);
      var position = true && this.c1j_1 > 0 ? this.c1j_1 - 1 | 0 : this.c1j_1;
      var s = this.c1j_1 === charSequenceLength(this.d1w()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.d1w(), position));
      var tmp$ret$1 = 'Expected ' + expected_0 + ", but had '" + s + "' instead";
      this.b1p(tmp$ret$1, position);
    }
    return token;
  }
  i1w(expected) {
    if (this.c1j_1 > 0 && expected === _Char___init__impl__6a9atx(34)) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.withPositionRollback' call
        var snapshot = this.c1j_1;
        try {
          this.c1j_1 = this.c1j_1 - 1 | 0;
          tmp$ret$0 = this.k1q();
          break $l$block;
        }finally {
          this.c1j_1 = snapshot;
        }
      }
      var inputLiteral = tmp$ret$0;
      if (inputLiteral === 'null') {
        this.a1p("Expected string literal but 'null' literal was found", this.c1j_1 - 1 | 0, "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.");
      }
    }
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
    var expectedToken = charToTokenClass(expected);
    var expected_0 = tokenDescription(expectedToken);
    var position = true && this.c1j_1 > 0 ? this.c1j_1 - 1 | 0 : this.c1j_1;
    var s = this.c1j_1 === charSequenceLength(this.d1w()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.d1w(), position));
    var tmp$ret$3 = 'Expected ' + expected_0 + ", but had '" + s + "' instead";
    this.b1p(tmp$ret$3, position);
  }
  h1q() {
    var source = this.d1w();
    var cpos = this.c1j_1;
    $l$loop_0: while (true) {
      cpos = this.e1w(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var ch = charSequenceGet(source, cpos);
      if (ch === _Char___init__impl__6a9atx(32) || ch === _Char___init__impl__6a9atx(10) || ch === _Char___init__impl__6a9atx(13) || ch === _Char___init__impl__6a9atx(9)) {
        cpos = cpos + 1 | 0;
        continue $l$loop_0;
      }
      this.c1j_1 = cpos;
      return charToTokenClass(ch);
    }
    this.c1j_1 = cpos;
    return 10;
  }
  t1q(doConsume) {
    var current = this.g1w();
    current = this.e1w(current);
    var len = charSequenceLength(this.d1w()) - current | 0;
    if (len < 4 || current === -1)
      return false;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(charCodeAt('null', i) === charSequenceGet(this.d1w(), current + i | 0)))
          return false;
      }
       while (inductionVariable <= 3);
    if (len > 4 && charToTokenClass(charSequenceGet(this.d1w(), current + 4 | 0)) === 0)
      return false;
    if (doConsume) {
      this.c1j_1 = current + 4 | 0;
    }
    return true;
  }
  e1r(doConsume, $super) {
    doConsume = doConsume === VOID ? true : doConsume;
    return $super === VOID ? this.t1q(doConsume) : $super.t1q.call(this, doConsume);
  }
  u1q(isLenient) {
    var token = this.h1q();
    var tmp;
    if (isLenient) {
      if (!(token === 1) && !(token === 0))
        return null;
      tmp = this.k1q();
    } else {
      if (!(token === 1))
        return null;
      tmp = this.j1q();
    }
    var string = tmp;
    this.e1j_1 = string;
    return string;
  }
  j1w() {
    this.e1j_1 = null;
  }
  k1w(startPos, endPos) {
    // Inline function 'kotlin.text.substring' call
    var this_0 = this.d1w();
    return toString(charSequenceSubSequence(this_0, startPos, endPos));
  }
  j1q() {
    if (!(this.e1j_1 == null)) {
      return takePeeked(this);
    }
    return this.x1q();
  }
  consumeString2(source, startPosition, current) {
    var currentPosition = current;
    var lastPosition = startPosition;
    var char = charSequenceGet(source, currentPosition);
    var usedAppend = false;
    while (!(char === _Char___init__impl__6a9atx(34))) {
      if (char === _Char___init__impl__6a9atx(92)) {
        usedAppend = true;
        currentPosition = this.e1w(appendEscape(this, lastPosition, currentPosition));
        if (currentPosition === -1) {
          this.b1p('Unexpected EOF', currentPosition);
        }
        lastPosition = currentPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= charSequenceLength(source)) {
          usedAppend = true;
          this.c1w(lastPosition, currentPosition);
          currentPosition = this.e1w(currentPosition);
          if (currentPosition === -1) {
            this.b1p('Unexpected EOF', currentPosition);
          }
          lastPosition = currentPosition;
        }
      }
      char = charSequenceGet(source, currentPosition);
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.k1w(lastPosition, currentPosition);
    } else {
      tmp = decodedString(this, lastPosition, currentPosition);
    }
    var string = tmp;
    this.c1j_1 = currentPosition + 1 | 0;
    return string;
  }
  y1q() {
    var result = this.k1q();
    if (result === 'null' && wasUnquotedString(this)) {
      this.b1p("Unexpected 'null' value instead of string literal");
    }
    return result;
  }
  k1q() {
    if (!(this.e1j_1 == null)) {
      return takePeeked(this);
    }
    var current = this.g1w();
    if (current >= charSequenceLength(this.d1w()) || current === -1) {
      this.b1p('EOF', current);
    }
    var token = charToTokenClass(charSequenceGet(this.d1w(), current));
    if (token === 1) {
      return this.j1q();
    }
    if (!(token === 0)) {
      this.b1p('Expected beginning of the string, but got ' + toString_1(charSequenceGet(this.d1w(), current)));
    }
    var usedAppend = false;
    while (charToTokenClass(charSequenceGet(this.d1w(), current)) === 0) {
      current = current + 1 | 0;
      if (current >= charSequenceLength(this.d1w())) {
        usedAppend = true;
        this.c1w(this.c1j_1, current);
        var eof = this.e1w(current);
        if (eof === -1) {
          this.c1j_1 = current;
          return decodedString(this, 0, 0);
        } else {
          current = eof;
        }
      }
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.k1w(this.c1j_1, current);
    } else {
      tmp = decodedString(this, this.c1j_1, current);
    }
    var result = tmp;
    this.c1j_1 = current;
    return result;
  }
  c1w(fromIndex, toIndex) {
    this.f1j_1.ug(this.d1w(), fromIndex, toIndex);
  }
  w1q(allowLenientStrings) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var tokenStack = ArrayList.k2();
    var lastToken = this.h1q();
    if (!(lastToken === 8) && !(lastToken === 6)) {
      this.k1q();
      return Unit_instance;
    }
    $l$loop: while (true) {
      lastToken = this.h1q();
      if (lastToken === 1) {
        if (allowLenientStrings)
          this.k1q();
        else
          this.x1q();
        continue $l$loop;
      }
      var tmp0_subject = lastToken;
      if (tmp0_subject === 8 || tmp0_subject === 6) {
        tokenStack.z1(lastToken);
      } else if (tmp0_subject === 9) {
        if (!(last(tokenStack) === 8)) {
          this.b1p('found ] instead of }');
        }
        removeLast(tokenStack);
      } else if (tmp0_subject === 7) {
        if (!(last(tokenStack) === 6)) {
          this.b1p('found } instead of ]');
        }
        removeLast(tokenStack);
      } else if (tmp0_subject === 10) {
        this.b1p('Unexpected end of input due to malformed JSON during ignoring unknown keys');
      }
      this.m1q();
      if (tokenStack.l2() === 0)
        return Unit_instance;
    }
  }
  toString() {
    return "JsonReader(source='" + toString(this.d1w()) + "', currentPosition=" + this.c1j_1 + ')';
  }
  v1q(key) {
    var processed = this.k1w(0, this.c1j_1);
    var lastIndexOf_0 = lastIndexOf(processed, key);
    this.a1p("Encountered an unknown key '" + key + "'", lastIndexOf_0, "Use 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.");
  }
  a1p(message, position, hint) {
    throw decodingExceptionOf_0(this, message, position, this.d1j_1.p1p(), hint, this.d1w());
  }
  b1p(message, position, hint, $super) {
    position = position === VOID ? this.c1j_1 : position;
    hint = hint === VOID ? null : hint;
    return $super === VOID ? this.a1p(message, position, hint) : $super.a1p.call(this, message, position, hint);
  }
  g1r() {
    var current = this.g1w();
    current = this.e1w(current);
    if (current >= charSequenceLength(this.d1w()) || current === -1) {
      this.b1p('EOF');
    }
    var tmp;
    if (charSequenceGet(this.d1w(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      if (current === charSequenceLength(this.d1w())) {
        this.b1p('EOF');
      }
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var accumulator = 0n;
    var exponentAccumulator = 0n;
    var isNegative = false;
    var isExponentPositive = false;
    var hasExponent = false;
    var start = current;
    $l$loop_4: while (!(current === charSequenceLength(this.d1w()))) {
      var ch = charSequenceGet(this.d1w(), current);
      if ((ch === _Char___init__impl__6a9atx(101) || ch === _Char___init__impl__6a9atx(69)) && !hasExponent) {
        if (current === start) {
          this.b1p("Unexpected symbol '" + toString_1(ch) + "' in numeric literal", current);
        }
        isExponentPositive = true;
        hasExponent = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45) && hasExponent) {
        if (current === start) {
          this.b1p("Unexpected symbol '-' in numeric literal", current);
        }
        isExponentPositive = false;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(43) && hasExponent) {
        if (current === start) {
          this.b1p("Unexpected symbol '+' in numeric literal", current);
        }
        isExponentPositive = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45)) {
        if (!(current === start)) {
          this.b1p("Unexpected symbol '-' in numeric literal", current);
        }
        isNegative = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      var token = charToTokenClass(ch);
      if (!(token === 0))
        break $l$loop_4;
      current = current + 1 | 0;
      var digit = Char__minus_impl_a2frrh(ch, _Char___init__impl__6a9atx(48));
      if (!(0 <= digit ? digit <= 9 : false)) {
        this.b1p("Unexpected symbol '" + toString_1(ch) + "' in numeric literal", current - 1 | 0);
      }
      if (hasExponent) {
        // Inline function 'kotlin.Long.times' call
        var this_0 = exponentAccumulator;
        // Inline function 'kotlin.Long.plus' call
        var this_1 = multiply(this_0, fromInt(10));
        exponentAccumulator = add(this_1, fromInt(digit));
        continue $l$loop_4;
      }
      // Inline function 'kotlin.Long.times' call
      var this_2 = accumulator;
      // Inline function 'kotlin.Long.minus' call
      var this_3 = multiply(this_2, fromInt(10));
      accumulator = subtract(this_3, fromInt(digit));
      if (accumulator > 0n) {
        this.b1p('Numeric value overflow');
      }
    }
    var hasChars = !(current === start);
    if (start === current || (isNegative && start === (current - 1 | 0))) {
      this.b1p('Expected numeric literal', current);
    }
    if (hasQuotation) {
      if (!hasChars) {
        this.b1p('EOF');
      }
      if (!(charSequenceGet(this.d1w(), current) === _Char___init__impl__6a9atx(34))) {
        this.b1p('Expected closing quotation mark', current);
      }
      current = current + 1 | 0;
    }
    this.c1j_1 = current;
    if (hasExponent) {
      var doubleAccumulator = toNumber(accumulator) * consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive);
      if (doubleAccumulator > toNumber(9223372036854775807n) || doubleAccumulator < toNumber(-9223372036854775808n)) {
        this.b1p('Numeric value overflow');
      }
      // Inline function 'kotlin.math.floor' call
      if (!(Math.floor(doubleAccumulator) === doubleAccumulator)) {
        this.b1p("Can't convert " + doubleAccumulator + ' to Long');
      }
      accumulator = numberToLong(doubleAccumulator);
    }
    var tmp_0;
    if (isNegative) {
      tmp_0 = accumulator;
    } else if (!(accumulator === -9223372036854775808n)) {
      tmp_0 = negate(accumulator);
    } else {
      this.b1p('Numeric value overflow');
    }
    return tmp_0;
  }
  u1l() {
    var result = this.g1r();
    var next = this.m1q();
    if (!(next === 10)) {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected = tokenDescription(10);
      var position = true && this.c1j_1 > 0 ? this.c1j_1 - 1 | 0 : this.c1j_1;
      var s = this.c1j_1 === charSequenceLength(this.d1w()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.d1w(), position));
      var tmp$ret$1 = "Expected input to contain a single valid number, but got '" + s + "' after it";
      this.b1p(tmp$ret$1, position);
    }
    return result;
  }
  f1r() {
    var current = this.g1w();
    if (current === charSequenceLength(this.d1w())) {
      this.b1p('EOF');
    }
    var tmp;
    if (charSequenceGet(this.d1w(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var result = consumeBoolean2(this, current);
    if (hasQuotation) {
      if (this.c1j_1 === charSequenceLength(this.d1w())) {
        this.b1p('EOF');
      }
      if (!(charSequenceGet(this.d1w(), this.c1j_1) === _Char___init__impl__6a9atx(34))) {
        this.b1p('Expected closing quotation mark');
      }
      this.c1j_1 = this.c1j_1 + 1 | 0;
    }
    return result;
  }
}
class CharMappings {
  constructor() {
    CharMappings_instance = this;
    this.l1w_1 = charArray(117);
    this.m1w_1 = new Int8Array(126);
    initEscape(this);
    initCharToToken(this);
  }
}
class StringJsonLexer extends AbstractJsonLexer {
  constructor(source, configuration) {
    super(configuration);
    this.y1w_1 = source;
  }
  d1w() {
    return this.y1w_1;
  }
  e1w(position) {
    return position < this.d1w().length ? position : -1;
  }
  m1q() {
    var source = this.d1w();
    var cpos = this.c1j_1;
    $l$loop: while (!(cpos === -1) && cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charCodeAt(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.c1j_1 = cpos;
      return charToTokenClass(c);
    }
    this.c1j_1 = source.length;
    return 10;
  }
  i1q() {
    var current = this.c1j_1;
    if (current === -1)
      return false;
    var source = this.d1w();
    $l$loop: while (current < source.length) {
      var c = charCodeAt(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop;
      }
      this.c1j_1 = current;
      return this.h1w(c);
    }
    this.c1j_1 = current;
    return false;
  }
  g1w() {
    var current = this.c1j_1;
    if (current === -1)
      return current;
    var source = this.d1w();
    $l$loop: while (current < source.length) {
      var c = charCodeAt(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
      } else {
        break $l$loop;
      }
    }
    this.c1j_1 = current;
    return current;
  }
  r1q(expected) {
    if (this.c1j_1 === -1) {
      this.i1w(expected);
    }
    var source = this.d1w();
    var cpos = this.c1j_1;
    $l$loop: while (cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charCodeAt(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.c1j_1 = cpos;
      if (c === expected)
        return Unit_instance;
      this.i1w(expected);
    }
    this.c1j_1 = -1;
    this.i1w(expected);
  }
  x1q() {
    this.r1q(_Char___init__impl__6a9atx(34));
    var current = this.c1j_1;
    var closingQuote = indexOf_0(this.d1w(), _Char___init__impl__6a9atx(34), current);
    if (closingQuote === -1) {
      this.k1q();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected = tokenDescription(1);
      var position = false && this.c1j_1 > 0 ? this.c1j_1 - 1 | 0 : this.c1j_1;
      var s = this.c1j_1 === charSequenceLength(this.d1w()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.d1w(), position));
      var tmp$ret$1 = 'Expected ' + expected + ", but had '" + s + "' instead";
      this.b1p(tmp$ret$1, position);
    }
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (charCodeAt(this.d1w(), i) === _Char___init__impl__6a9atx(92)) {
          return this.consumeString2(this.d1w(), this.c1j_1, i);
        }
      }
       while (inductionVariable < closingQuote);
    this.c1j_1 = closingQuote + 1 | 0;
    return substring(this.d1w(), current, closingQuote);
  }
  z1q(keyToMatch, isLenient) {
    var positionSnapshot = this.c1j_1;
    try {
      if (!(this.m1q() === 6))
        return null;
      var firstKey = this.u1q(isLenient);
      if (!(firstKey === keyToMatch))
        return null;
      this.j1w();
      if (!(this.m1q() === 5))
        return null;
      return this.u1q(isLenient);
    }finally {
      this.c1j_1 = positionSnapshot;
      this.j1w();
    }
  }
}
class StringJsonLexerWithComments extends StringJsonLexer {
  m1q() {
    var source = this.d1w();
    var cpos = this.g1w();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.c1j_1 = cpos + 1 | 0;
    return charToTokenClass(charCodeAt(source, cpos));
  }
  i1q() {
    var current = this.g1w();
    if (current >= this.d1w().length || current === -1)
      return false;
    return this.h1w(charCodeAt(this.d1w(), current));
  }
  r1q(expected) {
    var source = this.d1w();
    var current = this.g1w();
    if (current >= source.length || current === -1) {
      this.c1j_1 = -1;
      this.i1w(expected);
    }
    var c = charCodeAt(source, current);
    this.c1j_1 = current + 1 | 0;
    if (c === expected)
      return Unit_instance;
    else {
      this.i1w(expected);
    }
  }
  h1q() {
    var source = this.d1w();
    var cpos = this.g1w();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.c1j_1 = cpos;
    return charToTokenClass(charCodeAt(source, cpos));
  }
  g1w() {
    var current = this.c1j_1;
    if (current === -1)
      return current;
    var source = this.d1w();
    $l$loop_1: while (current < source.length) {
      var c = charCodeAt(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop_1;
      }
      if (c === _Char___init__impl__6a9atx(47) && (current + 1 | 0) < source.length) {
        var tmp0_subject = charCodeAt(source, current + 1 | 0);
        if (tmp0_subject === _Char___init__impl__6a9atx(47)) {
          current = indexOf_0(source, _Char___init__impl__6a9atx(10), current + 2 | 0);
          if (current === -1) {
            current = source.length;
          } else {
            current = current + 1 | 0;
          }
          continue $l$loop_1;
        } else if (tmp0_subject === _Char___init__impl__6a9atx(42)) {
          current = indexOf(source, '*/', current + 2 | 0);
          if (current === -1) {
            this.c1j_1 = source.length;
            this.b1p('Expected end of the block comment: "*/", but had EOF instead');
          } else {
            current = current + 2 | 0;
          }
          continue $l$loop_1;
        }
      }
      break $l$loop_1;
    }
    this.c1j_1 = current;
    return current;
  }
}
class JsonToStringWriter {
  constructor() {
    this.r1i_1 = StringBuilder.ec(128);
  }
  f1o(value) {
    this.r1i_1.yg(value);
  }
  z1n(char) {
    this.r1i_1.k1(char);
  }
  b1o(text) {
    this.r1i_1.i1(text);
  }
  l1o(text) {
    printQuoted(this.r1i_1, text);
  }
  s1i() {
    this.r1i_1.bh();
  }
  toString() {
    return this.r1i_1.toString();
  }
}
//endregion
var Default_instance;
function Default_getInstance() {
  if (Default_instance === VOID)
    new Default();
  return Default_instance;
}
function Json_0(from, builderAction) {
  from = from === VOID ? Default_getInstance() : from;
  var builder = new JsonBuilder(from);
  builderAction(builder);
  var conf = builder.a1k();
  return new JsonImpl(conf, builder.y1j_1);
}
function validateConfiguration($this) {
  if (equals($this.l10(), EmptySerializersModule()))
    return Unit_instance;
  var collector = new JsonSerializersModuleValidator($this.j1i_1);
  $this.l10().z1g(collector);
}
var ClassDiscriminatorMode_NONE_instance;
var ClassDiscriminatorMode_ALL_JSON_OBJECTS_instance;
var ClassDiscriminatorMode_POLYMORPHIC_instance;
var ClassDiscriminatorMode_entriesInitialized;
function ClassDiscriminatorMode_initEntries() {
  if (ClassDiscriminatorMode_entriesInitialized)
    return Unit_instance;
  ClassDiscriminatorMode_entriesInitialized = true;
  ClassDiscriminatorMode_NONE_instance = new ClassDiscriminatorMode('NONE', 0);
  ClassDiscriminatorMode_ALL_JSON_OBJECTS_instance = new ClassDiscriminatorMode('ALL_JSON_OBJECTS', 1);
  ClassDiscriminatorMode_POLYMORPHIC_instance = new ClassDiscriminatorMode('POLYMORPHIC', 2);
}
function ClassDiscriminatorMode_NONE_getInstance() {
  ClassDiscriminatorMode_initEntries();
  return ClassDiscriminatorMode_NONE_instance;
}
function ClassDiscriminatorMode_ALL_JSON_OBJECTS_getInstance() {
  ClassDiscriminatorMode_initEntries();
  return ClassDiscriminatorMode_ALL_JSON_OBJECTS_instance;
}
function ClassDiscriminatorMode_POLYMORPHIC_getInstance() {
  ClassDiscriminatorMode_initEntries();
  return ClassDiscriminatorMode_POLYMORPHIC_instance;
}
function throwSubtypeNotRegistered($this, subClass, baseClass) {
  var tmp0_elvis_lhs = subClass.f1();
  var subClassName = tmp0_elvis_lhs == null ? toString(subClass) : tmp0_elvis_lhs;
  var scope = "in the scope of '" + baseClass.f1() + "'";
  throw SerializationException.cx("Class '" + subClassName + "' is not registered for polymorphic serialization " + scope + '.\n' + "Mark the base class as 'sealed' or register the serializer explicitly.");
}
function get_jsonUnquotedLiteralDescriptor() {
  _init_properties_JsonElement_kt__7cbdc2();
  return jsonUnquotedLiteralDescriptor;
}
var jsonUnquotedLiteralDescriptor;
var Companion_instance;
function Companion_getInstance_3() {
  return Companion_instance;
}
function JsonObject$toString$lambda(_destruct__k2r9zo) {
  // Inline function 'kotlin.collections.component1' call
  var k = _destruct__k2r9zo.v2();
  // Inline function 'kotlin.collections.component2' call
  var v = _destruct__k2r9zo.w2();
  // Inline function 'kotlin.text.buildString' call
  // Inline function 'kotlin.apply' call
  var this_0 = StringBuilder.h1();
  printQuoted(this_0, k);
  this_0.k1(_Char___init__impl__6a9atx(58));
  this_0.o1(v);
  return this_0.toString();
}
var Companion_instance_0;
function Companion_getInstance_4() {
  return Companion_instance_0;
}
function get_jsonObject(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonObject ? _this__u8e3s4 : null;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    error(_this__u8e3s4, 'JsonObject');
  } else {
    tmp = tmp0_elvis_lhs;
  }
  return tmp;
}
var Companion_instance_1;
function Companion_getInstance_5() {
  return Companion_instance_1;
}
function JsonPrimitive_0(value) {
  _init_properties_JsonElement_kt__7cbdc2();
  if (value == null)
    return JsonNull_getInstance();
  return new JsonLiteral(value, true);
}
function get_intOrNull(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  // Inline function 'kotlinx.serialization.json.exceptionToNull' call
  var tmp;
  try {
    tmp = parseLongImpl(_this__u8e3s4);
  } catch ($p) {
    var tmp_0;
    if ($p instanceof JsonDecodingException) {
      var e = $p;
      tmp_0 = null;
    } else {
      throw $p;
    }
    tmp = tmp_0;
  }
  var tmp0_elvis_lhs = tmp;
  var tmp_1;
  if (tmp0_elvis_lhs == null) {
    return null;
  } else {
    tmp_1 = tmp0_elvis_lhs;
  }
  var result = tmp_1;
  // Inline function 'kotlin.ranges.contains' call
  var this_0 = numberRangeToNumber(-2147483648, 2147483647);
  if (!contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result))
    return null;
  return convertToInt(result);
}
function get_int(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  // Inline function 'kotlinx.serialization.json.exceptionToNumberFormatException' call
  var tmp;
  try {
    tmp = parseLongImpl(_this__u8e3s4);
  } catch ($p) {
    var tmp_0;
    if ($p instanceof JsonDecodingException) {
      var e = $p;
      throw NumberFormatException.ye(e.r());
    } else {
      throw $p;
    }
  }
  var result = tmp;
  // Inline function 'kotlin.ranges.contains' call
  var this_0 = numberRangeToNumber(-2147483648, 2147483647);
  if (!contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result))
    throw NumberFormatException.ye(_this__u8e3s4.d1l() + ' is not an Int');
  return convertToInt(result);
}
function get_longOrNull(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  // Inline function 'kotlinx.serialization.json.exceptionToNull' call
  var tmp;
  try {
    tmp = parseLongImpl(_this__u8e3s4);
  } catch ($p) {
    var tmp_0;
    if ($p instanceof JsonDecodingException) {
      var e = $p;
      tmp_0 = null;
    } else {
      throw $p;
    }
    tmp = tmp_0;
  }
  return tmp;
}
function get_long(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  // Inline function 'kotlinx.serialization.json.exceptionToNumberFormatException' call
  var tmp;
  try {
    tmp = parseLongImpl(_this__u8e3s4);
  } catch ($p) {
    var tmp_0;
    if ($p instanceof JsonDecodingException) {
      var e = $p;
      throw NumberFormatException.ye(e.r());
    } else {
      throw $p;
    }
  }
  return tmp;
}
function get_floatOrNull(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  // Inline function 'kotlin.text.toFloatOrNull' call
  var this_0 = _this__u8e3s4.d1l();
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  return toDoubleOrNull(this_0);
}
function get_float(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  // Inline function 'kotlin.text.toFloat' call
  var this_0 = _this__u8e3s4.d1l();
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  return toDouble(this_0);
}
function get_doubleOrNull(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  return toDoubleOrNull(_this__u8e3s4.d1l());
}
function get_double(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  return toDouble(_this__u8e3s4.d1l());
}
function get_booleanOrNull(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  return toBooleanStrictOrNull_0(_this__u8e3s4.d1l());
}
function get_boolean(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  var tmp0_elvis_lhs = toBooleanStrictOrNull_0(_this__u8e3s4.d1l());
  var tmp;
  if (tmp0_elvis_lhs == null) {
    throw IllegalStateException.o(_this__u8e3s4.toString() + ' does not represent a Boolean');
  } else {
    tmp = tmp0_elvis_lhs;
  }
  return tmp;
}
var Companion_instance_2;
function Companion_getInstance_6() {
  return Companion_instance_2;
}
function get_jsonPrimitive(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonPrimitive ? _this__u8e3s4 : null;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    error(_this__u8e3s4, 'JsonPrimitive');
  } else {
    tmp = tmp0_elvis_lhs;
  }
  return tmp;
}
function error(_this__u8e3s4, element) {
  _init_properties_JsonElement_kt__7cbdc2();
  throw IllegalArgumentException.h2('Element ' + toString(getKClassFromExpression(_this__u8e3s4)) + ' is not a ' + element);
}
var JsonNull_instance;
function JsonNull_getInstance() {
  if (JsonNull_instance === VOID)
    new JsonNull();
  return JsonNull_instance;
}
function parseLongImpl(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  return StringJsonLexer_0(Default_getInstance(), _this__u8e3s4.d1l()).u1l();
}
function get_contentOrNull(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  var tmp;
  if (_this__u8e3s4 instanceof JsonNull) {
    tmp = null;
  } else {
    tmp = _this__u8e3s4.d1l();
  }
  return tmp;
}
function JsonPrimitive_1(value) {
  _init_properties_JsonElement_kt__7cbdc2();
  if (value == null)
    return JsonNull_getInstance();
  return new JsonLiteral(value, false);
}
function JsonPrimitive_2(value) {
  _init_properties_JsonElement_kt__7cbdc2();
  if (value == null)
    return JsonNull_getInstance();
  return new JsonLiteral(value, false);
}
var properties_initialized_JsonElement_kt_abxy8s;
function _init_properties_JsonElement_kt__7cbdc2() {
  if (!properties_initialized_JsonElement_kt_abxy8s) {
    properties_initialized_JsonElement_kt_abxy8s = true;
    jsonUnquotedLiteralDescriptor = InlinePrimitiveDescriptor('kotlinx.serialization.json.JsonUnquotedLiteral', serializer(StringCompanionObject_instance));
  }
}
function put(_this__u8e3s4, key, value) {
  return _this__u8e3s4.w1l(key, JsonPrimitive_0(value));
}
function JsonElementSerializer$descriptor$lambda($this$buildSerialDescriptor) {
  $this$buildSerialDescriptor.aw('JsonPrimitive', defer(JsonElementSerializer$descriptor$lambda$lambda));
  $this$buildSerialDescriptor.aw('JsonNull', defer(JsonElementSerializer$descriptor$lambda$lambda_0));
  $this$buildSerialDescriptor.aw('JsonLiteral', defer(JsonElementSerializer$descriptor$lambda$lambda_1));
  $this$buildSerialDescriptor.aw('JsonObject', defer(JsonElementSerializer$descriptor$lambda$lambda_2));
  $this$buildSerialDescriptor.aw('JsonArray', defer(JsonElementSerializer$descriptor$lambda$lambda_3));
  return Unit_instance;
}
function JsonElementSerializer$descriptor$lambda$lambda() {
  return JsonPrimitiveSerializer_getInstance().x1l_1;
}
function JsonElementSerializer$descriptor$lambda$lambda_0() {
  return JsonNullSerializer_getInstance().y1l_1;
}
function JsonElementSerializer$descriptor$lambda$lambda_1() {
  return JsonLiteralSerializer_getInstance().z1l_1;
}
function JsonElementSerializer$descriptor$lambda$lambda_2() {
  return JsonObjectSerializer_getInstance().a1m_1;
}
function JsonElementSerializer$descriptor$lambda$lambda_3() {
  return JsonArraySerializer_getInstance().b1m_1;
}
var JsonElementSerializer_instance;
function JsonElementSerializer_getInstance() {
  if (JsonElementSerializer_instance === VOID)
    new JsonElementSerializer();
  return JsonElementSerializer_instance;
}
function asJsonDecoder(_this__u8e3s4) {
  var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonDecoder) ? _this__u8e3s4 : null;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    throw IllegalStateException.o('This serializer can be used only with Json format.' + ('Expected Decoder to be JsonDecoder, got ' + toString(getKClassFromExpression(_this__u8e3s4))));
  } else {
    tmp = tmp0_elvis_lhs;
  }
  return tmp;
}
var JsonObjectDescriptor_instance;
function JsonObjectDescriptor_getInstance() {
  if (JsonObjectDescriptor_instance === VOID)
    new JsonObjectDescriptor();
  return JsonObjectDescriptor_instance;
}
var JsonObjectSerializer_instance;
function JsonObjectSerializer_getInstance() {
  if (JsonObjectSerializer_instance === VOID)
    new JsonObjectSerializer();
  return JsonObjectSerializer_instance;
}
var JsonPrimitiveSerializer_instance;
function JsonPrimitiveSerializer_getInstance() {
  if (JsonPrimitiveSerializer_instance === VOID)
    new JsonPrimitiveSerializer();
  return JsonPrimitiveSerializer_instance;
}
var JsonArrayDescriptor_instance;
function JsonArrayDescriptor_getInstance() {
  if (JsonArrayDescriptor_instance === VOID)
    new JsonArrayDescriptor();
  return JsonArrayDescriptor_instance;
}
var JsonArraySerializer_instance;
function JsonArraySerializer_getInstance() {
  if (JsonArraySerializer_instance === VOID)
    new JsonArraySerializer();
  return JsonArraySerializer_instance;
}
var JsonNullSerializer_instance;
function JsonNullSerializer_getInstance() {
  if (JsonNullSerializer_instance === VOID)
    new JsonNullSerializer();
  return JsonNullSerializer_instance;
}
function defer(deferred) {
  return new defer$1(deferred);
}
var JsonLiteralSerializer_instance;
function JsonLiteralSerializer_getInstance() {
  if (JsonLiteralSerializer_instance === VOID)
    new JsonLiteralSerializer();
  return JsonLiteralSerializer_instance;
}
function verify(encoder) {
  asJsonEncoder(encoder);
}
function verify_0(decoder) {
  asJsonDecoder(decoder);
}
function asJsonEncoder(_this__u8e3s4) {
  var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonEncoder) ? _this__u8e3s4 : null;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    throw IllegalStateException.o('This serializer can be used only with Json format.' + ('Expected Encoder to be JsonEncoder, got ' + toString(getKClassFromExpression(_this__u8e3s4))));
  } else {
    tmp = tmp0_elvis_lhs;
  }
  return tmp;
}
function _get_original__l7ku1m($this) {
  var tmp0 = $this.a1n_1;
  var tmp = KProperty1;
  // Inline function 'kotlin.getValue' call
  getPropertyCallableRef('original', 1, tmp, defer$o$_get_original_$ref_3cje7k(), null);
  return tmp0.w2();
}
function defer$o$_get_original_$ref_3cje7k() {
  return constructCallableReference((p0) => _get_original__l7ku1m(p0), 1, 0, 10);
}
function Composer_0(sb, json) {
  return json.j1i_1.f1k_1 ? new ComposerWithPrettyPrint(sb, json) : new Composer(sb);
}
function readIfAbsent($this, descriptor, index) {
  $this.x1o_1 = (!descriptor.ly(index) && descriptor.ky(index).wx());
  return $this.x1o_1;
}
function JsonElementMarker$readIfAbsent$ref(p0) {
  return constructCallableReference((p0_0, p1) => {
    var tmp0 = p0;
    return readIfAbsent(tmp0, p0_0, p1);
  }, 2, 0, 11, 'readIfAbsent', [p0]);
}
function minify(_this__u8e3s4, offset) {
  offset = offset === VOID ? -1 : offset;
  if (charSequenceLength(_this__u8e3s4) < 200)
    return _this__u8e3s4;
  if (offset === -1) {
    var start = charSequenceLength(_this__u8e3s4) - 60 | 0;
    if (start <= 0)
      return _this__u8e3s4;
    // Inline function 'kotlin.text.substring' call
    var endIndex = charSequenceLength(_this__u8e3s4);
    return '.....' + toString(charSequenceSubSequence(_this__u8e3s4, start, endIndex));
  }
  var start_0 = offset - 30 | 0;
  var end = offset + 30 | 0;
  var prefix = start_0 <= 0 ? '' : '.....';
  var suffix = end >= charSequenceLength(_this__u8e3s4) ? '' : '.....';
  var tmp2 = coerceAtLeast(start_0, 0);
  // Inline function 'kotlin.text.substring' call
  var endIndex_0 = coerceAtMost(end, charSequenceLength(_this__u8e3s4));
  return prefix + toString(charSequenceSubSequence(_this__u8e3s4, tmp2, endIndex_0)) + suffix;
}
function access$formatDecodingException$tJsonExceptionsKt(offset, shortMessage, path, hint, input) {
  return formatDecodingException(offset, shortMessage, path, hint, input);
}
function decodingExceptionOf(shortMessage) {
  return JsonDecodingException.u1m(formatDecodingException(-1, shortMessage, null, null, null), shortMessage, -1, null, null, null);
}
function formatDecodingException(offset, shortMessage, path, hint, input) {
  // Inline function 'kotlin.text.buildString' call
  // Inline function 'kotlin.apply' call
  var this_0 = StringBuilder.h1();
  if (offset >= 0) {
    this_0.i1('Unexpected JSON token at offset ' + offset + ': ');
  }
  this_0.i1(shortMessage);
  // Inline function 'kotlin.text.isNullOrBlank' call
  if (!(path == null || isBlank(path))) {
    this_0.i1(' at path: ');
    this_0.i1(path);
  }
  // Inline function 'kotlin.text.isNullOrBlank' call
  if (!(hint == null || isBlank(hint))) {
    this_0.i1('\n' + hint);
  }
  if (!(input == null)) {
    this_0.i1('\nJSON input: ');
    this_0.i1(input);
  }
  return this_0.toString();
}
function invalidTrailingComma(_this__u8e3s4, entity) {
  entity = entity === VOID ? 'object' : entity;
  _this__u8e3s4.a1p('Trailing comma before the end of JSON ' + entity, _this__u8e3s4.c1j_1 - 1 | 0, "Trailing commas are non-complaint JSON and not allowed by default. Use 'allowTrailingComma = true' in 'Json {}' builder to support them.");
}
function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
  _this__u8e3s4.b1p(nonFiniteFpMessage(result, null), VOID, "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'");
}
function InvalidFloatingPointEncoded(value, key) {
  key = key === VOID ? null : key;
  return JsonEncodingException.n1n(nonFiniteFpMessage(value, key), VOID, "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'");
}
function InvalidKeyKindException(keyDescriptor) {
  return JsonEncodingException.n1n("Value of type '" + keyDescriptor.nw() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.dy().toString() + "'"), keyDescriptor.nw(), "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.");
}
function access$nonFiniteFpMessage$tJsonExceptionsKt(value, key) {
  return nonFiniteFpMessage(value, key);
}
function decodingExceptionOf_0(_this__u8e3s4, shortMessage, offset, path, hint, input) {
  // Inline function 'kotlinx.serialization.json.internal.ifDebugInput' call
  var tmp;
  if (_this__u8e3s4.b1j_1.s1k_1) {
    tmp = toString(minify(input, offset));
  } else {
    tmp = null;
  }
  var inputValue = tmp;
  return JsonDecodingException.u1m(formatDecodingException(offset, shortMessage, path, hint, inputValue), shortMessage, offset, path, inputValue, hint);
}
function formatEncodingException(shortMessage, hint) {
  var tmp;
  // Inline function 'kotlin.text.isNullOrBlank' call
  if (hint == null || isBlank(hint)) {
    tmp = '';
  } else {
    tmp = '\n' + hint;
  }
  return shortMessage + tmp;
}
function nonFiniteFpMessage(value, key) {
  return 'Unexpected special floating-point value ' + toString(value) + (!(key == null) ? ' with key ' + key + '. ' : '. ') + 'By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification.';
}
function get_JsonDeserializationNamesKey() {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  return JsonDeserializationNamesKey;
}
var JsonDeserializationNamesKey;
function get_JsonSerializationNamesKey() {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  return JsonSerializationNamesKey;
}
var JsonSerializationNamesKey;
function ignoreUnknownKeys(_this__u8e3s4, json) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var tmp;
  if (json.j1i_1.c1k_1) {
    tmp = true;
  } else {
    var tmp0 = _this__u8e3s4.gy();
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp_0;
      if (isInterface(tmp0, Collection)) {
        tmp_0 = tmp0.j1();
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
      var _iterator__ex2g4s = tmp0.l1();
      while (_iterator__ex2g4s.m1()) {
        var element = _iterator__ex2g4s.n1();
        if (element instanceof JsonIgnoreUnknownKeys) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
      }
      tmp$ret$0 = false;
    }
    tmp = tmp$ret$0;
  }
  return tmp;
}
function getJsonNameIndex(_this__u8e3s4, json, name) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  if (decodeCaseInsensitive(json, _this__u8e3s4)) {
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$0 = name.toLowerCase();
    return getJsonNameIndexSlowPath(_this__u8e3s4, json, tmp$ret$0);
  }
  var strategy = namingStrategy(_this__u8e3s4, json);
  if (!(strategy == null))
    return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
  var index = _this__u8e3s4.iy(name);
  if (!(index === -3))
    return index;
  if (!json.j1i_1.m1k_1)
    return index;
  return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
}
function getJsonNameIndexOrThrow(_this__u8e3s4, json, name, suffix) {
  suffix = suffix === VOID ? '' : suffix;
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var index = getJsonNameIndex(_this__u8e3s4, json, name);
  if (index === -3)
    throw SerializationException.cx(_this__u8e3s4.nw() + " does not contain element with name '" + name + "'" + suffix);
  return index;
}
function getJsonElementName(_this__u8e3s4, json, index) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var strategy = namingStrategy(_this__u8e3s4, json);
  return strategy == null ? _this__u8e3s4.hy(index) : serializationNamesIndices(_this__u8e3s4, json, strategy)[index];
}
function namingStrategy(_this__u8e3s4, json) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  return equals(_this__u8e3s4.dy(), CLASS_getInstance()) ? json.j1i_1.n1k_1 : null;
}
function deserializationNamesMap(_this__u8e3s4, descriptor) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var tmp = get_schemaCache(_this__u8e3s4);
  var tmp_0 = get_JsonDeserializationNamesKey();
  return tmp.d1p(descriptor, tmp_0, deserializationNamesMap$lambda(descriptor, _this__u8e3s4));
}
function getJsonEncodedNames(_this__u8e3s4, json) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var strategy = namingStrategy(_this__u8e3s4, json);
  return strategy == null ? jsonCachedSerialNames(_this__u8e3s4) : toSet(serializationNamesIndices(_this__u8e3s4, json, strategy));
}
function decodeCaseInsensitive(_this__u8e3s4, descriptor) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  return _this__u8e3s4.j1i_1.o1k_1 && equals(descriptor.dy(), ENUM_getInstance());
}
function getJsonNameIndexSlowPath(_this__u8e3s4, json, name) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var tmp0_elvis_lhs = deserializationNamesMap(json, _this__u8e3s4).c4(name);
  return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
}
function serializationNamesIndices(_this__u8e3s4, json, strategy) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var tmp = get_schemaCache(json);
  var tmp_0 = get_JsonSerializationNamesKey();
  return tmp.d1p(_this__u8e3s4, tmp_0, serializationNamesIndices$lambda(_this__u8e3s4, strategy));
}
function buildDeserializationNamesMap(_this__u8e3s4, json) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  // Inline function 'kotlin.collections.mutableMapOf' call
  var builder = LinkedHashMap.l5();
  var useLowercaseEnums = decodeCaseInsensitive(json, _this__u8e3s4);
  var strategyForClasses = namingStrategy(_this__u8e3s4, json);
  var inductionVariable = 0;
  var last = _this__u8e3s4.fy();
  if (inductionVariable < last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.collections.filterIsInstance' call
      var tmp0 = _this__u8e3s4.jy(i);
      // Inline function 'kotlin.collections.filterIsInstanceTo' call
      var destination = ArrayList.k2();
      var _iterator__ex2g4s = tmp0.l1();
      while (_iterator__ex2g4s.m1()) {
        var element = _iterator__ex2g4s.n1();
        if (element instanceof JsonNames) {
          destination.z1(element);
        }
      }
      var tmp0_safe_receiver = singleOrNull(destination);
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.e1p_1;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var inductionVariable_0 = 0;
        var last_0 = tmp1_safe_receiver.length;
        while (inductionVariable_0 < last_0) {
          var element_0 = tmp1_safe_receiver[inductionVariable_0];
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var tmp;
          if (useLowercaseEnums) {
            // Inline function 'kotlin.text.lowercase' call
            // Inline function 'kotlin.js.asDynamic' call
            tmp = element_0.toLowerCase();
          } else {
            tmp = element_0;
          }
          buildDeserializationNamesMap$putOrThrow(builder, _this__u8e3s4, tmp, i);
        }
      }
      var tmp_0;
      if (useLowercaseEnums) {
        // Inline function 'kotlin.text.lowercase' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp_0 = _this__u8e3s4.hy(i).toLowerCase();
      } else if (!(strategyForClasses == null)) {
        tmp_0 = strategyForClasses.f1p(_this__u8e3s4, i, _this__u8e3s4.hy(i));
      } else {
        tmp_0 = null;
      }
      var nameToPut = tmp_0;
      if (nameToPut == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        buildDeserializationNamesMap$putOrThrow(builder, _this__u8e3s4, nameToPut, i);
      }
    }
     while (inductionVariable < last);
  // Inline function 'kotlin.collections.ifEmpty' call
  var tmp_1;
  if (builder.j1()) {
    tmp_1 = emptyMap();
  } else {
    tmp_1 = builder;
  }
  return tmp_1;
}
function deserializationNamesMap$lambda($descriptor, $this_deserializationNamesMap) {
  return () => buildDeserializationNamesMap($descriptor, $this_deserializationNamesMap);
}
function serializationNamesIndices$lambda($this_serializationNamesIndices, $strategy) {
  return () => {
    // Inline function 'kotlin.collections.mutableSetOf' call
    var trackingSet = LinkedHashSet.o2();
    var tmp = 0;
    var tmp_0 = $this_serializationNamesIndices.fy();
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var baseName = $this_serializationNamesIndices.hy(tmp_2);
      var name = $strategy.f1p($this_serializationNamesIndices, tmp_2, baseName);
      if (!trackingSet.z1(name))
        throw JsonEncodingException.n1n("The transformed name '" + name + "' for property " + baseName + ' already exists ' + ('in ' + toString($this_serializationNamesIndices)), $this_serializationNamesIndices.nw());
      tmp_1[tmp_2] = name;
      tmp = tmp + 1 | 0;
    }
    return tmp_1;
  };
}
function buildDeserializationNamesMap$putOrThrow(_this__u8e3s4, $this_buildDeserializationNamesMap, name, index) {
  var entity = equals($this_buildDeserializationNamesMap.dy(), ENUM_getInstance()) ? 'enum value' : 'property';
  // Inline function 'kotlin.collections.contains' call
  // Inline function 'kotlin.collections.containsKey' call
  if ((isInterface(_this__u8e3s4, KtMap) ? _this__u8e3s4 : THROW_CCE()).a4(name)) {
    throw decodingExceptionOf("The suggested name '" + name + "' for " + entity + ' ' + $this_buildDeserializationNamesMap.hy(index) + ' is already one of the names for ' + entity + ' ' + ($this_buildDeserializationNamesMap.hy(getValue(_this__u8e3s4, name)) + ' in ' + toString($this_buildDeserializationNamesMap)));
  }
  // Inline function 'kotlin.collections.set' call
  _this__u8e3s4.f4(name, index);
}
var properties_initialized_JsonNamesMap_kt_ljpf42;
function _init_properties_JsonNamesMap_kt__cbbp0k() {
  if (!properties_initialized_JsonNamesMap_kt_ljpf42) {
    properties_initialized_JsonNamesMap_kt_ljpf42 = true;
    JsonDeserializationNamesKey = new Key();
    JsonSerializationNamesKey = new Key();
  }
}
var Tombstone_instance;
function Tombstone_getInstance() {
  return Tombstone_instance;
}
var RedactedKey_instance;
function RedactedKey_getInstance() {
  return RedactedKey_instance;
}
function resize($this) {
  var newSize = imul($this.j1p_1, 2);
  $this.h1p_1 = copyOf($this.h1p_1, newSize);
  var tmp = 0;
  var tmp_0 = new Int32Array(newSize);
  while (tmp < newSize) {
    tmp_0[tmp] = -1;
    tmp = tmp + 1 | 0;
  }
  var newIndices = tmp_0;
  // Inline function 'kotlin.collections.copyInto' call
  var this_0 = $this.i1p_1;
  var endIndex = this_0.length;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var tmp_1 = this_0;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  arrayCopy(tmp_1, newIndices, 0, 0, endIndex);
  $this.i1p_1 = newIndices;
}
function checkKind($this, descriptor, actualClass) {
  var kind = descriptor.dy();
  var tmp;
  if (kind instanceof PolymorphicKind) {
    tmp = true;
  } else {
    tmp = equals(kind, CONTEXTUAL_getInstance());
  }
  if (tmp) {
    throw IllegalArgumentException.h2('Serializer for ' + actualClass.f1() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind.toString() + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
  }
  if ($this.q1p_1)
    return Unit_instance;
  if (!$this.r1p_1)
    return Unit_instance;
  var tmp_0;
  var tmp_1;
  if (equals(kind, LIST_getInstance()) || equals(kind, MAP_getInstance())) {
    tmp_1 = true;
  } else {
    tmp_1 = kind instanceof PrimitiveKind;
  }
  if (tmp_1) {
    tmp_0 = true;
  } else {
    tmp_0 = kind instanceof ENUM;
  }
  if (tmp_0) {
    throw IllegalArgumentException.h2('Serializer for ' + actualClass.f1() + ' of kind ' + kind.toString() + ' cannot be serialized polymorphically with class discriminator.');
  }
}
function encodeByWriter(json, writer, serializer, value) {
  var tmp = WriteMode_OBJ_getInstance();
  // Inline function 'kotlin.arrayOfNulls' call
  var size = get_entries().l2();
  var tmp$ret$0 = Array(size);
  var encoder = StreamingJsonEncoder.b1q(writer, json, tmp, tmp$ret$0);
  encoder.p11(serializer, value);
}
function readObject($this) {
  // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
  var lastToken = $this.c1q_1.g1q(6);
  if ($this.c1q_1.h1q() === 4) {
    $this.c1q_1.b1p('Unexpected leading comma');
  }
  // Inline function 'kotlin.collections.linkedMapOf' call
  var result = LinkedHashMap.l5();
  $l$loop: while ($this.c1q_1.i1q()) {
    var key = $this.d1q_1 ? $this.c1q_1.k1q() : $this.c1q_1.j1q();
    $this.c1q_1.g1q(5);
    var element = $this.l1q();
    // Inline function 'kotlin.collections.set' call
    result.f4(key, element);
    lastToken = $this.c1q_1.m1q();
    var tmp0_subject = lastToken;
    if (tmp0_subject !== 4)
      if (tmp0_subject === 7)
        break $l$loop;
      else {
        $this.c1q_1.b1p('Expected end of the object or comma');
      }
  }
  if (lastToken === 6) {
    $this.c1q_1.g1q(7);
  } else if (lastToken === 4) {
    if (!$this.e1q_1) {
      invalidTrailingComma($this.c1q_1);
    }
    $this.c1q_1.g1q(7);
  }
  return new JsonObject(result);
}
function *readObject_0($this, $receiver, $completion) {
  // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
  var lastToken = $this.c1q_1.g1q(6);
  if ($this.c1q_1.h1q() === 4) {
    $this.c1q_1.b1p('Unexpected leading comma');
  }
  // Inline function 'kotlin.collections.linkedMapOf' call
  var result = LinkedHashMap.l5();
  $l$loop: while ($this.c1q_1.i1q()) {
    var key = $this.d1q_1 ? $this.c1q_1.k1q() : $this.c1q_1.j1q();
    $this.c1q_1.g1q(5);
    var element = yield* $receiver.bt(Unit_instance, $completion);
    // Inline function 'kotlin.collections.set' call
    result.f4(key, element);
    lastToken = $this.c1q_1.m1q();
    var tmp0_subject = lastToken;
    if (tmp0_subject !== 4)
      if (tmp0_subject === 7)
        break $l$loop;
      else {
        $this.c1q_1.b1p('Expected end of the object or comma');
      }
  }
  if (lastToken === 6) {
    $this.c1q_1.g1q(7);
  } else if (lastToken === 4) {
    if (!$this.e1q_1) {
      invalidTrailingComma($this.c1q_1);
    }
    $this.c1q_1.g1q(7);
  }
  return new JsonObject(result);
}
function readArray($this) {
  var lastToken = $this.c1q_1.m1q();
  if ($this.c1q_1.h1q() === 4) {
    $this.c1q_1.b1p('Unexpected leading comma');
  }
  // Inline function 'kotlin.collections.arrayListOf' call
  var result = ArrayList.k2();
  while ($this.c1q_1.i1q()) {
    var element = $this.l1q();
    result.z1(element);
    lastToken = $this.c1q_1.m1q();
    if (!(lastToken === 4)) {
      var tmp0 = $this.c1q_1;
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
      var condition = lastToken === 9;
      var position = tmp0.c1j_1;
      if (!condition) {
        var tmp$ret$2 = 'Expected end of the array or comma';
        tmp0.b1p(tmp$ret$2, position);
      }
    }
  }
  if (lastToken === 8) {
    $this.c1q_1.g1q(9);
  } else if (lastToken === 4) {
    if (!$this.e1q_1) {
      invalidTrailingComma($this.c1q_1, 'array');
    }
    $this.c1q_1.g1q(9);
  }
  return new JsonArray(result);
}
function readValue($this, isString) {
  var tmp;
  if ($this.d1q_1 || !isString) {
    tmp = $this.c1q_1.k1q();
  } else {
    tmp = $this.c1q_1.j1q();
  }
  var string = tmp;
  if (!isString && string === 'null')
    return JsonNull_getInstance();
  return new JsonLiteral(string, isString);
}
function readDeepRecursive($this) {
  return invoke(new DeepRecursiveFunction(JsonTreeReader$readDeepRecursive$slambda($this)), Unit_instance);
}
function JsonTreeReader$readDeepRecursive$slambda(this$0) {
  return constructCallableReference(function *($this$DeepRecursiveFunction, it, $completion) {
    var tmp0_subject = this$0.c1q_1.h1q();
    var tmp;
    if (tmp0_subject === 1) {
      tmp = readValue(this$0, true);
    } else if (tmp0_subject === 0) {
      tmp = readValue(this$0, false);
    } else if (tmp0_subject === 6) {
      tmp = yield* /*#__NOINLINE__*/readObject_0(this$0, $this$DeepRecursiveFunction, $completion);
    } else if (tmp0_subject === 8) {
      tmp = readArray(this$0);
    } else {
      this$0.c1q_1.b1p("Can't begin reading element, unexpected token");
    }
    return tmp;
  }, 2);
}
function classDiscriminator(_this__u8e3s4, json) {
  var _iterator__ex2g4s = _this__u8e3s4.gy().l1();
  while (_iterator__ex2g4s.m1()) {
    var annotation = _iterator__ex2g4s.n1();
    if (annotation instanceof JsonClassDiscriminator)
      return annotation.n1q_1;
  }
  return json.j1i_1.k1k_1;
}
function throwJsonElementPolymorphicException(serialName, element) {
  var tmp0_shortMessage = 'Class with serial name ' + serialName + ' cannot be serialized polymorphically because it is represented as ' + getKClassFromExpression(element).f1() + '.';
  throw JsonEncodingException.n1n(tmp0_shortMessage, serialName, 'Make sure that its JsonTransformingSerializer returns JsonObject, so class discriminator can be added to it.');
}
function access$checkEncodingConflicts$tPolymorphicKt($receiver, serializer, actualSerializer, classDiscriminator) {
  return checkEncodingConflicts($receiver, serializer, actualSerializer, classDiscriminator);
}
function checkKind_0(kind) {
  if (kind instanceof ENUM) {
    // Inline function 'kotlin.error' call
    var message = "Enums cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";
    throw IllegalStateException.o(toString(message));
  }
  if (kind instanceof PrimitiveKind) {
    // Inline function 'kotlin.error' call
    var message_0 = "Primitives cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";
    throw IllegalStateException.o(toString(message_0));
  }
  if (kind instanceof PolymorphicKind) {
    // Inline function 'kotlin.error' call
    var message_1 = 'Actual serializer for polymorphic cannot be polymorphic itself';
    throw IllegalStateException.o(toString(message_1));
  }
}
function checkEncodingConflicts(_this__u8e3s4, serializer, actualSerializer, classDiscriminator) {
  if (getJsonEncodedNames(actualSerializer.mv(), _this__u8e3s4).t3(classDiscriminator)) {
    var baseName = serializer.mv().nw();
    var actualName = actualSerializer.mv().nw();
    var text = _this__u8e3s4.j1i_1.r1k_1.equals(ClassDiscriminatorMode_ALL_JSON_OBJECTS_getInstance()) && baseName === actualName ? 'in ALL_JSON_OBJECTS class discriminator mode' : "as base class '" + baseName + "'";
    var tmp0_shortMessage = "Class '" + actualName + "' cannot be serialized " + text + ' because' + (" it has property name that conflicts with JSON class discriminator '" + classDiscriminator + "'.");
    var tmp1_hint = 'You can either change class discriminator in JsonConfiguration, or rename property with @SerialName annotation.';
    throw JsonEncodingException.n1n(tmp0_shortMessage, actualName, tmp1_hint);
  }
}
function trySkip($this, $receiver, unknownKey) {
  if ($receiver == null)
    return false;
  if ($receiver.q1q_1 === unknownKey) {
    $receiver.q1q_1 = null;
    return true;
  }
  return false;
}
function skipLeftoverElements($this, descriptor) {
  while (!($this.n10(descriptor) === -1)) {
  }
}
function checkLeadingComma($this) {
  if ($this.v1i_1.h1q() === 4) {
    $this.v1i_1.b1p('Unexpected leading comma');
  }
}
function decodeMapIndex($this) {
  var hasComma = false;
  var decodingKey = !(($this.x1i_1 % 2 | 0) === 0);
  if (decodingKey) {
    if (!($this.x1i_1 === -1)) {
      hasComma = $this.v1i_1.s1q();
    }
  } else {
    $this.v1i_1.r1q(_Char___init__impl__6a9atx(58));
  }
  var tmp;
  if ($this.v1i_1.i1q()) {
    if (decodingKey) {
      if ($this.x1i_1 === -1) {
        var tmp0 = $this.v1i_1;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var condition = !hasComma;
        var position = tmp0.c1j_1;
        if (!condition) {
          var tmp$ret$1 = 'Unexpected leading comma';
          tmp0.b1p(tmp$ret$1, position);
        }
      } else {
        var tmp0_0 = $this.v1i_1;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var condition_0 = hasComma;
        var position_0 = tmp0_0.c1j_1;
        if (!condition_0) {
          var tmp$ret$3 = 'Expected comma after the key-value pair';
          tmp0_0.b1p(tmp$ret$3, position_0);
        }
      }
    }
    $this.x1i_1 = $this.x1i_1 + 1 | 0;
    tmp = $this.x1i_1;
  } else {
    if (hasComma && !$this.t1i_1.j1i_1.p1k_1) {
      invalidTrailingComma($this.v1i_1);
    }
    tmp = -1;
  }
  return tmp;
}
function coerceInputValue($this, descriptor, index) {
  var tmp0 = $this.t1i_1;
  var tmp$ret$0;
  $l$block_2: {
    // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
    var isOptional = descriptor.ly(index);
    var elementDescriptor = descriptor.ky(index);
    var tmp;
    if (isOptional && !elementDescriptor.wx()) {
      tmp = $this.v1i_1.t1q(true);
    } else {
      tmp = false;
    }
    if (tmp) {
      tmp$ret$0 = true;
      break $l$block_2;
    }
    if (equals(elementDescriptor.dy(), ENUM_getInstance())) {
      var tmp_0;
      if (elementDescriptor.wx()) {
        tmp_0 = $this.v1i_1.t1q(false);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$0 = false;
        break $l$block_2;
      }
      var tmp0_elvis_lhs = $this.v1i_1.u1q($this.z1i_1.d1k_1);
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = false;
        break $l$block_2;
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      var enumValue = tmp_1;
      var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
      var coerceToNull = !tmp0.j1i_1.g1k_1 && elementDescriptor.wx();
      if (enumIndex === -3 && (isOptional || coerceToNull)) {
        $this.v1i_1.j1q();
        tmp$ret$0 = true;
        break $l$block_2;
      }
    }
    tmp$ret$0 = false;
  }
  return tmp$ret$0;
}
function decodeObjectIndex($this, descriptor) {
  var hasComma = $this.v1i_1.s1q();
  while ($this.v1i_1.i1q()) {
    hasComma = false;
    var key = decodeStringKey($this);
    $this.v1i_1.r1q(_Char___init__impl__6a9atx(58));
    var index = getJsonNameIndex(descriptor, $this.t1i_1, key);
    var tmp;
    if (!(index === -3)) {
      var tmp_0;
      if ($this.z1i_1.i1k_1 && coerceInputValue($this, descriptor, index)) {
        hasComma = $this.v1i_1.s1q();
        tmp_0 = false;
      } else {
        var tmp0_safe_receiver = $this.a1j_1;
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.y1o(index);
        }
        return index;
      }
      tmp = tmp_0;
    } else {
      tmp = true;
    }
    var isUnknown = tmp;
    if (isUnknown) {
      hasComma = handleUnknown($this, descriptor, key);
    }
  }
  if (hasComma && !$this.t1i_1.j1i_1.p1k_1) {
    invalidTrailingComma($this.v1i_1);
  }
  var tmp1_safe_receiver = $this.a1j_1;
  var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.z1o();
  return tmp2_elvis_lhs == null ? -1 : tmp2_elvis_lhs;
}
function handleUnknown($this, descriptor, key) {
  if (ignoreUnknownKeys(descriptor, $this.t1i_1) || trySkip($this, $this.y1i_1, key)) {
    $this.v1i_1.w1q($this.z1i_1.d1k_1);
  } else {
    $this.v1i_1.d1j_1.o1p();
    $this.v1i_1.v1q(key);
  }
  return $this.v1i_1.s1q();
}
function decodeListIndex($this) {
  var hasComma = $this.v1i_1.s1q();
  var tmp;
  if ($this.v1i_1.i1q()) {
    if (!($this.x1i_1 === -1) && !hasComma) {
      $this.v1i_1.b1p('Expected end of the array or comma');
    }
    $this.x1i_1 = $this.x1i_1 + 1 | 0;
    tmp = $this.x1i_1;
  } else {
    if (hasComma && !$this.t1i_1.j1i_1.p1k_1) {
      invalidTrailingComma($this.v1i_1, 'array');
    }
    tmp = -1;
  }
  return tmp;
}
function decodeStringKey($this) {
  var tmp;
  if ($this.z1i_1.d1k_1) {
    tmp = $this.v1i_1.y1q();
  } else {
    tmp = $this.v1i_1.x1q();
  }
  return tmp;
}
function get_unsignedNumberDescriptors() {
  _init_properties_StreamingJsonEncoder_kt__pn1bsi();
  return unsignedNumberDescriptors;
}
var unsignedNumberDescriptors;
function encodeTypeInfo($this, discriminator, serialName) {
  $this.s1p_1.v1n();
  $this.b11(discriminator);
  $this.s1p_1.y1n(_Char___init__impl__6a9atx(58));
  $this.s1p_1.x1n();
  $this.b11(serialName);
}
function get_isUnsignedNumber(_this__u8e3s4) {
  _init_properties_StreamingJsonEncoder_kt__pn1bsi();
  return _this__u8e3s4.ey() && get_unsignedNumberDescriptors().t3(_this__u8e3s4);
}
function get_isUnquotedLiteral(_this__u8e3s4) {
  _init_properties_StreamingJsonEncoder_kt__pn1bsi();
  return _this__u8e3s4.ey() && equals(_this__u8e3s4, get_jsonUnquotedLiteralDescriptor());
}
var properties_initialized_StreamingJsonEncoder_kt_6ifwwk;
function _init_properties_StreamingJsonEncoder_kt__pn1bsi() {
  if (!properties_initialized_StreamingJsonEncoder_kt_6ifwwk) {
    properties_initialized_StreamingJsonEncoder_kt_6ifwwk = true;
    unsignedNumberDescriptors = setOf([serializer_1(Companion_getInstance_0()).mv(), serializer_0(Companion_getInstance()).mv(), serializer_2(Companion_getInstance_1()).mv(), serializer_3(Companion_getInstance_2()).mv()]);
  }
}
function get_ESCAPE_STRINGS() {
  _init_properties_StringOps_kt__fcy1db();
  return ESCAPE_STRINGS;
}
var ESCAPE_STRINGS;
var ESCAPE_MARKERS;
function printQuoted(_this__u8e3s4, value) {
  _init_properties_StringOps_kt__fcy1db();
  _this__u8e3s4.k1(_Char___init__impl__6a9atx(34));
  var lastPos = 0;
  var inductionVariable = 0;
  var last = charSequenceLength(value) - 1 | 0;
  if (inductionVariable <= last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.code' call
      var this_0 = charCodeAt(value, i);
      var c = Char__toInt_impl_vasixd(this_0);
      if (c < get_ESCAPE_STRINGS().length && !(get_ESCAPE_STRINGS()[c] == null)) {
        _this__u8e3s4.ug(value, lastPos, i);
        _this__u8e3s4.i1(get_ESCAPE_STRINGS()[c]);
        lastPos = i + 1 | 0;
      }
    }
     while (inductionVariable <= last);
  if (!(lastPos === 0))
    _this__u8e3s4.ug(value, lastPos, value.length);
  else
    _this__u8e3s4.i1(value);
  _this__u8e3s4.k1(_Char___init__impl__6a9atx(34));
}
function toBooleanStrictOrNull_0(_this__u8e3s4) {
  _init_properties_StringOps_kt__fcy1db();
  return equals_0(_this__u8e3s4, 'true', true) ? true : equals_0(_this__u8e3s4, 'false', true) ? false : null;
}
function toHexChar(i) {
  _init_properties_StringOps_kt__fcy1db();
  var d = i & 15;
  var tmp;
  if (d < 10) {
    // Inline function 'kotlin.code' call
    var this_0 = _Char___init__impl__6a9atx(48);
    var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
    tmp = numberToChar(d + tmp$ret$0 | 0);
  } else {
    var tmp_0 = d - 10 | 0;
    // Inline function 'kotlin.code' call
    var this_1 = _Char___init__impl__6a9atx(97);
    var tmp$ret$1 = Char__toInt_impl_vasixd(this_1);
    tmp = numberToChar(tmp_0 + tmp$ret$1 | 0);
  }
  return tmp;
}
var properties_initialized_StringOps_kt_wzaea7;
function _init_properties_StringOps_kt__fcy1db() {
  if (!properties_initialized_StringOps_kt_wzaea7) {
    properties_initialized_StringOps_kt_wzaea7 = true;
    // Inline function 'kotlin.arrayOfNulls' call
    // Inline function 'kotlin.apply' call
    var this_0 = Array(93);
    var inductionVariable = 0;
    if (inductionVariable <= 31)
      do {
        var c = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var c1 = toHexChar(c >> 12);
        var c2 = toHexChar(c >> 8);
        var c3 = toHexChar(c >> 4);
        var c4 = toHexChar(c);
        this_0[c] = '\\u' + toString_1(c1) + toString_1(c2) + toString_1(c3) + toString_1(c4);
      }
       while (inductionVariable <= 31);
    // Inline function 'kotlin.code' call
    var this_1 = _Char___init__impl__6a9atx(34);
    this_0[Char__toInt_impl_vasixd(this_1)] = '\\"';
    // Inline function 'kotlin.code' call
    var this_2 = _Char___init__impl__6a9atx(92);
    this_0[Char__toInt_impl_vasixd(this_2)] = '\\\\';
    // Inline function 'kotlin.code' call
    var this_3 = _Char___init__impl__6a9atx(9);
    this_0[Char__toInt_impl_vasixd(this_3)] = '\\t';
    // Inline function 'kotlin.code' call
    var this_4 = _Char___init__impl__6a9atx(8);
    this_0[Char__toInt_impl_vasixd(this_4)] = '\\b';
    // Inline function 'kotlin.code' call
    var this_5 = _Char___init__impl__6a9atx(10);
    this_0[Char__toInt_impl_vasixd(this_5)] = '\\n';
    // Inline function 'kotlin.code' call
    var this_6 = _Char___init__impl__6a9atx(13);
    this_0[Char__toInt_impl_vasixd(this_6)] = '\\r';
    this_0[12] = '\\f';
    ESCAPE_STRINGS = this_0;
    // Inline function 'kotlin.apply' call
    var this_7 = new Int8Array(93);
    var inductionVariable_0 = 0;
    if (inductionVariable_0 <= 31)
      do {
        var c_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        this_7[c_0] = 1;
      }
       while (inductionVariable_0 <= 31);
    // Inline function 'kotlin.code' call
    var this_8 = _Char___init__impl__6a9atx(34);
    var tmp = Char__toInt_impl_vasixd(this_8);
    // Inline function 'kotlin.code' call
    var this_9 = _Char___init__impl__6a9atx(34);
    var tmp$ret$3 = Char__toInt_impl_vasixd(this_9);
    this_7[tmp] = toByte(tmp$ret$3);
    // Inline function 'kotlin.code' call
    var this_10 = _Char___init__impl__6a9atx(92);
    var tmp_0 = Char__toInt_impl_vasixd(this_10);
    // Inline function 'kotlin.code' call
    var this_11 = _Char___init__impl__6a9atx(92);
    var tmp$ret$5 = Char__toInt_impl_vasixd(this_11);
    this_7[tmp_0] = toByte(tmp$ret$5);
    // Inline function 'kotlin.code' call
    var this_12 = _Char___init__impl__6a9atx(9);
    var tmp_1 = Char__toInt_impl_vasixd(this_12);
    // Inline function 'kotlin.code' call
    var this_13 = _Char___init__impl__6a9atx(116);
    var tmp$ret$7 = Char__toInt_impl_vasixd(this_13);
    this_7[tmp_1] = toByte(tmp$ret$7);
    // Inline function 'kotlin.code' call
    var this_14 = _Char___init__impl__6a9atx(8);
    var tmp_2 = Char__toInt_impl_vasixd(this_14);
    // Inline function 'kotlin.code' call
    var this_15 = _Char___init__impl__6a9atx(98);
    var tmp$ret$9 = Char__toInt_impl_vasixd(this_15);
    this_7[tmp_2] = toByte(tmp$ret$9);
    // Inline function 'kotlin.code' call
    var this_16 = _Char___init__impl__6a9atx(10);
    var tmp_3 = Char__toInt_impl_vasixd(this_16);
    // Inline function 'kotlin.code' call
    var this_17 = _Char___init__impl__6a9atx(110);
    var tmp$ret$11 = Char__toInt_impl_vasixd(this_17);
    this_7[tmp_3] = toByte(tmp$ret$11);
    // Inline function 'kotlin.code' call
    var this_18 = _Char___init__impl__6a9atx(13);
    var tmp_4 = Char__toInt_impl_vasixd(this_18);
    // Inline function 'kotlin.code' call
    var this_19 = _Char___init__impl__6a9atx(114);
    var tmp$ret$13 = Char__toInt_impl_vasixd(this_19);
    this_7[tmp_4] = toByte(tmp$ret$13);
    // Inline function 'kotlin.code' call
    var this_20 = _Char___init__impl__6a9atx(102);
    var tmp$ret$14 = Char__toInt_impl_vasixd(this_20);
    this_7[12] = toByte(tmp$ret$14);
    ESCAPE_MARKERS = this_7;
  }
}
function readJson(json, element, deserializer) {
  var tmp;
  if (element instanceof JsonObject) {
    tmp = new JsonTreeDecoder(json, element);
  } else {
    if (element instanceof JsonArray) {
      tmp = new JsonTreeListDecoder(json, element);
    } else {
      var tmp_0;
      if (element instanceof JsonLiteral) {
        tmp_0 = true;
      } else {
        tmp_0 = equals(element, JsonNull_getInstance());
      }
      if (tmp_0) {
        tmp = new JsonPrimitiveDecoder(json, element instanceof JsonPrimitive ? element : THROW_CCE());
      } else {
        noWhenBranchMatchedException();
      }
    }
  }
  var input = tmp;
  return input.vz(deserializer);
}
function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
  return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.mv())).vz(deserializer);
}
function unparsedPrimitive($this, literal, primitive, tag) {
  var type = startsWith(primitive, 'i') ? 'an ' + primitive : 'a ' + primitive;
  var tmp2 = "Failed to parse literal '" + literal.toString() + "' as " + type + ' value';
  // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
  var path = $this.q1r(tag);
  var tmp;
  if ($this.x1k().j1i_1.s1k_1) {
    var tmp$ret$3 = toString($this.r1r());
    tmp = toString(minify(tmp$ret$3));
  } else {
    tmp = null;
  }
  var inputValue = tmp;
  throw JsonDecodingException.u1m(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
}
function setForceNull($this, descriptor, index) {
  $this.o1s_1 = (!$this.x1k().j1i_1.g1k_1 && !descriptor.ly(index) && descriptor.ky(index).wx());
  return $this.o1s_1;
}
function writeJson(json, value, serializer) {
  var result = {_v: null};
  var encoder = new JsonTreeEncoder(json, writeJson$lambda(result));
  encoder.p11(serializer, value);
  var tmp;
  if (result._v == null) {
    throwUninitializedPropertyAccessException('result');
  } else {
    tmp = result._v;
  }
  return tmp;
}
function inlineUnsignedNumberEncoder($this, tag) {
  return AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1.z1u($this, tag);
}
function inlineUnquotedLiteralEncoder($this, tag, inlineDescriptor) {
  return AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1.d1v($this, tag, inlineDescriptor);
}
function AbstractJsonTreeEncoder$beginStructure$lambda(this$0) {
  return (node) => {
    this$0.h1u(this$0.p1f(), node);
    return Unit_instance;
  };
}
function get_requiresTopLevelTag(_this__u8e3s4) {
  var tmp;
  var tmp_0 = _this__u8e3s4.dy();
  if (tmp_0 instanceof PrimitiveKind) {
    tmp = true;
  } else {
    tmp = _this__u8e3s4.dy() === ENUM_getInstance();
  }
  return tmp;
}
function _get_tag__e6h4qf($this) {
  var tmp = $this.m1v_1;
  if (!(tmp == null))
    return tmp;
  else {
    throwUninitializedPropertyAccessException('tag');
  }
}
function writeJson$lambda($result) {
  return (it) => {
    $result._v = it;
    return Unit_instance;
  };
}
var WriteMode_OBJ_instance;
var WriteMode_LIST_instance;
var WriteMode_MAP_instance;
var WriteMode_POLY_OBJ_instance;
function values() {
  return [WriteMode_OBJ_getInstance(), WriteMode_LIST_getInstance(), WriteMode_MAP_getInstance(), WriteMode_POLY_OBJ_getInstance()];
}
function get_entries() {
  if ($ENTRIES == null)
    $ENTRIES = enumEntries(values());
  return $ENTRIES;
}
var WriteMode_entriesInitialized;
function WriteMode_initEntries() {
  if (WriteMode_entriesInitialized)
    return Unit_instance;
  WriteMode_entriesInitialized = true;
  WriteMode_OBJ_instance = new WriteMode('OBJ', 0, _Char___init__impl__6a9atx(123), _Char___init__impl__6a9atx(125));
  WriteMode_LIST_instance = new WriteMode('LIST', 1, _Char___init__impl__6a9atx(91), _Char___init__impl__6a9atx(93));
  WriteMode_MAP_instance = new WriteMode('MAP', 2, _Char___init__impl__6a9atx(123), _Char___init__impl__6a9atx(125));
  WriteMode_POLY_OBJ_instance = new WriteMode('POLY_OBJ', 3, _Char___init__impl__6a9atx(91), _Char___init__impl__6a9atx(93));
}
var $ENTRIES;
function switchMode(_this__u8e3s4, desc) {
  var tmp0_subject = desc.dy();
  var tmp;
  if (tmp0_subject instanceof PolymorphicKind) {
    tmp = WriteMode_POLY_OBJ_getInstance();
  } else {
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp = WriteMode_LIST_getInstance();
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var keyDescriptor = carrierDescriptor(desc.ky(0), _this__u8e3s4.l10());
        var keyKind = keyDescriptor.dy();
        var tmp_0;
        var tmp_1;
        if (keyKind instanceof PrimitiveKind) {
          tmp_1 = true;
        } else {
          tmp_1 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_1) {
          tmp_0 = WriteMode_MAP_getInstance();
        } else {
          if (_this__u8e3s4.j1i_1.e1k_1) {
            tmp_0 = WriteMode_LIST_getInstance();
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp = tmp_0;
      } else {
        tmp = WriteMode_OBJ_getInstance();
      }
    }
  }
  return tmp;
}
function carrierDescriptor(_this__u8e3s4, module_0) {
  var tmp;
  if (equals(_this__u8e3s4.dy(), CONTEXTUAL_getInstance())) {
    var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
    tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
  } else if (_this__u8e3s4.ey()) {
    tmp = carrierDescriptor(_this__u8e3s4.ky(0), module_0);
  } else {
    tmp = _this__u8e3s4;
  }
  return tmp;
}
function WriteMode_OBJ_getInstance() {
  WriteMode_initEntries();
  return WriteMode_OBJ_instance;
}
function WriteMode_LIST_getInstance() {
  WriteMode_initEntries();
  return WriteMode_LIST_instance;
}
function WriteMode_MAP_getInstance() {
  WriteMode_initEntries();
  return WriteMode_MAP_instance;
}
function WriteMode_POLY_OBJ_getInstance() {
  WriteMode_initEntries();
  return WriteMode_POLY_OBJ_instance;
}
function appendEscape($this, lastPosition, current) {
  $this.c1w(lastPosition, current);
  return appendEsc($this, current + 1 | 0);
}
function decodedString($this, lastPosition, currentPosition) {
  $this.c1w(lastPosition, currentPosition);
  var result = $this.f1j_1.toString();
  $this.f1j_1.ah(0);
  return result;
}
function takePeeked($this) {
  // Inline function 'kotlin.also' call
  var this_0 = ensureNotNull($this.e1j_1);
  $this.e1j_1 = null;
  return this_0;
}
function wasUnquotedString($this) {
  return !(charSequenceGet($this.d1w(), $this.c1j_1 - 1 | 0) === _Char___init__impl__6a9atx(34));
}
function appendEsc($this, startPosition) {
  var currentPosition = startPosition;
  currentPosition = $this.e1w(currentPosition);
  if (currentPosition === -1) {
    $this.b1p('Expected escape sequence to continue, got EOF');
  }
  var tmp = $this.d1w();
  var _unary__edvuaz = currentPosition;
  currentPosition = _unary__edvuaz + 1 | 0;
  var currentChar = charSequenceGet(tmp, _unary__edvuaz);
  if (currentChar === _Char___init__impl__6a9atx(117)) {
    return appendHex($this, $this.d1w(), currentPosition);
  }
  // Inline function 'kotlin.code' call
  var tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
  var c = escapeToChar(tmp$ret$0);
  if (c === _Char___init__impl__6a9atx(0)) {
    $this.b1p("Invalid escaped char '" + toString_1(currentChar) + "'");
  }
  $this.f1j_1.k1(c);
  return currentPosition;
}
function appendHex($this, source, startPos) {
  if ((startPos + 4 | 0) >= charSequenceLength(source)) {
    $this.c1j_1 = startPos;
    $this.f1w();
    if (($this.c1j_1 + 4 | 0) >= charSequenceLength(source)) {
      $this.b1p('Unexpected EOF during unicode escape');
    }
    return appendHex($this, source, $this.c1j_1);
  }
  $this.f1j_1.k1(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
  return startPos + 4 | 0;
}
function fromHexChar($this, source, currentPosition) {
  var character = charSequenceGet(source, currentPosition);
  var tmp;
  if (_Char___init__impl__6a9atx(48) <= character ? character <= _Char___init__impl__6a9atx(57) : false) {
    // Inline function 'kotlin.code' call
    var tmp_0 = Char__toInt_impl_vasixd(character);
    // Inline function 'kotlin.code' call
    var this_0 = _Char___init__impl__6a9atx(48);
    tmp = tmp_0 - Char__toInt_impl_vasixd(this_0) | 0;
  } else if (_Char___init__impl__6a9atx(97) <= character ? character <= _Char___init__impl__6a9atx(102) : false) {
    // Inline function 'kotlin.code' call
    var tmp_1 = Char__toInt_impl_vasixd(character);
    // Inline function 'kotlin.code' call
    var this_1 = _Char___init__impl__6a9atx(97);
    tmp = (tmp_1 - Char__toInt_impl_vasixd(this_1) | 0) + 10 | 0;
  } else if (_Char___init__impl__6a9atx(65) <= character ? character <= _Char___init__impl__6a9atx(70) : false) {
    // Inline function 'kotlin.code' call
    var tmp_2 = Char__toInt_impl_vasixd(character);
    // Inline function 'kotlin.code' call
    var this_2 = _Char___init__impl__6a9atx(65);
    tmp = (tmp_2 - Char__toInt_impl_vasixd(this_2) | 0) + 10 | 0;
  } else {
    $this.b1p("Invalid toHexChar char '" + toString_1(character) + "' in unicode escape");
  }
  return tmp;
}
function consumeBoolean2($this, start) {
  var current = $this.e1w(start);
  if (current >= charSequenceLength($this.d1w()) || current === -1) {
    $this.b1p('EOF');
  }
  var tmp = $this.d1w();
  var _unary__edvuaz = current;
  current = _unary__edvuaz + 1 | 0;
  // Inline function 'kotlin.code' call
  var this_0 = charSequenceGet(tmp, _unary__edvuaz);
  var tmp0_subject = Char__toInt_impl_vasixd(this_0) | 32;
  var tmp_0;
  // Inline function 'kotlin.code' call
  var this_1 = _Char___init__impl__6a9atx(116);
  if (tmp0_subject === Char__toInt_impl_vasixd(this_1)) {
    consumeBooleanLiteral($this, 'rue', current);
    tmp_0 = true;
  } else {
    // Inline function 'kotlin.code' call
    var this_2 = _Char___init__impl__6a9atx(102);
    if (tmp0_subject === Char__toInt_impl_vasixd(this_2)) {
      consumeBooleanLiteral($this, 'alse', current);
      tmp_0 = false;
    } else {
      $this.b1p("Expected valid boolean literal prefix, but had '" + $this.k1q() + "'");
    }
  }
  return tmp_0;
}
function consumeBooleanLiteral($this, literalSuffix, current) {
  if ((charSequenceLength($this.d1w()) - current | 0) < literalSuffix.length) {
    $this.b1p('Unexpected end of boolean literal');
  }
  var inductionVariable = 0;
  var last = charSequenceLength(literalSuffix) - 1 | 0;
  if (inductionVariable <= last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var expected = charCodeAt(literalSuffix, i);
      var actual = charSequenceGet($this.d1w(), current + i | 0);
      // Inline function 'kotlin.code' call
      var tmp = Char__toInt_impl_vasixd(expected);
      // Inline function 'kotlin.code' call
      if (!(tmp === (Char__toInt_impl_vasixd(actual) | 32))) {
        $this.b1p("Expected valid boolean literal prefix, but had '" + $this.k1q() + "'");
      }
    }
     while (inductionVariable <= last);
  $this.c1j_1 = current + literalSuffix.length | 0;
}
function consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive) {
  var tmp;
  switch (isExponentPositive) {
    case false:
      // Inline function 'kotlin.math.pow' call

      var x = -toNumber(exponentAccumulator);
      tmp = Math.pow(10.0, x);
      break;
    case true:
      // Inline function 'kotlin.math.pow' call

      var x_0 = toNumber(exponentAccumulator);
      tmp = Math.pow(10.0, x_0);
      break;
    default:
      noWhenBranchMatchedException();
      break;
  }
  return tmp;
}
function tokenDescription(token) {
  return token === 1 ? "quotation mark '\"'" : token === 2 ? "string escape sequence '\\'" : token === 4 ? "comma ','" : token === 5 ? "colon ':'" : token === 6 ? "start of the object '{'" : token === 7 ? "end of the object '}'" : token === 8 ? "start of the array '['" : token === 9 ? "end of the array ']'" : token === 10 ? 'end of the input' : token === 127 ? 'invalid token' : 'valid token';
}
function charToTokenClass(c) {
  var tmp;
  // Inline function 'kotlin.code' call
  if (Char__toInt_impl_vasixd(c) < 126) {
    var tmp_0 = CharMappings_getInstance().m1w_1;
    // Inline function 'kotlin.code' call
    tmp = tmp_0[Char__toInt_impl_vasixd(c)];
  } else {
    tmp = 0;
  }
  return tmp;
}
function escapeToChar(c) {
  return c < 117 ? CharMappings_getInstance().l1w_1[c] : _Char___init__impl__6a9atx(0);
}
function initEscape($this) {
  var inductionVariable = 0;
  if (inductionVariable <= 31)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      initC2ESC($this, i, _Char___init__impl__6a9atx(117));
    }
     while (inductionVariable <= 31);
  initC2ESC($this, 8, _Char___init__impl__6a9atx(98));
  initC2ESC($this, 9, _Char___init__impl__6a9atx(116));
  initC2ESC($this, 10, _Char___init__impl__6a9atx(110));
  initC2ESC($this, 12, _Char___init__impl__6a9atx(102));
  initC2ESC($this, 13, _Char___init__impl__6a9atx(114));
  initC2ESC_0($this, _Char___init__impl__6a9atx(47), _Char___init__impl__6a9atx(47));
  initC2ESC_0($this, _Char___init__impl__6a9atx(34), _Char___init__impl__6a9atx(34));
  initC2ESC_0($this, _Char___init__impl__6a9atx(92), _Char___init__impl__6a9atx(92));
}
function initCharToToken($this) {
  var inductionVariable = 0;
  if (inductionVariable <= 32)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      initC2TC($this, i, 127);
    }
     while (inductionVariable <= 32);
  initC2TC($this, 9, 3);
  initC2TC($this, 10, 3);
  initC2TC($this, 13, 3);
  initC2TC($this, 32, 3);
  initC2TC_0($this, _Char___init__impl__6a9atx(44), 4);
  initC2TC_0($this, _Char___init__impl__6a9atx(58), 5);
  initC2TC_0($this, _Char___init__impl__6a9atx(123), 6);
  initC2TC_0($this, _Char___init__impl__6a9atx(125), 7);
  initC2TC_0($this, _Char___init__impl__6a9atx(91), 8);
  initC2TC_0($this, _Char___init__impl__6a9atx(93), 9);
  initC2TC_0($this, _Char___init__impl__6a9atx(34), 1);
  initC2TC_0($this, _Char___init__impl__6a9atx(92), 2);
}
function initC2ESC($this, c, esc) {
  if (!(esc === _Char___init__impl__6a9atx(117))) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(esc);
    $this.l1w_1[tmp$ret$0] = numberToChar(c);
  }
}
function initC2ESC_0($this, c, esc) {
  // Inline function 'kotlin.code' call
  var tmp$ret$0 = Char__toInt_impl_vasixd(c);
  return initC2ESC($this, tmp$ret$0, esc);
}
function initC2TC($this, c, cl) {
  $this.m1w_1[c] = cl;
}
function initC2TC_0($this, c, cl) {
  // Inline function 'kotlin.code' call
  var tmp$ret$0 = Char__toInt_impl_vasixd(c);
  return initC2TC($this, tmp$ret$0, cl);
}
var CharMappings_instance;
function CharMappings_getInstance() {
  if (CharMappings_instance === VOID)
    new CharMappings();
  return CharMappings_instance;
}
function StringJsonLexer_0(json, source) {
  return !json.j1i_1.q1k_1 ? new StringJsonLexer(source, json.j1i_1) : new StringJsonLexerWithComments(source, json.j1i_1);
}
function get_schemaCache(_this__u8e3s4) {
  return _this__u8e3s4.l1i_1;
}
function createMapForCache(initialCapacity) {
  return HashMap.m9(initialCapacity);
}
//region block: post-declaration
initMetadataForClass(Json, 'Json');
initMetadataForObject(Default, 'Default');
initMetadataForClass(JsonBuilder, 'JsonBuilder');
initMetadataForClass(JsonImpl, 'JsonImpl');
initMetadataForClass(JsonClassDiscriminator, 'JsonClassDiscriminator');
initMetadataForClass(JsonIgnoreUnknownKeys, 'JsonIgnoreUnknownKeys');
initMetadataForClass(JsonNames, 'JsonNames');
initMetadataForClass(JsonConfiguration, 'JsonConfiguration');
initMetadataForClass(ClassDiscriminatorMode, 'ClassDiscriminatorMode');
initMetadataForClass(JsonContentPolymorphicSerializer, 'JsonContentPolymorphicSerializer', VOID, VOID, [KSerializer]);
initMetadataForInterface(JsonDecoder, 'JsonDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
initMetadataForCompanion(Companion);
initMetadataForClass(JsonElement, 'JsonElement', VOID, VOID, VOID, VOID, VOID, {0: JsonElementSerializer_getInstance});
initMetadataForClass(JsonObject, 'JsonObject', VOID, VOID, [KtMap], VOID, VOID, {0: JsonObjectSerializer_getInstance});
initMetadataForCompanion(Companion_0);
initMetadataForCompanion(Companion_1);
initMetadataForClass(JsonPrimitive, 'JsonPrimitive', VOID, VOID, VOID, VOID, VOID, {0: JsonPrimitiveSerializer_getInstance});
initMetadataForCompanion(Companion_2);
initMetadataForClass(JsonArray, 'JsonArray', VOID, VOID, [KtList], VOID, VOID, {0: JsonArraySerializer_getInstance});
initMetadataForObject(JsonNull, 'JsonNull', VOID, VOID, [SerializerFactory], VOID, VOID, {0: JsonNullSerializer_getInstance});
initMetadataForClass(JsonLiteral, 'JsonLiteral');
initMetadataForClass(JsonObjectBuilder, 'JsonObjectBuilder');
initMetadataForObject(JsonElementSerializer, 'JsonElementSerializer', VOID, VOID, [KSerializer]);
initMetadataForObject(JsonObjectDescriptor, 'JsonObjectDescriptor', VOID, VOID, [SerialDescriptor]);
initMetadataForObject(JsonObjectSerializer, 'JsonObjectSerializer', VOID, VOID, [KSerializer]);
initMetadataForObject(JsonPrimitiveSerializer, 'JsonPrimitiveSerializer', VOID, VOID, [KSerializer]);
initMetadataForObject(JsonArrayDescriptor, 'JsonArrayDescriptor', VOID, VOID, [SerialDescriptor]);
initMetadataForObject(JsonArraySerializer, 'JsonArraySerializer', VOID, VOID, [KSerializer]);
initMetadataForObject(JsonNullSerializer, 'JsonNullSerializer', VOID, VOID, [KSerializer]);
initMetadataForObject(JsonLiteralSerializer, 'JsonLiteralSerializer', VOID, VOID, [KSerializer]);
protoOf(defer$1).wx = get_isNullable;
protoOf(defer$1).ey = get_isInline;
protoOf(defer$1).gy = get_annotations;
initMetadataForClass(defer$1, VOID, VOID, VOID, [SerialDescriptor]);
initMetadataForInterface(JsonEncoder, 'JsonEncoder', VOID, VOID, [Encoder, CompositeEncoder]);
initMetadataForClass(JsonException, 'JsonException');
initMetadataForClass(JsonDecodingException, 'JsonDecodingException');
initMetadataForClass(JsonEncodingException, 'JsonEncodingException');
initMetadataForClass(JsonTransformingSerializer, 'JsonTransformingSerializer', VOID, VOID, [KSerializer]);
initMetadataForClass(Composer, 'Composer');
initMetadataForClass(ComposerForUnsignedNumbers, 'ComposerForUnsignedNumbers');
initMetadataForClass(ComposerForUnquotedLiterals, 'ComposerForUnquotedLiterals');
initMetadataForClass(ComposerWithPrettyPrint, 'ComposerWithPrettyPrint');
initMetadataForClass(JsonElementMarker, 'JsonElementMarker');
initMetadataForObject(Tombstone, 'Tombstone');
initMetadataForObject(RedactedKey, 'RedactedKey');
initMetadataForClass(JsonPath, 'JsonPath');
protoOf(JsonSerializersModuleValidator).k1h = contextual;
initMetadataForClass(JsonSerializersModuleValidator, 'JsonSerializersModuleValidator', VOID, VOID, [SerializersModuleCollector]);
initMetadataForClass(JsonTreeReader, 'JsonTreeReader', VOID, VOID, VOID, [1]);
initMetadataForClass(Key, 'Key', Key);
initMetadataForClass(DescriptorSchemaCache, 'DescriptorSchemaCache', DescriptorSchemaCache);
initMetadataForClass(DiscriminatorHolder, 'DiscriminatorHolder');
initMetadataForClass(StreamingJsonDecoder, 'StreamingJsonDecoder', VOID, VOID, [JsonDecoder]);
initMetadataForClass(JsonDecoderForUnsignedTypes, 'JsonDecoderForUnsignedTypes');
initMetadataForClass(StreamingJsonEncoder, 'StreamingJsonEncoder', VOID, VOID, [JsonEncoder]);
initMetadataForClass(AbstractJsonTreeDecoder, 'AbstractJsonTreeDecoder', VOID, VOID, [JsonDecoder]);
initMetadataForClass(JsonTreeDecoder, 'JsonTreeDecoder');
initMetadataForClass(JsonTreeListDecoder, 'JsonTreeListDecoder');
initMetadataForClass(JsonPrimitiveDecoder, 'JsonPrimitiveDecoder');
initMetadataForClass(JsonTreeMapDecoder, 'JsonTreeMapDecoder');
initMetadataForClass(AbstractJsonTreeEncoder, 'AbstractJsonTreeEncoder', VOID, VOID, [JsonEncoder]);
initMetadataForClass(JsonTreeEncoder, 'JsonTreeEncoder');
initMetadataForClass(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1);
initMetadataForClass(AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1);
initMetadataForClass(JsonPrimitiveEncoder, 'JsonPrimitiveEncoder');
initMetadataForClass(JsonTreeListEncoder, 'JsonTreeListEncoder');
initMetadataForClass(JsonTreeMapEncoder, 'JsonTreeMapEncoder');
initMetadataForClass(WriteMode, 'WriteMode');
initMetadataForClass(AbstractJsonLexer, 'AbstractJsonLexer');
initMetadataForObject(CharMappings, 'CharMappings');
initMetadataForClass(StringJsonLexer, 'StringJsonLexer');
initMetadataForClass(StringJsonLexerWithComments, 'StringJsonLexerWithComments');
initMetadataForClass(JsonToStringWriter, 'JsonToStringWriter', JsonToStringWriter);
//endregion
//region block: init
Companion_instance = new Companion();
Companion_instance_0 = new Companion_0();
Companion_instance_1 = new Companion_1();
Companion_instance_2 = new Companion_2();
Tombstone_instance = new Tombstone();
RedactedKey_instance = new RedactedKey();
//endregion
//region block: exports
export {
  JsonArray as JsonArray2urf8ey7u44sd,
  JsonContentPolymorphicSerializer as JsonContentPolymorphicSerializer1zt3sp8asmujz,
  JsonDecoder as JsonDecoder1rijst5ne6qla,
  JsonObjectBuilder as JsonObjectBuilder2nl6rv6vdayuk,
  JsonObject as JsonObjectee06ihoeeiqj,
  JsonPrimitive_0 as JsonPrimitiveolttw629wj53,
  JsonPrimitive as JsonPrimitive3ttzjh2ft5dnx,
  JsonTransformingSerializer as JsonTransformingSerializer2p5ygofrif00k,
  Json_0 as Jsonsmkyu9xjl7fv,
  get_boolean as get_boolean37ml8jnzy6rg3,
  get_booleanOrNull as get_booleanOrNull376axlcpdhkmo,
  get_double as get_double1785hcxaminy4,
  get_doubleOrNull as get_doubleOrNull2fo14gjg922um,
  get_float as get_float1xtaobzj8js8m,
  get_floatOrNull as get_floatOrNull2q2ov24agcvgt,
  get_int as get_int2y6jf75ftml0w,
  get_intOrNull as get_intOrNulld29i64b3udf,
  get_jsonObject as get_jsonObject2u4z2ch1uuca9,
  get_jsonPrimitive as get_jsonPrimitivez17tyd5rw1ql,
  get_long as get_long3gjrkvy7fxjbp,
  get_longOrNull as get_longOrNull1kg1ha9scz5pa,
  put as put2xyujhcf0ewjd,
};
//endregion

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-json.mjs.map
