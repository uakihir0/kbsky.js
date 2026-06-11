import {
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  VOID3gxj6tk5isa35 as VOID,
  getStringHashCode26igk1bx568vk as getStringHashCode,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  Unit_instance3vdlo4e4f5ggx as Unit_instance,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  emptyList1g2z5xcrvp2zy as emptyList,
  LinkedHashMap1zhqxkxv3xnkl as LinkedHashMap,
  toString1pkumu07cwy4m as toString,
  hashCodeq5arwsb9dgti as hashCode,
  equals2au1ep9vhcato as equals,
  protoOf180f3jzyo7rfj as protoOf,
  toHexString5bhtjxqec7ow as toHexString,
  ArrayList3it5z8td81qkl as ArrayList,
  charSequenceLength3278n89t01tmv as charSequenceLength,
  charSequenceGet1vxk1y5n17t1z as charSequenceGet,
  Char19o2r8palgjof as Char,
  to2cs3ny02qtbcb as to,
  _Char___init__impl__6a9atx2yltdocdrxs4d as _Char___init__impl__6a9atx,
  collectionSizeOrDefault36dulx8yinfqm as collectionSizeOrDefault,
  until1jbpn0z3f8lbg as until,
  substring2pnd9wgs9hwtx as substring,
  getKClass3t8tygqu4lcxf as getKClass,
  arrayOf1akklvh2at202 as arrayOf,
  createKType31ecntyyaay3k as createKType,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  isInterface3d6p8outrmvmk as isInterface,
  IllegalStateExceptionkoljg5n0nrlr as IllegalStateException,
  ensureNotNull1e947j3ixpazm as ensureNotNull,
  split2bvyvnrlcifjv as split,
  take3onnpy6q7ctcz as take,
  copyToArray2j022khrow2yi as copyToArray,
  println2shhhgwwt4c61 as println,
  Exceptiondt2hlxn7j7vw as Exception,
  printStackTrace18lnx7a39cni as printStackTrace,
  constructCallableReference23y65rf941mch as constructCallableReference,
  promisify1z0ncraq1ipzh as promisify,
  await335x4cz7ixnm4 as await_0,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  createThis2j2avj17cvnv2 as createThis,
  LazyThreadSafetyMode_PUBLICATION_getInstance20ynwq7b0awd8 as LazyThreadSafetyMode_PUBLICATION_getInstance,
  lazy1261dae0bgscp as lazy,
  toString30pk9tzaqopn as toString_0,
} from './kotlin-kotlin-stdlib.mjs';
import {
  ATProtocolConfig30bbb1gj7trou as ATProtocolConfig,
  Service_BSKY_NETWORK_getInstance1bnjibikplwin as Service_BSKY_NETWORK_getInstance,
  toMappedJsondipekar19jef as toMappedJson,
  addParam376b888wfin4l as addParam,
  MapRequest2vm46zr2igv5e as MapRequest,
  RepoGetRecordRequest12sssrl1p80cm as RepoGetRecordRequest,
  ATProtocolImpl2hdun0rm126ks as ATProtocolImpl,
} from './kbsky-core.mjs';
import { Cbor2f4m7hu7pld6l as Cbor } from './kotlinx-serialization-kotlinx-serialization-cbor.mjs';
import {
  serializer1i4e9ym37oxmo as serializer,
  KSerializerzf77vz1967fq as KSerializer,
  decodeFromHexStringteg6eww8pz9e as decodeFromHexString,
  PluginGeneratedSerialDescriptorqdzeg5asqhfg as PluginGeneratedSerialDescriptor,
  StringSerializer_getInstancerxlnwnlbnwri as StringSerializer_getInstance,
  UnknownFieldExceptiona60e3a6v1xqo as UnknownFieldException,
  get_nullable197rfua9r7fsz as get_nullable,
  typeParametersSerializers2likxjr48tr7y as typeParametersSerializers,
  GeneratedSerializer1f7t7hssdd2ws as GeneratedSerializer,
  throwMissingFieldException2cmke0v3ynf14 as throwMissingFieldException,
  SerializableWithd2dap36updxd as SerializableWith,
  ArrayListSerializer7k5wnrulb3y6 as ArrayListSerializer,
  IntSerializer_getInstance3hkg1llvt1c0z as IntSerializer_getInstance,
} from './kotlinx-serialization-kotlinx-serialization-core.mjs';
import { WebsocketRequest38pjwt1m63ieg as WebsocketRequest } from './khttpclient.mjs';
import { Urlowwyg1lanrqp as Url } from './ktor-ktor-http.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
class ATProtocolStream {}
class ATProtocolStreamConfig extends ATProtocolConfig {
  constructor(firehoseUri) {
    firehoseUri = firehoseUri === VOID ? Service_BSKY_NETWORK_getInstance().j4l_1 : firehoseUri;
    super();
    this.firehoseUri = firehoseUri;
  }
  y78(_set____db54di) {
    this.firehoseUri = _set____db54di;
  }
  z78() {
    return this.firehoseUri;
  }
  zk() {
    return this.firehoseUri;
  }
  j5s(firehoseUri) {
    return new ATProtocolStreamConfig(firehoseUri);
  }
  copy(firehoseUri, $super) {
    firehoseUri = firehoseUri === VOID ? this.firehoseUri : firehoseUri;
    return $super === VOID ? this.j5s(firehoseUri) : $super.j5s.call(this, firehoseUri);
  }
  toString() {
    return 'ATProtocolStreamConfig(firehoseUri=' + this.firehoseUri + ')';
  }
  hashCode() {
    return getStringHashCode(this.firehoseUri);
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof ATProtocolStreamConfig))
      return false;
    if (!(this.firehoseUri === other.firehoseUri))
      return false;
    return true;
  }
}
class ATProtocolStreamFactory {
  instanceFromUri(pdsUri, firehoseUri) {
    // Inline function 'kotlin.also' call
    var this_0 = new ATProtocolStreamConfig();
    this_0.pdsUri = pdsUri;
    this_0.firehoseUri = firehoseUri;
    return new ATProtocolStreamImpl(this_0);
  }
  a79(config) {
    return new ATProtocolStreamImpl(config);
  }
  instanceFromConfig(config, $super) {
    config = config === VOID ? new ATProtocolStreamConfig() : config;
    return $super === VOID ? this.a79(config) : $super.a79.call(this, config);
  }
}
class SyncResource {}
class SyncSubscribeReposRequest {
  constructor(cursor, filter) {
    cursor = cursor === VOID ? null : cursor;
    var tmp;
    if (filter === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp = emptyList();
    } else {
      tmp = filter;
    }
    filter = tmp;
    this.cursor = cursor;
    this.filter = filter;
  }
  i54(_set____db54di) {
    this.cursor = _set____db54di;
  }
  j54() {
    return this.cursor;
  }
  b79(_set____db54di) {
    this.filter = _set____db54di;
  }
  r57() {
    return this.filter;
  }
  toMap() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap.l5();
    this.addParam(this_0, 'cursor', this.cursor);
    return this_0;
  }
  zk() {
    return this.cursor;
  }
  al() {
    return this.filter;
  }
  c79(cursor, filter) {
    return new SyncSubscribeReposRequest(cursor, filter);
  }
  copy(cursor, filter, $super) {
    cursor = cursor === VOID ? this.cursor : cursor;
    filter = filter === VOID ? this.filter : filter;
    return $super === VOID ? this.c79(cursor, filter) : $super.c79.call(this, cursor, filter);
  }
  toString() {
    return 'SyncSubscribeReposRequest(cursor=' + this.cursor + ', filter=' + toString(this.filter) + ')';
  }
  hashCode() {
    var result = this.cursor == null ? 0 : getStringHashCode(this.cursor);
    result = imul(result, 31) + hashCode(this.filter) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof SyncSubscribeReposRequest))
      return false;
    if (!(this.cursor == other.cursor))
      return false;
    if (!equals(this.filter, other.filter))
      return false;
    return true;
  }
}
class SyncStreamClient {
  constructor(atproto, uri, filter) {
    var tmp;
    if (filter === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp = emptyList();
    } else {
      tmp = filter;
    }
    filter = tmp;
    this.atproto = atproto;
    this.uri = uri;
    this.filter = filter;
    this.client = new WebsocketRequest();
    this.isOpen = false;
    this.j79_1 = null;
    this.k79_1 = null;
    this.l79_1 = null;
    this.m79_1 = null;
    this.client.h44(this.uri);
    var tmp_0 = this.client;
    tmp_0.z43_1 = SyncStreamClient$slambda(this);
    var tmp_1 = this.client;
    tmp_1.a44_1 = SyncStreamClient$lambda(this);
    var tmp_2 = this.client;
    tmp_2.b44_1 = SyncStreamClient$lambda_0(this);
  }
  r70() {
    return this.atproto;
  }
  s55() {
    return this.uri;
  }
  r57() {
    return this.filter;
  }
  q79(_set____db54di) {
    this.client = _set____db54di;
  }
  r79() {
    return this.client;
  }
  s79(_set____db54di) {
    this.isOpen = _set____db54di;
  }
  t79() {
    return this.isOpen;
  }
  eventCallback(callback) {
    // Inline function 'kotlin.also' call
    this.j79_1 = callback;
    return this;
  }
  openedCallback(callback) {
    // Inline function 'kotlin.also' call
    this.k79_1 = callback;
    return this;
  }
  closedCallback(callback) {
    // Inline function 'kotlin.also' call
    this.l79_1 = callback;
    return this;
  }
  errorCallback(callback) {
    // Inline function 'kotlin.also' call
    this.m79_1 = callback;
    return this;
  }
  *u79($completion) {
    yield* this.client.i44($completion);
    return Unit_instance;
  }
  open() {
    return promisify(($completion) => this.u79($completion));
  }
  *v79($completion) {
    if (this.open === protoOf(SyncStreamClient).open)
      yield* this.u79($completion);
    else
      yield* await_0(this.open(), $completion);
    return Unit_instance;
  }
  close() {
    this.client.z6();
  }
}
class Companion {}
class $serializer {
  constructor() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kbsky.stream.entity.com.atproto.model.StreamOp', this, 2);
    tmp0_serialDesc.n17('action', true);
    tmp0_serialDesc.n17('path', true);
    this.w79_1 = tmp0_serialDesc;
  }
  x79(encoder, value) {
    var tmp0_desc = this.w79_1;
    var tmp1_output = encoder.wz(tmp0_desc);
    if (tmp1_output.u11(tmp0_desc, 0) ? true : !(value.h79_1 == null)) {
      tmp1_output.q11(tmp0_desc, 0, StringSerializer_getInstance(), value.h79_1);
    }
    if (tmp1_output.u11(tmp0_desc, 1) ? true : !(value.i79_1 == null)) {
      tmp1_output.q11(tmp0_desc, 1, StringSerializer_getInstance(), value.i79_1);
    }
    tmp1_output.xz(tmp0_desc);
  }
  nv(encoder, value) {
    return this.x79(encoder, value instanceof StreamOp ? value : THROW_CCE());
  }
  ov(decoder) {
    var tmp0_desc = this.w79_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.wz(tmp0_desc);
    if (tmp6_input.m10()) {
      tmp4_local0 = tmp6_input.k10(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.k10(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.n10(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.k10(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.k10(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.dx(tmp2_index);
        }
      }
    tmp6_input.xz(tmp0_desc);
    return StreamOp.y79(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  mv() {
    return this.w79_1;
  }
  c18() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class StreamOp {
  constructor(action, path) {
    action = action === VOID ? null : action;
    path = path === VOID ? null : path;
    this.h79_1 = action;
    this.i79_1 = path;
  }
  toString() {
    return 'StreamOp(action=' + this.h79_1 + ', path=' + this.i79_1 + ')';
  }
  hashCode() {
    var result = this.h79_1 == null ? 0 : getStringHashCode(this.h79_1);
    result = imul(result, 31) + (this.i79_1 == null ? 0 : getStringHashCode(this.i79_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof StreamOp))
      return false;
    if (!(this.h79_1 == other.h79_1))
      return false;
    if (!(this.i79_1 == other.i79_1))
      return false;
    return true;
  }
  static y79(seen0, action, path, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance().w79_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.h79_1 = null;
    else
      $this.h79_1 = action;
    if (0 === (seen0 & 2))
      $this.i79_1 = null;
    else
      $this.i79_1 = path;
    return $this;
  }
}
class Companion_0 {
  constructor() {
    Companion_instance_0 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.z79_1 = [null, null, lazy(tmp_0, StreamRoot$Companion$$childSerializers$_anonymous__gnm36w), null];
  }
}
class $serializer_0 {
  constructor() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kbsky.stream.entity.com.atproto.model.StreamRoot', this, 4);
    tmp0_serialDesc.n17('op', true);
    tmp0_serialDesc.n17('repo', true);
    tmp0_serialDesc.n17('ops', true);
    tmp0_serialDesc.n17('t', true);
    this.a7a_1 = tmp0_serialDesc;
  }
  b7a(encoder, value) {
    var tmp0_desc = this.a7a_1;
    var tmp1_output = encoder.wz(tmp0_desc);
    var tmp2_cached = Companion_getInstance_0().z79_1;
    if (tmp1_output.u11(tmp0_desc, 0) ? true : !(value.d79_1 == null)) {
      tmp1_output.q11(tmp0_desc, 0, IntSerializer_getInstance(), value.d79_1);
    }
    if (tmp1_output.u11(tmp0_desc, 1) ? true : !(value.e79_1 == null)) {
      tmp1_output.q11(tmp0_desc, 1, StringSerializer_getInstance(), value.e79_1);
    }
    if (tmp1_output.u11(tmp0_desc, 2) ? true : !(value.f79_1 == null)) {
      tmp1_output.q11(tmp0_desc, 2, tmp2_cached[2].w2(), value.f79_1);
    }
    if (tmp1_output.u11(tmp0_desc, 3) ? true : !(value.g79_1 == null)) {
      tmp1_output.q11(tmp0_desc, 3, StringSerializer_getInstance(), value.g79_1);
    }
    tmp1_output.xz(tmp0_desc);
  }
  nv(encoder, value) {
    return this.b7a(encoder, value instanceof StreamRoot ? value : THROW_CCE());
  }
  ov(decoder) {
    var tmp0_desc = this.a7a_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.wz(tmp0_desc);
    var tmp9_cached = Companion_getInstance_0().z79_1;
    if (tmp8_input.m10()) {
      tmp4_local0 = tmp8_input.k10(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.k10(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.k10(tmp0_desc, 2, tmp9_cached[2].w2(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.k10(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.n10(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.k10(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.k10(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.k10(tmp0_desc, 2, tmp9_cached[2].w2(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.k10(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException.dx(tmp2_index);
        }
      }
    tmp8_input.xz(tmp0_desc);
    return StreamRoot.c7a(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  mv() {
    return this.a7a_1;
  }
  c18() {
    var tmp0_cached = Companion_getInstance_0().z79_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[2].w2()), get_nullable(StringSerializer_getInstance())];
  }
}
class StreamRoot {
  constructor(op, repo, ops, t) {
    Companion_getInstance_0();
    op = op === VOID ? null : op;
    repo = repo === VOID ? null : repo;
    ops = ops === VOID ? null : ops;
    t = t === VOID ? null : t;
    this.d79_1 = op;
    this.e79_1 = repo;
    this.f79_1 = ops;
    this.g79_1 = t;
  }
  toString() {
    return 'StreamRoot(op=' + this.d79_1 + ', repo=' + this.e79_1 + ', ops=' + toString_0(this.f79_1) + ', t=' + this.g79_1 + ')';
  }
  hashCode() {
    var result = this.d79_1 == null ? 0 : this.d79_1;
    result = imul(result, 31) + (this.e79_1 == null ? 0 : getStringHashCode(this.e79_1)) | 0;
    result = imul(result, 31) + (this.f79_1 == null ? 0 : hashCode(this.f79_1)) | 0;
    result = imul(result, 31) + (this.g79_1 == null ? 0 : getStringHashCode(this.g79_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof StreamRoot))
      return false;
    if (!(this.d79_1 == other.d79_1))
      return false;
    if (!(this.e79_1 == other.e79_1))
      return false;
    if (!equals(this.f79_1, other.f79_1))
      return false;
    if (!(this.g79_1 == other.g79_1))
      return false;
    return true;
  }
  static c7a(seen0, op, repo, ops, t, serializationConstructorMarker) {
    Companion_getInstance_0();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_0().a7a_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.d79_1 = null;
    else
      $this.d79_1 = op;
    if (0 === (seen0 & 2))
      $this.e79_1 = null;
    else
      $this.e79_1 = repo;
    if (0 === (seen0 & 4))
      $this.f79_1 = null;
    else
      $this.f79_1 = ops;
    if (0 === (seen0 & 8))
      $this.g79_1 = null;
    else
      $this.g79_1 = t;
    return $this;
  }
}
class ATProtocolStreamImpl {
  constructor(config) {
    this.d7a_1 = new ATProtocolImpl(config);
    this.e7a_1 = new SyncResourceImpl(this.d7a_1, config);
  }
  sync() {
    return this.e7a_1;
  }
}
class SyncResourceImpl {
  constructor(atproto, config) {
    this.f7a_1 = atproto;
    this.g7a_1 = config;
  }
  subscribeRepos(request) {
    var url = 'wss://' + Url(this.g7a_1.firehoseUri).i38_1 + '/xrpc/' + 'com.atproto.sync.subscribeRepos';
    return new SyncStreamClient(this.f7a_1, url, request.filter);
  }
}
//endregion
var ATProtocolStreamFactory_instance;
function ATProtocolStreamFactory_getInstance() {
  return ATProtocolStreamFactory_instance;
}
function onMessage($this, data) {
  var cbor = Cbor(VOID, SyncStreamClient$onMessage$lambda);
  var hex = toHexString(data);
  // Inline function 'kotlin.text.mapIndexed' call
  // Inline function 'kotlin.text.mapIndexedTo' call
  var destination = ArrayList.y1(charSequenceLength(hex));
  var index = 0;
  var inductionVariable = 0;
  while (inductionVariable < charSequenceLength(hex)) {
    var item = charSequenceGet(hex, inductionVariable);
    inductionVariable = inductionVariable + 1 | 0;
    var _unary__edvuaz = index;
    index = _unary__edvuaz + 1 | 0;
    var tmp$ret$2 = to(_unary__edvuaz, new Char(item));
    destination.z1(tmp$ret$2);
  }
  // Inline function 'kotlin.collections.filter' call
  // Inline function 'kotlin.collections.filterTo' call
  var destination_0 = ArrayList.n2();
  var _iterator__ex2g4s = destination.l1();
  while (_iterator__ex2g4s.m1()) {
    var element = _iterator__ex2g4s.n1();
    if (equals(element.yk_1, new Char(_Char___init__impl__6a9atx(97)))) {
      destination_0.z1(element);
    }
  }
  // Inline function 'kotlin.collections.map' call
  // Inline function 'kotlin.collections.mapTo' call
  var destination_1 = ArrayList.y1(collectionSizeOrDefault(destination_0, 10));
  var _iterator__ex2g4s_0 = destination_0.l1();
  while (_iterator__ex2g4s_0.m1()) {
    var item_0 = _iterator__ex2g4s_0.n1();
    var tmp$ret$8 = item_0.xk_1;
    destination_1.z1(tmp$ret$8);
  }
  var indexes = destination_1;
  var _iterator__ex2g4s_1 = indexes.l1();
  $l$loop_1: while (_iterator__ex2g4s_1.m1()) {
    var ind = _iterator__ex2g4s_1.n1();
    try {
      var sub = substring(hex, until(ind, hex.length));
      // Inline function 'kotlinx.serialization.decodeFromHexString' call
      // Inline function 'kotlinx.serialization.serializer' call
      var this_0 = cbor.l10();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_1 = serializer(this_0, createKType(getKClass(StreamRoot), arrayOf([]), false));
      var tmp$ret$10 = isInterface(this_1, KSerializer) ? this_1 : THROW_CCE();
      var item_1 = decodeFromHexString(cbor, tmp$ret$10, sub);
      if (item_1.f79_1 == null) {
        continue $l$loop_1;
      }
      // Inline function 'kotlin.checkNotNull' call
      var tmp0 = item_1.f79_1;
      var tmp$ret$13;
      $l$block: {
        // Inline function 'kotlin.checkNotNull' call
        if (tmp0 == null) {
          var message = 'Required value was null.';
          throw IllegalStateException.o(toString(message));
        } else {
          tmp$ret$13 = tmp0;
          break $l$block;
        }
      }
      var _iterator__ex2g4s_2 = tmp$ret$13.l1();
      $l$loop_0: while (_iterator__ex2g4s_2.m1()) {
        var op = _iterator__ex2g4s_2.n1();
        if (!(op.h79_1 === 'create')) {
          continue $l$loop_0;
        }
        var path = op.i79_1;
        var repo = item_1.e79_1;
        var tmp0_0 = split(ensureNotNull(path), ['/']);
        var tmp$ret$15;
        $l$block_0: {
          // Inline function 'kotlin.collections.dropLastWhile' call
          if (!tmp0_0.j1()) {
            var iterator = tmp0_0.p2(tmp0_0.k2());
            while (iterator.o7()) {
              // Inline function 'kotlin.text.isEmpty' call
              var this_2 = iterator.q7();
              if (!(charSequenceLength(this_2) === 0)) {
                tmp$ret$15 = take(tmp0_0, iterator.p7() + 1 | 0);
                break $l$block_0;
              }
            }
          }
          tmp$ret$15 = emptyList();
        }
        // Inline function 'kotlin.collections.toTypedArray' call
        var this_3 = tmp$ret$15;
        var elements = copyToArray(this_3);
        try {
          var tmp;
          // Inline function 'kotlin.collections.isNotEmpty' call
          if (!$this.filter.j1()) {
            tmp = !$this.filter.t3(elements[0]);
          } else {
            tmp = false;
          }
          if (tmp) {
            return Unit_instance;
          }
          var response = $this.atproto.repo().k50(new RepoGetRecordRequest(ensureNotNull(repo), elements[0], elements[1]));
          var tmp0_safe_receiver = $this.j79_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.n79(response.data.cid, response.data.uri, response.data.value);
          }
        } catch ($p) {
          if ($p instanceof Exception) {
            var e = $p;
            println('[Record Deleted?] repo: ' + repo + ' path: ' + path);
          } else {
            throw $p;
          }
        }
      }
      return Unit_instance;
    } catch ($p_0) {
      if ($p_0 instanceof Exception) {
        var e_0 = $p_0;
        printStackTrace(e_0);
        continue $l$loop_1;
      } else {
        throw $p_0;
      }
    }
  }
}
function SyncStreamClient$slambda(this$0) {
  return constructCallableReference(function *(it, $completion) {
    onMessage(this$0, it);
    return Unit_instance;
  }, 1);
}
function SyncStreamClient$lambda(this$0) {
  return (it) => {
    this$0.isOpen = true;
    var tmp0_safe_receiver = this$0.k79_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.o79();
    }
    return Unit_instance;
  };
}
function SyncStreamClient$lambda_0(this$0) {
  return (it) => {
    this$0.isOpen = false;
    var tmp0_safe_receiver = this$0.l79_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.p79();
    }
    return Unit_instance;
  };
}
function SyncStreamClient$onMessage$lambda($this$Cbor) {
  $this$Cbor.p75_1 = true;
  return Unit_instance;
}
var Companion_instance;
function Companion_getInstance() {
  return Companion_instance;
}
var $serializer_instance;
function $serializer_getInstance() {
  if ($serializer_instance === VOID)
    new $serializer();
  return $serializer_instance;
}
function StreamRoot$Companion$$childSerializers$_anonymous__gnm36w() {
  return new ArrayListSerializer($serializer_getInstance());
}
var Companion_instance_0;
function Companion_getInstance_0() {
  if (Companion_instance_0 === VOID)
    new Companion_0();
  return Companion_instance_0;
}
var $serializer_instance_0;
function $serializer_getInstance_0() {
  if ($serializer_instance_0 === VOID)
    new $serializer_0();
  return $serializer_instance_0;
}
//region block: post-declaration
initMetadataForInterface(ATProtocolStream, 'ATProtocolStream');
initMetadataForClass(ATProtocolStreamConfig, 'ATProtocolStreamConfig', ATProtocolStreamConfig);
initMetadataForObject(ATProtocolStreamFactory, 'ATProtocolStreamFactory');
initMetadataForInterface(SyncResource, 'SyncResource');
protoOf(SyncSubscribeReposRequest).toMappedJson = toMappedJson;
protoOf(SyncSubscribeReposRequest).addParam = addParam;
initMetadataForClass(SyncSubscribeReposRequest, 'SyncSubscribeReposRequest', SyncSubscribeReposRequest, VOID, [MapRequest]);
initMetadataForClass(SyncStreamClient, 'SyncStreamClient', VOID, VOID, VOID, [0]);
initMetadataForCompanion(Companion);
protoOf($serializer).d18 = typeParametersSerializers;
initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(StreamOp, 'StreamOp', StreamOp, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
initMetadataForCompanion(Companion_0);
protoOf($serializer_0).d18 = typeParametersSerializers;
initMetadataForObject($serializer_0, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(StreamRoot, 'StreamRoot', StreamRoot, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_0});
initMetadataForClass(ATProtocolStreamImpl, 'ATProtocolStreamImpl', VOID, VOID, [ATProtocolStream]);
initMetadataForClass(SyncResourceImpl, 'SyncResourceImpl', VOID, VOID, [SyncResource]);
//endregion
//region block: init
ATProtocolStreamFactory_instance = new ATProtocolStreamFactory();
Companion_instance = new Companion();
//endregion
//region block: exports
var ATProtocolStreamFactory_0 = {getInstance: ATProtocolStreamFactory_getInstance};
export {
  ATProtocolStreamConfig as ATProtocolStreamConfig,
  ATProtocolStreamFactory_0 as ATProtocolStreamFactory,
  SyncSubscribeReposRequest as SyncSubscribeReposRequest,
  SyncStreamClient as SyncStreamClient,
};
export {
  ATProtocolStreamFactory_instance as ATProtocolStreamFactory_instance39386ha3c9qz7,
};
//endregion

//# sourceMappingURL=kbsky-stream.mjs.map
