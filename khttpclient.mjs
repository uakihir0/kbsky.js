import {
  Unit_instance3kz1zqli6gr1r as Unit_instance,
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
  closeFinally1sadm0w9gt3u4 as closeFinally,
  LinkedHashMap1zhqxkxv3xnkl as LinkedHashMap,
  PrimitiveClasses_getInstance13wbaztpz3e2d as PrimitiveClasses_getInstance,
  isByteArray4nnzfn1x4o3w as isByteArray,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  decodeToString1x4faah2liw2p as decodeToString,
  constructCallableReference23y65rf941mch as constructCallableReference,
  lazy2hsh8ze7j6ikd as lazy,
  KProperty1ca4yb4wlo496 as KProperty1,
  getPropertyCallableRef3hckxc0xueiaj as getPropertyCallableRef,
  isBlank1dvkhjjvox3p0 as isBlank,
  startsWith26w8qjqapeeq6 as startsWith,
  orPromise1iucc2to2udt2 as orPromise,
  RuntimeException1r3t0zl97011n as RuntimeException,
  $3l5vvh8yg0ier as $,
} from './kotlin-kotlin-stdlib.mjs';
import { toByteArray1i3ns5jnoqlv6 as toByteArray } from './ktor-ktor-io.mjs';
import {
  Text_getInstance2n0fbbag7eq4k as Text_getInstance,
  Image_getInstance2m1rm2vxrh8my as Image_getInstance,
  Video_getInstance1fh8aeg6yml64 as Video_getInstance,
  ContentType1svlpabm9v7iz as ContentType,
  Application_getInstance3vhi2qmce4cj0 as Application_getInstance,
  URLBuilder1nlnzfhn643pn as URLBuilder,
  takeFromkqlcz7c6dx2r as takeFrom,
  MultiPart_getInstance5h1nld8q49pe as MultiPart_getInstance,
  contentType1lwcfjsjo0z8g as contentType,
  Companion_getInstance72dans54qq1a as Companion_getInstance,
  HeadersBuilder3h7sn3kkvu98m as HeadersBuilder,
  append2z8giuo6jcxrf as append,
  OutgoingContent3t2ohmyam9o76 as OutgoingContent,
  NullBody_instance22vwyocs8eppk as NullBody_instance,
  Companion_getInstance25cbdbruarm2m as Companion_getInstance_0,
  ParametersBuilder1ry9ntvvg567r as ParametersBuilder,
  Companion_getInstance29j9s2wnmk34z as Companion_getInstance_1,
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
  ProxyBuilder_instance1fqpnkd31ded1 as ProxyBuilder_instance,
} from './ktor-ktor-client-core.mjs';
import {
  TypeInfo2nbxsuf4v8os2 as TypeInfo,
  toMap1agg4casweo9p as toMap,
} from './ktor-ktor-utils.mjs';
import { Jsonsmkyu9xjl7fv as Json } from './kotlinx-serialization-kotlinx-serialization-json.mjs';
import {
  CompletableDeferred2lnqvsbvx74d3 as CompletableDeferred,
  Key_instancepi2bbb0csu5f as Key_instance,
  launch1c91vkjzdi9sd as launch,
  cancel36mj9lv3a0whl as cancel,
  Dispatchers_getInstance128lm494a5r5s as Dispatchers_getInstance,
  SupervisorJobythnfxkr3jxc as SupervisorJob,
  CoroutineScopelux7s7zphw7e as CoroutineScope,
} from './kotlinx-coroutines-core.mjs';
//region block: imports
//endregion
//region block: pre-declaration
class Type extends Enum {}
class Companion {
  u44(key, value) {
    return new HttpParameter(Type_QUERY_getInstance(), key, value);
  }
  v44(key, fileName, fileBody) {
    return new HttpParameter(Type_FILE_getInstance(), key, null, fileName, fileBody);
  }
  w44(json) {
    return new HttpParameter(Type_JSON_getInstance(), 'json', null, 'file.json', toByteArray(json));
  }
}
class HttpParameter {
  constructor(type, key, value, fileName, fileBody) {
    value = value === VOID ? null : value;
    fileName = fileName === VOID ? null : fileName;
    fileBody = fileBody === VOID ? null : fileBody;
    this.x44_1 = type;
    this.y44_1 = key;
    this.z44_1 = value;
    this.a45_1 = fileName;
    this.b45_1 = fileBody;
  }
  c45() {
    var tmp0_safe_receiver = this.a45_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : split(tmp0_safe_receiver, ['.']);
    return tmp1_safe_receiver == null ? null : lastOrNull(tmp1_safe_receiver);
  }
  d45() {
    switch (this.c45()) {
      case 'txt':
        return Text_getInstance().k31_1;
      case 'html':
        return Text_getInstance().n31_1;
      case 'css':
        return Text_getInstance().l31_1;
      case 'csv':
        return Text_getInstance().m31_1;
      case 'jpg':
      case 'jpeg':
        return Image_getInstance().r30_1;
      case 'png':
        return Image_getInstance().t30_1;
      case 'gif':
        return Image_getInstance().o30_1;
      case 'svg':
        return Image_getInstance().u30_1;
      case 'mpeg':
        return Video_getInstance().v31_1;
      case 'mp4':
        return Video_getInstance().w31_1;
      case 'mov':
        return Video_getInstance().y31_1;
      case 'webm':
        return ContentType.h2z('video', 'webm');
      case 'json':
        return Application_getInstance().p2z_1;
      case 'xml':
        return Application_getInstance().v2z_1;
      case 'zip':
        return Application_getInstance().y2z_1;
      case 'pdf':
        return Application_getInstance().b30_1;
    }
    return Application_getInstance().s2z_1;
  }
}
class HttpRequest {
  constructor() {
    this.e45_1 = 'https';
    this.f45_1 = null;
    this.g45_1 = null;
    this.h45_1 = null;
    this.i45_1 = null;
    this.j45_1 = null;
    this.k45_1 = 'kHttpClient/1.0';
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.l45_1 = ArrayList.k2();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.m45_1 = LinkedHashMap.i5();
    this.n45_1 = false;
    this.o45_1 = false;
    this.p45_1 = true;
    this.q45_1 = false;
    this.r45_1 = null;
    this.s45_1 = null;
    this.t45_1 = null;
  }
  w45(url) {
    // Inline function 'kotlin.also' call
    this.i45_1 = url;
    return this;
  }
  x45(accept) {
    // Inline function 'kotlin.also' call
    this.j45_1 = accept;
    return this;
  }
  y45(key, value) {
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.collections.set' call
    this.m45_1.o4(key, value);
    return this;
  }
  z45(skipSSLValidation) {
    // Inline function 'kotlin.also' call
    this.q45_1 = skipSSLValidation;
    return this;
  }
  a46(key, value) {
    // Inline function 'kotlin.also' call
    this.l45_1.a2(Companion_instance.u44(key, toString(value)));
    return this;
  }
  b46(queries) {
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
      this.a46(k, v);
    }
    return this;
  }
  v44(key, fileName, fileBody) {
    // Inline function 'kotlin.also' call
    this.l45_1.a2(Companion_instance.v44(key, fileName, fileBody));
    return this;
  }
  w44(json) {
    // Inline function 'kotlin.also' call
    this.l45_1.a2(Companion_instance.w44(json));
    return this;
  }
  *c46($completion) {
    return yield* /*#__NOINLINE__*/proceed(this, Companion_getInstance_1().d37_1, $completion);
  }
  *d46($completion) {
    return yield* /*#__NOINLINE__*/proceed(this, Companion_getInstance_1().e37_1, $completion);
  }
}
class Companion_0 {
  constructor() {
    Companion_instance_0 = this;
    var tmp = this;
    tmp.u45_1 = Json(VOID, HttpResponse$Companion$mapper$lambda);
  }
  *v45(response, $completion) {
    var tmp = response.t3o().b3a_1;
    var tmp_0 = toMap(response.c37());
    // Inline function 'io.ktor.client.call.body' call
    var tmp_1 = response.r3o();
    // Inline function 'io.ktor.util.reflect.typeInfo' call
    var tmp_2 = PrimitiveClasses_getInstance().kg();
    var tmp_3 = !(null == null) ? isByteArray(null) : false;
    // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
    var tmp_4;
    try {
      tmp_4 = createKType(PrimitiveClasses_getInstance().kg(), arrayOf([]), false);
    } catch ($p) {
      var tmp_5;
      if ($p instanceof Error) {
        var _unused_var__etf5q3 = $p;
        tmp_5 = null;
      } else {
        throw $p;
      }
      tmp_4 = tmp_5;
    }
    var tmp$ret$2 = tmp_4;
    var tmp$ret$1 = new TypeInfo(tmp_2, tmp_3, tmp$ret$2);
    var tmp_6 = yield* tmp_1.q3o(tmp$ret$1, $completion);
    var tmp$ret$0 = (!(tmp_6 == null) ? isByteArray(tmp_6) : false) ? tmp_6 : THROW_CCE();
    return new HttpResponse(tmp, tmp_0, tmp$ret$0);
  }
}
class HttpResponse {
  constructor(status, headers, body) {
    Companion_getInstance_3();
    this.e46_1 = status;
    this.f46_1 = headers;
    this.g46_1 = body;
    var tmp = this;
    tmp.h46_1 = lazy(HttpResponse$stringBody$delegate$lambda(this));
  }
  i46() {
    var tmp0 = this.h46_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('stringBody', 1, tmp, HttpResponse$_get_stringBody_$ref_nmyr7m(), null);
    return tmp0.w2();
  }
}
class WebsocketRequest {
  constructor() {
    this.j46_1 = 'ws';
    this.k46_1 = null;
    this.l46_1 = null;
    this.m46_1 = null;
    this.n46_1 = null;
    this.o46_1 = null;
    this.p46_1 = 'kHttpClient/1.0';
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.q46_1 = LinkedHashMap.i5();
    var tmp_0 = this;
    tmp_0.r46_1 = WebsocketRequest$textListener$slambda();
    var tmp_1 = this;
    tmp_1.s46_1 = WebsocketRequest$bytesListener$slambda();
    var tmp_2 = this;
    tmp_2.t46_1 = WebsocketRequest$onOpenListener$lambda;
    var tmp_3 = this;
    tmp_3.u46_1 = WebsocketRequest$onCloseListener$lambda;
    var tmp_4 = this;
    tmp_4.v46_1 = WebsocketRequest$onErrorListener$lambda;
    this.w46_1 = null;
    this.x46_1 = CompletableDeferred();
    this.y46_1 = false;
    this.z46_1 = CoroutineScope(Dispatchers_getInstance().v2d_1.sm(SupervisorJob()));
  }
  a47(url) {
    // Inline function 'kotlin.also' call
    this.n46_1 = url;
    return this;
  }
  *b47($completion) {
    return yield* /*#__NOINLINE__*/start(this, $completion);
  }
  a7() {
    if (!this.y46_1) {
      this.y46_1 = true;
      this.u46_1(this);
    }
    var tmp0_safe_receiver = this.w46_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.close();
    }
    this.w46_1 = null;
    this.x46_1.k29(Unit_instance);
    cancel(this.z46_1);
  }
}
//endregion
var static_init_called;
function static_init() {
  if (static_init_called)
    return Unit_instance;
  static_init_called = true;
  Type_QUERY_instance = new Type('QUERY', 0);
  Type_PARAM_instance = new Type('PARAM', 1);
  Type_FILE_instance = new Type('FILE', 2);
  Type_JSON_instance = new Type('JSON', 3);
}
var Type_QUERY_instance;
var Type_PARAM_instance;
var Type_FILE_instance;
var Type_JSON_instance;
var Companion_instance;
function Companion_getInstance_2() {
  return Companion_instance;
}
function Type_QUERY_getInstance() {
  static_init();
  return Type_QUERY_instance;
}
function Type_PARAM_getInstance() {
  static_init();
  return Type_PARAM_instance;
}
function Type_FILE_getInstance() {
  static_init();
  return Type_FILE_instance;
}
function Type_JSON_getInstance() {
  static_init();
  return Type_JSON_instance;
}
function *proceed($this, method, $completion) {
  var req = $this;
  var tmp0 = HttpClient(HttpRequest$proceed$lambda(req));
  var tmp$ret$0;
  $l$block_0: {
    // Inline function 'kotlin.use' call
    var exception = null;
    try {
      var tmp0_safe_receiver = $this.j45_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.collections.set' call
        $this.m45_1.o4('Accept', tmp0_safe_receiver);
      }
      var tmp1_safe_receiver = $this.k45_1;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        var tmp0_0 = $this.m45_1;
        // Inline function 'kotlin.collections.set' call
        var key = 'User-Agent';
        tmp0_0.o4(key, tmp1_safe_receiver);
      }
      var tmp = Companion_getInstance_3();
      // Inline function 'io.ktor.client.request.request' call
      // Inline function 'kotlin.apply' call
      var this_0 = new HttpRequestBuilder();
      this_0.q3n_1 = method;
      if (!(req.i45_1 == null)) {
        // Inline function 'kotlin.checkNotNull' call
        var tmp0_1 = req.i45_1;
        var tmp$ret$12;
        $l$block: {
          // Inline function 'kotlin.checkNotNull' call
          if (tmp0_1 == null) {
            var message = 'Required value was null.';
            throw IllegalStateException.o(toString(message));
          } else {
            tmp$ret$12 = tmp0_1;
            break $l$block;
          }
        }
        var tmp_0 = tmp$ret$12;
        takeFrom(this_0.p3n_1, URLBuilder(tmp_0));
      } else {
        url(this_0, req.e45_1, req.f45_1, req.h45_1, req.g45_1);
      }
      headers(this_0, HttpRequest$proceed$lambda_0(req));
      timeout(this_0, HttpRequest$proceed$lambda_1(req));
      if (!$this.n45_1 && !$this.o45_1 && req.l45_1.l2() === 1 && canSendOnly($this, first(req.l45_1))) {
        var param = first(req.l45_1);
        // Inline function 'io.ktor.client.request.setBody' call
        var body = new ByteArrayContent(ensureNotNull(param.b45_1), param.d45());
        if (body == null) {
          this_0.s3n_1 = NullBody_instance;
          // Inline function 'io.ktor.util.reflect.typeInfo' call
          var tmp_1 = getKClass(ByteArrayContent);
          var tmp_2 = null instanceof ByteArrayContent;
          // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
          var tmp_3;
          try {
            tmp_3 = createKType(getKClass(ByteArrayContent), arrayOf([]), false);
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
          var tmp$ret$16 = tmp_3;
          var tmp$ret$15 = new TypeInfo(tmp_1, tmp_2, tmp$ret$16);
          this_0.j3r(tmp$ret$15);
        } else {
          if (body instanceof OutgoingContent) {
            this_0.s3n_1 = body;
            this_0.j3r(null);
          } else {
            this_0.s3n_1 = body;
            // Inline function 'io.ktor.util.reflect.typeInfo' call
            var tmp_5 = getKClass(ByteArrayContent);
            var tmp_6 = null instanceof ByteArrayContent;
            // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
            var tmp_7;
            try {
              tmp_7 = createKType(getKClass(ByteArrayContent), arrayOf([]), false);
            } catch ($p_0) {
              var tmp_8;
              if ($p_0 instanceof Error) {
                var _unused_var__etf5q3_0 = $p_0;
                tmp_8 = null;
              } else {
                throw $p_0;
              }
              tmp_7 = tmp_8;
            }
            var tmp$ret$18 = tmp_7;
            var tmp$ret$17 = new TypeInfo(tmp_5, tmp_6, tmp$ret$18);
            this_0.j3r(tmp$ret$17);
          }
        }
      } else {
        if (method.equals(Companion_getInstance_1().d37_1)) {
          // Inline function 'kotlin.collections.forEach' call
          var _iterator__ex2g4s = req.l45_1.l1();
          while (_iterator__ex2g4s.m1()) {
            var element = _iterator__ex2g4s.n1();
            if (element.x44_1.s1_1 === 0) {
              this_0.p3n_1.q3a_1.v2t(element.y44_1, ensureNotNull(element.z44_1));
            } else {
              throw IllegalStateException.o('Request Body is not supported in the GET method.');
            }
          }
        } else {
          // Inline function 'kotlin.collections.filter' call
          var tmp0_2 = req.l45_1;
          // Inline function 'kotlin.collections.filterTo' call
          var destination = ArrayList.k2();
          var _iterator__ex2g4s_0 = tmp0_2.l1();
          while (_iterator__ex2g4s_0.m1()) {
            var element_0 = _iterator__ex2g4s_0.n1();
            if (element_0.x44_1.equals(Type_QUERY_getInstance())) {
              destination.a2(element_0);
            }
          }
          var queries = destination;
          // Inline function 'kotlin.collections.filter' call
          var tmp0_3 = req.l45_1;
          // Inline function 'kotlin.collections.filterTo' call
          var destination_0 = ArrayList.k2();
          var _iterator__ex2g4s_1 = tmp0_3.l1();
          while (_iterator__ex2g4s_1.m1()) {
            var element_1 = _iterator__ex2g4s_1.n1();
            if (element_1.x44_1.equals(Type_PARAM_getInstance())) {
              destination_0.a2(element_1);
            }
          }
          var params = destination_0;
          // Inline function 'kotlin.collections.filter' call
          var tmp0_4 = req.l45_1;
          // Inline function 'kotlin.collections.filterTo' call
          var destination_1 = ArrayList.k2();
          var _iterator__ex2g4s_2 = tmp0_4.l1();
          while (_iterator__ex2g4s_2.m1()) {
            var element_2 = _iterator__ex2g4s_2.n1();
            if (element_2.x44_1.equals(Type_FILE_getInstance())) {
              destination_1.a2(element_2);
            }
          }
          var files = destination_1;
          // Inline function 'kotlin.collections.isNotEmpty' call
          if (!queries.j1()) {
            // Inline function 'kotlin.collections.forEach' call
            var _iterator__ex2g4s_3 = queries.l1();
            while (_iterator__ex2g4s_3.m1()) {
              var element_3 = _iterator__ex2g4s_3.n1();
              this_0.p3n_1.q3a_1.v2t(element_3.y44_1, ensureNotNull(element_3.z44_1));
            }
          }
          var tmp_9;
          // Inline function 'kotlin.collections.isNotEmpty' call
          if (!params.j1()) {
            tmp_9 = true;
          } else {
            // Inline function 'kotlin.collections.isNotEmpty' call
            tmp_9 = !files.j1();
          }
          if (tmp_9) {
            if ($this.o45_1) {
              // Inline function 'kotlin.collections.isNotEmpty' call
              if (!files.j1()) {
                throw IllegalStateException.o('ApplicationFormUrlEncoded cannot send files.');
              }
              contentType(this_0, Application_getInstance().a30_1);
              // Inline function 'io.ktor.http.Companion.build' call
              Companion_getInstance_0();
              // Inline function 'kotlin.apply' call
              var this_1 = ParametersBuilder();
              // Inline function 'kotlin.collections.forEach' call
              var _iterator__ex2g4s_4 = params.l1();
              while (_iterator__ex2g4s_4.m1()) {
                var element_4 = _iterator__ex2g4s_4.n1();
                this_1.v2t(element_4.y44_1, ensureNotNull(element_4.z44_1));
              }
              var tmp$ret$36 = this_1.f32();
              // Inline function 'io.ktor.client.request.setBody' call
              var body_0 = new FormDataContent(tmp$ret$36);
              if (body_0 == null) {
                this_0.s3n_1 = NullBody_instance;
                // Inline function 'io.ktor.util.reflect.typeInfo' call
                var tmp_10 = getKClass(FormDataContent);
                var tmp_11 = null instanceof FormDataContent;
                // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
                var tmp_12;
                try {
                  tmp_12 = createKType(getKClass(FormDataContent), arrayOf([]), false);
                } catch ($p_1) {
                  var tmp_13;
                  if ($p_1 instanceof Error) {
                    var _unused_var__etf5q3_1 = $p_1;
                    tmp_13 = null;
                  } else {
                    throw $p_1;
                  }
                  tmp_12 = tmp_13;
                }
                var tmp$ret$43 = tmp_12;
                var tmp$ret$42 = new TypeInfo(tmp_10, tmp_11, tmp$ret$43);
                this_0.j3r(tmp$ret$42);
              } else {
                if (body_0 instanceof OutgoingContent) {
                  this_0.s3n_1 = body_0;
                  this_0.j3r(null);
                } else {
                  this_0.s3n_1 = body_0;
                  // Inline function 'io.ktor.util.reflect.typeInfo' call
                  var tmp_14 = getKClass(FormDataContent);
                  var tmp_15 = null instanceof FormDataContent;
                  // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
                  var tmp_16;
                  try {
                    tmp_16 = createKType(getKClass(FormDataContent), arrayOf([]), false);
                  } catch ($p_2) {
                    var tmp_17;
                    if ($p_2 instanceof Error) {
                      var _unused_var__etf5q3_2 = $p_2;
                      tmp_17 = null;
                    } else {
                      throw $p_2;
                    }
                    tmp_16 = tmp_17;
                  }
                  var tmp$ret$45 = tmp_16;
                  var tmp$ret$44 = new TypeInfo(tmp_14, tmp_15, tmp$ret$45);
                  this_0.j3r(tmp$ret$44);
                }
              }
            } else {
              contentType(this_0, MultiPart_getInstance().d31_1);
              // Inline function 'io.ktor.client.request.forms.formData' call
              // Inline function 'kotlin.apply' call
              var this_2 = new FormBuilder();
              // Inline function 'kotlin.collections.forEach' call
              var _iterator__ex2g4s_5 = params.l1();
              while (_iterator__ex2g4s_5.m1()) {
                var element_5 = _iterator__ex2g4s_5.n1();
                this_2.q41(element_5.y44_1, ensureNotNull(element_5.z44_1));
              }
              // Inline function 'kotlin.collections.forEach' call
              var _iterator__ex2g4s_6 = files.l1();
              while (_iterator__ex2g4s_6.m1()) {
                var element_6 = _iterator__ex2g4s_6.n1();
                var tmp_18 = ensureNotNull(element_6.b45_1);
                // Inline function 'io.ktor.http.Companion.build' call
                Companion_getInstance();
                // Inline function 'kotlin.apply' call
                var this_3 = new HeadersBuilder();
                append(this_3, 'Content-Type', element_6.d45());
                this_3.v2t('Content-Disposition', 'filename=' + element_6.a45_1);
                var tmp$ret$53 = this_3.f32();
                this_2.r41(element_6.y44_1, tmp_18, tmp$ret$53);
              }
              // Inline function 'kotlin.collections.toTypedArray' call
              var this_4 = this_2.s41();
              var tmp$ret$56 = copyToArray(this_4);
              var tmp$ret$46 = formData(tmp$ret$56.slice());
              // Inline function 'io.ktor.client.request.setBody' call
              var body_1 = new MultiPartFormDataContent(tmp$ret$46);
              if (body_1 == null) {
                this_0.s3n_1 = NullBody_instance;
                // Inline function 'io.ktor.util.reflect.typeInfo' call
                var tmp_19 = getKClass(MultiPartFormDataContent);
                var tmp_20 = null instanceof MultiPartFormDataContent;
                // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
                var tmp_21;
                try {
                  tmp_21 = createKType(getKClass(MultiPartFormDataContent), arrayOf([]), false);
                } catch ($p_3) {
                  var tmp_22;
                  if ($p_3 instanceof Error) {
                    var _unused_var__etf5q3_3 = $p_3;
                    tmp_22 = null;
                  } else {
                    throw $p_3;
                  }
                  tmp_21 = tmp_22;
                }
                var tmp$ret$59 = tmp_21;
                var tmp$ret$58 = new TypeInfo(tmp_19, tmp_20, tmp$ret$59);
                this_0.j3r(tmp$ret$58);
              } else {
                if (body_1 instanceof OutgoingContent) {
                  this_0.s3n_1 = body_1;
                  this_0.j3r(null);
                } else {
                  this_0.s3n_1 = body_1;
                  // Inline function 'io.ktor.util.reflect.typeInfo' call
                  var tmp_23 = getKClass(MultiPartFormDataContent);
                  var tmp_24 = null instanceof MultiPartFormDataContent;
                  // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
                  var tmp_25;
                  try {
                    tmp_25 = createKType(getKClass(MultiPartFormDataContent), arrayOf([]), false);
                  } catch ($p_4) {
                    var tmp_26;
                    if ($p_4 instanceof Error) {
                      var _unused_var__etf5q3_4 = $p_4;
                      tmp_26 = null;
                    } else {
                      throw $p_4;
                    }
                    tmp_25 = tmp_26;
                  }
                  var tmp$ret$61 = tmp_25;
                  var tmp$ret$60 = new TypeInfo(tmp_23, tmp_24, tmp$ret$61);
                  this_0.j3r(tmp$ret$60);
                }
              }
            }
          }
        }
      }
      // Inline function 'io.ktor.client.request.request' call
      var tmp$ret$8 = yield* (new HttpStatement(this_0, tmp0)).a43($completion);
      tmp$ret$0 = yield* tmp.v45(tmp$ret$8, $completion);
      break $l$block_0;
    } catch ($p_5) {
      if ($p_5 instanceof Error) {
        var e = $p_5;
        exception = e;
        throw e;
      } else {
        throw $p_5;
      }
    }
    finally {
      closeFinally(tmp0, exception);
    }
  }
  return tmp$ret$0;
}
function canSendOnly($this, param) {
  if (param.x44_1.equals(Type_JSON_getInstance()))
    return true;
  var tmp0_subject = param.d45();
  return tmp0_subject.equals(Application_getInstance().p2z_1) ? true : tmp0_subject.equals(Image_getInstance().r30_1) ? true : tmp0_subject.equals(Image_getInstance().t30_1) ? true : tmp0_subject.equals(Image_getInstance().o30_1) ? true : tmp0_subject.equals(Video_getInstance().v31_1) ? true : tmp0_subject.equals(Video_getInstance().w31_1) ? true : tmp0_subject.equals(Video_getInstance().y31_1) ? true : tmp0_subject.equals(ContentType.h2z('video', 'webm')) ? true : false;
}
function HttpRequest$proceed$lambda($req) {
  return ($this$HttpClient) => {
    applySystemProxy($this$HttpClient);
    var tmp;
    if ($req.q45_1) {
      applySkipSSLValidation($this$HttpClient);
      tmp = Unit_instance;
    }
    $this$HttpClient.b3n_1 = $req.p45_1;
    return Unit_instance;
  };
}
function HttpRequest$proceed$lambda_0($req) {
  return ($this$headers) => {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = $req.m45_1.u2().l1();
    while (_iterator__ex2g4s.m1()) {
      var element = _iterator__ex2g4s.n1();
      // Inline function 'kotlin.collections.component1' call
      var k = element.v2();
      // Inline function 'kotlin.collections.component2' call
      var v = element.w2();
      $this$headers.v2t(k, v);
    }
    return Unit_instance;
  };
}
function HttpRequest$proceed$lambda_1($req) {
  return ($this$timeout) => {
    $this$timeout.f3x($req.r45_1);
    $this$timeout.g3x($req.s45_1);
    $this$timeout.h3x($req.t45_1);
    return Unit_instance;
  };
}
function HttpResponse$Companion$mapper$lambda($this$Json) {
  $this$Json.z1k_1 = true;
  return Unit_instance;
}
var Companion_instance_0;
function Companion_getInstance_3() {
  if (Companion_instance_0 === VOID)
    new Companion_0();
  return Companion_instance_0;
}
function HttpResponse$stringBody$delegate$lambda(this$0) {
  return () => decodeToString(this$0.g46_1);
}
function HttpResponse$_get_stringBody_$ref_nmyr7m() {
  return constructCallableReference((p0) => p0.i46(), 1, 0, 34);
}
function applySystemProxy(_this__u8e3s4) {
  var proxyUrl = proxyUrlFromEnv();
  // Inline function 'kotlin.text.isNullOrBlank' call
  if (!(proxyUrl == null || isBlank(proxyUrl))) {
    _this__u8e3s4.y3n(applySystemProxy$lambda(proxyUrl));
  }
}
function applySystemProxy$lambda($proxyUrl) {
  return ($this$engine) => {
    $this$engine.u3r_1 = ProxyBuilder_instance.t44(Url($proxyUrl));
    return Unit_instance;
  };
}
function applySkipSSLValidation(_this__u8e3s4) {
  throw IllegalStateException.o('Skip SSL Validation is not supported on JS target.');
}
function proxyUrlFromEnv() {
  return null;
}
function *start($this, $completion) {
  var wsUrl = buildUrl($this);
  var opened = CompletableDeferred();
  $this.x46_1 = CompletableDeferred();
  $this.y46_1 = false;
  var socket = new WebSocket(wsUrl);
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  socket.binaryType = 'arraybuffer';
  $this.w46_1 = socket;
  socket.onopen = WebsocketRequest$start$lambda(opened, $this);
  socket.onclose = WebsocketRequest$start$lambda_0($this, opened);
  socket.onerror = WebsocketRequest$start$lambda_1($this, opened);
  socket.onmessage = WebsocketRequest$start$lambda_2($this);
  // Inline function 'kotlin.js.getCoroutineContext' call
  var tmp0_safe_receiver = $completion.tc().fd(Key_instance);
  if (tmp0_safe_receiver == null)
    null;
  else {
    tmp0_safe_receiver.k24(WebsocketRequest$start$lambda_3($this));
  }
  yield* opened.s25($completion);
  yield* $this.x46_1.s25($completion);
  return $this;
}
function buildUrl($this) {
  var tmp0_safe_receiver = $this.n46_1;
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    return tmp0_safe_receiver;
  }
  var s = $this.j46_1 === 'ws' || $this.j46_1 === 'wss' ? $this.j46_1 : 'wss';
  var tmp0 = $this.k46_1;
  var tmp$ret$2;
  $l$block: {
    // Inline function 'kotlin.checkNotNull' call
    if (tmp0 == null) {
      var message = 'host must be set';
      throw IllegalStateException.o(toString(message));
    } else {
      tmp$ret$2 = tmp0;
      break $l$block;
    }
  }
  var h = tmp$ret$2;
  var tmp1_safe_receiver = $this.m46_1;
  var tmp;
  if (tmp1_safe_receiver == null) {
    tmp = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp = ':' + tmp1_safe_receiver;
  }
  var tmp2_elvis_lhs = tmp;
  var p = tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs;
  var tmp3_safe_receiver = $this.l46_1;
  var tmp_0;
  if (tmp3_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_0 = startsWith(tmp3_safe_receiver, '/') ? tmp3_safe_receiver : '/' + tmp3_safe_receiver;
  }
  var tmp4_elvis_lhs = tmp_0;
  var pathPart = tmp4_elvis_lhs == null ? '' : tmp4_elvis_lhs;
  return s + '://' + h + p + pathPart;
}
function WebsocketRequest$textListener$slambda() {
  return constructCallableReference((it, $completion) => orPromise($completion, function *($completion) {
    return Unit_instance;
  }), 1);
}
function WebsocketRequest$bytesListener$slambda() {
  return constructCallableReference((it, $completion) => orPromise($completion, function *($completion) {
    return Unit_instance;
  }), 1);
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
function WebsocketRequest$start$lambda($opened, this$0) {
  return (it) => {
    $opened.k29(Unit_instance);
    var tmp;
    try {
      this$0.t46_1(this$0);
      tmp = Unit_instance;
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        this$0.v46_1(RuntimeException.ae('onOpenListener failed', e));
        tmp_0 = Unit_instance;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
}
function WebsocketRequest$start$lambda_0(this$0, $opened) {
  return (it) => {
    this$0.w46_1 = null;
    var tmp;
    if (!$opened.d24()) {
      $opened.l29(RuntimeException.cb('WebSocket closed before open'));
      tmp = Unit_instance;
    }
    var tmp_0;
    if (!this$0.y46_1) {
      this$0.y46_1 = true;
      tmp_0 = this$0.u46_1(this$0);
    }
    return this$0.x46_1.k29(Unit_instance);
  };
}
function WebsocketRequest$start$lambda_1(this$0, $opened) {
  return (_unused_var__etf5q3) => {
    var ex = RuntimeException.cb('WebSocket error');
    this$0.v46_1(ex);
    var tmp;
    if (!$opened.d24()) {
      $opened.l29(ex);
      tmp = Unit_instance;
    }
    return Unit_instance;
  };
}
function WebsocketRequest$start$lambda$slambda(this$0, $data) {
  return constructCallableReference(($this$launch, $completion) => orPromise($completion, function *($completion) {
    yield* $(this$0.r46_1($data, $completion), $completion);
    return Unit_instance;
  }), 1);
}
function WebsocketRequest$start$lambda$slambda_0(this$0, $bytes) {
  return constructCallableReference(($this$launch, $completion) => orPromise($completion, function *($completion) {
    yield* $(this$0.s46_1($bytes, $completion), $completion);
    return Unit_instance;
  }), 1);
}
function WebsocketRequest$start$lambda_2(this$0) {
  return (event) => {
    var data = event.data;
    var tmp;
    if (!(data == null) ? typeof data === 'string' : false) {
      launch(this$0.z46_1, VOID, VOID, WebsocketRequest$start$lambda$slambda(this$0, data));
      tmp = Unit_instance;
    } else {
      if (data instanceof ArrayBuffer) {
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var bytes = new Int8Array(data);
        launch(this$0.z46_1, VOID, VOID, WebsocketRequest$start$lambda$slambda_0(this$0, bytes));
        tmp = Unit_instance;
      }
    }
    return Unit_instance;
  };
}
function WebsocketRequest$start$lambda_3(this$0) {
  return (it) => {
    var tmp0_safe_receiver = this$0.w46_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.close();
    }
    cancel(this$0.z46_1);
    return Unit_instance;
  };
}
//region block: post-declaration
initMetadataForClass(Type, 'Type');
initMetadataForCompanion(Companion);
initMetadataForClass(HttpParameter, 'HttpParameter');
initMetadataForClass(HttpRequest, 'HttpRequest', HttpRequest, VOID, VOID, [0, 1]);
initMetadataForCompanion(Companion_0, VOID, VOID, [1]);
initMetadataForClass(HttpResponse, 'HttpResponse');
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
