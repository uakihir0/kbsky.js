import {
  Unit_instancev9v8hjid95df as Unit_instance,
  Enum3alwj03lh1n41 as Enum,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  VOID3gxj6tk5isa35 as VOID,
  split2bvyvnrlcifjv as split,
  lastOrNull1aq5oz189qoe1 as lastOrNull,
  IllegalStateExceptionkoljg5n0nrlr as IllegalStateException,
  toString1pkumu07cwy4m as toString,
  ArrayList3it5z8td81qkl as ArrayList,
  ensureNotNull1e947j3ixpazm as ensureNotNull,
  copyToArray2j022khrow2yi as copyToArray,
  getKClass3t8tygqu4lcxf as getKClass,
  arrayOf1akklvh2at202 as arrayOf,
  createKType31ecntyyaay3k as createKType,
  first58ocm7j58k3q as first,
  LinkedHashMap1zhqxkxv3xnkl as LinkedHashMap,
  PrimitiveClasses_getInstanceds06xwqrwfdm as PrimitiveClasses_getInstance,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  isByteArray4nnzfn1x4o3w as isByteArray,
  decodeToString1x4faah2liw2p as decodeToString,
  lazy2hsh8ze7j6ikd as lazy,
  KProperty1ca4yb4wlo496 as KProperty1,
  getPropertyCallableRef3hckxc0xueiaj as getPropertyCallableRef,
  isBlank1dvkhjjvox3p0 as isBlank,
  isInterface3d6p8outrmvmk as isInterface,
  initMetadataForLambda3af3he42mmnh as initMetadataForLambda,
  Companion_getInstancevdtg3uvqmv7f as Companion_getInstance,
  DurationUnit_MILLISECONDS_getInstancen5e0rps4ljgd as DurationUnit_MILLISECONDS_getInstance,
  toDuration7gy6v749ektt as toDuration,
  _Duration___get_inWholeMilliseconds__impl__msfiryaqt4g7dl3tjf as _Duration___get_inWholeMilliseconds__impl__msfiry,
  Duration5ynfiptaqcrg as Duration,
  Exceptiondt2hlxn7j7vw as Exception,
} from './kotlin-kotlin-stdlib.mjs';
import { toByteArray1i3ns5jnoqlv6 as toByteArray } from './ktor-ktor-io.mjs';
import {
  Text_getInstancereo9eglzqyxz as Text_getInstance,
  Image_getInstance1w2artusivcl3 as Image_getInstance,
  Video_getInstance3ujok3n0zpspf as Video_getInstance,
  ContentType1svlpabm9v7iz as ContentType,
  Application_getInstance2wn6cl3kv21f0 as Application_getInstance,
  URLBuilder1nlnzfhn643pn as URLBuilder,
  takeFromkqlcz7c6dx2r as takeFrom,
  MultiPart_getInstance1qrv90sa9uvz5 as MultiPart_getInstance,
  contentType1lwcfjsjo0z8g as contentType,
  Companion_getInstance1fjhglsqufscv as Companion_getInstance_0,
  HeadersBuilder3h7sn3kkvu98m as HeadersBuilder,
  append2z8giuo6jcxrf as append,
  OutgoingContent3t2ohmyam9o76 as OutgoingContent,
  NullBody_instance3jaj4elqoxne0 as NullBody_instance,
  Companion_getInstance3p89xrm3wsm6m as Companion_getInstance_1,
  ParametersBuilder1ry9ntvvg567r as ParametersBuilder,
  Companion_getInstance13wwf84j92s7c as Companion_getInstance_2,
  ByteArrayContent9zol65b22hp0 as ByteArrayContent,
  Urlowwyg1lanrqp as Url,
} from './ktor-ktor-http.mjs';
import {
  HttpClient3584jcajl7sef as HttpClient,
  HttpRequestBuilder15f2nnx9sjuv1 as HttpRequestBuilder,
  url1ln4fngdmzeq5 as url,
  headers24pki7ce1busg as headers,
  timeout39ggydbhmf7b9 as timeout,
  FormBuilder2h86ly8mj760k as FormBuilder,
  formData16t43gxqji6d8 as formData,
  MultiPartFormDataContent67pixgga9hu4 as MultiPartFormDataContent,
  FormDataContent25s3w8cik3m7q as FormDataContent,
  HttpStatement3zxb33q8lku as HttpStatement,
  ProxyBuilder_instancelz60mntltz3k as ProxyBuilder_instance,
  Plugin_getInstance3c2cbcxt5w9x2 as Plugin_getInstance,
  DefaultClientWebSocketSession1n8ok3lng45wy as DefaultClientWebSocketSession,
  webSocket1o6hkyb7h15pm as webSocket,
} from './ktor-ktor-client-core.mjs';
import {
  TypeInfo2nbxsuf4v8os2 as TypeInfo,
  toMap1agg4casweo9p as toMap,
} from './ktor-ktor-utils.mjs';
import { Jsonsmkyu9xjl7fv as Json } from './kotlinx-serialization-kotlinx-serialization-json.mjs';
import {
  readText30p9xkeoodw49 as readText,
  readBytes28s4uf7ekyufa as readBytes,
  Binary3tlzyfojm51s4 as Binary,
  Text3e6ukp9joohql as Text,
} from './ktor-ktor-websockets.mjs';
import {
  CoroutineScopefcb5f5dwqcas as CoroutineScope,
  launch1c91vkjzdi9sd as launch,
  cancel2en0dn4yvpufo as cancel,
} from './kotlinx-coroutines-core.mjs';
//region block: imports
//endregion
//region block: pre-declaration
class Type extends Enum {}
class Companion {
  i46(key, value) {
    return new HttpParameter(Type_QUERY_getInstance(), key, value);
  }
  j46(key, fileName, fileBody) {
    return new HttpParameter(Type_FILE_getInstance(), key, null, fileName, fileBody);
  }
  k46(json) {
    return new HttpParameter(Type_JSON_getInstance(), 'json', null, 'file.json', toByteArray(json));
  }
}
class HttpParameter {
  constructor(type, key, value, fileName, fileBody) {
    value = value === VOID ? null : value;
    fileName = fileName === VOID ? null : fileName;
    fileBody = fileBody === VOID ? null : fileBody;
    this.l46_1 = type;
    this.m46_1 = key;
    this.n46_1 = value;
    this.o46_1 = fileName;
    this.p46_1 = fileBody;
  }
  q46() {
    var tmp0_safe_receiver = this.o46_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : split(tmp0_safe_receiver, ['.']);
    return tmp1_safe_receiver == null ? null : lastOrNull(tmp1_safe_receiver);
  }
  r46() {
    switch (this.q46()) {
      case 'txt':
        return Text_getInstance().w2k_1;
      case 'html':
        return Text_getInstance().z2k_1;
      case 'css':
        return Text_getInstance().x2k_1;
      case 'csv':
        return Text_getInstance().y2k_1;
      case 'jpg':
      case 'jpeg':
        return Image_getInstance().d2k_1;
      case 'png':
        return Image_getInstance().f2k_1;
      case 'gif':
        return Image_getInstance().a2k_1;
      case 'svg':
        return Image_getInstance().g2k_1;
      case 'mpeg':
        return Video_getInstance().g2l_1;
      case 'mp4':
        return Video_getInstance().h2l_1;
      case 'mov':
        return Video_getInstance().j2l_1;
      case 'webm':
        return ContentType.t2i('video', 'webm');
      case 'json':
        return Application_getInstance().b2j_1;
      case 'xml':
        return Application_getInstance().h2j_1;
      case 'zip':
        return Application_getInstance().k2j_1;
      case 'pdf':
        return Application_getInstance().n2j_1;
    }
    return Application_getInstance().e2j_1;
  }
}
class HttpRequest {
  constructor() {
    this.s46_1 = 'https';
    this.t46_1 = null;
    this.u46_1 = null;
    this.v46_1 = null;
    this.w46_1 = null;
    this.x46_1 = null;
    this.y46_1 = 'kHttpClient/1.0';
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.z46_1 = ArrayList.n2();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.a47_1 = LinkedHashMap.l5();
    this.b47_1 = false;
    this.c47_1 = false;
    this.d47_1 = true;
    this.e47_1 = false;
    this.f47_1 = null;
    this.g47_1 = null;
    this.h47_1 = null;
  }
  k47(url) {
    // Inline function 'kotlin.also' call
    this.w46_1 = url;
    return this;
  }
  l47(accept) {
    // Inline function 'kotlin.also' call
    this.x46_1 = accept;
    return this;
  }
  m47(key, value) {
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.collections.set' call
    this.a47_1.f4(key, value);
    return this;
  }
  n47(skipSSLValidation) {
    // Inline function 'kotlin.also' call
    this.e47_1 = skipSSLValidation;
    return this;
  }
  o47(key, value) {
    // Inline function 'kotlin.also' call
    this.z46_1.z1(Companion_instance.i46(key, toString(value)));
    return this;
  }
  p47(queries) {
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = queries.u2().l1();
    while (_iterator__ex2g4s.m1()) {
      var element = _iterator__ex2g4s.n1();
      // Inline function 'kotlin.collections.component1' call
      var k = element.v2();
      // Inline function 'kotlin.collections.component2' call
      var v = element.w2();
      this.o47(k, v);
    }
    return this;
  }
  j46(key, fileName, fileBody) {
    // Inline function 'kotlin.also' call
    this.z46_1.z1(Companion_instance.j46(key, fileName, fileBody));
    return this;
  }
  k46(json) {
    // Inline function 'kotlin.also' call
    this.z46_1.z1(Companion_instance.k46(json));
    return this;
  }
  *q47($completion) {
    return yield* /*#__NOINLINE__*/proceed(this, Companion_getInstance_2().m2q_1, $completion);
  }
  *r47($completion) {
    return yield* /*#__NOINLINE__*/proceed(this, Companion_getInstance_2().n2q_1, $completion);
  }
}
class Companion_0 {
  constructor() {
    Companion_instance_0 = this;
    var tmp = this;
    tmp.i47_1 = Json(VOID, HttpResponse$Companion$mapper$lambda);
  }
  *j47(response, $completion) {
    var tmp = response.k39().j2t_1;
    var tmp_0 = toMap(response.l2q());
    // Inline function 'io.ktor.client.call.body' call
    var tmp_1 = response.a39();
    // Inline function 'io.ktor.util.reflect.typeInfo' call
    var tmp_2 = PrimitiveClasses_getInstance().kg();
    // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
    var tmp_3;
    try {
      tmp_3 = createKType(PrimitiveClasses_getInstance().kg(), arrayOf([]), false);
    } catch ($p) {
      var tmp_4;
      if ($p instanceof Error) {
        var _unused_var__etf5q3 = $p;
        tmp_4 = null;
      } else {
        throw $p;
      }
      tmp_3 = tmp_4;
    }
    var tmp$ret$2 = tmp_3;
    var tmp$ret$1 = new TypeInfo(tmp_2, tmp$ret$2);
    var tmp_5 = yield* tmp_1.x38(tmp$ret$1, $completion);
    var tmp$ret$0 = (!(tmp_5 == null) ? isByteArray(tmp_5) : false) ? tmp_5 : THROW_CCE();
    return new HttpResponse(tmp, tmp_0, tmp$ret$0);
  }
}
class HttpResponse {
  constructor(status, headers, body) {
    Companion_getInstance_4();
    this.s47_1 = status;
    this.t47_1 = headers;
    this.u47_1 = body;
    var tmp = this;
    tmp.v47_1 = lazy(HttpResponse$stringBody$delegate$lambda(this));
  }
  w47() {
    var tmp0 = this.v47_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('stringBody', 1, tmp, HttpResponse$_get_stringBody_$ref_nmyr7m(), null);
    return tmp0.w2();
  }
}
class WebsocketRequest$start$slambda$slambda {
  constructor(this$0, $frame) {
    this.x47_1 = this$0;
    this.y47_1 = $frame;
  }
  *x28($this$launch, $completion) {
    yield* this.x47_1.h48_1(readText(this.y47_1), $completion);
    return Unit_instance;
  }
  qd(p1, $completion) {
    return this.x28((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class WebsocketRequest$start$slambda$slambda_0 {
  constructor(this$0, $frame) {
    this.o48_1 = this$0;
    this.p48_1 = $frame;
  }
  *x28($this$launch, $completion) {
    yield* this.o48_1.i48_1(readBytes(this.p48_1), $completion);
    return Unit_instance;
  }
  qd(p1, $completion) {
    return this.x28((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class WebsocketRequest$textListener$slambda {
  *q48(it, $completion) {
    return Unit_instance;
  }
  qd(p1, $completion) {
    return this.q48((!(p1 == null) ? typeof p1 === 'string' : false) ? p1 : THROW_CCE(), $completion);
  }
}
class WebsocketRequest$bytesListener$slambda {
  *r48(it, $completion) {
    return Unit_instance;
  }
  qd(p1, $completion) {
    return this.r48((!(p1 == null) ? isByteArray(p1) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class WebsocketRequest$start$slambda {
  constructor(this$0, $req) {
    this.s48_1 = this$0;
    this.t48_1 = $req;
  }
  *u48($this$webSocket, $completion) {
    try {
      this.s48_1.n48_1 = $this$webSocket;
      this.t48_1.j48_1(this.t48_1);
      var _iterator__ex2g4s = $this$webSocket.z30().l1();
      while (yield* _iterator__ex2g4s.s20($completion)) {
        var frame = _iterator__ex2g4s.n1();
        if (frame instanceof Text) {
          launch($this$webSocket, VOID, VOID, WebsocketRequest$start$slambda$slambda_1(this.s48_1, frame));
        } else {
          if (frame instanceof Binary) {
            launch($this$webSocket, VOID, VOID, WebsocketRequest$start$slambda$slambda_2(this.s48_1, frame));
          }
        }
      }
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        this.t48_1.l48_1(e);
      } else {
        throw $p;
      }
    }
    finally {
      this.t48_1.k48_1(this.t48_1);
    }
    return Unit_instance;
  }
  qd(p1, $completion) {
    return this.u48(p1 instanceof DefaultClientWebSocketSession ? p1 : THROW_CCE(), $completion);
  }
}
class WebsocketRequest {
  constructor() {
    this.z47_1 = 'ws';
    this.a48_1 = null;
    this.b48_1 = null;
    this.c48_1 = null;
    this.d48_1 = null;
    this.e48_1 = null;
    this.f48_1 = 'kHttpClient/1.0';
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.g48_1 = LinkedHashMap.l5();
    var tmp_0 = this;
    tmp_0.h48_1 = WebsocketRequest$textListener$slambda_0();
    var tmp_1 = this;
    tmp_1.i48_1 = WebsocketRequest$bytesListener$slambda_0();
    var tmp_2 = this;
    tmp_2.j48_1 = WebsocketRequest$onOpenListener$lambda;
    var tmp_3 = this;
    tmp_3.k48_1 = WebsocketRequest$onCloseListener$lambda;
    var tmp_4 = this;
    tmp_4.l48_1 = WebsocketRequest$onErrorListener$lambda;
    var tmp_5 = this;
    tmp_5.m48_1 = HttpClient(WebsocketRequest$client$lambda);
    this.n48_1 = null;
  }
  v48(url) {
    // Inline function 'kotlin.also' call
    this.d48_1 = url;
    return this;
  }
  *w48($completion) {
    return yield* this.x48(Companion_getInstance_2().m2q_1, $completion);
  }
  *x48(method, $completion) {
    // Inline function 'kotlin.also' call
    var req = this;
    var tmp0_safe_receiver = this.e48_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.collections.set' call
      this.g48_1.f4('Accept', tmp0_safe_receiver);
    }
    var tmp1_safe_receiver = this.f48_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var tmp0 = this.g48_1;
      // Inline function 'kotlin.collections.set' call
      var key = 'User-Agent';
      tmp0.f4(key, tmp1_safe_receiver);
    }
    var tmp = WebsocketRequest$start$lambda(method, req);
    yield* webSocket(this.m48_1, tmp, WebsocketRequest$start$slambda_0(this, req), $completion);
    return this;
  }
  z6() {
    this.k48_1(this);
    cancel(this.m48_1.j36_1);
    this.m48_1.z6();
    this.n48_1 = null;
  }
}
//endregion
var Type_QUERY_instance;
var Type_PARAM_instance;
var Type_FILE_instance;
var Type_JSON_instance;
var Type_entriesInitialized;
function Type_initEntries() {
  if (Type_entriesInitialized)
    return Unit_instance;
  Type_entriesInitialized = true;
  Type_QUERY_instance = new Type('QUERY', 0);
  Type_PARAM_instance = new Type('PARAM', 1);
  Type_FILE_instance = new Type('FILE', 2);
  Type_JSON_instance = new Type('JSON', 3);
}
var Companion_instance;
function Companion_getInstance_3() {
  return Companion_instance;
}
function Type_QUERY_getInstance() {
  Type_initEntries();
  return Type_QUERY_instance;
}
function Type_PARAM_getInstance() {
  Type_initEntries();
  return Type_PARAM_instance;
}
function Type_FILE_getInstance() {
  Type_initEntries();
  return Type_FILE_instance;
}
function Type_JSON_getInstance() {
  Type_initEntries();
  return Type_JSON_instance;
}
function *proceed($this, method, $completion) {
  var req = $this;
  var client = HttpClient(HttpRequest$proceed$lambda(req));
  var tmp0_safe_receiver = $this.x46_1;
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.collections.set' call
    $this.a47_1.f4('Accept', tmp0_safe_receiver);
  }
  var tmp1_safe_receiver = $this.y46_1;
  if (tmp1_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    var tmp0 = $this.a47_1;
    // Inline function 'kotlin.collections.set' call
    var key = 'User-Agent';
    tmp0.f4(key, tmp1_safe_receiver);
  }
  var tmp = Companion_getInstance_4();
  // Inline function 'io.ktor.client.request.request' call
  // Inline function 'kotlin.apply' call
  var this_0 = new HttpRequestBuilder();
  this_0.c38_1 = method;
  if (!(req.w46_1 == null)) {
    // Inline function 'kotlin.checkNotNull' call
    var tmp0_0 = req.w46_1;
    var tmp$ret$10;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0_0 == null) {
        var message = 'Required value was null.';
        throw IllegalStateException.o(toString(message));
      } else {
        tmp$ret$10 = tmp0_0;
        break $l$block;
      }
    }
    var tmp_0 = tmp$ret$10;
    takeFrom(this_0.b38_1, URLBuilder(tmp_0));
  } else {
    url(this_0, req.s46_1, req.t46_1, req.v46_1, req.u46_1);
  }
  headers(this_0, HttpRequest$proceed$lambda_0(req));
  timeout(this_0, HttpRequest$proceed$lambda_1(req));
  if (!$this.b47_1 && !$this.c47_1 && req.z46_1.k2() === 1 && canSendOnly($this, first(req.z46_1))) {
    var param = first(req.z46_1);
    // Inline function 'io.ktor.client.request.setBody' call
    var body = new ByteArrayContent(ensureNotNull(param.p46_1), param.r46());
    if (body == null) {
      this_0.e38_1 = NullBody_instance;
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_1 = getKClass(ByteArrayContent);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_2;
      try {
        tmp_2 = createKType(getKClass(ByteArrayContent), arrayOf([]), false);
      } catch ($p) {
        var tmp_3;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_3 = null;
        } else {
          throw $p;
        }
        tmp_2 = tmp_3;
      }
      var tmp$ret$14 = tmp_2;
      var tmp$ret$13 = new TypeInfo(tmp_1, tmp$ret$14);
      this_0.z3b(tmp$ret$13);
    } else {
      if (body instanceof OutgoingContent) {
        this_0.e38_1 = body;
        this_0.z3b(null);
      } else {
        this_0.e38_1 = body;
        // Inline function 'io.ktor.util.reflect.typeInfo' call
        var tmp_4 = getKClass(ByteArrayContent);
        // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
        var tmp_5;
        try {
          tmp_5 = createKType(getKClass(ByteArrayContent), arrayOf([]), false);
        } catch ($p) {
          var tmp_6;
          if ($p instanceof Error) {
            var _unused_var__etf5q3_0 = $p;
            tmp_6 = null;
          } else {
            throw $p;
          }
          tmp_5 = tmp_6;
        }
        var tmp$ret$16 = tmp_5;
        var tmp$ret$15 = new TypeInfo(tmp_4, tmp$ret$16);
        this_0.z3b(tmp$ret$15);
      }
    }
  } else {
    if (method.equals(Companion_getInstance_2().m2q_1)) {
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = req.z46_1.l1();
      while (_iterator__ex2g4s.m1()) {
        var element = _iterator__ex2g4s.n1();
        if (element.l46_1.s1_1 === 0) {
          this_0.b38_1.y2t_1.p2d(element.m46_1, ensureNotNull(element.n46_1));
        } else {
          throw IllegalStateException.o('Request Body is not supported in the GET method.');
        }
      }
    } else {
      // Inline function 'kotlin.collections.filter' call
      var tmp0_1 = req.z46_1;
      // Inline function 'kotlin.collections.filterTo' call
      var destination = ArrayList.n2();
      var _iterator__ex2g4s_0 = tmp0_1.l1();
      while (_iterator__ex2g4s_0.m1()) {
        var element_0 = _iterator__ex2g4s_0.n1();
        if (element_0.l46_1.equals(Type_QUERY_getInstance())) {
          destination.z1(element_0);
        }
      }
      var queries = destination;
      // Inline function 'kotlin.collections.filter' call
      var tmp0_2 = req.z46_1;
      // Inline function 'kotlin.collections.filterTo' call
      var destination_0 = ArrayList.n2();
      var _iterator__ex2g4s_1 = tmp0_2.l1();
      while (_iterator__ex2g4s_1.m1()) {
        var element_1 = _iterator__ex2g4s_1.n1();
        if (element_1.l46_1.equals(Type_PARAM_getInstance())) {
          destination_0.z1(element_1);
        }
      }
      var params = destination_0;
      // Inline function 'kotlin.collections.filter' call
      var tmp0_3 = req.z46_1;
      // Inline function 'kotlin.collections.filterTo' call
      var destination_1 = ArrayList.n2();
      var _iterator__ex2g4s_2 = tmp0_3.l1();
      while (_iterator__ex2g4s_2.m1()) {
        var element_2 = _iterator__ex2g4s_2.n1();
        if (element_2.l46_1.equals(Type_FILE_getInstance())) {
          destination_1.z1(element_2);
        }
      }
      var files = destination_1;
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!queries.j1()) {
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s_3 = queries.l1();
        while (_iterator__ex2g4s_3.m1()) {
          var element_3 = _iterator__ex2g4s_3.n1();
          this_0.b38_1.y2t_1.p2d(element_3.m46_1, ensureNotNull(element_3.n46_1));
        }
      }
      var tmp_7;
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!params.j1()) {
        tmp_7 = true;
      } else {
        // Inline function 'kotlin.collections.isNotEmpty' call
        tmp_7 = !files.j1();
      }
      if (tmp_7) {
        if ($this.c47_1) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          if (!files.j1()) {
            throw IllegalStateException.o('ApplicationFormUrlEncoded cannot send files.');
          }
          contentType(this_0, Application_getInstance().m2j_1);
          // Inline function 'io.ktor.http.Companion.build' call
          Companion_getInstance_1();
          // Inline function 'kotlin.apply' call
          var this_1 = ParametersBuilder();
          // Inline function 'kotlin.collections.forEach' call
          var _iterator__ex2g4s_4 = params.l1();
          while (_iterator__ex2g4s_4.m1()) {
            var element_4 = _iterator__ex2g4s_4.n1();
            this_1.p2d(element_4.m46_1, ensureNotNull(element_4.n46_1));
          }
          var tmp$ret$34 = this_1.q2l();
          // Inline function 'io.ktor.client.request.setBody' call
          var body_0 = new FormDataContent(tmp$ret$34);
          if (body_0 == null) {
            this_0.e38_1 = NullBody_instance;
            // Inline function 'io.ktor.util.reflect.typeInfo' call
            var tmp_8 = getKClass(FormDataContent);
            // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
            var tmp_9;
            try {
              tmp_9 = createKType(getKClass(FormDataContent), arrayOf([]), false);
            } catch ($p) {
              var tmp_10;
              if ($p instanceof Error) {
                var _unused_var__etf5q3_1 = $p;
                tmp_10 = null;
              } else {
                throw $p;
              }
              tmp_9 = tmp_10;
            }
            var tmp$ret$41 = tmp_9;
            var tmp$ret$40 = new TypeInfo(tmp_8, tmp$ret$41);
            this_0.z3b(tmp$ret$40);
          } else {
            if (body_0 instanceof OutgoingContent) {
              this_0.e38_1 = body_0;
              this_0.z3b(null);
            } else {
              this_0.e38_1 = body_0;
              // Inline function 'io.ktor.util.reflect.typeInfo' call
              var tmp_11 = getKClass(FormDataContent);
              // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
              var tmp_12;
              try {
                tmp_12 = createKType(getKClass(FormDataContent), arrayOf([]), false);
              } catch ($p) {
                var tmp_13;
                if ($p instanceof Error) {
                  var _unused_var__etf5q3_2 = $p;
                  tmp_13 = null;
                } else {
                  throw $p;
                }
                tmp_12 = tmp_13;
              }
              var tmp$ret$43 = tmp_12;
              var tmp$ret$42 = new TypeInfo(tmp_11, tmp$ret$43);
              this_0.z3b(tmp$ret$42);
            }
          }
        } else {
          contentType(this_0, MultiPart_getInstance().p2k_1);
          // Inline function 'io.ktor.client.request.forms.formData' call
          // Inline function 'kotlin.apply' call
          var this_2 = new FormBuilder();
          // Inline function 'kotlin.collections.forEach' call
          var _iterator__ex2g4s_5 = params.l1();
          while (_iterator__ex2g4s_5.m1()) {
            var element_5 = _iterator__ex2g4s_5.n1();
            this_2.z3o(element_5.m46_1, ensureNotNull(element_5.n46_1));
          }
          // Inline function 'kotlin.collections.forEach' call
          var _iterator__ex2g4s_6 = files.l1();
          while (_iterator__ex2g4s_6.m1()) {
            var element_6 = _iterator__ex2g4s_6.n1();
            var tmp_14 = ensureNotNull(element_6.p46_1);
            // Inline function 'io.ktor.http.Companion.build' call
            Companion_getInstance_0();
            // Inline function 'kotlin.apply' call
            var this_3 = new HeadersBuilder();
            append(this_3, 'Content-Type', element_6.r46());
            this_3.p2d('Content-Disposition', 'filename=' + element_6.o46_1);
            var tmp$ret$51 = this_3.q2l();
            this_2.a3p(element_6.m46_1, tmp_14, tmp$ret$51);
          }
          // Inline function 'kotlin.collections.toTypedArray' call
          var this_4 = this_2.b3p();
          var tmp$ret$54 = copyToArray(this_4);
          var tmp$ret$44 = formData(tmp$ret$54.slice());
          // Inline function 'io.ktor.client.request.setBody' call
          var body_1 = new MultiPartFormDataContent(tmp$ret$44);
          if (body_1 == null) {
            this_0.e38_1 = NullBody_instance;
            // Inline function 'io.ktor.util.reflect.typeInfo' call
            var tmp_15 = getKClass(MultiPartFormDataContent);
            // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
            var tmp_16;
            try {
              tmp_16 = createKType(getKClass(MultiPartFormDataContent), arrayOf([]), false);
            } catch ($p) {
              var tmp_17;
              if ($p instanceof Error) {
                var _unused_var__etf5q3_3 = $p;
                tmp_17 = null;
              } else {
                throw $p;
              }
              tmp_16 = tmp_17;
            }
            var tmp$ret$57 = tmp_16;
            var tmp$ret$56 = new TypeInfo(tmp_15, tmp$ret$57);
            this_0.z3b(tmp$ret$56);
          } else {
            if (body_1 instanceof OutgoingContent) {
              this_0.e38_1 = body_1;
              this_0.z3b(null);
            } else {
              this_0.e38_1 = body_1;
              // Inline function 'io.ktor.util.reflect.typeInfo' call
              var tmp_18 = getKClass(MultiPartFormDataContent);
              // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
              var tmp_19;
              try {
                tmp_19 = createKType(getKClass(MultiPartFormDataContent), arrayOf([]), false);
              } catch ($p) {
                var tmp_20;
                if ($p instanceof Error) {
                  var _unused_var__etf5q3_4 = $p;
                  tmp_20 = null;
                } else {
                  throw $p;
                }
                tmp_19 = tmp_20;
              }
              var tmp$ret$59 = tmp_19;
              var tmp$ret$58 = new TypeInfo(tmp_18, tmp$ret$59);
              this_0.z3b(tmp$ret$58);
            }
          }
        }
      }
    }
  }
  // Inline function 'io.ktor.client.request.request' call
  var tmp$ret$6 = yield* (new HttpStatement(this_0, client)).h3q($completion);
  return yield* tmp.j47(tmp$ret$6, $completion);
}
function canSendOnly($this, param) {
  if (param.l46_1.equals(Type_JSON_getInstance()))
    return true;
  var tmp0_subject = param.r46();
  return tmp0_subject.equals(Application_getInstance().b2j_1) ? true : tmp0_subject.equals(Image_getInstance().d2k_1) ? true : tmp0_subject.equals(Image_getInstance().f2k_1) ? true : tmp0_subject.equals(Image_getInstance().a2k_1) ? true : tmp0_subject.equals(Video_getInstance().g2l_1) ? true : tmp0_subject.equals(Video_getInstance().h2l_1) ? true : tmp0_subject.equals(Video_getInstance().j2l_1) ? true : tmp0_subject.equals(ContentType.t2i('video', 'webm')) ? true : false;
}
function HttpRequest$proceed$lambda($req) {
  return ($this$HttpClient) => {
    applySystemProxy($this$HttpClient);
    var tmp;
    if ($req.e47_1) {
      applySkipSSLValidation($this$HttpClient);
      tmp = Unit_instance;
    }
    $this$HttpClient.n37_1 = $req.d47_1;
    return Unit_instance;
  };
}
function HttpRequest$proceed$lambda_0($req) {
  return ($this$headers) => {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = $req.a47_1.u2().l1();
    while (_iterator__ex2g4s.m1()) {
      var element = _iterator__ex2g4s.n1();
      // Inline function 'kotlin.collections.component1' call
      var k = element.v2();
      // Inline function 'kotlin.collections.component2' call
      var v = element.w2();
      $this$headers.p2d(k, v);
    }
    return Unit_instance;
  };
}
function HttpRequest$proceed$lambda_1($req) {
  return ($this$timeout) => {
    $this$timeout.r3j($req.f47_1);
    $this$timeout.s3j($req.g47_1);
    $this$timeout.t3j($req.h47_1);
    return Unit_instance;
  };
}
function HttpResponse$Companion$mapper$lambda($this$Json) {
  $this$Json.w3s_1 = true;
  return Unit_instance;
}
var Companion_instance_0;
function Companion_getInstance_4() {
  if (Companion_instance_0 === VOID)
    new Companion_0();
  return Companion_instance_0;
}
function HttpResponse$stringBody$delegate$lambda(this$0) {
  return () => decodeToString(this$0.u47_1);
}
function HttpResponse$_get_stringBody_$ref_nmyr7m() {
  return (p0) => p0.w47();
}
function applySystemProxy(_this__u8e3s4) {
  var proxyUrl = proxyUrlFromEnv();
  // Inline function 'kotlin.text.isNullOrBlank' call
  if (!(proxyUrl == null || isBlank(proxyUrl))) {
    _this__u8e3s4.k38(applySystemProxy$lambda(proxyUrl));
  }
}
function applySystemProxy$lambda($proxyUrl) {
  return ($this$engine) => {
    $this$engine.n3c_1 = ProxyBuilder_instance.y3r(Url($proxyUrl));
    return Unit_instance;
  };
}
function WebsocketRequest$start$slambda$slambda_1(this$0, $frame) {
  var i = new WebsocketRequest$start$slambda$slambda(this$0, $frame);
  var l = ($this$launch, $completion) => i.x28($this$launch, $completion);
  l.$arity = 1;
  return l;
}
function WebsocketRequest$start$slambda$slambda_2(this$0, $frame) {
  var i = new WebsocketRequest$start$slambda$slambda_0(this$0, $frame);
  var l = ($this$launch, $completion) => i.x28($this$launch, $completion);
  l.$arity = 1;
  return l;
}
function WebsocketRequest$textListener$slambda_0() {
  var i = new WebsocketRequest$textListener$slambda();
  var l = (it, $completion) => i.q48(it, $completion);
  l.$arity = 1;
  return l;
}
function WebsocketRequest$bytesListener$slambda_0() {
  var i = new WebsocketRequest$bytesListener$slambda();
  var l = (it, $completion) => i.r48(it, $completion);
  l.$arity = 1;
  return l;
}
function WebsocketRequest$onOpenListener$lambda(it) {
  return Unit_instance;
}
function WebsocketRequest$onCloseListener$lambda(it) {
  return Unit_instance;
}
function WebsocketRequest$onErrorListener$lambda(it) {
  return Unit_instance;
}
function WebsocketRequest$client$lambda($this$HttpClient) {
  applySystemProxy($this$HttpClient);
  var tmp = Plugin_getInstance();
  $this$HttpClient.l38(tmp, WebsocketRequest$client$lambda$lambda);
  return Unit_instance;
}
function WebsocketRequest$client$lambda$lambda($this$install) {
  // Inline function 'kotlin.time.Companion.milliseconds' call
  Companion_getInstance();
  // Inline function 'io.ktor.client.plugins.websocket.pingInterval' call
  var tmp = $this$install;
  var tmp0_safe_receiver = toDuration(20000, DurationUnit_MILLISECONDS_getInstance());
  var tmp_0;
  var tmp_1 = tmp0_safe_receiver;
  if ((tmp_1 == null ? null : new Duration(tmp_1)) == null) {
    tmp_0 = null;
  } else {
    tmp_0 = _Duration___get_inWholeMilliseconds__impl__msfiry(tmp0_safe_receiver);
  }
  var tmp1_elvis_lhs = tmp_0;
  tmp.g3m_1 = tmp1_elvis_lhs == null ? 0n : tmp1_elvis_lhs;
  return Unit_instance;
}
function WebsocketRequest$start$lambda$lambda($req) {
  return ($this$headers) => {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = $req.g48_1.u2().l1();
    while (_iterator__ex2g4s.m1()) {
      var element = _iterator__ex2g4s.n1();
      // Inline function 'kotlin.collections.component1' call
      var k = element.v2();
      // Inline function 'kotlin.collections.component2' call
      var v = element.w2();
      $this$headers.p2d(k, v);
    }
    return Unit_instance;
  };
}
function WebsocketRequest$start$lambda($method, $req) {
  return ($this$webSocket) => {
    $this$webSocket.c38_1 = $method;
    if (!($req.d48_1 == null)) {
      // Inline function 'kotlin.checkNotNull' call
      var tmp0 = $req.d48_1;
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.checkNotNull' call
        if (tmp0 == null) {
          var message = 'Required value was null.';
          throw IllegalStateException.o(toString(message));
        } else {
          tmp$ret$1 = tmp0;
          break $l$block;
        }
      }
      var tmp = tmp$ret$1;
      takeFrom($this$webSocket.b38_1, URLBuilder(tmp));
    } else {
      url($this$webSocket, $req.z47_1, $req.a48_1, $req.c48_1, $req.b48_1);
    }
    headers($this$webSocket, WebsocketRequest$start$lambda$lambda($req));
    return Unit_instance;
  };
}
function WebsocketRequest$start$slambda_0(this$0, $req) {
  var i = new WebsocketRequest$start$slambda(this$0, $req);
  var l = ($this$webSocket, $completion) => i.u48($this$webSocket, $completion);
  l.$arity = 1;
  return l;
}
function applySkipSSLValidation(_this__u8e3s4) {
  throw IllegalStateException.o('Skip SSL Validation is not supported on JS target.');
}
function proxyUrlFromEnv() {
  return null;
}
//region block: post-declaration
initMetadataForClass(Type, 'Type');
initMetadataForCompanion(Companion);
initMetadataForClass(HttpParameter, 'HttpParameter');
initMetadataForClass(HttpRequest, 'HttpRequest', HttpRequest, VOID, VOID, [0, 1]);
initMetadataForCompanion(Companion_0, VOID, VOID, [1]);
initMetadataForClass(HttpResponse, 'HttpResponse');
initMetadataForLambda(WebsocketRequest$start$slambda$slambda, VOID, VOID, [1]);
initMetadataForLambda(WebsocketRequest$start$slambda$slambda_0, VOID, VOID, [1]);
initMetadataForLambda(WebsocketRequest$textListener$slambda, VOID, VOID, [1]);
initMetadataForLambda(WebsocketRequest$bytesListener$slambda, VOID, VOID, [1]);
initMetadataForLambda(WebsocketRequest$start$slambda, VOID, VOID, [1]);
initMetadataForClass(WebsocketRequest, 'WebsocketRequest', WebsocketRequest, VOID, VOID, [0, 1]);
//endregion
//region block: init
Companion_instance = new Companion();
//endregion
//region block: exports
export {
  WebsocketRequest as WebsocketRequest38pjwt1m63ieg,
  HttpRequest as HttpRequest3gg7t5d9j2hk9,
};
//endregion

//# sourceMappingURL=khttpclient.mjs.map
