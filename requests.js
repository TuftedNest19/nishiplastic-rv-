(()=>{
    "use strict";
    var e = {
        45615: (e,t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.WatcherHandler = void 0,
            function(e) {
                e.onLoad = "onLoad",
                e.onClick = "onClick",
                e.onIframeLoaded = "onIframeLoaded",
                e.onUrlChanged = "onUrlChanged",
                e.onPostMessage = "onPostMessage",
                e.onWindowLoad = "onWindowLoad",
                e.onDomLoad = "onDomLoad",
                e.onDomChanged = "onDomChanged",
                e.onHttpRequest = "onHttpRequest",
                e.onHttpResponse = "onHttpResponse"
            }(t.WatcherHandler || (t.WatcherHandler = {}))
        }
        ,
        57309: (e,t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.InterceptorAdapter = t.RequestValidator = void 0;
            t.RequestValidator = class {
            }
            ;
            t.InterceptorAdapter = class {
            }
        }
        ,
        35263: (e,t)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.MessageScriptType = t.MessageContentType = void 0,
            function(e) {
                e.ECOMMERCE_INIT = "ECOMMERCE_INIT",
                e.ECOMMERCE_RE_INIT = "ECOMMERCE_RE_INIT",
                e.ECOMMERCE_TRACK = "ECOMMERCE_TRACK",
                e.ECOMMERCE_RUNTIME_STORAGE_SAVE = "ECOMMERCE_RUNTIME_STORAGE_SAVE",
                e.ECOMMERCE_RUNTIME_STORAGE_REMOVE = "ECOMMERCE_RUNTIME_STORAGE_REMOVE",
                e.ERROR_TRACE = "ERROR_TRACE",
                e.ECOMMERCE_INIT_SHOPIFY = "ECOMMERCE_INIT_SHOPIFY"
            }(t.MessageContentType || (t.MessageContentType = {})),
            function(e) {
                e.INIT_HTTP_CONFIG = "INIT_HTTP_CONFIG",
                e.SAVE_HTTP_DATA = "SAVE_HTTP_DATA",
                e.CUSTOM_ON_URL_CHANGED = "CUSTOM_ON_URL_CHANGED",
                e.SHOPIFY_DETECTED = "SHOPIFY_DETECTED"
            }(t.MessageScriptType || (t.MessageScriptType = {}))
        }
    }
      , t = {};
    function s(n) {
        var o = t[n];
        if (void 0 !== o)
            return o.exports;
        var a = t[n] = {
            exports: {}
        };
        return e[n](a, a.exports, s),
        a.exports
    }
    (()=>{
        const e = s(45615)
          , t = s(35263)
          , n = s(57309);
        (s=>{
            const o = e=>{
                const n = {
                    _custom_type_: t.MessageScriptType.SAVE_HTTP_DATA,
                    payload: e
                };
                s.postMessage(n)
            }
            ;
            class a extends n.RequestValidator {
                validateRequest(e, t="GET") {
                    return !!this.onHttpRequest?.length && (this.onHttpRequest.find(this.httpMatherPredicate(e, t)) ?? !1)
                }
                validateResponse(e, t="GET") {
                    return !!this.onHttpResponse?.length && (this.onHttpResponse.find(this.httpMatherPredicate(e, t)) ?? !1)
                }
                setConfig(e, t) {
                    this.onHttpRequest = e,
                    this.onHttpResponse = t
                }
                httpMatherPredicate(e, t) {
                    return ({regex: s, methods: n})=>{
                        const o = new RegExp(s,"i");
                        return n.includes(t) && o.test(e)
                    }
                }
            }
            class r extends n.InterceptorAdapter {
                constructor(e) {
                    super(),
                    this.validator = e,
                    this.initInterceptor()
                }
                static init(e) {
                    this.instance || (this.instance = new r(e))
                }
                async interceptRequest(t, s) {
                    const n = s?.method
                      , a = this.validator.validateRequest(t, n);
                    a && o({
                        payload: {
                            url: t,
                            params: s
                        },
                        handler: a,
                        watcher: e.WatcherHandler.onHttpRequest
                    })
                }
                async interceptResponse(e, [t,s]) {
                    const n = s?.method
                      , o = this.validator.validateResponse(t, n);
                    o && await this.proceedResponse(e, o)
                }
                async proceedResponse(t, s) {
                    const n = await t.clone()
                      , a = t.headers.get("content-type");
                    a && (a.includes("json") ? o({
                        payload: await n.json(),
                        handler: s,
                        watcher: e.WatcherHandler.onHttpResponse
                    }) : a.includes("text") && o({
                        payload: await n.text(),
                        handler: s,
                        watcher: e.WatcherHandler.onHttpResponse
                    }))
                }
                initInterceptor() {
                    const e = s.fetch;
                    s.fetch = async(...t)=>{
                        this.interceptRequest(...t);
                        const s = await e(...t);
                        return this.interceptResponse(s, t),
                        s
                    }
                }
            }
            class p extends n.InterceptorAdapter {
                constructor(e) {
                    super(),
                    this.validator = e,
                    this.initInterceptor()
                }
                static init(e) {
                    this.instance || (this.instance = new p(e))
                }
                async interceptRequest({method: t, url: s, body: n}) {
                    const a = this.validator.validateRequest(s, t);
                    a && o({
                        payload: {
                            url: s,
                            params: {
                                method: t,
                                body: n
                            }
                        },
                        handler: a,
                        watcher: e.WatcherHandler.onHttpRequest
                    })
                }
                async interceptResponse({status: e, response: t, responseType: s, method: n, url: o}) {
                    const a = this.validator.validateResponse(o, n);
                    `${e}`.startsWith("20") && a && this.proceedResponse(t, s, a)
                }
                proceedResponse(t, s, n) {
                    if ("json" === s)
                        o({
                            payload: t,
                            handler: n,
                            watcher: e.WatcherHandler.onHttpResponse
                        });
                    else if ("text" === s || "" === s)
                        try {
                            o({
                                payload: JSON.parse(t),
                                handler: n,
                                watcher: e.WatcherHandler.onHttpResponse
                            })
                        } catch {
                            o({
                                payload: t,
                                handler: n,
                                watcher: e.WatcherHandler.onHttpResponse
                            })
                        }
                }
                initInterceptor() {
                    const e = XMLHttpRequest.prototype.open
                      , t = XMLHttpRequest.prototype.send
                      , n = this;
                    s.XMLHttpRequest.prototype.open = function(...t) {
                        return this.__METHOD__ = t[0],
                        this.__URL__ = t[1],
                        this.addEventListener("load", (function({target: e}) {
                            n.interceptResponse({
                                status: e.status,
                                response: e.response,
                                responseType: e.responseType,
                                method: t[0],
                                url: t[1]
                            })
                        }
                        )),
                        e.apply(this, t)
                    }
                    ,
                    s.XMLHttpRequest.prototype.send = function(...e) {
                        return n.interceptRequest({
                            method: this.__METHOD__,
                            url: this.__URL__,
                            body: e[0]
                        }),
                        t.apply(this, e)
                    }
                }
            }
            const i = new a;
            r.init(i),
            p.init(i),
            s.addEventListener("message", (e=>{
                if (e.data?._custom_type_ !== t.MessageScriptType.INIT_HTTP_CONFIG)
                    return;
                const {onHttpRequest: s, onHttpResponse: n} = e.data.payload;
                i.setConfig(s, n)
            }
            ))
        }
        )(window || globalThis)
    }
    )()
}
)();
