import {
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  VOID3gxj6tk5isa35 as VOID,
  getStringHashCode26igk1bx568vk as getStringHashCode,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  Unit_instancev9v8hjid95df as Unit_instance,
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
  _Char___init__impl__6a9atx2gndcvjvc5pke as _Char___init__impl__6a9atx,
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
  isByteArray4nnzfn1x4o3w as isByteArray,
  initMetadataForLambda3af3he42mmnh as initMetadataForLambda,
  promisify1z0ncraq1ipzh as promisify,
  await2s6xyuld384ut as await_0,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  createThis2j2avj17cvnv2 as createThis,
  LazyThreadSafetyMode_PUBLICATION_getInstance3qslfm3vqg6y3 as LazyThreadSafetyMode_PUBLICATION_getInstance,
  lazy1261dae0bgscp as lazy,
  toString30pk9tzaqopn as toString_0,
} from './kotlin-kotlin-stdlib.mjs';
import {
  ATProtocolConfig30bbb1gj7trou as ATProtocolConfig,
  Service_BSKY_NETWORK_getInstance1nvieq3ty27ro as Service_BSKY_NETWORK_getInstance,
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
  StringSerializer_getInstance11v9md0a7d9yk as StringSerializer_getInstance,
  UnknownFieldExceptiona60e3a6v1xqo as UnknownFieldException,
  get_nullable197rfua9r7fsz as get_nullable,
  typeParametersSerializers2likxjr48tr7y as typeParametersSerializers,
  GeneratedSerializer1f7t7hssdd2ws as GeneratedSerializer,
  throwMissingFieldException2cmke0v3ynf14 as throwMissingFieldException,
  SerializableWithd2dap36updxd as SerializableWith,
  ArrayListSerializer7k5wnrulb3y6 as ArrayListSerializer,
  IntSerializer_getInstanceuhm8c1wku08l as IntSerializer_getInstance,
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
    firehoseUri = firehoseUri === VOID ? Service_BSKY_NETWORK_getInstance().a4r_1 : firehoseUri;
    super();
    this.firehoseUri = firehoseUri;
  }
  k7n(_set____db54di) {
    this.firehoseUri = _set____db54di;
  }
  l7n() {
    return this.firehoseUri;
  }
  zk() {
    return this.firehoseUri;
  }
  e5x(firehoseUri) {
    return new ATProtocolStreamConfig(firehoseUri);
  }
  copy(firehoseUri, $super) {
    firehoseUri = firehoseUri === VOID ? this.firehoseUri : firehoseUri;
    return $super === VOID ? this.e5x(firehoseUri) : $super.e5x.call(this, firehoseUri);
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
  m7n(config) {
    return new ATProtocolStreamImpl(config);
  }
  instanceFromConfig(config, $super) {
    config = config === VOID ? new ATProtocolStreamConfig() : config;
    return $super === VOID ? this.m7n(config) : $super.m7n.call(this, config);
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
  s59(_set____db54di) {
    this.cursor = _set____db54di;
  }
  t59() {
    return this.cursor;
  }
  n7n(_set____db54di) {
    this.filter = _set____db54di;
  }
  b5d() {
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
  o7n(cursor, filter) {
    return new SyncSubscribeReposRequest(cursor, filter);
  }
  copy(cursor, filter, $super) {
    cursor = cursor === VOID ? this.cursor : cursor;
    filter = filter === VOID ? this.filter : filter;
    return $super === VOID ? this.o7n(cursor, filter) : $super.o7n.call(this, cursor, filter);
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
class SyncStreamClient$slambda {
  constructor(this$0) {
    this.a7o_1 = this$0;
  }
  *r48(it, $completion) {
    onMessage(this.a7o_1, it);
    return Unit_instance;
  }
  qd(p1, $completion) {
    return this.r48((!(p1 == null) ? isByteArray(p1) : false) ? p1 : THROW_CCE(), $completion);
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
    this.v7n_1 = null;
    this.w7n_1 = null;
    this.x7n_1 = null;
    this.y7n_1 = null;
    this.client.v48(this.uri);
    var tmp_0 = this.client;
    tmp_0.i48_1 = SyncStreamClient$slambda_0(this);
    var tmp_1 = this.client;
    tmp_1.j48_1 = SyncStreamClient$lambda(this);
    var tmp_2 = this.client;
    tmp_2.k48_1 = SyncStreamClient$lambda_0(this);
  }
  d7f() {
    return this.atproto;
  }
  c5b() {
    return this.uri;
  }
  b5d() {
    return this.filter;
  }
  d7o(_set____db54di) {
    this.client = _set____db54di;
  }
  e7o() {
    return this.client;
  }
  f7o(_set____db54di) {
    this.isOpen = _set____db54di;
  }
  g7o() {
    return this.isOpen;
  }
  eventCallback(callback) {
    // Inline function 'kotlin.also' call
    this.v7n_1 = callback;
    return this;
  }
  openedCallback(callback) {
    // Inline function 'kotlin.also' call
    this.w7n_1 = callback;
    return this;
  }
  closedCallback(callback) {
    // Inline function 'kotlin.also' call
    this.x7n_1 = callback;
    return this;
  }
  errorCallback(callback) {
    // Inline function 'kotlin.also' call
    this.y7n_1 = callback;
    return this;
  }
  *h7o($completion) {
    yield* this.client.w48($completion);
    return Unit_instance;
  }
  open() {
    return promisify(($completion) => this.h7o($completion));
  }
  *i7o($completion) {
    if (this.open === protoOf(SyncStreamClient).open)
      yield* this.h7o($completion);
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
    tmp0_serialDesc.e17('action', true);
    tmp0_serialDesc.e17('path', true);
    this.j7o_1 = tmp0_serialDesc;
  }
  k7o(encoder, value) {
    var tmp0_desc = this.j7o_1;
    var tmp1_output = encoder.nz(tmp0_desc);
    if (tmp1_output.l11(tmp0_desc, 0) ? true : !(value.t7n_1 == null)) {
      tmp1_output.h11(tmp0_desc, 0, StringSerializer_getInstance(), value.t7n_1);
    }
    if (tmp1_output.l11(tmp0_desc, 1) ? true : !(value.u7n_1 == null)) {
      tmp1_output.h11(tmp0_desc, 1, StringSerializer_getInstance(), value.u7n_1);
    }
    tmp1_output.oz(tmp0_desc);
  }
  ev(encoder, value) {
    return this.k7o(encoder, value instanceof StreamOp ? value : THROW_CCE());
  }
  fv(decoder) {
    var tmp0_desc = this.j7o_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.nz(tmp0_desc);
    if (tmp6_input.d10()) {
      tmp4_local0 = tmp6_input.b10(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.b10(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.e10(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.b10(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.b10(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.uw(tmp2_index);
        }
      }
    tmp6_input.oz(tmp0_desc);
    return StreamOp.l7o(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  dv() {
    return this.j7o_1;
  }
  t17() {
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
    this.t7n_1 = action;
    this.u7n_1 = path;
  }
  toString() {
    return 'StreamOp(action=' + this.t7n_1 + ', path=' + this.u7n_1 + ')';
  }
  hashCode() {
    var result = this.t7n_1 == null ? 0 : getStringHashCode(this.t7n_1);
    result = imul(result, 31) + (this.u7n_1 == null ? 0 : getStringHashCode(this.u7n_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof StreamOp))
      return false;
    if (!(this.t7n_1 == other.t7n_1))
      return false;
    if (!(this.u7n_1 == other.u7n_1))
      return false;
    return true;
  }
  static l7o(seen0, action, path, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance().j7o_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.t7n_1 = null;
    else
      $this.t7n_1 = action;
    if (0 === (seen0 & 2))
      $this.u7n_1 = null;
    else
      $this.u7n_1 = path;
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
    tmp.m7o_1 = [null, null, lazy(tmp_0, StreamRoot$Companion$$childSerializers$_anonymous__gnm36w), null];
  }
}
class $serializer_0 {
  constructor() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kbsky.stream.entity.com.atproto.model.StreamRoot', this, 4);
    tmp0_serialDesc.e17('op', true);
    tmp0_serialDesc.e17('repo', true);
    tmp0_serialDesc.e17('ops', true);
    tmp0_serialDesc.e17('t', true);
    this.n7o_1 = tmp0_serialDesc;
  }
  o7o(encoder, value) {
    var tmp0_desc = this.n7o_1;
    var tmp1_output = encoder.nz(tmp0_desc);
    var tmp2_cached = Companion_getInstance_0().m7o_1;
    if (tmp1_output.l11(tmp0_desc, 0) ? true : !(value.p7n_1 == null)) {
      tmp1_output.h11(tmp0_desc, 0, IntSerializer_getInstance(), value.p7n_1);
    }
    if (tmp1_output.l11(tmp0_desc, 1) ? true : !(value.q7n_1 == null)) {
      tmp1_output.h11(tmp0_desc, 1, StringSerializer_getInstance(), value.q7n_1);
    }
    if (tmp1_output.l11(tmp0_desc, 2) ? true : !(value.r7n_1 == null)) {
      tmp1_output.h11(tmp0_desc, 2, tmp2_cached[2].w2(), value.r7n_1);
    }
    if (tmp1_output.l11(tmp0_desc, 3) ? true : !(value.s7n_1 == null)) {
      tmp1_output.h11(tmp0_desc, 3, StringSerializer_getInstance(), value.s7n_1);
    }
    tmp1_output.oz(tmp0_desc);
  }
  ev(encoder, value) {
    return this.o7o(encoder, value instanceof StreamRoot ? value : THROW_CCE());
  }
  fv(decoder) {
    var tmp0_desc = this.n7o_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.nz(tmp0_desc);
    var tmp9_cached = Companion_getInstance_0().m7o_1;
    if (tmp8_input.d10()) {
      tmp4_local0 = tmp8_input.b10(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.b10(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.b10(tmp0_desc, 2, tmp9_cached[2].w2(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.b10(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.e10(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.b10(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.b10(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.b10(tmp0_desc, 2, tmp9_cached[2].w2(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.b10(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException.uw(tmp2_index);
        }
      }
    tmp8_input.oz(tmp0_desc);
    return StreamRoot.p7o(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  dv() {
    return this.n7o_1;
  }
  t17() {
    var tmp0_cached = Companion_getInstance_0().m7o_1;
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
    this.p7n_1 = op;
    this.q7n_1 = repo;
    this.r7n_1 = ops;
    this.s7n_1 = t;
  }
  toString() {
    return 'StreamRoot(op=' + this.p7n_1 + ', repo=' + this.q7n_1 + ', ops=' + toString_0(this.r7n_1) + ', t=' + this.s7n_1 + ')';
  }
  hashCode() {
    var result = this.p7n_1 == null ? 0 : this.p7n_1;
    result = imul(result, 31) + (this.q7n_1 == null ? 0 : getStringHashCode(this.q7n_1)) | 0;
    result = imul(result, 31) + (this.r7n_1 == null ? 0 : hashCode(this.r7n_1)) | 0;
    result = imul(result, 31) + (this.s7n_1 == null ? 0 : getStringHashCode(this.s7n_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof StreamRoot))
      return false;
    if (!(this.p7n_1 == other.p7n_1))
      return false;
    if (!(this.q7n_1 == other.q7n_1))
      return false;
    if (!equals(this.r7n_1, other.r7n_1))
      return false;
    if (!(this.s7n_1 == other.s7n_1))
      return false;
    return true;
  }
  static p7o(seen0, op, repo, ops, t, serializationConstructorMarker) {
    Companion_getInstance_0();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_0().n7o_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.p7n_1 = null;
    else
      $this.p7n_1 = op;
    if (0 === (seen0 & 2))
      $this.q7n_1 = null;
    else
      $this.q7n_1 = repo;
    if (0 === (seen0 & 4))
      $this.r7n_1 = null;
    else
      $this.r7n_1 = ops;
    if (0 === (seen0 & 8))
      $this.s7n_1 = null;
    else
      $this.s7n_1 = t;
    return $this;
  }
}
class ATProtocolStreamImpl {
  constructor(config) {
    this.q7o_1 = new ATProtocolImpl(config);
    this.r7o_1 = new SyncResourceImpl(this.q7o_1, config);
  }
  sync() {
    return this.r7o_1;
  }
}
class SyncResourceImpl {
  constructor(atproto, config) {
    this.s7o_1 = atproto;
    this.t7o_1 = config;
  }
  subscribeRepos(request) {
    var url = 'wss://' + Url(this.t7o_1.firehoseUri).c2u_1 + '/xrpc/' + 'com.atproto.sync.subscribeRepos';
    return new SyncStreamClient(this.s7o_1, url, request.filter);
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
      var this_0 = cbor.c10();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_1 = serializer(this_0, createKType(getKClass(StreamRoot), arrayOf([]), false));
      var tmp$ret$10 = isInterface(this_1, KSerializer) ? this_1 : THROW_CCE();
      var item_1 = decodeFromHexString(cbor, tmp$ret$10, sub);
      if (item_1.r7n_1 == null) {
        continue $l$loop_1;
      }
      // Inline function 'kotlin.checkNotNull' call
      var tmp0 = item_1.r7n_1;
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
        if (!(op.t7n_1 === 'create')) {
          continue $l$loop_0;
        }
        var path = op.u7n_1;
        var repo = item_1.q7n_1;
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
          var response = $this.atproto.repo().u55(new RepoGetRecordRequest(ensureNotNull(repo), elements[0], elements[1]));
          var tmp0_safe_receiver = $this.v7n_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.z7n(response.data.cid, response.data.uri, response.data.value);
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
    } catch ($p) {
      if ($p instanceof Exception) {
        var e_0 = $p;
        printStackTrace(e_0);
        continue $l$loop_1;
      } else {
        throw $p;
      }
    }
  }
}
function SyncStreamClient$slambda_0(this$0) {
  var i = new SyncStreamClient$slambda(this$0);
  var l = (it, $completion) => i.r48(it, $completion);
  l.$arity = 1;
  return l;
}
function SyncStreamClient$lambda(this$0) {
  return (it) => {
    this$0.isOpen = true;
    var tmp0_safe_receiver = this$0.w7n_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.b7o();
    }
    return Unit_instance;
  };
}
function SyncStreamClient$lambda_0(this$0) {
  return (it) => {
    this$0.isOpen = false;
    var tmp0_safe_receiver = this$0.x7n_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.c7o();
    }
    return Unit_instance;
  };
}
function SyncStreamClient$onMessage$lambda($this$Cbor) {
  $this$Cbor.b7k_1 = true;
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
initMetadataForLambda(SyncStreamClient$slambda, VOID, VOID, [1]);
initMetadataForClass(SyncStreamClient, 'SyncStreamClient', VOID, VOID, VOID, [0]);
initMetadataForCompanion(Companion);
protoOf($serializer).u17 = typeParametersSerializers;
initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(StreamOp, 'StreamOp', StreamOp, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
initMetadataForCompanion(Companion_0);
protoOf($serializer_0).u17 = typeParametersSerializers;
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
  ATProtocolStreamFactory_instance as ATProtocolStreamFactory_instance1zxu66p4al9se,
};
//endregion

//# sourceMappingURL=kbsky-stream.mjs.map
