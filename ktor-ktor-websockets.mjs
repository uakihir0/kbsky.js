import {
  collectionSizeOrDefault36dulx8yinfqm as collectionSizeOrDefault,
  mapCapacity1h45rc3eh9p2l as mapCapacity,
  coerceAtLeast2bkz8m9ik7hep as coerceAtLeast,
  LinkedHashMap1zhqxkxv3xnkl as LinkedHashMap,
  Unit_instance3vdlo4e4f5ggx as Unit_instance,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  VOID3gxj6tk5isa35 as VOID,
  enumEntries20mr21zbe3az4 as enumEntries,
  Enum3alwj03lh1n41 as Enum,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  createThis2j2avj17cvnv2 as createThis,
  toString1pkumu07cwy4m as toString,
  getStringHashCode26igk1bx568vk as getStringHashCode,
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  isInterface3d6p8outrmvmk as isInterface,
  IllegalArgumentException2asla15b5jaob as IllegalArgumentException,
  toString30pk9tzaqopn as toString_0,
  fromInt2ii0rejb1w62w as fromInt,
  constructCallableReference23y65rf941mch as constructCallableReference,
  ensureNotNull1e947j3ixpazm as ensureNotNull,
  CancellationException3b36o9qz53rgr as CancellationException,
  ArrayList3it5z8td81qkl as ArrayList,
  IllegalStateExceptionkoljg5n0nrlr as IllegalStateException,
  joinToString1cxrrlmo0chqs as joinToString,
  protoOf180f3jzyo7rfj as protoOf,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  Exceptiondt2hlxn7j7vw as Exception,
  captureStack1fzi4aczwc4hg as captureStack,
  compareTo3ankvs086tmwq as compareTo,
  decodeToString1dbzcjd620q25 as decodeToString,
  Randomei1bbeye8rr8 as Random,
  toHexString5bhtjxqec7ow as toHexString,
  throwUninitializedPropertyAccessException14fok093f3k3t as throwUninitializedPropertyAccessException,
  RuntimeException1r3t0zl97011n as RuntimeException,
  split2bvyvnrlcifjv as split,
  first58ocm7j58k3q as first,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  isCharSequence1ju9jr1w86plq as isCharSequence,
  trim11nh7r46at6sx as trim,
  drop3na99dw9feawf as drop,
  noWhenBranchMatchedException2a6r7ubxgky5j as noWhenBranchMatchedException,
} from './kotlin-kotlin-stdlib.mjs';
import {
  Dispatchers_getInstance20p7pyqnrepag as Dispatchers_getInstance,
  launch1c91vkjzdi9sd as launch,
  CoroutineStart_UNDISPATCHED_getInstance2pq896dvru5v1 as CoroutineStart_UNDISPATCHED_getInstance,
  ChannelResult2y4k69ac6y3du as ChannelResult,
  _ChannelResult___get_isSuccess__impl__odq1z9t6ktwy0g0q0f as _ChannelResult___get_isSuccess__impl__odq1z9,
  cancelConsumed2i0oizqhmljf6 as cancelConsumed,
  ClosedSendChannelException29m33prpq9jaw as ClosedSendChannelException,
  ClosedReceiveChannelException3ofg6gf5f5b38 as ClosedReceiveChannelException,
  CompletableDeferred2lnqvsbvx74d3 as CompletableDeferred,
  Job13y4jkazwjho0 as Job,
  Key_instancebefxze3q9f64 as Key_instance,
  CoroutineName2g5zosw74tf0f as CoroutineName,
  Factory_getInstance32nnliw9sj63p as Factory_getInstance,
  DisposableHandle1uzxt8frdchxn as DisposableHandle,
  CopyableThrowable1mvc99jcyvivf as CopyableThrowable,
  Channel3r72atmcithql as Channel,
  withTimeoutOrNull3qi35nuwr2k8a as withTimeoutOrNull,
  BufferOverflow_SUSPEND_getInstanceob833ibjouyy as BufferOverflow_SUSPEND_getInstance,
  BufferOverflow_DROP_OLDEST_getInstanceckq6sjfawt4w as BufferOverflow_DROP_OLDEST_getInstance,
  _ChannelResult___get_isClosed__impl__mg7kuu3a26on4apn4j4 as _ChannelResult___get_isClosed__impl__mg7kuu,
  close$defaultlxi0kykibhye as close$default,
  cancel$default2imfx8rp1ubvu as cancel$default,
  SendChannel38sllbxw662ws as SendChannel,
  ReceiveChannel24wu5e2tj9lbp as ReceiveChannel,
} from './kotlinx-coroutines-core.mjs';
import {
  get_isTraceEnabled82xibuu04nxp as get_isTraceEnabled,
  ChannelIOException2i3t76lsrbgox as ChannelIOException,
  KtorSimpleLogger1xdphsp5l4e48 as KtorSimpleLogger,
  getTimeMillis12o7k17x9fmwi as getTimeMillis,
} from './ktor-ktor-utils.mjs';
import {
  get_size2imoy2jq11jxl as get_size,
  BytePacketBuilder2biodf4wxvlba as BytePacketBuilder,
  writeFully359t6q8kam2g5 as writeFully,
  buildjygoh729rhy8 as build,
  readText27783kyxjxi1g as readText,
  Charsets_getInstance3jooo7e4x0j2x as Charsets_getInstance,
  toByteArray1i3ns5jnoqlv6 as toByteArray,
  ClosedByteChannelException3il8gfpye60w as ClosedByteChannelException,
  writeText19qfzm98fbm4l as writeText,
} from './ktor-ktor-io.mjs';
import {
  readByteArray1ri21h2rciakw as readByteArray,
  IOException1wyutdmfe71nu as IOException,
  Buffergs925ekssbch as Buffer,
} from './kotlinx-io-kotlinx-io-core.mjs';
import {
  atomic$ref$130aurmcwdfdf1 as atomic$ref$1,
  atomic$boolean$1iggki4z65a2h as atomic$boolean$1,
} from './kotlinx-atomicfu.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
class Companion {
  constructor() {
    Companion_instance = this;
    var tmp = this;
    // Inline function 'kotlin.collections.associateBy' call
    var this_0 = get_entries();
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16);
    // Inline function 'kotlin.collections.associateByTo' call
    var destination = LinkedHashMap.ic(capacity);
    var _iterator__ex2g4s = this_0.l1();
    while (_iterator__ex2g4s.m1()) {
      var element = _iterator__ex2g4s.n1();
      var tmp$ret$2 = element.q3e_1;
      destination.f4(tmp$ret$2, element);
    }
    tmp.r3e_1 = destination;
    this.s3e_1 = Codes_INTERNAL_ERROR_getInstance();
  }
  t3e(code) {
    return this.r3e_1.c4(code);
  }
}
class Codes extends Enum {
  constructor(name, ordinal, code) {
    super(name, ordinal);
    this.q3e_1 = code;
  }
}
class CloseReason {
  constructor(code, message) {
    return new.target.w3e(code, message);
  }
  static w3e(code, message) {
    var $this = createThis(this);
    $this.u3e_1 = code;
    $this.v3e_1 = message;
    return $this;
  }
  static x3e(code, message) {
    return this.w3e(code.q3e_1, message);
  }
  y3e() {
    return Companion_getInstance().t3e(this.u3e_1);
  }
  toString() {
    var tmp0_elvis_lhs = this.y3e();
    return 'CloseReason(reason=' + toString(tmp0_elvis_lhs == null ? this.u3e_1 : tmp0_elvis_lhs) + ', message=' + this.v3e_1 + ')';
  }
  hashCode() {
    var result = this.u3e_1;
    result = imul(result, 31) + getStringHashCode(this.v3e_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof CloseReason))
      return false;
    if (!(this.u3e_1 === other.u3e_1))
      return false;
    if (!(this.v3e_1 === other.v3e_1))
      return false;
    return true;
  }
}
class WebSocketSession {}
function *send(frame, $completion) {
  yield* this.d3f().z2f(frame, $completion);
  return Unit_instance;
}
class DefaultWebSocketSession {}
class Companion_0 {
  constructor() {
    Companion_instance_0 = this;
    this.d3g_1 = Pong.z3g(new Int8Array(0), NonDisposableHandle_instance);
  }
}
class DefaultWebSocketSessionImpl {
  constructor(raw, pingIntervalMillis, timeoutMillis, incomingFramesConfig, outgoingFramesConfig) {
    Companion_getInstance_0();
    this.i3f_1 = raw;
    this.j3f_1 = atomic$ref$1(null);
    this.k3f_1 = CompletableDeferred();
    this.l3f_1 = Job();
    this.m3f_1 = this.i3f_1.l21().om(Key_instance).qm(this.l3f_1).qm(new CoroutineName('ws-default'));
    this.n3f_1 = from(Factory_getInstance(), incomingFramesConfig);
    this.o3f_1 = from(Factory_getInstance(), outgoingFramesConfig);
    this.p3f_1 = atomic$boolean$1(false);
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.q3f_1 = ArrayList.k2();
    this.r3f_1 = atomic$boolean$1(false);
    this.s3f_1 = pingIntervalMillis;
    this.t3f_1 = timeoutMillis;
    this.u3f_1 = this.k3f_1;
  }
  l21() {
    return this.m3f_1;
  }
  c3f() {
    return this.n3f_1;
  }
  d3f() {
    return this.o3f_1;
  }
  p3g() {
    return this.q3f_1;
  }
  a3f(value) {
    this.i3f_1.a3f(value);
  }
  b3f() {
    return this.i3f_1.b3f();
  }
  z3e(negotiatedExtensions) {
    if (!this.r3f_1.atomicfu$compareAndSet(false, true)) {
      // Inline function 'kotlin.error' call
      var message = 'WebSocket session ' + toString(this) + ' is already started.';
      throw IllegalStateException.o(toString(message));
    }
    // Inline function 'io.ktor.util.logging.trace' call
    var this_0 = get_LOGGER();
    if (get_isTraceEnabled(this_0)) {
      var tmp$ret$2 = 'Starting default WebSocketSession(' + toString(this) + ') ' + ('with negotiated extensions: ' + joinToString(negotiatedExtensions));
      this_0.a2w(tmp$ret$2);
    }
    this.q3f_1.n2(negotiatedExtensions);
    runOrCancelPinger(this);
    var incomingJob = runIncomingProcessor(this, ponger(this, this.d3f()));
    var outgoingJob = runOutgoingProcessor(this);
    launch(this, VOID, VOID, DefaultWebSocketSessionImpl$start$slambda(incomingJob, outgoingJob, this));
  }
  *k2m($completion) {
    yield* this.i3f_1.k2m($completion);
    return Unit_instance;
  }
}
class NonDisposableHandle {
  n24() {
    return Unit_instance;
  }
  toString() {
    return 'NonDisposableHandle';
  }
  hashCode() {
    return 207988788;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof NonDisposableHandle))
      return false;
    return true;
  }
}
class FrameTooBigException extends Exception {
  constructor(frameSize, cause) {
    return new.target.o3g(frameSize, cause);
  }
  static o3g(frameSize, cause) {
    cause = cause === VOID ? null : cause;
    var $this = this.ee(cause);
    captureStack($this, $this.n3g_1);
    $this.m3g_1 = frameSize;
    delete $this.message;
    return $this;
  }
  r() {
    var sizeSuffix = this.m3g_1 >= 0n ? ': ' + this.m3g_1.toString() : '';
    return 'Frame is too big' + sizeSuffix;
  }
  a28() {
    return FrameTooBigException.o3g(this.m3g_1, this);
  }
  get message() {
    return this.r();
  }
}
class Companion_1 {
  constructor() {
    Companion_instance_1 = this;
    var tmp = this;
    var tmp0 = get_entries_0();
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.maxByOrNull' call
      var iterator = tmp0.l1();
      if (!iterator.m1()) {
        tmp$ret$0 = null;
        break $l$block_0;
      }
      var maxElem = iterator.n1();
      if (!iterator.m1()) {
        tmp$ret$0 = maxElem;
        break $l$block_0;
      }
      var maxValue = maxElem.f3h_1;
      do {
        var e = iterator.n1();
        var v = e.f3h_1;
        if (compareTo(maxValue, v) < 0) {
          maxElem = e;
          maxValue = v;
        }
      }
       while (iterator.m1());
      tmp$ret$0 = maxElem;
    }
    tmp.g3h_1 = ensureNotNull(tmp$ret$0).f3h_1;
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = this.g3h_1 + 1 | 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_3 = Array(tmp_2);
    while (tmp_1 < tmp_2) {
      var tmp_4 = tmp_1;
      var tmp0_0 = get_entries_0();
      var tmp$ret$5;
      $l$block_2: {
        // Inline function 'kotlin.collections.singleOrNull' call
        var single = null;
        var found = false;
        var _iterator__ex2g4s = tmp0_0.l1();
        while (_iterator__ex2g4s.m1()) {
          var element = _iterator__ex2g4s.n1();
          if (element.f3h_1 === tmp_4) {
            if (found) {
              tmp$ret$5 = null;
              break $l$block_2;
            }
            single = element;
            found = true;
          }
        }
        if (!found) {
          tmp$ret$5 = null;
          break $l$block_2;
        }
        tmp$ret$5 = single;
      }
      tmp_3[tmp_4] = tmp$ret$5;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.h3h_1 = tmp_3;
  }
}
class FrameType extends Enum {
  constructor(name, ordinal, controlFrame, opcode) {
    super(name, ordinal);
    this.e3h_1 = controlFrame;
    this.f3h_1 = opcode;
  }
}
class Companion_2 {
  constructor() {
    Companion_instance_2 = this;
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new WebSocketChannelsConfig();
    this_0.g3f_1 = this_0.q3h();
    this_0.h3f_1 = this_0.q3h();
    tmp.f3f_1 = this_0;
  }
}
class WebSocketChannelsConfig {
  constructor() {
    Companion_getInstance_2();
    this.g3f_1 = Companion_getInstance_3().r3h_1;
    this.h3f_1 = Companion_getInstance_3().r3h_1;
  }
  q3h() {
    return Companion_getInstance_3().r3h_1;
  }
}
class Companion_3 {
  constructor() {
    Companion_instance_3 = this;
    this.r3h_1 = new ChannelConfig(2147483647, ChannelOverflow_SUSPEND_getInstance());
  }
}
class ChannelConfig {
  constructor(capacity, onOverflow) {
    Companion_getInstance_3();
    this.s3h_1 = capacity;
    this.t3h_1 = onOverflow;
  }
  u3h() {
    return this.t3h_1.equals(ChannelOverflow_SUSPEND_getInstance()) && !(this.s3h_1 === 2147483647);
  }
}
class ChannelOverflow extends Enum {}
class Companion_4 {
  z3h(capacity) {
    var channel = {_v: null};
    var tmp = BufferOverflow_DROP_OLDEST_getInstance();
    // Inline function 'kotlin.also' call
    var this_0 = Channel(capacity, tmp, BoundedChannel$Companion$createDelegate$lambda(channel));
    channel._v = this_0;
    return this_0;
  }
}
class BoundedChannel {
  constructor(capacity, delegate) {
    delegate = delegate === VOID ? Companion_instance_4.z3h(capacity) : delegate;
    this.a3i_1 = delegate;
  }
  b3i(element) {
    var result = this.a3i_1.a2g(element);
    if (!_ChannelResult___get_isSuccess__impl__odq1z9(result) && !_ChannelResult___get_isClosed__impl__mg7kuu(result)) {
      this.j2g(ChannelOverflowException.y3h('Channel overflowed'));
    }
    return result;
  }
  a2g(element) {
    return this.b3i(element);
  }
  *c3i(element, $completion) {
    yield* this.a3i_1.z2f(element, $completion);
    return Unit_instance;
  }
  z2f(element, $completion) {
    return this.c3i(element, $completion);
  }
  j2g(cause) {
    return this.a3i_1.j2g(cause);
  }
  s2f() {
    return this.a3i_1.s2f();
  }
  *d3i($completion) {
    return yield* this.a3i_1.c2g($completion);
  }
  c2g($completion) {
    return this.d3i($completion);
  }
  l1() {
    return this.a3i_1.l1();
  }
  u22(cause) {
    this.a3i_1.u22(cause);
  }
}
class ChannelOverflowException extends RuntimeException {
  constructor(message) {
    return new.target.y3h(message);
  }
  static y3h(message) {
    var $this = this.bb(message);
    captureStack($this, $this.x3h_1);
    return $this;
  }
}
class WebSocketExtension {}
class WebSocketExtensionsConfig {
  constructor() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.g3i_1 = ArrayList.k2();
    var tmp_0 = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_0.h3i_1 = [false, false, false];
  }
  y2z() {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.g3i_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList.y1(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.l1();
    while (_iterator__ex2g4s.m1()) {
      var item = _iterator__ex2g4s.n1();
      var tmp$ret$2 = item();
      destination.z1(tmp$ret$2);
    }
    return destination;
  }
}
class WebSocketExtensionHeader {
  constructor(name, parameters) {
    this.i3i_1 = name;
    this.j3i_1 = parameters;
  }
  toString() {
    return this.i3i_1 + ' ' + parametersToString(this);
  }
}
class Frame {
  static s3i(fin, frameType, data, disposableHandle, rsv1, rsv2, rsv3) {
    Companion_getInstance_5();
    disposableHandle = disposableHandle === VOID ? NonDisposableHandle_instance : disposableHandle;
    rsv1 = rsv1 === VOID ? false : rsv1;
    rsv2 = rsv2 === VOID ? false : rsv2;
    rsv3 = rsv3 === VOID ? false : rsv3;
    var $this = createThis(this);
    $this.e3g_1 = fin;
    $this.f3g_1 = frameType;
    $this.g3g_1 = data;
    $this.h3g_1 = disposableHandle;
    $this.i3g_1 = rsv1;
    $this.j3g_1 = rsv2;
    $this.k3g_1 = rsv3;
    return $this;
  }
  toString() {
    return 'Frame ' + this.f3g_1.toString() + ' (fin=' + this.e3g_1 + ', buffer len = ' + this.g3g_1.length + ')';
  }
}
class Binary extends Frame {
  constructor(fin, data, rsv1, rsv2, rsv3) {
    return new.target.r3i(fin, data, rsv1, rsv2, rsv3);
  }
  static r3i(fin, data, rsv1, rsv2, rsv3) {
    rsv1 = rsv1 === VOID ? false : rsv1;
    rsv2 = rsv2 === VOID ? false : rsv2;
    rsv3 = rsv3 === VOID ? false : rsv3;
    return this.s3i(fin, FrameType_BINARY_getInstance(), data, NonDisposableHandle_instance, rsv1, rsv2, rsv3);
  }
  static t3i(fin, data) {
    return this.r3i(fin, data, false, false, false);
  }
}
class Text extends Frame {
  constructor(fin, data, rsv1, rsv2, rsv3) {
    return new.target.b3j(fin, data, rsv1, rsv2, rsv3);
  }
  static b3j(fin, data, rsv1, rsv2, rsv3) {
    rsv1 = rsv1 === VOID ? false : rsv1;
    rsv2 = rsv2 === VOID ? false : rsv2;
    rsv3 = rsv3 === VOID ? false : rsv3;
    return this.s3i(fin, FrameType_TEXT_getInstance(), data, NonDisposableHandle_instance, rsv1, rsv2, rsv3);
  }
  static c3j(fin, data) {
    return this.b3j(fin, data, false, false, false);
  }
  static d3j(text) {
    return this.c3j(true, toByteArray(text));
  }
}
class Close extends Frame {
  constructor(data) {
    return new.target.e3j(data);
  }
  static e3j(data) {
    return this.s3i(true, FrameType_CLOSE_getInstance(), data, NonDisposableHandle_instance, false, false, false);
  }
  static c3g(reason) {
    // Inline function 'io.ktor.utils.io.core.buildPacket' call
    var builder = new Buffer();
    builder.n1z(reason.u3e_1);
    writeText(builder, reason.v3e_1);
    return this.f3j(builder);
  }
  static f3j(packet) {
    return this.e3j(readByteArray(packet));
  }
  static g3j() {
    return this.e3j(Companion_getInstance_5().a3h_1);
  }
}
class Ping extends Frame {
  constructor(data) {
    return new.target.p3h(data);
  }
  static p3h(data) {
    return this.s3i(true, FrameType_PING_getInstance(), data, NonDisposableHandle_instance, false, false, false);
  }
}
class Pong extends Frame {
  constructor(data, disposableHandle) {
    return new.target.z3g(data, disposableHandle);
  }
  static z3g(data, disposableHandle) {
    disposableHandle = disposableHandle === VOID ? NonDisposableHandle_instance : disposableHandle;
    return this.s3i(true, FrameType_PONG_getInstance(), data, disposableHandle, false, false, false);
  }
}
class Companion_5 {
  constructor() {
    Companion_instance_5 = this;
    this.a3h_1 = new Int8Array(0);
  }
  b3h(fin, frameType, data, rsv1, rsv2, rsv3) {
    var tmp;
    switch (frameType.s1_1) {
      case 1:
        tmp = Binary.r3i(fin, data, rsv1, rsv2, rsv3);
        break;
      case 0:
        tmp = Text.b3j(fin, data, rsv1, rsv2, rsv3);
        break;
      case 2:
        tmp = Close.e3j(data);
        break;
      case 3:
        tmp = Ping.p3h(data);
        break;
      case 4:
        tmp = Pong.z3g(data, NonDisposableHandle_instance);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
}
//endregion
var Codes_NORMAL_instance;
var Codes_GOING_AWAY_instance;
var Codes_PROTOCOL_ERROR_instance;
var Codes_CANNOT_ACCEPT_instance;
var Codes_CLOSED_ABNORMALLY_instance;
var Codes_NOT_CONSISTENT_instance;
var Codes_VIOLATED_POLICY_instance;
var Codes_TOO_BIG_instance;
var Codes_NO_EXTENSION_instance;
var Codes_INTERNAL_ERROR_instance;
var Codes_SERVICE_RESTART_instance;
var Codes_TRY_AGAIN_LATER_instance;
var Companion_instance;
function Companion_getInstance() {
  Codes_initEntries();
  if (Companion_instance === VOID)
    new Companion();
  return Companion_instance;
}
function values() {
  return [Codes_NORMAL_getInstance(), Codes_GOING_AWAY_getInstance(), Codes_PROTOCOL_ERROR_getInstance(), Codes_CANNOT_ACCEPT_getInstance(), Codes_CLOSED_ABNORMALLY_getInstance(), Codes_NOT_CONSISTENT_getInstance(), Codes_VIOLATED_POLICY_getInstance(), Codes_TOO_BIG_getInstance(), Codes_NO_EXTENSION_getInstance(), Codes_INTERNAL_ERROR_getInstance(), Codes_SERVICE_RESTART_getInstance(), Codes_TRY_AGAIN_LATER_getInstance()];
}
function get_entries() {
  if ($ENTRIES == null)
    $ENTRIES = enumEntries(values());
  return $ENTRIES;
}
var Codes_entriesInitialized;
function Codes_initEntries() {
  if (Codes_entriesInitialized)
    return Unit_instance;
  Codes_entriesInitialized = true;
  Codes_NORMAL_instance = new Codes('NORMAL', 0, 1000);
  Codes_GOING_AWAY_instance = new Codes('GOING_AWAY', 1, 1001);
  Codes_PROTOCOL_ERROR_instance = new Codes('PROTOCOL_ERROR', 2, 1002);
  Codes_CANNOT_ACCEPT_instance = new Codes('CANNOT_ACCEPT', 3, 1003);
  Codes_CLOSED_ABNORMALLY_instance = new Codes('CLOSED_ABNORMALLY', 4, 1006);
  Codes_NOT_CONSISTENT_instance = new Codes('NOT_CONSISTENT', 5, 1007);
  Codes_VIOLATED_POLICY_instance = new Codes('VIOLATED_POLICY', 6, 1008);
  Codes_TOO_BIG_instance = new Codes('TOO_BIG', 7, 1009);
  Codes_NO_EXTENSION_instance = new Codes('NO_EXTENSION', 8, 1010);
  Codes_INTERNAL_ERROR_instance = new Codes('INTERNAL_ERROR', 9, 1011);
  Codes_SERVICE_RESTART_instance = new Codes('SERVICE_RESTART', 10, 1012);
  Codes_TRY_AGAIN_LATER_instance = new Codes('TRY_AGAIN_LATER', 11, 1013);
  Companion_getInstance();
}
var $ENTRIES;
function Codes_NORMAL_getInstance() {
  Codes_initEntries();
  return Codes_NORMAL_instance;
}
function Codes_GOING_AWAY_getInstance() {
  Codes_initEntries();
  return Codes_GOING_AWAY_instance;
}
function Codes_PROTOCOL_ERROR_getInstance() {
  Codes_initEntries();
  return Codes_PROTOCOL_ERROR_instance;
}
function Codes_CANNOT_ACCEPT_getInstance() {
  Codes_initEntries();
  return Codes_CANNOT_ACCEPT_instance;
}
function Codes_CLOSED_ABNORMALLY_getInstance() {
  Codes_initEntries();
  return Codes_CLOSED_ABNORMALLY_instance;
}
function Codes_NOT_CONSISTENT_getInstance() {
  Codes_initEntries();
  return Codes_NOT_CONSISTENT_instance;
}
function Codes_VIOLATED_POLICY_getInstance() {
  Codes_initEntries();
  return Codes_VIOLATED_POLICY_instance;
}
function Codes_TOO_BIG_getInstance() {
  Codes_initEntries();
  return Codes_TOO_BIG_instance;
}
function Codes_NO_EXTENSION_getInstance() {
  Codes_initEntries();
  return Codes_NO_EXTENSION_instance;
}
function Codes_INTERNAL_ERROR_getInstance() {
  Codes_initEntries();
  return Codes_INTERNAL_ERROR_instance;
}
function Codes_SERVICE_RESTART_getInstance() {
  Codes_initEntries();
  return Codes_SERVICE_RESTART_instance;
}
function Codes_TRY_AGAIN_LATER_getInstance() {
  Codes_initEntries();
  return Codes_TRY_AGAIN_LATER_instance;
}
function get_LOGGER() {
  _init_properties_DefaultWebSocketSession_kt__469s0y();
  return LOGGER;
}
var LOGGER;
function get_IncomingProcessorCoroutineName() {
  _init_properties_DefaultWebSocketSession_kt__469s0y();
  return IncomingProcessorCoroutineName;
}
var IncomingProcessorCoroutineName;
function get_OutgoingProcessorCoroutineName() {
  _init_properties_DefaultWebSocketSession_kt__469s0y();
  return OutgoingProcessorCoroutineName;
}
var OutgoingProcessorCoroutineName;
function get_NORMAL_CLOSE() {
  _init_properties_DefaultWebSocketSession_kt__469s0y();
  return NORMAL_CLOSE;
}
var NORMAL_CLOSE;
var OUTGOING_CHANNEL_CONFIG;
function DefaultWebSocketSession_0(session, pingIntervalMillis, timeoutMillis, channelsConfig) {
  pingIntervalMillis = pingIntervalMillis === VOID ? 0n : pingIntervalMillis;
  timeoutMillis = timeoutMillis === VOID ? 15000n : timeoutMillis;
  channelsConfig = channelsConfig === VOID ? Companion_getInstance_2().f3f_1 : channelsConfig;
  _init_properties_DefaultWebSocketSession_kt__469s0y();
  // Inline function 'kotlin.require' call
  if (!!isInterface(session, DefaultWebSocketSession)) {
    var message = 'Cannot wrap other DefaultWebSocketSession';
    throw IllegalArgumentException.h2(toString(message));
  }
  return new DefaultWebSocketSessionImpl(session, pingIntervalMillis, timeoutMillis, channelsConfig.g3f_1, channelsConfig.h3f_1);
}
function runIncomingProcessor($this, ponger) {
  var tmp = get_IncomingProcessorCoroutineName().qm(Dispatchers_getInstance().z2b_1);
  return launch($this, tmp, VOID, DefaultWebSocketSessionImpl$runIncomingProcessor$slambda($this, ponger));
}
function runOutgoingProcessor($this) {
  var tmp = get_OutgoingProcessorCoroutineName().qm(Dispatchers_getInstance().z2b_1);
  var tmp_0 = CoroutineStart_UNDISPATCHED_getInstance();
  return launch($this, tmp, tmp_0, DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda($this));
}
function *outgoingProcessorLoop($this, $completion) {
  var _iterator__ex2g4s = $this.o3f_1.l1();
  $l$loop: while (yield* _iterator__ex2g4s.l2f($completion)) {
    var frame = _iterator__ex2g4s.n1();
    // Inline function 'io.ktor.util.logging.trace' call
    var this_0 = get_LOGGER();
    if (get_isTraceEnabled(this_0)) {
      var tmp$ret$1 = 'Sending ' + frame.toString() + ' from session ' + toString($this);
      this_0.a2w(tmp$ret$1);
    }
    var tmp;
    if (frame instanceof Close) {
      yield* sendCloseSequence($this, readReason(frame), VOID, $completion);
      break $l$loop;
    } else {
      var tmp_0;
      if (frame instanceof Text) {
        tmp_0 = true;
      } else {
        tmp_0 = frame instanceof Binary;
      }
      if (tmp_0) {
        tmp = processOutgoingExtensions($this, frame);
      } else {
        tmp = frame;
      }
    }
    var processedFrame = tmp;
    yield* $this.i3f_1.d3f().z2f(processedFrame, $completion);
  }
  return Unit_instance;
}
function *sendCloseSequence($this, reason, exception, $completion) {
  exception = exception === VOID ? null : exception;
  if (!tryClose($this))
    return Unit_instance;
  // Inline function 'io.ktor.util.logging.trace' call
  var this_0 = get_LOGGER();
  if (get_isTraceEnabled(this_0)) {
    var tmp$ret$1 = 'Sending Close Sequence for session ' + toString($this) + ' with reason ' + toString_0(reason) + ' and exception ' + toString_0(exception);
    this_0.a2w(tmp$ret$1);
  }
  $this.l3f_1.p27();
  var reasonToSend = reason == null ? CloseReason.x3e(Codes_NORMAL_getInstance(), '') : reason;
  try {
    runOrCancelPinger($this);
    if (!(reasonToSend.u3e_1 === Codes_CLOSED_ABNORMALLY_getInstance().q3e_1)) {
      yield* $this.i3f_1.d3f().z2f(Close.c3g(reasonToSend), $completion);
    }
  }finally {
    $this.k3f_1.n27(reasonToSend);
    if (!(exception == null)) {
      $this.o3f_1.j2g(exception);
      $this.n3f_1.j2g(exception);
    }
  }
  return Unit_instance;
}
function tryClose($this) {
  return $this.p3f_1.atomicfu$compareAndSet(false, true);
}
function runOrCancelPinger($this) {
  var interval = $this.s3f_1;
  var tmp;
  if ($this.p3f_1.kotlinx$atomicfu$value) {
    tmp = null;
  } else if (interval > 0n) {
    var tmp_0 = $this.i3f_1.d3f();
    var tmp_1 = $this.t3f_1;
    tmp = pinger($this, tmp_0, interval, tmp_1, DefaultWebSocketSessionImpl$runOrCancelPinger$slambda($this));
  } else {
    tmp = null;
  }
  var newPinger = tmp;
  var tmp0_safe_receiver = $this.j3f_1.atomicfu$getAndSet(newPinger);
  if (tmp0_safe_receiver == null)
    null;
  else
    tmp0_safe_receiver.l2g();
  var tmp2_safe_receiver = newPinger == null ? null : new ChannelResult(newPinger.a2g(Companion_getInstance_0().d3g_1));
  if (tmp2_safe_receiver == null)
    null;
  else
    _ChannelResult___get_isSuccess__impl__odq1z9(tmp2_safe_receiver.y2f_1);
  if ($this.p3f_1.kotlinx$atomicfu$value && !(newPinger == null)) {
    runOrCancelPinger($this);
  }
}
function *checkMaxFrameSize($this, packet, frame, $completion) {
  var tmp = frame.g3g_1.length;
  var tmp1_elvis_lhs = packet == null ? null : get_size(packet);
  var size = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
  if (fromInt(size) > $this.b3f()) {
    if (packet == null)
      null;
    else {
      packet.z6();
    }
    yield* close($this, CloseReason.x3e(Codes_TOO_BIG_getInstance(), 'Frame is too big: ' + size + '. Max size is ' + $this.b3f().toString()), $completion);
    throw FrameTooBigException.o3g(fromInt(size));
  }
  return Unit_instance;
}
function processIncomingExtensions($this, frame) {
  // Inline function 'kotlin.collections.fold' call
  var accumulator = frame;
  var _iterator__ex2g4s = $this.p3g().l1();
  while (_iterator__ex2g4s.m1()) {
    var element = _iterator__ex2g4s.n1();
    var current = accumulator;
    accumulator = element.q3g(current);
  }
  return accumulator;
}
function processOutgoingExtensions($this, frame) {
  // Inline function 'kotlin.collections.fold' call
  var accumulator = frame;
  var _iterator__ex2g4s = $this.p3g().l1();
  while (_iterator__ex2g4s.m1()) {
    var element = _iterator__ex2g4s.n1();
    var current = accumulator;
    accumulator = element.r3g(current);
  }
  return accumulator;
}
var Companion_instance_0;
function Companion_getInstance_0() {
  if (Companion_instance_0 === VOID)
    new Companion_0();
  return Companion_instance_0;
}
function DefaultWebSocketSessionImpl$start$slambda($incomingJob, $outgoingJob, this$0) {
  return constructCallableReference(function *($this$launch, $completion) {
    yield* $incomingJob.r22($completion);
    yield* $outgoingJob.r22($completion);
    this$0.l3f_1.v22();
    return Unit_instance;
  }, 1);
}
function DefaultWebSocketSessionImpl$runIncomingProcessor$slambda(this$0, $ponger) {
  return constructCallableReference(function *($this$launch, $completion) {
    var firstFrame = null;
    var frameBody = null;
    var closeFramePresented = false;
    try {
      // Inline function 'kotlinx.coroutines.channels.consumeEach' call
      var tmp0 = this$0.i3f_1.c3f();
      $l$block_1: {
        // Inline function 'kotlinx.coroutines.channels.consume' call
        var cause = null;
        try {
          var _iterator__ex2g4s = tmp0.l1();
          while (yield* _iterator__ex2g4s.l2f($completion)) {
            var e = _iterator__ex2g4s.n1();
            $l$block_0: {
              // Inline function 'io.ktor.util.logging.trace' call
              var this_0 = get_LOGGER();
              if (get_isTraceEnabled(this_0)) {
                var tmp$ret$5 = 'WebSocketSession(' + toString($this$launch) + ') receiving frame ' + e.toString();
                this_0.a2w(tmp$ret$5);
              }
              if (e instanceof Close) {
                if (!this$0.d3f().s2f()) {
                  var tmp = this$0.d3f();
                  var tmp1_elvis_lhs = readReason(e);
                  yield* tmp.z2f(Close.c3g(tmp1_elvis_lhs == null ? get_NORMAL_CLOSE() : tmp1_elvis_lhs), $completion);
                }
                closeFramePresented = true;
                return Unit_instance;
              } else {
                if (e instanceof Pong) {
                  var tmp2_safe_receiver = this$0.j3f_1.kotlinx$atomicfu$value;
                  if (tmp2_safe_receiver == null)
                    null;
                  else
                    yield* tmp2_safe_receiver.z2f(e, $completion);
                } else {
                  if (e instanceof Ping)
                    yield* $ponger.z2f(e, $completion);
                  else {
                    yield* /*#__NOINLINE__*/checkMaxFrameSize(this$0, frameBody, e, $completion);
                    if (!e.e3g_1) {
                      if (firstFrame == null) {
                        firstFrame = e;
                      }
                      if (frameBody == null) {
                        frameBody = BytePacketBuilder();
                      }
                      writeFully(frameBody, e.g3g_1);
                      break $l$block_0;
                    }
                    if (firstFrame == null) {
                      yield* this$0.n3f_1.z2f(processIncomingExtensions(this$0, e), $completion);
                      break $l$block_0;
                    }
                    writeFully(ensureNotNull(frameBody), e.g3g_1);
                    var defragmented = Companion_getInstance_5().b3h(true, firstFrame.f3g_1, readByteArray(build(frameBody)), firstFrame.i3g_1, firstFrame.j3g_1, firstFrame.k3g_1);
                    firstFrame = null;
                    yield* this$0.n3f_1.z2f(processIncomingExtensions(this$0, defragmented), $completion);
                  }
                }
              }
            }
          }
          break $l$block_1;
        } catch ($p) {
          if ($p instanceof Error) {
            var e_0 = $p;
            cause = e_0;
            throw e_0;
          } else {
            throw $p;
          }
        }
        finally {
          cancelConsumed(tmp0, cause);
        }
      }
    } catch ($p_0) {
      if ($p_0 instanceof ClosedSendChannelException) {
        var _unused_var__etf5q3 = $p_0;
      } else {
        if ($p_0 instanceof Error) {
          var cause_0 = $p_0;
          $ponger.l2g();
          this$0.n3f_1.j2g(cause_0);
        } else {
          throw $p_0;
        }
      }
    }
    finally {
      $ponger.l2g();
      var tmp0_safe_receiver = frameBody;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.z6();
      }
      this$0.n3f_1.l2g();
      if (!closeFramePresented) {
        yield* close(this$0, CloseReason.x3e(Codes_CLOSED_ABNORMALLY_getInstance(), 'Connection was closed without close frame'), $completion);
      }
    }
    return Unit_instance;
  }, 1);
}
function DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda(this$0) {
  return constructCallableReference(function *($this$launch, $completion) {
    var tmp;
    try {
      tmp = yield* /*#__NOINLINE__*/outgoingProcessorLoop(this$0, $completion);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof ClosedSendChannelException) {
        var _unused_var__etf5q3 = $p;
        tmp_0 = Unit_instance;
      } else {
        if ($p instanceof ClosedReceiveChannelException) {
          var _unused_var__etf5q3_0 = $p;
          tmp_0 = Unit_instance;
        } else {
          if ($p instanceof CancellationException) {
            var _unused_var__etf5q3_1 = $p;
            tmp_0 = yield* /*#__NOINLINE__*/sendCloseSequence(this$0, CloseReason.x3e(Codes_NORMAL_getInstance(), ''), VOID, $completion);
          } else {
            if ($p instanceof ChannelIOException) {
              var _unused_var__etf5q3_2 = $p;
              tmp_0 = Unit_instance;
            } else {
              if ($p instanceof Error) {
                var cause = $p;
                this$0.o3f_1.u22(CancellationException.p('Failed to send frame', cause));
                yield* closeExceptionally(this$0.i3f_1, cause, $completion);
                return Unit_instance;
              } else {
                throw $p;
              }
            }
          }
        }
      }
      tmp = tmp_0;
    }
    finally {
      this$0.o3f_1.n2g();
      yield* close(this$0.i3f_1, VOID, $completion);
    }
    return Unit_instance;
  }, 1);
}
function DefaultWebSocketSessionImpl$runOrCancelPinger$slambda(this$0) {
  return constructCallableReference(function *(it, $completion) {
    yield* /*#__NOINLINE__*/sendCloseSequence(this$0, it, IOException.v20('Ping timeout'), $completion);
    return Unit_instance;
  }, 1);
}
var properties_initialized_DefaultWebSocketSession_kt_6cjlhc;
function _init_properties_DefaultWebSocketSession_kt__469s0y() {
  if (!properties_initialized_DefaultWebSocketSession_kt_6cjlhc) {
    properties_initialized_DefaultWebSocketSession_kt_6cjlhc = true;
    LOGGER = KtorSimpleLogger('io.ktor.websocket.WebSocket');
    IncomingProcessorCoroutineName = new CoroutineName('ws-incoming-processor');
    OutgoingProcessorCoroutineName = new CoroutineName('ws-outgoing-processor');
    NORMAL_CLOSE = CloseReason.x3e(Codes_NORMAL_getInstance(), 'OK');
    var tmp0_safe_receiver = get_OUTGOING_CHANNEL_CAPACITY();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = new ChannelConfig(tmp0_safe_receiver, ChannelOverflow_SUSPEND_getInstance());
    }
    OUTGOING_CHANNEL_CONFIG = tmp;
  }
}
function readReason(_this__u8e3s4) {
  if (_this__u8e3s4.g3g_1.length < 2) {
    return null;
  }
  // Inline function 'io.ktor.utils.io.core.buildPacket' call
  var builder = new Buffer();
  writeFully(builder, _this__u8e3s4.g3g_1);
  var packet = builder;
  var code = packet.f1y();
  var message = readText(packet);
  return CloseReason.w3e(code, message);
}
var NonDisposableHandle_instance;
function NonDisposableHandle_getInstance() {
  return NonDisposableHandle_instance;
}
var FrameType_TEXT_instance;
var FrameType_BINARY_instance;
var FrameType_CLOSE_instance;
var FrameType_PING_instance;
var FrameType_PONG_instance;
var Companion_instance_1;
function Companion_getInstance_1() {
  FrameType_initEntries();
  if (Companion_instance_1 === VOID)
    new Companion_1();
  return Companion_instance_1;
}
function values_0() {
  return [FrameType_TEXT_getInstance(), FrameType_BINARY_getInstance(), FrameType_CLOSE_getInstance(), FrameType_PING_getInstance(), FrameType_PONG_getInstance()];
}
function get_entries_0() {
  if ($ENTRIES_0 == null)
    $ENTRIES_0 = enumEntries(values_0());
  return $ENTRIES_0;
}
var FrameType_entriesInitialized;
function FrameType_initEntries() {
  if (FrameType_entriesInitialized)
    return Unit_instance;
  FrameType_entriesInitialized = true;
  FrameType_TEXT_instance = new FrameType('TEXT', 0, false, 1);
  FrameType_BINARY_instance = new FrameType('BINARY', 1, false, 2);
  FrameType_CLOSE_instance = new FrameType('CLOSE', 2, true, 8);
  FrameType_PING_instance = new FrameType('PING', 3, true, 9);
  FrameType_PONG_instance = new FrameType('PONG', 4, true, 10);
  Companion_getInstance_1();
}
var $ENTRIES_0;
function FrameType_TEXT_getInstance() {
  FrameType_initEntries();
  return FrameType_TEXT_instance;
}
function FrameType_BINARY_getInstance() {
  FrameType_initEntries();
  return FrameType_BINARY_instance;
}
function FrameType_CLOSE_getInstance() {
  FrameType_initEntries();
  return FrameType_CLOSE_instance;
}
function FrameType_PING_getInstance() {
  FrameType_initEntries();
  return FrameType_PING_instance;
}
function FrameType_PONG_getInstance() {
  FrameType_initEntries();
  return FrameType_PONG_instance;
}
function get_PongerCoroutineName() {
  _init_properties_PingPong_kt__9aqxey();
  return PongerCoroutineName;
}
var PongerCoroutineName;
function get_PingerCoroutineName() {
  _init_properties_PingPong_kt__9aqxey();
  return PingerCoroutineName;
}
var PingerCoroutineName;
function ponger(_this__u8e3s4, outgoing) {
  _init_properties_PingPong_kt__9aqxey();
  var channel = Channel(5);
  var tmp = get_PongerCoroutineName();
  launch(_this__u8e3s4, tmp, VOID, ponger$slambda(channel, outgoing));
  return channel;
}
function pinger(_this__u8e3s4, outgoing, periodMillis, timeoutMillis, onTimeout) {
  _init_properties_PingPong_kt__9aqxey();
  var actorJob = Job();
  var channel = Channel(2147483647);
  var tmp = actorJob.qm(get_PingerCoroutineName());
  launch(_this__u8e3s4, tmp, VOID, pinger$slambda(periodMillis, timeoutMillis, onTimeout, channel, outgoing));
  var tmp_0 = ensureNotNull(_this__u8e3s4.l21().ed(Key_instance));
  tmp_0.n22(pinger$lambda(actorJob));
  return channel;
}
function ponger$slambda($channel, $outgoing) {
  return constructCallableReference(function *($this$launch, $completion) {
    var tmp;
    try {
      // Inline function 'kotlinx.coroutines.channels.consumeEach' call
      var tmp0 = $channel;
      $l$block: {
        // Inline function 'kotlinx.coroutines.channels.consume' call
        var cause = null;
        try {
          var _iterator__ex2g4s = tmp0.l1();
          while (yield* _iterator__ex2g4s.l2f($completion)) {
            var e = _iterator__ex2g4s.n1();
            get_LOGGER().a2w('Received ping message, sending pong message');
            yield* $outgoing.z2f(Pong.z3g(e.g3g_1), $completion);
          }
          break $l$block;
        } catch ($p) {
          if ($p instanceof Error) {
            var e_0 = $p;
            cause = e_0;
            throw e_0;
          } else {
            throw $p;
          }
        }
        finally {
          cancelConsumed(tmp0, cause);
        }
      }
      tmp = Unit_instance;
    } catch ($p_0) {
      var tmp_0;
      if ($p_0 instanceof ClosedSendChannelException) {
        var _unused_var__etf5q3 = $p_0;
        tmp_0 = Unit_instance;
      } else {
        throw $p_0;
      }
      tmp = tmp_0;
    }
    return Unit_instance;
  }, 1);
}
function pinger$slambda$slambda($channel) {
  return constructCallableReference(function *($this$withTimeoutOrNull, $completion) {
    while (true) {
      yield* $channel.c2g($completion);
    }
    return Unit_instance;
  }, 1);
}
function pinger$slambda$slambda_0($outgoing, $pingMessage, $channel) {
  return constructCallableReference(function *($this$withTimeoutOrNull, $completion) {
    get_LOGGER().a2w('WebSocket Pinger: sending ping frame');
    yield* $outgoing.z2f(Ping.p3h(toByteArray($pingMessage, Charsets_getInstance().f2o_1)), $completion);
    $l$loop: while (true) {
      var msg = yield* $channel.c2g($completion);
      if (decodeToString(msg.g3g_1, 0, 0 + msg.g3g_1.length | 0) === $pingMessage) {
        get_LOGGER().a2w('WebSocket Pinger: received valid pong frame ' + msg.toString());
        break $l$loop;
      }
      get_LOGGER().a2w('WebSocket Pinger: received invalid pong frame ' + msg.toString() + ', continue waiting');
    }
    return Unit_instance;
  }, 1);
}
function pinger$slambda($periodMillis, $timeoutMillis, $onTimeout, $channel, $outgoing) {
  return constructCallableReference(function *($this$launch, $completion) {
    get_LOGGER().a2w('Starting WebSocket pinger coroutine with period ' + $periodMillis.toString() + ' ms and timeout ' + $timeoutMillis.toString() + ' ms');
    var random = Random(getTimeMillis());
    var pingIdBytes = new Int8Array(32);
    var tmp;
    try {
      $l$loop: while (true) {
        yield* withTimeoutOrNull($periodMillis, pinger$slambda$slambda($channel), $completion);
        random.qo(pingIdBytes);
        var pingMessage = '[ping ' + toHexString(pingIdBytes) + ' ping]';
        var rc = yield* withTimeoutOrNull($timeoutMillis, pinger$slambda$slambda_0($outgoing, pingMessage, $channel), $completion);
        if (rc == null) {
          get_LOGGER().a2w('WebSocket pinger has timed out');
          yield* $onTimeout(CloseReason.x3e(Codes_INTERNAL_ERROR_getInstance(), 'Ping timeout'), $completion);
          break $l$loop;
        }
      }
      tmp = Unit_instance;
    } catch ($p) {
      var tmp_0;
      if ($p instanceof CancellationException) {
        var ignore = $p;
        tmp_0 = Unit_instance;
      } else {
        if ($p instanceof ClosedReceiveChannelException) {
          var ignore_0 = $p;
          tmp_0 = Unit_instance;
        } else {
          if ($p instanceof ClosedSendChannelException) {
            var ignore_1 = $p;
            tmp_0 = Unit_instance;
          } else {
            if ($p instanceof ClosedByteChannelException) {
              var ignore_2 = $p;
              tmp_0 = Unit_instance;
            } else {
              throw $p;
            }
          }
        }
      }
      tmp = tmp_0;
    }
    return Unit_instance;
  }, 1);
}
function pinger$lambda($actorJob) {
  return (it) => {
    $actorJob.v22();
    return Unit_instance;
  };
}
var properties_initialized_PingPong_kt_fbfhmc;
function _init_properties_PingPong_kt__9aqxey() {
  if (!properties_initialized_PingPong_kt_fbfhmc) {
    properties_initialized_PingPong_kt_fbfhmc = true;
    PongerCoroutineName = new CoroutineName('ws-ponger');
    PingerCoroutineName = new CoroutineName('ws-pinger');
  }
}
var Companion_instance_2;
function Companion_getInstance_2() {
  if (Companion_instance_2 === VOID)
    new Companion_2();
  return Companion_instance_2;
}
function from(_this__u8e3s4, config) {
  // Inline function 'kotlin.with' call
  var tmp;
  if (config.s3h_1 === 2147483647) {
    tmp = Channel(2147483647);
  } else if (config.t3h_1.equals(ChannelOverflow_SUSPEND_getInstance())) {
    tmp = Channel(config.s3h_1, BufferOverflow_SUSPEND_getInstance());
  } else if (config.t3h_1.equals(ChannelOverflow_CLOSE_getInstance())) {
    tmp = new BoundedChannel(config.s3h_1);
  } else {
    // Inline function 'kotlin.error' call
    var message = 'Unsupported channel config.';
    throw IllegalStateException.o(toString(message));
  }
  return tmp;
}
var Companion_instance_3;
function Companion_getInstance_3() {
  if (Companion_instance_3 === VOID)
    new Companion_3();
  return Companion_instance_3;
}
var ChannelOverflow_SUSPEND_instance;
var ChannelOverflow_CLOSE_instance;
var ChannelOverflow_entriesInitialized;
function ChannelOverflow_initEntries() {
  if (ChannelOverflow_entriesInitialized)
    return Unit_instance;
  ChannelOverflow_entriesInitialized = true;
  ChannelOverflow_SUSPEND_instance = new ChannelOverflow('SUSPEND', 0);
  ChannelOverflow_CLOSE_instance = new ChannelOverflow('CLOSE', 1);
}
function BoundedChannel$Companion$createDelegate$lambda($channel) {
  return (it) => {
    var tmp;
    var tmp_0;
    if ($channel._v == null) {
      throwUninitializedPropertyAccessException('channel');
    } else {
      tmp_0 = $channel._v;
    }
    if (!tmp_0.s2f()) {
      var tmp_1;
      if ($channel._v == null) {
        throwUninitializedPropertyAccessException('channel');
      } else {
        tmp_1 = $channel._v;
      }
      tmp_1.j2g(ChannelOverflowException.y3h('Channel overflowed'));
      tmp = Unit_instance;
    }
    return Unit_instance;
  };
}
var Companion_instance_4;
function Companion_getInstance_4() {
  return Companion_instance_4;
}
function ChannelOverflow_SUSPEND_getInstance() {
  ChannelOverflow_initEntries();
  return ChannelOverflow_SUSPEND_instance;
}
function ChannelOverflow_CLOSE_getInstance() {
  ChannelOverflow_initEntries();
  return ChannelOverflow_CLOSE_instance;
}
function parametersToString($this) {
  return $this.j3i_1.j1() ? '' : '; ' + joinToString($this.j3i_1, ';');
}
function parseWebSocketExtensions(value) {
  // Inline function 'kotlin.collections.map' call
  var this_0 = split(value, [',']);
  // Inline function 'kotlin.collections.mapTo' call
  var destination = ArrayList.y1(collectionSizeOrDefault(this_0, 10));
  var _iterator__ex2g4s = this_0.l1();
  while (_iterator__ex2g4s.m1()) {
    var item = _iterator__ex2g4s.n1();
    var extension = split(item, [';']);
    // Inline function 'kotlin.text.trim' call
    var this_1 = first(extension);
    var name = toString(trim(isCharSequence(this_1) ? this_1 : THROW_CCE()));
    // Inline function 'kotlin.collections.map' call
    var this_2 = drop(extension, 1);
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList.y1(collectionSizeOrDefault(this_2, 10));
    var _iterator__ex2g4s_0 = this_2.l1();
    while (_iterator__ex2g4s_0.m1()) {
      var item_0 = _iterator__ex2g4s_0.n1();
      // Inline function 'kotlin.text.trim' call
      var tmp$ret$6 = toString(trim(isCharSequence(item_0) ? item_0 : THROW_CCE()));
      destination_0.z1(tmp$ret$6);
    }
    var parameters = destination_0;
    var tmp$ret$2 = new WebSocketExtensionHeader(name, parameters);
    destination.z1(tmp$ret$2);
  }
  return destination;
}
function *close(_this__u8e3s4, reason, $completion) {
  reason = reason === VOID ? CloseReason.x3e(Codes_NORMAL_getInstance(), '') : reason;
  try {
    yield* _this__u8e3s4.e3f(Close.c3g(reason), $completion);
    yield* _this__u8e3s4.k2m($completion);
  } catch ($p) {
    if ($p instanceof Error) {
      var _unused_var__etf5q3 = $p;
    } else {
      throw $p;
    }
  }
  return Unit_instance;
}
function *closeExceptionally(_this__u8e3s4, cause, $completion) {
  var tmp;
  if (cause instanceof CancellationException) {
    tmp = CloseReason.x3e(Codes_NORMAL_getInstance(), '');
  } else {
    tmp = CloseReason.x3e(Codes_INTERNAL_ERROR_getInstance(), cause.toString());
  }
  var reason = tmp;
  yield* /*#__NOINLINE__*/close(_this__u8e3s4, reason, $completion);
  return Unit_instance;
}
var Companion_instance_5;
function Companion_getInstance_5() {
  if (Companion_instance_5 === VOID)
    new Companion_5();
  return Companion_instance_5;
}
function get_OUTGOING_CHANNEL_CAPACITY() {
  return OUTGOING_CHANNEL_CAPACITY;
}
var OUTGOING_CHANNEL_CAPACITY;
//region block: post-declaration
initMetadataForCompanion(Companion);
initMetadataForClass(Codes, 'Codes');
initMetadataForClass(CloseReason, 'CloseReason');
initMetadataForInterface(WebSocketSession, 'WebSocketSession', VOID, VOID, VOID, [1, 0]);
initMetadataForInterface(DefaultWebSocketSession, 'DefaultWebSocketSession', VOID, VOID, [WebSocketSession], [1, 0]);
initMetadataForCompanion(Companion_0);
protoOf(DefaultWebSocketSessionImpl).e3f = send;
initMetadataForClass(DefaultWebSocketSessionImpl, 'DefaultWebSocketSessionImpl', VOID, VOID, [DefaultWebSocketSession, WebSocketSession], [1, 0, 2]);
initMetadataForObject(NonDisposableHandle, 'NonDisposableHandle', VOID, VOID, [DisposableHandle]);
initMetadataForClass(FrameTooBigException, 'FrameTooBigException', VOID, VOID, [CopyableThrowable]);
initMetadataForCompanion(Companion_1);
initMetadataForClass(FrameType, 'FrameType');
initMetadataForCompanion(Companion_2);
initMetadataForClass(WebSocketChannelsConfig, 'WebSocketChannelsConfig', WebSocketChannelsConfig);
initMetadataForCompanion(Companion_3);
initMetadataForClass(ChannelConfig, 'ChannelConfig');
initMetadataForClass(ChannelOverflow, 'ChannelOverflow');
initMetadataForCompanion(Companion_4);
protoOf(BoundedChannel).l2g = close$default;
protoOf(BoundedChannel).n2g = cancel$default;
initMetadataForClass(BoundedChannel, 'BoundedChannel', VOID, VOID, [SendChannel, ReceiveChannel], [1, 0]);
initMetadataForClass(ChannelOverflowException, 'ChannelOverflowException');
initMetadataForInterface(WebSocketExtension, 'WebSocketExtension');
initMetadataForClass(WebSocketExtensionsConfig, 'WebSocketExtensionsConfig', WebSocketExtensionsConfig);
initMetadataForClass(WebSocketExtensionHeader, 'WebSocketExtensionHeader');
initMetadataForClass(Frame, 'Frame');
initMetadataForClass(Binary, 'Binary');
initMetadataForClass(Text, 'Text');
initMetadataForClass(Close, 'Close', Close.g3j);
initMetadataForClass(Ping, 'Ping');
initMetadataForClass(Pong, 'Pong');
initMetadataForCompanion(Companion_5);
//endregion
//region block: init
NonDisposableHandle_instance = new NonDisposableHandle();
Companion_instance_4 = new Companion_4();
OUTGOING_CHANNEL_CAPACITY = null;
//endregion
//region block: exports
export {
  Companion_getInstance as Companion_getInstanceo8cazic5dguk,
  Companion_getInstance_2 as Companion_getInstance27kujspvp4jub,
  Codes_CLOSED_ABNORMALLY_getInstance as Codes_CLOSED_ABNORMALLY_getInstance35h8511ldg1ec,
  Codes_NORMAL_getInstance as Codes_NORMAL_getInstance1njykag03saqj,
  send as send3vgnni2smbra3,
  CloseReason as CloseReason10cphaqpp3ct7,
  DefaultWebSocketSession_0 as DefaultWebSocketSessionmehckluw85jl,
  DefaultWebSocketSession as DefaultWebSocketSession3h8506yqzs5fx,
  Binary as Binary3tlzyfojm51s4,
  Close as Close3tx65evcwi73t,
  Text as Text3e6ukp9joohql,
  WebSocketChannelsConfig as WebSocketChannelsConfig1qogztyrywmj9,
  WebSocketExtensionsConfig as WebSocketExtensionsConfig3sf1f7u7xi63m,
  WebSocketExtension as WebSocketExtensionixqq2y77p4e0,
  WebSocketSession as WebSocketSessionzi1ianvyj32u,
  from as from3gpkuvfyl3bft,
  parseWebSocketExtensions as parseWebSocketExtensionszyo25w86ylog,
};
//endregion

//# sourceMappingURL=ktor-ktor-websockets.mjs.map
