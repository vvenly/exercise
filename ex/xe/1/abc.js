(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["71adce48"], {
    "0676": function(t, i) {
        function e() {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }
        t.exports = e
    },
    "11b0": function(t, i, e) {
        var a = e("2a06")
            , n = e("883d");
        function o(t) {
            if (n(Object(t)) || "[object Arguments]" === Object.prototype.toString.call(t))
                return a(t)
        }
        t.exports = o
    },
    "20fd": function(t, i, e) {
        "use strict";
        var a = e("d9f6")
            , n = e("aebd");
        t.exports = function(t, i, e) {
            i in t ? a.f(t, i, n(0, e)) : t[i] = e
        }
    },
    2236: function(t, i) {
        function e(t) {
            if (Array.isArray(t)) {
                for (var i = 0, e = new Array(t.length); i < t.length; i++)
                    e[i] = t[i];
                return e
            }
        }
        t.exports = e
    },
    "2a06": function(t, i, e) {
        t.exports = e("d2d5")
    },
    3702: function(t, i, e) {
        var a = e("481b")
            , n = e("5168")("iterator")
            , o = Array.prototype;
        t.exports = function(t) {
            return void 0 !== t && (a.Array === t || o[n] === t)
        }
    },
    "448a": function(t, i, e) {
        var a = e("2236")
            , n = e("11b0")
            , o = e("0676");
        function s(t) {
            return a(t) || n(t) || o()
        }
        t.exports = s
    },
    "4b19": function(t, i, e) {},
    "4c1a": function(t, i, e) {},
    "4ee1": function(t, i, e) {
        var a = e("5168")("iterator")
            , n = !1;
        try {
            var o = [7][a]();
            o["return"] = function() {
                n = !0
            }
                ,
                Array.from(o, function() {
                    throw 2
                })
        } catch (t) {}
        t.exports = function(t, i) {
            if (!i && !n)
                return !1;
            var e = !1;
            try {
                var o = [7]
                    , s = o[a]();
                s.next = function() {
                    return {
                        done: e = !0
                    }
                }
                    ,
                    o[a] = function() {
                        return s
                    }
                    ,
                    t(o)
            } catch (t) {}
            return e
        }
    },
    "549b": function(t, i, e) {
        "use strict";
        var a = e("d864")
            , n = e("63b6")
            , o = e("241e")
            , s = e("b0dc")
            , c = e("3702")
            , r = e("b447")
            , l = e("20fd")
            , u = e("7cd6");
        n(n.S + n.F * !e("4ee1")(function(t) {
            Array.from(t)
        }), "Array", {
            from: function(t) {
                var i, e, n, h, d = o(t), f = "function" == typeof this ? this : Array, v = arguments.length, x = v > 1 ? arguments[1] : void 0, p = void 0 !== x, b = 0, w = u(d);
                if (p && (x = a(x, v > 2 ? arguments[2] : void 0, 2)),
                    void 0 == w || f == Array && c(w))
                    for (i = r(d.length),
                             e = new f(i); i > b; b++)
                        l(e, b, p ? x(d[b], b) : d[b]);
                else
                    for (h = w.call(d),
                             e = new f; !(n = h.next()).done; b++)
                        l(e, b, p ? s(h, x, [n.value, b], !0) : n.value);
                return e.length = b,
                    e
            }
        })
    },
    "54a1": function(t, i, e) {
        e("6c1c"),
            e("1654"),
            t.exports = e("95d5")
    },
    7153: function(t, i, e) {
        "use strict";
        e.r(i);
        var a = function() {
            var t = this
                , i = t.$createElement
                , e = t._self._c || i;
            return e("q-page", {
                attrs: {
                    padding: ""
                }
            }, [e("div", {
                staticClass: "content row"
            }, [e("div", {
                staticClass: "optionList col-2"
            }, [e("div", {
                staticStyle: {
                    border: "1px solid rgba(86, 61, 124, 0.2)",
                    padding: "5px 10px",
                    height: "60%"
                }
            }, [e("button", {
                staticClass: "q-btn btn",
                class: {
                    active: "device" === t.activeBtn
                },
                on: {
                    click: function(i) {
                        t.btnClick("device")
                    }
                }
            }, [t._v("视频设备")]), e("button", {
                staticClass: "q-btn btn",
                class: {
                    active: "whitelist" === t.activeBtn
                },
                on: {
                    click: function(i) {
                        t.btnClick("whitelist")
                    }
                }
            }, [t._v("白名单")])])]), e("div", {
                staticClass: "col",
                staticStyle: {
                    padding: "5px"
                }
            }, [e("div", {
                staticClass: "row",
                staticStyle: {
                    border: "1px solid rgba(86, 61, 124, 0.2)"
                }
            }, [e("div", {
                staticClass: "itemList col-3"
            }, [e("q-scroll-area", {
                staticStyle: {
                    width: "100%",
                    height: "100%"
                }
            }, t._l(20, function(i) {
                return e("p", {
                    key: i,
                    class: {
                        active: i === t.activeItem
                    },
                    on: {
                        click: function(e) {
                            t.itemClick(i)
                        }
                    }
                }, [t._v("\n              " + t._s("device" === t.activeBtn ? "设备" : "白名单") + " " + t._s(i) + "\n            ")])
            }))], 1), e("div", {
                staticClass: "configure col"
            }, ["device" === t.activeBtn ? e("div", {
                staticClass: "configuration q-pa-lg"
            }, [e("p", {
                staticStyle: {
                    padding: "0",
                    margin: "0"
                }
            }, [t._v("识别配置")]), e("div", {
                staticClass: "q-pa-lg"
            }, [e("q-checkbox", {
                staticClass: "checkitem",
                attrs: {
                    val: "face",
                    label: "人脸识别"
                },
                model: {
                    value: t.selection,
                    callback: function(i) {
                        t.selection = i
                    },
                    expression: "selection"
                }
            }), e("q-checkbox", {
                staticClass: "checkitem",
                attrs: {
                    val: "safetyHat",
                    label: "安全帽佩戴"
                },
                model: {
                    value: t.selection,
                    callback: function(i) {
                        t.selection = i
                    },
                    expression: "selection"
                }
            }), e("q-checkbox", {
                staticClass: "checkitem",
                attrs: {
                    val: "reflector",
                    label: "反光衣穿戴"
                },
                model: {
                    value: t.selection,
                    callback: function(i) {
                        t.selection = i
                    },
                    expression: "selection"
                }
            }), e("q-checkbox", {
                staticClass: "checkitem",
                attrs: {
                    val: "defenceArea",
                    label: "防区闯入"
                },
                model: {
                    value: t.selection,
                    callback: function(i) {
                        t.selection = i
                    },
                    expression: "selection"
                }
            }), e("q-checkbox", {
                staticClass: "checkitem",
                attrs: {
                    val: "fireworks",
                    label: "烟火"
                },
                model: {
                    value: t.selection,
                    callback: function(i) {
                        t.selection = i
                    },
                    expression: "selection"
                }
            })], 1), e("p", {
                staticStyle: {
                    padding: "0",
                    margin: "5px 0"
                }
            }, [t._v("\n              防区绘制           \n              "), e("q-btn-group", {
                attrs: {
                    push: ""
                }
            }, [e("q-btn", {
                attrs: {
                    push: "",
                    size: "xs",
                    label: "开始绘制"
                },
                on: {
                    click: t.startDraw
                }
            }), e("q-btn", {
                attrs: {
                    push: "",
                    size: "xs",
                    label: "清除选中"
                },
                on: {
                    click: t.clearActive
                }
            }), e("q-btn", {
                attrs: {
                    push: "",
                    size: "xs",
                    label: "清除所有"
                },
                on: {
                    click: t.cleanDraw
                }
            })], 1)], 1), e("div", {
                staticClass: "draw"
            }, [t._v("\n              防区绘制\n              "), e("Collection", {
                ref: "Collection",
                staticClass: "Collection"
            })], 1), e("q-btn", {
                staticStyle: {
                    margin: "10px auto",
                    display: "block",
                    width: "100px"
                },
                attrs: {
                    color: "primary",
                    label: "保存"
                }
            })], 1) : e("div", {
                staticClass: "edit q-pa-lg q-pt-none",
                staticStyle: {
                    "padding-top": "0"
                }
            }, [e("div", {
                staticClass: "q-pa-lg inputgrap"
            }, [e("q-input", {
                attrs: {
                    "float-label": "公司",
                    placeholder: "请输入公司"
                },
                model: {
                    value: t.text,
                    callback: function(i) {
                        t.text = i
                    },
                    expression: "text"
                }
            }), e("q-input", {
                staticStyle: {
                    width: "48%",
                    float: "left",
                    "margin-right": "10px"
                },
                attrs: {
                    "float-label": "部门",
                    placeholder: "请输入部门"
                },
                model: {
                    value: t.text,
                    callback: function(i) {
                        t.text = i
                    },
                    expression: "text"
                }
            }), e("q-input", {
                staticStyle: {
                    width: "48%",
                    float: "left",
                    "margin-right": "10px"
                },
                attrs: {
                    "float-label": "职位",
                    placeholder: "请输入职位"
                },
                model: {
                    value: t.text,
                    callback: function(i) {
                        t.text = i
                    },
                    expression: "text"
                }
            }), e("q-input", {
                staticStyle: {
                    width: "48%",
                    float: "left",
                    "margin-right": "10px"
                },
                attrs: {
                    "float-label": "姓名",
                    placeholder: "请输入姓名"
                },
                model: {
                    value: t.text,
                    callback: function(i) {
                        t.text = i
                    },
                    expression: "text"
                }
            })], 1), e("div", {
                staticClass: "draw",
                on: {
                    click: function(i) {
                        t.$refs.file.click()
                    }
                }
            }, [e("p", {
                staticClass: "absolute-top-left",
                staticStyle: {
                    width: "100%"
                }
            }, [t._v("人员照片上传预览")]), e("img", {
                staticClass: "absolute-top-left",
                attrs: {
                    src: t.photoSrc,
                    alt: ""
                }
            })]), e("input", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !1,
                    expression: "false"
                }],
                ref: "file",
                attrs: {
                    id: "pop_file",
                    type: "file",
                    accept: ".jpg,.jpeg,.png",
                    name: "fileTrans",
                    value: ""
                },
                on: {
                    change: function(i) {
                        t.uploadFile(i)
                    }
                }
            }), e("q-btn", {
                staticStyle: {
                    margin: "10px auto",
                    display: "block",
                    width: "100px"
                },
                attrs: {
                    color: "primary",
                    label: "保存"
                }
            })], 1)])])])])])
        }
            , n = [];
        a._withStripped = !0;
        var o = function() {

            var t = this
                , i = t.$createElement
                , e = t._self._c || i;
            return e("div", {
                staticClass: "introduction"
            }, [e("canvas", {
                ref: "Canvas",
                staticStyle: {
                    background: "#1cc09f"
                },
                attrs: {
                    width: "400",
                    height: "300",
                    id: "Canvas"
                },
                on: {
                    click: t.ctxclick,
                    contextmenu: t.contextmenu,
                    mousedown: t.ctxMouseDown,
                    mouseup: t.ctxMouseUp,
                    mousemove: t.ctxMouseMove
                }
            })])
        }
            , s = [];
        o._withStripped = !0;
        e("ac6a");
        var c = e("448a")
            , r = e.n(c)
            , l = {
            name: "Collection",
            data: function() {
                return {
                    outCoords: [],
                    outPoints: 10,
                    dragIndex: 0,
                    isDragOut: !1,
                    isDrawOut: !1,
                    startPoint: {},
                    faceCoords: [],
                    areaList: [],
                    activeIndex: -1
                }
            },
            mounted: function() {
                this.ctx = this.$refs.Canvas.getContext("2d")
            },
            methods: {
                ctxclick: function(t) {
                    var i = this.getPosition(t);
                    this.outCoords.length < this.outPoints && this.isDrawOut && (this.drawDot(i),
                        this.outCoords.push(i)),
                    this.outCoords.length === this.outPoints && (this.ctx.clearRect(0, 0, 400, 300),
                        this.drawOutLine(),
                        this.drawOutDot(),
                        this.drawAreaList())
                },
                contextmenu: function(t) {
                    t && t.preventDefault(),
                        this.isDrawOut = !1,
                        this.isDragOut = !1,
                        this.areaList.push(r()(this.outCoords)),
                        this.outCoords = [],
                        this.ctx.clearRect(0, 0, 400, 300),
                        this.drawAreaList()
                },
                ctxMouseMove: function(t) {
                    var i = this.getPosition(t);
                    this.outCoords.length && this.outCoords.length !== this.outPoints && this.isDrawOut && (this.ctx.clearRect(0, 0, 400, 300),
                        this.drawingOut(i),
                        this.drawAreaList()),
                    this.isDragOut && (this.ctx.clearRect(0, 0, 400, 300),
                        this.dragingOut(i),
                        this.drawAreaList())
                },
                ctxMouseDown: function(t) {
                    var i = this
                        , e = this.getPosition(t);
                    this.activeIndex = -1,
                    this.isDrawOut || this.isDragOut || !this.areaList.length || (this.areaList.forEach(function(t, a) {
                        "in" === i.rayCasting(e, i.areaList[a]) && (i.activeIndex = a)
                    }),
                        this.ctx.clearRect(0, 0, 400, 300),
                        this.drawAreaList())
                },
                ctxMouseUp: function(t) {
                    this.outCoords.length === this.outPoints && this.contextmenu()
                },
                drawingOut: function(t) {
                    var i = this
                        , e = r()(this.outCoords).concat([t]);
                    e.forEach(function(t, a) {
                        0 === a ? (i.ctx.beginPath(),
                            i.ctx.moveTo(i.outCoords[0].x, i.outCoords[0].y)) : a === e.length - 1 ? (i.ctx.lineTo(e[a].x, e[a].y),
                            i.ctx.closePath()) : i.ctx.lineTo(e[a].x, e[a].y)
                    }),
                        this.ctx.strokeStyle = "#000",
                        this.ctx.stroke(),
                        e.forEach(function(t, e) {
                            i.drawDot(t)
                        })
                },
                dragingOut: function(t) {
                    this.outCoords[this.dragIndex] = t,
                        this.drawOutLine(),
                        this.drawOutDot()
                },
                getPosition: function(t) {
                    var i = [t.offsetX, t.offsetY]
                        , e = i[0]
                        , a = i[1];
                    return {
                        x: e,
                        y: a
                    }
                },
                drawDot: function(t) {
                    var i = 2;
                    this.ctx.fillStyle = "#e4393c",
                        this.ctx.fillRect(t.x - i, t.y - i, 2 * i, 2 * i)
                },
                drawOutLine: function(t, i) {
                    var e = this;
                    t = t || this.outCoords,
                        t.forEach(function(i, a) {
                            0 === a ? (e.ctx.beginPath(),
                                e.ctx.moveTo(t[0].x, t[0].y)) : a === t.length - 1 ? (e.ctx.lineTo(i.x, i.y),
                                e.ctx.closePath()) : e.ctx.lineTo(i.x, i.y)
                        }),
                        this.ctx.strokeStyle = i ? "#f00" : "#000",
                        this.ctx.stroke()
                },
                drawOutDot: function() {
                    var t = this;
                    this.outCoords.forEach(function(i, e) {
                        t.drawDot(i)
                    })
                },
                drawAreaList: function() {
                    var t = this;
                    this.areaList.forEach(function(i, e) {
                        t.drawOutLine(i, e === t.activeIndex)
                    })
                },
                startDraw: function() {
                    this.isDrawOut = !0,
                        this.activeIndex = -1
                },
                clearDraw: function() {
                    this.ctx.clearRect(0, 0, 400, 300),
                        this.outCoords = [],
                        this.areaList = [],
                        this.isDrawOut = !1,
                        this.isDragOut = !1,
                        this.activeIndex = -1
                },
                clearActive: function() {
                    -1 !== this.activeIndex && (this.areaList.splice(this.activeIndex, 1),
                        this.activeIndex = -1,
                        this.ctx.clearRect(0, 0, 400, 300),
                        this.drawAreaList())
                },
                rayCasting: function(t, i) {
                    for (var e = t.x, a = t.y, n = !1, o = 0, s = i.length, c = s - 1; o < s; c = o,
                        o++) {
                        var r = i[o].x
                            , l = i[o].y
                            , u = i[c].x
                            , h = i[c].y;
                        if (r === e && l === a || u === e && h === a)
                            return "on";
                        if (l < a && h >= a || l >= a && h < a) {
                            var d = r + (a - l) * (u - r) / (h - l);
                            if (d === e)
                                return "on";
                            d > e && (n = !n)
                        }
                    }
                    return n ? "in" : "out"
                }
            }
        }
            , u = l
            , h = (e("9bf8"),
            e("2877"))
            , d = Object(h["a"])(u, o, s, !1, null, "01b0278c", null);
        d.options.__file = "Collection.vue";
        var f = d.exports
            , v = {
            components: {
                Collection: f
            },
            data: function() {
                return {
                    activeItem: 1,
                    activeBtn: "device",
                    selection: [],
                    text: "",
                    photoSrc: ""
                }
            },
            methods: {
                itemClick: function(t) {
                    this.activeItem = t
                },
                btnClick: function(t) {
                    this.activeBtn = t
                },
                uploadFile: function(t) {
                    var i = this.$refs.file.files[0]
                        , e = window.URL || window.webkitURL;
                    this.photoSrc = e.createObjectURL(i)
                },
                startDraw: function() {
                    this.$refs.Collection.startDraw()
                },
                cleanDraw: function() {
                    this.$refs.Collection.clearDraw()
                },
                clearActive: function() {
                    this.$refs.Collection.clearActive()
                }
            }
        }
            , x = v
            , p = (e("b3fd"),
            Object(h["a"])(x, a, n, !1, null, "4097739b", null));
        p.options.__file = "configPage.vue";
        i["default"] = p.exports
    },
    "883d": function(t, i, e) {
        t.exports = e("54a1")
    },
    "95d5": function(t, i, e) {
        var a = e("40c3")
            , n = e("5168")("iterator")
            , o = e("481b");
        t.exports = e("584a").isIterable = function(t) {
            var i = Object(t);
            return void 0 !== i[n] || "@@iterator"in i || o.hasOwnProperty(a(i))
        }
    },
    "9bf8": function(t, i, e) {
        "use strict";
        var a = e("4b19")
            , n = e.n(a);
        n.a
    },
    b0dc: function(t, i, e) {
        var a = e("e4ae");
        t.exports = function(t, i, e, n) {
            try {
                return n ? i(a(e)[0], e[1]) : i(e)
            } catch (i) {
                var o = t["return"];
                throw void 0 !== o && a(o.call(t)),
                    i
            }
        }
    },
    b3fd: function(t, i, e) {
        "use strict";
        var a = e("4c1a")
            , n = e.n(a);
        n.a
    },
    d2d5: function(t, i, e) {
        e("1654"),
            e("549b"),
            t.exports = e("584a").Array.from
    }
}]);
