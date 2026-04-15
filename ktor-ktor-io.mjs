import {
  Companion_instance1xjg859pd52fi as Companion_instance,
  Unit_instancev9v8hjid95df as Unit_instance,
  _Result___init__impl__xyqfz823vatsdepqb9n as _Result___init__impl__xyqfz8,
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
  isInterface3d6p8outrmvmk as isInterface,
  fromInt2ii0rejb1w62w as fromInt,
  numberToLong2pakxeg38estk as numberToLong,
  add2suhfggl4zvkk as add,
  intercepted2ogpsikxxj4u0 as intercepted,
  noWhenBranchMatchedException2a6r7ubxgky5j as noWhenBranchMatchedException,
  convertToInty04h231mmjoh as convertToInt,
  IllegalStateExceptionkoljg5n0nrlr as IllegalStateException,
  captureStack1fzi4aczwc4hg as captureStack,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  get_ONEazvfdh9ju3d4 as get_ONE,
  replace3le3ie7l9k8aq as replace,
  IllegalArgumentException2asla15b5jaob as IllegalArgumentException,
  toString1pkumu07cwy4m as toString_1,
  subtract2orl8z9upxd9l as subtract,
  EmptyCoroutineContext_instance101eax45qp7ot as EmptyCoroutineContext_instance,
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
  _Char___init__impl__6a9atx2gndcvjvc5pke as _Char___init__impl__6a9atx,
  replaceqbix900hl8kl as replace_0,
  getStringHashCode26igk1bx568vk as getStringHashCode,
  charSequenceSubSequence1iwpdba8s3jc7 as charSequenceSubSequence,
  isCharSequence1ju9jr1w86plq as isCharSequence,
  trim11nh7r46at6sx as trim,
  toByte4i43936u611k as toByte,
  decodeToString1x4faah2liw2p as decodeToString,
  setOf45ia9pnfhe90 as setOf,
  charSequenceGet1vxk1y5n17t1z as charSequenceGet,
  Char__toInt_impl_vasixdnyockrdnmht5 as Char__toInt_impl_vasixd,
} from './kotlin-kotlin-stdlib.mjs';
import {
  Buffergs925ekssbch as Buffer,
  indexOf29nspdgx2e3ap as indexOf,
  IOException1wyutdmfe71nu as IOException,
  EOFExceptionh831u25jcq9n as EOFException,
  readByteString2hnsbql6t4ads as readByteString,
  readString3v6duspiz33tv as readString,
  readString2nvggcfaijfhd as readString_0,
  readByteArray1fhzfwi2j014k as readByteArray,
  writeString33ca4btrgctw7 as writeString,
  readByteArray1ri21h2rciakw as readByteArray_0,
} from './kotlinx-io-kotlinx-io-core.mjs';
import { atomic$ref$130aurmcwdfdf1 as atomic$ref$1 } from './kotlinx-atomicfu.mjs';
import {
  CancellableContinuationImpl1cx201opicavg as CancellableContinuationImpl,
  CoroutineScopefcb5f5dwqcas as CoroutineScope,
  launch1c91vkjzdi9sd as launch,
  startCoroutineCancellable18shtfwdieib as startCoroutineCancellable,
  get_job2zvlvce9o9a29 as get_job,
  Job13y4jkazwjho0 as Job,
  cancel1xim2hrvjmwpn as cancel,
  CopyableThrowable1mvc99jcyvivf as CopyableThrowable,
  Dispatchers_getInstance2p2r3ndn98nn as Dispatchers_getInstance,
} from './kotlinx-coroutines-core.mjs';
import { decodeToString2ede220pr5xir as decodeToString_0 } from './kotlinx-io-kotlinx-io-bytestring.mjs';
//region block: imports
//endregion
//region block: pre-declaration
class Companion {
  constructor() {
    Companion_instance_0 = this;
    this.c26_1 = new Closed(null);
    var tmp = this;
    // Inline function 'kotlin.Companion.success' call
    tmp.d26_1 = _Result___init__impl__xyqfz8(Unit_instance);
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
    this.e26_1 = cause;
  }
  toString() {
    return 'Closed(cause=' + toString(this.e26_1) + ')';
  }
  hashCode() {
    return this.e26_1 == null ? 0 : hashCode(this.e26_1);
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof Closed))
      return false;
    if (!equals(this.e26_1, other.e26_1))
      return false;
    return true;
  }
}
class Task {}
function resume() {
  return this.g26().tc(Companion_getInstance().d26_1);
}
function resume_0(throwable) {
  var tmp = this.g26();
  var tmp_0;
  if (throwable == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.Companion.failure' call
    var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(throwable));
    tmp_0 = new Result(tmp$ret$0);
  }
  var tmp1_elvis_lhs = tmp_0;
  return tmp.tc(tmp1_elvis_lhs == null ? Companion_getInstance().d26_1 : tmp1_elvis_lhs.dt_1);
}
class Read {
  constructor(continuation) {
    this.k26_1 = continuation;
    this.l26_1 = null;
    if (get_DEVELOPMENT_MODE()) {
      var tmp = this;
      // Inline function 'kotlin.also' call
      var this_0 = newThrowable('ReadTask 0x' + toString_0(hashCode(this.k26_1), 16));
      stackTraceToString(this_0);
      tmp.l26_1 = this_0;
    }
  }
  g26() {
    return this.k26_1;
  }
  f26() {
    return this.l26_1;
  }
  h26() {
    return 'read';
  }
}
class Write {
  constructor(continuation) {
    this.m26_1 = continuation;
    this.n26_1 = null;
    if (get_DEVELOPMENT_MODE()) {
      var tmp = this;
      // Inline function 'kotlin.also' call
      var this_0 = newThrowable('WriteTask 0x' + toString_0(hashCode(this.m26_1), 16));
      stackTraceToString(this_0);
      tmp.n26_1 = this_0;
    }
  }
  g26() {
    return this.m26_1;
  }
  f26() {
    return this.n26_1;
  }
  h26() {
    return 'write';
  }
}
class ByteReadChannel {}
function awaitContent$default(min, $completion, $super) {
  min = min === VOID ? 1 : min;
  return $super === VOID ? this.p27(min, $completion) : $super.p27.call(this, min, $completion);
}
class ByteWriteChannel {}
function get_autoFlush() {
  return false;
}
class ByteChannel {
  constructor(autoFlush) {
    autoFlush = autoFlush === VOID ? false : autoFlush;
    this.o26_1 = autoFlush;
    this.p26_1 = new Buffer();
    this.q26_1 = 0;
    this.r26_1 = new Object();
    this.s26_1 = atomic$ref$1(Empty_instance);
    this.t26_1 = new Buffer();
    this.u26_1 = new Buffer();
    this.v26_1 = atomic$ref$1(null);
  }
  g27() {
    return this.o26_1;
  }
  h27() {
    var tmp0_safe_receiver = this.v26_1.kotlinx$atomicfu$value;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.j27(ClosedReadChannelException$_init_$ref_ix0089());
    }
    if (this.t26_1.y1i()) {
      moveFlushToReadBuffer(this);
    }
    return this.t26_1;
  }
  k27() {
    if (this.l27()) {
      var tmp0_safe_receiver = this.v26_1.kotlinx$atomicfu$value;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        tmp = tmp0_safe_receiver.j27(ClosedWriteChannelException$_init_$ref_ef15ty());
      }
      if (tmp == null)
        throw ClosedWriteChannelException.f27();
    }
    return this.u26_1;
  }
  m27() {
    var tmp0_safe_receiver = this.v26_1.kotlinx$atomicfu$value;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n27();
  }
  l27() {
    return !(this.v26_1.kotlinx$atomicfu$value == null);
  }
  o27() {
    return !(this.m27() == null) || (this.l27() && this.q26_1 === 0 && this.t26_1.y1i());
  }
  *p27(min, $completion) {
    rethrowCloseCauseIfNeeded(this);
    if (this.t26_1.k2() >= fromInt(min))
      return true;
    // Inline function 'io.ktor.utils.io.ByteChannel.sleepWhile' call
    var this_0 = this;
    $l$loop: while (add(numberToLong(this.q26_1), this.t26_1.k2()) < fromInt(min) && this.v26_1.kotlinx$atomicfu$value == null) {
      // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine' call
      // Inline function 'kotlin.js.suspendCoroutineUninterceptedOrReturnJS' call
      (yield () => {
        var uCont = $completion;
        var cancellable = new CancellableContinuationImpl(intercepted(uCont), 1);
        cancellable.l1r();
        var tmp0 = this_0;
        var tmp2 = new Read(cancellable);
        $l$block_0: {
          // Inline function 'io.ktor.utils.io.ByteChannel.trySuspend' call
          var previous = tmp0.s26_1.kotlinx$atomicfu$value;
          if (!(previous instanceof Closed)) {
            if (!tmp0.s26_1.atomicfu$compareAndSet(previous, tmp2)) {
              tmp2.i26();
              break $l$block_0;
            }
          }
          if (previous instanceof Read) {
            previous.j26(ConcurrentIOException.u27(tmp2.h26(), previous.f26()));
          } else {
            if (isInterface(previous, Task)) {
              previous.i26();
            } else {
              if (previous instanceof Closed) {
                tmp2.j26(previous.e26_1);
                break $l$block_0;
              } else {
                if (!equals(previous, Empty_instance)) {
                  noWhenBranchMatchedException();
                }
              }
            }
          }
          if (!(add(numberToLong(this.q26_1), this.t26_1.k2()) < fromInt(min) && this.v26_1.kotlinx$atomicfu$value == null)) {
            // Inline function 'io.ktor.utils.io.ByteChannel.resumeSlot' call
            var current = tmp0.s26_1.kotlinx$atomicfu$value;
            var tmp;
            if (current instanceof Read) {
              tmp = tmp0.s26_1.atomicfu$compareAndSet(current, Empty_instance);
            } else {
              tmp = false;
            }
            if (tmp) {
              current.i26();
            }
          }
        }
        return cancellable.w1o();
      });
    }
    if (this.t26_1.k2() < 1048576n) {
      moveFlushToReadBuffer(this);
    }
    return this.t26_1.k2() >= fromInt(min);
  }
  *w27($completion) {
    rethrowCloseCauseIfNeeded(this);
    this.x27();
    if (this.q26_1 < 1048576)
      return Unit_instance;
    // Inline function 'io.ktor.utils.io.ByteChannel.sleepWhile' call
    var this_0 = this;
    $l$loop: while (this.q26_1 >= 1048576 && this.v26_1.kotlinx$atomicfu$value == null) {
      // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine' call
      // Inline function 'kotlin.js.suspendCoroutineUninterceptedOrReturnJS' call
      (yield () => {
        var uCont = $completion;
        var cancellable = new CancellableContinuationImpl(intercepted(uCont), 1);
        cancellable.l1r();
        var tmp0 = this_0;
        var tmp2 = new Write(cancellable);
        $l$block_0: {
          // Inline function 'io.ktor.utils.io.ByteChannel.trySuspend' call
          var previous = tmp0.s26_1.kotlinx$atomicfu$value;
          if (!(previous instanceof Closed)) {
            if (!tmp0.s26_1.atomicfu$compareAndSet(previous, tmp2)) {
              tmp2.i26();
              break $l$block_0;
            }
          }
          if (previous instanceof Write) {
            previous.j26(ConcurrentIOException.u27(tmp2.h26(), previous.f26()));
          } else {
            if (isInterface(previous, Task)) {
              previous.i26();
            } else {
              if (previous instanceof Closed) {
                tmp2.j26(previous.e26_1);
                break $l$block_0;
              } else {
                if (!equals(previous, Empty_instance)) {
                  noWhenBranchMatchedException();
                }
              }
            }
          }
          if (!(this.q26_1 >= 1048576 && this.v26_1.kotlinx$atomicfu$value == null)) {
            // Inline function 'io.ktor.utils.io.ByteChannel.resumeSlot' call
            var current = tmp0.s26_1.kotlinx$atomicfu$value;
            var tmp;
            if (current instanceof Write) {
              tmp = tmp0.s26_1.atomicfu$compareAndSet(current, Empty_instance);
            } else {
              tmp = false;
            }
            if (tmp) {
              current.i26();
            }
          }
        }
        return cancellable.w1o();
      });
    }
    return Unit_instance;
  }
  x27() {
    if (this.u26_1.y1i())
      return Unit_instance;
    // Inline function 'io.ktor.utils.io.locks.synchronized' call
    this.r26_1;
    var count = convertToInt(this.u26_1.k2());
    this.p26_1.q1k(this.u26_1);
    this.q26_1 = this.q26_1 + count | 0;
    // Inline function 'io.ktor.utils.io.ByteChannel.resumeSlot' call
    var current = this.s26_1.kotlinx$atomicfu$value;
    var tmp;
    if (current instanceof Read) {
      tmp = this.s26_1.atomicfu$compareAndSet(current, Empty_instance);
    } else {
      tmp = false;
    }
    if (tmp) {
      current.i26();
    }
  }
  z6() {
    this.x27();
    if (!this.v26_1.atomicfu$compareAndSet(null, get_CLOSED()))
      return Unit_instance;
    closeSlot(this, null);
  }
  *y27($completion) {
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      yield* this.w27($completion);
      // Inline function 'kotlin.Companion.success' call
      tmp = _Result___init__impl__xyqfz8(Unit_instance);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        // Inline function 'kotlin.Companion.failure' call
        tmp_0 = _Result___init__impl__xyqfz8(createFailure(e));
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    if (!this.v26_1.atomicfu$compareAndSet(null, get_CLOSED()))
      return Unit_instance;
    closeSlot(this, null);
    return Unit_instance;
  }
  z27(cause) {
    if (!(this.v26_1.kotlinx$atomicfu$value == null))
      return Unit_instance;
    var closedToken = new CloseToken(cause);
    this.v26_1.atomicfu$compareAndSet(null, closedToken);
    var wrappedCause = closedToken.n27();
    closeSlot(this, wrappedCause);
  }
  toString() {
    return 'ByteChannel[' + hashCode(this) + ']';
  }
}
class ConcurrentIOException extends IllegalStateException {
  static u27(taskName, cause) {
    cause = cause === VOID ? null : cause;
    var $this = this.q('Concurrent ' + taskName + ' attempts', cause);
    captureStack($this, $this.t27_1);
    return $this;
  }
}
class ByteChannelScanner {
  constructor(channel, matchString, writeChannel, limit) {
    limit = limit === VOID ? 9223372036854775807n : limit;
    this.a28_1 = channel;
    this.b28_1 = matchString;
    this.c28_1 = writeChannel;
    this.d28_1 = limit;
    // Inline function 'kotlin.require' call
    if (!(this.b28_1.k2() > 0)) {
      var message = 'Empty match string not permitted for scanning';
      throw IllegalArgumentException.h2(toString_1(message));
    }
    this.e28_1 = this.a28_1.h27();
    this.f28_1 = buildPartialMatchTable(this);
    this.g28_1 = new Buffer();
    this.h28_1 = 0n;
    this.i28_1 = 0;
  }
  *j28(ignoreMissing, $completion) {
    this.h28_1 = 0n;
    while (!this.e28_1.y1i() || (yield* this.a28_1.v27(VOID, $completion))) {
      yield* /*#__NOINLINE__*/advanceToNextPotentialMatch(this, $completion);
      if (yield* /*#__NOINLINE__*/checkFullMatch(this, $completion)) {
        return this.h28_1;
      }
    }
    if (!ignoreMissing) {
      throw IOException.b1m('Expected "' + toSingleLineString(this, this.b28_1) + '" but encountered end of input');
    }
    this.h28_1 = add(this.h28_1, this.g28_1.b1k(this.c28_1.k27()));
    yield* this.c28_1.w27($completion);
    return this.h28_1;
  }
}
class ByteReadChannel$Companion$Empty$1 {
  constructor() {
    this.k28_1 = null;
    this.l28_1 = new Buffer();
  }
  m27() {
    return this.k28_1;
  }
  o27() {
    return true;
  }
  h27() {
    return this.l28_1;
  }
  *p27(min, $completion) {
    return false;
  }
  z27(cause) {
  }
}
class Companion_0 {
  constructor() {
    Companion_instance_1 = this;
    var tmp = this;
    tmp.m28_1 = new ByteReadChannel$Companion$Empty$1();
  }
}
class WriterJob {
  constructor(channel, job) {
    this.s28_1 = channel;
    this.t28_1 = job;
  }
  t1s() {
    return this.t28_1;
  }
}
class WriterScope {
  constructor(channel, coroutineContext) {
    this.u28_1 = channel;
    this.v28_1 = coroutineContext;
  }
  r1m() {
    return this.v28_1;
  }
}
class NO_CALLBACK$1 {
  constructor() {
    this.w28_1 = EmptyCoroutineContext_instance;
  }
  rc() {
    return this.w28_1;
  }
  sc(result) {
    return Unit_instance;
  }
  tc(result) {
    return this.sc(result);
  }
}
class ByteWriteChannel$flushAndClose$ref {
  constructor(p0) {
    this.x28_1 = p0;
  }
  *y28($completion) {
    return yield* this.x28_1.y27($completion);
  }
  pd($completion) {
    return this.y28($completion);
  }
}
class writer$slambda {
  constructor($block, $channel) {
    this.z28_1 = $block;
    this.a29_1 = $channel;
  }
  *b29($this$launch, $completion) {
    var nested = Job(get_job($this$launch.r1m()));
    try {
      yield* this.z28_1(new WriterScope(this.a29_1, $this$launch.r1m().fm(nested)), $completion);
      nested.f1t();
      if (get_job($this$launch.r1m()).n1n()) {
        this.a29_1.z27(get_job($this$launch.r1m()).q1n());
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var cause = $p;
        cancel(nested, 'Exception thrown while writing to channel', cause);
        this.a29_1.z27(cause);
      } else {
        throw $p;
      }
    }
    finally {
      yield* nested.x1n($completion);
      // Inline function 'kotlin.runCatching' call
      var tmp;
      try {
        yield* this.a29_1.y27($completion);
        // Inline function 'kotlin.Companion.success' call
        tmp = _Result___init__impl__xyqfz8(Unit_instance);
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var e = $p;
          // Inline function 'kotlin.Companion.failure' call
          tmp_0 = _Result___init__impl__xyqfz8(createFailure(e));
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
    }
    return Unit_instance;
  }
  qd(p1, $completion) {
    return this.b29((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class CloseToken {
  constructor(origin) {
    this.i27_1 = origin;
  }
  g29(wrap) {
    var tmp0_subject = this.i27_1;
    var tmp;
    if (tmp0_subject == null) {
      tmp = null;
    } else {
      if (isInterface(tmp0_subject, CopyableThrowable)) {
        tmp = this.i27_1.q1t();
      } else {
        if (tmp0_subject instanceof CancellationException) {
          tmp = CancellationException.p(this.i27_1.message, this.i27_1);
        } else {
          tmp = wrap(this.i27_1);
        }
      }
    }
    return tmp;
  }
  n27(wrap, $super) {
    var tmp;
    if (wrap === VOID) {
      tmp = ClosedByteChannelException$_init_$ref_yjp351();
    } else {
      tmp = wrap;
    }
    wrap = tmp;
    return $super === VOID ? this.g29(wrap) : $super.g29.call(this, wrap);
  }
  j27(wrap) {
    var tmp0_safe_receiver = this.g29(wrap);
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
    this.h29_1 = delegate;
    this.i29_1 = new Buffer();
    this.j29_1 = 0n;
    this.k29_1 = 0n;
  }
  l29() {
    updateConsumed(this);
    return this.k29_1;
  }
  m27() {
    return this.h29_1.m27();
  }
  o27() {
    return this.i29_1.y1i() && this.h29_1.o27();
  }
  h27() {
    transferFromDelegate(this);
    return this.i29_1;
  }
  *p27(min, $completion) {
    if (this.h27().k2() >= fromInt(min)) {
      return true;
    }
    if (yield* this.h29_1.p27(min, $completion)) {
      transferFromDelegate(this);
      return true;
    }
    return false;
  }
  z27(cause) {
    this.h29_1.z27(cause);
    this.i29_1.z6();
  }
}
class ClosedByteChannelException extends IOException {
  static f29(cause) {
    cause = cause === VOID ? null : cause;
    var $this = this.c1m(cause == null ? null : cause.message, cause);
    captureStack($this, $this.e29_1);
    return $this;
  }
}
class ClosedReadChannelException extends ClosedByteChannelException {
  static a27(cause) {
    cause = cause === VOID ? null : cause;
    var $this = this.f29(cause);
    captureStack($this, $this.z26_1);
    return $this;
  }
}
class ClosedWriteChannelException extends ClosedByteChannelException {
  static f27(cause) {
    cause = cause === VOID ? null : cause;
    var $this = this.f29(cause);
    captureStack($this, $this.e27_1);
    return $this;
  }
}
class LineEnding extends Enum {}
class Companion_1 {
  constructor() {
    Companion_instance_2 = this;
    this.m29_1 = _LineEndingMode___init__impl__jo5bul(1);
    this.n29_1 = _LineEndingMode___init__impl__jo5bul(2);
    this.o29_1 = _LineEndingMode___init__impl__jo5bul(4);
    this.p29_1 = _LineEndingMode___init__impl__jo5bul(7);
    this.q29_1 = listOf([new LineEndingMode(this.m29_1), new LineEndingMode(this.n29_1), new LineEndingMode(this.o29_1)]);
  }
}
class LineEndingMode {
  constructor(mode) {
    Companion_getInstance_1();
    this.r29_1 = mode;
  }
  toString() {
    return LineEndingMode__toString_impl_j4h76r(this.r29_1);
  }
  hashCode() {
    return LineEndingMode__hashCode_impl_2mopm4(this.r29_1);
  }
  equals(other) {
    return LineEndingMode__equals_impl_qyr4nk(this.r29_1, other);
  }
}
class SourceByteReadChannel {
  constructor(source) {
    this.s29_1 = source;
    this.t29_1 = null;
  }
  m27() {
    var tmp0_safe_receiver = this.t29_1;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n27();
  }
  o27() {
    return this.s29_1.y1i();
  }
  h27() {
    var tmp0_safe_receiver = this.m27();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
    return this.s29_1.x1i();
  }
  *p27(min, $completion) {
    var tmp0_safe_receiver = this.m27();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
    return this.s29_1.a1j(fromInt(min));
  }
  z27(cause) {
    if (!(this.t29_1 == null))
      return Unit_instance;
    this.s29_1.z6();
    var tmp = this;
    var tmp1_elvis_lhs = cause == null ? null : cause.message;
    tmp.t29_1 = new CloseToken(IOException.c1m(tmp1_elvis_lhs == null ? 'Channel was cancelled' : tmp1_elvis_lhs, cause));
  }
}
class MalformedInputException extends IOException {
  static x29(message) {
    var $this = this.b1m(message);
    captureStack($this, $this.w29_1);
    return $this;
  }
}
class TooLongLineException extends MalformedInputException {
  static r28(message) {
    var $this = this.x29(message);
    captureStack($this, $this.q28_1);
    return $this;
  }
}
class ObjectPool {}
function close() {
  this.e1q();
}
class DefaultPool {
  constructor(capacity) {
    this.h2a_1 = capacity;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.h2a_1;
    tmp.i2a_1 = Array(size);
    this.j2a_1 = 0;
  }
  k2a(instance) {
  }
  l2a(instance) {
    return instance;
  }
  m2a(instance) {
  }
  n2a() {
    if (this.j2a_1 === 0)
      return this.g2a();
    this.j2a_1 = this.j2a_1 - 1 | 0;
    var idx = this.j2a_1;
    var tmp = this.i2a_1[idx];
    var instance = !(tmp == null) ? tmp : THROW_CCE();
    this.i2a_1[idx] = null;
    return this.l2a(instance);
  }
  o2a(instance) {
    this.m2a(instance);
    if (this.j2a_1 === this.h2a_1) {
      this.k2a(instance);
    } else {
      var _unary__edvuaz = this.j2a_1;
      this.j2a_1 = _unary__edvuaz + 1 | 0;
      this.i2a_1[_unary__edvuaz] = instance;
    }
  }
  e1q() {
    var inductionVariable = 0;
    var last = this.j2a_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.i2a_1[i];
        var instance = !(tmp == null) ? tmp : THROW_CCE();
        this.i2a_1[i] = null;
        this.k2a(instance);
      }
       while (inductionVariable < last);
    this.j2a_1 = 0;
  }
}
class ByteArrayPool$1 extends DefaultPool {
  constructor() {
    super(128);
  }
  g2a() {
    return new Int8Array(4096);
  }
}
class NoPoolImpl {
  o2a(instance) {
    return Unit_instance;
  }
  e1q() {
    return Unit_instance;
  }
}
class Companion_2 {
  p2a(name) {
    switch (name) {
      case 'UTF-8':
      case 'utf-8':
      case 'UTF8':
      case 'utf8':
        return Charsets_getInstance().y29_1;
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
      return Charsets_getInstance().z29_1;
    }
    throw IllegalArgumentException.h2('Charset ' + name + ' is not supported');
  }
}
class Charset {
  constructor(_name) {
    this.a2a_1 = _name;
  }
  equals(other) {
    if (this === other)
      return true;
    if (other == null || !(this.constructor == other.constructor))
      return false;
    if (!(other instanceof Charset))
      THROW_CCE();
    return this.a2a_1 === other.a2a_1;
  }
  hashCode() {
    return getStringHashCode(this.a2a_1);
  }
  toString() {
    return this.a2a_1;
  }
}
class Charsets {
  constructor() {
    Charsets_instance = this;
    this.y29_1 = new CharsetImpl('UTF-8');
    this.z29_1 = new CharsetImpl('ISO-8859-1');
  }
}
class CharsetDecoder {
  constructor(_charset) {
    this.q2a_1 = _charset;
  }
}
class CharsetEncoder {
  constructor(_charset) {
    this.r2a_1 = _charset;
  }
}
class CharsetImpl extends Charset {
  b2a() {
    return new CharsetEncoderImpl(this);
  }
  c2a() {
    return new CharsetDecoderImpl(this);
  }
}
class CharsetEncoderImpl extends CharsetEncoder {
  constructor(charset) {
    super(charset);
    this.v2a_1 = charset;
  }
  toString() {
    return 'CharsetEncoderImpl(charset=' + this.v2a_1.toString() + ')';
  }
  hashCode() {
    return this.v2a_1.hashCode();
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof CharsetEncoderImpl))
      return false;
    if (!this.v2a_1.equals(other.v2a_1))
      return false;
    return true;
  }
}
class CharsetDecoderImpl extends CharsetDecoder {
  constructor(charset) {
    super(charset);
    this.x2a_1 = charset;
  }
  toString() {
    return 'CharsetDecoderImpl(charset=' + this.x2a_1.toString() + ')';
  }
  hashCode() {
    return this.x2a_1.hashCode();
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof CharsetDecoderImpl))
      return false;
    if (!this.x2a_1.equals(other.x2a_1))
      return false;
    return true;
  }
}
class toKtor$1 {
  constructor($this_toKtor) {
    this.y2a_1 = $this_toKtor;
  }
  s2a(buffer) {
    return this.y2a_1.decode(buffer);
  }
}
class TextDecoderFallback {
  constructor(encoding, fatal) {
    this.z2a_1 = fatal;
    // Inline function 'kotlin.text.trim' call
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var requestedEncoding = toString_1(trim(isCharSequence(encoding) ? encoding : THROW_CCE())).toLowerCase();
    // Inline function 'kotlin.check' call
    if (!get_ENCODING_ALIASES().t3(requestedEncoding)) {
      var message = encoding + ' is not supported.';
      throw IllegalStateException.o(toString_1(message));
    }
  }
  s2a(buffer) {
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
          if (!!this.z2a_1) {
            var message = 'Invalid character: ' + point;
            throw IllegalStateException.o(toString_1(message));
          }
          writeFully_0(builder, get_REPLACEMENT());
          continue $l$loop;
        }
        if (point > 255) {
          builder.r1k(toByte(point >> 8));
        }
        builder.r1k(toByte(point & 255));
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
function moveFlushToReadBuffer($this) {
  // Inline function 'io.ktor.utils.io.locks.synchronized' call
  $this.r26_1;
  $this.p26_1.b1k($this.t26_1);
  $this.q26_1 = 0;
  // Inline function 'io.ktor.utils.io.ByteChannel.resumeSlot' call
  var current = $this.s26_1.kotlinx$atomicfu$value;
  var tmp;
  if (current instanceof Write) {
    tmp = $this.s26_1.atomicfu$compareAndSet(current, Empty_instance);
  } else {
    tmp = false;
  }
  if (tmp) {
    current.i26();
  }
}
function closeSlot($this, cause) {
  var closeContinuation = !(cause == null) ? new Closed(cause) : Companion_getInstance().c26_1;
  var continuation = $this.s26_1.atomicfu$getAndSet(closeContinuation);
  if (isInterface(continuation, Task)) {
    continuation.j26(cause);
  }
}
function ClosedReadChannelException$_init_$ref_ix0089() {
  var l = (p0) => ClosedReadChannelException.a27(p0);
  l.callableName = '<init>';
  return l;
}
function ClosedWriteChannelException$_init_$ref_ef15ty() {
  var l = (p0) => ClosedWriteChannelException.f27(p0);
  l.callableName = '<init>';
  return l;
}
function ByteReadChannel_0(content, offset, length) {
  offset = offset === VOID ? 0 : offset;
  length = length === VOID ? content.length : length;
  // Inline function 'kotlin.also' call
  var this_0 = new Buffer();
  this_0.h1k(content, offset, offset + length | 0);
  var source = this_0;
  return ByteReadChannel_1(source);
}
function ByteReadChannel_1(source) {
  return new SourceByteReadChannel(source);
}
function buildPartialMatchTable($this) {
  var table = new Int32Array($this.b28_1.k2());
  var j = 0;
  var inductionVariable = 1;
  var last = $this.b28_1.k2();
  if (inductionVariable < last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      while (j > 0 && !($this.b28_1.j2(i) === $this.b28_1.j2(j))) {
        j = table[j - 1 | 0];
      }
      if ($this.b28_1.j2(i) === $this.b28_1.j2(j)) {
        j = j + 1 | 0;
      }
      table[i] = j;
    }
     while (inductionVariable < last);
  return table;
}
function *advanceToNextPotentialMatch($this, $completion) {
  while (!$this.e28_1.y1i() || (yield* $this.a28_1.v27(VOID, $completion))) {
    var nextMatch = indexOf($this.e28_1, $this.b28_1.j2(0));
    if (nextMatch === -1n) {
      var tmp = $this.e28_1;
      checkBounds($this, (tmp instanceof Buffer ? tmp : THROW_CCE()).k2());
      $this.h28_1 = add($this.h28_1, $this.e28_1.b1k($this.c28_1.k27()));
      yield* flushIfNeeded($this.c28_1, $completion);
    } else {
      checkBounds($this, nextMatch);
      var tmp_0 = $this;
      var tmp_1 = $this.h28_1;
      var tmp_2 = $this.c28_1.k27();
      tmp_0.h28_1 = add(tmp_1, $this.e28_1.y1j(tmp_2 instanceof Buffer ? tmp_2 : THROW_CCE(), nextMatch));
      yield* flushIfNeeded($this.c28_1, $completion);
      return Unit_instance;
    }
  }
  return Unit_instance;
}
function *checkFullMatch($this, $completion) {
  while (!$this.e28_1.y1i() || (yield* $this.a28_1.v27(VOID, $completion))) {
    var byte = $this.e28_1.b1j();
    if ($this.i28_1 > 0 && !(byte === $this.b28_1.j2($this.i28_1))) {
      var oldMatchIndex = $this.i28_1;
      while ($this.i28_1 > 0 && !(byte === $this.b28_1.j2($this.i28_1))) {
        $this.i28_1 = $this.f28_1[$this.i28_1 - 1 | 0];
      }
      var retained = fromInt(oldMatchIndex - $this.i28_1 | 0);
      checkBounds($this, retained);
      var tmp = $this;
      var tmp_0 = $this.h28_1;
      var tmp_1 = $this.c28_1.k27();
      tmp.h28_1 = add(tmp_0, $this.g28_1.y1j(tmp_1 instanceof Buffer ? tmp_1 : THROW_CCE(), retained));
      if ($this.i28_1 === 0 && !(byte === $this.b28_1.j2($this.i28_1))) {
        yield* writeByte($this.c28_1, byte, $completion);
        var _unary__edvuaz = $this.h28_1;
        $this.h28_1 = add(_unary__edvuaz, get_ONE());
        return false;
      }
    }
    $this.i28_1 = $this.i28_1 + 1 | 0;
    if ($this.i28_1 === $this.b28_1.k2()) {
      return true;
    }
    $this.g28_1.r1k(byte);
  }
  return false;
}
function checkBounds($this, extra) {
  if (add($this.h28_1, extra) > $this.d28_1) {
    throw IOException.b1m('Limit of ' + $this.d28_1.toString() + ' bytes exceeded ' + ('while searching for "' + toSingleLineString($this, $this.b28_1) + '"'));
  }
}
function toSingleLineString($this, $receiver) {
  return replace(decodeToString_0($receiver), '\n', '\\n');
}
var Companion_instance_1;
function Companion_getInstance_0() {
  if (Companion_instance_1 === VOID)
    new Companion_0();
  return Companion_instance_1;
}
function cancel_0(_this__u8e3s4) {
  _this__u8e3s4.z27(IOException.b1m('Channel was cancelled'));
}
function *readRemaining(_this__u8e3s4, $completion) {
  var result = BytePacketBuilder();
  while (!_this__u8e3s4.o27()) {
    result.q1k(_this__u8e3s4.h27());
    yield* _this__u8e3s4.v27(VOID, $completion);
  }
  rethrowCloseCauseIfNeeded_0(_this__u8e3s4);
  return result.x1i();
}
function *toByteArray(_this__u8e3s4, $completion) {
  return readBytes(yield* readBuffer(_this__u8e3s4, $completion));
}
function *copyTo(_this__u8e3s4, channel, limit, $completion) {
  var remaining = limit;
  try {
    while (!_this__u8e3s4.o27() && remaining > 0n) {
      if (_this__u8e3s4.h27().y1i()) {
        yield* _this__u8e3s4.v27(VOID, $completion);
      }
      var tmp0 = remaining;
      // Inline function 'kotlin.comparisons.minOf' call
      var b = get_remaining(_this__u8e3s4.h27());
      var count = tmp0 <= b ? tmp0 : b;
      _this__u8e3s4.h27().a1k(channel.k27(), count);
      remaining = subtract(remaining, count);
      yield* channel.w27($completion);
    }
  } catch ($p) {
    if ($p instanceof Error) {
      var cause = $p;
      _this__u8e3s4.z27(cause);
      close_0(channel, cause);
      throw cause;
    } else {
      throw $p;
    }
  }
  finally {
    yield* channel.w27($completion);
  }
  return subtract(limit, remaining);
}
function *discard(_this__u8e3s4, max, $completion) {
  max = max === VOID ? 9223372036854775807n : max;
  var remaining = max;
  while (remaining > 0n && !_this__u8e3s4.o27()) {
    if (get_availableForRead(_this__u8e3s4) === 0) {
      yield* _this__u8e3s4.v27(VOID, $completion);
    }
    var tmp0 = remaining;
    // Inline function 'kotlin.comparisons.minOf' call
    var b = get_remaining(_this__u8e3s4.h27());
    var count = tmp0 <= b ? tmp0 : b;
    discard_0(_this__u8e3s4.h27(), count);
    remaining = subtract(remaining, count);
  }
  return subtract(max, remaining);
}
function *copyTo_0(_this__u8e3s4, channel, $completion) {
  var result = 0n;
  try {
    while (!_this__u8e3s4.o27()) {
      result = add(result, _this__u8e3s4.h27().b1k(channel.k27()));
      yield* channel.w27($completion);
      yield* _this__u8e3s4.v27(VOID, $completion);
    }
  } catch ($p) {
    if ($p instanceof Error) {
      var cause = $p;
      _this__u8e3s4.z27(cause);
      close_0(channel, cause);
      throw cause;
    } else {
      throw $p;
    }
  }
  finally {
    yield* channel.w27($completion);
  }
  return result;
}
function *readAvailable(_this__u8e3s4, buffer, offset, length, $completion) {
  offset = offset === VOID ? 0 : offset;
  length = length === VOID ? buffer.length - offset | 0 : length;
  if (_this__u8e3s4.o27())
    return -1;
  if (_this__u8e3s4.h27().y1i()) {
    yield* _this__u8e3s4.v27(VOID, $completion);
  }
  if (_this__u8e3s4.o27())
    return -1;
  return readAvailable_0(_this__u8e3s4.h27(), buffer, offset, length);
}
function *skipIfFound(_this__u8e3s4, byteString, $completion) {
  if (equals(yield* peek(_this__u8e3s4, byteString.k2(), $completion), byteString)) {
    yield* /*#__NOINLINE__*/discard(_this__u8e3s4, fromInt(byteString.k2()), $completion);
    return true;
  }
  return false;
}
function *readPacket(_this__u8e3s4, packet, $completion) {
  var result = new Buffer();
  $l$loop: while (result.k2() < fromInt(packet)) {
    if (_this__u8e3s4.h27().y1i()) {
      yield* _this__u8e3s4.v27(VOID, $completion);
    }
    if (_this__u8e3s4.o27())
      break $l$loop;
    if (get_remaining(_this__u8e3s4.h27()) > subtract(numberToLong(packet), result.k2())) {
      _this__u8e3s4.h27().a1k(result, subtract(numberToLong(packet), result.k2()));
    } else {
      _this__u8e3s4.h27().b1k(result);
    }
  }
  if (result.k2() < fromInt(packet)) {
    throw EOFException.w1i('Not enough data available, required ' + packet + ' bytes but only ' + result.k2().toString() + ' available');
  }
  return result;
}
function *readUntil(_this__u8e3s4, matchString, writeChannel, limit, ignoreMissing, $completion) {
  limit = limit === VOID ? 9223372036854775807n : limit;
  ignoreMissing = ignoreMissing === VOID ? false : ignoreMissing;
  return yield* (new ByteChannelScanner(_this__u8e3s4, matchString, writeChannel, limit)).j28(ignoreMissing, $completion);
}
function *readLineStrictTo(_this__u8e3s4, out, limit, lineEnding, $completion) {
  limit = limit === VOID ? 9223372036854775807n : limit;
  lineEnding = lineEnding === VOID ? LineEnding_Default_getInstance() : lineEnding;
  // Inline function 'kotlin.require' call
  if (!(limit >= 0n)) {
    var message = 'Limit (' + limit.toString() + ') should be non-negative';
    throw IllegalArgumentException.h2(toString_1(message));
  }
  return yield* internalReadLineTo(_this__u8e3s4, out, limit, lineEnding.equals(LineEnding_Lenient_getInstance()), true, $completion);
}
function rethrowCloseCauseIfNeeded(_this__u8e3s4) {
  var tmp0_safe_receiver = _this__u8e3s4.m27();
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    throw tmp0_safe_receiver;
  }
}
function rethrowCloseCauseIfNeeded_0(_this__u8e3s4) {
  var tmp0_safe_receiver = _this__u8e3s4.m27();
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    throw tmp0_safe_receiver;
  }
}
function *readBuffer(_this__u8e3s4, $completion) {
  var result = new Buffer();
  while (!_this__u8e3s4.o27()) {
    result.q1k(_this__u8e3s4.h27());
    yield* _this__u8e3s4.v27(VOID, $completion);
  }
  var tmp0_safe_receiver = _this__u8e3s4.m27();
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    throw tmp0_safe_receiver;
  }
  return result;
}
function get_availableForRead(_this__u8e3s4) {
  return convertToInt(_this__u8e3s4.h27().x1i().k2());
}
function *peek(_this__u8e3s4, count, $completion) {
  if (_this__u8e3s4.o27())
    return null;
  if (!(yield* _this__u8e3s4.p27(count, $completion)))
    return null;
  return readByteString(_this__u8e3s4.h27().c1k(), count);
}
function *internalReadLineTo(_this__u8e3s4, out, limit, lenientLineEnding, throwOnIncompleteLine, $completion) {
  var readBuffer = _this__u8e3s4.h27();
  if (readBuffer.y1i()) {
    yield* _this__u8e3s4.v27(VOID, $completion);
  }
  if (_this__u8e3s4.o27())
    return -1n;
  var consumed = {_v: 0n};
  $l$loop: while (consumed._v < limit && !_this__u8e3s4.o27()) {
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
      var tmp;
      var tmp_0 = readBuffer.x1i();
      // Inline function 'kotlin.Long.minus' call
      var tmp$ret$0 = subtract(lfIndex, fromInt(1));
      if (tmp_0.t1j(tmp$ret$0) === 13) {
        tmp = 1n;
      } else {
        tmp = 0n;
      }
      var isCrlf = tmp;
      internalReadLineTo$transferString(readBuffer, out, consumed, subtract(lfIndex, isCrlf));
      discard_0(readBuffer, add(numberToLong(1), isCrlf));
      return consumed._v;
    }
    // Inline function 'kotlin.comparisons.minOf' call
    var b = get_remaining(readBuffer);
    var count = limitLeft <= b ? limitLeft : b;
    var tmp_1 = readBuffer.x1i();
    // Inline function 'kotlin.Long.minus' call
    var tmp$ret$2 = subtract(count, fromInt(1));
    if (tmp_1.t1j(tmp$ret$2) === 13) {
      // Inline function 'kotlin.Long.minus' call
      var tmp$ret$3 = subtract(count, fromInt(1));
      internalReadLineTo$transferString(readBuffer, out, consumed, tmp$ret$3);
      if (yield* internalReadLineTo$discardCrlfOrCr(readBuffer, _this__u8e3s4, lenientLineEnding, $completion))
        return consumed._v;
      internalReadLineTo$transferString(readBuffer, out, consumed, 1n);
    } else {
      internalReadLineTo$transferString(readBuffer, out, consumed, count);
    }
    if (consumed._v < limit && get_remaining(readBuffer) === 0n && !(yield* _this__u8e3s4.v27(VOID, $completion)))
      break $l$loop;
  }
  if (consumed._v === 0n && _this__u8e3s4.o27())
    return -1n;
  // Inline function 'kotlin.check' call
  if (!(consumed._v <= limit)) {
    var message = 'Consumed bytes exceed the limit: ' + consumed._v.toString() + ' > ' + limit.toString() + ". It's an implementation bug, please report it.";
    throw IllegalStateException.o(toString_1(message));
  }
  if (consumed._v === limit) {
    if (limit === 9223372036854775807n)
      throw TooLongLineException.r28('Max line length exceeded');
    if (get_remaining(readBuffer) === 0n && !(yield* _this__u8e3s4.v27(VOID, $completion))) {
      throwEndOfStreamException(consumed._v);
    }
    var tmp0_subject = readBuffer.x1i().t1j(0n);
    if (tmp0_subject === 10) {
      discard_0(readBuffer, 1n);
      return consumed._v;
    } else if (tmp0_subject === 13)
      if (yield* internalReadLineTo$discardCrlfOrCr(readBuffer, _this__u8e3s4, lenientLineEnding, $completion))
        return consumed._v;
    throwTooLongLineException(limit);
  }
  if (throwOnIncompleteLine) {
    throwEndOfStreamException(consumed._v);
  }
  return consumed._v;
}
function throwEndOfStreamException(consumed) {
  throw EOFException.w1i('Unexpected end of stream after reading ' + consumed.toString() + ' characters');
}
function throwTooLongLineException(limit) {
  throw TooLongLineException.r28('Line exceeds limit of ' + limit.toString() + ' characters');
}
function rethrowCloseCauseIfNeeded_1(_this__u8e3s4) {
  var tmp0_safe_receiver = _this__u8e3s4.m27();
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
    $out.i2(string);
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
function *internalReadLineTo$discardCrlfOrCr(_this__u8e3s4, $this_internalReadLineTo, $lenientLineEnding, $completion) {
  if ((get_remaining(_this__u8e3s4) >= 2n || (yield* $this_internalReadLineTo.p27(2, $completion))) && _this__u8e3s4.x1i().t1j(1n) === 10) {
    discard_0(_this__u8e3s4, 2n);
    return true;
  }
  if ($lenientLineEnding) {
    discard_0(_this__u8e3s4, 1n);
    return true;
  }
  return false;
}
function *flushIfNeeded(_this__u8e3s4, $completion) {
  rethrowCloseCauseIfNeeded_1(_this__u8e3s4);
  if (_this__u8e3s4.g27() || get_size(_this__u8e3s4.k27()) >= 1048576)
    yield* _this__u8e3s4.w27($completion);
  return Unit_instance;
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
  return _this__u8e3s4.t1s().t1n(block);
}
function *writeFully(_this__u8e3s4, value, startIndex, endIndex, $completion) {
  startIndex = startIndex === VOID ? 0 : startIndex;
  endIndex = endIndex === VOID ? value.length : endIndex;
  _this__u8e3s4.k27().h1k(value, startIndex, endIndex);
  yield* flushIfNeeded(_this__u8e3s4, $completion);
  return Unit_instance;
}
function close_0(_this__u8e3s4, cause) {
  _init_properties_ByteWriteChannelOperations_kt__i7slrs();
  if (cause == null) {
    fireAndForget(ByteWriteChannel$flushAndClose$ref_0(_this__u8e3s4));
  } else {
    _this__u8e3s4.z27(cause);
  }
}
function *writePacket(_this__u8e3s4, source, $completion) {
  while (!source.y1i()) {
    _this__u8e3s4.k27().l1k(source, get_remaining(source));
    yield* flushIfNeeded(_this__u8e3s4, $completion);
  }
  return Unit_instance;
}
function writer_0(_this__u8e3s4, coroutineContext, channel, block) {
  coroutineContext = coroutineContext === VOID ? EmptyCoroutineContext_instance : coroutineContext;
  _init_properties_ByteWriteChannelOperations_kt__i7slrs();
  // Inline function 'kotlin.apply' call
  var this_0 = launch(_this__u8e3s4, coroutineContext, VOID, writer$slambda_0(block, channel));
  this_0.t1n(writer$lambda(channel));
  var job = this_0;
  return new WriterJob(channel, job);
}
function fireAndForget(_this__u8e3s4) {
  _init_properties_ByteWriteChannelOperations_kt__i7slrs();
  startCoroutineCancellable(_this__u8e3s4, get_NO_CALLBACK());
}
function *writeByte(_this__u8e3s4, value, $completion) {
  _this__u8e3s4.k27().r1k(value);
  yield* flushIfNeeded(_this__u8e3s4, $completion);
  return Unit_instance;
}
function ByteWriteChannel$flushAndClose$ref_0(p0) {
  var i = new ByteWriteChannel$flushAndClose$ref(p0);
  var l = ($completion) => i.y28($completion);
  l.callableName = 'flushAndClose';
  l.$arity = 0;
  return l;
}
function writer$slambda_0($block, $channel) {
  var i = new writer$slambda($block, $channel);
  var l = ($this$launch, $completion) => i.b29($this$launch, $completion);
  l.$arity = 1;
  return l;
}
function writer$lambda($channel) {
  return (it) => {
    var tmp;
    if (!(it == null) && !$channel.l27()) {
      $channel.z27(it);
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
  var l = (p0) => ClosedByteChannelException.f29(p0);
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
function transferFromDelegate($this) {
  updateConsumed($this);
  var appended = $this.i29_1.q1k($this.h29_1.h27());
  $this.j29_1 = add($this.j29_1, appended);
}
function updateConsumed($this) {
  $this.k29_1 = add($this.k29_1, subtract($this.j29_1, $this.i29_1.k2()));
  $this.j29_1 = $this.i29_1.k2();
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
  if ($this === Companion_getInstance_1().m29_1) {
    tmp = 'CR';
  } else if ($this === Companion_getInstance_1().n29_1) {
    tmp = 'LF';
  } else if ($this === Companion_getInstance_1().o29_1) {
    tmp = 'CRLF';
  } else {
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = Companion_getInstance_1().q29_1;
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList.n2();
    var _iterator__ex2g4s = tmp0.l1();
    while (_iterator__ex2g4s.m1()) {
      var element = _iterator__ex2g4s.n1();
      var it = element.r29_1;
      if (LineEndingMode__contains_impl_q5pr68($this, it)) {
        destination.z1(element);
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
  if (!($this === other.r29_1))
    return false;
  return true;
}
function decode(_this__u8e3s4, input, max) {
  max = max === VOID ? 2147483647 : max;
  var tmp0 = fromInt(max);
  // Inline function 'kotlin.comparisons.minOf' call
  var b = input.x1i().k2();
  var tmp$ret$0 = tmp0 <= b ? tmp0 : b;
  // Inline function 'kotlin.text.buildString' call
  var capacity = convertToInt(tmp$ret$0);
  // Inline function 'kotlin.apply' call
  var this_0 = StringBuilder.dc(capacity);
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
  return !_this__u8e3s4.y1i();
}
function readBytes(_this__u8e3s4, count) {
  count = count === VOID ? convertToInt(_this__u8e3s4.k2()) : count;
  return readByteArray(_this__u8e3s4, count);
}
function BytePacketBuilder() {
  return new Buffer();
}
function writeFully_0(_this__u8e3s4, buffer, offset, length) {
  offset = offset === VOID ? 0 : offset;
  length = length === VOID ? buffer.length - offset | 0 : length;
  _this__u8e3s4.h1k(buffer, offset, offset + length | 0);
}
function build(_this__u8e3s4) {
  return _this__u8e3s4.x1i();
}
function get_size(_this__u8e3s4) {
  return convertToInt(_this__u8e3s4.x1i().k2());
}
var ByteReadPacketEmpty;
function ByteReadPacket(array, offset, length) {
  offset = offset === VOID ? 0 : offset;
  length = length === VOID ? array.length : length;
  _init_properties_ByteReadPacket_kt__28475y();
  // Inline function 'kotlin.apply' call
  var this_0 = new Buffer();
  this_0.h1k(array, offset, offset + length | 0);
  return this_0;
}
function get_remaining(_this__u8e3s4) {
  _init_properties_ByteReadPacket_kt__28475y();
  return _this__u8e3s4.x1i().k2();
}
function takeWhile(_this__u8e3s4, block) {
  _init_properties_ByteReadPacket_kt__28475y();
  while (!_this__u8e3s4.y1i() && block(_this__u8e3s4.x1i())) {
  }
}
function discard_0(_this__u8e3s4, count) {
  count = count === VOID ? 9223372036854775807n : count;
  _init_properties_ByteReadPacket_kt__28475y();
  _this__u8e3s4.a1j(count);
  // Inline function 'kotlin.comparisons.minOf' call
  var b = get_remaining(_this__u8e3s4);
  var countToDiscard = count <= b ? count : b;
  _this__u8e3s4.x1i().v1j(countToDiscard);
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
  var result = _this__u8e3s4.w1j(buffer, offset, offset + length | 0);
  return result === -1 ? 0 : result;
}
function toByteArray_0(_this__u8e3s4, charset) {
  charset = charset === VOID ? Charsets_getInstance().y29_1 : charset;
  if (charset.equals(Charsets_getInstance().y29_1))
    return encodeToByteArray(_this__u8e3s4, VOID, VOID, true);
  return encodeToByteArray_0(charset.b2a(), _this__u8e3s4, 0, _this__u8e3s4.length);
}
function readText_0(_this__u8e3s4, charset, max) {
  charset = charset === VOID ? Charsets_getInstance().y29_1 : charset;
  max = max === VOID ? 2147483647 : max;
  if (charset.equals(Charsets_getInstance().y29_1)) {
    if (max === 2147483647)
      return readString_0(_this__u8e3s4);
    var tmp0 = _this__u8e3s4.x1i().k2();
    // Inline function 'kotlin.math.min' call
    var b = fromInt(max);
    var count = tmp0 <= b ? tmp0 : b;
    return readString(_this__u8e3s4, count);
  }
  return decode(charset.c2a(), _this__u8e3s4, max);
}
function writeText(_this__u8e3s4, text, fromIndex, toIndex, charset) {
  fromIndex = fromIndex === VOID ? 0 : fromIndex;
  toIndex = toIndex === VOID ? charSequenceLength(text) : toIndex;
  charset = charset === VOID ? Charsets_getInstance().y29_1 : charset;
  if (charset === Charsets_getInstance().y29_1) {
    return writeString(_this__u8e3s4, toString_1(text), fromIndex, toIndex);
  }
  encodeToImpl(charset.b2a(), _this__u8e3s4, text, fromIndex, toIndex);
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
  return _this__u8e3s4.a2a_1;
}
var Charsets_instance;
function Charsets_getInstance() {
  if (Charsets_instance === VOID)
    new Charsets();
  return Charsets_instance;
}
function forName(_this__u8e3s4, name) {
  return Companion_instance_3.p2a(name);
}
function decode_0(_this__u8e3s4, input, dst, max) {
  var decoder = Decoder(get_name(get_charset(_this__u8e3s4)), true);
  var tmp0 = input.x1i().k2();
  // Inline function 'kotlin.comparisons.minOf' call
  var b = fromInt(max);
  var count = tmp0 <= b ? tmp0 : b;
  var array = readByteArray(input, convertToInt(count));
  var tmp;
  try {
    // Inline function 'org.khronos.webgl.toInt8Array' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp = decoder.s2a(array);
  } catch ($p) {
    var tmp_0;
    if ($p instanceof Error) {
      var cause = $p;
      var tmp0_elvis_lhs = cause.message;
      throw MalformedInputException.x29('Failed to decode bytes: ' + (tmp0_elvis_lhs == null ? 'no cause provided' : tmp0_elvis_lhs));
    } else {
      throw $p;
    }
  }
  var result = tmp;
  dst.i2(result);
  return result.length;
}
function encodeImpl(_this__u8e3s4, input, fromIndex, toIndex, dst) {
  // Inline function 'kotlin.require' call
  // Inline function 'kotlin.require' call
  if (!(fromIndex <= toIndex)) {
    var message = 'Failed requirement.';
    throw IllegalArgumentException.h2(toString_1(message));
  }
  if (get_charset_0(_this__u8e3s4).equals(Charsets_getInstance().z29_1)) {
    return encodeISO88591(input, fromIndex, toIndex, dst);
  }
  // Inline function 'kotlin.require' call
  if (!(get_charset_0(_this__u8e3s4) === Charsets_getInstance().y29_1)) {
    var message_0 = 'Only UTF-8 encoding is supported in JS';
    throw IllegalArgumentException.h2(toString_1(message_0));
  }
  var encoder = new TextEncoder();
  // Inline function 'kotlin.text.substring' call
  var tmp$ret$5 = toString_1(charSequenceSubSequence(input, fromIndex, toIndex));
  var result = encoder.encode(tmp$ret$5);
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  dst.k1k(result);
  return result.length;
}
function encodeToByteArray_0(_this__u8e3s4, input, fromIndex, toIndex) {
  fromIndex = fromIndex === VOID ? 0 : fromIndex;
  toIndex = toIndex === VOID ? charSequenceLength(input) : toIndex;
  return encodeToByteArrayImpl(_this__u8e3s4, input, fromIndex, toIndex);
}
function get_charset(_this__u8e3s4) {
  return _this__u8e3s4.q2a_1;
}
function get_charset_0(_this__u8e3s4) {
  return _this__u8e3s4.r2a_1;
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
  return Dispatchers_getInstance().o1x_1;
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
      dst.r1k(toByte(character));
    }
     while (inductionVariable < toIndex);
  return toIndex - fromIndex | 0;
}
function failedToMapError(ch) {
  throw MalformedInputException.x29('The character with unicode point ' + ch + " couldn't be mapped to ISO-8859-1 character");
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
protoOf(Read).i26 = resume;
protoOf(Read).j26 = resume_0;
initMetadataForClass(Read, 'Read', VOID, VOID, [Task]);
protoOf(Write).i26 = resume;
protoOf(Write).j26 = resume_0;
initMetadataForClass(Write, 'Write', VOID, VOID, [Task]);
initMetadataForInterface(ByteReadChannel, 'ByteReadChannel', VOID, VOID, VOID, [1]);
initMetadataForInterface(ByteWriteChannel, 'ByteWriteChannel', VOID, VOID, VOID, [0]);
protoOf(ByteChannel).v27 = awaitContent$default;
initMetadataForClass(ByteChannel, 'ByteChannel', ByteChannel, VOID, [ByteReadChannel, ByteWriteChannel], [1, 0]);
initMetadataForClass(ConcurrentIOException, 'ConcurrentIOException');
initMetadataForClass(ByteChannelScanner, 'ByteChannelScanner', VOID, VOID, VOID, [1, 0]);
protoOf(ByteReadChannel$Companion$Empty$1).v27 = awaitContent$default;
initMetadataForClass(ByteReadChannel$Companion$Empty$1, VOID, VOID, VOID, [ByteReadChannel], [1]);
initMetadataForCompanion(Companion_0);
initMetadataForClass(WriterJob, 'WriterJob');
initMetadataForClass(WriterScope, 'WriterScope', VOID, VOID, [CoroutineScope]);
initMetadataForClass(NO_CALLBACK$1, VOID, VOID, VOID, [Continuation]);
initMetadataForFunctionReference(ByteWriteChannel$flushAndClose$ref, VOID, VOID, [0]);
initMetadataForLambda(writer$slambda, VOID, VOID, [1]);
initMetadataForClass(CloseToken, 'CloseToken');
protoOf(CountedByteReadChannel).v27 = awaitContent$default;
initMetadataForClass(CountedByteReadChannel, 'CountedByteReadChannel', VOID, VOID, [ByteReadChannel], [1]);
initMetadataForClass(ClosedByteChannelException, 'ClosedByteChannelException', ClosedByteChannelException.f29);
initMetadataForClass(ClosedReadChannelException, 'ClosedReadChannelException', ClosedReadChannelException.a27);
initMetadataForClass(ClosedWriteChannelException, 'ClosedWriteChannelException', ClosedWriteChannelException.f27);
initMetadataForClass(LineEnding, 'LineEnding');
initMetadataForCompanion(Companion_1);
initMetadataForClass(LineEndingMode, 'LineEndingMode');
protoOf(SourceByteReadChannel).v27 = awaitContent$default;
initMetadataForClass(SourceByteReadChannel, 'SourceByteReadChannel', VOID, VOID, [ByteReadChannel], [1]);
initMetadataForClass(MalformedInputException, 'MalformedInputException');
initMetadataForClass(TooLongLineException, 'TooLongLineException');
initMetadataForInterface(ObjectPool, 'ObjectPool', VOID, VOID, [AutoCloseable]);
protoOf(DefaultPool).z6 = close;
initMetadataForClass(DefaultPool, 'DefaultPool', VOID, VOID, [ObjectPool]);
initMetadataForClass(ByteArrayPool$1);
protoOf(NoPoolImpl).z6 = close;
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
  Charsets_getInstance as Charsets_getInstanceqkyjyusuh1b0,
  Companion_getInstance_0 as Companion_getInstance16dzvgcii8pc4,
  Companion_getInstance_1 as Companion_getInstanceu6i25dezdn6m,
  copyTo as copyTo2si6ixg3c5rjz,
  copyTo_0 as copyTo3d5z1yutz1t4g,
  readAvailable as readAvailable2v9sgy82btrhn,
  readLineStrictTo as readLineStrictTo1xxmy01uq4bp,
  readPacket as readPacket1qzyfym3sry67,
  readRemaining as readRemaining1u8soafhjma7y,
  readUntil as readUntil3qqal0dj72fys,
  skipIfFound as skipIfFound34xzbgurmhd09,
  toByteArray as toByteArray39hw81iegcnuw,
  writeFully as writeFully1yd4favg5iwxl,
  writePacket as writePacket2srkw4h0yhov0,
  LineEndingMode__plus_impl_ttpz2j as LineEndingMode__plus_impl_ttpz2jpqrbpe81vmkf,
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
