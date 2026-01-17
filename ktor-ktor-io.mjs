import {
  Companion_instance25ullnynvxd0w as Companion_instance,
  Unit_instance28fytmsmm6r23 as Unit_instance,
  _Result___init__impl__xyqfz83a5421h46yeyh as _Result___init__impl__xyqfz8,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  VOID3gxj6tk5isa35 as VOID,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  toString30pk9tzaqopn as toString,
  hashCodeq5arwsb9dgti as hashCode,
  equals2au1ep9vhcato as equals,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  createFailure8paxfkfa5dc7 as createFailure,
  Result3t1vadv16kmzk as Result,
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  toString1h6jjoch8cjt8 as toString_0,
  newThrowablezl37abp36p5f as newThrowable,
  stackTraceToString2670q6lbhdojj as stackTraceToString,
  protoOf180f3jzyo7rfj as protoOf,
  fromInt2ii0rejb1w62w as fromInt,
  numberToLong2pakxeg38estk as numberToLong,
  add2suhfggl4zvkk as add,
  intercepted2ogpsikxxj4u0 as intercepted,
  noWhenBranchMatchedException2a6r7ubxgky5j as noWhenBranchMatchedException,
  isInterface3d6p8outrmvmk as isInterface,
  returnIfSuspended1blqheeew1z6h as returnIfSuspended,
  get_COROUTINE_SUSPENDED3ujt3p13qm4iy as get_COROUTINE_SUSPENDED,
  suspendOrReturn49pspzlx5djv as suspendOrReturn,
  convertToInty04h231mmjoh as convertToInt,
  IllegalStateExceptionkoljg5n0nrlr as IllegalStateException,
  captureStack1fzi4aczwc4hg as captureStack,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  get_ONEazvfdh9ju3d4 as get_ONE,
  replace3le3ie7l9k8aq as replace,
  IllegalArgumentException2asla15b5jaob as IllegalArgumentException,
  toString1pkumu07cwy4m as toString_1,
  subtract2orl8z9upxd9l as subtract,
  closeFinally1sadm0w9gt3u4 as closeFinally,
  EmptyCoroutineContext_instance2zr761y43akub as EmptyCoroutineContext_instance,
  Continuation1aa2oekvx7jm7 as Continuation,
  initMetadataForFunctionReferencen3g5fpj34t8u as initMetadataForFunctionReference,
  initMetadataForLambda3af3he42mmnh as initMetadataForLambda,
  CancellationException3b36o9qz53rgr as CancellationException,
  ArrayList3it5z8td81qkl as ArrayList,
  listOf1jh22dvmctj1r as listOf,
  StringBuildermazzzhj6kkai as StringBuilder,
  charSequenceLength3278n89t01tmv as charSequenceLength,
  encodeToByteArray22651fhg4p67t as encodeToByteArray,
  AutoCloseable1l5p57f9lp7kv as AutoCloseable,
  _Char___init__impl__6a9atx1csff5kwtduxl as _Char___init__impl__6a9atx,
  replaceqbix900hl8kl as replace_0,
  getStringHashCode26igk1bx568vk as getStringHashCode,
  charSequenceSubSequence1iwpdba8s3jc7 as charSequenceSubSequence,
  isCharSequence1ju9jr1w86plq as isCharSequence,
  trim11nh7r46at6sx as trim,
  toByte4i43936u611k as toByte,
  decodeToString1x4faah2liw2p as decodeToString,
  setOf45ia9pnfhe90 as setOf,
  charSequenceGet1vxk1y5n17t1z as charSequenceGet,
  Char__toInt_impl_vasixd3jl92hthlhyn7 as Char__toInt_impl_vasixd,
} from './kotlin-kotlin-stdlib.mjs';
import {
  CancellableContinuationImpl1cx201opicavg as CancellableContinuationImpl,
  CoroutineScopefcb5f5dwqcas as CoroutineScope,
  launch1c91vkjzdi9sd as launch,
  startCoroutineCancellable18shtfwdieib as startCoroutineCancellable,
  get_job2zvlvce9o9a29 as get_job,
  Job13y4jkazwjho0 as Job,
  cancel1xim2hrvjmwpn as cancel,
  CopyableThrowable1mvc99jcyvivf as CopyableThrowable,
  Dispatchers_getInstancewbokwrm9sosb as Dispatchers_getInstance,
} from './kotlinx-coroutines-core.mjs';
import {
  Buffergs925ekssbch as Buffer,
  IOException1wyutdmfe71nu as IOException,
  indexOf29nspdgx2e3ap as indexOf,
  EOFExceptionh831u25jcq9n as EOFException,
  readStringo8i62qxt5m4m as readString,
  readByteString2hnsbql6t4ads as readByteString,
  readString2nvggcfaijfhd as readString_0,
  readByteArray1fhzfwi2j014k as readByteArray,
  readString3v6duspiz33tv as readString_1,
  writeString33ca4btrgctw7 as writeString,
  readByteArray1ri21h2rciakw as readByteArray_0,
} from './kotlinx-io-kotlinx-io-core.mjs';
import { atomic$ref$130aurmcwdfdf1 as atomic$ref$1 } from './kotlinx-atomicfu.mjs';
import { decodeToString2ede220pr5xir as decodeToString_0 } from './kotlinx-io-kotlinx-io-bytestring.mjs';
//region block: imports
//endregion
//region block: pre-declaration
class Companion {
  constructor() {
    Companion_instance_0 = this;
    this.w25_1 = new Closed(null);
    var tmp = this;
    // Inline function 'kotlin.Companion.success' call
    tmp.x25_1 = _Result___init__impl__xyqfz8(Unit_instance);
  }
}
class Empty {
  toString() {
    return 'Empty';
  }
  hashCode() {
    return -231472095;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof Empty))
      return false;
    return true;
  }
}
class Closed {
  constructor(cause) {
    this.y25_1 = cause;
  }
  toString() {
    return 'Closed(cause=' + toString(this.y25_1) + ')';
  }
  hashCode() {
    return this.y25_1 == null ? 0 : hashCode(this.y25_1);
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof Closed))
      return false;
    if (!equals(this.y25_1, other.y25_1))
      return false;
    return true;
  }
}
class Task {}
function resume() {
  return this.a26().yc(Companion_getInstance().x25_1);
}
function resume_0(throwable) {
  var tmp = this.a26();
  var tmp_0;
  if (throwable == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.Companion.failure' call
    var tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(throwable));
    tmp_0 = new Result(tmp$ret$2);
  }
  var tmp1_elvis_lhs = tmp_0;
  return tmp.yc(tmp1_elvis_lhs == null ? Companion_getInstance().x25_1 : tmp1_elvis_lhs.it_1);
}
class Read {
  constructor(continuation) {
    this.e26_1 = continuation;
    this.f26_1 = null;
    if (get_DEVELOPMENT_MODE()) {
      var tmp = this;
      // Inline function 'kotlin.also' call
      var this_0 = newThrowable('ReadTask 0x' + toString_0(hashCode(this.e26_1), 16));
      stackTraceToString(this_0);
      tmp.f26_1 = this_0;
    }
  }
  a26() {
    return this.e26_1;
  }
  z25() {
    return this.f26_1;
  }
  b26() {
    return 'read';
  }
}
class Write {
  constructor(continuation) {
    this.g26_1 = continuation;
    this.h26_1 = null;
    if (get_DEVELOPMENT_MODE()) {
      var tmp = this;
      // Inline function 'kotlin.also' call
      var this_0 = newThrowable('WriteTask 0x' + toString_0(hashCode(this.g26_1), 16));
      stackTraceToString(this_0);
      tmp.h26_1 = this_0;
    }
  }
  a26() {
    return this.g26_1;
  }
  z25() {
    return this.h26_1;
  }
  b26() {
    return 'write';
  }
}
class ByteReadChannel {}
function awaitContent$default(min, $completion, $super) {
  min = min === VOID ? 1 : min;
  return $super === VOID ? this.q27(min, $completion) : $super.q27.call(this, min, $completion);
}
class ByteWriteChannel {}
function get_autoFlush() {
  return false;
}
class ByteChannel {
  constructor(autoFlush) {
    autoFlush = autoFlush === VOID ? false : autoFlush;
    this.i26_1 = autoFlush;
    this.j26_1 = new Buffer();
    this.k26_1 = 0;
    this.l26_1 = new Object();
    this.m26_1 = atomic$ref$1(Empty_instance);
    this.n26_1 = new Buffer();
    this.o26_1 = new Buffer();
    this.p26_1 = atomic$ref$1(null);
  }
  h27() {
    return this.i26_1;
  }
  i27() {
    var tmp0_safe_receiver = this.p26_1.kotlinx$atomicfu$value;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.k27(ClosedReadChannelException$_init_$ref_ix0089());
    }
    if (this.n26_1.b1j()) {
      moveFlushToReadBuffer(this);
    }
    return this.n26_1;
  }
  l27() {
    if (this.m27()) {
      var tmp0_safe_receiver = this.p26_1.kotlinx$atomicfu$value;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        tmp = tmp0_safe_receiver.k27(ClosedWriteChannelException$_init_$ref_ef15ty());
      }
      if (tmp == null)
        throw ClosedWriteChannelException.g27();
    }
    return this.o26_1;
  }
  n27() {
    var tmp0_safe_receiver = this.p26_1.kotlinx$atomicfu$value;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.o27();
  }
  m27() {
    return !(this.p26_1.kotlinx$atomicfu$value == null);
  }
  p27() {
    return !(this.n27() == null) || (this.m27() && this.k26_1 === 0 && this.n26_1.b1j());
  }
  q27(min, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_awaitContent__vf28kb.bind(VOID, this, min), $completion);
  }
  w26($completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_flush__owbk1c.bind(VOID, this), $completion);
  }
  v26() {
    if (this.o26_1.b1j())
      return Unit_instance;
    // Inline function 'io.ktor.utils.io.locks.synchronized' call
    this.l26_1;
    var count = convertToInt(this.o26_1.q2());
    this.j26_1.t1k(this.o26_1);
    this.k26_1 = this.k26_1 + count | 0;
    // Inline function 'io.ktor.utils.io.ByteChannel.resumeSlot' call
    var current = this.m26_1.kotlinx$atomicfu$value;
    var tmp;
    if (current instanceof Read) {
      tmp = this.m26_1.atomicfu$compareAndSet(current, Empty_instance);
    } else {
      tmp = false;
    }
    if (tmp) {
      current.c26();
    }
  }
  e7() {
    this.v26();
    if (!this.p26_1.atomicfu$compareAndSet(null, get_CLOSED()))
      return Unit_instance;
    closeSlot(this, null);
  }
  s27($completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_flushAndClose__wsi7db.bind(VOID, this), $completion);
  }
  t27(cause) {
    if (!(this.p26_1.kotlinx$atomicfu$value == null))
      return Unit_instance;
    var closedToken = new CloseToken(cause);
    this.p26_1.atomicfu$compareAndSet(null, closedToken);
    var wrappedCause = closedToken.o27();
    closeSlot(this, wrappedCause);
  }
  toString() {
    return 'ByteChannel[' + hashCode(this) + ']';
  }
}
class ConcurrentIOException extends IllegalStateException {
  static u26(taskName, cause) {
    cause = cause === VOID ? null : cause;
    var $this = this.q('Concurrent ' + taskName + ' attempts', cause);
    captureStack($this, $this.t26_1);
    return $this;
  }
}
class ByteChannelScanner {
  constructor(channel, matchString, writeChannel, limit) {
    limit = limit === VOID ? 9223372036854775807n : limit;
    this.u27_1 = channel;
    this.v27_1 = matchString;
    this.w27_1 = writeChannel;
    this.x27_1 = limit;
    // Inline function 'kotlin.require' call
    if (!(this.v27_1.q2() > 0)) {
      var message = 'Empty match string not permitted for scanning';
      throw IllegalArgumentException.k2(toString_1(message));
    }
    this.y27_1 = this.u27_1.i27();
    this.z27_1 = buildPartialMatchTable(this);
    this.a28_1 = new Buffer();
    this.b28_1 = 0n;
    this.c28_1 = 0;
  }
  d28(ignoreMissing, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_findNext__stdkn8.bind(VOID, this, ignoreMissing), $completion);
  }
}
class ByteReadChannel$Companion$Empty$1 {
  constructor() {
    this.e28_1 = null;
    this.f28_1 = new Buffer();
  }
  n27() {
    return this.e28_1;
  }
  p27() {
    return true;
  }
  i27() {
    return this.f28_1;
  }
  q27(min, $completion) {
    return false;
  }
  t27(cause) {
  }
}
class Companion_0 {
  constructor() {
    Companion_instance_1 = this;
    var tmp = this;
    tmp.g28_1 = new ByteReadChannel$Companion$Empty$1();
  }
}
class WriterJob {
  constructor(channel, job) {
    this.r28_1 = channel;
    this.s28_1 = job;
  }
  m1s() {
    return this.s28_1;
  }
}
class WriterScope {
  constructor(channel, coroutineContext) {
    this.t28_1 = channel;
    this.u28_1 = coroutineContext;
  }
  u1m() {
    return this.u28_1;
  }
}
class NO_CALLBACK$1 {
  constructor() {
    this.v28_1 = EmptyCoroutineContext_instance;
  }
  wc() {
    return this.v28_1;
  }
  xc(result) {
    return Unit_instance;
  }
  yc(result) {
    return this.xc(result);
  }
}
class ByteWriteChannel$flushAndClose$ref {
  constructor(p0) {
    this.w28_1 = p0;
  }
  ae($completion) {
    return this.w28_1.s27($completion);
  }
}
class writer$slambda {
  constructor($block, $channel) {
    this.x28_1 = $block;
    this.y28_1 = $channel;
  }
  z28($this$launch, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8.bind(VOID, this, $this$launch), $completion);
  }
  yd(p1, $completion) {
    return this.z28((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class CloseToken {
  constructor(origin) {
    this.j27_1 = origin;
  }
  e29(wrap) {
    var tmp0_subject = this.j27_1;
    var tmp;
    if (tmp0_subject == null) {
      tmp = null;
    } else {
      if (isInterface(tmp0_subject, CopyableThrowable)) {
        tmp = this.j27_1.j1t();
      } else {
        if (tmp0_subject instanceof CancellationException) {
          tmp = CancellationException.p(this.j27_1.message, this.j27_1);
        } else {
          tmp = wrap(this.j27_1);
        }
      }
    }
    return tmp;
  }
  o27(wrap, $super) {
    var tmp;
    if (wrap === VOID) {
      tmp = ClosedByteChannelException$_init_$ref_yjp351();
    } else {
      tmp = wrap;
    }
    wrap = tmp;
    return $super === VOID ? this.e29(wrap) : $super.e29.call(this, wrap);
  }
  k27(wrap) {
    var tmp0_safe_receiver = this.e29(wrap);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
    return tmp;
  }
}
class CountedByteReadChannel {
  constructor(delegate) {
    this.f29_1 = delegate;
    this.g29_1 = new Buffer();
    this.h29_1 = 0n;
    this.i29_1 = 0n;
  }
  j29() {
    updateConsumed(this);
    return this.i29_1;
  }
  n27() {
    return this.f29_1.n27();
  }
  p27() {
    return this.g29_1.b1j() && this.f29_1.p27();
  }
  i27() {
    transferFromDelegate(this);
    return this.g29_1;
  }
  q27(min, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_awaitContent__vf28kb_0.bind(VOID, this, min), $completion);
  }
  t27(cause) {
    this.f29_1.t27(cause);
    this.g29_1.e7();
  }
}
class ClosedByteChannelException extends IOException {
  static d29(cause) {
    cause = cause === VOID ? null : cause;
    var $this = this.f1m(cause == null ? null : cause.message, cause);
    captureStack($this, $this.c29_1);
    return $this;
  }
}
class ClosedReadChannelException extends ClosedByteChannelException {
  static b27(cause) {
    cause = cause === VOID ? null : cause;
    var $this = this.d29(cause);
    captureStack($this, $this.a27_1);
    return $this;
  }
}
class ClosedWriteChannelException extends ClosedByteChannelException {
  static g27(cause) {
    cause = cause === VOID ? null : cause;
    var $this = this.d29(cause);
    captureStack($this, $this.f27_1);
    return $this;
  }
}
class Companion_1 {
  constructor() {
    Companion_instance_2 = this;
    this.h28_1 = _LineEndingMode___init__impl__jo5bul(1);
    this.i28_1 = _LineEndingMode___init__impl__jo5bul(2);
    this.j28_1 = _LineEndingMode___init__impl__jo5bul(4);
    this.k28_1 = _LineEndingMode___init__impl__jo5bul(7);
    this.l28_1 = listOf([new LineEndingMode(this.h28_1), new LineEndingMode(this.i28_1), new LineEndingMode(this.j28_1)]);
  }
}
class LineEndingMode {
  constructor(mode) {
    Companion_getInstance_1();
    this.k29_1 = mode;
  }
  toString() {
    return LineEndingMode__toString_impl_j4h76r(this.k29_1);
  }
  hashCode() {
    return LineEndingMode__hashCode_impl_2mopm4(this.k29_1);
  }
  equals(other) {
    return LineEndingMode__equals_impl_qyr4nk(this.k29_1, other);
  }
}
class SourceByteReadChannel {
  constructor(source) {
    this.l29_1 = source;
    this.m29_1 = null;
  }
  n27() {
    var tmp0_safe_receiver = this.m29_1;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.o27();
  }
  p27() {
    return this.l29_1.b1j();
  }
  i27() {
    var tmp0_safe_receiver = this.n27();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
    return this.l29_1.a1j();
  }
  q27(min, $completion) {
    var tmp0_safe_receiver = this.n27();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
    return this.l29_1.d1j(fromInt(min));
  }
  t27(cause) {
    if (!(this.m29_1 == null))
      return Unit_instance;
    this.l29_1.e7();
    var tmp = this;
    var tmp1_elvis_lhs = cause == null ? null : cause.message;
    tmp.m29_1 = new CloseToken(IOException.f1m(tmp1_elvis_lhs == null ? 'Channel was cancelled' : tmp1_elvis_lhs, cause));
  }
}
class MalformedInputException extends IOException {
  static q29(message) {
    var $this = this.e1m(message);
    captureStack($this, $this.p29_1);
    return $this;
  }
}
class TooLongLineException extends MalformedInputException {
  static q28(message) {
    var $this = this.q29(message);
    captureStack($this, $this.p28_1);
    return $this;
  }
}
class ObjectPool {}
function close() {
  this.w1p();
}
class DefaultPool {
  constructor(capacity) {
    this.a2a_1 = capacity;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.a2a_1;
    tmp.b2a_1 = Array(size);
    this.c2a_1 = 0;
  }
  d2a(instance) {
  }
  e2a(instance) {
    return instance;
  }
  f2a(instance) {
  }
  g2a() {
    if (this.c2a_1 === 0)
      return this.z29();
    this.c2a_1 = this.c2a_1 - 1 | 0;
    var idx = this.c2a_1;
    var tmp = this.b2a_1[idx];
    var instance = !(tmp == null) ? tmp : THROW_CCE();
    this.b2a_1[idx] = null;
    return this.e2a(instance);
  }
  h2a(instance) {
    this.f2a(instance);
    if (this.c2a_1 === this.a2a_1) {
      this.d2a(instance);
    } else {
      var _unary__edvuaz = this.c2a_1;
      this.c2a_1 = _unary__edvuaz + 1 | 0;
      this.b2a_1[_unary__edvuaz] = instance;
    }
  }
  w1p() {
    var inductionVariable = 0;
    var last = this.c2a_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.b2a_1[i];
        var instance = !(tmp == null) ? tmp : THROW_CCE();
        this.b2a_1[i] = null;
        this.d2a(instance);
      }
       while (inductionVariable < last);
    this.c2a_1 = 0;
  }
}
class ByteArrayPool$1 extends DefaultPool {
  constructor() {
    super(128);
  }
  z29() {
    return new Int8Array(4096);
  }
}
class NoPoolImpl {
  h2a(instance) {
    return Unit_instance;
  }
  w1p() {
    return Unit_instance;
  }
}
class Companion_2 {
  i2a(name) {
    switch (name) {
      case 'UTF-8':
      case 'utf-8':
      case 'UTF8':
      case 'utf8':
        return Charsets_getInstance().r29_1;
    }
    var tmp;
    var tmp_0;
    switch (name) {
      case 'ISO-8859-1':
      case 'iso-8859-1':
        tmp_0 = true;
        break;
      default:
        // Inline function 'kotlin.let' call

        var it = replace_0(name, _Char___init__impl__6a9atx(95), _Char___init__impl__6a9atx(45));
        var tmp_1;
        if (it === 'iso-8859-1') {
          tmp_1 = true;
        } else {
          // Inline function 'kotlin.text.lowercase' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp_1 = it.toLowerCase() === 'iso-8859-1';
        }

        tmp_0 = tmp_1;
        break;
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = name === 'latin1' || name === 'Latin1';
    }
    if (tmp) {
      return Charsets_getInstance().s29_1;
    }
    throw IllegalArgumentException.k2('Charset ' + name + ' is not supported');
  }
}
class Charset {
  constructor(_name) {
    this.t29_1 = _name;
  }
  equals(other) {
    if (this === other)
      return true;
    if (other == null || !(this.constructor == other.constructor))
      return false;
    if (!(other instanceof Charset))
      THROW_CCE();
    return this.t29_1 === other.t29_1;
  }
  hashCode() {
    return getStringHashCode(this.t29_1);
  }
  toString() {
    return this.t29_1;
  }
}
class Charsets {
  constructor() {
    Charsets_instance = this;
    this.r29_1 = new CharsetImpl('UTF-8');
    this.s29_1 = new CharsetImpl('ISO-8859-1');
  }
}
class CharsetDecoder {
  constructor(_charset) {
    this.j2a_1 = _charset;
  }
}
class CharsetEncoder {
  constructor(_charset) {
    this.k2a_1 = _charset;
  }
}
class CharsetImpl extends Charset {
  u29() {
    return new CharsetEncoderImpl(this);
  }
  v29() {
    return new CharsetDecoderImpl(this);
  }
}
class CharsetEncoderImpl extends CharsetEncoder {
  constructor(charset) {
    super(charset);
    this.o2a_1 = charset;
  }
  toString() {
    return 'CharsetEncoderImpl(charset=' + this.o2a_1.toString() + ')';
  }
  hashCode() {
    return this.o2a_1.hashCode();
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof CharsetEncoderImpl))
      return false;
    if (!this.o2a_1.equals(other.o2a_1))
      return false;
    return true;
  }
}
class CharsetDecoderImpl extends CharsetDecoder {
  constructor(charset) {
    super(charset);
    this.q2a_1 = charset;
  }
  toString() {
    return 'CharsetDecoderImpl(charset=' + this.q2a_1.toString() + ')';
  }
  hashCode() {
    return this.q2a_1.hashCode();
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof CharsetDecoderImpl))
      return false;
    if (!this.q2a_1.equals(other.q2a_1))
      return false;
    return true;
  }
}
class toKtor$1 {
  constructor($this_toKtor) {
    this.r2a_1 = $this_toKtor;
  }
  l2a(buffer) {
    return this.r2a_1.decode(buffer);
  }
}
class TextDecoderFallback {
  constructor(encoding, fatal) {
    this.s2a_1 = fatal;
    // Inline function 'kotlin.text.trim' call
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var requestedEncoding = toString_1(trim(isCharSequence(encoding) ? encoding : THROW_CCE())).toLowerCase();
    // Inline function 'kotlin.check' call
    if (!get_ENCODING_ALIASES().y3(requestedEncoding)) {
      var message = encoding + ' is not supported.';
      throw IllegalStateException.o(toString_1(message));
    }
  }
  l2a(buffer) {
    // Inline function 'io.ktor.utils.io.core.buildPacket' call
    var builder = new Buffer();
    var bytes = buffer instanceof Int8Array ? buffer : THROW_CCE();
    var inductionVariable = 0;
    var last = bytes.length;
    if (inductionVariable < last)
      $l$loop: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var byte = bytes[index];
        var point = toCodePoint(byte);
        if (point < 0) {
          // Inline function 'kotlin.check' call
          if (!!this.s2a_1) {
            var message = 'Invalid character: ' + point;
            throw IllegalStateException.o(toString_1(message));
          }
          writeFully_0(builder, get_REPLACEMENT());
          continue $l$loop;
        }
        if (point > 255) {
          builder.u1k(toByte(point >> 8));
        }
        builder.u1k(toByte(point & 255));
      }
       while (inductionVariable < last);
    return decodeToString(readByteArray_0(builder));
  }
}
//endregion
var Companion_instance_0;
function Companion_getInstance() {
  if (Companion_instance_0 === VOID)
    new Companion();
  return Companion_instance_0;
}
var Empty_instance;
function Empty_getInstance() {
  return Empty_instance;
}
function *_generator_awaitContent__vf28kb($this, min, $completion) {
  rethrowCloseCauseIfNeeded($this);
  if ($this.n26_1.q2() >= fromInt(min))
    return true;
  // Inline function 'io.ktor.utils.io.ByteChannel.sleepWhile' call
  $l$loop: while (add(numberToLong($this.k26_1), $this.n26_1.q2()) < fromInt(min) && $this.p26_1.kotlinx$atomicfu$value == null) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine' call
    // Inline function 'kotlin.js.suspendCoroutineUninterceptedOrReturnJS' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.d1r();
    var tmp2 = new Read(cancellable);
    $l$block_0: {
      // Inline function 'io.ktor.utils.io.ByteChannel.trySuspend' call
      var previous = $this.m26_1.kotlinx$atomicfu$value;
      if (!(previous instanceof Closed)) {
        if (!$this.m26_1.atomicfu$compareAndSet(previous, tmp2)) {
          tmp2.c26();
          break $l$block_0;
        }
      }
      if (previous instanceof Read) {
        previous.d26(ConcurrentIOException.u26(tmp2.b26(), previous.z25()));
      } else {
        if (isInterface(previous, Task)) {
          previous.c26();
        } else {
          if (previous instanceof Closed) {
            tmp2.d26(previous.y25_1);
            break $l$block_0;
          } else {
            if (!equals(previous, Empty_instance)) {
              noWhenBranchMatchedException();
            }
          }
        }
      }
      if (!(add(numberToLong($this.k26_1), $this.n26_1.q2()) < fromInt(min) && $this.p26_1.kotlinx$atomicfu$value == null)) {
        // Inline function 'io.ktor.utils.io.ByteChannel.resumeSlot' call
        var current = $this.m26_1.kotlinx$atomicfu$value;
        var tmp;
        if (current instanceof Read) {
          tmp = $this.m26_1.atomicfu$compareAndSet(current, Empty_instance);
        } else {
          tmp = false;
        }
        if (tmp) {
          current.c26();
        }
      }
    }
    var tmp$ret$6 = cancellable.l1r();
    var tmp_0 = returnIfSuspended(tmp$ret$6, $completion);
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      tmp_0 = yield tmp_0;
  }
  if ($this.n26_1.q2() < 1048576n) {
    moveFlushToReadBuffer($this);
  }
  return $this.n26_1.q2() >= fromInt(min);
}
function moveFlushToReadBuffer($this) {
  // Inline function 'io.ktor.utils.io.locks.synchronized' call
  $this.l26_1;
  $this.j26_1.e1k($this.n26_1);
  $this.k26_1 = 0;
  // Inline function 'io.ktor.utils.io.ByteChannel.resumeSlot' call
  var current = $this.m26_1.kotlinx$atomicfu$value;
  var tmp;
  if (current instanceof Write) {
    tmp = $this.m26_1.atomicfu$compareAndSet(current, Empty_instance);
  } else {
    tmp = false;
  }
  if (tmp) {
    current.c26();
  }
}
function *_generator_flush__owbk1c($this, $completion) {
  rethrowCloseCauseIfNeeded($this);
  $this.v26();
  if ($this.k26_1 < 1048576)
    return Unit_instance;
  // Inline function 'io.ktor.utils.io.ByteChannel.sleepWhile' call
  $l$loop: while ($this.k26_1 >= 1048576 && $this.p26_1.kotlinx$atomicfu$value == null) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine' call
    // Inline function 'kotlin.js.suspendCoroutineUninterceptedOrReturnJS' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.d1r();
    var tmp2 = new Write(cancellable);
    $l$block_0: {
      // Inline function 'io.ktor.utils.io.ByteChannel.trySuspend' call
      var previous = $this.m26_1.kotlinx$atomicfu$value;
      if (!(previous instanceof Closed)) {
        if (!$this.m26_1.atomicfu$compareAndSet(previous, tmp2)) {
          tmp2.c26();
          break $l$block_0;
        }
      }
      if (previous instanceof Write) {
        previous.d26(ConcurrentIOException.u26(tmp2.b26(), previous.z25()));
      } else {
        if (isInterface(previous, Task)) {
          previous.c26();
        } else {
          if (previous instanceof Closed) {
            tmp2.d26(previous.y25_1);
            break $l$block_0;
          } else {
            if (!equals(previous, Empty_instance)) {
              noWhenBranchMatchedException();
            }
          }
        }
      }
      if (!($this.k26_1 >= 1048576 && $this.p26_1.kotlinx$atomicfu$value == null)) {
        // Inline function 'io.ktor.utils.io.ByteChannel.resumeSlot' call
        var current = $this.m26_1.kotlinx$atomicfu$value;
        var tmp;
        if (current instanceof Write) {
          tmp = $this.m26_1.atomicfu$compareAndSet(current, Empty_instance);
        } else {
          tmp = false;
        }
        if (tmp) {
          current.c26();
        }
      }
    }
    var tmp$ret$6 = cancellable.l1r();
    var tmp_0 = returnIfSuspended(tmp$ret$6, $completion);
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      tmp_0 = yield tmp_0;
  }
  return Unit_instance;
}
function *_generator_flushAndClose__wsi7db($this, $completion) {
  // Inline function 'kotlin.runCatching' call
  var tmp;
  try {
    var tmp_0 = $this.w26($completion);
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      tmp_0 = yield tmp_0;
    // Inline function 'kotlin.Companion.success' call
    tmp = _Result___init__impl__xyqfz8(Unit_instance);
  } catch ($p) {
    var tmp_1;
    if ($p instanceof Error) {
      var e = $p;
      // Inline function 'kotlin.Companion.failure' call
      tmp_1 = _Result___init__impl__xyqfz8(createFailure(e));
    } else {
      throw $p;
    }
    tmp = tmp_1;
  }
  if (!$this.p26_1.atomicfu$compareAndSet(null, get_CLOSED()))
    return Unit_instance;
  closeSlot($this, null);
  return Unit_instance;
}
function closeSlot($this, cause) {
  var closeContinuation = !(cause == null) ? new Closed(cause) : Companion_getInstance().w25_1;
  var continuation = $this.m26_1.atomicfu$getAndSet(closeContinuation);
  if (isInterface(continuation, Task)) {
    continuation.d26(cause);
  }
}
function ClosedReadChannelException$_init_$ref_ix0089() {
  var l = (p0) => ClosedReadChannelException.b27(p0);
  l.callableName = '<init>';
  return l;
}
function ClosedWriteChannelException$_init_$ref_ef15ty() {
  var l = (p0) => ClosedWriteChannelException.g27(p0);
  l.callableName = '<init>';
  return l;
}
function ByteReadChannel_0(content, offset, length) {
  offset = offset === VOID ? 0 : offset;
  length = length === VOID ? content.length : length;
  // Inline function 'kotlin.also' call
  var this_0 = new Buffer();
  this_0.k1k(content, offset, offset + length | 0);
  var source = this_0;
  return ByteReadChannel_1(source);
}
function ByteReadChannel_1(source) {
  return new SourceByteReadChannel(source);
}
function *_generator_findNext__stdkn8($this, ignoreMissing, $completion) {
  $this.b28_1 = 0n;
  $l$loop: while (true) {
    var tmp;
    if (!$this.y27_1.b1j()) {
      tmp = true;
    } else {
      var tmp_0 = $this.u27_1.r27(VOID, $completion);
      if (tmp_0 === get_COROUTINE_SUSPENDED())
        tmp_0 = yield tmp_0;
      tmp = tmp_0;
    }
    if (!tmp) {
      break $l$loop;
    }
    var tmp_1 = advanceToNextPotentialMatch($this, $completion);
    if (tmp_1 === get_COROUTINE_SUSPENDED())
      tmp_1 = yield tmp_1;
    var tmp_2 = checkFullMatch($this, $completion);
    if (tmp_2 === get_COROUTINE_SUSPENDED())
      tmp_2 = yield tmp_2;
    if (tmp_2) {
      return $this.b28_1;
    }
  }
  if (!ignoreMissing) {
    throw IOException.e1m('Expected "' + toSingleLineString($this, $this.v27_1) + '" but encountered end of input');
  }
  $this.b28_1 = add($this.b28_1, $this.a28_1.e1k($this.w27_1.l27()));
  var tmp_3 = $this.w27_1.w26($completion);
  if (tmp_3 === get_COROUTINE_SUSPENDED())
    tmp_3 = yield tmp_3;
  return $this.b28_1;
}
function buildPartialMatchTable($this) {
  var table = new Int32Array($this.v27_1.q2());
  var j = 0;
  var inductionVariable = 1;
  var last = $this.v27_1.q2();
  if (inductionVariable < last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      while (j > 0 && !($this.v27_1.p2(i) === $this.v27_1.p2(j))) {
        j = table[j - 1 | 0];
      }
      if ($this.v27_1.p2(i) === $this.v27_1.p2(j)) {
        j = j + 1 | 0;
      }
      table[i] = j;
    }
     while (inductionVariable < last);
  return table;
}
function *_generator_advanceToNextPotentialMatch__2ypy7x($this, $completion) {
  $l$loop: while (true) {
    var tmp;
    if (!$this.y27_1.b1j()) {
      tmp = true;
    } else {
      var tmp_0 = $this.u27_1.r27(VOID, $completion);
      if (tmp_0 === get_COROUTINE_SUSPENDED())
        tmp_0 = yield tmp_0;
      tmp = tmp_0;
    }
    if (!tmp) {
      break $l$loop;
    }
    var nextMatch = indexOf($this.y27_1, $this.v27_1.p2(0));
    if (nextMatch === -1n) {
      var tmp_1 = $this.y27_1;
      checkBounds($this, (tmp_1 instanceof Buffer ? tmp_1 : THROW_CCE()).q2());
      $this.b28_1 = add($this.b28_1, $this.y27_1.e1k($this.w27_1.l27()));
      var tmp_2 = flushIfNeeded($this.w27_1, $completion);
      if (tmp_2 === get_COROUTINE_SUSPENDED())
        tmp_2 = yield tmp_2;
    } else {
      checkBounds($this, nextMatch);
      var tmp_3 = $this;
      var tmp_4 = $this.b28_1;
      var tmp_5 = $this.w27_1.l27();
      tmp_3.b28_1 = add(tmp_4, $this.y27_1.b1k(tmp_5 instanceof Buffer ? tmp_5 : THROW_CCE(), nextMatch));
      var tmp_6 = flushIfNeeded($this.w27_1, $completion);
      if (tmp_6 === get_COROUTINE_SUSPENDED())
        tmp_6 = yield tmp_6;
      return Unit_instance;
    }
  }
  return Unit_instance;
}
function advanceToNextPotentialMatch($this, $completion) {
  return suspendOrReturn(/*#__NOINLINE__*/_generator_advanceToNextPotentialMatch__2ypy7x.bind(VOID, $this), $completion);
}
function *_generator_checkFullMatch__turpx6($this, $completion) {
  $l$loop: while (true) {
    var tmp;
    if (!$this.y27_1.b1j()) {
      tmp = true;
    } else {
      var tmp_0 = $this.u27_1.r27(VOID, $completion);
      if (tmp_0 === get_COROUTINE_SUSPENDED())
        tmp_0 = yield tmp_0;
      tmp = tmp_0;
    }
    if (!tmp) {
      break $l$loop;
    }
    var byte = $this.y27_1.e1j();
    if ($this.c28_1 > 0 && !(byte === $this.v27_1.p2($this.c28_1))) {
      var oldMatchIndex = $this.c28_1;
      while ($this.c28_1 > 0 && !(byte === $this.v27_1.p2($this.c28_1))) {
        $this.c28_1 = $this.z27_1[$this.c28_1 - 1 | 0];
      }
      var retained = fromInt(oldMatchIndex - $this.c28_1 | 0);
      checkBounds($this, retained);
      var tmp_1 = $this;
      var tmp_2 = $this.b28_1;
      var tmp_3 = $this.w27_1.l27();
      tmp_1.b28_1 = add(tmp_2, $this.a28_1.b1k(tmp_3 instanceof Buffer ? tmp_3 : THROW_CCE(), retained));
      if ($this.c28_1 === 0 && !(byte === $this.v27_1.p2($this.c28_1))) {
        var tmp_4 = writeByte($this.w27_1, byte, $completion);
        if (tmp_4 === get_COROUTINE_SUSPENDED())
          tmp_4 = yield tmp_4;
        var _unary__edvuaz = $this.b28_1;
        $this.b28_1 = add(_unary__edvuaz, get_ONE());
        return false;
      }
    }
    $this.c28_1 = $this.c28_1 + 1 | 0;
    if ($this.c28_1 === $this.v27_1.q2()) {
      return true;
    }
    $this.a28_1.u1k(byte);
  }
  return false;
}
function checkFullMatch($this, $completion) {
  return suspendOrReturn(/*#__NOINLINE__*/_generator_checkFullMatch__turpx6.bind(VOID, $this), $completion);
}
function checkBounds($this, extra) {
  if (add($this.b28_1, extra) > $this.x27_1) {
    throw IOException.e1m('Limit of ' + $this.x27_1.toString() + ' bytes exceeded ' + ('while searching for "' + toSingleLineString($this, $this.v27_1) + '"'));
  }
}
function toSingleLineString($this, _this__u8e3s4) {
  return replace(decodeToString_0(_this__u8e3s4), '\n', '\\n');
}
var Companion_instance_1;
function Companion_getInstance_0() {
  if (Companion_instance_1 === VOID)
    new Companion_0();
  return Companion_instance_1;
}
function cancel_0(_this__u8e3s4) {
  _this__u8e3s4.t27(IOException.e1m('Channel was cancelled'));
}
function *_generator_readRemaining__kd4xx0(_this__u8e3s4, $completion) {
  var result = BytePacketBuilder();
  while (!_this__u8e3s4.p27()) {
    result.t1k(_this__u8e3s4.i27());
    var tmp = _this__u8e3s4.r27(VOID, $completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      tmp = yield tmp;
  }
  rethrowCloseCauseIfNeeded_0(_this__u8e3s4);
  return result.a1j();
}
function readRemaining(_this__u8e3s4, $completion) {
  return suspendOrReturn(/*#__NOINLINE__*/_generator_readRemaining__kd4xx0.bind(VOID, _this__u8e3s4), $completion);
}
function *_generator_toByteArray__v3q9dq(_this__u8e3s4, $completion) {
  var tmp = readBuffer(_this__u8e3s4, $completion);
  if (tmp === get_COROUTINE_SUSPENDED())
    tmp = yield tmp;
  return readBytes(tmp);
}
function toByteArray(_this__u8e3s4, $completion) {
  return suspendOrReturn(/*#__NOINLINE__*/_generator_toByteArray__v3q9dq.bind(VOID, _this__u8e3s4), $completion);
}
function *_generator_copyTo__iu4794(_this__u8e3s4, channel, limit, $completion) {
  var remaining = limit;
  try {
    while (!_this__u8e3s4.p27() && remaining > 0n) {
      if (_this__u8e3s4.i27().b1j()) {
        var tmp = _this__u8e3s4.r27(VOID, $completion);
        if (tmp === get_COROUTINE_SUSPENDED())
          tmp = yield tmp;
      }
      var tmp0 = remaining;
      // Inline function 'kotlin.comparisons.minOf' call
      var b = get_remaining(_this__u8e3s4.i27());
      var count = tmp0 <= b ? tmp0 : b;
      _this__u8e3s4.i27().d1k(channel.l27(), count);
      remaining = subtract(remaining, count);
      var tmp_0 = channel.w26($completion);
      if (tmp_0 === get_COROUTINE_SUSPENDED())
        tmp_0 = yield tmp_0;
    }
  } catch ($p) {
    if ($p instanceof Error) {
      var cause = $p;
      _this__u8e3s4.t27(cause);
      close_0(channel, cause);
      throw cause;
    } else {
      throw $p;
    }
  }
  finally {
    var tmp_1 = channel.w26($completion);
    if (tmp_1 === get_COROUTINE_SUSPENDED())
      tmp_1 = yield tmp_1;
  }
  return subtract(limit, remaining);
}
function copyTo(_this__u8e3s4, channel, limit, $completion) {
  return suspendOrReturn(/*#__NOINLINE__*/_generator_copyTo__iu4794.bind(VOID, _this__u8e3s4, channel, limit), $completion);
}
function *_generator_discard__skcevq(_this__u8e3s4, max, $completion) {
  var remaining = max;
  while (remaining > 0n && !_this__u8e3s4.p27()) {
    if (get_availableForRead(_this__u8e3s4) === 0) {
      var tmp = _this__u8e3s4.r27(VOID, $completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
    }
    var tmp0 = remaining;
    // Inline function 'kotlin.comparisons.minOf' call
    var b = get_remaining(_this__u8e3s4.i27());
    var count = tmp0 <= b ? tmp0 : b;
    discard_0(_this__u8e3s4.i27(), count);
    remaining = subtract(remaining, count);
  }
  return subtract(max, remaining);
}
function discard(_this__u8e3s4, max, $completion) {
  max = max === VOID ? 9223372036854775807n : max;
  return suspendOrReturn(/*#__NOINLINE__*/_generator_discard__skcevq.bind(VOID, _this__u8e3s4, max), $completion);
}
function *_generator_copyTo__iu4794_0(_this__u8e3s4, channel, $completion) {
  var result = 0n;
  try {
    while (!_this__u8e3s4.p27()) {
      result = add(result, _this__u8e3s4.i27().e1k(channel.l27()));
      var tmp = channel.w26($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var tmp_0 = _this__u8e3s4.r27(VOID, $completion);
      if (tmp_0 === get_COROUTINE_SUSPENDED())
        tmp_0 = yield tmp_0;
    }
  } catch ($p) {
    if ($p instanceof Error) {
      var cause = $p;
      _this__u8e3s4.t27(cause);
      close_0(channel, cause);
      throw cause;
    } else {
      throw $p;
    }
  }
  finally {
    var tmp_1 = channel.w26($completion);
    if (tmp_1 === get_COROUTINE_SUSPENDED())
      tmp_1 = yield tmp_1;
  }
  return result;
}
function copyTo_0(_this__u8e3s4, channel, $completion) {
  return suspendOrReturn(/*#__NOINLINE__*/_generator_copyTo__iu4794_0.bind(VOID, _this__u8e3s4, channel), $completion);
}
function *_generator_readAvailable__ki7w73(_this__u8e3s4, buffer, offset, length, $completion) {
  if (_this__u8e3s4.p27())
    return -1;
  if (_this__u8e3s4.i27().b1j()) {
    var tmp = _this__u8e3s4.r27(VOID, $completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      tmp = yield tmp;
  }
  if (_this__u8e3s4.p27())
    return -1;
  return readAvailable_0(_this__u8e3s4.i27(), buffer, offset, length);
}
function readAvailable(_this__u8e3s4, buffer, offset, length, $completion) {
  offset = offset === VOID ? 0 : offset;
  length = length === VOID ? buffer.length - offset | 0 : length;
  return suspendOrReturn(/*#__NOINLINE__*/_generator_readAvailable__ki7w73.bind(VOID, _this__u8e3s4, buffer, offset, length), $completion);
}
function *_generator_skipIfFound__8uzshe(_this__u8e3s4, byteString, $completion) {
  var tmp = peek(_this__u8e3s4, byteString.q2(), $completion);
  if (tmp === get_COROUTINE_SUSPENDED())
    tmp = yield tmp;
  if (equals(tmp, byteString)) {
    var tmp_0 = discard(_this__u8e3s4, fromInt(byteString.q2()), $completion);
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      tmp_0 = yield tmp_0;
    return true;
  }
  return false;
}
function skipIfFound(_this__u8e3s4, byteString, $completion) {
  return suspendOrReturn(/*#__NOINLINE__*/_generator_skipIfFound__8uzshe.bind(VOID, _this__u8e3s4, byteString), $completion);
}
function *_generator_readPacket__axk2oa(_this__u8e3s4, packet, $completion) {
  var result = new Buffer();
  $l$loop: while (result.q2() < fromInt(packet)) {
    if (_this__u8e3s4.i27().b1j()) {
      var tmp = _this__u8e3s4.r27(VOID, $completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
    }
    if (_this__u8e3s4.p27())
      break $l$loop;
    if (get_remaining(_this__u8e3s4.i27()) > subtract(numberToLong(packet), result.q2())) {
      _this__u8e3s4.i27().d1k(result, subtract(numberToLong(packet), result.q2()));
    } else {
      _this__u8e3s4.i27().e1k(result);
    }
  }
  if (result.q2() < fromInt(packet)) {
    throw EOFException.z1i('Not enough data available, required ' + packet + ' bytes but only ' + result.q2().toString() + ' available');
  }
  return result;
}
function readPacket(_this__u8e3s4, packet, $completion) {
  return suspendOrReturn(/*#__NOINLINE__*/_generator_readPacket__axk2oa.bind(VOID, _this__u8e3s4, packet), $completion);
}
function readUntil(_this__u8e3s4, matchString, writeChannel, limit, ignoreMissing, $completion) {
  limit = limit === VOID ? 9223372036854775807n : limit;
  ignoreMissing = ignoreMissing === VOID ? false : ignoreMissing;
  return (new ByteChannelScanner(_this__u8e3s4, matchString, writeChannel, limit)).d28(ignoreMissing, $completion);
}
function *_generator_readUTF8LineTo__bg1rci(_this__u8e3s4, out, max, lineEnding, $completion) {
  if (_this__u8e3s4.i27().b1j()) {
    var tmp = _this__u8e3s4.r27(VOID, $completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      tmp = yield tmp;
  }
  if (_this__u8e3s4.p27())
    return false;
  // Inline function 'kotlin.use' call
  var this_0 = new Buffer();
  var exception = null;
  try {
    while (!_this__u8e3s4.p27()) {
      while (!_this__u8e3s4.i27().b1j()) {
        var b = _this__u8e3s4.i27().e1j();
        if (b === 13) {
          if (_this__u8e3s4.i27().b1j()) {
            var tmp_0 = _this__u8e3s4.r27(VOID, $completion);
            if (tmp_0 === get_COROUTINE_SUSPENDED())
              tmp_0 = yield tmp_0;
          }
          if (_this__u8e3s4.i27().a1j().w1j(0n) === 10) {
            readUTF8LineTo$checkLineEndingAllowed(lineEnding, Companion_getInstance_1().j28_1);
            discard_0(_this__u8e3s4.i27(), 1n);
          } else {
            readUTF8LineTo$checkLineEndingAllowed(lineEnding, Companion_getInstance_1().h28_1);
          }
          out.o2(readString(this_0));
          return true;
        } else if (b === 10) {
          readUTF8LineTo$checkLineEndingAllowed(lineEnding, Companion_getInstance_1().i28_1);
          out.o2(readString(this_0));
          return true;
        } else {
          this_0.u1k(b);
        }
      }
      if (this_0.q2() >= fromInt(max)) {
        throw TooLongLineException.q28('Line exceeds limit of ' + max + ' characters');
      }
      var tmp_1 = _this__u8e3s4.r27(VOID, $completion);
      if (tmp_1 === get_COROUTINE_SUSPENDED())
        tmp_1 = yield tmp_1;
    }
    // Inline function 'kotlin.also' call
    var this_1 = this_0.q2() > 0n;
    if (this_1) {
      out.o2(readString(this_0));
    }
    return this_1;
  } catch ($p) {
    if ($p instanceof Error) {
      var e = $p;
      exception = e;
      throw e;
    } else {
      throw $p;
    }
  }
  finally {
    closeFinally(this_0, exception);
  }
}
function readUTF8LineTo(_this__u8e3s4, out, max, lineEnding, $completion) {
  max = max === VOID ? 2147483647 : max;
  lineEnding = lineEnding === VOID ? Companion_getInstance_1().k28_1 : lineEnding;
  return suspendOrReturn(/*#__NOINLINE__*/_generator_readUTF8LineTo__bg1rci.bind(VOID, _this__u8e3s4, out, max, lineEnding), $completion);
}
function rethrowCloseCauseIfNeeded(_this__u8e3s4) {
  var tmp0_safe_receiver = _this__u8e3s4.n27();
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    throw tmp0_safe_receiver;
  }
}
function rethrowCloseCauseIfNeeded_0(_this__u8e3s4) {
  var tmp0_safe_receiver = _this__u8e3s4.n27();
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    throw tmp0_safe_receiver;
  }
}
function *_generator_readBuffer__s1sw5u(_this__u8e3s4, $completion) {
  var result = new Buffer();
  while (!_this__u8e3s4.p27()) {
    result.t1k(_this__u8e3s4.i27());
    var tmp = _this__u8e3s4.r27(VOID, $completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      tmp = yield tmp;
  }
  var tmp0_safe_receiver = _this__u8e3s4.n27();
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    throw tmp0_safe_receiver;
  }
  return result;
}
function readBuffer(_this__u8e3s4, $completion) {
  return suspendOrReturn(/*#__NOINLINE__*/_generator_readBuffer__s1sw5u.bind(VOID, _this__u8e3s4), $completion);
}
function get_availableForRead(_this__u8e3s4) {
  return convertToInt(_this__u8e3s4.i27().a1j().q2());
}
function *_generator_peek__qjkkqb(_this__u8e3s4, count, $completion) {
  if (_this__u8e3s4.p27())
    return null;
  var tmp = _this__u8e3s4.q27(count, $completion);
  if (tmp === get_COROUTINE_SUSPENDED())
    tmp = yield tmp;
  if (!tmp)
    return null;
  return readByteString(_this__u8e3s4.i27().f1k(), count);
}
function peek(_this__u8e3s4, count, $completion) {
  return suspendOrReturn(/*#__NOINLINE__*/_generator_peek__qjkkqb.bind(VOID, _this__u8e3s4, count), $completion);
}
function rethrowCloseCauseIfNeeded_1(_this__u8e3s4) {
  var tmp0_safe_receiver = _this__u8e3s4.n27();
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    throw tmp0_safe_receiver;
  }
}
function readUTF8LineTo$checkLineEndingAllowed($lineEnding, lineEndingToCheck) {
  if (!LineEndingMode__contains_impl_q5pr68($lineEnding, lineEndingToCheck)) {
    throw IOException.e1m('Unexpected line ending ' + LineEndingMode__toString_impl_j4h76r(lineEndingToCheck) + ', while expected ' + LineEndingMode__toString_impl_j4h76r($lineEnding));
  }
}
function *_generator_flushIfNeeded__xji6le(_this__u8e3s4, $completion) {
  rethrowCloseCauseIfNeeded_1(_this__u8e3s4);
  if (_this__u8e3s4.h27() || get_size(_this__u8e3s4.l27()) >= 1048576) {
    var tmp = _this__u8e3s4.w26($completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      tmp = yield tmp;
  }
  return Unit_instance;
}
function flushIfNeeded(_this__u8e3s4, $completion) {
  return suspendOrReturn(/*#__NOINLINE__*/_generator_flushIfNeeded__xji6le.bind(VOID, _this__u8e3s4), $completion);
}
function get_NO_CALLBACK() {
  _init_properties_ByteWriteChannelOperations_kt__i7slrs();
  return NO_CALLBACK;
}
var NO_CALLBACK;
function writer(_this__u8e3s4, coroutineContext, autoFlush, block) {
  coroutineContext = coroutineContext === VOID ? EmptyCoroutineContext_instance : coroutineContext;
  autoFlush = autoFlush === VOID ? false : autoFlush;
  _init_properties_ByteWriteChannelOperations_kt__i7slrs();
  return writer_0(_this__u8e3s4, coroutineContext, new ByteChannel(), block);
}
function invokeOnCompletion(_this__u8e3s4, block) {
  _init_properties_ByteWriteChannelOperations_kt__i7slrs();
  return _this__u8e3s4.m1s().w1n(block);
}
function *_generator_writeFully__hb5mir(_this__u8e3s4, value, startIndex, endIndex, $completion) {
  _this__u8e3s4.l27().k1k(value, startIndex, endIndex);
  var tmp = flushIfNeeded(_this__u8e3s4, $completion);
  if (tmp === get_COROUTINE_SUSPENDED())
    tmp = yield tmp;
  return Unit_instance;
}
function writeFully(_this__u8e3s4, value, startIndex, endIndex, $completion) {
  startIndex = startIndex === VOID ? 0 : startIndex;
  endIndex = endIndex === VOID ? value.length : endIndex;
  return suspendOrReturn(/*#__NOINLINE__*/_generator_writeFully__hb5mir.bind(VOID, _this__u8e3s4, value, startIndex, endIndex), $completion);
}
function close_0(_this__u8e3s4, cause) {
  _init_properties_ByteWriteChannelOperations_kt__i7slrs();
  if (cause == null) {
    fireAndForget(ByteWriteChannel$flushAndClose$ref_0(_this__u8e3s4));
  } else {
    _this__u8e3s4.t27(cause);
  }
}
function *_generator_writePacket__qqx68d(_this__u8e3s4, source, $completion) {
  while (!source.b1j()) {
    _this__u8e3s4.l27().o1k(source, get_remaining(source));
    var tmp = flushIfNeeded(_this__u8e3s4, $completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      tmp = yield tmp;
  }
  return Unit_instance;
}
function writePacket(_this__u8e3s4, source, $completion) {
  return suspendOrReturn(/*#__NOINLINE__*/_generator_writePacket__qqx68d.bind(VOID, _this__u8e3s4, source), $completion);
}
function writer_0(_this__u8e3s4, coroutineContext, channel, block) {
  coroutineContext = coroutineContext === VOID ? EmptyCoroutineContext_instance : coroutineContext;
  _init_properties_ByteWriteChannelOperations_kt__i7slrs();
  // Inline function 'kotlin.apply' call
  var this_0 = launch(_this__u8e3s4, coroutineContext, VOID, writer$slambda_0(block, channel));
  this_0.w1n(writer$lambda(channel));
  var job = this_0;
  return new WriterJob(channel, job);
}
function fireAndForget(_this__u8e3s4) {
  _init_properties_ByteWriteChannelOperations_kt__i7slrs();
  startCoroutineCancellable(_this__u8e3s4, get_NO_CALLBACK());
}
function *_generator_writeByte__k05tl9(_this__u8e3s4, value, $completion) {
  _this__u8e3s4.l27().u1k(value);
  var tmp = flushIfNeeded(_this__u8e3s4, $completion);
  if (tmp === get_COROUTINE_SUSPENDED())
    tmp = yield tmp;
  return Unit_instance;
}
function writeByte(_this__u8e3s4, value, $completion) {
  return suspendOrReturn(/*#__NOINLINE__*/_generator_writeByte__k05tl9.bind(VOID, _this__u8e3s4, value), $completion);
}
function ByteWriteChannel$flushAndClose$ref_0(p0) {
  var i = new ByteWriteChannel$flushAndClose$ref(p0);
  var l = ($completion) => i.ae($completion);
  l.callableName = 'flushAndClose';
  l.$arity = 0;
  return l;
}
function *_generator_invoke__zhh2q8($this, $this$launch, $completion) {
  var nested = Job(get_job($this$launch.u1m()));
  try {
    var tmp = $this.x28_1(new WriterScope($this.y28_1, $this$launch.u1m().qm(nested)), $completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      tmp = yield tmp;
    nested.y1s();
    if (get_job($this$launch.u1m()).q1n()) {
      $this.y28_1.t27(get_job($this$launch.u1m()).t1n());
    }
  } catch ($p) {
    if ($p instanceof Error) {
      var cause = $p;
      cancel(nested, 'Exception thrown while writing to channel', cause);
      $this.y28_1.t27(cause);
    } else {
      throw $p;
    }
  }
  finally {
    var tmp_0 = nested.a1o($completion);
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      tmp_0 = yield tmp_0;
    // Inline function 'kotlin.runCatching' call
    var tmp_1;
    try {
      var tmp_2 = $this.y28_1.s27($completion);
      if (tmp_2 === get_COROUTINE_SUSPENDED())
        tmp_2 = yield tmp_2;
      // Inline function 'kotlin.Companion.success' call
      tmp_1 = _Result___init__impl__xyqfz8(Unit_instance);
    } catch ($p) {
      var tmp_3;
      if ($p instanceof Error) {
        var e = $p;
        // Inline function 'kotlin.Companion.failure' call
        tmp_3 = _Result___init__impl__xyqfz8(createFailure(e));
      } else {
        throw $p;
      }
      tmp_1 = tmp_3;
    }
  }
  return Unit_instance;
}
function writer$slambda_0($block, $channel) {
  var i = new writer$slambda($block, $channel);
  var l = ($this$launch, $completion) => i.z28($this$launch, $completion);
  l.$arity = 1;
  return l;
}
function writer$lambda($channel) {
  return (it) => {
    var tmp;
    if (!(it == null) && !$channel.m27()) {
      $channel.t27(it);
      tmp = Unit_instance;
    }
    return Unit_instance;
  };
}
var properties_initialized_ByteWriteChannelOperations_kt_acrf6u;
function _init_properties_ByteWriteChannelOperations_kt__i7slrs() {
  if (!properties_initialized_ByteWriteChannelOperations_kt_acrf6u) {
    properties_initialized_ByteWriteChannelOperations_kt_acrf6u = true;
    NO_CALLBACK = new NO_CALLBACK$1();
  }
}
function get_CLOSED() {
  _init_properties_CloseToken_kt__9ucr41();
  return CLOSED;
}
var CLOSED;
function ClosedByteChannelException$_init_$ref_yjp351() {
  var l = (p0) => ClosedByteChannelException.d29(p0);
  l.callableName = '<init>';
  return l;
}
var properties_initialized_CloseToken_kt_lgg8zn;
function _init_properties_CloseToken_kt__9ucr41() {
  if (!properties_initialized_CloseToken_kt_lgg8zn) {
    properties_initialized_CloseToken_kt_lgg8zn = true;
    CLOSED = new CloseToken(null);
  }
}
function *_generator_awaitContent__vf28kb_0($this, min, $completion) {
  if ($this.i27().q2() >= fromInt(min)) {
    return true;
  }
  var tmp = $this.f29_1.q27(min, $completion);
  if (tmp === get_COROUTINE_SUSPENDED())
    tmp = yield tmp;
  if (tmp) {
    transferFromDelegate($this);
    return true;
  }
  return false;
}
function transferFromDelegate($this) {
  updateConsumed($this);
  var appended = $this.g29_1.t1k($this.f29_1.i27());
  $this.h29_1 = add($this.h29_1, appended);
}
function updateConsumed($this) {
  $this.i29_1 = add($this.i29_1, subtract($this.h29_1, $this.g29_1.q2()));
  $this.h29_1 = $this.g29_1.q2();
}
function counted(_this__u8e3s4) {
  return new CountedByteReadChannel(_this__u8e3s4);
}
function readText(_this__u8e3s4) {
  return readString_0(_this__u8e3s4);
}
function _LineEndingMode___init__impl__jo5bul(mode) {
  return mode;
}
function _get_mode__dah3bc($this) {
  return $this;
}
function LineEndingMode__contains_impl_q5pr68($this, other) {
  return (_get_mode__dah3bc($this) | _get_mode__dah3bc(other)) === _get_mode__dah3bc($this);
}
function LineEndingMode__plus_impl_ttpz2j($this, other) {
  return _LineEndingMode___init__impl__jo5bul(_get_mode__dah3bc($this) | _get_mode__dah3bc(other));
}
function LineEndingMode__toString_impl_j4h76r($this) {
  var tmp;
  if ($this === Companion_getInstance_1().h28_1) {
    tmp = 'CR';
  } else if ($this === Companion_getInstance_1().i28_1) {
    tmp = 'LF';
  } else if ($this === Companion_getInstance_1().j28_1) {
    tmp = 'CRLF';
  } else {
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = Companion_getInstance_1().l28_1;
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList.s2();
    var _iterator__ex2g4s = tmp0.q1();
    while (_iterator__ex2g4s.r1()) {
      var element = _iterator__ex2g4s.s1();
      var it = element.k29_1;
      if (LineEndingMode__contains_impl_q5pr68($this, it)) {
        destination.c2(element);
      }
    }
    tmp = toString_1(destination);
  }
  return tmp;
}
var Companion_instance_2;
function Companion_getInstance_1() {
  if (Companion_instance_2 === VOID)
    new Companion_1();
  return Companion_instance_2;
}
function LineEndingMode__hashCode_impl_2mopm4($this) {
  return $this;
}
function LineEndingMode__equals_impl_qyr4nk($this, other) {
  if (!(other instanceof LineEndingMode))
    return false;
  if (!($this === other.k29_1))
    return false;
  return true;
}
function decode(_this__u8e3s4, input, max) {
  max = max === VOID ? 2147483647 : max;
  var tmp0 = fromInt(max);
  // Inline function 'kotlin.comparisons.minOf' call
  var b = input.a1j().q2();
  var tmp$ret$0 = tmp0 <= b ? tmp0 : b;
  // Inline function 'kotlin.text.buildString' call
  var capacity = convertToInt(tmp$ret$0);
  // Inline function 'kotlin.apply' call
  var this_0 = StringBuilder.ic(capacity);
  decode_0(_this__u8e3s4, input, this_0, max);
  return this_0.toString();
}
function encode(_this__u8e3s4, input, fromIndex, toIndex) {
  fromIndex = fromIndex === VOID ? 0 : fromIndex;
  toIndex = toIndex === VOID ? charSequenceLength(input) : toIndex;
  // Inline function 'io.ktor.utils.io.core.buildPacket' call
  var builder = new Buffer();
  encodeToImpl(_this__u8e3s4, builder, input, fromIndex, toIndex);
  return builder;
}
function encodeToImpl(_this__u8e3s4, destination, input, fromIndex, toIndex) {
  var start = fromIndex;
  if (start >= toIndex)
    return Unit_instance;
  $l$loop: while (true) {
    var rc = encodeImpl(_this__u8e3s4, input, start, toIndex, destination);
    // Inline function 'kotlin.check' call
    if (!(rc >= 0)) {
      throw IllegalStateException.o('Check failed.');
    }
    start = start + rc | 0;
    if (start >= toIndex)
      break $l$loop;
  }
}
function canRead(_this__u8e3s4) {
  return !_this__u8e3s4.b1j();
}
function readBytes(_this__u8e3s4, count) {
  count = count === VOID ? convertToInt(_this__u8e3s4.q2()) : count;
  return readByteArray(_this__u8e3s4, count);
}
function BytePacketBuilder() {
  return new Buffer();
}
function writeFully_0(_this__u8e3s4, buffer, offset, length) {
  offset = offset === VOID ? 0 : offset;
  length = length === VOID ? buffer.length - offset | 0 : length;
  _this__u8e3s4.k1k(buffer, offset, offset + length | 0);
}
function build(_this__u8e3s4) {
  return _this__u8e3s4.a1j();
}
function get_size(_this__u8e3s4) {
  return convertToInt(_this__u8e3s4.a1j().q2());
}
var ByteReadPacketEmpty;
function ByteReadPacket(array, offset, length) {
  offset = offset === VOID ? 0 : offset;
  length = length === VOID ? array.length : length;
  _init_properties_ByteReadPacket_kt__28475y();
  // Inline function 'kotlin.apply' call
  var this_0 = new Buffer();
  this_0.k1k(array, offset, offset + length | 0);
  return this_0;
}
function get_remaining(_this__u8e3s4) {
  _init_properties_ByteReadPacket_kt__28475y();
  return _this__u8e3s4.a1j().q2();
}
function takeWhile(_this__u8e3s4, block) {
  _init_properties_ByteReadPacket_kt__28475y();
  while (!_this__u8e3s4.b1j() && block(_this__u8e3s4.a1j())) {
  }
}
function discard_0(_this__u8e3s4, count) {
  count = count === VOID ? 9223372036854775807n : count;
  _init_properties_ByteReadPacket_kt__28475y();
  _this__u8e3s4.d1j(count);
  // Inline function 'kotlin.comparisons.minOf' call
  var b = get_remaining(_this__u8e3s4);
  var countToDiscard = count <= b ? count : b;
  _this__u8e3s4.a1j().y1j(countToDiscard);
  return countToDiscard;
}
var properties_initialized_ByteReadPacket_kt_hw4st4;
function _init_properties_ByteReadPacket_kt__28475y() {
  if (!properties_initialized_ByteReadPacket_kt_hw4st4) {
    properties_initialized_ByteReadPacket_kt_hw4st4 = true;
    ByteReadPacketEmpty = new Buffer();
  }
}
function readAvailable_0(_this__u8e3s4, buffer, offset, length) {
  offset = offset === VOID ? 0 : offset;
  length = length === VOID ? buffer.length - offset | 0 : length;
  var result = _this__u8e3s4.z1j(buffer, offset, offset + length | 0);
  return result === -1 ? 0 : result;
}
function toByteArray_0(_this__u8e3s4, charset) {
  charset = charset === VOID ? Charsets_getInstance().r29_1 : charset;
  if (charset.equals(Charsets_getInstance().r29_1))
    return encodeToByteArray(_this__u8e3s4, VOID, VOID, true);
  return encodeToByteArray_0(charset.u29(), _this__u8e3s4, 0, _this__u8e3s4.length);
}
function readText_0(_this__u8e3s4, charset, max) {
  charset = charset === VOID ? Charsets_getInstance().r29_1 : charset;
  max = max === VOID ? 2147483647 : max;
  if (charset.equals(Charsets_getInstance().r29_1)) {
    if (max === 2147483647)
      return readString_0(_this__u8e3s4);
    var tmp0 = _this__u8e3s4.a1j().q2();
    // Inline function 'kotlin.math.min' call
    var b = fromInt(max);
    var count = tmp0 <= b ? tmp0 : b;
    return readString_1(_this__u8e3s4, count);
  }
  return decode(charset.v29(), _this__u8e3s4, max);
}
function writeText(_this__u8e3s4, text, fromIndex, toIndex, charset) {
  fromIndex = fromIndex === VOID ? 0 : fromIndex;
  toIndex = toIndex === VOID ? charSequenceLength(text) : toIndex;
  charset = charset === VOID ? Charsets_getInstance().r29_1 : charset;
  if (charset === Charsets_getInstance().r29_1) {
    return writeString(_this__u8e3s4, toString_1(text), fromIndex, toIndex);
  }
  encodeToImpl(charset.u29(), _this__u8e3s4, text, fromIndex, toIndex);
}
function get_ByteArrayPool() {
  _init_properties_ByteArrayPool_kt__kfi3uj();
  return ByteArrayPool;
}
var ByteArrayPool;
var properties_initialized_ByteArrayPool_kt_td6pfh;
function _init_properties_ByteArrayPool_kt__kfi3uj() {
  if (!properties_initialized_ByteArrayPool_kt_td6pfh) {
    properties_initialized_ByteArrayPool_kt_td6pfh = true;
    ByteArrayPool = new ByteArrayPool$1();
  }
}
var Companion_instance_3;
function Companion_getInstance_2() {
  return Companion_instance_3;
}
function get_name(_this__u8e3s4) {
  return _this__u8e3s4.t29_1;
}
var Charsets_instance;
function Charsets_getInstance() {
  if (Charsets_instance === VOID)
    new Charsets();
  return Charsets_instance;
}
function forName(_this__u8e3s4, name) {
  return Companion_instance_3.i2a(name);
}
function decode_0(_this__u8e3s4, input, dst, max) {
  var decoder = Decoder(get_name(get_charset(_this__u8e3s4)), true);
  var tmp0 = input.a1j().q2();
  // Inline function 'kotlin.comparisons.minOf' call
  var b = fromInt(max);
  var count = tmp0 <= b ? tmp0 : b;
  var tmp = readByteArray(input, convertToInt(count));
  var array = tmp instanceof Int8Array ? tmp : THROW_CCE();
  var tmp_0;
  try {
    tmp_0 = decoder.l2a(array);
  } catch ($p) {
    var tmp_1;
    if ($p instanceof Error) {
      var cause = $p;
      var tmp0_elvis_lhs = cause.message;
      throw MalformedInputException.q29('Failed to decode bytes: ' + (tmp0_elvis_lhs == null ? 'no cause provided' : tmp0_elvis_lhs));
    } else {
      throw $p;
    }
  }
  var result = tmp_0;
  dst.o2(result);
  return result.length;
}
function encodeImpl(_this__u8e3s4, input, fromIndex, toIndex, dst) {
  // Inline function 'kotlin.require' call
  // Inline function 'kotlin.require' call
  if (!(fromIndex <= toIndex)) {
    var message = 'Failed requirement.';
    throw IllegalArgumentException.k2(toString_1(message));
  }
  if (get_charset_0(_this__u8e3s4).equals(Charsets_getInstance().s29_1)) {
    return encodeISO88591(input, fromIndex, toIndex, dst);
  }
  // Inline function 'kotlin.require' call
  if (!(get_charset_0(_this__u8e3s4) === Charsets_getInstance().r29_1)) {
    var message_0 = 'Only UTF-8 encoding is supported in JS';
    throw IllegalArgumentException.k2(toString_1(message_0));
  }
  var encoder = new TextEncoder();
  // Inline function 'kotlin.text.substring' call
  var tmp$ret$5 = toString_1(charSequenceSubSequence(input, fromIndex, toIndex));
  var result = encoder.encode(tmp$ret$5);
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  dst.n1k(result);
  return result.length;
}
function encodeToByteArray_0(_this__u8e3s4, input, fromIndex, toIndex) {
  fromIndex = fromIndex === VOID ? 0 : fromIndex;
  toIndex = toIndex === VOID ? charSequenceLength(input) : toIndex;
  return encodeToByteArrayImpl(_this__u8e3s4, input, fromIndex, toIndex);
}
function get_charset(_this__u8e3s4) {
  return _this__u8e3s4.j2a_1;
}
function get_charset_0(_this__u8e3s4) {
  return _this__u8e3s4.k2a_1;
}
function encodeToByteArrayImpl(_this__u8e3s4, input, fromIndex, toIndex) {
  fromIndex = fromIndex === VOID ? 0 : fromIndex;
  toIndex = toIndex === VOID ? charSequenceLength(input) : toIndex;
  var start = fromIndex;
  if (start >= toIndex)
    return new Int8Array(0);
  var dst = new Buffer();
  var rc = encodeImpl(_this__u8e3s4, input, start, toIndex, dst);
  start = start + rc | 0;
  if (start === toIndex) {
    return readByteArray_0(dst);
  }
  encodeToImpl(_this__u8e3s4, dst, input, start, toIndex);
  return readByteArray_0(dst);
}
function Decoder(encoding, fatal) {
  fatal = fatal === VOID ? true : fatal;
  var tmp;
  try {
    tmp = toKtor(new TextDecoder(encoding, textDecoderOptions(fatal)));
  } catch ($p) {
    var tmp_0;
    if ($p instanceof Error) {
      var cause = $p;
      tmp_0 = new TextDecoderFallback(encoding, fatal);
    } else {
      throw $p;
    }
    tmp = tmp_0;
  }
  return tmp;
}
function toKtor(_this__u8e3s4) {
  return new toKtor$1(_this__u8e3s4);
}
function textDecoderOptions(fatal) {
  fatal = fatal === VOID ? false : fatal;
  // Inline function 'kotlin.apply' call
  var this_0 = new Object();
  // Inline function 'kotlin.js.asDynamic' call
  // Inline function 'kotlin.with' call
  this_0.fatal = fatal;
  return this_0;
}
function get_ENCODING_ALIASES() {
  _init_properties_TextDecoderFallback_js_kt__an7r6m();
  return ENCODING_ALIASES;
}
var ENCODING_ALIASES;
function get_REPLACEMENT() {
  _init_properties_TextDecoderFallback_js_kt__an7r6m();
  return REPLACEMENT;
}
var REPLACEMENT;
function toCodePoint(_this__u8e3s4) {
  _init_properties_TextDecoderFallback_js_kt__an7r6m();
  var value = _this__u8e3s4 & 255;
  if (isASCII(value)) {
    return value;
  }
  return get_WIN1252_TABLE()[value - 128 | 0];
}
function isASCII(_this__u8e3s4) {
  _init_properties_TextDecoderFallback_js_kt__an7r6m();
  return 0 <= _this__u8e3s4 ? _this__u8e3s4 <= 127 : false;
}
var properties_initialized_TextDecoderFallback_js_kt_6rekzk;
function _init_properties_TextDecoderFallback_js_kt__an7r6m() {
  if (!properties_initialized_TextDecoderFallback_js_kt_6rekzk) {
    properties_initialized_TextDecoderFallback_js_kt_6rekzk = true;
    ENCODING_ALIASES = setOf(['ansi_x3.4-1968', 'ascii', 'cp1252', 'cp819', 'csisolatin1', 'ibm819', 'iso-8859-1', 'iso-ir-100', 'iso8859-1', 'iso88591', 'iso_8859-1', 'iso_8859-1:1987', 'l1', 'latin1', 'us-ascii', 'windows-1252', 'x-cp1252']);
    // Inline function 'kotlin.byteArrayOf' call
    REPLACEMENT = new Int8Array([-17, -65, -67]);
  }
}
function get_DEVELOPMENT_MODE() {
  return false;
}
function ioDispatcher() {
  return Dispatchers_getInstance().h1x_1;
}
function encodeISO88591(input, fromIndex, toIndex, dst) {
  if (fromIndex >= toIndex)
    return 0;
  var inductionVariable = fromIndex;
  if (inductionVariable < toIndex)
    do {
      var index = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.code' call
      var this_0 = charSequenceGet(input, index);
      var character = Char__toInt_impl_vasixd(this_0);
      if (character > 255) {
        failedToMapError(character);
      }
      dst.u1k(toByte(character));
    }
     while (inductionVariable < toIndex);
  return toIndex - fromIndex | 0;
}
function failedToMapError(ch) {
  throw MalformedInputException.q29('The character with unicode point ' + ch + " couldn't be mapped to ISO-8859-1 character");
}
function get_WIN1252_TABLE() {
  _init_properties_Win1252Table_kt__tl0v64();
  return WIN1252_TABLE;
}
var WIN1252_TABLE;
var properties_initialized_Win1252Table_kt_pkmjoq;
function _init_properties_Win1252Table_kt__tl0v64() {
  if (!properties_initialized_Win1252Table_kt_pkmjoq) {
    properties_initialized_Win1252Table_kt_pkmjoq = true;
    // Inline function 'kotlin.intArrayOf' call
    WIN1252_TABLE = new Int32Array([8364, -1, 8218, 402, 8222, 8230, 8224, 8225, 710, 8240, 352, 8249, 338, -1, 381, -1, -1, 8216, 8217, 8220, 8221, 8226, 8211, 8212, 732, 8482, 353, 8250, 339, -1, 382, 376, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255]);
  }
}
//region block: post-declaration
initMetadataForCompanion(Companion);
initMetadataForObject(Empty, 'Empty');
initMetadataForClass(Closed, 'Closed');
initMetadataForInterface(Task, 'Task');
protoOf(Read).c26 = resume;
protoOf(Read).d26 = resume_0;
initMetadataForClass(Read, 'Read', VOID, VOID, [Task]);
protoOf(Write).c26 = resume;
protoOf(Write).d26 = resume_0;
initMetadataForClass(Write, 'Write', VOID, VOID, [Task]);
initMetadataForInterface(ByteReadChannel, 'ByteReadChannel', VOID, VOID, VOID, [1]);
initMetadataForInterface(ByteWriteChannel, 'ByteWriteChannel', VOID, VOID, VOID, [0]);
protoOf(ByteChannel).r27 = awaitContent$default;
initMetadataForClass(ByteChannel, 'ByteChannel', ByteChannel, VOID, [ByteReadChannel, ByteWriteChannel], [1, 0]);
initMetadataForClass(ConcurrentIOException, 'ConcurrentIOException');
initMetadataForClass(ByteChannelScanner, 'ByteChannelScanner', VOID, VOID, VOID, [1, 0]);
protoOf(ByteReadChannel$Companion$Empty$1).r27 = awaitContent$default;
initMetadataForClass(ByteReadChannel$Companion$Empty$1, VOID, VOID, VOID, [ByteReadChannel], [1]);
initMetadataForCompanion(Companion_0);
initMetadataForClass(WriterJob, 'WriterJob');
initMetadataForClass(WriterScope, 'WriterScope', VOID, VOID, [CoroutineScope]);
initMetadataForClass(NO_CALLBACK$1, VOID, VOID, VOID, [Continuation]);
initMetadataForFunctionReference(ByteWriteChannel$flushAndClose$ref, VOID, VOID, [0]);
initMetadataForLambda(writer$slambda, VOID, VOID, [1]);
initMetadataForClass(CloseToken, 'CloseToken');
protoOf(CountedByteReadChannel).r27 = awaitContent$default;
initMetadataForClass(CountedByteReadChannel, 'CountedByteReadChannel', VOID, VOID, [ByteReadChannel], [1]);
initMetadataForClass(ClosedByteChannelException, 'ClosedByteChannelException', ClosedByteChannelException.d29);
initMetadataForClass(ClosedReadChannelException, 'ClosedReadChannelException', ClosedReadChannelException.b27);
initMetadataForClass(ClosedWriteChannelException, 'ClosedWriteChannelException', ClosedWriteChannelException.g27);
initMetadataForCompanion(Companion_1);
initMetadataForClass(LineEndingMode, 'LineEndingMode');
protoOf(SourceByteReadChannel).r27 = awaitContent$default;
initMetadataForClass(SourceByteReadChannel, 'SourceByteReadChannel', VOID, VOID, [ByteReadChannel], [1]);
initMetadataForClass(MalformedInputException, 'MalformedInputException');
initMetadataForClass(TooLongLineException, 'TooLongLineException');
initMetadataForInterface(ObjectPool, 'ObjectPool', VOID, VOID, [AutoCloseable]);
protoOf(DefaultPool).e7 = close;
initMetadataForClass(DefaultPool, 'DefaultPool', VOID, VOID, [ObjectPool]);
initMetadataForClass(ByteArrayPool$1);
protoOf(NoPoolImpl).e7 = close;
initMetadataForClass(NoPoolImpl, 'NoPoolImpl', VOID, VOID, [ObjectPool]);
initMetadataForCompanion(Companion_2);
initMetadataForClass(Charset, 'Charset');
initMetadataForObject(Charsets, 'Charsets');
initMetadataForClass(CharsetDecoder, 'CharsetDecoder');
initMetadataForClass(CharsetEncoder, 'CharsetEncoder');
initMetadataForClass(CharsetImpl, 'CharsetImpl');
initMetadataForClass(CharsetEncoderImpl, 'CharsetEncoderImpl');
initMetadataForClass(CharsetDecoderImpl, 'CharsetDecoderImpl');
initMetadataForClass(toKtor$1);
initMetadataForClass(TextDecoderFallback, 'TextDecoderFallback');
//endregion
//region block: init
Empty_instance = new Empty();
Companion_instance_3 = new Companion_2();
//endregion
//region block: exports
export {
  copyTo as copyTo3z8um8xkg7g1,
  copyTo_0 as copyTo1gcgz49nvu9ki,
  readAvailable as readAvailable3vfomv92cg41a,
  readPacket as readPacket1r77mz431qe8y,
  readRemaining as readRemaininghtnrfi4c8vp0,
  readUTF8LineTo as readUTF8LineTo3gov7wweuj55m,
  readUntil as readUntil3k1nh8lpn23ao,
  skipIfFound as skipIfFound1m8ofwnay4fp9,
  toByteArray as toByteArray2f7h1d87fvkuc,
  writeFully as writeFully3jo5sennkizsh,
  writePacket as writePacket2q073y706j8ob,
  LineEndingMode__plus_impl_ttpz2j as LineEndingMode__plus_impl_ttpz2j2y4ckcarwdvhq,
  Charsets_getInstance as Charsets_getInstanceq0o82sizm30g,
  Companion_getInstance_0 as Companion_getInstance2xdbr0bdtxbh1,
  Companion_getInstance_1 as Companion_getInstance1jnwy1jx65t7w,
  MalformedInputException as MalformedInputExceptionbvc6h5ij0ias,
  decode as decode1t43jmuxrxpmo,
  encode as encode35e4rpnc94tb5,
  forName as forName2faodmskqnoz5,
  get_name as get_name2f11g4r0d5pxp,
  BytePacketBuilder as BytePacketBuilder2biodf4wxvlba,
  ByteReadPacket as ByteReadPacket24tdckgvuvatn,
  build as buildjygoh729rhy8,
  canRead as canRead1guo8vbveth0f,
  readText_0 as readText27783kyxjxi1g,
  get_remaining as get_remaining1lapv95kcmm0y,
  get_size as get_size2imoy2jq11jxl,
  takeWhile as takeWhile34751tcfg6owx,
  toByteArray_0 as toByteArray1i3ns5jnoqlv6,
  writeFully_0 as writeFully359t6q8kam2g5,
  writeText as writeText19qfzm98fbm4l,
  get_ByteArrayPool as get_ByteArrayPool3f7yrgvqxz9ct,
  DefaultPool as DefaultPool2gb1fm4epwgu9,
  NoPoolImpl as NoPoolImplgos9n8jphzjp,
  ByteChannel as ByteChannel3cxdguezl3lu7,
  ByteReadChannel_0 as ByteReadChannel1cb89sbyipkce,
  ByteReadChannel as ByteReadChannel2wzou76jce72d,
  ClosedByteChannelException as ClosedByteChannelException3il8gfpye60w,
  WriterScope as WriterScope3b0bo1enaee6b,
  cancel_0 as canceldn4b3cdqcfny,
  close_0 as close3semq7pafb42g,
  counted as counted3iniv3aql3f9n,
  invokeOnCompletion as invokeOnCompletion1ziuxzoag0iwj,
  ioDispatcher as ioDispatcher3b9pa3x0duop,
  readText as readText3frapgncbqrcg,
  writer as writer1eia5its2a1fh,
};
//endregion

//# sourceMappingURL=ktor-ktor-io.mjs.map
