import {
  IndexOutOfBoundsException1qfr429iumro0 as IndexOutOfBoundsException,
  IllegalArgumentException2asla15b5jaob as IllegalArgumentException,
  subtract2orl8z9upxd9l as subtract,
  _Char___init__impl__6a9atxrzocepzq3zgi as _Char___init__impl__6a9atx,
  charArrayOf27f4r3dozbrk1 as charArrayOf,
  toString1pkumu07cwy4m as toString,
  Unit_instance3kz1zqli6gr1r as Unit_instance,
  toShort36kaw0zjdq3ex as toShort,
  add2suhfggl4zvkk as add,
  ensureNotNull1e947j3ixpazm as ensureNotNull,
  fromInt2ii0rejb1w62w as fromInt,
  convertToInty04h231mmjoh as convertToInt,
  protoOf180f3jzyo7rfj as protoOf,
  StringBuildermazzzhj6kkai as StringBuilder,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  VOID3gxj6tk5isa35 as VOID,
  IllegalStateExceptionkoljg5n0nrlr as IllegalStateException,
  AutoCloseable1l5p57f9lp7kv as AutoCloseable,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  createThis2j2avj17cvnv2 as createThis,
  arrayCopytctsywo3h7gj as arrayCopy,
  toByte4i43936u611k as toByte,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  multiply2k9eolhnz1bjv as multiply,
  charCodeAt1yspne1d8erbm as charCodeAt,
  Char__toInt_impl_vasixd28v1p2u6jau5g as Char__toInt_impl_vasixd,
  charArray2ujmm1qusno00 as charArray,
  numberToChar93r9buh19yek as numberToChar,
  concatToString3cxf0c1gqonpo as concatToString,
  captureStack1fzi4aczwc4hg as captureStack,
  Exceptiondt2hlxn7j7vw as Exception,
} from './kotlin-kotlin-stdlib.mjs';
import { UnsafeByteStringOperations_instance2qzwn5iz9dqfo as UnsafeByteStringOperations_instance } from './kotlinx-io-kotlinx-io-bytestring.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
class Source {}
class Sink {}
function write$default(source, startIndex, endIndex, $super) {
  startIndex = startIndex === VOID ? 0 : startIndex;
  endIndex = endIndex === VOID ? source.length : endIndex;
  var tmp;
  if ($super === VOID) {
    this.y20(source, startIndex, endIndex);
    tmp = Unit_instance;
  } else {
    tmp = $super.y20.call(this, source, startIndex, endIndex);
  }
  return tmp;
}
class Buffer {
  constructor() {
    this.h1z_1 = null;
    this.i1z_1 = null;
    this.j1z_1 = 0n;
  }
  l2() {
    return this.j1z_1;
  }
  o1z() {
    return this;
  }
  p1z() {
    return this.l2() === 0n;
  }
  q1z(byteCount) {
    // Inline function 'kotlin.require' call
    if (!(byteCount >= 0n)) {
      var message = 'byteCount: ' + byteCount.toString();
      throw IllegalArgumentException.i2(toString(message));
    }
    if (this.l2() < byteCount) {
      throw EOFException.n1z("Buffer doesn't contain required number of bytes (size: " + this.l2().toString() + ', required: ' + byteCount.toString() + ')');
    }
  }
  r1z(byteCount) {
    // Inline function 'kotlin.require' call
    if (!(byteCount >= 0n)) {
      var message = 'byteCount: ' + byteCount.toString() + ' < 0';
      throw IllegalArgumentException.i2(toString(message));
    }
    return this.l2() >= byteCount;
  }
  s1z() {
    var tmp0_elvis_lhs = this.h1z_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwEof(this, 1n);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var segment = tmp;
    var segmentSize = segment.l2();
    if (segmentSize === 0) {
      this.a20();
      return this.s1z();
    }
    var v = segment.b20();
    this.j1z_1 = subtract(this.j1z_1, 1n);
    if (segmentSize === 1) {
      this.a20();
    }
    return v;
  }
  c20() {
    var tmp0_elvis_lhs = this.h1z_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwEof(this, 2n);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var segment = tmp;
    var segmentSize = segment.l2();
    if (segmentSize < 2) {
      this.q1z(2n);
      if (segmentSize === 0) {
        this.a20();
        return this.c20();
      }
      // Inline function 'kotlinx.io.and' call
      var tmp_0 = (this.s1z() & 255) << 8;
      // Inline function 'kotlinx.io.and' call
      var tmp$ret$1 = this.s1z() & 255;
      return toShort(tmp_0 | tmp$ret$1);
    }
    var v = segment.d20();
    this.j1z_1 = subtract(this.j1z_1, 2n);
    if (segmentSize === 2) {
      this.a20();
    }
    return v;
  }
  e20() {
    return Unit_instance;
  }
  f20(out, startIndex, endIndex) {
    checkBounds(this.l2(), startIndex, endIndex);
    if (startIndex === endIndex)
      return Unit_instance;
    var currentOffset = startIndex;
    var remainingByteCount = subtract(endIndex, startIndex);
    out.j1z_1 = add(out.j1z_1, remainingByteCount);
    var s = this.h1z_1;
    while (currentOffset >= fromInt(ensureNotNull(s).v1z_1 - s.u1z_1 | 0)) {
      currentOffset = subtract(currentOffset, fromInt(s.v1z_1 - s.u1z_1 | 0));
      s = s.y1z_1;
    }
    while (remainingByteCount > 0n) {
      var copy = ensureNotNull(s).g20();
      copy.u1z_1 = copy.u1z_1 + convertToInt(currentOffset) | 0;
      var tmp = copy;
      var tmp0 = copy.u1z_1 + convertToInt(remainingByteCount) | 0;
      // Inline function 'kotlin.comparisons.minOf' call
      var b = copy.v1z_1;
      tmp.v1z_1 = Math.min(tmp0, b);
      // Inline function 'kotlinx.io.Buffer.pushSegment' call
      if (out.h1z_1 == null) {
        out.h1z_1 = copy;
        out.i1z_1 = copy;
      } else if (false) {
        out.i1z_1 = ensureNotNull(out.i1z_1).h20(copy).i20();
        if (ensureNotNull(out.i1z_1).z1z_1 == null) {
          out.h1z_1 = out.i1z_1;
        }
      } else {
        out.i1z_1 = ensureNotNull(out.i1z_1).h20(copy);
      }
      remainingByteCount = subtract(remainingByteCount, fromInt(copy.v1z_1 - copy.u1z_1 | 0));
      currentOffset = 0n;
      s = s.y1z_1;
    }
  }
  j20() {
    var result = this.l2();
    if (result === 0n)
      return 0n;
    var tail = ensureNotNull(this.i1z_1);
    if (tail.v1z_1 < 8192 && tail.x1z_1) {
      result = subtract(result, fromInt(tail.v1z_1 - tail.u1z_1 | 0));
    }
    return result;
  }
  k20(position) {
    if (position < 0n || position >= this.l2()) {
      throw IndexOutOfBoundsException.ke('position (' + position.toString() + ') is not within the range [0..size(' + this.l2().toString() + '))');
    }
    if (position === 0n) {
      return ensureNotNull(this.h1z_1).l20(0);
    }
    $l$block_1: {
      // Inline function 'kotlinx.io.seek' call
      if (this.h1z_1 == null) {
        return ensureNotNull(null).l20(convertToInt(subtract(position, -1n)));
      }
      if (subtract(this.l2(), position) < position) {
        var s = this.i1z_1;
        var offset = this.l2();
        $l$loop: while (!(s == null) && offset > position) {
          offset = subtract(offset, fromInt(s.v1z_1 - s.u1z_1 | 0));
          if (offset <= position)
            break $l$loop;
          s = s.z1z_1;
        }
        var tmp0 = s;
        var offset_0 = offset;
        return ensureNotNull(tmp0).l20(convertToInt(subtract(position, offset_0)));
      } else {
        var s_0 = this.h1z_1;
        var offset_1 = 0n;
        $l$loop_0: while (!(s_0 == null)) {
          var tmp0_0 = offset_1;
          // Inline function 'kotlin.Long.plus' call
          var other = s_0.v1z_1 - s_0.u1z_1 | 0;
          var nextOffset = add(tmp0_0, fromInt(other));
          if (nextOffset > position)
            break $l$loop_0;
          s_0 = s_0.y1z_1;
          offset_1 = nextOffset;
        }
        var tmp0_1 = s_0;
        var offset_2 = offset_1;
        return ensureNotNull(tmp0_1).l20(convertToInt(subtract(position, offset_2)));
      }
    }
  }
  g4() {
    return this.m20(this.l2());
  }
  m20(byteCount) {
    // Inline function 'kotlinx.io.checkByteCount' call
    // Inline function 'kotlin.require' call
    if (!(byteCount >= 0n)) {
      var message = 'byteCount (' + byteCount.toString() + ') < 0';
      throw IllegalArgumentException.i2(toString(message));
    }
    var remainingByteCount = byteCount;
    while (remainingByteCount > 0n) {
      var tmp0_elvis_lhs = this.h1z_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        throw EOFException.n1z('Buffer exhausted before skipping ' + byteCount.toString() + ' bytes.');
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var head = tmp;
      var tmp0 = remainingByteCount;
      // Inline function 'kotlinx.io.minOf' call
      var b = head.v1z_1 - head.u1z_1 | 0;
      // Inline function 'kotlin.comparisons.minOf' call
      var b_0 = fromInt(b);
      var tmp$ret$3 = tmp0 <= b_0 ? tmp0 : b_0;
      var toSkip = convertToInt(tmp$ret$3);
      this.j1z_1 = subtract(this.j1z_1, fromInt(toSkip));
      remainingByteCount = subtract(remainingByteCount, fromInt(toSkip));
      head.u1z_1 = head.u1z_1 + toSkip | 0;
      if (head.u1z_1 === head.v1z_1) {
        this.a20();
      }
    }
  }
  n20(sink, startIndex, endIndex) {
    // Inline function 'kotlinx.io.checkBounds' call
    var size = sink.length;
    checkBounds(fromInt(size), fromInt(startIndex), fromInt(endIndex));
    var tmp0_elvis_lhs = this.h1z_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return -1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var s = tmp;
    var tmp0 = endIndex - startIndex | 0;
    // Inline function 'kotlin.comparisons.minOf' call
    var b = s.l2();
    var toCopy = Math.min(tmp0, b);
    s.o20(sink, startIndex, startIndex + toCopy | 0);
    this.j1z_1 = subtract(this.j1z_1, fromInt(toCopy));
    if (isEmpty(s)) {
      this.a20();
    }
    return toCopy;
  }
  p20(sink, byteCount) {
    // Inline function 'kotlinx.io.checkByteCount' call
    // Inline function 'kotlin.require' call
    if (!(byteCount >= 0n)) {
      var message = 'byteCount (' + byteCount.toString() + ') < 0';
      throw IllegalArgumentException.i2(toString(message));
    }
    if (this.l2() === 0n)
      return -1n;
    var bytesWritten = byteCount > this.l2() ? this.l2() : byteCount;
    sink.q20(this, bytesWritten);
    return bytesWritten;
  }
  r20(sink, byteCount) {
    // Inline function 'kotlinx.io.checkByteCount' call
    // Inline function 'kotlin.require' call
    if (!(byteCount >= 0n)) {
      var message = 'byteCount (' + byteCount.toString() + ') < 0';
      throw IllegalArgumentException.i2(toString(message));
    }
    if (this.l2() < byteCount) {
      sink.q20(this, this.l2());
      throw EOFException.n1z('Buffer exhausted before writing ' + byteCount.toString() + ' bytes. Only ' + this.l2().toString() + ' bytes were written.');
    }
    sink.q20(this, byteCount);
  }
  s20(sink) {
    var byteCount = this.l2();
    if (byteCount > 0n) {
      sink.q20(this, byteCount);
    }
    return byteCount;
  }
  t20() {
    return buffered(new PeekSource(this));
  }
  u20(minimumCapacity) {
    // Inline function 'kotlin.require' call
    if (!(minimumCapacity >= 1 && minimumCapacity <= 8192)) {
      var message = 'unexpected capacity (' + minimumCapacity + '), should be in range [1, 8192]';
      throw IllegalArgumentException.i2(toString(message));
    }
    if (this.i1z_1 == null) {
      var result = SegmentPool_instance.x20();
      this.h1z_1 = result;
      this.i1z_1 = result;
      return result;
    }
    var t = ensureNotNull(this.i1z_1);
    if ((t.v1z_1 + minimumCapacity | 0) > 8192 || !t.x1z_1) {
      var newTail = t.h20(SegmentPool_instance.x20());
      this.i1z_1 = newTail;
      return newTail;
    }
    return t;
  }
  y20(source, startIndex, endIndex) {
    // Inline function 'kotlinx.io.checkBounds' call
    var size = source.length;
    checkBounds(fromInt(size), fromInt(startIndex), fromInt(endIndex));
    var currentOffset = startIndex;
    while (currentOffset < endIndex) {
      var tail = this.u20(1);
      var tmp0 = endIndex - currentOffset | 0;
      // Inline function 'kotlin.comparisons.minOf' call
      var b = tail.z20();
      var toCopy = Math.min(tmp0, b);
      tail.a21(source, currentOffset, currentOffset + toCopy | 0);
      currentOffset = currentOffset + toCopy | 0;
    }
    var tmp = this;
    var tmp0_0 = this.j1z_1;
    // Inline function 'kotlin.Long.plus' call
    var other = endIndex - startIndex | 0;
    tmp.j1z_1 = add(tmp0_0, fromInt(other));
  }
  c21(source, byteCount) {
    // Inline function 'kotlinx.io.checkByteCount' call
    // Inline function 'kotlin.require' call
    if (!(byteCount >= 0n)) {
      var message = 'byteCount (' + byteCount.toString() + ') < 0';
      throw IllegalArgumentException.i2(toString(message));
    }
    var remainingByteCount = byteCount;
    while (remainingByteCount > 0n) {
      var read = source.p20(this, remainingByteCount);
      if (read === -1n) {
        throw EOFException.n1z('Source exhausted before reading ' + byteCount.toString() + ' bytes. ' + ('Only ' + subtract(byteCount, remainingByteCount).toString() + ' were read.'));
      }
      remainingByteCount = subtract(remainingByteCount, read);
    }
  }
  q20(source, byteCount) {
    // Inline function 'kotlin.require' call
    if (!!(source === this)) {
      var message = 'source == this';
      throw IllegalArgumentException.i2(toString(message));
    }
    checkOffsetAndCount(source.j1z_1, 0n, byteCount);
    var remainingByteCount = byteCount;
    while (remainingByteCount > 0n) {
      if (remainingByteCount < fromInt(ensureNotNull(source.h1z_1).l2())) {
        var tail = this.i1z_1;
        var tmp;
        if (!(tail == null) && tail.x1z_1) {
          var tmp0 = remainingByteCount;
          // Inline function 'kotlin.Long.plus' call
          var other = tail.v1z_1;
          var tmp0_0 = add(tmp0, fromInt(other));
          // Inline function 'kotlin.Long.minus' call
          var other_0 = tail.d21() ? 0 : tail.u1z_1;
          tmp = subtract(tmp0_0, fromInt(other_0)) <= 8192n;
        } else {
          tmp = false;
        }
        if (tmp) {
          ensureNotNull(source.h1z_1).f21(tail, convertToInt(remainingByteCount));
          source.j1z_1 = subtract(source.j1z_1, remainingByteCount);
          this.j1z_1 = add(this.j1z_1, remainingByteCount);
          return Unit_instance;
        } else {
          source.h1z_1 = ensureNotNull(source.h1z_1).e21(convertToInt(remainingByteCount));
        }
      }
      var segmentToMove = ensureNotNull(source.h1z_1);
      var movedByteCount = fromInt(segmentToMove.l2());
      source.h1z_1 = segmentToMove.g21();
      if (source.h1z_1 == null) {
        source.i1z_1 = null;
      }
      // Inline function 'kotlinx.io.Buffer.pushSegment' call
      if (this.h1z_1 == null) {
        this.h1z_1 = segmentToMove;
        this.i1z_1 = segmentToMove;
      } else if (true) {
        this.i1z_1 = ensureNotNull(this.i1z_1).h20(segmentToMove).i20();
        if (ensureNotNull(this.i1z_1).z1z_1 == null) {
          this.h1z_1 = this.i1z_1;
        }
      } else {
        this.i1z_1 = ensureNotNull(this.i1z_1).h20(segmentToMove);
      }
      source.j1z_1 = subtract(source.j1z_1, movedByteCount);
      this.j1z_1 = add(this.j1z_1, movedByteCount);
      remainingByteCount = subtract(remainingByteCount, movedByteCount);
    }
  }
  h21(source) {
    var totalBytesRead = 0n;
    $l$loop: while (true) {
      var readCount = source.p20(this, 8192n);
      if (readCount === -1n)
        break $l$loop;
      totalBytesRead = add(totalBytesRead, readCount);
    }
    return totalBytesRead;
  }
  i21(byte) {
    this.u20(1).j21(byte);
    this.j1z_1 = add(this.j1z_1, 1n);
  }
  k21(short) {
    this.u20(2).l21(short);
    this.j1z_1 = add(this.j1z_1, 2n);
  }
  a7() {
    return Unit_instance;
  }
  toString() {
    if (this.l2() === 0n)
      return 'Buffer(size=0)';
    var maxPrintableBytes = 64;
    // Inline function 'kotlinx.io.minOf' call
    var b = this.l2();
    // Inline function 'kotlin.comparisons.minOf' call
    var a = fromInt(maxPrintableBytes);
    var tmp$ret$0 = a <= b ? a : b;
    var len = convertToInt(tmp$ret$0);
    var builder = StringBuilder.fc(imul(len, 2) + (this.l2() > fromInt(maxPrintableBytes) ? 1 : 0) | 0);
    var bytesWritten = 0;
    // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.forEachSegment' call
    var curr = this.h1z_1;
    while (!(curr == null)) {
      var tmp0 = get_SegmentReadContextImpl();
      var segment = curr;
      var idx = 0;
      while (bytesWritten < len && idx < segment.l2()) {
        var _unary__edvuaz = idx;
        idx = _unary__edvuaz + 1 | 0;
        var b_0 = tmp0.m21(segment, _unary__edvuaz);
        bytesWritten = bytesWritten + 1 | 0;
        var tmp = get_HEX_DIGIT_CHARS();
        // Inline function 'kotlinx.io.shr' call
        var tmp$ret$4 = b_0 >> 4;
        var tmp_0 = builder.k1(tmp[tmp$ret$4 & 15]);
        var tmp_1 = get_HEX_DIGIT_CHARS();
        // Inline function 'kotlinx.io.and' call
        var tmp$ret$5 = b_0 & 15;
        tmp_0.k1(tmp_1[tmp$ret$5]);
      }
      curr = curr.y1z_1;
    }
    if (this.l2() > fromInt(maxPrintableBytes)) {
      builder.k1(_Char___init__impl__6a9atx(8230));
    }
    return 'Buffer(size=' + this.l2().toString() + ' hex=' + builder.toString() + ')';
  }
  a20() {
    var oldHead = ensureNotNull(this.h1z_1);
    var nextHead = oldHead.y1z_1;
    this.h1z_1 = nextHead;
    if (nextHead == null) {
      this.i1z_1 = null;
    } else {
      nextHead.z1z_1 = null;
    }
    oldHead.y1z_1 = null;
    SegmentPool_instance.n21(oldHead);
  }
  o21() {
    var oldTail = ensureNotNull(this.i1z_1);
    var newTail = oldTail.z1z_1;
    this.i1z_1 = newTail;
    if (newTail == null) {
      this.h1z_1 = null;
    } else {
      newTail.y1z_1 = null;
    }
    oldTail.z1z_1 = null;
    SegmentPool_instance.n21(oldTail);
  }
}
class PeekSource {
  constructor(upstream) {
    this.p21_1 = upstream;
    this.q21_1 = this.p21_1.o1z();
    this.r21_1 = this.q21_1.h1z_1;
    var tmp = this;
    var tmp0_safe_receiver = this.q21_1.h1z_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.u1z_1;
    tmp.s21_1 = tmp1_elvis_lhs == null ? -1 : tmp1_elvis_lhs;
    this.t21_1 = false;
    this.u21_1 = 0n;
  }
  p20(sink, byteCount) {
    // Inline function 'kotlin.check' call
    if (!!this.t21_1) {
      var message = 'Source is closed.';
      throw IllegalStateException.o(toString(message));
    }
    // Inline function 'kotlinx.io.checkByteCount' call
    // Inline function 'kotlin.require' call
    if (!(byteCount >= 0n)) {
      var message_0 = 'byteCount (' + byteCount.toString() + ') < 0';
      throw IllegalArgumentException.i2(toString(message_0));
    }
    // Inline function 'kotlin.check' call
    if (!(this.r21_1 == null || (this.r21_1 === this.q21_1.h1z_1 && this.s21_1 === ensureNotNull(this.q21_1.h1z_1).u1z_1))) {
      var message_1 = 'Peek source is invalid because upstream source was used';
      throw IllegalStateException.o(toString(message_1));
    }
    if (byteCount === 0n)
      return 0n;
    // Inline function 'kotlin.Long.plus' call
    var this_0 = this.u21_1;
    var tmp$ret$7 = add(this_0, fromInt(1));
    if (!this.p21_1.r1z(tmp$ret$7))
      return -1n;
    if (this.r21_1 == null && !(this.q21_1.h1z_1 == null)) {
      this.r21_1 = this.q21_1.h1z_1;
      this.s21_1 = ensureNotNull(this.q21_1.h1z_1).u1z_1;
    }
    // Inline function 'kotlin.comparisons.minOf' call
    var b = subtract(this.q21_1.l2(), this.u21_1);
    var toCopy = byteCount <= b ? byteCount : b;
    this.q21_1.f20(sink, this.u21_1, add(this.u21_1, toCopy));
    this.u21_1 = add(this.u21_1, toCopy);
    return toCopy;
  }
  a7() {
    this.t21_1 = true;
  }
}
class RealSource {
  constructor(source) {
    this.v21_1 = source;
    this.w21_1 = false;
    this.x21_1 = new Buffer();
  }
  o1z() {
    return this.x21_1;
  }
  p20(sink, byteCount) {
    // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
    // Inline function 'kotlin.check' call
    if (!!this.w21_1) {
      var message = 'Source is closed.';
      throw IllegalStateException.o(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(byteCount >= 0n)) {
      var message_0 = 'byteCount: ' + byteCount.toString();
      throw IllegalArgumentException.i2(toString(message_0));
    }
    if (this.x21_1.l2() === 0n) {
      var read = this.v21_1.p20(this.x21_1, 8192n);
      if (read === -1n)
        return -1n;
    }
    // Inline function 'kotlin.comparisons.minOf' call
    var b = this.x21_1.l2();
    var toRead = byteCount <= b ? byteCount : b;
    return this.x21_1.p20(sink, toRead);
  }
  p1z() {
    // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
    // Inline function 'kotlin.check' call
    if (!!this.w21_1) {
      var message = 'Source is closed.';
      throw IllegalStateException.o(toString(message));
    }
    return this.x21_1.p1z() && this.v21_1.p20(this.x21_1, 8192n) === -1n;
  }
  q1z(byteCount) {
    if (!this.r1z(byteCount))
      throw EOFException.n1z("Source doesn't contain required number of bytes (" + byteCount.toString() + ').');
  }
  r1z(byteCount) {
    // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
    // Inline function 'kotlin.check' call
    if (!!this.w21_1) {
      var message = 'Source is closed.';
      throw IllegalStateException.o(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(byteCount >= 0n)) {
      var message_0 = 'byteCount: ' + byteCount.toString();
      throw IllegalArgumentException.i2(toString(message_0));
    }
    while (this.x21_1.l2() < byteCount) {
      if (this.v21_1.p20(this.x21_1, 8192n) === -1n)
        return false;
    }
    return true;
  }
  s1z() {
    this.q1z(1n);
    return this.x21_1.s1z();
  }
  n20(sink, startIndex, endIndex) {
    // Inline function 'kotlinx.io.checkBounds' call
    var size = sink.length;
    checkBounds(fromInt(size), fromInt(startIndex), fromInt(endIndex));
    if (this.x21_1.l2() === 0n) {
      var read = this.v21_1.p20(this.x21_1, 8192n);
      if (read === -1n)
        return -1;
    }
    var tmp0 = endIndex - startIndex | 0;
    // Inline function 'kotlinx.io.minOf' call
    var b = this.x21_1.l2();
    // Inline function 'kotlin.comparisons.minOf' call
    var a = fromInt(tmp0);
    var tmp$ret$1 = a <= b ? a : b;
    var toRead = convertToInt(tmp$ret$1);
    return this.x21_1.n20(sink, startIndex, startIndex + toRead | 0);
  }
  r20(sink, byteCount) {
    try {
      this.q1z(byteCount);
    } catch ($p) {
      if ($p instanceof EOFException) {
        var e = $p;
        sink.q20(this.x21_1, this.x21_1.l2());
        throw e;
      } else {
        throw $p;
      }
    }
    this.x21_1.r20(sink, byteCount);
  }
  s20(sink) {
    var totalBytesWritten = 0n;
    while (!(this.v21_1.p20(this.x21_1, 8192n) === -1n)) {
      var emitByteCount = this.x21_1.j20();
      if (emitByteCount > 0n) {
        totalBytesWritten = add(totalBytesWritten, emitByteCount);
        sink.q20(this.x21_1, emitByteCount);
      }
    }
    if (this.x21_1.l2() > 0n) {
      totalBytesWritten = add(totalBytesWritten, this.x21_1.l2());
      sink.q20(this.x21_1, this.x21_1.l2());
    }
    return totalBytesWritten;
  }
  c20() {
    this.q1z(2n);
    return this.x21_1.c20();
  }
  t20() {
    // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
    // Inline function 'kotlin.check' call
    if (!!this.w21_1) {
      var message = 'Source is closed.';
      throw IllegalStateException.o(toString(message));
    }
    return buffered(new PeekSource(this));
  }
  a7() {
    if (this.w21_1)
      return Unit_instance;
    this.w21_1 = true;
    this.v21_1.a7();
    this.x21_1.g4();
  }
  toString() {
    return 'buffered(' + toString(this.v21_1) + ')';
  }
}
class Companion {
  constructor() {
    this.y21_1 = 8192;
    this.z21_1 = 1024;
  }
  a22() {
    return Segment.b22();
  }
}
class Segment {
  d21() {
    var tmp0_safe_receiver = this.w1z_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.c22();
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  }
  static b22() {
    var $this = createThis(this);
    init_kotlinx_io_Segment($this);
    $this.t1z_1 = new Int8Array(8192);
    $this.x1z_1 = true;
    $this.w1z_1 = null;
    return $this;
  }
  static d22(data, pos, limit, shareToken, owner) {
    var $this = createThis(this);
    init_kotlinx_io_Segment($this);
    $this.t1z_1 = data;
    $this.u1z_1 = pos;
    $this.v1z_1 = limit;
    $this.w1z_1 = shareToken;
    $this.x1z_1 = owner;
    return $this;
  }
  g20() {
    var tmp0_elvis_lhs = this.w1z_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = SegmentPool_instance.e22();
      this.w1z_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var t = tmp;
    var tmp_0 = this.u1z_1;
    var tmp_1 = this.v1z_1;
    // Inline function 'kotlin.also' call
    t.f22();
    return Segment.d22(this.t1z_1, tmp_0, tmp_1, t, false);
  }
  g21() {
    var result = this.y1z_1;
    if (!(this.z1z_1 == null)) {
      ensureNotNull(this.z1z_1).y1z_1 = this.y1z_1;
    }
    if (!(this.y1z_1 == null)) {
      ensureNotNull(this.y1z_1).z1z_1 = this.z1z_1;
    }
    this.y1z_1 = null;
    this.z1z_1 = null;
    return result;
  }
  h20(segment) {
    segment.z1z_1 = this;
    segment.y1z_1 = this.y1z_1;
    if (!(this.y1z_1 == null)) {
      ensureNotNull(this.y1z_1).z1z_1 = segment;
    }
    this.y1z_1 = segment;
    return segment;
  }
  e21(byteCount) {
    // Inline function 'kotlin.require' call
    if (!(byteCount > 0 && byteCount <= (this.v1z_1 - this.u1z_1 | 0))) {
      var message = 'byteCount out of range';
      throw IllegalArgumentException.i2(toString(message));
    }
    var prefix;
    if (byteCount >= 1024) {
      prefix = this.g20();
    } else {
      prefix = SegmentPool_instance.x20();
      var tmp0 = this.t1z_1;
      var tmp2 = prefix.t1z_1;
      var tmp5 = this.u1z_1;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = this.u1z_1 + byteCount | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = tmp0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, tmp2, 0, tmp5, endIndex);
    }
    prefix.v1z_1 = prefix.u1z_1 + byteCount | 0;
    this.u1z_1 = this.u1z_1 + byteCount | 0;
    if (!(this.z1z_1 == null)) {
      ensureNotNull(this.z1z_1).h20(prefix);
    } else {
      prefix.y1z_1 = this;
      this.z1z_1 = prefix;
    }
    return prefix;
  }
  i20() {
    // Inline function 'kotlin.check' call
    if (!!(this.z1z_1 == null)) {
      var message = 'cannot compact';
      throw IllegalStateException.o(toString(message));
    }
    if (!ensureNotNull(this.z1z_1).x1z_1)
      return this;
    var byteCount = this.v1z_1 - this.u1z_1 | 0;
    var availableByteCount = (8192 - ensureNotNull(this.z1z_1).v1z_1 | 0) + (ensureNotNull(this.z1z_1).d21() ? 0 : ensureNotNull(this.z1z_1).u1z_1) | 0;
    if (byteCount > availableByteCount)
      return this;
    var predecessor = this.z1z_1;
    this.f21(ensureNotNull(predecessor), byteCount);
    var successor = this.g21();
    // Inline function 'kotlin.check' call
    if (!(successor == null)) {
      throw IllegalStateException.o('Check failed.');
    }
    SegmentPool_instance.n21(this);
    return predecessor;
  }
  j21(byte) {
    var _unary__edvuaz = this.v1z_1;
    this.v1z_1 = _unary__edvuaz + 1 | 0;
    this.t1z_1[_unary__edvuaz] = byte;
  }
  l21(short) {
    var data = this.t1z_1;
    var limit = this.v1z_1;
    var _unary__edvuaz = limit;
    limit = _unary__edvuaz + 1 | 0;
    data[_unary__edvuaz] = toByte((short >>> 8 | 0) & 255);
    var _unary__edvuaz_0 = limit;
    limit = _unary__edvuaz_0 + 1 | 0;
    data[_unary__edvuaz_0] = toByte(short & 255);
    this.v1z_1 = limit;
  }
  b20() {
    var _unary__edvuaz = this.u1z_1;
    this.u1z_1 = _unary__edvuaz + 1 | 0;
    return this.t1z_1[_unary__edvuaz];
  }
  d20() {
    var data = this.t1z_1;
    var pos = this.u1z_1;
    var _unary__edvuaz = pos;
    pos = _unary__edvuaz + 1 | 0;
    // Inline function 'kotlinx.io.and' call
    var tmp = (data[_unary__edvuaz] & 255) << 8;
    var _unary__edvuaz_0 = pos;
    pos = _unary__edvuaz_0 + 1 | 0;
    // Inline function 'kotlinx.io.and' call
    var tmp$ret$1 = data[_unary__edvuaz_0] & 255;
    var s = toShort(tmp | tmp$ret$1);
    this.u1z_1 = pos;
    return s;
  }
  f21(sink, byteCount) {
    // Inline function 'kotlin.check' call
    if (!sink.x1z_1) {
      var message = 'only owner can write';
      throw IllegalStateException.o(toString(message));
    }
    if ((sink.v1z_1 + byteCount | 0) > 8192) {
      if (sink.d21())
        throw IllegalArgumentException.yd();
      if (((sink.v1z_1 + byteCount | 0) - sink.u1z_1 | 0) > 8192)
        throw IllegalArgumentException.yd();
      var tmp0 = sink.t1z_1;
      var tmp2 = sink.t1z_1;
      var tmp5 = sink.u1z_1;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = sink.v1z_1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = tmp0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, tmp2, 0, tmp5, endIndex);
      sink.v1z_1 = sink.v1z_1 - sink.u1z_1 | 0;
      sink.u1z_1 = 0;
    }
    var tmp0_0 = this.t1z_1;
    var tmp2_0 = sink.t1z_1;
    var tmp4 = sink.v1z_1;
    var tmp6 = this.u1z_1;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex_0 = this.u1z_1 + byteCount | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = tmp0_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp_0, tmp2_0, tmp4, tmp6, endIndex_0);
    sink.v1z_1 = sink.v1z_1 + byteCount | 0;
    this.u1z_1 = this.u1z_1 + byteCount | 0;
  }
  o20(dst, dstStartOffset, dstEndOffset) {
    var len = dstEndOffset - dstStartOffset | 0;
    var tmp0 = this.t1z_1;
    var tmp6 = this.u1z_1;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = this.u1z_1 + len | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, dst, dstStartOffset, tmp6, endIndex);
    this.u1z_1 = this.u1z_1 + len | 0;
  }
  a21(src, srcStartOffset, srcEndOffset) {
    var tmp2 = this.t1z_1;
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset = this.v1z_1;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = src;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, tmp2, destinationOffset, srcStartOffset, srcEndOffset);
    this.v1z_1 = this.v1z_1 + (srcEndOffset - srcStartOffset | 0) | 0;
  }
  l2() {
    return this.v1z_1 - this.u1z_1 | 0;
  }
  z20() {
    return this.t1z_1.length - this.v1z_1 | 0;
  }
  g22(readOnly) {
    return this.t1z_1;
  }
  l20(index) {
    return this.t1z_1[this.u1z_1 + index | 0];
  }
  h22(index, value) {
    this.t1z_1[this.v1z_1 + index | 0] = value;
  }
  i22(index, b0, b1) {
    var d = this.t1z_1;
    var l = this.v1z_1;
    d[l + index | 0] = b0;
    d[(l + index | 0) + 1 | 0] = b1;
  }
  j22(index, b0, b1, b2) {
    var d = this.t1z_1;
    var l = this.v1z_1;
    d[l + index | 0] = b0;
    d[(l + index | 0) + 1 | 0] = b1;
    d[(l + index | 0) + 2 | 0] = b2;
  }
  k22(index, b0, b1, b2, b3) {
    var d = this.t1z_1;
    var l = this.v1z_1;
    d[l + index | 0] = b0;
    d[(l + index | 0) + 1 | 0] = b1;
    d[(l + index | 0) + 2 | 0] = b2;
    d[(l + index | 0) + 3 | 0] = b3;
  }
}
class SegmentCopyTracker {}
class AlwaysSharedCopyTracker extends SegmentCopyTracker {
  constructor() {
    AlwaysSharedCopyTracker_instance = null;
    super();
    AlwaysSharedCopyTracker_instance = this;
  }
  c22() {
    return true;
  }
  f22() {
    return Unit_instance;
  }
}
class UnsafeBufferOperations {}
class SegmentReadContextImpl$1 {
  m21(segment, offset) {
    return segment.l20(offset);
  }
}
class SegmentWriteContextImpl$1 {
  o22(segment, offset, value) {
    segment.h22(offset, value);
  }
  n22(segment, offset, b0, b1) {
    segment.i22(offset, b0, b1);
  }
  m22(segment, offset, b0, b1, b2) {
    segment.j22(offset, b0, b1, b2);
  }
  l22(segment, offset, b0, b1, b2, b3) {
    segment.k22(offset, b0, b1, b2, b3);
  }
}
class BufferIterationContextImpl$1 {
  m21(segment, offset) {
    return get_SegmentReadContextImpl().m21(segment, offset);
  }
}
class IOException extends Exception {
  static r22() {
    var $this = this.ce();
    init_kotlinx_io_IOException($this);
    return $this;
  }
  static s22(message) {
    var $this = this.de(message);
    init_kotlinx_io_IOException($this);
    return $this;
  }
  static t22(message, cause) {
    var $this = this.ee(message, cause);
    init_kotlinx_io_IOException($this);
    return $this;
  }
}
class EOFException extends IOException {
  static u22() {
    var $this = this.r22();
    init_kotlinx_io_EOFException($this);
    return $this;
  }
  static n1z(message) {
    var $this = this.s22(message);
    init_kotlinx_io_EOFException($this);
    return $this;
  }
}
class SegmentPool {
  constructor() {
    this.v20_1 = 0;
    this.w20_1 = 0;
  }
  x20() {
    return Companion_instance.a22();
  }
  n21(segment) {
  }
  e22() {
    return AlwaysSharedCopyTracker_getInstance();
  }
}
//endregion
function get_HEX_DIGIT_CHARS() {
  _init_properties__Util_kt__g8tcl9();
  return HEX_DIGIT_CHARS;
}
var HEX_DIGIT_CHARS;
function checkBounds(size, startIndex, endIndex) {
  _init_properties__Util_kt__g8tcl9();
  if (startIndex < 0n || endIndex > size) {
    throw IndexOutOfBoundsException.ke('startIndex (' + startIndex.toString() + ') and endIndex (' + endIndex.toString() + ') are not within the range [0..size(' + size.toString() + '))');
  }
  if (startIndex > endIndex) {
    throw IllegalArgumentException.i2('startIndex (' + startIndex.toString() + ') > endIndex (' + endIndex.toString() + ')');
  }
}
function checkOffsetAndCount(size, offset, byteCount) {
  _init_properties__Util_kt__g8tcl9();
  if (offset < 0n || offset > size || subtract(size, offset) < byteCount || byteCount < 0n) {
    throw IllegalArgumentException.i2('offset (' + offset.toString() + ') and byteCount (' + byteCount.toString() + ') are not within the range [0..size(' + size.toString() + '))');
  }
}
var properties_initialized__Util_kt_67kc5b;
function _init_properties__Util_kt__g8tcl9() {
  if (!properties_initialized__Util_kt_67kc5b) {
    properties_initialized__Util_kt_67kc5b = true;
    // Inline function 'kotlin.charArrayOf' call
    HEX_DIGIT_CHARS = charArrayOf([_Char___init__impl__6a9atx(48), _Char___init__impl__6a9atx(49), _Char___init__impl__6a9atx(50), _Char___init__impl__6a9atx(51), _Char___init__impl__6a9atx(52), _Char___init__impl__6a9atx(53), _Char___init__impl__6a9atx(54), _Char___init__impl__6a9atx(55), _Char___init__impl__6a9atx(56), _Char___init__impl__6a9atx(57), _Char___init__impl__6a9atx(97), _Char___init__impl__6a9atx(98), _Char___init__impl__6a9atx(99), _Char___init__impl__6a9atx(100), _Char___init__impl__6a9atx(101), _Char___init__impl__6a9atx(102)]);
  }
}
function throwEof($this, byteCount) {
  throw EOFException.n1z("Buffer doesn't contain required number of bytes (size: " + $this.l2().toString() + ', required: ' + byteCount.toString() + ')');
}
function indexOf(_this__u8e3s4, byte, startIndex, endIndex) {
  startIndex = startIndex === VOID ? 0n : startIndex;
  endIndex = endIndex === VOID ? _this__u8e3s4.l2() : endIndex;
  // Inline function 'kotlin.comparisons.minOf' call
  var b = _this__u8e3s4.l2();
  var endOffset = endIndex <= b ? endIndex : b;
  checkBounds(_this__u8e3s4.l2(), startIndex, endOffset);
  if (startIndex === endOffset)
    return -1n;
  $l$block_1: {
    // Inline function 'kotlinx.io.seek' call
    if (_this__u8e3s4.h1z_1 == null) {
      if (-1n === -1n) {
        return -1n;
      }
      var segment = null;
      var offset = -1n;
      do {
        // Inline function 'kotlin.check' call
        if (!(endOffset > offset)) {
          throw IllegalStateException.o('Check failed.');
        }
        ensureNotNull(segment);
        var tmp = segment;
        // Inline function 'kotlin.comparisons.maxOf' call
        var a = convertToInt(subtract(startIndex, offset));
        var tmp_0 = Math.max(a, 0);
        var tmp0 = segment.l2();
        // Inline function 'kotlin.comparisons.minOf' call
        var b_0 = convertToInt(subtract(endOffset, offset));
        var tmp$ret$5 = Math.min(tmp0, b_0);
        var idx = indexOf_0(tmp, byte, tmp_0, tmp$ret$5);
        if (!(idx === -1)) {
          return add(offset, fromInt(idx));
        }
        var tmp0_0 = offset;
        // Inline function 'kotlin.Long.plus' call
        var other = segment.l2();
        offset = add(tmp0_0, fromInt(other));
        segment = segment.y1z_1;
      }
       while (!(segment == null) && offset < endOffset);
      return -1n;
    }
    if (subtract(_this__u8e3s4.l2(), startIndex) < startIndex) {
      var s = _this__u8e3s4.i1z_1;
      var offset_0 = _this__u8e3s4.l2();
      $l$loop: while (!(s == null) && offset_0 > startIndex) {
        offset_0 = subtract(offset_0, fromInt(s.v1z_1 - s.u1z_1 | 0));
        if (offset_0 <= startIndex)
          break $l$loop;
        s = s.z1z_1;
      }
      var tmp0_1 = s;
      var o = offset_0;
      if (o === -1n) {
        return -1n;
      }
      var segment_0 = tmp0_1;
      var offset_1 = o;
      do {
        // Inline function 'kotlin.check' call
        if (!(endOffset > offset_1)) {
          throw IllegalStateException.o('Check failed.');
        }
        ensureNotNull(segment_0);
        var tmp_1 = segment_0;
        // Inline function 'kotlin.comparisons.maxOf' call
        var a_0 = convertToInt(subtract(startIndex, offset_1));
        var tmp_2 = Math.max(a_0, 0);
        var tmp0_2 = segment_0.l2();
        // Inline function 'kotlin.comparisons.minOf' call
        var b_1 = convertToInt(subtract(endOffset, offset_1));
        var tmp$ret$10 = Math.min(tmp0_2, b_1);
        var idx_0 = indexOf_0(tmp_1, byte, tmp_2, tmp$ret$10);
        if (!(idx_0 === -1)) {
          return add(offset_1, fromInt(idx_0));
        }
        var tmp0_3 = offset_1;
        // Inline function 'kotlin.Long.plus' call
        var other_0 = segment_0.l2();
        offset_1 = add(tmp0_3, fromInt(other_0));
        segment_0 = segment_0.y1z_1;
      }
       while (!(segment_0 == null) && offset_1 < endOffset);
      return -1n;
    } else {
      var s_0 = _this__u8e3s4.h1z_1;
      var offset_2 = 0n;
      $l$loop_0: while (!(s_0 == null)) {
        var tmp0_4 = offset_2;
        // Inline function 'kotlin.Long.plus' call
        var other_1 = s_0.v1z_1 - s_0.u1z_1 | 0;
        var nextOffset = add(tmp0_4, fromInt(other_1));
        if (nextOffset > startIndex)
          break $l$loop_0;
        s_0 = s_0.y1z_1;
        offset_2 = nextOffset;
      }
      var tmp0_5 = s_0;
      var o_0 = offset_2;
      if (o_0 === -1n) {
        return -1n;
      }
      var segment_1 = tmp0_5;
      var offset_3 = o_0;
      do {
        // Inline function 'kotlin.check' call
        if (!(endOffset > offset_3)) {
          throw IllegalStateException.o('Check failed.');
        }
        ensureNotNull(segment_1);
        var tmp_3 = segment_1;
        // Inline function 'kotlin.comparisons.maxOf' call
        var a_1 = convertToInt(subtract(startIndex, offset_3));
        var tmp_4 = Math.max(a_1, 0);
        var tmp0_6 = segment_1.l2();
        // Inline function 'kotlin.comparisons.minOf' call
        var b_2 = convertToInt(subtract(endOffset, offset_3));
        var tmp$ret$16 = Math.min(tmp0_6, b_2);
        var idx_1 = indexOf_0(tmp_3, byte, tmp_4, tmp$ret$16);
        if (!(idx_1 === -1)) {
          return add(offset_3, fromInt(idx_1));
        }
        var tmp0_7 = offset_3;
        // Inline function 'kotlin.Long.plus' call
        var other_2 = segment_1.l2();
        offset_3 = add(tmp0_7, fromInt(other_2));
        segment_1 = segment_1.y1z_1;
      }
       while (!(segment_1 == null) && offset_3 < endOffset);
      return -1n;
    }
  }
}
function readByteString(_this__u8e3s4, byteCount) {
  return UnsafeByteStringOperations_instance.g1z(readByteArray_0(_this__u8e3s4, byteCount));
}
function buffered(_this__u8e3s4) {
  return new RealSource(_this__u8e3s4);
}
var Companion_instance;
function Companion_getInstance() {
  return Companion_instance;
}
function init_kotlinx_io_Segment(_this__u8e3s4) {
  _this__u8e3s4.u1z_1 = 0;
  _this__u8e3s4.v1z_1 = 0;
  _this__u8e3s4.w1z_1 = null;
  _this__u8e3s4.x1z_1 = false;
  _this__u8e3s4.y1z_1 = null;
  _this__u8e3s4.z1z_1 = null;
}
function isEmpty(_this__u8e3s4) {
  return _this__u8e3s4.l2() === 0;
}
var AlwaysSharedCopyTracker_instance;
function AlwaysSharedCopyTracker_getInstance() {
  if (AlwaysSharedCopyTracker_instance === VOID)
    new AlwaysSharedCopyTracker();
  return AlwaysSharedCopyTracker_instance;
}
function indexOf_0(_this__u8e3s4, byte, startOffset, endOffset) {
  // Inline function 'kotlin.require' call
  if (!(0 <= startOffset ? startOffset < _this__u8e3s4.l2() : false)) {
    var message = '' + startOffset;
    throw IllegalArgumentException.i2(toString(message));
  }
  // Inline function 'kotlin.require' call
  if (!(startOffset <= endOffset ? endOffset <= _this__u8e3s4.l2() : false)) {
    var message_0 = '' + endOffset;
    throw IllegalArgumentException.i2(toString(message_0));
  }
  var p = _this__u8e3s4.u1z_1;
  var data = _this__u8e3s4.g22(true);
  var inductionVariable = startOffset;
  if (inductionVariable < endOffset)
    do {
      var idx = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      if (data[p + idx | 0] === byte) {
        return idx;
      }
    }
     while (inductionVariable < endOffset);
  return -1;
}
function readByteArray(_this__u8e3s4) {
  return readByteArrayImpl(_this__u8e3s4, -1);
}
function readByteArray_0(_this__u8e3s4, byteCount) {
  // Inline function 'kotlinx.io.checkByteCount' call
  var byteCount_0 = fromInt(byteCount);
  // Inline function 'kotlin.require' call
  if (!(byteCount_0 >= 0n)) {
    var message = 'byteCount (' + byteCount_0.toString() + ') < 0';
    throw IllegalArgumentException.i2(toString(message));
  }
  return readByteArrayImpl(_this__u8e3s4, byteCount);
}
function indexOf_1(_this__u8e3s4, byte, startIndex, endIndex) {
  startIndex = startIndex === VOID ? 0n : startIndex;
  endIndex = endIndex === VOID ? 9223372036854775807n : endIndex;
  // Inline function 'kotlin.require' call
  if (!(0n <= startIndex ? startIndex <= endIndex : false)) {
    var tmp;
    if (endIndex < 0n) {
      tmp = 'startIndex (' + startIndex.toString() + ') and endIndex (' + endIndex.toString() + ') should be non negative';
    } else {
      tmp = 'startIndex (' + startIndex.toString() + ') is not within the range [0..endIndex(' + endIndex.toString() + '))';
    }
    var message = tmp;
    throw IllegalArgumentException.i2(toString(message));
  }
  if (startIndex === endIndex)
    return -1n;
  var offset = startIndex;
  $l$loop: while (true) {
    var tmp_0;
    if (offset < endIndex) {
      // Inline function 'kotlin.Long.plus' call
      var this_0 = offset;
      var tmp$ret$2 = add(this_0, fromInt(1));
      tmp_0 = _this__u8e3s4.r1z(tmp$ret$2);
    } else {
      tmp_0 = false;
    }
    if (!tmp_0) {
      break $l$loop;
    }
    var tmp_1 = _this__u8e3s4.o1z();
    var tmp_2 = offset;
    // Inline function 'kotlin.comparisons.minOf' call
    var b = _this__u8e3s4.o1z().l2();
    var tmp$ret$3 = endIndex <= b ? endIndex : b;
    var idx = indexOf(tmp_1, byte, tmp_2, tmp$ret$3);
    if (!(idx === -1n)) {
      return idx;
    }
    offset = _this__u8e3s4.o1z().l2();
  }
  return -1n;
}
function readByteArrayImpl(_this__u8e3s4, size) {
  var arraySize = size;
  if (size === -1) {
    var fetchSize = 2147483647n;
    while (_this__u8e3s4.o1z().l2() < 2147483647n && _this__u8e3s4.r1z(fetchSize)) {
      // Inline function 'kotlin.Long.times' call
      var this_0 = fetchSize;
      fetchSize = multiply(this_0, fromInt(2));
    }
    // Inline function 'kotlin.check' call
    if (!(_this__u8e3s4.o1z().l2() < 2147483647n)) {
      var message = "Can't create an array of size " + _this__u8e3s4.o1z().l2().toString();
      throw IllegalStateException.o(toString(message));
    }
    arraySize = convertToInt(_this__u8e3s4.o1z().l2());
  } else {
    _this__u8e3s4.q1z(fromInt(size));
  }
  var array = new Int8Array(arraySize);
  readTo(_this__u8e3s4.o1z(), array);
  return array;
}
function readTo(_this__u8e3s4, sink, startIndex, endIndex) {
  startIndex = startIndex === VOID ? 0 : startIndex;
  endIndex = endIndex === VOID ? sink.length : endIndex;
  // Inline function 'kotlinx.io.checkBounds' call
  var size = sink.length;
  checkBounds(fromInt(size), fromInt(startIndex), fromInt(endIndex));
  var offset = startIndex;
  while (offset < endIndex) {
    var bytesRead = _this__u8e3s4.n20(sink, offset, endIndex);
    if (bytesRead === -1) {
      throw EOFException.n1z('Source exhausted before reading ' + (endIndex - startIndex | 0) + ' bytes. ' + ('Only ' + bytesRead + ' bytes were read.'));
    }
    offset = offset + bytesRead | 0;
  }
}
function readString(_this__u8e3s4, byteCount) {
  _this__u8e3s4.q1z(byteCount);
  return commonReadUtf8(_this__u8e3s4.o1z(), byteCount);
}
function readString_0(_this__u8e3s4) {
  return commonReadUtf8(_this__u8e3s4, _this__u8e3s4.l2());
}
function readString_1(_this__u8e3s4) {
  _this__u8e3s4.r1z(9223372036854775807n);
  return commonReadUtf8(_this__u8e3s4.o1z(), _this__u8e3s4.o1z().l2());
}
function writeString(_this__u8e3s4, string, startIndex, endIndex) {
  startIndex = startIndex === VOID ? 0 : startIndex;
  endIndex = endIndex === VOID ? string.length : endIndex;
  // Inline function 'kotlinx.io.checkBounds' call
  var size = string.length;
  checkBounds(fromInt(size), fromInt(startIndex), fromInt(endIndex));
  // Inline function 'kotlinx.io.writeToInternalBuffer' call
  // Inline function 'kotlinx.io.commonWriteUtf8' call
  var this_0 = _this__u8e3s4.o1z();
  var i = startIndex;
  while (i < endIndex) {
    var p0 = i;
    // Inline function 'kotlin.code' call
    var this_1 = charCodeAt(string, p0);
    var c = Char__toInt_impl_vasixd(this_1);
    if (c < 128) {
      $l$block_0: {
        // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
        var tail = this_0.u20(1);
        var ctx = get_SegmentWriteContextImpl();
        var segmentOffset = -i | 0;
        // Inline function 'kotlin.comparisons.minOf' call
        var b = i + tail.z20() | 0;
        var runLimit = Math.min(endIndex, b);
        var _unary__edvuaz = i;
        i = _unary__edvuaz + 1 | 0;
        ctx.o22(tail, segmentOffset + _unary__edvuaz | 0, toByte(c));
        $l$loop: while (i < runLimit) {
          var p0_0 = i;
          // Inline function 'kotlin.code' call
          var this_2 = charCodeAt(string, p0_0);
          c = Char__toInt_impl_vasixd(this_2);
          if (c >= 128)
            break $l$loop;
          var _unary__edvuaz_0 = i;
          i = _unary__edvuaz_0 + 1 | 0;
          ctx.o22(tail, segmentOffset + _unary__edvuaz_0 | 0, toByte(c));
        }
        var bytesWritten = i + segmentOffset | 0;
        if (bytesWritten === 1) {
          tail.v1z_1 = tail.v1z_1 + bytesWritten | 0;
          var tmp = this_0;
          // Inline function 'kotlin.Long.plus' call
          var this_3 = this_0.j1z_1;
          tmp.j1z_1 = add(this_3, fromInt(bytesWritten));
          break $l$block_0;
        }
        // Inline function 'kotlin.check' call
        if (!(0 <= bytesWritten ? bytesWritten <= tail.z20() : false)) {
          var message = 'Invalid number of bytes written: ' + bytesWritten + '. Should be in 0..' + tail.z20();
          throw IllegalStateException.o(toString(message));
        }
        if (!(bytesWritten === 0)) {
          tail.v1z_1 = tail.v1z_1 + bytesWritten | 0;
          var tmp_0 = this_0;
          // Inline function 'kotlin.Long.plus' call
          var this_4 = this_0.j1z_1;
          tmp_0.j1z_1 = add(this_4, fromInt(bytesWritten));
          break $l$block_0;
        }
        if (isEmpty(tail)) {
          this_0.o21();
        }
      }
    } else if (c < 2048) {
      $l$block_2: {
        // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
        var tail_0 = this_0.u20(2);
        get_SegmentWriteContextImpl().n22(tail_0, 0, toByte(c >> 6 | 192), toByte(c & 63 | 128));
        var bytesWritten_0 = 2;
        if (bytesWritten_0 === 2) {
          tail_0.v1z_1 = tail_0.v1z_1 + bytesWritten_0 | 0;
          var tmp_1 = this_0;
          // Inline function 'kotlin.Long.plus' call
          var this_5 = this_0.j1z_1;
          tmp_1.j1z_1 = add(this_5, fromInt(bytesWritten_0));
          break $l$block_2;
        }
        // Inline function 'kotlin.check' call
        if (!(0 <= bytesWritten_0 ? bytesWritten_0 <= tail_0.z20() : false)) {
          var message_0 = 'Invalid number of bytes written: ' + bytesWritten_0 + '. Should be in 0..' + tail_0.z20();
          throw IllegalStateException.o(toString(message_0));
        }
        if (!(bytesWritten_0 === 0)) {
          tail_0.v1z_1 = tail_0.v1z_1 + bytesWritten_0 | 0;
          var tmp_2 = this_0;
          // Inline function 'kotlin.Long.plus' call
          var this_6 = this_0.j1z_1;
          tmp_2.j1z_1 = add(this_6, fromInt(bytesWritten_0));
          break $l$block_2;
        }
        if (isEmpty(tail_0)) {
          this_0.o21();
        }
      }
      i = i + 1 | 0;
    } else if (c < 55296 || c > 57343) {
      $l$block_4: {
        // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
        var tail_1 = this_0.u20(3);
        get_SegmentWriteContextImpl().m22(tail_1, 0, toByte(c >> 12 | 224), toByte(c >> 6 & 63 | 128), toByte(c & 63 | 128));
        var bytesWritten_1 = 3;
        if (bytesWritten_1 === 3) {
          tail_1.v1z_1 = tail_1.v1z_1 + bytesWritten_1 | 0;
          var tmp_3 = this_0;
          // Inline function 'kotlin.Long.plus' call
          var this_7 = this_0.j1z_1;
          tmp_3.j1z_1 = add(this_7, fromInt(bytesWritten_1));
          break $l$block_4;
        }
        // Inline function 'kotlin.check' call
        if (!(0 <= bytesWritten_1 ? bytesWritten_1 <= tail_1.z20() : false)) {
          var message_1 = 'Invalid number of bytes written: ' + bytesWritten_1 + '. Should be in 0..' + tail_1.z20();
          throw IllegalStateException.o(toString(message_1));
        }
        if (!(bytesWritten_1 === 0)) {
          tail_1.v1z_1 = tail_1.v1z_1 + bytesWritten_1 | 0;
          var tmp_4 = this_0;
          // Inline function 'kotlin.Long.plus' call
          var this_8 = this_0.j1z_1;
          tmp_4.j1z_1 = add(this_8, fromInt(bytesWritten_1));
          break $l$block_4;
        }
        if (isEmpty(tail_1)) {
          this_0.o21();
        }
      }
      i = i + 1 | 0;
    } else {
      var tmp_5;
      if ((i + 1 | 0) < endIndex) {
        var p0_1 = i + 1 | 0;
        // Inline function 'kotlin.code' call
        var this_9 = charCodeAt(string, p0_1);
        tmp_5 = Char__toInt_impl_vasixd(this_9);
      } else {
        tmp_5 = 0;
      }
      var low = tmp_5;
      if (c > 56319 || !(56320 <= low ? low <= 57343 : false)) {
        // Inline function 'kotlin.code' call
        var this_10 = _Char___init__impl__6a9atx(63);
        var tmp$ret$29 = Char__toInt_impl_vasixd(this_10);
        this_0.i21(toByte(tmp$ret$29));
        i = i + 1 | 0;
      } else {
        var codePoint = 65536 + ((c & 1023) << 10 | low & 1023) | 0;
        $l$block_6: {
          // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
          var tail_2 = this_0.u20(4);
          get_SegmentWriteContextImpl().l22(tail_2, 0, toByte(codePoint >> 18 | 240), toByte(codePoint >> 12 & 63 | 128), toByte(codePoint >> 6 & 63 | 128), toByte(codePoint & 63 | 128));
          var bytesWritten_2 = 4;
          if (bytesWritten_2 === 4) {
            tail_2.v1z_1 = tail_2.v1z_1 + bytesWritten_2 | 0;
            var tmp_6 = this_0;
            // Inline function 'kotlin.Long.plus' call
            var this_11 = this_0.j1z_1;
            tmp_6.j1z_1 = add(this_11, fromInt(bytesWritten_2));
            break $l$block_6;
          }
          // Inline function 'kotlin.check' call
          if (!(0 <= bytesWritten_2 ? bytesWritten_2 <= tail_2.z20() : false)) {
            var message_2 = 'Invalid number of bytes written: ' + bytesWritten_2 + '. Should be in 0..' + tail_2.z20();
            throw IllegalStateException.o(toString(message_2));
          }
          if (!(bytesWritten_2 === 0)) {
            tail_2.v1z_1 = tail_2.v1z_1 + bytesWritten_2 | 0;
            var tmp_7 = this_0;
            // Inline function 'kotlin.Long.plus' call
            var this_12 = this_0.j1z_1;
            tmp_7.j1z_1 = add(this_12, fromInt(bytesWritten_2));
            break $l$block_6;
          }
          if (isEmpty(tail_2)) {
            this_0.o21();
          }
        }
        i = i + 2 | 0;
      }
    }
  }
  _this__u8e3s4.e20();
}
function commonReadUtf8(_this__u8e3s4, byteCount) {
  if (byteCount === 0n)
    return '';
  // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.forEachSegment' call
  var curr = _this__u8e3s4.h1z_1;
  while (!(curr == null)) {
    get_SegmentReadContextImpl();
    if (fromInt(curr.l2()) >= byteCount) {
      var result = '';
      // Inline function 'kotlinx.io.unsafe.withData' call
      var tmp0 = curr.g22(true);
      var tmp2 = curr.u1z_1;
      var tmp0_0 = curr.v1z_1;
      // Inline function 'kotlin.math.min' call
      var b = tmp2 + convertToInt(byteCount) | 0;
      var tmp$ret$4 = Math.min(tmp0_0, b);
      result = commonToUtf8String(tmp0, tmp2, tmp$ret$4);
      _this__u8e3s4.m20(byteCount);
      return result;
    }
    return commonToUtf8String(readByteArray_0(_this__u8e3s4, convertToInt(byteCount)));
  }
  // Inline function 'kotlin.error' call
  var message = 'Unreacheable';
  throw IllegalStateException.o(toString(message));
}
function commonToUtf8String(_this__u8e3s4, beginIndex, endIndex) {
  beginIndex = beginIndex === VOID ? 0 : beginIndex;
  endIndex = endIndex === VOID ? _this__u8e3s4.length : endIndex;
  if (beginIndex < 0 || endIndex > _this__u8e3s4.length || beginIndex > endIndex) {
    throw IndexOutOfBoundsException.ke('size=' + _this__u8e3s4.length + ' beginIndex=' + beginIndex + ' endIndex=' + endIndex);
  }
  var chars = charArray(endIndex - beginIndex | 0);
  var length = 0;
  // Inline function 'kotlinx.io.internal.processUtf16Chars' call
  var index = beginIndex;
  while (index < endIndex) {
    var b0 = _this__u8e3s4[index];
    if (b0 >= 0) {
      var c = numberToChar(b0);
      var _unary__edvuaz = length;
      length = _unary__edvuaz + 1 | 0;
      chars[_unary__edvuaz] = c;
      index = index + 1 | 0;
      while (index < endIndex && _this__u8e3s4[index] >= 0) {
        var _unary__edvuaz_0 = index;
        index = _unary__edvuaz_0 + 1 | 0;
        var c_0 = numberToChar(_this__u8e3s4[_unary__edvuaz_0]);
        var _unary__edvuaz_1 = length;
        length = _unary__edvuaz_1 + 1 | 0;
        chars[_unary__edvuaz_1] = c_0;
      }
    } else {
      // Inline function 'kotlinx.io.shr' call
      if (b0 >> 5 === -2) {
        var tmp = index;
        var tmp2 = index;
        var tmp$ret$4;
        $l$block_0: {
          // Inline function 'kotlinx.io.internal.process2Utf8Bytes' call
          if (endIndex <= (tmp2 + 1 | 0)) {
            var c_1 = numberToChar(65533);
            var _unary__edvuaz_2 = length;
            length = _unary__edvuaz_2 + 1 | 0;
            chars[_unary__edvuaz_2] = c_1;
            tmp$ret$4 = 1;
            break $l$block_0;
          }
          var b0_0 = _this__u8e3s4[tmp2];
          var b1 = _this__u8e3s4[tmp2 + 1 | 0];
          // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
          // Inline function 'kotlinx.io.and' call
          if (!((b1 & 192) === 128)) {
            var c_2 = numberToChar(65533);
            var _unary__edvuaz_3 = length;
            length = _unary__edvuaz_3 + 1 | 0;
            chars[_unary__edvuaz_3] = c_2;
            tmp$ret$4 = 1;
            break $l$block_0;
          }
          var codePoint = 3968 ^ b1 ^ b0_0 << 6;
          if (codePoint < 128) {
            var c_3 = numberToChar(65533);
            var _unary__edvuaz_4 = length;
            length = _unary__edvuaz_4 + 1 | 0;
            chars[_unary__edvuaz_4] = c_3;
          } else {
            var c_4 = numberToChar(codePoint);
            var _unary__edvuaz_5 = length;
            length = _unary__edvuaz_5 + 1 | 0;
            chars[_unary__edvuaz_5] = c_4;
          }
          tmp$ret$4 = 2;
        }
        index = tmp + tmp$ret$4 | 0;
      } else {
        // Inline function 'kotlinx.io.shr' call
        if (b0 >> 4 === -2) {
          var tmp_0 = index;
          var tmp2_0 = index;
          var tmp$ret$16;
          $l$block_4: {
            // Inline function 'kotlinx.io.internal.process3Utf8Bytes' call
            if (endIndex <= (tmp2_0 + 2 | 0)) {
              var c_5 = numberToChar(65533);
              var _unary__edvuaz_6 = length;
              length = _unary__edvuaz_6 + 1 | 0;
              chars[_unary__edvuaz_6] = c_5;
              var tmp_1;
              if (endIndex <= (tmp2_0 + 1 | 0)) {
                tmp_1 = true;
              } else {
                // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
                // Inline function 'kotlinx.io.and' call
                tmp_1 = !((_this__u8e3s4[tmp2_0 + 1 | 0] & 192) === 128);
              }
              if (tmp_1) {
                tmp$ret$16 = 1;
                break $l$block_4;
              } else {
                tmp$ret$16 = 2;
                break $l$block_4;
              }
            }
            var b0_1 = _this__u8e3s4[tmp2_0];
            var b1_0 = _this__u8e3s4[tmp2_0 + 1 | 0];
            // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
            // Inline function 'kotlinx.io.and' call
            if (!((b1_0 & 192) === 128)) {
              var c_6 = numberToChar(65533);
              var _unary__edvuaz_7 = length;
              length = _unary__edvuaz_7 + 1 | 0;
              chars[_unary__edvuaz_7] = c_6;
              tmp$ret$16 = 1;
              break $l$block_4;
            }
            var b2 = _this__u8e3s4[tmp2_0 + 2 | 0];
            // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
            // Inline function 'kotlinx.io.and' call
            if (!((b2 & 192) === 128)) {
              var c_7 = numberToChar(65533);
              var _unary__edvuaz_8 = length;
              length = _unary__edvuaz_8 + 1 | 0;
              chars[_unary__edvuaz_8] = c_7;
              tmp$ret$16 = 2;
              break $l$block_4;
            }
            var codePoint_0 = -123008 ^ b2 ^ b1_0 << 6 ^ b0_1 << 12;
            if (codePoint_0 < 2048) {
              var c_8 = numberToChar(65533);
              var _unary__edvuaz_9 = length;
              length = _unary__edvuaz_9 + 1 | 0;
              chars[_unary__edvuaz_9] = c_8;
            } else if (55296 <= codePoint_0 ? codePoint_0 <= 57343 : false) {
              var c_9 = numberToChar(65533);
              var _unary__edvuaz_10 = length;
              length = _unary__edvuaz_10 + 1 | 0;
              chars[_unary__edvuaz_10] = c_9;
            } else {
              var c_10 = numberToChar(codePoint_0);
              var _unary__edvuaz_11 = length;
              length = _unary__edvuaz_11 + 1 | 0;
              chars[_unary__edvuaz_11] = c_10;
            }
            tmp$ret$16 = 3;
          }
          index = tmp_0 + tmp$ret$16 | 0;
        } else {
          // Inline function 'kotlinx.io.shr' call
          if (b0 >> 3 === -2) {
            var tmp_2 = index;
            var tmp2_1 = index;
            var tmp$ret$36;
            $l$block_10: {
              // Inline function 'kotlinx.io.internal.process4Utf8Bytes' call
              if (endIndex <= (tmp2_1 + 3 | 0)) {
                if (!(65533 === 65533)) {
                  var c_11 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                  var _unary__edvuaz_12 = length;
                  length = _unary__edvuaz_12 + 1 | 0;
                  chars[_unary__edvuaz_12] = c_11;
                  var c_12 = numberToChar((65533 & 1023) + 56320 | 0);
                  var _unary__edvuaz_13 = length;
                  length = _unary__edvuaz_13 + 1 | 0;
                  chars[_unary__edvuaz_13] = c_12;
                } else {
                  var c_13 = _Char___init__impl__6a9atx(65533);
                  var _unary__edvuaz_14 = length;
                  length = _unary__edvuaz_14 + 1 | 0;
                  chars[_unary__edvuaz_14] = c_13;
                }
                var tmp_3;
                if (endIndex <= (tmp2_1 + 1 | 0)) {
                  tmp_3 = true;
                } else {
                  // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
                  // Inline function 'kotlinx.io.and' call
                  tmp_3 = !((_this__u8e3s4[tmp2_1 + 1 | 0] & 192) === 128);
                }
                if (tmp_3) {
                  tmp$ret$36 = 1;
                  break $l$block_10;
                } else {
                  var tmp_4;
                  if (endIndex <= (tmp2_1 + 2 | 0)) {
                    tmp_4 = true;
                  } else {
                    // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
                    // Inline function 'kotlinx.io.and' call
                    tmp_4 = !((_this__u8e3s4[tmp2_1 + 2 | 0] & 192) === 128);
                  }
                  if (tmp_4) {
                    tmp$ret$36 = 2;
                    break $l$block_10;
                  } else {
                    tmp$ret$36 = 3;
                    break $l$block_10;
                  }
                }
              }
              var b0_2 = _this__u8e3s4[tmp2_1];
              var b1_1 = _this__u8e3s4[tmp2_1 + 1 | 0];
              // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
              // Inline function 'kotlinx.io.and' call
              if (!((b1_1 & 192) === 128)) {
                if (!(65533 === 65533)) {
                  var c_14 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                  var _unary__edvuaz_15 = length;
                  length = _unary__edvuaz_15 + 1 | 0;
                  chars[_unary__edvuaz_15] = c_14;
                  var c_15 = numberToChar((65533 & 1023) + 56320 | 0);
                  var _unary__edvuaz_16 = length;
                  length = _unary__edvuaz_16 + 1 | 0;
                  chars[_unary__edvuaz_16] = c_15;
                } else {
                  var c_16 = _Char___init__impl__6a9atx(65533);
                  var _unary__edvuaz_17 = length;
                  length = _unary__edvuaz_17 + 1 | 0;
                  chars[_unary__edvuaz_17] = c_16;
                }
                tmp$ret$36 = 1;
                break $l$block_10;
              }
              var b2_0 = _this__u8e3s4[tmp2_1 + 2 | 0];
              // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
              // Inline function 'kotlinx.io.and' call
              if (!((b2_0 & 192) === 128)) {
                if (!(65533 === 65533)) {
                  var c_17 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                  var _unary__edvuaz_18 = length;
                  length = _unary__edvuaz_18 + 1 | 0;
                  chars[_unary__edvuaz_18] = c_17;
                  var c_18 = numberToChar((65533 & 1023) + 56320 | 0);
                  var _unary__edvuaz_19 = length;
                  length = _unary__edvuaz_19 + 1 | 0;
                  chars[_unary__edvuaz_19] = c_18;
                } else {
                  var c_19 = _Char___init__impl__6a9atx(65533);
                  var _unary__edvuaz_20 = length;
                  length = _unary__edvuaz_20 + 1 | 0;
                  chars[_unary__edvuaz_20] = c_19;
                }
                tmp$ret$36 = 2;
                break $l$block_10;
              }
              var b3 = _this__u8e3s4[tmp2_1 + 3 | 0];
              // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
              // Inline function 'kotlinx.io.and' call
              if (!((b3 & 192) === 128)) {
                if (!(65533 === 65533)) {
                  var c_20 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                  var _unary__edvuaz_21 = length;
                  length = _unary__edvuaz_21 + 1 | 0;
                  chars[_unary__edvuaz_21] = c_20;
                  var c_21 = numberToChar((65533 & 1023) + 56320 | 0);
                  var _unary__edvuaz_22 = length;
                  length = _unary__edvuaz_22 + 1 | 0;
                  chars[_unary__edvuaz_22] = c_21;
                } else {
                  var c_22 = _Char___init__impl__6a9atx(65533);
                  var _unary__edvuaz_23 = length;
                  length = _unary__edvuaz_23 + 1 | 0;
                  chars[_unary__edvuaz_23] = c_22;
                }
                tmp$ret$36 = 3;
                break $l$block_10;
              }
              var codePoint_1 = 3678080 ^ b3 ^ b2_0 << 6 ^ b1_1 << 12 ^ b0_2 << 18;
              if (codePoint_1 > 1114111) {
                if (!(65533 === 65533)) {
                  var c_23 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                  var _unary__edvuaz_24 = length;
                  length = _unary__edvuaz_24 + 1 | 0;
                  chars[_unary__edvuaz_24] = c_23;
                  var c_24 = numberToChar((65533 & 1023) + 56320 | 0);
                  var _unary__edvuaz_25 = length;
                  length = _unary__edvuaz_25 + 1 | 0;
                  chars[_unary__edvuaz_25] = c_24;
                } else {
                  var c_25 = _Char___init__impl__6a9atx(65533);
                  var _unary__edvuaz_26 = length;
                  length = _unary__edvuaz_26 + 1 | 0;
                  chars[_unary__edvuaz_26] = c_25;
                }
              } else if (55296 <= codePoint_1 ? codePoint_1 <= 57343 : false) {
                if (!(65533 === 65533)) {
                  var c_26 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                  var _unary__edvuaz_27 = length;
                  length = _unary__edvuaz_27 + 1 | 0;
                  chars[_unary__edvuaz_27] = c_26;
                  var c_27 = numberToChar((65533 & 1023) + 56320 | 0);
                  var _unary__edvuaz_28 = length;
                  length = _unary__edvuaz_28 + 1 | 0;
                  chars[_unary__edvuaz_28] = c_27;
                } else {
                  var c_28 = _Char___init__impl__6a9atx(65533);
                  var _unary__edvuaz_29 = length;
                  length = _unary__edvuaz_29 + 1 | 0;
                  chars[_unary__edvuaz_29] = c_28;
                }
              } else if (codePoint_1 < 65536) {
                if (!(65533 === 65533)) {
                  var c_29 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                  var _unary__edvuaz_30 = length;
                  length = _unary__edvuaz_30 + 1 | 0;
                  chars[_unary__edvuaz_30] = c_29;
                  var c_30 = numberToChar((65533 & 1023) + 56320 | 0);
                  var _unary__edvuaz_31 = length;
                  length = _unary__edvuaz_31 + 1 | 0;
                  chars[_unary__edvuaz_31] = c_30;
                } else {
                  var c_31 = _Char___init__impl__6a9atx(65533);
                  var _unary__edvuaz_32 = length;
                  length = _unary__edvuaz_32 + 1 | 0;
                  chars[_unary__edvuaz_32] = c_31;
                }
              } else {
                if (!(codePoint_1 === 65533)) {
                  var c_32 = numberToChar((codePoint_1 >>> 10 | 0) + 55232 | 0);
                  var _unary__edvuaz_33 = length;
                  length = _unary__edvuaz_33 + 1 | 0;
                  chars[_unary__edvuaz_33] = c_32;
                  var c_33 = numberToChar((codePoint_1 & 1023) + 56320 | 0);
                  var _unary__edvuaz_34 = length;
                  length = _unary__edvuaz_34 + 1 | 0;
                  chars[_unary__edvuaz_34] = c_33;
                } else {
                  var c_34 = _Char___init__impl__6a9atx(65533);
                  var _unary__edvuaz_35 = length;
                  length = _unary__edvuaz_35 + 1 | 0;
                  chars[_unary__edvuaz_35] = c_34;
                }
              }
              tmp$ret$36 = 4;
            }
            index = tmp_2 + tmp$ret$36 | 0;
          } else {
            var c_35 = _Char___init__impl__6a9atx(65533);
            var _unary__edvuaz_36 = length;
            length = _unary__edvuaz_36 + 1 | 0;
            chars[_unary__edvuaz_36] = c_35;
            index = index + 1 | 0;
          }
        }
      }
    }
  }
  return concatToString(chars, 0, length);
}
function get_SegmentReadContextImpl() {
  _init_properties_UnsafeBufferOperations_kt__xw75gy();
  return SegmentReadContextImpl;
}
var SegmentReadContextImpl;
function get_SegmentWriteContextImpl() {
  _init_properties_UnsafeBufferOperations_kt__xw75gy();
  return SegmentWriteContextImpl;
}
var SegmentWriteContextImpl;
var BufferIterationContextImpl;
var UnsafeBufferOperations_instance;
function UnsafeBufferOperations_getInstance() {
  return UnsafeBufferOperations_instance;
}
var properties_initialized_UnsafeBufferOperations_kt_2xfgoc;
function _init_properties_UnsafeBufferOperations_kt__xw75gy() {
  if (!properties_initialized_UnsafeBufferOperations_kt_2xfgoc) {
    properties_initialized_UnsafeBufferOperations_kt_2xfgoc = true;
    SegmentReadContextImpl = new SegmentReadContextImpl$1();
    SegmentWriteContextImpl = new SegmentWriteContextImpl$1();
    BufferIterationContextImpl = new BufferIterationContextImpl$1();
  }
}
function init_kotlinx_io_IOException(_this__u8e3s4) {
  captureStack(_this__u8e3s4, _this__u8e3s4.q22_1);
}
function init_kotlinx_io_EOFException(_this__u8e3s4) {
  captureStack(_this__u8e3s4, _this__u8e3s4.m1z_1);
}
var SegmentPool_instance;
function SegmentPool_getInstance() {
  return SegmentPool_instance;
}
//region block: post-declaration
initMetadataForInterface(Source, 'Source', VOID, VOID, [AutoCloseable]);
initMetadataForInterface(Sink, 'Sink', VOID, VOID, [AutoCloseable]);
protoOf(Buffer).b21 = write$default;
initMetadataForClass(Buffer, 'Buffer', Buffer, VOID, [Source, Sink]);
initMetadataForClass(PeekSource, 'PeekSource', VOID, VOID, [AutoCloseable]);
initMetadataForClass(RealSource, 'RealSource', VOID, VOID, [Source]);
initMetadataForCompanion(Companion);
initMetadataForClass(Segment, 'Segment');
initMetadataForClass(SegmentCopyTracker, 'SegmentCopyTracker');
initMetadataForObject(AlwaysSharedCopyTracker, 'AlwaysSharedCopyTracker');
initMetadataForObject(UnsafeBufferOperations, 'UnsafeBufferOperations');
initMetadataForClass(SegmentReadContextImpl$1);
initMetadataForClass(SegmentWriteContextImpl$1);
initMetadataForClass(BufferIterationContextImpl$1);
initMetadataForClass(IOException, 'IOException', IOException.r22);
initMetadataForClass(EOFException, 'EOFException', EOFException.u22);
initMetadataForObject(SegmentPool, 'SegmentPool');
//endregion
//region block: init
Companion_instance = new Companion();
UnsafeBufferOperations_instance = new UnsafeBufferOperations();
SegmentPool_instance = new SegmentPool();
//endregion
//region block: exports
export {
  Buffer as Buffergs925ekssbch,
  EOFException as EOFExceptionh831u25jcq9n,
  IOException as IOException1wyutdmfe71nu,
  Source as Source1shr0ps16u4p4,
  indexOf_1 as indexOf29nspdgx2e3ap,
  readByteArray_0 as readByteArray1fhzfwi2j014k,
  readByteArray as readByteArray1ri21h2rciakw,
  readByteString as readByteString2hnsbql6t4ads,
  readString_1 as readString2nvggcfaijfhd,
  readString as readString3v6duspiz33tv,
  readString_0 as readStringo8i62qxt5m4m,
  writeString as writeString33ca4btrgctw7,
};
//endregion

//# sourceMappingURL=kotlinx-io-kotlinx-io-core.mjs.map
