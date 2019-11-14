(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["6959fb28"], {
    6870: function(t, e, a) {},
    eb60: function(t, e, a) {
        "use strict";
        var o = a("6870")
            , r = a.n(o);
        r.a
    },
    f241: function(t, e, a) {
        "use strict";
        a.r(e);
        var o = function() {
            var t = this
                , e = t.$createElement
                , a = t._self._c || e;
            return a("q-layout", {
                attrs: {
                    view: "lHh Lpr lFf"
                }
            }, [a("q-layout-header", [a("q-toolbar", {
                attrs: {
                    color: "primary",
                    glossy: "mat" === t.$q.theme,
                    inverted: "ios" === t.$q.theme
                }
            }, [a("q-toolbar-title", [t._v("\n        工地智能安全系统\n      ")])], 1), a("q-tabs", {
                attrs: {
                    align: "justify"
                }
            }, [a("q-route-tab", {
                attrs: {
                    slot: "title",
                    icon: "track_changes",
                    to: "/realtime",
                    exact: "",
                    label: "实时动态"
                },
                slot: "title"
            }), a("q-route-tab", {
                attrs: {
                    slot: "title",
                    icon: "history",
                    to: "/analyse",
                    exact: "",
                    label: "分析查询"
                },
                slot: "title"
            }), a("q-route-tab", {
                attrs: {
                    slot: "title",
                    icon: "settings",
                    to: "/config",
                    exact: "",
                    label: "系统配置"
                },
                slot: "title"
            })], 1)], 1), a("q-layout-drawer", {
                attrs: {
                    "content-class": "mat" === t.$q.theme ? "bg-grey-2" : null
                },
                model: {
                    value: t.leftDrawerOpen,
                    callback: function(e) {
                        t.leftDrawerOpen = e
                    },
                    expression: "leftDrawerOpen"
                }
            }, [a("q-list", {
                attrs: {
                    "no-border": "",
                    link: "",
                    "inset-delimiter": ""
                }
            }, [a("q-list-header", [t._v("Essential Links")]), a("q-item", {
                nativeOn: {
                    click: function(e) {
                        t.openURL("http://quasar-framework.org")
                    }
                }
            }, [a("q-item-side", {
                attrs: {
                    icon: "school"
                }
            }), a("q-item-main", {
                attrs: {
                    label: "Docs",
                    sublabel: "quasar-framework.org"
                }
            })], 1)], 1)], 1), a("q-page-container", [a("router-view")], 1)], 1)
        }
            , r = [];
        o._withStripped = !0;
        var n = a("a60d")
            , l = function(t, e) {
            if (n["a"].is.cordova && navigator && navigator.app)
                return navigator.app.loadUrl(t, {
                    openExternal: !0
                });
            var a = window.open(t, "_blank");
            if (a)
                return a.focus(),
                    a;
            e()
        }
            , i = {
            name: "MyLayout",
            data: function() {
                return console.log(this.$q),
                    {
                        leftDrawerOpen: !1
                    }
            },
            methods: {
                openURL: l
            }
        }
            , s = i
            , c = (a("eb60"),
            a("2877"))
            , u = Object(c["a"])(s, o, r, !1, null, null, null);
        u.options.__file = "MyLayout.vue";
        e["default"] = u.exports
    }
}]);
