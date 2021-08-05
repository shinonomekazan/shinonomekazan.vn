! function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function(T) {
    var t, e, i, s;

    function n(t, e) {
        var i, s, n = t.nodeName.toLowerCase();
        return "area" === n ? (s = (i = t.parentNode).name, !(!t.href || !s || "map" !== i.nodeName.toLowerCase()) && (!!(s = T("img[usemap='#" + s + "']")[0]) && o(s))) : (/^(input|select|textarea|button|object)$/.test(n) ? !t.disabled : "a" === n && t.href || e) && o(t)
    }

    function o(t) {
        return T.expr.filters.visible(t) && !T(t).parents().addBack().filter(function() {
            return "hidden" === T.css(this, "visibility")
        }).length
    }
    T.ui = T.ui || {}, T.extend(T.ui, {
        version: "1.11.4",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), T.fn.extend({
        scrollParent: function(t) {
            var e = this.css("position"),
                i = "absolute" === e,
                s = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                t = this.parents().filter(function() {
                    var t = T(this);
                    return (!i || "static" !== t.css("position")) && s.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
                }).eq(0);
            return "fixed" !== e && t.length ? t : T(this[0].ownerDocument || document)
        },
        uniqueId: (t = 0, function() {
            return this.each(function() {
                this.id || (this.id = "ui-id-" + ++t)
            })
        }),
        removeUniqueId: function() {
            return this.each(function() {
                /^ui-id-\d+$/.test(this.id) && T(this).removeAttr("id")
            })
        }
    }), T.extend(T.expr[":"], {
        data: T.expr.createPseudo ? T.expr.createPseudo(function(e) {
            return function(t) {
                return !!T.data(t, e)
            }
        }) : function(t, e, i) {
            return !!T.data(t, i[3])
        },
        focusable: function(t) {
            return n(t, !isNaN(T.attr(t, "tabindex")))
        },
        tabbable: function(t) {
            var e = T.attr(t, "tabindex"),
                i = isNaN(e);
            return (i || 0 <= e) && n(t, !i)
        }
    }), T("<a>").outerWidth(1).jquery || T.each(["Width", "Height"], function(t, i) {
        var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
            s = i.toLowerCase(),
            o = {
                innerWidth: T.fn.innerWidth,
                innerHeight: T.fn.innerHeight,
                outerWidth: T.fn.outerWidth,
                outerHeight: T.fn.outerHeight
            };

        function a(t, e, i, s) {
            return T.each(n, function() {
                e -= parseFloat(T.css(t, "padding" + this)) || 0, i && (e -= parseFloat(T.css(t, "border" + this + "Width")) || 0), s && (e -= parseFloat(T.css(t, "margin" + this)) || 0)
            }), e
        }
        T.fn["inner" + i] = function(t) {
            return void 0 === t ? o["inner" + i].call(this) : this.each(function() {
                T(this).css(s, a(this, t) + "px")
            })
        }, T.fn["outer" + i] = function(t, e) {
            return "number" != typeof t ? o["outer" + i].call(this, t) : this.each(function() {
                T(this).css(s, a(this, t, !0, e) + "px")
            })
        }
    }), T.fn.addBack || (T.fn.addBack = function(t) {
        return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
    }), T("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (T.fn.removeData = (e = T.fn.removeData, function(t) {
        return arguments.length ? e.call(this, T.camelCase(t)) : e.call(this)
    })), T.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), T.fn.extend({
        focus: (s = T.fn.focus, function(e, i) {
            return "number" == typeof e ? this.each(function() {
                var t = this;
                setTimeout(function() {
                    T(t).focus(), i && i.call(t)
                }, e)
            }) : s.apply(this, arguments)
        }),
        disableSelection: (i = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown", function() {
            return this.bind(i + ".ui-disableSelection", function(t) {
                t.preventDefault()
            })
        }),
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        },
        zIndex: function(t) {
            if (void 0 !== t) return this.css("zIndex", t);
            if (this.length)
                for (var e, i, s = T(this[0]); s.length && s[0] !== document;) {
                    if (("absolute" === (e = s.css("position")) || "relative" === e || "fixed" === e) && (i = parseInt(s.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
                    s = s.parent()
                }
            return 0
        }
    }), T.ui.plugin = {
        add: function(t, e, i) {
            var s, n = T.ui[t].prototype;
            for (s in i) n.plugins[s] = n.plugins[s] || [], n.plugins[s].push([e, i[s]])
        },
        call: function(t, e, i, s) {
            var n, o = t.plugins[e];
            if (o && (s || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))
                for (n = 0; n < o.length; n++) t.options[o[n][0]] && o[n][1].apply(t.element, i)
        }
    };
    var a, r = 0,
        h = Array.prototype.slice;
    T.cleanData = (a = T.cleanData, function(t) {
        for (var e, i, s = 0; null != (i = t[s]); s++) try {
            (e = T._data(i, "events")) && e.remove && T(i).triggerHandler("remove")
        } catch (t) {}
        a(t)
    }), T.widget = function(t, i, e) {
        var s, n, o, a, r = {},
            h = t.split(".")[0];
        return t = t.split(".")[1], e || (e = i, i = T.Widget), T.expr[":"][(s = h + "-" + t).toLowerCase()] = function(t) {
            return !!T.data(t, s)
        }, T[h] = T[h] || {}, n = T[h][t], o = T[h][t] = function(t, e) {
            if (!this._createWidget) return new o(t, e);
            arguments.length && this._createWidget(t, e)
        }, T.extend(o, n, {
            version: e.version,
            _proto: T.extend({}, e),
            _childConstructors: []
        }), (a = new i).options = T.widget.extend({}, a.options), T.each(e, function(e, s) {
            function n() {
                return i.prototype[e].apply(this, arguments)
            }

            function o(t) {
                return i.prototype[e].apply(this, t)
            }
            T.isFunction(s) ? r[e] = function() {
                var t, e = this._super,
                    i = this._superApply;
                return this._super = n, this._superApply = o, t = s.apply(this, arguments), this._super = e, this._superApply = i, t
            } : r[e] = s
        }), o.prototype = T.widget.extend(a, {
            widgetEventPrefix: n && a.widgetEventPrefix || t
        }, r, {
            constructor: o,
            namespace: h,
            widgetName: t,
            widgetFullName: s
        }), n ? (T.each(n._childConstructors, function(t, e) {
            var i = e.prototype;
            T.widget(i.namespace + "." + i.widgetName, o, e._proto)
        }), delete n._childConstructors) : i._childConstructors.push(o), T.widget.bridge(t, o), o
    }, T.widget.extend = function(t) {
        for (var e, i, s = h.call(arguments, 1), n = 0, o = s.length; n < o; n++)
            for (e in s[n]) i = s[n][e], s[n].hasOwnProperty(e) && void 0 !== i && (T.isPlainObject(i) ? t[e] = T.isPlainObject(t[e]) ? T.widget.extend({}, t[e], i) : T.widget.extend({}, i) : t[e] = i);
        return t
    }, T.widget.bridge = function(o, e) {
        var a = e.prototype.widgetFullName || o;
        T.fn[o] = function(i) {
            var t = "string" == typeof i,
                s = h.call(arguments, 1),
                n = this;
            return t ? this.each(function() {
                var t, e = T.data(this, a);
                return "instance" === i ? (n = e, !1) : e ? T.isFunction(e[i]) && "_" !== i.charAt(0) ? (t = e[i].apply(e, s)) !== e && void 0 !== t ? (n = t && t.jquery ? n.pushStack(t.get()) : t, !1) : void 0 : T.error("no such method '" + i + "' for " + o + " widget instance") : T.error("cannot call methods on " + o + " prior to initialization; attempted to call method '" + i + "'")
            }) : (s.length && (i = T.widget.extend.apply(null, [i].concat(s))), this.each(function() {
                var t = T.data(this, a);
                t ? (t.option(i || {}), t._init && t._init()) : T.data(this, a, new e(i, this))
            })), n
        }
    }, T.Widget = function() {}, T.Widget._childConstructors = [], T.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(t, e) {
            e = T(e || this.defaultElement || this)[0], this.element = T(e), this.uuid = r++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = T(), this.hoverable = T(), this.focusable = T(), e !== this && (T.data(e, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(t) {
                    t.target === e && this.destroy()
                }
            }), this.document = T(e.style ? e.ownerDocument : e.document || e), this.window = T(this.document[0].defaultView || this.document[0].parentWindow)), this.options = T.widget.extend({}, this.options, this._getCreateOptions(), t), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: T.noop,
        _getCreateEventData: T.noop,
        _create: T.noop,
        _init: T.noop,
        destroy: function() {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(T.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: T.noop,
        widget: function() {
            return this.element
        },
        option: function(t, e) {
            var i, s, n, o = t;
            if (0 === arguments.length) return T.widget.extend({}, this.options);
            if ("string" == typeof t)
                if (o = {}, t = (i = t.split(".")).shift(), i.length) {
                    for (s = o[t] = T.widget.extend({}, this.options[t]), n = 0; n < i.length - 1; n++) s[i[n]] = s[i[n]] || {}, s = s[i[n]];
                    if (t = i.pop(), 1 === arguments.length) return void 0 === s[t] ? null : s[t];
                    s[t] = e
                } else {
                    if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
                    o[t] = e
                } return this._setOptions(o), this
        },
        _setOptions: function(t) {
            for (var e in t) this._setOption(e, t[e]);
            return this
        },
        _setOption: function(t, e) {
            return this.options[t] = e, "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!e), e && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            })
        },
        _on: function(n, o, t) {
            var a, r = this;
            "boolean" != typeof n && (t = o, o = n, n = !1), t ? (o = a = T(o), this.bindings = this.bindings.add(o)) : (t = o, o = this.element, a = this.widget()), T.each(t, function(t, e) {
                function i() {
                    if (n || !0 !== r.options.disabled && !T(this).hasClass("ui-state-disabled")) return ("string" == typeof e ? r[e] : e).apply(r, arguments)
                }
                "string" != typeof e && (i.guid = e.guid = e.guid || i.guid || T.guid++);
                var s = t.match(/^([\w:-]*)\s*(.*)$/),
                    t = s[1] + r.eventNamespace,
                    s = s[2];
                s ? a.delegate(s, t, i) : o.bind(t, i)
            })
        },
        _off: function(t, e) {
            e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(e).undelegate(e), this.bindings = T(this.bindings.not(t).get()), this.focusable = T(this.focusable.not(t).get()), this.hoverable = T(this.hoverable.not(t).get())
        },
        _delay: function(t, e) {
            var i = this;
            return setTimeout(function() {
                return ("string" == typeof t ? i[t] : t).apply(i, arguments)
            }, e || 0)
        },
        _hoverable: function(t) {
            this.hoverable = this.hoverable.add(t), this._on(t, {
                mouseenter: function(t) {
                    T(t.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(t) {
                    T(t.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(t) {
            this.focusable = this.focusable.add(t), this._on(t, {
                focusin: function(t) {
                    T(t.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(t) {
                    T(t.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(t, e, i) {
            var s, n, o = this.options[t];
            if (i = i || {}, (e = T.Event(e)).type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), e.target = this.element[0], n = e.originalEvent)
                for (s in n) s in e || (e[s] = n[s]);
            return this.element.trigger(e, i), !(T.isFunction(o) && !1 === o.apply(this.element[0], [e].concat(i)) || e.isDefaultPrevented())
        }
    }, T.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(o, a) {
        T.Widget.prototype["_" + o] = function(e, t, i) {
            var s = (t = "string" == typeof t ? {
                    effect: t
                } : t) ? !0 !== t && "number" != typeof t && t.effect || a : o,
                n = !T.isEmptyObject(t = "number" == typeof(t = t || {}) ? {
                    duration: t
                } : t);
            t.complete = i, t.delay && e.delay(t.delay), n && T.effects && T.effects.effect[s] ? e[o](t) : s !== o && e[s] ? e[s](t.duration, t.easing, i) : e.queue(function(t) {
                T(this)[o](), i && i.call(e[0]), t()
            })
        }
    });
    T.widget;
    var l = !1;
    T(document).mouseup(function() {
        l = !1
    });
    T.widget("ui.mouse", {
        version: "1.11.4",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var e = this;
            this.element.bind("mousedown." + this.widgetName, function(t) {
                return e._mouseDown(t)
            }).bind("click." + this.widgetName, function(t) {
                if (!0 === T.data(t.target, e.widgetName + ".preventClickEvent")) return T.removeData(t.target, e.widgetName + ".preventClickEvent"), t.stopImmediatePropagation(), !1
            }), this.started = !1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(t) {
            if (!l) {
                this._mouseMoved = !1, this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
                var e = this,
                    i = 1 === t.which,
                    s = !("string" != typeof this.options.cancel || !t.target.nodeName) && T(t.target).closest(this.options.cancel).length;
                return i && !s && this._mouseCapture(t) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    e.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = !1 !== this._mouseStart(t), !this._mouseStarted) ? (t.preventDefault(), !0) : (!0 === T.data(t.target, this.widgetName + ".preventClickEvent") && T.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(t) {
                    return e._mouseMove(t)
                }, this._mouseUpDelegate = function(t) {
                    return e._mouseUp(t)
                }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), l = !0)) : !0
            }
        },
        _mouseMove: function(t) {
            if (this._mouseMoved) {
                if (T.ui.ie && (!document.documentMode || document.documentMode < 9) && !t.button) return this._mouseUp(t);
                if (!t.which) return this._mouseUp(t)
            }
            return (t.which || t.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, t), this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
        },
        _mouseUp: function(t) {
            return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && T.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), l = !1
        },
        _mouseDistanceMet: function(t) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    });
    ! function() {
        T.ui = T.ui || {};
        var s, x, C = Math.max,
            z = Math.abs,
            W = Math.round,
            n = /left|center|right/,
            o = /top|center|bottom/,
            a = /[\+\-]\d+(\.[\d]+)?%?/,
            r = /^\w+/,
            h = /%$/,
            i = T.fn.position;

        function D(t, e, i) {
            return [parseFloat(t[0]) * (h.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (h.test(t[1]) ? i / 100 : 1)]
        }

        function H(t, e) {
            return parseInt(T.css(t, e), 10) || 0
        }
        T.position = {
                scrollbarWidth: function() {
                    if (void 0 !== s) return s;
                    var t, e = T("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                        i = e.children()[0];
                    return T("body").append(e), t = i.offsetWidth, e.css("overflow", "scroll"), t === (i = i.offsetWidth) && (i = e[0].clientWidth), e.remove(), s = t - i
                },
                getScrollInfo: function(t) {
                    var e = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
                        i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
                        e = "scroll" === e || "auto" === e && t.width < t.element[0].scrollWidth;
                    return {
                        width: "scroll" === i || "auto" === i && t.height < t.element[0].scrollHeight ? T.position.scrollbarWidth() : 0,
                        height: e ? T.position.scrollbarWidth() : 0
                    }
                },
                getWithinInfo: function(t) {
                    var e = T(t || window),
                        i = T.isWindow(e[0]),
                        t = !!e[0] && 9 === e[0].nodeType;
                    return {
                        element: e,
                        isWindow: i,
                        isDocument: t,
                        offset: e.offset() || {
                            left: 0,
                            top: 0
                        },
                        scrollLeft: e.scrollLeft(),
                        scrollTop: e.scrollTop(),
                        width: i || t ? e.width() : e.outerWidth(),
                        height: i || t ? e.height() : e.outerHeight()
                    }
                }
            }, T.fn.position = function(d) {
                if (!d || !d.of) return i.apply(this, arguments);
                d = T.extend({}, d);
                var u, f, p, g, m, t, v = T(d.of),
                    b = T.position.getWithinInfo(d.within),
                    w = T.position.getScrollInfo(b),
                    _ = (d.collision || "flip").split(" "),
                    y = {},
                    e = 9 === (t = (e = v)[0]).nodeType ? {
                        width: e.width(),
                        height: e.height(),
                        offset: {
                            top: 0,
                            left: 0
                        }
                    } : T.isWindow(t) ? {
                        width: e.width(),
                        height: e.height(),
                        offset: {
                            top: e.scrollTop(),
                            left: e.scrollLeft()
                        }
                    } : t.preventDefault ? {
                        width: 0,
                        height: 0,
                        offset: {
                            top: t.pageY,
                            left: t.pageX
                        }
                    } : {
                        width: e.outerWidth(),
                        height: e.outerHeight(),
                        offset: e.offset()
                    };
                return v[0].preventDefault && (d.at = "left top"), f = e.width, p = e.height, m = T.extend({}, g = e.offset), T.each(["my", "at"], function() {
                    var t, e, i = (d[this] || "").split(" ");
                    (i = 1 === i.length ? n.test(i[0]) ? i.concat(["center"]) : o.test(i[0]) ? ["center"].concat(i) : ["center", "center"] : i)[0] = n.test(i[0]) ? i[0] : "center", i[1] = o.test(i[1]) ? i[1] : "center", t = a.exec(i[0]), e = a.exec(i[1]), y[this] = [t ? t[0] : 0, e ? e[0] : 0], d[this] = [r.exec(i[0])[0], r.exec(i[1])[0]]
                }), 1 === _.length && (_[1] = _[0]), "right" === d.at[0] ? m.left += f : "center" === d.at[0] && (m.left += f / 2), "bottom" === d.at[1] ? m.top += p : "center" === d.at[1] && (m.top += p / 2), u = D(y.at, f, p), m.left += u[0], m.top += u[1], this.each(function() {
                    var i, t, a = T(this),
                        r = a.outerWidth(),
                        h = a.outerHeight(),
                        e = H(this, "marginLeft"),
                        s = H(this, "marginTop"),
                        n = r + e + H(this, "marginRight") + w.width,
                        o = h + s + H(this, "marginBottom") + w.height,
                        l = T.extend({}, m),
                        c = D(y.my, a.outerWidth(), a.outerHeight());
                    "right" === d.my[0] ? l.left -= r : "center" === d.my[0] && (l.left -= r / 2), "bottom" === d.my[1] ? l.top -= h : "center" === d.my[1] && (l.top -= h / 2), l.left += c[0], l.top += c[1], x || (l.left = W(l.left), l.top = W(l.top)), i = {
                        marginLeft: e,
                        marginTop: s
                    }, T.each(["left", "top"], function(t, e) {
                        T.ui.position[_[t]] && T.ui.position[_[t]][e](l, {
                            targetWidth: f,
                            targetHeight: p,
                            elemWidth: r,
                            elemHeight: h,
                            collisionPosition: i,
                            collisionWidth: n,
                            collisionHeight: o,
                            offset: [u[0] + c[0], u[1] + c[1]],
                            my: d.my,
                            at: d.at,
                            within: b,
                            elem: a
                        })
                    }), d.using && (t = function(t) {
                        var e = g.left - l.left,
                            i = e + f - r,
                            s = g.top - l.top,
                            n = s + p - h,
                            o = {
                                target: {
                                    element: v,
                                    left: g.left,
                                    top: g.top,
                                    width: f,
                                    height: p
                                },
                                element: {
                                    element: a,
                                    left: l.left,
                                    top: l.top,
                                    width: r,
                                    height: h
                                },
                                horizontal: i < 0 ? "left" : 0 < e ? "right" : "center",
                                vertical: n < 0 ? "top" : 0 < s ? "bottom" : "middle"
                            };
                        f < r && z(e + i) < f && (o.horizontal = "center"), p < h && z(s + n) < p && (o.vertical = "middle"), C(z(e), z(i)) > C(z(s), z(n)) ? o.important = "horizontal" : o.important = "vertical", d.using.call(this, t, o)
                    }), a.offset(T.extend(l, {
                        using: t
                    }))
                })
            }, T.ui.position = {
                fit: {
                    left: function(t, e) {
                        var i = e.within,
                            s = i.isWindow ? i.scrollLeft : i.offset.left,
                            n = i.width,
                            o = t.left - e.collisionPosition.marginLeft,
                            a = s - o,
                            r = o + e.collisionWidth - n - s;
                        e.collisionWidth > n ? 0 < a && r <= 0 ? (i = t.left + a + e.collisionWidth - n - s, t.left += a - i) : t.left = !(0 < r && a <= 0) && r < a ? s + n - e.collisionWidth : s : 0 < a ? t.left += a : 0 < r ? t.left -= r : t.left = C(t.left - o, t.left)
                    },
                    top: function(t, e) {
                        var i = e.within,
                            s = i.isWindow ? i.scrollTop : i.offset.top,
                            n = e.within.height,
                            o = t.top - e.collisionPosition.marginTop,
                            a = s - o,
                            r = o + e.collisionHeight - n - s;
                        e.collisionHeight > n ? 0 < a && r <= 0 ? (i = t.top + a + e.collisionHeight - n - s, t.top += a - i) : t.top = !(0 < r && a <= 0) && r < a ? s + n - e.collisionHeight : s : 0 < a ? t.top += a : 0 < r ? t.top -= r : t.top = C(t.top - o, t.top)
                    }
                },
                flip: {
                    left: function(t, e) {
                        var i = e.within,
                            s = i.offset.left + i.scrollLeft,
                            n = i.width,
                            o = i.isWindow ? i.scrollLeft : i.offset.left,
                            a = t.left - e.collisionPosition.marginLeft,
                            r = a - o,
                            h = a + e.collisionWidth - n - o,
                            l = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                            i = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                            a = -2 * e.offset[0];
                        r < 0 ? ((s = t.left + l + i + a + e.collisionWidth - n - s) < 0 || s < z(r)) && (t.left += l + i + a) : 0 < h && (0 < (o = t.left - e.collisionPosition.marginLeft + l + i + a - o) || z(o) < h) && (t.left += l + i + a)
                    },
                    top: function(t, e) {
                        var i = e.within,
                            s = i.offset.top + i.scrollTop,
                            n = i.height,
                            o = i.isWindow ? i.scrollTop : i.offset.top,
                            a = t.top - e.collisionPosition.marginTop,
                            r = a - o,
                            h = a + e.collisionHeight - n - o,
                            l = "top" === e.my[1] ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                            i = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                            a = -2 * e.offset[1];
                        r < 0 ? ((s = t.top + l + i + a + e.collisionHeight - n - s) < 0 || s < z(r)) && (t.top += l + i + a) : 0 < h && (0 < (o = t.top - e.collisionPosition.marginTop + l + i + a - o) || z(o) < h) && (t.top += l + i + a)
                    }
                },
                flipfit: {
                    left: function() {
                        T.ui.position.flip.left.apply(this, arguments), T.ui.position.fit.left.apply(this, arguments)
                    },
                    top: function() {
                        T.ui.position.flip.top.apply(this, arguments), T.ui.position.fit.top.apply(this, arguments)
                    }
                }
            },
            function() {
                var t, e = document.getElementsByTagName("body")[0],
                    i = document.createElement("div"),
                    s = document.createElement(e ? "div" : "body"),
                    n = {
                        visibility: "hidden",
                        width: 0,
                        height: 0,
                        border: 0,
                        margin: 0,
                        background: "none"
                    };
                for (t in e && T.extend(n, {
                        position: "absolute",
                        left: "-1000px",
                        top: "-1000px"
                    }), n) s.style[t] = n[t];
                s.appendChild(i), (e = e || document.documentElement).insertBefore(s, e.firstChild), i.style.cssText = "position: absolute; left: 10.7432222px;", i = T(i).offset().left, x = 10 < i && i < 11, s.innerHTML = "", e.removeChild(s)
            }()
    }();
    T.ui.position;
    T.widget("ui.resizable", T.ui.mouse, {
        version: "1.11.4",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _num: function(t) {
            return parseInt(t, 10) || 0
        },
        _isNumber: function(t) {
            return !isNaN(parseInt(t, 10))
        },
        _hasScroll: function(t, e) {
            if ("hidden" === T(t).css("overflow")) return !1;
            var i = e && "left" === e ? "scrollLeft" : "scrollTop",
                e = !1;
            return 0 < t[i] || (t[i] = 1, e = 0 < t[i], t[i] = 0, e)
        },
        _create: function() {
            var t, e, i, s, n = this,
                o = this.options;
            if (this.element.addClass("ui-resizable"), T.extend(this, {
                    _aspectRatio: !!o.aspectRatio,
                    aspectRatio: o.aspectRatio,
                    originalElement: this.element,
                    _proportionallyResizeElements: [],
                    _helper: o.helper || o.ghost || o.animate ? o.helper || "ui-resizable-helper" : null
                }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(T("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                    position: this.element.css("position"),
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight(),
                    top: this.element.css("top"),
                    left: this.element.css("left")
                })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, this.element.css({
                    marginLeft: this.originalElement.css("marginLeft"),
                    marginTop: this.originalElement.css("marginTop"),
                    marginRight: this.originalElement.css("marginRight"),
                    marginBottom: this.originalElement.css("marginBottom")
                }), this.originalElement.css({
                    marginLeft: 0,
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 0
                }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                    position: "static",
                    zoom: 1,
                    display: "block"
                })), this.originalElement.css({
                    margin: this.originalElement.css("margin")
                }), this._proportionallyResize()), this.handles = o.handles || (T(".ui-resizable-handle", this.element).length ? {
                    n: ".ui-resizable-n",
                    e: ".ui-resizable-e",
                    s: ".ui-resizable-s",
                    w: ".ui-resizable-w",
                    se: ".ui-resizable-se",
                    sw: ".ui-resizable-sw",
                    ne: ".ui-resizable-ne",
                    nw: ".ui-resizable-nw"
                } : "e,s,se"), this._handles = T(), this.handles.constructor === String)
                for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), t = this.handles.split(","), this.handles = {}, e = 0; e < t.length; e++) i = T.trim(t[e]), (s = T("<div class='ui-resizable-handle " + ("ui-resizable-" + i) + "'></div>")).css({
                    zIndex: o.zIndex
                }), "se" === i && s.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[i] = ".ui-resizable-" + i, this.element.append(s);
            this._renderAxis = function(t) {
                var e, i, s;
                for (e in t = t || this.element, this.handles) this.handles[e].constructor === String ? this.handles[e] = this.element.children(this.handles[e]).first().show() : (this.handles[e].jquery || this.handles[e].nodeType) && (this.handles[e] = T(this.handles[e]), this._on(this.handles[e], {
                    mousedown: n._mouseDown
                })), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (i = T(this.handles[e], this.element), s = /sw|ne|nw|se|n|s/.test(e) ? i.outerHeight() : i.outerWidth(), i = ["padding", /ne|nw|n/.test(e) ? "Top" : /se|sw|s/.test(e) ? "Bottom" : /^e$/.test(e) ? "Right" : "Left"].join(""), t.css(i, s), this._proportionallyResize()), this._handles = this._handles.add(this.handles[e])
            }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), this._handles.disableSelection(), this._handles.mouseover(function() {
                n.resizing || (this.className && (s = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), n.axis = s && s[1] ? s[1] : "se")
            }), o.autoHide && (this._handles.hide(), T(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                o.disabled || (T(this).removeClass("ui-resizable-autohide"), n._handles.show())
            }).mouseleave(function() {
                o.disabled || n.resizing || (T(this).addClass("ui-resizable-autohide"), n._handles.hide())
            })), this._mouseInit()
        },
        _destroy: function() {
            this._mouseDestroy();

            function t(t) {
                T(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            }
            var e;
            return this.elementIsWrapper && (t(this.element), e = this.element, this.originalElement.css({
                position: e.css("position"),
                width: e.outerWidth(),
                height: e.outerHeight(),
                top: e.css("top"),
                left: e.css("left")
            }).insertAfter(e), e.remove()), this.originalElement.css("resize", this.originalResizeStyle), t(this.originalElement), this
        },
        _mouseCapture: function(t) {
            var e, i, s = !1;
            for (e in this.handles)(i = T(this.handles[e])[0]) !== t.target && !T.contains(i, t.target) || (s = !0);
            return !this.options.disabled && s
        },
        _mouseStart: function(t) {
            var e, i, s = this.options,
                n = this.element;
            return this.resizing = !0, this._renderProxy(), e = this._num(this.helper.css("left")), i = this._num(this.helper.css("top")), s.containment && (e += T(s.containment).scrollLeft() || 0, i += T(s.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                left: e,
                top: i
            }, this.size = this._helper ? {
                width: this.helper.width(),
                height: this.helper.height()
            } : {
                width: n.width(),
                height: n.height()
            }, this.originalSize = this._helper ? {
                width: n.outerWidth(),
                height: n.outerHeight()
            } : {
                width: n.width(),
                height: n.height()
            }, this.sizeDiff = {
                width: n.outerWidth() - n.width(),
                height: n.outerHeight() - n.height()
            }, this.originalPosition = {
                left: e,
                top: i
            }, this.originalMousePosition = {
                left: t.pageX,
                top: t.pageY
            }, this.aspectRatio = "number" == typeof s.aspectRatio ? s.aspectRatio : this.originalSize.width / this.originalSize.height || 1, s = T(".ui-resizable-" + this.axis).css("cursor"), T("body").css("cursor", "auto" === s ? this.axis + "-resize" : s), n.addClass("ui-resizable-resizing"), this._propagate("start", t), !0
        },
        _mouseDrag: function(t) {
            var e = this.originalMousePosition,
                i = this.axis,
                s = t.pageX - e.left || 0,
                e = t.pageY - e.top || 0,
                i = this._change[i];
            return this._updatePrevProperties(), i && (e = i.apply(this, [t, s, e]), this._updateVirtualBoundaries(t.shiftKey), (this._aspectRatio || t.shiftKey) && (e = this._updateRatio(e, t)), e = this._respectSize(e, t), this._updateCache(e), this._propagate("resize", t), e = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), T.isEmptyObject(e) || (this._updatePrevProperties(), this._trigger("resize", t, this.ui()), this._applyChanges())), !1
        },
        _mouseStop: function(t) {
            this.resizing = !1;
            var e, i, s, n = this.options,
                o = this;
            return this._helper && (s = (e = (i = this._proportionallyResizeElements).length && /textarea/i.test(i[0].nodeName)) && this._hasScroll(i[0], "left") ? 0 : o.sizeDiff.height, i = e ? 0 : o.sizeDiff.width, e = {
                width: o.helper.width() - i,
                height: o.helper.height() - s
            }, i = parseInt(o.element.css("left"), 10) + (o.position.left - o.originalPosition.left) || null, s = parseInt(o.element.css("top"), 10) + (o.position.top - o.originalPosition.top) || null, n.animate || this.element.css(T.extend(e, {
                top: s,
                left: i
            })), o.helper.height(o.size.height), o.helper.width(o.size.width), this._helper && !n.animate && this._proportionallyResize()), T("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1
        },
        _updatePrevProperties: function() {
            this.prevPosition = {
                top: this.position.top,
                left: this.position.left
            }, this.prevSize = {
                width: this.size.width,
                height: this.size.height
            }
        },
        _applyChanges: function() {
            var t = {};
            return this.position.top !== this.prevPosition.top && (t.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (t.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (t.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (t.height = this.size.height + "px"), this.helper.css(t), t
        },
        _updateVirtualBoundaries: function(t) {
            var e, i, s = this.options,
                n = {
                    minWidth: this._isNumber(s.minWidth) ? s.minWidth : 0,
                    maxWidth: this._isNumber(s.maxWidth) ? s.maxWidth : 1 / 0,
                    minHeight: this._isNumber(s.minHeight) ? s.minHeight : 0,
                    maxHeight: this._isNumber(s.maxHeight) ? s.maxHeight : 1 / 0
                };
            (this._aspectRatio || t) && (e = n.minHeight * this.aspectRatio, i = n.minWidth / this.aspectRatio, s = n.maxHeight * this.aspectRatio, t = n.maxWidth / this.aspectRatio, e > n.minWidth && (n.minWidth = e), i > n.minHeight && (n.minHeight = i), s < n.maxWidth && (n.maxWidth = s), t < n.maxHeight && (n.maxHeight = t)), this._vBoundaries = n
        },
        _updateCache: function(t) {
            this.offset = this.helper.offset(), this._isNumber(t.left) && (this.position.left = t.left), this._isNumber(t.top) && (this.position.top = t.top), this._isNumber(t.height) && (this.size.height = t.height), this._isNumber(t.width) && (this.size.width = t.width)
        },
        _updateRatio: function(t) {
            var e = this.position,
                i = this.size,
                s = this.axis;
            return this._isNumber(t.height) ? t.width = t.height * this.aspectRatio : this._isNumber(t.width) && (t.height = t.width / this.aspectRatio), "sw" === s && (t.left = e.left + (i.width - t.width), t.top = null), "nw" === s && (t.top = e.top + (i.height - t.height), t.left = e.left + (i.width - t.width)), t
        },
        _respectSize: function(t) {
            var e = this._vBoundaries,
                i = this.axis,
                s = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width,
                n = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height,
                o = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width,
                a = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height,
                r = this.originalPosition.left + this.originalSize.width,
                h = this.position.top + this.size.height,
                l = /sw|nw|w/.test(i),
                i = /nw|ne|n/.test(i);
            return o && (t.width = e.minWidth), a && (t.height = e.minHeight), s && (t.width = e.maxWidth), n && (t.height = e.maxHeight), o && l && (t.left = r - e.minWidth), s && l && (t.left = r - e.maxWidth), a && i && (t.top = h - e.minHeight), n && i && (t.top = h - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, t
        },
        _getPaddingPlusBorderDimensions: function(t) {
            for (var e = 0, i = [], s = [t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth")], n = [t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft")]; e < 4; e++) i[e] = parseInt(s[e], 10) || 0, i[e] += parseInt(n[e], 10) || 0;
            return {
                height: i[0] + i[2],
                width: i[1] + i[3]
            }
        },
        _proportionallyResize: function() {
            if (this._proportionallyResizeElements.length)
                for (var t, e = 0, i = this.helper || this.element; e < this._proportionallyResizeElements.length; e++) t = this._proportionallyResizeElements[e], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)), t.css({
                    height: i.height() - this.outerDimensions.height || 0,
                    width: i.width() - this.outerDimensions.width || 0
                })
        },
        _renderProxy: function() {
            var t = this.element,
                e = this.options;
            this.elementOffset = t.offset(), this._helper ? (this.helper = this.helper || T("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
                width: this.element.outerWidth() - 1,
                height: this.element.outerHeight() - 1,
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++e.zIndex
            }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        },
        _change: {
            e: function(t, e) {
                return {
                    width: this.originalSize.width + e
                }
            },
            w: function(t, e) {
                var i = this.originalSize;
                return {
                    left: this.originalPosition.left + e,
                    width: i.width - e
                }
            },
            n: function(t, e, i) {
                var s = this.originalSize;
                return {
                    top: this.originalPosition.top + i,
                    height: s.height - i
                }
            },
            s: function(t, e, i) {
                return {
                    height: this.originalSize.height + i
                }
            },
            se: function(t, e, i) {
                return T.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, e, i]))
            },
            sw: function(t, e, i) {
                return T.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, e, i]))
            },
            ne: function(t, e, i) {
                return T.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, e, i]))
            },
            nw: function(t, e, i) {
                return T.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, e, i]))
            }
        },
        _propagate: function(t, e) {
            T.ui.plugin.call(this, t, [e, this.ui()]), "resize" !== t && this._trigger(t, e, this.ui())
        },
        plugins: {},
        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    }), T.ui.plugin.add("resizable", "animate", {
        stop: function(e) {
            var i = T(this).resizable("instance"),
                t = i.options,
                s = i._proportionallyResizeElements,
                n = s.length && /textarea/i.test(s[0].nodeName),
                o = n && i._hasScroll(s[0], "left") ? 0 : i.sizeDiff.height,
                a = n ? 0 : i.sizeDiff.width,
                n = {
                    width: i.size.width - a,
                    height: i.size.height - o
                },
                a = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null,
                o = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
            i.element.animate(T.extend(n, o && a ? {
                top: o,
                left: a
            } : {}), {
                duration: t.animateDuration,
                easing: t.animateEasing,
                step: function() {
                    var t = {
                        width: parseInt(i.element.css("width"), 10),
                        height: parseInt(i.element.css("height"), 10),
                        top: parseInt(i.element.css("top"), 10),
                        left: parseInt(i.element.css("left"), 10)
                    };
                    s && s.length && T(s[0]).css({
                        width: t.width,
                        height: t.height
                    }), i._updateCache(t), i._propagate("resize", e)
                }
            })
        }
    }), T.ui.plugin.add("resizable", "containment", {
        start: function() {
            var i, s, n = T(this).resizable("instance"),
                t = n.options,
                e = n.element,
                o = t.containment,
                a = o instanceof T ? o.get(0) : /parent/.test(o) ? e.parent().get(0) : o;
            a && (n.containerElement = T(a), /document/.test(o) || o === document ? (n.containerOffset = {
                left: 0,
                top: 0
            }, n.containerPosition = {
                left: 0,
                top: 0
            }, n.parentData = {
                element: T(document),
                left: 0,
                top: 0,
                width: T(document).width(),
                height: T(document).height() || document.body.parentNode.scrollHeight
            }) : (i = T(a), s = [], T(["Top", "Right", "Left", "Bottom"]).each(function(t, e) {
                s[t] = n._num(i.css("padding" + e))
            }), n.containerOffset = i.offset(), n.containerPosition = i.position(), n.containerSize = {
                height: i.innerHeight() - s[3],
                width: i.innerWidth() - s[1]
            }, t = n.containerOffset, e = n.containerSize.height, o = n.containerSize.width, o = n._hasScroll(a, "left") ? a.scrollWidth : o, e = n._hasScroll(a) ? a.scrollHeight : e, n.parentData = {
                element: a,
                left: t.left,
                top: t.top,
                width: o,
                height: e
            }))
        },
        resize: function(t) {
            var e = T(this).resizable("instance"),
                i = e.options,
                s = e.containerOffset,
                n = e.position,
                o = e._aspectRatio || t.shiftKey,
                a = {
                    top: 0,
                    left: 0
                },
                r = e.containerElement,
                t = !0;
            r[0] !== document && /static/.test(r.css("position")) && (a = s), n.left < (e._helper ? s.left : 0) && (e.size.width = e.size.width + (e._helper ? e.position.left - s.left : e.position.left - a.left), o && (e.size.height = e.size.width / e.aspectRatio, t = !1), e.position.left = i.helper ? s.left : 0), n.top < (e._helper ? s.top : 0) && (e.size.height = e.size.height + (e._helper ? e.position.top - s.top : e.position.top), o && (e.size.width = e.size.height * e.aspectRatio, t = !1), e.position.top = e._helper ? s.top : 0), i = e.containerElement.get(0) === e.element.parent().get(0), n = /relative|absolute/.test(e.containerElement.css("position")), i && n ? (e.offset.left = e.parentData.left + e.position.left, e.offset.top = e.parentData.top + e.position.top) : (e.offset.left = e.element.offset().left, e.offset.top = e.element.offset().top), n = Math.abs(e.sizeDiff.width + (e._helper ? e.offset.left - a.left : e.offset.left - s.left)), s = Math.abs(e.sizeDiff.height + (e._helper ? e.offset.top - a.top : e.offset.top - s.top)), n + e.size.width >= e.parentData.width && (e.size.width = e.parentData.width - n, o && (e.size.height = e.size.width / e.aspectRatio, t = !1)), s + e.size.height >= e.parentData.height && (e.size.height = e.parentData.height - s, o && (e.size.width = e.size.height * e.aspectRatio, t = !1)), t || (e.position.left = e.prevPosition.left, e.position.top = e.prevPosition.top, e.size.width = e.prevSize.width, e.size.height = e.prevSize.height)
        },
        stop: function() {
            var t = T(this).resizable("instance"),
                e = t.options,
                i = t.containerOffset,
                s = t.containerPosition,
                n = t.containerElement,
                o = T(t.helper),
                a = o.offset(),
                r = o.outerWidth() - t.sizeDiff.width,
                o = o.outerHeight() - t.sizeDiff.height;
            t._helper && !e.animate && /relative/.test(n.css("position")) && T(this).css({
                left: a.left - s.left - i.left,
                width: r,
                height: o
            }), t._helper && !e.animate && /static/.test(n.css("position")) && T(this).css({
                left: a.left - s.left - i.left,
                width: r,
                height: o
            })
        }
    }), T.ui.plugin.add("resizable", "alsoResize", {
        start: function() {
            var t = T(this).resizable("instance").options;
            T(t.alsoResize).each(function() {
                var t = T(this);
                t.data("ui-resizable-alsoresize", {
                    width: parseInt(t.width(), 10),
                    height: parseInt(t.height(), 10),
                    left: parseInt(t.css("left"), 10),
                    top: parseInt(t.css("top"), 10)
                })
            })
        },
        resize: function(t, i) {
            var e = T(this).resizable("instance"),
                s = e.options,
                n = e.originalSize,
                o = e.originalPosition,
                a = {
                    height: e.size.height - n.height || 0,
                    width: e.size.width - n.width || 0,
                    top: e.position.top - o.top || 0,
                    left: e.position.left - o.left || 0
                };
            T(s.alsoResize).each(function() {
                var t = T(this),
                    s = T(this).data("ui-resizable-alsoresize"),
                    n = {},
                    e = t.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                T.each(e, function(t, e) {
                    var i = (s[e] || 0) + (a[e] || 0);
                    i && 0 <= i && (n[e] = i || null)
                }), t.css(n)
            })
        },
        stop: function() {
            T(this).removeData("resizable-alsoresize")
        }
    }), T.ui.plugin.add("resizable", "ghost", {
        start: function() {
            var t = T(this).resizable("instance"),
                e = t.options,
                i = t.size;
            t.ghost = t.originalElement.clone(), t.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: i.height,
                width: i.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass("string" == typeof e.ghost ? e.ghost : ""), t.ghost.appendTo(t.helper)
        },
        resize: function() {
            var t = T(this).resizable("instance");
            t.ghost && t.ghost.css({
                position: "relative",
                height: t.size.height,
                width: t.size.width
            })
        },
        stop: function() {
            var t = T(this).resizable("instance");
            t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
        }
    }), T.ui.plugin.add("resizable", "grid", {
        resize: function() {
            var t, e = T(this).resizable("instance"),
                i = e.options,
                s = e.size,
                n = e.originalSize,
                o = e.originalPosition,
                a = e.axis,
                r = "number" == typeof i.grid ? [i.grid, i.grid] : i.grid,
                h = r[0] || 1,
                l = r[1] || 1,
                c = Math.round((s.width - n.width) / h) * h,
                d = Math.round((s.height - n.height) / l) * l,
                u = n.width + c,
                f = n.height + d,
                p = i.maxWidth && i.maxWidth < u,
                g = i.maxHeight && i.maxHeight < f,
                m = i.minWidth && i.minWidth > u,
                s = i.minHeight && i.minHeight > f;
            i.grid = r, m && (u += h), s && (f += l), p && (u -= h), g && (f -= l), /^(se|s|e)$/.test(a) ? (e.size.width = u, e.size.height = f) : /^(ne)$/.test(a) ? (e.size.width = u, e.size.height = f, e.position.top = o.top - d) : /^(sw)$/.test(a) ? (e.size.width = u, e.size.height = f, e.position.left = o.left - c) : ((f - l <= 0 || u - h <= 0) && (t = e._getPaddingPlusBorderDimensions(this)), 0 < f - l ? (e.size.height = f, e.position.top = o.top - d) : (f = l - t.height, e.size.height = f, e.position.top = o.top + n.height - f), 0 < u - h ? (e.size.width = u, e.position.left = o.left - c) : (u = h - t.width, e.size.width = u, e.position.left = o.left + n.width - u))
        }
    });
    T.ui.resizable, T.widget("ui.selectable", T.ui.mouse, {
        version: "1.11.4",
        options: {
            appendTo: "body",
            autoRefresh: !0,
            distance: 0,
            filter: "*",
            tolerance: "touch",
            selected: null,
            selecting: null,
            start: null,
            stop: null,
            unselected: null,
            unselecting: null
        },
        _create: function() {
            var t, e = this;
            this.element.addClass("ui-selectable"), this.dragged = !1, this.refresh = function() {
                (t = T(e.options.filter, e.element[0])).addClass("ui-selectee"), t.each(function() {
                    var t = T(this),
                        e = t.offset();
                    T.data(this, "selectable-item", {
                        element: this,
                        $element: t,
                        left: e.left,
                        top: e.top,
                        right: e.left + t.outerWidth(),
                        bottom: e.top + t.outerHeight(),
                        startselected: !1,
                        selected: t.hasClass("ui-selected"),
                        selecting: t.hasClass("ui-selecting"),
                        unselecting: t.hasClass("ui-unselecting")
                    })
                })
            }, this.refresh(), this.selectees = t.addClass("ui-selectee"), this._mouseInit(), this.helper = T("<div class='ui-selectable-helper'></div>")
        },
        _destroy: function() {
            this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy()
        },
        _mouseStart: function(i) {
            var s = this,
                t = this.options;
            this.opos = [i.pageX, i.pageY], this.options.disabled || (this.selectees = T(t.filter, this.element[0]), this._trigger("start", i), T(t.appendTo).append(this.helper), this.helper.css({
                left: i.pageX,
                top: i.pageY,
                width: 0,
                height: 0
            }), t.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                var t = T.data(this, "selectable-item");
                t.startselected = !0, i.metaKey || i.ctrlKey || (t.$element.removeClass("ui-selected"), t.selected = !1, t.$element.addClass("ui-unselecting"), t.unselecting = !0, s._trigger("unselecting", i, {
                    unselecting: t.element
                }))
            }), T(i.target).parents().addBack().each(function() {
                var t, e = T.data(this, "selectable-item");
                if (e) return t = !i.metaKey && !i.ctrlKey || !e.$element.hasClass("ui-selected"), e.$element.removeClass(t ? "ui-unselecting" : "ui-selected").addClass(t ? "ui-selecting" : "ui-unselecting"), e.unselecting = !t, e.selecting = t, (e.selected = t) ? s._trigger("selecting", i, {
                    selecting: e.element
                }) : s._trigger("unselecting", i, {
                    unselecting: e.element
                }), !1
            }))
        },
        _mouseDrag: function(i) {
            if (this.dragged = !0, !this.options.disabled) {
                var t, s = this,
                    n = this.options,
                    o = this.opos[0],
                    a = this.opos[1],
                    r = i.pageX,
                    h = i.pageY;
                return r < o && (t = r, r = o, o = t), h < a && (t = h, h = a, a = t), this.helper.css({
                    left: o,
                    top: a,
                    width: r - o,
                    height: h - a
                }), this.selectees.each(function() {
                    var t = T.data(this, "selectable-item"),
                        e = !1;
                    t && t.element !== s.element[0] && ("touch" === n.tolerance ? e = !(t.left > r || t.right < o || t.top > h || t.bottom < a) : "fit" === n.tolerance && (e = t.left > o && t.right < r && t.top > a && t.bottom < h), e ? (t.selected && (t.$element.removeClass("ui-selected"), t.selected = !1), t.unselecting && (t.$element.removeClass("ui-unselecting"), t.unselecting = !1), t.selecting || (t.$element.addClass("ui-selecting"), t.selecting = !0, s._trigger("selecting", i, {
                        selecting: t.element
                    }))) : (t.selecting && ((i.metaKey || i.ctrlKey) && t.startselected ? (t.$element.removeClass("ui-selecting"), t.selecting = !1, t.$element.addClass("ui-selected"), t.selected = !0) : (t.$element.removeClass("ui-selecting"), t.selecting = !1, t.startselected && (t.$element.addClass("ui-unselecting"), t.unselecting = !0), s._trigger("unselecting", i, {
                        unselecting: t.element
                    }))), t.selected && (i.metaKey || i.ctrlKey || t.startselected || (t.$element.removeClass("ui-selected"), t.selected = !1, t.$element.addClass("ui-unselecting"), t.unselecting = !0, s._trigger("unselecting", i, {
                        unselecting: t.element
                    })))))
                }), !1
            }
        },
        _mouseStop: function(e) {
            var i = this;
            return this.dragged = !1, T(".ui-unselecting", this.element[0]).each(function() {
                var t = T.data(this, "selectable-item");
                t.$element.removeClass("ui-unselecting"), t.unselecting = !1, t.startselected = !1, i._trigger("unselected", e, {
                    unselected: t.element
                })
            }), T(".ui-selecting", this.element[0]).each(function() {
                var t = T.data(this, "selectable-item");
                t.$element.removeClass("ui-selecting").addClass("ui-selected"), t.selecting = !1, t.selected = !0, t.startselected = !0, i._trigger("selected", e, {
                    selected: t.element
                })
            }), this._trigger("stop", e), this.helper.remove(), !1
        }
    }), T.widget("ui.accordion", {
        version: "1.11.4",
        options: {
            active: 0,
            animate: {},
            collapsible: !1,
            event: "click",
            header: "> li > :first-child,> :not(li):even",
            heightStyle: "auto",
            icons: {
                activeHeader: "ui-icon-triangle-1-s",
                header: "ui-icon-triangle-1-e"
            },
            activate: null,
            beforeActivate: null
        },
        hideProps: {
            borderTopWidth: "hide",
            borderBottomWidth: "hide",
            paddingTop: "hide",
            paddingBottom: "hide",
            height: "hide"
        },
        showProps: {
            borderTopWidth: "show",
            borderBottomWidth: "show",
            paddingTop: "show",
            paddingBottom: "show",
            height: "show"
        },
        _create: function() {
            var t = this.options;
            this.prevShow = this.prevHide = T(), this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist"), t.collapsible || !1 !== t.active && null != t.active || (t.active = 0), this._processPanels(), t.active < 0 && (t.active += this.headers.length), this._refresh()
        },
        _getCreateEventData: function() {
            return {
                header: this.active,
                panel: this.active.length ? this.active.next() : T()
            }
        },
        _createIcons: function() {
            var t = this.options.icons;
            t && (T("<span>").addClass("ui-accordion-header-icon ui-icon " + t.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader), this.headers.addClass("ui-accordion-icons"))
        },
        _destroyIcons: function() {
            this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
        },
        _destroy: function() {
            var t;
            this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").removeUniqueId(), this._destroyIcons(), t = this.headers.next().removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").css("display", "").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && t.css("height", "")
        },
        _setOption: function(t, e) {
            "active" !== t ? ("event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || !1 !== this.options.active || this._activate(0), "icons" === t && (this._destroyIcons(), e && this._createIcons()), "disabled" === t && (this.element.toggleClass("ui-state-disabled", !!e).attr("aria-disabled", e), this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!e))) : this._activate(e)
        },
        _keydown: function(t) {
            if (!t.altKey && !t.ctrlKey) {
                var e = T.ui.keyCode,
                    i = this.headers.length,
                    s = this.headers.index(t.target),
                    n = !1;
                switch (t.keyCode) {
                    case e.RIGHT:
                    case e.DOWN:
                        n = this.headers[(s + 1) % i];
                        break;
                    case e.LEFT:
                    case e.UP:
                        n = this.headers[(s - 1 + i) % i];
                        break;
                    case e.SPACE:
                    case e.ENTER:
                        this._eventHandler(t);
                        break;
                    case e.HOME:
                        n = this.headers[0];
                        break;
                    case e.END:
                        n = this.headers[i - 1]
                }
                n && (T(t.target).attr("tabIndex", -1), T(n).attr("tabIndex", 0), n.focus(), t.preventDefault())
            }
        },
        _panelKeyDown: function(t) {
            t.keyCode === T.ui.keyCode.UP && t.ctrlKey && T(t.currentTarget).prev().focus()
        },
        refresh: function() {
            var t = this.options;
            this._processPanels(), !1 === t.active && !0 === t.collapsible || !this.headers.length ? (t.active = !1, this.active = T()) : !1 === t.active ? this._activate(0) : this.active.length && !T.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (t.active = !1, this.active = T()) : this._activate(Math.max(0, t.active - 1)) : t.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
        },
        _processPanels: function() {
            var t = this.headers,
                e = this.panels;
            this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-state-default ui-corner-all"), this.panels = this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide(), e && (this._off(t.not(this.headers)), this._off(e.not(this.panels)))
        },
        _refresh: function() {
            var i, t = this.options,
                e = t.heightStyle,
                s = this.element.parent();
            this.active = this._findActive(t.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"), this.active.next().addClass("ui-accordion-content-active").show(), this.headers.attr("role", "tab").each(function() {
                var t = T(this),
                    e = t.uniqueId().attr("id"),
                    i = t.next(),
                    s = i.uniqueId().attr("id");
                t.attr("aria-controls", s), i.attr("aria-labelledby", e)
            }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }).next().attr({
                "aria-hidden": "true"
            }).hide(), this.active.length ? this.active.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }).next().attr({
                "aria-hidden": "false"
            }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(t.event), "fill" === e ? (i = s.height(), this.element.siblings(":visible").each(function() {
                var t = T(this),
                    e = t.css("position");
                "absolute" !== e && "fixed" !== e && (i -= t.outerHeight(!0))
            }), this.headers.each(function() {
                i -= T(this).outerHeight(!0)
            }), this.headers.next().each(function() {
                T(this).height(Math.max(0, i - T(this).innerHeight() + T(this).height()))
            }).css("overflow", "auto")) : "auto" === e && (i = 0, this.headers.next().each(function() {
                i = Math.max(i, T(this).css("height", "").height())
            }).height(i))
        },
        _activate: function(t) {
            t = this._findActive(t)[0];
            t !== this.active[0] && (t = t || this.active[0], this._eventHandler({
                target: t,
                currentTarget: t,
                preventDefault: T.noop
            }))
        },
        _findActive: function(t) {
            return "number" == typeof t ? this.headers.eq(t) : T()
        },
        _setupEvents: function(t) {
            var i = {
                keydown: "_keydown"
            };
            t && T.each(t.split(" "), function(t, e) {
                i[e] = "_eventHandler"
            }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), {
                keydown: "_panelKeyDown"
            }), this._hoverable(this.headers), this._focusable(this.headers)
        },
        _eventHandler: function(t) {
            var e = this.options,
                i = this.active,
                s = T(t.currentTarget),
                n = s[0] === i[0],
                o = n && e.collapsible,
                a = o ? T() : s.next(),
                r = i.next(),
                a = {
                    oldHeader: i,
                    oldPanel: r,
                    newHeader: o ? T() : s,
                    newPanel: a
                };
            t.preventDefault(), n && !e.collapsible || !1 === this._trigger("beforeActivate", t, a) || (e.active = !o && this.headers.index(s), this.active = n ? T() : s, this._toggle(a), i.removeClass("ui-accordion-header-active ui-state-active"), e.icons && i.children(".ui-accordion-header-icon").removeClass(e.icons.activeHeader).addClass(e.icons.header), n || (s.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), e.icons && s.children(".ui-accordion-header-icon").removeClass(e.icons.header).addClass(e.icons.activeHeader), s.next().addClass("ui-accordion-content-active")))
        },
        _toggle: function(t) {
            var e = t.newPanel,
                i = this.prevShow.length ? this.prevShow : t.oldPanel;
            this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = e, this.prevHide = i, this.options.animate ? this._animate(e, i, t) : (i.hide(), e.show(), this._toggleComplete(t)), i.attr({
                "aria-hidden": "true"
            }), i.prev().attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            }), e.length && i.length ? i.prev().attr({
                tabIndex: -1,
                "aria-expanded": "false"
            }) : e.length && this.headers.filter(function() {
                return 0 === parseInt(T(this).attr("tabIndex"), 10)
            }).attr("tabIndex", -1), e.attr("aria-hidden", "false").prev().attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            })
        },
        _animate: function(t, i, e) {
            var s, n, o, a = this,
                r = 0,
                h = t.css("box-sizing"),
                l = t.length && (!i.length || t.index() < i.index()),
                c = this.options.animate || {},
                d = l && c.down || c,
                l = function() {
                    a._toggleComplete(e)
                };
            return n = (n = "string" == typeof d ? d : n) || d.easing || c.easing, o = (o = "number" == typeof d ? d : o) || d.duration || c.duration, i.length ? t.length ? (s = t.show().outerHeight(), i.animate(this.hideProps, {
                duration: o,
                easing: n,
                step: function(t, e) {
                    e.now = Math.round(t)
                }
            }), void t.hide().animate(this.showProps, {
                duration: o,
                easing: n,
                complete: l,
                step: function(t, e) {
                    e.now = Math.round(t), "height" !== e.prop ? "content-box" === h && (r += e.now) : "content" !== a.options.heightStyle && (e.now = Math.round(s - i.outerHeight() - r), r = 0)
                }
            })) : i.animate(this.hideProps, o, n, l) : t.animate(this.showProps, o, n, l)
        },
        _toggleComplete: function(t) {
            var e = t.oldPanel;
            e.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), e.length && (e.parent()[0].className = e.parent()[0].className), this._trigger("activate", null, t)
        }
    }), T.widget("ui.tabs", {
        version: "1.11.4",
        delay: 300,
        options: {
            active: null,
            collapsible: !1,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _isLocal: (c = /#.*$/, function(t) {
            var e = (t = t.cloneNode(!1)).href.replace(c, ""),
                i = location.href.replace(c, "");
            try {
                e = decodeURIComponent(e)
            } catch (t) {}
            try {
                i = decodeURIComponent(i)
            } catch (t) {}
            return 1 < t.hash.length && e === i
        }),
        _create: function() {
            var e = this,
                t = this.options;
            this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", t.collapsible), this._processTabs(), t.active = this._initialActive(), T.isArray(t.disabled) && (t.disabled = T.unique(t.disabled.concat(T.map(this.tabs.filter(".ui-state-disabled"), function(t) {
                return e.tabs.index(t)
            }))).sort()), !1 !== this.options.active && this.anchors.length ? this.active = this._findActive(t.active) : this.active = T(), this._refresh(), this.active.length && this.load(t.active)
        },
        _initialActive: function() {
            var i = this.options.active,
                t = this.options.collapsible,
                s = location.hash.substring(1);
            return null === i && (s && this.tabs.each(function(t, e) {
                if (T(e).attr("aria-controls") === s) return i = t, !1
            }), null !== (i = null === i ? this.tabs.index(this.tabs.filter(".ui-tabs-active")) : i) && -1 !== i || (i = !!this.tabs.length && 0)), !1 !== i && -1 === (i = this.tabs.index(this.tabs.eq(i))) && (i = !t && 0), i = !t && !1 === i && this.anchors.length ? 0 : i
        },
        _getCreateEventData: function() {
            return {
                tab: this.active,
                panel: this.active.length ? this._getPanelForTab(this.active) : T()
            }
        },
        _tabKeydown: function(t) {
            var e = T(this.document[0].activeElement).closest("li"),
                i = this.tabs.index(e),
                s = !0;
            if (!this._handlePageNav(t)) {
                switch (t.keyCode) {
                    case T.ui.keyCode.RIGHT:
                    case T.ui.keyCode.DOWN:
                        i++;
                        break;
                    case T.ui.keyCode.UP:
                    case T.ui.keyCode.LEFT:
                        s = !1, i--;
                        break;
                    case T.ui.keyCode.END:
                        i = this.anchors.length - 1;
                        break;
                    case T.ui.keyCode.HOME:
                        i = 0;
                        break;
                    case T.ui.keyCode.SPACE:
                        return t.preventDefault(), clearTimeout(this.activating), void this._activate(i);
                    case T.ui.keyCode.ENTER:
                        return t.preventDefault(), clearTimeout(this.activating), void this._activate(i !== this.options.active && i);
                    default:
                        return
                }
                t.preventDefault(), clearTimeout(this.activating), i = this._focusNextTab(i, s), t.ctrlKey || t.metaKey || (e.attr("aria-selected", "false"), this.tabs.eq(i).attr("aria-selected", "true"), this.activating = this._delay(function() {
                    this.option("active", i)
                }, this.delay))
            }
        },
        _panelKeydown: function(t) {
            this._handlePageNav(t) || t.ctrlKey && t.keyCode === T.ui.keyCode.UP && (t.preventDefault(), this.active.focus())
        },
        _handlePageNav: function(t) {
            return t.altKey && t.keyCode === T.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : t.altKey && t.keyCode === T.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
        },
        _findNextTab: function(t, e) {
            var i = this.tabs.length - 1;
            for (; - 1 !== T.inArray(t = (t = i < t ? 0 : t) < 0 ? i : t, this.options.disabled);) t = e ? t + 1 : t - 1;
            return t
        },
        _focusNextTab: function(t, e) {
            return t = this._findNextTab(t, e), this.tabs.eq(t).focus(), t
        },
        _setOption: function(t, e) {
            "active" !== t ? "disabled" !== t ? (this._super(t, e), "collapsible" === t && (this.element.toggleClass("ui-tabs-collapsible", e), e || !1 !== this.options.active || this._activate(0)), "event" === t && this._setupEvents(e), "heightStyle" === t && this._setupHeightStyle(e)) : this._setupDisabled(e) : this._activate(e)
        },
        _sanitizeSelector: function(t) {
            return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
        },
        refresh: function() {
            var t = this.options,
                e = this.tablist.children(":has(a[href])");
            t.disabled = T.map(e.filter(".ui-state-disabled"), function(t) {
                return e.index(t)
            }), this._processTabs(), !1 !== t.active && this.anchors.length ? this.active.length && !T.contains(this.tablist[0], this.active[0]) ? this.tabs.length === t.disabled.length ? (t.active = !1, this.active = T()) : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1)) : t.active = this.tabs.index(this.active) : (t.active = !1, this.active = T()), this._refresh()
        },
        _refresh: function() {
            this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                "aria-hidden": "true"
            }), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }), this._getPanelForTab(this.active).show().attr({
                "aria-hidden": "false"
            })) : this.tabs.eq(0).attr("tabIndex", 0)
        },
        _processTabs: function() {
            var h = this,
                t = this.tabs,
                e = this.anchors,
                i = this.panels;
            this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist").delegate("> li", "mousedown" + this.eventNamespace, function(t) {
                T(this).is(".ui-state-disabled") && t.preventDefault()
            }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
                T(this).closest("li").is(".ui-state-disabled") && this.blur()
            }), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                role: "tab",
                tabIndex: -1
            }), this.anchors = this.tabs.map(function() {
                return T("a", this)[0]
            }).addClass("ui-tabs-anchor").attr({
                role: "presentation",
                tabIndex: -1
            }), this.panels = T(), this.anchors.each(function(t, e) {
                var i, s, n, o = T(e).uniqueId().attr("id"),
                    a = T(e).closest("li"),
                    r = a.attr("aria-controls");
                h._isLocal(e) ? (n = (i = e.hash).substring(1), s = h.element.find(h._sanitizeSelector(i))) : (n = a.attr("aria-controls") || T({}).uniqueId()[0].id, (s = h.element.find(i = "#" + n)).length || (s = h._createPanel(n)).insertAfter(h.panels[t - 1] || h.tablist), s.attr("aria-live", "polite")), s.length && (h.panels = h.panels.add(s)), r && a.data("ui-tabs-aria-controls", r), a.attr({
                    "aria-controls": n,
                    "aria-labelledby": o
                }), s.attr("aria-labelledby", o)
            }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel"), t && (this._off(t.not(this.tabs)), this._off(e.not(this.anchors)), this._off(i.not(this.panels)))
        },
        _getList: function() {
            return this.tablist || this.element.find("ol,ul").eq(0)
        },
        _createPanel: function(t) {
            return T("<div>").attr("id", t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
        },
        _setupDisabled: function(t) {
            T.isArray(t) && (t.length ? t.length === this.anchors.length && (t = !0) : t = !1);
            for (var e, i = 0; e = this.tabs[i]; i++) !0 === t || -1 !== T.inArray(i, t) ? T(e).addClass("ui-state-disabled").attr("aria-disabled", "true") : T(e).removeClass("ui-state-disabled").removeAttr("aria-disabled");
            this.options.disabled = t
        },
        _setupEvents: function(t) {
            var i = {};
            t && T.each(t.split(" "), function(t, e) {
                i[e] = "_eventHandler"
            }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
                click: function(t) {
                    t.preventDefault()
                }
            }), this._on(this.anchors, i), this._on(this.tabs, {
                keydown: "_tabKeydown"
            }), this._on(this.panels, {
                keydown: "_panelKeydown"
            }), this._focusable(this.tabs), this._hoverable(this.tabs)
        },
        _setupHeightStyle: function(t) {
            var i, e = this.element.parent();
            "fill" === t ? (i = e.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
                var t = T(this),
                    e = t.css("position");
                "absolute" !== e && "fixed" !== e && (i -= t.outerHeight(!0))
            }), this.element.children().not(this.panels).each(function() {
                i -= T(this).outerHeight(!0)
            }), this.panels.each(function() {
                T(this).height(Math.max(0, i - T(this).innerHeight() + T(this).height()))
            }).css("overflow", "auto")) : "auto" === t && (i = 0, this.panels.each(function() {
                i = Math.max(i, T(this).height("").height())
            }).height(i))
        },
        _eventHandler: function(t) {
            var e = this.options,
                i = this.active,
                s = T(t.currentTarget).closest("li"),
                n = s[0] === i[0],
                o = n && e.collapsible,
                a = o ? T() : this._getPanelForTab(s),
                r = i.length ? this._getPanelForTab(i) : T(),
                i = {
                    oldTab: i,
                    oldPanel: r,
                    newTab: o ? T() : s,
                    newPanel: a
                };
            t.preventDefault(), s.hasClass("ui-state-disabled") || s.hasClass("ui-tabs-loading") || this.running || n && !e.collapsible || !1 === this._trigger("beforeActivate", t, i) || (e.active = !o && this.tabs.index(s), this.active = n ? T() : s, this.xhr && this.xhr.abort(), r.length || a.length || T.error("jQuery UI Tabs: Mismatching fragment identifier."), a.length && this.load(this.tabs.index(s), t), this._toggle(t, i))
        },
        _toggle: function(t, e) {
            var i = this,
                s = e.newPanel,
                n = e.oldPanel;

            function o() {
                i.running = !1, i._trigger("activate", t, e)
            }

            function a() {
                e.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), s.length && i.options.show ? i._show(s, i.options.show, o) : (s.show(), o())
            }
            this.running = !0, n.length && this.options.hide ? this._hide(n, this.options.hide, function() {
                e.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), a()
            }) : (e.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), n.hide(), a()), n.attr("aria-hidden", "true"), e.oldTab.attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            }), s.length && n.length ? e.oldTab.attr("tabIndex", -1) : s.length && this.tabs.filter(function() {
                return 0 === T(this).attr("tabIndex")
            }).attr("tabIndex", -1), s.attr("aria-hidden", "false"), e.newTab.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            })
        },
        _activate: function(t) {
            var t = this._findActive(t);
            t[0] !== this.active[0] && (t = (t = !t.length ? this.active : t).find(".ui-tabs-anchor")[0], this._eventHandler({
                target: t,
                currentTarget: t,
                preventDefault: T.noop
            }))
        },
        _findActive: function(t) {
            return !1 === t ? T() : this.tabs.eq(t)
        },
        _getIndex: function(t) {
            return t = "string" == typeof t ? this.anchors.index(this.anchors.filter("[href$='" + t + "']")) : t
        },
        _destroy: function() {
            this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(), this.tablist.unbind(this.eventNamespace), this.tabs.add(this.panels).each(function() {
                T.data(this, "ui-tabs-destroy") ? T(this).remove() : T(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
            }), this.tabs.each(function() {
                var t = T(this),
                    e = t.data("ui-tabs-aria-controls");
                e ? t.attr("aria-controls", e).removeData("ui-tabs-aria-controls") : t.removeAttr("aria-controls")
            }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
        },
        enable: function(i) {
            var t = this.options.disabled;
            !1 !== t && (t = void 0 !== i && (i = this._getIndex(i), T.isArray(t) ? T.map(t, function(t) {
                return t !== i ? t : null
            }) : T.map(this.tabs, function(t, e) {
                return e !== i ? e : null
            })), this._setupDisabled(t))
        },
        disable: function(t) {
            var e = this.options.disabled;
            if (!0 !== e) {
                if (void 0 === t) e = !0;
                else {
                    if (t = this._getIndex(t), -1 !== T.inArray(t, e)) return;
                    e = T.isArray(e) ? T.merge([t], e).sort() : [t]
                }
                this._setupDisabled(e)
            }
        },
        load: function(t, s) {
            t = this._getIndex(t);

            function n(t, e) {
                "abort" === e && o.panels.stop(!1, !0), i.removeClass("ui-tabs-loading"), a.removeAttr("aria-busy"), t === o.xhr && delete o.xhr
            }
            var o = this,
                i = this.tabs.eq(t),
                t = i.find(".ui-tabs-anchor"),
                a = this._getPanelForTab(i),
                r = {
                    tab: i,
                    panel: a
                };
            this._isLocal(t[0]) || (this.xhr = T.ajax(this._ajaxSettings(t, s, r)), this.xhr && "canceled" !== this.xhr.statusText && (i.addClass("ui-tabs-loading"), a.attr("aria-busy", "true"), this.xhr.done(function(t, e, i) {
                setTimeout(function() {
                    a.html(t), o._trigger("load", s, r), n(i, e)
                }, 1)
            }).fail(function(t, e) {
                setTimeout(function() {
                    n(t, e)
                }, 1)
            })))
        },
        _ajaxSettings: function(t, i, s) {
            var n = this;
            return {
                url: t.attr("href"),
                beforeSend: function(t, e) {
                    return n._trigger("beforeLoad", i, T.extend({
                        jqXHR: t,
                        ajaxSettings: e
                    }, s))
                }
            }
        },
        _getPanelForTab: function(t) {
            t = T(t).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + t))
        }
    }), T.widget("ui.tooltip", {
        version: "1.11.4",
        options: {
            content: function() {
                var t = T(this).attr("title") || "";
                return T("<a>").text(t).html()
            },
            hide: !0,
            items: "[title]:not([disabled])",
            position: {
                my: "left top+15",
                at: "left bottom",
                collision: "flipfit flip"
            },
            show: !0,
            tooltipClass: null,
            track: !1,
            close: null,
            open: null
        },
        _addDescribedBy: function(t, e) {
            var i = (t.attr("aria-describedby") || "").split(/\s+/);
            i.push(e), t.data("ui-tooltip-id", e).attr("aria-describedby", T.trim(i.join(" ")))
        },
        _removeDescribedBy: function(t) {
            var e = t.data("ui-tooltip-id"),
                i = (t.attr("aria-describedby") || "").split(/\s+/),
                e = T.inArray(e, i); - 1 !== e && i.splice(e, 1), t.removeData("ui-tooltip-id"), (i = T.trim(i.join(" "))) ? t.attr("aria-describedby", i) : t.removeAttr("aria-describedby")
        },
        _create: function() {
            this._on({
                mouseover: "open",
                focusin: "open"
            }), this.tooltips = {}, this.parents = {}, this.options.disabled && this._disable(), this.liveRegion = T("<div>").attr({
                role: "log",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body)
        },
        _setOption: function(t, e) {
            var i = this;
            if ("disabled" === t) return this[e ? "_disable" : "_enable"](), void(this.options[t] = e);
            this._super(t, e), "content" === t && T.each(this.tooltips, function(t, e) {
                i._updateContent(e.element)
            })
        },
        _disable: function() {
            var s = this;
            T.each(this.tooltips, function(t, e) {
                var i = T.Event("blur");
                i.target = i.currentTarget = e.element[0], s.close(i, !0)
            }), this.element.find(this.options.items).addBack().each(function() {
                var t = T(this);
                t.is("[title]") && t.data("ui-tooltip-title", t.attr("title")).removeAttr("title")
            })
        },
        _enable: function() {
            this.element.find(this.options.items).addBack().each(function() {
                var t = T(this);
                t.data("ui-tooltip-title") && t.attr("title", t.data("ui-tooltip-title"))
            })
        },
        open: function(t) {
            var i = this,
                e = T(t ? t.target : this.element).closest(this.options.items);
            e.length && !e.data("ui-tooltip-id") && (e.attr("title") && e.data("ui-tooltip-title", e.attr("title")), e.data("ui-tooltip-open", !0), t && "mouseover" === t.type && e.parents().each(function() {
                var t, e = T(this);
                e.data("ui-tooltip-open") && ((t = T.Event("blur")).target = t.currentTarget = this, i.close(t, !0)), e.attr("title") && (e.uniqueId(), i.parents[this.id] = {
                    element: this,
                    title: e.attr("title")
                }, e.attr("title", ""))
            }), this._registerCloseHandlers(t, e), this._updateContent(e, t))
        },
        _updateContent: function(e, i) {
            var t = this.options.content,
                s = this,
                n = i ? i.type : null;
            if ("string" == typeof t) return this._open(i, e, t);
            (t = t.call(e[0], function(t) {
                s._delay(function() {
                    e.data("ui-tooltip-open") && (i && (i.type = n), this._open(i, e, t))
                })
            })) && this._open(i, e, t)
        },
        _open: function(t, e, i) {
            var s, n, o, a, r = T.extend({}, this.options.position);

            function h(t) {
                r.of = t, n.is(":hidden") || n.position(r)
            }
            i && ((s = this._find(e)) ? s.tooltip.find(".ui-tooltip-content").html(i) : (e.is("[title]") && (t && "mouseover" === t.type ? e.attr("title", "") : e.removeAttr("title")), s = this._tooltip(e), n = s.tooltip, this._addDescribedBy(e, n.attr("id")), n.find(".ui-tooltip-content").html(i), this.liveRegion.children().hide(), i.clone ? (a = i.clone()).removeAttr("id").find("[id]").removeAttr("id") : a = i, T("<div>").html(a).appendTo(this.liveRegion), this.options.track && t && /^mouse/.test(t.type) ? (this._on(this.document, {
                mousemove: h
            }), h(t)) : n.position(T.extend({
                of: e
            }, this.options.position)), n.hide(), this._show(n, this.options.show), this.options.show && this.options.show.delay && (o = this.delayedShow = setInterval(function() {
                n.is(":visible") && (h(r.of), clearInterval(o))
            }, T.fx.interval)), this._trigger("open", t, {
                tooltip: n
            })))
        },
        _registerCloseHandlers: function(t, e) {
            var i = {
                keyup: function(t) {
                    t.keyCode === T.ui.keyCode.ESCAPE && ((t = T.Event(t)).currentTarget = e[0], this.close(t, !0))
                }
            };
            e[0] !== this.element[0] && (i.remove = function() {
                this._removeTooltip(this._find(e).tooltip)
            }), t && "mouseover" !== t.type || (i.mouseleave = "close"), t && "focusin" !== t.type || (i.focusout = "close"), this._on(!0, e, i)
        },
        close: function(t) {
            var e, i = this,
                s = T(t ? t.currentTarget : this.element),
                n = this._find(s);
            n ? (e = n.tooltip, n.closing || (clearInterval(this.delayedShow), s.data("ui-tooltip-title") && !s.attr("title") && s.attr("title", s.data("ui-tooltip-title")), this._removeDescribedBy(s), n.hiding = !0, e.stop(!0), this._hide(e, this.options.hide, function() {
                i._removeTooltip(T(this))
            }), s.removeData("ui-tooltip-open"), this._off(s, "mouseleave focusout keyup"), s[0] !== this.element[0] && this._off(s, "remove"), this._off(this.document, "mousemove"), t && "mouseleave" === t.type && T.each(this.parents, function(t, e) {
                T(e.element).attr("title", e.title), delete i.parents[t]
            }), n.closing = !0, this._trigger("close", t, {
                tooltip: e
            }), n.hiding || (n.closing = !1))) : s.removeData("ui-tooltip-open")
        },
        _tooltip: function(t) {
            var e = T("<div>").attr("role", "tooltip").addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || "")),
                i = e.uniqueId().attr("id");
            return T("<div>").addClass("ui-tooltip-content").appendTo(e), e.appendTo(this.document[0].body), this.tooltips[i] = {
                element: t,
                tooltip: e
            }
        },
        _find: function(t) {
            t = t.data("ui-tooltip-id");
            return t ? this.tooltips[t] : null
        },
        _removeTooltip: function(t) {
            t.remove(), delete this.tooltips[t.attr("id")]
        },
        _destroy: function() {
            var s = this;
            T.each(this.tooltips, function(t, e) {
                var i = T.Event("blur"),
                    e = e.element;
                i.target = i.currentTarget = e[0], s.close(i, !0), T("#" + t).remove(), e.data("ui-tooltip-title") && (e.attr("title") || e.attr("title", e.data("ui-tooltip-title")), e.removeData("ui-tooltip-title"))
            }), this.liveRegion.remove()
        }
    });
    var c, d, u, f, p, g, m, v, b, w, _, y, x, C, z, W, D, H, I, E, N, P = "ui-effects-",
        S = T;

    function M(t, e, i) {
        var s = b[e.type] || {};
        return null == t ? i || !e.def ? null : e.def : (t = s.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : s.mod ? (t + s.mod) % s.mod : t < 0 ? 0 : s.max < t ? s.max : t)
    }

    function k(s) {
        var n = m(),
            o = n._rgba = [];
        return s = s.toLowerCase(), y(g, function(t, e) {
            var i = e.re.exec(s),
                i = i && e.parse(i),
                e = e.space || "rgba";
            if (i) return i = n[e](i), n[v[e].cache] = i[v[e].cache], o = n._rgba = i._rgba, !1
        }), o.length ? ("0,0,0,0" === o.join() && d.extend(o, f.transparent), n) : f[s]
    }

    function R(t, e, i) {
        return 6 * (i = (i + 1) % 1) < 1 ? t + (e - t) * i * 6 : 2 * i < 1 ? e : 3 * i < 2 ? t + (e - t) * (2 / 3 - i) * 6 : t
    }

    function A(t) {
        var e, i, s = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle,
            n = {};
        if (s && s.length && s[0] && s[s[0]])
            for (i = s.length; i--;) "string" == typeof s[e = s[i]] && (n[T.camelCase(e)] = s[e]);
        else
            for (e in s) "string" == typeof s[e] && (n[e] = s[e]);
        return n
    }

    function q(t, e, i, s) {
        return t = {
            effect: t = T.isPlainObject(t) ? (e = t).effect : t
        }, T.isFunction(e = null == e ? {} : e) && (s = e, i = null, e = {}), "number" != typeof e && !T.fx.speeds[e] || (s = i, i = e, e = {}), T.isFunction(i) && (s = i, i = null), e && T.extend(t, e), i = i || e.duration, t.duration = T.fx.off ? 0 : "number" == typeof i ? i : i in T.fx.speeds ? T.fx.speeds[i] : T.fx.speeds._default, t.complete = s || e.complete, t
    }

    function B(t) {
        return !t || "number" == typeof t || T.fx.speeds[t] || ("string" == typeof t && !T.effects.effect[t] || (T.isFunction(t) || "object" == typeof t && !t.effect))
    }
    T.effects = {
        effect: {}
    }, p = /^([\-+])=\s*(\d+\.?\d*)/, g = [{
        re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
        parse: function(t) {
            return [t[1], t[2], t[3], t[4]]
        }
    }, {
        re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
        parse: function(t) {
            return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
        }
    }, {
        re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
        parse: function(t) {
            return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
        }
    }, {
        re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
        parse: function(t) {
            return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
        }
    }, {
        re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
        space: "hsla",
        parse: function(t) {
            return [t[1], t[2] / 100, t[3] / 100, t[4]]
        }
    }], m = (d = S).Color = function(t, e, i, s) {
        return new d.Color.fn.parse(t, e, i, s)
    }, v = {
        rgba: {
            props: {
                red: {
                    idx: 0,
                    type: "byte"
                },
                green: {
                    idx: 1,
                    type: "byte"
                },
                blue: {
                    idx: 2,
                    type: "byte"
                }
            }
        },
        hsla: {
            props: {
                hue: {
                    idx: 0,
                    type: "degrees"
                },
                saturation: {
                    idx: 1,
                    type: "percent"
                },
                lightness: {
                    idx: 2,
                    type: "percent"
                }
            }
        }
    }, b = {
        byte: {
            floor: !0,
            max: 255
        },
        percent: {
            max: 1
        },
        degrees: {
            mod: 360,
            floor: !0
        }
    }, w = m.support = {}, _ = d("<p>")[0], y = d.each, _.style.cssText = "background-color:rgba(1,1,1,.5)", w.rgba = -1 < _.style.backgroundColor.indexOf("rgba"), y(v, function(t, e) {
        e.cache = "_" + t, e.props.alpha = {
            idx: 3,
            type: "percent",
            def: 1
        }
    }), (m.fn = d.extend(m.prototype, {
        parse: function(n, t, e, i) {
            if (n === u) return this._rgba = [null, null, null, null], this;
            (n.jquery || n.nodeType) && (n = d(n).css(t), t = u);
            var o = this,
                s = d.type(n),
                a = this._rgba = [];
            return t !== u && (n = [n, t, e, i], s = "array"), "string" === s ? this.parse(k(n) || f._default) : "array" === s ? (y(v.rgba.props, function(t, e) {
                a[e.idx] = M(n[e.idx], e)
            }), this) : "object" === s ? (y(v, n instanceof m ? function(t, e) {
                n[e.cache] && (o[e.cache] = n[e.cache].slice())
            } : function(t, i) {
                var s = i.cache;
                y(i.props, function(t, e) {
                    if (!o[s] && i.to) {
                        if ("alpha" === t || null == n[t]) return;
                        o[s] = i.to(o._rgba)
                    }
                    o[s][e.idx] = M(n[t], e, !0)
                }), o[s] && d.inArray(null, o[s].slice(0, 3)) < 0 && (o[s][3] = 1, i.from && (o._rgba = i.from(o[s])))
            }), this) : void 0
        },
        is: function(t) {
            var n = m(t),
                o = !0,
                a = this;
            return y(v, function(t, e) {
                var i, s = n[e.cache];
                return s && (i = a[e.cache] || e.to && e.to(a._rgba) || [], y(e.props, function(t, e) {
                    if (null != s[e.idx]) return o = s[e.idx] === i[e.idx]
                })), o
            }), o
        },
        _space: function() {
            var i = [],
                s = this;
            return y(v, function(t, e) {
                s[e.cache] && i.push(t)
            }), i.pop()
        },
        transition: function(t, a) {
            var e = (l = m(t))._space(),
                i = v[e],
                t = 0 === this.alpha() ? m("transparent") : this,
                r = t[i.cache] || i.to(t._rgba),
                h = r.slice(),
                l = l[i.cache];
            return y(i.props, function(t, e) {
                var i = e.idx,
                    s = r[i],
                    n = l[i],
                    o = b[e.type] || {};
                null !== n && (null === s ? h[i] = n : (o.mod && (n - s > o.mod / 2 ? s += o.mod : s - n > o.mod / 2 && (s -= o.mod)), h[i] = M((n - s) * a + s, e)))
            }), this[e](h)
        },
        blend: function(t) {
            if (1 === this._rgba[3]) return this;
            var e = this._rgba.slice(),
                i = e.pop(),
                s = m(t)._rgba;
            return m(d.map(e, function(t, e) {
                return (1 - i) * s[e] + i * t
            }))
        },
        toRgbaString: function() {
            var t = "rgba(",
                e = d.map(this._rgba, function(t, e) {
                    return null == t ? 2 < e ? 1 : 0 : t
                });
            return 1 === e[3] && (e.pop(), t = "rgb("), t + e.join() + ")"
        },
        toHslaString: function() {
            var t = "hsla(",
                e = d.map(this.hsla(), function(t, e) {
                    return null == t && (t = 2 < e ? 1 : 0), t = e && e < 3 ? Math.round(100 * t) + "%" : t
                });
            return 1 === e[3] && (e.pop(), t = "hsl("), t + e.join() + ")"
        },
        toHexString: function(t) {
            var e = this._rgba.slice(),
                i = e.pop();
            return t && e.push(~~(255 * i)), "#" + d.map(e, function(t) {
                return 1 === (t = (t || 0).toString(16)).length ? "0" + t : t
            }).join("")
        },
        toString: function() {
            return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
        }
    })).parse.prototype = m.fn, v.hsla.to = function(t) {
        if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
        var e = t[0] / 255,
            i = t[1] / 255,
            s = t[2] / 255,
            n = t[3],
            o = Math.max(e, i, s),
            a = Math.min(e, i, s),
            r = o - a,
            h = o + a,
            t = .5 * h,
            i = a === o ? 0 : e === o ? 60 * (i - s) / r + 360 : i === o ? 60 * (s - e) / r + 120 : 60 * (e - i) / r + 240,
            h = 0 == r ? 0 : t <= .5 ? r / h : r / (2 - h);
        return [Math.round(i) % 360, h, t, null == n ? 1 : n]
    }, v.hsla.from = function(t) {
        if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
        var e = t[0] / 360,
            i = t[1],
            s = t[2],
            t = t[3],
            i = s <= .5 ? s * (1 + i) : s + i - s * i,
            s = 2 * s - i;
        return [Math.round(255 * R(s, i, e + 1 / 3)), Math.round(255 * R(s, i, e)), Math.round(255 * R(s, i, e - 1 / 3)), t]
    }, y(v, function(h, t) {
        var o = t.props,
            a = t.cache,
            r = t.to,
            l = t.from;
        m.fn[h] = function(t) {
            if (r && !this[a] && (this[a] = r(this._rgba)), t === u) return this[a].slice();
            var e, i = d.type(t),
                s = "array" === i || "object" === i ? t : arguments,
                n = this[a].slice();
            return y(o, function(t, e) {
                t = s["object" === i ? t : e.idx];
                null == t && (t = n[e.idx]), n[e.idx] = M(t, e)
            }), l ? ((e = m(l(n)))[a] = n, e) : m(n)
        }, y(o, function(a, r) {
            m.fn[a] || (m.fn[a] = function(t) {
                var e, i = d.type(t),
                    s = "alpha" === a ? this._hsla ? "hsla" : "rgba" : h,
                    n = this[s](),
                    o = n[r.idx];
                return "undefined" === i ? o : ("function" === i && (t = t.call(this, o), i = d.type(t)), null == t && r.empty ? this : ("string" === i && (e = p.exec(t)) && (t = o + parseFloat(e[2]) * ("+" === e[1] ? 1 : -1)), n[r.idx] = t, this[s](n)))
            })
        })
    }), (m.hook = function(t) {
        t = t.split(" ");
        y(t, function(t, o) {
            d.cssHooks[o] = {
                set: function(t, e) {
                    var i, s, n = "";
                    if ("transparent" !== e && ("string" !== d.type(e) || (i = k(e)))) {
                        if (e = m(i || e), !w.rgba && 1 !== e._rgba[3]) {
                            for (s = "backgroundColor" === o ? t.parentNode : t;
                                ("" === n || "transparent" === n) && s && s.style;) try {
                                n = d.css(s, "backgroundColor"), s = s.parentNode
                            } catch (t) {}
                            e = e.blend(n && "transparent" !== n ? n : "_default")
                        }
                        e = e.toRgbaString()
                    }
                    try {
                        t.style[o] = e
                    } catch (t) {}
                }
            }, d.fx.step[o] = function(t) {
                t.colorInit || (t.start = m(t.elem, o), t.end = m(t.end), t.colorInit = !0), d.cssHooks[o].set(t.elem, t.start.transition(t.end, t.pos))
            }
        })
    })("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"), d.cssHooks.borderColor = {
        expand: function(i) {
            var s = {};
            return y(["Top", "Right", "Bottom", "Left"], function(t, e) {
                s["border" + e + "Color"] = i
            }), s
        }
    }, f = d.Color.names = {
        aqua: "#00ffff",
        black: "#000000",
        blue: "#0000ff",
        fuchsia: "#ff00ff",
        gray: "#808080",
        green: "#008000",
        lime: "#00ff00",
        maroon: "#800000",
        navy: "#000080",
        olive: "#808000",
        purple: "#800080",
        red: "#ff0000",
        silver: "#c0c0c0",
        teal: "#008080",
        white: "#ffffff",
        yellow: "#ffff00",
        transparent: [null, null, null, 0],
        _default: "#ffffff"
    }, W = ["add", "remove", "toggle"], D = {
        border: 1,
        borderBottom: 1,
        borderColor: 1,
        borderLeft: 1,
        borderRight: 1,
        borderTop: 1,
        borderWidth: 1,
        margin: 1,
        padding: 1
    }, T.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(t, e) {
        T.fx.step[e] = function(t) {
            ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (S.style(t.elem, e, t.end), t.setAttr = !0)
        }
    }), T.fn.addBack || (T.fn.addBack = function(t) {
        return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
    }), T.effects.animateClass = function(n, t, e, i) {
        var o = T.speed(t, e, i);
        return this.queue(function() {
            var i = T(this),
                t = i.attr("class") || "",
                e = (e = o.children ? i.find("*").addBack() : i).map(function() {
                    return {
                        el: T(this),
                        start: A(this)
                    }
                }),
                s = function() {
                    T.each(W, function(t, e) {
                        n[e] && i[e + "Class"](n[e])
                    })
                };
            s(), e = e.map(function() {
                return this.end = A(this.el[0]), this.diff = function(t, e) {
                    var i, s, n = {};
                    for (i in e) s = e[i], t[i] !== s && (D[i] || !T.fx.step[i] && isNaN(parseFloat(s)) || (n[i] = s));
                    return n
                }(this.start, this.end), this
            }), i.attr("class", t), e = e.map(function() {
                var t = this,
                    e = T.Deferred(),
                    i = T.extend({}, o, {
                        queue: !1,
                        complete: function() {
                            e.resolve(t)
                        }
                    });
                return this.el.animate(this.diff, i), e.promise()
            }), T.when.apply(T, e.get()).done(function() {
                s(), T.each(arguments, function() {
                    var e = this.el;
                    T.each(this.diff, function(t) {
                        e.css(t, "")
                    })
                }), o.complete.call(i[0])
            })
        })
    }, T.fn.extend({
        addClass: (z = T.fn.addClass, function(t, e, i, s) {
            return e ? T.effects.animateClass.call(this, {
                add: t
            }, e, i, s) : z.apply(this, arguments)
        }),
        removeClass: (C = T.fn.removeClass, function(t, e, i, s) {
            return 1 < arguments.length ? T.effects.animateClass.call(this, {
                remove: t
            }, e, i, s) : C.apply(this, arguments)
        }),
        toggleClass: (x = T.fn.toggleClass, function(t, e, i, s, n) {
            return "boolean" == typeof e || void 0 === e ? i ? T.effects.animateClass.call(this, e ? {
                add: t
            } : {
                remove: t
            }, i, s, n) : x.apply(this, arguments) : T.effects.animateClass.call(this, {
                toggle: t
            }, e, i, s)
        }),
        switchClass: function(t, e, i, s, n) {
            return T.effects.animateClass.call(this, {
                add: e,
                remove: t
            }, i, s, n)
        }
    }), T.extend(T.effects, {
        version: "1.11.4",
        save: function(t, e) {
            for (var i = 0; i < e.length; i++) null !== e[i] && t.data(P + e[i], t[0].style[e[i]])
        },
        restore: function(t, e) {
            for (var i, s = 0; s < e.length; s++) null !== e[s] && (void 0 === (i = t.data(P + e[s])) && (i = ""), t.css(e[s], i))
        },
        setMode: function(t, e) {
            return e = "toggle" === e ? t.is(":hidden") ? "show" : "hide" : e
        },
        getBaseline: function(t, e) {
            var i, s;
            switch (t[0]) {
                case "top":
                    i = 0;
                    break;
                case "middle":
                    i = .5;
                    break;
                case "bottom":
                    i = 1;
                    break;
                default:
                    i = t[0] / e.height
            }
            switch (t[1]) {
                case "left":
                    s = 0;
                    break;
                case "center":
                    s = .5;
                    break;
                case "right":
                    s = 1;
                    break;
                default:
                    s = t[1] / e.width
            }
            return {
                x: s,
                y: i
            }
        },
        createWrapper: function(i) {
            if (i.parent().is(".ui-effects-wrapper")) return i.parent();
            var s = {
                    width: i.outerWidth(!0),
                    height: i.outerHeight(!0),
                    float: i.css("float")
                },
                t = T("<div></div>").addClass("ui-effects-wrapper").css({
                    fontSize: "100%",
                    background: "transparent",
                    border: "none",
                    margin: 0,
                    padding: 0
                }),
                e = {
                    width: i.width(),
                    height: i.height()
                },
                n = document.activeElement;
            try {
                n.id
            } catch (t) {
                n = document.body
            }
            return i.wrap(t), i[0] !== n && !T.contains(i[0], n) || T(n).focus(), t = i.parent(), "static" === i.css("position") ? (t.css({
                position: "relative"
            }), i.css({
                position: "relative"
            })) : (T.extend(s, {
                position: i.css("position"),
                zIndex: i.css("z-index")
            }), T.each(["top", "left", "bottom", "right"], function(t, e) {
                s[e] = i.css(e), isNaN(parseInt(s[e], 10)) && (s[e] = "auto")
            }), i.css({
                position: "relative",
                top: 0,
                left: 0,
                right: "auto",
                bottom: "auto"
            })), i.css(e), t.css(s).show()
        },
        removeWrapper: function(t) {
            var e = document.activeElement;
            return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), t[0] !== e && !T.contains(t[0], e) || T(e).focus()), t
        },
        setTransition: function(s, t, n, o) {
            return o = o || {}, T.each(t, function(t, e) {
                var i = s.cssUnit(e);
                0 < i[0] && (o[e] = i[0] * n + i[1])
            }), o
        }
    }), T.fn.extend({
        effect: function() {
            var o = q.apply(this, arguments),
                t = o.mode,
                e = o.queue,
                a = T.effects.effect[o.effect];
            return T.fx.off || !a ? t ? this[t](o.duration, o.complete) : this.each(function() {
                o.complete && o.complete.call(this)
            }) : !1 === e ? this.each(i) : this.queue(e || "fx", i);

            function i(t) {
                var e = T(this),
                    i = o.complete,
                    s = o.mode;

                function n() {
                    T.isFunction(i) && i.call(e[0]), T.isFunction(t) && t()
                }(e.is(":hidden") ? "hide" === s : "show" === s) ? (e[s](), n()) : a.call(e[0], o, n)
            }
        },
        show: (E = T.fn.show, function(t) {
            if (B(t)) return E.apply(this, arguments);
            var e = q.apply(this, arguments);
            return e.mode = "show", this.effect.call(this, e)
        }),
        hide: (I = T.fn.hide, function(t) {
            if (B(t)) return I.apply(this, arguments);
            var e = q.apply(this, arguments);
            return e.mode = "hide", this.effect.call(this, e)
        }),
        toggle: (H = T.fn.toggle, function(t) {
            if (B(t) || "boolean" == typeof t) return H.apply(this, arguments);
            var e = q.apply(this, arguments);
            return e.mode = "toggle", this.effect.call(this, e)
        }),
        cssUnit: function(t) {
            var i = this.css(t),
                s = [];
            return T.each(["em", "px", "%", "pt"], function(t, e) {
                0 < i.indexOf(e) && (s = [parseFloat(i), e])
            }), s
        }
    }), N = {}, T.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(e, t) {
        N[t] = function(t) {
            return Math.pow(t, e + 2)
        }
    }), T.extend(N, {
        Sine: function(t) {
            return 1 - Math.cos(t * Math.PI / 2)
        },
        Circ: function(t) {
            return 1 - Math.sqrt(1 - t * t)
        },
        Elastic: function(t) {
            return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
        },
        Back: function(t) {
            return t * t * (3 * t - 2)
        },
        Bounce: function(t) {
            for (var e, i = 4; t < ((e = Math.pow(2, --i)) - 1) / 11;);
            return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
        }
    }), T.each(N, function(t, e) {
        T.easing["easeIn" + t] = e, T.easing["easeOut" + t] = function(t) {
            return 1 - e(1 - t)
        }, T.easing["easeInOut" + t] = function(t) {
            return t < .5 ? e(2 * t) / 2 : 1 - e(-2 * t + 2) / 2
        }
    });
    T.effects, T.effects.effect.blind = function(t, e) {
        var i, s, n = T(this),
            o = ["position", "top", "bottom", "left", "right", "height", "width"],
            a = T.effects.setMode(n, t.mode || "hide"),
            r = t.direction || "up",
            h = /up|down|vertical/.test(r),
            l = h ? "height" : "width",
            c = h ? "top" : "left",
            d = /up|left|vertical|horizontal/.test(r),
            u = {},
            f = "show" === a;
        n.parent().is(".ui-effects-wrapper") ? T.effects.save(n.parent(), o) : T.effects.save(n, o), n.show(), s = (i = T.effects.createWrapper(n).css({
            overflow: "hidden"
        }))[l](), r = parseFloat(i.css(c)) || 0, u[l] = f ? s : 0, d || (n.css(h ? "bottom" : "right", 0).css(h ? "top" : "left", "auto").css({
            position: "absolute"
        }), u[c] = f ? r : s + r), f && (i.css(l, 0), d || i.css(c, r + s)), i.animate(u, {
            duration: t.duration,
            easing: t.easing,
            queue: !1,
            complete: function() {
                "hide" === a && n.hide(), T.effects.restore(n, o), T.effects.removeWrapper(n), e()
            }
        })
    }, T.effects.effect.bounce = function(t, e) {
        var i, s, n, o = T(this),
            a = ["position", "top", "bottom", "left", "right", "height", "width"],
            r = T.effects.setMode(o, t.mode || "effect"),
            h = "hide" === r,
            l = "show" === r,
            c = t.direction || "up",
            d = t.distance,
            u = t.times || 5,
            r = 2 * u + (l || h ? 1 : 0),
            f = t.duration / r,
            p = t.easing,
            g = "up" === c || "down" === c ? "top" : "left",
            m = "up" === c || "left" === c,
            t = o.queue(),
            c = t.length;
        for ((l || h) && a.push("opacity"), T.effects.save(o, a), o.show(), T.effects.createWrapper(o), d = d || o["top" == g ? "outerHeight" : "outerWidth"]() / 3, l && ((n = {
                opacity: 1
            })[g] = 0, o.css("opacity", 0).css(g, m ? 2 * -d : 2 * d).animate(n, f, p)), h && (d /= Math.pow(2, u - 1)), i = (n = {})[g] = 0; i < u; i++)(s = {})[g] = (m ? "-=" : "+=") + d, o.animate(s, f, p).animate(n, f, p), d = h ? 2 * d : d / 2;
        h && ((s = {
            opacity: 0
        })[g] = (m ? "-=" : "+=") + d, o.animate(s, f, p)), o.queue(function() {
            h && o.hide(), T.effects.restore(o, a), T.effects.removeWrapper(o), e()
        }), 1 < c && t.splice.apply(t, [1, 0].concat(t.splice(c, 1 + r))), o.dequeue()
    }, T.effects.effect.clip = function(t, e) {
        var i, s = T(this),
            n = ["position", "top", "bottom", "left", "right", "height", "width"],
            o = "show" === T.effects.setMode(s, t.mode || "hide"),
            a = "vertical" === (t.direction || "vertical"),
            r = a ? "height" : "width",
            h = a ? "top" : "left",
            l = {};
        T.effects.save(s, n), s.show(), i = T.effects.createWrapper(s).css({
            overflow: "hidden"
        }), i = (a = "IMG" === s[0].tagName ? i : s)[r](), o && (a.css(r, 0), a.css(h, i / 2)), l[r] = o ? i : 0, l[h] = o ? 0 : i / 2, a.animate(l, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function() {
                o || s.hide(), T.effects.restore(s, n), T.effects.removeWrapper(s), e()
            }
        })
    }, T.effects.effect.drop = function(t, e) {
        var i = T(this),
            s = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
            n = T.effects.setMode(i, t.mode || "hide"),
            o = "show" === n,
            a = t.direction || "left",
            r = "up" === a || "down" === a ? "top" : "left",
            h = "up" === a || "left" === a ? "pos" : "neg",
            l = {
                opacity: o ? 1 : 0
            };
        T.effects.save(i, s), i.show(), T.effects.createWrapper(i), a = t.distance || i["top" == r ? "outerHeight" : "outerWidth"](!0) / 2, o && i.css("opacity", 0).css(r, "pos" == h ? -a : a), l[r] = (o ? "pos" == h ? "+=" : "-=" : "pos" == h ? "-=" : "+=") + a, i.animate(l, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function() {
                "hide" === n && i.hide(), T.effects.restore(i, s), T.effects.removeWrapper(i), e()
            }
        })
    }, T.effects.effect.explode = function(t, e) {
        var i, s, n, o, a, r, h = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3,
            l = h,
            c = T(this),
            d = "show" === T.effects.setMode(c, t.mode || "hide"),
            u = c.show().css("visibility", "hidden").offset(),
            f = Math.ceil(c.outerWidth() / l),
            p = Math.ceil(c.outerHeight() / h),
            g = [];

        function m() {
            g.push(this), g.length === h * l && function() {
                c.css({
                    visibility: "visible"
                }), T(g).remove(), d || c.hide();
                e()
            }()
        }
        for (i = 0; i < h; i++)
            for (o = u.top + i * p, r = i - (h - 1) / 2, s = 0; s < l; s++) n = u.left + s * f, a = s - (l - 1) / 2, c.clone().appendTo("body").wrap("<div></div>").css({
                position: "absolute",
                visibility: "visible",
                left: -s * f,
                top: -i * p
            }).parent().addClass("ui-effects-explode").css({
                position: "absolute",
                overflow: "hidden",
                width: f,
                height: p,
                left: n + (d ? a * f : 0),
                top: o + (d ? r * p : 0),
                opacity: d ? 0 : 1
            }).animate({
                left: n + (d ? 0 : a * f),
                top: o + (d ? 0 : r * p),
                opacity: d ? 1 : 0
            }, t.duration || 500, t.easing, m)
    }, T.effects.effect.fade = function(t, e) {
        var i = T(this),
            s = T.effects.setMode(i, t.mode || "toggle");
        i.animate({
            opacity: s
        }, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: e
        })
    }, T.effects.effect.fold = function(t, e) {
        var i = T(this),
            s = ["position", "top", "bottom", "left", "right", "height", "width"],
            n = T.effects.setMode(i, t.mode || "hide"),
            o = "show" === n,
            a = "hide" === n,
            r = t.size || 15,
            h = /([0-9]+)%/.exec(r),
            l = !!t.horizFirst,
            c = o != l,
            d = c ? ["width", "height"] : ["height", "width"],
            u = t.duration / 2,
            f = {},
            p = {};
        T.effects.save(i, s), i.show(), n = T.effects.createWrapper(i).css({
            overflow: "hidden"
        }), c = c ? [n.width(), n.height()] : [n.height(), n.width()], h && (r = parseInt(h[1], 10) / 100 * c[a ? 0 : 1]), o && n.css(l ? {
            height: 0,
            width: r
        } : {
            height: r,
            width: 0
        }), f[d[0]] = o ? c[0] : r, p[d[1]] = o ? c[1] : 0, n.animate(f, u, t.easing).animate(p, u, t.easing, function() {
            a && i.hide(), T.effects.restore(i, s), T.effects.removeWrapper(i), e()
        })
    }, T.effects.effect.highlight = function(t, e) {
        var i = T(this),
            s = ["backgroundImage", "backgroundColor", "opacity"],
            n = T.effects.setMode(i, t.mode || "show"),
            o = {
                backgroundColor: i.css("backgroundColor")
            };
        "hide" === n && (o.opacity = 0), T.effects.save(i, s), i.show().css({
            backgroundImage: "none",
            backgroundColor: t.color || "#ffff99"
        }).animate(o, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function() {
                "hide" === n && i.hide(), T.effects.restore(i, s), e()
            }
        })
    }, T.effects.effect.size = function(o, t) {
        var e, a, r = T(this),
            i = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
            h = ["width", "height", "overflow"],
            s = ["fontSize"],
            l = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
            c = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
            n = T.effects.setMode(r, o.mode || "effect"),
            d = o.restore || "effect" !== n,
            u = o.scale || "both",
            f = o.origin || ["middle", "center"],
            p = r.css("position"),
            g = d ? i : ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
            m = {
                height: 0,
                width: 0,
                outerHeight: 0,
                outerWidth: 0
            };
        "show" === n && r.show(), e = {
            height: r.height(),
            width: r.width(),
            outerHeight: r.outerHeight(),
            outerWidth: r.outerWidth()
        }, "toggle" === o.mode && "show" === n ? (r.from = o.to || m, r.to = o.from || e) : (r.from = o.from || ("show" === n ? m : e), r.to = o.to || ("hide" === n ? m : e)), a = {
            from: {
                y: r.from.height / e.height,
                x: r.from.width / e.width
            },
            to: {
                y: r.to.height / e.height,
                x: r.to.width / e.width
            }
        }, "box" !== u && "both" !== u || (a.from.y !== a.to.y && (g = g.concat(l), r.from = T.effects.setTransition(r, l, a.from.y, r.from), r.to = T.effects.setTransition(r, l, a.to.y, r.to)), a.from.x !== a.to.x && (g = g.concat(c), r.from = T.effects.setTransition(r, c, a.from.x, r.from), r.to = T.effects.setTransition(r, c, a.to.x, r.to))), "content" !== u && "both" !== u || a.from.y !== a.to.y && (g = g.concat(s).concat(h), r.from = T.effects.setTransition(r, s, a.from.y, r.from), r.to = T.effects.setTransition(r, s, a.to.y, r.to)), T.effects.save(r, g), r.show(), T.effects.createWrapper(r), r.css("overflow", "hidden").css(r.from), f && (f = T.effects.getBaseline(f, e), r.from.top = (e.outerHeight - r.outerHeight()) * f.y, r.from.left = (e.outerWidth - r.outerWidth()) * f.x, r.to.top = (e.outerHeight - r.to.outerHeight) * f.y, r.to.left = (e.outerWidth - r.to.outerWidth) * f.x), r.css(r.from), "content" !== u && "both" !== u || (l = l.concat(["marginTop", "marginBottom"]).concat(s), c = c.concat(["marginLeft", "marginRight"]), h = i.concat(l).concat(c), r.find("*[width]").each(function() {
            var t = T(this),
                e = t.height(),
                i = t.width(),
                s = t.outerHeight(),
                n = t.outerWidth();
            d && T.effects.save(t, h), t.from = {
                height: e * a.from.y,
                width: i * a.from.x,
                outerHeight: s * a.from.y,
                outerWidth: n * a.from.x
            }, t.to = {
                height: e * a.to.y,
                width: i * a.to.x,
                outerHeight: e * a.to.y,
                outerWidth: i * a.to.x
            }, a.from.y !== a.to.y && (t.from = T.effects.setTransition(t, l, a.from.y, t.from), t.to = T.effects.setTransition(t, l, a.to.y, t.to)), a.from.x !== a.to.x && (t.from = T.effects.setTransition(t, c, a.from.x, t.from), t.to = T.effects.setTransition(t, c, a.to.x, t.to)), t.css(t.from), t.animate(t.to, o.duration, o.easing, function() {
                d && T.effects.restore(t, h)
            })
        })), r.animate(r.to, {
            queue: !1,
            duration: o.duration,
            easing: o.easing,
            complete: function() {
                0 === r.to.opacity && r.css("opacity", r.from.opacity), "hide" === n && r.hide(), T.effects.restore(r, g), d || ("static" === p ? r.css({
                    position: "relative",
                    top: r.to.top,
                    left: r.to.left
                }) : T.each(["top", "left"], function(n, t) {
                    r.css(t, function(t, e) {
                        var i = parseInt(e, 10),
                            s = n ? r.to.left : r.to.top;
                        return "auto" === e ? s + "px" : i + s + "px"
                    })
                })), T.effects.removeWrapper(r), t()
            }
        })
    }, T.effects.effect.scale = function(t, e) {
        var i = T(this),
            s = T.extend(!0, {}, t),
            n = T.effects.setMode(i, t.mode || "effect"),
            o = parseInt(t.percent, 10) || (0 === parseInt(t.percent, 10) || "hide" === n ? 0 : 100),
            a = t.direction || "both",
            r = t.origin,
            h = {
                height: i.height(),
                width: i.width(),
                outerHeight: i.outerHeight(),
                outerWidth: i.outerWidth()
            },
            l = "horizontal" !== a ? o / 100 : 1,
            o = "vertical" !== a ? o / 100 : 1;
        s.effect = "size", s.queue = !1, s.complete = e, "effect" !== n && (s.origin = r || ["middle", "center"], s.restore = !0), s.from = t.from || ("show" === n ? {
            height: 0,
            width: 0,
            outerHeight: 0,
            outerWidth: 0
        } : h), s.to = {
            height: h.height * l,
            width: h.width * o,
            outerHeight: h.outerHeight * l,
            outerWidth: h.outerWidth * o
        }, s.fade && ("show" === n && (s.from.opacity = 0, s.to.opacity = 1), "hide" === n && (s.from.opacity = 1, s.to.opacity = 0)), i.effect(s)
    }, T.effects.effect.puff = function(t, e) {
        var i = T(this),
            s = T.effects.setMode(i, t.mode || "hide"),
            n = "hide" === s,
            o = parseInt(t.percent, 10) || 150,
            a = o / 100,
            r = {
                height: i.height(),
                width: i.width(),
                outerHeight: i.outerHeight(),
                outerWidth: i.outerWidth()
            };
        T.extend(t, {
            effect: "scale",
            queue: !1,
            fade: !0,
            mode: s,
            complete: e,
            percent: n ? o : 100,
            from: n ? r : {
                height: r.height * a,
                width: r.width * a,
                outerHeight: r.outerHeight * a,
                outerWidth: r.outerWidth * a
            }
        }), i.effect(t)
    }, T.effects.effect.pulsate = function(t, e) {
        var i, s = T(this),
            n = T.effects.setMode(s, t.mode || "show"),
            o = "show" === n,
            a = "hide" === n,
            r = 2 * (t.times || 5) + (o || "hide" === n ? 1 : 0),
            h = t.duration / r,
            l = 0,
            c = s.queue(),
            n = c.length;
        for (!o && s.is(":visible") || (s.css("opacity", 0).show(), l = 1), i = 1; i < r; i++) s.animate({
            opacity: l
        }, h, t.easing), l = 1 - l;
        s.animate({
            opacity: l
        }, h, t.easing), s.queue(function() {
            a && s.hide(), e()
        }), 1 < n && c.splice.apply(c, [1, 0].concat(c.splice(n, 1 + r))), s.dequeue()
    }, T.effects.effect.shake = function(t, e) {
        var i, s = T(this),
            n = ["position", "top", "bottom", "left", "right", "height", "width"],
            o = T.effects.setMode(s, t.mode || "effect"),
            a = t.direction || "left",
            r = t.distance || 20,
            h = t.times || 3,
            l = 2 * h + 1,
            c = Math.round(t.duration / l),
            d = "up" === a || "down" === a ? "top" : "left",
            u = "up" === a || "left" === a,
            f = {},
            p = {},
            g = {},
            m = s.queue(),
            a = m.length;
        for (T.effects.save(s, n), s.show(), T.effects.createWrapper(s), f[d] = (u ? "-=" : "+=") + r, p[d] = (u ? "+=" : "-=") + 2 * r, g[d] = (u ? "-=" : "+=") + 2 * r, s.animate(f, c, t.easing), i = 1; i < h; i++) s.animate(p, c, t.easing).animate(g, c, t.easing);
        s.animate(p, c, t.easing).animate(f, c / 2, t.easing).queue(function() {
            "hide" === o && s.hide(), T.effects.restore(s, n), T.effects.removeWrapper(s), e()
        }), 1 < a && m.splice.apply(m, [1, 0].concat(m.splice(a, 1 + l))), s.dequeue()
    }, T.effects.effect.slide = function(t, e) {
        var i = T(this),
            s = ["position", "top", "bottom", "left", "right", "width", "height"],
            n = T.effects.setMode(i, t.mode || "show"),
            o = "show" === n,
            a = t.direction || "left",
            r = "up" === a || "down" === a ? "top" : "left",
            h = "up" === a || "left" === a,
            l = {};
        T.effects.save(i, s), i.show(), a = t.distance || i["top" == r ? "outerHeight" : "outerWidth"](!0), T.effects.createWrapper(i).css({
            overflow: "hidden"
        }), o && i.css(r, h ? isNaN(a) ? "-" + a : -a : a), l[r] = (o ? h ? "+=" : "-=" : h ? "-=" : "+=") + a, i.animate(l, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function() {
                "hide" === n && i.hide(), T.effects.restore(i, s), T.effects.removeWrapper(i), e()
            }
        })
    }, T.effects.effect.transfer = function(t, e) {
        var i = T(this),
            s = T(t.to),
            n = "fixed" === s.css("position"),
            o = T("body"),
            a = n ? o.scrollTop() : 0,
            r = n ? o.scrollLeft() : 0,
            o = s.offset(),
            o = {
                top: o.top - a,
                left: o.left - r,
                height: s.innerHeight(),
                width: s.innerWidth()
            },
            s = i.offset(),
            h = T("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(t.className).css({
                top: s.top - a,
                left: s.left - r,
                height: i.innerHeight(),
                width: i.innerWidth(),
                position: n ? "fixed" : "absolute"
            }).animate(o, t.duration, t.easing, function() {
                h.remove(), e()
            })
    }
});