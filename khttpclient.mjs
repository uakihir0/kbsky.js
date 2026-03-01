import {
  Unit_instance28fytmsmm6r23 as Unit_instance,
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
  get_COROUTINE_SUSPENDED3ujt3p13qm4iy as get_COROUTINE_SUSPENDED,
  suspendOrReturn49pspzlx5djv as suspendOrReturn,
  LinkedHashMap1zhqxkxv3xnkl as LinkedHashMap,
  PrimitiveClasses_getInstance6p7zmos9nw3c as PrimitiveClasses_getInstance,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  isByteArray4nnzfn1x4o3w as isByteArray,
  decodeToString1x4faah2liw2p as decodeToString,
  lazy2hsh8ze7j6ikd as lazy,
  KProperty1ca4yb4wlo496 as KProperty1,
  getPropertyCallableRef3hckxc0xueiaj as getPropertyCallableRef,
  isBlank1dvkhjjvox3p0 as isBlank,
  Exceptiondt2hlxn7j7vw as Exception,
  isInterface3d6p8outrmvmk as isInterface,
  initMetadataForLambda3af3he42mmnh as initMetadataForLambda,
  Companion_getInstance1ji65oeucwbu1 as Companion_getInstance,
  DurationUnit_MILLISECONDS_getInstance3pieann1x7uco as DurationUnit_MILLISECONDS_getInstance,
  toDuration7gy6v749ektt as toDuration,
  _Duration___get_inWholeMilliseconds__impl__msfiryatkl295bksdl as _Duration___get_inWholeMilliseconds__impl__msfiry,
  Duration5ynfiptaqcrg as Duration,
} from './kotlin-kotlin-stdlib.mjs';
import { toByteArray1i3ns5jnoqlv6 as toByteArray } from './ktor-ktor-io.mjs';
import {
  Text_getInstance38vnirw8um9kn as Text_getInstance,
  Image_getInstance9jd83dxj23ti as Image_getInstance,
  Video_getInstance35ogo9nibdg3x as Video_getInstance,
  ContentType1svlpabm9v7iz as ContentType,
  Application_getInstanceueakgx5l255p as Application_getInstance,
  URLBuilder1nlnzfhn643pn as URLBuilder,
  takeFromkqlcz7c6dx2r as takeFrom,
  MultiPart_getInstance2hpkqlzozpomu as MultiPart_getInstance,
  contentType1lwcfjsjo0z8g as contentType,
  Companion_getInstance363ajpo4f7xlh as Companion_getInstance_0,
  HeadersBuilder3h7sn3kkvu98m as HeadersBuilder,
  append2z8giuo6jcxrf as append,
  OutgoingContent3t2ohmyam9o76 as OutgoingContent,
  NullBody_instanceoz9dr731l81q as NullBody_instance,
  Companion_getInstance1qo23ej9noujo as Companion_getInstance_1,
  ParametersBuilder1ry9ntvvg567r as ParametersBuilder,
  Companion_getInstance12092dx8psw4e as Companion_getInstance_2,
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
  ProxyBuilder_instance27em860ylej3e as ProxyBuilder_instance,
  webSocket1c0mdzi4rb3bo as webSocket,
  Plugin_getInstancefllmgjpjiqqy as Plugin_getInstance,
  DefaultClientWebSocketSession1n8ok3lng45wy as DefaultClientWebSocketSession,
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
  launch1c91vkjzdi9sd as launch,
  CoroutineScopefcb5f5dwqcas as CoroutineScope,
  cancel2en0dn4yvpufo as cancel,
} from './kotlinx-coroutines-core.mjs';
//region block: imports
//endregion
//region block: pre-declaration
class Type extends Enum {}
class Companion {
  a45(key, value) {
    return new HttpParameter(Type_QUERY_getInstance(), key, value);
  }
  b45(key, fileName, fileBody) {
    return new HttpParameter(Type_FILE_getInstance(), key, null, fileName, fileBody);
  }
  c45(json) {
    return new HttpParameter(Type_JSON_getInstance(), 'json', null, 'file.json', toByteArray(json));
  }
}
class HttpParameter {
  constructor(type, key, value, fileName, fileBody) {
    value = value === VOID ? null : value;
    fileName = fileName === VOID ? null : fileName;
    fileBody = fileBody === VOID ? null : fileBody;
    this.d45_1 = type;
    this.e45_1 = key;
    this.f45_1 = value;
    this.g45_1 = fileName;
    this.h45_1 = fileBody;
  }
  i45() {
    var tmp0_safe_receiver = this.g45_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : split(tmp0_safe_receiver, ['.']);
    return tmp1_safe_receiver == null ? null : lastOrNull(tmp1_safe_receiver);
  }
  j45() {
    switch (this.i45()) {
      case 'txt':
        return Text_getInstance().n2k_1;
      case 'html':
        return Text_getInstance().q2k_1;
      case 'css':
        return Text_getInstance().o2k_1;
      case 'csv':
        return Text_getInstance().p2k_1;
      case 'jpg':
      case 'jpeg':
        return Image_getInstance().u2j_1;
      case 'png':
        return Image_getInstance().w2j_1;
      case 'gif':
        return Image_getInstance().r2j_1;
      case 'svg':
        return Image_getInstance().x2j_1;
      case 'mpeg':
        return Video_getInstance().x2k_1;
      case 'mp4':
        return Video_getInstance().y2k_1;
      case 'mov':
        return Video_getInstance().a2l_1;
      case 'webm':
        return ContentType.k2i('video', 'webm');
      case 'json':
        return Application_getInstance().s2i_1;
      case 'xml':
        return Application_getInstance().y2i_1;
      case 'zip':
        return Application_getInstance().b2j_1;
      case 'pdf':
        return Application_getInstance().e2j_1;
    }
    return Application_getInstance().v2i_1;
  }
}
class HttpRequest {
  constructor() {
    this.k45_1 = 'https';
    this.l45_1 = null;
    this.m45_1 = null;
    this.n45_1 = null;
    this.o45_1 = null;
    this.p45_1 = null;
    this.q45_1 = 'kHttpClient/1.0';
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.r45_1 = ArrayList.s2();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.s45_1 = LinkedHashMap.q5();
    this.t45_1 = false;
    this.u45_1 = false;
    this.v45_1 = true;
    this.w45_1 = false;
    this.x45_1 = null;
    this.y45_1 = null;
    this.z45_1 = null;
  }
  c46(url) {
    // Inline function 'kotlin.also' call
    this.o45_1 = url;
    return this;
  }
  d46(accept) {
    // Inline function 'kotlin.also' call
    this.p45_1 = accept;
    return this;
  }
  e46(key, value) {
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.collections.set' call
    this.s45_1.k4(key, value);
    return this;
  }
  f46(skipSSLValidation) {
    // Inline function 'kotlin.also' call
    this.w45_1 = skipSSLValidation;
    return this;
  }
  g46(key, value) {
    // Inline function 'kotlin.also' call
    this.r45_1.e2(Companion_instance.a45(key, toString(value)));
    return this;
  }
  h46(queries) {
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = queries.z2().q1();
    while (_iterator__ex2g4s.r1()) {
      var element = _iterator__ex2g4s.s1();
      // Inline function 'kotlin.collections.component1' call
      var k = element.a3();
      // Inline function 'kotlin.collections.component2' call
      var v = element.b3();
      this.g46(k, v);
    }
    return this;
  }
  b45(key, fileName, fileBody) {
    // Inline function 'kotlin.also' call
    this.r45_1.e2(Companion_instance.b45(key, fileName, fileBody));
    return this;
  }
  c45(json) {
    // Inline function 'kotlin.also' call
    this.r45_1.e2(Companion_instance.c45(json));
    return this;
  }
  i46($completion) {
    return proceed(this, Companion_getInstance_2().d2q_1, $completion);
  }
  j46($completion) {
    return proceed(this, Companion_getInstance_2().e2q_1, $completion);
  }
}
class Companion_0 {
  constructor() {
    Companion_instance_0 = this;
    var tmp = this;
    tmp.a46_1 = Json(VOID, HttpResponse$Companion$mapper$lambda);
  }
  b46(response, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_from__qou0de.bind(VOID, this, response), $completion);
  }
}
class HttpResponse {
  constructor(status, headers, body) {
    Companion_getInstance_4();
    this.k46_1 = status;
    this.l46_1 = headers;
    this.m46_1 = body;
    var tmp = this;
    tmp.n46_1 = lazy(HttpResponse$stringBody$delegate$lambda(this));
  }
  o46() {
    var tmp0 = this.n46_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('stringBody', 1, tmp, HttpResponse$_get_stringBody_$ref_nmyr7m(), null);
    return tmp0.b3();
  }
}
class WebsocketRequest$start$slambda$slambda {
  constructor(this$0, $frame) {
    this.e47_1 = this$0;
    this.f47_1 = $frame;
  }
  l29($this$launch, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8.bind(VOID, this, $this$launch), $completion);
  }
  yd(p1, $completion) {
    return this.l29((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class WebsocketRequest$start$slambda$slambda_0 {
  constructor(this$0, $frame) {
    this.g47_1 = this$0;
    this.h47_1 = $frame;
  }
  l29($this$launch, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_0.bind(VOID, this, $this$launch), $completion);
  }
  yd(p1, $completion) {
    return this.l29((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class WebsocketRequest$textListener$slambda {
  k47(it, $completion) {
    return Unit_instance;
  }
  yd(p1, $completion) {
    return this.k47((!(p1 == null) ? typeof p1 === 'string' : false) ? p1 : THROW_CCE(), $completion);
  }
}
class WebsocketRequest$bytesListener$slambda {
  l47(it, $completion) {
    return Unit_instance;
  }
  yd(p1, $completion) {
    return this.l47((!(p1 == null) ? isByteArray(p1) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class WebsocketRequest$start$slambda {
  constructor(this$0, $req) {
    this.i47_1 = this$0;
    this.j47_1 = $req;
  }
  m47($this$webSocket, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8_1.bind(VOID, this, $this$webSocket), $completion);
  }
  yd(p1, $completion) {
    return this.m47(p1 instanceof DefaultClientWebSocketSession ? p1 : THROW_CCE(), $completion);
  }
}
class WebsocketRequest {
  constructor() {
    this.p46_1 = 'ws';
    this.q46_1 = null;
    this.r46_1 = null;
    this.s46_1 = null;
    this.t46_1 = null;
    this.u46_1 = null;
    this.v46_1 = 'kHttpClient/1.0';
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.w46_1 = LinkedHashMap.q5();
    var tmp_0 = this;
    tmp_0.x46_1 = WebsocketRequest$textListener$slambda_0();
    var tmp_1 = this;
    tmp_1.y46_1 = WebsocketRequest$bytesListener$slambda_0();
    var tmp_2 = this;
    tmp_2.z46_1 = WebsocketRequest$onOpenListener$lambda;
    var tmp_3 = this;
    tmp_3.a47_1 = WebsocketRequest$onCloseListener$lambda;
    var tmp_4 = this;
    tmp_4.b47_1 = WebsocketRequest$onErrorListener$lambda;
    var tmp_5 = this;
    tmp_5.c47_1 = HttpClient(WebsocketRequest$client$lambda);
    this.d47_1 = null;
  }
  n47(url) {
    // Inline function 'kotlin.also' call
    this.t46_1 = url;
    return this;
  }
  o47($completion) {
    return this.p47(Companion_getInstance_2().d2q_1, $completion);
  }
  p47(method, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_start__v5y7pu.bind(VOID, this, method), $completion);
  }
  e7() {
    this.a47_1(this);
    cancel(this.c47_1.s35_1);
    this.c47_1.e7();
    this.d47_1 = null;
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
function *_generator_proceed__7fi2iu($this, method, $completion) {
  var req = $this;
  var client = HttpClient(HttpRequest$proceed$lambda(req));
  var tmp0_safe_receiver = $this.p45_1;
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.collections.set' call
    $this.s45_1.k4('Accept', tmp0_safe_receiver);
  }
  var tmp1_safe_receiver = $this.q45_1;
  if (tmp1_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    var tmp0 = $this.s45_1;
    // Inline function 'kotlin.collections.set' call
    var key = 'User-Agent';
    tmp0.k4(key, tmp1_safe_receiver);
  }
  var tmp = Companion_getInstance_4();
  // Inline function 'io.ktor.client.request.request' call
  // Inline function 'kotlin.apply' call
  var this_0 = new HttpRequestBuilder();
  this_0.l36_1 = method;
  if (!(req.o45_1 == null)) {
    // Inline function 'kotlin.checkNotNull' call
    var tmp0_0 = req.o45_1;
    var tmp$ret$7;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0_0 == null) {
        var message = 'Required value was null.';
        throw IllegalStateException.o(toString(message));
      } else {
        tmp$ret$7 = tmp0_0;
        break $l$block;
      }
    }
    var tmp_0 = tmp$ret$7;
    takeFrom(this_0.k36_1, URLBuilder(tmp_0));
  } else {
    url(this_0, req.k45_1, req.l45_1, req.n45_1, req.m45_1);
  }
  headers(this_0, HttpRequest$proceed$lambda_0(req));
  timeout(this_0, HttpRequest$proceed$lambda_1(req));
  if (!$this.t45_1 && !$this.u45_1 && req.r45_1.q2() === 1 && canSendOnly($this, first(req.r45_1))) {
    var param = first(req.r45_1);
    // Inline function 'io.ktor.client.request.setBody' call
    var body = new ByteArrayContent(ensureNotNull(param.h45_1), param.j45());
    if (body == null) {
      this_0.n36_1 = NullBody_instance;
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
      var tmp$ret$9 = tmp_2;
      var tmp$ret$10 = new TypeInfo(tmp_1, tmp$ret$9);
      this_0.a3b(tmp$ret$10);
    } else {
      if (body instanceof OutgoingContent) {
        this_0.n36_1 = body;
        this_0.a3b(null);
      } else {
        this_0.n36_1 = body;
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
        var tmp$ret$11 = tmp_5;
        var tmp$ret$12 = new TypeInfo(tmp_4, tmp$ret$11);
        this_0.a3b(tmp$ret$12);
      }
    }
  } else {
    if (method.equals(Companion_getInstance_2().d2q_1)) {
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = req.r45_1.q1();
      while (_iterator__ex2g4s.r1()) {
        var element = _iterator__ex2g4s.s1();
        if (element.d45_1.x1_1 === 0) {
          this_0.k36_1.p2t_1.m2d(element.e45_1, ensureNotNull(element.f45_1));
        } else {
          throw IllegalStateException.o('Request Body is not supported in the GET method.');
        }
      }
    } else {
      // Inline function 'kotlin.collections.filter' call
      var tmp0_1 = req.r45_1;
      // Inline function 'kotlin.collections.filterTo' call
      var destination = ArrayList.s2();
      var _iterator__ex2g4s_0 = tmp0_1.q1();
      while (_iterator__ex2g4s_0.r1()) {
        var element_0 = _iterator__ex2g4s_0.s1();
        if (element_0.d45_1.equals(Type_QUERY_getInstance())) {
          destination.e2(element_0);
        }
      }
      var queries = destination;
      // Inline function 'kotlin.collections.filter' call
      var tmp0_2 = req.r45_1;
      // Inline function 'kotlin.collections.filterTo' call
      var destination_0 = ArrayList.s2();
      var _iterator__ex2g4s_1 = tmp0_2.q1();
      while (_iterator__ex2g4s_1.r1()) {
        var element_1 = _iterator__ex2g4s_1.s1();
        if (element_1.d45_1.equals(Type_PARAM_getInstance())) {
          destination_0.e2(element_1);
        }
      }
      var params = destination_0;
      // Inline function 'kotlin.collections.filter' call
      var tmp0_3 = req.r45_1;
      // Inline function 'kotlin.collections.filterTo' call
      var destination_1 = ArrayList.s2();
      var _iterator__ex2g4s_2 = tmp0_3.q1();
      while (_iterator__ex2g4s_2.r1()) {
        var element_2 = _iterator__ex2g4s_2.s1();
        if (element_2.d45_1.equals(Type_FILE_getInstance())) {
          destination_1.e2(element_2);
        }
      }
      var files = destination_1;
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!queries.o1()) {
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s_3 = queries.q1();
        while (_iterator__ex2g4s_3.r1()) {
          var element_3 = _iterator__ex2g4s_3.s1();
          this_0.k36_1.p2t_1.m2d(element_3.e45_1, ensureNotNull(element_3.f45_1));
        }
      }
      var tmp_7;
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!params.o1()) {
        tmp_7 = true;
      } else {
        // Inline function 'kotlin.collections.isNotEmpty' call
        tmp_7 = !files.o1();
      }
      if (tmp_7) {
        if ($this.u45_1) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          if (!files.o1()) {
            throw IllegalStateException.o('ApplicationFormUrlEncoded cannot send files.');
          }
          contentType(this_0, Application_getInstance().d2j_1);
          // Inline function 'io.ktor.http.Companion.build' call
          Companion_getInstance_1();
          // Inline function 'kotlin.apply' call
          var this_1 = ParametersBuilder();
          // Inline function 'kotlin.collections.forEach' call
          var _iterator__ex2g4s_4 = params.q1();
          while (_iterator__ex2g4s_4.r1()) {
            var element_4 = _iterator__ex2g4s_4.s1();
            this_1.m2d(element_4.e45_1, ensureNotNull(element_4.f45_1));
          }
          var tmp$ret$35 = this_1.h2l();
          // Inline function 'io.ktor.client.request.setBody' call
          var body_0 = new FormDataContent(tmp$ret$35);
          if (body_0 == null) {
            this_0.n36_1 = NullBody_instance;
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
            var tmp$ret$36 = tmp_9;
            var tmp$ret$37 = new TypeInfo(tmp_8, tmp$ret$36);
            this_0.a3b(tmp$ret$37);
          } else {
            if (body_0 instanceof OutgoingContent) {
              this_0.n36_1 = body_0;
              this_0.a3b(null);
            } else {
              this_0.n36_1 = body_0;
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
              var tmp$ret$38 = tmp_12;
              var tmp$ret$39 = new TypeInfo(tmp_11, tmp$ret$38);
              this_0.a3b(tmp$ret$39);
            }
          }
        } else {
          contentType(this_0, MultiPart_getInstance().g2k_1);
          // Inline function 'io.ktor.client.request.forms.formData' call
          // Inline function 'kotlin.apply' call
          var this_2 = new FormBuilder();
          // Inline function 'kotlin.collections.forEach' call
          var _iterator__ex2g4s_5 = params.q1();
          while (_iterator__ex2g4s_5.r1()) {
            var element_5 = _iterator__ex2g4s_5.s1();
            this_2.l3o(element_5.e45_1, ensureNotNull(element_5.f45_1));
          }
          // Inline function 'kotlin.collections.forEach' call
          var _iterator__ex2g4s_6 = files.q1();
          while (_iterator__ex2g4s_6.r1()) {
            var element_6 = _iterator__ex2g4s_6.s1();
            var tmp_14 = ensureNotNull(element_6.h45_1);
            // Inline function 'io.ktor.http.Companion.build' call
            Companion_getInstance_0();
            // Inline function 'kotlin.apply' call
            var this_3 = new HeadersBuilder();
            append(this_3, 'Content-Type', element_6.j45());
            this_3.m2d('Content-Disposition', 'filename=' + element_6.g45_1);
            var tmp$ret$45 = this_3.h2l();
            this_2.m3o(element_6.e45_1, tmp_14, tmp$ret$45);
          }
          // Inline function 'kotlin.collections.toTypedArray' call
          var this_4 = this_2.n3o();
          var tmp$ret$50 = copyToArray(this_4);
          var tmp$ret$51 = formData(tmp$ret$50.slice());
          // Inline function 'io.ktor.client.request.setBody' call
          var body_1 = new MultiPartFormDataContent(tmp$ret$51);
          if (body_1 == null) {
            this_0.n36_1 = NullBody_instance;
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
            var tmp$ret$52 = tmp_16;
            var tmp$ret$53 = new TypeInfo(tmp_15, tmp$ret$52);
            this_0.a3b(tmp$ret$53);
          } else {
            if (body_1 instanceof OutgoingContent) {
              this_0.n36_1 = body_1;
              this_0.a3b(null);
            } else {
              this_0.n36_1 = body_1;
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
              var tmp$ret$54 = tmp_19;
              var tmp$ret$55 = new TypeInfo(tmp_18, tmp$ret$54);
              this_0.a3b(tmp$ret$55);
            }
          }
        }
      }
    }
  }
  // Inline function 'io.ktor.client.request.request' call
  var tmp_21 = (new HttpStatement(this_0, client)).t3p($completion);
  if (tmp_21 === get_COROUTINE_SUSPENDED())
    tmp_21 = yield tmp_21;
  var tmp$ret$60 = tmp_21;
  var tmp_22 = tmp.b46(tmp$ret$60, $completion);
  if (tmp_22 === get_COROUTINE_SUSPENDED())
    tmp_22 = yield tmp_22;
  return tmp_22;
}
function proceed($this, method, $completion) {
  return suspendOrReturn(/*#__NOINLINE__*/_generator_proceed__7fi2iu.bind(VOID, $this, method), $completion);
}
function canSendOnly($this, param) {
  if (param.d45_1.equals(Type_JSON_getInstance()))
    return true;
  var tmp0_subject = param.j45();
  return tmp0_subject.equals(Application_getInstance().s2i_1) ? true : tmp0_subject.equals(Image_getInstance().u2j_1) ? true : tmp0_subject.equals(Image_getInstance().w2j_1) ? true : tmp0_subject.equals(Image_getInstance().r2j_1) ? true : tmp0_subject.equals(Video_getInstance().x2k_1) ? true : tmp0_subject.equals(Video_getInstance().y2k_1) ? true : tmp0_subject.equals(Video_getInstance().a2l_1) ? true : tmp0_subject.equals(ContentType.k2i('video', 'webm')) ? true : false;
}
function HttpRequest$proceed$lambda($req) {
  return ($this$HttpClient) => {
    applySystemProxy($this$HttpClient);
    var tmp;
    if ($req.w45_1) {
      applySkipSSLValidation($this$HttpClient);
      tmp = Unit_instance;
    }
    $this$HttpClient.e37_1 = $req.v45_1;
    return Unit_instance;
  };
}
function HttpRequest$proceed$lambda_0($req) {
  return ($this$headers) => {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = $req.s45_1.z2().q1();
    while (_iterator__ex2g4s.r1()) {
      var element = _iterator__ex2g4s.s1();
      // Inline function 'kotlin.collections.component1' call
      var k = element.a3();
      // Inline function 'kotlin.collections.component2' call
      var v = element.b3();
      $this$headers.m2d(k, v);
    }
    return Unit_instance;
  };
}
function HttpRequest$proceed$lambda_1($req) {
  return ($this$timeout) => {
    $this$timeout.e3j($req.x45_1);
    $this$timeout.f3j($req.y45_1);
    $this$timeout.g3j($req.z45_1);
    return Unit_instance;
  };
}
function *_generator_from__qou0de($this, response, $completion) {
  var tmp = response.v38().a2t_1;
  var tmp_0 = toMap(response.c2q());
  // Inline function 'io.ktor.client.call.body' call
  var tmp_1 = response.l38();
  // Inline function 'io.ktor.util.reflect.typeInfo' call
  var tmp_2 = PrimitiveClasses_getInstance().rg();
  // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
  var tmp_3;
  try {
    tmp_3 = createKType(PrimitiveClasses_getInstance().rg(), arrayOf([]), false);
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
  var tmp$ret$0 = tmp_3;
  var tmp$ret$1 = new TypeInfo(tmp_2, tmp$ret$0);
  var tmp_5 = tmp_1.i38(tmp$ret$1, $completion);
  if (tmp_5 === get_COROUTINE_SUSPENDED())
    tmp_5 = yield tmp_5;
  var tmp_6 = tmp_5;
  var tmp$ret$2 = (!(tmp_6 == null) ? isByteArray(tmp_6) : false) ? tmp_6 : THROW_CCE();
  return new HttpResponse(tmp, tmp_0, tmp$ret$2);
}
function HttpResponse$Companion$mapper$lambda($this$Json) {
  $this$Json.e3s_1 = true;
  return Unit_instance;
}
var Companion_instance_0;
function Companion_getInstance_4() {
  if (Companion_instance_0 === VOID)
    new Companion_0();
  return Companion_instance_0;
}
function HttpResponse$stringBody$delegate$lambda(this$0) {
  return () => decodeToString(this$0.m46_1);
}
function HttpResponse$_get_stringBody_$ref_nmyr7m() {
  return (p0) => p0.o46();
}
function applySystemProxy(_this__u8e3s4) {
  var proxyUrl = proxyUrlFromEnv();
  // Inline function 'kotlin.text.isNullOrBlank' call
  if (!(proxyUrl == null || isBlank(proxyUrl))) {
    _this__u8e3s4.v37(applySystemProxy$lambda(proxyUrl));
  }
}
function applySystemProxy$lambda($proxyUrl) {
  return ($this$engine) => {
    $this$engine.x3b_1 = ProxyBuilder_instance.h3r(Url($proxyUrl));
    return Unit_instance;
  };
}
function *_generator_invoke__zhh2q8($this, $this$launch, $completion) {
  var tmp = $this.e47_1.x46_1(readText($this.f47_1), $completion);
  if (tmp === get_COROUTINE_SUSPENDED())
    tmp = yield tmp;
  return Unit_instance;
}
function *_generator_invoke__zhh2q8_0($this, $this$launch, $completion) {
  var tmp = $this.g47_1.y46_1(readBytes($this.h47_1), $completion);
  if (tmp === get_COROUTINE_SUSPENDED())
    tmp = yield tmp;
  return Unit_instance;
}
function *_generator_invoke__zhh2q8_1($this, $this$webSocket, $completion) {
  try {
    $this.i47_1.d47_1 = $this$webSocket;
    $this.j47_1.z46_1($this.j47_1);
    var _iterator__ex2g4s = $this$webSocket.q30().q1();
    $l$loop: while (true) {
      var tmp = _iterator__ex2g4s.h21($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      if (!tmp) {
        break $l$loop;
      }
      var frame = _iterator__ex2g4s.s1();
      if (frame instanceof Text) {
        launch($this$webSocket, VOID, VOID, WebsocketRequest$start$slambda$slambda_1($this.i47_1, frame));
      } else {
        if (frame instanceof Binary) {
          launch($this$webSocket, VOID, VOID, WebsocketRequest$start$slambda$slambda_2($this.i47_1, frame));
        }
      }
    }
  } catch ($p) {
    if ($p instanceof Exception) {
      var e = $p;
      $this.j47_1.b47_1(e);
    } else {
      throw $p;
    }
  }
  finally {
    $this.j47_1.a47_1($this.j47_1);
  }
  return Unit_instance;
}
function WebsocketRequest$start$slambda$slambda_1(this$0, $frame) {
  var i = new WebsocketRequest$start$slambda$slambda(this$0, $frame);
  var l = ($this$launch, $completion) => i.l29($this$launch, $completion);
  l.$arity = 1;
  return l;
}
function WebsocketRequest$start$slambda$slambda_2(this$0, $frame) {
  var i = new WebsocketRequest$start$slambda$slambda_0(this$0, $frame);
  var l = ($this$launch, $completion) => i.l29($this$launch, $completion);
  l.$arity = 1;
  return l;
}
function *_generator_start__v5y7pu($this, method, $completion) {
  // Inline function 'kotlin.also' call
  var req = $this;
  var tmp0_safe_receiver = $this.u46_1;
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.collections.set' call
    $this.w46_1.k4('Accept', tmp0_safe_receiver);
  }
  var tmp1_safe_receiver = $this.v46_1;
  if (tmp1_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    var tmp0 = $this.w46_1;
    // Inline function 'kotlin.collections.set' call
    var key = 'User-Agent';
    tmp0.k4(key, tmp1_safe_receiver);
  }
  var tmp = WebsocketRequest$start$lambda(method, req);
  var tmp_0 = webSocket($this.c47_1, tmp, WebsocketRequest$start$slambda_0($this, req), $completion);
  if (tmp_0 === get_COROUTINE_SUSPENDED())
    tmp_0 = yield tmp_0;
  return $this;
}
function WebsocketRequest$textListener$slambda_0() {
  var i = new WebsocketRequest$textListener$slambda();
  var l = (it, $completion) => i.k47(it, $completion);
  l.$arity = 1;
  return l;
}
function WebsocketRequest$bytesListener$slambda_0() {
  var i = new WebsocketRequest$bytesListener$slambda();
  var l = (it, $completion) => i.l47(it, $completion);
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
  $this$HttpClient.w37(tmp, WebsocketRequest$client$lambda$lambda);
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
  tmp.t3l_1 = tmp1_elvis_lhs == null ? 0n : tmp1_elvis_lhs;
  return Unit_instance;
}
function WebsocketRequest$start$lambda$lambda($req) {
  return ($this$headers) => {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = $req.w46_1.z2().q1();
    while (_iterator__ex2g4s.r1()) {
      var element = _iterator__ex2g4s.s1();
      // Inline function 'kotlin.collections.component1' call
      var k = element.a3();
      // Inline function 'kotlin.collections.component2' call
      var v = element.b3();
      $this$headers.m2d(k, v);
    }
    return Unit_instance;
  };
}
function WebsocketRequest$start$lambda($method, $req) {
  return ($this$webSocket) => {
    $this$webSocket.l36_1 = $method;
    if (!($req.t46_1 == null)) {
      // Inline function 'kotlin.checkNotNull' call
      var tmp0 = $req.t46_1;
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
      takeFrom($this$webSocket.k36_1, URLBuilder(tmp));
    } else {
      url($this$webSocket, $req.p46_1, $req.q46_1, $req.s46_1, $req.r46_1);
    }
    headers($this$webSocket, WebsocketRequest$start$lambda$lambda($req));
    return Unit_instance;
  };
}
function WebsocketRequest$start$slambda_0(this$0, $req) {
  var i = new WebsocketRequest$start$slambda(this$0, $req);
  var l = ($this$webSocket, $completion) => i.m47($this$webSocket, $completion);
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
