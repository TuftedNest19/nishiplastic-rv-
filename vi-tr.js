(()=>{
    function t(e) {
        return t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        ,
        t(e)
    }
    function e() {
        return (Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)).substring(0, 22)
    }
    function n(t, n, o, r) {
        var s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        try {
            var i = document.location.host
              , a = "detector"
              , c = {
                posdMessageId: "PANELOS_MESSAGE",
                posdHash: e(),
                type: "VIDEO_XHR_CANDIDATE",
                from: a,
                to: a.substring(0, a.length - 2),
                content: {
                    requestMethod: t,
                    url: n,
                    type: o,
                    content: r
                }
            };
            i.includes("youtube.com") && s && s[0] && s[0].length && (c.content.encodedPostBody = s[0]),
            window.postMessage(c, "*")
        } catch (t) {}
    }
    var o = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function() {
        this.requestMethod = arguments[0],
        o.apply(this, arguments)
    }
    ;
    var r = XMLHttpRequest.prototype.send;
    XMLHttpRequest.prototype.send = function() {
        var t = Object.assign(arguments, {})
          , e = this.onreadystatechange;
        return this.onreadystatechange = function() {
            var o = function(t) {
                var e = document.querySelector("script[data-bis-config]") ? JSON.parse(document.querySelector("script[data-bis-config]").getAttribute("data-bis-config")) : null;
                return !!e && e.some((function(e) {
                    return t.includes(e)
                }
                ))
            };
            if (4 !== this.readyState || o(this.responseURL) || n(this.requestMethod, this.responseURL, this.getResponseHeader("content-type"), this.response, t),
            e)
                return e.apply(this, arguments)
        }
        ,
        r.apply(this, arguments)
    }
    ;
    var s = fetch;
    fetch = function() {
        var e = this
          , o = arguments
          , r = arguments[0]instanceof Request ? arguments[0].url : arguments[0]
          , i = arguments[0]instanceof Request ? arguments[0].method : "GET";
        return "object" === t(r) && r.href && (r = r.href),
        new Promise((function(t, a) {
            s.apply(e, o).then((function(e) {
                if (e.body instanceof ReadableStream) {
                    var o = e.json;
                    e.json = function() {
                        var t = arguments
                          , s = this;
                        return new Promise((function(a, c) {
                            o.apply(s, t).then((function(t) {
                                0 !== e.url.search(/data:application\/json;base64/) && n(i, r, e.headers.get("content-type"), JSON.stringify(t)),
                                a(t)
                            }
                            )).catch((function(t) {
                                c(t)
                            }
                            ))
                        }
                        ))
                    }
                    ;
                    var s = e.text;
                    e.text = function() {
                        var t = arguments
                          , o = this;
                        return new Promise((function(a, c) {
                            s.apply(o, t).then((function(t) {
                                0 !== e.url.search(/data:application\/json;base64/) && n(i, r, e.headers.get("content-type"), t),
                                a(t)
                            }
                            )).catch((function(t) {
                                c(t)
                            }
                            ))
                        }
                        ))
                    }
                }
                t.apply(this, arguments)
            }
            )).catch((function(t) {
                a.apply(this, arguments)
            }
            ))
        }
        ))
    }
}
)();
