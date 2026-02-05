import {
  collectionSizeOrDefault36dulx8yinfqm as collectionSizeOrDefault,
  mapCapacity1h45rc3eh9p2l as mapCapacity,
  coerceAtLeast2bkz8m9ik7hep as coerceAtLeast,
  LinkedHashMap1zhqxkxv3xnkl as LinkedHashMap,
  Unit_instance28fytmsmm6r23 as Unit_instance,
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
  get_COROUTINE_SUSPENDED3ujt3p13qm4iy as get_COROUTINE_SUSPENDED,
  ensureNotNull1e947j3ixpazm as ensureNotNull,
  CancellationException3b36o9qz53rgr as CancellationException,
  suspendOrReturn49pspzlx5djv as suspendOrReturn,
  toString30pk9tzaqopn as toString_0,
  fromInt2ii0rejb1w62w as fromInt,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  initMetadataForLambda3af3he42mmnh as initMetadataForLambda,
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
  split2bvyvnrlcifjv as split,
  first58ocm7j58k3q as first,
  isCharSequence1ju9jr1w86plq as isCharSequence,
  trim11nh7r46at6sx as trim,
  drop3na99dw9feawf as drop,
  noWhenBranchMatchedException2a6r7ubxgky5j as noWhenBranchMatchedException,
} from './kotlin-kotlin-stdlib.mjs';
import {
  get_isTraceEnabled82xibuu04nxp as get_isTraceEnabled,
  ChannelIOException2i3t76lsrbgox as ChannelIOException,
  KtorSimpleLogger1xdphsp5l4e48 as KtorSimpleLogger,
  initCauseBridge1upxfqhavblt6 as initCauseBridge,
  getTimeMillis12o7k17x9fmwi as getTimeMillis,
  hex2ofqpe9ngcu1i as hex,
} from './ktor-ktor-utils.mjs';
import {
  BytePacketBuilder2biodf4wxvlba as BytePacketBuilder,
  writeFully359t6q8kam2g5 as writeFully,
  buildjygoh729rhy8 as build,
  get_size2imoy2jq11jxl as get_size,
  Charsets_getInstanceq0o82sizm30g as Charsets_getInstance,
  decode1t43jmuxrxpmo as decode,
  readText27783kyxjxi1g as readText,
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
  cancelConsumed2i0oizqhmljf6 as cancelConsumed,
  ClosedSendChannelException29m33prpq9jaw as ClosedSendChannelException,
  ClosedReceiveChannelException3ofg6gf5f5b38 as ClosedReceiveChannelException,
  Dispatchers_getInstancewbokwrm9sosb as Dispatchers_getInstance,
  launch1c91vkjzdi9sd as launch,
  CoroutineStart_UNDISPATCHED_getInstanceldihd7d5m0an as CoroutineStart_UNDISPATCHED_getInstance,
  ChannelResult2y4k69ac6y3du as ChannelResult,
  _ChannelResult___get_isSuccess__impl__odq1z9363u9zgwpgg09 as _ChannelResult___get_isSuccess__impl__odq1z9,
  CoroutineScopefcb5f5dwqcas as CoroutineScope,
  CompletableDeferred2lnqvsbvx74d3 as CompletableDeferred,
  Channel3r72atmcithql as Channel,
  Key_instance17dpgmdbeabno as Key_instance,
  Job13y4jkazwjho0 as Job,
  CoroutineName2g5zosw74tf0f as CoroutineName,
  CopyableThrowable1mvc99jcyvivf as CopyableThrowable,
  withTimeoutOrNullod8v51lxlhk as withTimeoutOrNull,
} from './kotlinx-coroutines-core.mjs';
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
    var destination = LinkedHashMap.mc(capacity);
    var _iterator__ex2g4s = this_0.q1();
    while (_iterator__ex2g4s.r1()) {
      var element = _iterator__ex2g4s.s1();
      var tmp$ret$0 = element.l2z_1;
      destination.k4(tmp$ret$0, element);
    }
    tmp.m2z_1 = destination;
    this.n2z_1 = Codes_INTERNAL_ERROR_getInstance();
  }
  o2z(code) {
    return this.m2z_1.h4(code);
  }
}
class Codes extends Enum {
  constructor(name, ordinal, code) {
    super(name, ordinal);
    this.l2z_1 = code;
  }
}
class CloseReason {
  static r2z(code, message) {
    var $this = createThis(this);
    $this.p2z_1 = code;
    $this.q2z_1 = message;
    return $this;
  }
  static s2z(code, message) {
    return this.r2z(code.l2z_1, message);
  }
  t2z() {
    return Companion_getInstance().o2z(this.p2z_1);
  }
  toString() {
    var tmp0_elvis_lhs = this.t2z();
    return 'CloseReason(reason=' + toString(tmp0_elvis_lhs == null ? this.p2z_1 : tmp0_elvis_lhs) + ', message=' + this.q2z_1 + ')';
  }
  hashCode() {
    var result = this.p2z_1;
    result = imul(result, 31) + getStringHashCode(this.q2z_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof CloseReason))
      return false;
    if (!(this.p2z_1 === other.p2z_1))
      return false;
    if (!(this.q2z_1 === other.q2z_1))
      return false;
    return true;
  }
}
class WebSocketSession {}
function send(frame, $completion) {
  return suspendOrReturn(/*#__NOINLINE__*/_generator_send__qhx0g0.bind(VOID, this, frame), $completion);
}
class DefaultWebSocketSession {}
class Companion_0 {
  constructor() {
    Companion_instance_0 = this;
    this.l31_1 = Pong.a32(new Int8Array(0), NonDisposableHandle_instance);
  }
}
class DefaultWebSocketSessionImpl$start$slambda {
  constructor($incomingJob, $outgoingJob, this$0) {
    this.a30_1 = $incomingJob;
    this.b30_1 = $outgoingJob;
    this.c30_1 = this$0;
  }
  z28($this$launch, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8.bind(VOID, this, $this$launch), $completion);
  }
  yd(p1, $completion) {
    return this.z28((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class DefaultWebSocketSessionImpl$runIncomingProcessor$slambda {
  constructor(this$0, $ponger) {
    this.q30_1 = this$0;
    this.r30_1 = $ponger;
  }
  z28($this$launch, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_0.bind(VOID, this, $this$launch), $completion);
  }
  yd(p1, $completion) {
    return this.z28((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda {
  constructor(this$0) {
    this.j31_1 = this$0;
  }
  z28($this$launch, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_1.bind(VOID, this, $this$launch), $completion);
  }
  yd(p1, $completion) {
    return this.z28((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class DefaultWebSocketSessionImpl$runOrCancelPinger$slambda {
  constructor(this$0) {
    this.k31_1 = this$0;
  }
  b32(it, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_2.bind(VOID, this, it), $completion);
  }
  yd(p1, $completion) {
    return this.b32(p1 instanceof CloseReason ? p1 : THROW_CCE(), $completion);
  }
}
class DefaultWebSocketSessionImpl {
  constructor(raw, pingIntervalMillis, timeoutMillis) {
    Companion_getInstance_0();
    this.d30_1 = raw;
    this.e30_1 = atomic$ref$1(null);
    this.f30_1 = CompletableDeferred();
    this.g30_1 = Channel(8);
    this.h30_1 = Channel(get_OUTGOING_CHANNEL_CAPACITY());
    this.i30_1 = atomic$boolean$1(false);
    this.j30_1 = Job(this.d30_1.u1m().md(Key_instance));
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.k30_1 = ArrayList.s2();
    this.l30_1 = atomic$boolean$1(false);
    this.m30_1 = this.d30_1.u1m().qm(this.j30_1).qm(new CoroutineName('ws-default'));
    this.n30_1 = pingIntervalMillis;
    this.o30_1 = timeoutMillis;
    this.p30_1 = this.f30_1;
  }
  x2z() {
    return this.g30_1;
  }
  y2z() {
    return this.h30_1;
  }
  q31() {
    return this.k30_1;
  }
  u1m() {
    return this.m30_1;
  }
  v2z(value) {
    this.d30_1.v2z(value);
  }
  w2z() {
    return this.d30_1.w2z();
  }
  u2z(negotiatedExtensions) {
    if (!this.l30_1.atomicfu$compareAndSet(false, true)) {
      // Inline function 'kotlin.error' call
      var message = 'WebSocket session ' + toString(this) + ' is already started.';
      throw IllegalStateException.o(toString(message));
    }
    // Inline function 'io.ktor.util.logging.trace' call
    var this_0 = get_LOGGER();
    if (get_isTraceEnabled(this_0)) {
      var tmp$ret$0 = 'Starting default WebSocketSession(' + toString(this) + ') ' + ('with negotiated extensions: ' + joinToString(negotiatedExtensions));
      this_0.s2g(tmp$ret$0);
    }
    this.k30_1.r2(negotiatedExtensions);
    runOrCancelPinger(this);
    var incomingJob = runIncomingProcessor(this, ponger(this, this.y2z()));
    var outgoingJob = runOutgoingProcessor(this);
    launch(this, VOID, VOID, DefaultWebSocketSessionImpl$start$slambda_0(incomingJob, outgoingJob, this));
  }
  w26($completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_flush__owbk1c.bind(VOID, this), $completion);
  }
}
class NonDisposableHandle {
  w1p() {
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
  static p31(frameSize) {
    var $this = this.le();
    captureStack($this, $this.o31_1);
    $this.n31_1 = frameSize;
    delete $this.message;
    return $this;
  }
  r() {
    return 'Frame is too big: ' + this.n31_1.toString();
  }
  j1t() {
    // Inline function 'kotlin.also' call
    var this_0 = FrameTooBigException.p31(this.n31_1);
    initCauseBridge(this_0, this);
    return this_0;
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
      var iterator = tmp0.q1();
      if (!iterator.r1()) {
        tmp$ret$0 = null;
        break $l$block_0;
      }
      var maxElem = iterator.s1();
      if (!iterator.r1()) {
        tmp$ret$0 = maxElem;
        break $l$block_0;
      }
      var maxValue = maxElem.f32_1;
      do {
        var e = iterator.s1();
        var v = e.f32_1;
        if (compareTo(maxValue, v) < 0) {
          maxElem = e;
          maxValue = v;
        }
      }
       while (iterator.r1());
      tmp$ret$0 = maxElem;
    }
    tmp.g32_1 = ensureNotNull(tmp$ret$0).f32_1;
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = this.g32_1 + 1 | 0;
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
        var _iterator__ex2g4s = tmp0_0.q1();
        while (_iterator__ex2g4s.r1()) {
          var element = _iterator__ex2g4s.s1();
          if (element.f32_1 === tmp_4) {
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
    tmp_0.h32_1 = tmp_3;
  }
}
class FrameType extends Enum {
  constructor(name, ordinal, controlFrame, opcode) {
    super(name, ordinal);
    this.e32_1 = controlFrame;
    this.f32_1 = opcode;
  }
}
class ponger$slambda {
  constructor($channel, $outgoing) {
    this.i32_1 = $channel;
    this.j32_1 = $outgoing;
  }
  z28($this$launch, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_3.bind(VOID, this, $this$launch), $completion);
  }
  yd(p1, $completion) {
    return this.z28((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class pinger$slambda$slambda {
  constructor($channel) {
    this.k32_1 = $channel;
  }
  z28($this$withTimeoutOrNull, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_4.bind(VOID, this, $this$withTimeoutOrNull), $completion);
  }
  yd(p1, $completion) {
    return this.z28((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class pinger$slambda$slambda_0 {
  constructor($outgoing, $pingMessage, $channel) {
    this.l32_1 = $outgoing;
    this.m32_1 = $pingMessage;
    this.n32_1 = $channel;
  }
  z28($this$withTimeoutOrNull, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_5.bind(VOID, this, $this$withTimeoutOrNull), $completion);
  }
  yd(p1, $completion) {
    return this.z28((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class pinger$slambda {
  constructor($periodMillis, $timeoutMillis, $onTimeout, $channel, $outgoing) {
    this.w32_1 = $periodMillis;
    this.x32_1 = $timeoutMillis;
    this.y32_1 = $onTimeout;
    this.z32_1 = $channel;
    this.a33_1 = $outgoing;
  }
  z28($this$launch, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_6.bind(VOID, this, $this$launch), $completion);
  }
  yd(p1, $completion) {
    return this.z28((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class WebSocketExtension {}
class WebSocketExtensionsConfig {
  constructor() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.d33_1 = ArrayList.s2();
    var tmp_0 = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_0.e33_1 = [false, false, false];
  }
  q2k() {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.d33_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList.b2(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.q1();
    while (_iterator__ex2g4s.r1()) {
      var item = _iterator__ex2g4s.s1();
      var tmp$ret$0 = item();
      destination.c2(tmp$ret$0);
    }
    return destination;
  }
}
class WebSocketExtensionHeader {
  constructor(name, parameters) {
    this.f33_1 = name;
    this.g33_1 = parameters;
  }
  toString() {
    return this.f33_1 + ' ' + parametersToString(this);
  }
}
class Frame {
  static p33(fin, frameType, data, disposableHandle, rsv1, rsv2, rsv3) {
    Companion_getInstance_2();
    disposableHandle = disposableHandle === VOID ? NonDisposableHandle_instance : disposableHandle;
    rsv1 = rsv1 === VOID ? false : rsv1;
    rsv2 = rsv2 === VOID ? false : rsv2;
    rsv3 = rsv3 === VOID ? false : rsv3;
    var $this = createThis(this);
    $this.s30_1 = fin;
    $this.t30_1 = frameType;
    $this.u30_1 = data;
    $this.v30_1 = disposableHandle;
    $this.w30_1 = rsv1;
    $this.x30_1 = rsv2;
    $this.y30_1 = rsv3;
    return $this;
  }
  toString() {
    return 'Frame ' + this.t30_1.toString() + ' (fin=' + this.s30_1 + ', buffer len = ' + this.u30_1.length + ')';
  }
}
class Binary extends Frame {
  static o33(fin, data, rsv1, rsv2, rsv3) {
    rsv1 = rsv1 === VOID ? false : rsv1;
    rsv2 = rsv2 === VOID ? false : rsv2;
    rsv3 = rsv3 === VOID ? false : rsv3;
    return this.p33(fin, FrameType_BINARY_getInstance(), data, NonDisposableHandle_instance, rsv1, rsv2, rsv3);
  }
  static q33(fin, data) {
    return this.o33(fin, data, false, false, false);
  }
}
class Text extends Frame {
  static y33(fin, data, rsv1, rsv2, rsv3) {
    rsv1 = rsv1 === VOID ? false : rsv1;
    rsv2 = rsv2 === VOID ? false : rsv2;
    rsv3 = rsv3 === VOID ? false : rsv3;
    return this.p33(fin, FrameType_TEXT_getInstance(), data, NonDisposableHandle_instance, rsv1, rsv2, rsv3);
  }
  static z33(fin, data) {
    return this.y33(fin, data, false, false, false);
  }
  static a34(text) {
    return this.z33(true, toByteArray(text));
  }
}
class Close extends Frame {
  static b34(data) {
    return this.p33(true, FrameType_CLOSE_getInstance(), data, NonDisposableHandle_instance, false, false, false);
  }
  static i31(reason) {
    // Inline function 'io.ktor.utils.io.core.buildPacket' call
    var builder = new Buffer();
    builder.w1k(reason.p2z_1);
    writeText(builder, reason.q2z_1);
    return this.c34(builder);
  }
  static c34(packet) {
    return this.b34(readByteArray(packet));
  }
  static d34() {
    return this.b34(Companion_getInstance_2().z30_1);
  }
}
class Ping extends Frame {
  static v32(data) {
    return this.p33(true, FrameType_PING_getInstance(), data, NonDisposableHandle_instance, false, false, false);
  }
}
class Pong extends Frame {
  static a32(data, disposableHandle) {
    disposableHandle = disposableHandle === VOID ? NonDisposableHandle_instance : disposableHandle;
    return this.p33(true, FrameType_PONG_getInstance(), data, disposableHandle, false, false, false);
  }
}
class Companion_2 {
  constructor() {
    Companion_instance_2 = this;
    this.z30_1 = new Int8Array(0);
  }
  a31(fin, frameType, data, rsv1, rsv2, rsv3) {
    var tmp;
    switch (frameType.x1_1) {
      case 1:
        tmp = Binary.o33(fin, data, rsv1, rsv2, rsv3);
        break;
      case 0:
        tmp = Text.y33(fin, data, rsv1, rsv2, rsv3);
        break;
      case 2:
        tmp = Close.b34(data);
        break;
      case 3:
        tmp = Ping.v32(data);
        break;
      case 4:
        tmp = Pong.a32(data, NonDisposableHandle_instance);
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
function DefaultWebSocketSession_0(session, pingIntervalMillis, timeoutMillis) {
  pingIntervalMillis = pingIntervalMillis === VOID ? 0n : pingIntervalMillis;
  timeoutMillis = timeoutMillis === VOID ? 15000n : timeoutMillis;
  _init_properties_DefaultWebSocketSession_kt__469s0y();
  // Inline function 'kotlin.require' call
  if (!!isInterface(session, DefaultWebSocketSession)) {
    var message = 'Cannot wrap other DefaultWebSocketSession';
    throw IllegalArgumentException.k2(toString(message));
  }
  return new DefaultWebSocketSessionImpl(session, pingIntervalMillis, timeoutMillis);
}
function *_generator_invoke__zhh2q8($this, $this$launch, $completion) {
  var tmp = $this.a30_1.a1o($completion);
  if (tmp === get_COROUTINE_SUSPENDED())
    tmp = yield tmp;
  var tmp_0 = $this.b30_1.a1o($completion);
  if (tmp_0 === get_COROUTINE_SUSPENDED())
    tmp_0 = yield tmp_0;
  $this.c30_1.j30_1.e1o();
  return Unit_instance;
}
function *_generator_invoke__zhh2q8_0($this, $this$launch, $completion) {
  var firstFrame = null;
  var frameBody = null;
  var closeFramePresented = false;
  try {
    // Inline function 'kotlinx.coroutines.channels.consumeEach' call
    var tmp0 = $this.q30_1.d30_1.x2z();
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.channels.consume' call
      var cause = null;
      try {
        var _iterator__ex2g4s = tmp0.q1();
        $l$loop: while (true) {
          var tmp = _iterator__ex2g4s.u20($completion);
          if (tmp === get_COROUTINE_SUSPENDED())
            tmp = yield tmp;
          if (!tmp) {
            break $l$loop;
          }
          var e = _iterator__ex2g4s.s1();
          $l$block_0: {
            // Inline function 'io.ktor.util.logging.trace' call
            var this_0 = get_LOGGER();
            if (get_isTraceEnabled(this_0)) {
              var tmp$ret$0 = 'WebSocketSession(' + toString($this$launch) + ') receiving frame ' + e.toString();
              this_0.s2g(tmp$ret$0);
            }
            if (e instanceof Close) {
              if (!$this.q30_1.y2z().b21()) {
                var tmp_0 = $this.q30_1.y2z();
                var tmp1_elvis_lhs = readReason(e);
                var tmp_1 = tmp_0.i21(Close.i31(tmp1_elvis_lhs == null ? get_NORMAL_CLOSE() : tmp1_elvis_lhs), $completion);
                if (tmp_1 === get_COROUTINE_SUSPENDED())
                  tmp_1 = yield tmp_1;
              }
              closeFramePresented = true;
              return Unit_instance;
            } else {
              if (e instanceof Pong) {
                var tmp2_safe_receiver = $this.q30_1.e30_1.kotlinx$atomicfu$value;
                if (tmp2_safe_receiver == null)
                  null;
                else {
                  var tmp_2 = tmp2_safe_receiver.i21(e, $completion);
                  if (tmp_2 === get_COROUTINE_SUSPENDED())
                    tmp_2 = yield tmp_2;
                }
              } else {
                if (e instanceof Ping) {
                  var tmp_3 = $this.r30_1.i21(e, $completion);
                  if (tmp_3 === get_COROUTINE_SUSPENDED())
                    tmp_3 = yield tmp_3;
                } else {
                  var tmp_4 = checkMaxFrameSize($this.q30_1, frameBody, e, $completion);
                  if (tmp_4 === get_COROUTINE_SUSPENDED())
                    tmp_4 = yield tmp_4;
                  if (!e.s30_1) {
                    if (firstFrame == null) {
                      firstFrame = e;
                    }
                    if (frameBody == null) {
                      frameBody = BytePacketBuilder();
                    }
                    writeFully(ensureNotNull(frameBody), e.u30_1);
                    break $l$block_0;
                  }
                  if (firstFrame == null) {
                    var tmp_5 = $this.q30_1.g30_1.i21(processIncomingExtensions($this.q30_1, e), $completion);
                    if (tmp_5 === get_COROUTINE_SUSPENDED())
                      tmp_5 = yield tmp_5;
                    break $l$block_0;
                  }
                  writeFully(ensureNotNull(frameBody), e.u30_1);
                  var defragmented = Companion_getInstance_2().a31(true, ensureNotNull(firstFrame).t30_1, readByteArray(build(ensureNotNull(frameBody))), ensureNotNull(firstFrame).w30_1, ensureNotNull(firstFrame).x30_1, ensureNotNull(firstFrame).y30_1);
                  firstFrame = null;
                  var tmp_6 = $this.q30_1.g30_1.i21(processIncomingExtensions($this.q30_1, defragmented), $completion);
                  if (tmp_6 === get_COROUTINE_SUSPENDED())
                    tmp_6 = yield tmp_6;
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
  } catch ($p) {
    if ($p instanceof ClosedSendChannelException) {
      var ignore = $p;
    } else {
      if ($p instanceof Error) {
        var cause_0 = $p;
        $this.r30_1.v21();
        $this.q30_1.g30_1.t21(cause_0);
      } else {
        throw $p;
      }
    }
  }
  finally {
    $this.r30_1.v21();
    var tmp0_safe_receiver = frameBody;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.e7();
    }
    $this.q30_1.g30_1.v21();
    if (!closeFramePresented) {
      var tmp_7 = close($this.q30_1, CloseReason.s2z(Codes_CLOSED_ABNORMALLY_getInstance(), 'Connection was closed without close frame'), $completion);
      if (tmp_7 === get_COROUTINE_SUSPENDED())
        tmp_7 = yield tmp_7;
    }
  }
  return Unit_instance;
}
function *_generator_invoke__zhh2q8_1($this, $this$launch, $completion) {
  try {
    var tmp = outgoingProcessorLoop($this.j31_1, $completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      tmp = yield tmp;
  } catch ($p) {
    if ($p instanceof ClosedSendChannelException) {
      var ignore = $p;
    } else {
      if ($p instanceof ClosedReceiveChannelException) {
        var ignore_0 = $p;
      } else {
        if ($p instanceof CancellationException) {
          var ignore_1 = $p;
          var tmp_0 = sendCloseSequence$default($this.j31_1, CloseReason.s2z(Codes_NORMAL_getInstance(), ''), VOID, $completion);
          if (tmp_0 === get_COROUTINE_SUSPENDED())
            tmp_0 = yield tmp_0;
        } else {
          if ($p instanceof ChannelIOException) {
            var ignore_2 = $p;
          } else {
            if ($p instanceof Error) {
              var cause = $p;
              $this.j31_1.h30_1.d1o(CancellationException.p('Failed to send frame', cause));
              var tmp_1 = closeExceptionally($this.j31_1.d30_1, cause, $completion);
              if (tmp_1 === get_COROUTINE_SUSPENDED())
                tmp_1 = yield tmp_1;
            } else {
              throw $p;
            }
          }
        }
      }
    }
  }
  finally {
    $this.j31_1.h30_1.x21();
    var tmp_2 = close($this.j31_1.d30_1, VOID, $completion);
    if (tmp_2 === get_COROUTINE_SUSPENDED())
      tmp_2 = yield tmp_2;
  }
  return Unit_instance;
}
function *_generator_invoke__zhh2q8_2($this, it, $completion) {
  var tmp = sendCloseSequence($this.k31_1, it, IOException.e1m('Ping timeout'), $completion);
  if (tmp === get_COROUTINE_SUSPENDED())
    tmp = yield tmp;
  return Unit_instance;
}
function *_generator_flush__owbk1c($this, $completion) {
  var tmp = $this.d30_1.w26($completion);
  if (tmp === get_COROUTINE_SUSPENDED())
    tmp = yield tmp;
  return Unit_instance;
}
function runIncomingProcessor($this, ponger) {
  var tmp = get_IncomingProcessorCoroutineName().qm(Dispatchers_getInstance().i1x_1);
  return launch($this, tmp, VOID, DefaultWebSocketSessionImpl$runIncomingProcessor$slambda_0($this, ponger));
}
function runOutgoingProcessor($this) {
  var tmp = get_OutgoingProcessorCoroutineName().qm(Dispatchers_getInstance().i1x_1);
  var tmp_0 = CoroutineStart_UNDISPATCHED_getInstance();
  return launch($this, tmp, tmp_0, DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda_0($this));
}
function *_generator_outgoingProcessorLoop__h1ph7a($this, $completion) {
  var _iterator__ex2g4s = $this.h30_1.q1();
  $l$loop_0: while (true) {
    var tmp = _iterator__ex2g4s.u20($completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      tmp = yield tmp;
    if (!tmp) {
      break $l$loop_0;
    }
    var frame = _iterator__ex2g4s.s1();
    // Inline function 'io.ktor.util.logging.trace' call
    var this_0 = get_LOGGER();
    if (get_isTraceEnabled(this_0)) {
      var tmp$ret$0 = 'Sending ' + frame.toString() + ' from session ' + toString($this);
      this_0.s2g(tmp$ret$0);
    }
    var tmp_0;
    if (frame instanceof Close) {
      var tmp_1 = sendCloseSequence$default($this, readReason(frame), VOID, $completion);
      if (tmp_1 === get_COROUTINE_SUSPENDED())
        tmp_1 = yield tmp_1;
      break $l$loop_0;
    } else {
      var tmp_2;
      if (frame instanceof Text) {
        tmp_2 = true;
      } else {
        tmp_2 = frame instanceof Binary;
      }
      if (tmp_2) {
        tmp_0 = processOutgoingExtensions($this, frame);
      } else {
        tmp_0 = frame;
      }
    }
    var processedFrame = tmp_0;
    var tmp_3 = $this.d30_1.y2z().i21(processedFrame, $completion);
    if (tmp_3 === get_COROUTINE_SUSPENDED())
      tmp_3 = yield tmp_3;
  }
  return Unit_instance;
}
function outgoingProcessorLoop($this, $completion) {
  return suspendOrReturn(/*#__NOINLINE__*/_generator_outgoingProcessorLoop__h1ph7a.bind(VOID, $this), $completion);
}
function *_generator_sendCloseSequence__8ec8rh($this, reason, exception, $completion) {
  if (!tryClose($this))
    return Unit_instance;
  // Inline function 'io.ktor.util.logging.trace' call
  var this_0 = get_LOGGER();
  if (get_isTraceEnabled(this_0)) {
    var tmp$ret$0 = 'Sending Close Sequence for session ' + toString($this) + ' with reason ' + toString_0(reason) + ' and exception ' + toString_0(exception);
    this_0.s2g(tmp$ret$0);
  }
  $this.j30_1.y1s();
  var reasonToSend = reason == null ? CloseReason.s2z(Codes_NORMAL_getInstance(), '') : reason;
  try {
    runOrCancelPinger($this);
    if (!(reasonToSend.p2z_1 === Codes_CLOSED_ABNORMALLY_getInstance().l2z_1)) {
      var tmp = $this.d30_1.y2z().i21(Close.i31(reasonToSend), $completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
    }
  }finally {
    $this.f30_1.w1s(reasonToSend);
    if (!(exception == null)) {
      $this.h30_1.t21(exception);
      $this.g30_1.t21(exception);
    }
  }
  return Unit_instance;
}
function sendCloseSequence($this, reason, exception, $completion) {
  return suspendOrReturn(/*#__NOINLINE__*/_generator_sendCloseSequence__8ec8rh.bind(VOID, $this, reason, exception), $completion);
}
function sendCloseSequence$default($this, reason, exception, $completion, $super) {
  exception = exception === VOID ? null : exception;
  return sendCloseSequence($this, reason, exception, $completion);
}
function tryClose($this) {
  return $this.i30_1.atomicfu$compareAndSet(false, true);
}
function runOrCancelPinger($this) {
  var interval = $this.n30_1;
  var tmp;
  if ($this.i30_1.kotlinx$atomicfu$value) {
    tmp = null;
  } else if (interval > 0n) {
    var tmp_0 = $this.d30_1.y2z();
    var tmp_1 = $this.o30_1;
    tmp = pinger($this, tmp_0, interval, tmp_1, DefaultWebSocketSessionImpl$runOrCancelPinger$slambda_0($this));
  } else {
    tmp = null;
  }
  var newPinger = tmp;
  var tmp0_safe_receiver = $this.e30_1.atomicfu$getAndSet(newPinger);
  if (tmp0_safe_receiver == null)
    null;
  else
    tmp0_safe_receiver.v21();
  var tmp2_safe_receiver = newPinger == null ? null : new ChannelResult(newPinger.j21(Companion_getInstance_0().l31_1));
  if (tmp2_safe_receiver == null)
    null;
  else
    _ChannelResult___get_isSuccess__impl__odq1z9(tmp2_safe_receiver.h21_1);
  if ($this.i30_1.kotlinx$atomicfu$value && !(newPinger == null)) {
    runOrCancelPinger($this);
  }
}
function *_generator_checkMaxFrameSize__26jxa6($this, packet, frame, $completion) {
  var tmp = frame.u30_1.length;
  var tmp1_elvis_lhs = packet == null ? null : get_size(packet);
  var size = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
  if (fromInt(size) > $this.w2z()) {
    if (packet == null)
      null;
    else {
      packet.e7();
    }
    var tmp_0 = close($this, CloseReason.s2z(Codes_TOO_BIG_getInstance(), 'Frame is too big: ' + size + '. Max size is ' + $this.w2z().toString()), $completion);
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      tmp_0 = yield tmp_0;
    throw FrameTooBigException.p31(fromInt(size));
  }
  return Unit_instance;
}
function checkMaxFrameSize($this, packet, frame, $completion) {
  return suspendOrReturn(/*#__NOINLINE__*/_generator_checkMaxFrameSize__26jxa6.bind(VOID, $this, packet, frame), $completion);
}
function processIncomingExtensions($this, frame) {
  // Inline function 'kotlin.collections.fold' call
  var accumulator = frame;
  var _iterator__ex2g4s = $this.q31().q1();
  while (_iterator__ex2g4s.r1()) {
    var element = _iterator__ex2g4s.s1();
    var current = accumulator;
    accumulator = element.r31(current);
  }
  return accumulator;
}
function processOutgoingExtensions($this, frame) {
  // Inline function 'kotlin.collections.fold' call
  var accumulator = frame;
  var _iterator__ex2g4s = $this.q31().q1();
  while (_iterator__ex2g4s.r1()) {
    var element = _iterator__ex2g4s.s1();
    var current = accumulator;
    accumulator = element.s31(current);
  }
  return accumulator;
}
var Companion_instance_0;
function Companion_getInstance_0() {
  if (Companion_instance_0 === VOID)
    new Companion_0();
  return Companion_instance_0;
}
function DefaultWebSocketSessionImpl$start$slambda_0($incomingJob, $outgoingJob, this$0) {
  var i = new DefaultWebSocketSessionImpl$start$slambda($incomingJob, $outgoingJob, this$0);
  var l = ($this$launch, $completion) => i.z28($this$launch, $completion);
  l.$arity = 1;
  return l;
}
function DefaultWebSocketSessionImpl$runIncomingProcessor$slambda_0(this$0, $ponger) {
  var i = new DefaultWebSocketSessionImpl$runIncomingProcessor$slambda(this$0, $ponger);
  var l = ($this$launch, $completion) => i.z28($this$launch, $completion);
  l.$arity = 1;
  return l;
}
function DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda_0(this$0) {
  var i = new DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda(this$0);
  var l = ($this$launch, $completion) => i.z28($this$launch, $completion);
  l.$arity = 1;
  return l;
}
function DefaultWebSocketSessionImpl$runOrCancelPinger$slambda_0(this$0) {
  var i = new DefaultWebSocketSessionImpl$runOrCancelPinger$slambda(this$0);
  var l = (it, $completion) => i.b32(it, $completion);
  l.$arity = 1;
  return l;
}
var properties_initialized_DefaultWebSocketSession_kt_6cjlhc;
function _init_properties_DefaultWebSocketSession_kt__469s0y() {
  if (!properties_initialized_DefaultWebSocketSession_kt_6cjlhc) {
    properties_initialized_DefaultWebSocketSession_kt_6cjlhc = true;
    LOGGER = KtorSimpleLogger('io.ktor.websocket.WebSocket');
    IncomingProcessorCoroutineName = new CoroutineName('ws-incoming-processor');
    OutgoingProcessorCoroutineName = new CoroutineName('ws-outgoing-processor');
    NORMAL_CLOSE = CloseReason.s2z(Codes_NORMAL_getInstance(), 'OK');
  }
}
function readText_0(_this__u8e3s4) {
  // Inline function 'kotlin.require' call
  if (!_this__u8e3s4.s30_1) {
    var message = 'Text could be only extracted from non-fragmented frame';
    throw IllegalArgumentException.k2(toString(message));
  }
  var tmp = Charsets_getInstance().r29_1.v29();
  // Inline function 'io.ktor.utils.io.core.buildPacket' call
  var builder = new Buffer();
  writeFully(builder, _this__u8e3s4.u30_1);
  return decode(tmp, builder);
}
function readBytes(_this__u8e3s4) {
  // Inline function 'kotlin.collections.copyOf' call
  // Inline function 'kotlin.js.asDynamic' call
  return _this__u8e3s4.u30_1.slice();
}
function readReason(_this__u8e3s4) {
  if (_this__u8e3s4.u30_1.length < 2) {
    return null;
  }
  // Inline function 'io.ktor.utils.io.core.buildPacket' call
  var builder = new Buffer();
  writeFully(builder, _this__u8e3s4.u30_1);
  var packet = builder;
  var code = packet.o1j();
  var message = readText(packet);
  return CloseReason.r2z(code, message);
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
  launch(_this__u8e3s4, tmp, VOID, ponger$slambda_0(channel, outgoing));
  return channel;
}
function pinger(_this__u8e3s4, outgoing, periodMillis, timeoutMillis, onTimeout) {
  _init_properties_PingPong_kt__9aqxey();
  var actorJob = Job();
  var channel = Channel(2147483647);
  var tmp = actorJob.qm(get_PingerCoroutineName());
  launch(_this__u8e3s4, tmp, VOID, pinger$slambda_0(periodMillis, timeoutMillis, onTimeout, channel, outgoing));
  var tmp_0 = ensureNotNull(_this__u8e3s4.u1m().md(Key_instance));
  tmp_0.w1n(pinger$lambda(actorJob));
  return channel;
}
function *_generator_invoke__zhh2q8_3($this, $this$launch, $completion) {
  try {
    // Inline function 'kotlinx.coroutines.channels.consumeEach' call
    var tmp0 = $this.i32_1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.channels.consume' call
      var cause = null;
      try {
        var _iterator__ex2g4s = tmp0.q1();
        $l$loop: while (true) {
          var tmp = _iterator__ex2g4s.u20($completion);
          if (tmp === get_COROUTINE_SUSPENDED())
            tmp = yield tmp;
          if (!tmp) {
            break $l$loop;
          }
          var e = _iterator__ex2g4s.s1();
          get_LOGGER().s2g('Received ping message, sending pong message');
          var tmp_0 = $this.j32_1.i21(Pong.a32(e.u30_1), $completion);
          if (tmp_0 === get_COROUTINE_SUSPENDED())
            tmp_0 = yield tmp_0;
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
  } catch ($p) {
    if ($p instanceof ClosedSendChannelException) {
      var _unused_var__etf5q3 = $p;
    } else {
      throw $p;
    }
  }
  return Unit_instance;
}
function ponger$slambda_0($channel, $outgoing) {
  var i = new ponger$slambda($channel, $outgoing);
  var l = ($this$launch, $completion) => i.z28($this$launch, $completion);
  l.$arity = 1;
  return l;
}
function *_generator_invoke__zhh2q8_4($this, $this$withTimeoutOrNull, $completion) {
  while (true) {
    var tmp = $this.k32_1.m21($completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      tmp = yield tmp;
  }
  return Unit_instance;
}
function *_generator_invoke__zhh2q8_5($this, $this$withTimeoutOrNull, $completion) {
  get_LOGGER().s2g('WebSocket Pinger: sending ping frame');
  var tmp = $this.l32_1.i21(Ping.v32(toByteArray($this.m32_1, Charsets_getInstance().s29_1)), $completion);
  if (tmp === get_COROUTINE_SUSPENDED())
    tmp = yield tmp;
  $l$loop: while (true) {
    var tmp_0 = $this.n32_1.m21($completion);
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      tmp_0 = yield tmp_0;
    var msg = tmp_0;
    if (decodeToString(msg.u30_1, 0, 0 + msg.u30_1.length | 0) === $this.m32_1) {
      get_LOGGER().s2g('WebSocket Pinger: received valid pong frame ' + msg.toString());
      break $l$loop;
    }
    get_LOGGER().s2g('WebSocket Pinger: received invalid pong frame ' + msg.toString() + ', continue waiting');
  }
  return Unit_instance;
}
function *_generator_invoke__zhh2q8_6($this, $this$launch, $completion) {
  get_LOGGER().s2g('Starting WebSocket pinger coroutine with period ' + $this.w32_1.toString() + ' ms and timeout ' + $this.x32_1.toString() + ' ms');
  var random = Random(getTimeMillis());
  var pingIdBytes = new Int8Array(32);
  try {
    $l$loop: while (true) {
      var tmp = withTimeoutOrNull($this.w32_1, pinger$slambda$slambda_1($this.z32_1), $completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      random.ko(pingIdBytes);
      var pingMessage = '[ping ' + hex(pingIdBytes) + ' ping]';
      var tmp_0 = withTimeoutOrNull($this.x32_1, pinger$slambda$slambda_2($this.a33_1, pingMessage, $this.z32_1), $completion);
      if (tmp_0 === get_COROUTINE_SUSPENDED())
        tmp_0 = yield tmp_0;
      var rc = tmp_0;
      if (rc == null) {
        get_LOGGER().s2g('WebSocket pinger has timed out');
        var tmp_1 = $this.y32_1(CloseReason.s2z(Codes_INTERNAL_ERROR_getInstance(), 'Ping timeout'), $completion);
        if (tmp_1 === get_COROUTINE_SUSPENDED())
          tmp_1 = yield tmp_1;
        break $l$loop;
      }
    }
  } catch ($p) {
    if ($p instanceof CancellationException) {
      var ignore = $p;
    } else {
      if ($p instanceof ClosedReceiveChannelException) {
        var ignore_0 = $p;
      } else {
        if ($p instanceof ClosedSendChannelException) {
          var ignore_1 = $p;
        } else {
          if ($p instanceof ClosedByteChannelException) {
            var ignore_2 = $p;
          } else {
            throw $p;
          }
        }
      }
    }
  }
  return Unit_instance;
}
function pinger$slambda$slambda_1($channel) {
  var i = new pinger$slambda$slambda($channel);
  var l = ($this$withTimeoutOrNull, $completion) => i.z28($this$withTimeoutOrNull, $completion);
  l.$arity = 1;
  return l;
}
function pinger$slambda$slambda_2($outgoing, $pingMessage, $channel) {
  var i = new pinger$slambda$slambda_0($outgoing, $pingMessage, $channel);
  var l = ($this$withTimeoutOrNull, $completion) => i.z28($this$withTimeoutOrNull, $completion);
  l.$arity = 1;
  return l;
}
function pinger$slambda_0($periodMillis, $timeoutMillis, $onTimeout, $channel, $outgoing) {
  var i = new pinger$slambda($periodMillis, $timeoutMillis, $onTimeout, $channel, $outgoing);
  var l = ($this$launch, $completion) => i.z28($this$launch, $completion);
  l.$arity = 1;
  return l;
}
function pinger$lambda($actorJob) {
  return (it) => {
    $actorJob.e1o();
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
function parametersToString($this) {
  return $this.g33_1.o1() ? '' : '; ' + joinToString($this.g33_1, ';');
}
function parseWebSocketExtensions(value) {
  // Inline function 'kotlin.collections.map' call
  var this_0 = split(value, [',']);
  // Inline function 'kotlin.collections.mapTo' call
  var destination = ArrayList.b2(collectionSizeOrDefault(this_0, 10));
  var _iterator__ex2g4s = this_0.q1();
  while (_iterator__ex2g4s.r1()) {
    var item = _iterator__ex2g4s.s1();
    var extension = split(item, [';']);
    // Inline function 'kotlin.text.trim' call
    var this_1 = first(extension);
    var name = toString(trim(isCharSequence(this_1) ? this_1 : THROW_CCE()));
    // Inline function 'kotlin.collections.map' call
    var this_2 = drop(extension, 1);
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList.b2(collectionSizeOrDefault(this_2, 10));
    var _iterator__ex2g4s_0 = this_2.q1();
    while (_iterator__ex2g4s_0.r1()) {
      var item_0 = _iterator__ex2g4s_0.s1();
      // Inline function 'kotlin.text.trim' call
      var tmp$ret$2 = toString(trim(isCharSequence(item_0) ? item_0 : THROW_CCE()));
      destination_0.c2(tmp$ret$2);
    }
    var parameters = destination_0;
    var tmp$ret$5 = new WebSocketExtensionHeader(name, parameters);
    destination.c2(tmp$ret$5);
  }
  return destination;
}
function *_generator_send__qhx0g0($this, frame, $completion) {
  var tmp = $this.y2z().i21(frame, $completion);
  if (tmp === get_COROUTINE_SUSPENDED())
    tmp = yield tmp;
  return Unit_instance;
}
function *_generator_close__nh2uv0(_this__u8e3s4, reason, $completion) {
  try {
    var tmp = _this__u8e3s4.z2z(Close.i31(reason), $completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      tmp = yield tmp;
    var tmp_0 = _this__u8e3s4.w26($completion);
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      tmp_0 = yield tmp_0;
  } catch ($p) {
    if ($p instanceof Error) {
      var _unused_var__etf5q3 = $p;
    } else {
      throw $p;
    }
  }
  return Unit_instance;
}
function close(_this__u8e3s4, reason, $completion) {
  reason = reason === VOID ? CloseReason.s2z(Codes_NORMAL_getInstance(), '') : reason;
  return suspendOrReturn(/*#__NOINLINE__*/_generator_close__nh2uv0.bind(VOID, _this__u8e3s4, reason), $completion);
}
function *_generator_closeExceptionally__hurwhz(_this__u8e3s4, cause, $completion) {
  var tmp;
  if (cause instanceof CancellationException) {
    tmp = CloseReason.s2z(Codes_NORMAL_getInstance(), '');
  } else {
    tmp = CloseReason.s2z(Codes_INTERNAL_ERROR_getInstance(), cause.toString());
  }
  var reason = tmp;
  var tmp_0 = close(_this__u8e3s4, reason, $completion);
  if (tmp_0 === get_COROUTINE_SUSPENDED())
    tmp_0 = yield tmp_0;
  return Unit_instance;
}
function closeExceptionally(_this__u8e3s4, cause, $completion) {
  return suspendOrReturn(/*#__NOINLINE__*/_generator_closeExceptionally__hurwhz.bind(VOID, _this__u8e3s4, cause), $completion);
}
var Companion_instance_2;
function Companion_getInstance_2() {
  if (Companion_instance_2 === VOID)
    new Companion_2();
  return Companion_instance_2;
}
function get_OUTGOING_CHANNEL_CAPACITY() {
  return 8;
}
//region block: post-declaration
initMetadataForCompanion(Companion);
initMetadataForClass(Codes, 'Codes');
initMetadataForClass(CloseReason, 'CloseReason');
initMetadataForInterface(WebSocketSession, 'WebSocketSession', VOID, VOID, [CoroutineScope], [1, 0]);
initMetadataForInterface(DefaultWebSocketSession, 'DefaultWebSocketSession', VOID, VOID, [WebSocketSession], [1, 0]);
initMetadataForCompanion(Companion_0);
initMetadataForLambda(DefaultWebSocketSessionImpl$start$slambda, VOID, VOID, [1]);
initMetadataForLambda(DefaultWebSocketSessionImpl$runIncomingProcessor$slambda, VOID, VOID, [1]);
initMetadataForLambda(DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda, VOID, VOID, [1]);
initMetadataForLambda(DefaultWebSocketSessionImpl$runOrCancelPinger$slambda, VOID, VOID, [1]);
protoOf(DefaultWebSocketSessionImpl).z2z = send;
initMetadataForClass(DefaultWebSocketSessionImpl, 'DefaultWebSocketSessionImpl', VOID, VOID, [DefaultWebSocketSession, WebSocketSession], [1, 0, 2]);
initMetadataForObject(NonDisposableHandle, 'NonDisposableHandle');
initMetadataForClass(FrameTooBigException, 'FrameTooBigException', VOID, VOID, [Exception, CopyableThrowable]);
initMetadataForCompanion(Companion_1);
initMetadataForClass(FrameType, 'FrameType');
initMetadataForLambda(ponger$slambda, VOID, VOID, [1]);
initMetadataForLambda(pinger$slambda$slambda, VOID, VOID, [1]);
initMetadataForLambda(pinger$slambda$slambda_0, VOID, VOID, [1]);
initMetadataForLambda(pinger$slambda, VOID, VOID, [1]);
initMetadataForInterface(WebSocketExtension, 'WebSocketExtension');
initMetadataForClass(WebSocketExtensionsConfig, 'WebSocketExtensionsConfig', WebSocketExtensionsConfig);
initMetadataForClass(WebSocketExtensionHeader, 'WebSocketExtensionHeader');
initMetadataForClass(Frame, 'Frame');
initMetadataForClass(Binary, 'Binary');
initMetadataForClass(Text, 'Text');
initMetadataForClass(Close, 'Close', Close.d34);
initMetadataForClass(Ping, 'Ping');
initMetadataForClass(Pong, 'Pong');
initMetadataForCompanion(Companion_2);
//endregion
//region block: init
NonDisposableHandle_instance = new NonDisposableHandle();
//endregion
//region block: exports
export {
  Codes_CLOSED_ABNORMALLY_getInstance as Codes_CLOSED_ABNORMALLY_getInstance18g5hbbmrws6x,
  Codes_NORMAL_getInstance as Codes_NORMAL_getInstance21orcjign6rr6,
  send as send3oe3simbzresd,
  close as close1my1iwn6t9rqe,
  Companion_getInstance as Companion_getInstance3h3c6jlu8qefd,
  CloseReason as CloseReason10cphaqpp3ct7,
  DefaultWebSocketSession_0 as DefaultWebSocketSession2pi4wuih6mkcj,
  DefaultWebSocketSession as DefaultWebSocketSession3h8506yqzs5fx,
  Binary as Binary3tlzyfojm51s4,
  Close as Close3tx65evcwi73t,
  Text as Text3e6ukp9joohql,
  WebSocketExtensionsConfig as WebSocketExtensionsConfig3sf1f7u7xi63m,
  WebSocketExtension as WebSocketExtensionixqq2y77p4e0,
  WebSocketSession as WebSocketSessionzi1ianvyj32u,
  parseWebSocketExtensions as parseWebSocketExtensionszyo25w86ylog,
  readBytes as readBytes28s4uf7ekyufa,
  readText_0 as readText30p9xkeoodw49,
};
//endregion

//# sourceMappingURL=ktor-ktor-websockets.mjs.map
