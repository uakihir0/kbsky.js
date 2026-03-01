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
  EmptyCoroutineContext_instance2zr761y43akub as EmptyCoroutineContext_instance,
  Continuation1aa2oekvx7jm7 as Continuation,
  initMetadataForFunctionReferencen3g5fpj34t8u as initMetadataForFunctionReference,
  initMetadataForLambda3af3he42mmnh as initMetadataForLambda,
  CancellationException3b36o9qz53rgr as CancellationException,
  Enum3alwj03lh1n41 as Enum,
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
  readByteString2hnsbql6t4ads as readByteString,
  readString3v6duspiz33tv as readString,
  readString2nvggcfaijfhd as readString_0,
  readByteArray1fhzfwi2j014k as readByteArray,
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
    this.n26_1 = new Closed(null);
    var tmp = this;
    // Inline function 'kotlin.Companion.success' call
    tmp.o26_1 = _Result___init__impl__xyqfz8(Unit_instance);
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
    this.p26_1 = cause;
  }
  toString() {
    return 'Closed(cause=' + toString(this.p26_1) + ')';
  }
  hashCode() {
    return this.p26_1 == null ? 0 : hashCode(this.p26_1);
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof Closed))
      return false;
    if (!equals(this.p26_1, other.p26_1))
      return false;
    return true;
  }
}
class Task {}
function resume() {
  return this.r26().yc(Companion_getInstance().o26_1);
}
function resume_0(throwable) {
  var tmp = this.r26();
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
  return tmp.yc(tmp1_elvis_lhs == null ? Companion_getInstance().o26_1 : tmp1_elvis_lhs.ot_1);
}
class Read {
  constructor(continuation) {
    this.v26_1 = continuation;
    this.w26_1 = null;
    if (get_DEVELOPMENT_MODE()) {
      var tmp = this;
      // Inline function 'kotlin.also' call
      var this_0 = newThrowable('ReadTask 0x' + toString_0(hashCode(this.v26_1), 16));
      stackTraceToString(this_0);
      tmp.w26_1 = this_0;
    }
  }
  r26() {
    return this.v26_1;
  }
  q26() {
    return this.w26_1;
  }
  s26() {
    return 'read';
  }
}
class Write {
  constructor(continuation) {
    this.x26_1 = continuation;
    this.y26_1 = null;
    if (get_DEVELOPMENT_MODE()) {
      var tmp = this;
      // Inline function 'kotlin.also' call
      var this_0 = newThrowable('WriteTask 0x' + toString_0(hashCode(this.x26_1), 16));
      stackTraceToString(this_0);
      tmp.y26_1 = this_0;
    }
  }
  r26() {
    return this.x26_1;
  }
  q26() {
    return this.y26_1;
  }
  s26() {
    return 'write';
  }
}
class ByteReadChannel {}
function awaitContent$default(min, $completion, $super) {
  min = min === VOID ? 1 : min;
  return $super === VOID ? this.h28(min, $completion) : $super.h28.call(this, min, $completion);
}
class ByteWriteChannel {}
function get_autoFlush() {
  return false;
}
class ByteChannel {
  constructor(autoFlush) {
    autoFlush = autoFlush === VOID ? false : autoFlush;
    this.z26_1 = autoFlush;
    this.a27_1 = new Buffer();
    this.b27_1 = 0;
    this.c27_1 = new Object();
    this.d27_1 = atomic$ref$1(Empty_instance);
    this.e27_1 = new Buffer();
    this.f27_1 = new Buffer();
    this.g27_1 = atomic$ref$1(null);
  }
  y27() {
    return this.z26_1;
  }
  z27() {
    var tmp0_safe_receiver = this.g27_1.kotlinx$atomicfu$value;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.b28(ClosedReadChannelException$_init_$ref_ix0089());
    }
    if (this.e27_1.j1j()) {
      moveFlushToReadBuffer(this);
    }
    return this.e27_1;
  }
  c28() {
    if (this.d28()) {
      var tmp0_safe_receiver = this.g27_1.kotlinx$atomicfu$value;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        tmp = tmp0_safe_receiver.b28(ClosedWriteChannelException$_init_$ref_ef15ty());
      }
      if (tmp == null)
        throw ClosedWriteChannelException.x27();
    }
    return this.f27_1;
  }
  e28() {
    var tmp0_safe_receiver = this.g27_1.kotlinx$atomicfu$value;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.f28();
  }
  d28() {
    return !(this.g27_1.kotlinx$atomicfu$value == null);
  }
  g28() {
    return !(this.e28() == null) || (this.d28() && this.b27_1 === 0 && this.e27_1.j1j());
  }
  h28(min, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_awaitContent__vf28kb.bind(VOID, this, min), $completion);
  }
  n27($completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_flush__owbk1c.bind(VOID, this), $completion);
  }
  m27() {
    if (this.f27_1.j1j())
      return Unit_instance;
    // Inline function 'io.ktor.utils.io.locks.synchronized' call
    this.c27_1;
    var count = convertToInt(this.f27_1.q2());
    this.a27_1.b1l(this.f27_1);
    this.b27_1 = this.b27_1 + count | 0;
    // Inline function 'io.ktor.utils.io.ByteChannel.resumeSlot' call
    var current = this.d27_1.kotlinx$atomicfu$value;
    var tmp;
    if (current instanceof Read) {
      tmp = this.d27_1.atomicfu$compareAndSet(current, Empty_instance);
    } else {
      tmp = false;
    }
    if (tmp) {
      current.t26();
    }
  }
  e7() {
    this.m27();
    if (!this.g27_1.atomicfu$compareAndSet(null, get_CLOSED()))
      return Unit_instance;
    closeSlot(this, null);
  }
  j28($completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_flushAndClose__wsi7db.bind(VOID, this), $completion);
  }
  k28(cause) {
    if (!(this.g27_1.kotlinx$atomicfu$value == null))
      return Unit_instance;
    var closedToken = new CloseToken(cause);
    this.g27_1.atomicfu$compareAndSet(null, closedToken);
    var wrappedCause = closedToken.f28();
    closeSlot(this, wrappedCause);
  }
  toString() {
    return 'ByteChannel[' + hashCode(this) + ']';
  }
}
class ConcurrentIOException extends IllegalStateException {
  static l27(taskName, cause) {
    cause = cause === VOID ? null : cause;
    var $this = this.q('Concurrent ' + taskName + ' attempts', cause);
    captureStack($this, $this.k27_1);
    return $this;
  }
}
class ByteChannelScanner {
  constructor(channel, matchString, writeChannel, limit) {
    limit = limit === VOID ? 9223372036854775807n : limit;
    this.l28_1 = channel;
    this.m28_1 = matchString;
    this.n28_1 = writeChannel;
    this.o28_1 = limit;
    // Inline function 'kotlin.require' call
    if (!(this.m28_1.q2() > 0)) {
      var message = 'Empty match string not permitted for scanning';
      throw IllegalArgumentException.m2(toString_1(message));
    }
    this.p28_1 = this.l28_1.z27();
    this.q28_1 = buildPartialMatchTable(this);
    this.r28_1 = new Buffer();
    this.s28_1 = 0n;
    this.t28_1 = 0;
  }
  u28(ignoreMissing, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_findNext__stdkn8.bind(VOID, this, ignoreMissing), $completion);
  }
}
class ByteReadChannel$Companion$Empty$1 {
  constructor() {
    this.v28_1 = null;
    this.w28_1 = new Buffer();
  }
  e28() {
    return this.v28_1;
  }
  g28() {
    return true;
  }
  z27() {
    return this.w28_1;
  }
  h28(min, $completion) {
    return false;
  }
  k28(cause) {
  }
}
class Companion_0 {
  constructor() {
    Companion_instance_1 = this;
    var tmp = this;
    tmp.x28_1 = new ByteReadChannel$Companion$Empty$1();
  }
}
class WriterJob {
  constructor(channel, job) {
    this.d29_1 = channel;
    this.e29_1 = job;
  }
  e1t() {
    return this.e29_1;
  }
}
class WriterScope {
  constructor(channel, coroutineContext) {
    this.f29_1 = channel;
    this.g29_1 = coroutineContext;
  }
  c1n() {
    return this.g29_1;
  }
}
class NO_CALLBACK$1 {
  constructor() {
    this.h29_1 = EmptyCoroutineContext_instance;
  }
  wc() {
    return this.h29_1;
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
    this.i29_1 = p0;
  }
  ae($completion) {
    return this.i29_1.j28($completion);
  }
}
class writer$slambda {
  constructor($block, $channel) {
    this.j29_1 = $block;
    this.k29_1 = $channel;
  }
  l29($this$launch, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8.bind(VOID, this, $this$launch), $completion);
  }
  yd(p1, $completion) {
    return this.l29((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class CloseToken {
  constructor(origin) {
    this.a28_1 = origin;
  }
  q29(wrap) {
    var tmp0_subject = this.a28_1;
    var tmp;
    if (tmp0_subject == null) {
      tmp = null;
    } else {
      if (isInterface(tmp0_subject, CopyableThrowable)) {
        tmp = this.a28_1.b1u();
      } else {
        if (tmp0_subject instanceof CancellationException) {
          tmp = CancellationException.p(this.a28_1.message, this.a28_1);
        } else {
          tmp = wrap(this.a28_1);
        }
      }
    }
    return tmp;
  }
  f28(wrap, $super) {
    var tmp;
    if (wrap === VOID) {
      tmp = ClosedByteChannelException$_init_$ref_yjp351();
    } else {
      tmp = wrap;
    }
    wrap = tmp;
    return $super === VOID ? this.q29(wrap) : $super.q29.call(this, wrap);
  }
  b28(wrap) {
    var tmp0_safe_receiver = this.q29(wrap);
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
    this.r29_1 = delegate;
    this.s29_1 = new Buffer();
    this.t29_1 = 0n;
    this.u29_1 = 0n;
  }
  v29() {
    updateConsumed(this);
    return this.u29_1;
  }
  e28() {
    return this.r29_1.e28();
  }
  g28() {
    return this.s29_1.j1j() && this.r29_1.g28();
  }
  z27() {
    transferFromDelegate(this);
    return this.s29_1;
  }
  h28(min, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_awaitContent__vf28kb_0.bind(VOID, this, min), $completion);
  }
  k28(cause) {
    this.r29_1.k28(cause);
    this.s29_1.e7();
  }
}
class ClosedByteChannelException extends IOException {
  static p29(cause) {
    cause = cause === VOID ? null : cause;
    var $this = this.n1m(cause == null ? null : cause.message, cause);
    captureStack($this, $this.o29_1);
    return $this;
  }
}
class ClosedReadChannelException extends ClosedByteChannelException {
  static s27(cause) {
    cause = cause === VOID ? null : cause;
    var $this = this.p29(cause);
    captureStack($this, $this.r27_1);
    return $this;
  }
}
class ClosedWriteChannelException extends ClosedByteChannelException {
  static x27(cause) {
    cause = cause === VOID ? null : cause;
    var $this = this.p29(cause);
    captureStack($this, $this.w27_1);
    return $this;
  }
}
class LineEnding extends Enum {}
class Companion_1 {
  constructor() {
    Companion_instance_2 = this;
    this.w29_1 = _LineEndingMode___init__impl__jo5bul(1);
    this.x29_1 = _LineEndingMode___init__impl__jo5bul(2);
    this.y29_1 = _LineEndingMode___init__impl__jo5bul(4);
    this.z29_1 = _LineEndingMode___init__impl__jo5bul(7);
    this.a2a_1 = listOf([new LineEndingMode(this.w29_1), new LineEndingMode(this.x29_1), new LineEndingMode(this.y29_1)]);
  }
}
class LineEndingMode {
  constructor(mode) {
    Companion_getInstance_1();
    this.b2a_1 = mode;
  }
  toString() {
    return LineEndingMode__toString_impl_j4h76r(this.b2a_1);
  }
  hashCode() {
    return LineEndingMode__hashCode_impl_2mopm4(this.b2a_1);
  }
  equals(other) {
    return LineEndingMode__equals_impl_qyr4nk(this.b2a_1, other);
  }
}
class SourceByteReadChannel {
  constructor(source) {
    this.c2a_1 = source;
    this.d2a_1 = null;
  }
  e28() {
    var tmp0_safe_receiver = this.d2a_1;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.f28();
  }
  g28() {
    return this.c2a_1.j1j();
  }
  z27() {
    var tmp0_safe_receiver = this.e28();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
    return this.c2a_1.i1j();
  }
  h28(min, $completion) {
    var tmp0_safe_receiver = this.e28();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
    return this.c2a_1.l1j(fromInt(min));
  }
  k28(cause) {
    if (!(this.d2a_1 == null))
      return Unit_instance;
    this.c2a_1.e7();
    var tmp = this;
    var tmp1_elvis_lhs = cause == null ? null : cause.message;
    tmp.d2a_1 = new CloseToken(IOException.n1m(tmp1_elvis_lhs == null ? 'Channel was cancelled' : tmp1_elvis_lhs, cause));
  }
}
class MalformedInputException extends IOException {
  static h2a(message) {
    var $this = this.m1m(message);
    captureStack($this, $this.g2a_1);
    return $this;
  }
}
class TooLongLineException extends MalformedInputException {
  static c29(message) {
    var $this = this.h2a(message);
    captureStack($this, $this.b29_1);
    return $this;
  }
}
class ObjectPool {}
function close() {
  this.p1q();
}
class DefaultPool {
  constructor(capacity) {
    this.r2a_1 = capacity;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.r2a_1;
    tmp.s2a_1 = Array(size);
    this.t2a_1 = 0;
  }
  u2a(instance) {
  }
  v2a(instance) {
    return instance;
  }
  w2a(instance) {
  }
  x2a() {
    if (this.t2a_1 === 0)
      return this.q2a();
    this.t2a_1 = this.t2a_1 - 1 | 0;
    var idx = this.t2a_1;
    var tmp = this.s2a_1[idx];
    var instance = !(tmp == null) ? tmp : THROW_CCE();
    this.s2a_1[idx] = null;
    return this.v2a(instance);
  }
  y2a(instance) {
    this.w2a(instance);
    if (this.t2a_1 === this.r2a_1) {
      this.u2a(instance);
    } else {
      var _unary__edvuaz = this.t2a_1;
      this.t2a_1 = _unary__edvuaz + 1 | 0;
      this.s2a_1[_unary__edvuaz] = instance;
    }
  }
  p1q() {
    var inductionVariable = 0;
    var last = this.t2a_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.s2a_1[i];
        var instance = !(tmp == null) ? tmp : THROW_CCE();
        this.s2a_1[i] = null;
        this.u2a(instance);
      }
       while (inductionVariable < last);
    this.t2a_1 = 0;
  }
}
class ByteArrayPool$1 extends DefaultPool {
  constructor() {
    super(128);
  }
  q2a() {
    return new Int8Array(4096);
  }
}
class NoPoolImpl {
  y2a(instance) {
    return Unit_instance;
  }
  p1q() {
    return Unit_instance;
  }
}
class Companion_2 {
  z2a(name) {
    switch (name) {
      case 'UTF-8':
      case 'utf-8':
      case 'UTF8':
      case 'utf8':
        return Charsets_getInstance().i2a_1;
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
      return Charsets_getInstance().j2a_1;
    }
    throw IllegalArgumentException.m2('Charset ' + name + ' is not supported');
  }
}
class Charset {
  constructor(_name) {
    this.k2a_1 = _name;
  }
  equals(other) {
    if (this === other)
      return true;
    if (other == null || !(this.constructor == other.constructor))
      return false;
    if (!(other instanceof Charset))
      THROW_CCE();
    return this.k2a_1 === other.k2a_1;
  }
  hashCode() {
    return getStringHashCode(this.k2a_1);
  }
  toString() {
    return this.k2a_1;
  }
}
class Charsets {
  constructor() {
    Charsets_instance = this;
    this.i2a_1 = new CharsetImpl('UTF-8');
    this.j2a_1 = new CharsetImpl('ISO-8859-1');
  }
}
class CharsetDecoder {
  constructor(_charset) {
    this.a2b_1 = _charset;
  }
}
class CharsetEncoder {
  constructor(_charset) {
    this.b2b_1 = _charset;
  }
}
class CharsetImpl extends Charset {
  l2a() {
    return new CharsetEncoderImpl(this);
  }
  m2a() {
    return new CharsetDecoderImpl(this);
  }
}
class CharsetEncoderImpl extends CharsetEncoder {
  constructor(charset) {
    super(charset);
    this.f2b_1 = charset;
  }
  toString() {
    return 'CharsetEncoderImpl(charset=' + this.f2b_1.toString() + ')';
  }
  hashCode() {
    return this.f2b_1.hashCode();
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof CharsetEncoderImpl))
      return false;
    if (!this.f2b_1.equals(other.f2b_1))
      return false;
    return true;
  }
}
class CharsetDecoderImpl extends CharsetDecoder {
  constructor(charset) {
    super(charset);
    this.h2b_1 = charset;
  }
  toString() {
    return 'CharsetDecoderImpl(charset=' + this.h2b_1.toString() + ')';
  }
  hashCode() {
    return this.h2b_1.hashCode();
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof CharsetDecoderImpl))
      return false;
    if (!this.h2b_1.equals(other.h2b_1))
      return false;
    return true;
  }
}
class toKtor$1 {
  constructor($this_toKtor) {
    this.i2b_1 = $this_toKtor;
  }
  c2b(buffer) {
    return this.i2b_1.decode(buffer);
  }
}
class TextDecoderFallback {
  constructor(encoding, fatal) {
    this.j2b_1 = fatal;
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
  c2b(buffer) {
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
          if (!!this.j2b_1) {
            var message = 'Invalid character: ' + point;
            throw IllegalStateException.o(toString_1(message));
          }
          writeFully_0(builder, get_REPLACEMENT());
          continue $l$loop;
        }
        if (point > 255) {
          builder.c1l(toByte(point >> 8));
        }
        builder.c1l(toByte(point & 255));
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
  if ($this.e27_1.q2() >= fromInt(min))
    return true;
  // Inline function 'io.ktor.utils.io.ByteChannel.sleepWhile' call
  $l$loop: while (add(numberToLong($this.b27_1), $this.e27_1.q2()) < fromInt(min) && $this.g27_1.kotlinx$atomicfu$value == null) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine' call
    // Inline function 'kotlin.js.suspendCoroutineUninterceptedOrReturnJS' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.w1r();
    var tmp2 = new Read(cancellable);
    $l$block_0: {
      // Inline function 'io.ktor.utils.io.ByteChannel.trySuspend' call
      var previous = $this.d27_1.kotlinx$atomicfu$value;
      if (!(previous instanceof Closed)) {
        if (!$this.d27_1.atomicfu$compareAndSet(previous, tmp2)) {
          tmp2.t26();
          break $l$block_0;
        }
      }
      if (previous instanceof Read) {
        previous.u26(ConcurrentIOException.l27(tmp2.s26(), previous.q26()));
      } else {
        if (isInterface(previous, Task)) {
          previous.t26();
        } else {
          if (previous instanceof Closed) {
            tmp2.u26(previous.p26_1);
            break $l$block_0;
          } else {
            if (!equals(previous, Empty_instance)) {
              noWhenBranchMatchedException();
            }
          }
        }
      }
      if (!(add(numberToLong($this.b27_1), $this.e27_1.q2()) < fromInt(min) && $this.g27_1.kotlinx$atomicfu$value == null)) {
        // Inline function 'io.ktor.utils.io.ByteChannel.resumeSlot' call
        var current = $this.d27_1.kotlinx$atomicfu$value;
        var tmp;
        if (current instanceof Read) {
          tmp = $this.d27_1.atomicfu$compareAndSet(current, Empty_instance);
        } else {
          tmp = false;
        }
        if (tmp) {
          current.t26();
        }
      }
    }
    var tmp$ret$6 = cancellable.h1p();
    var tmp_0 = returnIfSuspended(tmp$ret$6, $completion);
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      tmp_0 = yield tmp_0;
  }
  if ($this.e27_1.q2() < 1048576n) {
    moveFlushToReadBuffer($this);
  }
  return $this.e27_1.q2() >= fromInt(min);
}
function moveFlushToReadBuffer($this) {
  // Inline function 'io.ktor.utils.io.locks.synchronized' call
  $this.c27_1;
  $this.a27_1.m1k($this.e27_1);
  $this.b27_1 = 0;
  // Inline function 'io.ktor.utils.io.ByteChannel.resumeSlot' call
  var current = $this.d27_1.kotlinx$atomicfu$value;
  var tmp;
  if (current instanceof Write) {
    tmp = $this.d27_1.atomicfu$compareAndSet(current, Empty_instance);
  } else {
    tmp = false;
  }
  if (tmp) {
    current.t26();
  }
}
function *_generator_flush__owbk1c($this, $completion) {
  rethrowCloseCauseIfNeeded($this);
  $this.m27();
  if ($this.b27_1 < 1048576)
    return Unit_instance;
  // Inline function 'io.ktor.utils.io.ByteChannel.sleepWhile' call
  $l$loop: while ($this.b27_1 >= 1048576 && $this.g27_1.kotlinx$atomicfu$value == null) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine' call
    // Inline function 'kotlin.js.suspendCoroutineUninterceptedOrReturnJS' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.w1r();
    var tmp2 = new Write(cancellable);
    $l$block_0: {
      // Inline function 'io.ktor.utils.io.ByteChannel.trySuspend' call
      var previous = $this.d27_1.kotlinx$atomicfu$value;
      if (!(previous instanceof Closed)) {
        if (!$this.d27_1.atomicfu$compareAndSet(previous, tmp2)) {
          tmp2.t26();
          break $l$block_0;
        }
      }
      if (previous instanceof Write) {
        previous.u26(ConcurrentIOException.l27(tmp2.s26(), previous.q26()));
      } else {
        if (isInterface(previous, Task)) {
          previous.t26();
        } else {
          if (previous instanceof Closed) {
            tmp2.u26(previous.p26_1);
            break $l$block_0;
          } else {
            if (!equals(previous, Empty_instance)) {
              noWhenBranchMatchedException();
            }
          }
        }
      }
      if (!($this.b27_1 >= 1048576 && $this.g27_1.kotlinx$atomicfu$value == null)) {
        // Inline function 'io.ktor.utils.io.ByteChannel.resumeSlot' call
        var current = $this.d27_1.kotlinx$atomicfu$value;
        var tmp;
        if (current instanceof Write) {
          tmp = $this.d27_1.atomicfu$compareAndSet(current, Empty_instance);
        } else {
          tmp = false;
        }
        if (tmp) {
          current.t26();
        }
      }
    }
    var tmp$ret$6 = cancellable.h1p();
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
    var tmp_0 = $this.n27($completion);
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
  if (!$this.g27_1.atomicfu$compareAndSet(null, get_CLOSED()))
    return Unit_instance;
  closeSlot($this, null);
  return Unit_instance;
}
function closeSlot($this, cause) {
  var closeContinuation = !(cause == null) ? new Closed(cause) : Companion_getInstance().n26_1;
  var continuation = $this.d27_1.atomicfu$getAndSet(closeContinuation);
  if (isInterface(continuation, Task)) {
    continuation.u26(cause);
  }
}
function ClosedReadChannelException$_init_$ref_ix0089() {
  var l = (p0) => ClosedReadChannelException.s27(p0);
  l.callableName = '<init>';
  return l;
}
function ClosedWriteChannelException$_init_$ref_ef15ty() {
  var l = (p0) => ClosedWriteChannelException.x27(p0);
  l.callableName = '<init>';
  return l;
}
function ByteReadChannel_0(content, offset, length) {
  offset = offset === VOID ? 0 : offset;
  length = length === VOID ? content.length : length;
  // Inline function 'kotlin.also' call
  var this_0 = new Buffer();
  this_0.s1k(content, offset, offset + length | 0);
  var source = this_0;
  return ByteReadChannel_1(source);
}
function ByteReadChannel_1(source) {
  return new SourceByteReadChannel(source);
}
function *_generator_findNext__stdkn8($this, ignoreMissing, $completion) {
  $this.s28_1 = 0n;
  $l$loop: while (true) {
    var tmp;
    if (!$this.p28_1.j1j()) {
      tmp = true;
    } else {
      var tmp_0 = $this.l28_1.i28(VOID, $completion);
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
      return $this.s28_1;
    }
  }
  if (!ignoreMissing) {
    throw IOException.m1m('Expected "' + toSingleLineString($this, $this.m28_1) + '" but encountered end of input');
  }
  $this.s28_1 = add($this.s28_1, $this.r28_1.m1k($this.n28_1.c28()));
  var tmp_3 = $this.n28_1.n27($completion);
  if (tmp_3 === get_COROUTINE_SUSPENDED())
    tmp_3 = yield tmp_3;
  return $this.s28_1;
}
function buildPartialMatchTable($this) {
  var table = new Int32Array($this.m28_1.q2());
  var j = 0;
  var inductionVariable = 1;
  var last = $this.m28_1.q2();
  if (inductionVariable < last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      while (j > 0 && !($this.m28_1.p2(i) === $this.m28_1.p2(j))) {
        j = table[j - 1 | 0];
      }
      if ($this.m28_1.p2(i) === $this.m28_1.p2(j)) {
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
    if (!$this.p28_1.j1j()) {
      tmp = true;
    } else {
      var tmp_0 = $this.l28_1.i28(VOID, $completion);
      if (tmp_0 === get_COROUTINE_SUSPENDED())
        tmp_0 = yield tmp_0;
      tmp = tmp_0;
    }
    if (!tmp) {
      break $l$loop;
    }
    var nextMatch = indexOf($this.p28_1, $this.m28_1.p2(0));
    if (nextMatch === -1n) {
      var tmp_1 = $this.p28_1;
      checkBounds($this, (tmp_1 instanceof Buffer ? tmp_1 : THROW_CCE()).q2());
      $this.s28_1 = add($this.s28_1, $this.p28_1.m1k($this.n28_1.c28()));
      var tmp_2 = flushIfNeeded($this.n28_1, $completion);
      if (tmp_2 === get_COROUTINE_SUSPENDED())
        tmp_2 = yield tmp_2;
    } else {
      checkBounds($this, nextMatch);
      var tmp_3 = $this;
      var tmp_4 = $this.s28_1;
      var tmp_5 = $this.n28_1.c28();
      tmp_3.s28_1 = add(tmp_4, $this.p28_1.j1k(tmp_5 instanceof Buffer ? tmp_5 : THROW_CCE(), nextMatch));
      var tmp_6 = flushIfNeeded($this.n28_1, $completion);
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
    if (!$this.p28_1.j1j()) {
      tmp = true;
    } else {
      var tmp_0 = $this.l28_1.i28(VOID, $completion);
      if (tmp_0 === get_COROUTINE_SUSPENDED())
        tmp_0 = yield tmp_0;
      tmp = tmp_0;
    }
    if (!tmp) {
      break $l$loop;
    }
    var byte = $this.p28_1.m1j();
    if ($this.t28_1 > 0 && !(byte === $this.m28_1.p2($this.t28_1))) {
      var oldMatchIndex = $this.t28_1;
      while ($this.t28_1 > 0 && !(byte === $this.m28_1.p2($this.t28_1))) {
        $this.t28_1 = $this.q28_1[$this.t28_1 - 1 | 0];
      }
      var retained = fromInt(oldMatchIndex - $this.t28_1 | 0);
      checkBounds($this, retained);
      var tmp_1 = $this;
      var tmp_2 = $this.s28_1;
      var tmp_3 = $this.n28_1.c28();
      tmp_1.s28_1 = add(tmp_2, $this.r28_1.j1k(tmp_3 instanceof Buffer ? tmp_3 : THROW_CCE(), retained));
      if ($this.t28_1 === 0 && !(byte === $this.m28_1.p2($this.t28_1))) {
        var tmp_4 = writeByte($this.n28_1, byte, $completion);
        if (tmp_4 === get_COROUTINE_SUSPENDED())
          tmp_4 = yield tmp_4;
        var _unary__edvuaz = $this.s28_1;
        $this.s28_1 = add(_unary__edvuaz, get_ONE());
        return false;
      }
    }
    $this.t28_1 = $this.t28_1 + 1 | 0;
    if ($this.t28_1 === $this.m28_1.q2()) {
      return true;
    }
    $this.r28_1.c1l(byte);
  }
  return false;
}
function checkFullMatch($this, $completion) {
  return suspendOrReturn(/*#__NOINLINE__*/_generator_checkFullMatch__turpx6.bind(VOID, $this), $completion);
}
function checkBounds($this, extra) {
  if (add($this.s28_1, extra) > $this.o28_1) {
    throw IOException.m1m('Limit of ' + $this.o28_1.toString() + ' bytes exceeded ' + ('while searching for "' + toSingleLineString($this, $this.m28_1) + '"'));
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
  _this__u8e3s4.k28(IOException.m1m('Channel was cancelled'));
}
function *_generator_readRemaining__kd4xx0(_this__u8e3s4, $completion) {
  var result = BytePacketBuilder();
  while (!_this__u8e3s4.g28()) {
    result.b1l(_this__u8e3s4.z27());
    var tmp = _this__u8e3s4.i28(VOID, $completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      tmp = yield tmp;
  }
  rethrowCloseCauseIfNeeded_0(_this__u8e3s4);
  return result.i1j();
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
    while (!_this__u8e3s4.g28() && remaining > 0n) {
      if (_this__u8e3s4.z27().j1j()) {
        var tmp = _this__u8e3s4.i28(VOID, $completion);
        if (tmp === get_COROUTINE_SUSPENDED())
          tmp = yield tmp;
      }
      var tmp0 = remaining;
      // Inline function 'kotlin.comparisons.minOf' call
      var b = get_remaining(_this__u8e3s4.z27());
      var count = tmp0 <= b ? tmp0 : b;
      _this__u8e3s4.z27().l1k(channel.c28(), count);
      remaining = subtract(remaining, count);
      var tmp_0 = channel.n27($completion);
      if (tmp_0 === get_COROUTINE_SUSPENDED())
        tmp_0 = yield tmp_0;
    }
  } catch ($p) {
    if ($p instanceof Error) {
      var cause = $p;
      _this__u8e3s4.k28(cause);
      close_0(channel, cause);
      throw cause;
    } else {
      throw $p;
    }
  }
  finally {
    var tmp_1 = channel.n27($completion);
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
  while (remaining > 0n && !_this__u8e3s4.g28()) {
    if (get_availableForRead(_this__u8e3s4) === 0) {
      var tmp = _this__u8e3s4.i28(VOID, $completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
    }
    var tmp0 = remaining;
    // Inline function 'kotlin.comparisons.minOf' call
    var b = get_remaining(_this__u8e3s4.z27());
    var count = tmp0 <= b ? tmp0 : b;
    discard_0(_this__u8e3s4.z27(), count);
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
    while (!_this__u8e3s4.g28()) {
      result = add(result, _this__u8e3s4.z27().m1k(channel.c28()));
      var tmp = channel.n27($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var tmp_0 = _this__u8e3s4.i28(VOID, $completion);
      if (tmp_0 === get_COROUTINE_SUSPENDED())
        tmp_0 = yield tmp_0;
    }
  } catch ($p) {
    if ($p instanceof Error) {
      var cause = $p;
      _this__u8e3s4.k28(cause);
      close_0(channel, cause);
      throw cause;
    } else {
      throw $p;
    }
  }
  finally {
    var tmp_1 = channel.n27($completion);
    if (tmp_1 === get_COROUTINE_SUSPENDED())
      tmp_1 = yield tmp_1;
  }
  return result;
}
function copyTo_0(_this__u8e3s4, channel, $completion) {
  return suspendOrReturn(/*#__NOINLINE__*/_generator_copyTo__iu4794_0.bind(VOID, _this__u8e3s4, channel), $completion);
}
function *_generator_readAvailable__ki7w73(_this__u8e3s4, buffer, offset, length, $completion) {
  if (_this__u8e3s4.g28())
    return -1;
  if (_this__u8e3s4.z27().j1j()) {
    var tmp = _this__u8e3s4.i28(VOID, $completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      tmp = yield tmp;
  }
  if (_this__u8e3s4.g28())
    return -1;
  return readAvailable_0(_this__u8e3s4.z27(), buffer, offset, length);
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
    if (_this__u8e3s4.z27().j1j()) {
      var tmp = _this__u8e3s4.i28(VOID, $completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
    }
    if (_this__u8e3s4.g28())
      break $l$loop;
    if (get_remaining(_this__u8e3s4.z27()) > subtract(numberToLong(packet), result.q2())) {
      _this__u8e3s4.z27().l1k(result, subtract(numberToLong(packet), result.q2()));
    } else {
      _this__u8e3s4.z27().m1k(result);
    }
  }
  if (result.q2() < fromInt(packet)) {
    throw EOFException.h1j('Not enough data available, required ' + packet + ' bytes but only ' + result.q2().toString() + ' available');
  }
  return result;
}
function readPacket(_this__u8e3s4, packet, $completion) {
  return suspendOrReturn(/*#__NOINLINE__*/_generator_readPacket__axk2oa.bind(VOID, _this__u8e3s4, packet), $completion);
}
function readUntil(_this__u8e3s4, matchString, writeChannel, limit, ignoreMissing, $completion) {
  limit = limit === VOID ? 9223372036854775807n : limit;
  ignoreMissing = ignoreMissing === VOID ? false : ignoreMissing;
  return (new ByteChannelScanner(_this__u8e3s4, matchString, writeChannel, limit)).u28(ignoreMissing, $completion);
}
function readLineStrictTo(_this__u8e3s4, out, limit, lineEnding, $completion) {
  limit = limit === VOID ? 9223372036854775807n : limit;
  lineEnding = lineEnding === VOID ? LineEnding_Default_getInstance() : lineEnding;
  // Inline function 'kotlin.require' call
  if (!(limit >= 0n)) {
    var message = 'Limit (' + limit.toString() + ') should be non-negative';
    throw IllegalArgumentException.m2(toString_1(message));
  }
  return internalReadLineTo(_this__u8e3s4, out, limit, lineEnding.equals(LineEnding_Lenient_getInstance()), true, $completion);
}
function rethrowCloseCauseIfNeeded(_this__u8e3s4) {
  var tmp0_safe_receiver = _this__u8e3s4.e28();
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    throw tmp0_safe_receiver;
  }
}
function rethrowCloseCauseIfNeeded_0(_this__u8e3s4) {
  var tmp0_safe_receiver = _this__u8e3s4.e28();
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    throw tmp0_safe_receiver;
  }
}
function *_generator_readBuffer__s1sw5u(_this__u8e3s4, $completion) {
  var result = new Buffer();
  while (!_this__u8e3s4.g28()) {
    result.b1l(_this__u8e3s4.z27());
    var tmp = _this__u8e3s4.i28(VOID, $completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      tmp = yield tmp;
  }
  var tmp0_safe_receiver = _this__u8e3s4.e28();
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
  return convertToInt(_this__u8e3s4.z27().i1j().q2());
}
function *_generator_peek__qjkkqb(_this__u8e3s4, count, $completion) {
  if (_this__u8e3s4.g28())
    return null;
  var tmp = _this__u8e3s4.h28(count, $completion);
  if (tmp === get_COROUTINE_SUSPENDED())
    tmp = yield tmp;
  if (!tmp)
    return null;
  return readByteString(_this__u8e3s4.z27().n1k(), count);
}
function peek(_this__u8e3s4, count, $completion) {
  return suspendOrReturn(/*#__NOINLINE__*/_generator_peek__qjkkqb.bind(VOID, _this__u8e3s4, count), $completion);
}
function *_generator_internalReadLineTo__5n8dpi(_this__u8e3s4, out, limit, lenientLineEnding, throwOnIncompleteLine, $completion) {
  var readBuffer = _this__u8e3s4.z27();
  if (readBuffer.j1j()) {
    var tmp = _this__u8e3s4.i28(VOID, $completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      tmp = yield tmp;
  }
  if (_this__u8e3s4.g28())
    return -1n;
  var consumed = {_v: 0n};
  $l$loop: while (consumed._v < limit && !_this__u8e3s4.g28()) {
    var limitLeft = subtract(limit, consumed._v);
    var lfIndex = indexOf(readBuffer, 10, VOID, limitLeft);
    var crIndex = internalReadLineTo$scanForSoleCr(readBuffer, lenientLineEnding, lfIndex, limitLeft);
    if (crIndex >= 0n) {
      internalReadLineTo$transferString(readBuffer, out, consumed, crIndex);
      discard_0(readBuffer, 1n);
      return consumed._v;
    }
    if (lfIndex === 0n) {
      discard_0(readBuffer, 1n);
      return consumed._v;
    }
    if (lfIndex > 0n) {
      var tmp_0;
      var tmp_1 = readBuffer.i1j();
      // Inline function 'kotlin.Long.minus' call
      var tmp$ret$0 = subtract(lfIndex, fromInt(1));
      if (tmp_1.e1k(tmp$ret$0) === 13) {
        tmp_0 = 1n;
      } else {
        tmp_0 = 0n;
      }
      var isCrlf = tmp_0;
      internalReadLineTo$transferString(readBuffer, out, consumed, subtract(lfIndex, isCrlf));
      discard_0(readBuffer, add(numberToLong(1), isCrlf));
      return consumed._v;
    }
    // Inline function 'kotlin.comparisons.minOf' call
    var b = get_remaining(readBuffer);
    var count = limitLeft <= b ? limitLeft : b;
    var tmp_2 = readBuffer.i1j();
    // Inline function 'kotlin.Long.minus' call
    var tmp$ret$2 = subtract(count, fromInt(1));
    if (tmp_2.e1k(tmp$ret$2) === 13) {
      // Inline function 'kotlin.Long.minus' call
      var tmp$ret$3 = subtract(count, fromInt(1));
      internalReadLineTo$transferString(readBuffer, out, consumed, tmp$ret$3);
      var tmp_3 = internalReadLineTo$discardCrlfOrCr(readBuffer, _this__u8e3s4, lenientLineEnding, $completion);
      if (tmp_3 === get_COROUTINE_SUSPENDED())
        tmp_3 = yield tmp_3;
      if (tmp_3)
        return consumed._v;
      internalReadLineTo$transferString(readBuffer, out, consumed, 1n);
    } else {
      internalReadLineTo$transferString(readBuffer, out, consumed, count);
    }
    var tmp_4;
    if (consumed._v < limit && get_remaining(readBuffer) === 0n) {
      var tmp_5 = _this__u8e3s4.i28(VOID, $completion);
      if (tmp_5 === get_COROUTINE_SUSPENDED())
        tmp_5 = yield tmp_5;
      tmp_4 = !tmp_5;
    } else {
      tmp_4 = false;
    }
    if (tmp_4)
      break $l$loop;
  }
  if (consumed._v === 0n && _this__u8e3s4.g28())
    return -1n;
  // Inline function 'kotlin.check' call
  if (!(consumed._v <= limit)) {
    var message = 'Consumed bytes exceed the limit: ' + consumed._v.toString() + ' > ' + limit.toString() + ". It's an implementation bug, please report it.";
    throw IllegalStateException.o(toString_1(message));
  }
  if (consumed._v === limit) {
    if (limit === 9223372036854775807n)
      throw TooLongLineException.c29('Max line length exceeded');
    var tmp_6;
    if (get_remaining(readBuffer) === 0n) {
      var tmp_7 = _this__u8e3s4.i28(VOID, $completion);
      if (tmp_7 === get_COROUTINE_SUSPENDED())
        tmp_7 = yield tmp_7;
      tmp_6 = !tmp_7;
    } else {
      tmp_6 = false;
    }
    if (tmp_6) {
      throwEndOfStreamException(consumed._v);
    }
    var tmp0_subject = readBuffer.i1j().e1k(0n);
    if (tmp0_subject === 10) {
      discard_0(readBuffer, 1n);
      return consumed._v;
    } else if (tmp0_subject === 13) {
      var tmp_8 = internalReadLineTo$discardCrlfOrCr(readBuffer, _this__u8e3s4, lenientLineEnding, $completion);
      if (tmp_8 === get_COROUTINE_SUSPENDED())
        tmp_8 = yield tmp_8;
      if (tmp_8)
        return consumed._v;
    }
    throwTooLongLineException(limit);
  }
  if (throwOnIncompleteLine) {
    throwEndOfStreamException(consumed._v);
  }
  return consumed._v;
}
function internalReadLineTo(_this__u8e3s4, out, limit, lenientLineEnding, throwOnIncompleteLine, $completion) {
  return suspendOrReturn(/*#__NOINLINE__*/_generator_internalReadLineTo__5n8dpi.bind(VOID, _this__u8e3s4, out, limit, lenientLineEnding, throwOnIncompleteLine), $completion);
}
function throwEndOfStreamException(consumed) {
  throw EOFException.h1j('Unexpected end of stream after reading ' + consumed.toString() + ' characters');
}
function throwTooLongLineException(limit) {
  throw TooLongLineException.c29('Line exceeds limit of ' + limit.toString() + ' characters');
}
function rethrowCloseCauseIfNeeded_1(_this__u8e3s4) {
  var tmp0_safe_receiver = _this__u8e3s4.e28();
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    throw tmp0_safe_receiver;
  }
}
function internalReadLineTo$transferString(readBuffer, $out, consumed, count) {
  if (count > 0n) {
    var string = readString(readBuffer, count);
    $out.o2(string);
    var tmp0 = consumed._v;
    // Inline function 'kotlin.Long.plus' call
    var other = string.length;
    consumed._v = add(tmp0, fromInt(other));
  }
}
function internalReadLineTo$scanForSoleCr(_this__u8e3s4, $lenientLineEnding, lfIndex, limitLeft) {
  if (!$lenientLineEnding)
    return -1n;
  var tmp;
  if (lfIndex === -1n) {
    // Inline function 'kotlin.Long.minus' call
    var this_0 = get_remaining(_this__u8e3s4);
    // Inline function 'kotlin.comparisons.minOf' call
    var b = subtract(this_0, fromInt(1));
    tmp = limitLeft <= b ? limitLeft : b;
  } else if (lfIndex === 0n) {
    tmp = 0n;
  } else {
    // Inline function 'kotlin.Long.minus' call
    tmp = subtract(lfIndex, fromInt(1));
  }
  var endIndex = tmp;
  return indexOf(_this__u8e3s4, 13, VOID, endIndex);
}
function *_generator_internalReadLineTo$discardCrlfOrCr__fwcpdd(_this__u8e3s4, $this_internalReadLineTo, $lenientLineEnding, $completion) {
  var tmp;
  var tmp_0;
  if (get_remaining(_this__u8e3s4) >= 2n) {
    tmp_0 = true;
  } else {
    var tmp_1 = $this_internalReadLineTo.h28(2, $completion);
    if (tmp_1 === get_COROUTINE_SUSPENDED())
      tmp_1 = yield tmp_1;
    tmp_0 = tmp_1;
  }
  if (tmp_0) {
    tmp = _this__u8e3s4.i1j().e1k(1n) === 10;
  } else {
    tmp = false;
  }
  if (tmp) {
    discard_0(_this__u8e3s4, 2n);
    return true;
  }
  if ($lenientLineEnding) {
    discard_0(_this__u8e3s4, 1n);
    return true;
  }
  return false;
}
function internalReadLineTo$discardCrlfOrCr(_this__u8e3s4, $this_internalReadLineTo, $lenientLineEnding, $completion) {
  return suspendOrReturn(/*#__NOINLINE__*/_generator_internalReadLineTo$discardCrlfOrCr__fwcpdd.bind(VOID, _this__u8e3s4, $this_internalReadLineTo, $lenientLineEnding), $completion);
}
function *_generator_flushIfNeeded__xji6le(_this__u8e3s4, $completion) {
  rethrowCloseCauseIfNeeded_1(_this__u8e3s4);
  if (_this__u8e3s4.y27() || get_size(_this__u8e3s4.c28()) >= 1048576) {
    var tmp = _this__u8e3s4.n27($completion);
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
  return _this__u8e3s4.e1t().e1o(block);
}
function *_generator_writeFully__hb5mir(_this__u8e3s4, value, startIndex, endIndex, $completion) {
  _this__u8e3s4.c28().s1k(value, startIndex, endIndex);
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
    _this__u8e3s4.k28(cause);
  }
}
function *_generator_writePacket__qqx68d(_this__u8e3s4, source, $completion) {
  while (!source.j1j()) {
    _this__u8e3s4.c28().w1k(source, get_remaining(source));
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
  this_0.e1o(writer$lambda(channel));
  var job = this_0;
  return new WriterJob(channel, job);
}
function fireAndForget(_this__u8e3s4) {
  _init_properties_ByteWriteChannelOperations_kt__i7slrs();
  startCoroutineCancellable(_this__u8e3s4, get_NO_CALLBACK());
}
function *_generator_writeByte__k05tl9(_this__u8e3s4, value, $completion) {
  _this__u8e3s4.c28().c1l(value);
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
  var nested = Job(get_job($this$launch.c1n()));
  try {
    var tmp = $this.j29_1(new WriterScope($this.k29_1, $this$launch.c1n().qm(nested)), $completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      tmp = yield tmp;
    nested.q1t();
    if (get_job($this$launch.c1n()).y1n()) {
      $this.k29_1.k28(get_job($this$launch.c1n()).b1o());
    }
  } catch ($p) {
    if ($p instanceof Error) {
      var cause = $p;
      cancel(nested, 'Exception thrown while writing to channel', cause);
      $this.k29_1.k28(cause);
    } else {
      throw $p;
    }
  }
  finally {
    var tmp_0 = nested.i1o($completion);
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      tmp_0 = yield tmp_0;
    // Inline function 'kotlin.runCatching' call
    var tmp_1;
    try {
      var tmp_2 = $this.k29_1.j28($completion);
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
  var l = ($this$launch, $completion) => i.l29($this$launch, $completion);
  l.$arity = 1;
  return l;
}
function writer$lambda($channel) {
  return (it) => {
    var tmp;
    if (!(it == null) && !$channel.d28()) {
      $channel.k28(it);
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
  var l = (p0) => ClosedByteChannelException.p29(p0);
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
  if ($this.z27().q2() >= fromInt(min)) {
    return true;
  }
  var tmp = $this.r29_1.h28(min, $completion);
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
  var appended = $this.s29_1.b1l($this.r29_1.z27());
  $this.t29_1 = add($this.t29_1, appended);
}
function updateConsumed($this) {
  $this.u29_1 = add($this.u29_1, subtract($this.t29_1, $this.s29_1.q2()));
  $this.t29_1 = $this.s29_1.q2();
}
function counted(_this__u8e3s4) {
  return new CountedByteReadChannel(_this__u8e3s4);
}
function readText(_this__u8e3s4) {
  return readString_0(_this__u8e3s4);
}
var LineEnding_Default_instance;
var LineEnding_Lenient_instance;
var LineEnding_entriesInitialized;
function LineEnding_initEntries() {
  if (LineEnding_entriesInitialized)
    return Unit_instance;
  LineEnding_entriesInitialized = true;
  LineEnding_Default_instance = new LineEnding('Default', 0);
  LineEnding_Lenient_instance = new LineEnding('Lenient', 1);
}
function LineEnding_Default_getInstance() {
  LineEnding_initEntries();
  return LineEnding_Default_instance;
}
function LineEnding_Lenient_getInstance() {
  LineEnding_initEntries();
  return LineEnding_Lenient_instance;
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
  if ($this === Companion_getInstance_1().w29_1) {
    tmp = 'CR';
  } else if ($this === Companion_getInstance_1().x29_1) {
    tmp = 'LF';
  } else if ($this === Companion_getInstance_1().y29_1) {
    tmp = 'CRLF';
  } else {
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = Companion_getInstance_1().a2a_1;
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList.s2();
    var _iterator__ex2g4s = tmp0.q1();
    while (_iterator__ex2g4s.r1()) {
      var element = _iterator__ex2g4s.s1();
      var it = element.b2a_1;
      if (LineEndingMode__contains_impl_q5pr68($this, it)) {
        destination.e2(element);
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
  if (!($this === other.b2a_1))
    return false;
  return true;
}
function decode(_this__u8e3s4, input, max) {
  max = max === VOID ? 2147483647 : max;
  var tmp0 = fromInt(max);
  // Inline function 'kotlin.comparisons.minOf' call
  var b = input.i1j().q2();
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
  return !_this__u8e3s4.j1j();
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
  _this__u8e3s4.s1k(buffer, offset, offset + length | 0);
}
function build(_this__u8e3s4) {
  return _this__u8e3s4.i1j();
}
function get_size(_this__u8e3s4) {
  return convertToInt(_this__u8e3s4.i1j().q2());
}
var ByteReadPacketEmpty;
function ByteReadPacket(array, offset, length) {
  offset = offset === VOID ? 0 : offset;
  length = length === VOID ? array.length : length;
  _init_properties_ByteReadPacket_kt__28475y();
  // Inline function 'kotlin.apply' call
  var this_0 = new Buffer();
  this_0.s1k(array, offset, offset + length | 0);
  return this_0;
}
function get_remaining(_this__u8e3s4) {
  _init_properties_ByteReadPacket_kt__28475y();
  return _this__u8e3s4.i1j().q2();
}
function takeWhile(_this__u8e3s4, block) {
  _init_properties_ByteReadPacket_kt__28475y();
  while (!_this__u8e3s4.j1j() && block(_this__u8e3s4.i1j())) {
  }
}
function discard_0(_this__u8e3s4, count) {
  count = count === VOID ? 9223372036854775807n : count;
  _init_properties_ByteReadPacket_kt__28475y();
  _this__u8e3s4.l1j(count);
  // Inline function 'kotlin.comparisons.minOf' call
  var b = get_remaining(_this__u8e3s4);
  var countToDiscard = count <= b ? count : b;
  _this__u8e3s4.i1j().g1k(countToDiscard);
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
  var result = _this__u8e3s4.h1k(buffer, offset, offset + length | 0);
  return result === -1 ? 0 : result;
}
function toByteArray_0(_this__u8e3s4, charset) {
  charset = charset === VOID ? Charsets_getInstance().i2a_1 : charset;
  if (charset.equals(Charsets_getInstance().i2a_1))
    return encodeToByteArray(_this__u8e3s4, VOID, VOID, true);
  return encodeToByteArray_0(charset.l2a(), _this__u8e3s4, 0, _this__u8e3s4.length);
}
function readText_0(_this__u8e3s4, charset, max) {
  charset = charset === VOID ? Charsets_getInstance().i2a_1 : charset;
  max = max === VOID ? 2147483647 : max;
  if (charset.equals(Charsets_getInstance().i2a_1)) {
    if (max === 2147483647)
      return readString_0(_this__u8e3s4);
    var tmp0 = _this__u8e3s4.i1j().q2();
    // Inline function 'kotlin.math.min' call
    var b = fromInt(max);
    var count = tmp0 <= b ? tmp0 : b;
    return readString(_this__u8e3s4, count);
  }
  return decode(charset.m2a(), _this__u8e3s4, max);
}
function writeText(_this__u8e3s4, text, fromIndex, toIndex, charset) {
  fromIndex = fromIndex === VOID ? 0 : fromIndex;
  toIndex = toIndex === VOID ? charSequenceLength(text) : toIndex;
  charset = charset === VOID ? Charsets_getInstance().i2a_1 : charset;
  if (charset === Charsets_getInstance().i2a_1) {
    return writeString(_this__u8e3s4, toString_1(text), fromIndex, toIndex);
  }
  encodeToImpl(charset.l2a(), _this__u8e3s4, text, fromIndex, toIndex);
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
  return _this__u8e3s4.k2a_1;
}
var Charsets_instance;
function Charsets_getInstance() {
  if (Charsets_instance === VOID)
    new Charsets();
  return Charsets_instance;
}
function forName(_this__u8e3s4, name) {
  return Companion_instance_3.z2a(name);
}
function decode_0(_this__u8e3s4, input, dst, max) {
  var decoder = Decoder(get_name(get_charset(_this__u8e3s4)), true);
  var tmp0 = input.i1j().q2();
  // Inline function 'kotlin.comparisons.minOf' call
  var b = fromInt(max);
  var count = tmp0 <= b ? tmp0 : b;
  var array = readByteArray(input, convertToInt(count));
  var tmp;
  try {
    // Inline function 'org.khronos.webgl.toInt8Array' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp = decoder.c2b(array);
  } catch ($p) {
    var tmp_0;
    if ($p instanceof Error) {
      var cause = $p;
      var tmp0_elvis_lhs = cause.message;
      throw MalformedInputException.h2a('Failed to decode bytes: ' + (tmp0_elvis_lhs == null ? 'no cause provided' : tmp0_elvis_lhs));
    } else {
      throw $p;
    }
  }
  var result = tmp;
  dst.o2(result);
  return result.length;
}
function encodeImpl(_this__u8e3s4, input, fromIndex, toIndex, dst) {
  // Inline function 'kotlin.require' call
  // Inline function 'kotlin.require' call
  if (!(fromIndex <= toIndex)) {
    var message = 'Failed requirement.';
    throw IllegalArgumentException.m2(toString_1(message));
  }
  if (get_charset_0(_this__u8e3s4).equals(Charsets_getInstance().j2a_1)) {
    return encodeISO88591(input, fromIndex, toIndex, dst);
  }
  // Inline function 'kotlin.require' call
  if (!(get_charset_0(_this__u8e3s4) === Charsets_getInstance().i2a_1)) {
    var message_0 = 'Only UTF-8 encoding is supported in JS';
    throw IllegalArgumentException.m2(toString_1(message_0));
  }
  var encoder = new TextEncoder();
  // Inline function 'kotlin.text.substring' call
  var tmp$ret$5 = toString_1(charSequenceSubSequence(input, fromIndex, toIndex));
  var result = encoder.encode(tmp$ret$5);
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  dst.v1k(result);
  return result.length;
}
function encodeToByteArray_0(_this__u8e3s4, input, fromIndex, toIndex) {
  fromIndex = fromIndex === VOID ? 0 : fromIndex;
  toIndex = toIndex === VOID ? charSequenceLength(input) : toIndex;
  return encodeToByteArrayImpl(_this__u8e3s4, input, fromIndex, toIndex);
}
function get_charset(_this__u8e3s4) {
  return _this__u8e3s4.a2b_1;
}
function get_charset_0(_this__u8e3s4) {
  return _this__u8e3s4.b2b_1;
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
  return Dispatchers_getInstance().z1x_1;
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
      dst.c1l(toByte(character));
    }
     while (inductionVariable < toIndex);
  return toIndex - fromIndex | 0;
}
function failedToMapError(ch) {
  throw MalformedInputException.h2a('The character with unicode point ' + ch + " couldn't be mapped to ISO-8859-1 character");
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
protoOf(Read).t26 = resume;
protoOf(Read).u26 = resume_0;
initMetadataForClass(Read, 'Read', VOID, VOID, [Task]);
protoOf(Write).t26 = resume;
protoOf(Write).u26 = resume_0;
initMetadataForClass(Write, 'Write', VOID, VOID, [Task]);
initMetadataForInterface(ByteReadChannel, 'ByteReadChannel', VOID, VOID, VOID, [1]);
initMetadataForInterface(ByteWriteChannel, 'ByteWriteChannel', VOID, VOID, VOID, [0]);
protoOf(ByteChannel).i28 = awaitContent$default;
initMetadataForClass(ByteChannel, 'ByteChannel', ByteChannel, VOID, [ByteReadChannel, ByteWriteChannel], [1, 0]);
initMetadataForClass(ConcurrentIOException, 'ConcurrentIOException');
initMetadataForClass(ByteChannelScanner, 'ByteChannelScanner', VOID, VOID, VOID, [1, 0]);
protoOf(ByteReadChannel$Companion$Empty$1).i28 = awaitContent$default;
initMetadataForClass(ByteReadChannel$Companion$Empty$1, VOID, VOID, VOID, [ByteReadChannel], [1]);
initMetadataForCompanion(Companion_0);
initMetadataForClass(WriterJob, 'WriterJob');
initMetadataForClass(WriterScope, 'WriterScope', VOID, VOID, [CoroutineScope]);
initMetadataForClass(NO_CALLBACK$1, VOID, VOID, VOID, [Continuation]);
initMetadataForFunctionReference(ByteWriteChannel$flushAndClose$ref, VOID, VOID, [0]);
initMetadataForLambda(writer$slambda, VOID, VOID, [1]);
initMetadataForClass(CloseToken, 'CloseToken');
protoOf(CountedByteReadChannel).i28 = awaitContent$default;
initMetadataForClass(CountedByteReadChannel, 'CountedByteReadChannel', VOID, VOID, [ByteReadChannel], [1]);
initMetadataForClass(ClosedByteChannelException, 'ClosedByteChannelException', ClosedByteChannelException.p29);
initMetadataForClass(ClosedReadChannelException, 'ClosedReadChannelException', ClosedReadChannelException.s27);
initMetadataForClass(ClosedWriteChannelException, 'ClosedWriteChannelException', ClosedWriteChannelException.x27);
initMetadataForClass(LineEnding, 'LineEnding');
initMetadataForCompanion(Companion_1);
initMetadataForClass(LineEndingMode, 'LineEndingMode');
protoOf(SourceByteReadChannel).i28 = awaitContent$default;
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
  readLineStrictTo as readLineStrictTo28itb6tlpz7zv,
  readPacket as readPacket1r77mz431qe8y,
  readRemaining as readRemaininghtnrfi4c8vp0,
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
