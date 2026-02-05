import {
  EmptySerializersModule991ju6pz9b79 as EmptySerializersModule,
  SerializationExceptioneqrdve3ts2n9 as SerializationException,
  SEALED_getInstance1vxvpfzfxmg5m as SEALED_getInstance,
  buildSerialDescriptor2873qmkp8r2ib as buildSerialDescriptor,
  serializerOrNull294cbc318ws50 as serializerOrNull,
  KSerializerzf77vz1967fq as KSerializer,
  Decoder23nde051s631g as Decoder,
  CompositeDecoder2tzm7wpwkr0og as CompositeDecoder,
  SerializerFactory1qv9hivitncuv as SerializerFactory,
  serializer1x79l67jvwntn as serializer,
  InlinePrimitiveDescriptor3i6ccn1a4fw94 as InlinePrimitiveDescriptor,
  STRING_getInstance2dgfp43qdvxn4 as STRING_getInstance,
  ListSerializer1hxuk9dx5n9du as ListSerializer,
  SerialDescriptor2pelqekb5ic3a as SerialDescriptor,
  MapSerializer11kmegt3g5c1g as MapSerializer,
  ENUM_getInstance2btpo8dvnibj3 as ENUM_getInstance,
  PrimitiveSerialDescriptor3egfp53lutxj2 as PrimitiveSerialDescriptor,
  serializer2lw83vwvpnyms as serializer_0,
  get_isNullable36pbikm8xb7bz as get_isNullable,
  get_isInline5x26qrhi9qs6 as get_isInline,
  get_annotationshjxdbdcl8kmv as get_annotations,
  Encoderqvmrpqtq8hnu as Encoder,
  CompositeEncoderknecpkexzn3v as CompositeEncoder,
  ElementMarker33ojvsajwmzts as ElementMarker,
  CLASS_getInstance3v12utpo53nyi as CLASS_getInstance,
  LIST_getInstance1utapkkkw66ts as LIST_getInstance,
  CONTEXTUAL_getInstancelbs8qycmp7lg as CONTEXTUAL_getInstance,
  PolymorphicKindla9gurooefwb as PolymorphicKind,
  PrimitiveKindndgbuh6is7ze as PrimitiveKind,
  MAP_getInstanceoecfbvb4e1b6 as MAP_getInstance,
  ENUMlmq49cvwy4ow as ENUM,
  contextual3hpp1gupsu4al as contextual,
  SerializersModuleCollector3dddz14wd7brg as SerializersModuleCollector,
  SealedClassSerializeriwipiibk55zc as SealedClassSerializer,
  jsonCachedSerialNameslxufy2gu43jt as jsonCachedSerialNames,
  AbstractDecoder35guh02ubh2hm as AbstractDecoder,
  AbstractPolymorphicSerializer1ccxwp48nfy58 as AbstractPolymorphicSerializer,
  DeserializationStrategy1z3z5pj9f7zc8 as DeserializationStrategy,
  findPolymorphicSerializer1nm87hvemahcj as findPolymorphicSerializer,
  MissingFieldException24tqif29emcmi as MissingFieldException,
  AbstractEncoder2gxtu3xmy3f8j as AbstractEncoder,
  OBJECT_getInstance1yzfkijr6copj as OBJECT_getInstance,
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
  Unit_instance28fytmsmm6r23 as Unit_instance,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  IllegalArgumentException2asla15b5jaob as IllegalArgumentException,
  toString1pkumu07cwy4m as toString,
  charSequenceLength3278n89t01tmv as charSequenceLength,
  charSequenceGet1vxk1y5n17t1z as charSequenceGet,
  _Char___init__impl__6a9atx1csff5kwtduxl as _Char___init__impl__6a9atx,
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
  StringCompanionObject_instance3sox3h548pjra as StringCompanionObject_instance,
  noWhenBranchMatchedException2a6r7ubxgky5j as noWhenBranchMatchedException,
  toLongOrNullutqivezb0wx1 as toLongOrNull,
  toULongOrNullojoyxi0i9tgj as toULongOrNull,
  ULong3f9k7s38t3rfp as ULong,
  Companion_getInstance3sq3iu5mj6qnr as Companion_getInstance,
  _ULong___get_data__impl__fggpzb3nuonax14svlz as _ULong___get_data__impl__fggpzb,
  toBooleanStrictOrNull2j0md398tkvbj as toBooleanStrictOrNull,
  KProperty1ca4yb4wlo496 as KProperty1,
  getPropertyCallableRef3hckxc0xueiaj as getPropertyCallableRef,
  lazy2hsh8ze7j6ikd as lazy,
  protoOf180f3jzyo7rfj as protoOf,
  fromInt2ii0rejb1w62w as fromInt,
  _UInt___init__impl__l7qpdl3eewek7byy9h9 as _UInt___init__impl__l7qpdl,
  UInt__toString_impl_dbgl211y5918yopqyzq as UInt__toString_impl_dbgl21,
  _ULong___init__impl__c78o9k2ace6d5rqjy3k as _ULong___init__impl__c78o9k,
  ULong__toString_impl_f9au7k2d1ziqe8sg5kj as ULong__toString_impl_f9au7k,
  _UByte___init__impl__g9hnc418b8pq346rvu4 as _UByte___init__impl__g9hnc4,
  UByte__toString_impl_v72jg29gpkfdk52uly as UByte__toString_impl_v72jg,
  _UShort___init__impl__jigrne3qim87o3qpsbl as _UShort___init__impl__jigrne,
  UShort__toString_impl_edaoee770kqykt9las as UShort__toString_impl_edaoee,
  captureStack1fzi4aczwc4hg as captureStack,
  charSequenceSubSequence1iwpdba8s3jc7 as charSequenceSubSequence,
  coerceAtLeast2bkz8m9ik7hep as coerceAtLeast,
  coerceAtMost322komnqp70ag as coerceAtMost,
  Collection1k04j3hzsbod0 as Collection,
  LinkedHashMap1zhqxkxv3xnkl as LinkedHashMap,
  ArrayList3it5z8td81qkl as ArrayList,
  singleOrNullrknfaxokm1sl as singleOrNull,
  emptyMapr06gerzljqtm as emptyMap,
  getValue48kllevslyh6 as getValue,
  copyOf2ng0t8oizk6it as copyOf,
  arrayCopytctsywo3h7gj as arrayCopy,
  get_COROUTINE_SUSPENDED3ujt3p13qm4iy as get_COROUTINE_SUSPENDED,
  suspendOrReturn49pspzlx5djv as suspendOrReturn,
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
  _UInt___get_data__impl__f0vqqw3lsr2hwtcnhrf as _UInt___get_data__impl__f0vqqw,
  toULong266mnyksbttkw as toULong,
  toUByteh6p4wmqswkrs as toUByte,
  _UByte___get_data__impl__jof9qrfg5oujomrowy as _UByte___get_data__impl__jof9qr,
  toUShort7yqspfnhrot4 as toUShort,
  _UShort___get_data__impl__g02451ec7jdumy4xob as _UShort___get_data__impl__g0245,
  toString3dhdjl9yf50de as toString_1,
  Companion_getInstance18m03xf6clkk8 as Companion_getInstance_0,
  Companion_getInstance3jsnccejczksw as Companion_getInstance_1,
  Companion_getInstance29d4047m08ot as Companion_getInstance_2,
  setOf45ia9pnfhe90 as setOf,
  equals2v6cggk171b6e as equals_0,
  Char__toInt_impl_vasixd3jl92hthlhyn7 as Char__toInt_impl_vasixd,
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
  Char__minus_impl_a2frrh1dka2ec6zg6dk as Char__minus_impl_a2frrh,
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
    this.u3p_1 = configuration;
    this.v3p_1 = serializersModule;
    this.w3p_1 = new DescriptorSchemaCache();
  }
  j10() {
    return this.v3p_1;
  }
  x3p(serializer, value) {
    var result = new JsonToStringWriter();
    try {
      encodeByWriter(this, result, serializer, value);
      return result.toString();
    }finally {
      result.n2x();
    }
  }
  y3p(deserializer, string) {
    var lexer = StringJsonLexer_0(this, string);
    var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.mv(), null);
    var result = input.tz(deserializer);
    lexer.n3q();
    return result;
  }
  z3p(deserializer, element) {
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
    this.o3q_1 = json.u3p_1.h3r_1;
    this.p3q_1 = json.u3p_1.m3r_1;
    this.q3q_1 = json.u3p_1.i3r_1;
    this.r3q_1 = json.u3p_1.j3r_1;
    this.s3q_1 = json.u3p_1.l3r_1;
    this.t3q_1 = json.u3p_1.n3r_1;
    this.u3q_1 = json.u3p_1.o3r_1;
    this.v3q_1 = json.u3p_1.q3r_1;
    this.w3q_1 = json.u3p_1.x3r_1;
    this.x3q_1 = json.u3p_1.s3r_1;
    this.y3q_1 = json.u3p_1.t3r_1;
    this.z3q_1 = json.u3p_1.u3r_1;
    this.a3r_1 = json.u3p_1.v3r_1;
    this.b3r_1 = json.u3p_1.w3r_1;
    this.c3r_1 = json.u3p_1.r3r_1;
    this.d3r_1 = json.u3p_1.k3r_1;
    this.e3r_1 = json.u3p_1.p3r_1;
    this.f3r_1 = json.j10();
  }
  g3r() {
    if (this.e3r_1) {
      // Inline function 'kotlin.require' call
      if (!(this.v3q_1 === 'type')) {
        var message = 'Class discriminator should not be specified when array polymorphism is specified';
        throw IllegalArgumentException.k2(toString(message));
      }
      // Inline function 'kotlin.require' call
      if (!this.w3q_1.equals(ClassDiscriminatorMode_POLYMORPHIC_getInstance())) {
        var message_0 = 'useArrayPolymorphism option can only be used if classDiscriminatorMode in a default POLYMORPHIC state.';
        throw IllegalArgumentException.k2(toString(message_0));
      }
    }
    if (!this.s3q_1) {
      // Inline function 'kotlin.require' call
      if (!(this.t3q_1 === '    ')) {
        var message_1 = 'Indent should not be specified when default printing mode is used';
        throw IllegalArgumentException.k2(toString(message_1));
      }
    } else if (!(this.t3q_1 === '    ')) {
      var tmp0 = this.t3q_1;
      var tmp$ret$7;
      $l$block: {
        // Inline function 'kotlin.text.all' call
        var inductionVariable = 0;
        while (inductionVariable < charSequenceLength(tmp0)) {
          var element = charSequenceGet(tmp0, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          if (!(element === _Char___init__impl__6a9atx(32) || element === _Char___init__impl__6a9atx(9) || element === _Char___init__impl__6a9atx(13) || element === _Char___init__impl__6a9atx(10))) {
            tmp$ret$7 = false;
            break $l$block;
          }
        }
        tmp$ret$7 = true;
      }
      var allWhitespaces = tmp$ret$7;
      // Inline function 'kotlin.require' call
      if (!allWhitespaces) {
        var message_2 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.t3q_1;
        throw IllegalArgumentException.k2(toString(message_2));
      }
    }
    return new JsonConfiguration(this.o3q_1, this.q3q_1, this.r3q_1, this.d3r_1, this.s3q_1, this.p3q_1, this.t3q_1, this.u3q_1, this.e3r_1, this.v3q_1, this.c3r_1, this.x3q_1, this.y3q_1, this.z3q_1, this.a3r_1, this.b3r_1, this.w3q_1);
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
    this.h3r_1 = encodeDefaults;
    this.i3r_1 = ignoreUnknownKeys;
    this.j3r_1 = isLenient;
    this.k3r_1 = allowStructuredMapKeys;
    this.l3r_1 = prettyPrint;
    this.m3r_1 = explicitNulls;
    this.n3r_1 = prettyPrintIndent;
    this.o3r_1 = coerceInputValues;
    this.p3r_1 = useArrayPolymorphism;
    this.q3r_1 = classDiscriminator;
    this.r3r_1 = allowSpecialFloatingPointValues;
    this.s3r_1 = useAlternativeNames;
    this.t3r_1 = namingStrategy;
    this.u3r_1 = decodeEnumsCaseInsensitive;
    this.v3r_1 = allowTrailingComma;
    this.w3r_1 = allowComments;
    this.x3r_1 = classDiscriminatorMode;
  }
  toString() {
    return 'JsonConfiguration(encodeDefaults=' + this.h3r_1 + ', ignoreUnknownKeys=' + this.i3r_1 + ', isLenient=' + this.j3r_1 + ', ' + ('allowStructuredMapKeys=' + this.k3r_1 + ', prettyPrint=' + this.l3r_1 + ', explicitNulls=' + this.m3r_1 + ', ') + ("prettyPrintIndent='" + this.n3r_1 + "', coerceInputValues=" + this.o3r_1 + ', useArrayPolymorphism=' + this.p3r_1 + ', ') + ("classDiscriminator='" + this.q3r_1 + "', allowSpecialFloatingPointValues=" + this.r3r_1 + ', ') + ('useAlternativeNames=' + this.s3r_1 + ', namingStrategy=' + toString_0(this.t3r_1) + ', decodeEnumsCaseInsensitive=' + this.u3r_1 + ', ') + ('allowTrailingComma=' + this.v3r_1 + ', allowComments=' + this.w3r_1 + ', classDiscriminatorMode=' + this.x3r_1.toString() + ')');
  }
}
class ClassDiscriminatorMode extends Enum {}
class JsonContentPolymorphicSerializer {
  constructor(baseClass) {
    this.y3r_1 = baseClass;
    this.z3r_1 = buildSerialDescriptor('JsonContentPolymorphicSerializer<' + this.y3r_1.k1() + '>', SEALED_getInstance(), []);
  }
  mv() {
    return this.z3r_1;
  }
  ew(encoder, value) {
    var tmp0_elvis_lhs = encoder.j10().u11(this.y3r_1, value);
    var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? serializerOrNull(getKClassFromExpression(value)) : tmp0_elvis_lhs;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      throwSubtypeNotRegistered(this, getKClassFromExpression(value), this.y3r_1);
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
    var tree = input.a3s();
    var tmp = this.b3s(tree);
    var actualSerializer = isInterface(tmp, KSerializer) ? tmp : THROW_CCE();
    return input.c3s().z3p(actualSerializer, tree);
  }
}
class JsonDecoder {}
class Companion {}
class JsonElement {}
class Companion_0 {}
class JsonPrimitive extends JsonElement {
  toString() {
    return this.f37();
  }
}
class Companion_1 {}
class JsonArray extends JsonElement {
  constructor(content) {
    super();
    this.e3s_1 = content;
  }
  equals(other) {
    return equals(this.e3s_1, other);
  }
  hashCode() {
    return hashCode(this.e3s_1);
  }
  toString() {
    return joinToString(this.e3s_1, ',', '[', ']');
  }
  o1() {
    return this.e3s_1.o1();
  }
  f3s(element) {
    return this.e3s_1.y3(element);
  }
  y3(element) {
    if (!(element instanceof JsonElement))
      return false;
    return this.f3s(element instanceof JsonElement ? element : THROW_CCE());
  }
  q1() {
    return this.e3s_1.q1();
  }
  g3s(elements) {
    return this.e3s_1.z3(elements);
  }
  z3(elements) {
    return this.g3s(elements);
  }
  p2(index) {
    return this.e3s_1.p2(index);
  }
  h3s(element) {
    return this.e3s_1.a4(element);
  }
  a4(element) {
    if (!(element instanceof JsonElement))
      return -1;
    return this.h3s(element instanceof JsonElement ? element : THROW_CCE());
  }
  i3s(element) {
    return this.e3s_1.b4(element);
  }
  b4(element) {
    if (!(element instanceof JsonElement))
      return -1;
    return this.i3s(element instanceof JsonElement ? element : THROW_CCE());
  }
  c4() {
    return this.e3s_1.c4();
  }
  u2(index) {
    return this.e3s_1.u2(index);
  }
  d4(fromIndex, toIndex) {
    return this.e3s_1.d4(fromIndex, toIndex);
  }
  asJsReadonlyArrayView() {
    return this.e3s_1.asJsReadonlyArrayView();
  }
  q2() {
    return this.e3s_1.q2();
  }
}
class Companion_2 {}
class JsonObject extends JsonElement {
  constructor(content) {
    super();
    this.j3s_1 = content;
  }
  equals(other) {
    return equals(this.j3s_1, other);
  }
  hashCode() {
    return hashCode(this.j3s_1);
  }
  toString() {
    var tmp = this.j3s_1.z2();
    return joinToString(tmp, ',', '{', '}', VOID, VOID, JsonObject$toString$lambda);
  }
  o1() {
    return this.j3s_1.o1();
  }
  g2b(key) {
    return this.j3s_1.f4(key);
  }
  f4(key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.g2b((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  }
  k3s(value) {
    return this.j3s_1.g4(value);
  }
  g4(value) {
    if (!(value instanceof JsonElement))
      return false;
    return this.k3s(value instanceof JsonElement ? value : THROW_CCE());
  }
  i2b(key) {
    return this.j3s_1.h4(key);
  }
  h4(key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.i2b((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  }
  asJsReadonlyMapView() {
    return this.j3s_1.asJsReadonlyMapView();
  }
  q2() {
    return this.j3s_1.q2();
  }
  i4() {
    return this.j3s_1.i4();
  }
  j4() {
    return this.j3s_1.j4();
  }
  z2() {
    return this.j3s_1.z2();
  }
}
class JsonNull extends JsonPrimitive {
  constructor() {
    JsonNull_instance = null;
    super();
    JsonNull_instance = this;
    this.m3s_1 = 'null';
  }
  d3s() {
    return false;
  }
  f37() {
    return this.m3s_1;
  }
  n3s() {
    return JsonNullSerializer_getInstance();
  }
  m18(typeParamsSerializers) {
    return this.n3s();
  }
}
class JsonLiteral extends JsonPrimitive {
  constructor(body, isString, coerceToInlineType) {
    coerceToInlineType = coerceToInlineType === VOID ? null : coerceToInlineType;
    super();
    this.o3s_1 = isString;
    this.p3s_1 = coerceToInlineType;
    this.q3s_1 = toString(body);
    if (!(this.p3s_1 == null)) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.require' call
      if (!this.p3s_1.cy()) {
        var message = 'Failed requirement.';
        throw IllegalArgumentException.k2(toString(message));
      }
    }
  }
  d3s() {
    return this.o3s_1;
  }
  f37() {
    return this.q3s_1;
  }
  toString() {
    var tmp;
    if (this.o3s_1) {
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder.m1();
      printQuoted(this_0, this.q3s_1);
      tmp = this_0.toString();
    } else {
      tmp = this.q3s_1;
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
    if (!(this.o3s_1 === other.o3s_1))
      return false;
    if (!(this.q3s_1 === other.q3s_1))
      return false;
    return true;
  }
  hashCode() {
    var result = getBooleanHashCode(this.o3s_1);
    result = imul(31, result) + getStringHashCode(this.q3s_1) | 0;
    return result;
  }
}
class JsonElementSerializer {
  constructor() {
    JsonElementSerializer_instance = this;
    var tmp = this;
    var tmp_0 = SEALED_getInstance();
    tmp.w3s_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonElement', tmp_0, [], JsonElementSerializer$descriptor$lambda);
  }
  mv() {
    return this.w3s_1;
  }
  x3s(encoder, value) {
    verify(encoder);
    if (value instanceof JsonPrimitive) {
      encoder.n11(JsonPrimitiveSerializer_getInstance(), value);
    } else {
      if (value instanceof JsonObject) {
        encoder.n11(JsonObjectSerializer_getInstance(), value);
      } else {
        if (value instanceof JsonArray) {
          encoder.n11(JsonArraySerializer_getInstance(), value);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
  }
  nv(encoder, value) {
    return this.x3s(encoder, value instanceof JsonElement ? value : THROW_CCE());
  }
  ov(decoder) {
    var input = asJsonDecoder(decoder);
    return input.a3s();
  }
}
class JsonPrimitiveSerializer {
  constructor() {
    JsonPrimitiveSerializer_instance = this;
    this.r3s_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonPrimitive', STRING_getInstance(), []);
  }
  mv() {
    return this.r3s_1;
  }
  y3s(encoder, value) {
    verify(encoder);
    var tmp;
    if (value instanceof JsonNull) {
      encoder.n11(JsonNullSerializer_getInstance(), JsonNull_getInstance());
      tmp = Unit_instance;
    } else {
      var tmp_0 = JsonLiteralSerializer_getInstance();
      encoder.n11(tmp_0, value instanceof JsonLiteral ? value : THROW_CCE());
      tmp = Unit_instance;
    }
    return tmp;
  }
  nv(encoder, value) {
    return this.y3s(encoder, value instanceof JsonPrimitive ? value : THROW_CCE());
  }
  ov(decoder) {
    var result = asJsonDecoder(decoder).a3s();
    if (!(result instanceof JsonPrimitive))
      throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonPrimitive, had ' + toString(getKClassFromExpression(result)), toString(result));
    return result;
  }
}
class JsonArrayDescriptor {
  constructor() {
    JsonArrayDescriptor_instance = this;
    this.z3s_1 = ListSerializer(JsonElementSerializer_getInstance()).mv();
    this.a3t_1 = 'kotlinx.serialization.json.JsonArray';
  }
  nw() {
    return this.a3t_1;
  }
  fy(index) {
    return this.z3s_1.fy(index);
  }
  gy(name) {
    return this.z3s_1.gy(name);
  }
  hy(index) {
    return this.z3s_1.hy(index);
  }
  iy(index) {
    return this.z3s_1.iy(index);
  }
  jy(index) {
    return this.z3s_1.jy(index);
  }
  by() {
    return this.z3s_1.by();
  }
  ux() {
    return this.z3s_1.ux();
  }
  cy() {
    return this.z3s_1.cy();
  }
  dy() {
    return this.z3s_1.dy();
  }
  ey() {
    return this.z3s_1.ey();
  }
}
class JsonArraySerializer {
  constructor() {
    JsonArraySerializer_instance = this;
    this.v3s_1 = JsonArrayDescriptor_getInstance();
  }
  mv() {
    return this.v3s_1;
  }
  b3t(encoder, value) {
    verify(encoder);
    ListSerializer(JsonElementSerializer_getInstance()).nv(encoder, value);
  }
  nv(encoder, value) {
    return this.b3t(encoder, value instanceof JsonArray ? value : THROW_CCE());
  }
  ov(decoder) {
    verify_0(decoder);
    return new JsonArray(ListSerializer(JsonElementSerializer_getInstance()).ov(decoder));
  }
}
class JsonObjectDescriptor {
  constructor() {
    JsonObjectDescriptor_instance = this;
    this.c3t_1 = MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).mv();
    this.d3t_1 = 'kotlinx.serialization.json.JsonObject';
  }
  nw() {
    return this.d3t_1;
  }
  fy(index) {
    return this.c3t_1.fy(index);
  }
  gy(name) {
    return this.c3t_1.gy(name);
  }
  hy(index) {
    return this.c3t_1.hy(index);
  }
  iy(index) {
    return this.c3t_1.iy(index);
  }
  jy(index) {
    return this.c3t_1.jy(index);
  }
  by() {
    return this.c3t_1.by();
  }
  ux() {
    return this.c3t_1.ux();
  }
  cy() {
    return this.c3t_1.cy();
  }
  dy() {
    return this.c3t_1.dy();
  }
  ey() {
    return this.c3t_1.ey();
  }
}
class JsonObjectSerializer {
  constructor() {
    JsonObjectSerializer_instance = this;
    this.u3s_1 = JsonObjectDescriptor_getInstance();
  }
  mv() {
    return this.u3s_1;
  }
  e3t(encoder, value) {
    verify(encoder);
    MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).nv(encoder, value);
  }
  nv(encoder, value) {
    return this.e3t(encoder, value instanceof JsonObject ? value : THROW_CCE());
  }
  ov(decoder) {
    verify_0(decoder);
    return new JsonObject(MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).ov(decoder));
  }
}
class JsonNullSerializer {
  constructor() {
    JsonNullSerializer_instance = this;
    this.s3s_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonNull', ENUM_getInstance(), []);
  }
  mv() {
    return this.s3s_1;
  }
  f3t(encoder, value) {
    verify(encoder);
    encoder.q10();
  }
  nv(encoder, value) {
    return this.f3t(encoder, value instanceof JsonNull ? value : THROW_CCE());
  }
  ov(decoder) {
    verify_0(decoder);
    if (decoder.fz()) {
      throw JsonDecodingException.m3t("Expected 'null' literal");
    }
    decoder.gz();
    return JsonNull_getInstance();
  }
}
class JsonLiteralSerializer {
  constructor() {
    JsonLiteralSerializer_instance = this;
    this.t3s_1 = PrimitiveSerialDescriptor('kotlinx.serialization.json.JsonLiteral', STRING_getInstance());
  }
  mv() {
    return this.t3s_1;
  }
  n3t(encoder, value) {
    verify(encoder);
    if (value.o3s_1) {
      return encoder.z10(value.q3s_1);
    }
    if (!(value.p3s_1 == null)) {
      return encoder.b11(value.p3s_1).z10(value.q3s_1);
    }
    var tmp0_safe_receiver = toLongOrNull(value.q3s_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.v10(tmp0_safe_receiver);
    }
    var tmp1_safe_receiver = toULongOrNull(value.q3s_1);
    var tmp = tmp1_safe_receiver;
    if ((tmp == null ? null : new ULong(tmp)) == null)
      null;
    else {
      var tmp_0 = tmp1_safe_receiver;
      // Inline function 'kotlin.let' call
      var it = (tmp_0 == null ? null : new ULong(tmp_0)).k3_1;
      var tmp_1 = encoder.b11(serializer_0(Companion_getInstance()).mv());
      // Inline function 'kotlin.ULong.toLong' call
      var tmp$ret$1 = _ULong___get_data__impl__fggpzb(it);
      tmp_1.v10(tmp$ret$1);
      return Unit_instance;
    }
    var tmp2_safe_receiver = toDoubleOrNull(value.q3s_1);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.x10(tmp2_safe_receiver);
    }
    var tmp3_safe_receiver = toBooleanStrictOrNull(value.q3s_1);
    if (tmp3_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.r10(tmp3_safe_receiver);
    }
    encoder.z10(value.q3s_1);
  }
  nv(encoder, value) {
    return this.n3t(encoder, value instanceof JsonLiteral ? value : THROW_CCE());
  }
  ov(decoder) {
    var result = asJsonDecoder(decoder).a3s();
    if (!(result instanceof JsonLiteral))
      throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonLiteral, had ' + toString(getKClassFromExpression(result)), toString(result));
    return result;
  }
}
class defer$1 {
  constructor($deferred) {
    this.o3t_1 = lazy($deferred);
  }
  nw() {
    return _get_original__l7ku1m(this).nw();
  }
  by() {
    return _get_original__l7ku1m(this).by();
  }
  dy() {
    return _get_original__l7ku1m(this).dy();
  }
  fy(index) {
    return _get_original__l7ku1m(this).fy(index);
  }
  gy(name) {
    return _get_original__l7ku1m(this).gy(name);
  }
  hy(index) {
    return _get_original__l7ku1m(this).hy(index);
  }
  iy(index) {
    return _get_original__l7ku1m(this).iy(index);
  }
  jy(index) {
    return _get_original__l7ku1m(this).jy(index);
  }
}
class JsonEncoder {}
class JsonTransformingSerializer {
  constructor(tSerializer) {
    this.q3t_1 = tSerializer;
  }
  mv() {
    return this.q3t_1.mv();
  }
  nv(encoder, value) {
    var output = asJsonEncoder(encoder);
    var element = writeJson(output.c3s(), value, this.q3t_1);
    element = this.r3t(element);
    output.p3t(element);
  }
  ov(decoder) {
    var input = asJsonDecoder(decoder);
    var element = input.a3s();
    return input.c3s().z3p(this.q3t_1, this.s3t(element));
  }
  s3t(element) {
    return element;
  }
  r3t(element) {
    return element;
  }
}
class Composer {
  constructor(writer) {
    this.t3t_1 = writer;
    this.u3t_1 = true;
  }
  v3t() {
    this.u3t_1 = true;
  }
  w3t() {
    return Unit_instance;
  }
  x3t() {
    this.u3t_1 = false;
  }
  y3t() {
    this.u3t_1 = false;
  }
  z3t() {
    return Unit_instance;
  }
  a3u(v) {
    return this.t3t_1.b3u(v);
  }
  c3u(v) {
    return this.t3t_1.d3u(v);
  }
  e3u(v) {
    return this.t3t_1.d3u(v.toString());
  }
  f3u(v) {
    return this.t3t_1.d3u(v.toString());
  }
  g3u(v) {
    return this.t3t_1.h3u(fromInt(v));
  }
  i3u(v) {
    return this.t3t_1.h3u(fromInt(v));
  }
  j3u(v) {
    return this.t3t_1.h3u(fromInt(v));
  }
  k3u(v) {
    return this.t3t_1.h3u(v);
  }
  l3u(v) {
    return this.t3t_1.d3u(v.toString());
  }
  m3u(value) {
    return this.t3t_1.n3u(value);
  }
}
class ComposerForUnsignedNumbers extends Composer {
  constructor(writer, forceQuoting) {
    super(writer);
    this.q3u_1 = forceQuoting;
  }
  j3u(v) {
    if (this.q3u_1) {
      // Inline function 'kotlin.toUInt' call
      var tmp$ret$0 = _UInt___init__impl__l7qpdl(v);
      this.m3u(UInt__toString_impl_dbgl21(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUInt' call
      var tmp$ret$1 = _UInt___init__impl__l7qpdl(v);
      this.c3u(UInt__toString_impl_dbgl21(tmp$ret$1));
    }
  }
  k3u(v) {
    if (this.q3u_1) {
      // Inline function 'kotlin.toULong' call
      var tmp$ret$0 = _ULong___init__impl__c78o9k(v);
      this.m3u(ULong__toString_impl_f9au7k(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toULong' call
      var tmp$ret$1 = _ULong___init__impl__c78o9k(v);
      this.c3u(ULong__toString_impl_f9au7k(tmp$ret$1));
    }
  }
  g3u(v) {
    if (this.q3u_1) {
      // Inline function 'kotlin.toUByte' call
      var tmp$ret$0 = _UByte___init__impl__g9hnc4(v);
      this.m3u(UByte__toString_impl_v72jg(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUByte' call
      var tmp$ret$1 = _UByte___init__impl__g9hnc4(v);
      this.c3u(UByte__toString_impl_v72jg(tmp$ret$1));
    }
  }
  i3u(v) {
    if (this.q3u_1) {
      // Inline function 'kotlin.toUShort' call
      var tmp$ret$0 = _UShort___init__impl__jigrne(v);
      this.m3u(UShort__toString_impl_edaoee(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUShort' call
      var tmp$ret$1 = _UShort___init__impl__jigrne(v);
      this.c3u(UShort__toString_impl_edaoee(tmp$ret$1));
    }
  }
}
class ComposerForUnquotedLiterals extends Composer {
  constructor(writer, forceQuoting) {
    super(writer);
    this.t3u_1 = forceQuoting;
  }
  m3u(value) {
    if (this.t3u_1) {
      super.m3u(value);
    } else {
      super.c3u(value);
    }
  }
}
class ComposerWithPrettyPrint extends Composer {
  constructor(writer, json) {
    super(writer);
    this.w3u_1 = json;
    this.x3u_1 = 0;
  }
  v3t() {
    this.u3t_1 = true;
    this.x3u_1 = this.x3u_1 + 1 | 0;
  }
  w3t() {
    this.x3u_1 = this.x3u_1 - 1 | 0;
  }
  x3t() {
    this.u3t_1 = false;
    this.c3u('\n');
    // Inline function 'kotlin.repeat' call
    var times = this.x3u_1;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.c3u(this.w3u_1.u3p_1.n3r_1);
      }
       while (inductionVariable < times);
  }
  y3t() {
    if (this.u3t_1)
      this.u3t_1 = false;
    else {
      this.x3t();
    }
  }
  z3t() {
    this.a3u(_Char___init__impl__6a9atx(32));
  }
}
class JsonElementMarker {
  constructor(descriptor) {
    var tmp = this;
    tmp.y3u_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
    this.z3u_1 = false;
  }
  a3v(index) {
    this.y3u_1.d16(index);
  }
  b3v() {
    return this.y3u_1.e16();
  }
}
class JsonException extends SerializationException {
  static h3v(message) {
    var $this = this.cx(message);
    captureStack($this, $this.g3v_1);
    return $this;
  }
}
class JsonDecodingException extends JsonException {
  static m3t(message) {
    var $this = this.h3v(message);
    captureStack($this, $this.l3t_1);
    return $this;
  }
}
class JsonEncodingException extends JsonException {
  static q3v(message) {
    var $this = this.h3v(message);
    captureStack($this, $this.p3v_1);
    return $this;
  }
}
class Tombstone {}
class JsonPath {
  constructor() {
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.v3v_1 = Array(8);
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = new Int32Array(8);
    while (tmp_1 < 8) {
      tmp_2[tmp_1] = -1;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.w3v_1 = tmp_2;
    this.x3v_1 = -1;
  }
  y3v(sd) {
    this.x3v_1 = this.x3v_1 + 1 | 0;
    var depth = this.x3v_1;
    if (depth === this.v3v_1.length) {
      resize(this);
    }
    this.v3v_1[depth] = sd;
  }
  z3v(index) {
    this.w3v_1[this.x3v_1] = index;
  }
  a3w(key) {
    var tmp;
    if (!(this.w3v_1[this.x3v_1] === -2)) {
      this.x3v_1 = this.x3v_1 + 1 | 0;
      tmp = this.x3v_1 === this.v3v_1.length;
    } else {
      tmp = false;
    }
    if (tmp) {
      resize(this);
    }
    this.v3v_1[this.x3v_1] = key;
    this.w3v_1[this.x3v_1] = -2;
  }
  b3w() {
    if (this.w3v_1[this.x3v_1] === -2) {
      this.v3v_1[this.x3v_1] = Tombstone_instance;
    }
  }
  c3w() {
    var depth = this.x3v_1;
    if (this.w3v_1[depth] === -2) {
      this.w3v_1[depth] = -1;
      this.x3v_1 = this.x3v_1 - 1 | 0;
    }
    if (!(this.x3v_1 === -1)) {
      this.x3v_1 = this.x3v_1 - 1 | 0;
    }
  }
  d3w() {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder.m1();
    this_0.n1('$');
    // Inline function 'kotlin.repeat' call
    var times = this.x3v_1 + 1 | 0;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = this.v3v_1[index];
        if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
          if (equals(element.by(), LIST_getInstance())) {
            if (!(this.w3v_1[index] === -1)) {
              this_0.n1('[');
              this_0.eh(this.w3v_1[index]);
              this_0.n1(']');
            }
          } else {
            var idx = this.w3v_1[index];
            if (idx >= 0) {
              this_0.n1('.');
              this_0.n1(element.fy(idx));
            }
          }
        } else {
          if (!(element === Tombstone_instance)) {
            this_0.n1('[');
            this_0.n1("'");
            this_0.t1(element);
            this_0.n1("'");
            this_0.n1(']');
          }
        }
      }
       while (inductionVariable < times);
    return this_0.toString();
  }
  toString() {
    return this.d3w();
  }
}
class JsonSerializersModuleValidator {
  constructor(configuration) {
    this.e3w_1 = configuration.q3r_1;
    this.f3w_1 = configuration.p3r_1;
    this.g3w_1 = !configuration.x3r_1.equals(ClassDiscriminatorMode_NONE_getInstance());
  }
  g1h(kClass, provider) {
  }
  j1h(baseClass, actualClass, actualSerializer) {
    var descriptor = actualSerializer.mv();
    checkKind(this, descriptor, actualClass);
    if (!this.f3w_1 && this.g3w_1) {
      checkDiscriminatorCollisions(this, descriptor, actualClass);
    }
  }
  k1h(baseClass, defaultSerializerProvider) {
  }
  l1h(baseClass, defaultDeserializerProvider) {
  }
}
class JsonTreeReader$readDeepRecursive$slambda {
  constructor(this$0) {
    this.v3w_1 = this$0;
  }
  d3x($this$DeepRecursiveFunction, it, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8.bind(VOID, this, $this$DeepRecursiveFunction, it), $completion);
  }
  zd(p1, p2, $completion) {
    var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
    return this.d3x(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $completion);
  }
}
class JsonTreeReader {
  constructor(configuration, lexer) {
    this.r3w_1 = lexer;
    this.s3w_1 = configuration.j3r_1;
    this.t3w_1 = configuration.v3r_1;
    this.u3w_1 = 0;
  }
  b3x() {
    var token = this.r3w_1.w3w();
    var tmp;
    if (token === 1) {
      tmp = readValue(this, true);
    } else if (token === 0) {
      tmp = readValue(this, false);
    } else if (token === 6) {
      var tmp_0;
      this.u3w_1 = this.u3w_1 + 1 | 0;
      if (this.u3w_1 === 200) {
        tmp_0 = readDeepRecursive(this);
      } else {
        tmp_0 = readObject(this);
      }
      var result = tmp_0;
      this.u3w_1 = this.u3w_1 - 1 | 0;
      tmp = result;
    } else if (token === 8) {
      tmp = readArray(this);
    } else {
      this.r3w_1.j3v('Cannot read Json element because of unexpected ' + tokenDescription(token));
    }
    return tmp;
  }
}
class Key {}
class DescriptorSchemaCache {
  constructor() {
    this.r3v_1 = createMapForCache(16);
  }
  f3x(descriptor, key, value) {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.r3v_1;
    var value_0 = this_0.h4(descriptor);
    var tmp;
    if (value_0 == null) {
      var answer = createMapForCache(2);
      this_0.k4(descriptor, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    var tmp0 = tmp;
    var tmp2 = key instanceof Key ? key : THROW_CCE();
    // Inline function 'kotlin.collections.set' call
    var value_1 = !(value == null) ? value : THROW_CCE();
    tmp0.k4(tmp2, value_1);
  }
  s3v(descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.g3x(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    var value = defaultValue();
    this.f3x(descriptor, key, value);
    return value;
  }
  g3x(descriptor, key) {
    var tmp0_safe_receiver = this.r3v_1.h4(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = tmp0_safe_receiver.h4(key instanceof Key ? key : THROW_CCE());
    }
    var tmp_0 = tmp;
    return !(tmp_0 == null) ? tmp_0 : null;
  }
}
class DiscriminatorHolder {
  constructor(discriminatorToSkip) {
    this.h3x_1 = discriminatorToSkip;
  }
}
class StreamingJsonDecoder extends AbstractDecoder {
  constructor(json, mode, lexer, descriptor, discriminatorHolder) {
    super();
    this.b3q_1 = json;
    this.c3q_1 = mode;
    this.d3q_1 = lexer;
    this.e3q_1 = this.b3q_1.j10();
    this.f3q_1 = -1;
    this.g3q_1 = discriminatorHolder;
    this.h3q_1 = this.b3q_1.u3p_1;
    this.i3q_1 = this.h3q_1.m3r_1 ? null : new JsonElementMarker(descriptor);
  }
  c3s() {
    return this.b3q_1;
  }
  j10() {
    return this.e3q_1;
  }
  a3s() {
    return (new JsonTreeReader(this.b3q_1.u3p_1, this.d3q_1)).b3x();
  }
  tz(deserializer) {
    try {
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.b3q_1.u3p_1.p3r_1;
      }
      if (tmp) {
        return deserializer.ov(this);
      }
      var discriminator = classDiscriminator(deserializer.mv(), this.b3q_1);
      var tmp0_elvis_lhs = this.d3q_1.q3x(discriminator, this.h3q_1.j3r_1);
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
            tmp_1 = this.c3s().u3p_1.p3r_1;
          }
          if (tmp_1) {
            tmp$ret$0 = tmp2.ov(this);
            break $l$block;
          }
          var discriminator_0 = classDiscriminator(tmp2.mv(), this.c3s());
          var tmp0 = this.a3s();
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName = tmp2.mv().nw();
          if (!(tmp0 instanceof JsonObject)) {
            var tmp_2 = getKClass(JsonObject).k1();
            var tmp_3 = getKClassFromExpression(tmp0).k1();
            var tmp$ret$1 = this.d3q_1.k3q_1.d3w();
            throw JsonDecodingException_0(-1, 'Expected ' + tmp_2 + ', but had ' + tmp_3 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$1, toString(tmp0));
          }
          var jsonTree = tmp0;
          var tmp0_safe_receiver = jsonTree.i2b(discriminator_0);
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
          tmp$ret$0 = readPolymorphicJson(this.c3s(), discriminator_0, jsonTree, actualSerializer);
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
          this.d3q_1.j3v(message, VOID, hint);
        } else {
          throw $p;
        }
        tmp_7 = tmp_8;
      }
      var tmp_9 = tmp_7;
      var actualSerializer_0 = isInterface(tmp_9, DeserializationStrategy) ? tmp_9 : THROW_CCE();
      this.g3q_1 = new DiscriminatorHolder(discriminator);
      return actualSerializer_0.ov(this);
    } catch ($p) {
      if ($p instanceof MissingFieldException) {
        var e = $p;
        if (contains_0(ensureNotNull(e.message), 'at path'))
          throw e;
        throw MissingFieldException.mx(e.kx_1, plus(e.message, ' at path: ') + this.d3q_1.k3q_1.d3w(), e);
      } else {
        throw $p;
      }
    }
  }
  uz(descriptor) {
    var newMode = switchMode(this.b3q_1, descriptor);
    this.d3q_1.k3q_1.y3v(descriptor);
    this.d3q_1.i3x(newMode.t3x_1);
    checkLeadingComma(this);
    var tmp;
    switch (newMode.x1_1) {
      case 1:
      case 2:
      case 3:
        tmp = new StreamingJsonDecoder(this.b3q_1, newMode, this.d3q_1, descriptor, this.g3q_1);
        break;
      default:
        var tmp_0;
        if (this.c3q_1.equals(newMode) && this.b3q_1.u3p_1.m3r_1) {
          tmp_0 = this;
        } else {
          tmp_0 = new StreamingJsonDecoder(this.b3q_1, newMode, this.d3q_1, descriptor, this.g3q_1);
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  }
  vz(descriptor) {
    if (descriptor.dy() === 0 && ignoreUnknownKeys(descriptor, this.b3q_1)) {
      skipLeftoverElements(this, descriptor);
    }
    if (this.d3q_1.j3x() && !this.b3q_1.u3p_1.v3r_1) {
      invalidTrailingComma(this.d3q_1, '');
    }
    this.d3q_1.i3x(this.c3q_1.u3x_1);
    this.d3q_1.k3q_1.c3w();
  }
  fz() {
    var tmp;
    var tmp0_safe_receiver = this.i3q_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.z3u_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = !this.d3q_1.v3x();
    } else {
      tmp = false;
    }
    return tmp;
  }
  gz() {
    return null;
  }
  g10(descriptor, index, deserializer, previousValue) {
    var isMapKey = this.c3q_1.equals(WriteMode_MAP_getInstance()) && (index & 1) === 0;
    if (isMapKey) {
      this.d3q_1.k3q_1.b3w();
    }
    var value = super.g10(descriptor, index, deserializer, previousValue);
    if (isMapKey) {
      this.d3q_1.k3q_1.a3w(value);
    }
    return value;
  }
  l10(descriptor) {
    var index;
    switch (this.c3q_1.x1_1) {
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
    if (!this.c3q_1.equals(WriteMode_MAP_getInstance())) {
      this.d3q_1.k3q_1.z3v(index);
    }
    return index;
  }
  hz() {
    return this.d3q_1.w3x();
  }
  iz() {
    var value = this.d3q_1.x3x();
    if (!(value === fromInt(convertToByte(value)))) {
      this.d3q_1.j3v("Failed to parse byte for input '" + value.toString() + "'");
    }
    return convertToByte(value);
  }
  jz() {
    var value = this.d3q_1.x3x();
    if (!(value === fromInt(convertToShort(value)))) {
      this.d3q_1.j3v("Failed to parse short for input '" + value.toString() + "'");
    }
    return convertToShort(value);
  }
  kz() {
    var value = this.d3q_1.x3x();
    if (!(value === fromInt(convertToInt(value)))) {
      this.d3q_1.j3v("Failed to parse int for input '" + value.toString() + "'");
    }
    return convertToInt(value);
  }
  lz() {
    return this.d3q_1.x3x();
  }
  mz() {
    var tmp0 = this.d3q_1;
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.a3x();
      try {
        // Inline function 'kotlin.text.toFloat' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$4 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.j3v("Failed to parse type '" + 'float' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$4;
    var specialFp = this.b3q_1.u3p_1.r3r_1;
    if (specialFp || isFinite(result))
      return result;
    throwInvalidFloatingPointDecoded(this.d3q_1, result);
  }
  nz() {
    var tmp0 = this.d3q_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.a3x();
      try {
        tmp$ret$1 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.j3v("Failed to parse type '" + 'double' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.b3q_1.u3p_1.r3r_1;
    if (specialFp || isFinite_0(result))
      return result;
    throwInvalidFloatingPointDecoded(this.d3q_1, result);
  }
  oz() {
    var string = this.d3q_1.a3x();
    if (!(string.length === 1)) {
      this.d3q_1.j3v("Expected single char, but got '" + string + "'");
    }
    return charCodeAt(string, 0);
  }
  pz() {
    var tmp;
    if (this.h3q_1.j3r_1) {
      tmp = this.d3q_1.p3x();
    } else {
      tmp = this.d3q_1.z3w();
    }
    return tmp;
  }
  rz(descriptor) {
    return get_isUnsignedNumber(descriptor) ? new JsonDecoderForUnsignedTypes(this.d3q_1, this.b3q_1) : super.rz(descriptor);
  }
  qz(enumDescriptor) {
    return getJsonNameIndexOrThrow(enumDescriptor, this.b3q_1, this.pz(), ' at path ' + this.d3q_1.k3q_1.d3w());
  }
}
class JsonDecoderForUnsignedTypes extends AbstractDecoder {
  constructor(lexer, json) {
    super();
    this.y3x_1 = lexer;
    this.z3x_1 = json.j10();
  }
  j10() {
    return this.z3x_1;
  }
  l10(descriptor) {
    var message = 'unsupported';
    throw IllegalStateException.o(toString(message));
  }
  kz() {
    var tmp0 = this.y3x_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.a3x();
      try {
        // Inline function 'kotlin.UInt.toInt' call
        var this_0 = toUInt(input);
        tmp$ret$2 = _UInt___get_data__impl__f0vqqw(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.j3v("Failed to parse type '" + 'UInt' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  }
  lz() {
    var tmp0 = this.y3x_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.a3x();
      try {
        // Inline function 'kotlin.ULong.toLong' call
        var this_0 = toULong(input);
        tmp$ret$2 = _ULong___get_data__impl__fggpzb(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.j3v("Failed to parse type '" + 'ULong' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  }
  iz() {
    var tmp0 = this.y3x_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.a3x();
      try {
        // Inline function 'kotlin.UByte.toByte' call
        var this_0 = toUByte(input);
        tmp$ret$2 = _UByte___get_data__impl__jof9qr(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.j3v("Failed to parse type '" + 'UByte' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  }
  jz() {
    var tmp0 = this.y3x_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.a3x();
      try {
        // Inline function 'kotlin.UShort.toShort' call
        var this_0 = toUShort(input);
        tmp$ret$2 = _UShort___get_data__impl__g0245(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.j3v("Failed to parse type '" + 'UShort' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  }
}
class StreamingJsonEncoder extends AbstractEncoder {
  static a3y(composer, json, mode, modeReuseCache) {
    var $this = this.n10();
    $this.h3w_1 = composer;
    $this.i3w_1 = json;
    $this.j3w_1 = mode;
    $this.k3w_1 = modeReuseCache;
    $this.l3w_1 = $this.i3w_1.j10();
    $this.m3w_1 = $this.i3w_1.u3p_1;
    $this.n3w_1 = false;
    $this.o3w_1 = null;
    $this.p3w_1 = null;
    var i = $this.j3w_1.x1_1;
    if (!($this.k3w_1 == null)) {
      if (!($this.k3w_1[i] === null) || !($this.k3w_1[i] === $this)) {
        $this.k3w_1[i] = $this;
      }
    }
    return $this;
  }
  c3s() {
    return this.i3w_1;
  }
  static q3w(output, json, mode, modeReuseCache) {
    return this.a3y(Composer_0(output, json), json, mode, modeReuseCache);
  }
  j10() {
    return this.l3w_1;
  }
  p3t(element) {
    var tmp;
    if (!(this.o3w_1 == null)) {
      tmp = !(element instanceof JsonObject);
    } else {
      tmp = false;
    }
    if (tmp) {
      throwJsonElementPolymorphicException(this.p3w_1, element);
    }
    this.n11(JsonElementSerializer_getInstance(), element);
  }
  s11(descriptor, index) {
    return this.m3w_1.h3r_1;
  }
  n11(serializer, value) {
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
      if (this.c3s().u3p_1.p3r_1) {
        serializer.nv(this, value);
        break $l$block;
      }
      var isPolymorphicSerializer = serializer instanceof AbstractPolymorphicSerializer;
      var tmp;
      if (isPolymorphicSerializer) {
        tmp = !this.c3s().u3p_1.x3r_1.equals(ClassDiscriminatorMode_NONE_getInstance());
      } else {
        var tmp_0;
        switch (this.c3s().u3p_1.x3r_1.x1_1) {
          case 0:
          case 2:
            tmp_0 = false;
            break;
          case 1:
            // Inline function 'kotlin.let' call

            var it = serializer.mv().by();
            tmp_0 = equals(it, CLASS_getInstance()) || equals(it, OBJECT_getInstance());
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }
        tmp = tmp_0;
      }
      var needDiscriminator = tmp;
      var baseClassDiscriminator = needDiscriminator ? classDiscriminator(serializer.mv(), this.c3s()) : null;
      var tmp_1;
      if (isPolymorphicSerializer) {
        var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
        $l$block_0: {
          // Inline function 'kotlin.requireNotNull' call
          if (value == null) {
            var message = 'Value for serializer ' + toString(serializer.mv()) + ' should always be non-null. Please report issue to the kotlinx.serialization tracker.';
            throw IllegalArgumentException.k2(toString(message));
          } else {
            break $l$block_0;
          }
        }
        var actual = findPolymorphicSerializer_0(casted, this, value);
        if (!(baseClassDiscriminator == null)) {
          access$validateIfSealed$tPolymorphicKt(serializer, actual, baseClassDiscriminator);
          checkKind_0(actual.mv().by());
        }
        tmp_1 = isInterface(actual, SerializationStrategy) ? actual : THROW_CCE();
      } else {
        tmp_1 = serializer;
      }
      var actualSerializer = tmp_1;
      if (!(baseClassDiscriminator == null)) {
        var serialName = actualSerializer.mv().nw();
        this.o3w_1 = baseClassDiscriminator;
        this.p3w_1 = serialName;
      }
      actualSerializer.nv(this, value);
    }
  }
  uz(descriptor) {
    var newMode = switchMode(this.i3w_1, descriptor);
    if (!(newMode.t3x_1 === _Char___init__impl__6a9atx(0))) {
      this.h3w_1.a3u(newMode.t3x_1);
      this.h3w_1.v3t();
    }
    var discriminator = this.o3w_1;
    if (!(discriminator == null)) {
      var tmp0_elvis_lhs = this.p3w_1;
      encodeTypeInfo(this, discriminator, tmp0_elvis_lhs == null ? descriptor.nw() : tmp0_elvis_lhs);
      this.o3w_1 = null;
      this.p3w_1 = null;
    }
    if (this.j3w_1.equals(newMode)) {
      return this;
    }
    var tmp1_safe_receiver = this.k3w_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver[newMode.x1_1];
    return tmp2_elvis_lhs == null ? StreamingJsonEncoder.a3y(this.h3w_1, this.i3w_1, newMode, this.k3w_1) : tmp2_elvis_lhs;
  }
  vz(descriptor) {
    if (!(this.j3w_1.u3x_1 === _Char___init__impl__6a9atx(0))) {
      this.h3w_1.w3t();
      this.h3w_1.y3t();
      this.h3w_1.a3u(this.j3w_1.u3x_1);
    }
  }
  o10(descriptor, index) {
    switch (this.j3w_1.x1_1) {
      case 1:
        if (!this.h3w_1.u3t_1) {
          this.h3w_1.a3u(_Char___init__impl__6a9atx(44));
        }

        this.h3w_1.x3t();
        break;
      case 2:
        if (!this.h3w_1.u3t_1) {
          var tmp = this;
          var tmp_0;
          if ((index % 2 | 0) === 0) {
            this.h3w_1.a3u(_Char___init__impl__6a9atx(44));
            this.h3w_1.x3t();
            tmp_0 = true;
          } else {
            this.h3w_1.a3u(_Char___init__impl__6a9atx(58));
            this.h3w_1.z3t();
            tmp_0 = false;
          }
          tmp.n3w_1 = tmp_0;
        } else {
          this.n3w_1 = true;
          this.h3w_1.x3t();
        }

        break;
      case 3:
        if (index === 0)
          this.n3w_1 = true;
        if (index === 1) {
          this.h3w_1.a3u(_Char___init__impl__6a9atx(44));
          this.h3w_1.z3t();
          this.n3w_1 = false;
        }

        break;
      default:
        if (!this.h3w_1.u3t_1) {
          this.h3w_1.a3u(_Char___init__impl__6a9atx(44));
        }

        this.h3w_1.x3t();
        this.z10(getJsonElementName(descriptor, this.i3w_1, index));
        this.h3w_1.a3u(_Char___init__impl__6a9atx(58));
        this.h3w_1.z3t();
        break;
    }
    return true;
  }
  o11(descriptor, index, serializer, value) {
    if (!(value == null) || this.m3w_1.m3r_1) {
      super.o11(descriptor, index, serializer, value);
    }
  }
  b11(descriptor) {
    var tmp;
    if (get_isUnsignedNumber(descriptor)) {
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
      var tmp_0;
      var tmp_1 = this.h3w_1;
      if (tmp_1 instanceof ComposerForUnsignedNumbers) {
        tmp_0 = this.h3w_1;
      } else {
        var tmp0 = this.h3w_1.t3t_1;
        var p1 = this.n3w_1;
        tmp_0 = new ComposerForUnsignedNumbers(tmp0, p1);
      }
      var tmp$ret$1 = tmp_0;
      tmp = StreamingJsonEncoder.a3y(tmp$ret$1, this.i3w_1, this.j3w_1, null);
    } else if (get_isUnquotedLiteral(descriptor)) {
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
      var tmp_2;
      var tmp_3 = this.h3w_1;
      if (tmp_3 instanceof ComposerForUnquotedLiterals) {
        tmp_2 = this.h3w_1;
      } else {
        var tmp0_0 = this.h3w_1.t3t_1;
        var p1_0 = this.n3w_1;
        tmp_2 = new ComposerForUnquotedLiterals(tmp0_0, p1_0);
      }
      var tmp$ret$3 = tmp_2;
      tmp = StreamingJsonEncoder.a3y(tmp$ret$3, this.i3w_1, this.j3w_1, null);
    } else if (!(this.o3w_1 == null)) {
      // Inline function 'kotlin.apply' call
      this.p3w_1 = descriptor.nw();
      tmp = this;
    } else {
      tmp = super.b11(descriptor);
    }
    return tmp;
  }
  q10() {
    this.h3w_1.c3u('null');
  }
  r10(value) {
    if (this.n3w_1) {
      this.z10(value.toString());
    } else {
      this.h3w_1.l3u(value);
    }
  }
  s10(value) {
    if (this.n3w_1) {
      this.z10(value.toString());
    } else {
      this.h3w_1.g3u(value);
    }
  }
  t10(value) {
    if (this.n3w_1) {
      this.z10(value.toString());
    } else {
      this.h3w_1.i3u(value);
    }
  }
  u10(value) {
    if (this.n3w_1) {
      this.z10(value.toString());
    } else {
      this.h3w_1.j3u(value);
    }
  }
  v10(value) {
    if (this.n3w_1) {
      this.z10(value.toString());
    } else {
      this.h3w_1.k3u(value);
    }
  }
  w10(value) {
    if (this.n3w_1) {
      this.z10(value.toString());
    } else {
      this.h3w_1.e3u(value);
    }
    if (!this.m3w_1.r3r_1 && !isFinite(value)) {
      throw InvalidFloatingPointEncoded(value, toString(this.h3w_1.t3t_1));
    }
  }
  x10(value) {
    if (this.n3w_1) {
      this.z10(value.toString());
    } else {
      this.h3w_1.f3u(value);
    }
    if (!this.m3w_1.r3r_1 && !isFinite_0(value)) {
      throw InvalidFloatingPointEncoded(value, toString(this.h3w_1.t3t_1));
    }
  }
  y10(value) {
    this.z10(toString_1(value));
  }
  z10(value) {
    return this.h3w_1.m3u(value);
  }
  a11(enumDescriptor, index) {
    this.z10(enumDescriptor.fy(index));
  }
}
class AbstractJsonTreeDecoder extends NamedValueDecoder {
  constructor(json, value, polymorphicDiscriminator) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    super();
    this.d3y_1 = json;
    this.e3y_1 = value;
    this.f3y_1 = polymorphicDiscriminator;
    this.g3y_1 = this.c3s().u3p_1;
  }
  c3s() {
    return this.d3y_1;
  }
  b3() {
    return this.e3y_1;
  }
  j10() {
    return this.c3s().j10();
  }
  i3y() {
    var tmp0_safe_receiver = this.e1e();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = this.j3y(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? this.b3() : tmp1_elvis_lhs;
  }
  h3y(currentTag) {
    return this.g1e() + ('.' + currentTag);
  }
  a3s() {
    return this.i3y();
  }
  tz(deserializer) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.decodeSerializableValuePolymorphic' call
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.c3s().u3p_1.p3r_1;
      }
      if (tmp) {
        tmp$ret$0 = deserializer.ov(this);
        break $l$block;
      }
      var discriminator = classDiscriminator(deserializer.mv(), this.c3s());
      var tmp0 = this.a3s();
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = deserializer.mv().nw();
      if (!(tmp0 instanceof JsonObject)) {
        var tmp_0 = getKClass(JsonObject).k1();
        var tmp_1 = getKClassFromExpression(tmp0).k1();
        var tmp$ret$1 = this.g1e();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$1, toString(tmp0));
      }
      var jsonTree = tmp0;
      var tmp0_safe_receiver = jsonTree.i2b(discriminator);
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
      tmp$ret$0 = readPolymorphicJson(this.c3s(), discriminator, jsonTree, actualSerializer);
    }
    return tmp$ret$0;
  }
  f1e(parentName, childName) {
    return childName;
  }
  uz(descriptor) {
    var currentObject = this.i3y();
    var tmp0_subject = descriptor.by();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp_1 = this.c3s();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = descriptor.nw();
      if (!(currentObject instanceof JsonArray)) {
        var tmp_2 = getKClass(JsonArray).k1();
        var tmp_3 = getKClassFromExpression(currentObject).k1();
        var tmp$ret$0 = this.g1e();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_2 + ', but had ' + tmp_3 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(currentObject));
      }
      tmp = new JsonTreeListDecoder(tmp_1, currentObject);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var this_0 = this.c3s();
        var keyDescriptor = carrierDescriptor(descriptor.iy(0), this_0.j10());
        var keyKind = keyDescriptor.by();
        var tmp_4;
        var tmp_5;
        if (keyKind instanceof PrimitiveKind) {
          tmp_5 = true;
        } else {
          tmp_5 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_5) {
          var tmp_6 = this.c3s();
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName_0 = descriptor.nw();
          if (!(currentObject instanceof JsonObject)) {
            var tmp_7 = getKClass(JsonObject).k1();
            var tmp_8 = getKClassFromExpression(currentObject).k1();
            var tmp$ret$3 = this.g1e();
            throw JsonDecodingException_0(-1, 'Expected ' + tmp_7 + ', but had ' + tmp_8 + ' as the serialized body of ' + serialName_0 + ' at element: ' + tmp$ret$3, toString(currentObject));
          }
          tmp_4 = new JsonTreeMapDecoder(tmp_6, currentObject);
        } else {
          if (this_0.u3p_1.k3r_1) {
            var tmp_9 = this.c3s();
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
            // Inline function 'kotlinx.serialization.json.internal.cast' call
            var serialName_1 = descriptor.nw();
            if (!(currentObject instanceof JsonArray)) {
              var tmp_10 = getKClass(JsonArray).k1();
              var tmp_11 = getKClassFromExpression(currentObject).k1();
              var tmp$ret$7 = this.g1e();
              throw JsonDecodingException_0(-1, 'Expected ' + tmp_10 + ', but had ' + tmp_11 + ' as the serialized body of ' + serialName_1 + ' at element: ' + tmp$ret$7, toString(currentObject));
            }
            tmp_4 = new JsonTreeListDecoder(tmp_9, currentObject);
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp = tmp_4;
      } else {
        var tmp_12 = this.c3s();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        var serialName_2 = descriptor.nw();
        if (!(currentObject instanceof JsonObject)) {
          var tmp_13 = getKClass(JsonObject).k1();
          var tmp_14 = getKClassFromExpression(currentObject).k1();
          var tmp$ret$12 = this.g1e();
          throw JsonDecodingException_0(-1, 'Expected ' + tmp_13 + ', but had ' + tmp_14 + ' as the serialized body of ' + serialName_2 + ' at element: ' + tmp$ret$12, toString(currentObject));
        }
        tmp = new JsonTreeDecoder(tmp_12, currentObject, this.f3y_1);
      }
    }
    return tmp;
  }
  vz(descriptor) {
  }
  fz() {
    var tmp = this.i3y();
    return !(tmp instanceof JsonNull);
  }
  k3y(tag, enumDescriptor) {
    var tmp = this.c3s();
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
    var tmp2 = this.j3y(tag);
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var serialName = enumDescriptor.nw();
    if (!(tmp2 instanceof JsonPrimitive)) {
      var tmp_0 = getKClass(JsonPrimitive).k1();
      var tmp_1 = getKClassFromExpression(tmp2).k1();
      var tmp$ret$0 = this.h3y(tag);
      throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(tmp2));
    }
    return getJsonNameIndexOrThrow(enumDescriptor, tmp, tmp2.f37());
  }
  s1e(tag, enumDescriptor) {
    return this.k3y((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), enumDescriptor);
  }
  l3y(tag) {
    return !(this.j3y(tag) === JsonNull_getInstance());
  }
  i1e(tag) {
    return this.l3y((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  m3y(tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.j3y(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).k1();
        var tmp_0 = getKClassFromExpression(value).k1();
        var tmp$ret$0 = this.h3y(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'boolean' + ' at element: ' + tmp$ret$0, toString(value));
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
        tmp$ret$4 = tmp_1;
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
    return tmp$ret$4;
  }
  j1e(tag) {
    return this.m3y((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  n3y(tag) {
    var tmp$ret$5;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.j3y(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).k1();
        var tmp_0 = getKClassFromExpression(value).k1();
        var tmp$ret$0 = this.h3y(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'byte' + ' at element: ' + tmp$ret$0, toString(value));
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
        tmp$ret$5 = tmp_2;
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
    return tmp$ret$5;
  }
  k1e(tag) {
    return this.n3y((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  o3y(tag) {
    var tmp$ret$5;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.j3y(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).k1();
        var tmp_0 = getKClassFromExpression(value).k1();
        var tmp$ret$0 = this.h3y(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'short' + ' at element: ' + tmp$ret$0, toString(value));
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
        tmp$ret$5 = tmp_2;
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
    return tmp$ret$5;
  }
  l1e(tag) {
    return this.o3y((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  p3y(tag) {
    var tmp$ret$5;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.j3y(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).k1();
        var tmp_0 = getKClassFromExpression(value).k1();
        var tmp$ret$0 = this.h3y(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'int' + ' at element: ' + tmp$ret$0, toString(value));
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
        tmp$ret$5 = tmp_2;
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
    return tmp$ret$5;
  }
  m1e(tag) {
    return this.p3y((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  q3y(tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.j3y(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).k1();
        var tmp_0 = getKClassFromExpression(value).k1();
        var tmp$ret$0 = this.h3y(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'long' + ' at element: ' + tmp$ret$0, toString(value));
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
        tmp$ret$4 = tmp_1;
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
    return tmp$ret$4;
  }
  n1e(tag) {
    return this.q3y((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  r3y(tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.j3y(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).k1();
        var tmp_0 = getKClassFromExpression(value).k1();
        var tmp$ret$0 = this.h3y(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'float' + ' at element: ' + tmp$ret$0, toString(value));
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
        tmp$ret$4 = tmp_1;
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
    var result = tmp$ret$4;
    var specialFp = this.c3s().u3p_1.r3r_1;
    if (specialFp || isFinite(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(this.i3y()));
  }
  o1e(tag) {
    return this.r3y((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  s3y(tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.j3y(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).k1();
        var tmp_0 = getKClassFromExpression(value).k1();
        var tmp$ret$0 = this.h3y(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'double' + ' at element: ' + tmp$ret$0, toString(value));
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
        tmp$ret$4 = tmp_1;
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
    var result = tmp$ret$4;
    var specialFp = this.c3s().u3p_1.r3r_1;
    if (specialFp || isFinite_0(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(this.i3y()));
  }
  p1e(tag) {
    return this.s3y((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  t3y(tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.j3y(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).k1();
        var tmp_0 = getKClassFromExpression(value).k1();
        var tmp$ret$0 = this.h3y(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'char' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = new Char(single(literal.f37()));
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'char', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$4 = tmp_1.l3_1;
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
    return tmp$ret$4;
  }
  q1e(tag) {
    return this.t3y((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  u3y(tag) {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = this.j3y(tag);
    if (!(value instanceof JsonPrimitive)) {
      var tmp = getKClass(JsonPrimitive).k1();
      var tmp_0 = getKClassFromExpression(value).k1();
      var tmp$ret$0 = this.h3y(tag);
      throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'string' + ' at element: ' + tmp$ret$0, toString(value));
    }
    var value_0 = value;
    if (!(value_0 instanceof JsonLiteral))
      throw JsonDecodingException_0(-1, "Expected string value for a non-null key '" + tag + "', got null literal instead at element: " + this.h3y(tag), toString(this.i3y()));
    if (!value_0.o3s_1 && !this.c3s().u3p_1.j3r_1) {
      throw JsonDecodingException_0(-1, "String literal for key '" + tag + "' should be quoted at element: " + this.h3y(tag) + ".\nUse 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.", toString(this.i3y()));
    }
    return value_0.q3s_1;
  }
  r1e(tag) {
    return this.u3y((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  v3y(tag, inlineDescriptor) {
    var tmp;
    if (get_isUnsignedNumber(inlineDescriptor)) {
      var tmp_0 = this.c3s();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      var tmp2 = this.j3y(tag);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = inlineDescriptor.nw();
      if (!(tmp2 instanceof JsonPrimitive)) {
        var tmp_1 = getKClass(JsonPrimitive).k1();
        var tmp_2 = getKClassFromExpression(tmp2).k1();
        var tmp$ret$0 = this.h3y(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_1 + ', but had ' + tmp_2 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(tmp2));
      }
      var lexer = StringJsonLexer_0(tmp_0, tmp2.f37());
      tmp = new JsonDecoderForUnsignedTypes(lexer, this.c3s());
    } else {
      tmp = super.t1e(tag, inlineDescriptor);
    }
    return tmp;
  }
  t1e(tag, inlineDescriptor) {
    return this.v3y((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
  }
  rz(descriptor) {
    return !(this.e1e() == null) ? super.rz(descriptor) : (new JsonPrimitiveDecoder(this.c3s(), this.b3(), this.f3y_1)).rz(descriptor);
  }
}
class JsonTreeDecoder extends AbstractJsonTreeDecoder {
  constructor(json, value, polymorphicDiscriminator, polyDescriptor) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    polyDescriptor = polyDescriptor === VOID ? null : polyDescriptor;
    super(json, value, polymorphicDiscriminator);
    this.c3z_1 = value;
    this.d3z_1 = polyDescriptor;
    this.e3z_1 = 0;
    this.f3z_1 = false;
  }
  b3() {
    return this.c3z_1;
  }
  l10(descriptor) {
    $l$loop: while (this.e3z_1 < descriptor.dy()) {
      var _unary__edvuaz = this.e3z_1;
      this.e3z_1 = _unary__edvuaz + 1 | 0;
      var name = this.z1d(descriptor, _unary__edvuaz);
      var index = this.e3z_1 - 1 | 0;
      this.f3z_1 = false;
      var tmp;
      // Inline function 'kotlin.collections.contains' call
      // Inline function 'kotlin.collections.containsKey' call
      var this_0 = this.b3();
      if ((isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).f4(name)) {
        tmp = true;
      } else {
        tmp = setForceNull(this, descriptor, index);
      }
      if (tmp) {
        if (!this.g3y_1.o3r_1)
          return index;
        var tmp0 = this.c3s();
        var tmp$ret$3;
        $l$block_2: {
          // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
          var isOptional = descriptor.jy(index);
          var elementDescriptor = descriptor.iy(index);
          var tmp_0;
          if (isOptional && !elementDescriptor.ux()) {
            var tmp_1 = this.g3z(name);
            tmp_0 = tmp_1 instanceof JsonNull;
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            tmp$ret$3 = true;
            break $l$block_2;
          }
          if (equals(elementDescriptor.by(), ENUM_getInstance())) {
            var tmp_2;
            if (elementDescriptor.ux()) {
              var tmp_3 = this.g3z(name);
              tmp_2 = tmp_3 instanceof JsonNull;
            } else {
              tmp_2 = false;
            }
            if (tmp_2) {
              tmp$ret$3 = false;
              break $l$block_2;
            }
            var tmp_4 = this.g3z(name);
            var tmp0_safe_receiver = tmp_4 instanceof JsonPrimitive ? tmp_4 : null;
            var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : get_contentOrNull(tmp0_safe_receiver);
            var tmp_5;
            if (tmp0_elvis_lhs == null) {
              tmp$ret$3 = false;
              break $l$block_2;
            } else {
              tmp_5 = tmp0_elvis_lhs;
            }
            var enumValue = tmp_5;
            var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
            var coerceToNull = !tmp0.u3p_1.m3r_1 && elementDescriptor.ux();
            if (enumIndex === -3 && (isOptional || coerceToNull)) {
              if (setForceNull(this, descriptor, index))
                return index;
              tmp$ret$3 = true;
              break $l$block_2;
            }
          }
          tmp$ret$3 = false;
        }
        if (tmp$ret$3)
          continue $l$loop;
        return index;
      }
    }
    return -1;
  }
  fz() {
    return !this.f3z_1 && super.fz();
  }
  a1e(descriptor, index) {
    var strategy = namingStrategy(descriptor, this.c3s());
    var baseName = descriptor.fy(index);
    if (strategy == null) {
      if (!this.g3y_1.s3r_1)
        return baseName;
      if (this.b3().i4().y3(baseName))
        return baseName;
    }
    var deserializationNamesMap_0 = deserializationNamesMap(this.c3s(), descriptor);
    // Inline function 'kotlin.collections.find' call
    var tmp0 = this.b3().i4();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.q1();
      while (_iterator__ex2g4s.r1()) {
        var element = _iterator__ex2g4s.s1();
        if (deserializationNamesMap_0.h4(element) === index) {
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
    var fallbackName = strategy == null ? null : strategy.u3v(descriptor, index, baseName);
    return fallbackName == null ? baseName : fallbackName;
  }
  j3y(tag) {
    return getValue(this.b3(), tag);
  }
  g3z(tag) {
    return this.b3().i2b(tag);
  }
  uz(descriptor) {
    if (descriptor === this.d3z_1) {
      var tmp = this.c3s();
      var tmp2 = this.i3y();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = this.d3z_1.nw();
      if (!(tmp2 instanceof JsonObject)) {
        var tmp_0 = getKClass(JsonObject).k1();
        var tmp_1 = getKClassFromExpression(tmp2).k1();
        var tmp$ret$0 = this.g1e();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(tmp2));
      }
      return new JsonTreeDecoder(tmp, tmp2, this.f3y_1, this.d3z_1);
    }
    return super.uz(descriptor);
  }
  vz(descriptor) {
    var tmp;
    if (ignoreUnknownKeys(descriptor, this.c3s())) {
      tmp = true;
    } else {
      var tmp_0 = descriptor.by();
      tmp = tmp_0 instanceof PolymorphicKind;
    }
    if (tmp)
      return Unit_instance;
    var strategy = namingStrategy(descriptor, this.c3s());
    var tmp_1;
    if (strategy == null && !this.g3y_1.s3r_1) {
      tmp_1 = jsonCachedSerialNames(descriptor);
    } else if (!(strategy == null)) {
      tmp_1 = deserializationNamesMap(this.c3s(), descriptor).i4();
    } else {
      var tmp_2 = jsonCachedSerialNames(descriptor);
      var tmp0_safe_receiver = get_schemaCache(this.c3s()).g3x(descriptor, get_JsonDeserializationNamesKey());
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i4();
      var tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
      tmp_1 = plus_0(tmp_2, tmp$ret$0);
    }
    var names = tmp_1;
    var _iterator__ex2g4s = this.b3().i4().q1();
    while (_iterator__ex2g4s.r1()) {
      var key = _iterator__ex2g4s.s1();
      if (!names.y3(key) && !(key === this.f3y_1)) {
        throw JsonDecodingException_1(-1, "Encountered an unknown key '" + key + "' at element: " + this.g1e() + '\n' + "Use 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.\n" + ('JSON input: ' + toString(minify(this.b3().toString()))));
      }
    }
  }
}
class JsonTreeListDecoder extends AbstractJsonTreeDecoder {
  constructor(json, value) {
    super(json, value);
    this.n3z_1 = value;
    this.o3z_1 = this.n3z_1.q2();
    this.p3z_1 = -1;
  }
  b3() {
    return this.n3z_1;
  }
  a1e(descriptor, index) {
    return index.toString();
  }
  j3y(tag) {
    return this.n3z_1.p2(toInt(tag));
  }
  l10(descriptor) {
    while (this.p3z_1 < (this.o3z_1 - 1 | 0)) {
      this.p3z_1 = this.p3z_1 + 1 | 0;
      return this.p3z_1;
    }
    return -1;
  }
}
class JsonPrimitiveDecoder extends AbstractJsonTreeDecoder {
  constructor(json, value, polymorphicDiscriminator) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    super(json, value, polymorphicDiscriminator);
    this.w3z_1 = value;
    this.u1e('primitive');
  }
  b3() {
    return this.w3z_1;
  }
  l10(descriptor) {
    return 0;
  }
  j3y(tag) {
    // Inline function 'kotlin.require' call
    if (!(tag === 'primitive')) {
      var message = "This input can only handle primitives with 'primitive' tag";
      throw IllegalArgumentException.k2(toString(message));
    }
    return this.w3z_1;
  }
}
class JsonTreeMapDecoder extends JsonTreeDecoder {
  constructor(json, value) {
    super(json, value);
    this.h40_1 = value;
    this.i40_1 = toList(this.h40_1.i4());
    this.j40_1 = imul(this.i40_1.q2(), 2);
    this.k40_1 = -1;
  }
  b3() {
    return this.h40_1;
  }
  a1e(descriptor, index) {
    var i = index / 2 | 0;
    return this.i40_1.p2(i);
  }
  l10(descriptor) {
    while (this.k40_1 < (this.j40_1 - 1 | 0)) {
      this.k40_1 = this.k40_1 + 1 | 0;
      return this.k40_1;
    }
    return -1;
  }
  j3y(tag) {
    return (this.k40_1 % 2 | 0) === 0 ? JsonPrimitive_0(tag) : getValue(this.h40_1, tag);
  }
  vz(descriptor) {
  }
}
class AbstractJsonTreeEncoder extends NamedValueEncoder {
  constructor(json, nodeConsumer) {
    super();
    this.m40_1 = json;
    this.n40_1 = nodeConsumer;
    this.o40_1 = this.m40_1.u3p_1;
    this.p40_1 = null;
    this.q40_1 = null;
  }
  c3s() {
    return this.m40_1;
  }
  j10() {
    return this.m40_1.j10();
  }
  a1e(descriptor, index) {
    return getJsonElementName(descriptor, this.m40_1, index);
  }
  p3t(element) {
    var tmp;
    if (!(this.p40_1 == null)) {
      tmp = !(element instanceof JsonObject);
    } else {
      tmp = false;
    }
    if (tmp) {
      throwJsonElementPolymorphicException(this.q40_1, element);
    }
    this.n11(JsonElementSerializer_getInstance(), element);
  }
  s11(descriptor, index) {
    return this.o40_1.h3r_1;
  }
  f1e(parentName, childName) {
    return childName;
  }
  q11() {
  }
  q10() {
    var tmp0_elvis_lhs = this.e1e();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this.n40_1(JsonNull_getInstance());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tag = tmp;
    this.a41(tag);
  }
  a41(tag) {
    return this.y40(tag, JsonNull_getInstance());
  }
  a1f(tag) {
    return this.a41((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  b41(tag, value) {
    return this.y40(tag, JsonPrimitive_1(value));
  }
  b1f(tag, value) {
    return this.b41((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  }
  c41(tag, value) {
    return this.y40(tag, JsonPrimitive_1(value));
  }
  c1f(tag, value) {
    return this.c41((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  }
  d41(tag, value) {
    return this.y40(tag, JsonPrimitive_1(value));
  }
  d1f(tag, value) {
    return this.d41((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  }
  e41(tag, value) {
    return this.y40(tag, JsonPrimitive_1(value));
  }
  e1f(tag, value) {
    return this.e41((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  }
  f41(tag, value) {
    this.y40(tag, JsonPrimitive_1(value));
    if (!this.o40_1.r3r_1 && !isFinite(value)) {
      throw InvalidFloatingPointEncoded_0(value, tag, toString(this.z40()));
    }
  }
  f1f(tag, value) {
    return this.f41((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  }
  n11(serializer, value) {
    if (!(this.e1e() == null) || !get_requiresTopLevelTag(carrierDescriptor(serializer.mv(), this.j10()))) {
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
        if (this.c3s().u3p_1.p3r_1) {
          serializer.nv(this, value);
          break $l$block;
        }
        var isPolymorphicSerializer = serializer instanceof AbstractPolymorphicSerializer;
        var tmp;
        if (isPolymorphicSerializer) {
          tmp = !this.c3s().u3p_1.x3r_1.equals(ClassDiscriminatorMode_NONE_getInstance());
        } else {
          var tmp_0;
          switch (this.c3s().u3p_1.x3r_1.x1_1) {
            case 0:
            case 2:
              tmp_0 = false;
              break;
            case 1:
              // Inline function 'kotlin.let' call

              var it = serializer.mv().by();
              tmp_0 = equals(it, CLASS_getInstance()) || equals(it, OBJECT_getInstance());
              break;
            default:
              noWhenBranchMatchedException();
              break;
          }
          tmp = tmp_0;
        }
        var needDiscriminator = tmp;
        var baseClassDiscriminator = needDiscriminator ? classDiscriminator(serializer.mv(), this.c3s()) : null;
        var tmp_1;
        if (isPolymorphicSerializer) {
          var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
          $l$block_0: {
            // Inline function 'kotlin.requireNotNull' call
            if (value == null) {
              var message = 'Value for serializer ' + toString(serializer.mv()) + ' should always be non-null. Please report issue to the kotlinx.serialization tracker.';
              throw IllegalArgumentException.k2(toString(message));
            } else {
              break $l$block_0;
            }
          }
          var actual = findPolymorphicSerializer_0(casted, this, value);
          if (!(baseClassDiscriminator == null)) {
            access$validateIfSealed$tPolymorphicKt(serializer, actual, baseClassDiscriminator);
            checkKind_0(actual.mv().by());
          }
          tmp_1 = isInterface(actual, SerializationStrategy) ? actual : THROW_CCE();
        } else {
          tmp_1 = serializer;
        }
        var actualSerializer = tmp_1;
        if (!(baseClassDiscriminator == null)) {
          var serialName = actualSerializer.mv().nw();
          this.p40_1 = baseClassDiscriminator;
          this.q40_1 = serialName;
        }
        actualSerializer.nv(this, value);
      }
    } else {
      // Inline function 'kotlin.apply' call
      (new JsonPrimitiveEncoder(this.m40_1, this.n40_1)).n11(serializer, value);
    }
  }
  g41(tag, value) {
    this.y40(tag, JsonPrimitive_1(value));
    if (!this.o40_1.r3r_1 && !isFinite_0(value)) {
      throw InvalidFloatingPointEncoded_0(value, tag, toString(this.z40()));
    }
  }
  g1f(tag, value) {
    return this.g41((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  }
  h41(tag, value) {
    return this.y40(tag, JsonPrimitive_2(value));
  }
  h1f(tag, value) {
    return this.h41((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  }
  i41(tag, value) {
    return this.y40(tag, JsonPrimitive_0(toString_1(value)));
  }
  i1f(tag, value) {
    return this.i41((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  }
  j41(tag, value) {
    return this.y40(tag, JsonPrimitive_0(value));
  }
  j1f(tag, value) {
    return this.j41((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  }
  k41(tag, enumDescriptor, ordinal) {
    return this.y40(tag, JsonPrimitive_0(enumDescriptor.fy(ordinal)));
  }
  k1f(tag, enumDescriptor, ordinal) {
    return this.k41((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), enumDescriptor, ordinal);
  }
  l41(tag, value) {
    this.y40(tag, JsonPrimitive_0(toString(value)));
  }
  y1e(tag, value) {
    return this.l41((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  }
  m41(tag, inlineDescriptor) {
    return get_isUnsignedNumber(inlineDescriptor) ? inlineUnsignedNumberEncoder(this, tag) : get_isUnquotedLiteral(inlineDescriptor) ? inlineUnquotedLiteralEncoder(this, tag, inlineDescriptor) : super.l1f(tag, inlineDescriptor);
  }
  l1f(tag, inlineDescriptor) {
    return this.m41((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
  }
  b11(descriptor) {
    var tmp;
    if (!(this.e1e() == null)) {
      if (!(this.p40_1 == null))
        this.q40_1 = descriptor.nw();
      tmp = super.b11(descriptor);
    } else {
      tmp = (new JsonPrimitiveEncoder(this.m40_1, this.n40_1)).b11(descriptor);
    }
    return tmp;
  }
  uz(descriptor) {
    var tmp;
    if (this.e1e() == null) {
      tmp = this.n40_1;
    } else {
      tmp = AbstractJsonTreeEncoder$beginStructure$lambda(this);
    }
    var consumer = tmp;
    var tmp0_subject = descriptor.by();
    var tmp_0;
    var tmp_1;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_1 = true;
    } else {
      tmp_1 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_1) {
      tmp_0 = new JsonTreeListEncoder(this.m40_1, consumer);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var this_0 = this.m40_1;
        var keyDescriptor = carrierDescriptor(descriptor.iy(0), this_0.j10());
        var keyKind = keyDescriptor.by();
        var tmp_2;
        var tmp_3;
        if (keyKind instanceof PrimitiveKind) {
          tmp_3 = true;
        } else {
          tmp_3 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_3) {
          tmp_2 = new JsonTreeMapEncoder(this.m40_1, consumer);
        } else {
          if (this_0.u3p_1.k3r_1) {
            tmp_2 = new JsonTreeListEncoder(this.m40_1, consumer);
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp_0 = tmp_2;
      } else {
        tmp_0 = new JsonTreeEncoder(this.m40_1, consumer);
      }
    }
    var encoder = tmp_0;
    var discriminator = this.p40_1;
    if (!(discriminator == null)) {
      if (encoder instanceof JsonTreeMapEncoder) {
        encoder.y40('key', JsonPrimitive_0(discriminator));
        var tmp1_elvis_lhs = this.q40_1;
        encoder.y40('value', JsonPrimitive_0(tmp1_elvis_lhs == null ? descriptor.nw() : tmp1_elvis_lhs));
      } else {
        var tmp2_elvis_lhs = this.q40_1;
        encoder.y40(discriminator, JsonPrimitive_0(tmp2_elvis_lhs == null ? descriptor.nw() : tmp2_elvis_lhs));
      }
      this.p40_1 = null;
      this.q40_1 = null;
    }
    return encoder;
  }
  m1f(descriptor) {
    this.n40_1(this.z40());
  }
}
class JsonTreeEncoder extends AbstractJsonTreeEncoder {
  constructor(json, nodeConsumer) {
    super(json, nodeConsumer);
    var tmp = this;
    // Inline function 'kotlin.collections.linkedMapOf' call
    tmp.x40_1 = LinkedHashMap.q5();
  }
  y40(key, element) {
    // Inline function 'kotlin.collections.set' call
    this.x40_1.k4(key, element);
  }
  o11(descriptor, index, serializer, value) {
    if (!(value == null) || this.o40_1.m3r_1) {
      super.o11(descriptor, index, serializer, value);
    }
  }
  z40() {
    return new JsonObject(this.x40_1);
  }
}
class AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1 extends AbstractEncoder {
  static q41(this$0, $tag, $box) {
    if ($box === VOID)
      $box = {};
    $box.o41_1 = this$0;
    $box.p41_1 = $tag;
    var $this = this.n10($box);
    $this.n41_1 = this$0.m40_1.j10();
    return $this;
  }
  j10() {
    return this.n41_1;
  }
  v41(s) {
    return this.o41_1.y40(this.p41_1, new JsonLiteral(s, false));
  }
  u10(value) {
    // Inline function 'kotlin.toUInt' call
    var tmp$ret$0 = _UInt___init__impl__l7qpdl(value);
    return this.v41(UInt__toString_impl_dbgl21(tmp$ret$0));
  }
  v10(value) {
    // Inline function 'kotlin.toULong' call
    var tmp$ret$0 = _ULong___init__impl__c78o9k(value);
    return this.v41(ULong__toString_impl_f9au7k(tmp$ret$0));
  }
  s10(value) {
    // Inline function 'kotlin.toUByte' call
    var tmp$ret$0 = _UByte___init__impl__g9hnc4(value);
    return this.v41(UByte__toString_impl_v72jg(tmp$ret$0));
  }
  t10(value) {
    // Inline function 'kotlin.toUShort' call
    var tmp$ret$0 = _UShort___init__impl__jigrne(value);
    return this.v41(UShort__toString_impl_edaoee(tmp$ret$0));
  }
}
class AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1 extends AbstractEncoder {
  static u41(this$0, $tag, $inlineDescriptor, $box) {
    if ($box === VOID)
      $box = {};
    $box.r41_1 = this$0;
    $box.s41_1 = $tag;
    $box.t41_1 = $inlineDescriptor;
    return this.n10($box);
  }
  j10() {
    return this.r41_1.m40_1.j10();
  }
  z10(value) {
    return this.r41_1.y40(this.s41_1, new JsonLiteral(value, false, this.t41_1));
  }
}
class JsonPrimitiveEncoder extends AbstractJsonTreeEncoder {
  constructor(json, nodeConsumer) {
    super(json, nodeConsumer);
    this.l42_1 = null;
    this.u1e('primitive');
  }
  y40(key, element) {
    // Inline function 'kotlin.require' call
    if (!(key === 'primitive')) {
      var message = "This output can only consume primitives with 'primitive' tag";
      throw IllegalArgumentException.k2(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.l42_1 == null)) {
      var message_0 = 'Primitive element was already recorded. Does call to .encodeXxx happen more than once?';
      throw IllegalArgumentException.k2(toString(message_0));
    }
    this.l42_1 = element;
    this.n40_1(element);
  }
  z40() {
    var tmp0 = this.l42_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp0 == null) {
        var message = 'Primitive element has not been recorded. Is call to .encodeXxx is missing in serializer?';
        throw IllegalArgumentException.k2(toString(message));
      } else {
        tmp$ret$1 = tmp0;
        break $l$block;
      }
    }
    return tmp$ret$1;
  }
}
class JsonTreeListEncoder extends AbstractJsonTreeEncoder {
  constructor(json, nodeConsumer) {
    super(json, nodeConsumer);
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.s42_1 = ArrayList.s2();
  }
  a1e(descriptor, index) {
    return index.toString();
  }
  y40(key, element) {
    var idx = toInt(key);
    this.s42_1.t4(idx, element);
  }
  z40() {
    return new JsonArray(this.s42_1);
  }
}
class JsonTreeMapEncoder extends JsonTreeEncoder {
  constructor(json, nodeConsumer) {
    super(json, nodeConsumer);
    this.e42_1 = true;
  }
  y40(key, element) {
    if (this.e42_1) {
      var tmp = this;
      var tmp_0;
      if (element instanceof JsonPrimitive) {
        tmp_0 = element.f37();
      } else {
        if (element instanceof JsonObject) {
          throw InvalidKeyKindException(JsonObjectSerializer_getInstance().u3s_1);
        } else {
          if (element instanceof JsonArray) {
            throw InvalidKeyKindException(JsonArraySerializer_getInstance().v3s_1);
          } else {
            noWhenBranchMatchedException();
          }
        }
      }
      tmp.d42_1 = tmp_0;
      this.e42_1 = false;
    } else {
      var tmp0 = this.x40_1;
      // Inline function 'kotlin.collections.set' call
      var key_0 = _get_tag__e6h4qf(this);
      tmp0.k4(key_0, element);
      this.e42_1 = true;
    }
  }
  z40() {
    return new JsonObject(this.x40_1);
  }
}
class WriteMode extends Enum {
  constructor(name, ordinal, begin, end) {
    super(name, ordinal);
    this.t3x_1 = begin;
    this.u3x_1 = end;
  }
}
class AbstractJsonLexer {
  constructor() {
    this.j3q_1 = 0;
    this.k3q_1 = new JsonPath();
    this.l3q_1 = null;
    this.m3q_1 = StringBuilder.m1();
  }
  w42() {
  }
  j3x() {
    var current = this.x42();
    var source = this.u42();
    if (current >= charSequenceLength(source) || current === -1)
      return false;
    if (charSequenceGet(source, current) === _Char___init__impl__6a9atx(44)) {
      this.j3q_1 = this.j3q_1 + 1 | 0;
      return true;
    }
    return false;
  }
  y42(c) {
    return c === _Char___init__impl__6a9atx(125) || c === _Char___init__impl__6a9atx(93) || (c === _Char___init__impl__6a9atx(58) || c === _Char___init__impl__6a9atx(44)) ? false : true;
  }
  n3q() {
    var nextToken = this.c3x();
    if (!(nextToken === 10)) {
      this.j3v('Expected EOF after parsing, but had ' + toString_1(charSequenceGet(this.u42(), this.j3q_1 - 1 | 0)) + ' instead');
    }
  }
  x3w(expected) {
    var token = this.c3x();
    if (!(token === expected)) {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected_0 = tokenDescription(expected);
      var position = true ? this.j3q_1 - 1 | 0 : this.j3q_1;
      var s = this.j3q_1 === charSequenceLength(this.u42()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.u42(), position));
      var tmp$ret$0 = 'Expected ' + expected_0 + ", but had '" + s + "' instead";
      this.j3v(tmp$ret$0, position);
    }
    return token;
  }
  z42(expected) {
    if (this.j3q_1 > 0 && expected === _Char___init__impl__6a9atx(34)) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.withPositionRollback' call
        var snapshot = this.j3q_1;
        try {
          this.j3q_1 = this.j3q_1 - 1 | 0;
          tmp$ret$1 = this.a3x();
          break $l$block;
        }finally {
          this.j3q_1 = snapshot;
        }
      }
      var inputLiteral = tmp$ret$1;
      if (inputLiteral === 'null') {
        this.i3v("Expected string literal but 'null' literal was found", this.j3q_1 - 1 | 0, "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.");
      }
    }
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
    var expectedToken = charToTokenClass(expected);
    var expected_0 = tokenDescription(expectedToken);
    var position = true ? this.j3q_1 - 1 | 0 : this.j3q_1;
    var s = this.j3q_1 === charSequenceLength(this.u42()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.u42(), position));
    var tmp$ret$2 = 'Expected ' + expected_0 + ", but had '" + s + "' instead";
    this.j3v(tmp$ret$2, position);
  }
  w3w() {
    var source = this.u42();
    var cpos = this.j3q_1;
    $l$loop_0: while (true) {
      cpos = this.v42(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var ch = charSequenceGet(source, cpos);
      if (ch === _Char___init__impl__6a9atx(32) || ch === _Char___init__impl__6a9atx(10) || ch === _Char___init__impl__6a9atx(13) || ch === _Char___init__impl__6a9atx(9)) {
        cpos = cpos + 1 | 0;
        continue $l$loop_0;
      }
      this.j3q_1 = cpos;
      return charToTokenClass(ch);
    }
    this.j3q_1 = cpos;
    return 10;
  }
  k3x(doConsume) {
    var current = this.x42();
    current = this.v42(current);
    var len = charSequenceLength(this.u42()) - current | 0;
    if (len < 4 || current === -1)
      return false;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(charCodeAt('null', i) === charSequenceGet(this.u42(), current + i | 0)))
          return false;
      }
       while (inductionVariable <= 3);
    if (len > 4 && charToTokenClass(charSequenceGet(this.u42(), current + 4 | 0)) === 0)
      return false;
    if (doConsume) {
      this.j3q_1 = current + 4 | 0;
    }
    return true;
  }
  v3x(doConsume, $super) {
    doConsume = doConsume === VOID ? true : doConsume;
    return $super === VOID ? this.k3x(doConsume) : $super.k3x.call(this, doConsume);
  }
  l3x(isLenient) {
    var token = this.w3w();
    var tmp;
    if (isLenient) {
      if (!(token === 1) && !(token === 0))
        return null;
      tmp = this.a3x();
    } else {
      if (!(token === 1))
        return null;
      tmp = this.z3w();
    }
    var string = tmp;
    this.l3q_1 = string;
    return string;
  }
  a43() {
    this.l3q_1 = null;
  }
  o1i(startPos, endPos) {
    // Inline function 'kotlin.text.substring' call
    var this_0 = this.u42();
    return toString(charSequenceSubSequence(this_0, startPos, endPos));
  }
  z3w() {
    if (!(this.l3q_1 == null)) {
      return takePeeked(this);
    }
    return this.o3x();
  }
  consumeString2(source, startPosition, current) {
    var currentPosition = current;
    var lastPosition = startPosition;
    var char = charSequenceGet(source, currentPosition);
    var usedAppend = false;
    while (!(char === _Char___init__impl__6a9atx(34))) {
      if (char === _Char___init__impl__6a9atx(92)) {
        usedAppend = true;
        currentPosition = this.v42(appendEscape(this, lastPosition, currentPosition));
        if (currentPosition === -1) {
          this.j3v('Unexpected EOF', currentPosition);
        }
        lastPosition = currentPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= charSequenceLength(source)) {
          usedAppend = true;
          this.t42(lastPosition, currentPosition);
          currentPosition = this.v42(currentPosition);
          if (currentPosition === -1) {
            this.j3v('Unexpected EOF', currentPosition);
          }
          lastPosition = currentPosition;
        }
      }
      char = charSequenceGet(source, currentPosition);
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.o1i(lastPosition, currentPosition);
    } else {
      tmp = decodedString(this, lastPosition, currentPosition);
    }
    var string = tmp;
    this.j3q_1 = currentPosition + 1 | 0;
    return string;
  }
  p3x() {
    var result = this.a3x();
    if (result === 'null' && wasUnquotedString(this)) {
      this.j3v("Unexpected 'null' value instead of string literal");
    }
    return result;
  }
  a3x() {
    if (!(this.l3q_1 == null)) {
      return takePeeked(this);
    }
    var current = this.x42();
    if (current >= charSequenceLength(this.u42()) || current === -1) {
      this.j3v('EOF', current);
    }
    var token = charToTokenClass(charSequenceGet(this.u42(), current));
    if (token === 1) {
      return this.z3w();
    }
    if (!(token === 0)) {
      this.j3v('Expected beginning of the string, but got ' + toString_1(charSequenceGet(this.u42(), current)));
    }
    var usedAppend = false;
    while (charToTokenClass(charSequenceGet(this.u42(), current)) === 0) {
      current = current + 1 | 0;
      if (current >= charSequenceLength(this.u42())) {
        usedAppend = true;
        this.t42(this.j3q_1, current);
        var eof = this.v42(current);
        if (eof === -1) {
          this.j3q_1 = current;
          return decodedString(this, 0, 0);
        } else {
          current = eof;
        }
      }
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.o1i(this.j3q_1, current);
    } else {
      tmp = decodedString(this, this.j3q_1, current);
    }
    var result = tmp;
    this.j3q_1 = current;
    return result;
  }
  t42(fromIndex, toIndex) {
    this.m3q_1.bh(this.u42(), fromIndex, toIndex);
  }
  n3x(allowLenientStrings) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var tokenStack = ArrayList.s2();
    var lastToken = this.w3w();
    if (!(lastToken === 8) && !(lastToken === 6)) {
      this.a3x();
      return Unit_instance;
    }
    $l$loop: while (true) {
      lastToken = this.w3w();
      if (lastToken === 1) {
        if (allowLenientStrings)
          this.a3x();
        else
          this.o3x();
        continue $l$loop;
      }
      var tmp0_subject = lastToken;
      if (tmp0_subject === 8 || tmp0_subject === 6) {
        tokenStack.c2(lastToken);
      } else if (tmp0_subject === 9) {
        if (!(last(tokenStack) === 8))
          throw JsonDecodingException_0(this.j3q_1, 'found ] instead of } at path: ' + this.k3q_1.toString(), this.u42());
        removeLast(tokenStack);
      } else if (tmp0_subject === 7) {
        if (!(last(tokenStack) === 6))
          throw JsonDecodingException_0(this.j3q_1, 'found } instead of ] at path: ' + this.k3q_1.toString(), this.u42());
        removeLast(tokenStack);
      } else if (tmp0_subject === 10) {
        this.j3v('Unexpected end of input due to malformed JSON during ignoring unknown keys');
      }
      this.c3x();
      if (tokenStack.q2() === 0)
        return Unit_instance;
    }
  }
  toString() {
    return "JsonReader(source='" + toString(this.u42()) + "', currentPosition=" + this.j3q_1 + ')';
  }
  m3x(key) {
    var processed = this.o1i(0, this.j3q_1);
    var lastIndexOf_0 = lastIndexOf(processed, key);
    throw JsonDecodingException.m3t("Encountered an unknown key '" + key + "' at offset " + lastIndexOf_0 + ' at path: ' + this.k3q_1.d3w() + "\nUse 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.\n" + ('JSON input: ' + toString(minify(this.u42(), lastIndexOf_0))));
  }
  i3v(message, position, hint) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(hint) === 0) {
      tmp = '';
    } else {
      tmp = '\n' + hint;
    }
    var hintMessage = tmp;
    throw JsonDecodingException_0(position, message + ' at path: ' + this.k3q_1.d3w() + hintMessage, this.u42());
  }
  j3v(message, position, hint, $super) {
    position = position === VOID ? this.j3q_1 : position;
    hint = hint === VOID ? '' : hint;
    return $super === VOID ? this.i3v(message, position, hint) : $super.i3v.call(this, message, position, hint);
  }
  x3x() {
    var current = this.x42();
    current = this.v42(current);
    if (current >= charSequenceLength(this.u42()) || current === -1) {
      this.j3v('EOF');
    }
    var tmp;
    if (charSequenceGet(this.u42(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      if (current === charSequenceLength(this.u42())) {
        this.j3v('EOF');
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
    $l$loop_4: while (!(current === charSequenceLength(this.u42()))) {
      var ch = charSequenceGet(this.u42(), current);
      if ((ch === _Char___init__impl__6a9atx(101) || ch === _Char___init__impl__6a9atx(69)) && !hasExponent) {
        if (current === start) {
          this.j3v('Unexpected symbol ' + toString_1(ch) + ' in numeric literal');
        }
        isExponentPositive = true;
        hasExponent = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45) && hasExponent) {
        if (current === start) {
          this.j3v("Unexpected symbol '-' in numeric literal");
        }
        isExponentPositive = false;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(43) && hasExponent) {
        if (current === start) {
          this.j3v("Unexpected symbol '+' in numeric literal");
        }
        isExponentPositive = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45)) {
        if (!(current === start)) {
          this.j3v("Unexpected symbol '-' in numeric literal");
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
        this.j3v("Unexpected symbol '" + toString_1(ch) + "' in numeric literal");
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
        this.j3v('Numeric value overflow');
      }
    }
    var hasChars = !(current === start);
    if (start === current || (isNegative && start === (current - 1 | 0))) {
      this.j3v('Expected numeric literal');
    }
    if (hasQuotation) {
      if (!hasChars) {
        this.j3v('EOF');
      }
      if (!(charSequenceGet(this.u42(), current) === _Char___init__impl__6a9atx(34))) {
        this.j3v('Expected closing quotation mark');
      }
      current = current + 1 | 0;
    }
    this.j3q_1 = current;
    if (hasExponent) {
      var doubleAccumulator = toNumber(accumulator) * consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive);
      if (doubleAccumulator > toNumber(9223372036854775807n) || doubleAccumulator < toNumber(-9223372036854775808n)) {
        this.j3v('Numeric value overflow');
      }
      // Inline function 'kotlin.math.floor' call
      if (!(Math.floor(doubleAccumulator) === doubleAccumulator)) {
        this.j3v("Can't convert " + doubleAccumulator + ' to Long');
      }
      accumulator = numberToLong(doubleAccumulator);
    }
    var tmp_0;
    if (isNegative) {
      tmp_0 = accumulator;
    } else if (!(accumulator === -9223372036854775808n)) {
      tmp_0 = negate(accumulator);
    } else {
      this.j3v('Numeric value overflow');
    }
    return tmp_0;
  }
  l3s() {
    var result = this.x3x();
    var next = this.c3x();
    if (!(next === 10)) {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected = tokenDescription(10);
      var position = true ? this.j3q_1 - 1 | 0 : this.j3q_1;
      var s = this.j3q_1 === charSequenceLength(this.u42()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.u42(), position));
      var tmp$ret$0 = "Expected input to contain a single valid number, but got '" + s + "' after it";
      this.j3v(tmp$ret$0, position);
    }
    return result;
  }
  w3x() {
    var current = this.x42();
    if (current === charSequenceLength(this.u42())) {
      this.j3v('EOF');
    }
    var tmp;
    if (charSequenceGet(this.u42(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var result = consumeBoolean2(this, current);
    if (hasQuotation) {
      if (this.j3q_1 === charSequenceLength(this.u42())) {
        this.j3v('EOF');
      }
      if (!(charSequenceGet(this.u42(), this.j3q_1) === _Char___init__impl__6a9atx(34))) {
        this.j3v('Expected closing quotation mark');
      }
      this.j3q_1 = this.j3q_1 + 1 | 0;
    }
    return result;
  }
}
class CharMappings {
  constructor() {
    CharMappings_instance = this;
    this.b43_1 = charArray(117);
    this.c43_1 = new Int8Array(126);
    initEscape(this);
    initCharToToken(this);
  }
}
class StringJsonLexer extends AbstractJsonLexer {
  constructor(source) {
    super();
    this.m43_1 = source;
  }
  u42() {
    return this.m43_1;
  }
  v42(position) {
    return position < this.u42().length ? position : -1;
  }
  c3x() {
    var source = this.u42();
    var cpos = this.j3q_1;
    $l$loop: while (!(cpos === -1) && cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charCodeAt(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.j3q_1 = cpos;
      return charToTokenClass(c);
    }
    this.j3q_1 = source.length;
    return 10;
  }
  y3w() {
    var current = this.j3q_1;
    if (current === -1)
      return false;
    var source = this.u42();
    $l$loop: while (current < source.length) {
      var c = charCodeAt(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop;
      }
      this.j3q_1 = current;
      return this.y42(c);
    }
    this.j3q_1 = current;
    return false;
  }
  x42() {
    var current = this.j3q_1;
    if (current === -1)
      return current;
    var source = this.u42();
    $l$loop: while (current < source.length) {
      var c = charCodeAt(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
      } else {
        break $l$loop;
      }
    }
    this.j3q_1 = current;
    return current;
  }
  i3x(expected) {
    if (this.j3q_1 === -1) {
      this.z42(expected);
    }
    var source = this.u42();
    var cpos = this.j3q_1;
    $l$loop: while (cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charCodeAt(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.j3q_1 = cpos;
      if (c === expected)
        return Unit_instance;
      this.z42(expected);
    }
    this.j3q_1 = -1;
    this.z42(expected);
  }
  o3x() {
    this.i3x(_Char___init__impl__6a9atx(34));
    var current = this.j3q_1;
    var closingQuote = indexOf_0(this.u42(), _Char___init__impl__6a9atx(34), current);
    if (closingQuote === -1) {
      this.a3x();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected = tokenDescription(1);
      var position = false ? this.j3q_1 - 1 | 0 : this.j3q_1;
      var s = this.j3q_1 === charSequenceLength(this.u42()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.u42(), position));
      var tmp$ret$0 = 'Expected ' + expected + ", but had '" + s + "' instead";
      this.j3v(tmp$ret$0, position);
    }
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (charCodeAt(this.u42(), i) === _Char___init__impl__6a9atx(92)) {
          return this.consumeString2(this.u42(), this.j3q_1, i);
        }
      }
       while (inductionVariable < closingQuote);
    this.j3q_1 = closingQuote + 1 | 0;
    return substring(this.u42(), current, closingQuote);
  }
  q3x(keyToMatch, isLenient) {
    var positionSnapshot = this.j3q_1;
    try {
      if (!(this.c3x() === 6))
        return null;
      var firstKey = this.l3x(isLenient);
      if (!(firstKey === keyToMatch))
        return null;
      this.a43();
      if (!(this.c3x() === 5))
        return null;
      return this.l3x(isLenient);
    }finally {
      this.j3q_1 = positionSnapshot;
      this.a43();
    }
  }
}
class StringJsonLexerWithComments extends StringJsonLexer {
  c3x() {
    var source = this.u42();
    var cpos = this.x42();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.j3q_1 = cpos + 1 | 0;
    return charToTokenClass(charCodeAt(source, cpos));
  }
  y3w() {
    var current = this.x42();
    if (current >= this.u42().length || current === -1)
      return false;
    return this.y42(charCodeAt(this.u42(), current));
  }
  i3x(expected) {
    var source = this.u42();
    var current = this.x42();
    if (current >= source.length || current === -1) {
      this.j3q_1 = -1;
      this.z42(expected);
    }
    var c = charCodeAt(source, current);
    this.j3q_1 = current + 1 | 0;
    if (c === expected)
      return Unit_instance;
    else {
      this.z42(expected);
    }
  }
  w3w() {
    var source = this.u42();
    var cpos = this.x42();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.j3q_1 = cpos;
    return charToTokenClass(charCodeAt(source, cpos));
  }
  x42() {
    var current = this.j3q_1;
    if (current === -1)
      return current;
    var source = this.u42();
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
            this.j3q_1 = source.length;
            this.j3v('Expected end of the block comment: "*/", but had EOF instead');
          } else {
            current = current + 2 | 0;
          }
          continue $l$loop_1;
        }
      }
      break $l$loop_1;
    }
    this.j3q_1 = current;
    return current;
  }
}
class JsonToStringWriter {
  constructor() {
    this.a3q_1 = StringBuilder.ic(128);
  }
  h3u(value) {
    this.a3q_1.fh(value);
  }
  b3u(char) {
    this.a3q_1.p1(char);
  }
  d3u(text) {
    this.a3q_1.n1(text);
  }
  n3u(text) {
    printQuoted(this.a3q_1, text);
  }
  n2x() {
    this.a3q_1.ih();
  }
  toString() {
    return this.a3q_1.toString();
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
  var conf = builder.g3r();
  return new JsonImpl(conf, builder.f3r_1);
}
function validateConfiguration($this) {
  if (equals($this.j10(), EmptySerializersModule()))
    return Unit_instance;
  var collector = new JsonSerializersModuleValidator($this.u3p_1);
  $this.j10().x1g(collector);
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
function ClassDiscriminatorMode_POLYMORPHIC_getInstance() {
  ClassDiscriminatorMode_initEntries();
  return ClassDiscriminatorMode_POLYMORPHIC_instance;
}
function throwSubtypeNotRegistered($this, subClass, baseClass) {
  var tmp0_elvis_lhs = subClass.k1();
  var subClassName = tmp0_elvis_lhs == null ? toString(subClass) : tmp0_elvis_lhs;
  var scope = "in the scope of '" + baseClass.k1() + "'";
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
      throw NumberFormatException.gf(e.message);
    } else {
      throw $p;
    }
  }
  var result = tmp;
  // Inline function 'kotlin.ranges.contains' call
  var this_0 = numberRangeToNumber(-2147483648, 2147483647);
  if (!contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result))
    throw NumberFormatException.gf(_this__u8e3s4.f37() + ' is not an Int');
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
      throw NumberFormatException.gf(e.message);
    } else {
      throw $p;
    }
  }
  return tmp;
}
function get_floatOrNull(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  // Inline function 'kotlin.text.toFloatOrNull' call
  var this_0 = _this__u8e3s4.f37();
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  return toDoubleOrNull(this_0);
}
function get_float(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  // Inline function 'kotlin.text.toFloat' call
  var this_0 = _this__u8e3s4.f37();
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  return toDouble(this_0);
}
function get_doubleOrNull(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  return toDoubleOrNull(_this__u8e3s4.f37());
}
function get_double(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  return toDouble(_this__u8e3s4.f37());
}
function get_booleanOrNull(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  return toBooleanStrictOrNull_0(_this__u8e3s4.f37());
}
function get_boolean(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  var tmp0_elvis_lhs = toBooleanStrictOrNull_0(_this__u8e3s4.f37());
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
  var k = _destruct__k2r9zo.a3();
  // Inline function 'kotlin.collections.component2' call
  var v = _destruct__k2r9zo.b3();
  // Inline function 'kotlin.text.buildString' call
  // Inline function 'kotlin.apply' call
  var this_0 = StringBuilder.m1();
  printQuoted(this_0, k);
  this_0.p1(_Char___init__impl__6a9atx(58));
  this_0.t1(v);
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
  return (new StringJsonLexer(_this__u8e3s4.f37())).l3s();
}
function error(_this__u8e3s4, element) {
  _init_properties_JsonElement_kt__7cbdc2();
  throw IllegalArgumentException.k2('Element ' + toString(getKClassFromExpression(_this__u8e3s4)) + ' is not a ' + element);
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
    tmp = _this__u8e3s4.f37();
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
  $this$buildSerialDescriptor.aw('JsonPrimitive', defer(JsonElementSerializer$descriptor$lambda$lambda));
  $this$buildSerialDescriptor.aw('JsonNull', defer(JsonElementSerializer$descriptor$lambda$lambda_0));
  $this$buildSerialDescriptor.aw('JsonLiteral', defer(JsonElementSerializer$descriptor$lambda$lambda_1));
  $this$buildSerialDescriptor.aw('JsonObject', defer(JsonElementSerializer$descriptor$lambda$lambda_2));
  $this$buildSerialDescriptor.aw('JsonArray', defer(JsonElementSerializer$descriptor$lambda$lambda_3));
  return Unit_instance;
}
function JsonElementSerializer$descriptor$lambda$lambda() {
  return JsonPrimitiveSerializer_getInstance().r3s_1;
}
function JsonElementSerializer$descriptor$lambda$lambda_0() {
  return JsonNullSerializer_getInstance().s3s_1;
}
function JsonElementSerializer$descriptor$lambda$lambda_1() {
  return JsonLiteralSerializer_getInstance().t3s_1;
}
function JsonElementSerializer$descriptor$lambda$lambda_2() {
  return JsonObjectSerializer_getInstance().u3s_1;
}
function JsonElementSerializer$descriptor$lambda$lambda_3() {
  return JsonArraySerializer_getInstance().v3s_1;
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
  var tmp0 = $this.o3t_1;
  var tmp = KProperty1;
  // Inline function 'kotlin.getValue' call
  getPropertyCallableRef('original', 1, tmp, defer$o$_get_original_$ref_3cje7k(), null);
  return tmp0.b3();
}
function defer$o$_get_original_$ref_3cje7k() {
  return (p0) => _get_original__l7ku1m(p0);
}
function Composer_0(sb, json) {
  return json.u3p_1.l3r_1 ? new ComposerWithPrettyPrint(sb, json) : new Composer(sb);
}
function readIfAbsent($this, descriptor, index) {
  $this.z3u_1 = (!descriptor.jy(index) && descriptor.iy(index).ux());
  return $this.z3u_1;
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
  return JsonDecodingException.m3t(offset >= 0 ? 'Unexpected JSON token at offset ' + offset + ': ' + message : message);
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
  _this__u8e3s4.i3v('Trailing comma before the end of JSON ' + entity, _this__u8e3s4.j3q_1 - 1 | 0, "Trailing commas are non-complaint JSON and not allowed by default. Use 'allowTrailingComma = true' in 'Json {}' builder to support them.");
}
function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
  _this__u8e3s4.j3v('Unexpected special floating-point value ' + toString(result) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification', VOID, "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'");
}
function InvalidFloatingPointEncoded(value, output) {
  return JsonEncodingException.q3v('Unexpected special floating-point value ' + toString(value) + '. By default, ' + "non-finite floating point values are prohibited because they do not conform JSON specification. It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'\n" + ('Current output: ' + toString(minify(output))));
}
function InvalidFloatingPointDecoded(value, key, output) {
  return JsonDecodingException_1(-1, unexpectedFpErrorMessage(value, key, output));
}
function InvalidFloatingPointEncoded_0(value, key, output) {
  return JsonEncodingException.q3v(unexpectedFpErrorMessage(value, key, output));
}
function InvalidKeyKindException(keyDescriptor) {
  return JsonEncodingException.q3v("Value of type '" + keyDescriptor.nw() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.by().toString() + "'.\n") + "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.");
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
  if (json.u3p_1.i3r_1) {
    tmp = true;
  } else {
    var tmp0 = _this__u8e3s4.ey();
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp_0;
      if (isInterface(tmp0, Collection)) {
        tmp_0 = tmp0.o1();
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
      var _iterator__ex2g4s = tmp0.q1();
      while (_iterator__ex2g4s.r1()) {
        var element = _iterator__ex2g4s.s1();
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
    var tmp$ret$1 = name.toLowerCase();
    return getJsonNameIndexSlowPath(_this__u8e3s4, json, tmp$ret$1);
  }
  var strategy = namingStrategy(_this__u8e3s4, json);
  if (!(strategy == null))
    return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
  var index = _this__u8e3s4.gy(name);
  if (!(index === -3))
    return index;
  if (!json.u3p_1.s3r_1)
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
  return strategy == null ? _this__u8e3s4.fy(index) : serializationNamesIndices(_this__u8e3s4, json, strategy)[index];
}
function namingStrategy(_this__u8e3s4, json) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  return equals(_this__u8e3s4.by(), CLASS_getInstance()) ? json.u3p_1.t3r_1 : null;
}
function deserializationNamesMap(_this__u8e3s4, descriptor) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var tmp = get_schemaCache(_this__u8e3s4);
  var tmp_0 = get_JsonDeserializationNamesKey();
  return tmp.s3v(descriptor, tmp_0, deserializationNamesMap$lambda(descriptor, _this__u8e3s4));
}
function decodeCaseInsensitive(_this__u8e3s4, descriptor) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  return _this__u8e3s4.u3p_1.u3r_1 && equals(descriptor.by(), ENUM_getInstance());
}
function getJsonNameIndexSlowPath(_this__u8e3s4, json, name) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var tmp0_elvis_lhs = deserializationNamesMap(json, _this__u8e3s4).h4(name);
  return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
}
function serializationNamesIndices(_this__u8e3s4, json, strategy) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var tmp = get_schemaCache(json);
  var tmp_0 = get_JsonSerializationNamesKey();
  return tmp.s3v(_this__u8e3s4, tmp_0, serializationNamesIndices$lambda(_this__u8e3s4, strategy));
}
function buildDeserializationNamesMap(_this__u8e3s4, json) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  // Inline function 'kotlin.collections.mutableMapOf' call
  var builder = LinkedHashMap.q5();
  var useLowercaseEnums = decodeCaseInsensitive(json, _this__u8e3s4);
  var strategyForClasses = namingStrategy(_this__u8e3s4, json);
  var inductionVariable = 0;
  var last = _this__u8e3s4.dy();
  if (inductionVariable < last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.collections.filterIsInstance' call
      var tmp0 = _this__u8e3s4.hy(i);
      // Inline function 'kotlin.collections.filterIsInstanceTo' call
      var destination = ArrayList.s2();
      var _iterator__ex2g4s = tmp0.q1();
      while (_iterator__ex2g4s.r1()) {
        var element = _iterator__ex2g4s.s1();
        if (element instanceof JsonNames) {
          destination.c2(element);
        }
      }
      var tmp0_safe_receiver = singleOrNull(destination);
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t3v_1;
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
        tmp_0 = _this__u8e3s4.fy(i).toLowerCase();
      } else if (!(strategyForClasses == null)) {
        tmp_0 = strategyForClasses.u3v(_this__u8e3s4, i, _this__u8e3s4.fy(i));
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
  if (builder.o1()) {
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
    var tmp = 0;
    var tmp_0 = $this_serializationNamesIndices.dy();
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var baseName = $this_serializationNamesIndices.fy(tmp_2);
      tmp_1[tmp_2] = $strategy.u3v($this_serializationNamesIndices, tmp_2, baseName);
      tmp = tmp + 1 | 0;
    }
    return tmp_1;
  };
}
function buildDeserializationNamesMap$putOrThrow(_this__u8e3s4, $this_buildDeserializationNamesMap, name, index) {
  var entity = equals($this_buildDeserializationNamesMap.by(), ENUM_getInstance()) ? 'enum value' : 'property';
  // Inline function 'kotlin.collections.contains' call
  // Inline function 'kotlin.collections.containsKey' call
  if ((isInterface(_this__u8e3s4, KtMap) ? _this__u8e3s4 : THROW_CCE()).f4(name)) {
    throw JsonException.h3v("The suggested name '" + name + "' for " + entity + ' ' + $this_buildDeserializationNamesMap.fy(index) + ' is already one of the names for ' + entity + ' ' + ($this_buildDeserializationNamesMap.fy(getValue(_this__u8e3s4, name)) + ' in ' + toString($this_buildDeserializationNamesMap)));
  }
  // Inline function 'kotlin.collections.set' call
  _this__u8e3s4.k4(name, index);
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
  var newSize = imul($this.x3v_1, 2);
  $this.v3v_1 = copyOf($this.v3v_1, newSize);
  var tmp = 0;
  var tmp_0 = new Int32Array(newSize);
  while (tmp < newSize) {
    tmp_0[tmp] = -1;
    tmp = tmp + 1 | 0;
  }
  var newIndices = tmp_0;
  // Inline function 'kotlin.collections.copyInto' call
  var this_0 = $this.w3v_1;
  var endIndex = this_0.length;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var tmp_1 = this_0;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  arrayCopy(tmp_1, newIndices, 0, 0, endIndex);
  $this.w3v_1 = newIndices;
}
function checkKind($this, descriptor, actualClass) {
  var kind = descriptor.by();
  var tmp;
  if (kind instanceof PolymorphicKind) {
    tmp = true;
  } else {
    tmp = equals(kind, CONTEXTUAL_getInstance());
  }
  if (tmp) {
    throw IllegalArgumentException.k2('Serializer for ' + actualClass.k1() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind.toString() + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
  }
  if ($this.f3w_1)
    return Unit_instance;
  if (!$this.g3w_1)
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
    throw IllegalArgumentException.k2('Serializer for ' + actualClass.k1() + ' of kind ' + kind.toString() + ' cannot be serialized polymorphically with class discriminator.');
  }
}
function checkDiscriminatorCollisions($this, descriptor, actualClass) {
  var inductionVariable = 0;
  var last = descriptor.dy();
  if (inductionVariable < last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var name = descriptor.fy(i);
      if (name === $this.e3w_1) {
        throw IllegalArgumentException.k2('Polymorphic serializer for ' + toString(actualClass) + " has property '" + name + "' that conflicts " + 'with JSON class discriminator. You can either change class discriminator in JsonConfiguration, rename property with @SerialName annotation or fall back to array polymorphism');
      }
    }
     while (inductionVariable < last);
}
function encodeByWriter(json, writer, serializer, value) {
  var tmp = WriteMode_OBJ_getInstance();
  // Inline function 'kotlin.arrayOfNulls' call
  var size = get_entries().q2();
  var tmp$ret$0 = Array(size);
  var encoder = StreamingJsonEncoder.q3w(writer, json, tmp, tmp$ret$0);
  encoder.n11(serializer, value);
}
function *_generator_invoke__zhh2q8($this, $this$DeepRecursiveFunction, it, $completion) {
  var tmp0_subject = $this.v3w_1.r3w_1.w3w();
  var tmp;
  if (tmp0_subject === 1) {
    tmp = readValue($this.v3w_1, true);
  } else if (tmp0_subject === 0) {
    tmp = readValue($this.v3w_1, false);
  } else if (tmp0_subject === 6) {
    var tmp_0 = readObject_0($this.v3w_1, $this$DeepRecursiveFunction, $completion);
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      tmp_0 = yield tmp_0;
    tmp = tmp_0;
  } else if (tmp0_subject === 8) {
    tmp = readArray($this.v3w_1);
  } else {
    $this.v3w_1.r3w_1.j3v("Can't begin reading element, unexpected token");
  }
  return tmp;
}
function readObject($this) {
  // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
  var lastToken = $this.r3w_1.x3w(6);
  if ($this.r3w_1.w3w() === 4) {
    $this.r3w_1.j3v('Unexpected leading comma');
  }
  // Inline function 'kotlin.collections.linkedMapOf' call
  var result = LinkedHashMap.q5();
  $l$loop: while ($this.r3w_1.y3w()) {
    var key = $this.s3w_1 ? $this.r3w_1.a3x() : $this.r3w_1.z3w();
    $this.r3w_1.x3w(5);
    var element = $this.b3x();
    // Inline function 'kotlin.collections.set' call
    result.k4(key, element);
    lastToken = $this.r3w_1.c3x();
    var tmp0_subject = lastToken;
    if (tmp0_subject !== 4)
      if (tmp0_subject === 7)
        break $l$loop;
      else {
        $this.r3w_1.j3v('Expected end of the object or comma');
      }
  }
  if (lastToken === 6) {
    $this.r3w_1.x3w(7);
  } else if (lastToken === 4) {
    if (!$this.t3w_1) {
      invalidTrailingComma($this.r3w_1);
    }
    $this.r3w_1.x3w(7);
  }
  return new JsonObject(result);
}
function *_generator_readObject__361wel($this, _this__u8e3s4, $completion) {
  // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
  var lastToken = $this.r3w_1.x3w(6);
  if ($this.r3w_1.w3w() === 4) {
    $this.r3w_1.j3v('Unexpected leading comma');
  }
  // Inline function 'kotlin.collections.linkedMapOf' call
  var result = LinkedHashMap.q5();
  $l$loop: while ($this.r3w_1.y3w()) {
    var key = $this.s3w_1 ? $this.r3w_1.a3x() : $this.r3w_1.z3w();
    $this.r3w_1.x3w(5);
    var tmp = _this__u8e3s4.xs(Unit_instance, $completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      tmp = yield tmp;
    var element = tmp;
    // Inline function 'kotlin.collections.set' call
    result.k4(key, element);
    lastToken = $this.r3w_1.c3x();
    var tmp0_subject = lastToken;
    if (tmp0_subject !== 4)
      if (tmp0_subject === 7)
        break $l$loop;
      else {
        $this.r3w_1.j3v('Expected end of the object or comma');
      }
  }
  if (lastToken === 6) {
    $this.r3w_1.x3w(7);
  } else if (lastToken === 4) {
    if (!$this.t3w_1) {
      invalidTrailingComma($this.r3w_1);
    }
    $this.r3w_1.x3w(7);
  }
  return new JsonObject(result);
}
function readObject_0($this, _this__u8e3s4, $completion) {
  return suspendOrReturn(/*#__NOINLINE__*/_generator_readObject__361wel.bind(VOID, $this, _this__u8e3s4), $completion);
}
function readArray($this) {
  var lastToken = $this.r3w_1.c3x();
  if ($this.r3w_1.w3w() === 4) {
    $this.r3w_1.j3v('Unexpected leading comma');
  }
  // Inline function 'kotlin.collections.arrayListOf' call
  var result = ArrayList.s2();
  while ($this.r3w_1.y3w()) {
    var element = $this.b3x();
    result.c2(element);
    lastToken = $this.r3w_1.c3x();
    if (!(lastToken === 4)) {
      var tmp0 = $this.r3w_1;
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
      var condition = lastToken === 9;
      var position = tmp0.j3q_1;
      if (!condition) {
        var tmp$ret$1 = 'Expected end of the array or comma';
        tmp0.j3v(tmp$ret$1, position);
      }
    }
  }
  if (lastToken === 8) {
    $this.r3w_1.x3w(9);
  } else if (lastToken === 4) {
    if (!$this.t3w_1) {
      invalidTrailingComma($this.r3w_1, 'array');
    }
    $this.r3w_1.x3w(9);
  }
  return new JsonArray(result);
}
function readValue($this, isString) {
  var tmp;
  if ($this.s3w_1 || !isString) {
    tmp = $this.r3w_1.a3x();
  } else {
    tmp = $this.r3w_1.z3w();
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
  var l = ($this$DeepRecursiveFunction, it, $completion) => i.d3x($this$DeepRecursiveFunction, it, $completion);
  l.$arity = 2;
  return l;
}
function classDiscriminator(_this__u8e3s4, json) {
  var _iterator__ex2g4s = _this__u8e3s4.ey().q1();
  while (_iterator__ex2g4s.r1()) {
    var annotation = _iterator__ex2g4s.s1();
    if (annotation instanceof JsonClassDiscriminator)
      return annotation.e3x_1;
  }
  return json.u3p_1.q3r_1;
}
function throwJsonElementPolymorphicException(serialName, element) {
  throw JsonEncodingException.q3v('Class with serial name ' + serialName + ' cannot be serialized polymorphically because it is represented as ' + getKClassFromExpression(element).k1() + '. Make sure that its JsonTransformingSerializer returns JsonObject, so class discriminator can be added to it.');
}
function validateIfSealed(serializer, actualSerializer, classDiscriminator) {
  if (!(serializer instanceof SealedClassSerializer))
    return Unit_instance;
  if (jsonCachedSerialNames(actualSerializer.mv()).y3(classDiscriminator)) {
    var baseName = serializer.mv().nw();
    var actualName = actualSerializer.mv().nw();
    // Inline function 'kotlin.error' call
    var message = "Sealed class '" + actualName + "' cannot be serialized as base class '" + baseName + "' because" + (" it has property name that conflicts with JSON class discriminator '" + classDiscriminator + "'. ") + 'You can either change class discriminator in JsonConfiguration, rename property with @SerialName annotation or fall back to array polymorphism';
    throw IllegalStateException.o(toString(message));
  }
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
function access$validateIfSealed$tPolymorphicKt(serializer, actualSerializer, classDiscriminator) {
  return validateIfSealed(serializer, actualSerializer, classDiscriminator);
}
function trySkip($this, _this__u8e3s4, unknownKey) {
  if (_this__u8e3s4 == null)
    return false;
  if (_this__u8e3s4.h3x_1 === unknownKey) {
    _this__u8e3s4.h3x_1 = null;
    return true;
  }
  return false;
}
function skipLeftoverElements($this, descriptor) {
  while (!($this.l10(descriptor) === -1)) {
  }
}
function checkLeadingComma($this) {
  if ($this.d3q_1.w3w() === 4) {
    $this.d3q_1.j3v('Unexpected leading comma');
  }
}
function decodeMapIndex($this) {
  var hasComma = false;
  var decodingKey = !(($this.f3q_1 % 2 | 0) === 0);
  if (decodingKey) {
    if (!($this.f3q_1 === -1)) {
      hasComma = $this.d3q_1.j3x();
    }
  } else {
    $this.d3q_1.i3x(_Char___init__impl__6a9atx(58));
  }
  var tmp;
  if ($this.d3q_1.y3w()) {
    if (decodingKey) {
      if ($this.f3q_1 === -1) {
        var tmp0 = $this.d3q_1;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var condition = !hasComma;
        var position = tmp0.j3q_1;
        if (!condition) {
          var tmp$ret$0 = 'Unexpected leading comma';
          tmp0.j3v(tmp$ret$0, position);
        }
      } else {
        var tmp0_0 = $this.d3q_1;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var condition_0 = hasComma;
        var position_0 = tmp0_0.j3q_1;
        if (!condition_0) {
          var tmp$ret$2 = 'Expected comma after the key-value pair';
          tmp0_0.j3v(tmp$ret$2, position_0);
        }
      }
    }
    $this.f3q_1 = $this.f3q_1 + 1 | 0;
    tmp = $this.f3q_1;
  } else {
    if (hasComma && !$this.b3q_1.u3p_1.v3r_1) {
      invalidTrailingComma($this.d3q_1);
    }
    tmp = -1;
  }
  return tmp;
}
function coerceInputValue($this, descriptor, index) {
  var tmp0 = $this.b3q_1;
  var tmp$ret$1;
  $l$block_2: {
    // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
    var isOptional = descriptor.jy(index);
    var elementDescriptor = descriptor.iy(index);
    var tmp;
    if (isOptional && !elementDescriptor.ux()) {
      tmp = $this.d3q_1.k3x(true);
    } else {
      tmp = false;
    }
    if (tmp) {
      tmp$ret$1 = true;
      break $l$block_2;
    }
    if (equals(elementDescriptor.by(), ENUM_getInstance())) {
      var tmp_0;
      if (elementDescriptor.ux()) {
        tmp_0 = $this.d3q_1.k3x(false);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$1 = false;
        break $l$block_2;
      }
      var tmp0_elvis_lhs = $this.d3q_1.l3x($this.h3q_1.j3r_1);
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$1 = false;
        break $l$block_2;
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      var enumValue = tmp_1;
      var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
      var coerceToNull = !tmp0.u3p_1.m3r_1 && elementDescriptor.ux();
      if (enumIndex === -3 && (isOptional || coerceToNull)) {
        $this.d3q_1.z3w();
        tmp$ret$1 = true;
        break $l$block_2;
      }
    }
    tmp$ret$1 = false;
  }
  return tmp$ret$1;
}
function decodeObjectIndex($this, descriptor) {
  var hasComma = $this.d3q_1.j3x();
  while ($this.d3q_1.y3w()) {
    hasComma = false;
    var key = decodeStringKey($this);
    $this.d3q_1.i3x(_Char___init__impl__6a9atx(58));
    var index = getJsonNameIndex(descriptor, $this.b3q_1, key);
    var tmp;
    if (!(index === -3)) {
      var tmp_0;
      if ($this.h3q_1.o3r_1 && coerceInputValue($this, descriptor, index)) {
        hasComma = $this.d3q_1.j3x();
        tmp_0 = false;
      } else {
        var tmp0_safe_receiver = $this.i3q_1;
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.a3v(index);
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
  if (hasComma && !$this.b3q_1.u3p_1.v3r_1) {
    invalidTrailingComma($this.d3q_1);
  }
  var tmp1_safe_receiver = $this.i3q_1;
  var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.b3v();
  return tmp2_elvis_lhs == null ? -1 : tmp2_elvis_lhs;
}
function handleUnknown($this, descriptor, key) {
  if (ignoreUnknownKeys(descriptor, $this.b3q_1) || trySkip($this, $this.g3q_1, key)) {
    $this.d3q_1.n3x($this.h3q_1.j3r_1);
  } else {
    $this.d3q_1.k3q_1.c3w();
    $this.d3q_1.m3x(key);
  }
  return $this.d3q_1.j3x();
}
function decodeListIndex($this) {
  var hasComma = $this.d3q_1.j3x();
  var tmp;
  if ($this.d3q_1.y3w()) {
    if (!($this.f3q_1 === -1) && !hasComma) {
      $this.d3q_1.j3v('Expected end of the array or comma');
    }
    $this.f3q_1 = $this.f3q_1 + 1 | 0;
    tmp = $this.f3q_1;
  } else {
    if (hasComma && !$this.b3q_1.u3p_1.v3r_1) {
      invalidTrailingComma($this.d3q_1, 'array');
    }
    tmp = -1;
  }
  return tmp;
}
function decodeStringKey($this) {
  var tmp;
  if ($this.h3q_1.j3r_1) {
    tmp = $this.d3q_1.p3x();
  } else {
    tmp = $this.d3q_1.o3x();
  }
  return tmp;
}
function get_unsignedNumberDescriptors() {
  _init_properties_StreamingJsonEncoder_kt__pn1bsi();
  return unsignedNumberDescriptors;
}
var unsignedNumberDescriptors;
function encodeTypeInfo($this, discriminator, serialName) {
  $this.h3w_1.x3t();
  $this.z10(discriminator);
  $this.h3w_1.a3u(_Char___init__impl__6a9atx(58));
  $this.h3w_1.z3t();
  $this.z10(serialName);
}
function get_isUnsignedNumber(_this__u8e3s4) {
  _init_properties_StreamingJsonEncoder_kt__pn1bsi();
  return _this__u8e3s4.cy() && get_unsignedNumberDescriptors().y3(_this__u8e3s4);
}
function get_isUnquotedLiteral(_this__u8e3s4) {
  _init_properties_StreamingJsonEncoder_kt__pn1bsi();
  return _this__u8e3s4.cy() && equals(_this__u8e3s4, get_jsonUnquotedLiteralDescriptor());
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
function toBooleanStrictOrNull_0(_this__u8e3s4) {
  _init_properties_StringOps_kt__fcy1db();
  return equals_0(_this__u8e3s4, 'true', true) ? true : equals_0(_this__u8e3s4, 'false', true) ? false : null;
}
function printQuoted(_this__u8e3s4, value) {
  _init_properties_StringOps_kt__fcy1db();
  _this__u8e3s4.p1(_Char___init__impl__6a9atx(34));
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
        _this__u8e3s4.bh(value, lastPos, i);
        _this__u8e3s4.n1(get_ESCAPE_STRINGS()[c]);
        lastPos = i + 1 | 0;
      }
    }
     while (inductionVariable <= last);
  if (!(lastPos === 0))
    _this__u8e3s4.bh(value, lastPos, value.length);
  else
    _this__u8e3s4.n1(value);
  _this__u8e3s4.p1(_Char___init__impl__6a9atx(34));
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
    var tmp$ret$1 = Char__toInt_impl_vasixd(this_9);
    this_7[tmp] = toByte(tmp$ret$1);
    // Inline function 'kotlin.code' call
    var this_10 = _Char___init__impl__6a9atx(92);
    var tmp_0 = Char__toInt_impl_vasixd(this_10);
    // Inline function 'kotlin.code' call
    var this_11 = _Char___init__impl__6a9atx(92);
    var tmp$ret$3 = Char__toInt_impl_vasixd(this_11);
    this_7[tmp_0] = toByte(tmp$ret$3);
    // Inline function 'kotlin.code' call
    var this_12 = _Char___init__impl__6a9atx(9);
    var tmp_1 = Char__toInt_impl_vasixd(this_12);
    // Inline function 'kotlin.code' call
    var this_13 = _Char___init__impl__6a9atx(116);
    var tmp$ret$5 = Char__toInt_impl_vasixd(this_13);
    this_7[tmp_1] = toByte(tmp$ret$5);
    // Inline function 'kotlin.code' call
    var this_14 = _Char___init__impl__6a9atx(8);
    var tmp_2 = Char__toInt_impl_vasixd(this_14);
    // Inline function 'kotlin.code' call
    var this_15 = _Char___init__impl__6a9atx(98);
    var tmp$ret$7 = Char__toInt_impl_vasixd(this_15);
    this_7[tmp_2] = toByte(tmp$ret$7);
    // Inline function 'kotlin.code' call
    var this_16 = _Char___init__impl__6a9atx(10);
    var tmp_3 = Char__toInt_impl_vasixd(this_16);
    // Inline function 'kotlin.code' call
    var this_17 = _Char___init__impl__6a9atx(110);
    var tmp$ret$9 = Char__toInt_impl_vasixd(this_17);
    this_7[tmp_3] = toByte(tmp$ret$9);
    // Inline function 'kotlin.code' call
    var this_18 = _Char___init__impl__6a9atx(13);
    var tmp_4 = Char__toInt_impl_vasixd(this_18);
    // Inline function 'kotlin.code' call
    var this_19 = _Char___init__impl__6a9atx(114);
    var tmp$ret$11 = Char__toInt_impl_vasixd(this_19);
    this_7[tmp_4] = toByte(tmp$ret$11);
    // Inline function 'kotlin.code' call
    var this_20 = _Char___init__impl__6a9atx(102);
    var tmp$ret$12 = Char__toInt_impl_vasixd(this_20);
    this_7[12] = toByte(tmp$ret$12);
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
  return input.tz(deserializer);
}
function unparsedPrimitive($this, literal, primitive, tag) {
  var type = startsWith(primitive, 'i') ? 'an ' + primitive : 'a ' + primitive;
  throw JsonDecodingException_0(-1, "Failed to parse literal '" + literal.toString() + "' as " + type + ' value at element: ' + $this.h3y(tag), toString($this.i3y()));
}
function setForceNull($this, descriptor, index) {
  $this.f3z_1 = (!$this.c3s().u3p_1.m3r_1 && !descriptor.jy(index) && descriptor.iy(index).ux());
  return $this.f3z_1;
}
function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
  return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.mv())).tz(deserializer);
}
function writeJson(json, value, serializer) {
  var result = {_v: null};
  var encoder = new JsonTreeEncoder(json, writeJson$lambda(result));
  encoder.n11(serializer, value);
  var tmp;
  if (result._v == null) {
    throwUninitializedPropertyAccessException('result');
  } else {
    tmp = result._v;
  }
  return tmp;
}
function inlineUnsignedNumberEncoder($this, tag) {
  return AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1.q41($this, tag);
}
function inlineUnquotedLiteralEncoder($this, tag, inlineDescriptor) {
  return AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1.u41($this, tag, inlineDescriptor);
}
function AbstractJsonTreeEncoder$beginStructure$lambda(this$0) {
  return (node) => {
    this$0.y40(this$0.n1f(), node);
    return Unit_instance;
  };
}
function get_requiresTopLevelTag(_this__u8e3s4) {
  var tmp;
  var tmp_0 = _this__u8e3s4.by();
  if (tmp_0 instanceof PrimitiveKind) {
    tmp = true;
  } else {
    tmp = _this__u8e3s4.by() === ENUM_getInstance();
  }
  return tmp;
}
function _get_tag__e6h4qf($this) {
  var tmp = $this.d42_1;
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
  var tmp0_subject = desc.by();
  var tmp;
  if (tmp0_subject instanceof PolymorphicKind) {
    tmp = WriteMode_POLY_OBJ_getInstance();
  } else {
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp = WriteMode_LIST_getInstance();
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var keyDescriptor = carrierDescriptor(desc.iy(0), _this__u8e3s4.j10());
        var keyKind = keyDescriptor.by();
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
          if (_this__u8e3s4.u3p_1.k3r_1) {
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
  if (equals(_this__u8e3s4.by(), CONTEXTUAL_getInstance())) {
    var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
    tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
  } else if (_this__u8e3s4.cy()) {
    tmp = carrierDescriptor(_this__u8e3s4.iy(0), module_0);
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
  $this.t42(lastPosition, current);
  return appendEsc($this, current + 1 | 0);
}
function decodedString($this, lastPosition, currentPosition) {
  $this.t42(lastPosition, currentPosition);
  var result = $this.m3q_1.toString();
  $this.m3q_1.hh(0);
  return result;
}
function takePeeked($this) {
  // Inline function 'kotlin.also' call
  var this_0 = ensureNotNull($this.l3q_1);
  $this.l3q_1 = null;
  return this_0;
}
function wasUnquotedString($this) {
  return !(charSequenceGet($this.u42(), $this.j3q_1 - 1 | 0) === _Char___init__impl__6a9atx(34));
}
function appendEsc($this, startPosition) {
  var currentPosition = startPosition;
  currentPosition = $this.v42(currentPosition);
  if (currentPosition === -1) {
    $this.j3v('Expected escape sequence to continue, got EOF');
  }
  var tmp = $this.u42();
  var _unary__edvuaz = currentPosition;
  currentPosition = _unary__edvuaz + 1 | 0;
  var currentChar = charSequenceGet(tmp, _unary__edvuaz);
  if (currentChar === _Char___init__impl__6a9atx(117)) {
    return appendHex($this, $this.u42(), currentPosition);
  }
  // Inline function 'kotlin.code' call
  var tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
  var c = escapeToChar(tmp$ret$0);
  if (c === _Char___init__impl__6a9atx(0)) {
    $this.j3v("Invalid escaped char '" + toString_1(currentChar) + "'");
  }
  $this.m3q_1.p1(c);
  return currentPosition;
}
function appendHex($this, source, startPos) {
  if ((startPos + 4 | 0) >= charSequenceLength(source)) {
    $this.j3q_1 = startPos;
    $this.w42();
    if (($this.j3q_1 + 4 | 0) >= charSequenceLength(source)) {
      $this.j3v('Unexpected EOF during unicode escape');
    }
    return appendHex($this, source, $this.j3q_1);
  }
  $this.m3q_1.p1(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
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
    $this.j3v("Invalid toHexChar char '" + toString_1(character) + "' in unicode escape");
  }
  return tmp;
}
function consumeBoolean2($this, start) {
  var current = $this.v42(start);
  if (current >= charSequenceLength($this.u42()) || current === -1) {
    $this.j3v('EOF');
  }
  var tmp = $this.u42();
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
      $this.j3v("Expected valid boolean literal prefix, but had '" + $this.a3x() + "'");
    }
  }
  return tmp_0;
}
function consumeBooleanLiteral($this, literalSuffix, current) {
  if ((charSequenceLength($this.u42()) - current | 0) < literalSuffix.length) {
    $this.j3v('Unexpected end of boolean literal');
  }
  var inductionVariable = 0;
  var last = charSequenceLength(literalSuffix) - 1 | 0;
  if (inductionVariable <= last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var expected = charCodeAt(literalSuffix, i);
      var actual = charSequenceGet($this.u42(), current + i | 0);
      // Inline function 'kotlin.code' call
      var tmp = Char__toInt_impl_vasixd(expected);
      // Inline function 'kotlin.code' call
      if (!(tmp === (Char__toInt_impl_vasixd(actual) | 32))) {
        $this.j3v("Expected valid boolean literal prefix, but had '" + $this.a3x() + "'");
      }
    }
     while (inductionVariable <= last);
  $this.j3q_1 = current + literalSuffix.length | 0;
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
function charToTokenClass(c) {
  var tmp;
  // Inline function 'kotlin.code' call
  if (Char__toInt_impl_vasixd(c) < 126) {
    var tmp_0 = CharMappings_getInstance().c43_1;
    // Inline function 'kotlin.code' call
    tmp = tmp_0[Char__toInt_impl_vasixd(c)];
  } else {
    tmp = 0;
  }
  return tmp;
}
function tokenDescription(token) {
  return token === 1 ? "quotation mark '\"'" : token === 2 ? "string escape sequence '\\'" : token === 4 ? "comma ','" : token === 5 ? "colon ':'" : token === 6 ? "start of the object '{'" : token === 7 ? "end of the object '}'" : token === 8 ? "start of the array '['" : token === 9 ? "end of the array ']'" : token === 10 ? 'end of the input' : token === 127 ? 'invalid token' : 'valid token';
}
function escapeToChar(c) {
  return c < 117 ? CharMappings_getInstance().b43_1[c] : _Char___init__impl__6a9atx(0);
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
    $this.b43_1[tmp$ret$0] = numberToChar(c);
  }
}
function initC2ESC_0($this, c, esc) {
  // Inline function 'kotlin.code' call
  var tmp$ret$0 = Char__toInt_impl_vasixd(c);
  return initC2ESC($this, tmp$ret$0, esc);
}
function initC2TC($this, c, cl) {
  $this.c43_1[c] = cl;
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
  return !json.u3p_1.w3r_1 ? new StringJsonLexer(source) : new StringJsonLexerWithComments(source);
}
function get_schemaCache(_this__u8e3s4) {
  return _this__u8e3s4.w3p_1;
}
function createMapForCache(initialCapacity) {
  return HashMap.q9(initialCapacity);
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
initMetadataForClass(JsonArray, 'JsonArray', VOID, VOID, [JsonElement, KtList], VOID, VOID, {0: JsonArraySerializer_getInstance});
initMetadataForCompanion(Companion_2);
initMetadataForClass(JsonObject, 'JsonObject', VOID, VOID, [JsonElement, KtMap], VOID, VOID, {0: JsonObjectSerializer_getInstance});
initMetadataForObject(JsonNull, 'JsonNull', VOID, VOID, [JsonPrimitive, SerializerFactory], VOID, VOID, {0: JsonNullSerializer_getInstance});
initMetadataForClass(JsonLiteral, 'JsonLiteral');
initMetadataForObject(JsonElementSerializer, 'JsonElementSerializer', VOID, VOID, [KSerializer]);
initMetadataForObject(JsonPrimitiveSerializer, 'JsonPrimitiveSerializer', VOID, VOID, [KSerializer]);
initMetadataForObject(JsonArrayDescriptor, 'JsonArrayDescriptor', VOID, VOID, [SerialDescriptor]);
initMetadataForObject(JsonArraySerializer, 'JsonArraySerializer', VOID, VOID, [KSerializer]);
initMetadataForObject(JsonObjectDescriptor, 'JsonObjectDescriptor', VOID, VOID, [SerialDescriptor]);
initMetadataForObject(JsonObjectSerializer, 'JsonObjectSerializer', VOID, VOID, [KSerializer]);
initMetadataForObject(JsonNullSerializer, 'JsonNullSerializer', VOID, VOID, [KSerializer]);
initMetadataForObject(JsonLiteralSerializer, 'JsonLiteralSerializer', VOID, VOID, [KSerializer]);
protoOf(defer$1).ux = get_isNullable;
protoOf(defer$1).cy = get_isInline;
protoOf(defer$1).ey = get_annotations;
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
protoOf(JsonSerializersModuleValidator).i1h = contextual;
initMetadataForClass(JsonSerializersModuleValidator, 'JsonSerializersModuleValidator', VOID, VOID, [SerializersModuleCollector]);
initMetadataForLambda(JsonTreeReader$readDeepRecursive$slambda, VOID, VOID, [2]);
initMetadataForClass(JsonTreeReader, 'JsonTreeReader', VOID, VOID, VOID, [1]);
initMetadataForClass(Key, 'Key', Key);
initMetadataForClass(DescriptorSchemaCache, 'DescriptorSchemaCache', DescriptorSchemaCache);
initMetadataForClass(DiscriminatorHolder, 'DiscriminatorHolder');
initMetadataForClass(StreamingJsonDecoder, 'StreamingJsonDecoder', VOID, VOID, [JsonDecoder, AbstractDecoder]);
initMetadataForClass(JsonDecoderForUnsignedTypes, 'JsonDecoderForUnsignedTypes');
initMetadataForClass(StreamingJsonEncoder, 'StreamingJsonEncoder', VOID, VOID, [JsonEncoder, AbstractEncoder]);
initMetadataForClass(AbstractJsonTreeDecoder, 'AbstractJsonTreeDecoder', VOID, VOID, [NamedValueDecoder, JsonDecoder]);
initMetadataForClass(JsonTreeDecoder, 'JsonTreeDecoder');
initMetadataForClass(JsonTreeListDecoder, 'JsonTreeListDecoder');
initMetadataForClass(JsonPrimitiveDecoder, 'JsonPrimitiveDecoder');
initMetadataForClass(JsonTreeMapDecoder, 'JsonTreeMapDecoder');
initMetadataForClass(AbstractJsonTreeEncoder, 'AbstractJsonTreeEncoder', VOID, VOID, [NamedValueEncoder, JsonEncoder]);
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
