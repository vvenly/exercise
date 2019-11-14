(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"], {
    0: function(a, e, n) {
        a.exports = n("2f39")
    },
    "034f": function(a, e, n) {
        "use strict";
        var t = n("fb1c")
            , r = n.n(t);
        r.a
    },
    "1e5d": function(a, e, n) {},
    "2f39": function(a, e, n) {
        "use strict";
        n.r(e);
        n("ac6a"),
            n("4a91"),
            n("a114"),
            n("d14b"),
            n("1e5d"),
            n("7e6d");
        var t = n("2b0e")
            , r = n("d1e7")
            , o = n("e84f")
            , u = n("7051")
            , i = n("2040")
            , c = n("cf12")
            , p = n("46a9")
            , f = n("32a1")
            , d = n("f30c")
            , s = n("ce67")
            , l = n("482e")
            , b = n("52b5")
            , Q = n("1180")
            , m = n("1e55")
            , h = n("506f")
            , v = n("b8d9")
            , w = n("7d43")
            , T = n("c563")
            , y = n("db7b")
            , C = n("c081")
            , I = n("9413")
            , S = n("93f5")
            , g = n("7646")
            , x = n("6580")
            , L = n("3a08")
            , _ = n("dc23")
            , A = n("3054")
            , k = n("6ddb")
            , B = n("5931")
            , M = n("3d5b")
            , P = n("c604")
            , $ = n("525b")
            , q = n("91c8")
            , D = n("9541")
            , E = n("5d8b")
            , H = n("1731")
            , J = n("1526")
            , R = n("133b");
        t["a"].use(o["a"], {
            config: {},
            i18n: r["a"],
            components: {
                QLayout: u["a"],
                QLayoutHeader: i["a"],
                QLayoutDrawer: c["a"],
                QPageContainer: p["a"],
                QPage: f["a"],
                QToolbar: d["a"],
                QToolbarTitle: s["a"],
                QBtn: l["a"],
                QIcon: b["a"],
                QList: Q["a"],
                QListHeader: m["a"],
                QItem: h["a"],
                QItemMain: v["a"],
                QItemSide: w["a"],
                QTabs: T["a"],
                QTab: y["a"],
                QTabPane: C["a"],
                QRouteTab: I["a"],
                QScrollArea: S["a"],
                QCard: g["a"],
                QCardTitle: x["a"],
                QCardMain: L["a"],
                QCardMedia: _["a"],
                QCardSeparator: A["a"],
                QCardActions: k["a"],
                QSelect: B["a"],
                QDatetime: M["a"],
                QTable: P["a"],
                QCheckbox: $["a"],
                QItemSeparator: q["a"],
                QItemTile: D["a"],
                QInput: E["a"],
                QBtnGroup: H["a"]
            },
            directives: {
                Ripple: J["a"]
            },
            plugins: {
                Notify: R["a"]
            }
        });
        var V = function() {
            var a = this
                , e = a.$createElement
                , n = a._self._c || e;
            return n("div", {
                attrs: {
                    id: "q-app"
                }
            }, [n("router-view")], 1)
        }
            , j = [];
        V._withStripped = !0;
        var G = {
            name: "App"
        }
            , N = G
            , O = (n("034f"),
            n("2877"))
            , z = Object(O["a"])(N, V, j, !1, null, null, null);
        z.options.__file = "App.vue";
        var F = z.exports
            , K = n("2f62")
            , U = {}
            , W = n("a709")
            , X = n("8d6f")
            , Y = n("5781")
            , Z = {
            namespaced: !0,
            state: U,
            getters: W,
            mutations: X,
            actions: Y
        };
        t["a"].use(K["a"]);
        var aa = function() {
            var a = new K["a"].Store({
                modules: {
                    example: Z
                }
            });
            return a
        }
            , ea = n("8c4f")
            , na = [{
            path: "/",
            component: function() {
                return n.e("6959fb28").then(n.bind(null, "f241"))
            },
            children: [{
                path: "",
                redirect: "/realtime"
            }, {
                path: "/realtime",
                component: function() {
                    return n.e("1bf199c4").then(n.bind(null, "5a1c"))
                }
            }, {
                path: "/analyse",
                component: function() {
                    return n.e("979defc4").then(n.bind(null, "a7bd"))
                }
            }, {
                path: "/config",
                component: function() {
                    return n.e("71adce48").then(n.bind(null, "7153"))
                }
            }]
        }];
        na.push({
            path: "*",
            component: function() {
                return n.e("4b47640d").then(n.bind(null, "e51e"))
            }
        });
        var ta = na;
        t["a"].use(ea["a"]);
        var ra = function() {
            var a = new ea["a"]({
                scrollBehavior: function() {
                    return {
                        y: 0
                    }
                },
                routes: ta,
                mode: "hash",
                base: ""
            });
            return a
        }
            , oa = function() {
            var a = "function" === typeof aa ? aa() : aa
                , e = "function" === typeof ra ? ra({
                store: a
            }) : ra;
            a.$router = e;
            var n = {
                el: "#q-app",
                router: e,
                store: a,
                render: function(a) {
                    return a(F)
                }
            };
            return {
                app: n,
                store: a,
                router: e
            }
        }
            , ua = n("bc3a")
            , ia = n.n(ua)
            , ca = function(a) {
            var e = a.Vue;
            e.prototype.$axios = ia.a
        }
            , pa = oa()
            , fa = pa.app
            , da = pa.store
            , sa = pa.router;
        [ca].forEach(function(a) {
            a({
                app: fa,
                router: sa,
                store: da,
                Vue: t["a"],
                ssrContext: null
            })
        }),
            new t["a"](fa)
    },
    5781: function(a, e) {},
    "7e6d": function(a, e, n) {},
    "8d6f": function(a, e) {},
    a709: function(a, e) {},
    fb1c: function(a, e, n) {}
}, [[0, "runtime", "vendor"]]]);
