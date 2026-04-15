import {
  EmptySerializersModule991ju6pz9b79 as EmptySerializersModule,
  SerializationExceptioneqrdve3ts2n9 as SerializationException,
  SEALED_getInstance2urch17m532zf as SEALED_getInstance,
  buildSerialDescriptor2873qmkp8r2ib as buildSerialDescriptor,
  serializerOrNull294cbc318ws50 as serializerOrNull,
  KSerializerzf77vz1967fq as KSerializer,
  Decoder23nde051s631g as Decoder,
  CompositeDecoder2tzm7wpwkr0og as CompositeDecoder,
  SerializerFactory1qv9hivitncuv as SerializerFactory,
  serializer1x79l67jvwntn as serializer,
  InlinePrimitiveDescriptor3i6ccn1a4fw94 as InlinePrimitiveDescriptor,
  STRING_getInstance3lkmlozu5h7cs as STRING_getInstance,
  ListSerializer1hxuk9dx5n9du as ListSerializer,
  SerialDescriptor2pelqekb5ic3a as SerialDescriptor,
  MapSerializer11kmegt3g5c1g as MapSerializer,
  ENUM_getInstance3ph4fa6o285vr as ENUM_getInstance,
  PrimitiveSerialDescriptor3egfp53lutxj2 as PrimitiveSerialDescriptor,
  serializer2lw83vwvpnyms as serializer_0,
  get_isNullable36pbikm8xb7bz as get_isNullable,
  get_isInline5x26qrhi9qs6 as get_isInline,
  get_annotationshjxdbdcl8kmv as get_annotations,
  Encoderqvmrpqtq8hnu as Encoder,
  CompositeEncoderknecpkexzn3v as CompositeEncoder,
  ElementMarker33ojvsajwmzts as ElementMarker,
  CLASS_getInstance25nhr3t715wdo as CLASS_getInstance,
  jsonCachedSerialNameslxufy2gu43jt as jsonCachedSerialNames,
  LIST_getInstance2leq5bbahk4rz as LIST_getInstance,
  CONTEXTUAL_getInstance2j6ylx8hc4yv2 as CONTEXTUAL_getInstance,
  PolymorphicKindla9gurooefwb as PolymorphicKind,
  PrimitiveKindndgbuh6is7ze as PrimitiveKind,
  MAP_getInstance141vh6u7faopd as MAP_getInstance,
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
  OBJECT_getInstance167untwb9admi as OBJECT_getInstance,
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
  Unit_instancev9v8hjid95df as Unit_instance,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  IllegalArgumentException2asla15b5jaob as IllegalArgumentException,
  toString1pkumu07cwy4m as toString,
  charSequenceLength3278n89t01tmv as charSequenceLength,
  charSequenceGet1vxk1y5n17t1z as charSequenceGet,
  _Char___init__impl__6a9atx2gndcvjvc5pke as _Char___init__impl__6a9atx,
  equals2au1ep9vhcato as equals,
  toString30pk9tzaqopn as toString_0,
  Enum3alwj03lh1n41 as Enum,
  getKClassFromExpression348iqjl4fnx2f as getKClassFromExpression,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  isInterface3d6p8outrmvmk as isInterface,
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  numberRangeToNumber25vse2rgp6rs8 as numberRangeToNumber,
  ClosedRangehokgr73im9z3 as ClosedRange,
  contains2c50nlxg7en7o as contains,
  convertToInty04h231mmjoh as convertToInt,
  NumberFormatException3bgsm2s9o4t55 as NumberFormatException,
  toDoubleOrNullkxwozihadygj as toDoubleOrNull,
  toDouble1kn912gjoizjp as toDouble,
  IllegalStateExceptionkoljg5n0nrlr as IllegalStateException,
  hashCodeq5arwsb9dgti as hashCode,
  joinToString1cxrrlmo0chqs as joinToString,
  KtList3hktaavzmj137 as KtList,
  StringBuildermazzzhj6kkai as StringBuilder,
  KtMap140uvy3s5zad8 as KtMap,
  getBooleanHashCode1bbj3u6b3v0a7 as getBooleanHashCode,
  getStringHashCode26igk1bx568vk as getStringHashCode,
  StringCompanionObject_instance1v0ht40fz3tq0 as StringCompanionObject_instance,
  noWhenBranchMatchedException2a6r7ubxgky5j as noWhenBranchMatchedException,
  toLongOrNullutqivezb0wx1 as toLongOrNull,
  toULongOrNullojoyxi0i9tgj as toULongOrNull,
  ULong3f9k7s38t3rfp as ULong,
  Companion_getInstance2ln0tj1crqgxz as Companion_getInstance,
  _ULong___get_data__impl__fggpzb2bbucljk081qt as _ULong___get_data__impl__fggpzb,
  toBooleanStrictOrNull2j0md398tkvbj as toBooleanStrictOrNull,
  KProperty1ca4yb4wlo496 as KProperty1,
  getPropertyCallableRef3hckxc0xueiaj as getPropertyCallableRef,
  lazy2hsh8ze7j6ikd as lazy,
  protoOf180f3jzyo7rfj as protoOf,
  fromInt2ii0rejb1w62w as fromInt,
  _UInt___init__impl__l7qpdl2xbmh7to8lpd7 as _UInt___init__impl__l7qpdl,
  UInt__toString_impl_dbgl211hnbf9xsikfsf as UInt__toString_impl_dbgl21,
  _ULong___init__impl__c78o9k4z3cjzifecv6 as _ULong___init__impl__c78o9k,
  ULong__toString_impl_f9au7k3n8y2imw2kac3 as ULong__toString_impl_f9au7k,
  _UByte___init__impl__g9hnc43bwrjlqz9k9id as _UByte___init__impl__g9hnc4,
  UByte__toString_impl_v72jg35cd2pgynmah7 as UByte__toString_impl_v72jg,
  _UShort___init__impl__jigrne3vu9egv7mch1k as _UShort___init__impl__jigrne,
  UShort__toString_impl_edaoee1ut8mfnxr9a1q as UShort__toString_impl_edaoee,
  captureStack1fzi4aczwc4hg as captureStack,
  charSequenceSubSequence1iwpdba8s3jc7 as charSequenceSubSequence,
  coerceAtLeast2bkz8m9ik7hep as coerceAtLeast,
  coerceAtMost322komnqp70ag as coerceAtMost,
  Collection1k04j3hzsbod0 as Collection,
  toSet1glep2u1u9tcb as toSet,
  LinkedHashMap1zhqxkxv3xnkl as LinkedHashMap,
  ArrayList3it5z8td81qkl as ArrayList,
  singleOrNullrknfaxokm1sl as singleOrNull,
  emptyMapr06gerzljqtm as emptyMap,
  LinkedHashSet2tkztfx86kyx2 as LinkedHashSet,
  getValue48kllevslyh6 as getValue,
  copyOf2ng0t8oizk6it as copyOf,
  arrayCopytctsywo3h7gj as arrayCopy,
  DeepRecursiveFunction3r49v8igsve1g as DeepRecursiveFunction,
  invoke246lvi6tzooz1 as invoke,
  DeepRecursiveScope1pqaydvh4vdcu as DeepRecursiveScope,
  Unitkvevlwgzwiuc as Unit,
  initMetadataForLambda3af3he42mmnh as initMetadataForLambda,
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
  _UInt___get_data__impl__f0vqqw2j5mttix8w0l0 as _UInt___get_data__impl__f0vqqw,
  toULong266mnyksbttkw as toULong,
  toUByteh6p4wmqswkrs as toUByte,
  _UByte___get_data__impl__jof9qr23gcv767stjfh as _UByte___get_data__impl__jof9qr,
  toUShort7yqspfnhrot4 as toUShort,
  _UShort___get_data__impl__g0245313795p1x5hw5 as _UShort___get_data__impl__g0245,
  toString22rbkbhdb5cl2 as toString_1,
  Companion_getInstance1339zuieiizg3 as Companion_getInstance_0,
  Companion_getInstance2utgi65n0nnqj as Companion_getInstance_1,
  Companion_getInstance3rx8u2n07bmtm as Companion_getInstance_2,
  setOf45ia9pnfhe90 as setOf,
  equals2v6cggk171b6e as equals_0,
  Char__toInt_impl_vasixdnyockrdnmht5 as Char__toInt_impl_vasixd,
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
  Char__minus_impl_a2frrhux3psqasp3d9 as Char__minus_impl_a2frrh,
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
    this.c3r_1 = configuration;
    this.d3r_1 = serializersModule;
    this.e3r_1 = new DescriptorSchemaCache();
  }
  g10() {
    return this.d3r_1;
  }
  f3r(serializer, value) {
    var result = new JsonToStringWriter();
    try {
      encodeByWriter(this, result, serializer, value);
      return result.toString();
    }finally {
      result.w2x();
    }
  }
  g3r(deserializer, string) {
    var lexer = StringJsonLexer_0(this, string);
    var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.hv(), null);
    var result = input.qz(deserializer);
    lexer.v3r();
    return result;
  }
  h3r(deserializer, element) {
    return readJson(this, element, deserializer);
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
    this.w3r_1 = json.c3r_1.p3s_1;
    this.x3r_1 = json.c3r_1.u3s_1;
    this.y3r_1 = json.c3r_1.q3s_1;
    this.z3r_1 = json.c3r_1.r3s_1;
    this.a3s_1 = json.c3r_1.t3s_1;
    this.b3s_1 = json.c3r_1.v3s_1;
    this.c3s_1 = json.c3r_1.w3s_1;
    this.d3s_1 = json.c3r_1.y3s_1;
    this.e3s_1 = json.c3r_1.f3t_1;
    this.f3s_1 = json.c3r_1.a3t_1;
    this.g3s_1 = json.c3r_1.b3t_1;
    this.h3s_1 = json.c3r_1.c3t_1;
    this.i3s_1 = json.c3r_1.d3t_1;
    this.j3s_1 = json.c3r_1.e3t_1;
    this.k3s_1 = json.c3r_1.z3s_1;
    this.l3s_1 = json.c3r_1.s3s_1;
    this.m3s_1 = json.c3r_1.x3s_1;
    this.n3s_1 = json.g10();
  }
  o3s() {
    if (this.m3s_1) {
      // Inline function 'kotlin.require' call
      if (!(this.d3s_1 === 'type')) {
        var message = 'Class discriminator should not be specified when array polymorphism is specified';
        throw IllegalArgumentException.h2(toString(message));
      }
      // Inline function 'kotlin.require' call
      if (!this.e3s_1.equals(ClassDiscriminatorMode_POLYMORPHIC_getInstance())) {
        var message_0 = 'useArrayPolymorphism option can only be used if classDiscriminatorMode in a default POLYMORPHIC state.';
        throw IllegalArgumentException.h2(toString(message_0));
      }
    }
    if (!this.a3s_1) {
      // Inline function 'kotlin.require' call
      if (!(this.b3s_1 === '    ')) {
        var message_1 = 'Indent should not be specified when default printing mode is used';
        throw IllegalArgumentException.h2(toString(message_1));
      }
    } else if (!(this.b3s_1 === '    ')) {
      var tmp0 = this.b3s_1;
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
        var message_2 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.b3s_1;
        throw IllegalArgumentException.h2(toString(message_2));
      }
    }
    return new JsonConfiguration(this.w3r_1, this.y3r_1, this.z3r_1, this.l3s_1, this.a3s_1, this.x3r_1, this.b3s_1, this.c3s_1, this.m3s_1, this.d3s_1, this.k3s_1, this.f3s_1, this.g3s_1, this.h3s_1, this.i3s_1, this.j3s_1, this.e3s_1);
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
  constructor(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, namingStrategy, decodeEnumsCaseInsensitive, allowTrailingComma, allowComments, classDiscriminatorMode) {
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
    this.p3s_1 = encodeDefaults;
    this.q3s_1 = ignoreUnknownKeys;
    this.r3s_1 = isLenient;
    this.s3s_1 = allowStructuredMapKeys;
    this.t3s_1 = prettyPrint;
    this.u3s_1 = explicitNulls;
    this.v3s_1 = prettyPrintIndent;
    this.w3s_1 = coerceInputValues;
    this.x3s_1 = useArrayPolymorphism;
    this.y3s_1 = classDiscriminator;
    this.z3s_1 = allowSpecialFloatingPointValues;
    this.a3t_1 = useAlternativeNames;
    this.b3t_1 = namingStrategy;
    this.c3t_1 = decodeEnumsCaseInsensitive;
    this.d3t_1 = allowTrailingComma;
    this.e3t_1 = allowComments;
    this.f3t_1 = classDiscriminatorMode;
  }
  toString() {
    return 'JsonConfiguration(encodeDefaults=' + this.p3s_1 + ', ignoreUnknownKeys=' + this.q3s_1 + ', isLenient=' + this.r3s_1 + ', ' + ('allowStructuredMapKeys=' + this.s3s_1 + ', prettyPrint=' + this.t3s_1 + ', explicitNulls=' + this.u3s_1 + ', ') + ("prettyPrintIndent='" + this.v3s_1 + "', coerceInputValues=" + this.w3s_1 + ', useArrayPolymorphism=' + this.x3s_1 + ', ') + ("classDiscriminator='" + this.y3s_1 + "', allowSpecialFloatingPointValues=" + this.z3s_1 + ', ') + ('useAlternativeNames=' + this.a3t_1 + ', namingStrategy=' + toString_0(this.b3t_1) + ', decodeEnumsCaseInsensitive=' + this.c3t_1 + ', ') + ('allowTrailingComma=' + this.d3t_1 + ', allowComments=' + this.e3t_1 + ', classDiscriminatorMode=' + this.f3t_1.toString() + ')');
  }
}
class ClassDiscriminatorMode extends Enum {}
class JsonContentPolymorphicSerializer {
  constructor(baseClass) {
    this.g3t_1 = baseClass;
    this.h3t_1 = buildSerialDescriptor('JsonContentPolymorphicSerializer<' + this.g3t_1.f1() + '>', SEALED_getInstance(), []);
  }
  hv() {
    return this.h3t_1;
  }
  zv(encoder, value) {
    var tmp0_elvis_lhs = encoder.g10().r11(this.g3t_1, value);
    var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? serializerOrNull(getKClassFromExpression(value)) : tmp0_elvis_lhs;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      throwSubtypeNotRegistered(this, getKClassFromExpression(value), this.g3t_1);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var actualSerializer = tmp;
    (isInterface(actualSerializer, KSerializer) ? actualSerializer : THROW_CCE()).iv(encoder, value);
  }
  iv(encoder, value) {
    return this.zv(encoder, !(value == null) ? value : THROW_CCE());
  }
  jv(decoder) {
    var input = asJsonDecoder(decoder);
    var tree = input.i3t();
    var tmp = this.j3t(tree);
    var actualSerializer = isInterface(tmp, KSerializer) ? tmp : THROW_CCE();
    return input.k3t().h3r(actualSerializer, tree);
  }
}
class JsonDecoder {}
class Companion {}
class JsonElement {}
class Companion_0 {}
class JsonPrimitive extends JsonElement {
  toString() {
    return this.f38();
  }
}
class Companion_1 {}
class JsonArray extends JsonElement {
  constructor(content) {
    super();
    this.m3t_1 = content;
  }
  equals(other) {
    return equals(this.m3t_1, other);
  }
  hashCode() {
    return hashCode(this.m3t_1);
  }
  toString() {
    return joinToString(this.m3t_1, ',', '[', ']');
  }
  j1() {
    return this.m3t_1.j1();
  }
  n3t(element) {
    return this.m3t_1.t3(element);
  }
  t3(element) {
    if (!(element instanceof JsonElement))
      return false;
    return this.n3t(element instanceof JsonElement ? element : THROW_CCE());
  }
  l1() {
    return this.m3t_1.l1();
  }
  o3t(elements) {
    return this.m3t_1.u3(elements);
  }
  u3(elements) {
    return this.o3t(elements);
  }
  j2(index) {
    return this.m3t_1.j2(index);
  }
  p3t(element) {
    return this.m3t_1.v3(element);
  }
  v3(element) {
    if (!(element instanceof JsonElement))
      return -1;
    return this.p3t(element instanceof JsonElement ? element : THROW_CCE());
  }
  q3t(element) {
    return this.m3t_1.w3(element);
  }
  w3(element) {
    if (!(element instanceof JsonElement))
      return -1;
    return this.q3t(element instanceof JsonElement ? element : THROW_CCE());
  }
  x3() {
    return this.m3t_1.x3();
  }
  p2(index) {
    return this.m3t_1.p2(index);
  }
  y3(fromIndex, toIndex) {
    return this.m3t_1.y3(fromIndex, toIndex);
  }
  asJsReadonlyArrayView() {
    return this.m3t_1.asJsReadonlyArrayView();
  }
  k2() {
    return this.m3t_1.k2();
  }
}
class Companion_2 {}
class JsonObject extends JsonElement {
  constructor(content) {
    super();
    this.r3t_1 = content;
  }
  equals(other) {
    return equals(this.r3t_1, other);
  }
  hashCode() {
    return hashCode(this.r3t_1);
  }
  toString() {
    var tmp = this.r3t_1.u2();
    return joinToString(tmp, ',', '{', '}', VOID, VOID, JsonObject$toString$lambda);
  }
  j1() {
    return this.r3t_1.j1();
  }
  n2b(key) {
    return this.r3t_1.a4(key);
  }
  a4(key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.n2b((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  }
  s3t(value) {
    return this.r3t_1.b4(value);
  }
  b4(value) {
    if (!(value instanceof JsonElement))
      return false;
    return this.s3t(value instanceof JsonElement ? value : THROW_CCE());
  }
  p2b(key) {
    return this.r3t_1.c4(key);
  }
  c4(key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.p2b((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  }
  asJsReadonlyMapView() {
    return this.r3t_1.asJsReadonlyMapView();
  }
  k2() {
    return this.r3t_1.k2();
  }
  d4() {
    return this.r3t_1.d4();
  }
  e4() {
    return this.r3t_1.e4();
  }
  u2() {
    return this.r3t_1.u2();
  }
}
class JsonNull extends JsonPrimitive {
  constructor() {
    JsonNull_instance = null;
    super();
    JsonNull_instance = this;
    this.u3t_1 = 'null';
  }
  l3t() {
    return false;
  }
  f38() {
    return this.u3t_1;
  }
  v3t() {
    return JsonNullSerializer_getInstance();
  }
  j18(typeParamsSerializers) {
    return this.v3t();
  }
}
class JsonLiteral extends JsonPrimitive {
  constructor(body, isString, coerceToInlineType) {
    coerceToInlineType = coerceToInlineType === VOID ? null : coerceToInlineType;
    super();
    this.w3t_1 = isString;
    this.x3t_1 = coerceToInlineType;
    this.y3t_1 = toString(body);
    if (!(this.x3t_1 == null)) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.require' call
      if (!this.x3t_1.zx()) {
        var message = 'Failed requirement.';
        throw IllegalArgumentException.h2(toString(message));
      }
    }
  }
  l3t() {
    return this.w3t_1;
  }
  f38() {
    return this.y3t_1;
  }
  toString() {
    var tmp;
    if (this.w3t_1) {
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder.h1();
      printQuoted(this_0, this.y3t_1);
      tmp = this_0.toString();
    } else {
      tmp = this.y3t_1;
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
    if (!(this.w3t_1 === other.w3t_1))
      return false;
    if (!(this.y3t_1 === other.y3t_1))
      return false;
    return true;
  }
  hashCode() {
    var result = getBooleanHashCode(this.w3t_1);
    result = imul(31, result) + getStringHashCode(this.y3t_1) | 0;
    return result;
  }
}
class JsonElementSerializer {
  constructor() {
    JsonElementSerializer_instance = this;
    var tmp = this;
    var tmp_0 = SEALED_getInstance();
    tmp.e3u_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonElement', tmp_0, [], JsonElementSerializer$descriptor$lambda);
  }
  hv() {
    return this.e3u_1;
  }
  f3u(encoder, value) {
    verify(encoder);
    if (value instanceof JsonPrimitive) {
      encoder.k11(JsonPrimitiveSerializer_getInstance(), value);
    } else {
      if (value instanceof JsonObject) {
        encoder.k11(JsonObjectSerializer_getInstance(), value);
      } else {
        if (value instanceof JsonArray) {
          encoder.k11(JsonArraySerializer_getInstance(), value);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
  }
  iv(encoder, value) {
    return this.f3u(encoder, value instanceof JsonElement ? value : THROW_CCE());
  }
  jv(decoder) {
    var input = asJsonDecoder(decoder);
    return input.i3t();
  }
}
class JsonPrimitiveSerializer {
  constructor() {
    JsonPrimitiveSerializer_instance = this;
    this.z3t_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonPrimitive', STRING_getInstance(), []);
  }
  hv() {
    return this.z3t_1;
  }
  g3u(encoder, value) {
    verify(encoder);
    var tmp;
    if (value instanceof JsonNull) {
      encoder.k11(JsonNullSerializer_getInstance(), JsonNull_getInstance());
      tmp = Unit_instance;
    } else {
      var tmp_0 = JsonLiteralSerializer_getInstance();
      encoder.k11(tmp_0, value instanceof JsonLiteral ? value : THROW_CCE());
      tmp = Unit_instance;
    }
    return tmp;
  }
  iv(encoder, value) {
    return this.g3u(encoder, value instanceof JsonPrimitive ? value : THROW_CCE());
  }
  jv(decoder) {
    var result = asJsonDecoder(decoder).i3t();
    if (!(result instanceof JsonPrimitive))
      throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonPrimitive, had ' + toString(getKClassFromExpression(result)), toString(result));
    return result;
  }
}
class JsonArrayDescriptor {
  constructor() {
    JsonArrayDescriptor_instance = this;
    this.h3u_1 = ListSerializer(JsonElementSerializer_getInstance()).hv();
    this.i3u_1 = 'kotlinx.serialization.json.JsonArray';
  }
  iw() {
    return this.i3u_1;
  }
  cy(index) {
    return this.h3u_1.cy(index);
  }
  dy(name) {
    return this.h3u_1.dy(name);
  }
  ey(index) {
    return this.h3u_1.ey(index);
  }
  fy(index) {
    return this.h3u_1.fy(index);
  }
  gy(index) {
    return this.h3u_1.gy(index);
  }
  yx() {
    return this.h3u_1.yx();
  }
  rx() {
    return this.h3u_1.rx();
  }
  zx() {
    return this.h3u_1.zx();
  }
  ay() {
    return this.h3u_1.ay();
  }
  by() {
    return this.h3u_1.by();
  }
}
class JsonArraySerializer {
  constructor() {
    JsonArraySerializer_instance = this;
    this.d3u_1 = JsonArrayDescriptor_getInstance();
  }
  hv() {
    return this.d3u_1;
  }
  j3u(encoder, value) {
    verify(encoder);
    ListSerializer(JsonElementSerializer_getInstance()).iv(encoder, value);
  }
  iv(encoder, value) {
    return this.j3u(encoder, value instanceof JsonArray ? value : THROW_CCE());
  }
  jv(decoder) {
    verify_0(decoder);
    return new JsonArray(ListSerializer(JsonElementSerializer_getInstance()).jv(decoder));
  }
}
class JsonObjectDescriptor {
  constructor() {
    JsonObjectDescriptor_instance = this;
    this.k3u_1 = MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).hv();
    this.l3u_1 = 'kotlinx.serialization.json.JsonObject';
  }
  iw() {
    return this.l3u_1;
  }
  cy(index) {
    return this.k3u_1.cy(index);
  }
  dy(name) {
    return this.k3u_1.dy(name);
  }
  ey(index) {
    return this.k3u_1.ey(index);
  }
  fy(index) {
    return this.k3u_1.fy(index);
  }
  gy(index) {
    return this.k3u_1.gy(index);
  }
  yx() {
    return this.k3u_1.yx();
  }
  rx() {
    return this.k3u_1.rx();
  }
  zx() {
    return this.k3u_1.zx();
  }
  ay() {
    return this.k3u_1.ay();
  }
  by() {
    return this.k3u_1.by();
  }
}
class JsonObjectSerializer {
  constructor() {
    JsonObjectSerializer_instance = this;
    this.c3u_1 = JsonObjectDescriptor_getInstance();
  }
  hv() {
    return this.c3u_1;
  }
  m3u(encoder, value) {
    verify(encoder);
    MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).iv(encoder, value);
  }
  iv(encoder, value) {
    return this.m3u(encoder, value instanceof JsonObject ? value : THROW_CCE());
  }
  jv(decoder) {
    verify_0(decoder);
    return new JsonObject(MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).jv(decoder));
  }
}
class JsonNullSerializer {
  constructor() {
    JsonNullSerializer_instance = this;
    this.a3u_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonNull', ENUM_getInstance(), []);
  }
  hv() {
    return this.a3u_1;
  }
  n3u(encoder, value) {
    verify(encoder);
    encoder.n10();
  }
  iv(encoder, value) {
    return this.n3u(encoder, value instanceof JsonNull ? value : THROW_CCE());
  }
  jv(decoder) {
    verify_0(decoder);
    if (decoder.cz()) {
      throw JsonDecodingException.u3u("Expected 'null' literal");
    }
    decoder.dz();
    return JsonNull_getInstance();
  }
}
class JsonLiteralSerializer {
  constructor() {
    JsonLiteralSerializer_instance = this;
    this.b3u_1 = PrimitiveSerialDescriptor('kotlinx.serialization.json.JsonLiteral', STRING_getInstance());
  }
  hv() {
    return this.b3u_1;
  }
  v3u(encoder, value) {
    verify(encoder);
    if (value.w3t_1) {
      return encoder.w10(value.y3t_1);
    }
    if (!(value.x3t_1 == null)) {
      return encoder.y10(value.x3t_1).w10(value.y3t_1);
    }
    var tmp0_safe_receiver = toLongOrNull(value.y3t_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.s10(tmp0_safe_receiver);
    }
    var tmp1_safe_receiver = toULongOrNull(value.y3t_1);
    var tmp = tmp1_safe_receiver;
    if ((tmp == null ? null : new ULong(tmp)) == null)
      null;
    else {
      var tmp_0 = tmp1_safe_receiver;
      // Inline function 'kotlin.let' call
      var it = (tmp_0 == null ? null : new ULong(tmp_0)).f3_1;
      var tmp_1 = encoder.y10(serializer_0(Companion_getInstance()).hv());
      // Inline function 'kotlin.ULong.toLong' call
      var tmp$ret$4 = _ULong___get_data__impl__fggpzb(it);
      tmp_1.s10(tmp$ret$4);
      return Unit_instance;
    }
    var tmp2_safe_receiver = toDoubleOrNull(value.y3t_1);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.u10(tmp2_safe_receiver);
    }
    var tmp3_safe_receiver = toBooleanStrictOrNull(value.y3t_1);
    if (tmp3_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.o10(tmp3_safe_receiver);
    }
    encoder.w10(value.y3t_1);
  }
  iv(encoder, value) {
    return this.v3u(encoder, value instanceof JsonLiteral ? value : THROW_CCE());
  }
  jv(decoder) {
    var result = asJsonDecoder(decoder).i3t();
    if (!(result instanceof JsonLiteral))
      throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonLiteral, had ' + toString(getKClassFromExpression(result)), toString(result));
    return result;
  }
}
class defer$1 {
  constructor($deferred) {
    this.w3u_1 = lazy($deferred);
  }
  iw() {
    return _get_original__l7ku1m(this).iw();
  }
  yx() {
    return _get_original__l7ku1m(this).yx();
  }
  ay() {
    return _get_original__l7ku1m(this).ay();
  }
  cy(index) {
    return _get_original__l7ku1m(this).cy(index);
  }
  dy(name) {
    return _get_original__l7ku1m(this).dy(name);
  }
  ey(index) {
    return _get_original__l7ku1m(this).ey(index);
  }
  fy(index) {
    return _get_original__l7ku1m(this).fy(index);
  }
  gy(index) {
    return _get_original__l7ku1m(this).gy(index);
  }
}
class JsonEncoder {}
class JsonTransformingSerializer {
  constructor(tSerializer) {
    this.y3u_1 = tSerializer;
  }
  hv() {
    return this.y3u_1.hv();
  }
  iv(encoder, value) {
    var output = asJsonEncoder(encoder);
    var element = writeJson(output.k3t(), value, this.y3u_1);
    element = this.z3u(element);
    output.x3u(element);
  }
  jv(decoder) {
    var input = asJsonDecoder(decoder);
    var element = input.i3t();
    return input.k3t().h3r(this.y3u_1, this.a3v(element));
  }
  a3v(element) {
    return element;
  }
  z3u(element) {
    return element;
  }
}
class Composer {
  constructor(writer) {
    this.b3v_1 = writer;
    this.c3v_1 = true;
  }
  d3v() {
    this.c3v_1 = true;
  }
  e3v() {
    return Unit_instance;
  }
  f3v() {
    this.c3v_1 = false;
  }
  g3v() {
    this.c3v_1 = false;
  }
  h3v() {
    return Unit_instance;
  }
  i3v(v) {
    return this.b3v_1.j3v(v);
  }
  k3v(v) {
    return this.b3v_1.l3v(v);
  }
  m3v(v) {
    return this.b3v_1.l3v(v.toString());
  }
  n3v(v) {
    return this.b3v_1.l3v(v.toString());
  }
  o3v(v) {
    return this.b3v_1.p3v(fromInt(v));
  }
  q3v(v) {
    return this.b3v_1.p3v(fromInt(v));
  }
  r3v(v) {
    return this.b3v_1.p3v(fromInt(v));
  }
  s3v(v) {
    return this.b3v_1.p3v(v);
  }
  t3v(v) {
    return this.b3v_1.l3v(v.toString());
  }
  u3v(value) {
    return this.b3v_1.v3v(value);
  }
}
class ComposerForUnsignedNumbers extends Composer {
  constructor(writer, forceQuoting) {
    super(writer);
    this.y3v_1 = forceQuoting;
  }
  r3v(v) {
    if (this.y3v_1) {
      // Inline function 'kotlin.toUInt' call
      var tmp$ret$0 = _UInt___init__impl__l7qpdl(v);
      this.u3v(UInt__toString_impl_dbgl21(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUInt' call
      var tmp$ret$1 = _UInt___init__impl__l7qpdl(v);
      this.k3v(UInt__toString_impl_dbgl21(tmp$ret$1));
    }
  }
  s3v(v) {
    if (this.y3v_1) {
      // Inline function 'kotlin.toULong' call
      var tmp$ret$0 = _ULong___init__impl__c78o9k(v);
      this.u3v(ULong__toString_impl_f9au7k(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toULong' call
      var tmp$ret$1 = _ULong___init__impl__c78o9k(v);
      this.k3v(ULong__toString_impl_f9au7k(tmp$ret$1));
    }
  }
  o3v(v) {
    if (this.y3v_1) {
      // Inline function 'kotlin.toUByte' call
      var tmp$ret$0 = _UByte___init__impl__g9hnc4(v);
      this.u3v(UByte__toString_impl_v72jg(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUByte' call
      var tmp$ret$1 = _UByte___init__impl__g9hnc4(v);
      this.k3v(UByte__toString_impl_v72jg(tmp$ret$1));
    }
  }
  q3v(v) {
    if (this.y3v_1) {
      // Inline function 'kotlin.toUShort' call
      var tmp$ret$0 = _UShort___init__impl__jigrne(v);
      this.u3v(UShort__toString_impl_edaoee(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUShort' call
      var tmp$ret$1 = _UShort___init__impl__jigrne(v);
      this.k3v(UShort__toString_impl_edaoee(tmp$ret$1));
    }
  }
}
class ComposerForUnquotedLiterals extends Composer {
  constructor(writer, forceQuoting) {
    super(writer);
    this.b3w_1 = forceQuoting;
  }
  u3v(value) {
    if (this.b3w_1) {
      super.u3v(value);
    } else {
      super.k3v(value);
    }
  }
}
class ComposerWithPrettyPrint extends Composer {
  constructor(writer, json) {
    super(writer);
    this.e3w_1 = json;
    this.f3w_1 = 0;
  }
  d3v() {
    this.c3v_1 = true;
    this.f3w_1 = this.f3w_1 + 1 | 0;
  }
  e3v() {
    this.f3w_1 = this.f3w_1 - 1 | 0;
  }
  f3v() {
    this.c3v_1 = false;
    this.k3v('\n');
    // Inline function 'kotlin.repeat' call
    var times = this.f3w_1;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.k3v(this.e3w_1.c3r_1.v3s_1);
      }
       while (inductionVariable < times);
  }
  g3v() {
    if (this.c3v_1)
      this.c3v_1 = false;
    else {
      this.f3v();
    }
  }
  h3v() {
    this.i3v(_Char___init__impl__6a9atx(32));
  }
}
class JsonElementMarker {
  constructor(descriptor) {
    var tmp = this;
    tmp.g3w_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
    this.h3w_1 = false;
  }
  i3w(index) {
    this.g3w_1.a16(index);
  }
  j3w() {
    return this.g3w_1.b16();
  }
}
class JsonException extends SerializationException {
  static p3w(message) {
    var $this = this.xw(message);
    captureStack($this, $this.o3w_1);
    return $this;
  }
}
class JsonDecodingException extends JsonException {
  static u3u(message) {
    var $this = this.p3w(message);
    captureStack($this, $this.t3u_1);
    return $this;
  }
}
class JsonEncodingException extends JsonException {
  static y3w(message) {
    var $this = this.p3w(message);
    captureStack($this, $this.x3w_1);
    return $this;
  }
}
class Tombstone {}
class JsonPath {
  constructor() {
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.d3x_1 = Array(8);
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = new Int32Array(8);
    while (tmp_1 < 8) {
      tmp_2[tmp_1] = -1;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.e3x_1 = tmp_2;
    this.f3x_1 = -1;
  }
  g3x(sd) {
    this.f3x_1 = this.f3x_1 + 1 | 0;
    var depth = this.f3x_1;
    if (depth === this.d3x_1.length) {
      resize(this);
    }
    this.d3x_1[depth] = sd;
  }
  h3x(index) {
    this.e3x_1[this.f3x_1] = index;
  }
  i3x(key) {
    var tmp;
    if (!(this.e3x_1[this.f3x_1] === -2)) {
      this.f3x_1 = this.f3x_1 + 1 | 0;
      tmp = this.f3x_1 === this.d3x_1.length;
    } else {
      tmp = false;
    }
    if (tmp) {
      resize(this);
    }
    this.d3x_1[this.f3x_1] = key;
    this.e3x_1[this.f3x_1] = -2;
  }
  j3x() {
    if (this.e3x_1[this.f3x_1] === -2) {
      this.d3x_1[this.f3x_1] = Tombstone_instance;
    }
  }
  k3x() {
    var depth = this.f3x_1;
    if (this.e3x_1[depth] === -2) {
      this.e3x_1[depth] = -1;
      this.f3x_1 = this.f3x_1 - 1 | 0;
    }
    if (!(this.f3x_1 === -1)) {
      this.f3x_1 = this.f3x_1 - 1 | 0;
    }
  }
  l3x() {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder.h1();
    this_0.i1('$');
    // Inline function 'kotlin.repeat' call
    var times = this.f3x_1 + 1 | 0;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = this.d3x_1[index];
        if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
          if (equals(element.yx(), LIST_getInstance())) {
            if (!(this.e3x_1[index] === -1)) {
              this_0.i1('[');
              this_0.xg(this.e3x_1[index]);
              this_0.i1(']');
            }
          } else {
            var idx = this.e3x_1[index];
            if (idx >= 0) {
              this_0.i1('.');
              this_0.i1(element.cy(idx));
            }
          }
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
       while (inductionVariable < times);
    return this_0.toString();
  }
  toString() {
    return this.l3x();
  }
}
class JsonSerializersModuleValidator {
  constructor(configuration) {
    this.m3x_1 = configuration.x3s_1;
    this.n3x_1 = !configuration.f3t_1.equals(ClassDiscriminatorMode_NONE_getInstance());
  }
  d1h(kClass, provider) {
  }
  g1h(baseClass, actualClass, actualSerializer) {
    var descriptor = actualSerializer.hv();
    checkKind(this, descriptor, actualClass);
  }
  h1h(baseClass, defaultSerializerProvider) {
  }
  i1h(baseClass, defaultDeserializerProvider) {
  }
}
class JsonTreeReader$readDeepRecursive$slambda {
  constructor(this$0) {
    this.j3y_1 = this$0;
  }
  *k3y($this$DeepRecursiveFunction, it, $completion) {
    var tmp0_subject = this.j3y_1.y3x_1.d3y();
    var tmp;
    if (tmp0_subject === 1) {
      tmp = readValue(this.j3y_1, true);
    } else if (tmp0_subject === 0) {
      tmp = readValue(this.j3y_1, false);
    } else if (tmp0_subject === 6) {
      tmp = yield* /*#__NOINLINE__*/readObject_0(this.j3y_1, $this$DeepRecursiveFunction, $completion);
    } else if (tmp0_subject === 8) {
      tmp = readArray(this.j3y_1);
    } else {
      this.j3y_1.y3x_1.r3w("Can't begin reading element, unexpected token");
    }
    return tmp;
  }
  rd(p1, p2, $completion) {
    var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
    return this.k3y(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $completion);
  }
}
class JsonTreeReader {
  constructor(configuration, lexer) {
    this.y3x_1 = lexer;
    this.z3x_1 = configuration.r3s_1;
    this.a3y_1 = configuration.d3t_1;
    this.b3y_1 = 0;
  }
  h3y() {
    var token = this.y3x_1.d3y();
    var tmp;
    if (token === 1) {
      tmp = readValue(this, true);
    } else if (token === 0) {
      tmp = readValue(this, false);
    } else if (token === 6) {
      var tmp_0;
      this.b3y_1 = this.b3y_1 + 1 | 0;
      if (this.b3y_1 === 200) {
        tmp_0 = readDeepRecursive(this);
      } else {
        tmp_0 = readObject(this);
      }
      var result = tmp_0;
      this.b3y_1 = this.b3y_1 - 1 | 0;
      tmp = result;
    } else if (token === 8) {
      tmp = readArray(this);
    } else {
      this.y3x_1.r3w('Cannot read Json element because of unexpected ' + tokenDescription(token));
    }
    return tmp;
  }
}
class Key {}
class DescriptorSchemaCache {
  constructor() {
    this.z3w_1 = createMapForCache(16);
  }
  m3y(descriptor, key, value) {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.z3w_1;
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
  a3x(descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.n3y(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    var value = defaultValue();
    this.m3y(descriptor, key, value);
    return value;
  }
  n3y(descriptor, key) {
    var tmp0_safe_receiver = this.z3w_1.c4(descriptor);
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
    this.o3y_1 = discriminatorToSkip;
  }
}
class StreamingJsonDecoder extends AbstractDecoder {
  constructor(json, mode, lexer, descriptor, discriminatorHolder) {
    super();
    this.j3r_1 = json;
    this.k3r_1 = mode;
    this.l3r_1 = lexer;
    this.m3r_1 = this.j3r_1.g10();
    this.n3r_1 = -1;
    this.o3r_1 = discriminatorHolder;
    this.p3r_1 = this.j3r_1.c3r_1;
    this.q3r_1 = this.p3r_1.u3s_1 ? null : new JsonElementMarker(descriptor);
  }
  k3t() {
    return this.j3r_1;
  }
  g10() {
    return this.m3r_1;
  }
  i3t() {
    return (new JsonTreeReader(this.j3r_1.c3r_1, this.l3r_1)).h3y();
  }
  qz(deserializer) {
    try {
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.j3r_1.c3r_1.x3s_1;
      }
      if (tmp) {
        return deserializer.jv(this);
      }
      var discriminator = classDiscriminator(deserializer.hv(), this.j3r_1);
      var tmp0_elvis_lhs = this.l3r_1.x3y(discriminator, this.p3r_1.r3s_1);
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
            tmp_1 = this.k3t().c3r_1.x3s_1;
          }
          if (tmp_1) {
            tmp$ret$0 = tmp2.jv(this);
            break $l$block;
          }
          var discriminator_0 = classDiscriminator(tmp2.hv(), this.k3t());
          var tmp0 = this.i3t();
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName = tmp2.hv().iw();
          if (!(tmp0 instanceof JsonObject)) {
            var tmp_2 = getKClass(JsonObject).f1();
            var tmp_3 = getKClassFromExpression(tmp0).f1();
            var tmp$ret$2 = this.l3r_1.s3r_1.l3x();
            throw JsonDecodingException_0(-1, 'Expected ' + tmp_2 + ', but had ' + tmp_3 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$2, toString(tmp0));
          }
          var jsonTree = tmp0;
          var tmp0_safe_receiver = jsonTree.p2b(discriminator_0);
          var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
          var type = tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
          var tmp_4;
          try {
            tmp_4 = findPolymorphicSerializer(tmp2, this, type);
          } catch ($p) {
            var tmp_5;
            if ($p instanceof SerializationException) {
              var it = $p;
              throw JsonDecodingException_0(-1, ensureNotNull(it.message), jsonTree.toString());
            } else {
              throw $p;
            }
          }
          var tmp_6 = tmp_4;
          var actualSerializer = isInterface(tmp_6, DeserializationStrategy) ? tmp_6 : THROW_CCE();
          tmp$ret$0 = readPolymorphicJson(this.k3t(), discriminator_0, jsonTree, actualSerializer);
        }
        return tmp$ret$0;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var type_0 = tmp_0;
      var tmp_7;
      try {
        tmp_7 = findPolymorphicSerializer(deserializer, this, type_0);
      } catch ($p) {
        var tmp_8;
        if ($p instanceof SerializationException) {
          var it_0 = $p;
          var message = removeSuffix(substringBefore(ensureNotNull(it_0.message), _Char___init__impl__6a9atx(10)), '.');
          var hint = substringAfter(ensureNotNull(it_0.message), _Char___init__impl__6a9atx(10), '');
          this.l3r_1.r3w(message, VOID, hint);
        } else {
          throw $p;
        }
        tmp_7 = tmp_8;
      }
      var tmp_9 = tmp_7;
      var actualSerializer_0 = isInterface(tmp_9, DeserializationStrategy) ? tmp_9 : THROW_CCE();
      this.o3r_1 = new DiscriminatorHolder(discriminator);
      return actualSerializer_0.jv(this);
    } catch ($p) {
      if ($p instanceof MissingFieldException) {
        var e = $p;
        if (contains_0(ensureNotNull(e.message), 'at path'))
          throw e;
        throw missingFieldExceptionWithNewMessage(e, plus(e.message, ' at path: ') + this.l3r_1.s3r_1.l3x());
      } else {
        throw $p;
      }
    }
  }
  rz(descriptor) {
    var newMode = switchMode(this.j3r_1, descriptor);
    this.l3r_1.s3r_1.g3x(descriptor);
    this.l3r_1.p3y(newMode.a3z_1);
    checkLeadingComma(this);
    var tmp;
    switch (newMode.s1_1) {
      case 1:
      case 2:
      case 3:
        tmp = new StreamingJsonDecoder(this.j3r_1, newMode, this.l3r_1, descriptor, this.o3r_1);
        break;
      default:
        var tmp_0;
        if (this.k3r_1.equals(newMode) && this.j3r_1.c3r_1.u3s_1) {
          tmp_0 = this;
        } else {
          tmp_0 = new StreamingJsonDecoder(this.j3r_1, newMode, this.l3r_1, descriptor, this.o3r_1);
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  }
  sz(descriptor) {
    if (descriptor.ay() === 0 && ignoreUnknownKeys(descriptor, this.j3r_1)) {
      skipLeftoverElements(this, descriptor);
    }
    if (this.l3r_1.q3y() && !this.j3r_1.c3r_1.d3t_1) {
      invalidTrailingComma(this.l3r_1, '');
    }
    this.l3r_1.p3y(this.k3r_1.b3z_1);
    this.l3r_1.s3r_1.k3x();
  }
  cz() {
    var tmp;
    var tmp0_safe_receiver = this.q3r_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.h3w_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = !this.l3r_1.c3z();
    } else {
      tmp = false;
    }
    return tmp;
  }
  dz() {
    return null;
  }
  d10(descriptor, index, deserializer, previousValue) {
    var isMapKey = this.k3r_1.equals(WriteMode_MAP_getInstance()) && (index & 1) === 0;
    if (isMapKey) {
      this.l3r_1.s3r_1.j3x();
    }
    var value = super.d10(descriptor, index, deserializer, previousValue);
    if (isMapKey) {
      this.l3r_1.s3r_1.i3x(value);
    }
    return value;
  }
  i10(descriptor) {
    var index;
    switch (this.k3r_1.s1_1) {
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
    if (!this.k3r_1.equals(WriteMode_MAP_getInstance())) {
      this.l3r_1.s3r_1.h3x(index);
    }
    return index;
  }
  ez() {
    return this.l3r_1.d3z();
  }
  fz() {
    var value = this.l3r_1.e3z();
    if (!(value === fromInt(convertToByte(value)))) {
      this.l3r_1.r3w("Failed to parse byte for input '" + value.toString() + "'");
    }
    return convertToByte(value);
  }
  gz() {
    var value = this.l3r_1.e3z();
    if (!(value === fromInt(convertToShort(value)))) {
      this.l3r_1.r3w("Failed to parse short for input '" + value.toString() + "'");
    }
    return convertToShort(value);
  }
  hz() {
    var value = this.l3r_1.e3z();
    if (!(value === fromInt(convertToInt(value)))) {
      this.l3r_1.r3w("Failed to parse int for input '" + value.toString() + "'");
    }
    return convertToInt(value);
  }
  iz() {
    return this.l3r_1.e3z();
  }
  jz() {
    var tmp0 = this.l3r_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.g3y();
      try {
        // Inline function 'kotlin.text.toFloat' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.r3w("Failed to parse type '" + 'float' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$0;
    var specialFp = this.j3r_1.c3r_1.z3s_1;
    if (specialFp || isFinite(result))
      return result;
    throwInvalidFloatingPointDecoded(this.l3r_1, result);
  }
  kz() {
    var tmp0 = this.l3r_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.g3y();
      try {
        tmp$ret$0 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.r3w("Failed to parse type '" + 'double' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$0;
    var specialFp = this.j3r_1.c3r_1.z3s_1;
    if (specialFp || isFinite_0(result))
      return result;
    throwInvalidFloatingPointDecoded(this.l3r_1, result);
  }
  lz() {
    var string = this.l3r_1.g3y();
    if (!(string.length === 1)) {
      this.l3r_1.r3w("Expected single char, but got '" + string + "'");
    }
    return charCodeAt(string, 0);
  }
  mz() {
    var tmp;
    if (this.p3r_1.r3s_1) {
      tmp = this.l3r_1.w3y();
    } else {
      tmp = this.l3r_1.f3y();
    }
    return tmp;
  }
  oz(descriptor) {
    return get_isUnsignedNumber(descriptor) ? new JsonDecoderForUnsignedTypes(this.l3r_1, this.j3r_1) : super.oz(descriptor);
  }
  nz(enumDescriptor) {
    return getJsonNameIndexOrThrow(enumDescriptor, this.j3r_1, this.mz(), ' at path ' + this.l3r_1.s3r_1.l3x());
  }
}
class JsonDecoderForUnsignedTypes extends AbstractDecoder {
  constructor(lexer, json) {
    super();
    this.f3z_1 = lexer;
    this.g3z_1 = json.g10();
  }
  g10() {
    return this.g3z_1;
  }
  i10(descriptor) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException.o(toString(message));
  }
  hz() {
    var tmp0 = this.f3z_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.g3y();
      try {
        // Inline function 'kotlin.UInt.toInt' call
        var this_0 = toUInt(input);
        tmp$ret$0 = _UInt___get_data__impl__f0vqqw(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.r3w("Failed to parse type '" + 'UInt' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  iz() {
    var tmp0 = this.f3z_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.g3y();
      try {
        // Inline function 'kotlin.ULong.toLong' call
        var this_0 = toULong(input);
        tmp$ret$0 = _ULong___get_data__impl__fggpzb(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.r3w("Failed to parse type '" + 'ULong' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  fz() {
    var tmp0 = this.f3z_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.g3y();
      try {
        // Inline function 'kotlin.UByte.toByte' call
        var this_0 = toUByte(input);
        tmp$ret$0 = _UByte___get_data__impl__jof9qr(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.r3w("Failed to parse type '" + 'UByte' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  gz() {
    var tmp0 = this.f3z_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.g3y();
      try {
        // Inline function 'kotlin.UShort.toShort' call
        var this_0 = toUShort(input);
        tmp$ret$0 = _UShort___get_data__impl__g0245(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.r3w("Failed to parse type '" + 'UShort' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
}
class StreamingJsonEncoder extends AbstractEncoder {
  static h3z(composer, json, mode, modeReuseCache) {
    var $this = this.k10();
    $this.o3x_1 = composer;
    $this.p3x_1 = json;
    $this.q3x_1 = mode;
    $this.r3x_1 = modeReuseCache;
    $this.s3x_1 = $this.p3x_1.g10();
    $this.t3x_1 = $this.p3x_1.c3r_1;
    $this.u3x_1 = false;
    $this.v3x_1 = null;
    $this.w3x_1 = null;
    var i = $this.q3x_1.s1_1;
    if (!($this.r3x_1 == null)) {
      if (!($this.r3x_1[i] === null) || !($this.r3x_1[i] === $this)) {
        $this.r3x_1[i] = $this;
      }
    }
    return $this;
  }
  k3t() {
    return this.p3x_1;
  }
  static x3x(output, json, mode, modeReuseCache) {
    return this.h3z(Composer_0(output, json), json, mode, modeReuseCache);
  }
  g10() {
    return this.s3x_1;
  }
  x3u(element) {
    var tmp;
    if (!(this.v3x_1 == null)) {
      tmp = !(element instanceof JsonObject);
    } else {
      tmp = false;
    }
    if (tmp) {
      throwJsonElementPolymorphicException(this.w3x_1, element);
    }
    this.k11(JsonElementSerializer_getInstance(), element);
  }
  p11(descriptor, index) {
    return this.t3x_1.p3s_1;
  }
  k11(serializer, value) {
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
      if (this.k3t().c3r_1.x3s_1) {
        serializer.iv(this, value);
        break $l$block;
      }
      var isPolymorphicSerializer = serializer instanceof AbstractPolymorphicSerializer;
      var tmp;
      if (isPolymorphicSerializer) {
        tmp = !this.k3t().c3r_1.f3t_1.equals(ClassDiscriminatorMode_NONE_getInstance());
      } else {
        var tmp_0;
        switch (this.k3t().c3r_1.f3t_1.s1_1) {
          case 0:
          case 2:
            tmp_0 = false;
            break;
          case 1:
            // Inline function 'kotlin.let' call

            var it = serializer.hv().yx();
            tmp_0 = equals(it, CLASS_getInstance()) || equals(it, OBJECT_getInstance());
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }
        tmp = tmp_0;
      }
      var needDiscriminator = tmp;
      var baseClassDiscriminator = needDiscriminator ? classDiscriminator(serializer.hv(), this.k3t()) : null;
      var tmp_1;
      if (isPolymorphicSerializer) {
        var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
        $l$block_0: {
          // Inline function 'kotlin.requireNotNull' call
          if (value == null) {
            var message = 'Value for serializer ' + toString(serializer.hv()) + ' should always be non-null. Please report issue to the kotlinx.serialization tracker.';
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
        access$checkEncodingConflicts$tPolymorphicKt(this.k3t(), serializer, actualSerializer, baseClassDiscriminator);
        checkKind_0(actualSerializer.hv().yx());
        var serialName = actualSerializer.hv().iw();
        this.v3x_1 = baseClassDiscriminator;
        this.w3x_1 = serialName;
      }
      actualSerializer.iv(this, value);
    }
  }
  rz(descriptor) {
    var newMode = switchMode(this.p3x_1, descriptor);
    if (!(newMode.a3z_1 === _Char___init__impl__6a9atx(0))) {
      this.o3x_1.i3v(newMode.a3z_1);
      this.o3x_1.d3v();
    }
    var discriminator = this.v3x_1;
    if (!(discriminator == null)) {
      var tmp0_elvis_lhs = this.w3x_1;
      encodeTypeInfo(this, discriminator, tmp0_elvis_lhs == null ? descriptor.iw() : tmp0_elvis_lhs);
      this.v3x_1 = null;
      this.w3x_1 = null;
    }
    if (this.q3x_1.equals(newMode)) {
      return this;
    }
    var tmp1_safe_receiver = this.r3x_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver[newMode.s1_1];
    return tmp2_elvis_lhs == null ? StreamingJsonEncoder.h3z(this.o3x_1, this.p3x_1, newMode, this.r3x_1) : tmp2_elvis_lhs;
  }
  sz(descriptor) {
    if (!(this.q3x_1.b3z_1 === _Char___init__impl__6a9atx(0))) {
      this.o3x_1.e3v();
      this.o3x_1.g3v();
      this.o3x_1.i3v(this.q3x_1.b3z_1);
    }
  }
  l10(descriptor, index) {
    switch (this.q3x_1.s1_1) {
      case 1:
        if (!this.o3x_1.c3v_1) {
          this.o3x_1.i3v(_Char___init__impl__6a9atx(44));
        }

        this.o3x_1.f3v();
        break;
      case 2:
        if (!this.o3x_1.c3v_1) {
          var tmp = this;
          var tmp_0;
          if ((index % 2 | 0) === 0) {
            this.o3x_1.i3v(_Char___init__impl__6a9atx(44));
            this.o3x_1.f3v();
            tmp_0 = true;
          } else {
            this.o3x_1.i3v(_Char___init__impl__6a9atx(58));
            this.o3x_1.h3v();
            tmp_0 = false;
          }
          tmp.u3x_1 = tmp_0;
        } else {
          this.u3x_1 = true;
          this.o3x_1.f3v();
        }

        break;
      case 3:
        if (index === 0)
          this.u3x_1 = true;
        if (index === 1) {
          this.o3x_1.i3v(_Char___init__impl__6a9atx(44));
          this.o3x_1.h3v();
          this.u3x_1 = false;
        }

        break;
      default:
        if (!this.o3x_1.c3v_1) {
          this.o3x_1.i3v(_Char___init__impl__6a9atx(44));
        }

        this.o3x_1.f3v();
        this.w10(getJsonElementName(descriptor, this.p3x_1, index));
        this.o3x_1.i3v(_Char___init__impl__6a9atx(58));
        this.o3x_1.h3v();
        break;
    }
    return true;
  }
  l11(descriptor, index, serializer, value) {
    if (!(value == null) || this.t3x_1.u3s_1) {
      super.l11(descriptor, index, serializer, value);
    }
  }
  y10(descriptor) {
    var tmp;
    if (get_isUnsignedNumber(descriptor)) {
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
      var tmp_0;
      var tmp_1 = this.o3x_1;
      if (tmp_1 instanceof ComposerForUnsignedNumbers) {
        tmp_0 = this.o3x_1;
      } else {
        var tmp0 = this.o3x_1.b3v_1;
        var p1 = this.u3x_1;
        tmp_0 = new ComposerForUnsignedNumbers(tmp0, p1);
      }
      var tmp$ret$0 = tmp_0;
      tmp = StreamingJsonEncoder.h3z(tmp$ret$0, this.p3x_1, this.q3x_1, null);
    } else if (get_isUnquotedLiteral(descriptor)) {
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
      var tmp_2;
      var tmp_3 = this.o3x_1;
      if (tmp_3 instanceof ComposerForUnquotedLiterals) {
        tmp_2 = this.o3x_1;
      } else {
        var tmp0_0 = this.o3x_1.b3v_1;
        var p1_0 = this.u3x_1;
        tmp_2 = new ComposerForUnquotedLiterals(tmp0_0, p1_0);
      }
      var tmp$ret$2 = tmp_2;
      tmp = StreamingJsonEncoder.h3z(tmp$ret$2, this.p3x_1, this.q3x_1, null);
    } else if (!(this.v3x_1 == null)) {
      // Inline function 'kotlin.apply' call
      this.w3x_1 = descriptor.iw();
      tmp = this;
    } else {
      tmp = super.y10(descriptor);
    }
    return tmp;
  }
  n10() {
    this.o3x_1.k3v('null');
  }
  o10(value) {
    if (this.u3x_1) {
      this.w10(value.toString());
    } else {
      this.o3x_1.t3v(value);
    }
  }
  p10(value) {
    if (this.u3x_1) {
      this.w10(value.toString());
    } else {
      this.o3x_1.o3v(value);
    }
  }
  q10(value) {
    if (this.u3x_1) {
      this.w10(value.toString());
    } else {
      this.o3x_1.q3v(value);
    }
  }
  r10(value) {
    if (this.u3x_1) {
      this.w10(value.toString());
    } else {
      this.o3x_1.r3v(value);
    }
  }
  s10(value) {
    if (this.u3x_1) {
      this.w10(value.toString());
    } else {
      this.o3x_1.s3v(value);
    }
  }
  t10(value) {
    if (this.u3x_1) {
      this.w10(value.toString());
    } else {
      this.o3x_1.m3v(value);
    }
    if (!this.t3x_1.z3s_1 && !isFinite(value)) {
      throw InvalidFloatingPointEncoded(value, toString(this.o3x_1.b3v_1));
    }
  }
  u10(value) {
    if (this.u3x_1) {
      this.w10(value.toString());
    } else {
      this.o3x_1.n3v(value);
    }
    if (!this.t3x_1.z3s_1 && !isFinite_0(value)) {
      throw InvalidFloatingPointEncoded(value, toString(this.o3x_1.b3v_1));
    }
  }
  v10(value) {
    this.w10(toString_1(value));
  }
  w10(value) {
    return this.o3x_1.u3v(value);
  }
  x10(enumDescriptor, index) {
    this.w10(enumDescriptor.cy(index));
  }
}
class AbstractJsonTreeDecoder extends NamedValueDecoder {
  constructor(json, value, polymorphicDiscriminator) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    super();
    this.k3z_1 = json;
    this.l3z_1 = value;
    this.m3z_1 = polymorphicDiscriminator;
    this.n3z_1 = this.k3t().c3r_1;
  }
  k3t() {
    return this.k3z_1;
  }
  w2() {
    return this.l3z_1;
  }
  g10() {
    return this.k3t().g10();
  }
  p3z() {
    var tmp0_safe_receiver = this.b1e();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = this.q3z(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? this.w2() : tmp1_elvis_lhs;
  }
  o3z(currentTag) {
    return this.d1e() + ('.' + currentTag);
  }
  i3t() {
    return this.p3z();
  }
  qz(deserializer) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.decodeSerializableValuePolymorphic' call
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.k3t().c3r_1.x3s_1;
      }
      if (tmp) {
        tmp$ret$0 = deserializer.jv(this);
        break $l$block;
      }
      var discriminator = classDiscriminator(deserializer.hv(), this.k3t());
      var tmp0 = this.i3t();
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = deserializer.hv().iw();
      if (!(tmp0 instanceof JsonObject)) {
        var tmp_0 = getKClass(JsonObject).f1();
        var tmp_1 = getKClassFromExpression(tmp0).f1();
        var tmp$ret$2 = this.d1e();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$2, toString(tmp0));
      }
      var jsonTree = tmp0;
      var tmp0_safe_receiver = jsonTree.p2b(discriminator);
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
      var type = tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
      var tmp_2;
      try {
        tmp_2 = findPolymorphicSerializer(deserializer, this, type);
      } catch ($p) {
        var tmp_3;
        if ($p instanceof SerializationException) {
          var it = $p;
          throw JsonDecodingException_0(-1, ensureNotNull(it.message), jsonTree.toString());
        } else {
          throw $p;
        }
      }
      var tmp_4 = tmp_2;
      var actualSerializer = isInterface(tmp_4, DeserializationStrategy) ? tmp_4 : THROW_CCE();
      tmp$ret$0 = readPolymorphicJson(this.k3t(), discriminator, jsonTree, actualSerializer);
    }
    return tmp$ret$0;
  }
  c1e(parentName, childName) {
    return childName;
  }
  rz(descriptor) {
    var currentObject = this.p3z();
    var tmp0_subject = descriptor.yx();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp_1 = this.k3t();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = descriptor.iw();
      if (!(currentObject instanceof JsonArray)) {
        var tmp_2 = getKClass(JsonArray).f1();
        var tmp_3 = getKClassFromExpression(currentObject).f1();
        var tmp$ret$2 = this.d1e();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_2 + ', but had ' + tmp_3 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$2, toString(currentObject));
      }
      tmp = new JsonTreeListDecoder(tmp_1, currentObject);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var this_0 = this.k3t();
        var keyDescriptor = carrierDescriptor(descriptor.fy(0), this_0.g10());
        var keyKind = keyDescriptor.yx();
        var tmp_4;
        var tmp_5;
        if (keyKind instanceof PrimitiveKind) {
          tmp_5 = true;
        } else {
          tmp_5 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_5) {
          var tmp_6 = this.k3t();
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName_0 = descriptor.iw();
          if (!(currentObject instanceof JsonObject)) {
            var tmp_7 = getKClass(JsonObject).f1();
            var tmp_8 = getKClassFromExpression(currentObject).f1();
            var tmp$ret$7 = this.d1e();
            throw JsonDecodingException_0(-1, 'Expected ' + tmp_7 + ', but had ' + tmp_8 + ' as the serialized body of ' + serialName_0 + ' at element: ' + tmp$ret$7, toString(currentObject));
          }
          tmp_4 = new JsonTreeMapDecoder(tmp_6, currentObject);
        } else {
          if (this_0.c3r_1.s3s_1) {
            var tmp_9 = this.k3t();
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
            // Inline function 'kotlinx.serialization.json.internal.cast' call
            var serialName_1 = descriptor.iw();
            if (!(currentObject instanceof JsonArray)) {
              var tmp_10 = getKClass(JsonArray).f1();
              var tmp_11 = getKClassFromExpression(currentObject).f1();
              var tmp$ret$11 = this.d1e();
              throw JsonDecodingException_0(-1, 'Expected ' + tmp_10 + ', but had ' + tmp_11 + ' as the serialized body of ' + serialName_1 + ' at element: ' + tmp$ret$11, toString(currentObject));
            }
            tmp_4 = new JsonTreeListDecoder(tmp_9, currentObject);
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp = tmp_4;
      } else {
        var tmp_12 = this.k3t();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        var serialName_2 = descriptor.iw();
        if (!(currentObject instanceof JsonObject)) {
          var tmp_13 = getKClass(JsonObject).f1();
          var tmp_14 = getKClassFromExpression(currentObject).f1();
          var tmp$ret$14 = this.d1e();
          throw JsonDecodingException_0(-1, 'Expected ' + tmp_13 + ', but had ' + tmp_14 + ' as the serialized body of ' + serialName_2 + ' at element: ' + tmp$ret$14, toString(currentObject));
        }
        tmp = new JsonTreeDecoder(tmp_12, currentObject, this.m3z_1);
      }
    }
    return tmp;
  }
  sz(descriptor) {
  }
  cz() {
    var tmp = this.p3z();
    return !(tmp instanceof JsonNull);
  }
  r3z(tag, enumDescriptor) {
    var tmp = this.k3t();
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
    var tmp2 = this.q3z(tag);
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var serialName = enumDescriptor.iw();
    if (!(tmp2 instanceof JsonPrimitive)) {
      var tmp_0 = getKClass(JsonPrimitive).f1();
      var tmp_1 = getKClassFromExpression(tmp2).f1();
      var tmp$ret$3 = this.o3z(tag);
      throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$3, toString(tmp2));
    }
    return getJsonNameIndexOrThrow(enumDescriptor, tmp, tmp2.f38());
  }
  p1e(tag, enumDescriptor) {
    return this.r3z((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), enumDescriptor);
  }
  s3z(tag) {
    return !(this.q3z(tag) === JsonNull_getInstance());
  }
  f1e(tag) {
    return this.s3z((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  t3z(tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.q3z(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).f1();
        var tmp_0 = getKClassFromExpression(value).f1();
        var tmp$ret$3 = this.o3z(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'boolean' + ' at element: ' + tmp$ret$3, toString(value));
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = get_booleanOrNull(literal);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'boolean', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_1;
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
  g1e(tag) {
    return this.t3z((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  u3z(tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.q3z(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).f1();
        var tmp_0 = getKClassFromExpression(value).f1();
        var tmp$ret$3 = this.o3z(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'byte' + ' at element: ' + tmp$ret$3, toString(value));
      }
      var literal = value;
      try {
        var result = parseLongImpl(literal);
        var tmp_1;
        // Inline function 'kotlin.ranges.contains' call
        var this_0 = numberRangeToNumber(-128, 127);
        if (contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
          tmp_1 = convertToByte(result);
        } else {
          tmp_1 = null;
        }
        var tmp0_elvis_lhs = tmp_1;
        var tmp_2;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'byte', tag);
        } else {
          tmp_2 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_2;
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
  h1e(tag) {
    return this.u3z((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  v3z(tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.q3z(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).f1();
        var tmp_0 = getKClassFromExpression(value).f1();
        var tmp$ret$3 = this.o3z(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'short' + ' at element: ' + tmp$ret$3, toString(value));
      }
      var literal = value;
      try {
        var result = parseLongImpl(literal);
        var tmp_1;
        // Inline function 'kotlin.ranges.contains' call
        var this_0 = numberRangeToNumber(-32768, 32767);
        if (contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
          tmp_1 = convertToShort(result);
        } else {
          tmp_1 = null;
        }
        var tmp0_elvis_lhs = tmp_1;
        var tmp_2;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'short', tag);
        } else {
          tmp_2 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_2;
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
  i1e(tag) {
    return this.v3z((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  w3z(tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.q3z(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).f1();
        var tmp_0 = getKClassFromExpression(value).f1();
        var tmp$ret$3 = this.o3z(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'int' + ' at element: ' + tmp$ret$3, toString(value));
      }
      var literal = value;
      try {
        var result = parseLongImpl(literal);
        var tmp_1;
        // Inline function 'kotlin.ranges.contains' call
        var this_0 = numberRangeToNumber(-2147483648, 2147483647);
        if (contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
          tmp_1 = convertToInt(result);
        } else {
          tmp_1 = null;
        }
        var tmp0_elvis_lhs = tmp_1;
        var tmp_2;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'int', tag);
        } else {
          tmp_2 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_2;
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
  j1e(tag) {
    return this.w3z((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  x3z(tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.q3z(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).f1();
        var tmp_0 = getKClassFromExpression(value).f1();
        var tmp$ret$3 = this.o3z(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'long' + ' at element: ' + tmp$ret$3, toString(value));
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = parseLongImpl(literal);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'long', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_1;
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
  k1e(tag) {
    return this.x3z((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  y3z(tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.q3z(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).f1();
        var tmp_0 = getKClassFromExpression(value).f1();
        var tmp$ret$3 = this.o3z(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'float' + ' at element: ' + tmp$ret$3, toString(value));
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = get_float(literal);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'float', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_1;
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
    var specialFp = this.k3t().c3r_1.z3s_1;
    if (specialFp || isFinite(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(this.p3z()));
  }
  l1e(tag) {
    return this.y3z((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  z3z(tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.q3z(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).f1();
        var tmp_0 = getKClassFromExpression(value).f1();
        var tmp$ret$3 = this.o3z(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'double' + ' at element: ' + tmp$ret$3, toString(value));
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = get_double(literal);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'double', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_1;
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
    var specialFp = this.k3t().c3r_1.z3s_1;
    if (specialFp || isFinite_0(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(this.p3z()));
  }
  m1e(tag) {
    return this.z3z((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  a40(tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.q3z(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).f1();
        var tmp_0 = getKClassFromExpression(value).f1();
        var tmp$ret$3 = this.o3z(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'char' + ' at element: ' + tmp$ret$3, toString(value));
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = new Char(single(literal.f38()));
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'char', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_1.g3_1;
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
  n1e(tag) {
    return this.a40((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  b40(tag) {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = this.q3z(tag);
    if (!(value instanceof JsonPrimitive)) {
      var tmp = getKClass(JsonPrimitive).f1();
      var tmp_0 = getKClassFromExpression(value).f1();
      var tmp$ret$2 = this.o3z(tag);
      throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'string' + ' at element: ' + tmp$ret$2, toString(value));
    }
    var value_0 = value;
    if (!(value_0 instanceof JsonLiteral))
      throw JsonDecodingException_0(-1, "Expected string value for a non-null key '" + tag + "', got null literal instead at element: " + this.o3z(tag), toString(this.p3z()));
    if (!value_0.w3t_1 && !this.k3t().c3r_1.r3s_1) {
      throw JsonDecodingException_0(-1, "String literal for key '" + tag + "' should be quoted at element: " + this.o3z(tag) + ".\nUse 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.", toString(this.p3z()));
    }
    return value_0.y3t_1;
  }
  o1e(tag) {
    return this.b40((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  c40(tag, inlineDescriptor) {
    var tmp;
    if (get_isUnsignedNumber(inlineDescriptor)) {
      var tmp_0 = this.k3t();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      var tmp2 = this.q3z(tag);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = inlineDescriptor.iw();
      if (!(tmp2 instanceof JsonPrimitive)) {
        var tmp_1 = getKClass(JsonPrimitive).f1();
        var tmp_2 = getKClassFromExpression(tmp2).f1();
        var tmp$ret$3 = this.o3z(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_1 + ', but had ' + tmp_2 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$3, toString(tmp2));
      }
      var lexer = StringJsonLexer_0(tmp_0, tmp2.f38());
      tmp = new JsonDecoderForUnsignedTypes(lexer, this.k3t());
    } else {
      tmp = super.q1e(tag, inlineDescriptor);
    }
    return tmp;
  }
  q1e(tag, inlineDescriptor) {
    return this.c40((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
  }
  oz(descriptor) {
    return !(this.b1e() == null) ? super.oz(descriptor) : (new JsonPrimitiveDecoder(this.k3t(), this.w2(), this.m3z_1)).oz(descriptor);
  }
}
class JsonTreeDecoder extends AbstractJsonTreeDecoder {
  constructor(json, value, polymorphicDiscriminator, polyDescriptor) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    polyDescriptor = polyDescriptor === VOID ? null : polyDescriptor;
    super(json, value, polymorphicDiscriminator);
    this.j40_1 = value;
    this.k40_1 = polyDescriptor;
    this.l40_1 = 0;
    this.m40_1 = false;
  }
  w2() {
    return this.j40_1;
  }
  i10(descriptor) {
    $l$loop: while (this.l40_1 < descriptor.ay()) {
      var _unary__edvuaz = this.l40_1;
      this.l40_1 = _unary__edvuaz + 1 | 0;
      var name = this.w1d(descriptor, _unary__edvuaz);
      var index = this.l40_1 - 1 | 0;
      this.m40_1 = false;
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
        if (!this.n3z_1.w3s_1)
          return index;
        var tmp0 = this.k3t();
        var tmp$ret$2;
        $l$block_2: {
          // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
          var isOptional = descriptor.gy(index);
          var elementDescriptor = descriptor.fy(index);
          var tmp_0;
          if (isOptional && !elementDescriptor.rx()) {
            var tmp_1 = this.n40(name);
            tmp_0 = tmp_1 instanceof JsonNull;
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            tmp$ret$2 = true;
            break $l$block_2;
          }
          if (equals(elementDescriptor.yx(), ENUM_getInstance())) {
            var tmp_2;
            if (elementDescriptor.rx()) {
              var tmp_3 = this.n40(name);
              tmp_2 = tmp_3 instanceof JsonNull;
            } else {
              tmp_2 = false;
            }
            if (tmp_2) {
              tmp$ret$2 = false;
              break $l$block_2;
            }
            var tmp_4 = this.n40(name);
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
            var coerceToNull = !tmp0.c3r_1.u3s_1 && elementDescriptor.rx();
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
  cz() {
    return !this.m40_1 && super.cz();
  }
  x1d(descriptor, index) {
    var strategy = namingStrategy(descriptor, this.k3t());
    var baseName = descriptor.cy(index);
    if (strategy == null) {
      if (!this.n3z_1.a3t_1)
        return baseName;
      if (this.w2().d4().t3(baseName))
        return baseName;
    }
    var deserializationNamesMap_0 = deserializationNamesMap(this.k3t(), descriptor);
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
    var fallbackName = strategy == null ? null : strategy.c3x(descriptor, index, baseName);
    return fallbackName == null ? baseName : fallbackName;
  }
  q3z(tag) {
    return getValue(this.w2(), tag);
  }
  n40(tag) {
    return this.w2().p2b(tag);
  }
  rz(descriptor) {
    if (descriptor === this.k40_1) {
      var tmp = this.k3t();
      var tmp2 = this.p3z();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = this.k40_1.iw();
      if (!(tmp2 instanceof JsonObject)) {
        var tmp_0 = getKClass(JsonObject).f1();
        var tmp_1 = getKClassFromExpression(tmp2).f1();
        var tmp$ret$2 = this.d1e();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$2, toString(tmp2));
      }
      return new JsonTreeDecoder(tmp, tmp2, this.m3z_1, this.k40_1);
    }
    return super.rz(descriptor);
  }
  sz(descriptor) {
    var tmp;
    if (ignoreUnknownKeys(descriptor, this.k3t())) {
      tmp = true;
    } else {
      var tmp_0 = descriptor.yx();
      tmp = tmp_0 instanceof PolymorphicKind;
    }
    if (tmp)
      return Unit_instance;
    var strategy = namingStrategy(descriptor, this.k3t());
    var tmp_1;
    if (strategy == null && !this.n3z_1.a3t_1) {
      tmp_1 = jsonCachedSerialNames(descriptor);
    } else if (!(strategy == null)) {
      tmp_1 = deserializationNamesMap(this.k3t(), descriptor).d4();
    } else {
      var tmp_2 = jsonCachedSerialNames(descriptor);
      var tmp0_safe_receiver = get_schemaCache(this.k3t()).n3y(descriptor, get_JsonDeserializationNamesKey());
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.d4();
      var tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
      tmp_1 = plus_0(tmp_2, tmp$ret$0);
    }
    var names = tmp_1;
    var _iterator__ex2g4s = this.w2().d4().l1();
    while (_iterator__ex2g4s.m1()) {
      var key = _iterator__ex2g4s.n1();
      if (!names.t3(key) && !(key === this.m3z_1)) {
        throw JsonDecodingException_1(-1, "Encountered an unknown key '" + key + "' at element: " + this.d1e() + '\n' + "Use 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.\n" + ('JSON input: ' + toString(minify(this.w2().toString()))));
      }
    }
  }
}
class JsonTreeListDecoder extends AbstractJsonTreeDecoder {
  constructor(json, value) {
    super(json, value);
    this.u40_1 = value;
    this.v40_1 = this.u40_1.k2();
    this.w40_1 = -1;
  }
  w2() {
    return this.u40_1;
  }
  x1d(descriptor, index) {
    return index.toString();
  }
  q3z(tag) {
    return this.u40_1.j2(toInt(tag));
  }
  i10(descriptor) {
    while (this.w40_1 < (this.v40_1 - 1 | 0)) {
      this.w40_1 = this.w40_1 + 1 | 0;
      return this.w40_1;
    }
    return -1;
  }
}
class JsonPrimitiveDecoder extends AbstractJsonTreeDecoder {
  constructor(json, value, polymorphicDiscriminator) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    super(json, value, polymorphicDiscriminator);
    this.d41_1 = value;
    this.r1e('primitive');
  }
  w2() {
    return this.d41_1;
  }
  i10(descriptor) {
    return 0;
  }
  q3z(tag) {
    // Inline function 'kotlin.require' call
    if (!(tag === 'primitive')) {
      var message = "This input can only handle primitives with 'primitive' tag";
      throw IllegalArgumentException.h2(toString(message));
    }
    return this.d41_1;
  }
}
class JsonTreeMapDecoder extends JsonTreeDecoder {
  constructor(json, value) {
    super(json, value);
    this.o41_1 = value;
    this.p41_1 = toList(this.o41_1.d4());
    this.q41_1 = imul(this.p41_1.k2(), 2);
    this.r41_1 = -1;
  }
  w2() {
    return this.o41_1;
  }
  x1d(descriptor, index) {
    var i = index / 2 | 0;
    return this.p41_1.j2(i);
  }
  i10(descriptor) {
    while (this.r41_1 < (this.q41_1 - 1 | 0)) {
      this.r41_1 = this.r41_1 + 1 | 0;
      return this.r41_1;
    }
    return -1;
  }
  q3z(tag) {
    return (this.r41_1 % 2 | 0) === 0 ? JsonPrimitive_0(tag) : getValue(this.o41_1, tag);
  }
  sz(descriptor) {
  }
}
class AbstractJsonTreeEncoder extends NamedValueEncoder {
  constructor(json, nodeConsumer) {
    super();
    this.t41_1 = json;
    this.u41_1 = nodeConsumer;
    this.v41_1 = this.t41_1.c3r_1;
    this.w41_1 = null;
    this.x41_1 = null;
  }
  k3t() {
    return this.t41_1;
  }
  g10() {
    return this.t41_1.g10();
  }
  x1d(descriptor, index) {
    return getJsonElementName(descriptor, this.t41_1, index);
  }
  x3u(element) {
    var tmp;
    if (!(this.w41_1 == null)) {
      tmp = !(element instanceof JsonObject);
    } else {
      tmp = false;
    }
    if (tmp) {
      throwJsonElementPolymorphicException(this.x41_1, element);
    }
    this.k11(JsonElementSerializer_getInstance(), element);
  }
  p11(descriptor, index) {
    return this.v41_1.p3s_1;
  }
  c1e(parentName, childName) {
    return childName;
  }
  n11() {
  }
  n10() {
    var tmp0_elvis_lhs = this.b1e();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this.u41_1(JsonNull_getInstance());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tag = tmp;
    this.h42(tag);
  }
  h42(tag) {
    return this.f42(tag, JsonNull_getInstance());
  }
  x1e(tag) {
    return this.h42((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  i42(tag, value) {
    return this.f42(tag, JsonPrimitive_1(value));
  }
  y1e(tag, value) {
    return this.i42((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  }
  j42(tag, value) {
    return this.f42(tag, JsonPrimitive_1(value));
  }
  z1e(tag, value) {
    return this.j42((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  }
  k42(tag, value) {
    return this.f42(tag, JsonPrimitive_1(value));
  }
  a1f(tag, value) {
    return this.k42((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  }
  l42(tag, value) {
    return this.f42(tag, JsonPrimitive_1(value));
  }
  b1f(tag, value) {
    return this.l42((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  }
  m42(tag, value) {
    this.f42(tag, JsonPrimitive_1(value));
    if (!this.v41_1.z3s_1 && !isFinite(value)) {
      throw InvalidFloatingPointEncoded_0(value, tag, toString(this.g42()));
    }
  }
  c1f(tag, value) {
    return this.m42((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  }
  k11(serializer, value) {
    if (!(this.b1e() == null) || !get_requiresTopLevelTag(carrierDescriptor(serializer.hv(), this.g10()))) {
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
        if (this.k3t().c3r_1.x3s_1) {
          serializer.iv(this, value);
          break $l$block;
        }
        var isPolymorphicSerializer = serializer instanceof AbstractPolymorphicSerializer;
        var tmp;
        if (isPolymorphicSerializer) {
          tmp = !this.k3t().c3r_1.f3t_1.equals(ClassDiscriminatorMode_NONE_getInstance());
        } else {
          var tmp_0;
          switch (this.k3t().c3r_1.f3t_1.s1_1) {
            case 0:
            case 2:
              tmp_0 = false;
              break;
            case 1:
              // Inline function 'kotlin.let' call

              var it = serializer.hv().yx();
              tmp_0 = equals(it, CLASS_getInstance()) || equals(it, OBJECT_getInstance());
              break;
            default:
              noWhenBranchMatchedException();
              break;
          }
          tmp = tmp_0;
        }
        var needDiscriminator = tmp;
        var baseClassDiscriminator = needDiscriminator ? classDiscriminator(serializer.hv(), this.k3t()) : null;
        var tmp_1;
        if (isPolymorphicSerializer) {
          var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
          $l$block_0: {
            // Inline function 'kotlin.requireNotNull' call
            if (value == null) {
              var message = 'Value for serializer ' + toString(serializer.hv()) + ' should always be non-null. Please report issue to the kotlinx.serialization tracker.';
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
          access$checkEncodingConflicts$tPolymorphicKt(this.k3t(), serializer, actualSerializer, baseClassDiscriminator);
          checkKind_0(actualSerializer.hv().yx());
          var serialName = actualSerializer.hv().iw();
          this.w41_1 = baseClassDiscriminator;
          this.x41_1 = serialName;
        }
        actualSerializer.iv(this, value);
      }
    } else {
      // Inline function 'kotlin.run' call
      (new JsonPrimitiveEncoder(this.t41_1, this.u41_1)).k11(serializer, value);
    }
  }
  n42(tag, value) {
    this.f42(tag, JsonPrimitive_1(value));
    if (!this.v41_1.z3s_1 && !isFinite_0(value)) {
      throw InvalidFloatingPointEncoded_0(value, tag, toString(this.g42()));
    }
  }
  d1f(tag, value) {
    return this.n42((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  }
  o42(tag, value) {
    return this.f42(tag, JsonPrimitive_2(value));
  }
  e1f(tag, value) {
    return this.o42((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  }
  p42(tag, value) {
    return this.f42(tag, JsonPrimitive_0(toString_1(value)));
  }
  f1f(tag, value) {
    return this.p42((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  }
  q42(tag, value) {
    return this.f42(tag, JsonPrimitive_0(value));
  }
  g1f(tag, value) {
    return this.q42((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  }
  r42(tag, enumDescriptor, ordinal) {
    return this.f42(tag, JsonPrimitive_0(enumDescriptor.cy(ordinal)));
  }
  h1f(tag, enumDescriptor, ordinal) {
    return this.r42((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), enumDescriptor, ordinal);
  }
  s42(tag, value) {
    this.f42(tag, JsonPrimitive_0(toString(value)));
  }
  v1e(tag, value) {
    return this.s42((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  }
  t42(tag, inlineDescriptor) {
    return get_isUnsignedNumber(inlineDescriptor) ? inlineUnsignedNumberEncoder(this, tag) : get_isUnquotedLiteral(inlineDescriptor) ? inlineUnquotedLiteralEncoder(this, tag, inlineDescriptor) : super.i1f(tag, inlineDescriptor);
  }
  i1f(tag, inlineDescriptor) {
    return this.t42((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
  }
  y10(descriptor) {
    var tmp;
    if (!(this.b1e() == null)) {
      if (!(this.w41_1 == null))
        this.x41_1 = descriptor.iw();
      tmp = super.y10(descriptor);
    } else {
      tmp = (new JsonPrimitiveEncoder(this.t41_1, this.u41_1)).y10(descriptor);
    }
    return tmp;
  }
  rz(descriptor) {
    var tmp;
    if (this.b1e() == null) {
      tmp = this.u41_1;
    } else {
      tmp = AbstractJsonTreeEncoder$beginStructure$lambda(this);
    }
    var consumer = tmp;
    var tmp0_subject = descriptor.yx();
    var tmp_0;
    var tmp_1;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_1 = true;
    } else {
      tmp_1 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_1) {
      tmp_0 = new JsonTreeListEncoder(this.t41_1, consumer);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var this_0 = this.t41_1;
        var keyDescriptor = carrierDescriptor(descriptor.fy(0), this_0.g10());
        var keyKind = keyDescriptor.yx();
        var tmp_2;
        var tmp_3;
        if (keyKind instanceof PrimitiveKind) {
          tmp_3 = true;
        } else {
          tmp_3 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_3) {
          tmp_2 = new JsonTreeMapEncoder(this.t41_1, consumer);
        } else {
          if (this_0.c3r_1.s3s_1) {
            tmp_2 = new JsonTreeListEncoder(this.t41_1, consumer);
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp_0 = tmp_2;
      } else {
        tmp_0 = new JsonTreeEncoder(this.t41_1, consumer);
      }
    }
    var encoder = tmp_0;
    var discriminator = this.w41_1;
    if (!(discriminator == null)) {
      if (encoder instanceof JsonTreeMapEncoder) {
        encoder.f42('key', JsonPrimitive_0(discriminator));
        var tmp1_elvis_lhs = this.x41_1;
        encoder.f42('value', JsonPrimitive_0(tmp1_elvis_lhs == null ? descriptor.iw() : tmp1_elvis_lhs));
      } else {
        var tmp2_elvis_lhs = this.x41_1;
        encoder.f42(discriminator, JsonPrimitive_0(tmp2_elvis_lhs == null ? descriptor.iw() : tmp2_elvis_lhs));
      }
      this.w41_1 = null;
      this.x41_1 = null;
    }
    return encoder;
  }
  j1f(descriptor) {
    this.u41_1(this.g42());
  }
}
class JsonTreeEncoder extends AbstractJsonTreeEncoder {
  constructor(json, nodeConsumer) {
    super(json, nodeConsumer);
    var tmp = this;
    // Inline function 'kotlin.collections.linkedMapOf' call
    tmp.e42_1 = LinkedHashMap.l5();
  }
  f42(key, element) {
    // Inline function 'kotlin.collections.set' call
    this.e42_1.f4(key, element);
  }
  l11(descriptor, index, serializer, value) {
    if (!(value == null) || this.v41_1.u3s_1) {
      super.l11(descriptor, index, serializer, value);
    }
  }
  g42() {
    return new JsonObject(this.e42_1);
  }
}
class AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1 extends AbstractEncoder {
  static x42(this$0, $tag, $box) {
    if ($box === VOID)
      $box = {};
    $box.v42_1 = this$0;
    $box.w42_1 = $tag;
    var $this = this.k10($box);
    $this.u42_1 = this$0.t41_1.g10();
    return $this;
  }
  g10() {
    return this.u42_1;
  }
  c43(s) {
    return this.v42_1.f42(this.w42_1, new JsonLiteral(s, false));
  }
  r10(value) {
    // Inline function 'kotlin.toUInt' call
    var tmp$ret$0 = _UInt___init__impl__l7qpdl(value);
    return this.c43(UInt__toString_impl_dbgl21(tmp$ret$0));
  }
  s10(value) {
    // Inline function 'kotlin.toULong' call
    var tmp$ret$0 = _ULong___init__impl__c78o9k(value);
    return this.c43(ULong__toString_impl_f9au7k(tmp$ret$0));
  }
  p10(value) {
    // Inline function 'kotlin.toUByte' call
    var tmp$ret$0 = _UByte___init__impl__g9hnc4(value);
    return this.c43(UByte__toString_impl_v72jg(tmp$ret$0));
  }
  q10(value) {
    // Inline function 'kotlin.toUShort' call
    var tmp$ret$0 = _UShort___init__impl__jigrne(value);
    return this.c43(UShort__toString_impl_edaoee(tmp$ret$0));
  }
}
class AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1 extends AbstractEncoder {
  static b43(this$0, $tag, $inlineDescriptor, $box) {
    if ($box === VOID)
      $box = {};
    $box.y42_1 = this$0;
    $box.z42_1 = $tag;
    $box.a43_1 = $inlineDescriptor;
    return this.k10($box);
  }
  g10() {
    return this.y42_1.t41_1.g10();
  }
  w10(value) {
    return this.y42_1.f42(this.z42_1, new JsonLiteral(value, false, this.a43_1));
  }
}
class JsonPrimitiveEncoder extends AbstractJsonTreeEncoder {
  constructor(json, nodeConsumer) {
    super(json, nodeConsumer);
    this.s43_1 = null;
    this.r1e('primitive');
  }
  f42(key, element) {
    // Inline function 'kotlin.require' call
    if (!(key === 'primitive')) {
      var message = "This output can only consume primitives with 'primitive' tag";
      throw IllegalArgumentException.h2(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.s43_1 == null)) {
      var message_0 = 'Primitive element was already recorded. Does call to .encodeXxx happen more than once?';
      throw IllegalArgumentException.h2(toString(message_0));
    }
    this.s43_1 = element;
    this.u41_1(element);
  }
  g42() {
    var tmp0 = this.s43_1;
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
    tmp.z43_1 = ArrayList.n2();
  }
  x1d(descriptor, index) {
    return index.toString();
  }
  f42(key, element) {
    var idx = toInt(key);
    this.z43_1.o4(idx, element);
  }
  g42() {
    return new JsonArray(this.z43_1);
  }
}
class JsonTreeMapEncoder extends JsonTreeEncoder {
  constructor(json, nodeConsumer) {
    super(json, nodeConsumer);
    this.l43_1 = true;
  }
  f42(key, element) {
    if (this.l43_1) {
      var tmp = this;
      var tmp_0;
      if (element instanceof JsonPrimitive) {
        tmp_0 = element.f38();
      } else {
        if (element instanceof JsonObject) {
          throw InvalidKeyKindException(JsonObjectSerializer_getInstance().c3u_1);
        } else {
          if (element instanceof JsonArray) {
            throw InvalidKeyKindException(JsonArraySerializer_getInstance().d3u_1);
          } else {
            noWhenBranchMatchedException();
          }
        }
      }
      tmp.k43_1 = tmp_0;
      this.l43_1 = false;
    } else {
      var tmp0 = this.e42_1;
      // Inline function 'kotlin.collections.set' call
      var key_0 = _get_tag__e6h4qf(this);
      tmp0.f4(key_0, element);
      this.l43_1 = true;
    }
  }
  g42() {
    return new JsonObject(this.e42_1);
  }
}
class WriteMode extends Enum {
  constructor(name, ordinal, begin, end) {
    super(name, ordinal);
    this.a3z_1 = begin;
    this.b3z_1 = end;
  }
}
class AbstractJsonLexer {
  constructor() {
    this.r3r_1 = 0;
    this.s3r_1 = new JsonPath();
    this.t3r_1 = null;
    this.u3r_1 = StringBuilder.h1();
  }
  d44() {
  }
  q3y() {
    var current = this.e44();
    var source = this.b44();
    if (current >= charSequenceLength(source) || current === -1)
      return false;
    if (charSequenceGet(source, current) === _Char___init__impl__6a9atx(44)) {
      this.r3r_1 = this.r3r_1 + 1 | 0;
      return true;
    }
    return false;
  }
  f44(c) {
    return c === _Char___init__impl__6a9atx(125) || c === _Char___init__impl__6a9atx(93) || (c === _Char___init__impl__6a9atx(58) || c === _Char___init__impl__6a9atx(44)) ? false : true;
  }
  v3r() {
    var nextToken = this.i3y();
    if (!(nextToken === 10)) {
      this.r3w('Expected EOF after parsing, but had ' + toString_1(charSequenceGet(this.b44(), this.r3r_1 - 1 | 0)) + ' instead');
    }
  }
  c3y(expected) {
    var token = this.i3y();
    if (!(token === expected)) {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected_0 = tokenDescription(expected);
      var position = true ? this.r3r_1 - 1 | 0 : this.r3r_1;
      var s = this.r3r_1 === charSequenceLength(this.b44()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.b44(), position));
      var tmp$ret$1 = 'Expected ' + expected_0 + ", but had '" + s + "' instead";
      this.r3w(tmp$ret$1, position);
    }
    return token;
  }
  g44(expected) {
    if (this.r3r_1 > 0 && expected === _Char___init__impl__6a9atx(34)) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.withPositionRollback' call
        var snapshot = this.r3r_1;
        try {
          this.r3r_1 = this.r3r_1 - 1 | 0;
          tmp$ret$0 = this.g3y();
          break $l$block;
        }finally {
          this.r3r_1 = snapshot;
        }
      }
      var inputLiteral = tmp$ret$0;
      if (inputLiteral === 'null') {
        this.q3w("Expected string literal but 'null' literal was found", this.r3r_1 - 1 | 0, "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.");
      }
    }
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
    var expectedToken = charToTokenClass(expected);
    var expected_0 = tokenDescription(expectedToken);
    var position = true ? this.r3r_1 - 1 | 0 : this.r3r_1;
    var s = this.r3r_1 === charSequenceLength(this.b44()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.b44(), position));
    var tmp$ret$3 = 'Expected ' + expected_0 + ", but had '" + s + "' instead";
    this.r3w(tmp$ret$3, position);
  }
  d3y() {
    var source = this.b44();
    var cpos = this.r3r_1;
    $l$loop_0: while (true) {
      cpos = this.c44(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var ch = charSequenceGet(source, cpos);
      if (ch === _Char___init__impl__6a9atx(32) || ch === _Char___init__impl__6a9atx(10) || ch === _Char___init__impl__6a9atx(13) || ch === _Char___init__impl__6a9atx(9)) {
        cpos = cpos + 1 | 0;
        continue $l$loop_0;
      }
      this.r3r_1 = cpos;
      return charToTokenClass(ch);
    }
    this.r3r_1 = cpos;
    return 10;
  }
  r3y(doConsume) {
    var current = this.e44();
    current = this.c44(current);
    var len = charSequenceLength(this.b44()) - current | 0;
    if (len < 4 || current === -1)
      return false;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(charCodeAt('null', i) === charSequenceGet(this.b44(), current + i | 0)))
          return false;
      }
       while (inductionVariable <= 3);
    if (len > 4 && charToTokenClass(charSequenceGet(this.b44(), current + 4 | 0)) === 0)
      return false;
    if (doConsume) {
      this.r3r_1 = current + 4 | 0;
    }
    return true;
  }
  c3z(doConsume, $super) {
    doConsume = doConsume === VOID ? true : doConsume;
    return $super === VOID ? this.r3y(doConsume) : $super.r3y.call(this, doConsume);
  }
  s3y(isLenient) {
    var token = this.d3y();
    var tmp;
    if (isLenient) {
      if (!(token === 1) && !(token === 0))
        return null;
      tmp = this.g3y();
    } else {
      if (!(token === 1))
        return null;
      tmp = this.f3y();
    }
    var string = tmp;
    this.t3r_1 = string;
    return string;
  }
  h44() {
    this.t3r_1 = null;
  }
  l1i(startPos, endPos) {
    // Inline function 'kotlin.text.substring' call
    var this_0 = this.b44();
    return toString(charSequenceSubSequence(this_0, startPos, endPos));
  }
  f3y() {
    if (!(this.t3r_1 == null)) {
      return takePeeked(this);
    }
    return this.v3y();
  }
  consumeString2(source, startPosition, current) {
    var currentPosition = current;
    var lastPosition = startPosition;
    var char = charSequenceGet(source, currentPosition);
    var usedAppend = false;
    while (!(char === _Char___init__impl__6a9atx(34))) {
      if (char === _Char___init__impl__6a9atx(92)) {
        usedAppend = true;
        currentPosition = this.c44(appendEscape(this, lastPosition, currentPosition));
        if (currentPosition === -1) {
          this.r3w('Unexpected EOF', currentPosition);
        }
        lastPosition = currentPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= charSequenceLength(source)) {
          usedAppend = true;
          this.a44(lastPosition, currentPosition);
          currentPosition = this.c44(currentPosition);
          if (currentPosition === -1) {
            this.r3w('Unexpected EOF', currentPosition);
          }
          lastPosition = currentPosition;
        }
      }
      char = charSequenceGet(source, currentPosition);
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.l1i(lastPosition, currentPosition);
    } else {
      tmp = decodedString(this, lastPosition, currentPosition);
    }
    var string = tmp;
    this.r3r_1 = currentPosition + 1 | 0;
    return string;
  }
  w3y() {
    var result = this.g3y();
    if (result === 'null' && wasUnquotedString(this)) {
      this.r3w("Unexpected 'null' value instead of string literal");
    }
    return result;
  }
  g3y() {
    if (!(this.t3r_1 == null)) {
      return takePeeked(this);
    }
    var current = this.e44();
    if (current >= charSequenceLength(this.b44()) || current === -1) {
      this.r3w('EOF', current);
    }
    var token = charToTokenClass(charSequenceGet(this.b44(), current));
    if (token === 1) {
      return this.f3y();
    }
    if (!(token === 0)) {
      this.r3w('Expected beginning of the string, but got ' + toString_1(charSequenceGet(this.b44(), current)));
    }
    var usedAppend = false;
    while (charToTokenClass(charSequenceGet(this.b44(), current)) === 0) {
      current = current + 1 | 0;
      if (current >= charSequenceLength(this.b44())) {
        usedAppend = true;
        this.a44(this.r3r_1, current);
        var eof = this.c44(current);
        if (eof === -1) {
          this.r3r_1 = current;
          return decodedString(this, 0, 0);
        } else {
          current = eof;
        }
      }
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.l1i(this.r3r_1, current);
    } else {
      tmp = decodedString(this, this.r3r_1, current);
    }
    var result = tmp;
    this.r3r_1 = current;
    return result;
  }
  a44(fromIndex, toIndex) {
    this.u3r_1.ug(this.b44(), fromIndex, toIndex);
  }
  u3y(allowLenientStrings) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var tokenStack = ArrayList.n2();
    var lastToken = this.d3y();
    if (!(lastToken === 8) && !(lastToken === 6)) {
      this.g3y();
      return Unit_instance;
    }
    $l$loop: while (true) {
      lastToken = this.d3y();
      if (lastToken === 1) {
        if (allowLenientStrings)
          this.g3y();
        else
          this.v3y();
        continue $l$loop;
      }
      var tmp0_subject = lastToken;
      if (tmp0_subject === 8 || tmp0_subject === 6) {
        tokenStack.z1(lastToken);
      } else if (tmp0_subject === 9) {
        if (!(last(tokenStack) === 8))
          throw JsonDecodingException_0(this.r3r_1, 'found ] instead of } at path: ' + this.s3r_1.toString(), this.b44());
        removeLast(tokenStack);
      } else if (tmp0_subject === 7) {
        if (!(last(tokenStack) === 6))
          throw JsonDecodingException_0(this.r3r_1, 'found } instead of ] at path: ' + this.s3r_1.toString(), this.b44());
        removeLast(tokenStack);
      } else if (tmp0_subject === 10) {
        this.r3w('Unexpected end of input due to malformed JSON during ignoring unknown keys');
      }
      this.i3y();
      if (tokenStack.k2() === 0)
        return Unit_instance;
    }
  }
  toString() {
    return "JsonReader(source='" + toString(this.b44()) + "', currentPosition=" + this.r3r_1 + ')';
  }
  t3y(key) {
    var processed = this.l1i(0, this.r3r_1);
    var lastIndexOf_0 = lastIndexOf(processed, key);
    throw JsonDecodingException.u3u("Encountered an unknown key '" + key + "' at offset " + lastIndexOf_0 + ' at path: ' + this.s3r_1.l3x() + "\nUse 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.\n" + ('JSON input: ' + toString(minify(this.b44(), lastIndexOf_0))));
  }
  q3w(message, position, hint) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(hint) === 0) {
      tmp = '';
    } else {
      tmp = '\n' + hint;
    }
    var hintMessage = tmp;
    throw JsonDecodingException_0(position, message + ' at path: ' + this.s3r_1.l3x() + hintMessage, this.b44());
  }
  r3w(message, position, hint, $super) {
    position = position === VOID ? this.r3r_1 : position;
    hint = hint === VOID ? '' : hint;
    return $super === VOID ? this.q3w(message, position, hint) : $super.q3w.call(this, message, position, hint);
  }
  e3z() {
    var current = this.e44();
    current = this.c44(current);
    if (current >= charSequenceLength(this.b44()) || current === -1) {
      this.r3w('EOF');
    }
    var tmp;
    if (charSequenceGet(this.b44(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      if (current === charSequenceLength(this.b44())) {
        this.r3w('EOF');
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
    $l$loop_4: while (!(current === charSequenceLength(this.b44()))) {
      var ch = charSequenceGet(this.b44(), current);
      if ((ch === _Char___init__impl__6a9atx(101) || ch === _Char___init__impl__6a9atx(69)) && !hasExponent) {
        if (current === start) {
          this.r3w('Unexpected symbol ' + toString_1(ch) + ' in numeric literal');
        }
        isExponentPositive = true;
        hasExponent = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45) && hasExponent) {
        if (current === start) {
          this.r3w("Unexpected symbol '-' in numeric literal");
        }
        isExponentPositive = false;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(43) && hasExponent) {
        if (current === start) {
          this.r3w("Unexpected symbol '+' in numeric literal");
        }
        isExponentPositive = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45)) {
        if (!(current === start)) {
          this.r3w("Unexpected symbol '-' in numeric literal");
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
        this.r3w("Unexpected symbol '" + toString_1(ch) + "' in numeric literal");
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
        this.r3w('Numeric value overflow');
      }
    }
    var hasChars = !(current === start);
    if (start === current || (isNegative && start === (current - 1 | 0))) {
      this.r3w('Expected numeric literal');
    }
    if (hasQuotation) {
      if (!hasChars) {
        this.r3w('EOF');
      }
      if (!(charSequenceGet(this.b44(), current) === _Char___init__impl__6a9atx(34))) {
        this.r3w('Expected closing quotation mark');
      }
      current = current + 1 | 0;
    }
    this.r3r_1 = current;
    if (hasExponent) {
      var doubleAccumulator = toNumber(accumulator) * consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive);
      if (doubleAccumulator > toNumber(9223372036854775807n) || doubleAccumulator < toNumber(-9223372036854775808n)) {
        this.r3w('Numeric value overflow');
      }
      // Inline function 'kotlin.math.floor' call
      if (!(Math.floor(doubleAccumulator) === doubleAccumulator)) {
        this.r3w("Can't convert " + doubleAccumulator + ' to Long');
      }
      accumulator = numberToLong(doubleAccumulator);
    }
    var tmp_0;
    if (isNegative) {
      tmp_0 = accumulator;
    } else if (!(accumulator === -9223372036854775808n)) {
      tmp_0 = negate(accumulator);
    } else {
      this.r3w('Numeric value overflow');
    }
    return tmp_0;
  }
  t3t() {
    var result = this.e3z();
    var next = this.i3y();
    if (!(next === 10)) {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected = tokenDescription(10);
      var position = true ? this.r3r_1 - 1 | 0 : this.r3r_1;
      var s = this.r3r_1 === charSequenceLength(this.b44()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.b44(), position));
      var tmp$ret$1 = "Expected input to contain a single valid number, but got '" + s + "' after it";
      this.r3w(tmp$ret$1, position);
    }
    return result;
  }
  d3z() {
    var current = this.e44();
    if (current === charSequenceLength(this.b44())) {
      this.r3w('EOF');
    }
    var tmp;
    if (charSequenceGet(this.b44(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var result = consumeBoolean2(this, current);
    if (hasQuotation) {
      if (this.r3r_1 === charSequenceLength(this.b44())) {
        this.r3w('EOF');
      }
      if (!(charSequenceGet(this.b44(), this.r3r_1) === _Char___init__impl__6a9atx(34))) {
        this.r3w('Expected closing quotation mark');
      }
      this.r3r_1 = this.r3r_1 + 1 | 0;
    }
    return result;
  }
}
class CharMappings {
  constructor() {
    CharMappings_instance = this;
    this.i44_1 = charArray(117);
    this.j44_1 = new Int8Array(126);
    initEscape(this);
    initCharToToken(this);
  }
}
class StringJsonLexer extends AbstractJsonLexer {
  constructor(source) {
    super();
    this.t44_1 = source;
  }
  b44() {
    return this.t44_1;
  }
  c44(position) {
    return position < this.b44().length ? position : -1;
  }
  i3y() {
    var source = this.b44();
    var cpos = this.r3r_1;
    $l$loop: while (!(cpos === -1) && cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charCodeAt(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.r3r_1 = cpos;
      return charToTokenClass(c);
    }
    this.r3r_1 = source.length;
    return 10;
  }
  e3y() {
    var current = this.r3r_1;
    if (current === -1)
      return false;
    var source = this.b44();
    $l$loop: while (current < source.length) {
      var c = charCodeAt(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop;
      }
      this.r3r_1 = current;
      return this.f44(c);
    }
    this.r3r_1 = current;
    return false;
  }
  e44() {
    var current = this.r3r_1;
    if (current === -1)
      return current;
    var source = this.b44();
    $l$loop: while (current < source.length) {
      var c = charCodeAt(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
      } else {
        break $l$loop;
      }
    }
    this.r3r_1 = current;
    return current;
  }
  p3y(expected) {
    if (this.r3r_1 === -1) {
      this.g44(expected);
    }
    var source = this.b44();
    var cpos = this.r3r_1;
    $l$loop: while (cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charCodeAt(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.r3r_1 = cpos;
      if (c === expected)
        return Unit_instance;
      this.g44(expected);
    }
    this.r3r_1 = -1;
    this.g44(expected);
  }
  v3y() {
    this.p3y(_Char___init__impl__6a9atx(34));
    var current = this.r3r_1;
    var closingQuote = indexOf_0(this.b44(), _Char___init__impl__6a9atx(34), current);
    if (closingQuote === -1) {
      this.g3y();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected = tokenDescription(1);
      var position = false ? this.r3r_1 - 1 | 0 : this.r3r_1;
      var s = this.r3r_1 === charSequenceLength(this.b44()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.b44(), position));
      var tmp$ret$1 = 'Expected ' + expected + ", but had '" + s + "' instead";
      this.r3w(tmp$ret$1, position);
    }
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (charCodeAt(this.b44(), i) === _Char___init__impl__6a9atx(92)) {
          return this.consumeString2(this.b44(), this.r3r_1, i);
        }
      }
       while (inductionVariable < closingQuote);
    this.r3r_1 = closingQuote + 1 | 0;
    return substring(this.b44(), current, closingQuote);
  }
  x3y(keyToMatch, isLenient) {
    var positionSnapshot = this.r3r_1;
    try {
      if (!(this.i3y() === 6))
        return null;
      var firstKey = this.s3y(isLenient);
      if (!(firstKey === keyToMatch))
        return null;
      this.h44();
      if (!(this.i3y() === 5))
        return null;
      return this.s3y(isLenient);
    }finally {
      this.r3r_1 = positionSnapshot;
      this.h44();
    }
  }
}
class StringJsonLexerWithComments extends StringJsonLexer {
  i3y() {
    var source = this.b44();
    var cpos = this.e44();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.r3r_1 = cpos + 1 | 0;
    return charToTokenClass(charCodeAt(source, cpos));
  }
  e3y() {
    var current = this.e44();
    if (current >= this.b44().length || current === -1)
      return false;
    return this.f44(charCodeAt(this.b44(), current));
  }
  p3y(expected) {
    var source = this.b44();
    var current = this.e44();
    if (current >= source.length || current === -1) {
      this.r3r_1 = -1;
      this.g44(expected);
    }
    var c = charCodeAt(source, current);
    this.r3r_1 = current + 1 | 0;
    if (c === expected)
      return Unit_instance;
    else {
      this.g44(expected);
    }
  }
  d3y() {
    var source = this.b44();
    var cpos = this.e44();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.r3r_1 = cpos;
    return charToTokenClass(charCodeAt(source, cpos));
  }
  e44() {
    var current = this.r3r_1;
    if (current === -1)
      return current;
    var source = this.b44();
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
            this.r3r_1 = source.length;
            this.r3w('Expected end of the block comment: "*/", but had EOF instead');
          } else {
            current = current + 2 | 0;
          }
          continue $l$loop_1;
        }
      }
      break $l$loop_1;
    }
    this.r3r_1 = current;
    return current;
  }
}
class JsonToStringWriter {
  constructor() {
    this.i3r_1 = StringBuilder.dc(128);
  }
  p3v(value) {
    this.i3r_1.yg(value);
  }
  j3v(char) {
    this.i3r_1.k1(char);
  }
  l3v(text) {
    this.i3r_1.i1(text);
  }
  v3v(text) {
    printQuoted(this.i3r_1, text);
  }
  w2x() {
    this.i3r_1.bh();
  }
  toString() {
    return this.i3r_1.toString();
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
  var conf = builder.o3s();
  return new JsonImpl(conf, builder.n3s_1);
}
function validateConfiguration($this) {
  if (equals($this.g10(), EmptySerializersModule()))
    return Unit_instance;
  var collector = new JsonSerializersModuleValidator($this.c3r_1);
  $this.g10().u1g(collector);
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
  throw SerializationException.xw("Class '" + subClassName + "' is not registered for polymorphic serialization " + scope + '.\n' + "Mark the base class as 'sealed' or register the serializer explicitly.");
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
var Companion_instance_0;
function Companion_getInstance_4() {
  return Companion_instance_0;
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
      throw NumberFormatException.ze(e.message);
    } else {
      throw $p;
    }
  }
  var result = tmp;
  // Inline function 'kotlin.ranges.contains' call
  var this_0 = numberRangeToNumber(-2147483648, 2147483647);
  if (!contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result))
    throw NumberFormatException.ze(_this__u8e3s4.f38() + ' is not an Int');
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
      throw NumberFormatException.ze(e.message);
    } else {
      throw $p;
    }
  }
  return tmp;
}
function get_floatOrNull(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  // Inline function 'kotlin.text.toFloatOrNull' call
  var this_0 = _this__u8e3s4.f38();
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  return toDoubleOrNull(this_0);
}
function get_float(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  // Inline function 'kotlin.text.toFloat' call
  var this_0 = _this__u8e3s4.f38();
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  return toDouble(this_0);
}
function get_doubleOrNull(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  return toDoubleOrNull(_this__u8e3s4.f38());
}
function get_double(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  return toDouble(_this__u8e3s4.f38());
}
function get_booleanOrNull(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  return toBooleanStrictOrNull_0(_this__u8e3s4.f38());
}
function get_boolean(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  var tmp0_elvis_lhs = toBooleanStrictOrNull_0(_this__u8e3s4.f38());
  var tmp;
  if (tmp0_elvis_lhs == null) {
    throw IllegalStateException.o(_this__u8e3s4.toString() + ' does not represent a Boolean');
  } else {
    tmp = tmp0_elvis_lhs;
  }
  return tmp;
}
var Companion_instance_1;
function Companion_getInstance_5() {
  return Companion_instance_1;
}
var Companion_instance_2;
function Companion_getInstance_6() {
  return Companion_instance_2;
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
function JsonPrimitive_0(value) {
  _init_properties_JsonElement_kt__7cbdc2();
  if (value == null)
    return JsonNull_getInstance();
  return new JsonLiteral(value, true);
}
function parseLongImpl(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  return (new StringJsonLexer(_this__u8e3s4.f38())).t3t();
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
function get_contentOrNull(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  var tmp;
  if (_this__u8e3s4 instanceof JsonNull) {
    tmp = null;
  } else {
    tmp = _this__u8e3s4.f38();
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
function JsonElementSerializer$descriptor$lambda($this$buildSerialDescriptor) {
  $this$buildSerialDescriptor.vv('JsonPrimitive', defer(JsonElementSerializer$descriptor$lambda$lambda));
  $this$buildSerialDescriptor.vv('JsonNull', defer(JsonElementSerializer$descriptor$lambda$lambda_0));
  $this$buildSerialDescriptor.vv('JsonLiteral', defer(JsonElementSerializer$descriptor$lambda$lambda_1));
  $this$buildSerialDescriptor.vv('JsonObject', defer(JsonElementSerializer$descriptor$lambda$lambda_2));
  $this$buildSerialDescriptor.vv('JsonArray', defer(JsonElementSerializer$descriptor$lambda$lambda_3));
  return Unit_instance;
}
function JsonElementSerializer$descriptor$lambda$lambda() {
  return JsonPrimitiveSerializer_getInstance().z3t_1;
}
function JsonElementSerializer$descriptor$lambda$lambda_0() {
  return JsonNullSerializer_getInstance().a3u_1;
}
function JsonElementSerializer$descriptor$lambda$lambda_1() {
  return JsonLiteralSerializer_getInstance().b3u_1;
}
function JsonElementSerializer$descriptor$lambda$lambda_2() {
  return JsonObjectSerializer_getInstance().c3u_1;
}
function JsonElementSerializer$descriptor$lambda$lambda_3() {
  return JsonArraySerializer_getInstance().d3u_1;
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
  var tmp0 = $this.w3u_1;
  var tmp = KProperty1;
  // Inline function 'kotlin.getValue' call
  getPropertyCallableRef('original', 1, tmp, defer$o$_get_original_$ref_3cje7k(), null);
  return tmp0.w2();
}
function defer$o$_get_original_$ref_3cje7k() {
  return (p0) => _get_original__l7ku1m(p0);
}
function Composer_0(sb, json) {
  return json.c3r_1.t3s_1 ? new ComposerWithPrettyPrint(sb, json) : new Composer(sb);
}
function readIfAbsent($this, descriptor, index) {
  $this.h3w_1 = (!descriptor.gy(index) && descriptor.fy(index).rx());
  return $this.h3w_1;
}
function JsonElementMarker$readIfAbsent$ref(p0) {
  var l = (_this__u8e3s4, p0_0) => {
    var tmp0 = p0;
    return readIfAbsent(tmp0, _this__u8e3s4, p0_0);
  };
  l.callableName = 'readIfAbsent';
  return l;
}
function JsonDecodingException_0(offset, message, input) {
  return JsonDecodingException_1(offset, message + '\nJSON input: ' + toString(minify(input, offset)));
}
function JsonDecodingException_1(offset, message) {
  return JsonDecodingException.u3u(offset >= 0 ? 'Unexpected JSON token at offset ' + offset + ': ' + message : message);
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
function invalidTrailingComma(_this__u8e3s4, entity) {
  entity = entity === VOID ? 'object' : entity;
  _this__u8e3s4.q3w('Trailing comma before the end of JSON ' + entity, _this__u8e3s4.r3r_1 - 1 | 0, "Trailing commas are non-complaint JSON and not allowed by default. Use 'allowTrailingComma = true' in 'Json {}' builder to support them.");
}
function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
  _this__u8e3s4.r3w('Unexpected special floating-point value ' + toString(result) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification', VOID, "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'");
}
function InvalidFloatingPointEncoded(value, output) {
  return JsonEncodingException.y3w('Unexpected special floating-point value ' + toString(value) + '. By default, ' + "non-finite floating point values are prohibited because they do not conform JSON specification. It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'\n" + ('Current output: ' + toString(minify(output))));
}
function InvalidKeyKindException(keyDescriptor) {
  return JsonEncodingException.y3w("Value of type '" + keyDescriptor.iw() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.yx().toString() + "'.\n") + "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.");
}
function InvalidFloatingPointDecoded(value, key, output) {
  return JsonDecodingException_1(-1, unexpectedFpErrorMessage(value, key, output));
}
function InvalidFloatingPointEncoded_0(value, key, output) {
  return JsonEncodingException.y3w(unexpectedFpErrorMessage(value, key, output));
}
function unexpectedFpErrorMessage(value, key, output) {
  return 'Unexpected special floating-point value ' + toString(value) + ' with key ' + key + '. By default, ' + "non-finite floating point values are prohibited because they do not conform JSON specification. It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'\n" + ('Current output: ' + toString(minify(output)));
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
  if (json.c3r_1.q3s_1) {
    tmp = true;
  } else {
    var tmp0 = _this__u8e3s4.by();
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
  var index = _this__u8e3s4.dy(name);
  if (!(index === -3))
    return index;
  if (!json.c3r_1.a3t_1)
    return index;
  return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
}
function getJsonNameIndexOrThrow(_this__u8e3s4, json, name, suffix) {
  suffix = suffix === VOID ? '' : suffix;
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var index = getJsonNameIndex(_this__u8e3s4, json, name);
  if (index === -3)
    throw SerializationException.xw(_this__u8e3s4.iw() + " does not contain element with name '" + name + "'" + suffix);
  return index;
}
function getJsonElementName(_this__u8e3s4, json, index) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var strategy = namingStrategy(_this__u8e3s4, json);
  return strategy == null ? _this__u8e3s4.cy(index) : serializationNamesIndices(_this__u8e3s4, json, strategy)[index];
}
function namingStrategy(_this__u8e3s4, json) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  return equals(_this__u8e3s4.yx(), CLASS_getInstance()) ? json.c3r_1.b3t_1 : null;
}
function deserializationNamesMap(_this__u8e3s4, descriptor) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var tmp = get_schemaCache(_this__u8e3s4);
  var tmp_0 = get_JsonDeserializationNamesKey();
  return tmp.a3x(descriptor, tmp_0, deserializationNamesMap$lambda(descriptor, _this__u8e3s4));
}
function getJsonEncodedNames(_this__u8e3s4, json) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var strategy = namingStrategy(_this__u8e3s4, json);
  return strategy == null ? jsonCachedSerialNames(_this__u8e3s4) : toSet(serializationNamesIndices(_this__u8e3s4, json, strategy));
}
function decodeCaseInsensitive(_this__u8e3s4, descriptor) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  return _this__u8e3s4.c3r_1.c3t_1 && equals(descriptor.yx(), ENUM_getInstance());
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
  return tmp.a3x(_this__u8e3s4, tmp_0, serializationNamesIndices$lambda(_this__u8e3s4, strategy));
}
function buildDeserializationNamesMap(_this__u8e3s4, json) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  // Inline function 'kotlin.collections.mutableMapOf' call
  var builder = LinkedHashMap.l5();
  var useLowercaseEnums = decodeCaseInsensitive(json, _this__u8e3s4);
  var strategyForClasses = namingStrategy(_this__u8e3s4, json);
  var inductionVariable = 0;
  var last = _this__u8e3s4.ay();
  if (inductionVariable < last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.collections.filterIsInstance' call
      var tmp0 = _this__u8e3s4.ey(i);
      // Inline function 'kotlin.collections.filterIsInstanceTo' call
      var destination = ArrayList.n2();
      var _iterator__ex2g4s = tmp0.l1();
      while (_iterator__ex2g4s.m1()) {
        var element = _iterator__ex2g4s.n1();
        if (element instanceof JsonNames) {
          destination.z1(element);
        }
      }
      var tmp0_safe_receiver = singleOrNull(destination);
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.b3x_1;
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
        tmp_0 = _this__u8e3s4.cy(i).toLowerCase();
      } else if (!(strategyForClasses == null)) {
        tmp_0 = strategyForClasses.c3x(_this__u8e3s4, i, _this__u8e3s4.cy(i));
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
    var tmp_0 = $this_serializationNamesIndices.ay();
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var baseName = $this_serializationNamesIndices.cy(tmp_2);
      var name = $strategy.c3x($this_serializationNamesIndices, tmp_2, baseName);
      if (!trackingSet.z1(name))
        throw JsonEncodingException.y3w("The transformed name '" + name + "' for property " + baseName + ' already exists ' + ('in ' + toString($this_serializationNamesIndices)));
      tmp_1[tmp_2] = name;
      tmp = tmp + 1 | 0;
    }
    return tmp_1;
  };
}
function buildDeserializationNamesMap$putOrThrow(_this__u8e3s4, $this_buildDeserializationNamesMap, name, index) {
  var entity = equals($this_buildDeserializationNamesMap.yx(), ENUM_getInstance()) ? 'enum value' : 'property';
  // Inline function 'kotlin.collections.contains' call
  // Inline function 'kotlin.collections.containsKey' call
  if ((isInterface(_this__u8e3s4, KtMap) ? _this__u8e3s4 : THROW_CCE()).a4(name)) {
    throw JsonDecodingException.u3u("The suggested name '" + name + "' for " + entity + ' ' + $this_buildDeserializationNamesMap.cy(index) + ' is already one of the names for ' + entity + ' ' + ($this_buildDeserializationNamesMap.cy(getValue(_this__u8e3s4, name)) + ' in ' + toString($this_buildDeserializationNamesMap)));
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
function resize($this) {
  var newSize = imul($this.f3x_1, 2);
  $this.d3x_1 = copyOf($this.d3x_1, newSize);
  var tmp = 0;
  var tmp_0 = new Int32Array(newSize);
  while (tmp < newSize) {
    tmp_0[tmp] = -1;
    tmp = tmp + 1 | 0;
  }
  var newIndices = tmp_0;
  // Inline function 'kotlin.collections.copyInto' call
  var this_0 = $this.e3x_1;
  var endIndex = this_0.length;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var tmp_1 = this_0;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  arrayCopy(tmp_1, newIndices, 0, 0, endIndex);
  $this.e3x_1 = newIndices;
}
function checkKind($this, descriptor, actualClass) {
  var kind = descriptor.yx();
  var tmp;
  if (kind instanceof PolymorphicKind) {
    tmp = true;
  } else {
    tmp = equals(kind, CONTEXTUAL_getInstance());
  }
  if (tmp) {
    throw IllegalArgumentException.h2('Serializer for ' + actualClass.f1() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind.toString() + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
  }
  if ($this.m3x_1)
    return Unit_instance;
  if (!$this.n3x_1)
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
  var size = get_entries().k2();
  var tmp$ret$0 = Array(size);
  var encoder = StreamingJsonEncoder.x3x(writer, json, tmp, tmp$ret$0);
  encoder.k11(serializer, value);
}
function readObject($this) {
  // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
  var lastToken = $this.y3x_1.c3y(6);
  if ($this.y3x_1.d3y() === 4) {
    $this.y3x_1.r3w('Unexpected leading comma');
  }
  // Inline function 'kotlin.collections.linkedMapOf' call
  var result = LinkedHashMap.l5();
  $l$loop: while ($this.y3x_1.e3y()) {
    var key = $this.z3x_1 ? $this.y3x_1.g3y() : $this.y3x_1.f3y();
    $this.y3x_1.c3y(5);
    var element = $this.h3y();
    // Inline function 'kotlin.collections.set' call
    result.f4(key, element);
    lastToken = $this.y3x_1.i3y();
    var tmp0_subject = lastToken;
    if (tmp0_subject !== 4)
      if (tmp0_subject === 7)
        break $l$loop;
      else {
        $this.y3x_1.r3w('Expected end of the object or comma');
      }
  }
  if (lastToken === 6) {
    $this.y3x_1.c3y(7);
  } else if (lastToken === 4) {
    if (!$this.a3y_1) {
      invalidTrailingComma($this.y3x_1);
    }
    $this.y3x_1.c3y(7);
  }
  return new JsonObject(result);
}
function *readObject_0($this, $receiver, $completion) {
  // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
  var lastToken = $this.y3x_1.c3y(6);
  if ($this.y3x_1.d3y() === 4) {
    $this.y3x_1.r3w('Unexpected leading comma');
  }
  // Inline function 'kotlin.collections.linkedMapOf' call
  var result = LinkedHashMap.l5();
  $l$loop: while ($this.y3x_1.e3y()) {
    var key = $this.z3x_1 ? $this.y3x_1.g3y() : $this.y3x_1.f3y();
    $this.y3x_1.c3y(5);
    var element = yield* $receiver.ss(Unit_instance, $completion);
    // Inline function 'kotlin.collections.set' call
    result.f4(key, element);
    lastToken = $this.y3x_1.i3y();
    var tmp0_subject = lastToken;
    if (tmp0_subject !== 4)
      if (tmp0_subject === 7)
        break $l$loop;
      else {
        $this.y3x_1.r3w('Expected end of the object or comma');
      }
  }
  if (lastToken === 6) {
    $this.y3x_1.c3y(7);
  } else if (lastToken === 4) {
    if (!$this.a3y_1) {
      invalidTrailingComma($this.y3x_1);
    }
    $this.y3x_1.c3y(7);
  }
  return new JsonObject(result);
}
function readArray($this) {
  var lastToken = $this.y3x_1.i3y();
  if ($this.y3x_1.d3y() === 4) {
    $this.y3x_1.r3w('Unexpected leading comma');
  }
  // Inline function 'kotlin.collections.arrayListOf' call
  var result = ArrayList.n2();
  while ($this.y3x_1.e3y()) {
    var element = $this.h3y();
    result.z1(element);
    lastToken = $this.y3x_1.i3y();
    if (!(lastToken === 4)) {
      var tmp0 = $this.y3x_1;
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
      var condition = lastToken === 9;
      var position = tmp0.r3r_1;
      if (!condition) {
        var tmp$ret$2 = 'Expected end of the array or comma';
        tmp0.r3w(tmp$ret$2, position);
      }
    }
  }
  if (lastToken === 8) {
    $this.y3x_1.c3y(9);
  } else if (lastToken === 4) {
    if (!$this.a3y_1) {
      invalidTrailingComma($this.y3x_1, 'array');
    }
    $this.y3x_1.c3y(9);
  }
  return new JsonArray(result);
}
function readValue($this, isString) {
  var tmp;
  if ($this.z3x_1 || !isString) {
    tmp = $this.y3x_1.g3y();
  } else {
    tmp = $this.y3x_1.f3y();
  }
  var string = tmp;
  if (!isString && string === 'null')
    return JsonNull_getInstance();
  return new JsonLiteral(string, isString);
}
function readDeepRecursive($this) {
  return invoke(new DeepRecursiveFunction(JsonTreeReader$readDeepRecursive$slambda_0($this)), Unit_instance);
}
function JsonTreeReader$readDeepRecursive$slambda_0(this$0) {
  var i = new JsonTreeReader$readDeepRecursive$slambda(this$0);
  var l = ($this$DeepRecursiveFunction, it, $completion) => i.k3y($this$DeepRecursiveFunction, it, $completion);
  l.$arity = 2;
  return l;
}
function classDiscriminator(_this__u8e3s4, json) {
  var _iterator__ex2g4s = _this__u8e3s4.by().l1();
  while (_iterator__ex2g4s.m1()) {
    var annotation = _iterator__ex2g4s.n1();
    if (annotation instanceof JsonClassDiscriminator)
      return annotation.l3y_1;
  }
  return json.c3r_1.y3s_1;
}
function throwJsonElementPolymorphicException(serialName, element) {
  throw JsonEncodingException.y3w('Class with serial name ' + serialName + ' cannot be serialized polymorphically because it is represented as ' + getKClassFromExpression(element).f1() + '. Make sure that its JsonTransformingSerializer returns JsonObject, so class discriminator can be added to it.');
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
  if (getJsonEncodedNames(actualSerializer.hv(), _this__u8e3s4).t3(classDiscriminator)) {
    var baseName = serializer.hv().iw();
    var actualName = actualSerializer.hv().iw();
    var text = _this__u8e3s4.c3r_1.f3t_1.equals(ClassDiscriminatorMode_ALL_JSON_OBJECTS_getInstance()) && baseName === actualName ? 'in ALL_JSON_OBJECTS class discriminator mode' : "as base class '" + baseName + "'";
    throw JsonEncodingException.y3w("Class '" + actualName + "' cannot be serialized " + text + ' because' + (" it has property name that conflicts with JSON class discriminator '" + classDiscriminator + "'. ") + 'You can either change class discriminator in JsonConfiguration, or rename property with @SerialName annotation.');
  }
}
function trySkip($this, $receiver, unknownKey) {
  if ($receiver == null)
    return false;
  if ($receiver.o3y_1 === unknownKey) {
    $receiver.o3y_1 = null;
    return true;
  }
  return false;
}
function skipLeftoverElements($this, descriptor) {
  while (!($this.i10(descriptor) === -1)) {
  }
}
function checkLeadingComma($this) {
  if ($this.l3r_1.d3y() === 4) {
    $this.l3r_1.r3w('Unexpected leading comma');
  }
}
function decodeMapIndex($this) {
  var hasComma = false;
  var decodingKey = !(($this.n3r_1 % 2 | 0) === 0);
  if (decodingKey) {
    if (!($this.n3r_1 === -1)) {
      hasComma = $this.l3r_1.q3y();
    }
  } else {
    $this.l3r_1.p3y(_Char___init__impl__6a9atx(58));
  }
  var tmp;
  if ($this.l3r_1.e3y()) {
    if (decodingKey) {
      if ($this.n3r_1 === -1) {
        var tmp0 = $this.l3r_1;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var condition = !hasComma;
        var position = tmp0.r3r_1;
        if (!condition) {
          var tmp$ret$1 = 'Unexpected leading comma';
          tmp0.r3w(tmp$ret$1, position);
        }
      } else {
        var tmp0_0 = $this.l3r_1;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var condition_0 = hasComma;
        var position_0 = tmp0_0.r3r_1;
        if (!condition_0) {
          var tmp$ret$3 = 'Expected comma after the key-value pair';
          tmp0_0.r3w(tmp$ret$3, position_0);
        }
      }
    }
    $this.n3r_1 = $this.n3r_1 + 1 | 0;
    tmp = $this.n3r_1;
  } else {
    if (hasComma && !$this.j3r_1.c3r_1.d3t_1) {
      invalidTrailingComma($this.l3r_1);
    }
    tmp = -1;
  }
  return tmp;
}
function coerceInputValue($this, descriptor, index) {
  var tmp0 = $this.j3r_1;
  var tmp$ret$0;
  $l$block_2: {
    // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
    var isOptional = descriptor.gy(index);
    var elementDescriptor = descriptor.fy(index);
    var tmp;
    if (isOptional && !elementDescriptor.rx()) {
      tmp = $this.l3r_1.r3y(true);
    } else {
      tmp = false;
    }
    if (tmp) {
      tmp$ret$0 = true;
      break $l$block_2;
    }
    if (equals(elementDescriptor.yx(), ENUM_getInstance())) {
      var tmp_0;
      if (elementDescriptor.rx()) {
        tmp_0 = $this.l3r_1.r3y(false);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$0 = false;
        break $l$block_2;
      }
      var tmp0_elvis_lhs = $this.l3r_1.s3y($this.p3r_1.r3s_1);
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = false;
        break $l$block_2;
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      var enumValue = tmp_1;
      var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
      var coerceToNull = !tmp0.c3r_1.u3s_1 && elementDescriptor.rx();
      if (enumIndex === -3 && (isOptional || coerceToNull)) {
        $this.l3r_1.f3y();
        tmp$ret$0 = true;
        break $l$block_2;
      }
    }
    tmp$ret$0 = false;
  }
  return tmp$ret$0;
}
function decodeObjectIndex($this, descriptor) {
  var hasComma = $this.l3r_1.q3y();
  while ($this.l3r_1.e3y()) {
    hasComma = false;
    var key = decodeStringKey($this);
    $this.l3r_1.p3y(_Char___init__impl__6a9atx(58));
    var index = getJsonNameIndex(descriptor, $this.j3r_1, key);
    var tmp;
    if (!(index === -3)) {
      var tmp_0;
      if ($this.p3r_1.w3s_1 && coerceInputValue($this, descriptor, index)) {
        hasComma = $this.l3r_1.q3y();
        tmp_0 = false;
      } else {
        var tmp0_safe_receiver = $this.q3r_1;
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.i3w(index);
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
  if (hasComma && !$this.j3r_1.c3r_1.d3t_1) {
    invalidTrailingComma($this.l3r_1);
  }
  var tmp1_safe_receiver = $this.q3r_1;
  var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.j3w();
  return tmp2_elvis_lhs == null ? -1 : tmp2_elvis_lhs;
}
function handleUnknown($this, descriptor, key) {
  if (ignoreUnknownKeys(descriptor, $this.j3r_1) || trySkip($this, $this.o3r_1, key)) {
    $this.l3r_1.u3y($this.p3r_1.r3s_1);
  } else {
    $this.l3r_1.s3r_1.k3x();
    $this.l3r_1.t3y(key);
  }
  return $this.l3r_1.q3y();
}
function decodeListIndex($this) {
  var hasComma = $this.l3r_1.q3y();
  var tmp;
  if ($this.l3r_1.e3y()) {
    if (!($this.n3r_1 === -1) && !hasComma) {
      $this.l3r_1.r3w('Expected end of the array or comma');
    }
    $this.n3r_1 = $this.n3r_1 + 1 | 0;
    tmp = $this.n3r_1;
  } else {
    if (hasComma && !$this.j3r_1.c3r_1.d3t_1) {
      invalidTrailingComma($this.l3r_1, 'array');
    }
    tmp = -1;
  }
  return tmp;
}
function decodeStringKey($this) {
  var tmp;
  if ($this.p3r_1.r3s_1) {
    tmp = $this.l3r_1.w3y();
  } else {
    tmp = $this.l3r_1.v3y();
  }
  return tmp;
}
function get_unsignedNumberDescriptors() {
  _init_properties_StreamingJsonEncoder_kt__pn1bsi();
  return unsignedNumberDescriptors;
}
var unsignedNumberDescriptors;
function encodeTypeInfo($this, discriminator, serialName) {
  $this.o3x_1.f3v();
  $this.w10(discriminator);
  $this.o3x_1.i3v(_Char___init__impl__6a9atx(58));
  $this.o3x_1.h3v();
  $this.w10(serialName);
}
function get_isUnsignedNumber(_this__u8e3s4) {
  _init_properties_StreamingJsonEncoder_kt__pn1bsi();
  return _this__u8e3s4.zx() && get_unsignedNumberDescriptors().t3(_this__u8e3s4);
}
function get_isUnquotedLiteral(_this__u8e3s4) {
  _init_properties_StreamingJsonEncoder_kt__pn1bsi();
  return _this__u8e3s4.zx() && equals(_this__u8e3s4, get_jsonUnquotedLiteralDescriptor());
}
var properties_initialized_StreamingJsonEncoder_kt_6ifwwk;
function _init_properties_StreamingJsonEncoder_kt__pn1bsi() {
  if (!properties_initialized_StreamingJsonEncoder_kt_6ifwwk) {
    properties_initialized_StreamingJsonEncoder_kt_6ifwwk = true;
    unsignedNumberDescriptors = setOf([serializer_1(Companion_getInstance_0()).hv(), serializer_0(Companion_getInstance()).hv(), serializer_2(Companion_getInstance_1()).hv(), serializer_3(Companion_getInstance_2()).hv()]);
  }
}
function get_ESCAPE_STRINGS() {
  _init_properties_StringOps_kt__fcy1db();
  return ESCAPE_STRINGS;
}
var ESCAPE_STRINGS;
var ESCAPE_MARKERS;
function toBooleanStrictOrNull_0(_this__u8e3s4) {
  _init_properties_StringOps_kt__fcy1db();
  return equals_0(_this__u8e3s4, 'true', true) ? true : equals_0(_this__u8e3s4, 'false', true) ? false : null;
}
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
  return input.qz(deserializer);
}
function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
  return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.hv())).qz(deserializer);
}
function unparsedPrimitive($this, literal, primitive, tag) {
  var type = startsWith(primitive, 'i') ? 'an ' + primitive : 'a ' + primitive;
  throw JsonDecodingException_0(-1, "Failed to parse literal '" + literal.toString() + "' as " + type + ' value at element: ' + $this.o3z(tag), toString($this.p3z()));
}
function setForceNull($this, descriptor, index) {
  $this.m40_1 = (!$this.k3t().c3r_1.u3s_1 && !descriptor.gy(index) && descriptor.fy(index).rx());
  return $this.m40_1;
}
function writeJson(json, value, serializer) {
  var result = {_v: null};
  var encoder = new JsonTreeEncoder(json, writeJson$lambda(result));
  encoder.k11(serializer, value);
  var tmp;
  if (result._v == null) {
    throwUninitializedPropertyAccessException('result');
  } else {
    tmp = result._v;
  }
  return tmp;
}
function inlineUnsignedNumberEncoder($this, tag) {
  return AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1.x42($this, tag);
}
function inlineUnquotedLiteralEncoder($this, tag, inlineDescriptor) {
  return AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1.b43($this, tag, inlineDescriptor);
}
function AbstractJsonTreeEncoder$beginStructure$lambda(this$0) {
  return (node) => {
    this$0.f42(this$0.k1f(), node);
    return Unit_instance;
  };
}
function get_requiresTopLevelTag(_this__u8e3s4) {
  var tmp;
  var tmp_0 = _this__u8e3s4.yx();
  if (tmp_0 instanceof PrimitiveKind) {
    tmp = true;
  } else {
    tmp = _this__u8e3s4.yx() === ENUM_getInstance();
  }
  return tmp;
}
function _get_tag__e6h4qf($this) {
  var tmp = $this.k43_1;
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
  var tmp0_subject = desc.yx();
  var tmp;
  if (tmp0_subject instanceof PolymorphicKind) {
    tmp = WriteMode_POLY_OBJ_getInstance();
  } else {
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp = WriteMode_LIST_getInstance();
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var keyDescriptor = carrierDescriptor(desc.fy(0), _this__u8e3s4.g10());
        var keyKind = keyDescriptor.yx();
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
          if (_this__u8e3s4.c3r_1.s3s_1) {
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
  if (equals(_this__u8e3s4.yx(), CONTEXTUAL_getInstance())) {
    var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
    tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
  } else if (_this__u8e3s4.zx()) {
    tmp = carrierDescriptor(_this__u8e3s4.fy(0), module_0);
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
  $this.a44(lastPosition, current);
  return appendEsc($this, current + 1 | 0);
}
function decodedString($this, lastPosition, currentPosition) {
  $this.a44(lastPosition, currentPosition);
  var result = $this.u3r_1.toString();
  $this.u3r_1.ah(0);
  return result;
}
function takePeeked($this) {
  // Inline function 'kotlin.also' call
  var this_0 = ensureNotNull($this.t3r_1);
  $this.t3r_1 = null;
  return this_0;
}
function wasUnquotedString($this) {
  return !(charSequenceGet($this.b44(), $this.r3r_1 - 1 | 0) === _Char___init__impl__6a9atx(34));
}
function appendEsc($this, startPosition) {
  var currentPosition = startPosition;
  currentPosition = $this.c44(currentPosition);
  if (currentPosition === -1) {
    $this.r3w('Expected escape sequence to continue, got EOF');
  }
  var tmp = $this.b44();
  var _unary__edvuaz = currentPosition;
  currentPosition = _unary__edvuaz + 1 | 0;
  var currentChar = charSequenceGet(tmp, _unary__edvuaz);
  if (currentChar === _Char___init__impl__6a9atx(117)) {
    return appendHex($this, $this.b44(), currentPosition);
  }
  // Inline function 'kotlin.code' call
  var tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
  var c = escapeToChar(tmp$ret$0);
  if (c === _Char___init__impl__6a9atx(0)) {
    $this.r3w("Invalid escaped char '" + toString_1(currentChar) + "'");
  }
  $this.u3r_1.k1(c);
  return currentPosition;
}
function appendHex($this, source, startPos) {
  if ((startPos + 4 | 0) >= charSequenceLength(source)) {
    $this.r3r_1 = startPos;
    $this.d44();
    if (($this.r3r_1 + 4 | 0) >= charSequenceLength(source)) {
      $this.r3w('Unexpected EOF during unicode escape');
    }
    return appendHex($this, source, $this.r3r_1);
  }
  $this.u3r_1.k1(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
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
    $this.r3w("Invalid toHexChar char '" + toString_1(character) + "' in unicode escape");
  }
  return tmp;
}
function consumeBoolean2($this, start) {
  var current = $this.c44(start);
  if (current >= charSequenceLength($this.b44()) || current === -1) {
    $this.r3w('EOF');
  }
  var tmp = $this.b44();
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
      $this.r3w("Expected valid boolean literal prefix, but had '" + $this.g3y() + "'");
    }
  }
  return tmp_0;
}
function consumeBooleanLiteral($this, literalSuffix, current) {
  if ((charSequenceLength($this.b44()) - current | 0) < literalSuffix.length) {
    $this.r3w('Unexpected end of boolean literal');
  }
  var inductionVariable = 0;
  var last = charSequenceLength(literalSuffix) - 1 | 0;
  if (inductionVariable <= last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var expected = charCodeAt(literalSuffix, i);
      var actual = charSequenceGet($this.b44(), current + i | 0);
      // Inline function 'kotlin.code' call
      var tmp = Char__toInt_impl_vasixd(expected);
      // Inline function 'kotlin.code' call
      if (!(tmp === (Char__toInt_impl_vasixd(actual) | 32))) {
        $this.r3w("Expected valid boolean literal prefix, but had '" + $this.g3y() + "'");
      }
    }
     while (inductionVariable <= last);
  $this.r3r_1 = current + literalSuffix.length | 0;
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
    var tmp_0 = CharMappings_getInstance().j44_1;
    // Inline function 'kotlin.code' call
    tmp = tmp_0[Char__toInt_impl_vasixd(c)];
  } else {
    tmp = 0;
  }
  return tmp;
}
function escapeToChar(c) {
  return c < 117 ? CharMappings_getInstance().i44_1[c] : _Char___init__impl__6a9atx(0);
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
    $this.i44_1[tmp$ret$0] = numberToChar(c);
  }
}
function initC2ESC_0($this, c, esc) {
  // Inline function 'kotlin.code' call
  var tmp$ret$0 = Char__toInt_impl_vasixd(c);
  return initC2ESC($this, tmp$ret$0, esc);
}
function initC2TC($this, c, cl) {
  $this.j44_1[c] = cl;
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
  return !json.c3r_1.e3t_1 ? new StringJsonLexer(source) : new StringJsonLexerWithComments(source);
}
function get_schemaCache(_this__u8e3s4) {
  return _this__u8e3s4.e3r_1;
}
function createMapForCache(initialCapacity) {
  return HashMap.l9(initialCapacity);
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
initMetadataForCompanion(Companion_0);
initMetadataForClass(JsonPrimitive, 'JsonPrimitive', VOID, VOID, VOID, VOID, VOID, {0: JsonPrimitiveSerializer_getInstance});
initMetadataForCompanion(Companion_1);
initMetadataForClass(JsonArray, 'JsonArray', VOID, VOID, [KtList], VOID, VOID, {0: JsonArraySerializer_getInstance});
initMetadataForCompanion(Companion_2);
initMetadataForClass(JsonObject, 'JsonObject', VOID, VOID, [KtMap], VOID, VOID, {0: JsonObjectSerializer_getInstance});
initMetadataForObject(JsonNull, 'JsonNull', VOID, VOID, [SerializerFactory], VOID, VOID, {0: JsonNullSerializer_getInstance});
initMetadataForClass(JsonLiteral, 'JsonLiteral');
initMetadataForObject(JsonElementSerializer, 'JsonElementSerializer', VOID, VOID, [KSerializer]);
initMetadataForObject(JsonPrimitiveSerializer, 'JsonPrimitiveSerializer', VOID, VOID, [KSerializer]);
initMetadataForObject(JsonArrayDescriptor, 'JsonArrayDescriptor', VOID, VOID, [SerialDescriptor]);
initMetadataForObject(JsonArraySerializer, 'JsonArraySerializer', VOID, VOID, [KSerializer]);
initMetadataForObject(JsonObjectDescriptor, 'JsonObjectDescriptor', VOID, VOID, [SerialDescriptor]);
initMetadataForObject(JsonObjectSerializer, 'JsonObjectSerializer', VOID, VOID, [KSerializer]);
initMetadataForObject(JsonNullSerializer, 'JsonNullSerializer', VOID, VOID, [KSerializer]);
initMetadataForObject(JsonLiteralSerializer, 'JsonLiteralSerializer', VOID, VOID, [KSerializer]);
protoOf(defer$1).rx = get_isNullable;
protoOf(defer$1).zx = get_isInline;
protoOf(defer$1).by = get_annotations;
initMetadataForClass(defer$1, VOID, VOID, VOID, [SerialDescriptor]);
initMetadataForInterface(JsonEncoder, 'JsonEncoder', VOID, VOID, [Encoder, CompositeEncoder]);
initMetadataForClass(JsonTransformingSerializer, 'JsonTransformingSerializer', VOID, VOID, [KSerializer]);
initMetadataForClass(Composer, 'Composer');
initMetadataForClass(ComposerForUnsignedNumbers, 'ComposerForUnsignedNumbers');
initMetadataForClass(ComposerForUnquotedLiterals, 'ComposerForUnquotedLiterals');
initMetadataForClass(ComposerWithPrettyPrint, 'ComposerWithPrettyPrint');
initMetadataForClass(JsonElementMarker, 'JsonElementMarker');
initMetadataForClass(JsonException, 'JsonException');
initMetadataForClass(JsonDecodingException, 'JsonDecodingException');
initMetadataForClass(JsonEncodingException, 'JsonEncodingException');
initMetadataForObject(Tombstone, 'Tombstone');
initMetadataForClass(JsonPath, 'JsonPath', JsonPath);
protoOf(JsonSerializersModuleValidator).f1h = contextual;
initMetadataForClass(JsonSerializersModuleValidator, 'JsonSerializersModuleValidator', VOID, VOID, [SerializersModuleCollector]);
initMetadataForLambda(JsonTreeReader$readDeepRecursive$slambda, VOID, VOID, [2]);
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
//endregion
//region block: exports
export {
  JsonArray as JsonArray2urf8ey7u44sd,
  JsonContentPolymorphicSerializer as JsonContentPolymorphicSerializer1zt3sp8asmujz,
  JsonDecoder as JsonDecoder1rijst5ne6qla,
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
};
//endregion

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-json.mjs.map
