function xa(t, e) {
    const n = Object.create(null),
        s = t.split(",");
    for (let r = 0; r < s.length; r++) n[s[r]] = !0;
    return e ? r => !!n[r.toLowerCase()] : r => !!n[r]
}
const qg = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
    zg = xa(qg);

function Zu(t) {
    return !!t || t === ""
}

function La(t) {
    if (Y(t)) {
        const e = {};
        for (let n = 0; n < t.length; n++) {
            const s = t[n],
                r = xe(s) ? Yg(s) : La(s);
            if (r)
                for (const i in r) e[i] = r[i]
        }
        return e
    } else {
        if (xe(t)) return t;
        if (De(t)) return t
    }
}
const Gg = /;(?![^(]*\))/g,
    Wg = /:(.+)/;

function Yg(t) {
    const e = {};
    return t.split(Gg).forEach(n => {
        if (n) {
            const s = n.split(Wg);
            s.length > 1 && (e[s[0].trim()] = s[1].trim())
        }
    }), e
}

function Oa(t) {
    let e = "";
    if (xe(t)) e = t;
    else if (Y(t))
        for (let n = 0; n < t.length; n++) {
            const s = Oa(t[n]);
            s && (e += s + " ")
        } else if (De(t))
            for (const n in t) t[n] && (e += n + " ");
    return e.trim()
}
const xb = t => xe(t) ? t : t == null ? "" : Y(t) || De(t) && (t.toString === sh || !Z(t.toString)) ? JSON.stringify(t, eh, 2) : String(t),
    eh = (t, e) => e && e.__v_isRef ? eh(t, e.value) : Fn(e) ? {
        [`Map(${e.size})`]: [...e.entries()].reduce((n, [s, r]) => (n[`${s} =>`] = r, n), {})
    } : th(e) ? {
        [`Set(${e.size})`]: [...e.values()]
    } : De(e) && !Y(e) && !rh(e) ? String(e) : e,
    ge = {},
    On = [],
    mt = () => {},
    Xg = () => !1,
    Qg = /^on[^a-z]/,
    Ti = t => Qg.test(t),
    Fa = t => t.startsWith("onUpdate:"),
    Ge = Object.assign,
    Ba = (t, e) => {
        const n = t.indexOf(e);
        n > -1 && t.splice(n, 1)
    },
    Jg = Object.prototype.hasOwnProperty,
    re = (t, e) => Jg.call(t, e),
    Y = Array.isArray,
    Fn = t => bi(t) === "[object Map]",
    th = t => bi(t) === "[object Set]",
    Z = t => typeof t == "function",
    xe = t => typeof t == "string",
    Ua = t => typeof t == "symbol",
    De = t => t !== null && typeof t == "object",
    nh = t => De(t) && Z(t.then) && Z(t.catch),
    sh = Object.prototype.toString,
    bi = t => sh.call(t),
    Zg = t => bi(t).slice(8, -1),
    rh = t => bi(t) === "[object Object]",
    Va = t => xe(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t,
    xr = xa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
    Ci = t => {
        const e = Object.create(null);
        return n => e[n] || (e[n] = t(n))
    },
    ep = /-(\w)/g,
    _t = Ci(t => t.replace(ep, (e, n) => n ? n.toUpperCase() : "")),
    tp = /\B([A-Z])/g,
    os = Ci(t => t.replace(tp, "-$1").toLowerCase()),
    Ii = Ci(t => t.charAt(0).toUpperCase() + t.slice(1)),
    uo = Ci(t => t ? `on${Ii(t)}` : ""),
    Fs = (t, e) => !Object.is(t, e),
    Lr = (t, e) => {
        for (let n = 0; n < t.length; n++) t[n](e)
    },
    qr = (t, e, n) => {
        Object.defineProperty(t, e, {
            configurable: !0,
            enumerable: !1,
            value: n
        })
    },
    Oo = t => {
        const e = parseFloat(t);
        return isNaN(e) ? t : e
    };
let al;
const np = () => al || (al = typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : typeof window != "undefined" ? window : typeof global != "undefined" ? global : {});
let Dt;
class ih {
    constructor(e = !1) {
        this.active = !0, this.effects = [], this.cleanups = [], !e && Dt && (this.parent = Dt, this.index = (Dt.scopes || (Dt.scopes = [])).push(this) - 1)
    }
    run(e) {
        if (this.active) try {
            return Dt = this, e()
        } finally {
            Dt = this.parent
        }
    }
    on() {
        Dt = this
    }
    off() {
        Dt = this.parent
    }
    stop(e) {
        if (this.active) {
            let n, s;
            for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop();
            for (n = 0, s = this.cleanups.length; n < s; n++) this.cleanups[n]();
            if (this.scopes)
                for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0);
            if (this.parent && !e) {
                const r = this.parent.scopes.pop();
                r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index)
            }
            this.active = !1
        }
    }
}

function sp(t) {
    return new ih(t)
}

function rp(t, e = Dt) {
    e && e.active && e.effects.push(t)
}
const $a = t => {
        const e = new Set(t);
        return e.w = 0, e.n = 0, e
    },
    oh = t => (t.w & Wt) > 0,
    ah = t => (t.n & Wt) > 0,
    ip = ({
        deps: t
    }) => {
        if (t.length)
            for (let e = 0; e < t.length; e++) t[e].w |= Wt
    },
    op = t => {
        const {
            deps: e
        } = t;
        if (e.length) {
            let n = 0;
            for (let s = 0; s < e.length; s++) {
                const r = e[s];
                oh(r) && !ah(r) ? r.delete(t) : e[n++] = r, r.w &= ~Wt, r.n &= ~Wt
            }
            e.length = n
        }
    },
    Fo = new WeakMap;
let bs = 0,
    Wt = 1;
const Bo = 30;
let It;
const hn = Symbol(""),
    Uo = Symbol("");
class ja {
    constructor(e, n = null, s) {
        this.fn = e, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, rp(this, s)
    }
    run() {
        if (!this.active) return this.fn();
        let e = It,
            n = Kt;
        for (; e;) {
            if (e === this) return;
            e = e.parent
        }
        try {
            return this.parent = It, It = this, Kt = !0, Wt = 1 << ++bs, bs <= Bo ? ip(this) : cl(this), this.fn()
        } finally {
            bs <= Bo && op(this), Wt = 1 << --bs, It = this.parent, Kt = n, this.parent = void 0
        }
    }
    stop() {
        this.active && (cl(this), this.onStop && this.onStop(), this.active = !1)
    }
}

function cl(t) {
    const {
        deps: e
    } = t;
    if (e.length) {
        for (let n = 0; n < e.length; n++) e[n].delete(t);
        e.length = 0
    }
}
let Kt = !0;
const ch = [];

function as() {
    ch.push(Kt), Kt = !1
}

function cs() {
    const t = ch.pop();
    Kt = t === void 0 ? !0 : t
}

function at(t, e, n) {
    if (Kt && It) {
        let s = Fo.get(t);
        s || Fo.set(t, s = new Map);
        let r = s.get(n);
        r || s.set(n, r = $a()), lh(r)
    }
}

function lh(t, e) {
    let n = !1;
    bs <= Bo ? ah(t) || (t.n |= Wt, n = !oh(t)) : n = !t.has(It), n && (t.add(It), It.deps.push(t))
}

function xt(t, e, n, s, r, i) {
    const o = Fo.get(t);
    if (!o) return;
    let a = [];
    if (e === "clear") a = [...o.values()];
    else if (n === "length" && Y(t)) o.forEach((c, l) => {
        (l === "length" || l >= s) && a.push(c)
    });
    else switch (n !== void 0 && a.push(o.get(n)), e) {
        case "add":
            Y(t) ? Va(n) && a.push(o.get("length")) : (a.push(o.get(hn)), Fn(t) && a.push(o.get(Uo)));
            break;
        case "delete":
            Y(t) || (a.push(o.get(hn)), Fn(t) && a.push(o.get(Uo)));
            break;
        case "set":
            Fn(t) && a.push(o.get(hn));
            break
    }
    if (a.length === 1) a[0] && Vo(a[0]);
    else {
        const c = [];
        for (const l of a) l && c.push(...l);
        Vo($a(c))
    }
}

function Vo(t, e) {
    for (const n of Y(t) ? t : [...t])(n !== It || n.allowRecurse) && (n.scheduler ? n.scheduler() : n.run())
}
const ap = xa("__proto__,__v_isRef,__isVue"),
    uh = new Set(Object.getOwnPropertyNames(Symbol).map(t => Symbol[t]).filter(Ua)),
    cp = Ha(),
    lp = Ha(!1, !0),
    up = Ha(!0),
    ll = hp();

function hp() {
    const t = {};
    return ["includes", "indexOf", "lastIndexOf"].forEach(e => {
        t[e] = function(...n) {
            const s = ae(this);
            for (let i = 0, o = this.length; i < o; i++) at(s, "get", i + "");
            const r = s[e](...n);
            return r === -1 || r === !1 ? s[e](...n.map(ae)) : r
        }
    }), ["push", "pop", "shift", "unshift", "splice"].forEach(e => {
        t[e] = function(...n) {
            as();
            const s = ae(this)[e].apply(this, n);
            return cs(), s
        }
    }), t
}

function Ha(t = !1, e = !1) {
    return function(s, r, i) {
        if (r === "__v_isReactive") return !t;
        if (r === "__v_isReadonly") return t;
        if (r === "__v_isShallow") return e;
        if (r === "__v_raw" && i === (t ? e ? Ap : ph : e ? gh : dh).get(s)) return s;
        const o = Y(s);
        if (!t && o && re(ll, r)) return Reflect.get(ll, r, i);
        const a = Reflect.get(s, r, i);
        return (Ua(r) ? uh.has(r) : ap(r)) || (t || at(s, "get", r), e) ? a : Be(a) ? !o || !Va(r) ? a.value : a : De(a) ? t ? mh(a) : rr(a) : a
    }
}
const fp = hh(),
    dp = hh(!0);

function hh(t = !1) {
    return function(n, s, r, i) {
        let o = n[s];
        if (Bs(o) && Be(o) && !Be(r)) return !1;
        if (!t && !Bs(r) && (yh(r) || (r = ae(r), o = ae(o)), !Y(n) && Be(o) && !Be(r))) return o.value = r, !0;
        const a = Y(n) && Va(s) ? Number(s) < n.length : re(n, s),
            c = Reflect.set(n, s, r, i);
        return n === ae(i) && (a ? Fs(r, o) && xt(n, "set", s, r) : xt(n, "add", s, r)), c
    }
}

function gp(t, e) {
    const n = re(t, e);
    t[e];
    const s = Reflect.deleteProperty(t, e);
    return s && n && xt(t, "delete", e, void 0), s
}

function pp(t, e) {
    const n = Reflect.has(t, e);
    return (!Ua(e) || !uh.has(e)) && at(t, "has", e), n
}

function mp(t) {
    return at(t, "iterate", Y(t) ? "length" : hn), Reflect.ownKeys(t)
}
const fh = {
        get: cp,
        set: fp,
        deleteProperty: gp,
        has: pp,
        ownKeys: mp
    },
    yp = {
        get: up,
        set(t, e) {
            return !0
        },
        deleteProperty(t, e) {
            return !0
        }
    },
    wp = Ge({}, fh, {
        get: lp,
        set: dp
    }),
    Ka = t => t,
    Si = t => Reflect.getPrototypeOf(t);

function Tr(t, e, n = !1, s = !1) {
    t = t.__v_raw;
    const r = ae(t),
        i = ae(e);
    e !== i && !n && at(r, "get", e), !n && at(r, "get", i);
    const {
        has: o
    } = Si(r), a = s ? Ka : n ? Wa : Us;
    if (o.call(r, e)) return a(t.get(e));
    if (o.call(r, i)) return a(t.get(i));
    t !== r && t.get(e)
}

function br(t, e = !1) {
    const n = this.__v_raw,
        s = ae(n),
        r = ae(t);
    return t !== r && !e && at(s, "has", t), !e && at(s, "has", r), t === r ? n.has(t) : n.has(t) || n.has(r)
}

function Cr(t, e = !1) {
    return t = t.__v_raw, !e && at(ae(t), "iterate", hn), Reflect.get(t, "size", t)
}

function ul(t) {
    t = ae(t);
    const e = ae(this);
    return Si(e).has.call(e, t) || (e.add(t), xt(e, "add", t, t)), this
}

function hl(t, e) {
    e = ae(e);
    const n = ae(this),
        {
            has: s,
            get: r
        } = Si(n);
    let i = s.call(n, t);
    i || (t = ae(t), i = s.call(n, t));
    const o = r.call(n, t);
    return n.set(t, e), i ? Fs(e, o) && xt(n, "set", t, e) : xt(n, "add", t, e), this
}

function fl(t) {
    const e = ae(this),
        {
            has: n,
            get: s
        } = Si(e);
    let r = n.call(e, t);
    r || (t = ae(t), r = n.call(e, t)), s && s.call(e, t);
    const i = e.delete(t);
    return r && xt(e, "delete", t, void 0), i
}

function dl() {
    const t = ae(this),
        e = t.size !== 0,
        n = t.clear();
    return e && xt(t, "clear", void 0, void 0), n
}

function Ir(t, e) {
    return function(s, r) {
        const i = this,
            o = i.__v_raw,
            a = ae(o),
            c = e ? Ka : t ? Wa : Us;
        return !t && at(a, "iterate", hn), o.forEach((l, u) => s.call(r, c(l), c(u), i))
    }
}

function Sr(t, e, n) {
    return function(...s) {
        const r = this.__v_raw,
            i = ae(r),
            o = Fn(i),
            a = t === "entries" || t === Symbol.iterator && o,
            c = t === "keys" && o,
            l = r[t](...s),
            u = n ? Ka : e ? Wa : Us;
        return !e && at(i, "iterate", c ? Uo : hn), {
            next() {
                const {
                    value: h,
                    done: f
                } = l.next();
                return f ? {
                    value: h,
                    done: f
                } : {
                    value: a ? [u(h[0]), u(h[1])] : u(h),
                    done: f
                }
            },
            [Symbol.iterator]() {
                return this
            }
        }
    }
}

function Ft(t) {
    return function(...e) {
        return t === "delete" ? !1 : this
    }
}

function vp() {
    const t = {
            get(i) {
                return Tr(this, i)
            },
            get size() {
                return Cr(this)
            },
            has: br,
            add: ul,
            set: hl,
            delete: fl,
            clear: dl,
            forEach: Ir(!1, !1)
        },
        e = {
            get(i) {
                return Tr(this, i, !1, !0)
            },
            get size() {
                return Cr(this)
            },
            has: br,
            add: ul,
            set: hl,
            delete: fl,
            clear: dl,
            forEach: Ir(!1, !0)
        },
        n = {
            get(i) {
                return Tr(this, i, !0)
            },
            get size() {
                return Cr(this, !0)
            },
            has(i) {
                return br.call(this, i, !0)
            },
            add: Ft("add"),
            set: Ft("set"),
            delete: Ft("delete"),
            clear: Ft("clear"),
            forEach: Ir(!0, !1)
        },
        s = {
            get(i) {
                return Tr(this, i, !0, !0)
            },
            get size() {
                return Cr(this, !0)
            },
            has(i) {
                return br.call(this, i, !0)
            },
            add: Ft("add"),
            set: Ft("set"),
            delete: Ft("delete"),
            clear: Ft("clear"),
            forEach: Ir(!0, !0)
        };
    return ["keys", "values", "entries", Symbol.iterator].forEach(i => {
        t[i] = Sr(i, !1, !1), n[i] = Sr(i, !0, !1), e[i] = Sr(i, !1, !0), s[i] = Sr(i, !0, !0)
    }), [t, n, e, s]
}
const [Ep, Tp, bp, Cp] = vp();

function qa(t, e) {
    const n = e ? t ? Cp : bp : t ? Tp : Ep;
    return (s, r, i) => r === "__v_isReactive" ? !t : r === "__v_isReadonly" ? t : r === "__v_raw" ? s : Reflect.get(re(n, r) && r in s ? n : s, r, i)
}
const Ip = {
        get: qa(!1, !1)
    },
    Sp = {
        get: qa(!1, !0)
    },
    _p = {
        get: qa(!0, !1)
    },
    dh = new WeakMap,
    gh = new WeakMap,
    ph = new WeakMap,
    Ap = new WeakMap;

function Np(t) {
    switch (t) {
        case "Object":
        case "Array":
            return 1;
        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
            return 2;
        default:
            return 0
    }
}

function Rp(t) {
    return t.__v_skip || !Object.isExtensible(t) ? 0 : Np(Zg(t))
}

function rr(t) {
    return Bs(t) ? t : za(t, !1, fh, Ip, dh)
}

function Dp(t) {
    return za(t, !1, wp, Sp, gh)
}

function mh(t) {
    return za(t, !0, yp, _p, ph)
}

function za(t, e, n, s, r) {
    if (!De(t) || t.__v_raw && !(e && t.__v_isReactive)) return t;
    const i = r.get(t);
    if (i) return i;
    const o = Rp(t);
    if (o === 0) return t;
    const a = new Proxy(t, o === 2 ? s : n);
    return r.set(t, a), a
}

function Bn(t) {
    return Bs(t) ? Bn(t.__v_raw) : !!(t && t.__v_isReactive)
}

function Bs(t) {
    return !!(t && t.__v_isReadonly)
}

function yh(t) {
    return !!(t && t.__v_isShallow)
}

function wh(t) {
    return Bn(t) || Bs(t)
}

function ae(t) {
    const e = t && t.__v_raw;
    return e ? ae(e) : t
}

function Ga(t) {
    return qr(t, "__v_skip", !0), t
}
const Us = t => De(t) ? rr(t) : t,
    Wa = t => De(t) ? mh(t) : t;

function vh(t) {
    Kt && It && (t = ae(t), lh(t.dep || (t.dep = $a())))
}

function Eh(t, e) {
    t = ae(t), t.dep && Vo(t.dep)
}

function Be(t) {
    return !!(t && t.__v_isRef === !0)
}

function Th(t) {
    return bh(t, !1)
}

function Pp(t) {
    return bh(t, !0)
}

function bh(t, e) {
    return Be(t) ? t : new Mp(t, e)
}
class Mp {
    constructor(e, n) {
        this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? e : ae(e), this._value = n ? e : Us(e)
    }
    get value() {
        return vh(this), this._value
    }
    set value(e) {
        e = this.__v_isShallow ? e : ae(e), Fs(e, this._rawValue) && (this._rawValue = e, this._value = this.__v_isShallow ? e : Us(e), Eh(this))
    }
}

function _s(t) {
    return Be(t) ? t.value : t
}
const kp = {
    get: (t, e, n) => _s(Reflect.get(t, e, n)),
    set: (t, e, n, s) => {
        const r = t[e];
        return Be(r) && !Be(n) ? (r.value = n, !0) : Reflect.set(t, e, n, s)
    }
};

function Ch(t) {
    return Bn(t) ? t : new Proxy(t, kp)
}
class xp {
    constructor(e, n, s, r) {
        this._setter = n, this.dep = void 0, this.__v_isRef = !0, this._dirty = !0, this.effect = new ja(e, () => {
            this._dirty || (this._dirty = !0, Eh(this))
        }), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = s
    }
    get value() {
        const e = ae(this);
        return vh(e), (e._dirty || !e._cacheable) && (e._dirty = !1, e._value = e.effect.run()), e._value
    }
    set value(e) {
        this._setter(e)
    }
}

function Lp(t, e, n = !1) {
    let s, r;
    const i = Z(t);
    return i ? (s = t, r = mt) : (s = t.get, r = t.set), new xp(s, r, i || !r, n)
}
Promise.resolve();

function qt(t, e, n, s) {
    let r;
    try {
        r = s ? t(...s) : t()
    } catch (i) {
        _i(i, e, n)
    }
    return r
}

function dt(t, e, n, s) {
    if (Z(t)) {
        const i = qt(t, e, n, s);
        return i && nh(i) && i.catch(o => {
            _i(o, e, n)
        }), i
    }
    const r = [];
    for (let i = 0; i < t.length; i++) r.push(dt(t[i], e, n, s));
    return r
}

function _i(t, e, n, s = !0) {
    const r = e ? e.vnode : null;
    if (e) {
        let i = e.parent;
        const o = e.proxy,
            a = n;
        for (; i;) {
            const l = i.ec;
            if (l) {
                for (let u = 0; u < l.length; u++)
                    if (l[u](t, o, a) === !1) return
            }
            i = i.parent
        }
        const c = e.appContext.config.errorHandler;
        if (c) {
            qt(c, null, 10, [t, o, a]);
            return
        }
    }
    Op(t, n, r, s)
}

function Op(t, e, n, s = !0) {
    console.error(t)
}
let zr = !1,
    $o = !1;
const it = [];
let Pt = 0;
const As = [];
let Cs = null,
    Dn = 0;
const Ns = [];
let Vt = null,
    Pn = 0;
const Ih = Promise.resolve();
let Ya = null,
    jo = null;

function Sh(t) {
    const e = Ya || Ih;
    return t ? e.then(this ? t.bind(this) : t) : e
}

function Fp(t) {
    let e = Pt + 1,
        n = it.length;
    for (; e < n;) {
        const s = e + n >>> 1;
        Vs(it[s]) < t ? e = s + 1 : n = s
    }
    return e
}

function _h(t) {
    (!it.length || !it.includes(t, zr && t.allowRecurse ? Pt + 1 : Pt)) && t !== jo && (t.id == null ? it.push(t) : it.splice(Fp(t.id), 0, t), Ah())
}

function Ah() {
    !zr && !$o && ($o = !0, Ya = Ih.then(Dh))
}

function Bp(t) {
    const e = it.indexOf(t);
    e > Pt && it.splice(e, 1)
}

function Nh(t, e, n, s) {
    Y(t) ? n.push(...t) : (!e || !e.includes(t, t.allowRecurse ? s + 1 : s)) && n.push(t), Ah()
}

function Up(t) {
    Nh(t, Cs, As, Dn)
}

function Vp(t) {
    Nh(t, Vt, Ns, Pn)
}

function Xa(t, e = null) {
    if (As.length) {
        for (jo = e, Cs = [...new Set(As)], As.length = 0, Dn = 0; Dn < Cs.length; Dn++) Cs[Dn]();
        Cs = null, Dn = 0, jo = null, Xa(t, e)
    }
}

function Rh(t) {
    if (Ns.length) {
        const e = [...new Set(Ns)];
        if (Ns.length = 0, Vt) {
            Vt.push(...e);
            return
        }
        for (Vt = e, Vt.sort((n, s) => Vs(n) - Vs(s)), Pn = 0; Pn < Vt.length; Pn++) Vt[Pn]();
        Vt = null, Pn = 0
    }
}
const Vs = t => t.id == null ? 1 / 0 : t.id;

function Dh(t) {
    $o = !1, zr = !0, Xa(t), it.sort((n, s) => Vs(n) - Vs(s));
    const e = mt;
    try {
        for (Pt = 0; Pt < it.length; Pt++) {
            const n = it[Pt];
            n && n.active !== !1 && qt(n, null, 14)
        }
    } finally {
        Pt = 0, it.length = 0, Rh(), zr = !1, Ya = null, (it.length || As.length || Ns.length) && Dh(t)
    }
}

function $p(t, e, ...n) {
    const s = t.vnode.props || ge;
    let r = n;
    const i = e.startsWith("update:"),
        o = i && e.slice(7);
    if (o && o in s) {
        const u = `${o==="modelValue"?"model":o}Modifiers`,
            {
                number: h,
                trim: f
            } = s[u] || ge;
        f ? r = n.map(g => g.trim()) : h && (r = n.map(Oo))
    }
    let a, c = s[a = uo(e)] || s[a = uo(_t(e))];
    !c && i && (c = s[a = uo(os(e))]), c && dt(c, t, 6, r);
    const l = s[a + "Once"];
    if (l) {
        if (!t.emitted) t.emitted = {};
        else if (t.emitted[a]) return;
        t.emitted[a] = !0, dt(l, t, 6, r)
    }
}

function Ph(t, e, n = !1) {
    const s = e.emitsCache,
        r = s.get(t);
    if (r !== void 0) return r;
    const i = t.emits;
    let o = {},
        a = !1;
    if (!Z(t)) {
        const c = l => {
            const u = Ph(l, e, !0);
            u && (a = !0, Ge(o, u))
        };
        !n && e.mixins.length && e.mixins.forEach(c), t.extends && c(t.extends), t.mixins && t.mixins.forEach(c)
    }
    return !i && !a ? (s.set(t, null), null) : (Y(i) ? i.forEach(c => o[c] = null) : Ge(o, i), s.set(t, o), o)
}

function Qa(t, e) {
    return !t || !Ti(e) ? !1 : (e = e.slice(2).replace(/Once$/, ""), re(t, e[0].toLowerCase() + e.slice(1)) || re(t, os(e)) || re(t, e))
}
let ot = null,
    Ai = null;

function Gr(t) {
    const e = ot;
    return ot = t, Ai = t && t.type.__scopeId || null, e
}

function Lb(t) {
    Ai = t
}

function Ob() {
    Ai = null
}

function jp(t, e = ot, n) {
    if (!e || t._n) return t;
    const s = (...r) => {
        s._d && Il(-1);
        const i = Gr(e),
            o = t(...r);
        return Gr(i), s._d && Il(1), o
    };
    return s._n = !0, s._c = !0, s._d = !0, s
}

function ho(t) {
    const {
        type: e,
        vnode: n,
        proxy: s,
        withProxy: r,
        props: i,
        propsOptions: [o],
        slots: a,
        attrs: c,
        emit: l,
        render: u,
        renderCache: h,
        data: f,
        setupState: g,
        ctx: m,
        inheritAttrs: w
    } = t;
    let C, v;
    const _ = Gr(t);
    try {
        if (n.shapeFlag & 4) {
            const A = r || s;
            C = bt(u.call(A, A, h, i, g, f, m)), v = c
        } else {
            const A = e;
            C = bt(A.length > 1 ? A(i, {
                attrs: c,
                slots: a,
                emit: l
            }) : A(i, null)), v = e.props ? c : Hp(c)
        }
    } catch (A) {
        Rs.length = 0, _i(A, t, 1), C = Qe(wt)
    }
    let R = C;
    if (v && w !== !1) {
        const A = Object.keys(v),
            {
                shapeFlag: K
            } = R;
        A.length && K & 7 && (o && A.some(Fa) && (v = Kp(v, o)), R = Hn(R, v))
    }
    return n.dirs && (R.dirs = R.dirs ? R.dirs.concat(n.dirs) : n.dirs), n.transition && (R.transition = n.transition), C = R, Gr(_), C
}
const Hp = t => {
        let e;
        for (const n in t)(n === "class" || n === "style" || Ti(n)) && ((e || (e = {}))[n] = t[n]);
        return e
    },
    Kp = (t, e) => {
        const n = {};
        for (const s in t)(!Fa(s) || !(s.slice(9) in e)) && (n[s] = t[s]);
        return n
    };

function qp(t, e, n) {
    const {
        props: s,
        children: r,
        component: i
    } = t, {
        props: o,
        children: a,
        patchFlag: c
    } = e, l = i.emitsOptions;
    if (e.dirs || e.transition) return !0;
    if (n && c >= 0) {
        if (c & 1024) return !0;
        if (c & 16) return s ? gl(s, o, l) : !!o;
        if (c & 8) {
            const u = e.dynamicProps;
            for (let h = 0; h < u.length; h++) {
                const f = u[h];
                if (o[f] !== s[f] && !Qa(l, f)) return !0
            }
        }
    } else return (r || a) && (!a || !a.$stable) ? !0 : s === o ? !1 : s ? o ? gl(s, o, l) : !0 : !!o;
    return !1
}

function gl(t, e, n) {
    const s = Object.keys(e);
    if (s.length !== Object.keys(t).length) return !0;
    for (let r = 0; r < s.length; r++) {
        const i = s[r];
        if (e[i] !== t[i] && !Qa(n, i)) return !0
    }
    return !1
}

function zp({
    vnode: t,
    parent: e
}, n) {
    for (; e && e.subTree === t;)(t = e.vnode).el = n, e = e.parent
}
const Gp = t => t.__isSuspense;

function Wp(t, e) {
    e && e.pendingBranch ? Y(t) ? e.effects.push(...t) : e.effects.push(t) : Vp(t)
}

function Or(t, e) {
    if (ke) {
        let n = ke.provides;
        const s = ke.parent && ke.parent.provides;
        s === n && (n = ke.provides = Object.create(s)), n[t] = e
    }
}

function St(t, e, n = !1) {
    const s = ke || ot;
    if (s) {
        const r = s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides;
        if (r && t in r) return r[t];
        if (arguments.length > 1) return n && Z(e) ? e.call(s.proxy) : e
    }
}
const pl = {};

function Fr(t, e, n) {
    return Mh(t, e, n)
}

function Mh(t, e, {
    immediate: n,
    deep: s,
    flush: r,
    onTrack: i,
    onTrigger: o
} = ge) {
    const a = ke;
    let c, l = !1,
        u = !1;
    if (Be(t) ? (c = () => t.value, l = yh(t)) : Bn(t) ? (c = () => t, s = !0) : Y(t) ? (u = !0, l = t.some(Bn), c = () => t.map(v => {
            if (Be(v)) return v.value;
            if (Bn(v)) return cn(v);
            if (Z(v)) return qt(v, a, 2)
        })) : Z(t) ? e ? c = () => qt(t, a, 2) : c = () => {
            if (!(a && a.isUnmounted)) return h && h(), dt(t, a, 3, [f])
        } : c = mt, e && s) {
        const v = c;
        c = () => cn(v())
    }
    let h, f = v => {
        h = C.onStop = () => {
            qt(v, a, 4)
        }
    };
    if ($s) return f = mt, e ? n && dt(e, a, 3, [c(), u ? [] : void 0, f]) : c(), mt;
    let g = u ? [] : pl;
    const m = () => {
        if (!!C.active)
            if (e) {
                const v = C.run();
                (s || l || (u ? v.some((_, R) => Fs(_, g[R])) : Fs(v, g))) && (h && h(), dt(e, a, 3, [v, g === pl ? void 0 : g, f]), g = v)
            } else C.run()
    };
    m.allowRecurse = !!e;
    let w;
    r === "sync" ? w = m : r === "post" ? w = () => Ze(m, a && a.suspense) : w = () => {
        !a || a.isMounted ? Up(m) : m()
    };
    const C = new ja(c, w);
    return e ? n ? m() : g = C.run() : r === "post" ? Ze(C.run.bind(C), a && a.suspense) : C.run(), () => {
        C.stop(), a && a.scope && Ba(a.scope.effects, C)
    }
}

function Yp(t, e, n) {
    const s = this.proxy,
        r = xe(t) ? t.includes(".") ? kh(s, t) : () => s[t] : t.bind(s, s);
    let i;
    Z(e) ? i = e : (i = e.handler, n = e);
    const o = ke;
    Kn(this);
    const a = Mh(r, i.bind(s), n);
    return o ? Kn(o) : dn(), a
}

function kh(t, e) {
    const n = e.split(".");
    return () => {
        let s = t;
        for (let r = 0; r < n.length && s; r++) s = s[n[r]];
        return s
    }
}

function cn(t, e) {
    if (!De(t) || t.__v_skip || (e = e || new Set, e.has(t))) return t;
    if (e.add(t), Be(t)) cn(t.value, e);
    else if (Y(t))
        for (let n = 0; n < t.length; n++) cn(t[n], e);
    else if (th(t) || Fn(t)) t.forEach(n => {
        cn(n, e)
    });
    else if (rh(t))
        for (const n in t) cn(t[n], e);
    return t
}

function Xp() {
    const t = {
        isMounted: !1,
        isLeaving: !1,
        isUnmounting: !1,
        leavingVNodes: new Map
    };
    return Bh(() => {
        t.isMounted = !0
    }), Uh(() => {
        t.isUnmounting = !0
    }), t
}
const ht = [Function, Array],
    Qp = {
        name: "BaseTransition",
        props: {
            mode: String,
            appear: Boolean,
            persisted: Boolean,
            onBeforeEnter: ht,
            onEnter: ht,
            onAfterEnter: ht,
            onEnterCancelled: ht,
            onBeforeLeave: ht,
            onLeave: ht,
            onAfterLeave: ht,
            onLeaveCancelled: ht,
            onBeforeAppear: ht,
            onAppear: ht,
            onAfterAppear: ht,
            onAppearCancelled: ht
        },
        setup(t, {
            slots: e
        }) {
            const n = Om(),
                s = Xp();
            let r;
            return () => {
                const i = e.default && Lh(e.default(), !0);
                if (!i || !i.length) return;
                const o = ae(t),
                    {
                        mode: a
                    } = o,
                    c = i[0];
                if (s.isLeaving) return fo(c);
                const l = ml(c);
                if (!l) return fo(c);
                const u = Ho(l, o, s, n);
                Ko(l, u);
                const h = n.subTree,
                    f = h && ml(h);
                let g = !1;
                const {
                    getTransitionKey: m
                } = l.type;
                if (m) {
                    const w = m();
                    r === void 0 ? r = w : w !== r && (r = w, g = !0)
                }
                if (f && f.type !== wt && (!on(l, f) || g)) {
                    const w = Ho(f, o, s, n);
                    if (Ko(f, w), a === "out-in") return s.isLeaving = !0, w.afterLeave = () => {
                        s.isLeaving = !1, n.update()
                    }, fo(c);
                    a === "in-out" && l.type !== wt && (w.delayLeave = (C, v, _) => {
                        const R = xh(s, f);
                        R[String(f.key)] = f, C._leaveCb = () => {
                            v(), C._leaveCb = void 0, delete u.delayedLeave
                        }, u.delayedLeave = _
                    })
                }
                return c
            }
        }
    },
    Jp = Qp;

function xh(t, e) {
    const {
        leavingVNodes: n
    } = t;
    let s = n.get(e.type);
    return s || (s = Object.create(null), n.set(e.type, s)), s
}

function Ho(t, e, n, s) {
    const {
        appear: r,
        mode: i,
        persisted: o = !1,
        onBeforeEnter: a,
        onEnter: c,
        onAfterEnter: l,
        onEnterCancelled: u,
        onBeforeLeave: h,
        onLeave: f,
        onAfterLeave: g,
        onLeaveCancelled: m,
        onBeforeAppear: w,
        onAppear: C,
        onAfterAppear: v,
        onAppearCancelled: _
    } = e, R = String(t.key), A = xh(n, t), K = (U, ie) => {
        U && dt(U, s, 9, ie)
    }, X = {
        mode: i,
        persisted: o,
        beforeEnter(U) {
            let ie = a;
            if (!n.isMounted)
                if (r) ie = w || a;
                else return;
            U._leaveCb && U._leaveCb(!0);
            const oe = A[R];
            oe && on(t, oe) && oe.el._leaveCb && oe.el._leaveCb(), K(ie, [U])
        },
        enter(U) {
            let ie = c,
                oe = l,
                we = u;
            if (!n.isMounted)
                if (r) ie = C || c, oe = v || l, we = _ || u;
                else return;
            let Ie = !1;
            const Ne = U._enterCb = Pe => {
                Ie || (Ie = !0, Pe ? K(we, [U]) : K(oe, [U]), X.delayedLeave && X.delayedLeave(), U._enterCb = void 0)
            };
            ie ? (ie(U, Ne), ie.length <= 1 && Ne()) : Ne()
        },
        leave(U, ie) {
            const oe = String(t.key);
            if (U._enterCb && U._enterCb(!0), n.isUnmounting) return ie();
            K(h, [U]);
            let we = !1;
            const Ie = U._leaveCb = Ne => {
                we || (we = !0, ie(), Ne ? K(m, [U]) : K(g, [U]), U._leaveCb = void 0, A[oe] === t && delete A[oe])
            };
            A[oe] = t, f ? (f(U, Ie), f.length <= 1 && Ie()) : Ie()
        },
        clone(U) {
            return Ho(U, e, n, s)
        }
    };
    return X
}

function fo(t) {
    if (Ni(t)) return t = Hn(t), t.children = null, t
}

function ml(t) {
    return Ni(t) ? t.children ? t.children[0] : void 0 : t
}

function Ko(t, e) {
    t.shapeFlag & 6 && t.component ? Ko(t.component.subTree, e) : t.shapeFlag & 128 ? (t.ssContent.transition = e.clone(t.ssContent), t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e
}

function Lh(t, e = !1) {
    let n = [],
        s = 0;
    for (let r = 0; r < t.length; r++) {
        const i = t[r];
        i.type === ft ? (i.patchFlag & 128 && s++, n = n.concat(Lh(i.children, e))) : (e || i.type !== wt) && n.push(i)
    }
    if (s > 1)
        for (let r = 0; r < n.length; r++) n[r].patchFlag = -2;
    return n
}

function Oh(t) {
    return Z(t) ? {
        setup: t,
        name: t.name
    } : t
}
const qo = t => !!t.type.__asyncLoader,
    Ni = t => t.type.__isKeepAlive;

function Zp(t, e) {
    Fh(t, "a", e)
}

function em(t, e) {
    Fh(t, "da", e)
}

function Fh(t, e, n = ke) {
    const s = t.__wdc || (t.__wdc = () => {
        let r = n;
        for (; r;) {
            if (r.isDeactivated) return;
            r = r.parent
        }
        return t()
    });
    if (Ri(e, s, n), n) {
        let r = n.parent;
        for (; r && r.parent;) Ni(r.parent.vnode) && tm(s, e, n, r), r = r.parent
    }
}

function tm(t, e, n, s) {
    const r = Ri(e, t, s, !0);
    Vh(() => {
        Ba(s[e], r)
    }, n)
}

function Ri(t, e, n = ke, s = !1) {
    if (n) {
        const r = n[t] || (n[t] = []),
            i = e.__weh || (e.__weh = (...o) => {
                if (n.isUnmounted) return;
                as(), Kn(n);
                const a = dt(e, n, t, o);
                return dn(), cs(), a
            });
        return s ? r.unshift(i) : r.push(i), i
    }
}
const Ot = t => (e, n = ke) => (!$s || t === "sp") && Ri(t, e, n),
    nm = Ot("bm"),
    Bh = Ot("m"),
    sm = Ot("bu"),
    rm = Ot("u"),
    Uh = Ot("bum"),
    Vh = Ot("um"),
    im = Ot("sp"),
    om = Ot("rtg"),
    am = Ot("rtc");

function cm(t, e = ke) {
    Ri("ec", t, e)
}
let zo = !0;

function lm(t) {
    const e = jh(t),
        n = t.proxy,
        s = t.ctx;
    zo = !1, e.beforeCreate && yl(e.beforeCreate, t, "bc");
    const {
        data: r,
        computed: i,
        methods: o,
        watch: a,
        provide: c,
        inject: l,
        created: u,
        beforeMount: h,
        mounted: f,
        beforeUpdate: g,
        updated: m,
        activated: w,
        deactivated: C,
        beforeDestroy: v,
        beforeUnmount: _,
        destroyed: R,
        unmounted: A,
        render: K,
        renderTracked: X,
        renderTriggered: U,
        errorCaptured: ie,
        serverPrefetch: oe,
        expose: we,
        inheritAttrs: Ie,
        components: Ne,
        directives: Pe,
        filters: In
    } = e;
    if (l && um(l, s, null, t.appContext.config.unwrapInjectedRef), o)
        for (const pe in o) {
            const ue = o[pe];
            Z(ue) && (s[pe] = ue.bind(n))
        }
    if (r) {
        const pe = r.call(n, n);
        De(pe) && (t.data = rr(pe))
    }
    if (zo = !0, i)
        for (const pe in i) {
            const ue = i[pe],
                st = Z(ue) ? ue.bind(n, n) : Z(ue.get) ? ue.get.bind(n, n) : mt,
                _n = !Z(ue) && Z(ue.set) ? ue.set.bind(n) : mt,
                Rt = Ct({
                    get: st,
                    set: _n
                });
            Object.defineProperty(s, pe, {
                enumerable: !0,
                configurable: !0,
                get: () => Rt.value,
                set: vt => Rt.value = vt
            })
        }
    if (a)
        for (const pe in a) $h(a[pe], s, n, pe);
    if (c) {
        const pe = Z(c) ? c.call(n) : c;
        Reflect.ownKeys(pe).forEach(ue => {
            Or(ue, pe[ue])
        })
    }
    u && yl(u, t, "c");

    function Re(pe, ue) {
        Y(ue) ? ue.forEach(st => pe(st.bind(n))) : ue && pe(ue.bind(n))
    }
    if (Re(nm, h), Re(Bh, f), Re(sm, g), Re(rm, m), Re(Zp, w), Re(em, C), Re(cm, ie), Re(am, X), Re(om, U), Re(Uh, _), Re(Vh, A), Re(im, oe), Y(we))
        if (we.length) {
            const pe = t.exposed || (t.exposed = {});
            we.forEach(ue => {
                Object.defineProperty(pe, ue, {
                    get: () => n[ue],
                    set: st => n[ue] = st
                })
            })
        } else t.exposed || (t.exposed = {});
    K && t.render === mt && (t.render = K), Ie != null && (t.inheritAttrs = Ie), Ne && (t.components = Ne), Pe && (t.directives = Pe)
}

function um(t, e, n = mt, s = !1) {
    Y(t) && (t = Go(t));
    for (const r in t) {
        const i = t[r];
        let o;
        De(i) ? "default" in i ? o = St(i.from || r, i.default, !0) : o = St(i.from || r) : o = St(i), Be(o) && s ? Object.defineProperty(e, r, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: a => o.value = a
        }) : e[r] = o
    }
}

function yl(t, e, n) {
    dt(Y(t) ? t.map(s => s.bind(e.proxy)) : t.bind(e.proxy), e, n)
}

function $h(t, e, n, s) {
    const r = s.includes(".") ? kh(n, s) : () => n[s];
    if (xe(t)) {
        const i = e[t];
        Z(i) && Fr(r, i)
    } else if (Z(t)) Fr(r, t.bind(n));
    else if (De(t))
        if (Y(t)) t.forEach(i => $h(i, e, n, s));
        else {
            const i = Z(t.handler) ? t.handler.bind(n) : e[t.handler];
            Z(i) && Fr(r, i, t)
        }
}

function jh(t) {
    const e = t.type,
        {
            mixins: n,
            extends: s
        } = e,
        {
            mixins: r,
            optionsCache: i,
            config: {
                optionMergeStrategies: o
            }
        } = t.appContext,
        a = i.get(e);
    let c;
    return a ? c = a : !r.length && !n && !s ? c = e : (c = {}, r.length && r.forEach(l => Wr(c, l, o, !0)), Wr(c, e, o)), i.set(e, c), c
}

function Wr(t, e, n, s = !1) {
    const {
        mixins: r,
        extends: i
    } = e;
    i && Wr(t, i, n, !0), r && r.forEach(o => Wr(t, o, n, !0));
    for (const o in e)
        if (!(s && o === "expose")) {
            const a = hm[o] || n && n[o];
            t[o] = a ? a(t[o], e[o]) : e[o]
        }
    return t
}
const hm = {
    data: wl,
    props: sn,
    emits: sn,
    methods: sn,
    computed: sn,
    beforeCreate: We,
    created: We,
    beforeMount: We,
    mounted: We,
    beforeUpdate: We,
    updated: We,
    beforeDestroy: We,
    beforeUnmount: We,
    destroyed: We,
    unmounted: We,
    activated: We,
    deactivated: We,
    errorCaptured: We,
    serverPrefetch: We,
    components: sn,
    directives: sn,
    watch: dm,
    provide: wl,
    inject: fm
};

function wl(t, e) {
    return e ? t ? function() {
        return Ge(Z(t) ? t.call(this, this) : t, Z(e) ? e.call(this, this) : e)
    } : e : t
}

function fm(t, e) {
    return sn(Go(t), Go(e))
}

function Go(t) {
    if (Y(t)) {
        const e = {};
        for (let n = 0; n < t.length; n++) e[t[n]] = t[n];
        return e
    }
    return t
}

function We(t, e) {
    return t ? [...new Set([].concat(t, e))] : e
}

function sn(t, e) {
    return t ? Ge(Ge(Object.create(null), t), e) : e
}

function dm(t, e) {
    if (!t) return e;
    if (!e) return t;
    const n = Ge(Object.create(null), t);
    for (const s in e) n[s] = We(t[s], e[s]);
    return n
}

function gm(t, e, n, s = !1) {
    const r = {},
        i = {};
    qr(i, Di, 1), t.propsDefaults = Object.create(null), Hh(t, e, r, i);
    for (const o in t.propsOptions[0]) o in r || (r[o] = void 0);
    n ? t.props = s ? r : Dp(r) : t.type.props ? t.props = r : t.props = i, t.attrs = i
}

function pm(t, e, n, s) {
    const {
        props: r,
        attrs: i,
        vnode: {
            patchFlag: o
        }
    } = t, a = ae(r), [c] = t.propsOptions;
    let l = !1;
    if ((s || o > 0) && !(o & 16)) {
        if (o & 8) {
            const u = t.vnode.dynamicProps;
            for (let h = 0; h < u.length; h++) {
                let f = u[h];
                const g = e[f];
                if (c)
                    if (re(i, f)) g !== i[f] && (i[f] = g, l = !0);
                    else {
                        const m = _t(f);
                        r[m] = Wo(c, a, m, g, t, !1)
                    }
                else g !== i[f] && (i[f] = g, l = !0)
            }
        }
    } else {
        Hh(t, e, r, i) && (l = !0);
        let u;
        for (const h in a)(!e || !re(e, h) && ((u = os(h)) === h || !re(e, u))) && (c ? n && (n[h] !== void 0 || n[u] !== void 0) && (r[h] = Wo(c, a, h, void 0, t, !0)) : delete r[h]);
        if (i !== a)
            for (const h in i)(!e || !re(e, h) && !0) && (delete i[h], l = !0)
    }
    l && xt(t, "set", "$attrs")
}

function Hh(t, e, n, s) {
    const [r, i] = t.propsOptions;
    let o = !1,
        a;
    if (e)
        for (let c in e) {
            if (xr(c)) continue;
            const l = e[c];
            let u;
            r && re(r, u = _t(c)) ? !i || !i.includes(u) ? n[u] = l : (a || (a = {}))[u] = l : Qa(t.emitsOptions, c) || (!(c in s) || l !== s[c]) && (s[c] = l, o = !0)
        }
    if (i) {
        const c = ae(n),
            l = a || ge;
        for (let u = 0; u < i.length; u++) {
            const h = i[u];
            n[h] = Wo(r, c, h, l[h], t, !re(l, h))
        }
    }
    return o
}

function Wo(t, e, n, s, r, i) {
    const o = t[n];
    if (o != null) {
        const a = re(o, "default");
        if (a && s === void 0) {
            const c = o.default;
            if (o.type !== Function && Z(c)) {
                const {
                    propsDefaults: l
                } = r;
                n in l ? s = l[n] : (Kn(r), s = l[n] = c.call(null, e), dn())
            } else s = c
        }
        o[0] && (i && !a ? s = !1 : o[1] && (s === "" || s === os(n)) && (s = !0))
    }
    return s
}

function Kh(t, e, n = !1) {
    const s = e.propsCache,
        r = s.get(t);
    if (r) return r;
    const i = t.props,
        o = {},
        a = [];
    let c = !1;
    if (!Z(t)) {
        const u = h => {
            c = !0;
            const [f, g] = Kh(h, e, !0);
            Ge(o, f), g && a.push(...g)
        };
        !n && e.mixins.length && e.mixins.forEach(u), t.extends && u(t.extends), t.mixins && t.mixins.forEach(u)
    }
    if (!i && !c) return s.set(t, On), On;
    if (Y(i))
        for (let u = 0; u < i.length; u++) {
            const h = _t(i[u]);
            vl(h) && (o[h] = ge)
        } else if (i)
            for (const u in i) {
                const h = _t(u);
                if (vl(h)) {
                    const f = i[u],
                        g = o[h] = Y(f) || Z(f) ? {
                            type: f
                        } : f;
                    if (g) {
                        const m = bl(Boolean, g.type),
                            w = bl(String, g.type);
                        g[0] = m > -1, g[1] = w < 0 || m < w, (m > -1 || re(g, "default")) && a.push(h)
                    }
                }
            }
    const l = [o, a];
    return s.set(t, l), l
}

function vl(t) {
    return t[0] !== "$"
}

function El(t) {
    const e = t && t.toString().match(/^\s*function (\w+)/);
    return e ? e[1] : t === null ? "null" : ""
}

function Tl(t, e) {
    return El(t) === El(e)
}

function bl(t, e) {
    return Y(e) ? e.findIndex(n => Tl(n, t)) : Z(e) && Tl(e, t) ? 0 : -1
}
const qh = t => t[0] === "_" || t === "$stable",
    Ja = t => Y(t) ? t.map(bt) : [bt(t)],
    mm = (t, e, n) => {
        const s = jp((...r) => Ja(e(...r)), n);
        return s._c = !1, s
    },
    zh = (t, e, n) => {
        const s = t._ctx;
        for (const r in t) {
            if (qh(r)) continue;
            const i = t[r];
            if (Z(i)) e[r] = mm(r, i, s);
            else if (i != null) {
                const o = Ja(i);
                e[r] = () => o
            }
        }
    },
    Gh = (t, e) => {
        const n = Ja(e);
        t.slots.default = () => n
    },
    ym = (t, e) => {
        if (t.vnode.shapeFlag & 32) {
            const n = e._;
            n ? (t.slots = ae(e), qr(e, "_", n)) : zh(e, t.slots = {})
        } else t.slots = {}, e && Gh(t, e);
        qr(t.slots, Di, 1)
    },
    wm = (t, e, n) => {
        const {
            vnode: s,
            slots: r
        } = t;
        let i = !0,
            o = ge;
        if (s.shapeFlag & 32) {
            const a = e._;
            a ? n && a === 1 ? i = !1 : (Ge(r, e), !n && a === 1 && delete r._) : (i = !e.$stable, zh(e, r)), o = e
        } else e && (Gh(t, e), o = {
            default: 1
        });
        if (i)
            for (const a in r) !qh(a) && !(a in o) && delete r[a]
    };

function Fb(t, e) {
    const n = ot;
    if (n === null) return t;
    const s = n.proxy,
        r = t.dirs || (t.dirs = []);
    for (let i = 0; i < e.length; i++) {
        let [o, a, c, l = ge] = e[i];
        Z(o) && (o = {
            mounted: o,
            updated: o
        }), o.deep && cn(a), r.push({
            dir: o,
            instance: s,
            value: a,
            oldValue: void 0,
            arg: c,
            modifiers: l
        })
    }
    return t
}

function tn(t, e, n, s) {
    const r = t.dirs,
        i = e && e.dirs;
    for (let o = 0; o < r.length; o++) {
        const a = r[o];
        i && (a.oldValue = i[o].value);
        let c = a.dir[s];
        c && (as(), dt(c, n, 8, [t.el, a, t, e]), cs())
    }
}

function Wh() {
    return {
        app: null,
        config: {
            isNativeTag: Xg,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}
let vm = 0;

function Em(t, e) {
    return function(s, r = null) {
        r != null && !De(r) && (r = null);
        const i = Wh(),
            o = new Set;
        let a = !1;
        const c = i.app = {
            _uid: vm++,
            _component: s,
            _props: r,
            _container: null,
            _context: i,
            _instance: null,
            version: Hm,
            get config() {
                return i.config
            },
            set config(l) {},
            use(l, ...u) {
                return o.has(l) || (l && Z(l.install) ? (o.add(l), l.install(c, ...u)) : Z(l) && (o.add(l), l(c, ...u))), c
            },
            mixin(l) {
                return i.mixins.includes(l) || i.mixins.push(l), c
            },
            component(l, u) {
                return u ? (i.components[l] = u, c) : i.components[l]
            },
            directive(l, u) {
                return u ? (i.directives[l] = u, c) : i.directives[l]
            },
            mount(l, u, h) {
                if (!a) {
                    const f = Qe(s, r);
                    return f.appContext = i, u && e ? e(f, l) : t(f, l, h), a = !0, c._container = l, l.__vue_app__ = c, tc(f.component) || f.component.proxy
                }
            },
            unmount() {
                a && (t(null, c._container), delete c._container.__vue_app__)
            },
            provide(l, u) {
                return i.provides[l] = u, c
            }
        };
        return c
    }
}

function Yo(t, e, n, s, r = !1) {
    if (Y(t)) {
        t.forEach((f, g) => Yo(f, e && (Y(e) ? e[g] : e), n, s, r));
        return
    }
    if (qo(s) && !r) return;
    const i = s.shapeFlag & 4 ? tc(s.component) || s.component.proxy : s.el,
        o = r ? null : i,
        {
            i: a,
            r: c
        } = t,
        l = e && e.r,
        u = a.refs === ge ? a.refs = {} : a.refs,
        h = a.setupState;
    if (l != null && l !== c && (xe(l) ? (u[l] = null, re(h, l) && (h[l] = null)) : Be(l) && (l.value = null)), Z(c)) qt(c, a, 12, [o, u]);
    else {
        const f = xe(c),
            g = Be(c);
        if (f || g) {
            const m = () => {
                if (t.f) {
                    const w = f ? u[c] : c.value;
                    r ? Y(w) && Ba(w, i) : Y(w) ? w.includes(i) || w.push(i) : f ? u[c] = [i] : (c.value = [i], t.k && (u[t.k] = c.value))
                } else f ? (u[c] = o, re(h, c) && (h[c] = o)) : Be(c) && (c.value = o, t.k && (u[t.k] = o))
            };
            o ? (m.id = -1, Ze(m, n)) : m()
        }
    }
}
const Ze = Wp;

function Tm(t) {
    return bm(t)
}

function bm(t, e) {
    const n = np();
    n.__VUE__ = !0;
    const {
        insert: s,
        remove: r,
        patchProp: i,
        createElement: o,
        createText: a,
        createComment: c,
        setText: l,
        setElementText: u,
        parentNode: h,
        nextSibling: f,
        setScopeId: g = mt,
        cloneNode: m,
        insertStaticContent: w
    } = t, C = (d, p, y, b = null, T = null, D = null, x = !1, N = null, M = !!p.dynamicChildren) => {
        if (d === p) return;
        d && !on(d, p) && (b = V(d), ut(d, T, D, !0), d = null), p.patchFlag === -2 && (M = !1, p.dynamicChildren = null);
        const {
            type: I,
            ref: $,
            shapeFlag: O
        } = p;
        switch (I) {
            case Za:
                v(d, p, y, b);
                break;
            case wt:
                _(d, p, y, b);
                break;
            case Br:
                d == null && R(p, y, b, x);
                break;
            case ft:
                Pe(d, p, y, b, T, D, x, N, M);
                break;
            default:
                O & 1 ? X(d, p, y, b, T, D, x, N, M) : O & 6 ? In(d, p, y, b, T, D, x, N, M) : (O & 64 || O & 128) && I.process(d, p, y, b, T, D, x, N, M, me)
        }
        $ != null && T && Yo($, d && d.ref, D, p || d, !p)
    }, v = (d, p, y, b) => {
        if (d == null) s(p.el = a(p.children), y, b);
        else {
            const T = p.el = d.el;
            p.children !== d.children && l(T, p.children)
        }
    }, _ = (d, p, y, b) => {
        d == null ? s(p.el = c(p.children || ""), y, b) : p.el = d.el
    }, R = (d, p, y, b) => {
        [d.el, d.anchor] = w(d.children, p, y, b, d.el, d.anchor)
    }, A = ({
        el: d,
        anchor: p
    }, y, b) => {
        let T;
        for (; d && d !== p;) T = f(d), s(d, y, b), d = T;
        s(p, y, b)
    }, K = ({
        el: d,
        anchor: p
    }) => {
        let y;
        for (; d && d !== p;) y = f(d), r(d), d = y;
        r(p)
    }, X = (d, p, y, b, T, D, x, N, M) => {
        x = x || p.type === "svg", d == null ? U(p, y, b, T, D, x, N, M) : we(d, p, T, D, x, N, M)
    }, U = (d, p, y, b, T, D, x, N) => {
        let M, I;
        const {
            type: $,
            props: O,
            shapeFlag: j,
            transition: G,
            patchFlag: se,
            dirs: Te
        } = d;
        if (d.el && m !== void 0 && se === -1) M = d.el = m(d.el);
        else {
            if (M = d.el = o(d.type, D, O && O.is, O), j & 8 ? u(M, d.children) : j & 16 && oe(d.children, M, null, b, T, D && $ !== "foreignObject", x, N), Te && tn(d, null, b, "created"), O) {
                for (const ve in O) ve !== "value" && !xr(ve) && i(M, ve, null, O[ve], D, d.children, b, T, k);
                "value" in O && i(M, "value", null, O.value), (I = O.onVnodeBeforeMount) && Tt(I, b, d)
            }
            ie(M, d, d.scopeId, x, b)
        }
        Te && tn(d, null, b, "beforeMount");
        const fe = (!T || T && !T.pendingBranch) && G && !G.persisted;
        fe && G.beforeEnter(M), s(M, p, y), ((I = O && O.onVnodeMounted) || fe || Te) && Ze(() => {
            I && Tt(I, b, d), fe && G.enter(M), Te && tn(d, null, b, "mounted")
        }, T)
    }, ie = (d, p, y, b, T) => {
        if (y && g(d, y), b)
            for (let D = 0; D < b.length; D++) g(d, b[D]);
        if (T) {
            let D = T.subTree;
            if (p === D) {
                const x = T.vnode;
                ie(d, x, x.scopeId, x.slotScopeIds, T.parent)
            }
        }
    }, oe = (d, p, y, b, T, D, x, N, M = 0) => {
        for (let I = M; I < d.length; I++) {
            const $ = d[I] = N ? $t(d[I]) : bt(d[I]);
            C(null, $, p, y, b, T, D, x, N)
        }
    }, we = (d, p, y, b, T, D, x) => {
        const N = p.el = d.el;
        let {
            patchFlag: M,
            dynamicChildren: I,
            dirs: $
        } = p;
        M |= d.patchFlag & 16;
        const O = d.props || ge,
            j = p.props || ge;
        let G;
        y && nn(y, !1), (G = j.onVnodeBeforeUpdate) && Tt(G, y, p, d), $ && tn(p, d, y, "beforeUpdate"), y && nn(y, !0);
        const se = T && p.type !== "foreignObject";
        if (I ? Ie(d.dynamicChildren, I, N, y, b, se, D) : x || st(d, p, N, null, y, b, se, D, !1), M > 0) {
            if (M & 16) Ne(N, p, O, j, y, b, T);
            else if (M & 2 && O.class !== j.class && i(N, "class", null, j.class, T), M & 4 && i(N, "style", O.style, j.style, T), M & 8) {
                const Te = p.dynamicProps;
                for (let fe = 0; fe < Te.length; fe++) {
                    const ve = Te[fe],
                        gt = O[ve],
                        An = j[ve];
                    (An !== gt || ve === "value") && i(N, ve, gt, An, T, d.children, y, b, k)
                }
            }
            M & 1 && d.children !== p.children && u(N, p.children)
        } else !x && I == null && Ne(N, p, O, j, y, b, T);
        ((G = j.onVnodeUpdated) || $) && Ze(() => {
            G && Tt(G, y, p, d), $ && tn(p, d, y, "updated")
        }, b)
    }, Ie = (d, p, y, b, T, D, x) => {
        for (let N = 0; N < p.length; N++) {
            const M = d[N],
                I = p[N],
                $ = M.el && (M.type === ft || !on(M, I) || M.shapeFlag & 70) ? h(M.el) : y;
            C(M, I, $, null, b, T, D, x, !0)
        }
    }, Ne = (d, p, y, b, T, D, x) => {
        if (y !== b) {
            for (const N in b) {
                if (xr(N)) continue;
                const M = b[N],
                    I = y[N];
                M !== I && N !== "value" && i(d, N, I, M, x, p.children, T, D, k)
            }
            if (y !== ge)
                for (const N in y) !xr(N) && !(N in b) && i(d, N, y[N], null, x, p.children, T, D, k);
            "value" in b && i(d, "value", y.value, b.value)
        }
    }, Pe = (d, p, y, b, T, D, x, N, M) => {
        const I = p.el = d ? d.el : a(""),
            $ = p.anchor = d ? d.anchor : a("");
        let {
            patchFlag: O,
            dynamicChildren: j,
            slotScopeIds: G
        } = p;
        G && (N = N ? N.concat(G) : G), d == null ? (s(I, y, b), s($, y, b), oe(p.children, y, $, T, D, x, N, M)) : O > 0 && O & 64 && j && d.dynamicChildren ? (Ie(d.dynamicChildren, j, y, T, D, x, N), (p.key != null || T && p === T.subTree) && Yh(d, p, !0)) : st(d, p, y, $, T, D, x, N, M)
    }, In = (d, p, y, b, T, D, x, N, M) => {
        p.slotScopeIds = N, d == null ? p.shapeFlag & 512 ? T.ctx.activate(p, y, b, x, M) : Sn(p, y, b, T, D, x, M) : Re(d, p, M)
    }, Sn = (d, p, y, b, T, D, x) => {
        const N = d.component = Lm(d, b, T);
        if (Ni(d) && (N.ctx.renderer = me), Fm(N), N.asyncDep) {
            if (T && T.registerDep(N, pe), !d.el) {
                const M = N.subTree = Qe(wt);
                _(null, M, p, y)
            }
            return
        }
        pe(N, d, p, y, T, D, x)
    }, Re = (d, p, y) => {
        const b = p.component = d.component;
        if (qp(d, p, y))
            if (b.asyncDep && !b.asyncResolved) {
                ue(b, p, y);
                return
            } else b.next = p, Bp(b.update), b.update();
        else p.component = d.component, p.el = d.el, b.vnode = p
    }, pe = (d, p, y, b, T, D, x) => {
        const N = () => {
                if (d.isMounted) {
                    let {
                        next: $,
                        bu: O,
                        u: j,
                        parent: G,
                        vnode: se
                    } = d, Te = $, fe;
                    nn(d, !1), $ ? ($.el = se.el, ue(d, $, x)) : $ = se, O && Lr(O), (fe = $.props && $.props.onVnodeBeforeUpdate) && Tt(fe, G, $, se), nn(d, !0);
                    const ve = ho(d),
                        gt = d.subTree;
                    d.subTree = ve, C(gt, ve, h(gt.el), V(gt), d, T, D), $.el = ve.el, Te === null && zp(d, ve.el), j && Ze(j, T), (fe = $.props && $.props.onVnodeUpdated) && Ze(() => Tt(fe, G, $, se), T)
                } else {
                    let $;
                    const {
                        el: O,
                        props: j
                    } = p, {
                        bm: G,
                        m: se,
                        parent: Te
                    } = d, fe = qo(p);
                    if (nn(d, !1), G && Lr(G), !fe && ($ = j && j.onVnodeBeforeMount) && Tt($, Te, p), nn(d, !0), O && J) {
                        const ve = () => {
                            d.subTree = ho(d), J(O, d.subTree, d, T, null)
                        };
                        fe ? p.type.__asyncLoader().then(() => !d.isUnmounted && ve()) : ve()
                    } else {
                        const ve = d.subTree = ho(d);
                        C(null, ve, y, b, d, T, D), p.el = ve.el
                    }
                    if (se && Ze(se, T), !fe && ($ = j && j.onVnodeMounted)) {
                        const ve = p;
                        Ze(() => Tt($, Te, ve), T)
                    }
                    p.shapeFlag & 256 && d.a && Ze(d.a, T), d.isMounted = !0, p = y = b = null
                }
            },
            M = d.effect = new ja(N, () => _h(d.update), d.scope),
            I = d.update = M.run.bind(M);
        I.id = d.uid, nn(d, !0), I()
    }, ue = (d, p, y) => {
        p.component = d;
        const b = d.vnode.props;
        d.vnode = p, d.next = null, pm(d, p.props, b, y), wm(d, p.children, y), as(), Xa(void 0, d.update), cs()
    }, st = (d, p, y, b, T, D, x, N, M = !1) => {
        const I = d && d.children,
            $ = d ? d.shapeFlag : 0,
            O = p.children,
            {
                patchFlag: j,
                shapeFlag: G
            } = p;
        if (j > 0) {
            if (j & 128) {
                Rt(I, O, y, b, T, D, x, N, M);
                return
            } else if (j & 256) {
                _n(I, O, y, b, T, D, x, N, M);
                return
            }
        }
        G & 8 ? ($ & 16 && k(I, T, D), O !== I && u(y, O)) : $ & 16 ? G & 16 ? Rt(I, O, y, b, T, D, x, N, M) : k(I, T, D, !0) : ($ & 8 && u(y, ""), G & 16 && oe(O, y, b, T, D, x, N, M))
    }, _n = (d, p, y, b, T, D, x, N, M) => {
        d = d || On, p = p || On;
        const I = d.length,
            $ = p.length,
            O = Math.min(I, $);
        let j;
        for (j = 0; j < O; j++) {
            const G = p[j] = M ? $t(p[j]) : bt(p[j]);
            C(d[j], G, y, null, T, D, x, N, M)
        }
        I > $ ? k(d, T, D, !0, !1, O) : oe(p, y, b, T, D, x, N, M, O)
    }, Rt = (d, p, y, b, T, D, x, N, M) => {
        let I = 0;
        const $ = p.length;
        let O = d.length - 1,
            j = $ - 1;
        for (; I <= O && I <= j;) {
            const G = d[I],
                se = p[I] = M ? $t(p[I]) : bt(p[I]);
            if (on(G, se)) C(G, se, y, null, T, D, x, N, M);
            else break;
            I++
        }
        for (; I <= O && I <= j;) {
            const G = d[O],
                se = p[j] = M ? $t(p[j]) : bt(p[j]);
            if (on(G, se)) C(G, se, y, null, T, D, x, N, M);
            else break;
            O--, j--
        }
        if (I > O) {
            if (I <= j) {
                const G = j + 1,
                    se = G < $ ? p[G].el : b;
                for (; I <= j;) C(null, p[I] = M ? $t(p[I]) : bt(p[I]), y, se, T, D, x, N, M), I++
            }
        } else if (I > j)
            for (; I <= O;) ut(d[I], T, D, !0), I++;
        else {
            const G = I,
                se = I,
                Te = new Map;
            for (I = se; I <= j; I++) {
                const rt = p[I] = M ? $t(p[I]) : bt(p[I]);
                rt.key != null && Te.set(rt.key, I)
            }
            let fe, ve = 0;
            const gt = j - se + 1;
            let An = !1,
                rl = 0;
            const ws = new Array(gt);
            for (I = 0; I < gt; I++) ws[I] = 0;
            for (I = G; I <= O; I++) {
                const rt = d[I];
                if (ve >= gt) {
                    ut(rt, T, D, !0);
                    continue
                }
                let Et;
                if (rt.key != null) Et = Te.get(rt.key);
                else
                    for (fe = se; fe <= j; fe++)
                        if (ws[fe - se] === 0 && on(rt, p[fe])) {
                            Et = fe;
                            break
                        }
                Et === void 0 ? ut(rt, T, D, !0) : (ws[Et - se] = I + 1, Et >= rl ? rl = Et : An = !0, C(rt, p[Et], y, null, T, D, x, N, M), ve++)
            }
            const il = An ? Cm(ws) : On;
            for (fe = il.length - 1, I = gt - 1; I >= 0; I--) {
                const rt = se + I,
                    Et = p[rt],
                    ol = rt + 1 < $ ? p[rt + 1].el : b;
                ws[I] === 0 ? C(null, Et, y, ol, T, D, x, N, M) : An && (fe < 0 || I !== il[fe] ? vt(Et, y, ol, 2) : fe--)
            }
        }
    }, vt = (d, p, y, b, T = null) => {
        const {
            el: D,
            type: x,
            transition: N,
            children: M,
            shapeFlag: I
        } = d;
        if (I & 6) {
            vt(d.component.subTree, p, y, b);
            return
        }
        if (I & 128) {
            d.suspense.move(p, y, b);
            return
        }
        if (I & 64) {
            x.move(d, p, y, me);
            return
        }
        if (x === ft) {
            s(D, p, y);
            for (let O = 0; O < M.length; O++) vt(M[O], p, y, b);
            s(d.anchor, p, y);
            return
        }
        if (x === Br) {
            A(d, p, y);
            return
        }
        if (b !== 2 && I & 1 && N)
            if (b === 0) N.beforeEnter(D), s(D, p, y), Ze(() => N.enter(D), T);
            else {
                const {
                    leave: O,
                    delayLeave: j,
                    afterLeave: G
                } = N, se = () => s(D, p, y), Te = () => {
                    O(D, () => {
                        se(), G && G()
                    })
                };
                j ? j(D, se, Te) : Te()
            }
        else s(D, p, y)
    }, ut = (d, p, y, b = !1, T = !1) => {
        const {
            type: D,
            props: x,
            ref: N,
            children: M,
            dynamicChildren: I,
            shapeFlag: $,
            patchFlag: O,
            dirs: j
        } = d;
        if (N != null && Yo(N, null, y, d, !0), $ & 256) {
            p.ctx.deactivate(d);
            return
        }
        const G = $ & 1 && j,
            se = !qo(d);
        let Te;
        if (se && (Te = x && x.onVnodeBeforeUnmount) && Tt(Te, p, d), $ & 6) F(d.component, y, b);
        else {
            if ($ & 128) {
                d.suspense.unmount(y, b);
                return
            }
            G && tn(d, null, p, "beforeUnmount"), $ & 64 ? d.type.remove(d, p, y, T, me, b) : I && (D !== ft || O > 0 && O & 64) ? k(I, p, y, !1, !0) : (D === ft && O & 384 || !T && $ & 16) && k(M, p, y), b && lo(d)
        }(se && (Te = x && x.onVnodeUnmounted) || G) && Ze(() => {
            Te && Tt(Te, p, d), G && tn(d, null, p, "unmounted")
        }, y)
    }, lo = d => {
        const {
            type: p,
            el: y,
            anchor: b,
            transition: T
        } = d;
        if (p === ft) {
            E(y, b);
            return
        }
        if (p === Br) {
            K(d);
            return
        }
        const D = () => {
            r(y), T && !T.persisted && T.afterLeave && T.afterLeave()
        };
        if (d.shapeFlag & 1 && T && !T.persisted) {
            const {
                leave: x,
                delayLeave: N
            } = T, M = () => x(y, D);
            N ? N(d.el, D, M) : M()
        } else D()
    }, E = (d, p) => {
        let y;
        for (; d !== p;) y = f(d), r(d), d = y;
        r(p)
    }, F = (d, p, y) => {
        const {
            bum: b,
            scope: T,
            update: D,
            subTree: x,
            um: N
        } = d;
        b && Lr(b), T.stop(), D && (D.active = !1, ut(x, d, p, y)), N && Ze(N, p), Ze(() => {
            d.isUnmounted = !0
        }, p), p && p.pendingBranch && !p.isUnmounted && d.asyncDep && !d.asyncResolved && d.suspenseId === p.pendingId && (p.deps--, p.deps === 0 && p.resolve())
    }, k = (d, p, y, b = !1, T = !1, D = 0) => {
        for (let x = D; x < d.length; x++) ut(d[x], p, y, b, T)
    }, V = d => d.shapeFlag & 6 ? V(d.component.subTree) : d.shapeFlag & 128 ? d.suspense.next() : f(d.anchor || d.el), he = (d, p, y) => {
        d == null ? p._vnode && ut(p._vnode, null, null, !0) : C(p._vnode || null, d, p, null, null, null, y), Rh(), p._vnode = d
    }, me = {
        p: C,
        um: ut,
        m: vt,
        r: lo,
        mt: Sn,
        mc: oe,
        pc: st,
        pbc: Ie,
        n: V,
        o: t
    };
    let te, J;
    return e && ([te, J] = e(me)), {
        render: he,
        hydrate: te,
        createApp: Em(he, te)
    }
}

function nn({
    effect: t,
    update: e
}, n) {
    t.allowRecurse = e.allowRecurse = n
}

function Yh(t, e, n = !1) {
    const s = t.children,
        r = e.children;
    if (Y(s) && Y(r))
        for (let i = 0; i < s.length; i++) {
            const o = s[i];
            let a = r[i];
            a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = r[i] = $t(r[i]), a.el = o.el), n || Yh(o, a))
        }
}

function Cm(t) {
    const e = t.slice(),
        n = [0];
    let s, r, i, o, a;
    const c = t.length;
    for (s = 0; s < c; s++) {
        const l = t[s];
        if (l !== 0) {
            if (r = n[n.length - 1], t[r] < l) {
                e[s] = r, n.push(s);
                continue
            }
            for (i = 0, o = n.length - 1; i < o;) a = i + o >> 1, t[n[a]] < l ? i = a + 1 : o = a;
            l < t[n[i]] && (i > 0 && (e[s] = n[i - 1]), n[i] = s)
        }
    }
    for (i = n.length, o = n[i - 1]; i-- > 0;) n[i] = o, o = e[o];
    return n
}
const Im = t => t.__isTeleport,
    Xh = "components";

function Bb(t, e) {
    return _m(Xh, t, !0, e) || t
}
const Sm = Symbol();

function _m(t, e, n = !0, s = !1) {
    const r = ot || ke;
    if (r) {
        const i = r.type;
        if (t === Xh) {
            const a = $m(i);
            if (a && (a === e || a === _t(e) || a === Ii(_t(e)))) return i
        }
        const o = Cl(r[t] || i[t], e) || Cl(r.appContext[t], e);
        return !o && s ? i : o
    }
}

function Cl(t, e) {
    return t && (t[e] || t[_t(e)] || t[Ii(_t(e))])
}
const ft = Symbol(void 0),
    Za = Symbol(void 0),
    wt = Symbol(void 0),
    Br = Symbol(void 0),
    Rs = [];
let fn = null;

function Qh(t = !1) {
    Rs.push(fn = t ? null : [])
}

function Am() {
    Rs.pop(), fn = Rs[Rs.length - 1] || null
}
let Yr = 1;

function Il(t) {
    Yr += t
}

function Jh(t) {
    return t.dynamicChildren = Yr > 0 ? fn || On : null, Am(), Yr > 0 && fn && fn.push(t), t
}

function Ub(t, e, n, s, r, i) {
    return Jh(tf(t, e, n, s, r, i, !0))
}

function Zh(t, e, n, s, r) {
    return Jh(Qe(t, e, n, s, r, !0))
}

function Xr(t) {
    return t ? t.__v_isVNode === !0 : !1
}

function on(t, e) {
    return t.type === e.type && t.key === e.key
}
const Di = "__vInternal",
    ef = ({
        key: t
    }) => t != null ? t : null,
    Ur = ({
        ref: t,
        ref_key: e,
        ref_for: n
    }) => t != null ? xe(t) || Be(t) || Z(t) ? {
        i: ot,
        r: t,
        k: e,
        f: !!n
    } : t : null;

function tf(t, e = null, n = null, s = 0, r = null, i = t === ft ? 0 : 1, o = !1, a = !1) {
    const c = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: t,
        props: e,
        key: e && ef(e),
        ref: e && Ur(e),
        scopeId: Ai,
        slotScopeIds: null,
        children: n,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: i,
        patchFlag: s,
        dynamicProps: r,
        dynamicChildren: null,
        appContext: null
    };
    return a ? (ec(c, n), i & 128 && t.normalize(c)) : n && (c.shapeFlag |= xe(n) ? 8 : 16), Yr > 0 && !o && fn && (c.patchFlag > 0 || i & 6) && c.patchFlag !== 32 && fn.push(c), c
}
const Qe = Nm;

function Nm(t, e = null, n = null, s = 0, r = null, i = !1) {
    if ((!t || t === Sm) && (t = wt), Xr(t)) {
        const a = Hn(t, e, !0);
        return n && ec(a, n), a
    }
    if (jm(t) && (t = t.__vccOpts), e) {
        e = Rm(e);
        let {
            class: a,
            style: c
        } = e;
        a && !xe(a) && (e.class = Oa(a)), De(c) && (wh(c) && !Y(c) && (c = Ge({}, c)), e.style = La(c))
    }
    const o = xe(t) ? 1 : Gp(t) ? 128 : Im(t) ? 64 : De(t) ? 4 : Z(t) ? 2 : 0;
    return tf(t, e, n, s, r, o, i, !0)
}

function Rm(t) {
    return t ? wh(t) || Di in t ? Ge({}, t) : t : null
}

function Hn(t, e, n = !1) {
    const {
        props: s,
        ref: r,
        patchFlag: i,
        children: o
    } = t, a = e ? Pm(s || {}, e) : s;
    return {
        __v_isVNode: !0,
        __v_skip: !0,
        type: t.type,
        props: a,
        key: a && ef(a),
        ref: e && e.ref ? n && r ? Y(r) ? r.concat(Ur(e)) : [r, Ur(e)] : Ur(e) : r,
        scopeId: t.scopeId,
        slotScopeIds: t.slotScopeIds,
        children: o,
        target: t.target,
        targetAnchor: t.targetAnchor,
        staticCount: t.staticCount,
        shapeFlag: t.shapeFlag,
        patchFlag: e && t.type !== ft ? i === -1 ? 16 : i | 16 : i,
        dynamicProps: t.dynamicProps,
        dynamicChildren: t.dynamicChildren,
        appContext: t.appContext,
        dirs: t.dirs,
        transition: t.transition,
        component: t.component,
        suspense: t.suspense,
        ssContent: t.ssContent && Hn(t.ssContent),
        ssFallback: t.ssFallback && Hn(t.ssFallback),
        el: t.el,
        anchor: t.anchor
    }
}

function Dm(t = " ", e = 0) {
    return Qe(Za, null, t, e)
}

function Vb(t, e) {
    const n = Qe(Br, null, t);
    return n.staticCount = e, n
}

function $b(t = "", e = !1) {
    return e ? (Qh(), Zh(wt, null, t)) : Qe(wt, null, t)
}

function bt(t) {
    return t == null || typeof t == "boolean" ? Qe(wt) : Y(t) ? Qe(ft, null, t.slice()) : typeof t == "object" ? $t(t) : Qe(Za, null, String(t))
}

function $t(t) {
    return t.el === null || t.memo ? t : Hn(t)
}

function ec(t, e) {
    let n = 0;
    const {
        shapeFlag: s
    } = t;
    if (e == null) e = null;
    else if (Y(e)) n = 16;
    else if (typeof e == "object")
        if (s & 65) {
            const r = e.default;
            r && (r._c && (r._d = !1), ec(t, r()), r._c && (r._d = !0));
            return
        } else {
            n = 32;
            const r = e._;
            !r && !(Di in e) ? e._ctx = ot : r === 3 && ot && (ot.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024))
        }
    else Z(e) ? (e = {
        default: e,
        _ctx: ot
    }, n = 32) : (e = String(e), s & 64 ? (n = 16, e = [Dm(e)]) : n = 8);
    t.children = e, t.shapeFlag |= n
}

function Pm(...t) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
        const s = t[n];
        for (const r in s)
            if (r === "class") e.class !== s.class && (e.class = Oa([e.class, s.class]));
            else if (r === "style") e.style = La([e.style, s.style]);
        else if (Ti(r)) {
            const i = e[r],
                o = s[r];
            o && i !== o && !(Y(i) && i.includes(o)) && (e[r] = i ? [].concat(i, o) : o)
        } else r !== "" && (e[r] = s[r])
    }
    return e
}

function Tt(t, e, n, s = null) {
    dt(t, e, 7, [n, s])
}

function jb(t, e, n, s) {
    let r;
    const i = n && n[s];
    if (Y(t) || xe(t)) {
        r = new Array(t.length);
        for (let o = 0, a = t.length; o < a; o++) r[o] = e(t[o], o, void 0, i && i[o])
    } else if (typeof t == "number") {
        r = new Array(t);
        for (let o = 0; o < t; o++) r[o] = e(o + 1, o, void 0, i && i[o])
    } else if (De(t))
        if (t[Symbol.iterator]) r = Array.from(t, (o, a) => e(o, a, void 0, i && i[a]));
        else {
            const o = Object.keys(t);
            r = new Array(o.length);
            for (let a = 0, c = o.length; a < c; a++) {
                const l = o[a];
                r[a] = e(t[l], l, a, i && i[a])
            }
        }
    else r = [];
    return n && (n[s] = r), r
}

function Hb(t, e, n = {}, s, r) {
    if (ot.isCE) return Qe("slot", e === "default" ? null : {
        name: e
    }, s && s());
    let i = t[e];
    i && i._c && (i._d = !1), Qh();
    const o = i && nf(i(n)),
        a = Zh(ft, {
            key: n.key || `_${e}`
        }, o || (s ? s() : []), o && t._ === 1 ? 64 : -2);
    return !r && a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]), i && i._c && (i._d = !0), a
}

function nf(t) {
    return t.some(e => Xr(e) ? !(e.type === wt || e.type === ft && !nf(e.children)) : !0) ? t : null
}
const Xo = t => t ? sf(t) ? tc(t) || t.proxy : Xo(t.parent) : null,
    Qr = Ge(Object.create(null), {
        $: t => t,
        $el: t => t.vnode.el,
        $data: t => t.data,
        $props: t => t.props,
        $attrs: t => t.attrs,
        $slots: t => t.slots,
        $refs: t => t.refs,
        $parent: t => Xo(t.parent),
        $root: t => Xo(t.root),
        $emit: t => t.emit,
        $options: t => jh(t),
        $forceUpdate: t => () => _h(t.update),
        $nextTick: t => Sh.bind(t.proxy),
        $watch: t => Yp.bind(t)
    }),
    Mm = {
        get({
            _: t
        }, e) {
            const {
                ctx: n,
                setupState: s,
                data: r,
                props: i,
                accessCache: o,
                type: a,
                appContext: c
            } = t;
            let l;
            if (e[0] !== "$") {
                const g = o[e];
                if (g !== void 0) switch (g) {
                    case 1:
                        return s[e];
                    case 2:
                        return r[e];
                    case 4:
                        return n[e];
                    case 3:
                        return i[e]
                } else {
                    if (s !== ge && re(s, e)) return o[e] = 1, s[e];
                    if (r !== ge && re(r, e)) return o[e] = 2, r[e];
                    if ((l = t.propsOptions[0]) && re(l, e)) return o[e] = 3, i[e];
                    if (n !== ge && re(n, e)) return o[e] = 4, n[e];
                    zo && (o[e] = 0)
                }
            }
            const u = Qr[e];
            let h, f;
            if (u) return e === "$attrs" && at(t, "get", e), u(t);
            if ((h = a.__cssModules) && (h = h[e])) return h;
            if (n !== ge && re(n, e)) return o[e] = 4, n[e];
            if (f = c.config.globalProperties, re(f, e)) return f[e]
        },
        set({
            _: t
        }, e, n) {
            const {
                data: s,
                setupState: r,
                ctx: i
            } = t;
            return r !== ge && re(r, e) ? (r[e] = n, !0) : s !== ge && re(s, e) ? (s[e] = n, !0) : re(t.props, e) || e[0] === "$" && e.slice(1) in t ? !1 : (i[e] = n, !0)
        },
        has({
            _: {
                data: t,
                setupState: e,
                accessCache: n,
                ctx: s,
                appContext: r,
                propsOptions: i
            }
        }, o) {
            let a;
            return !!n[o] || t !== ge && re(t, o) || e !== ge && re(e, o) || (a = i[0]) && re(a, o) || re(s, o) || re(Qr, o) || re(r.config.globalProperties, o)
        },
        defineProperty(t, e, n) {
            return n.get != null ? this.set(t, e, n.get(), null) : n.value != null && this.set(t, e, n.value, null), Reflect.defineProperty(t, e, n)
        }
    },
    km = Wh();
let xm = 0;

function Lm(t, e, n) {
    const s = t.type,
        r = (e ? e.appContext : t.appContext) || km,
        i = {
            uid: xm++,
            vnode: t,
            type: s,
            parent: e,
            appContext: r,
            root: null,
            next: null,
            subTree: null,
            effect: null,
            update: null,
            scope: new ih(!0),
            render: null,
            proxy: null,
            exposed: null,
            exposeProxy: null,
            withProxy: null,
            provides: e ? e.provides : Object.create(r.provides),
            accessCache: null,
            renderCache: [],
            components: null,
            directives: null,
            propsOptions: Kh(s, r),
            emitsOptions: Ph(s, r),
            emit: null,
            emitted: null,
            propsDefaults: ge,
            inheritAttrs: s.inheritAttrs,
            ctx: ge,
            data: ge,
            props: ge,
            attrs: ge,
            slots: ge,
            refs: ge,
            setupState: ge,
            setupContext: null,
            suspense: n,
            suspenseId: n ? n.pendingId : 0,
            asyncDep: null,
            asyncResolved: !1,
            isMounted: !1,
            isUnmounted: !1,
            isDeactivated: !1,
            bc: null,
            c: null,
            bm: null,
            m: null,
            bu: null,
            u: null,
            um: null,
            bum: null,
            da: null,
            a: null,
            rtg: null,
            rtc: null,
            ec: null,
            sp: null
        };
    return i.ctx = {
        _: i
    }, i.root = e ? e.root : i, i.emit = $p.bind(null, i), t.ce && t.ce(i), i
}
let ke = null;
const Om = () => ke || ot,
    Kn = t => {
        ke = t, t.scope.on()
    },
    dn = () => {
        ke && ke.scope.off(), ke = null
    };

function sf(t) {
    return t.vnode.shapeFlag & 4
}
let $s = !1;

function Fm(t, e = !1) {
    $s = e;
    const {
        props: n,
        children: s
    } = t.vnode, r = sf(t);
    gm(t, n, r, e), ym(t, s);
    const i = r ? Bm(t, e) : void 0;
    return $s = !1, i
}

function Bm(t, e) {
    const n = t.type;
    t.accessCache = Object.create(null), t.proxy = Ga(new Proxy(t.ctx, Mm));
    const {
        setup: s
    } = n;
    if (s) {
        const r = t.setupContext = s.length > 1 ? Vm(t) : null;
        Kn(t), as();
        const i = qt(s, t, 0, [t.props, r]);
        if (cs(), dn(), nh(i)) {
            if (i.then(dn, dn), e) return i.then(o => {
                Sl(t, o, e)
            }).catch(o => {
                _i(o, t, 0)
            });
            t.asyncDep = i
        } else Sl(t, i, e)
    } else rf(t, e)
}

function Sl(t, e, n) {
    Z(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : De(e) && (t.setupState = Ch(e)), rf(t, n)
}
let _l;

function rf(t, e, n) {
    const s = t.type;
    if (!t.render) {
        if (!e && _l && !s.render) {
            const r = s.template;
            if (r) {
                const {
                    isCustomElement: i,
                    compilerOptions: o
                } = t.appContext.config, {
                    delimiters: a,
                    compilerOptions: c
                } = s, l = Ge(Ge({
                    isCustomElement: i,
                    delimiters: a
                }, o), c);
                s.render = _l(r, l)
            }
        }
        t.render = s.render || mt
    }
    Kn(t), as(), lm(t), cs(), dn()
}

function Um(t) {
    return new Proxy(t.attrs, {
        get(e, n) {
            return at(t, "get", "$attrs"), e[n]
        }
    })
}

function Vm(t) {
    const e = s => {
        t.exposed = s || {}
    };
    let n;
    return {
        get attrs() {
            return n || (n = Um(t))
        },
        slots: t.slots,
        emit: t.emit,
        expose: e
    }
}

function tc(t) {
    if (t.exposed) return t.exposeProxy || (t.exposeProxy = new Proxy(Ch(Ga(t.exposed)), {
        get(e, n) {
            if (n in e) return e[n];
            if (n in Qr) return Qr[n](t)
        }
    }))
}

function $m(t) {
    return Z(t) && t.displayName || t.name
}

function jm(t) {
    return Z(t) && "__vccOpts" in t
}
const Ct = (t, e) => Lp(t, e, $s);

function of (t, e, n) {
    const s = arguments.length;
    return s === 2 ? De(e) && !Y(e) ? Xr(e) ? Qe(t, null, [e]) : Qe(t, e) : Qe(t, null, e) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && Xr(n) && (n = [n]), Qe(t, e, n))
}
const Hm = "3.2.31",
    Km = "http://www.w3.org/2000/svg",
    an = typeof document != "undefined" ? document : null,
    Al = an && an.createElement("template"),
    qm = {
        insert: (t, e, n) => {
            e.insertBefore(t, n || null)
        },
        remove: t => {
            const e = t.parentNode;
            e && e.removeChild(t)
        },
        createElement: (t, e, n, s) => {
            const r = e ? an.createElementNS(Km, t) : an.createElement(t, n ? {
                is: n
            } : void 0);
            return t === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r
        },
        createText: t => an.createTextNode(t),
        createComment: t => an.createComment(t),
        setText: (t, e) => {
            t.nodeValue = e
        },
        setElementText: (t, e) => {
            t.textContent = e
        },
        parentNode: t => t.parentNode,
        nextSibling: t => t.nextSibling,
        querySelector: t => an.querySelector(t),
        setScopeId(t, e) {
            t.setAttribute(e, "")
        },
        cloneNode(t) {
            const e = t.cloneNode(!0);
            return "_value" in t && (e._value = t._value), e
        },
        insertStaticContent(t, e, n, s, r, i) {
            const o = n ? n.previousSibling : e.lastChild;
            if (r && (r === i || r.nextSibling))
                for (; e.insertBefore(r.cloneNode(!0), n), !(r === i || !(r = r.nextSibling)););
            else {
                Al.innerHTML = s ? `<svg>${t}</svg>` : t;
                const a = Al.content;
                if (s) {
                    const c = a.firstChild;
                    for (; c.firstChild;) a.appendChild(c.firstChild);
                    a.removeChild(c)
                }
                e.insertBefore(a, n)
            }
            return [o ? o.nextSibling : e.firstChild, n ? n.previousSibling : e.lastChild]
        }
    };

function zm(t, e, n) {
    const s = t._vtc;
    s && (e = (e ? [e, ...s] : [...s]).join(" ")), e == null ? t.removeAttribute("class") : n ? t.setAttribute("class", e) : t.className = e
}

function Gm(t, e, n) {
    const s = t.style,
        r = xe(n);
    if (n && !r) {
        for (const i in n) Qo(s, i, n[i]);
        if (e && !xe(e))
            for (const i in e) n[i] == null && Qo(s, i, "")
    } else {
        const i = s.display;
        r ? e !== n && (s.cssText = n) : e && t.removeAttribute("style"), "_vod" in t && (s.display = i)
    }
}
const Nl = /\s*!important$/;

function Qo(t, e, n) {
    if (Y(n)) n.forEach(s => Qo(t, e, s));
    else if (e.startsWith("--")) t.setProperty(e, n);
    else {
        const s = Wm(t, e);
        Nl.test(n) ? t.setProperty(os(s), n.replace(Nl, ""), "important") : t[s] = n
    }
}
const Rl = ["Webkit", "Moz", "ms"],
    go = {};

function Wm(t, e) {
    const n = go[e];
    if (n) return n;
    let s = _t(e);
    if (s !== "filter" && s in t) return go[e] = s;
    s = Ii(s);
    for (let r = 0; r < Rl.length; r++) {
        const i = Rl[r] + s;
        if (i in t) return go[e] = i
    }
    return e
}
const Dl = "http://www.w3.org/1999/xlink";

function Ym(t, e, n, s, r) {
    if (s && e.startsWith("xlink:")) n == null ? t.removeAttributeNS(Dl, e.slice(6, e.length)) : t.setAttributeNS(Dl, e, n);
    else {
        const i = zg(e);
        n == null || i && !Zu(n) ? t.removeAttribute(e) : t.setAttribute(e, i ? "" : n)
    }
}

function Xm(t, e, n, s, r, i, o) {
    if (e === "innerHTML" || e === "textContent") {
        s && o(s, r, i), t[e] = n == null ? "" : n;
        return
    }
    if (e === "value" && t.tagName !== "PROGRESS" && !t.tagName.includes("-")) {
        t._value = n;
        const a = n == null ? "" : n;
        (t.value !== a || t.tagName === "OPTION") && (t.value = a), n == null && t.removeAttribute(e);
        return
    }
    if (n === "" || n == null) {
        const a = typeof t[e];
        if (a === "boolean") {
            t[e] = Zu(n);
            return
        } else if (n == null && a === "string") {
            t[e] = "", t.removeAttribute(e);
            return
        } else if (a === "number") {
            try {
                t[e] = 0
            } catch {}
            t.removeAttribute(e);
            return
        }
    }
    try {
        t[e] = n
    } catch {}
}
let Jr = Date.now,
    af = !1;
if (typeof window != "undefined") {
    Jr() > document.createEvent("Event").timeStamp && (Jr = () => performance.now());
    const t = navigator.userAgent.match(/firefox\/(\d+)/i);
    af = !!(t && Number(t[1]) <= 53)
}
let Jo = 0;
const Qm = Promise.resolve(),
    Jm = () => {
        Jo = 0
    },
    Zm = () => Jo || (Qm.then(Jm), Jo = Jr());

function Mn(t, e, n, s) {
    t.addEventListener(e, n, s)
}

function ey(t, e, n, s) {
    t.removeEventListener(e, n, s)
}

function ty(t, e, n, s, r = null) {
    const i = t._vei || (t._vei = {}),
        o = i[e];
    if (s && o) o.value = s;
    else {
        const [a, c] = ny(e);
        if (s) {
            const l = i[e] = sy(s, r);
            Mn(t, a, l, c)
        } else o && (ey(t, a, o, c), i[e] = void 0)
    }
}
const Pl = /(?:Once|Passive|Capture)$/;

function ny(t) {
    let e;
    if (Pl.test(t)) {
        e = {};
        let n;
        for (; n = t.match(Pl);) t = t.slice(0, t.length - n[0].length), e[n[0].toLowerCase()] = !0
    }
    return [os(t.slice(2)), e]
}

function sy(t, e) {
    const n = s => {
        const r = s.timeStamp || Jr();
        (af || r >= n.attached - 1) && dt(ry(s, n.value), e, 5, [s])
    };
    return n.value = t, n.attached = Zm(), n
}

function ry(t, e) {
    if (Y(e)) {
        const n = t.stopImmediatePropagation;
        return t.stopImmediatePropagation = () => {
            n.call(t), t._stopped = !0
        }, e.map(s => r => !r._stopped && s && s(r))
    } else return e
}
const Ml = /^on[a-z]/,
    iy = (t, e, n, s, r = !1, i, o, a, c) => {
        e === "class" ? zm(t, s, r) : e === "style" ? Gm(t, n, s) : Ti(e) ? Fa(e) || ty(t, e, n, s, o) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : oy(t, e, s, r)) ? Xm(t, e, s, i, o, a, c) : (e === "true-value" ? t._trueValue = s : e === "false-value" && (t._falseValue = s), Ym(t, e, s, r))
    };

function oy(t, e, n, s) {
    return s ? !!(e === "innerHTML" || e === "textContent" || e in t && Ml.test(e) && Z(n)) : e === "spellcheck" || e === "draggable" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA" || Ml.test(e) && xe(n) ? !1 : e in t
}
const ay = {
    name: String,
    type: String,
    css: {
        type: Boolean,
        default: !0
    },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
};
Jp.props;
const kl = t => {
    const e = t.props["onUpdate:modelValue"];
    return Y(e) ? n => Lr(e, n) : e
};

function cy(t) {
    t.target.composing = !0
}

function xl(t) {
    const e = t.target;
    e.composing && (e.composing = !1, ly(e, "input"))
}

function ly(t, e) {
    const n = document.createEvent("HTMLEvents");
    n.initEvent(e, !0, !0), t.dispatchEvent(n)
}
const Kb = {
        created(t, {
            modifiers: {
                lazy: e,
                trim: n,
                number: s
            }
        }, r) {
            t._assign = kl(r);
            const i = s || r.props && r.props.type === "number";
            Mn(t, e ? "change" : "input", o => {
                if (o.target.composing) return;
                let a = t.value;
                n ? a = a.trim() : i && (a = Oo(a)), t._assign(a)
            }), n && Mn(t, "change", () => {
                t.value = t.value.trim()
            }), e || (Mn(t, "compositionstart", cy), Mn(t, "compositionend", xl), Mn(t, "change", xl))
        },
        mounted(t, {
            value: e
        }) {
            t.value = e == null ? "" : e
        },
        beforeUpdate(t, {
            value: e,
            modifiers: {
                lazy: n,
                trim: s,
                number: r
            }
        }, i) {
            if (t._assign = kl(i), t.composing || document.activeElement === t && (n || s && t.value.trim() === e || (r || t.type === "number") && Oo(t.value) === e)) return;
            const o = e == null ? "" : e;
            t.value !== o && (t.value = o)
        }
    },
    uy = ["ctrl", "shift", "alt", "meta"],
    hy = {
        stop: t => t.stopPropagation(),
        prevent: t => t.preventDefault(),
        self: t => t.target !== t.currentTarget,
        ctrl: t => !t.ctrlKey,
        shift: t => !t.shiftKey,
        alt: t => !t.altKey,
        meta: t => !t.metaKey,
        left: t => "button" in t && t.button !== 0,
        middle: t => "button" in t && t.button !== 1,
        right: t => "button" in t && t.button !== 2,
        exact: (t, e) => uy.some(n => t[`${n}Key`] && !e.includes(n))
    },
    qb = (t, e) => (n, ...s) => {
        for (let r = 0; r < e.length; r++) {
            const i = hy[e[r]];
            if (i && i(n, e)) return
        }
        return t(n, ...s)
    },
    zb = {
        beforeMount(t, {
            value: e
        }, {
            transition: n
        }) {
            t._vod = t.style.display === "none" ? "" : t.style.display, n && e ? n.beforeEnter(t) : vs(t, e)
        },
        mounted(t, {
            value: e
        }, {
            transition: n
        }) {
            n && e && n.enter(t)
        },
        updated(t, {
            value: e,
            oldValue: n
        }, {
            transition: s
        }) {
            !e != !n && (s ? e ? (s.beforeEnter(t), vs(t, !0), s.enter(t)) : s.leave(t, () => {
                vs(t, !1)
            }) : vs(t, e))
        },
        beforeUnmount(t, {
            value: e
        }) {
            vs(t, e)
        }
    };

function vs(t, e) {
    t.style.display = e ? t._vod : "none"
}
const fy = Ge({
    patchProp: iy
}, qm);
let Ll;

function dy() {
    return Ll || (Ll = Tm(fy))
}
const Gb = (...t) => {
    const e = dy().createApp(...t),
        {
            mount: n
        } = e;
    return e.mount = s => {
        const r = gy(s);
        if (!r) return;
        const i = e._component;
        !Z(i) && !i.render && !i.template && (i.template = r.innerHTML), r.innerHTML = "";
        const o = n(r, !1, r instanceof SVGElement);
        return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o
    }, e
};

function gy(t) {
    return xe(t) ? document.querySelector(t) : t
}
var py = !1;
/*!
 * pinia v2.0.12
 * (c) 2022 Eduardo San Martin Morote
 * @license MIT
 */
const my = Symbol();
var Ol;
(function(t) {
    t.direct = "direct", t.patchObject = "patch object", t.patchFunction = "patch function"
})(Ol || (Ol = {}));

function Wb() {
    const t = sp(!0),
        e = t.run(() => Th({}));
    let n = [],
        s = [];
    const r = Ga({
        install(i) {
            r._a = i, i.provide(my, r), i.config.globalProperties.$pinia = r, s.forEach(o => n.push(o)), s = []
        },
        use(i) {
            return !this._a && !py ? s.push(i) : n.push(i), this
        },
        _p: n,
        _a: null,
        _e: t,
        _s: new Map,
        state: e
    });
    return r
}
/*!
 * vue-router v4.0.14
 * (c) 2022 Eduardo San Martin Morote
 * @license MIT
 */
const cf = typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol",
    ls = t => cf ? Symbol(t) : "_vr_" + t,
    yy = ls("rvlm"),
    Fl = ls("rvd"),
    Pi = ls("r"),
    nc = ls("rl"),
    Zo = ls("rvl"),
    kn = typeof window != "undefined";

function wy(t) {
    return t.__esModule || cf && t[Symbol.toStringTag] === "Module"
}
const de = Object.assign;

function po(t, e) {
    const n = {};
    for (const s in e) {
        const r = e[s];
        n[s] = Array.isArray(r) ? r.map(t) : t(r)
    }
    return n
}
const Ds = () => {},
    vy = /\/$/,
    Ey = t => t.replace(vy, "");

function mo(t, e, n = "/") {
    let s, r = {},
        i = "",
        o = "";
    const a = e.indexOf("?"),
        c = e.indexOf("#", a > -1 ? a : 0);
    return a > -1 && (s = e.slice(0, a), i = e.slice(a + 1, c > -1 ? c : e.length), r = t(i)), c > -1 && (s = s || e.slice(0, c), o = e.slice(c, e.length)), s = Iy(s != null ? s : e, n), {
        fullPath: s + (i && "?") + i + o,
        path: s,
        query: r,
        hash: o
    }
}

function Ty(t, e) {
    const n = e.query ? t(e.query) : "";
    return e.path + (n && "?") + n + (e.hash || "")
}

function Bl(t, e) {
    return !e || !t.toLowerCase().startsWith(e.toLowerCase()) ? t : t.slice(e.length) || "/"
}

function by(t, e, n) {
    const s = e.matched.length - 1,
        r = n.matched.length - 1;
    return s > -1 && s === r && qn(e.matched[s], n.matched[r]) && lf(e.params, n.params) && t(e.query) === t(n.query) && e.hash === n.hash
}

function qn(t, e) {
    return (t.aliasOf || t) === (e.aliasOf || e)
}

function lf(t, e) {
    if (Object.keys(t).length !== Object.keys(e).length) return !1;
    for (const n in t)
        if (!Cy(t[n], e[n])) return !1;
    return !0
}

function Cy(t, e) {
    return Array.isArray(t) ? Ul(t, e) : Array.isArray(e) ? Ul(e, t) : t === e
}

function Ul(t, e) {
    return Array.isArray(e) ? t.length === e.length && t.every((n, s) => n === e[s]) : t.length === 1 && t[0] === e
}

function Iy(t, e) {
    if (t.startsWith("/")) return t;
    if (!t) return e;
    const n = e.split("/"),
        s = t.split("/");
    let r = n.length - 1,
        i, o;
    for (i = 0; i < s.length; i++)
        if (o = s[i], !(r === 1 || o === "."))
            if (o === "..") r--;
            else break;
    return n.slice(0, r).join("/") + "/" + s.slice(i - (i === s.length ? 1 : 0)).join("/")
}
var js;
(function(t) {
    t.pop = "pop", t.push = "push"
})(js || (js = {}));
var Ps;
(function(t) {
    t.back = "back", t.forward = "forward", t.unknown = ""
})(Ps || (Ps = {}));

function Sy(t) {
    if (!t)
        if (kn) {
            const e = document.querySelector("base");
            t = e && e.getAttribute("href") || "/", t = t.replace(/^\w+:\/\/[^\/]+/, "")
        } else t = "/";
    return t[0] !== "/" && t[0] !== "#" && (t = "/" + t), Ey(t)
}
const _y = /^[^#]+#/;

function Ay(t, e) {
    return t.replace(_y, "#") + e
}

function Ny(t, e) {
    const n = document.documentElement.getBoundingClientRect(),
        s = t.getBoundingClientRect();
    return {
        behavior: e.behavior,
        left: s.left - n.left - (e.left || 0),
        top: s.top - n.top - (e.top || 0)
    }
}
const Mi = () => ({
    left: window.pageXOffset,
    top: window.pageYOffset
});

function Ry(t) {
    let e;
    if ("el" in t) {
        const n = t.el,
            s = typeof n == "string" && n.startsWith("#"),
            r = typeof n == "string" ? s ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
        if (!r) return;
        e = Ny(r, t)
    } else e = t;
    "scrollBehavior" in document.documentElement.style ? window.scrollTo(e) : window.scrollTo(e.left != null ? e.left : window.pageXOffset, e.top != null ? e.top : window.pageYOffset)
}

function Vl(t, e) {
    return (history.state ? history.state.position - e : -1) + t
}
const ea = new Map;

function Dy(t, e) {
    ea.set(t, e)
}

function Py(t) {
    const e = ea.get(t);
    return ea.delete(t), e
}
let My = () => location.protocol + "//" + location.host;

function uf(t, e) {
    const {
        pathname: n,
        search: s,
        hash: r
    } = e, i = t.indexOf("#");
    if (i > -1) {
        let a = r.includes(t.slice(i)) ? t.slice(i).length : 1,
            c = r.slice(a);
        return c[0] !== "/" && (c = "/" + c), Bl(c, "")
    }
    return Bl(n, t) + s + r
}

function ky(t, e, n, s) {
    let r = [],
        i = [],
        o = null;
    const a = ({
        state: f
    }) => {
        const g = uf(t, location),
            m = n.value,
            w = e.value;
        let C = 0;
        if (f) {
            if (n.value = g, e.value = f, o && o === m) {
                o = null;
                return
            }
            C = w ? f.position - w.position : 0
        } else s(g);
        r.forEach(v => {
            v(n.value, m, {
                delta: C,
                type: js.pop,
                direction: C ? C > 0 ? Ps.forward : Ps.back : Ps.unknown
            })
        })
    };

    function c() {
        o = n.value
    }

    function l(f) {
        r.push(f);
        const g = () => {
            const m = r.indexOf(f);
            m > -1 && r.splice(m, 1)
        };
        return i.push(g), g
    }

    function u() {
        const {
            history: f
        } = window;
        !f.state || f.replaceState(de({}, f.state, {
            scroll: Mi()
        }), "")
    }

    function h() {
        for (const f of i) f();
        i = [], window.removeEventListener("popstate", a), window.removeEventListener("beforeunload", u)
    }
    return window.addEventListener("popstate", a), window.addEventListener("beforeunload", u), {
        pauseListeners: c,
        listen: l,
        destroy: h
    }
}

function $l(t, e, n, s = !1, r = !1) {
    return {
        back: t,
        current: e,
        forward: n,
        replaced: s,
        position: window.history.length,
        scroll: r ? Mi() : null
    }
}

function xy(t) {
    const {
        history: e,
        location: n
    } = window, s = {
        value: uf(t, n)
    }, r = {
        value: e.state
    };
    r.value || i(s.value, {
        back: null,
        current: s.value,
        forward: null,
        position: e.length - 1,
        replaced: !0,
        scroll: null
    }, !0);

    function i(c, l, u) {
        const h = t.indexOf("#"),
            f = h > -1 ? (n.host && document.querySelector("base") ? t : t.slice(h)) + c : My() + t + c;
        try {
            e[u ? "replaceState" : "pushState"](l, "", f), r.value = l
        } catch (g) {
            console.error(g), n[u ? "replace" : "assign"](f)
        }
    }

    function o(c, l) {
        const u = de({}, e.state, $l(r.value.back, c, r.value.forward, !0), l, {
            position: r.value.position
        });
        i(c, u, !0), s.value = c
    }

    function a(c, l) {
        const u = de({}, r.value, e.state, {
            forward: c,
            scroll: Mi()
        });
        i(u.current, u, !0);
        const h = de({}, $l(s.value, c, null), {
            position: u.position + 1
        }, l);
        i(c, h, !1), s.value = c
    }
    return {
        location: s,
        state: r,
        push: a,
        replace: o
    }
}

function Yb(t) {
    t = Sy(t);
    const e = xy(t),
        n = ky(t, e.state, e.location, e.replace);

    function s(i, o = !0) {
        o || n.pauseListeners(), history.go(i)
    }
    const r = de({
        location: "",
        base: t,
        go: s,
        createHref: Ay.bind(null, t)
    }, e, n);
    return Object.defineProperty(r, "location", {
        enumerable: !0,
        get: () => e.location.value
    }), Object.defineProperty(r, "state", {
        enumerable: !0,
        get: () => e.state.value
    }), r
}

function Ly(t) {
    return typeof t == "string" || t && typeof t == "object"
}

function hf(t) {
    return typeof t == "string" || typeof t == "symbol"
}
const Bt = {
        path: "/",
        name: void 0,
        params: {},
        query: {},
        hash: "",
        fullPath: "/",
        matched: [],
        meta: {},
        redirectedFrom: void 0
    },
    ff = ls("nf");
var jl;
(function(t) {
    t[t.aborted = 4] = "aborted", t[t.cancelled = 8] = "cancelled", t[t.duplicated = 16] = "duplicated"
})(jl || (jl = {}));

function zn(t, e) {
    return de(new Error, {
        type: t,
        [ff]: !0
    }, e)
}

function Ut(t, e) {
    return t instanceof Error && ff in t && (e == null || !!(t.type & e))
}
const Hl = "[^/]+?",
    Oy = {
        sensitive: !1,
        strict: !1,
        start: !0,
        end: !0
    },
    Fy = /[.+*?^${}()[\]/\\]/g;

function By(t, e) {
    const n = de({}, Oy, e),
        s = [];
    let r = n.start ? "^" : "";
    const i = [];
    for (const l of t) {
        const u = l.length ? [] : [90];
        n.strict && !l.length && (r += "/");
        for (let h = 0; h < l.length; h++) {
            const f = l[h];
            let g = 40 + (n.sensitive ? .25 : 0);
            if (f.type === 0) h || (r += "/"), r += f.value.replace(Fy, "\\$&"), g += 40;
            else if (f.type === 1) {
                const {
                    value: m,
                    repeatable: w,
                    optional: C,
                    regexp: v
                } = f;
                i.push({
                    name: m,
                    repeatable: w,
                    optional: C
                });
                const _ = v || Hl;
                if (_ !== Hl) {
                    g += 10;
                    try {
                        new RegExp(`(${_})`)
                    } catch (A) {
                        throw new Error(`Invalid custom RegExp for param "${m}" (${_}): ` + A.message)
                    }
                }
                let R = w ? `((?:${_})(?:/(?:${_}))*)` : `(${_})`;
                h || (R = C && l.length < 2 ? `(?:/${R})` : "/" + R), C && (R += "?"), r += R, g += 20, C && (g += -8), w && (g += -20), _ === ".*" && (g += -50)
            }
            u.push(g)
        }
        s.push(u)
    }
    if (n.strict && n.end) {
        const l = s.length - 1;
        s[l][s[l].length - 1] += .7000000000000001
    }
    n.strict || (r += "/?"), n.end ? r += "$" : n.strict && (r += "(?:/|$)");
    const o = new RegExp(r, n.sensitive ? "" : "i");

    function a(l) {
        const u = l.match(o),
            h = {};
        if (!u) return null;
        for (let f = 1; f < u.length; f++) {
            const g = u[f] || "",
                m = i[f - 1];
            h[m.name] = g && m.repeatable ? g.split("/") : g
        }
        return h
    }

    function c(l) {
        let u = "",
            h = !1;
        for (const f of t) {
            (!h || !u.endsWith("/")) && (u += "/"), h = !1;
            for (const g of f)
                if (g.type === 0) u += g.value;
                else if (g.type === 1) {
                const {
                    value: m,
                    repeatable: w,
                    optional: C
                } = g, v = m in l ? l[m] : "";
                if (Array.isArray(v) && !w) throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);
                const _ = Array.isArray(v) ? v.join("/") : v;
                if (!_)
                    if (C) f.length < 2 && (u.endsWith("/") ? u = u.slice(0, -1) : h = !0);
                    else throw new Error(`Missing required param "${m}"`);
                u += _
            }
        }
        return u
    }
    return {
        re: o,
        score: s,
        keys: i,
        parse: a,
        stringify: c
    }
}

function Uy(t, e) {
    let n = 0;
    for (; n < t.length && n < e.length;) {
        const s = e[n] - t[n];
        if (s) return s;
        n++
    }
    return t.length < e.length ? t.length === 1 && t[0] === 40 + 40 ? -1 : 1 : t.length > e.length ? e.length === 1 && e[0] === 40 + 40 ? 1 : -1 : 0
}

function Vy(t, e) {
    let n = 0;
    const s = t.score,
        r = e.score;
    for (; n < s.length && n < r.length;) {
        const i = Uy(s[n], r[n]);
        if (i) return i;
        n++
    }
    return r.length - s.length
}
const $y = {
        type: 0,
        value: ""
    },
    jy = /[a-zA-Z0-9_]/;

function Hy(t) {
    if (!t) return [
        []
    ];
    if (t === "/") return [
        [$y]
    ];
    if (!t.startsWith("/")) throw new Error(`Invalid path "${t}"`);

    function e(g) {
        throw new Error(`ERR (${n})/"${l}": ${g}`)
    }
    let n = 0,
        s = n;
    const r = [];
    let i;

    function o() {
        i && r.push(i), i = []
    }
    let a = 0,
        c, l = "",
        u = "";

    function h() {
        !l || (n === 0 ? i.push({
            type: 0,
            value: l
        }) : n === 1 || n === 2 || n === 3 ? (i.length > 1 && (c === "*" || c === "+") && e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`), i.push({
            type: 1,
            value: l,
            regexp: u,
            repeatable: c === "*" || c === "+",
            optional: c === "*" || c === "?"
        })) : e("Invalid state to consume buffer"), l = "")
    }

    function f() {
        l += c
    }
    for (; a < t.length;) {
        if (c = t[a++], c === "\\" && n !== 2) {
            s = n, n = 4;
            continue
        }
        switch (n) {
            case 0:
                c === "/" ? (l && h(), o()) : c === ":" ? (h(), n = 1) : f();
                break;
            case 4:
                f(), n = s;
                break;
            case 1:
                c === "(" ? n = 2 : jy.test(c) ? f() : (h(), n = 0, c !== "*" && c !== "?" && c !== "+" && a--);
                break;
            case 2:
                c === ")" ? u[u.length - 1] == "\\" ? u = u.slice(0, -1) + c : n = 3 : u += c;
                break;
            case 3:
                h(), n = 0, c !== "*" && c !== "?" && c !== "+" && a--, u = "";
                break;
            default:
                e("Unknown state");
                break
        }
    }
    return n === 2 && e(`Unfinished custom RegExp for param "${l}"`), h(), o(), r
}

function Ky(t, e, n) {
    const s = By(Hy(t.path), n),
        r = de(s, {
            record: t,
            parent: e,
            children: [],
            alias: []
        });
    return e && !r.record.aliasOf == !e.record.aliasOf && e.children.push(r), r
}

function qy(t, e) {
    const n = [],
        s = new Map;
    e = ql({
        strict: !1,
        end: !0,
        sensitive: !1
    }, e);

    function r(u) {
        return s.get(u)
    }

    function i(u, h, f) {
        const g = !f,
            m = Gy(u);
        m.aliasOf = f && f.record;
        const w = ql(e, u),
            C = [m];
        if ("alias" in u) {
            const R = typeof u.alias == "string" ? [u.alias] : u.alias;
            for (const A of R) C.push(de({}, m, {
                components: f ? f.record.components : m.components,
                path: A,
                aliasOf: f ? f.record : m
            }))
        }
        let v, _;
        for (const R of C) {
            const {
                path: A
            } = R;
            if (h && A[0] !== "/") {
                const K = h.record.path,
                    X = K[K.length - 1] === "/" ? "" : "/";
                R.path = h.record.path + (A && X + A)
            }
            if (v = Ky(R, h, w), f ? f.alias.push(v) : (_ = _ || v, _ !== v && _.alias.push(v), g && u.name && !Kl(v) && o(u.name)), "children" in m) {
                const K = m.children;
                for (let X = 0; X < K.length; X++) i(K[X], v, f && f.children[X])
            }
            f = f || v, c(v)
        }
        return _ ? () => {
            o(_)
        } : Ds
    }

    function o(u) {
        if (hf(u)) {
            const h = s.get(u);
            h && (s.delete(u), n.splice(n.indexOf(h), 1), h.children.forEach(o), h.alias.forEach(o))
        } else {
            const h = n.indexOf(u);
            h > -1 && (n.splice(h, 1), u.record.name && s.delete(u.record.name), u.children.forEach(o), u.alias.forEach(o))
        }
    }

    function a() {
        return n
    }

    function c(u) {
        let h = 0;
        for (; h < n.length && Vy(u, n[h]) >= 0 && (u.record.path !== n[h].record.path || !df(u, n[h]));) h++;
        n.splice(h, 0, u), u.record.name && !Kl(u) && s.set(u.record.name, u)
    }

    function l(u, h) {
        let f, g = {},
            m, w;
        if ("name" in u && u.name) {
            if (f = s.get(u.name), !f) throw zn(1, {
                location: u
            });
            w = f.record.name, g = de(zy(h.params, f.keys.filter(_ => !_.optional).map(_ => _.name)), u.params), m = f.stringify(g)
        } else if ("path" in u) m = u.path, f = n.find(_ => _.re.test(m)), f && (g = f.parse(m), w = f.record.name);
        else {
            if (f = h.name ? s.get(h.name) : n.find(_ => _.re.test(h.path)), !f) throw zn(1, {
                location: u,
                currentLocation: h
            });
            w = f.record.name, g = de({}, h.params, u.params), m = f.stringify(g)
        }
        const C = [];
        let v = f;
        for (; v;) C.unshift(v.record), v = v.parent;
        return {
            name: w,
            path: m,
            params: g,
            matched: C,
            meta: Yy(C)
        }
    }
    return t.forEach(u => i(u)), {
        addRoute: i,
        resolve: l,
        removeRoute: o,
        getRoutes: a,
        getRecordMatcher: r
    }
}

function zy(t, e) {
    const n = {};
    for (const s of e) s in t && (n[s] = t[s]);
    return n
}

function Gy(t) {
    return {
        path: t.path,
        redirect: t.redirect,
        name: t.name,
        meta: t.meta || {},
        aliasOf: void 0,
        beforeEnter: t.beforeEnter,
        props: Wy(t),
        children: t.children || [],
        instances: {},
        leaveGuards: new Set,
        updateGuards: new Set,
        enterCallbacks: {},
        components: "components" in t ? t.components || {} : {
            default: t.component
        }
    }
}

function Wy(t) {
    const e = {},
        n = t.props || !1;
    if ("component" in t) e.default = n;
    else
        for (const s in t.components) e[s] = typeof n == "boolean" ? n : n[s];
    return e
}

function Kl(t) {
    for (; t;) {
        if (t.record.aliasOf) return !0;
        t = t.parent
    }
    return !1
}

function Yy(t) {
    return t.reduce((e, n) => de(e, n.meta), {})
}

function ql(t, e) {
    const n = {};
    for (const s in t) n[s] = s in e ? e[s] : t[s];
    return n
}

function df(t, e) {
    return e.children.some(n => n === t || df(t, n))
}
const gf = /#/g,
    Xy = /&/g,
    Qy = /\//g,
    Jy = /=/g,
    Zy = /\?/g,
    pf = /\+/g,
    e0 = /%5B/g,
    t0 = /%5D/g,
    mf = /%5E/g,
    n0 = /%60/g,
    yf = /%7B/g,
    s0 = /%7C/g,
    wf = /%7D/g,
    r0 = /%20/g;

function sc(t) {
    return encodeURI("" + t).replace(s0, "|").replace(e0, "[").replace(t0, "]")
}

function i0(t) {
    return sc(t).replace(yf, "{").replace(wf, "}").replace(mf, "^")
}

function ta(t) {
    return sc(t).replace(pf, "%2B").replace(r0, "+").replace(gf, "%23").replace(Xy, "%26").replace(n0, "`").replace(yf, "{").replace(wf, "}").replace(mf, "^")
}

function o0(t) {
    return ta(t).replace(Jy, "%3D")
}

function a0(t) {
    return sc(t).replace(gf, "%23").replace(Zy, "%3F")
}

function c0(t) {
    return t == null ? "" : a0(t).replace(Qy, "%2F")
}

function Zr(t) {
    try {
        return decodeURIComponent("" + t)
    } catch {}
    return "" + t
}

function l0(t) {
    const e = {};
    if (t === "" || t === "?") return e;
    const s = (t[0] === "?" ? t.slice(1) : t).split("&");
    for (let r = 0; r < s.length; ++r) {
        const i = s[r].replace(pf, " "),
            o = i.indexOf("="),
            a = Zr(o < 0 ? i : i.slice(0, o)),
            c = o < 0 ? null : Zr(i.slice(o + 1));
        if (a in e) {
            let l = e[a];
            Array.isArray(l) || (l = e[a] = [l]), l.push(c)
        } else e[a] = c
    }
    return e
}

function zl(t) {
    let e = "";
    for (let n in t) {
        const s = t[n];
        if (n = o0(n), s == null) {
            s !== void 0 && (e += (e.length ? "&" : "") + n);
            continue
        }(Array.isArray(s) ? s.map(i => i && ta(i)) : [s && ta(s)]).forEach(i => {
            i !== void 0 && (e += (e.length ? "&" : "") + n, i != null && (e += "=" + i))
        })
    }
    return e
}

function u0(t) {
    const e = {};
    for (const n in t) {
        const s = t[n];
        s !== void 0 && (e[n] = Array.isArray(s) ? s.map(r => r == null ? null : "" + r) : s == null ? s : "" + s)
    }
    return e
}

function Es() {
    let t = [];

    function e(s) {
        return t.push(s), () => {
            const r = t.indexOf(s);
            r > -1 && t.splice(r, 1)
        }
    }

    function n() {
        t = []
    }
    return {
        add: e,
        list: () => t,
        reset: n
    }
}

function jt(t, e, n, s, r) {
    const i = s && (s.enterCallbacks[r] = s.enterCallbacks[r] || []);
    return () => new Promise((o, a) => {
        const c = h => {
                h === !1 ? a(zn(4, {
                    from: n,
                    to: e
                })) : h instanceof Error ? a(h) : Ly(h) ? a(zn(2, {
                    from: e,
                    to: h
                })) : (i && s.enterCallbacks[r] === i && typeof h == "function" && i.push(h), o())
            },
            l = t.call(s && s.instances[r], e, n, c);
        let u = Promise.resolve(l);
        t.length < 3 && (u = u.then(c)), u.catch(h => a(h))
    })
}

function yo(t, e, n, s) {
    const r = [];
    for (const i of t)
        for (const o in i.components) {
            let a = i.components[o];
            if (!(e !== "beforeRouteEnter" && !i.instances[o]))
                if (h0(a)) {
                    const l = (a.__vccOpts || a)[e];
                    l && r.push(jt(l, n, s, i, o))
                } else {
                    let c = a();
                    r.push(() => c.then(l => {
                        if (!l) return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));
                        const u = wy(l) ? l.default : l;
                        i.components[o] = u;
                        const f = (u.__vccOpts || u)[e];
                        return f && jt(f, n, s, i, o)()
                    }))
                }
        }
    return r
}

function h0(t) {
    return typeof t == "object" || "displayName" in t || "props" in t || "__vccOpts" in t
}

function Gl(t) {
    const e = St(Pi),
        n = St(nc),
        s = Ct(() => e.resolve(_s(t.to))),
        r = Ct(() => {
            const {
                matched: c
            } = s.value, {
                length: l
            } = c, u = c[l - 1], h = n.matched;
            if (!u || !h.length) return -1;
            const f = h.findIndex(qn.bind(null, u));
            if (f > -1) return f;
            const g = Wl(c[l - 2]);
            return l > 1 && Wl(u) === g && h[h.length - 1].path !== g ? h.findIndex(qn.bind(null, c[l - 2])) : f
        }),
        i = Ct(() => r.value > -1 && p0(n.params, s.value.params)),
        o = Ct(() => r.value > -1 && r.value === n.matched.length - 1 && lf(n.params, s.value.params));

    function a(c = {}) {
        return g0(c) ? e[_s(t.replace) ? "replace" : "push"](_s(t.to)).catch(Ds) : Promise.resolve()
    }
    return {
        route: s,
        href: Ct(() => s.value.href),
        isActive: i,
        isExactActive: o,
        navigate: a
    }
}
const f0 = Oh({
        name: "RouterLink",
        props: {
            to: {
                type: [String, Object],
                required: !0
            },
            replace: Boolean,
            activeClass: String,
            exactActiveClass: String,
            custom: Boolean,
            ariaCurrentValue: {
                type: String,
                default: "page"
            }
        },
        useLink: Gl,
        setup(t, {
            slots: e
        }) {
            const n = rr(Gl(t)),
                {
                    options: s
                } = St(Pi),
                r = Ct(() => ({
                    [Yl(t.activeClass, s.linkActiveClass, "router-link-active")]: n.isActive,
                    [Yl(t.exactActiveClass, s.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
                }));
            return () => {
                const i = e.default && e.default(n);
                return t.custom ? i : of ("a", {
                    "aria-current": n.isExactActive ? t.ariaCurrentValue : null,
                    href: n.href,
                    onClick: n.navigate,
                    class: r.value
                }, i)
            }
        }
    }),
    d0 = f0;

function g0(t) {
    if (!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey) && !t.defaultPrevented && !(t.button !== void 0 && t.button !== 0)) {
        if (t.currentTarget && t.currentTarget.getAttribute) {
            const e = t.currentTarget.getAttribute("target");
            if (/\b_blank\b/i.test(e)) return
        }
        return t.preventDefault && t.preventDefault(), !0
    }
}

function p0(t, e) {
    for (const n in e) {
        const s = e[n],
            r = t[n];
        if (typeof s == "string") {
            if (s !== r) return !1
        } else if (!Array.isArray(r) || r.length !== s.length || s.some((i, o) => i !== r[o])) return !1
    }
    return !0
}

function Wl(t) {
    return t ? t.aliasOf ? t.aliasOf.path : t.path : ""
}
const Yl = (t, e, n) => t != null ? t : e != null ? e : n,
    m0 = Oh({
        name: "RouterView",
        inheritAttrs: !1,
        props: {
            name: {
                type: String,
                default: "default"
            },
            route: Object
        },
        setup(t, {
            attrs: e,
            slots: n
        }) {
            const s = St(Zo),
                r = Ct(() => t.route || s.value),
                i = St(Fl, 0),
                o = Ct(() => r.value.matched[i]);
            Or(Fl, i + 1), Or(yy, o), Or(Zo, r);
            const a = Th();
            return Fr(() => [a.value, o.value, t.name], ([c, l, u], [h, f, g]) => {
                l && (l.instances[u] = c, f && f !== l && c && c === h && (l.leaveGuards.size || (l.leaveGuards = f.leaveGuards), l.updateGuards.size || (l.updateGuards = f.updateGuards))), c && l && (!f || !qn(l, f) || !h) && (l.enterCallbacks[u] || []).forEach(m => m(c))
            }, {
                flush: "post"
            }), () => {
                const c = r.value,
                    l = o.value,
                    u = l && l.components[t.name],
                    h = t.name;
                if (!u) return Xl(n.default, {
                    Component: u,
                    route: c
                });
                const f = l.props[t.name],
                    g = f ? f === !0 ? c.params : typeof f == "function" ? f(c) : f : null,
                    w = of (u, de({}, g, e, {
                        onVnodeUnmounted: C => {
                            C.component.isUnmounted && (l.instances[h] = null)
                        },
                        ref: a
                    }));
                return Xl(n.default, {
                    Component: w,
                    route: c
                }) || w
            }
        }
    });

function Xl(t, e) {
    if (!t) return null;
    const n = t(e);
    return n.length === 1 ? n[0] : n
}
const y0 = m0;

function Xb(t) {
    const e = qy(t.routes, t),
        n = t.parseQuery || l0,
        s = t.stringifyQuery || zl,
        r = t.history,
        i = Es(),
        o = Es(),
        a = Es(),
        c = Pp(Bt);
    let l = Bt;
    kn && t.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
    const u = po.bind(null, E => "" + E),
        h = po.bind(null, c0),
        f = po.bind(null, Zr);

    function g(E, F) {
        let k, V;
        return hf(E) ? (k = e.getRecordMatcher(E), V = F) : V = E, e.addRoute(V, k)
    }

    function m(E) {
        const F = e.getRecordMatcher(E);
        F && e.removeRoute(F)
    }

    function w() {
        return e.getRoutes().map(E => E.record)
    }

    function C(E) {
        return !!e.getRecordMatcher(E)
    }

    function v(E, F) {
        if (F = de({}, F || c.value), typeof E == "string") {
            const J = mo(n, E, F.path),
                d = e.resolve({
                    path: J.path
                }, F),
                p = r.createHref(J.fullPath);
            return de(J, d, {
                params: f(d.params),
                hash: Zr(J.hash),
                redirectedFrom: void 0,
                href: p
            })
        }
        let k;
        if ("path" in E) k = de({}, E, {
            path: mo(n, E.path, F.path).path
        });
        else {
            const J = de({}, E.params);
            for (const d in J) J[d] == null && delete J[d];
            k = de({}, E, {
                params: h(E.params)
            }), F.params = h(F.params)
        }
        const V = e.resolve(k, F),
            he = E.hash || "";
        V.params = u(f(V.params));
        const me = Ty(s, de({}, E, {
                hash: i0(he),
                path: V.path
            })),
            te = r.createHref(me);
        return de({
            fullPath: me,
            hash: he,
            query: s === zl ? u0(E.query) : E.query || {}
        }, V, {
            redirectedFrom: void 0,
            href: te
        })
    }

    function _(E) {
        return typeof E == "string" ? mo(n, E, c.value.path) : de({}, E)
    }

    function R(E, F) {
        if (l !== E) return zn(8, {
            from: F,
            to: E
        })
    }

    function A(E) {
        return U(E)
    }

    function K(E) {
        return A(de(_(E), {
            replace: !0
        }))
    }

    function X(E) {
        const F = E.matched[E.matched.length - 1];
        if (F && F.redirect) {
            const {
                redirect: k
            } = F;
            let V = typeof k == "function" ? k(E) : k;
            return typeof V == "string" && (V = V.includes("?") || V.includes("#") ? V = _(V) : {
                path: V
            }, V.params = {}), de({
                query: E.query,
                hash: E.hash,
                params: E.params
            }, V)
        }
    }

    function U(E, F) {
        const k = l = v(E),
            V = c.value,
            he = E.state,
            me = E.force,
            te = E.replace === !0,
            J = X(k);
        if (J) return U(de(_(J), {
            state: he,
            force: me,
            replace: te
        }), F || k);
        const d = k;
        d.redirectedFrom = F;
        let p;
        return !me && by(s, V, k) && (p = zn(16, {
            to: d,
            from: V
        }), _n(V, V, !0, !1)), (p ? Promise.resolve(p) : oe(d, V)).catch(y => Ut(y) ? Ut(y, 2) ? y : st(y) : pe(y, d, V)).then(y => {
            if (y) {
                if (Ut(y, 2)) return U(de(_(y.to), {
                    state: he,
                    force: me,
                    replace: te
                }), F || d)
            } else y = Ie(d, V, !0, te, he);
            return we(d, V, y), y
        })
    }

    function ie(E, F) {
        const k = R(E, F);
        return k ? Promise.reject(k) : Promise.resolve()
    }

    function oe(E, F) {
        let k;
        const [V, he, me] = w0(E, F);
        k = yo(V.reverse(), "beforeRouteLeave", E, F);
        for (const J of V) J.leaveGuards.forEach(d => {
            k.push(jt(d, E, F))
        });
        const te = ie.bind(null, E, F);
        return k.push(te), Nn(k).then(() => {
            k = [];
            for (const J of i.list()) k.push(jt(J, E, F));
            return k.push(te), Nn(k)
        }).then(() => {
            k = yo(he, "beforeRouteUpdate", E, F);
            for (const J of he) J.updateGuards.forEach(d => {
                k.push(jt(d, E, F))
            });
            return k.push(te), Nn(k)
        }).then(() => {
            k = [];
            for (const J of E.matched)
                if (J.beforeEnter && !F.matched.includes(J))
                    if (Array.isArray(J.beforeEnter))
                        for (const d of J.beforeEnter) k.push(jt(d, E, F));
                    else k.push(jt(J.beforeEnter, E, F));
            return k.push(te), Nn(k)
        }).then(() => (E.matched.forEach(J => J.enterCallbacks = {}), k = yo(me, "beforeRouteEnter", E, F), k.push(te), Nn(k))).then(() => {
            k = [];
            for (const J of o.list()) k.push(jt(J, E, F));
            return k.push(te), Nn(k)
        }).catch(J => Ut(J, 8) ? J : Promise.reject(J))
    }

    function we(E, F, k) {
        for (const V of a.list()) V(E, F, k)
    }

    function Ie(E, F, k, V, he) {
        const me = R(E, F);
        if (me) return me;
        const te = F === Bt,
            J = kn ? history.state : {};
        k && (V || te ? r.replace(E.fullPath, de({
            scroll: te && J && J.scroll
        }, he)) : r.push(E.fullPath, he)), c.value = E, _n(E, F, k, te), st()
    }
    let Ne;

    function Pe() {
        Ne = r.listen((E, F, k) => {
            const V = v(E),
                he = X(V);
            if (he) {
                U(de(he, {
                    replace: !0
                }), V).catch(Ds);
                return
            }
            l = V;
            const me = c.value;
            kn && Dy(Vl(me.fullPath, k.delta), Mi()), oe(V, me).catch(te => Ut(te, 12) ? te : Ut(te, 2) ? (U(te.to, V).then(J => {
                Ut(J, 20) && !k.delta && k.type === js.pop && r.go(-1, !1)
            }).catch(Ds), Promise.reject()) : (k.delta && r.go(-k.delta, !1), pe(te, V, me))).then(te => {
                te = te || Ie(V, me, !1), te && (k.delta ? r.go(-k.delta, !1) : k.type === js.pop && Ut(te, 20) && r.go(-1, !1)), we(V, me, te)
            }).catch(Ds)
        })
    }
    let In = Es(),
        Sn = Es(),
        Re;

    function pe(E, F, k) {
        st(E);
        const V = Sn.list();
        return V.length ? V.forEach(he => he(E, F, k)) : console.error(E), Promise.reject(E)
    }

    function ue() {
        return Re && c.value !== Bt ? Promise.resolve() : new Promise((E, F) => {
            In.add([E, F])
        })
    }

    function st(E) {
        return Re || (Re = !E, Pe(), In.list().forEach(([F, k]) => E ? k(E) : F()), In.reset()), E
    }

    function _n(E, F, k, V) {
        const {
            scrollBehavior: he
        } = t;
        if (!kn || !he) return Promise.resolve();
        const me = !k && Py(Vl(E.fullPath, 0)) || (V || !k) && history.state && history.state.scroll || null;
        return Sh().then(() => he(E, F, me)).then(te => te && Ry(te)).catch(te => pe(te, E, F))
    }
    const Rt = E => r.go(E);
    let vt;
    const ut = new Set;
    return {
        currentRoute: c,
        addRoute: g,
        removeRoute: m,
        hasRoute: C,
        getRoutes: w,
        resolve: v,
        options: t,
        push: A,
        replace: K,
        go: Rt,
        back: () => Rt(-1),
        forward: () => Rt(1),
        beforeEach: i.add,
        beforeResolve: o.add,
        afterEach: a.add,
        onError: Sn.add,
        isReady: ue,
        install(E) {
            const F = this;
            E.component("RouterLink", d0), E.component("RouterView", y0), E.config.globalProperties.$router = F, Object.defineProperty(E.config.globalProperties, "$route", {
                enumerable: !0,
                get: () => _s(c)
            }), kn && !vt && c.value === Bt && (vt = !0, A(r.location).catch(he => {}));
            const k = {};
            for (const he in Bt) k[he] = Ct(() => c.value[he]);
            E.provide(Pi, F), E.provide(nc, rr(k)), E.provide(Zo, c);
            const V = E.unmount;
            ut.add(E), E.unmount = function() {
                ut.delete(E), ut.size < 1 && (l = Bt, Ne && Ne(), c.value = Bt, vt = !1, Re = !1), V()
            }
        }
    }
}

function Nn(t) {
    return t.reduce((e, n) => e.then(() => n()), Promise.resolve())
}

function w0(t, e) {
    const n = [],
        s = [],
        r = [],
        i = Math.max(e.matched.length, t.matched.length);
    for (let o = 0; o < i; o++) {
        const a = e.matched[o];
        a && (t.matched.find(l => qn(l, a)) ? s.push(a) : n.push(a));
        const c = t.matched[o];
        c && (e.matched.find(l => qn(l, c)) || r.push(c))
    }
    return [n, s, r]
}

function Qb() {
    return St(Pi)
}

function Jb() {
    return St(nc)
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const vf = function(t) {
        const e = [];
        let n = 0;
        for (let s = 0; s < t.length; s++) {
            let r = t.charCodeAt(s);
            r < 128 ? e[n++] = r : r < 2048 ? (e[n++] = r >> 6 | 192, e[n++] = r & 63 | 128) : (r & 64512) === 55296 && s + 1 < t.length && (t.charCodeAt(s + 1) & 64512) === 56320 ? (r = 65536 + ((r & 1023) << 10) + (t.charCodeAt(++s) & 1023), e[n++] = r >> 18 | 240, e[n++] = r >> 12 & 63 | 128, e[n++] = r >> 6 & 63 | 128, e[n++] = r & 63 | 128) : (e[n++] = r >> 12 | 224, e[n++] = r >> 6 & 63 | 128, e[n++] = r & 63 | 128)
        }
        return e
    },
    v0 = function(t) {
        const e = [];
        let n = 0,
            s = 0;
        for (; n < t.length;) {
            const r = t[n++];
            if (r < 128) e[s++] = String.fromCharCode(r);
            else if (r > 191 && r < 224) {
                const i = t[n++];
                e[s++] = String.fromCharCode((r & 31) << 6 | i & 63)
            } else if (r > 239 && r < 365) {
                const i = t[n++],
                    o = t[n++],
                    a = t[n++],
                    c = ((r & 7) << 18 | (i & 63) << 12 | (o & 63) << 6 | a & 63) - 65536;
                e[s++] = String.fromCharCode(55296 + (c >> 10)), e[s++] = String.fromCharCode(56320 + (c & 1023))
            } else {
                const i = t[n++],
                    o = t[n++];
                e[s++] = String.fromCharCode((r & 15) << 12 | (i & 63) << 6 | o & 63)
            }
        }
        return e.join("")
    },
    E0 = {
        byteToCharMap_: null,
        charToByteMap_: null,
        byteToCharMapWebSafe_: null,
        charToByteMapWebSafe_: null,
        ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        get ENCODED_VALS() {
            return this.ENCODED_VALS_BASE + "+/="
        },
        get ENCODED_VALS_WEBSAFE() {
            return this.ENCODED_VALS_BASE + "-_."
        },
        HAS_NATIVE_SUPPORT: typeof atob == "function",
        encodeByteArray(t, e) {
            if (!Array.isArray(t)) throw Error("encodeByteArray takes an array as a parameter");
            this.init_();
            const n = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
                s = [];
            for (let r = 0; r < t.length; r += 3) {
                const i = t[r],
                    o = r + 1 < t.length,
                    a = o ? t[r + 1] : 0,
                    c = r + 2 < t.length,
                    l = c ? t[r + 2] : 0,
                    u = i >> 2,
                    h = (i & 3) << 4 | a >> 4;
                let f = (a & 15) << 2 | l >> 6,
                    g = l & 63;
                c || (g = 64, o || (f = 64)), s.push(n[u], n[h], n[f], n[g])
            }
            return s.join("")
        },
        encodeString(t, e) {
            return this.HAS_NATIVE_SUPPORT && !e ? btoa(t) : this.encodeByteArray(vf(t), e)
        },
        decodeString(t, e) {
            return this.HAS_NATIVE_SUPPORT && !e ? atob(t) : v0(this.decodeStringToByteArray(t, e))
        },
        decodeStringToByteArray(t, e) {
            this.init_();
            const n = e ? this.charToByteMapWebSafe_ : this.charToByteMap_,
                s = [];
            for (let r = 0; r < t.length;) {
                const i = n[t.charAt(r++)],
                    a = r < t.length ? n[t.charAt(r)] : 0;
                ++r;
                const l = r < t.length ? n[t.charAt(r)] : 64;
                ++r;
                const h = r < t.length ? n[t.charAt(r)] : 64;
                if (++r, i == null || a == null || l == null || h == null) throw Error();
                const f = i << 2 | a >> 4;
                if (s.push(f), l !== 64) {
                    const g = a << 4 & 240 | l >> 2;
                    if (s.push(g), h !== 64) {
                        const m = l << 6 & 192 | h;
                        s.push(m)
                    }
                }
            }
            return s
        },
        init_() {
            if (!this.byteToCharMap_) {
                this.byteToCharMap_ = {}, this.charToByteMap_ = {}, this.byteToCharMapWebSafe_ = {}, this.charToByteMapWebSafe_ = {};
                for (let t = 0; t < this.ENCODED_VALS.length; t++) this.byteToCharMap_[t] = this.ENCODED_VALS.charAt(t), this.charToByteMap_[this.byteToCharMap_[t]] = t, this.byteToCharMapWebSafe_[t] = this.ENCODED_VALS_WEBSAFE.charAt(t), this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]] = t, t >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)] = t, this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)] = t)
            }
        }
    },
    T0 = function(t) {
        const e = vf(t);
        return E0.encodeByteArray(e, !0)
    },
    Ef = function(t) {
        return T0(t).replace(/\./g, "")
    };
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class b0 {
    constructor() {
        this.reject = () => {}, this.resolve = () => {}, this.promise = new Promise((e, n) => {
            this.resolve = e, this.reject = n
        })
    }
    wrapCallback(e) {
        return (n, s) => {
            n ? this.reject(n) : this.resolve(s), typeof e == "function" && (this.promise.catch(() => {}), e.length === 1 ? e(n) : e(n, s))
        }
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ki() {
    return typeof navigator != "undefined" && typeof navigator.userAgent == "string" ? navigator.userAgent : ""
}

function C0() {
    return typeof window != "undefined" && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ki())
}

function I0() {
    const t = typeof chrome == "object" ? chrome.runtime : typeof browser == "object" ? browser.runtime : void 0;
    return typeof t == "object" && t.id !== void 0
}

function S0() {
    return typeof navigator == "object" && navigator.product === "ReactNative"
}

function _0() {
    return ki().indexOf("Electron/") >= 0
}

function A0() {
    const t = ki();
    return t.indexOf("MSIE ") >= 0 || t.indexOf("Trident/") >= 0
}

function N0() {
    return ki().indexOf("MSAppHost/") >= 0
}

function R0() {
    return typeof indexedDB == "object"
}

function D0() {
    return new Promise((t, e) => {
        try {
            let n = !0;
            const s = "validate-browser-context-for-indexeddb-analytics-module",
                r = self.indexedDB.open(s);
            r.onsuccess = () => {
                r.result.close(), n || self.indexedDB.deleteDatabase(s), t(!0)
            }, r.onupgradeneeded = () => {
                n = !1
            }, r.onerror = () => {
                var i;
                e(((i = r.error) === null || i === void 0 ? void 0 : i.message) || "")
            }
        } catch (n) {
            e(n)
        }
    })
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const P0 = "FirebaseError";
class xi extends Error {
    constructor(e, n, s) {
        super(n);
        this.code = e, this.customData = s, this.name = P0, Object.setPrototypeOf(this, xi.prototype), Error.captureStackTrace && Error.captureStackTrace(this, Tf.prototype.create)
    }
}
class Tf {
    constructor(e, n, s) {
        this.service = e, this.serviceName = n, this.errors = s
    }
    create(e, ...n) {
        const s = n[0] || {},
            r = `${this.service}/${e}`,
            i = this.errors[e],
            o = i ? M0(i, s) : "Error",
            a = `${this.serviceName}: ${o} (${r}).`;
        return new xi(r, a, s)
    }
}

function M0(t, e) {
    return t.replace(k0, (n, s) => {
        const r = e[s];
        return r != null ? String(r) : `<${s}?>`
    })
}
const k0 = /\{\$([^}]+)}/g;

function na(t, e) {
    if (t === e) return !0;
    const n = Object.keys(t),
        s = Object.keys(e);
    for (const r of n) {
        if (!s.includes(r)) return !1;
        const i = t[r],
            o = e[r];
        if (Ql(i) && Ql(o)) {
            if (!na(i, o)) return !1
        } else if (i !== o) return !1
    }
    for (const r of s)
        if (!n.includes(r)) return !1;
    return !0
}

function Ql(t) {
    return t !== null && typeof t == "object"
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Hs(t) {
    return t && t._delegate ? t._delegate : t
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Is(t, e) {
    return new Promise((n, s) => {
        t.onsuccess = r => {
            n(r.target.result)
        }, t.onerror = r => {
            var i;
            s(`${e}: ${(i=r.target.error)===null||i===void 0?void 0:i.message}`)
        }
    })
}
class Jl {
    constructor(e) {
        this._db = e, this.objectStoreNames = this._db.objectStoreNames
    }
    transaction(e, n) {
        return new bf(this._db.transaction.call(this._db, e, n))
    }
    createObjectStore(e, n) {
        return new Cf(this._db.createObjectStore(e, n))
    }
    close() {
        this._db.close()
    }
}
class bf {
    constructor(e) {
        this._transaction = e, this.complete = new Promise((n, s) => {
            this._transaction.oncomplete = function() {
                n()
            }, this._transaction.onerror = () => {
                s(this._transaction.error)
            }, this._transaction.onabort = () => {
                s(this._transaction.error)
            }
        })
    }
    objectStore(e) {
        return new Cf(this._transaction.objectStore(e))
    }
}
class Cf {
    constructor(e) {
        this._store = e
    }
    index(e) {
        return new Zl(this._store.index(e))
    }
    createIndex(e, n, s) {
        return new Zl(this._store.createIndex(e, n, s))
    }
    get(e) {
        const n = this._store.get(e);
        return Is(n, "Error reading from IndexedDB")
    }
    put(e, n) {
        const s = this._store.put(e, n);
        return Is(s, "Error writing to IndexedDB")
    }
    delete(e) {
        const n = this._store.delete(e);
        return Is(n, "Error deleting from IndexedDB")
    }
    clear() {
        const e = this._store.clear();
        return Is(e, "Error clearing IndexedDB object store")
    }
}
class Zl {
    constructor(e) {
        this._index = e
    }
    get(e) {
        const n = this._index.get(e);
        return Is(n, "Error reading from IndexedDB")
    }
}

function x0(t, e, n) {
    return new Promise((s, r) => {
        try {
            const i = indexedDB.open(t, e);
            i.onsuccess = o => {
                s(new Jl(o.target.result))
            }, i.onerror = o => {
                var a;
                r(`Error opening indexedDB: ${(a=o.target.error)===null||a===void 0?void 0:a.message}`)
            }, i.onupgradeneeded = o => {
                n(new Jl(i.result), o.oldVersion, o.newVersion, new bf(i.transaction))
            }
        } catch (i) {
            r(`Error opening indexedDB: ${i.message}`)
        }
    })
}
class Ks {
    constructor(e, n, s) {
        this.name = e, this.instanceFactory = n, this.type = s, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null
    }
    setInstantiationMode(e) {
        return this.instantiationMode = e, this
    }
    setMultipleInstances(e) {
        return this.multipleInstances = e, this
    }
    setServiceProps(e) {
        return this.serviceProps = e, this
    }
    setInstanceCreatedCallback(e) {
        return this.onInstanceCreated = e, this
    }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const rn = "[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class L0 {
    constructor(e, n) {
        this.name = e, this.container = n, this.component = null, this.instances = new Map, this.instancesDeferred = new Map, this.instancesOptions = new Map, this.onInitCallbacks = new Map
    }
    get(e) {
        const n = this.normalizeInstanceIdentifier(e);
        if (!this.instancesDeferred.has(n)) {
            const s = new b0;
            if (this.instancesDeferred.set(n, s), this.isInitialized(n) || this.shouldAutoInitialize()) try {
                const r = this.getOrInitializeService({
                    instanceIdentifier: n
                });
                r && s.resolve(r)
            } catch {}
        }
        return this.instancesDeferred.get(n).promise
    }
    getImmediate(e) {
        var n;
        const s = this.normalizeInstanceIdentifier(e == null ? void 0 : e.identifier),
            r = (n = e == null ? void 0 : e.optional) !== null && n !== void 0 ? n : !1;
        if (this.isInitialized(s) || this.shouldAutoInitialize()) try {
            return this.getOrInitializeService({
                instanceIdentifier: s
            })
        } catch (i) {
            if (r) return null;
            throw i
        } else {
            if (r) return null;
            throw Error(`Service ${this.name} is not available`)
        }
    }
    getComponent() {
        return this.component
    }
    setComponent(e) {
        if (e.name !== this.name) throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);
        if (this.component) throw Error(`Component for ${this.name} has already been provided`);
        if (this.component = e, !!this.shouldAutoInitialize()) {
            if (F0(e)) try {
                this.getOrInitializeService({
                    instanceIdentifier: rn
                })
            } catch {}
            for (const [n, s] of this.instancesDeferred.entries()) {
                const r = this.normalizeInstanceIdentifier(n);
                try {
                    const i = this.getOrInitializeService({
                        instanceIdentifier: r
                    });
                    s.resolve(i)
                } catch {}
            }
        }
    }
    clearInstance(e = rn) {
        this.instancesDeferred.delete(e), this.instancesOptions.delete(e), this.instances.delete(e)
    }
    async delete() {
        const e = Array.from(this.instances.values());
        await Promise.all([...e.filter(n => "INTERNAL" in n).map(n => n.INTERNAL.delete()), ...e.filter(n => "_delete" in n).map(n => n._delete())])
    }
    isComponentSet() {
        return this.component != null
    }
    isInitialized(e = rn) {
        return this.instances.has(e)
    }
    getOptions(e = rn) {
        return this.instancesOptions.get(e) || {}
    }
    initialize(e = {}) {
        const {
            options: n = {}
        } = e, s = this.normalizeInstanceIdentifier(e.instanceIdentifier);
        if (this.isInitialized(s)) throw Error(`${this.name}(${s}) has already been initialized`);
        if (!this.isComponentSet()) throw Error(`Component ${this.name} has not been registered yet`);
        const r = this.getOrInitializeService({
            instanceIdentifier: s,
            options: n
        });
        for (const [i, o] of this.instancesDeferred.entries()) {
            const a = this.normalizeInstanceIdentifier(i);
            s === a && o.resolve(r)
        }
        return r
    }
    onInit(e, n) {
        var s;
        const r = this.normalizeInstanceIdentifier(n),
            i = (s = this.onInitCallbacks.get(r)) !== null && s !== void 0 ? s : new Set;
        i.add(e), this.onInitCallbacks.set(r, i);
        const o = this.instances.get(r);
        return o && e(o, r), () => {
            i.delete(e)
        }
    }
    invokeOnInitCallbacks(e, n) {
        const s = this.onInitCallbacks.get(n);
        if (!!s)
            for (const r of s) try {
                r(e, n)
            } catch {}
    }
    getOrInitializeService({
        instanceIdentifier: e,
        options: n = {}
    }) {
        let s = this.instances.get(e);
        if (!s && this.component && (s = this.component.instanceFactory(this.container, {
                instanceIdentifier: O0(e),
                options: n
            }), this.instances.set(e, s), this.instancesOptions.set(e, n), this.invokeOnInitCallbacks(s, e), this.component.onInstanceCreated)) try {
            this.component.onInstanceCreated(this.container, e, s)
        } catch {}
        return s || null
    }
    normalizeInstanceIdentifier(e = rn) {
        return this.component ? this.component.multipleInstances ? e : rn : e
    }
    shouldAutoInitialize() {
        return !!this.component && this.component.instantiationMode !== "EXPLICIT"
    }
}

function O0(t) {
    return t === rn ? void 0 : t
}

function F0(t) {
    return t.instantiationMode === "EAGER"
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class B0 {
    constructor(e) {
        this.name = e, this.providers = new Map
    }
    addComponent(e) {
        const n = this.getProvider(e.name);
        if (n.isComponentSet()) throw new Error(`Component ${e.name} has already been registered with ${this.name}`);
        n.setComponent(e)
    }
    addOrOverwriteComponent(e) {
        this.getProvider(e.name).isComponentSet() && this.providers.delete(e.name), this.addComponent(e)
    }
    getProvider(e) {
        if (this.providers.has(e)) return this.providers.get(e);
        const n = new L0(e, this);
        return this.providers.set(e, n), n
    }
    getProviders() {
        return Array.from(this.providers.values())
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ce;
(function(t) {
    t[t.DEBUG = 0] = "DEBUG", t[t.VERBOSE = 1] = "VERBOSE", t[t.INFO = 2] = "INFO", t[t.WARN = 3] = "WARN", t[t.ERROR = 4] = "ERROR", t[t.SILENT = 5] = "SILENT"
})(ce || (ce = {}));
const U0 = {
        debug: ce.DEBUG,
        verbose: ce.VERBOSE,
        info: ce.INFO,
        warn: ce.WARN,
        error: ce.ERROR,
        silent: ce.SILENT
    },
    V0 = ce.INFO,
    $0 = {
        [ce.DEBUG]: "log",
        [ce.VERBOSE]: "log",
        [ce.INFO]: "info",
        [ce.WARN]: "warn",
        [ce.ERROR]: "error"
    },
    j0 = (t, e, ...n) => {
        if (e < t.logLevel) return;
        const s = new Date().toISOString(),
            r = $0[e];
        if (r) console[r](`[${s}]  ${t.name}:`, ...n);
        else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)
    };
class If {
    constructor(e) {
        this.name = e, this._logLevel = V0, this._logHandler = j0, this._userLogHandler = null
    }
    get logLevel() {
        return this._logLevel
    }
    set logLevel(e) {
        if (!(e in ce)) throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
        this._logLevel = e
    }
    setLogLevel(e) {
        this._logLevel = typeof e == "string" ? U0[e] : e
    }
    get logHandler() {
        return this._logHandler
    }
    set logHandler(e) {
        if (typeof e != "function") throw new TypeError("Value assigned to `logHandler` must be a function");
        this._logHandler = e
    }
    get userLogHandler() {
        return this._userLogHandler
    }
    set userLogHandler(e) {
        this._userLogHandler = e
    }
    debug(...e) {
        this._userLogHandler && this._userLogHandler(this, ce.DEBUG, ...e), this._logHandler(this, ce.DEBUG, ...e)
    }
    log(...e) {
        this._userLogHandler && this._userLogHandler(this, ce.VERBOSE, ...e), this._logHandler(this, ce.VERBOSE, ...e)
    }
    info(...e) {
        this._userLogHandler && this._userLogHandler(this, ce.INFO, ...e), this._logHandler(this, ce.INFO, ...e)
    }
    warn(...e) {
        this._userLogHandler && this._userLogHandler(this, ce.WARN, ...e), this._logHandler(this, ce.WARN, ...e)
    }
    error(...e) {
        this._userLogHandler && this._userLogHandler(this, ce.ERROR, ...e), this._logHandler(this, ce.ERROR, ...e)
    }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class H0 {
    constructor(e) {
        this.container = e
    }
    getPlatformInfoString() {
        return this.container.getProviders().map(n => {
            if (K0(n)) {
                const s = n.getImmediate();
                return `${s.library}/${s.version}`
            } else return null
        }).filter(n => n).join(" ")
    }
}

function K0(t) {
    const e = t.getComponent();
    return (e == null ? void 0 : e.type) === "VERSION"
}
const sa = "@firebase/app",
    eu = "0.7.20";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const rc = new If("@firebase/app"),
    q0 = "@firebase/app-compat",
    z0 = "@firebase/analytics-compat",
    G0 = "@firebase/analytics",
    W0 = "@firebase/app-check-compat",
    Y0 = "@firebase/app-check",
    X0 = "@firebase/auth",
    Q0 = "@firebase/auth-compat",
    J0 = "@firebase/database",
    Z0 = "@firebase/database-compat",
    ew = "@firebase/functions",
    tw = "@firebase/functions-compat",
    nw = "@firebase/installations",
    sw = "@firebase/installations-compat",
    rw = "@firebase/messaging",
    iw = "@firebase/messaging-compat",
    ow = "@firebase/performance",
    aw = "@firebase/performance-compat",
    cw = "@firebase/remote-config",
    lw = "@firebase/remote-config-compat",
    uw = "@firebase/storage",
    hw = "@firebase/storage-compat",
    fw = "@firebase/firestore",
    dw = "@firebase/firestore-compat",
    gw = "firebase",
    pw = "9.6.10";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Sf = "[DEFAULT]",
    mw = {
        [sa]: "fire-core",
        [q0]: "fire-core-compat",
        [G0]: "fire-analytics",
        [z0]: "fire-analytics-compat",
        [Y0]: "fire-app-check",
        [W0]: "fire-app-check-compat",
        [X0]: "fire-auth",
        [Q0]: "fire-auth-compat",
        [J0]: "fire-rtdb",
        [Z0]: "fire-rtdb-compat",
        [ew]: "fire-fn",
        [tw]: "fire-fn-compat",
        [nw]: "fire-iid",
        [sw]: "fire-iid-compat",
        [rw]: "fire-fcm",
        [iw]: "fire-fcm-compat",
        [ow]: "fire-perf",
        [aw]: "fire-perf-compat",
        [cw]: "fire-rc",
        [lw]: "fire-rc-compat",
        [uw]: "fire-gcs",
        [hw]: "fire-gcs-compat",
        [fw]: "fire-fst",
        [dw]: "fire-fst-compat",
        "fire-js": "fire-js",
        [gw]: "fire-js-all"
    };
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ei = new Map,
    ra = new Map;

function yw(t, e) {
    try {
        t.container.addComponent(e)
    } catch (n) {
        rc.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`, n)
    }
}

function ti(t) {
    const e = t.name;
    if (ra.has(e)) return rc.debug(`There were multiple attempts to register component ${e}.`), !1;
    ra.set(e, t);
    for (const n of ei.values()) yw(n, t);
    return !0
}

function ww(t, e) {
    const n = t.container.getProvider("heartbeat").getImmediate({
        optional: !0
    });
    return n && n.triggerHeartbeat(), t.container.getProvider(e)
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const vw = {
        ["no-app"]: "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",
        ["bad-app-name"]: "Illegal App name: '{$appName}",
        ["duplicate-app"]: "Firebase App named '{$appName}' already exists with different options or config",
        ["app-deleted"]: "Firebase App named '{$appName}' already deleted",
        ["invalid-app-argument"]: "firebase.{$appName}() takes either no argument or a Firebase App instance.",
        ["invalid-log-argument"]: "First argument to `onLog` must be null or a function.",
        ["storage-open"]: "Error thrown when opening storage. Original error: {$originalErrorMessage}.",
        ["storage-get"]: "Error thrown when reading from storage. Original error: {$originalErrorMessage}.",
        ["storage-set"]: "Error thrown when writing to storage. Original error: {$originalErrorMessage}.",
        ["storage-delete"]: "Error thrown when deleting from storage. Original error: {$originalErrorMessage}."
    },
    pn = new Tf("app", "Firebase", vw);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ew {
    constructor(e, n, s) {
        this._isDeleted = !1, this._options = Object.assign({}, e), this._config = Object.assign({}, n), this._name = n.name, this._automaticDataCollectionEnabled = n.automaticDataCollectionEnabled, this._container = s, this.container.addComponent(new Ks("app", () => this, "PUBLIC"))
    }
    get automaticDataCollectionEnabled() {
        return this.checkDestroyed(), this._automaticDataCollectionEnabled
    }
    set automaticDataCollectionEnabled(e) {
        this.checkDestroyed(), this._automaticDataCollectionEnabled = e
    }
    get name() {
        return this.checkDestroyed(), this._name
    }
    get options() {
        return this.checkDestroyed(), this._options
    }
    get config() {
        return this.checkDestroyed(), this._config
    }
    get container() {
        return this._container
    }
    get isDeleted() {
        return this._isDeleted
    }
    set isDeleted(e) {
        this._isDeleted = e
    }
    checkDestroyed() {
        if (this.isDeleted) throw pn.create("app-deleted", {
            appName: this._name
        })
    }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Tw = pw;

function Zb(t, e = {}) {
    typeof e != "object" && (e = {
        name: e
    });
    const n = Object.assign({
            name: Sf,
            automaticDataCollectionEnabled: !1
        }, e),
        s = n.name;
    if (typeof s != "string" || !s) throw pn.create("bad-app-name", {
        appName: String(s)
    });
    const r = ei.get(s);
    if (r) {
        if (na(t, r.options) && na(n, r.config)) return r;
        throw pn.create("duplicate-app", {
            appName: s
        })
    }
    const i = new B0(s);
    for (const a of ra.values()) i.addComponent(a);
    const o = new Ew(t, n, i);
    return ei.set(s, o), o
}

function bw(t = Sf) {
    const e = ei.get(t);
    if (!e) throw pn.create("no-app", {
        appName: t
    });
    return e
}

function Un(t, e, n) {
    var s;
    let r = (s = mw[t]) !== null && s !== void 0 ? s : t;
    n && (r += `-${n}`);
    const i = r.match(/\s|\//),
        o = e.match(/\s|\//);
    if (i || o) {
        const a = [`Unable to register library "${r}" with version "${e}":`];
        i && a.push(`library name "${r}" contains illegal characters (whitespace or "/")`), i && o && a.push("and"), o && a.push(`version name "${e}" contains illegal characters (whitespace or "/")`), rc.warn(a.join(" "));
        return
    }
    ti(new Ks(`${r}-version`, () => ({
        library: r,
        version: e
    }), "VERSION"))
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Cw = "firebase-heartbeat-database",
    Iw = 1,
    qs = "firebase-heartbeat-store";
let wo = null;

function _f() {
    return wo || (wo = x0(Cw, Iw, (t, e) => {
        switch (e) {
            case 0:
                t.createObjectStore(qs)
        }
    }).catch(t => {
        throw pn.create("storage-open", {
            originalErrorMessage: t.message
        })
    })), wo
}
async function Sw(t) {
    try {
        return (await _f()).transaction(qs).objectStore(qs).get(Af(t))
    } catch (e) {
        throw pn.create("storage-get", {
            originalErrorMessage: e.message
        })
    }
}
async function tu(t, e) {
    try {
        const s = (await _f()).transaction(qs, "readwrite");
        return await s.objectStore(qs).put(e, Af(t)), s.complete
    } catch (n) {
        throw pn.create("storage-set", {
            originalErrorMessage: n.message
        })
    }
}

function Af(t) {
    return `${t.name}!${t.options.appId}`
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _w = 1024,
    Aw = 30 * 24 * 60 * 60 * 1e3;
class Nw {
    constructor(e) {
        this.container = e, this._heartbeatsCache = null;
        const n = this.container.getProvider("app").getImmediate();
        this._storage = new Dw(n), this._heartbeatsCachePromise = this._storage.read().then(s => (this._heartbeatsCache = s, s))
    }
    async triggerHeartbeat() {
        const n = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),
            s = nu();
        if (this._heartbeatsCache === null && (this._heartbeatsCache = await this._heartbeatsCachePromise), !(this._heartbeatsCache.lastSentHeartbeatDate === s || this._heartbeatsCache.heartbeats.some(r => r.date === s))) return this._heartbeatsCache.heartbeats.push({
            date: s,
            agent: n
        }), this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter(r => {
            const i = new Date(r.date).valueOf();
            return Date.now() - i <= Aw
        }), this._storage.overwrite(this._heartbeatsCache)
    }
    async getHeartbeatsHeader() {
        if (this._heartbeatsCache === null && await this._heartbeatsCachePromise, this._heartbeatsCache === null || this._heartbeatsCache.heartbeats.length === 0) return "";
        const e = nu(),
            {
                heartbeatsToSend: n,
                unsentEntries: s
            } = Rw(this._heartbeatsCache.heartbeats),
            r = Ef(JSON.stringify({
                version: 2,
                heartbeats: n
            }));
        return this._heartbeatsCache.lastSentHeartbeatDate = e, s.length > 0 ? (this._heartbeatsCache.heartbeats = s, await this._storage.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this._storage.overwrite(this._heartbeatsCache)), r
    }
}

function nu() {
    return new Date().toISOString().substring(0, 10)
}

function Rw(t, e = _w) {
    const n = [];
    let s = t.slice();
    for (const r of t) {
        const i = n.find(o => o.agent === r.agent);
        if (i) {
            if (i.dates.push(r.date), su(n) > e) {
                i.dates.pop();
                break
            }
        } else if (n.push({
                agent: r.agent,
                dates: [r.date]
            }), su(n) > e) {
            n.pop();
            break
        }
        s = s.slice(1)
    }
    return {
        heartbeatsToSend: n,
        unsentEntries: s
    }
}
class Dw {
    constructor(e) {
        this.app = e, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck()
    }
    async runIndexedDBEnvironmentCheck() {
        return R0() ? D0().then(() => !0).catch(() => !1) : !1
    }
    async read() {
        return await this._canUseIndexedDBPromise ? await Sw(this.app) || {
            heartbeats: []
        } : {
            heartbeats: []
        }
    }
    async overwrite(e) {
        var n;
        if (await this._canUseIndexedDBPromise) {
            const r = await this.read();
            return tu(this.app, {
                lastSentHeartbeatDate: (n = e.lastSentHeartbeatDate) !== null && n !== void 0 ? n : r.lastSentHeartbeatDate,
                heartbeats: e.heartbeats
            })
        } else return
    }
    async add(e) {
        var n;
        if (await this._canUseIndexedDBPromise) {
            const r = await this.read();
            return tu(this.app, {
                lastSentHeartbeatDate: (n = e.lastSentHeartbeatDate) !== null && n !== void 0 ? n : r.lastSentHeartbeatDate,
                heartbeats: [...r.heartbeats, ...e.heartbeats]
            })
        } else return
    }
}

function su(t) {
    return Ef(JSON.stringify({
        version: 2,
        heartbeats: t
    })).length
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Pw(t) {
    ti(new Ks("platform-logger", e => new H0(e), "PRIVATE")), ti(new Ks("heartbeat", e => new Nw(e), "PRIVATE")), Un(sa, eu, t), Un(sa, eu, "esm2017"), Un("fire-js", "")
}
Pw("");
var Mw = "firebase",
    kw = "9.6.10";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Un(Mw, kw, "app");
var xw = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
    L, ic = ic || {},
    z = xw || self;

function ni() {}

function ia(t) {
    var e = typeof t;
    return e = e != "object" ? e : t ? Array.isArray(t) ? "array" : e : "null", e == "array" || e == "object" && typeof t.length == "number"
}

function ir(t) {
    var e = typeof t;
    return e == "object" && t != null || e == "function"
}

function Lw(t) {
    return Object.prototype.hasOwnProperty.call(t, vo) && t[vo] || (t[vo] = ++Ow)
}
var vo = "closure_uid_" + (1e9 * Math.random() >>> 0),
    Ow = 0;

function Fw(t, e, n) {
    return t.call.apply(t.bind, arguments)
}

function Bw(t, e, n) {
    if (!t) throw Error();
    if (2 < arguments.length) {
        var s = Array.prototype.slice.call(arguments, 2);
        return function() {
            var r = Array.prototype.slice.call(arguments);
            return Array.prototype.unshift.apply(r, s), t.apply(e, r)
        }
    }
    return function() {
        return t.apply(e, arguments)
    }
}

function Ue(t, e, n) {
    return Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? Ue = Fw : Ue = Bw, Ue.apply(null, arguments)
}

function _r(t, e) {
    var n = Array.prototype.slice.call(arguments, 1);
    return function() {
        var s = n.slice();
        return s.push.apply(s, arguments), t.apply(this, s)
    }
}

function He(t, e) {
    function n() {}
    n.prototype = e.prototype, t.Z = e.prototype, t.prototype = new n, t.prototype.constructor = t, t.Vb = function(s, r, i) {
        for (var o = Array(arguments.length - 2), a = 2; a < arguments.length; a++) o[a - 2] = arguments[a];
        return e.prototype[r].apply(s, o)
    }
}

function Jt() {
    this.s = this.s, this.o = this.o
}
var Uw = 0,
    Vw = {};
Jt.prototype.s = !1;
Jt.prototype.na = function() {
    if (!this.s && (this.s = !0, this.M(), Uw != 0)) {
        var t = Lw(this);
        delete Vw[t]
    }
};
Jt.prototype.M = function() {
    if (this.o)
        for (; this.o.length;) this.o.shift()()
};
const Nf = Array.prototype.indexOf ? function(t, e) {
        return Array.prototype.indexOf.call(t, e, void 0)
    } : function(t, e) {
        if (typeof t == "string") return typeof e != "string" || e.length != 1 ? -1 : t.indexOf(e, 0);
        for (let n = 0; n < t.length; n++)
            if (n in t && t[n] === e) return n;
        return -1
    },
    Rf = Array.prototype.forEach ? function(t, e, n) {
        Array.prototype.forEach.call(t, e, n)
    } : function(t, e, n) {
        const s = t.length,
            r = typeof t == "string" ? t.split("") : t;
        for (let i = 0; i < s; i++) i in r && e.call(n, r[i], i, t)
    };

function $w(t) {
    e: {
        var e = Mv;
        const n = t.length,
            s = typeof t == "string" ? t.split("") : t;
        for (let r = 0; r < n; r++)
            if (r in s && e.call(void 0, s[r], r, t)) {
                e = r;
                break e
            }
        e = -1
    }
    return 0 > e ? null : typeof t == "string" ? t.charAt(e) : t[e]
}

function ru(t) {
    return Array.prototype.concat.apply([], arguments)
}

function oc(t) {
    const e = t.length;
    if (0 < e) {
        const n = Array(e);
        for (let s = 0; s < e; s++) n[s] = t[s];
        return n
    }
    return []
}

function si(t) {
    return /^[\s\xa0]*$/.test(t)
}
var iu = String.prototype.trim ? function(t) {
    return t.trim()
} : function(t) {
    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]
};

function Ye(t, e) {
    return t.indexOf(e) != -1
}

function Eo(t, e) {
    return t < e ? -1 : t > e ? 1 : 0
}
var Xe;
e: {
    var ou = z.navigator;
    if (ou) {
        var au = ou.userAgent;
        if (au) {
            Xe = au;
            break e
        }
    }
    Xe = ""
}

function ac(t, e, n) {
    for (const s in t) e.call(n, t[s], s, t)
}

function Df(t) {
    const e = {};
    for (const n in t) e[n] = t[n];
    return e
}
var cu = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

function Pf(t, e) {
    let n, s;
    for (let r = 1; r < arguments.length; r++) {
        s = arguments[r];
        for (n in s) t[n] = s[n];
        for (let i = 0; i < cu.length; i++) n = cu[i], Object.prototype.hasOwnProperty.call(s, n) && (t[n] = s[n])
    }
}

function cc(t) {
    return cc[" "](t), t
}
cc[" "] = ni;

function jw(t) {
    var e = qw;
    return Object.prototype.hasOwnProperty.call(e, 9) ? e[9] : e[9] = t(9)
}
var Hw = Ye(Xe, "Opera"),
    Gn = Ye(Xe, "Trident") || Ye(Xe, "MSIE"),
    Mf = Ye(Xe, "Edge"),
    oa = Mf || Gn,
    kf = Ye(Xe, "Gecko") && !(Ye(Xe.toLowerCase(), "webkit") && !Ye(Xe, "Edge")) && !(Ye(Xe, "Trident") || Ye(Xe, "MSIE")) && !Ye(Xe, "Edge"),
    Kw = Ye(Xe.toLowerCase(), "webkit") && !Ye(Xe, "Edge");

function xf() {
    var t = z.document;
    return t ? t.documentMode : void 0
}
var ri;
e: {
    var To = "",
        bo = function() {
            var t = Xe;
            if (kf) return /rv:([^\);]+)(\)|;)/.exec(t);
            if (Mf) return /Edge\/([\d\.]+)/.exec(t);
            if (Gn) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);
            if (Kw) return /WebKit\/(\S+)/.exec(t);
            if (Hw) return /(?:Version)[ \/]?(\S+)/.exec(t)
        }();
    if (bo && (To = bo ? bo[1] : ""), Gn) {
        var Co = xf();
        if (Co != null && Co > parseFloat(To)) {
            ri = String(Co);
            break e
        }
    }
    ri = To
}
var qw = {};

function zw() {
    return jw(function() {
        let t = 0;
        const e = iu(String(ri)).split("."),
            n = iu("9").split("."),
            s = Math.max(e.length, n.length);
        for (let o = 0; t == 0 && o < s; o++) {
            var r = e[o] || "",
                i = n[o] || "";
            do {
                if (r = /(\d*)(\D*)(.*)/.exec(r) || ["", "", "", ""], i = /(\d*)(\D*)(.*)/.exec(i) || ["", "", "", ""], r[0].length == 0 && i[0].length == 0) break;
                t = Eo(r[1].length == 0 ? 0 : parseInt(r[1], 10), i[1].length == 0 ? 0 : parseInt(i[1], 10)) || Eo(r[2].length == 0, i[2].length == 0) || Eo(r[2], i[2]), r = r[3], i = i[3]
            } while (t == 0)
        }
        return 0 <= t
    })
}
var aa;
if (z.document && Gn) {
    var lu = xf();
    aa = lu || parseInt(ri, 10) || void 0
} else aa = void 0;
var Gw = aa,
    Ww = function() {
        if (!z.addEventListener || !Object.defineProperty) return !1;
        var t = !1,
            e = Object.defineProperty({}, "passive", {
                get: function() {
                    t = !0
                }
            });
        try {
            z.addEventListener("test", ni, e), z.removeEventListener("test", ni, e)
        } catch {}
        return t
    }();

function qe(t, e) {
    this.type = t, this.g = this.target = e, this.defaultPrevented = !1
}
qe.prototype.h = function() {
    this.defaultPrevented = !0
};

function zs(t, e) {
    if (qe.call(this, t ? t.type : ""), this.relatedTarget = this.g = this.target = null, this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0, this.key = "", this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1, this.state = null, this.pointerId = 0, this.pointerType = "", this.i = null, t) {
        var n = this.type = t.type,
            s = t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : null;
        if (this.target = t.target || t.srcElement, this.g = e, e = t.relatedTarget) {
            if (kf) {
                e: {
                    try {
                        cc(e.nodeName);
                        var r = !0;
                        break e
                    } catch {}
                    r = !1
                }
                r || (e = null)
            }
        } else n == "mouseover" ? e = t.fromElement : n == "mouseout" && (e = t.toElement);
        this.relatedTarget = e, s ? (this.clientX = s.clientX !== void 0 ? s.clientX : s.pageX, this.clientY = s.clientY !== void 0 ? s.clientY : s.pageY, this.screenX = s.screenX || 0, this.screenY = s.screenY || 0) : (this.clientX = t.clientX !== void 0 ? t.clientX : t.pageX, this.clientY = t.clientY !== void 0 ? t.clientY : t.pageY, this.screenX = t.screenX || 0, this.screenY = t.screenY || 0), this.button = t.button, this.key = t.key || "", this.ctrlKey = t.ctrlKey, this.altKey = t.altKey, this.shiftKey = t.shiftKey, this.metaKey = t.metaKey, this.pointerId = t.pointerId || 0, this.pointerType = typeof t.pointerType == "string" ? t.pointerType : Yw[t.pointerType] || "", this.state = t.state, this.i = t, t.defaultPrevented && zs.Z.h.call(this)
    }
}
He(zs, qe);
var Yw = {
    2: "touch",
    3: "pen",
    4: "mouse"
};
zs.prototype.h = function() {
    zs.Z.h.call(this);
    var t = this.i;
    t.preventDefault ? t.preventDefault() : t.returnValue = !1
};
var or = "closure_listenable_" + (1e6 * Math.random() | 0),
    Xw = 0;

function Qw(t, e, n, s, r) {
    this.listener = t, this.proxy = null, this.src = e, this.type = n, this.capture = !!s, this.ia = r, this.key = ++Xw, this.ca = this.fa = !1
}

function Li(t) {
    t.ca = !0, t.listener = null, t.proxy = null, t.src = null, t.ia = null
}

function Oi(t) {
    this.src = t, this.g = {}, this.h = 0
}
Oi.prototype.add = function(t, e, n, s, r) {
    var i = t.toString();
    t = this.g[i], t || (t = this.g[i] = [], this.h++);
    var o = la(t, e, s, r);
    return -1 < o ? (e = t[o], n || (e.fa = !1)) : (e = new Qw(e, this.src, i, !!s, r), e.fa = n, t.push(e)), e
};

function ca(t, e) {
    var n = e.type;
    if (n in t.g) {
        var s = t.g[n],
            r = Nf(s, e),
            i;
        (i = 0 <= r) && Array.prototype.splice.call(s, r, 1), i && (Li(e), t.g[n].length == 0 && (delete t.g[n], t.h--))
    }
}

function la(t, e, n, s) {
    for (var r = 0; r < t.length; ++r) {
        var i = t[r];
        if (!i.ca && i.listener == e && i.capture == !!n && i.ia == s) return r
    }
    return -1
}
var lc = "closure_lm_" + (1e6 * Math.random() | 0),
    Io = {};

function Lf(t, e, n, s, r) {
    if (s && s.once) return Ff(t, e, n, s, r);
    if (Array.isArray(e)) {
        for (var i = 0; i < e.length; i++) Lf(t, e[i], n, s, r);
        return null
    }
    return n = fc(n), t && t[or] ? t.N(e, n, ir(s) ? !!s.capture : !!s, r) : Of(t, e, n, !1, s, r)
}

function Of(t, e, n, s, r, i) {
    if (!e) throw Error("Invalid event type");
    var o = ir(r) ? !!r.capture : !!r,
        a = hc(t);
    if (a || (t[lc] = a = new Oi(t)), n = a.add(e, n, s, o, i), n.proxy) return n;
    if (s = Jw(), n.proxy = s, s.src = t, s.listener = n, t.addEventListener) Ww || (r = o), r === void 0 && (r = !1), t.addEventListener(e.toString(), s, r);
    else if (t.attachEvent) t.attachEvent(Uf(e.toString()), s);
    else if (t.addListener && t.removeListener) t.addListener(s);
    else throw Error("addEventListener and attachEvent are unavailable.");
    return n
}

function Jw() {
    function t(n) {
        return e.call(t.src, t.listener, n)
    }
    var e = Zw;
    return t
}

function Ff(t, e, n, s, r) {
    if (Array.isArray(e)) {
        for (var i = 0; i < e.length; i++) Ff(t, e[i], n, s, r);
        return null
    }
    return n = fc(n), t && t[or] ? t.O(e, n, ir(s) ? !!s.capture : !!s, r) : Of(t, e, n, !0, s, r)
}

function Bf(t, e, n, s, r) {
    if (Array.isArray(e))
        for (var i = 0; i < e.length; i++) Bf(t, e[i], n, s, r);
    else s = ir(s) ? !!s.capture : !!s, n = fc(n), t && t[or] ? (t = t.i, e = String(e).toString(), e in t.g && (i = t.g[e], n = la(i, n, s, r), -1 < n && (Li(i[n]), Array.prototype.splice.call(i, n, 1), i.length == 0 && (delete t.g[e], t.h--)))) : t && (t = hc(t)) && (e = t.g[e.toString()], t = -1, e && (t = la(e, n, s, r)), (n = -1 < t ? e[t] : null) && uc(n))
}

function uc(t) {
    if (typeof t != "number" && t && !t.ca) {
        var e = t.src;
        if (e && e[or]) ca(e.i, t);
        else {
            var n = t.type,
                s = t.proxy;
            e.removeEventListener ? e.removeEventListener(n, s, t.capture) : e.detachEvent ? e.detachEvent(Uf(n), s) : e.addListener && e.removeListener && e.removeListener(s), (n = hc(e)) ? (ca(n, t), n.h == 0 && (n.src = null, e[lc] = null)) : Li(t)
        }
    }
}

function Uf(t) {
    return t in Io ? Io[t] : Io[t] = "on" + t
}

function Zw(t, e) {
    if (t.ca) t = !0;
    else {
        e = new zs(e, this);
        var n = t.listener,
            s = t.ia || t.src;
        t.fa && uc(t), t = n.call(s, e)
    }
    return t
}

function hc(t) {
    return t = t[lc], t instanceof Oi ? t : null
}
var So = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);

function fc(t) {
    return typeof t == "function" ? t : (t[So] || (t[So] = function(e) {
        return t.handleEvent(e)
    }), t[So])
}

function Le() {
    Jt.call(this), this.i = new Oi(this), this.P = this, this.I = null
}
He(Le, Jt);
Le.prototype[or] = !0;
Le.prototype.removeEventListener = function(t, e, n, s) {
    Bf(this, t, e, n, s)
};

function Ve(t, e) {
    var n, s = t.I;
    if (s)
        for (n = []; s; s = s.I) n.push(s);
    if (t = t.P, s = e.type || e, typeof e == "string") e = new qe(e, t);
    else if (e instanceof qe) e.target = e.target || t;
    else {
        var r = e;
        e = new qe(s, t), Pf(e, r)
    }
    if (r = !0, n)
        for (var i = n.length - 1; 0 <= i; i--) {
            var o = e.g = n[i];
            r = Ar(o, s, !0, e) && r
        }
    if (o = e.g = t, r = Ar(o, s, !0, e) && r, r = Ar(o, s, !1, e) && r, n)
        for (i = 0; i < n.length; i++) o = e.g = n[i], r = Ar(o, s, !1, e) && r
}
Le.prototype.M = function() {
    if (Le.Z.M.call(this), this.i) {
        var t = this.i,
            e;
        for (e in t.g) {
            for (var n = t.g[e], s = 0; s < n.length; s++) Li(n[s]);
            delete t.g[e], t.h--
        }
    }
    this.I = null
};
Le.prototype.N = function(t, e, n, s) {
    return this.i.add(String(t), e, !1, n, s)
};
Le.prototype.O = function(t, e, n, s) {
    return this.i.add(String(t), e, !0, n, s)
};

function Ar(t, e, n, s) {
    if (e = t.i.g[String(e)], !e) return !0;
    e = e.concat();
    for (var r = !0, i = 0; i < e.length; ++i) {
        var o = e[i];
        if (o && !o.ca && o.capture == n) {
            var a = o.listener,
                c = o.ia || o.src;
            o.fa && ca(t.i, o), r = a.call(c, s) !== !1 && r
        }
    }
    return r && !s.defaultPrevented
}
var dc = z.JSON.stringify;

function ev() {
    var t = $f;
    let e = null;
    return t.g && (e = t.g, t.g = t.g.next, t.g || (t.h = null), e.next = null), e
}
class tv {
    constructor() {
        this.h = this.g = null
    }
    add(e, n) {
        const s = Vf.get();
        s.set(e, n), this.h ? this.h.next = s : this.g = s, this.h = s
    }
}
var Vf = new class {
    constructor(t, e) {
        this.i = t, this.j = e, this.h = 0, this.g = null
    }
    get() {
        let t;
        return 0 < this.h ? (this.h--, t = this.g, this.g = t.next, t.next = null) : t = this.i(), t
    }
}(() => new nv, t => t.reset());
class nv {
    constructor() {
        this.next = this.g = this.h = null
    }
    set(e, n) {
        this.h = e, this.g = n, this.next = null
    }
    reset() {
        this.next = this.g = this.h = null
    }
}

function sv(t) {
    z.setTimeout(() => {
        throw t
    }, 0)
}

function gc(t, e) {
    ua || rv(), ha || (ua(), ha = !0), $f.add(t, e)
}
var ua;

function rv() {
    var t = z.Promise.resolve(void 0);
    ua = function() {
        t.then(iv)
    }
}
var ha = !1,
    $f = new tv;

function iv() {
    for (var t; t = ev();) {
        try {
            t.h.call(t.g)
        } catch (n) {
            sv(n)
        }
        var e = Vf;
        e.j(t), 100 > e.h && (e.h++, t.next = e.g, e.g = t)
    }
    ha = !1
}

function Fi(t, e) {
    Le.call(this), this.h = t || 1, this.g = e || z, this.j = Ue(this.kb, this), this.l = Date.now()
}
He(Fi, Le);
L = Fi.prototype;
L.da = !1;
L.S = null;
L.kb = function() {
    if (this.da) {
        var t = Date.now() - this.l;
        0 < t && t < .8 * this.h ? this.S = this.g.setTimeout(this.j, this.h - t) : (this.S && (this.g.clearTimeout(this.S), this.S = null), Ve(this, "tick"), this.da && (pc(this), this.start()))
    }
};
L.start = function() {
    this.da = !0, this.S || (this.S = this.g.setTimeout(this.j, this.h), this.l = Date.now())
};

function pc(t) {
    t.da = !1, t.S && (t.g.clearTimeout(t.S), t.S = null)
}
L.M = function() {
    Fi.Z.M.call(this), pc(this), delete this.g
};

function mc(t, e, n) {
    if (typeof t == "function") n && (t = Ue(t, n));
    else if (t && typeof t.handleEvent == "function") t = Ue(t.handleEvent, t);
    else throw Error("Invalid listener argument");
    return 2147483647 < Number(e) ? -1 : z.setTimeout(t, e || 0)
}

function jf(t) {
    t.g = mc(() => {
        t.g = null, t.i && (t.i = !1, jf(t))
    }, t.j);
    const e = t.h;
    t.h = null, t.m.apply(null, e)
}
class ov extends Jt {
    constructor(e, n) {
        super();
        this.m = e, this.j = n, this.h = null, this.i = !1, this.g = null
    }
    l(e) {
        this.h = arguments, this.g ? this.i = !0 : jf(this)
    }
    M() {
        super.M(), this.g && (z.clearTimeout(this.g), this.g = null, this.i = !1, this.h = null)
    }
}

function Gs(t) {
    Jt.call(this), this.h = t, this.g = {}
}
He(Gs, Jt);
var uu = [];

function Hf(t, e, n, s) {
    Array.isArray(n) || (n && (uu[0] = n.toString()), n = uu);
    for (var r = 0; r < n.length; r++) {
        var i = Lf(e, n[r], s || t.handleEvent, !1, t.h || t);
        if (!i) break;
        t.g[i.key] = i
    }
}

function Kf(t) {
    ac(t.g, function(e, n) {
        this.g.hasOwnProperty(n) && uc(e)
    }, t), t.g = {}
}
Gs.prototype.M = function() {
    Gs.Z.M.call(this), Kf(this)
};
Gs.prototype.handleEvent = function() {
    throw Error("EventHandler.handleEvent not implemented")
};

function Bi() {
    this.g = !0
}
Bi.prototype.Aa = function() {
    this.g = !1
};

function av(t, e, n, s, r, i) {
    t.info(function() {
        if (t.g)
            if (i)
                for (var o = "", a = i.split("&"), c = 0; c < a.length; c++) {
                    var l = a[c].split("=");
                    if (1 < l.length) {
                        var u = l[0];
                        l = l[1];
                        var h = u.split("_");
                        o = 2 <= h.length && h[1] == "type" ? o + (u + "=" + l + "&") : o + (u + "=redacted&")
                    }
                } else o = null;
            else o = i;
        return "XMLHTTP REQ (" + s + ") [attempt " + r + "]: " + e + `
` + n + `
` + o
    })
}

function cv(t, e, n, s, r, i, o) {
    t.info(function() {
        return "XMLHTTP RESP (" + s + ") [ attempt " + r + "]: " + e + `
` + n + `
` + i + " " + o
    })
}

function xn(t, e, n, s) {
    t.info(function() {
        return "XMLHTTP TEXT (" + e + "): " + uv(t, n) + (s ? " " + s : "")
    })
}

function lv(t, e) {
    t.info(function() {
        return "TIMEOUT: " + e
    })
}
Bi.prototype.info = function() {};

function uv(t, e) {
    if (!t.g) return e;
    if (!e) return null;
    try {
        var n = JSON.parse(e);
        if (n) {
            for (t = 0; t < n.length; t++)
                if (Array.isArray(n[t])) {
                    var s = n[t];
                    if (!(2 > s.length)) {
                        var r = s[1];
                        if (Array.isArray(r) && !(1 > r.length)) {
                            var i = r[0];
                            if (i != "noop" && i != "stop" && i != "close")
                                for (var o = 1; o < r.length; o++) r[o] = ""
                        }
                    }
                }
        }
        return dc(n)
    } catch {
        return e
    }
}
var bn = {},
    hu = null;

function Ui() {
    return hu = hu || new Le
}
bn.Ma = "serverreachability";

function qf(t) {
    qe.call(this, bn.Ma, t)
}
He(qf, qe);

function Ws(t) {
    const e = Ui();
    Ve(e, new qf(e, t))
}
bn.STAT_EVENT = "statevent";

function zf(t, e) {
    qe.call(this, bn.STAT_EVENT, t), this.stat = e
}
He(zf, qe);

function Je(t) {
    const e = Ui();
    Ve(e, new zf(e, t))
}
bn.Na = "timingevent";

function Gf(t, e) {
    qe.call(this, bn.Na, t), this.size = e
}
He(Gf, qe);

function ar(t, e) {
    if (typeof t != "function") throw Error("Fn must not be null and must be a function");
    return z.setTimeout(function() {
        t()
    }, e)
}
var Vi = {
        NO_ERROR: 0,
        lb: 1,
        yb: 2,
        xb: 3,
        sb: 4,
        wb: 5,
        zb: 6,
        Ja: 7,
        TIMEOUT: 8,
        Cb: 9
    },
    Wf = {
        qb: "complete",
        Mb: "success",
        Ka: "error",
        Ja: "abort",
        Eb: "ready",
        Fb: "readystatechange",
        TIMEOUT: "timeout",
        Ab: "incrementaldata",
        Db: "progress",
        tb: "downloadprogress",
        Ub: "uploadprogress"
    };

function yc() {}
yc.prototype.h = null;

function fu(t) {
    return t.h || (t.h = t.i())
}

function Yf() {}
var cr = {
    OPEN: "a",
    pb: "b",
    Ka: "c",
    Bb: "d"
};

function wc() {
    qe.call(this, "d")
}
He(wc, qe);

function vc() {
    qe.call(this, "c")
}
He(vc, qe);
var fa;

function $i() {}
He($i, yc);
$i.prototype.g = function() {
    return new XMLHttpRequest
};
$i.prototype.i = function() {
    return {}
};
fa = new $i;

function lr(t, e, n, s) {
    this.l = t, this.j = e, this.m = n, this.X = s || 1, this.V = new Gs(this), this.P = hv, t = oa ? 125 : void 0, this.W = new Fi(t), this.H = null, this.i = !1, this.s = this.A = this.v = this.K = this.F = this.Y = this.B = null, this.D = [], this.g = null, this.C = 0, this.o = this.u = null, this.N = -1, this.I = !1, this.O = 0, this.L = null, this.aa = this.J = this.$ = this.U = !1, this.h = new Xf
}

function Xf() {
    this.i = null, this.g = "", this.h = !1
}
var hv = 45e3,
    da = {},
    ii = {};
L = lr.prototype;
L.setTimeout = function(t) {
    this.P = t
};

function ga(t, e, n) {
    t.K = 1, t.v = Hi(Lt(e)), t.s = n, t.U = !0, Qf(t, null)
}

function Qf(t, e) {
    t.F = Date.now(), ur(t), t.A = Lt(t.v);
    var n = t.A,
        s = t.X;
    Array.isArray(s) || (s = [String(s)]), rd(n.h, "t", s), t.C = 0, n = t.l.H, t.h = new Xf, t.g = Id(t.l, n ? e : null, !t.s), 0 < t.O && (t.L = new ov(Ue(t.Ia, t, t.g), t.O)), Hf(t.V, t.g, "readystatechange", t.gb), e = t.H ? Df(t.H) : {}, t.s ? (t.u || (t.u = "POST"), e["Content-Type"] = "application/x-www-form-urlencoded", t.g.ea(t.A, t.u, t.s, e)) : (t.u = "GET", t.g.ea(t.A, t.u, null, e)), Ws(1), av(t.j, t.u, t.A, t.m, t.X, t.s)
}
L.gb = function(t) {
    t = t.target;
    const e = this.L;
    e && Mt(t) == 3 ? e.l() : this.Ia(t)
};
L.Ia = function(t) {
    try {
        if (t == this.g) e: {
            const u = Mt(this.g);
            var e = this.g.Da();
            const h = this.g.ba();
            if (!(3 > u) && (u != 3 || oa || this.g && (this.h.h || this.g.ga() || mu(this.g)))) {
                this.I || u != 4 || e == 7 || (e == 8 || 0 >= h ? Ws(3) : Ws(2)), ji(this);
                var n = this.g.ba();
                this.N = n;
                t: if (Jf(this)) {
                    var s = mu(this.g);
                    t = "";
                    var r = s.length,
                        i = Mt(this.g) == 4;
                    if (!this.h.i) {
                        if (typeof TextDecoder == "undefined") {
                            ln(this), Ms(this);
                            var o = "";
                            break t
                        }
                        this.h.i = new z.TextDecoder
                    }
                    for (e = 0; e < r; e++) this.h.h = !0, t += this.h.i.decode(s[e], {
                        stream: i && e == r - 1
                    });
                    s.splice(0, r), this.h.g += t, this.C = 0, o = this.h.g
                } else o = this.g.ga();
                if (this.i = n == 200, cv(this.j, this.u, this.A, this.m, this.X, u, n), this.i) {
                    if (this.$ && !this.J) {
                        t: {
                            if (this.g) {
                                var a, c = this.g;
                                if ((a = c.g ? c.g.getResponseHeader("X-HTTP-Initial-Response") : null) && !si(a)) {
                                    var l = a;
                                    break t
                                }
                            }
                            l = null
                        }
                        if (n = l) xn(this.j, this.m, n, "Initial handshake response via X-HTTP-Initial-Response"),
                        this.J = !0,
                        pa(this, n);
                        else {
                            this.i = !1, this.o = 3, Je(12), ln(this), Ms(this);
                            break e
                        }
                    }
                    this.U ? (Zf(this, u, o), oa && this.i && u == 3 && (Hf(this.V, this.W, "tick", this.fb), this.W.start())) : (xn(this.j, this.m, o, null), pa(this, o)), u == 4 && ln(this), this.i && !this.I && (u == 4 ? Ed(this.l, this) : (this.i = !1, ur(this)))
                } else n == 400 && 0 < o.indexOf("Unknown SID") ? (this.o = 3, Je(12)) : (this.o = 0, Je(13)), ln(this), Ms(this)
            }
        }
    } catch {} finally {}
};

function Jf(t) {
    return t.g ? t.u == "GET" && t.K != 2 && t.l.Ba : !1
}

function Zf(t, e, n) {
    let s = !0,
        r;
    for (; !t.I && t.C < n.length;)
        if (r = fv(t, n), r == ii) {
            e == 4 && (t.o = 4, Je(14), s = !1), xn(t.j, t.m, null, "[Incomplete Response]");
            break
        } else if (r == da) {
        t.o = 4, Je(15), xn(t.j, t.m, n, "[Invalid Chunk]"), s = !1;
        break
    } else xn(t.j, t.m, r, null), pa(t, r);
    Jf(t) && r != ii && r != da && (t.h.g = "", t.C = 0), e != 4 || n.length != 0 || t.h.h || (t.o = 1, Je(16), s = !1), t.i = t.i && s, s ? 0 < n.length && !t.aa && (t.aa = !0, e = t.l, e.g == t && e.$ && !e.L && (e.h.info("Great, no buffering proxy detected. Bytes received: " + n.length), Nc(e), e.L = !0, Je(11))) : (xn(t.j, t.m, n, "[Invalid Chunked Response]"), ln(t), Ms(t))
}
L.fb = function() {
    if (this.g) {
        var t = Mt(this.g),
            e = this.g.ga();
        this.C < e.length && (ji(this), Zf(this, t, e), this.i && t != 4 && ur(this))
    }
};

function fv(t, e) {
    var n = t.C,
        s = e.indexOf(`
`, n);
    return s == -1 ? ii : (n = Number(e.substring(n, s)), isNaN(n) ? da : (s += 1, s + n > e.length ? ii : (e = e.substr(s, n), t.C = s + n, e)))
}
L.cancel = function() {
    this.I = !0, ln(this)
};

function ur(t) {
    t.Y = Date.now() + t.P, ed(t, t.P)
}

function ed(t, e) {
    if (t.B != null) throw Error("WatchDog timer not null");
    t.B = ar(Ue(t.eb, t), e)
}

function ji(t) {
    t.B && (z.clearTimeout(t.B), t.B = null)
}
L.eb = function() {
    this.B = null;
    const t = Date.now();
    0 <= t - this.Y ? (lv(this.j, this.A), this.K != 2 && (Ws(3), Je(17)), ln(this), this.o = 2, Ms(this)) : ed(this, this.Y - t)
};

function Ms(t) {
    t.l.G == 0 || t.I || Ed(t.l, t)
}

function ln(t) {
    ji(t);
    var e = t.L;
    e && typeof e.na == "function" && e.na(), t.L = null, pc(t.W), Kf(t.V), t.g && (e = t.g, t.g = null, e.abort(), e.na())
}

function pa(t, e) {
    try {
        var n = t.l;
        if (n.G != 0 && (n.g == t || ma(n.i, t))) {
            if (n.I = t.N, !t.J && ma(n.i, t) && n.G == 3) {
                try {
                    var s = n.Ca.g.parse(e)
                } catch {
                    s = null
                }
                if (Array.isArray(s) && s.length == 3) {
                    var r = s;
                    if (r[0] == 0) {
                        e: if (!n.u) {
                            if (n.g)
                                if (n.g.F + 3e3 < t.F) li(n), zi(n);
                                else break e;
                            Ac(n), Je(18)
                        }
                    }
                    else n.ta = r[1], 0 < n.ta - n.U && 37500 > r[2] && n.N && n.A == 0 && !n.v && (n.v = ar(Ue(n.ab, n), 6e3));
                    if (1 >= ad(n.i) && n.ka) {
                        try {
                            n.ka()
                        } catch {}
                        n.ka = void 0
                    }
                } else un(n, 11)
            } else if ((t.J || n.g == t) && li(n), !si(e))
                for (r = n.Ca.g.parse(e), e = 0; e < r.length; e++) {
                    let l = r[e];
                    if (n.U = l[0], l = l[1], n.G == 2)
                        if (l[0] == "c") {
                            n.J = l[1], n.la = l[2];
                            const u = l[3];
                            u != null && (n.ma = u, n.h.info("VER=" + n.ma));
                            const h = l[4];
                            h != null && (n.za = h, n.h.info("SVER=" + n.za));
                            const f = l[5];
                            f != null && typeof f == "number" && 0 < f && (s = 1.5 * f, n.K = s, n.h.info("backChannelRequestTimeoutMs_=" + s)), s = n;
                            const g = t.g;
                            if (g) {
                                const m = g.g ? g.g.getResponseHeader("X-Client-Wire-Protocol") : null;
                                if (m) {
                                    var i = s.i;
                                    !i.g && (Ye(m, "spdy") || Ye(m, "quic") || Ye(m, "h2")) && (i.j = i.l, i.g = new Set, i.h && (bc(i, i.h), i.h = null))
                                }
                                if (s.D) {
                                    const w = g.g ? g.g.getResponseHeader("X-HTTP-Session-Id") : null;
                                    w && (s.sa = w, be(s.F, s.D, w))
                                }
                            }
                            n.G = 3, n.j && n.j.xa(), n.$ && (n.O = Date.now() - t.F, n.h.info("Handshake RTT: " + n.O + "ms")), s = n;
                            var o = t;
                            if (s.oa = Cd(s, s.H ? s.la : null, s.W), o.J) {
                                cd(s.i, o);
                                var a = o,
                                    c = s.K;
                                c && a.setTimeout(c), a.B && (ji(a), ur(a)), s.g = o
                            } else wd(s);
                            0 < n.l.length && Gi(n)
                        } else l[0] != "stop" && l[0] != "close" || un(n, 7);
                    else n.G == 3 && (l[0] == "stop" || l[0] == "close" ? l[0] == "stop" ? un(n, 7) : _c(n) : l[0] != "noop" && n.j && n.j.wa(l), n.A = 0)
                }
        }
        Ws(4)
    } catch {}
}

function dv(t) {
    if (t.R && typeof t.R == "function") return t.R();
    if (typeof t == "string") return t.split("");
    if (ia(t)) {
        for (var e = [], n = t.length, s = 0; s < n; s++) e.push(t[s]);
        return e
    }
    e = [], n = 0;
    for (s in t) e[n++] = t[s];
    return e
}

function Ec(t, e) {
    if (t.forEach && typeof t.forEach == "function") t.forEach(e, void 0);
    else if (ia(t) || typeof t == "string") Rf(t, e, void 0);
    else {
        if (t.T && typeof t.T == "function") var n = t.T();
        else if (t.R && typeof t.R == "function") n = void 0;
        else if (ia(t) || typeof t == "string") {
            n = [];
            for (var s = t.length, r = 0; r < s; r++) n.push(r)
        } else
            for (r in n = [], s = 0, t) n[s++] = r;
        s = dv(t), r = s.length;
        for (var i = 0; i < r; i++) e.call(void 0, s[i], n && n[i], t)
    }
}

function us(t, e) {
    this.h = {}, this.g = [], this.i = 0;
    var n = arguments.length;
    if (1 < n) {
        if (n % 2) throw Error("Uneven number of arguments");
        for (var s = 0; s < n; s += 2) this.set(arguments[s], arguments[s + 1])
    } else if (t)
        if (t instanceof us)
            for (n = t.T(), s = 0; s < n.length; s++) this.set(n[s], t.get(n[s]));
        else
            for (s in t) this.set(s, t[s])
}
L = us.prototype;
L.R = function() {
    Tc(this);
    for (var t = [], e = 0; e < this.g.length; e++) t.push(this.h[this.g[e]]);
    return t
};
L.T = function() {
    return Tc(this), this.g.concat()
};

function Tc(t) {
    if (t.i != t.g.length) {
        for (var e = 0, n = 0; e < t.g.length;) {
            var s = t.g[e];
            mn(t.h, s) && (t.g[n++] = s), e++
        }
        t.g.length = n
    }
    if (t.i != t.g.length) {
        var r = {};
        for (n = e = 0; e < t.g.length;) s = t.g[e], mn(r, s) || (t.g[n++] = s, r[s] = 1), e++;
        t.g.length = n
    }
}
L.get = function(t, e) {
    return mn(this.h, t) ? this.h[t] : e
};
L.set = function(t, e) {
    mn(this.h, t) || (this.i++, this.g.push(t)), this.h[t] = e
};
L.forEach = function(t, e) {
    for (var n = this.T(), s = 0; s < n.length; s++) {
        var r = n[s],
            i = this.get(r);
        t.call(e, i, r, this)
    }
};

function mn(t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
}
var td = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

function gv(t, e) {
    if (t) {
        t = t.split("&");
        for (var n = 0; n < t.length; n++) {
            var s = t[n].indexOf("="),
                r = null;
            if (0 <= s) {
                var i = t[n].substring(0, s);
                r = t[n].substring(s + 1)
            } else i = t[n];
            e(i, r ? decodeURIComponent(r.replace(/\+/g, " ")) : "")
        }
    }
}

function yn(t, e) {
    if (this.i = this.s = this.j = "", this.m = null, this.o = this.l = "", this.g = !1, t instanceof yn) {
        this.g = e !== void 0 ? e : t.g, oi(this, t.j), this.s = t.s, ai(this, t.i), ci(this, t.m), this.l = t.l, e = t.h;
        var n = new Ys;
        n.i = e.i, e.g && (n.g = new us(e.g), n.h = e.h), du(this, n), this.o = t.o
    } else t && (n = String(t).match(td)) ? (this.g = !!e, oi(this, n[1] || "", !0), this.s = ks(n[2] || ""), ai(this, n[3] || "", !0), ci(this, n[4]), this.l = ks(n[5] || "", !0), du(this, n[6] || "", !0), this.o = ks(n[7] || "")) : (this.g = !!e, this.h = new Ys(null, this.g))
}
yn.prototype.toString = function() {
    var t = [],
        e = this.j;
    e && t.push(Ss(e, gu, !0), ":");
    var n = this.i;
    return (n || e == "file") && (t.push("//"), (e = this.s) && t.push(Ss(e, gu, !0), "@"), t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), n = this.m, n != null && t.push(":", String(n))), (n = this.l) && (this.i && n.charAt(0) != "/" && t.push("/"), t.push(Ss(n, n.charAt(0) == "/" ? vv : wv, !0))), (n = this.h.toString()) && t.push("?", n), (n = this.o) && t.push("#", Ss(n, Tv)), t.join("")
};

function Lt(t) {
    return new yn(t)
}

function oi(t, e, n) {
    t.j = n ? ks(e, !0) : e, t.j && (t.j = t.j.replace(/:$/, ""))
}

function ai(t, e, n) {
    t.i = n ? ks(e, !0) : e
}

function ci(t, e) {
    if (e) {
        if (e = Number(e), isNaN(e) || 0 > e) throw Error("Bad port number " + e);
        t.m = e
    } else t.m = null
}

function du(t, e, n) {
    e instanceof Ys ? (t.h = e, bv(t.h, t.g)) : (n || (e = Ss(e, Ev)), t.h = new Ys(e, t.g))
}

function be(t, e, n) {
    t.h.set(e, n)
}

function Hi(t) {
    return be(t, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36)), t
}

function pv(t) {
    return t instanceof yn ? Lt(t) : new yn(t, void 0)
}

function mv(t, e, n, s) {
    var r = new yn(null, void 0);
    return t && oi(r, t), e && ai(r, e), n && ci(r, n), s && (r.l = s), r
}

function ks(t, e) {
    return t ? e ? decodeURI(t.replace(/%25/g, "%2525")) : decodeURIComponent(t) : ""
}

function Ss(t, e, n) {
    return typeof t == "string" ? (t = encodeURI(t).replace(e, yv), n && (t = t.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), t) : null
}

function yv(t) {
    return t = t.charCodeAt(0), "%" + (t >> 4 & 15).toString(16) + (t & 15).toString(16)
}
var gu = /[#\/\?@]/g,
    wv = /[#\?:]/g,
    vv = /[#\?]/g,
    Ev = /[#\?@]/g,
    Tv = /#/g;

function Ys(t, e) {
    this.h = this.g = null, this.i = t || null, this.j = !!e
}

function Zt(t) {
    t.g || (t.g = new us, t.h = 0, t.i && gv(t.i, function(e, n) {
        t.add(decodeURIComponent(e.replace(/\+/g, " ")), n)
    }))
}
L = Ys.prototype;
L.add = function(t, e) {
    Zt(this), this.i = null, t = hs(this, t);
    var n = this.g.get(t);
    return n || this.g.set(t, n = []), n.push(e), this.h += 1, this
};

function nd(t, e) {
    Zt(t), e = hs(t, e), mn(t.g.h, e) && (t.i = null, t.h -= t.g.get(e).length, t = t.g, mn(t.h, e) && (delete t.h[e], t.i--, t.g.length > 2 * t.i && Tc(t)))
}

function sd(t, e) {
    return Zt(t), e = hs(t, e), mn(t.g.h, e)
}
L.forEach = function(t, e) {
    Zt(this), this.g.forEach(function(n, s) {
        Rf(n, function(r) {
            t.call(e, r, s, this)
        }, this)
    }, this)
};
L.T = function() {
    Zt(this);
    for (var t = this.g.R(), e = this.g.T(), n = [], s = 0; s < e.length; s++)
        for (var r = t[s], i = 0; i < r.length; i++) n.push(e[s]);
    return n
};
L.R = function(t) {
    Zt(this);
    var e = [];
    if (typeof t == "string") sd(this, t) && (e = ru(e, this.g.get(hs(this, t))));
    else {
        t = this.g.R();
        for (var n = 0; n < t.length; n++) e = ru(e, t[n])
    }
    return e
};
L.set = function(t, e) {
    return Zt(this), this.i = null, t = hs(this, t), sd(this, t) && (this.h -= this.g.get(t).length), this.g.set(t, [e]), this.h += 1, this
};
L.get = function(t, e) {
    return t ? (t = this.R(t), 0 < t.length ? String(t[0]) : e) : e
};

function rd(t, e, n) {
    nd(t, e), 0 < n.length && (t.i = null, t.g.set(hs(t, e), oc(n)), t.h += n.length)
}
L.toString = function() {
    if (this.i) return this.i;
    if (!this.g) return "";
    for (var t = [], e = this.g.T(), n = 0; n < e.length; n++) {
        var s = e[n],
            r = encodeURIComponent(String(s));
        s = this.R(s);
        for (var i = 0; i < s.length; i++) {
            var o = r;
            s[i] !== "" && (o += "=" + encodeURIComponent(String(s[i]))), t.push(o)
        }
    }
    return this.i = t.join("&")
};

function hs(t, e) {
    return e = String(e), t.j && (e = e.toLowerCase()), e
}

function bv(t, e) {
    e && !t.j && (Zt(t), t.i = null, t.g.forEach(function(n, s) {
        var r = s.toLowerCase();
        s != r && (nd(this, s), rd(this, r, n))
    }, t)), t.j = e
}
var Cv = class {
    constructor(t, e) {
        this.h = t, this.g = e
    }
};

function id(t) {
    this.l = t || Iv, z.PerformanceNavigationTiming ? (t = z.performance.getEntriesByType("navigation"), t = 0 < t.length && (t[0].nextHopProtocol == "hq" || t[0].nextHopProtocol == "h2")) : t = !!(z.g && z.g.Ea && z.g.Ea() && z.g.Ea().Zb), this.j = t ? this.l : 1, this.g = null, 1 < this.j && (this.g = new Set), this.h = null, this.i = []
}
var Iv = 10;

function od(t) {
    return t.h ? !0 : t.g ? t.g.size >= t.j : !1
}

function ad(t) {
    return t.h ? 1 : t.g ? t.g.size : 0
}

function ma(t, e) {
    return t.h ? t.h == e : t.g ? t.g.has(e) : !1
}

function bc(t, e) {
    t.g ? t.g.add(e) : t.h = e
}

function cd(t, e) {
    t.h && t.h == e ? t.h = null : t.g && t.g.has(e) && t.g.delete(e)
}
id.prototype.cancel = function() {
    if (this.i = ld(this), this.h) this.h.cancel(), this.h = null;
    else if (this.g && this.g.size !== 0) {
        for (const t of this.g.values()) t.cancel();
        this.g.clear()
    }
};

function ld(t) {
    if (t.h != null) return t.i.concat(t.h.D);
    if (t.g != null && t.g.size !== 0) {
        let e = t.i;
        for (const n of t.g.values()) e = e.concat(n.D);
        return e
    }
    return oc(t.i)
}

function Cc() {}
Cc.prototype.stringify = function(t) {
    return z.JSON.stringify(t, void 0)
};
Cc.prototype.parse = function(t) {
    return z.JSON.parse(t, void 0)
};

function Sv() {
    this.g = new Cc
}

function _v(t, e, n) {
    const s = n || "";
    try {
        Ec(t, function(r, i) {
            let o = r;
            ir(r) && (o = dc(r)), e.push(s + i + "=" + encodeURIComponent(o))
        })
    } catch (r) {
        throw e.push(s + "type=" + encodeURIComponent("_badmap")), r
    }
}

function Av(t, e) {
    const n = new Bi;
    if (z.Image) {
        const s = new Image;
        s.onload = _r(Nr, n, s, "TestLoadImage: loaded", !0, e), s.onerror = _r(Nr, n, s, "TestLoadImage: error", !1, e), s.onabort = _r(Nr, n, s, "TestLoadImage: abort", !1, e), s.ontimeout = _r(Nr, n, s, "TestLoadImage: timeout", !1, e), z.setTimeout(function() {
            s.ontimeout && s.ontimeout()
        }, 1e4), s.src = t
    } else e(!1)
}

function Nr(t, e, n, s, r) {
    try {
        e.onload = null, e.onerror = null, e.onabort = null, e.ontimeout = null, r(s)
    } catch {}
}

function hr(t) {
    this.l = t.$b || null, this.j = t.ib || !1
}
He(hr, yc);
hr.prototype.g = function() {
    return new Ki(this.l, this.j)
};
hr.prototype.i = function(t) {
    return function() {
        return t
    }
}({});

function Ki(t, e) {
    Le.call(this), this.D = t, this.u = e, this.m = void 0, this.readyState = Ic, this.status = 0, this.responseType = this.responseText = this.response = this.statusText = "", this.onreadystatechange = null, this.v = new Headers, this.h = null, this.C = "GET", this.B = "", this.g = !1, this.A = this.j = this.l = null
}
He(Ki, Le);
var Ic = 0;
L = Ki.prototype;
L.open = function(t, e) {
    if (this.readyState != Ic) throw this.abort(), Error("Error reopening a connection");
    this.C = t, this.B = e, this.readyState = 1, Xs(this)
};
L.send = function(t) {
    if (this.readyState != 1) throw this.abort(), Error("need to call open() first. ");
    this.g = !0;
    const e = {
        headers: this.v,
        method: this.C,
        credentials: this.m,
        cache: void 0
    };
    t && (e.body = t), (this.D || z).fetch(new Request(this.B, e)).then(this.Va.bind(this), this.ha.bind(this))
};
L.abort = function() {
    this.response = this.responseText = "", this.v = new Headers, this.status = 0, this.j && this.j.cancel("Request was aborted."), 1 <= this.readyState && this.g && this.readyState != 4 && (this.g = !1, fr(this)), this.readyState = Ic
};
L.Va = function(t) {
    if (this.g && (this.l = t, this.h || (this.status = this.l.status, this.statusText = this.l.statusText, this.h = t.headers, this.readyState = 2, Xs(this)), this.g && (this.readyState = 3, Xs(this), this.g)))
        if (this.responseType === "arraybuffer") t.arrayBuffer().then(this.Ta.bind(this), this.ha.bind(this));
        else if (typeof z.ReadableStream != "undefined" && "body" in t) {
        if (this.j = t.body.getReader(), this.u) {
            if (this.responseType) throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');
            this.response = []
        } else this.response = this.responseText = "", this.A = new TextDecoder;
        ud(this)
    } else t.text().then(this.Ua.bind(this), this.ha.bind(this))
};

function ud(t) {
    t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))
}
L.Sa = function(t) {
    if (this.g) {
        if (this.u && t.value) this.response.push(t.value);
        else if (!this.u) {
            var e = t.value ? t.value : new Uint8Array(0);
            (e = this.A.decode(e, {
                stream: !t.done
            })) && (this.response = this.responseText += e)
        }
        t.done ? fr(this) : Xs(this), this.readyState == 3 && ud(this)
    }
};
L.Ua = function(t) {
    this.g && (this.response = this.responseText = t, fr(this))
};
L.Ta = function(t) {
    this.g && (this.response = t, fr(this))
};
L.ha = function() {
    this.g && fr(this)
};

function fr(t) {
    t.readyState = 4, t.l = null, t.j = null, t.A = null, Xs(t)
}
L.setRequestHeader = function(t, e) {
    this.v.append(t, e)
};
L.getResponseHeader = function(t) {
    return this.h && this.h.get(t.toLowerCase()) || ""
};
L.getAllResponseHeaders = function() {
    if (!this.h) return "";
    const t = [],
        e = this.h.entries();
    for (var n = e.next(); !n.done;) n = n.value, t.push(n[0] + ": " + n[1]), n = e.next();
    return t.join(`\r
`)
};

function Xs(t) {
    t.onreadystatechange && t.onreadystatechange.call(t)
}
Object.defineProperty(Ki.prototype, "withCredentials", {
    get: function() {
        return this.m === "include"
    },
    set: function(t) {
        this.m = t ? "include" : "same-origin"
    }
});
var Nv = z.JSON.parse;

function Ae(t) {
    Le.call(this), this.headers = new us, this.u = t || null, this.h = !1, this.C = this.g = null, this.H = "", this.m = 0, this.j = "", this.l = this.F = this.v = this.D = !1, this.B = 0, this.A = null, this.J = hd, this.K = this.L = !1
}
He(Ae, Le);
var hd = "",
    Rv = /^https?$/i,
    Dv = ["POST", "PUT"];
L = Ae.prototype;
L.ea = function(t, e, n, s) {
    if (this.g) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.H + "; newUri=" + t);
    e = e ? e.toUpperCase() : "GET", this.H = t, this.j = "", this.m = 0, this.D = !1, this.h = !0, this.g = this.u ? this.u.g() : fa.g(), this.C = this.u ? fu(this.u) : fu(fa), this.g.onreadystatechange = Ue(this.Fa, this);
    try {
        this.F = !0, this.g.open(e, String(t), !0), this.F = !1
    } catch (i) {
        pu(this, i);
        return
    }
    t = n || "";
    const r = new us(this.headers);
    s && Ec(s, function(i, o) {
        r.set(o, i)
    }), s = $w(r.T()), n = z.FormData && t instanceof z.FormData, !(0 <= Nf(Dv, e)) || s || n || r.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8"), r.forEach(function(i, o) {
        this.g.setRequestHeader(o, i)
    }, this), this.J && (this.g.responseType = this.J), "withCredentials" in this.g && this.g.withCredentials !== this.L && (this.g.withCredentials = this.L);
    try {
        gd(this), 0 < this.B && ((this.K = Pv(this.g)) ? (this.g.timeout = this.B, this.g.ontimeout = Ue(this.pa, this)) : this.A = mc(this.pa, this.B, this)), this.v = !0, this.g.send(t), this.v = !1
    } catch (i) {
        pu(this, i)
    }
};

function Pv(t) {
    return Gn && zw() && typeof t.timeout == "number" && t.ontimeout !== void 0
}

function Mv(t) {
    return t.toLowerCase() == "content-type"
}
L.pa = function() {
    typeof ic != "undefined" && this.g && (this.j = "Timed out after " + this.B + "ms, aborting", this.m = 8, Ve(this, "timeout"), this.abort(8))
};

function pu(t, e) {
    t.h = !1, t.g && (t.l = !0, t.g.abort(), t.l = !1), t.j = e, t.m = 5, fd(t), qi(t)
}

function fd(t) {
    t.D || (t.D = !0, Ve(t, "complete"), Ve(t, "error"))
}
L.abort = function(t) {
    this.g && this.h && (this.h = !1, this.l = !0, this.g.abort(), this.l = !1, this.m = t || 7, Ve(this, "complete"), Ve(this, "abort"), qi(this))
};
L.M = function() {
    this.g && (this.h && (this.h = !1, this.l = !0, this.g.abort(), this.l = !1), qi(this, !0)), Ae.Z.M.call(this)
};
L.Fa = function() {
    this.s || (this.F || this.v || this.l ? dd(this) : this.cb())
};
L.cb = function() {
    dd(this)
};

function dd(t) {
    if (t.h && typeof ic != "undefined" && (!t.C[1] || Mt(t) != 4 || t.ba() != 2)) {
        if (t.v && Mt(t) == 4) mc(t.Fa, 0, t);
        else if (Ve(t, "readystatechange"), Mt(t) == 4) {
            t.h = !1;
            try {
                const a = t.ba();
                e: switch (a) {
                    case 200:
                    case 201:
                    case 202:
                    case 204:
                    case 206:
                    case 304:
                    case 1223:
                        var e = !0;
                        break e;
                    default:
                        e = !1
                }
                var n;
                if (!(n = e)) {
                    var s;
                    if (s = a === 0) {
                        var r = String(t.H).match(td)[1] || null;
                        if (!r && z.self && z.self.location) {
                            var i = z.self.location.protocol;
                            r = i.substr(0, i.length - 1)
                        }
                        s = !Rv.test(r ? r.toLowerCase() : "")
                    }
                    n = s
                }
                if (n) Ve(t, "complete"), Ve(t, "success");
                else {
                    t.m = 6;
                    try {
                        var o = 2 < Mt(t) ? t.g.statusText : ""
                    } catch {
                        o = ""
                    }
                    t.j = o + " [" + t.ba() + "]", fd(t)
                }
            } finally {
                qi(t)
            }
        }
    }
}

function qi(t, e) {
    if (t.g) {
        gd(t);
        const n = t.g,
            s = t.C[0] ? ni : null;
        t.g = null, t.C = null, e || Ve(t, "ready");
        try {
            n.onreadystatechange = s
        } catch {}
    }
}

function gd(t) {
    t.g && t.K && (t.g.ontimeout = null), t.A && (z.clearTimeout(t.A), t.A = null)
}

function Mt(t) {
    return t.g ? t.g.readyState : 0
}
L.ba = function() {
    try {
        return 2 < Mt(this) ? this.g.status : -1
    } catch {
        return -1
    }
};
L.ga = function() {
    try {
        return this.g ? this.g.responseText : ""
    } catch {
        return ""
    }
};
L.Qa = function(t) {
    if (this.g) {
        var e = this.g.responseText;
        return t && e.indexOf(t) == 0 && (e = e.substring(t.length)), Nv(e)
    }
};

function mu(t) {
    try {
        if (!t.g) return null;
        if ("response" in t.g) return t.g.response;
        switch (t.J) {
            case hd:
            case "text":
                return t.g.responseText;
            case "arraybuffer":
                if ("mozResponseArrayBuffer" in t.g) return t.g.mozResponseArrayBuffer
        }
        return null
    } catch {
        return null
    }
}
L.Da = function() {
    return this.m
};
L.La = function() {
    return typeof this.j == "string" ? this.j : String(this.j)
};

function kv(t) {
    let e = "";
    return ac(t, function(n, s) {
        e += s, e += ":", e += n, e += `\r
`
    }), e
}

function Sc(t, e, n) {
    e: {
        for (s in n) {
            var s = !1;
            break e
        }
        s = !0
    }
    s || (n = kv(n), typeof t == "string" ? n != null && encodeURIComponent(String(n)) : be(t, e, n))
}

function Ts(t, e, n) {
    return n && n.internalChannelParams && n.internalChannelParams[t] || e
}

function pd(t) {
    this.za = 0, this.l = [], this.h = new Bi, this.la = this.oa = this.F = this.W = this.g = this.sa = this.D = this.aa = this.o = this.P = this.s = null, this.Za = this.V = 0, this.Xa = Ts("failFast", !1, t), this.N = this.v = this.u = this.m = this.j = null, this.X = !0, this.I = this.ta = this.U = -1, this.Y = this.A = this.C = 0, this.Pa = Ts("baseRetryDelayMs", 5e3, t), this.$a = Ts("retryDelaySeedMs", 1e4, t), this.Ya = Ts("forwardChannelMaxRetries", 2, t), this.ra = Ts("forwardChannelRequestTimeoutMs", 2e4, t), this.qa = t && t.xmlHttpFactory || void 0, this.Ba = t && t.Yb || !1, this.K = void 0, this.H = t && t.supportsCrossDomainXhr || !1, this.J = "", this.i = new id(t && t.concurrentRequestLimit), this.Ca = new Sv, this.ja = t && t.fastHandshake || !1, this.Ra = t && t.Wb || !1, t && t.Aa && this.h.Aa(), t && t.forceLongPolling && (this.X = !1), this.$ = !this.ja && this.X && t && t.detectBufferingProxy || !1, this.ka = void 0, this.O = 0, this.L = !1, this.B = null, this.Wa = !t || t.Xb !== !1
}
L = pd.prototype;
L.ma = 8;
L.G = 1;

function _c(t) {
    if (md(t), t.G == 3) {
        var e = t.V++,
            n = Lt(t.F);
        be(n, "SID", t.J), be(n, "RID", e), be(n, "TYPE", "terminate"), dr(t, n), e = new lr(t, t.h, e, void 0), e.K = 2, e.v = Hi(Lt(n)), n = !1, z.navigator && z.navigator.sendBeacon && (n = z.navigator.sendBeacon(e.v.toString(), "")), !n && z.Image && (new Image().src = e.v, n = !0), n || (e.g = Id(e.l, null), e.g.ea(e.v)), e.F = Date.now(), ur(e)
    }
    bd(t)
}
L.hb = function(t) {
    try {
        this.h.info("Origin Trials invoked: " + t)
    } catch {}
};

function zi(t) {
    t.g && (Nc(t), t.g.cancel(), t.g = null)
}

function md(t) {
    zi(t), t.u && (z.clearTimeout(t.u), t.u = null), li(t), t.i.cancel(), t.m && (typeof t.m == "number" && z.clearTimeout(t.m), t.m = null)
}

function _o(t, e) {
    t.l.push(new Cv(t.Za++, e)), t.G == 3 && Gi(t)
}

function Gi(t) {
    od(t.i) || t.m || (t.m = !0, gc(t.Ha, t), t.C = 0)
}

function xv(t, e) {
    return ad(t.i) >= t.i.j - (t.m ? 1 : 0) ? !1 : t.m ? (t.l = e.D.concat(t.l), !0) : t.G == 1 || t.G == 2 || t.C >= (t.Xa ? 0 : t.Ya) ? !1 : (t.m = ar(Ue(t.Ha, t, e), Td(t, t.C)), t.C++, !0)
}
L.Ha = function(t) {
    if (this.m)
        if (this.m = null, this.G == 1) {
            if (!t) {
                this.V = Math.floor(1e5 * Math.random()), t = this.V++;
                const r = new lr(this, this.h, t, void 0);
                let i = this.s;
                if (this.P && (i ? (i = Df(i), Pf(i, this.P)) : i = this.P), this.o === null && (r.H = i), this.ja) e: {
                    for (var e = 0, n = 0; n < this.l.length; n++) {
                        t: {
                            var s = this.l[n];
                            if ("__data__" in s.g && (s = s.g.__data__, typeof s == "string")) {
                                s = s.length;
                                break t
                            }
                            s = void 0
                        }
                        if (s === void 0) break;
                        if (e += s, 4096 < e) {
                            e = n;
                            break e
                        }
                        if (e === 4096 || n === this.l.length - 1) {
                            e = n + 1;
                            break e
                        }
                    }
                    e = 1e3
                }
                else e = 1e3;
                e = yd(this, r, e), n = Lt(this.F), be(n, "RID", t), be(n, "CVER", 22), this.D && be(n, "X-HTTP-Session-Id", this.D), dr(this, n), this.o && i && Sc(n, this.o, i), bc(this.i, r), this.Ra && be(n, "TYPE", "init"), this.ja ? (be(n, "$req", e), be(n, "SID", "null"), r.$ = !0, ga(r, n, null)) : ga(r, n, e), this.G = 2
            }
        } else this.G == 3 && (t ? yu(this, t) : this.l.length == 0 || od(this.i) || yu(this))
};

function yu(t, e) {
    var n;
    e ? n = e.m : n = t.V++;
    const s = Lt(t.F);
    be(s, "SID", t.J), be(s, "RID", n), be(s, "AID", t.U), dr(t, s), t.o && t.s && Sc(s, t.o, t.s), n = new lr(t, t.h, n, t.C + 1), t.o === null && (n.H = t.s), e && (t.l = e.D.concat(t.l)), e = yd(t, n, 1e3), n.setTimeout(Math.round(.5 * t.ra) + Math.round(.5 * t.ra * Math.random())), bc(t.i, n), ga(n, s, e)
}

function dr(t, e) {
    t.j && Ec({}, function(n, s) {
        be(e, s, n)
    })
}

function yd(t, e, n) {
    n = Math.min(t.l.length, n);
    var s = t.j ? Ue(t.j.Oa, t.j, t) : null;
    e: {
        var r = t.l;
        let i = -1;
        for (;;) {
            const o = ["count=" + n];
            i == -1 ? 0 < n ? (i = r[0].h, o.push("ofs=" + i)) : i = 0 : o.push("ofs=" + i);
            let a = !0;
            for (let c = 0; c < n; c++) {
                let l = r[c].h;
                const u = r[c].g;
                if (l -= i, 0 > l) i = Math.max(0, r[c].h - 100), a = !1;
                else try {
                    _v(u, o, "req" + l + "_")
                } catch {
                    s && s(u)
                }
            }
            if (a) {
                s = o.join("&");
                break e
            }
        }
    }
    return t = t.l.splice(0, n), e.D = t, s
}

function wd(t) {
    t.g || t.u || (t.Y = 1, gc(t.Ga, t), t.A = 0)
}

function Ac(t) {
    return t.g || t.u || 3 <= t.A ? !1 : (t.Y++, t.u = ar(Ue(t.Ga, t), Td(t, t.A)), t.A++, !0)
}
L.Ga = function() {
    if (this.u = null, vd(this), this.$ && !(this.L || this.g == null || 0 >= this.O)) {
        var t = 2 * this.O;
        this.h.info("BP detection timer enabled: " + t), this.B = ar(Ue(this.bb, this), t)
    }
};
L.bb = function() {
    this.B && (this.B = null, this.h.info("BP detection timeout reached."), this.h.info("Buffering proxy detected and switch to long-polling!"), this.N = !1, this.L = !0, Je(10), zi(this), vd(this))
};

function Nc(t) {
    t.B != null && (z.clearTimeout(t.B), t.B = null)
}

function vd(t) {
    t.g = new lr(t, t.h, "rpc", t.Y), t.o === null && (t.g.H = t.s), t.g.O = 0;
    var e = Lt(t.oa);
    be(e, "RID", "rpc"), be(e, "SID", t.J), be(e, "CI", t.N ? "0" : "1"), be(e, "AID", t.U), dr(t, e), be(e, "TYPE", "xmlhttp"), t.o && t.s && Sc(e, t.o, t.s), t.K && t.g.setTimeout(t.K);
    var n = t.g;
    t = t.la, n.K = 1, n.v = Hi(Lt(e)), n.s = null, n.U = !0, Qf(n, t)
}
L.ab = function() {
    this.v != null && (this.v = null, zi(this), Ac(this), Je(19))
};

function li(t) {
    t.v != null && (z.clearTimeout(t.v), t.v = null)
}

function Ed(t, e) {
    var n = null;
    if (t.g == e) {
        li(t), Nc(t), t.g = null;
        var s = 2
    } else if (ma(t.i, e)) n = e.D, cd(t.i, e), s = 1;
    else return;
    if (t.I = e.N, t.G != 0) {
        if (e.i)
            if (s == 1) {
                n = e.s ? e.s.length : 0, e = Date.now() - e.F;
                var r = t.C;
                s = Ui(), Ve(s, new Gf(s, n, e, r)), Gi(t)
            } else wd(t);
        else if (r = e.o, r == 3 || r == 0 && 0 < t.I || !(s == 1 && xv(t, e) || s == 2 && Ac(t))) switch (n && 0 < n.length && (e = t.i, e.i = e.i.concat(n)), r) {
            case 1:
                un(t, 5);
                break;
            case 4:
                un(t, 10);
                break;
            case 3:
                un(t, 6);
                break;
            default:
                un(t, 2)
        }
    }
}

function Td(t, e) {
    let n = t.Pa + Math.floor(Math.random() * t.$a);
    return t.j || (n *= 2), n * e
}

function un(t, e) {
    if (t.h.info("Error code " + e), e == 2) {
        var n = null;
        t.j && (n = null);
        var s = Ue(t.jb, t);
        n || (n = new yn("//www.google.com/images/cleardot.gif"), z.location && z.location.protocol == "http" || oi(n, "https"), Hi(n)), Av(n.toString(), s)
    } else Je(2);
    t.G = 0, t.j && t.j.va(e), bd(t), md(t)
}
L.jb = function(t) {
    t ? (this.h.info("Successfully pinged google.com"), Je(2)) : (this.h.info("Failed to ping google.com"), Je(1))
};

function bd(t) {
    t.G = 0, t.I = -1, t.j && ((ld(t.i).length != 0 || t.l.length != 0) && (t.i.i.length = 0, oc(t.l), t.l.length = 0), t.j.ua())
}

function Cd(t, e, n) {
    let s = pv(n);
    if (s.i != "") e && ai(s, e + "." + s.i), ci(s, s.m);
    else {
        const r = z.location;
        s = mv(r.protocol, e ? e + "." + r.hostname : r.hostname, +r.port, n)
    }
    return t.aa && ac(t.aa, function(r, i) {
        be(s, i, r)
    }), e = t.D, n = t.sa, e && n && be(s, e, n), be(s, "VER", t.ma), dr(t, s), s
}

function Id(t, e, n) {
    if (e && !t.H) throw Error("Can't create secondary domain capable XhrIo object.");
    return e = n && t.Ba && !t.qa ? new Ae(new hr({
        ib: !0
    })) : new Ae(t.qa), e.L = t.H, e
}

function Sd() {}
L = Sd.prototype;
L.xa = function() {};
L.wa = function() {};
L.va = function() {};
L.ua = function() {};
L.Oa = function() {};

function ui() {
    if (Gn && !(10 <= Number(Gw))) throw Error("Environmental error: no available transport.")
}
ui.prototype.g = function(t, e) {
    return new ct(t, e)
};

function ct(t, e) {
    Le.call(this), this.g = new pd(e), this.l = t, this.h = e && e.messageUrlParams || null, t = e && e.messageHeaders || null, e && e.clientProtocolHeaderRequired && (t ? t["X-Client-Protocol"] = "webchannel" : t = {
        "X-Client-Protocol": "webchannel"
    }), this.g.s = t, t = e && e.initMessageHeaders || null, e && e.messageContentType && (t ? t["X-WebChannel-Content-Type"] = e.messageContentType : t = {
        "X-WebChannel-Content-Type": e.messageContentType
    }), e && e.ya && (t ? t["X-WebChannel-Client-Profile"] = e.ya : t = {
        "X-WebChannel-Client-Profile": e.ya
    }), this.g.P = t, (t = e && e.httpHeadersOverwriteParam) && !si(t) && (this.g.o = t), this.A = e && e.supportsCrossDomainXhr || !1, this.v = e && e.sendRawJson || !1, (e = e && e.httpSessionIdParam) && !si(e) && (this.g.D = e, t = this.h, t !== null && e in t && (t = this.h, e in t && delete t[e])), this.j = new fs(this)
}
He(ct, Le);
ct.prototype.m = function() {
    this.g.j = this.j, this.A && (this.g.H = !0);
    var t = this.g,
        e = this.l,
        n = this.h || void 0;
    t.Wa && (t.h.info("Origin Trials enabled."), gc(Ue(t.hb, t, e))), Je(0), t.W = e, t.aa = n || {}, t.N = t.X, t.F = Cd(t, null, t.W), Gi(t)
};
ct.prototype.close = function() {
    _c(this.g)
};
ct.prototype.u = function(t) {
    if (typeof t == "string") {
        var e = {};
        e.__data__ = t, _o(this.g, e)
    } else this.v ? (e = {}, e.__data__ = dc(t), _o(this.g, e)) : _o(this.g, t)
};
ct.prototype.M = function() {
    this.g.j = null, delete this.j, _c(this.g), delete this.g, ct.Z.M.call(this)
};

function _d(t) {
    wc.call(this);
    var e = t.__sm__;
    if (e) {
        e: {
            for (const n in e) {
                t = n;
                break e
            }
            t = void 0
        }(this.i = t) && (t = this.i, e = e !== null && t in e ? e[t] : void 0),
        this.data = e
    }
    else this.data = t
}
He(_d, wc);

function Ad() {
    vc.call(this), this.status = 1
}
He(Ad, vc);

function fs(t) {
    this.g = t
}
He(fs, Sd);
fs.prototype.xa = function() {
    Ve(this.g, "a")
};
fs.prototype.wa = function(t) {
    Ve(this.g, new _d(t))
};
fs.prototype.va = function(t) {
    Ve(this.g, new Ad(t))
};
fs.prototype.ua = function() {
    Ve(this.g, "b")
};
ui.prototype.createWebChannel = ui.prototype.g;
ct.prototype.send = ct.prototype.u;
ct.prototype.open = ct.prototype.m;
ct.prototype.close = ct.prototype.close;
Vi.NO_ERROR = 0;
Vi.TIMEOUT = 8;
Vi.HTTP_ERROR = 6;
Wf.COMPLETE = "complete";
Yf.EventType = cr;
cr.OPEN = "a";
cr.CLOSE = "b";
cr.ERROR = "c";
cr.MESSAGE = "d";
Le.prototype.listen = Le.prototype.N;
Ae.prototype.listenOnce = Ae.prototype.O;
Ae.prototype.getLastError = Ae.prototype.La;
Ae.prototype.getLastErrorCode = Ae.prototype.Da;
Ae.prototype.getStatus = Ae.prototype.ba;
Ae.prototype.getResponseJson = Ae.prototype.Qa;
Ae.prototype.getResponseText = Ae.prototype.ga;
Ae.prototype.send = Ae.prototype.ea;
var Lv = function() {
        return new ui
    },
    Ov = function() {
        return Ui()
    },
    Ao = Vi,
    Fv = Wf,
    Bv = bn,
    wu = {
        rb: 0,
        ub: 1,
        vb: 2,
        Ob: 3,
        Tb: 4,
        Qb: 5,
        Rb: 6,
        Pb: 7,
        Nb: 8,
        Sb: 9,
        PROXY: 10,
        NOPROXY: 11,
        Lb: 12,
        Hb: 13,
        Ib: 14,
        Gb: 15,
        Jb: 16,
        Kb: 17,
        nb: 18,
        mb: 19,
        ob: 20
    },
    Uv = hr,
    Rr = Yf,
    Vv = Ae;
const vu = "@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class et {
    constructor(e) {
        this.uid = e
    }
    isAuthenticated() {
        return this.uid != null
    }
    toKey() {
        return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user"
    }
    isEqual(e) {
        return e.uid === this.uid
    }
}
et.UNAUTHENTICATED = new et(null), et.GOOGLE_CREDENTIALS = new et("google-credentials-uid"), et.FIRST_PARTY = new et("first-party-uid"), et.MOCK_USER = new et("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let ds = "9.6.10";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const wn = new If("@firebase/firestore");

function Eu() {
    return wn.logLevel
}

function B(t, ...e) {
    if (wn.logLevel <= ce.DEBUG) {
        const n = e.map(Rc);
        wn.debug(`Firestore (${ds}): ${t}`, ...n)
    }
}

function Yt(t, ...e) {
    if (wn.logLevel <= ce.ERROR) {
        const n = e.map(Rc);
        wn.error(`Firestore (${ds}): ${t}`, ...n)
    }
}

function Tu(t, ...e) {
    if (wn.logLevel <= ce.WARN) {
        const n = e.map(Rc);
        wn.warn(`Firestore (${ds}): ${t}`, ...n)
    }
}

function Rc(t) {
    if (typeof t == "string") return t;
    try {
        return e = t, JSON.stringify(e)
    } catch {
        return t
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    var e
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function W(t = "Unexpected state") {
    const e = `FIRESTORE (${ds}) INTERNAL ASSERTION FAILED: ` + t;
    throw Yt(e), new Error(e)
}

function ye(t, e) {
    t || W()
}

function Q(t, e) {
    return t
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const S = {
    OK: "ok",
    CANCELLED: "cancelled",
    UNKNOWN: "unknown",
    INVALID_ARGUMENT: "invalid-argument",
    DEADLINE_EXCEEDED: "deadline-exceeded",
    NOT_FOUND: "not-found",
    ALREADY_EXISTS: "already-exists",
    PERMISSION_DENIED: "permission-denied",
    UNAUTHENTICATED: "unauthenticated",
    RESOURCE_EXHAUSTED: "resource-exhausted",
    FAILED_PRECONDITION: "failed-precondition",
    ABORTED: "aborted",
    OUT_OF_RANGE: "out-of-range",
    UNIMPLEMENTED: "unimplemented",
    INTERNAL: "internal",
    UNAVAILABLE: "unavailable",
    DATA_LOSS: "data-loss"
};
class q extends xi {
    constructor(e, n) {
        super(e, n), this.code = e, this.message = n, this.toString = () => `${this.name}: [code=${this.code}]: ${this.message}`
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zt {
    constructor() {
        this.promise = new Promise((e, n) => {
            this.resolve = e, this.reject = n
        })
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $v {
    constructor(e, n) {
        this.user = n, this.type = "OAuth", this.headers = new Map, this.headers.set("Authorization", `Bearer ${e}`)
    }
}
class jv {
    getToken() {
        return Promise.resolve(null)
    }
    invalidateToken() {}
    start(e, n) {
        e.enqueueRetryable(() => n(et.UNAUTHENTICATED))
    }
    shutdown() {}
}
class Hv {
    constructor(e) {
        this.t = e, this.currentUser = et.UNAUTHENTICATED, this.i = 0, this.forceRefresh = !1, this.auth = null
    }
    start(e, n) {
        let s = this.i;
        const r = c => this.i !== s ? (s = this.i, n(c)) : Promise.resolve();
        let i = new zt;
        this.o = () => {
            this.i++, this.currentUser = this.u(), i.resolve(), i = new zt, e.enqueueRetryable(() => r(this.currentUser))
        };
        const o = () => {
                const c = i;
                e.enqueueRetryable(async () => {
                    await c.promise, await r(this.currentUser)
                })
            },
            a = c => {
                B("FirebaseAuthCredentialsProvider", "Auth detected"), this.auth = c, this.auth.addAuthTokenListener(this.o), o()
            };
        this.t.onInit(c => a(c)), setTimeout(() => {
            if (!this.auth) {
                const c = this.t.getImmediate({
                    optional: !0
                });
                c ? a(c) : (B("FirebaseAuthCredentialsProvider", "Auth not yet detected"), i.resolve(), i = new zt)
            }
        }, 0), o()
    }
    getToken() {
        const e = this.i,
            n = this.forceRefresh;
        return this.forceRefresh = !1, this.auth ? this.auth.getToken(n).then(s => this.i !== e ? (B("FirebaseAuthCredentialsProvider", "getToken aborted due to token change."), this.getToken()) : s ? (ye(typeof s.accessToken == "string"), new $v(s.accessToken, this.currentUser)) : null) : Promise.resolve(null)
    }
    invalidateToken() {
        this.forceRefresh = !0
    }
    shutdown() {
        this.auth && this.auth.removeAuthTokenListener(this.o)
    }
    u() {
        const e = this.auth && this.auth.getUid();
        return ye(e === null || typeof e == "string"), new et(e)
    }
}
class Kv {
    constructor(e, n, s) {
        this.type = "FirstParty", this.user = et.FIRST_PARTY, this.headers = new Map, this.headers.set("X-Goog-AuthUser", n);
        const r = e.auth.getAuthHeaderValueForFirstParty([]);
        r && this.headers.set("Authorization", r), s && this.headers.set("X-Goog-Iam-Authorization-Token", s)
    }
}
class qv {
    constructor(e, n, s) {
        this.h = e, this.l = n, this.m = s
    }
    getToken() {
        return Promise.resolve(new Kv(this.h, this.l, this.m))
    }
    start(e, n) {
        e.enqueueRetryable(() => n(et.FIRST_PARTY))
    }
    shutdown() {}
    invalidateToken() {}
}
class zv {
    constructor(e) {
        this.value = e, this.type = "AppCheck", this.headers = new Map, e && e.length > 0 && this.headers.set("x-firebase-appcheck", this.value)
    }
}
class Gv {
    constructor(e) {
        this.g = e, this.forceRefresh = !1, this.appCheck = null, this.p = null
    }
    start(e, n) {
        const s = i => {
            i.error != null && B("FirebaseAppCheckTokenProvider", `Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);
            const o = i.token !== this.p;
            return this.p = i.token, B("FirebaseAppCheckTokenProvider", `Received ${o?"new":"existing"} token.`), o ? n(i.token) : Promise.resolve()
        };
        this.o = i => {
            e.enqueueRetryable(() => s(i))
        };
        const r = i => {
            B("FirebaseAppCheckTokenProvider", "AppCheck detected"), this.appCheck = i, this.appCheck.addTokenListener(this.o)
        };
        this.g.onInit(i => r(i)), setTimeout(() => {
            if (!this.appCheck) {
                const i = this.g.getImmediate({
                    optional: !0
                });
                i ? r(i) : B("FirebaseAppCheckTokenProvider", "AppCheck not yet detected")
            }
        }, 0)
    }
    getToken() {
        const e = this.forceRefresh;
        return this.forceRefresh = !1, this.appCheck ? this.appCheck.getToken(e).then(n => n ? (ye(typeof n.token == "string"), this.p = n.token, new zv(n.token)) : null) : Promise.resolve(null)
    }
    invalidateToken() {
        this.forceRefresh = !0
    }
    shutdown() {
        this.appCheck && this.appCheck.removeTokenListener(this.o)
    }
}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dc {
    constructor(e, n) {
        this.previousValue = e, n && (n.sequenceNumberHandler = s => this.I(s), this.T = s => n.writeSequenceNumber(s))
    }
    I(e) {
        return this.previousValue = Math.max(e, this.previousValue), this.previousValue
    }
    next() {
        const e = ++this.previousValue;
        return this.T && this.T(e), e
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Wv(t) {
    const e = typeof self != "undefined" && (self.crypto || self.msCrypto),
        n = new Uint8Array(t);
    if (e && typeof e.getRandomValues == "function") e.getRandomValues(n);
    else
        for (let s = 0; s < t; s++) n[s] = Math.floor(256 * Math.random());
    return n
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Dc.A = -1;
class Nd {
    static R() {
        const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
            n = Math.floor(256 / e.length) * e.length;
        let s = "";
        for (; s.length < 20;) {
            const r = Wv(40);
            for (let i = 0; i < r.length; ++i) s.length < 20 && r[i] < n && (s += e.charAt(r[i] % e.length))
        }
        return s
    }
}

function le(t, e) {
    return t < e ? -1 : t > e ? 1 : 0
}

function Wn(t, e, n) {
    return t.length === e.length && t.every((s, r) => n(s, e[r]))
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ze {
    constructor(e, n) {
        if (this.seconds = e, this.nanoseconds = n, n < 0) throw new q(S.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + n);
        if (n >= 1e9) throw new q(S.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + n);
        if (e < -62135596800) throw new q(S.INVALID_ARGUMENT, "Timestamp seconds out of range: " + e);
        if (e >= 253402300800) throw new q(S.INVALID_ARGUMENT, "Timestamp seconds out of range: " + e)
    }
    static now() {
        return ze.fromMillis(Date.now())
    }
    static fromDate(e) {
        return ze.fromMillis(e.getTime())
    }
    static fromMillis(e) {
        const n = Math.floor(e / 1e3),
            s = Math.floor(1e6 * (e - 1e3 * n));
        return new ze(n, s)
    }
    toDate() {
        return new Date(this.toMillis())
    }
    toMillis() {
        return 1e3 * this.seconds + this.nanoseconds / 1e6
    }
    _compareTo(e) {
        return this.seconds === e.seconds ? le(this.nanoseconds, e.nanoseconds) : le(this.seconds, e.seconds)
    }
    isEqual(e) {
        return e.seconds === this.seconds && e.nanoseconds === this.nanoseconds
    }
    toString() {
        return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")"
    }
    toJSON() {
        return {
            seconds: this.seconds,
            nanoseconds: this.nanoseconds
        }
    }
    valueOf() {
        const e = this.seconds - -62135596800;
        return String(e).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0")
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ee {
    constructor(e) {
        this.timestamp = e
    }
    static fromTimestamp(e) {
        return new ee(e)
    }
    static min() {
        return new ee(new ze(0, 0))
    }
    static max() {
        return new ee(new ze(253402300799, 999999999))
    }
    compareTo(e) {
        return this.timestamp._compareTo(e.timestamp)
    }
    isEqual(e) {
        return this.timestamp.isEqual(e.timestamp)
    }
    toMicroseconds() {
        return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3
    }
    toString() {
        return "SnapshotVersion(" + this.timestamp.toString() + ")"
    }
    toTimestamp() {
        return this.timestamp
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function bu(t) {
    let e = 0;
    for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && e++;
    return e
}

function gs(t, e) {
    for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n])
}

function Rd(t) {
    for (const e in t)
        if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
    return !0
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qs {
    constructor(e, n, s) {
        n === void 0 ? n = 0 : n > e.length && W(), s === void 0 ? s = e.length - n : s > e.length - n && W(), this.segments = e, this.offset = n, this.len = s
    }
    get length() {
        return this.len
    }
    isEqual(e) {
        return Qs.comparator(this, e) === 0
    }
    child(e) {
        const n = this.segments.slice(this.offset, this.limit());
        return e instanceof Qs ? e.forEach(s => {
            n.push(s)
        }) : n.push(e), this.construct(n)
    }
    limit() {
        return this.offset + this.length
    }
    popFirst(e) {
        return e = e === void 0 ? 1 : e, this.construct(this.segments, this.offset + e, this.length - e)
    }
    popLast() {
        return this.construct(this.segments, this.offset, this.length - 1)
    }
    firstSegment() {
        return this.segments[this.offset]
    }
    lastSegment() {
        return this.get(this.length - 1)
    }
    get(e) {
        return this.segments[this.offset + e]
    }
    isEmpty() {
        return this.length === 0
    }
    isPrefixOf(e) {
        if (e.length < this.length) return !1;
        for (let n = 0; n < this.length; n++)
            if (this.get(n) !== e.get(n)) return !1;
        return !0
    }
    isImmediateParentOf(e) {
        if (this.length + 1 !== e.length) return !1;
        for (let n = 0; n < this.length; n++)
            if (this.get(n) !== e.get(n)) return !1;
        return !0
    }
    forEach(e) {
        for (let n = this.offset, s = this.limit(); n < s; n++) e(this.segments[n])
    }
    toArray() {
        return this.segments.slice(this.offset, this.limit())
    }
    static comparator(e, n) {
        const s = Math.min(e.length, n.length);
        for (let r = 0; r < s; r++) {
            const i = e.get(r),
                o = n.get(r);
            if (i < o) return -1;
            if (i > o) return 1
        }
        return e.length < n.length ? -1 : e.length > n.length ? 1 : 0
    }
}
class Ce extends Qs {
    construct(e, n, s) {
        return new Ce(e, n, s)
    }
    canonicalString() {
        return this.toArray().join("/")
    }
    toString() {
        return this.canonicalString()
    }
    static fromString(...e) {
        const n = [];
        for (const s of e) {
            if (s.indexOf("//") >= 0) throw new q(S.INVALID_ARGUMENT, `Invalid segment (${s}). Paths must not contain // in them.`);
            n.push(...s.split("/").filter(r => r.length > 0))
        }
        return new Ce(n)
    }
    static emptyPath() {
        return new Ce([])
    }
}
const Yv = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
class tt extends Qs {
    construct(e, n, s) {
        return new tt(e, n, s)
    }
    static isValidIdentifier(e) {
        return Yv.test(e)
    }
    canonicalString() {
        return this.toArray().map(e => (e = e.replace(/\\/g, "\\\\").replace(/`/g, "\\`"), tt.isValidIdentifier(e) || (e = "`" + e + "`"), e)).join(".")
    }
    toString() {
        return this.canonicalString()
    }
    isKeyField() {
        return this.length === 1 && this.get(0) === "__name__"
    }
    static keyField() {
        return new tt(["__name__"])
    }
    static fromServerFormat(e) {
        const n = [];
        let s = "",
            r = 0;
        const i = () => {
            if (s.length === 0) throw new q(S.INVALID_ARGUMENT, `Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);
            n.push(s), s = ""
        };
        let o = !1;
        for (; r < e.length;) {
            const a = e[r];
            if (a === "\\") {
                if (r + 1 === e.length) throw new q(S.INVALID_ARGUMENT, "Path has trailing escape character: " + e);
                const c = e[r + 1];
                if (c !== "\\" && c !== "." && c !== "`") throw new q(S.INVALID_ARGUMENT, "Path has invalid escape sequence: " + e);
                s += c, r += 2
            } else a === "`" ? (o = !o, r++) : a !== "." || o ? (s += a, r++) : (i(), r++)
        }
        if (i(), o) throw new q(S.INVALID_ARGUMENT, "Unterminated ` in path: " + e);
        return new tt(n)
    }
    static emptyPath() {
        return new tt([])
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ya {
    constructor(e) {
        this.fields = e, e.sort(tt.comparator)
    }
    covers(e) {
        for (const n of this.fields)
            if (n.isPrefixOf(e)) return !0;
        return !1
    }
    isEqual(e) {
        return Wn(this.fields, e.fields, (n, s) => n.isEqual(s))
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class je {
    constructor(e) {
        this.binaryString = e
    }
    static fromBase64String(e) {
        const n = atob(e);
        return new je(n)
    }
    static fromUint8Array(e) {
        const n = function(s) {
            let r = "";
            for (let i = 0; i < s.length; ++i) r += String.fromCharCode(s[i]);
            return r
        }(e);
        return new je(n)
    }[Symbol.iterator]() {
        let e = 0;
        return {
            next: () => e < this.binaryString.length ? {
                value: this.binaryString.charCodeAt(e++),
                done: !1
            } : {
                value: void 0,
                done: !0
            }
        }
    }
    toBase64() {
        return e = this.binaryString, btoa(e);
        var e
    }
    toUint8Array() {
        return function(e) {
            const n = new Uint8Array(e.length);
            for (let s = 0; s < e.length; s++) n[s] = e.charCodeAt(s);
            return n
        }(this.binaryString)
    }
    approximateByteSize() {
        return 2 * this.binaryString.length
    }
    compareTo(e) {
        return le(this.binaryString, e.binaryString)
    }
    isEqual(e) {
        return this.binaryString === e.binaryString
    }
}
je.EMPTY_BYTE_STRING = new je("");
const Xv = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);

function Xt(t) {
    if (ye(!!t), typeof t == "string") {
        let e = 0;
        const n = Xv.exec(t);
        if (ye(!!n), n[1]) {
            let r = n[1];
            r = (r + "000000000").substr(0, 9), e = Number(r)
        }
        const s = new Date(t);
        return {
            seconds: Math.floor(s.getTime() / 1e3),
            nanos: e
        }
    }
    return {
        seconds: _e(t.seconds),
        nanos: _e(t.nanos)
    }
}

function _e(t) {
    return typeof t == "number" ? t : typeof t == "string" ? Number(t) : 0
}

function Yn(t) {
    return typeof t == "string" ? je.fromBase64String(t) : je.fromUint8Array(t)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Dd(t) {
    var e, n;
    return ((n = (((e = t == null ? void 0 : t.mapValue) === null || e === void 0 ? void 0 : e.fields) || {}).__type__) === null || n === void 0 ? void 0 : n.stringValue) === "server_timestamp"
}

function Pd(t) {
    const e = t.mapValue.fields.__previous_value__;
    return Dd(e) ? Pd(e) : e
}

function Js(t) {
    const e = Xt(t.mapValue.fields.__local_write_time__.timestampValue);
    return new ze(e.seconds, e.nanos)
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qv {
    constructor(e, n, s, r, i, o, a, c) {
        this.databaseId = e, this.appId = n, this.persistenceKey = s, this.host = r, this.ssl = i, this.forceLongPolling = o, this.autoDetectLongPolling = a, this.useFetchStreams = c
    }
}
class Xn {
    constructor(e, n) {
        this.projectId = e, this.database = n || "(default)"
    }
    static empty() {
        return new Xn("", "")
    }
    get isDefaultDatabase() {
        return this.database === "(default)"
    }
    isEqual(e) {
        return e instanceof Xn && e.projectId === this.projectId && e.database === this.database
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ps(t) {
    return t == null
}

function hi(t) {
    return t === 0 && 1 / t == -1 / 0
}

function Jv(t) {
    return typeof t == "number" && Number.isInteger(t) && !hi(t) && t <= Number.MAX_SAFE_INTEGER && t >= Number.MIN_SAFE_INTEGER
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class H {
    constructor(e) {
        this.path = e
    }
    static fromPath(e) {
        return new H(Ce.fromString(e))
    }
    static fromName(e) {
        return new H(Ce.fromString(e).popFirst(5))
    }
    static empty() {
        return new H(Ce.emptyPath())
    }
    get collectionGroup() {
        return this.path.popLast().lastSegment()
    }
    hasCollectionId(e) {
        return this.path.length >= 2 && this.path.get(this.path.length - 2) === e
    }
    getCollectionGroup() {
        return this.path.get(this.path.length - 2)
    }
    getCollectionPath() {
        return this.path.popLast()
    }
    isEqual(e) {
        return e !== null && Ce.comparator(this.path, e.path) === 0
    }
    toString() {
        return this.path.toString()
    }
    static comparator(e, n) {
        return Ce.comparator(e.path, n.path)
    }
    static isDocumentKey(e) {
        return e.length % 2 == 0
    }
    static fromSegments(e) {
        return new H(new Ce(e.slice()))
    }
}

function vn(t) {
    return "nullValue" in t ? 0 : "booleanValue" in t ? 1 : "integerValue" in t || "doubleValue" in t ? 2 : "timestampValue" in t ? 3 : "stringValue" in t ? 5 : "bytesValue" in t ? 6 : "referenceValue" in t ? 7 : "geoPointValue" in t ? 8 : "arrayValue" in t ? 9 : "mapValue" in t ? Dd(t) ? 4 : Zv(t) ? 9 : 10 : W()
}

function At(t, e) {
    if (t === e) return !0;
    const n = vn(t);
    if (n !== vn(e)) return !1;
    switch (n) {
        case 0:
        case 9007199254740991:
            return !0;
        case 1:
            return t.booleanValue === e.booleanValue;
        case 4:
            return Js(t).isEqual(Js(e));
        case 3:
            return function(s, r) {
                if (typeof s.timestampValue == "string" && typeof r.timestampValue == "string" && s.timestampValue.length === r.timestampValue.length) return s.timestampValue === r.timestampValue;
                const i = Xt(s.timestampValue),
                    o = Xt(r.timestampValue);
                return i.seconds === o.seconds && i.nanos === o.nanos
            }(t, e);
        case 5:
            return t.stringValue === e.stringValue;
        case 6:
            return function(s, r) {
                return Yn(s.bytesValue).isEqual(Yn(r.bytesValue))
            }(t, e);
        case 7:
            return t.referenceValue === e.referenceValue;
        case 8:
            return function(s, r) {
                return _e(s.geoPointValue.latitude) === _e(r.geoPointValue.latitude) && _e(s.geoPointValue.longitude) === _e(r.geoPointValue.longitude)
            }(t, e);
        case 2:
            return function(s, r) {
                if ("integerValue" in s && "integerValue" in r) return _e(s.integerValue) === _e(r.integerValue);
                if ("doubleValue" in s && "doubleValue" in r) {
                    const i = _e(s.doubleValue),
                        o = _e(r.doubleValue);
                    return i === o ? hi(i) === hi(o) : isNaN(i) && isNaN(o)
                }
                return !1
            }(t, e);
        case 9:
            return Wn(t.arrayValue.values || [], e.arrayValue.values || [], At);
        case 10:
            return function(s, r) {
                const i = s.mapValue.fields || {},
                    o = r.mapValue.fields || {};
                if (bu(i) !== bu(o)) return !1;
                for (const a in i)
                    if (i.hasOwnProperty(a) && (o[a] === void 0 || !At(i[a], o[a]))) return !1;
                return !0
            }(t, e);
        default:
            return W()
    }
}

function Zs(t, e) {
    return (t.values || []).find(n => At(n, e)) !== void 0
}

function Qn(t, e) {
    if (t === e) return 0;
    const n = vn(t),
        s = vn(e);
    if (n !== s) return le(n, s);
    switch (n) {
        case 0:
        case 9007199254740991:
            return 0;
        case 1:
            return le(t.booleanValue, e.booleanValue);
        case 2:
            return function(r, i) {
                const o = _e(r.integerValue || r.doubleValue),
                    a = _e(i.integerValue || i.doubleValue);
                return o < a ? -1 : o > a ? 1 : o === a ? 0 : isNaN(o) ? isNaN(a) ? 0 : -1 : 1
            }(t, e);
        case 3:
            return Cu(t.timestampValue, e.timestampValue);
        case 4:
            return Cu(Js(t), Js(e));
        case 5:
            return le(t.stringValue, e.stringValue);
        case 6:
            return function(r, i) {
                const o = Yn(r),
                    a = Yn(i);
                return o.compareTo(a)
            }(t.bytesValue, e.bytesValue);
        case 7:
            return function(r, i) {
                const o = r.split("/"),
                    a = i.split("/");
                for (let c = 0; c < o.length && c < a.length; c++) {
                    const l = le(o[c], a[c]);
                    if (l !== 0) return l
                }
                return le(o.length, a.length)
            }(t.referenceValue, e.referenceValue);
        case 8:
            return function(r, i) {
                const o = le(_e(r.latitude), _e(i.latitude));
                return o !== 0 ? o : le(_e(r.longitude), _e(i.longitude))
            }(t.geoPointValue, e.geoPointValue);
        case 9:
            return function(r, i) {
                const o = r.values || [],
                    a = i.values || [];
                for (let c = 0; c < o.length && c < a.length; ++c) {
                    const l = Qn(o[c], a[c]);
                    if (l) return l
                }
                return le(o.length, a.length)
            }(t.arrayValue, e.arrayValue);
        case 10:
            return function(r, i) {
                const o = r.fields || {},
                    a = Object.keys(o),
                    c = i.fields || {},
                    l = Object.keys(c);
                a.sort(), l.sort();
                for (let u = 0; u < a.length && u < l.length; ++u) {
                    const h = le(a[u], l[u]);
                    if (h !== 0) return h;
                    const f = Qn(o[a[u]], c[l[u]]);
                    if (f !== 0) return f
                }
                return le(a.length, l.length)
            }(t.mapValue, e.mapValue);
        default:
            throw W()
    }
}

function Cu(t, e) {
    if (typeof t == "string" && typeof e == "string" && t.length === e.length) return le(t, e);
    const n = Xt(t),
        s = Xt(e),
        r = le(n.seconds, s.seconds);
    return r !== 0 ? r : le(n.nanos, s.nanos)
}

function Vn(t) {
    return wa(t)
}

function wa(t) {
    return "nullValue" in t ? "null" : "booleanValue" in t ? "" + t.booleanValue : "integerValue" in t ? "" + t.integerValue : "doubleValue" in t ? "" + t.doubleValue : "timestampValue" in t ? function(s) {
        const r = Xt(s);
        return `time(${r.seconds},${r.nanos})`
    }(t.timestampValue) : "stringValue" in t ? t.stringValue : "bytesValue" in t ? Yn(t.bytesValue).toBase64() : "referenceValue" in t ? (n = t.referenceValue, H.fromName(n).toString()) : "geoPointValue" in t ? `geo(${(e=t.geoPointValue).latitude},${e.longitude})` : "arrayValue" in t ? function(s) {
        let r = "[",
            i = !0;
        for (const o of s.values || []) i ? i = !1 : r += ",", r += wa(o);
        return r + "]"
    }(t.arrayValue) : "mapValue" in t ? function(s) {
        const r = Object.keys(s.fields || {}).sort();
        let i = "{",
            o = !0;
        for (const a of r) o ? o = !1 : i += ",", i += `${a}:${wa(s.fields[a])}`;
        return i + "}"
    }(t.mapValue) : W();
    var e, n
}

function va(t) {
    return !!t && "integerValue" in t
}

function Pc(t) {
    return !!t && "arrayValue" in t
}

function Iu(t) {
    return !!t && "nullValue" in t
}

function Su(t) {
    return !!t && "doubleValue" in t && isNaN(Number(t.doubleValue))
}

function Vr(t) {
    return !!t && "mapValue" in t
}

function xs(t) {
    if (t.geoPointValue) return {
        geoPointValue: Object.assign({}, t.geoPointValue)
    };
    if (t.timestampValue && typeof t.timestampValue == "object") return {
        timestampValue: Object.assign({}, t.timestampValue)
    };
    if (t.mapValue) {
        const e = {
            mapValue: {
                fields: {}
            }
        };
        return gs(t.mapValue.fields, (n, s) => e.mapValue.fields[n] = xs(s)), e
    }
    if (t.arrayValue) {
        const e = {
            arrayValue: {
                values: []
            }
        };
        for (let n = 0; n < (t.arrayValue.values || []).length; ++n) e.arrayValue.values[n] = xs(t.arrayValue.values[n]);
        return e
    }
    return Object.assign({}, t)
}

function Zv(t) {
    return (((t.mapValue || {}).fields || {}).__type__ || {}).stringValue === "__max__"
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pt {
    constructor(e) {
        this.value = e
    }
    static empty() {
        return new pt({
            mapValue: {}
        })
    }
    field(e) {
        if (e.isEmpty()) return this.value; {
            let n = this.value;
            for (let s = 0; s < e.length - 1; ++s)
                if (n = (n.mapValue.fields || {})[e.get(s)], !Vr(n)) return null;
            return n = (n.mapValue.fields || {})[e.lastSegment()], n || null
        }
    }
    set(e, n) {
        this.getFieldsMap(e.popLast())[e.lastSegment()] = xs(n)
    }
    setAll(e) {
        let n = tt.emptyPath(),
            s = {},
            r = [];
        e.forEach((o, a) => {
            if (!n.isImmediateParentOf(a)) {
                const c = this.getFieldsMap(n);
                this.applyChanges(c, s, r), s = {}, r = [], n = a.popLast()
            }
            o ? s[a.lastSegment()] = xs(o) : r.push(a.lastSegment())
        });
        const i = this.getFieldsMap(n);
        this.applyChanges(i, s, r)
    }
    delete(e) {
        const n = this.field(e.popLast());
        Vr(n) && n.mapValue.fields && delete n.mapValue.fields[e.lastSegment()]
    }
    isEqual(e) {
        return At(this.value, e.value)
    }
    getFieldsMap(e) {
        let n = this.value;
        n.mapValue.fields || (n.mapValue = {
            fields: {}
        });
        for (let s = 0; s < e.length; ++s) {
            let r = n.mapValue.fields[e.get(s)];
            Vr(r) && r.mapValue.fields || (r = {
                mapValue: {
                    fields: {}
                }
            }, n.mapValue.fields[e.get(s)] = r), n = r
        }
        return n.mapValue.fields
    }
    applyChanges(e, n, s) {
        gs(n, (r, i) => e[r] = i);
        for (const r of s) delete e[r]
    }
    clone() {
        return new pt(xs(this.value))
    }
}

function Md(t) {
    const e = [];
    return gs(t.fields, (n, s) => {
        const r = new tt([n]);
        if (Vr(s)) {
            const i = Md(s.mapValue).fields;
            if (i.length === 0) e.push(r);
            else
                for (const o of i) e.push(r.child(o))
        } else e.push(r)
    }), new ya(e)
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ke {
    constructor(e, n, s, r, i, o) {
        this.key = e, this.documentType = n, this.version = s, this.readTime = r, this.data = i, this.documentState = o
    }
    static newInvalidDocument(e) {
        return new Ke(e, 0, ee.min(), ee.min(), pt.empty(), 0)
    }
    static newFoundDocument(e, n, s) {
        return new Ke(e, 1, n, ee.min(), s, 0)
    }
    static newNoDocument(e, n) {
        return new Ke(e, 2, n, ee.min(), pt.empty(), 0)
    }
    static newUnknownDocument(e, n) {
        return new Ke(e, 3, n, ee.min(), pt.empty(), 2)
    }
    convertToFoundDocument(e, n) {
        return this.version = e, this.documentType = 1, this.data = n, this.documentState = 0, this
    }
    convertToNoDocument(e) {
        return this.version = e, this.documentType = 2, this.data = pt.empty(), this.documentState = 0, this
    }
    convertToUnknownDocument(e) {
        return this.version = e, this.documentType = 3, this.data = pt.empty(), this.documentState = 2, this
    }
    setHasCommittedMutations() {
        return this.documentState = 2, this
    }
    setHasLocalMutations() {
        return this.documentState = 1, this
    }
    setReadTime(e) {
        return this.readTime = e, this
    }
    get hasLocalMutations() {
        return this.documentState === 1
    }
    get hasCommittedMutations() {
        return this.documentState === 2
    }
    get hasPendingWrites() {
        return this.hasLocalMutations || this.hasCommittedMutations
    }
    isValidDocument() {
        return this.documentType !== 0
    }
    isFoundDocument() {
        return this.documentType === 1
    }
    isNoDocument() {
        return this.documentType === 2
    }
    isUnknownDocument() {
        return this.documentType === 3
    }
    isEqual(e) {
        return e instanceof Ke && this.key.isEqual(e.key) && this.version.isEqual(e.version) && this.documentType === e.documentType && this.documentState === e.documentState && this.data.isEqual(e.data)
    }
    mutableCopy() {
        return new Ke(this.key, this.documentType, this.version, this.readTime, this.data.clone(), this.documentState)
    }
    toString() {
        return `Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`
    }
}

function eE(t, e) {
    const n = t.toTimestamp().seconds,
        s = t.toTimestamp().nanoseconds + 1,
        r = ee.fromTimestamp(s === 1e9 ? new ze(n + 1, 0) : new ze(n, s));
    return new Jn(r, H.empty(), e)
}

function tE(t) {
    return new Jn(t.readTime, t.key, -1)
}
class Jn {
    constructor(e, n, s) {
        this.readTime = e, this.documentKey = n, this.largestBatchId = s
    }
    static min() {
        return new Jn(ee.min(), H.empty(), -1)
    }
    static max() {
        return new Jn(ee.max(), H.empty(), -1)
    }
}

function nE(t, e) {
    let n = t.readTime.compareTo(e.readTime);
    return n !== 0 ? n : (n = H.comparator(t.documentKey, e.documentKey), n !== 0 ? n : le(t.largestBatchId, e.largestBatchId))
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sE {
    constructor(e, n = null, s = [], r = [], i = null, o = null, a = null) {
        this.path = e, this.collectionGroup = n, this.orderBy = s, this.filters = r, this.limit = i, this.startAt = o, this.endAt = a, this.P = null
    }
}

function _u(t, e = null, n = [], s = [], r = null, i = null, o = null) {
    return new sE(t, e, n, s, r, i, o)
}

function Mc(t) {
    const e = Q(t);
    if (e.P === null) {
        let n = e.path.canonicalString();
        e.collectionGroup !== null && (n += "|cg:" + e.collectionGroup), n += "|f:", n += e.filters.map(s => {
            return (r = s).field.canonicalString() + r.op.toString() + Vn(r.value);
            var r
        }).join(","), n += "|ob:", n += e.orderBy.map(s => function(r) {
            return r.field.canonicalString() + r.dir
        }(s)).join(","), ps(e.limit) || (n += "|l:", n += e.limit), e.startAt && (n += "|lb:", n += e.startAt.inclusive ? "b:" : "a:", n += e.startAt.position.map(s => Vn(s)).join(",")), e.endAt && (n += "|ub:", n += e.endAt.inclusive ? "a:" : "b:", n += e.endAt.position.map(s => Vn(s)).join(",")), e.P = n
    }
    return e.P
}

function rE(t) {
    let e = t.path.canonicalString();
    return t.collectionGroup !== null && (e += " collectionGroup=" + t.collectionGroup), t.filters.length > 0 && (e += `, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${Vn(s.value)}`;var s}).join(", ")}]`), ps(t.limit) || (e += ", limit: " + t.limit), t.orderBy.length > 0 && (e += `, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`), t.startAt && (e += ", startAt: ", e += t.startAt.inclusive ? "b:" : "a:", e += t.startAt.position.map(n => Vn(n)).join(",")), t.endAt && (e += ", endAt: ", e += t.endAt.inclusive ? "a:" : "b:", e += t.endAt.position.map(n => Vn(n)).join(",")), `Target(${e})`
}

function kc(t, e) {
    if (t.limit !== e.limit || t.orderBy.length !== e.orderBy.length) return !1;
    for (let r = 0; r < t.orderBy.length; r++)
        if (!fE(t.orderBy[r], e.orderBy[r])) return !1;
    if (t.filters.length !== e.filters.length) return !1;
    for (let r = 0; r < t.filters.length; r++)
        if (n = t.filters[r], s = e.filters[r], n.op !== s.op || !n.field.isEqual(s.field) || !At(n.value, s.value)) return !1;
    var n, s;
    return t.collectionGroup === e.collectionGroup && !!t.path.isEqual(e.path) && !!Nu(t.startAt, e.startAt) && Nu(t.endAt, e.endAt)
}

function Ea(t) {
    return H.isDocumentKey(t.path) && t.collectionGroup === null && t.filters.length === 0
}
class nt extends class {} {
    constructor(e, n, s) {
        super(), this.field = e, this.op = n, this.value = s
    }
    static create(e, n, s) {
        return e.isKeyField() ? n === "in" || n === "not-in" ? this.V(e, n, s) : new iE(e, n, s) : n === "array-contains" ? new cE(e, s) : n === "in" ? new lE(e, s) : n === "not-in" ? new uE(e, s) : n === "array-contains-any" ? new hE(e, s) : new nt(e, n, s)
    }
    static V(e, n, s) {
        return n === "in" ? new oE(e, s) : new aE(e, s)
    }
    matches(e) {
        const n = e.data.field(this.field);
        return this.op === "!=" ? n !== null && this.v(Qn(n, this.value)) : n !== null && vn(this.value) === vn(n) && this.v(Qn(n, this.value))
    }
    v(e) {
        switch (this.op) {
            case "<":
                return e < 0;
            case "<=":
                return e <= 0;
            case "==":
                return e === 0;
            case "!=":
                return e !== 0;
            case ">":
                return e > 0;
            case ">=":
                return e >= 0;
            default:
                return W()
        }
    }
    S() {
        return ["<", "<=", ">", ">=", "!=", "not-in"].indexOf(this.op) >= 0
    }
}
class iE extends nt {
    constructor(e, n, s) {
        super(e, n, s), this.key = H.fromName(s.referenceValue)
    }
    matches(e) {
        const n = H.comparator(e.key, this.key);
        return this.v(n)
    }
}
class oE extends nt {
    constructor(e, n) {
        super(e, "in", n), this.keys = kd("in", n)
    }
    matches(e) {
        return this.keys.some(n => n.isEqual(e.key))
    }
}
class aE extends nt {
    constructor(e, n) {
        super(e, "not-in", n), this.keys = kd("not-in", n)
    }
    matches(e) {
        return !this.keys.some(n => n.isEqual(e.key))
    }
}

function kd(t, e) {
    var n;
    return (((n = e.arrayValue) === null || n === void 0 ? void 0 : n.values) || []).map(s => H.fromName(s.referenceValue))
}
class cE extends nt {
    constructor(e, n) {
        super(e, "array-contains", n)
    }
    matches(e) {
        const n = e.data.field(this.field);
        return Pc(n) && Zs(n.arrayValue, this.value)
    }
}
class lE extends nt {
    constructor(e, n) {
        super(e, "in", n)
    }
    matches(e) {
        const n = e.data.field(this.field);
        return n !== null && Zs(this.value.arrayValue, n)
    }
}
class uE extends nt {
    constructor(e, n) {
        super(e, "not-in", n)
    }
    matches(e) {
        if (Zs(this.value.arrayValue, {
                nullValue: "NULL_VALUE"
            })) return !1;
        const n = e.data.field(this.field);
        return n !== null && !Zs(this.value.arrayValue, n)
    }
}
class hE extends nt {
    constructor(e, n) {
        super(e, "array-contains-any", n)
    }
    matches(e) {
        const n = e.data.field(this.field);
        return !(!Pc(n) || !n.arrayValue.values) && n.arrayValue.values.some(s => Zs(this.value.arrayValue, s))
    }
}
class fi {
    constructor(e, n) {
        this.position = e, this.inclusive = n
    }
}
class Ls {
    constructor(e, n = "asc") {
        this.field = e, this.dir = n
    }
}

function fE(t, e) {
    return t.dir === e.dir && t.field.isEqual(e.field)
}

function Au(t, e, n) {
    let s = 0;
    for (let r = 0; r < t.position.length; r++) {
        const i = e[r],
            o = t.position[r];
        if (i.field.isKeyField() ? s = H.comparator(H.fromName(o.referenceValue), n.key) : s = Qn(o, n.data.field(i.field)), i.dir === "desc" && (s *= -1), s !== 0) break
    }
    return s
}

function Nu(t, e) {
    if (t === null) return e === null;
    if (e === null || t.inclusive !== e.inclusive || t.position.length !== e.position.length) return !1;
    for (let n = 0; n < t.position.length; n++)
        if (!At(t.position[n], e.position[n])) return !1;
    return !0
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wi {
    constructor(e, n = null, s = [], r = [], i = null, o = "F", a = null, c = null) {
        this.path = e, this.collectionGroup = n, this.explicitOrderBy = s, this.filters = r, this.limit = i, this.limitType = o, this.startAt = a, this.endAt = c, this.D = null, this.C = null, this.startAt, this.endAt
    }
}

function dE(t, e, n, s, r, i, o, a) {
    return new Wi(t, e, n, s, r, i, o, a)
}

function xd(t) {
    return new Wi(t)
}

function $r(t) {
    return !ps(t.limit) && t.limitType === "F"
}

function di(t) {
    return !ps(t.limit) && t.limitType === "L"
}

function gE(t) {
    return t.explicitOrderBy.length > 0 ? t.explicitOrderBy[0].field : null
}

function pE(t) {
    for (const e of t.filters)
        if (e.S()) return e.field;
    return null
}

function mE(t) {
    return t.collectionGroup !== null
}

function er(t) {
    const e = Q(t);
    if (e.D === null) {
        e.D = [];
        const n = pE(e),
            s = gE(e);
        if (n !== null && s === null) n.isKeyField() || e.D.push(new Ls(n)), e.D.push(new Ls(tt.keyField(), "asc"));
        else {
            let r = !1;
            for (const i of e.explicitOrderBy) e.D.push(i), i.field.isKeyField() && (r = !0);
            if (!r) {
                const i = e.explicitOrderBy.length > 0 ? e.explicitOrderBy[e.explicitOrderBy.length - 1].dir : "asc";
                e.D.push(new Ls(tt.keyField(), i))
            }
        }
    }
    return e.D
}

function En(t) {
    const e = Q(t);
    if (!e.C)
        if (e.limitType === "F") e.C = _u(e.path, e.collectionGroup, er(e), e.filters, e.limit, e.startAt, e.endAt);
        else {
            const n = [];
            for (const i of er(e)) {
                const o = i.dir === "desc" ? "asc" : "desc";
                n.push(new Ls(i.field, o))
            }
            const s = e.endAt ? new fi(e.endAt.position, !e.endAt.inclusive) : null,
                r = e.startAt ? new fi(e.startAt.position, !e.startAt.inclusive) : null;
            e.C = _u(e.path, e.collectionGroup, n, e.filters, e.limit, s, r)
        }
    return e.C
}

function yE(t, e, n) {
    return new Wi(t.path, t.collectionGroup, t.explicitOrderBy.slice(), t.filters.slice(), e, n, t.startAt, t.endAt)
}

function Yi(t, e) {
    return kc(En(t), En(e)) && t.limitType === e.limitType
}

function Ld(t) {
    return `${Mc(En(t))}|lt:${t.limitType}`
}

function Ta(t) {
    return `Query(target=${rE(En(t))}; limitType=${t.limitType})`
}

function xc(t, e) {
    return e.isFoundDocument() && function(n, s) {
        const r = s.key.path;
        return n.collectionGroup !== null ? s.key.hasCollectionId(n.collectionGroup) && n.path.isPrefixOf(r) : H.isDocumentKey(n.path) ? n.path.isEqual(r) : n.path.isImmediateParentOf(r)
    }(t, e) && function(n, s) {
        for (const r of n.explicitOrderBy)
            if (!r.field.isKeyField() && s.data.field(r.field) === null) return !1;
        return !0
    }(t, e) && function(n, s) {
        for (const r of n.filters)
            if (!r.matches(s)) return !1;
        return !0
    }(t, e) && function(n, s) {
        return !(n.startAt && ! function(r, i, o) {
            const a = Au(r, i, o);
            return r.inclusive ? a <= 0 : a < 0
        }(n.startAt, er(n), s) || n.endAt && ! function(r, i, o) {
            const a = Au(r, i, o);
            return r.inclusive ? a >= 0 : a > 0
        }(n.endAt, er(n), s))
    }(t, e)
}

function wE(t) {
    return t.collectionGroup || (t.path.length % 2 == 1 ? t.path.lastSegment() : t.path.get(t.path.length - 2))
}

function Od(t) {
    return (e, n) => {
        let s = !1;
        for (const r of er(t)) {
            const i = vE(r, e, n);
            if (i !== 0) return i;
            s = s || r.field.isKeyField()
        }
        return 0
    }
}

function vE(t, e, n) {
    const s = t.field.isKeyField() ? H.comparator(e.key, n.key) : function(r, i, o) {
        const a = i.data.field(r),
            c = o.data.field(r);
        return a !== null && c !== null ? Qn(a, c) : W()
    }(t.field, e, n);
    switch (t.dir) {
        case "asc":
            return s;
        case "desc":
            return -1 * s;
        default:
            return W()
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Fd(t, e) {
    if (t.N) {
        if (isNaN(e)) return {
            doubleValue: "NaN"
        };
        if (e === 1 / 0) return {
            doubleValue: "Infinity"
        };
        if (e === -1 / 0) return {
            doubleValue: "-Infinity"
        }
    }
    return {
        doubleValue: hi(e) ? "-0" : e
    }
}

function Bd(t) {
    return {
        integerValue: "" + t
    }
}

function EE(t, e) {
    return Jv(e) ? Bd(e) : Fd(t, e)
}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xi {
    constructor() {
        this._ = void 0
    }
}

function TE(t, e, n) {
    return t instanceof gi ? function(s, r) {
        const i = {
            fields: {
                __type__: {
                    stringValue: "server_timestamp"
                },
                __local_write_time__: {
                    timestampValue: {
                        seconds: s.seconds,
                        nanos: s.nanoseconds
                    }
                }
            }
        };
        return r && (i.fields.__previous_value__ = r), {
            mapValue: i
        }
    }(n, e) : t instanceof tr ? Vd(t, e) : t instanceof nr ? $d(t, e) : function(s, r) {
        const i = Ud(s, r),
            o = Ru(i) + Ru(s.k);
        return va(i) && va(s.k) ? Bd(o) : Fd(s.M, o)
    }(t, e)
}

function bE(t, e, n) {
    return t instanceof tr ? Vd(t, e) : t instanceof nr ? $d(t, e) : n
}

function Ud(t, e) {
    return t instanceof pi ? va(n = e) || function(s) {
        return !!s && "doubleValue" in s
    }(n) ? e : {
        integerValue: 0
    } : null;
    var n
}
class gi extends Xi {}
class tr extends Xi {
    constructor(e) {
        super(), this.elements = e
    }
}

function Vd(t, e) {
    const n = jd(e);
    for (const s of t.elements) n.some(r => At(r, s)) || n.push(s);
    return {
        arrayValue: {
            values: n
        }
    }
}
class nr extends Xi {
    constructor(e) {
        super(), this.elements = e
    }
}

function $d(t, e) {
    let n = jd(e);
    for (const s of t.elements) n = n.filter(r => !At(r, s));
    return {
        arrayValue: {
            values: n
        }
    }
}
class pi extends Xi {
    constructor(e, n) {
        super(), this.M = e, this.k = n
    }
}

function Ru(t) {
    return _e(t.integerValue || t.doubleValue)
}

function jd(t) {
    return Pc(t) && t.arrayValue.values ? t.arrayValue.values.slice() : []
}

function CE(t, e) {
    return t.field.isEqual(e.field) && function(n, s) {
        return n instanceof tr && s instanceof tr || n instanceof nr && s instanceof nr ? Wn(n.elements, s.elements, At) : n instanceof pi && s instanceof pi ? At(n.k, s.k) : n instanceof gi && s instanceof gi
    }(t.transform, e.transform)
}
class IE {
    constructor(e, n) {
        this.version = e, this.transformResults = n
    }
}
class $n {
    constructor(e, n) {
        this.updateTime = e, this.exists = n
    }
    static none() {
        return new $n
    }
    static exists(e) {
        return new $n(void 0, e)
    }
    static updateTime(e) {
        return new $n(e)
    }
    get isNone() {
        return this.updateTime === void 0 && this.exists === void 0
    }
    isEqual(e) {
        return this.exists === e.exists && (this.updateTime ? !!e.updateTime && this.updateTime.isEqual(e.updateTime) : !e.updateTime)
    }
}

function jr(t, e) {
    return t.updateTime !== void 0 ? e.isFoundDocument() && e.version.isEqual(t.updateTime) : t.exists === void 0 || t.exists === e.isFoundDocument()
}
class Qi {}

function SE(t, e, n) {
    t instanceof Ji ? function(s, r, i) {
        const o = s.value.clone(),
            a = Mu(s.fieldTransforms, r, i.transformResults);
        o.setAll(a), r.convertToFoundDocument(i.version, o).setHasCommittedMutations()
    }(t, e, n) : t instanceof gr ? function(s, r, i) {
        if (!jr(s.precondition, r)) return void r.convertToUnknownDocument(i.version);
        const o = Mu(s.fieldTransforms, r, i.transformResults),
            a = r.data;
        a.setAll(Hd(s)), a.setAll(o), r.convertToFoundDocument(i.version, a).setHasCommittedMutations()
    }(t, e, n) : function(s, r, i) {
        r.convertToNoDocument(i.version).setHasCommittedMutations()
    }(0, e, n)
}

function ba(t, e, n) {
    t instanceof Ji ? function(s, r, i) {
        if (!jr(s.precondition, r)) return;
        const o = s.value.clone(),
            a = ku(s.fieldTransforms, i, r);
        o.setAll(a), r.convertToFoundDocument(Pu(r), o).setHasLocalMutations()
    }(t, e, n) : t instanceof gr ? function(s, r, i) {
        if (!jr(s.precondition, r)) return;
        const o = ku(s.fieldTransforms, i, r),
            a = r.data;
        a.setAll(Hd(s)), a.setAll(o), r.convertToFoundDocument(Pu(r), a).setHasLocalMutations()
    }(t, e, n) : function(s, r) {
        jr(s.precondition, r) && r.convertToNoDocument(ee.min())
    }(t, e)
}

function _E(t, e) {
    let n = null;
    for (const s of t.fieldTransforms) {
        const r = e.data.field(s.field),
            i = Ud(s.transform, r || null);
        i != null && (n == null && (n = pt.empty()), n.set(s.field, i))
    }
    return n || null
}

function Du(t, e) {
    return t.type === e.type && !!t.key.isEqual(e.key) && !!t.precondition.isEqual(e.precondition) && !! function(n, s) {
        return n === void 0 && s === void 0 || !(!n || !s) && Wn(n, s, (r, i) => CE(r, i))
    }(t.fieldTransforms, e.fieldTransforms) && (t.type === 0 ? t.value.isEqual(e.value) : t.type !== 1 || t.data.isEqual(e.data) && t.fieldMask.isEqual(e.fieldMask))
}

function Pu(t) {
    return t.isFoundDocument() ? t.version : ee.min()
}
class Ji extends Qi {
    constructor(e, n, s, r = []) {
        super(), this.key = e, this.value = n, this.precondition = s, this.fieldTransforms = r, this.type = 0
    }
}
class gr extends Qi {
    constructor(e, n, s, r, i = []) {
        super(), this.key = e, this.data = n, this.fieldMask = s, this.precondition = r, this.fieldTransforms = i, this.type = 1
    }
}

function Hd(t) {
    const e = new Map;
    return t.fieldMask.fields.forEach(n => {
        if (!n.isEmpty()) {
            const s = t.data.field(n);
            e.set(n, s)
        }
    }), e
}

function Mu(t, e, n) {
    const s = new Map;
    ye(t.length === n.length);
    for (let r = 0; r < n.length; r++) {
        const i = t[r],
            o = i.transform,
            a = e.data.field(i.field);
        s.set(i.field, bE(o, a, n[r]))
    }
    return s
}

function ku(t, e, n) {
    const s = new Map;
    for (const r of t) {
        const i = r.transform,
            o = n.data.field(r.field);
        s.set(r.field, TE(i, o, e))
    }
    return s
}
class AE extends Qi {
    constructor(e, n) {
        super(), this.key = e, this.precondition = n, this.type = 2, this.fieldTransforms = []
    }
}
class NE extends Qi {
    constructor(e, n) {
        super(), this.key = e, this.precondition = n, this.type = 3, this.fieldTransforms = []
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class RE {
    constructor(e) {
        this.count = e
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Se, ne;

function DE(t) {
    switch (t) {
        default: return W();
        case S.CANCELLED:
                case S.UNKNOWN:
                case S.DEADLINE_EXCEEDED:
                case S.RESOURCE_EXHAUSTED:
                case S.INTERNAL:
                case S.UNAVAILABLE:
                case S.UNAUTHENTICATED:
                return !1;
        case S.INVALID_ARGUMENT:
                case S.NOT_FOUND:
                case S.ALREADY_EXISTS:
                case S.PERMISSION_DENIED:
                case S.FAILED_PRECONDITION:
                case S.ABORTED:
                case S.OUT_OF_RANGE:
                case S.UNIMPLEMENTED:
                case S.DATA_LOSS:
                return !0
    }
}

function Kd(t) {
    if (t === void 0) return Yt("GRPC error has no .code"), S.UNKNOWN;
    switch (t) {
        case Se.OK:
            return S.OK;
        case Se.CANCELLED:
            return S.CANCELLED;
        case Se.UNKNOWN:
            return S.UNKNOWN;
        case Se.DEADLINE_EXCEEDED:
            return S.DEADLINE_EXCEEDED;
        case Se.RESOURCE_EXHAUSTED:
            return S.RESOURCE_EXHAUSTED;
        case Se.INTERNAL:
            return S.INTERNAL;
        case Se.UNAVAILABLE:
            return S.UNAVAILABLE;
        case Se.UNAUTHENTICATED:
            return S.UNAUTHENTICATED;
        case Se.INVALID_ARGUMENT:
            return S.INVALID_ARGUMENT;
        case Se.NOT_FOUND:
            return S.NOT_FOUND;
        case Se.ALREADY_EXISTS:
            return S.ALREADY_EXISTS;
        case Se.PERMISSION_DENIED:
            return S.PERMISSION_DENIED;
        case Se.FAILED_PRECONDITION:
            return S.FAILED_PRECONDITION;
        case Se.ABORTED:
            return S.ABORTED;
        case Se.OUT_OF_RANGE:
            return S.OUT_OF_RANGE;
        case Se.UNIMPLEMENTED:
            return S.UNIMPLEMENTED;
        case Se.DATA_LOSS:
            return S.DATA_LOSS;
        default:
            return W()
    }
}(ne = Se || (Se = {}))[ne.OK = 0] = "OK", ne[ne.CANCELLED = 1] = "CANCELLED", ne[ne.UNKNOWN = 2] = "UNKNOWN", ne[ne.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", ne[ne.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", ne[ne.NOT_FOUND = 5] = "NOT_FOUND", ne[ne.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", ne[ne.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", ne[ne.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", ne[ne.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", ne[ne.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", ne[ne.ABORTED = 10] = "ABORTED", ne[ne.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", ne[ne.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", ne[ne.INTERNAL = 13] = "INTERNAL", ne[ne.UNAVAILABLE = 14] = "UNAVAILABLE", ne[ne.DATA_LOSS = 15] = "DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ms {
    constructor(e, n) {
        this.mapKeyFn = e, this.equalsFn = n, this.inner = {}, this.innerSize = 0
    }
    get(e) {
        const n = this.mapKeyFn(e),
            s = this.inner[n];
        if (s !== void 0) {
            for (const [r, i] of s)
                if (this.equalsFn(r, e)) return i
        }
    }
    has(e) {
        return this.get(e) !== void 0
    }
    set(e, n) {
        const s = this.mapKeyFn(e),
            r = this.inner[s];
        if (r === void 0) return this.inner[s] = [
            [e, n]
        ], void this.innerSize++;
        for (let i = 0; i < r.length; i++)
            if (this.equalsFn(r[i][0], e)) return void(r[i] = [e, n]);
        r.push([e, n]), this.innerSize++
    }
    delete(e) {
        const n = this.mapKeyFn(e),
            s = this.inner[n];
        if (s === void 0) return !1;
        for (let r = 0; r < s.length; r++)
            if (this.equalsFn(s[r][0], e)) return s.length === 1 ? delete this.inner[n] : s.splice(r, 1), this.innerSize--, !0;
        return !1
    }
    forEach(e) {
        gs(this.inner, (n, s) => {
            for (const [r, i] of s) e(r, i)
        })
    }
    isEmpty() {
        return Rd(this.inner)
    }
    size() {
        return this.innerSize
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Oe {
    constructor(e, n) {
        this.comparator = e, this.root = n || Fe.EMPTY
    }
    insert(e, n) {
        return new Oe(this.comparator, this.root.insert(e, n, this.comparator).copy(null, null, Fe.BLACK, null, null))
    }
    remove(e) {
        return new Oe(this.comparator, this.root.remove(e, this.comparator).copy(null, null, Fe.BLACK, null, null))
    }
    get(e) {
        let n = this.root;
        for (; !n.isEmpty();) {
            const s = this.comparator(e, n.key);
            if (s === 0) return n.value;
            s < 0 ? n = n.left : s > 0 && (n = n.right)
        }
        return null
    }
    indexOf(e) {
        let n = 0,
            s = this.root;
        for (; !s.isEmpty();) {
            const r = this.comparator(e, s.key);
            if (r === 0) return n + s.left.size;
            r < 0 ? s = s.left : (n += s.left.size + 1, s = s.right)
        }
        return -1
    }
    isEmpty() {
        return this.root.isEmpty()
    }
    get size() {
        return this.root.size
    }
    minKey() {
        return this.root.minKey()
    }
    maxKey() {
        return this.root.maxKey()
    }
    inorderTraversal(e) {
        return this.root.inorderTraversal(e)
    }
    forEach(e) {
        this.inorderTraversal((n, s) => (e(n, s), !1))
    }
    toString() {
        const e = [];
        return this.inorderTraversal((n, s) => (e.push(`${n}:${s}`), !1)), `{${e.join(", ")}}`
    }
    reverseTraversal(e) {
        return this.root.reverseTraversal(e)
    }
    getIterator() {
        return new Dr(this.root, null, this.comparator, !1)
    }
    getIteratorFrom(e) {
        return new Dr(this.root, e, this.comparator, !1)
    }
    getReverseIterator() {
        return new Dr(this.root, null, this.comparator, !0)
    }
    getReverseIteratorFrom(e) {
        return new Dr(this.root, e, this.comparator, !0)
    }
}
class Dr {
    constructor(e, n, s, r) {
        this.isReverse = r, this.nodeStack = [];
        let i = 1;
        for (; !e.isEmpty();)
            if (i = n ? s(e.key, n) : 1, n && r && (i *= -1), i < 0) e = this.isReverse ? e.left : e.right;
            else {
                if (i === 0) {
                    this.nodeStack.push(e);
                    break
                }
                this.nodeStack.push(e), e = this.isReverse ? e.right : e.left
            }
    }
    getNext() {
        let e = this.nodeStack.pop();
        const n = {
            key: e.key,
            value: e.value
        };
        if (this.isReverse)
            for (e = e.left; !e.isEmpty();) this.nodeStack.push(e), e = e.right;
        else
            for (e = e.right; !e.isEmpty();) this.nodeStack.push(e), e = e.left;
        return n
    }
    hasNext() {
        return this.nodeStack.length > 0
    }
    peek() {
        if (this.nodeStack.length === 0) return null;
        const e = this.nodeStack[this.nodeStack.length - 1];
        return {
            key: e.key,
            value: e.value
        }
    }
}
class Fe {
    constructor(e, n, s, r, i) {
        this.key = e, this.value = n, this.color = s != null ? s : Fe.RED, this.left = r != null ? r : Fe.EMPTY, this.right = i != null ? i : Fe.EMPTY, this.size = this.left.size + 1 + this.right.size
    }
    copy(e, n, s, r, i) {
        return new Fe(e != null ? e : this.key, n != null ? n : this.value, s != null ? s : this.color, r != null ? r : this.left, i != null ? i : this.right)
    }
    isEmpty() {
        return !1
    }
    inorderTraversal(e) {
        return this.left.inorderTraversal(e) || e(this.key, this.value) || this.right.inorderTraversal(e)
    }
    reverseTraversal(e) {
        return this.right.reverseTraversal(e) || e(this.key, this.value) || this.left.reverseTraversal(e)
    }
    min() {
        return this.left.isEmpty() ? this : this.left.min()
    }
    minKey() {
        return this.min().key
    }
    maxKey() {
        return this.right.isEmpty() ? this.key : this.right.maxKey()
    }
    insert(e, n, s) {
        let r = this;
        const i = s(e, r.key);
        return r = i < 0 ? r.copy(null, null, null, r.left.insert(e, n, s), null) : i === 0 ? r.copy(null, n, null, null, null) : r.copy(null, null, null, null, r.right.insert(e, n, s)), r.fixUp()
    }
    removeMin() {
        if (this.left.isEmpty()) return Fe.EMPTY;
        let e = this;
        return e.left.isRed() || e.left.left.isRed() || (e = e.moveRedLeft()), e = e.copy(null, null, null, e.left.removeMin(), null), e.fixUp()
    }
    remove(e, n) {
        let s, r = this;
        if (n(e, r.key) < 0) r.left.isEmpty() || r.left.isRed() || r.left.left.isRed() || (r = r.moveRedLeft()), r = r.copy(null, null, null, r.left.remove(e, n), null);
        else {
            if (r.left.isRed() && (r = r.rotateRight()), r.right.isEmpty() || r.right.isRed() || r.right.left.isRed() || (r = r.moveRedRight()), n(e, r.key) === 0) {
                if (r.right.isEmpty()) return Fe.EMPTY;
                s = r.right.min(), r = r.copy(s.key, s.value, null, null, r.right.removeMin())
            }
            r = r.copy(null, null, null, null, r.right.remove(e, n))
        }
        return r.fixUp()
    }
    isRed() {
        return this.color
    }
    fixUp() {
        let e = this;
        return e.right.isRed() && !e.left.isRed() && (e = e.rotateLeft()), e.left.isRed() && e.left.left.isRed() && (e = e.rotateRight()), e.left.isRed() && e.right.isRed() && (e = e.colorFlip()), e
    }
    moveRedLeft() {
        let e = this.colorFlip();
        return e.right.left.isRed() && (e = e.copy(null, null, null, null, e.right.rotateRight()), e = e.rotateLeft(), e = e.colorFlip()), e
    }
    moveRedRight() {
        let e = this.colorFlip();
        return e.left.left.isRed() && (e = e.rotateRight(), e = e.colorFlip()), e
    }
    rotateLeft() {
        const e = this.copy(null, null, Fe.RED, null, this.right.left);
        return this.right.copy(null, null, this.color, e, null)
    }
    rotateRight() {
        const e = this.copy(null, null, Fe.RED, this.left.right, null);
        return this.left.copy(null, null, this.color, null, e)
    }
    colorFlip() {
        const e = this.left.copy(null, null, !this.left.color, null, null),
            n = this.right.copy(null, null, !this.right.color, null, null);
        return this.copy(null, null, !this.color, e, n)
    }
    checkMaxDepth() {
        const e = this.check();
        return Math.pow(2, e) <= this.size + 1
    }
    check() {
        if (this.isRed() && this.left.isRed() || this.right.isRed()) throw W();
        const e = this.left.check();
        if (e !== this.right.check()) throw W();
        return e + (this.isRed() ? 0 : 1)
    }
}
Fe.EMPTY = null, Fe.RED = !0, Fe.BLACK = !1;
Fe.EMPTY = new class {
    constructor() {
        this.size = 0
    }
    get key() {
        throw W()
    }
    get value() {
        throw W()
    }
    get color() {
        throw W()
    }
    get left() {
        throw W()
    }
    get right() {
        throw W()
    }
    copy(t, e, n, s, r) {
        return this
    }
    insert(t, e, n) {
        return new Fe(t, e)
    }
    remove(t, e) {
        return this
    }
    isEmpty() {
        return !0
    }
    inorderTraversal(t) {
        return !1
    }
    reverseTraversal(t) {
        return !1
    }
    minKey() {
        return null
    }
    maxKey() {
        return null
    }
    isRed() {
        return !1
    }
    checkMaxDepth() {
        return !0
    }
    check() {
        return 0
    }
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $e {
    constructor(e) {
        this.comparator = e, this.data = new Oe(this.comparator)
    }
    has(e) {
        return this.data.get(e) !== null
    }
    first() {
        return this.data.minKey()
    }
    last() {
        return this.data.maxKey()
    }
    get size() {
        return this.data.size
    }
    indexOf(e) {
        return this.data.indexOf(e)
    }
    forEach(e) {
        this.data.inorderTraversal((n, s) => (e(n), !1))
    }
    forEachInRange(e, n) {
        const s = this.data.getIteratorFrom(e[0]);
        for (; s.hasNext();) {
            const r = s.getNext();
            if (this.comparator(r.key, e[1]) >= 0) return;
            n(r.key)
        }
    }
    forEachWhile(e, n) {
        let s;
        for (s = n !== void 0 ? this.data.getIteratorFrom(n) : this.data.getIterator(); s.hasNext();)
            if (!e(s.getNext().key)) return
    }
    firstAfterOrEqual(e) {
        const n = this.data.getIteratorFrom(e);
        return n.hasNext() ? n.getNext().key : null
    }
    getIterator() {
        return new xu(this.data.getIterator())
    }
    getIteratorFrom(e) {
        return new xu(this.data.getIteratorFrom(e))
    }
    add(e) {
        return this.copy(this.data.remove(e).insert(e, !0))
    }
    delete(e) {
        return this.has(e) ? this.copy(this.data.remove(e)) : this
    }
    isEmpty() {
        return this.data.isEmpty()
    }
    unionWith(e) {
        let n = this;
        return n.size < e.size && (n = e, e = this), e.forEach(s => {
            n = n.add(s)
        }), n
    }
    isEqual(e) {
        if (!(e instanceof $e) || this.size !== e.size) return !1;
        const n = this.data.getIterator(),
            s = e.data.getIterator();
        for (; n.hasNext();) {
            const r = n.getNext().key,
                i = s.getNext().key;
            if (this.comparator(r, i) !== 0) return !1
        }
        return !0
    }
    toArray() {
        const e = [];
        return this.forEach(n => {
            e.push(n)
        }), e
    }
    toString() {
        const e = [];
        return this.forEach(n => e.push(n)), "SortedSet(" + e.toString() + ")"
    }
    copy(e) {
        const n = new $e(this.comparator);
        return n.data = e, n
    }
}
class xu {
    constructor(e) {
        this.iter = e
    }
    getNext() {
        return this.iter.getNext().key
    }
    hasNext() {
        return this.iter.hasNext()
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const PE = new Oe(H.comparator);

function Tn() {
    return PE
}
const ME = new Oe(H.comparator);

function Ca() {
    return ME
}

function No() {
    return new ms(t => t.toString(), (t, e) => t.isEqual(e))
}
const kE = new Oe(H.comparator),
    xE = new $e(H.comparator);

function Ee(...t) {
    let e = xE;
    for (const n of t) e = e.add(n);
    return e
}
const LE = new $e(le);

function qd() {
    return LE
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zi {
    constructor(e, n, s, r, i) {
        this.snapshotVersion = e, this.targetChanges = n, this.targetMismatches = s, this.documentUpdates = r, this.resolvedLimboDocuments = i
    }
    static createSynthesizedRemoteEventForCurrentChange(e, n) {
        const s = new Map;
        return s.set(e, pr.createSynthesizedTargetChangeForCurrentChange(e, n)), new Zi(ee.min(), s, qd(), Tn(), Ee())
    }
}
class pr {
    constructor(e, n, s, r, i) {
        this.resumeToken = e, this.current = n, this.addedDocuments = s, this.modifiedDocuments = r, this.removedDocuments = i
    }
    static createSynthesizedTargetChangeForCurrentChange(e, n) {
        return new pr(je.EMPTY_BYTE_STRING, n, Ee(), Ee(), Ee())
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hr {
    constructor(e, n, s, r) {
        this.O = e, this.removedTargetIds = n, this.key = s, this.F = r
    }
}
class zd {
    constructor(e, n) {
        this.targetId = e, this.$ = n
    }
}
class Gd {
    constructor(e, n, s = je.EMPTY_BYTE_STRING, r = null) {
        this.state = e, this.targetIds = n, this.resumeToken = s, this.cause = r
    }
}
class Lu {
    constructor() {
        this.B = 0, this.L = Fu(), this.U = je.EMPTY_BYTE_STRING, this.q = !1, this.G = !0
    }
    get current() {
        return this.q
    }
    get resumeToken() {
        return this.U
    }
    get K() {
        return this.B !== 0
    }
    get j() {
        return this.G
    }
    W(e) {
        e.approximateByteSize() > 0 && (this.G = !0, this.U = e)
    }
    H() {
        let e = Ee(),
            n = Ee(),
            s = Ee();
        return this.L.forEach((r, i) => {
            switch (i) {
                case 0:
                    e = e.add(r);
                    break;
                case 2:
                    n = n.add(r);
                    break;
                case 1:
                    s = s.add(r);
                    break;
                default:
                    W()
            }
        }), new pr(this.U, this.q, e, n, s)
    }
    J() {
        this.G = !1, this.L = Fu()
    }
    Y(e, n) {
        this.G = !0, this.L = this.L.insert(e, n)
    }
    X(e) {
        this.G = !0, this.L = this.L.remove(e)
    }
    Z() {
        this.B += 1
    }
    tt() {
        this.B -= 1
    }
    et() {
        this.G = !0, this.q = !0
    }
}
class OE {
    constructor(e) {
        this.nt = e, this.st = new Map, this.it = Tn(), this.rt = Ou(), this.ot = new $e(le)
    }
    ut(e) {
        for (const n of e.O) e.F && e.F.isFoundDocument() ? this.at(n, e.F) : this.ct(n, e.key, e.F);
        for (const n of e.removedTargetIds) this.ct(n, e.key, e.F)
    }
    ht(e) {
        this.forEachTarget(e, n => {
            const s = this.lt(n);
            switch (e.state) {
                case 0:
                    this.ft(n) && s.W(e.resumeToken);
                    break;
                case 1:
                    s.tt(), s.K || s.J(), s.W(e.resumeToken);
                    break;
                case 2:
                    s.tt(), s.K || this.removeTarget(n);
                    break;
                case 3:
                    this.ft(n) && (s.et(), s.W(e.resumeToken));
                    break;
                case 4:
                    this.ft(n) && (this.dt(n), s.W(e.resumeToken));
                    break;
                default:
                    W()
            }
        })
    }
    forEachTarget(e, n) {
        e.targetIds.length > 0 ? e.targetIds.forEach(n) : this.st.forEach((s, r) => {
            this.ft(r) && n(r)
        })
    }
    _t(e) {
        const n = e.targetId,
            s = e.$.count,
            r = this.wt(n);
        if (r) {
            const i = r.target;
            if (Ea(i))
                if (s === 0) {
                    const o = new H(i.path);
                    this.ct(n, o, Ke.newNoDocument(o, ee.min()))
                } else ye(s === 1);
            else this.gt(n) !== s && (this.dt(n), this.ot = this.ot.add(n))
        }
    }
    yt(e) {
        const n = new Map;
        this.st.forEach((i, o) => {
            const a = this.wt(o);
            if (a) {
                if (i.current && Ea(a.target)) {
                    const c = new H(a.target.path);
                    this.it.get(c) !== null || this.It(o, c) || this.ct(o, c, Ke.newNoDocument(c, e))
                }
                i.j && (n.set(o, i.H()), i.J())
            }
        });
        let s = Ee();
        this.rt.forEach((i, o) => {
            let a = !0;
            o.forEachWhile(c => {
                const l = this.wt(c);
                return !l || l.purpose === 2 || (a = !1, !1)
            }), a && (s = s.add(i))
        }), this.it.forEach((i, o) => o.setReadTime(e));
        const r = new Zi(e, n, this.ot, this.it, s);
        return this.it = Tn(), this.rt = Ou(), this.ot = new $e(le), r
    }
    at(e, n) {
        if (!this.ft(e)) return;
        const s = this.It(e, n.key) ? 2 : 0;
        this.lt(e).Y(n.key, s), this.it = this.it.insert(n.key, n), this.rt = this.rt.insert(n.key, this.Tt(n.key).add(e))
    }
    ct(e, n, s) {
        if (!this.ft(e)) return;
        const r = this.lt(e);
        this.It(e, n) ? r.Y(n, 1) : r.X(n), this.rt = this.rt.insert(n, this.Tt(n).delete(e)), s && (this.it = this.it.insert(n, s))
    }
    removeTarget(e) {
        this.st.delete(e)
    }
    gt(e) {
        const n = this.lt(e).H();
        return this.nt.getRemoteKeysForTarget(e).size + n.addedDocuments.size - n.removedDocuments.size
    }
    Z(e) {
        this.lt(e).Z()
    }
    lt(e) {
        let n = this.st.get(e);
        return n || (n = new Lu, this.st.set(e, n)), n
    }
    Tt(e) {
        let n = this.rt.get(e);
        return n || (n = new $e(le), this.rt = this.rt.insert(e, n)), n
    }
    ft(e) {
        const n = this.wt(e) !== null;
        return n || B("WatchChangeAggregator", "Detected inactive target", e), n
    }
    wt(e) {
        const n = this.st.get(e);
        return n && n.K ? null : this.nt.Et(e)
    }
    dt(e) {
        this.st.set(e, new Lu), this.nt.getRemoteKeysForTarget(e).forEach(n => {
            this.ct(e, n, null)
        })
    }
    It(e, n) {
        return this.nt.getRemoteKeysForTarget(e).has(n)
    }
}

function Ou() {
    return new Oe(H.comparator)
}

function Fu() {
    return new Oe(H.comparator)
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const FE = (() => ({
        asc: "ASCENDING",
        desc: "DESCENDING"
    }))(),
    BE = (() => ({
        "<": "LESS_THAN",
        "<=": "LESS_THAN_OR_EQUAL",
        ">": "GREATER_THAN",
        ">=": "GREATER_THAN_OR_EQUAL",
        "==": "EQUAL",
        "!=": "NOT_EQUAL",
        "array-contains": "ARRAY_CONTAINS",
        in: "IN",
        "not-in": "NOT_IN",
        "array-contains-any": "ARRAY_CONTAINS_ANY"
    }))();
class UE {
    constructor(e, n) {
        this.databaseId = e, this.N = n
    }
}

function mi(t, e) {
    return t.N ? `${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z` : {
        seconds: "" + e.seconds,
        nanos: e.nanoseconds
    }
}

function Wd(t, e) {
    return t.N ? e.toBase64() : e.toUint8Array()
}

function VE(t, e) {
    return mi(t, e.toTimestamp())
}

function kt(t) {
    return ye(!!t), ee.fromTimestamp(function(e) {
        const n = Xt(e);
        return new ze(n.seconds, n.nanos)
    }(t))
}

function Lc(t, e) {
    return function(n) {
        return new Ce(["projects", n.projectId, "databases", n.database])
    }(t).child("documents").child(e).canonicalString()
}

function Yd(t) {
    const e = Ce.fromString(t);
    return ye(Jd(e)), e
}

function Ia(t, e) {
    return Lc(t.databaseId, e.path)
}

function Ro(t, e) {
    const n = Yd(e);
    if (n.get(1) !== t.databaseId.projectId) throw new q(S.INVALID_ARGUMENT, "Tried to deserialize key from different project: " + n.get(1) + " vs " + t.databaseId.projectId);
    if (n.get(3) !== t.databaseId.database) throw new q(S.INVALID_ARGUMENT, "Tried to deserialize key from different database: " + n.get(3) + " vs " + t.databaseId.database);
    return new H(Xd(n))
}

function Sa(t, e) {
    return Lc(t.databaseId, e)
}

function $E(t) {
    const e = Yd(t);
    return e.length === 4 ? Ce.emptyPath() : Xd(e)
}

function _a(t) {
    return new Ce(["projects", t.databaseId.projectId, "databases", t.databaseId.database]).canonicalString()
}

function Xd(t) {
    return ye(t.length > 4 && t.get(4) === "documents"), t.popFirst(5)
}

function Bu(t, e, n) {
    return {
        name: Ia(t, e),
        fields: n.value.mapValue.fields
    }
}

function jE(t, e) {
    let n;
    if ("targetChange" in e) {
        e.targetChange;
        const s = function(c) {
                return c === "NO_CHANGE" ? 0 : c === "ADD" ? 1 : c === "REMOVE" ? 2 : c === "CURRENT" ? 3 : c === "RESET" ? 4 : W()
            }(e.targetChange.targetChangeType || "NO_CHANGE"),
            r = e.targetChange.targetIds || [],
            i = function(c, l) {
                return c.N ? (ye(l === void 0 || typeof l == "string"), je.fromBase64String(l || "")) : (ye(l === void 0 || l instanceof Uint8Array), je.fromUint8Array(l || new Uint8Array))
            }(t, e.targetChange.resumeToken),
            o = e.targetChange.cause,
            a = o && function(c) {
                const l = c.code === void 0 ? S.UNKNOWN : Kd(c.code);
                return new q(l, c.message || "")
            }(o);
        n = new Gd(s, r, i, a || null)
    } else if ("documentChange" in e) {
        e.documentChange;
        const s = e.documentChange;
        s.document, s.document.name, s.document.updateTime;
        const r = Ro(t, s.document.name),
            i = kt(s.document.updateTime),
            o = new pt({
                mapValue: {
                    fields: s.document.fields
                }
            }),
            a = Ke.newFoundDocument(r, i, o),
            c = s.targetIds || [],
            l = s.removedTargetIds || [];
        n = new Hr(c, l, a.key, a)
    } else if ("documentDelete" in e) {
        e.documentDelete;
        const s = e.documentDelete;
        s.document;
        const r = Ro(t, s.document),
            i = s.readTime ? kt(s.readTime) : ee.min(),
            o = Ke.newNoDocument(r, i),
            a = s.removedTargetIds || [];
        n = new Hr([], a, o.key, o)
    } else if ("documentRemove" in e) {
        e.documentRemove;
        const s = e.documentRemove;
        s.document;
        const r = Ro(t, s.document),
            i = s.removedTargetIds || [];
        n = new Hr([], i, r, null)
    } else {
        if (!("filter" in e)) return W(); {
            e.filter;
            const s = e.filter;
            s.targetId;
            const r = s.count || 0,
                i = new RE(r),
                o = s.targetId;
            n = new zd(o, i)
        }
    }
    return n
}

function HE(t, e) {
    let n;
    if (e instanceof Ji) n = {
        update: Bu(t, e.key, e.value)
    };
    else if (e instanceof AE) n = {
        delete: Ia(t, e.key)
    };
    else if (e instanceof gr) n = {
        update: Bu(t, e.key, e.data),
        updateMask: ZE(e.fieldMask)
    };
    else {
        if (!(e instanceof NE)) return W();
        n = {
            verify: Ia(t, e.key)
        }
    }
    return e.fieldTransforms.length > 0 && (n.updateTransforms = e.fieldTransforms.map(s => function(r, i) {
        const o = i.transform;
        if (o instanceof gi) return {
            fieldPath: i.field.canonicalString(),
            setToServerValue: "REQUEST_TIME"
        };
        if (o instanceof tr) return {
            fieldPath: i.field.canonicalString(),
            appendMissingElements: {
                values: o.elements
            }
        };
        if (o instanceof nr) return {
            fieldPath: i.field.canonicalString(),
            removeAllFromArray: {
                values: o.elements
            }
        };
        if (o instanceof pi) return {
            fieldPath: i.field.canonicalString(),
            increment: o.k
        };
        throw W()
    }(0, s))), e.precondition.isNone || (n.currentDocument = function(s, r) {
        return r.updateTime !== void 0 ? {
            updateTime: VE(s, r.updateTime)
        } : r.exists !== void 0 ? {
            exists: r.exists
        } : W()
    }(t, e.precondition)), n
}

function KE(t, e) {
    return t && t.length > 0 ? (ye(e !== void 0), t.map(n => function(s, r) {
        let i = s.updateTime ? kt(s.updateTime) : kt(r);
        return i.isEqual(ee.min()) && (i = kt(r)), new IE(i, s.transformResults || [])
    }(n, e))) : []
}

function qE(t, e) {
    return {
        documents: [Sa(t, e.path)]
    }
}

function zE(t, e) {
    const n = {
            structuredQuery: {}
        },
        s = e.path;
    e.collectionGroup !== null ? (n.parent = Sa(t, s), n.structuredQuery.from = [{
        collectionId: e.collectionGroup,
        allDescendants: !0
    }]) : (n.parent = Sa(t, s.popLast()), n.structuredQuery.from = [{
        collectionId: s.lastSegment()
    }]);
    const r = function(c) {
        if (c.length === 0) return;
        const l = c.map(u => function(h) {
            if (h.op === "==") {
                if (Su(h.value)) return {
                    unaryFilter: {
                        field: Rn(h.field),
                        op: "IS_NAN"
                    }
                };
                if (Iu(h.value)) return {
                    unaryFilter: {
                        field: Rn(h.field),
                        op: "IS_NULL"
                    }
                }
            } else if (h.op === "!=") {
                if (Su(h.value)) return {
                    unaryFilter: {
                        field: Rn(h.field),
                        op: "IS_NOT_NAN"
                    }
                };
                if (Iu(h.value)) return {
                    unaryFilter: {
                        field: Rn(h.field),
                        op: "IS_NOT_NULL"
                    }
                }
            }
            return {
                fieldFilter: {
                    field: Rn(h.field),
                    op: XE(h.op),
                    value: h.value
                }
            }
        }(u));
        return l.length === 1 ? l[0] : {
            compositeFilter: {
                op: "AND",
                filters: l
            }
        }
    }(e.filters);
    r && (n.structuredQuery.where = r);
    const i = function(c) {
        if (c.length !== 0) return c.map(l => function(u) {
            return {
                field: Rn(u.field),
                direction: YE(u.dir)
            }
        }(l))
    }(e.orderBy);
    i && (n.structuredQuery.orderBy = i);
    const o = function(c, l) {
        return c.N || ps(l) ? l : {
            value: l
        }
    }(t, e.limit);
    var a;
    return o !== null && (n.structuredQuery.limit = o), e.startAt && (n.structuredQuery.startAt = {
        before: (a = e.startAt).inclusive,
        values: a.position
    }), e.endAt && (n.structuredQuery.endAt = function(c) {
        return {
            before: !c.inclusive,
            values: c.position
        }
    }(e.endAt)), n
}

function GE(t) {
    let e = $E(t.parent);
    const n = t.structuredQuery,
        s = n.from ? n.from.length : 0;
    let r = null;
    if (s > 0) {
        ye(s === 1);
        const u = n.from[0];
        u.allDescendants ? r = u.collectionId : e = e.child(u.collectionId)
    }
    let i = [];
    n.where && (i = Qd(n.where));
    let o = [];
    n.orderBy && (o = n.orderBy.map(u => function(h) {
        return new Ls(Ln(h.field), function(f) {
            switch (f) {
                case "ASCENDING":
                    return "asc";
                case "DESCENDING":
                    return "desc";
                default:
                    return
            }
        }(h.direction))
    }(u)));
    let a = null;
    n.limit && (a = function(u) {
        let h;
        return h = typeof u == "object" ? u.value : u, ps(h) ? null : h
    }(n.limit));
    let c = null;
    n.startAt && (c = function(u) {
        const h = !!u.before,
            f = u.values || [];
        return new fi(f, h)
    }(n.startAt));
    let l = null;
    return n.endAt && (l = function(u) {
        const h = !u.before,
            f = u.values || [];
        return new fi(f, h)
    }(n.endAt)), dE(e, r, o, i, a, "F", c, l)
}

function WE(t, e) {
    const n = function(s, r) {
        switch (r) {
            case 0:
                return null;
            case 1:
                return "existence-filter-mismatch";
            case 2:
                return "limbo-document";
            default:
                return W()
        }
    }(0, e.purpose);
    return n == null ? null : {
        "goog-listen-tags": n
    }
}

function Qd(t) {
    return t ? t.unaryFilter !== void 0 ? [JE(t)] : t.fieldFilter !== void 0 ? [QE(t)] : t.compositeFilter !== void 0 ? t.compositeFilter.filters.map(e => Qd(e)).reduce((e, n) => e.concat(n)) : W() : []
}

function YE(t) {
    return FE[t]
}

function XE(t) {
    return BE[t]
}

function Rn(t) {
    return {
        fieldPath: t.canonicalString()
    }
}

function Ln(t) {
    return tt.fromServerFormat(t.fieldPath)
}

function QE(t) {
    return nt.create(Ln(t.fieldFilter.field), function(e) {
        switch (e) {
            case "EQUAL":
                return "==";
            case "NOT_EQUAL":
                return "!=";
            case "GREATER_THAN":
                return ">";
            case "GREATER_THAN_OR_EQUAL":
                return ">=";
            case "LESS_THAN":
                return "<";
            case "LESS_THAN_OR_EQUAL":
                return "<=";
            case "ARRAY_CONTAINS":
                return "array-contains";
            case "IN":
                return "in";
            case "NOT_IN":
                return "not-in";
            case "ARRAY_CONTAINS_ANY":
                return "array-contains-any";
            default:
                return W()
        }
    }(t.fieldFilter.op), t.fieldFilter.value)
}

function JE(t) {
    switch (t.unaryFilter.op) {
        case "IS_NAN":
            const e = Ln(t.unaryFilter.field);
            return nt.create(e, "==", {
                doubleValue: NaN
            });
        case "IS_NULL":
            const n = Ln(t.unaryFilter.field);
            return nt.create(n, "==", {
                nullValue: "NULL_VALUE"
            });
        case "IS_NOT_NAN":
            const s = Ln(t.unaryFilter.field);
            return nt.create(s, "!=", {
                doubleValue: NaN
            });
        case "IS_NOT_NULL":
            const r = Ln(t.unaryFilter.field);
            return nt.create(r, "!=", {
                nullValue: "NULL_VALUE"
            });
        default:
            return W()
    }
}

function ZE(t) {
    const e = [];
    return t.fields.forEach(n => e.push(n.canonicalString())), {
        fieldPaths: e
    }
}

function Jd(t) {
    return t.length >= 4 && t.get(0) === "projects" && t.get(2) === "databases"
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const e1 = "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
class t1 {
    constructor() {
        this.onCommittedListeners = []
    }
    addOnCommittedListener(e) {
        this.onCommittedListeners.push(e)
    }
    raiseOnCommittedEvent() {
        this.onCommittedListeners.forEach(e => e())
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class P {
    constructor(e) {
        this.nextCallback = null, this.catchCallback = null, this.result = void 0, this.error = void 0, this.isDone = !1, this.callbackAttached = !1, e(n => {
            this.isDone = !0, this.result = n, this.nextCallback && this.nextCallback(n)
        }, n => {
            this.isDone = !0, this.error = n, this.catchCallback && this.catchCallback(n)
        })
    } catch (e) {
        return this.next(void 0, e)
    }
    next(e, n) {
        return this.callbackAttached && W(), this.callbackAttached = !0, this.isDone ? this.error ? this.wrapFailure(n, this.error) : this.wrapSuccess(e, this.result) : new P((s, r) => {
            this.nextCallback = i => {
                this.wrapSuccess(e, i).next(s, r)
            }, this.catchCallback = i => {
                this.wrapFailure(n, i).next(s, r)
            }
        })
    }
    toPromise() {
        return new Promise((e, n) => {
            this.next(e, n)
        })
    }
    wrapUserFunction(e) {
        try {
            const n = e();
            return n instanceof P ? n : P.resolve(n)
        } catch (n) {
            return P.reject(n)
        }
    }
    wrapSuccess(e, n) {
        return e ? this.wrapUserFunction(() => e(n)) : P.resolve(n)
    }
    wrapFailure(e, n) {
        return e ? this.wrapUserFunction(() => e(n)) : P.reject(n)
    }
    static resolve(e) {
        return new P((n, s) => {
            n(e)
        })
    }
    static reject(e) {
        return new P((n, s) => {
            s(e)
        })
    }
    static waitFor(e) {
        return new P((n, s) => {
            let r = 0,
                i = 0,
                o = !1;
            e.forEach(a => {
                ++r, a.next(() => {
                    ++i, o && i === r && n()
                }, c => s(c))
            }), o = !0, i === r && n()
        })
    }
    static or(e) {
        let n = P.resolve(!1);
        for (const s of e) n = n.next(r => r ? P.resolve(r) : s());
        return n
    }
    static forEach(e, n) {
        const s = [];
        return e.forEach((r, i) => {
            s.push(n.call(this, r, i))
        }), this.waitFor(s)
    }
}

function mr(t) {
    return t.name === "IndexedDbTransactionError"
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class n1 {
    constructor(e, n, s, r) {
        this.batchId = e, this.localWriteTime = n, this.baseMutations = s, this.mutations = r
    }
    applyToRemoteDocument(e, n) {
        const s = n.mutationResults;
        for (let r = 0; r < this.mutations.length; r++) {
            const i = this.mutations[r];
            i.key.isEqual(e.key) && SE(i, e, s[r])
        }
    }
    applyToLocalView(e) {
        for (const n of this.baseMutations) n.key.isEqual(e.key) && ba(n, e, this.localWriteTime);
        for (const n of this.mutations) n.key.isEqual(e.key) && ba(n, e, this.localWriteTime)
    }
    applyToLocalDocumentSet(e) {
        this.mutations.forEach(n => {
            const s = e.get(n.key),
                r = s;
            this.applyToLocalView(r), s.isValidDocument() || r.convertToNoDocument(ee.min())
        })
    }
    keys() {
        return this.mutations.reduce((e, n) => e.add(n.key), Ee())
    }
    isEqual(e) {
        return this.batchId === e.batchId && Wn(this.mutations, e.mutations, (n, s) => Du(n, s)) && Wn(this.baseMutations, e.baseMutations, (n, s) => Du(n, s))
    }
}
class Oc {
    constructor(e, n, s, r) {
        this.batch = e, this.commitVersion = n, this.mutationResults = s, this.docVersions = r
    }
    static from(e, n, s) {
        ye(e.mutations.length === s.length);
        let r = kE;
        const i = e.mutations;
        for (let o = 0; o < i.length; o++) r = r.insert(i[o].key, s[o].version);
        return new Oc(e, n, s, r)
    }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class s1 {
    constructor(e, n) {
        this.largestBatchId = e, this.mutation = n
    }
    getKey() {
        return this.mutation.key
    }
    isEqual(e) {
        return e !== null && this.mutation === e.mutation
    }
    toString() {
        return `Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gn {
    constructor(e, n, s, r, i = ee.min(), o = ee.min(), a = je.EMPTY_BYTE_STRING) {
        this.target = e, this.targetId = n, this.purpose = s, this.sequenceNumber = r, this.snapshotVersion = i, this.lastLimboFreeSnapshotVersion = o, this.resumeToken = a
    }
    withSequenceNumber(e) {
        return new gn(this.target, this.targetId, this.purpose, e, this.snapshotVersion, this.lastLimboFreeSnapshotVersion, this.resumeToken)
    }
    withResumeToken(e, n) {
        return new gn(this.target, this.targetId, this.purpose, this.sequenceNumber, n, this.lastLimboFreeSnapshotVersion, e)
    }
    withLastLimboFreeSnapshotVersion(e) {
        return new gn(this.target, this.targetId, this.purpose, this.sequenceNumber, this.snapshotVersion, e, this.resumeToken)
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class r1 {
    constructor(e) {
        this.Jt = e
    }
}

function i1(t) {
    const e = GE({
        parent: t.parent,
        structuredQuery: t.structuredQuery
    });
    return t.limitType === "LAST" ? yE(e, e.limit, "L") : e
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class o1 {
    constructor() {
        this.qe = new a1
    }
    addToCollectionParentIndex(e, n) {
        return this.qe.add(n), P.resolve()
    }
    getCollectionParents(e, n) {
        return P.resolve(this.qe.getEntries(n))
    }
    addFieldIndex(e, n) {
        return P.resolve()
    }
    deleteFieldIndex(e, n) {
        return P.resolve()
    }
    getDocumentsMatchingTarget(e, n) {
        return P.resolve(null)
    }
    getFieldIndex(e, n) {
        return P.resolve(null)
    }
    getFieldIndexes(e, n) {
        return P.resolve([])
    }
    getNextCollectionGroupToUpdate(e) {
        return P.resolve(null)
    }
    updateCollectionGroup(e, n, s) {
        return P.resolve()
    }
    updateIndexEntries(e, n) {
        return P.resolve()
    }
}
class a1 {
    constructor() {
        this.index = {}
    }
    add(e) {
        const n = e.lastSegment(),
            s = e.popLast(),
            r = this.index[n] || new $e(Ce.comparator),
            i = !r.has(s);
        return this.index[n] = r.add(s), i
    }
    has(e) {
        const n = e.lastSegment(),
            s = e.popLast(),
            r = this.index[n];
        return r && r.has(s)
    }
    getEntries(e) {
        return (this.index[e] || new $e(Ce.comparator)).toArray()
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zn {
    constructor(e) {
        this.wn = e
    }
    next() {
        return this.wn += 2, this.wn
    }
    static mn() {
        return new Zn(0)
    }
    static gn() {
        return new Zn(-1)
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function yr(t) {
    if (t.code !== S.FAILED_PRECONDITION || t.message !== e1) throw t;
    B("LocalStore", "Unexpectedly lost primary lease")
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class c1 {
    constructor() {
        this.changes = new ms(e => e.toString(), (e, n) => e.isEqual(n)), this.changesApplied = !1
    }
    addEntry(e) {
        this.assertNotApplied(), this.changes.set(e.key, e)
    }
    removeEntry(e, n) {
        this.assertNotApplied(), this.changes.set(e, Ke.newInvalidDocument(e).setReadTime(n))
    }
    getEntry(e, n) {
        this.assertNotApplied();
        const s = this.changes.get(n);
        return s !== void 0 ? P.resolve(s) : this.getFromCache(e, n)
    }
    getEntries(e, n) {
        return this.getAllFromCache(e, n)
    }
    apply(e) {
        return this.assertNotApplied(), this.changesApplied = !0, this.applyChanges(e)
    }
    assertNotApplied() {}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class l1 {
    constructor(e, n, s) {
        this.fs = e, this.$s = n, this.indexManager = s
    }
    Bs(e, n) {
        return this.$s.getAllMutationBatchesAffectingDocumentKey(e, n).next(s => this.Ls(e, n, s))
    }
    Ls(e, n, s) {
        return this.fs.getEntry(e, n).next(r => {
            for (const i of s) i.applyToLocalView(r);
            return r
        })
    }
    Us(e, n) {
        e.forEach((s, r) => {
            for (const i of n) i.applyToLocalView(r)
        })
    }
    qs(e, n) {
        return this.fs.getEntries(e, n).next(s => this.Gs(e, s).next(() => s))
    }
    Gs(e, n) {
        return this.$s.getAllMutationBatchesAffectingDocumentKeys(e, n).next(s => this.Us(n, s))
    }
    Ks(e, n, s) {
        return function(r) {
            return H.isDocumentKey(r.path) && r.collectionGroup === null && r.filters.length === 0
        }(n) ? this.Qs(e, n.path) : mE(n) ? this.js(e, n, s) : this.Ws(e, n, s)
    }
    Qs(e, n) {
        return this.Bs(e, new H(n)).next(s => {
            let r = Ca();
            return s.isFoundDocument() && (r = r.insert(s.key, s)), r
        })
    }
    js(e, n, s) {
        const r = n.collectionGroup;
        let i = Ca();
        return this.indexManager.getCollectionParents(e, r).next(o => P.forEach(o, a => {
            const c = function(l, u) {
                return new Wi(u, null, l.explicitOrderBy.slice(), l.filters.slice(), l.limit, l.limitType, l.startAt, l.endAt)
            }(n, a.child(r));
            return this.Ws(e, c, s).next(l => {
                l.forEach((u, h) => {
                    i = i.insert(u, h)
                })
            })
        }).next(() => i))
    }
    Ws(e, n, s) {
        let r;
        return this.fs.getAllFromCollection(e, n.path, s).next(i => (r = i, this.$s.getAllMutationBatchesAffectingQuery(e, n))).next(i => {
            for (const o of i)
                for (const a of o.mutations) {
                    const c = a.key;
                    let l = r.get(c);
                    l == null && (l = Ke.newInvalidDocument(c), r = r.insert(c, l)), ba(a, l, o.localWriteTime), l.isFoundDocument() || (r = r.remove(c))
                }
        }).next(() => (r.forEach((i, o) => {
            xc(n, o) || (r = r.remove(i))
        }), r))
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fc {
    constructor(e, n, s, r) {
        this.targetId = e, this.fromCache = n, this.zs = s, this.Hs = r
    }
    static Js(e, n) {
        let s = Ee(),
            r = Ee();
        for (const i of n.docChanges) switch (i.type) {
            case 0:
                s = s.add(i.doc.key);
                break;
            case 1:
                r = r.add(i.doc.key)
        }
        return new Fc(e, n.fromCache, s, r)
    }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class u1 {
    Ys(e) {
        this.Xs = e
    }
    Ks(e, n, s, r) {
        return function(i) {
            return i.filters.length === 0 && i.limit === null && i.startAt == null && i.endAt == null && (i.explicitOrderBy.length === 0 || i.explicitOrderBy.length === 1 && i.explicitOrderBy[0].field.isKeyField())
        }(n) || s.isEqual(ee.min()) ? this.Zs(e, n) : this.Xs.qs(e, r).next(i => {
            const o = this.ti(n, i);
            return ($r(n) || di(n)) && this.ei(n.limitType, o, r, s) ? this.Zs(e, n) : (Eu() <= ce.DEBUG && B("QueryEngine", "Re-using previous result from %s to execute query: %s", s.toString(), Ta(n)), this.Xs.Ks(e, n, eE(s, -1)).next(a => (o.forEach(c => {
                a = a.insert(c.key, c)
            }), a)))
        })
    }
    ti(e, n) {
        let s = new $e(Od(e));
        return n.forEach((r, i) => {
            xc(e, i) && (s = s.add(i))
        }), s
    }
    ei(e, n, s, r) {
        if (s.size !== n.size) return !0;
        const i = e === "F" ? n.last() : n.first();
        return !!i && (i.hasPendingWrites || i.version.compareTo(r) > 0)
    }
    Zs(e, n) {
        return Eu() <= ce.DEBUG && B("QueryEngine", "Using full collection scan to execute query:", Ta(n)), this.Xs.Ks(e, n, Jn.min())
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class h1 {
    constructor(e, n, s, r) {
        this.persistence = e, this.ni = n, this.M = r, this.si = new Oe(le), this.ii = new ms(i => Mc(i), kc), this.ri = new Map, this.oi = e.getRemoteDocumentCache(), this.ls = e.getTargetCache(), this.ds = e.getBundleCache(), this.ui(s)
    }
    ui(e) {
        this.indexManager = this.persistence.getIndexManager(e), this.$s = this.persistence.getMutationQueue(e, this.indexManager), this.ai = new l1(this.oi, this.$s, this.indexManager), this.oi.setIndexManager(this.indexManager), this.ni.Ys(this.ai)
    }
    collectGarbage(e) {
        return this.persistence.runTransaction("Collect garbage", "readwrite-primary", n => e.collect(n, this.si))
    }
}

function f1(t, e, n, s) {
    return new h1(t, e, n, s)
}
async function Zd(t, e) {
    const n = Q(t);
    return await n.persistence.runTransaction("Handle user change", "readonly", s => {
        let r;
        return n.$s.getAllMutationBatches(s).next(i => (r = i, n.ui(e), n.$s.getAllMutationBatches(s))).next(i => {
            const o = [],
                a = [];
            let c = Ee();
            for (const l of r) {
                o.push(l.batchId);
                for (const u of l.mutations) c = c.add(u.key)
            }
            for (const l of i) {
                a.push(l.batchId);
                for (const u of l.mutations) c = c.add(u.key)
            }
            return n.ai.qs(s, c).next(l => ({
                ci: l,
                removedBatchIds: o,
                addedBatchIds: a
            }))
        })
    })
}

function d1(t, e) {
    const n = Q(t);
    return n.persistence.runTransaction("Acknowledge batch", "readwrite-primary", s => {
        const r = e.batch.keys(),
            i = n.oi.newChangeBuffer({
                trackRemovals: !0
            });
        return function(o, a, c, l) {
            const u = c.batch,
                h = u.keys();
            let f = P.resolve();
            return h.forEach(g => {
                f = f.next(() => l.getEntry(a, g)).next(m => {
                    const w = c.docVersions.get(g);
                    ye(w !== null), m.version.compareTo(w) < 0 && (u.applyToRemoteDocument(m, c), m.isValidDocument() && (m.setReadTime(c.commitVersion), l.addEntry(m)))
                })
            }), f.next(() => o.$s.removeMutationBatch(a, u))
        }(n, s, e, i).next(() => i.apply(s)).next(() => n.$s.performConsistencyCheck(s)).next(() => n.ai.qs(s, r))
    })
}

function eg(t) {
    const e = Q(t);
    return e.persistence.runTransaction("Get last remote snapshot version", "readonly", n => e.ls.getLastRemoteSnapshotVersion(n))
}

function g1(t, e) {
    const n = Q(t),
        s = e.snapshotVersion;
    let r = n.si;
    return n.persistence.runTransaction("Apply remote event", "readwrite-primary", i => {
        const o = n.oi.newChangeBuffer({
            trackRemovals: !0
        });
        r = n.si;
        const a = [];
        e.targetChanges.forEach((l, u) => {
            const h = r.get(u);
            if (!h) return;
            a.push(n.ls.removeMatchingKeys(i, l.removedDocuments, u).next(() => n.ls.addMatchingKeys(i, l.addedDocuments, u)));
            let f = h.withSequenceNumber(i.currentSequenceNumber);
            e.targetMismatches.has(u) ? f = f.withResumeToken(je.EMPTY_BYTE_STRING, ee.min()).withLastLimboFreeSnapshotVersion(ee.min()) : l.resumeToken.approximateByteSize() > 0 && (f = f.withResumeToken(l.resumeToken, s)), r = r.insert(u, f),
                function(g, m, w) {
                    return g.resumeToken.approximateByteSize() === 0 || m.snapshotVersion.toMicroseconds() - g.snapshotVersion.toMicroseconds() >= 3e8 ? !0 : w.addedDocuments.size + w.modifiedDocuments.size + w.removedDocuments.size > 0
                }(h, f, l) && a.push(n.ls.updateTargetData(i, f))
        });
        let c = Tn();
        if (e.documentUpdates.forEach(l => {
                e.resolvedLimboDocuments.has(l) && a.push(n.persistence.referenceDelegate.updateLimboDocument(i, l))
            }), a.push(p1(i, o, e.documentUpdates).next(l => {
                c = l
            })), !s.isEqual(ee.min())) {
            const l = n.ls.getLastRemoteSnapshotVersion(i).next(u => n.ls.setTargetsMetadata(i, i.currentSequenceNumber, s));
            a.push(l)
        }
        return P.waitFor(a).next(() => o.apply(i)).next(() => n.ai.Gs(i, c)).next(() => c)
    }).then(i => (n.si = r, i))
}

function p1(t, e, n) {
    let s = Ee();
    return n.forEach(r => s = s.add(r)), e.getEntries(t, s).next(r => {
        let i = Tn();
        return n.forEach((o, a) => {
            const c = r.get(o);
            a.isNoDocument() && a.version.isEqual(ee.min()) ? (e.removeEntry(o, a.readTime), i = i.insert(o, a)) : !c.isValidDocument() || a.version.compareTo(c.version) > 0 || a.version.compareTo(c.version) === 0 && c.hasPendingWrites ? (e.addEntry(a), i = i.insert(o, a)) : B("LocalStore", "Ignoring outdated watch update for ", o, ". Current version:", c.version, " Watch version:", a.version)
        }), i
    })
}

function m1(t, e) {
    const n = Q(t);
    return n.persistence.runTransaction("Get next mutation batch", "readonly", s => (e === void 0 && (e = -1), n.$s.getNextMutationBatchAfterBatchId(s, e)))
}

function y1(t, e) {
    const n = Q(t);
    return n.persistence.runTransaction("Allocate target", "readwrite", s => {
        let r;
        return n.ls.getTargetData(s, e).next(i => i ? (r = i, P.resolve(r)) : n.ls.allocateTargetId(s).next(o => (r = new gn(e, o, 0, s.currentSequenceNumber), n.ls.addTargetData(s, r).next(() => r))))
    }).then(s => {
        const r = n.si.get(s.targetId);
        return (r === null || s.snapshotVersion.compareTo(r.snapshotVersion) > 0) && (n.si = n.si.insert(s.targetId, s), n.ii.set(e, s.targetId)), s
    })
}
async function Aa(t, e, n) {
    const s = Q(t),
        r = s.si.get(e),
        i = n ? "readwrite" : "readwrite-primary";
    try {
        n || await s.persistence.runTransaction("Release target", i, o => s.persistence.referenceDelegate.removeTarget(o, r))
    } catch (o) {
        if (!mr(o)) throw o;
        B("LocalStore", `Failed to update sequence numbers for target ${e}: ${o}`)
    }
    s.si = s.si.remove(e), s.ii.delete(r.target)
}

function Uu(t, e, n) {
    const s = Q(t);
    let r = ee.min(),
        i = Ee();
    return s.persistence.runTransaction("Execute query", "readonly", o => function(a, c, l) {
        const u = Q(a),
            h = u.ii.get(l);
        return h !== void 0 ? P.resolve(u.si.get(h)) : u.ls.getTargetData(c, l)
    }(s, o, En(e)).next(a => {
        if (a) return r = a.lastLimboFreeSnapshotVersion, s.ls.getMatchingKeysForTargetId(o, a.targetId).next(c => {
            i = c
        })
    }).next(() => s.ni.Ks(o, e, n ? r : ee.min(), n ? i : Ee())).next(a => (w1(s, wE(e), a), {
        documents: a,
        hi: i
    })))
}

function w1(t, e, n) {
    let s = ee.min();
    n.forEach((r, i) => {
        i.readTime.compareTo(s) > 0 && (s = i.readTime)
    }), t.ri.set(e, s)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class v1 {
    constructor(e) {
        this.M = e, this._i = new Map, this.wi = new Map
    }
    getBundleMetadata(e, n) {
        return P.resolve(this._i.get(n))
    }
    saveBundleMetadata(e, n) {
        var s;
        return this._i.set(n.id, {
            id: (s = n).id,
            version: s.version,
            createTime: kt(s.createTime)
        }), P.resolve()
    }
    getNamedQuery(e, n) {
        return P.resolve(this.wi.get(n))
    }
    saveNamedQuery(e, n) {
        return this.wi.set(n.name, function(s) {
            return {
                name: s.name,
                query: i1(s.bundledQuery),
                readTime: kt(s.readTime)
            }
        }(n)), P.resolve()
    }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class E1 {
    constructor() {
        this.overlays = new Oe(H.comparator), this.mi = new Map
    }
    getOverlay(e, n) {
        return P.resolve(this.overlays.get(n))
    }
    saveOverlays(e, n, s) {
        return s.forEach((r, i) => {
            this.Xt(e, n, i)
        }), P.resolve()
    }
    removeOverlaysForBatchId(e, n, s) {
        const r = this.mi.get(s);
        return r !== void 0 && (r.forEach(i => this.overlays = this.overlays.remove(i)), this.mi.delete(s)), P.resolve()
    }
    getOverlaysForCollection(e, n, s) {
        const r = No(),
            i = n.length + 1,
            o = new H(n.child("")),
            a = this.overlays.getIteratorFrom(o);
        for (; a.hasNext();) {
            const c = a.getNext().value,
                l = c.getKey();
            if (!n.isPrefixOf(l.path)) break;
            l.path.length === i && c.largestBatchId > s && r.set(c.getKey(), c)
        }
        return P.resolve(r)
    }
    getOverlaysForCollectionGroup(e, n, s, r) {
        let i = new Oe((l, u) => l - u);
        const o = this.overlays.getIterator();
        for (; o.hasNext();) {
            const l = o.getNext().value;
            if (l.getKey().getCollectionGroup() === n && l.largestBatchId > s) {
                let u = i.get(l.largestBatchId);
                u === null && (u = No(), i = i.insert(l.largestBatchId, u)), u.set(l.getKey(), l)
            }
        }
        const a = No(),
            c = i.getIterator();
        for (; c.hasNext() && (c.getNext().value.forEach((l, u) => a.set(l, u)), !(a.size() >= r)););
        return P.resolve(a)
    }
    Xt(e, n, s) {
        if (s === null) return;
        const r = this.overlays.get(s.key);
        if (r !== null) {
            const o = this.mi.get(r.largestBatchId).delete(s.key);
            this.mi.set(r.largestBatchId, o)
        }
        this.overlays = this.overlays.insert(s.key, new s1(n, s));
        let i = this.mi.get(n);
        i === void 0 && (i = Ee(), this.mi.set(n, i)), this.mi.set(n, i.add(s.key))
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bc {
    constructor() {
        this.gi = new $e(Me.yi), this.pi = new $e(Me.Ii)
    }
    isEmpty() {
        return this.gi.isEmpty()
    }
    addReference(e, n) {
        const s = new Me(e, n);
        this.gi = this.gi.add(s), this.pi = this.pi.add(s)
    }
    Ti(e, n) {
        e.forEach(s => this.addReference(s, n))
    }
    removeReference(e, n) {
        this.Ei(new Me(e, n))
    }
    Ai(e, n) {
        e.forEach(s => this.removeReference(s, n))
    }
    Ri(e) {
        const n = new H(new Ce([])),
            s = new Me(n, e),
            r = new Me(n, e + 1),
            i = [];
        return this.pi.forEachInRange([s, r], o => {
            this.Ei(o), i.push(o.key)
        }), i
    }
    bi() {
        this.gi.forEach(e => this.Ei(e))
    }
    Ei(e) {
        this.gi = this.gi.delete(e), this.pi = this.pi.delete(e)
    }
    Pi(e) {
        const n = new H(new Ce([])),
            s = new Me(n, e),
            r = new Me(n, e + 1);
        let i = Ee();
        return this.pi.forEachInRange([s, r], o => {
            i = i.add(o.key)
        }), i
    }
    containsKey(e) {
        const n = new Me(e, 0),
            s = this.gi.firstAfterOrEqual(n);
        return s !== null && e.isEqual(s.key)
    }
}
class Me {
    constructor(e, n) {
        this.key = e, this.Vi = n
    }
    static yi(e, n) {
        return H.comparator(e.key, n.key) || le(e.Vi, n.Vi)
    }
    static Ii(e, n) {
        return le(e.Vi, n.Vi) || H.comparator(e.key, n.key)
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class T1 {
    constructor(e, n) {
        this.indexManager = e, this.referenceDelegate = n, this.$s = [], this.vi = 1, this.Si = new $e(Me.yi)
    }
    checkEmpty(e) {
        return P.resolve(this.$s.length === 0)
    }
    addMutationBatch(e, n, s, r) {
        const i = this.vi;
        this.vi++, this.$s.length > 0 && this.$s[this.$s.length - 1];
        const o = new n1(i, n, s, r);
        this.$s.push(o);
        for (const a of r) this.Si = this.Si.add(new Me(a.key, i)), this.indexManager.addToCollectionParentIndex(e, a.key.path.popLast());
        return P.resolve(o)
    }
    lookupMutationBatch(e, n) {
        return P.resolve(this.Di(n))
    }
    getNextMutationBatchAfterBatchId(e, n) {
        const s = n + 1,
            r = this.Ci(s),
            i = r < 0 ? 0 : r;
        return P.resolve(this.$s.length > i ? this.$s[i] : null)
    }
    getHighestUnacknowledgedBatchId() {
        return P.resolve(this.$s.length === 0 ? -1 : this.vi - 1)
    }
    getAllMutationBatches(e) {
        return P.resolve(this.$s.slice())
    }
    getAllMutationBatchesAffectingDocumentKey(e, n) {
        const s = new Me(n, 0),
            r = new Me(n, Number.POSITIVE_INFINITY),
            i = [];
        return this.Si.forEachInRange([s, r], o => {
            const a = this.Di(o.Vi);
            i.push(a)
        }), P.resolve(i)
    }
    getAllMutationBatchesAffectingDocumentKeys(e, n) {
        let s = new $e(le);
        return n.forEach(r => {
            const i = new Me(r, 0),
                o = new Me(r, Number.POSITIVE_INFINITY);
            this.Si.forEachInRange([i, o], a => {
                s = s.add(a.Vi)
            })
        }), P.resolve(this.xi(s))
    }
    getAllMutationBatchesAffectingQuery(e, n) {
        const s = n.path,
            r = s.length + 1;
        let i = s;
        H.isDocumentKey(i) || (i = i.child(""));
        const o = new Me(new H(i), 0);
        let a = new $e(le);
        return this.Si.forEachWhile(c => {
            const l = c.key.path;
            return !!s.isPrefixOf(l) && (l.length === r && (a = a.add(c.Vi)), !0)
        }, o), P.resolve(this.xi(a))
    }
    xi(e) {
        const n = [];
        return e.forEach(s => {
            const r = this.Di(s);
            r !== null && n.push(r)
        }), n
    }
    removeMutationBatch(e, n) {
        ye(this.Ni(n.batchId, "removed") === 0), this.$s.shift();
        let s = this.Si;
        return P.forEach(n.mutations, r => {
            const i = new Me(r.key, n.batchId);
            return s = s.delete(i), this.referenceDelegate.markPotentiallyOrphaned(e, r.key)
        }).next(() => {
            this.Si = s
        })
    }
    dn(e) {}
    containsKey(e, n) {
        const s = new Me(n, 0),
            r = this.Si.firstAfterOrEqual(s);
        return P.resolve(n.isEqual(r && r.key))
    }
    performConsistencyCheck(e) {
        return this.$s.length, P.resolve()
    }
    Ni(e, n) {
        return this.Ci(e)
    }
    Ci(e) {
        return this.$s.length === 0 ? 0 : e - this.$s[0].batchId
    }
    Di(e) {
        const n = this.Ci(e);
        return n < 0 || n >= this.$s.length ? null : this.$s[n]
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class b1 {
    constructor(e) {
        this.ki = e, this.docs = new Oe(H.comparator), this.size = 0
    }
    setIndexManager(e) {
        this.indexManager = e
    }
    addEntry(e, n) {
        const s = n.key,
            r = this.docs.get(s),
            i = r ? r.size : 0,
            o = this.ki(n);
        return this.docs = this.docs.insert(s, {
            document: n.mutableCopy(),
            size: o
        }), this.size += o - i, this.indexManager.addToCollectionParentIndex(e, s.path.popLast())
    }
    removeEntry(e) {
        const n = this.docs.get(e);
        n && (this.docs = this.docs.remove(e), this.size -= n.size)
    }
    getEntry(e, n) {
        const s = this.docs.get(n);
        return P.resolve(s ? s.document.mutableCopy() : Ke.newInvalidDocument(n))
    }
    getEntries(e, n) {
        let s = Tn();
        return n.forEach(r => {
            const i = this.docs.get(r);
            s = s.insert(r, i ? i.document.mutableCopy() : Ke.newInvalidDocument(r))
        }), P.resolve(s)
    }
    getAllFromCollection(e, n, s) {
        let r = Tn();
        const i = new H(n.child("")),
            o = this.docs.getIteratorFrom(i);
        for (; o.hasNext();) {
            const {
                key: a,
                value: {
                    document: c
                }
            } = o.getNext();
            if (!n.isPrefixOf(a.path)) break;
            a.path.length > n.length + 1 || nE(tE(c), s) <= 0 || (r = r.insert(c.key, c.mutableCopy()))
        }
        return P.resolve(r)
    }
    getAllFromCollectionGroup(e, n, s, r) {
        W()
    }
    Mi(e, n) {
        return P.forEach(this.docs, s => n(s))
    }
    newChangeBuffer(e) {
        return new C1(this)
    }
    getSize(e) {
        return P.resolve(this.size)
    }
}
class C1 extends c1 {
    constructor(e) {
        super(), this.qn = e
    }
    applyChanges(e) {
        const n = [];
        return this.changes.forEach((s, r) => {
            r.isValidDocument() ? n.push(this.qn.addEntry(e, r)) : this.qn.removeEntry(s)
        }), P.waitFor(n)
    }
    getFromCache(e, n) {
        return this.qn.getEntry(e, n)
    }
    getAllFromCache(e, n) {
        return this.qn.getEntries(e, n)
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class I1 {
    constructor(e) {
        this.persistence = e, this.Oi = new ms(n => Mc(n), kc), this.lastRemoteSnapshotVersion = ee.min(), this.highestTargetId = 0, this.Fi = 0, this.$i = new Bc, this.targetCount = 0, this.Bi = Zn.mn()
    }
    forEachTarget(e, n) {
        return this.Oi.forEach((s, r) => n(r)), P.resolve()
    }
    getLastRemoteSnapshotVersion(e) {
        return P.resolve(this.lastRemoteSnapshotVersion)
    }
    getHighestSequenceNumber(e) {
        return P.resolve(this.Fi)
    }
    allocateTargetId(e) {
        return this.highestTargetId = this.Bi.next(), P.resolve(this.highestTargetId)
    }
    setTargetsMetadata(e, n, s) {
        return s && (this.lastRemoteSnapshotVersion = s), n > this.Fi && (this.Fi = n), P.resolve()
    }
    In(e) {
        this.Oi.set(e.target, e);
        const n = e.targetId;
        n > this.highestTargetId && (this.Bi = new Zn(n), this.highestTargetId = n), e.sequenceNumber > this.Fi && (this.Fi = e.sequenceNumber)
    }
    addTargetData(e, n) {
        return this.In(n), this.targetCount += 1, P.resolve()
    }
    updateTargetData(e, n) {
        return this.In(n), P.resolve()
    }
    removeTargetData(e, n) {
        return this.Oi.delete(n.target), this.$i.Ri(n.targetId), this.targetCount -= 1, P.resolve()
    }
    removeTargets(e, n, s) {
        let r = 0;
        const i = [];
        return this.Oi.forEach((o, a) => {
            a.sequenceNumber <= n && s.get(a.targetId) === null && (this.Oi.delete(o), i.push(this.removeMatchingKeysForTargetId(e, a.targetId)), r++)
        }), P.waitFor(i).next(() => r)
    }
    getTargetCount(e) {
        return P.resolve(this.targetCount)
    }
    getTargetData(e, n) {
        const s = this.Oi.get(n) || null;
        return P.resolve(s)
    }
    addMatchingKeys(e, n, s) {
        return this.$i.Ti(n, s), P.resolve()
    }
    removeMatchingKeys(e, n, s) {
        this.$i.Ai(n, s);
        const r = this.persistence.referenceDelegate,
            i = [];
        return r && n.forEach(o => {
            i.push(r.markPotentiallyOrphaned(e, o))
        }), P.waitFor(i)
    }
    removeMatchingKeysForTargetId(e, n) {
        return this.$i.Ri(n), P.resolve()
    }
    getMatchingKeysForTargetId(e, n) {
        const s = this.$i.Pi(n);
        return P.resolve(s)
    }
    containsKey(e, n) {
        return P.resolve(this.$i.containsKey(n))
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class S1 {
    constructor(e, n) {
        this.Li = {}, this.overlays = {}, this.ts = new Dc(0), this.es = !1, this.es = !0, this.referenceDelegate = e(this), this.ls = new I1(this), this.indexManager = new o1, this.fs = function(s) {
            return new b1(s)
        }(s => this.referenceDelegate.Ui(s)), this.M = new r1(n), this.ds = new v1(this.M)
    }
    start() {
        return Promise.resolve()
    }
    shutdown() {
        return this.es = !1, Promise.resolve()
    }
    get started() {
        return this.es
    }
    setDatabaseDeletedListener() {}
    setNetworkEnabled() {}
    getIndexManager(e) {
        return this.indexManager
    }
    getDocumentOverlayCache(e) {
        let n = this.overlays[e.toKey()];
        return n || (n = new E1, this.overlays[e.toKey()] = n), n
    }
    getMutationQueue(e, n) {
        let s = this.Li[e.toKey()];
        return s || (s = new T1(n, this.referenceDelegate), this.Li[e.toKey()] = s), s
    }
    getTargetCache() {
        return this.ls
    }
    getRemoteDocumentCache() {
        return this.fs
    }
    getBundleCache() {
        return this.ds
    }
    runTransaction(e, n, s) {
        B("MemoryPersistence", "Starting transaction:", e);
        const r = new _1(this.ts.next());
        return this.referenceDelegate.qi(), s(r).next(i => this.referenceDelegate.Gi(r).next(() => i)).toPromise().then(i => (r.raiseOnCommittedEvent(), i))
    }
    Ki(e, n) {
        return P.or(Object.values(this.Li).map(s => () => s.containsKey(e, n)))
    }
}
class _1 extends t1 {
    constructor(e) {
        super(), this.currentSequenceNumber = e
    }
}
class Uc {
    constructor(e) {
        this.persistence = e, this.Qi = new Bc, this.ji = null
    }
    static Wi(e) {
        return new Uc(e)
    }
    get zi() {
        if (this.ji) return this.ji;
        throw W()
    }
    addReference(e, n, s) {
        return this.Qi.addReference(s, n), this.zi.delete(s.toString()), P.resolve()
    }
    removeReference(e, n, s) {
        return this.Qi.removeReference(s, n), this.zi.add(s.toString()), P.resolve()
    }
    markPotentiallyOrphaned(e, n) {
        return this.zi.add(n.toString()), P.resolve()
    }
    removeTarget(e, n) {
        this.Qi.Ri(n.targetId).forEach(r => this.zi.add(r.toString()));
        const s = this.persistence.getTargetCache();
        return s.getMatchingKeysForTargetId(e, n.targetId).next(r => {
            r.forEach(i => this.zi.add(i.toString()))
        }).next(() => s.removeTargetData(e, n))
    }
    qi() {
        this.ji = new Set
    }
    Gi(e) {
        const n = this.persistence.getRemoteDocumentCache().newChangeBuffer();
        return P.forEach(this.zi, s => {
            const r = H.fromPath(s);
            return this.Hi(e, r).next(i => {
                i || n.removeEntry(r, ee.min())
            })
        }).next(() => (this.ji = null, n.apply(e)))
    }
    updateLimboDocument(e, n) {
        return this.Hi(e, n).next(s => {
            s ? this.zi.delete(n.toString()) : this.zi.add(n.toString())
        })
    }
    Ui(e) {
        return 0
    }
    Hi(e, n) {
        return P.or([() => P.resolve(this.Qi.containsKey(n)), () => this.persistence.getTargetCache().containsKey(e, n), () => this.persistence.Ki(e, n)])
    }
}
class Vu {
    constructor() {
        this.activeTargetIds = qd()
    }
    Xi(e) {
        this.activeTargetIds = this.activeTargetIds.add(e)
    }
    Zi(e) {
        this.activeTargetIds = this.activeTargetIds.delete(e)
    }
    Yi() {
        const e = {
            activeTargetIds: this.activeTargetIds.toArray(),
            updateTimeMs: Date.now()
        };
        return JSON.stringify(e)
    }
}
class A1 {
    constructor() {
        this.Fr = new Vu, this.$r = {}, this.onlineStateHandler = null, this.sequenceNumberHandler = null
    }
    addPendingMutation(e) {}
    updateMutationState(e, n, s) {}
    addLocalQueryTarget(e) {
        return this.Fr.Xi(e), this.$r[e] || "not-current"
    }
    updateQueryState(e, n, s) {
        this.$r[e] = n
    }
    removeLocalQueryTarget(e) {
        this.Fr.Zi(e)
    }
    isLocalQueryTarget(e) {
        return this.Fr.activeTargetIds.has(e)
    }
    clearQueryState(e) {
        delete this.$r[e]
    }
    getAllActiveQueryTargets() {
        return this.Fr.activeTargetIds
    }
    isActiveQueryTarget(e) {
        return this.Fr.activeTargetIds.has(e)
    }
    start() {
        return this.Fr = new Vu, Promise.resolve()
    }
    handleUserChange(e, n, s) {}
    setOnlineState(e) {}
    shutdown() {}
    writeSequenceNumber(e) {}
    notifyBundleLoaded(e) {}
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class N1 {
    Br(e) {}
    shutdown() {}
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $u {
    constructor() {
        this.Lr = () => this.Ur(), this.qr = () => this.Gr(), this.Kr = [], this.Qr()
    }
    Br(e) {
        this.Kr.push(e)
    }
    shutdown() {
        window.removeEventListener("online", this.Lr), window.removeEventListener("offline", this.qr)
    }
    Qr() {
        window.addEventListener("online", this.Lr), window.addEventListener("offline", this.qr)
    }
    Ur() {
        B("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
        for (const e of this.Kr) e(0)
    }
    Gr() {
        B("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");
        for (const e of this.Kr) e(1)
    }
    static vt() {
        return typeof window != "undefined" && window.addEventListener !== void 0 && window.removeEventListener !== void 0
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const R1 = {
    BatchGetDocuments: "batchGet",
    Commit: "commit",
    RunQuery: "runQuery"
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class D1 {
    constructor(e) {
        this.jr = e.jr, this.Wr = e.Wr
    }
    zr(e) {
        this.Hr = e
    }
    Jr(e) {
        this.Yr = e
    }
    onMessage(e) {
        this.Xr = e
    }
    close() {
        this.Wr()
    }
    send(e) {
        this.jr(e)
    }
    Zr() {
        this.Hr()
    }
    eo(e) {
        this.Yr(e)
    }
    no(e) {
        this.Xr(e)
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class P1 extends class {
    constructor(e) {
        this.databaseInfo = e, this.databaseId = e.databaseId;
        const n = e.ssl ? "https" : "http";
        this.so = n + "://" + e.host, this.io = "projects/" + this.databaseId.projectId + "/databases/" + this.databaseId.database + "/documents"
    }
    ro(e, n, s, r, i) {
        const o = this.oo(e, n);
        B("RestConnection", "Sending: ", o, s);
        const a = {};
        return this.uo(a, r, i), this.ao(e, o, a, s).then(c => (B("RestConnection", "Received: ", c), c), c => {
            throw Tu("RestConnection", `${e} failed with error: `, c, "url: ", o, "request:", s), c
        })
    }
    co(e, n, s, r, i) {
        return this.ro(e, n, s, r, i)
    }
    uo(e, n, s) {
        e["X-Goog-Api-Client"] = "gl-js/ fire/" + ds, e["Content-Type"] = "text/plain", this.databaseInfo.appId && (e["X-Firebase-GMPID"] = this.databaseInfo.appId), n && n.headers.forEach((r, i) => e[i] = r), s && s.headers.forEach((r, i) => e[i] = r)
    }
    oo(e, n) {
        const s = R1[e];
        return `${this.so}/v1/${n}:${s}`
    }
} {
    constructor(e) {
        super(e), this.forceLongPolling = e.forceLongPolling, this.autoDetectLongPolling = e.autoDetectLongPolling, this.useFetchStreams = e.useFetchStreams
    }
    ao(e, n, s, r) {
        return new Promise((i, o) => {
            const a = new Vv;
            a.listenOnce(Fv.COMPLETE, () => {
                try {
                    switch (a.getLastErrorCode()) {
                        case Ao.NO_ERROR:
                            const l = a.getResponseJson();
                            B("Connection", "XHR received:", JSON.stringify(l)), i(l);
                            break;
                        case Ao.TIMEOUT:
                            B("Connection", 'RPC "' + e + '" timed out'), o(new q(S.DEADLINE_EXCEEDED, "Request time out"));
                            break;
                        case Ao.HTTP_ERROR:
                            const u = a.getStatus();
                            if (B("Connection", 'RPC "' + e + '" failed with status:', u, "response text:", a.getResponseText()), u > 0) {
                                const h = a.getResponseJson().error;
                                if (h && h.status && h.message) {
                                    const f = function(g) {
                                        const m = g.toLowerCase().replace(/_/g, "-");
                                        return Object.values(S).indexOf(m) >= 0 ? m : S.UNKNOWN
                                    }(h.status);
                                    o(new q(f, h.message))
                                } else o(new q(S.UNKNOWN, "Server responded with status " + a.getStatus()))
                            } else o(new q(S.UNAVAILABLE, "Connection failed."));
                            break;
                        default:
                            W()
                    }
                } finally {
                    B("Connection", 'RPC "' + e + '" completed.')
                }
            });
            const c = JSON.stringify(r);
            a.send(n, "POST", c, s, 15)
        })
    }
    ho(e, n, s) {
        const r = [this.so, "/", "google.firestore.v1.Firestore", "/", e, "/channel"],
            i = Lv(),
            o = Ov(),
            a = {
                httpSessionIdParam: "gsessionid",
                initMessageHeaders: {},
                messageUrlParams: {
                    database: `projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`
                },
                sendRawJson: !0,
                supportsCrossDomainXhr: !0,
                internalChannelParams: {
                    forwardChannelRequestTimeoutMs: 6e5
                },
                forceLongPolling: this.forceLongPolling,
                detectBufferingProxy: this.autoDetectLongPolling
            };
        this.useFetchStreams && (a.xmlHttpFactory = new Uv({})), this.uo(a.initMessageHeaders, n, s), C0() || S0() || _0() || A0() || N0() || I0() || (a.httpHeadersOverwriteParam = "$httpHeaders");
        const c = r.join("");
        B("Connection", "Creating WebChannel: " + c, a);
        const l = i.createWebChannel(c, a);
        let u = !1,
            h = !1;
        const f = new D1({
                jr: m => {
                    h ? B("Connection", "Not sending because WebChannel is closed:", m) : (u || (B("Connection", "Opening WebChannel transport."), l.open(), u = !0), B("Connection", "WebChannel sending:", m), l.send(m))
                },
                Wr: () => l.close()
            }),
            g = (m, w, C) => {
                m.listen(w, v => {
                    try {
                        C(v)
                    } catch (_) {
                        setTimeout(() => {
                            throw _
                        }, 0)
                    }
                })
            };
        return g(l, Rr.EventType.OPEN, () => {
            h || B("Connection", "WebChannel transport opened.")
        }), g(l, Rr.EventType.CLOSE, () => {
            h || (h = !0, B("Connection", "WebChannel transport closed"), f.eo())
        }), g(l, Rr.EventType.ERROR, m => {
            h || (h = !0, Tu("Connection", "WebChannel transport errored:", m), f.eo(new q(S.UNAVAILABLE, "The operation could not be completed")))
        }), g(l, Rr.EventType.MESSAGE, m => {
            var w;
            if (!h) {
                const C = m.data[0];
                ye(!!C);
                const v = C,
                    _ = v.error || ((w = v[0]) === null || w === void 0 ? void 0 : w.error);
                if (_) {
                    B("Connection", "WebChannel received error:", _);
                    const R = _.status;
                    let A = function(X) {
                            const U = Se[X];
                            if (U !== void 0) return Kd(U)
                        }(R),
                        K = _.message;
                    A === void 0 && (A = S.INTERNAL, K = "Unknown error status: " + R + " with message " + _.message), h = !0, f.eo(new q(A, K)), l.close()
                } else B("Connection", "WebChannel received:", C), f.no(C)
            }
        }), g(o, Bv.STAT_EVENT, m => {
            m.stat === wu.PROXY ? B("Connection", "Detected buffering proxy") : m.stat === wu.NOPROXY && B("Connection", "Detected no buffering proxy")
        }), setTimeout(() => {
            f.Zr()
        }, 0), f
    }
}

function Do() {
    return typeof document != "undefined" ? document : null
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function eo(t) {
    return new UE(t, !0)
}
class tg {
    constructor(e, n, s = 1e3, r = 1.5, i = 6e4) {
        this.Jn = e, this.timerId = n, this.lo = s, this.fo = r, this._o = i, this.wo = 0, this.mo = null, this.yo = Date.now(), this.reset()
    }
    reset() {
        this.wo = 0
    }
    po() {
        this.wo = this._o
    }
    Io(e) {
        this.cancel();
        const n = Math.floor(this.wo + this.To()),
            s = Math.max(0, Date.now() - this.yo),
            r = Math.max(0, n - s);
        r > 0 && B("ExponentialBackoff", `Backing off for ${r} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`), this.mo = this.Jn.enqueueAfterDelay(this.timerId, r, () => (this.yo = Date.now(), e())), this.wo *= this.fo, this.wo < this.lo && (this.wo = this.lo), this.wo > this._o && (this.wo = this._o)
    }
    Eo() {
        this.mo !== null && (this.mo.skipDelay(), this.mo = null)
    }
    cancel() {
        this.mo !== null && (this.mo.cancel(), this.mo = null)
    }
    To() {
        return (Math.random() - .5) * this.wo
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ng {
    constructor(e, n, s, r, i, o, a, c) {
        this.Jn = e, this.Ao = s, this.Ro = r, this.bo = i, this.authCredentialsProvider = o, this.appCheckCredentialsProvider = a, this.listener = c, this.state = 0, this.Po = 0, this.Vo = null, this.vo = null, this.stream = null, this.So = new tg(e, n)
    }
    Do() {
        return this.state === 1 || this.state === 5 || this.Co()
    }
    Co() {
        return this.state === 2 || this.state === 3
    }
    start() {
        this.state !== 4 ? this.auth() : this.xo()
    }
    async stop() {
        this.Do() && await this.close(0)
    }
    No() {
        this.state = 0, this.So.reset()
    }
    ko() {
        this.Co() && this.Vo === null && (this.Vo = this.Jn.enqueueAfterDelay(this.Ao, 6e4, () => this.Mo()))
    }
    Oo(e) {
        this.Fo(), this.stream.send(e)
    }
    async Mo() {
        if (this.Co()) return this.close(0)
    }
    Fo() {
        this.Vo && (this.Vo.cancel(), this.Vo = null)
    }
    $o() {
        this.vo && (this.vo.cancel(), this.vo = null)
    }
    async close(e, n) {
        this.Fo(), this.$o(), this.So.cancel(), this.Po++, e !== 4 ? this.So.reset() : n && n.code === S.RESOURCE_EXHAUSTED ? (Yt(n.toString()), Yt("Using maximum backoff delay to prevent overloading the backend."), this.So.po()) : n && n.code === S.UNAUTHENTICATED && this.state !== 3 && (this.authCredentialsProvider.invalidateToken(), this.appCheckCredentialsProvider.invalidateToken()), this.stream !== null && (this.Bo(), this.stream.close(), this.stream = null), this.state = e, await this.listener.Jr(n)
    }
    Bo() {}
    auth() {
        this.state = 1;
        const e = this.Lo(this.Po),
            n = this.Po;
        Promise.all([this.authCredentialsProvider.getToken(), this.appCheckCredentialsProvider.getToken()]).then(([s, r]) => {
            this.Po === n && this.Uo(s, r)
        }, s => {
            e(() => {
                const r = new q(S.UNKNOWN, "Fetching auth token failed: " + s.message);
                return this.qo(r)
            })
        })
    }
    Uo(e, n) {
        const s = this.Lo(this.Po);
        this.stream = this.Go(e, n), this.stream.zr(() => {
            s(() => (this.state = 2, this.vo = this.Jn.enqueueAfterDelay(this.Ro, 1e4, () => (this.Co() && (this.state = 3), Promise.resolve())), this.listener.zr()))
        }), this.stream.Jr(r => {
            s(() => this.qo(r))
        }), this.stream.onMessage(r => {
            s(() => this.onMessage(r))
        })
    }
    xo() {
        this.state = 5, this.So.Io(async () => {
            this.state = 0, this.start()
        })
    }
    qo(e) {
        return B("PersistentStream", `close with error: ${e}`), this.stream = null, this.close(4, e)
    }
    Lo(e) {
        return n => {
            this.Jn.enqueueAndForget(() => this.Po === e ? n() : (B("PersistentStream", "stream callback skipped by getCloseGuardedDispatcher."), Promise.resolve()))
        }
    }
}
class M1 extends ng {
    constructor(e, n, s, r, i, o) {
        super(e, "listen_stream_connection_backoff", "listen_stream_idle", "health_check_timeout", n, s, r, o), this.M = i
    }
    Go(e, n) {
        return this.bo.ho("Listen", e, n)
    }
    onMessage(e) {
        this.So.reset();
        const n = jE(this.M, e),
            s = function(r) {
                if (!("targetChange" in r)) return ee.min();
                const i = r.targetChange;
                return i.targetIds && i.targetIds.length ? ee.min() : i.readTime ? kt(i.readTime) : ee.min()
            }(e);
        return this.listener.Ko(n, s)
    }
    Qo(e) {
        const n = {};
        n.database = _a(this.M), n.addTarget = function(r, i) {
            let o;
            const a = i.target;
            return o = Ea(a) ? {
                documents: qE(r, a)
            } : {
                query: zE(r, a)
            }, o.targetId = i.targetId, i.resumeToken.approximateByteSize() > 0 ? o.resumeToken = Wd(r, i.resumeToken) : i.snapshotVersion.compareTo(ee.min()) > 0 && (o.readTime = mi(r, i.snapshotVersion.toTimestamp())), o
        }(this.M, e);
        const s = WE(this.M, e);
        s && (n.labels = s), this.Oo(n)
    }
    jo(e) {
        const n = {};
        n.database = _a(this.M), n.removeTarget = e, this.Oo(n)
    }
}
class k1 extends ng {
    constructor(e, n, s, r, i, o) {
        super(e, "write_stream_connection_backoff", "write_stream_idle", "health_check_timeout", n, s, r, o), this.M = i, this.Wo = !1
    }
    get zo() {
        return this.Wo
    }
    start() {
        this.Wo = !1, this.lastStreamToken = void 0, super.start()
    }
    Bo() {
        this.Wo && this.Ho([])
    }
    Go(e, n) {
        return this.bo.ho("Write", e, n)
    }
    onMessage(e) {
        if (ye(!!e.streamToken), this.lastStreamToken = e.streamToken, this.Wo) {
            this.So.reset();
            const n = KE(e.writeResults, e.commitTime),
                s = kt(e.commitTime);
            return this.listener.Jo(s, n)
        }
        return ye(!e.writeResults || e.writeResults.length === 0), this.Wo = !0, this.listener.Yo()
    }
    Xo() {
        const e = {};
        e.database = _a(this.M), this.Oo(e)
    }
    Ho(e) {
        const n = {
            streamToken: this.lastStreamToken,
            writes: e.map(s => HE(this.M, s))
        };
        this.Oo(n)
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class x1 extends class {} {
    constructor(e, n, s, r) {
        super(), this.authCredentials = e, this.appCheckCredentials = n, this.bo = s, this.M = r, this.Zo = !1
    }
    tu() {
        if (this.Zo) throw new q(S.FAILED_PRECONDITION, "The client has already been terminated.")
    }
    ro(e, n, s) {
        return this.tu(), Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()]).then(([r, i]) => this.bo.ro(e, n, s, r, i)).catch(r => {
            throw r.name === "FirebaseError" ? (r.code === S.UNAUTHENTICATED && (this.authCredentials.invalidateToken(), this.appCheckCredentials.invalidateToken()), r) : new q(S.UNKNOWN, r.toString())
        })
    }
    co(e, n, s) {
        return this.tu(), Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()]).then(([r, i]) => this.bo.co(e, n, s, r, i)).catch(r => {
            throw r.name === "FirebaseError" ? (r.code === S.UNAUTHENTICATED && (this.authCredentials.invalidateToken(), this.appCheckCredentials.invalidateToken()), r) : new q(S.UNKNOWN, r.toString())
        })
    }
    terminate() {
        this.Zo = !0
    }
}
class L1 {
    constructor(e, n) {
        this.asyncQueue = e, this.onlineStateHandler = n, this.state = "Unknown", this.eu = 0, this.nu = null, this.su = !0
    }
    iu() {
        this.eu === 0 && (this.ru("Unknown"), this.nu = this.asyncQueue.enqueueAfterDelay("online_state_timeout", 1e4, () => (this.nu = null, this.ou("Backend didn't respond within 10 seconds."), this.ru("Offline"), Promise.resolve())))
    }
    uu(e) {
        this.state === "Online" ? this.ru("Unknown") : (this.eu++, this.eu >= 1 && (this.au(), this.ou(`Connection failed 1 times. Most recent error: ${e.toString()}`), this.ru("Offline")))
    }
    set(e) {
        this.au(), this.eu = 0, e === "Online" && (this.su = !1), this.ru(e)
    }
    ru(e) {
        e !== this.state && (this.state = e, this.onlineStateHandler(e))
    }
    ou(e) {
        const n = `Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;
        this.su ? (Yt(n), this.su = !1) : B("OnlineStateTracker", n)
    }
    au() {
        this.nu !== null && (this.nu.cancel(), this.nu = null)
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class O1 {
    constructor(e, n, s, r, i) {
        this.localStore = e, this.datastore = n, this.asyncQueue = s, this.remoteSyncer = {}, this.cu = [], this.hu = new Map, this.lu = new Set, this.fu = [], this.du = i, this.du.Br(o => {
            s.enqueueAndForget(async () => {
                Cn(this) && (B("RemoteStore", "Restarting streams for network reachability change."), await async function(a) {
                    const c = Q(a);
                    c.lu.add(4), await wr(c), c._u.set("Unknown"), c.lu.delete(4), await to(c)
                }(this))
            })
        }), this._u = new L1(s, r)
    }
}
async function to(t) {
    if (Cn(t))
        for (const e of t.fu) await e(!0)
}
async function wr(t) {
    for (const e of t.fu) await e(!1)
}

function sg(t, e) {
    const n = Q(t);
    n.hu.has(e.targetId) || (n.hu.set(e.targetId, e), jc(n) ? $c(n) : ys(n).Co() && Vc(n, e))
}

function rg(t, e) {
    const n = Q(t),
        s = ys(n);
    n.hu.delete(e), s.Co() && ig(n, e), n.hu.size === 0 && (s.Co() ? s.ko() : Cn(n) && n._u.set("Unknown"))
}

function Vc(t, e) {
    t.wu.Z(e.targetId), ys(t).Qo(e)
}

function ig(t, e) {
    t.wu.Z(e), ys(t).jo(e)
}

function $c(t) {
    t.wu = new OE({
        getRemoteKeysForTarget: e => t.remoteSyncer.getRemoteKeysForTarget(e),
        Et: e => t.hu.get(e) || null
    }), ys(t).start(), t._u.iu()
}

function jc(t) {
    return Cn(t) && !ys(t).Do() && t.hu.size > 0
}

function Cn(t) {
    return Q(t).lu.size === 0
}

function og(t) {
    t.wu = void 0
}
async function F1(t) {
    t.hu.forEach((e, n) => {
        Vc(t, e)
    })
}
async function B1(t, e) {
    og(t), jc(t) ? (t._u.uu(e), $c(t)) : t._u.set("Unknown")
}
async function U1(t, e, n) {
    if (t._u.set("Online"), e instanceof Gd && e.state === 2 && e.cause) try {
        await async function(s, r) {
            const i = r.cause;
            for (const o of r.targetIds) s.hu.has(o) && (await s.remoteSyncer.rejectListen(o, i), s.hu.delete(o), s.wu.removeTarget(o))
        }(t, e)
    } catch (s) {
        B("RemoteStore", "Failed to remove targets %s: %s ", e.targetIds.join(","), s), await yi(t, s)
    } else if (e instanceof Hr ? t.wu.ut(e) : e instanceof zd ? t.wu._t(e) : t.wu.ht(e), !n.isEqual(ee.min())) try {
        const s = await eg(t.localStore);
        n.compareTo(s) >= 0 && await
        function(r, i) {
            const o = r.wu.yt(i);
            return o.targetChanges.forEach((a, c) => {
                if (a.resumeToken.approximateByteSize() > 0) {
                    const l = r.hu.get(c);
                    l && r.hu.set(c, l.withResumeToken(a.resumeToken, i))
                }
            }), o.targetMismatches.forEach(a => {
                const c = r.hu.get(a);
                if (!c) return;
                r.hu.set(a, c.withResumeToken(je.EMPTY_BYTE_STRING, c.snapshotVersion)), ig(r, a);
                const l = new gn(c.target, a, 1, c.sequenceNumber);
                Vc(r, l)
            }), r.remoteSyncer.applyRemoteEvent(o)
        }(t, n)
    } catch (s) {
        B("RemoteStore", "Failed to raise snapshot:", s), await yi(t, s)
    }
}
async function yi(t, e, n) {
    if (!mr(e)) throw e;
    t.lu.add(1), await wr(t), t._u.set("Offline"), n || (n = () => eg(t.localStore)), t.asyncQueue.enqueueRetryable(async () => {
        B("RemoteStore", "Retrying IndexedDB access"), await n(), t.lu.delete(1), await to(t)
    })
}

function ag(t, e) {
    return e().catch(n => yi(t, n, e))
}
async function no(t) {
    const e = Q(t),
        n = Qt(e);
    let s = e.cu.length > 0 ? e.cu[e.cu.length - 1].batchId : -1;
    for (; V1(e);) try {
        const r = await m1(e.localStore, s);
        if (r === null) {
            e.cu.length === 0 && n.ko();
            break
        }
        s = r.batchId, $1(e, r)
    } catch (r) {
        await yi(e, r)
    }
    cg(e) && lg(e)
}

function V1(t) {
    return Cn(t) && t.cu.length < 10
}

function $1(t, e) {
    t.cu.push(e);
    const n = Qt(t);
    n.Co() && n.zo && n.Ho(e.mutations)
}

function cg(t) {
    return Cn(t) && !Qt(t).Do() && t.cu.length > 0
}

function lg(t) {
    Qt(t).start()
}
async function j1(t) {
    Qt(t).Xo()
}
async function H1(t) {
    const e = Qt(t);
    for (const n of t.cu) e.Ho(n.mutations)
}
async function K1(t, e, n) {
    const s = t.cu.shift(),
        r = Oc.from(s, e, n);
    await ag(t, () => t.remoteSyncer.applySuccessfulWrite(r)), await no(t)
}
async function q1(t, e) {
    e && Qt(t).zo && await async function(n, s) {
        if (r = s.code, DE(r) && r !== S.ABORTED) {
            const i = n.cu.shift();
            Qt(n).No(), await ag(n, () => n.remoteSyncer.rejectFailedWrite(i.batchId, s)), await no(n)
        }
        var r
    }(t, e), cg(t) && lg(t)
}
async function ju(t, e) {
    const n = Q(t);
    n.asyncQueue.verifyOperationInProgress(), B("RemoteStore", "RemoteStore received new credentials");
    const s = Cn(n);
    n.lu.add(3), await wr(n), s && n._u.set("Unknown"), await n.remoteSyncer.handleCredentialChange(e), n.lu.delete(3), await to(n)
}
async function z1(t, e) {
    const n = Q(t);
    e ? (n.lu.delete(2), await to(n)) : e || (n.lu.add(2), await wr(n), n._u.set("Unknown"))
}

function ys(t) {
    return t.mu || (t.mu = function(e, n, s) {
        const r = Q(e);
        return r.tu(), new M1(n, r.bo, r.authCredentials, r.appCheckCredentials, r.M, s)
    }(t.datastore, t.asyncQueue, {
        zr: F1.bind(null, t),
        Jr: B1.bind(null, t),
        Ko: U1.bind(null, t)
    }), t.fu.push(async e => {
        e ? (t.mu.No(), jc(t) ? $c(t) : t._u.set("Unknown")) : (await t.mu.stop(), og(t))
    })), t.mu
}

function Qt(t) {
    return t.gu || (t.gu = function(e, n, s) {
        const r = Q(e);
        return r.tu(), new k1(n, r.bo, r.authCredentials, r.appCheckCredentials, r.M, s)
    }(t.datastore, t.asyncQueue, {
        zr: j1.bind(null, t),
        Jr: q1.bind(null, t),
        Yo: H1.bind(null, t),
        Jo: K1.bind(null, t)
    }), t.fu.push(async e => {
        e ? (t.gu.No(), await no(t)) : (await t.gu.stop(), t.cu.length > 0 && (B("RemoteStore", `Stopping write stream with ${t.cu.length} pending writes`), t.cu = []))
    })), t.gu
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hc {
    constructor(e, n, s, r, i) {
        this.asyncQueue = e, this.timerId = n, this.targetTimeMs = s, this.op = r, this.removalCallback = i, this.deferred = new zt, this.then = this.deferred.promise.then.bind(this.deferred.promise), this.deferred.promise.catch(o => {})
    }
    static createAndSchedule(e, n, s, r, i) {
        const o = Date.now() + s,
            a = new Hc(e, n, o, r, i);
        return a.start(s), a
    }
    start(e) {
        this.timerHandle = setTimeout(() => this.handleDelayElapsed(), e)
    }
    skipDelay() {
        return this.handleDelayElapsed()
    }
    cancel(e) {
        this.timerHandle !== null && (this.clearTimeout(), this.deferred.reject(new q(S.CANCELLED, "Operation cancelled" + (e ? ": " + e : ""))))
    }
    handleDelayElapsed() {
        this.asyncQueue.enqueueAndForget(() => this.timerHandle !== null ? (this.clearTimeout(), this.op().then(e => this.deferred.resolve(e))) : Promise.resolve())
    }
    clearTimeout() {
        this.timerHandle !== null && (this.removalCallback(this), clearTimeout(this.timerHandle), this.timerHandle = null)
    }
}

function Kc(t, e) {
    if (Yt("AsyncQueue", `${e}: ${t}`), mr(t)) return new q(S.UNAVAILABLE, `${e}: ${t}`);
    throw t
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jn {
    constructor(e) {
        this.comparator = e ? (n, s) => e(n, s) || H.comparator(n.key, s.key) : (n, s) => H.comparator(n.key, s.key), this.keyedMap = Ca(), this.sortedSet = new Oe(this.comparator)
    }
    static emptySet(e) {
        return new jn(e.comparator)
    }
    has(e) {
        return this.keyedMap.get(e) != null
    }
    get(e) {
        return this.keyedMap.get(e)
    }
    first() {
        return this.sortedSet.minKey()
    }
    last() {
        return this.sortedSet.maxKey()
    }
    isEmpty() {
        return this.sortedSet.isEmpty()
    }
    indexOf(e) {
        const n = this.keyedMap.get(e);
        return n ? this.sortedSet.indexOf(n) : -1
    }
    get size() {
        return this.sortedSet.size
    }
    forEach(e) {
        this.sortedSet.inorderTraversal((n, s) => (e(n), !1))
    }
    add(e) {
        const n = this.delete(e.key);
        return n.copy(n.keyedMap.insert(e.key, e), n.sortedSet.insert(e, null))
    }
    delete(e) {
        const n = this.get(e);
        return n ? this.copy(this.keyedMap.remove(e), this.sortedSet.remove(n)) : this
    }
    isEqual(e) {
        if (!(e instanceof jn) || this.size !== e.size) return !1;
        const n = this.sortedSet.getIterator(),
            s = e.sortedSet.getIterator();
        for (; n.hasNext();) {
            const r = n.getNext().key,
                i = s.getNext().key;
            if (!r.isEqual(i)) return !1
        }
        return !0
    }
    toString() {
        const e = [];
        return this.forEach(n => {
            e.push(n.toString())
        }), e.length === 0 ? "DocumentSet ()" : `DocumentSet (
  ` + e.join(`  
`) + `
)`
    }
    copy(e, n) {
        const s = new jn;
        return s.comparator = this.comparator, s.keyedMap = e, s.sortedSet = n, s
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hu {
    constructor() {
        this.yu = new Oe(H.comparator)
    }
    track(e) {
        const n = e.doc.key,
            s = this.yu.get(n);
        s ? e.type !== 0 && s.type === 3 ? this.yu = this.yu.insert(n, e) : e.type === 3 && s.type !== 1 ? this.yu = this.yu.insert(n, {
            type: s.type,
            doc: e.doc
        }) : e.type === 2 && s.type === 2 ? this.yu = this.yu.insert(n, {
            type: 2,
            doc: e.doc
        }) : e.type === 2 && s.type === 0 ? this.yu = this.yu.insert(n, {
            type: 0,
            doc: e.doc
        }) : e.type === 1 && s.type === 0 ? this.yu = this.yu.remove(n) : e.type === 1 && s.type === 2 ? this.yu = this.yu.insert(n, {
            type: 1,
            doc: s.doc
        }) : e.type === 0 && s.type === 1 ? this.yu = this.yu.insert(n, {
            type: 2,
            doc: e.doc
        }) : W() : this.yu = this.yu.insert(n, e)
    }
    pu() {
        const e = [];
        return this.yu.inorderTraversal((n, s) => {
            e.push(s)
        }), e
    }
}
class es {
    constructor(e, n, s, r, i, o, a, c) {
        this.query = e, this.docs = n, this.oldDocs = s, this.docChanges = r, this.mutatedKeys = i, this.fromCache = o, this.syncStateChanged = a, this.excludesMetadataChanges = c
    }
    static fromInitialDocuments(e, n, s, r) {
        const i = [];
        return n.forEach(o => {
            i.push({
                type: 0,
                doc: o
            })
        }), new es(e, n, jn.emptySet(n), i, s, r, !0, !1)
    }
    get hasPendingWrites() {
        return !this.mutatedKeys.isEmpty()
    }
    isEqual(e) {
        if (!(this.fromCache === e.fromCache && this.syncStateChanged === e.syncStateChanged && this.mutatedKeys.isEqual(e.mutatedKeys) && Yi(this.query, e.query) && this.docs.isEqual(e.docs) && this.oldDocs.isEqual(e.oldDocs))) return !1;
        const n = this.docChanges,
            s = e.docChanges;
        if (n.length !== s.length) return !1;
        for (let r = 0; r < n.length; r++)
            if (n[r].type !== s[r].type || !n[r].doc.isEqual(s[r].doc)) return !1;
        return !0
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class G1 {
    constructor() {
        this.Iu = void 0, this.listeners = []
    }
}
class W1 {
    constructor() {
        this.queries = new ms(e => Ld(e), Yi), this.onlineState = "Unknown", this.Tu = new Set
    }
}
async function Y1(t, e) {
    const n = Q(t),
        s = e.query;
    let r = !1,
        i = n.queries.get(s);
    if (i || (r = !0, i = new G1), r) try {
        i.Iu = await n.onListen(s)
    } catch (o) {
        const a = Kc(o, `Initialization of query '${Ta(e.query)}' failed`);
        return void e.onError(a)
    }
    n.queries.set(s, i), i.listeners.push(e), e.Eu(n.onlineState), i.Iu && e.Au(i.Iu) && qc(n)
}
async function X1(t, e) {
    const n = Q(t),
        s = e.query;
    let r = !1;
    const i = n.queries.get(s);
    if (i) {
        const o = i.listeners.indexOf(e);
        o >= 0 && (i.listeners.splice(o, 1), r = i.listeners.length === 0)
    }
    if (r) return n.queries.delete(s), n.onUnlisten(s)
}

function Q1(t, e) {
    const n = Q(t);
    let s = !1;
    for (const r of e) {
        const i = r.query,
            o = n.queries.get(i);
        if (o) {
            for (const a of o.listeners) a.Au(r) && (s = !0);
            o.Iu = r
        }
    }
    s && qc(n)
}

function J1(t, e, n) {
    const s = Q(t),
        r = s.queries.get(e);
    if (r)
        for (const i of r.listeners) i.onError(n);
    s.queries.delete(e)
}

function qc(t) {
    t.Tu.forEach(e => {
        e.next()
    })
}
class Z1 {
    constructor(e, n, s) {
        this.query = e, this.Ru = n, this.bu = !1, this.Pu = null, this.onlineState = "Unknown", this.options = s || {}
    }
    Au(e) {
        if (!this.options.includeMetadataChanges) {
            const s = [];
            for (const r of e.docChanges) r.type !== 3 && s.push(r);
            e = new es(e.query, e.docs, e.oldDocs, s, e.mutatedKeys, e.fromCache, e.syncStateChanged, !0)
        }
        let n = !1;
        return this.bu ? this.Vu(e) && (this.Ru.next(e), n = !0) : this.vu(e, this.onlineState) && (this.Su(e), n = !0), this.Pu = e, n
    }
    onError(e) {
        this.Ru.error(e)
    }
    Eu(e) {
        this.onlineState = e;
        let n = !1;
        return this.Pu && !this.bu && this.vu(this.Pu, e) && (this.Su(this.Pu), n = !0), n
    }
    vu(e, n) {
        if (!e.fromCache) return !0;
        const s = n !== "Offline";
        return (!this.options.Du || !s) && (!e.docs.isEmpty() || n === "Offline")
    }
    Vu(e) {
        if (e.docChanges.length > 0) return !0;
        const n = this.Pu && this.Pu.hasPendingWrites !== e.hasPendingWrites;
        return !(!e.syncStateChanged && !n) && this.options.includeMetadataChanges === !0
    }
    Su(e) {
        e = es.fromInitialDocuments(e.query, e.docs, e.mutatedKeys, e.fromCache), this.bu = !0, this.Ru.next(e)
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ug {
    constructor(e) {
        this.key = e
    }
}
class hg {
    constructor(e) {
        this.key = e
    }
}
class eT {
    constructor(e, n) {
        this.query = e, this.Fu = n, this.$u = null, this.current = !1, this.Bu = Ee(), this.mutatedKeys = Ee(), this.Lu = Od(e), this.Uu = new jn(this.Lu)
    }
    get qu() {
        return this.Fu
    }
    Gu(e, n) {
        const s = n ? n.Ku : new Hu,
            r = n ? n.Uu : this.Uu;
        let i = n ? n.mutatedKeys : this.mutatedKeys,
            o = r,
            a = !1;
        const c = $r(this.query) && r.size === this.query.limit ? r.last() : null,
            l = di(this.query) && r.size === this.query.limit ? r.first() : null;
        if (e.inorderTraversal((u, h) => {
                const f = r.get(u),
                    g = xc(this.query, h) ? h : null,
                    m = !!f && this.mutatedKeys.has(f.key),
                    w = !!g && (g.hasLocalMutations || this.mutatedKeys.has(g.key) && g.hasCommittedMutations);
                let C = !1;
                f && g ? f.data.isEqual(g.data) ? m !== w && (s.track({
                    type: 3,
                    doc: g
                }), C = !0) : this.Qu(f, g) || (s.track({
                    type: 2,
                    doc: g
                }), C = !0, (c && this.Lu(g, c) > 0 || l && this.Lu(g, l) < 0) && (a = !0)) : !f && g ? (s.track({
                    type: 0,
                    doc: g
                }), C = !0) : f && !g && (s.track({
                    type: 1,
                    doc: f
                }), C = !0, (c || l) && (a = !0)), C && (g ? (o = o.add(g), i = w ? i.add(u) : i.delete(u)) : (o = o.delete(u), i = i.delete(u)))
            }), $r(this.query) || di(this.query))
            for (; o.size > this.query.limit;) {
                const u = $r(this.query) ? o.last() : o.first();
                o = o.delete(u.key), i = i.delete(u.key), s.track({
                    type: 1,
                    doc: u
                })
            }
        return {
            Uu: o,
            Ku: s,
            ei: a,
            mutatedKeys: i
        }
    }
    Qu(e, n) {
        return e.hasLocalMutations && n.hasCommittedMutations && !n.hasLocalMutations
    }
    applyChanges(e, n, s) {
        const r = this.Uu;
        this.Uu = e.Uu, this.mutatedKeys = e.mutatedKeys;
        const i = e.Ku.pu();
        i.sort((l, u) => function(h, f) {
            const g = m => {
                switch (m) {
                    case 0:
                        return 1;
                    case 2:
                    case 3:
                        return 2;
                    case 1:
                        return 0;
                    default:
                        return W()
                }
            };
            return g(h) - g(f)
        }(l.type, u.type) || this.Lu(l.doc, u.doc)), this.ju(s);
        const o = n ? this.Wu() : [],
            a = this.Bu.size === 0 && this.current ? 1 : 0,
            c = a !== this.$u;
        return this.$u = a, i.length !== 0 || c ? {
            snapshot: new es(this.query, e.Uu, r, i, e.mutatedKeys, a === 0, c, !1),
            zu: o
        } : {
            zu: o
        }
    }
    Eu(e) {
        return this.current && e === "Offline" ? (this.current = !1, this.applyChanges({
            Uu: this.Uu,
            Ku: new Hu,
            mutatedKeys: this.mutatedKeys,
            ei: !1
        }, !1)) : {
            zu: []
        }
    }
    Hu(e) {
        return !this.Fu.has(e) && !!this.Uu.has(e) && !this.Uu.get(e).hasLocalMutations
    }
    ju(e) {
        e && (e.addedDocuments.forEach(n => this.Fu = this.Fu.add(n)), e.modifiedDocuments.forEach(n => {}), e.removedDocuments.forEach(n => this.Fu = this.Fu.delete(n)), this.current = e.current)
    }
    Wu() {
        if (!this.current) return [];
        const e = this.Bu;
        this.Bu = Ee(), this.Uu.forEach(s => {
            this.Hu(s.key) && (this.Bu = this.Bu.add(s.key))
        });
        const n = [];
        return e.forEach(s => {
            this.Bu.has(s) || n.push(new hg(s))
        }), this.Bu.forEach(s => {
            e.has(s) || n.push(new ug(s))
        }), n
    }
    Ju(e) {
        this.Fu = e.hi, this.Bu = Ee();
        const n = this.Gu(e.documents);
        return this.applyChanges(n, !0)
    }
    Yu() {
        return es.fromInitialDocuments(this.query, this.Uu, this.mutatedKeys, this.$u === 0)
    }
}
class tT {
    constructor(e, n, s) {
        this.query = e, this.targetId = n, this.view = s
    }
}
class nT {
    constructor(e) {
        this.key = e, this.Xu = !1
    }
}
class sT {
    constructor(e, n, s, r, i, o) {
        this.localStore = e, this.remoteStore = n, this.eventManager = s, this.sharedClientState = r, this.currentUser = i, this.maxConcurrentLimboResolutions = o, this.Zu = {}, this.ta = new ms(a => Ld(a), Yi), this.ea = new Map, this.na = new Set, this.sa = new Oe(H.comparator), this.ia = new Map, this.ra = new Bc, this.oa = {}, this.ua = new Map, this.aa = Zn.gn(), this.onlineState = "Unknown", this.ca = void 0
    }
    get isPrimaryClient() {
        return this.ca === !0
    }
}
async function rT(t, e) {
    const n = gT(t);
    let s, r;
    const i = n.ta.get(e);
    if (i) s = i.targetId, n.sharedClientState.addLocalQueryTarget(s), r = i.view.Yu();
    else {
        const o = await y1(n.localStore, En(e));
        n.isPrimaryClient && sg(n.remoteStore, o);
        const a = n.sharedClientState.addLocalQueryTarget(o.targetId);
        s = o.targetId, r = await iT(n, e, s, a === "current")
    }
    return r
}
async function iT(t, e, n, s) {
    t.ha = (u, h, f) => async function(g, m, w, C) {
        let v = m.view.Gu(w);
        v.ei && (v = await Uu(g.localStore, m.query, !1).then(({
            documents: A
        }) => m.view.Gu(A, v)));
        const _ = C && C.targetChanges.get(m.targetId),
            R = m.view.applyChanges(v, g.isPrimaryClient, _);
        return qu(g, m.targetId, R.zu), R.snapshot
    }(t, u, h, f);
    const r = await Uu(t.localStore, e, !0),
        i = new eT(e, r.hi),
        o = i.Gu(r.documents),
        a = pr.createSynthesizedTargetChangeForCurrentChange(n, s && t.onlineState !== "Offline"),
        c = i.applyChanges(o, t.isPrimaryClient, a);
    qu(t, n, c.zu);
    const l = new tT(e, n, i);
    return t.ta.set(e, l), t.ea.has(n) ? t.ea.get(n).push(e) : t.ea.set(n, [e]), c.snapshot
}
async function oT(t, e) {
    const n = Q(t),
        s = n.ta.get(e),
        r = n.ea.get(s.targetId);
    if (r.length > 1) return n.ea.set(s.targetId, r.filter(i => !Yi(i, e))), void n.ta.delete(e);
    n.isPrimaryClient ? (n.sharedClientState.removeLocalQueryTarget(s.targetId), n.sharedClientState.isActiveQueryTarget(s.targetId) || await Aa(n.localStore, s.targetId, !1).then(() => {
        n.sharedClientState.clearQueryState(s.targetId), rg(n.remoteStore, s.targetId), Na(n, s.targetId)
    }).catch(yr)) : (Na(n, s.targetId), await Aa(n.localStore, s.targetId, !0))
}
async function aT(t, e, n) {
    const s = pT(t);
    try {
        const r = await
        function(i, o) {
            const a = Q(i),
                c = ze.now(),
                l = o.reduce((h, f) => h.add(f.key), Ee());
            let u;
            return a.persistence.runTransaction("Locally write mutations", "readwrite", h => a.ai.qs(h, l).next(f => {
                u = f;
                const g = [];
                for (const m of o) {
                    const w = _E(m, u.get(m.key));
                    w != null && g.push(new gr(m.key, w, Md(w.value.mapValue), $n.exists(!0)))
                }
                return a.$s.addMutationBatch(h, c, g, o)
            })).then(h => (h.applyToLocalDocumentSet(u), {
                batchId: h.batchId,
                changes: u
            }))
        }(s.localStore, e);
        s.sharedClientState.addPendingMutation(r.batchId),
            function(i, o, a) {
                let c = i.oa[i.currentUser.toKey()];
                c || (c = new Oe(le)), c = c.insert(o, a), i.oa[i.currentUser.toKey()] = c
            }(s, r.batchId, n), await vr(s, r.changes), await no(s.remoteStore)
    } catch (r) {
        const i = Kc(r, "Failed to persist write");
        n.reject(i)
    }
}
async function fg(t, e) {
    const n = Q(t);
    try {
        const s = await g1(n.localStore, e);
        e.targetChanges.forEach((r, i) => {
            const o = n.ia.get(i);
            o && (ye(r.addedDocuments.size + r.modifiedDocuments.size + r.removedDocuments.size <= 1), r.addedDocuments.size > 0 ? o.Xu = !0 : r.modifiedDocuments.size > 0 ? ye(o.Xu) : r.removedDocuments.size > 0 && (ye(o.Xu), o.Xu = !1))
        }), await vr(n, s, e)
    } catch (s) {
        await yr(s)
    }
}

function Ku(t, e, n) {
    const s = Q(t);
    if (s.isPrimaryClient && n === 0 || !s.isPrimaryClient && n === 1) {
        const r = [];
        s.ta.forEach((i, o) => {
                const a = o.view.Eu(e);
                a.snapshot && r.push(a.snapshot)
            }),
            function(i, o) {
                const a = Q(i);
                a.onlineState = o;
                let c = !1;
                a.queries.forEach((l, u) => {
                    for (const h of u.listeners) h.Eu(o) && (c = !0)
                }), c && qc(a)
            }(s.eventManager, e), r.length && s.Zu.Ko(r), s.onlineState = e, s.isPrimaryClient && s.sharedClientState.setOnlineState(e)
    }
}
async function cT(t, e, n) {
    const s = Q(t);
    s.sharedClientState.updateQueryState(e, "rejected", n);
    const r = s.ia.get(e),
        i = r && r.key;
    if (i) {
        let o = new Oe(H.comparator);
        o = o.insert(i, Ke.newNoDocument(i, ee.min()));
        const a = Ee().add(i),
            c = new Zi(ee.min(), new Map, new $e(le), o, a);
        await fg(s, c), s.sa = s.sa.remove(i), s.ia.delete(e), zc(s)
    } else await Aa(s.localStore, e, !1).then(() => Na(s, e, n)).catch(yr)
}
async function lT(t, e) {
    const n = Q(t),
        s = e.batch.batchId;
    try {
        const r = await d1(n.localStore, e);
        gg(n, s, null), dg(n, s), n.sharedClientState.updateMutationState(s, "acknowledged"), await vr(n, r)
    } catch (r) {
        await yr(r)
    }
}
async function uT(t, e, n) {
    const s = Q(t);
    try {
        const r = await
        function(i, o) {
            const a = Q(i);
            return a.persistence.runTransaction("Reject batch", "readwrite-primary", c => {
                let l;
                return a.$s.lookupMutationBatch(c, o).next(u => (ye(u !== null), l = u.keys(), a.$s.removeMutationBatch(c, u))).next(() => a.$s.performConsistencyCheck(c)).next(() => a.ai.qs(c, l))
            })
        }(s.localStore, e);
        gg(s, e, n), dg(s, e), s.sharedClientState.updateMutationState(e, "rejected", n), await vr(s, r)
    } catch (r) {
        await yr(r)
    }
}

function dg(t, e) {
    (t.ua.get(e) || []).forEach(n => {
        n.resolve()
    }), t.ua.delete(e)
}

function gg(t, e, n) {
    const s = Q(t);
    let r = s.oa[s.currentUser.toKey()];
    if (r) {
        const i = r.get(e);
        i && (n ? i.reject(n) : i.resolve(), r = r.remove(e)), s.oa[s.currentUser.toKey()] = r
    }
}

function Na(t, e, n = null) {
    t.sharedClientState.removeLocalQueryTarget(e);
    for (const s of t.ea.get(e)) t.ta.delete(s), n && t.Zu.la(s, n);
    t.ea.delete(e), t.isPrimaryClient && t.ra.Ri(e).forEach(s => {
        t.ra.containsKey(s) || pg(t, s)
    })
}

function pg(t, e) {
    t.na.delete(e.path.canonicalString());
    const n = t.sa.get(e);
    n !== null && (rg(t.remoteStore, n), t.sa = t.sa.remove(e), t.ia.delete(n), zc(t))
}

function qu(t, e, n) {
    for (const s of n) s instanceof ug ? (t.ra.addReference(s.key, e), hT(t, s)) : s instanceof hg ? (B("SyncEngine", "Document no longer in limbo: " + s.key), t.ra.removeReference(s.key, e), t.ra.containsKey(s.key) || pg(t, s.key)) : W()
}

function hT(t, e) {
    const n = e.key,
        s = n.path.canonicalString();
    t.sa.get(n) || t.na.has(s) || (B("SyncEngine", "New document in limbo: " + n), t.na.add(s), zc(t))
}

function zc(t) {
    for (; t.na.size > 0 && t.sa.size < t.maxConcurrentLimboResolutions;) {
        const e = t.na.values().next().value;
        t.na.delete(e);
        const n = new H(Ce.fromString(e)),
            s = t.aa.next();
        t.ia.set(s, new nT(n)), t.sa = t.sa.insert(n, s), sg(t.remoteStore, new gn(En(xd(n.path)), s, 2, Dc.A))
    }
}
async function vr(t, e, n) {
    const s = Q(t),
        r = [],
        i = [],
        o = [];
    s.ta.isEmpty() || (s.ta.forEach((a, c) => {
        o.push(s.ha(c, e, n).then(l => {
            if (l) {
                s.isPrimaryClient && s.sharedClientState.updateQueryState(c.targetId, l.fromCache ? "not-current" : "current"), r.push(l);
                const u = Fc.Js(c.targetId, l);
                i.push(u)
            }
        }))
    }), await Promise.all(o), s.Zu.Ko(r), await async function(a, c) {
        const l = Q(a);
        try {
            await l.persistence.runTransaction("notifyLocalViewChanges", "readwrite", u => P.forEach(c, h => P.forEach(h.zs, f => l.persistence.referenceDelegate.addReference(u, h.targetId, f)).next(() => P.forEach(h.Hs, f => l.persistence.referenceDelegate.removeReference(u, h.targetId, f)))))
        } catch (u) {
            if (!mr(u)) throw u;
            B("LocalStore", "Failed to update sequence numbers: " + u)
        }
        for (const u of c) {
            const h = u.targetId;
            if (!u.fromCache) {
                const f = l.si.get(h),
                    g = f.snapshotVersion,
                    m = f.withLastLimboFreeSnapshotVersion(g);
                l.si = l.si.insert(h, m)
            }
        }
    }(s.localStore, i))
}
async function fT(t, e) {
    const n = Q(t);
    if (!n.currentUser.isEqual(e)) {
        B("SyncEngine", "User change. New user:", e.toKey());
        const s = await Zd(n.localStore, e);
        n.currentUser = e,
            function(r, i) {
                r.ua.forEach(o => {
                    o.forEach(a => {
                        a.reject(new q(S.CANCELLED, i))
                    })
                }), r.ua.clear()
            }(n, "'waitForPendingWrites' promise is rejected due to a user change."), n.sharedClientState.handleUserChange(e, s.removedBatchIds, s.addedBatchIds), await vr(n, s.ci)
    }
}

function dT(t, e) {
    const n = Q(t),
        s = n.ia.get(e);
    if (s && s.Xu) return Ee().add(s.key); {
        let r = Ee();
        const i = n.ea.get(e);
        if (!i) return r;
        for (const o of i) {
            const a = n.ta.get(o);
            r = r.unionWith(a.view.qu)
        }
        return r
    }
}

function gT(t) {
    const e = Q(t);
    return e.remoteStore.remoteSyncer.applyRemoteEvent = fg.bind(null, e), e.remoteStore.remoteSyncer.getRemoteKeysForTarget = dT.bind(null, e), e.remoteStore.remoteSyncer.rejectListen = cT.bind(null, e), e.Zu.Ko = Q1.bind(null, e.eventManager), e.Zu.la = J1.bind(null, e.eventManager), e
}

function pT(t) {
    const e = Q(t);
    return e.remoteStore.remoteSyncer.applySuccessfulWrite = lT.bind(null, e), e.remoteStore.remoteSyncer.rejectFailedWrite = uT.bind(null, e), e
}
class mT {
    constructor() {
        this.synchronizeTabs = !1
    }
    async initialize(e) {
        this.M = eo(e.databaseInfo.databaseId), this.sharedClientState = this.da(e), this.persistence = this._a(e), await this.persistence.start(), this.gcScheduler = this.wa(e), this.localStore = this.ma(e)
    }
    wa(e) {
        return null
    }
    ma(e) {
        return f1(this.persistence, new u1, e.initialUser, this.M)
    }
    _a(e) {
        return new S1(Uc.Wi, this.M)
    }
    da(e) {
        return new A1
    }
    async terminate() {
        this.gcScheduler && this.gcScheduler.stop(), await this.sharedClientState.shutdown(), await this.persistence.shutdown()
    }
}
class yT {
    async initialize(e, n) {
        this.localStore || (this.localStore = e.localStore, this.sharedClientState = e.sharedClientState, this.datastore = this.createDatastore(n), this.remoteStore = this.createRemoteStore(n), this.eventManager = this.createEventManager(n), this.syncEngine = this.createSyncEngine(n, !e.synchronizeTabs), this.sharedClientState.onlineStateHandler = s => Ku(this.syncEngine, s, 1), this.remoteStore.remoteSyncer.handleCredentialChange = fT.bind(null, this.syncEngine), await z1(this.remoteStore, this.syncEngine.isPrimaryClient))
    }
    createEventManager(e) {
        return new W1
    }
    createDatastore(e) {
        const n = eo(e.databaseInfo.databaseId),
            s = (r = e.databaseInfo, new P1(r));
        var r;
        return function(i, o, a, c) {
            return new x1(i, o, a, c)
        }(e.authCredentials, e.appCheckCredentials, s, n)
    }
    createRemoteStore(e) {
        return n = this.localStore, s = this.datastore, r = e.asyncQueue, i = a => Ku(this.syncEngine, a, 0), o = $u.vt() ? new $u : new N1, new O1(n, s, r, i, o);
        var n, s, r, i, o
    }
    createSyncEngine(e, n) {
        return function(s, r, i, o, a, c, l) {
            const u = new sT(s, r, i, o, a, c);
            return l && (u.ca = !0), u
        }(this.localStore, this.remoteStore, this.eventManager, this.sharedClientState, e.initialUser, e.maxConcurrentLimboResolutions, n)
    }
    terminate() {
        return async function(e) {
            const n = Q(e);
            B("RemoteStore", "RemoteStore shutting down."), n.lu.add(5), await wr(n), n.du.shutdown(), n._u.set("Unknown")
        }(this.remoteStore)
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wT {
    constructor(e) {
        this.observer = e, this.muted = !1
    }
    next(e) {
        this.observer.next && this.ya(this.observer.next, e)
    }
    error(e) {
        this.observer.error ? this.ya(this.observer.error, e) : console.error("Uncaught Error in snapshot listener:", e)
    }
    pa() {
        this.muted = !0
    }
    ya(e, n) {
        this.muted || setTimeout(() => {
            this.muted || e(n)
        }, 0)
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vT {
    constructor(e, n, s, r) {
        this.authCredentials = e, this.appCheckCredentials = n, this.asyncQueue = s, this.databaseInfo = r, this.user = et.UNAUTHENTICATED, this.clientId = Nd.R(), this.authCredentialListener = () => Promise.resolve(), this.appCheckCredentialListener = () => Promise.resolve(), this.authCredentials.start(s, async i => {
            B("FirestoreClient", "Received user=", i.uid), await this.authCredentialListener(i), this.user = i
        }), this.appCheckCredentials.start(s, i => (B("FirestoreClient", "Received new app check token=", i), this.appCheckCredentialListener(i, this.user)))
    }
    async getConfiguration() {
        return {
            asyncQueue: this.asyncQueue,
            databaseInfo: this.databaseInfo,
            clientId: this.clientId,
            authCredentials: this.authCredentials,
            appCheckCredentials: this.appCheckCredentials,
            initialUser: this.user,
            maxConcurrentLimboResolutions: 100
        }
    }
    setCredentialChangeListener(e) {
        this.authCredentialListener = e
    }
    setAppCheckTokenChangeListener(e) {
        this.appCheckCredentialListener = e
    }
    verifyNotTerminated() {
        if (this.asyncQueue.isShuttingDown) throw new q(S.FAILED_PRECONDITION, "The client has already been terminated.")
    }
    terminate() {
        this.asyncQueue.enterRestrictedMode();
        const e = new zt;
        return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async () => {
            try {
                this.onlineComponents && await this.onlineComponents.terminate(), this.offlineComponents && await this.offlineComponents.terminate(), this.authCredentials.shutdown(), this.appCheckCredentials.shutdown(), e.resolve()
            } catch (n) {
                const s = Kc(n, "Failed to shutdown persistence");
                e.reject(s)
            }
        }), e.promise
    }
}
async function ET(t, e) {
    t.asyncQueue.verifyOperationInProgress(), B("FirestoreClient", "Initializing OfflineComponentProvider");
    const n = await t.getConfiguration();
    await e.initialize(n);
    let s = n.initialUser;
    t.setCredentialChangeListener(async r => {
        s.isEqual(r) || (await Zd(e.localStore, r), s = r)
    }), e.persistence.setDatabaseDeletedListener(() => t.terminate()), t.offlineComponents = e
}
async function TT(t, e) {
    t.asyncQueue.verifyOperationInProgress();
    const n = await bT(t);
    B("FirestoreClient", "Initializing OnlineComponentProvider");
    const s = await t.getConfiguration();
    await e.initialize(n, s), t.setCredentialChangeListener(r => ju(e.remoteStore, r)), t.setAppCheckTokenChangeListener((r, i) => ju(e.remoteStore, i)), t.onlineComponents = e
}
async function bT(t) {
    return t.offlineComponents || (B("FirestoreClient", "Using default OfflineComponentProvider"), await ET(t, new mT)), t.offlineComponents
}
async function mg(t) {
    return t.onlineComponents || (B("FirestoreClient", "Using default OnlineComponentProvider"), await TT(t, new yT)), t.onlineComponents
}

function CT(t) {
    return mg(t).then(e => e.syncEngine)
}
async function IT(t) {
    const e = await mg(t),
        n = e.eventManager;
    return n.onListen = rT.bind(null, e.syncEngine), n.onUnlisten = oT.bind(null, e.syncEngine), n
}

function ST(t, e, n = {}) {
    const s = new zt;
    return t.asyncQueue.enqueueAndForget(async () => function(r, i, o, a, c) {
        const l = new wT({
                next: h => {
                    i.enqueueAndForget(() => X1(r, u)), h.fromCache && a.source === "server" ? c.reject(new q(S.UNAVAILABLE, 'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')) : c.resolve(h)
                },
                error: h => c.reject(h)
            }),
            u = new Z1(o, l, {
                includeMetadataChanges: !0,
                Du: !0
            });
        return Y1(r, u)
    }(await IT(t), t.asyncQueue, e, n, s)), s.promise
}
const zu = new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function yg(t, e, n) {
    if (!n) throw new q(S.INVALID_ARGUMENT, `Function ${t}() cannot be called with an empty ${e}.`)
}

function _T(t, e, n, s) {
    if (e === !0 && s === !0) throw new q(S.INVALID_ARGUMENT, `${t} and ${n} cannot be used together.`)
}

function Gu(t) {
    if (!H.isDocumentKey(t)) throw new q(S.INVALID_ARGUMENT, `Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)
}

function Wu(t) {
    if (H.isDocumentKey(t)) throw new q(S.INVALID_ARGUMENT, `Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)
}

function Gc(t) {
    if (t === void 0) return "undefined";
    if (t === null) return "null";
    if (typeof t == "string") return t.length > 20 && (t = `${t.substring(0,20)}...`), JSON.stringify(t);
    if (typeof t == "number" || typeof t == "boolean") return "" + t;
    if (typeof t == "object") {
        if (t instanceof Array) return "an array"; {
            const e = function(n) {
                return n.constructor ? n.constructor.name : null
            }(t);
            return e ? `a custom ${e} object` : "an object"
        }
    }
    return typeof t == "function" ? "a function" : W()
}

function Ra(t, e) {
    if ("_delegate" in t && (t = t._delegate), !(t instanceof e)) {
        if (e.name === t.constructor.name) throw new q(S.INVALID_ARGUMENT, "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?"); {
            const n = Gc(t);
            throw new q(S.INVALID_ARGUMENT, `Expected type '${e.name}', but it was: ${n}`)
        }
    }
    return t
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yu {
    constructor(e) {
        var n;
        if (e.host === void 0) {
            if (e.ssl !== void 0) throw new q(S.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
            this.host = "firestore.googleapis.com", this.ssl = !0
        } else this.host = e.host, this.ssl = (n = e.ssl) === null || n === void 0 || n;
        if (this.credentials = e.credentials, this.ignoreUndefinedProperties = !!e.ignoreUndefinedProperties, e.cacheSizeBytes === void 0) this.cacheSizeBytes = 41943040;
        else {
            if (e.cacheSizeBytes !== -1 && e.cacheSizeBytes < 1048576) throw new q(S.INVALID_ARGUMENT, "cacheSizeBytes must be at least 1048576");
            this.cacheSizeBytes = e.cacheSizeBytes
        }
        this.experimentalForceLongPolling = !!e.experimentalForceLongPolling, this.experimentalAutoDetectLongPolling = !!e.experimentalAutoDetectLongPolling, this.useFetchStreams = !!e.useFetchStreams, _T("experimentalForceLongPolling", e.experimentalForceLongPolling, "experimentalAutoDetectLongPolling", e.experimentalAutoDetectLongPolling)
    }
    isEqual(e) {
        return this.host === e.host && this.ssl === e.ssl && this.credentials === e.credentials && this.cacheSizeBytes === e.cacheSizeBytes && this.experimentalForceLongPolling === e.experimentalForceLongPolling && this.experimentalAutoDetectLongPolling === e.experimentalAutoDetectLongPolling && this.ignoreUndefinedProperties === e.ignoreUndefinedProperties && this.useFetchStreams === e.useFetchStreams
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wc {
    constructor(e, n, s) {
        this._authCredentials = n, this._appCheckCredentials = s, this.type = "firestore-lite", this._persistenceKey = "(lite)", this._settings = new Yu({}), this._settingsFrozen = !1, e instanceof Xn ? this._databaseId = e : (this._app = e, this._databaseId = function(r) {
            if (!Object.prototype.hasOwnProperty.apply(r.options, ["projectId"])) throw new q(S.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
            return new Xn(r.options.projectId)
        }(e))
    }
    get app() {
        if (!this._app) throw new q(S.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
        return this._app
    }
    get _initialized() {
        return this._settingsFrozen
    }
    get _terminated() {
        return this._terminateTask !== void 0
    }
    _setSettings(e) {
        if (this._settingsFrozen) throw new q(S.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");
        this._settings = new Yu(e), e.credentials !== void 0 && (this._authCredentials = function(n) {
            if (!n) return new jv;
            switch (n.type) {
                case "gapi":
                    const s = n.client;
                    return ye(!(typeof s != "object" || s === null || !s.auth || !s.auth.getAuthHeaderValueForFirstParty)), new qv(s, n.sessionIndex || "0", n.iamToken || null);
                case "provider":
                    return n.client;
                default:
                    throw new q(S.INVALID_ARGUMENT, "makeAuthCredentialsProvider failed due to invalid credential type")
            }
        }(e.credentials))
    }
    _getSettings() {
        return this._settings
    }
    _freezeSettings() {
        return this._settingsFrozen = !0, this._settings
    }
    _delete() {
        return this._terminateTask || (this._terminateTask = this._terminate()), this._terminateTask
    }
    toJSON() {
        return {
            app: this._app,
            databaseId: this._databaseId,
            settings: this._settings
        }
    }
    _terminate() {
        return function(e) {
            const n = zu.get(e);
            n && (B("ComponentProvider", "Removing Datastore"), zu.delete(e), n.terminate())
        }(this), Promise.resolve()
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yt {
    constructor(e, n, s) {
        this.converter = n, this._key = s, this.type = "document", this.firestore = e
    }
    get _path() {
        return this._key.path
    }
    get id() {
        return this._key.path.lastSegment()
    }
    get path() {
        return this._key.path.canonicalString()
    }
    get parent() {
        return new Gt(this.firestore, this.converter, this._key.path.popLast())
    }
    withConverter(e) {
        return new yt(this.firestore, e, this._key)
    }
}
class so {
    constructor(e, n, s) {
        this.converter = n, this._query = s, this.type = "query", this.firestore = e
    }
    withConverter(e) {
        return new so(this.firestore, e, this._query)
    }
}
class Gt extends so {
    constructor(e, n, s) {
        super(e, n, xd(s)), this._path = s, this.type = "collection"
    }
    get id() {
        return this._query.path.lastSegment()
    }
    get path() {
        return this._query.path.canonicalString()
    }
    get parent() {
        const e = this._path.popLast();
        return e.isEmpty() ? null : new yt(this.firestore, null, new H(e))
    }
    withConverter(e) {
        return new Gt(this.firestore, e, this._path)
    }
}

function eC(t, e, ...n) {
    if (t = Hs(t), yg("collection", "path", e), t instanceof Wc) {
        const s = Ce.fromString(e, ...n);
        return Wu(s), new Gt(t, null, s)
    } {
        if (!(t instanceof yt || t instanceof Gt)) throw new q(S.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
        const s = t._path.child(Ce.fromString(e, ...n));
        return Wu(s), new Gt(t.firestore, null, s)
    }
}

function AT(t, e, ...n) {
    if (t = Hs(t), arguments.length === 1 && (e = Nd.R()), yg("doc", "path", e), t instanceof Wc) {
        const s = Ce.fromString(e, ...n);
        return Gu(s), new yt(t, null, new H(s))
    } {
        if (!(t instanceof yt || t instanceof Gt)) throw new q(S.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
        const s = t._path.child(Ce.fromString(e, ...n));
        return Gu(s), new yt(t.firestore, t instanceof Gt ? t.converter : null, new H(s))
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class NT {
    constructor() {
        this.Na = Promise.resolve(), this.ka = [], this.Ma = !1, this.Oa = [], this.Fa = null, this.$a = !1, this.Ba = !1, this.La = [], this.So = new tg(this, "async_queue_retry"), this.Ua = () => {
            const n = Do();
            n && B("AsyncQueue", "Visibility state changed to " + n.visibilityState), this.So.Eo()
        };
        const e = Do();
        e && typeof e.addEventListener == "function" && e.addEventListener("visibilitychange", this.Ua)
    }
    get isShuttingDown() {
        return this.Ma
    }
    enqueueAndForget(e) {
        this.enqueue(e)
    }
    enqueueAndForgetEvenWhileRestricted(e) {
        this.qa(), this.Ga(e)
    }
    enterRestrictedMode(e) {
        if (!this.Ma) {
            this.Ma = !0, this.Ba = e || !1;
            const n = Do();
            n && typeof n.removeEventListener == "function" && n.removeEventListener("visibilitychange", this.Ua)
        }
    }
    enqueue(e) {
        if (this.qa(), this.Ma) return new Promise(() => {});
        const n = new zt;
        return this.Ga(() => this.Ma && this.Ba ? Promise.resolve() : (e().then(n.resolve, n.reject), n.promise)).then(() => n.promise)
    }
    enqueueRetryable(e) {
        this.enqueueAndForget(() => (this.ka.push(e), this.Ka()))
    }
    async Ka() {
        if (this.ka.length !== 0) {
            try {
                await this.ka[0](), this.ka.shift(), this.So.reset()
            } catch (e) {
                if (!mr(e)) throw e;
                B("AsyncQueue", "Operation failed with retryable error: " + e)
            }
            this.ka.length > 0 && this.So.Io(() => this.Ka())
        }
    }
    Ga(e) {
        const n = this.Na.then(() => (this.$a = !0, e().catch(s => {
            this.Fa = s, this.$a = !1;
            const r = function(i) {
                let o = i.message || "";
                return i.stack && (o = i.stack.includes(i.message) ? i.stack : i.message + `
` + i.stack), o
            }(s);
            throw Yt("INTERNAL UNHANDLED ERROR: ", r), s
        }).then(s => (this.$a = !1, s))));
        return this.Na = n, n
    }
    enqueueAfterDelay(e, n, s) {
        this.qa(), this.La.indexOf(e) > -1 && (n = 0);
        const r = Hc.createAndSchedule(this, e, n, s, i => this.Qa(i));
        return this.Oa.push(r), r
    }
    qa() {
        this.Fa && W()
    }
    verifyOperationInProgress() {}
    async ja() {
        let e;
        do e = this.Na, await e; while (e !== this.Na)
    }
    Wa(e) {
        for (const n of this.Oa)
            if (n.timerId === e) return !0;
        return !1
    }
    za(e) {
        return this.ja().then(() => {
            this.Oa.sort((n, s) => n.targetTimeMs - s.targetTimeMs);
            for (const n of this.Oa)
                if (n.skipDelay(), e !== "all" && n.timerId === e) break;
            return this.ja()
        })
    }
    Ha(e) {
        this.La.push(e)
    }
    Qa(e) {
        const n = this.Oa.indexOf(e);
        this.Oa.splice(n, 1)
    }
}
class Yc extends Wc {
    constructor(e, n, s) {
        super(e, n, s), this.type = "firestore", this._queue = new NT, this._persistenceKey = "name" in e ? e.name : "[DEFAULT]"
    }
    _terminate() {
        return this._firestoreClient || vg(this), this._firestoreClient.terminate()
    }
}

function tC(t = bw()) {
    return ww(t, "firestore").getImmediate()
}

function wg(t) {
    return t._firestoreClient || vg(t), t._firestoreClient.verifyNotTerminated(), t._firestoreClient
}

function vg(t) {
    var e;
    const n = t._freezeSettings(),
        s = function(r, i, o, a) {
            return new Qv(r, i, o, a.host, a.ssl, a.experimentalForceLongPolling, a.experimentalAutoDetectLongPolling, a.useFetchStreams)
        }(t._databaseId, ((e = t._app) === null || e === void 0 ? void 0 : e.options.appId) || "", t._persistenceKey, n);
    t._firestoreClient = new vT(t._authCredentials, t._appCheckCredentials, t._queue, s)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xc {
    constructor(...e) {
        for (let n = 0; n < e.length; ++n)
            if (e[n].length === 0) throw new q(S.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
        this._internalPath = new tt(e)
    }
    isEqual(e) {
        return this._internalPath.isEqual(e._internalPath)
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ts {
    constructor(e) {
        this._byteString = e
    }
    static fromBase64String(e) {
        try {
            return new ts(je.fromBase64String(e))
        } catch (n) {
            throw new q(S.INVALID_ARGUMENT, "Failed to construct data from Base64 string: " + n)
        }
    }
    static fromUint8Array(e) {
        return new ts(je.fromUint8Array(e))
    }
    toBase64() {
        return this._byteString.toBase64()
    }
    toUint8Array() {
        return this._byteString.toUint8Array()
    }
    toString() {
        return "Bytes(base64: " + this.toBase64() + ")"
    }
    isEqual(e) {
        return this._byteString.isEqual(e._byteString)
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Eg {
    constructor(e) {
        this._methodName = e
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qc {
    constructor(e, n) {
        if (!isFinite(e) || e < -90 || e > 90) throw new q(S.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + e);
        if (!isFinite(n) || n < -180 || n > 180) throw new q(S.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + n);
        this._lat = e, this._long = n
    }
    get latitude() {
        return this._lat
    }
    get longitude() {
        return this._long
    }
    isEqual(e) {
        return this._lat === e._lat && this._long === e._long
    }
    toJSON() {
        return {
            latitude: this._lat,
            longitude: this._long
        }
    }
    _compareTo(e) {
        return le(this._lat, e._lat) || le(this._long, e._long)
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const RT = /^__.*__$/;
class DT {
    constructor(e, n, s) {
        this.data = e, this.fieldMask = n, this.fieldTransforms = s
    }
    toMutation(e, n) {
        return this.fieldMask !== null ? new gr(e, this.data, this.fieldMask, n, this.fieldTransforms) : new Ji(e, this.data, n, this.fieldTransforms)
    }
}

function Tg(t) {
    switch (t) {
        case 0:
        case 2:
        case 1:
            return !0;
        case 3:
        case 4:
            return !1;
        default:
            throw W()
    }
}
class Jc {
    constructor(e, n, s, r, i, o) {
        this.settings = e, this.databaseId = n, this.M = s, this.ignoreUndefinedProperties = r, i === void 0 && this.Ja(), this.fieldTransforms = i || [], this.fieldMask = o || []
    }
    get path() {
        return this.settings.path
    }
    get Ya() {
        return this.settings.Ya
    }
    Xa(e) {
        return new Jc(Object.assign(Object.assign({}, this.settings), e), this.databaseId, this.M, this.ignoreUndefinedProperties, this.fieldTransforms, this.fieldMask)
    }
    Za(e) {
        var n;
        const s = (n = this.path) === null || n === void 0 ? void 0 : n.child(e),
            r = this.Xa({
                path: s,
                tc: !1
            });
        return r.ec(e), r
    }
    nc(e) {
        var n;
        const s = (n = this.path) === null || n === void 0 ? void 0 : n.child(e),
            r = this.Xa({
                path: s,
                tc: !1
            });
        return r.Ja(), r
    }
    sc(e) {
        return this.Xa({
            path: void 0,
            tc: !0
        })
    }
    ic(e) {
        return wi(e, this.settings.methodName, this.settings.rc || !1, this.path, this.settings.oc)
    }
    contains(e) {
        return this.fieldMask.find(n => e.isPrefixOf(n)) !== void 0 || this.fieldTransforms.find(n => e.isPrefixOf(n.field)) !== void 0
    }
    Ja() {
        if (this.path)
            for (let e = 0; e < this.path.length; e++) this.ec(this.path.get(e))
    }
    ec(e) {
        if (e.length === 0) throw this.ic("Document fields must not be empty");
        if (Tg(this.Ya) && RT.test(e)) throw this.ic('Document fields cannot begin and end with "__"')
    }
}
class PT {
    constructor(e, n, s) {
        this.databaseId = e, this.ignoreUndefinedProperties = n, this.M = s || eo(e)
    }
    uc(e, n, s, r = !1) {
        return new Jc({
            Ya: e,
            methodName: n,
            oc: s,
            path: tt.emptyPath(),
            tc: !1,
            rc: r
        }, this.databaseId, this.M, this.ignoreUndefinedProperties)
    }
}

function MT(t) {
    const e = t._freezeSettings(),
        n = eo(t._databaseId);
    return new PT(t._databaseId, !!e.ignoreUndefinedProperties, n)
}

function kT(t, e, n, s, r, i = {}) {
    const o = t.uc(i.merge || i.mergeFields ? 2 : 0, e, n, r);
    Sg("Data must be an object, but it was:", o, s);
    const a = Cg(s, o);
    let c, l;
    if (i.merge) c = new ya(o.fieldMask), l = o.fieldTransforms;
    else if (i.mergeFields) {
        const u = [];
        for (const h of i.mergeFields) {
            const f = xT(e, h, n);
            if (!o.contains(f)) throw new q(S.INVALID_ARGUMENT, `Field '${f}' is specified in your field mask but missing from your input data.`);
            OT(u, f) || u.push(f)
        }
        c = new ya(u), l = o.fieldTransforms.filter(h => c.covers(h.field))
    } else c = null, l = o.fieldTransforms;
    return new DT(new pt(a), c, l)
}

function bg(t, e) {
    if (Ig(t = Hs(t))) return Sg("Unsupported field value:", e, t), Cg(t, e);
    if (t instanceof Eg) return function(n, s) {
        if (!Tg(s.Ya)) throw s.ic(`${n._methodName}() can only be used with update() and set()`);
        if (!s.path) throw s.ic(`${n._methodName}() is not currently supported inside arrays`);
        const r = n._toFieldTransform(s);
        r && s.fieldTransforms.push(r)
    }(t, e), null;
    if (t === void 0 && e.ignoreUndefinedProperties) return null;
    if (e.path && e.fieldMask.push(e.path), t instanceof Array) {
        if (e.settings.tc && e.Ya !== 4) throw e.ic("Nested arrays are not supported");
        return function(n, s) {
            const r = [];
            let i = 0;
            for (const o of n) {
                let a = bg(o, s.sc(i));
                a == null && (a = {
                    nullValue: "NULL_VALUE"
                }), r.push(a), i++
            }
            return {
                arrayValue: {
                    values: r
                }
            }
        }(t, e)
    }
    return function(n, s) {
        if ((n = Hs(n)) === null) return {
            nullValue: "NULL_VALUE"
        };
        if (typeof n == "number") return EE(s.M, n);
        if (typeof n == "boolean") return {
            booleanValue: n
        };
        if (typeof n == "string") return {
            stringValue: n
        };
        if (n instanceof Date) {
            const r = ze.fromDate(n);
            return {
                timestampValue: mi(s.M, r)
            }
        }
        if (n instanceof ze) {
            const r = new ze(n.seconds, 1e3 * Math.floor(n.nanoseconds / 1e3));
            return {
                timestampValue: mi(s.M, r)
            }
        }
        if (n instanceof Qc) return {
            geoPointValue: {
                latitude: n.latitude,
                longitude: n.longitude
            }
        };
        if (n instanceof ts) return {
            bytesValue: Wd(s.M, n._byteString)
        };
        if (n instanceof yt) {
            const r = s.databaseId,
                i = n.firestore._databaseId;
            if (!i.isEqual(r)) throw s.ic(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);
            return {
                referenceValue: Lc(n.firestore._databaseId || s.databaseId, n._key.path)
            }
        }
        throw s.ic(`Unsupported field value: ${Gc(n)}`)
    }(t, e)
}

function Cg(t, e) {
    const n = {};
    return Rd(t) ? e.path && e.path.length > 0 && e.fieldMask.push(e.path) : gs(t, (s, r) => {
        const i = bg(r, e.Za(s));
        i != null && (n[s] = i)
    }), {
        mapValue: {
            fields: n
        }
    }
}

function Ig(t) {
    return !(typeof t != "object" || t === null || t instanceof Array || t instanceof Date || t instanceof ze || t instanceof Qc || t instanceof ts || t instanceof yt || t instanceof Eg)
}

function Sg(t, e, n) {
    if (!Ig(n) || ! function(s) {
            return typeof s == "object" && s !== null && (Object.getPrototypeOf(s) === Object.prototype || Object.getPrototypeOf(s) === null)
        }(n)) {
        const s = Gc(n);
        throw s === "an object" ? e.ic(t + " a custom object") : e.ic(t + " " + s)
    }
}

function xT(t, e, n) {
    if ((e = Hs(e)) instanceof Xc) return e._internalPath;
    if (typeof e == "string") return _g(t, e);
    throw wi("Field path arguments must be of type string or ", t, !1, void 0, n)
}
const LT = new RegExp("[~\\*/\\[\\]]");

function _g(t, e, n) {
    if (e.search(LT) >= 0) throw wi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`, t, !1, void 0, n);
    try {
        return new Xc(...e.split("."))._internalPath
    } catch {
        throw wi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`, t, !1, void 0, n)
    }
}

function wi(t, e, n, s, r) {
    const i = s && !s.isEmpty(),
        o = r !== void 0;
    let a = `Function ${e}() called with invalid data`;
    n && (a += " (via `toFirestore()`)"), a += ". ";
    let c = "";
    return (i || o) && (c += " (found", i && (c += ` in field ${s}`), o && (c += ` in document ${r}`), c += ")"), new q(S.INVALID_ARGUMENT, a + t + c)
}

function OT(t, e) {
    return t.some(n => n.isEqual(e))
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ag {
    constructor(e, n, s, r, i) {
        this._firestore = e, this._userDataWriter = n, this._key = s, this._document = r, this._converter = i
    }
    get id() {
        return this._key.path.lastSegment()
    }
    get ref() {
        return new yt(this._firestore, this._converter, this._key)
    }
    exists() {
        return this._document !== null
    }
    data() {
        if (this._document) {
            if (this._converter) {
                const e = new FT(this._firestore, this._userDataWriter, this._key, this._document, null);
                return this._converter.fromFirestore(e)
            }
            return this._userDataWriter.convertValue(this._document.data.value)
        }
    }
    get(e) {
        if (this._document) {
            const n = this._document.data.field(Ng("DocumentSnapshot.get", e));
            if (n !== null) return this._userDataWriter.convertValue(n)
        }
    }
}
class FT extends Ag {
    data() {
        return super.data()
    }
}

function Ng(t, e) {
    return typeof e == "string" ? _g(t, e) : e instanceof Xc ? e._internalPath : e._delegate._internalPath
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pr {
    constructor(e, n) {
        this.hasPendingWrites = e, this.fromCache = n
    }
    isEqual(e) {
        return this.hasPendingWrites === e.hasPendingWrites && this.fromCache === e.fromCache
    }
}
class BT extends Ag {
    constructor(e, n, s, r, i, o) {
        super(e, n, s, r, o), this._firestore = e, this._firestoreImpl = e, this.metadata = i
    }
    exists() {
        return super.exists()
    }
    data(e = {}) {
        if (this._document) {
            if (this._converter) {
                const n = new Kr(this._firestore, this._userDataWriter, this._key, this._document, this.metadata, null);
                return this._converter.fromFirestore(n, e)
            }
            return this._userDataWriter.convertValue(this._document.data.value, e.serverTimestamps)
        }
    }
    get(e, n = {}) {
        if (this._document) {
            const s = this._document.data.field(Ng("DocumentSnapshot.get", e));
            if (s !== null) return this._userDataWriter.convertValue(s, n.serverTimestamps)
        }
    }
}
class Kr extends BT {
    data(e = {}) {
        return super.data(e)
    }
}
class UT {
    constructor(e, n, s, r) {
        this._firestore = e, this._userDataWriter = n, this._snapshot = r, this.metadata = new Pr(r.hasPendingWrites, r.fromCache), this.query = s
    }
    get docs() {
        const e = [];
        return this.forEach(n => e.push(n)), e
    }
    get size() {
        return this._snapshot.docs.size
    }
    get empty() {
        return this.size === 0
    }
    forEach(e, n) {
        this._snapshot.docs.forEach(s => {
            e.call(n, new Kr(this._firestore, this._userDataWriter, s.key, s, new Pr(this._snapshot.mutatedKeys.has(s.key), this._snapshot.fromCache), this.query.converter))
        })
    }
    docChanges(e = {}) {
        const n = !!e.includeMetadataChanges;
        if (n && this._snapshot.excludesMetadataChanges) throw new q(S.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");
        return this._cachedChanges && this._cachedChangesIncludeMetadataChanges === n || (this._cachedChanges = function(s, r) {
            if (s._snapshot.oldDocs.isEmpty()) {
                let i = 0;
                return s._snapshot.docChanges.map(o => ({
                    type: "added",
                    doc: new Kr(s._firestore, s._userDataWriter, o.doc.key, o.doc, new Pr(s._snapshot.mutatedKeys.has(o.doc.key), s._snapshot.fromCache), s.query.converter),
                    oldIndex: -1,
                    newIndex: i++
                }))
            } {
                let i = s._snapshot.oldDocs;
                return s._snapshot.docChanges.filter(o => r || o.type !== 3).map(o => {
                    const a = new Kr(s._firestore, s._userDataWriter, o.doc.key, o.doc, new Pr(s._snapshot.mutatedKeys.has(o.doc.key), s._snapshot.fromCache), s.query.converter);
                    let c = -1,
                        l = -1;
                    return o.type !== 0 && (c = i.indexOf(o.doc.key), i = i.delete(o.doc.key)), o.type !== 1 && (i = i.add(o.doc), l = i.indexOf(o.doc.key)), {
                        type: VT(o.type),
                        doc: a,
                        oldIndex: c,
                        newIndex: l
                    }
                })
            }
        }(this, n), this._cachedChangesIncludeMetadataChanges = n), this._cachedChanges
    }
}

function VT(t) {
    switch (t) {
        case 0:
            return "added";
        case 2:
        case 3:
            return "modified";
        case 1:
            return "removed";
        default:
            return W()
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $T(t) {
    if (di(t) && t.explicitOrderBy.length === 0) throw new q(S.UNIMPLEMENTED, "limitToLast() queries require specifying at least one orderBy() clause")
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jT {
    convertValue(e, n = "none") {
        switch (vn(e)) {
            case 0:
                return null;
            case 1:
                return e.booleanValue;
            case 2:
                return _e(e.integerValue || e.doubleValue);
            case 3:
                return this.convertTimestamp(e.timestampValue);
            case 4:
                return this.convertServerTimestamp(e, n);
            case 5:
                return e.stringValue;
            case 6:
                return this.convertBytes(Yn(e.bytesValue));
            case 7:
                return this.convertReference(e.referenceValue);
            case 8:
                return this.convertGeoPoint(e.geoPointValue);
            case 9:
                return this.convertArray(e.arrayValue, n);
            case 10:
                return this.convertObject(e.mapValue, n);
            default:
                throw W()
        }
    }
    convertObject(e, n) {
        const s = {};
        return gs(e.fields, (r, i) => {
            s[r] = this.convertValue(i, n)
        }), s
    }
    convertGeoPoint(e) {
        return new Qc(_e(e.latitude), _e(e.longitude))
    }
    convertArray(e, n) {
        return (e.values || []).map(s => this.convertValue(s, n))
    }
    convertServerTimestamp(e, n) {
        switch (n) {
            case "previous":
                const s = Pd(e);
                return s == null ? null : this.convertValue(s, n);
            case "estimate":
                return this.convertTimestamp(Js(e));
            default:
                return null
        }
    }
    convertTimestamp(e) {
        const n = Xt(e);
        return new ze(n.seconds, n.nanos)
    }
    convertDocumentKey(e, n) {
        const s = Ce.fromString(e);
        ye(Jd(s));
        const r = new Xn(s.get(1), s.get(3)),
            i = new H(s.popFirst(5));
        return r.isEqual(n) || Yt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`), i
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function HT(t, e, n) {
    let s;
    return s = t ? n && (n.merge || n.mergeFields) ? t.toFirestore(e, n) : t.toFirestore(e) : e, s
}
class KT extends jT {
    constructor(e) {
        super(), this.firestore = e
    }
    convertBytes(e) {
        return new ts(e)
    }
    convertReference(e) {
        const n = this.convertDocumentKey(e, this.firestore._databaseId);
        return new yt(this.firestore, null, n)
    }
}

function nC(t) {
    t = Ra(t, so);
    const e = Ra(t.firestore, Yc),
        n = wg(e),
        s = new KT(e);
    return $T(t._query), ST(n, t._query).then(r => new UT(e, s, t, r))
}

function sC(t, e) {
    const n = Ra(t.firestore, Yc),
        s = AT(t),
        r = HT(t.converter, e);
    return qT(n, [kT(MT(t.firestore), "addDoc", s._key, r, t.converter !== null, {}).toMutation(s._key, $n.exists(!1))]).then(() => s)
}

function qT(t, e) {
    return function(n, s) {
        const r = new zt;
        return n.asyncQueue.enqueueAndForget(async () => aT(await CT(n), s, r)), r.promise
    }(wg(t), e)
}(function(t, e = !0) {
    (function(n) {
        ds = n
    })(Tw), ti(new Ks("firestore", (n, {
        options: s
    }) => {
        const r = n.getProvider("app").getImmediate(),
            i = new Yc(r, new Hv(n.getProvider("auth-internal")), new Gv(n.getProvider("app-check-internal")));
        return s = Object.assign({
            useFetchStreams: e
        }, s), i._setSettings(s), i
    }, "PUBLIC")), Un(vu, "3.4.7", t), Un(vu, "3.4.7", "esm2017")
})();
var ro = {},
    zT = function() {
        return typeof Promise == "function" && Promise.prototype && Promise.prototype.then
    },
    Rg = {},
    lt = {};
let Zc;
const GT = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
lt.getSymbolSize = function(e) {
    if (!e) throw new Error('"version" cannot be null or undefined');
    if (e < 1 || e > 40) throw new Error('"version" should be in range from 1 to 40');
    return e * 4 + 17
};
lt.getSymbolTotalCodewords = function(e) {
    return GT[e]
};
lt.getBCHDigit = function(t) {
    let e = 0;
    for (; t !== 0;) e++, t >>>= 1;
    return e
};
lt.setToSJISFunction = function(e) {
    if (typeof e != "function") throw new Error('"toSJISFunc" is not a valid function.');
    Zc = e
};
lt.isKanjiModeEnabled = function() {
    return typeof Zc != "undefined"
};
lt.toSJIS = function(e) {
    return Zc(e)
};
var io = {};
(function(t) {
    t.L = {
        bit: 1
    }, t.M = {
        bit: 0
    }, t.Q = {
        bit: 3
    }, t.H = {
        bit: 2
    };

    function e(n) {
        if (typeof n != "string") throw new Error("Param is not a string");
        switch (n.toLowerCase()) {
            case "l":
            case "low":
                return t.L;
            case "m":
            case "medium":
                return t.M;
            case "q":
            case "quartile":
                return t.Q;
            case "h":
            case "high":
                return t.H;
            default:
                throw new Error("Unknown EC Level: " + n)
        }
    }
    t.isValid = function(s) {
        return s && typeof s.bit != "undefined" && s.bit >= 0 && s.bit < 4
    }, t.from = function(s, r) {
        if (t.isValid(s)) return s;
        try {
            return e(s)
        } catch {
            return r
        }
    }
})(io);

function Dg() {
    this.buffer = [], this.length = 0
}
Dg.prototype = {
    get: function(t) {
        const e = Math.floor(t / 8);
        return (this.buffer[e] >>> 7 - t % 8 & 1) === 1
    },
    put: function(t, e) {
        for (let n = 0; n < e; n++) this.putBit((t >>> e - n - 1 & 1) === 1)
    },
    getLengthInBits: function() {
        return this.length
    },
    putBit: function(t) {
        const e = Math.floor(this.length / 8);
        this.buffer.length <= e && this.buffer.push(0), t && (this.buffer[e] |= 128 >>> this.length % 8), this.length++
    }
};
var WT = Dg;

function Er(t) {
    if (!t || t < 1) throw new Error("BitMatrix size must be defined and greater than 0");
    this.size = t, this.data = new Uint8Array(t * t), this.reservedBit = new Uint8Array(t * t)
}
Er.prototype.set = function(t, e, n, s) {
    const r = t * this.size + e;
    this.data[r] = n, s && (this.reservedBit[r] = !0)
};
Er.prototype.get = function(t, e) {
    return this.data[t * this.size + e]
};
Er.prototype.xor = function(t, e, n) {
    this.data[t * this.size + e] ^= n
};
Er.prototype.isReserved = function(t, e) {
    return this.reservedBit[t * this.size + e]
};
var YT = Er,
    Pg = {};
(function(t) {
    const e = lt.getSymbolSize;
    t.getRowColCoords = function(s) {
        if (s === 1) return [];
        const r = Math.floor(s / 7) + 2,
            i = e(s),
            o = i === 145 ? 26 : Math.ceil((i - 13) / (2 * r - 2)) * 2,
            a = [i - 7];
        for (let c = 1; c < r - 1; c++) a[c] = a[c - 1] - o;
        return a.push(6), a.reverse()
    }, t.getPositions = function(s) {
        const r = [],
            i = t.getRowColCoords(s),
            o = i.length;
        for (let a = 0; a < o; a++)
            for (let c = 0; c < o; c++) a === 0 && c === 0 || a === 0 && c === o - 1 || a === o - 1 && c === 0 || r.push([i[a], i[c]]);
        return r
    }
})(Pg);
var Mg = {};
const XT = lt.getSymbolSize,
    Xu = 7;
Mg.getPositions = function(e) {
    const n = XT(e);
    return [
        [0, 0],
        [n - Xu, 0],
        [0, n - Xu]
    ]
};
var kg = {};
(function(t) {
    t.Patterns = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7
    };
    const e = {
        N1: 3,
        N2: 3,
        N3: 40,
        N4: 10
    };
    t.isValid = function(r) {
        return r != null && r !== "" && !isNaN(r) && r >= 0 && r <= 7
    }, t.from = function(r) {
        return t.isValid(r) ? parseInt(r, 10) : void 0
    }, t.getPenaltyN1 = function(r) {
        const i = r.size;
        let o = 0,
            a = 0,
            c = 0,
            l = null,
            u = null;
        for (let h = 0; h < i; h++) {
            a = c = 0, l = u = null;
            for (let f = 0; f < i; f++) {
                let g = r.get(h, f);
                g === l ? a++ : (a >= 5 && (o += e.N1 + (a - 5)), l = g, a = 1), g = r.get(f, h), g === u ? c++ : (c >= 5 && (o += e.N1 + (c - 5)), u = g, c = 1)
            }
            a >= 5 && (o += e.N1 + (a - 5)), c >= 5 && (o += e.N1 + (c - 5))
        }
        return o
    }, t.getPenaltyN2 = function(r) {
        const i = r.size;
        let o = 0;
        for (let a = 0; a < i - 1; a++)
            for (let c = 0; c < i - 1; c++) {
                const l = r.get(a, c) + r.get(a, c + 1) + r.get(a + 1, c) + r.get(a + 1, c + 1);
                (l === 4 || l === 0) && o++
            }
        return o * e.N2
    }, t.getPenaltyN3 = function(r) {
        const i = r.size;
        let o = 0,
            a = 0,
            c = 0;
        for (let l = 0; l < i; l++) {
            a = c = 0;
            for (let u = 0; u < i; u++) a = a << 1 & 2047 | r.get(l, u), u >= 10 && (a === 1488 || a === 93) && o++, c = c << 1 & 2047 | r.get(u, l), u >= 10 && (c === 1488 || c === 93) && o++
        }
        return o * e.N3
    }, t.getPenaltyN4 = function(r) {
        let i = 0;
        const o = r.data.length;
        for (let c = 0; c < o; c++) i += r.data[c];
        return Math.abs(Math.ceil(i * 100 / o / 5) - 10) * e.N4
    };

    function n(s, r, i) {
        switch (s) {
            case t.Patterns.PATTERN000:
                return (r + i) % 2 === 0;
            case t.Patterns.PATTERN001:
                return r % 2 === 0;
            case t.Patterns.PATTERN010:
                return i % 3 === 0;
            case t.Patterns.PATTERN011:
                return (r + i) % 3 === 0;
            case t.Patterns.PATTERN100:
                return (Math.floor(r / 2) + Math.floor(i / 3)) % 2 === 0;
            case t.Patterns.PATTERN101:
                return r * i % 2 + r * i % 3 === 0;
            case t.Patterns.PATTERN110:
                return (r * i % 2 + r * i % 3) % 2 === 0;
            case t.Patterns.PATTERN111:
                return (r * i % 3 + (r + i) % 2) % 2 === 0;
            default:
                throw new Error("bad maskPattern:" + s)
        }
    }
    t.applyMask = function(r, i) {
        const o = i.size;
        for (let a = 0; a < o; a++)
            for (let c = 0; c < o; c++) i.isReserved(c, a) || i.xor(c, a, n(r, c, a))
    }, t.getBestMask = function(r, i) {
        const o = Object.keys(t.Patterns).length;
        let a = 0,
            c = 1 / 0;
        for (let l = 0; l < o; l++) {
            i(l), t.applyMask(l, r);
            const u = t.getPenaltyN1(r) + t.getPenaltyN2(r) + t.getPenaltyN3(r) + t.getPenaltyN4(r);
            t.applyMask(l, r), u < c && (c = u, a = l)
        }
        return a
    }
})(kg);
var oo = {};
const Ht = io,
    Mr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81],
    kr = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
oo.getBlocksCount = function(e, n) {
    switch (n) {
        case Ht.L:
            return Mr[(e - 1) * 4 + 0];
        case Ht.M:
            return Mr[(e - 1) * 4 + 1];
        case Ht.Q:
            return Mr[(e - 1) * 4 + 2];
        case Ht.H:
            return Mr[(e - 1) * 4 + 3];
        default:
            return
    }
};
oo.getTotalCodewordsCount = function(e, n) {
    switch (n) {
        case Ht.L:
            return kr[(e - 1) * 4 + 0];
        case Ht.M:
            return kr[(e - 1) * 4 + 1];
        case Ht.Q:
            return kr[(e - 1) * 4 + 2];
        case Ht.H:
            return kr[(e - 1) * 4 + 3];
        default:
            return
    }
};
var xg = {},
    ao = {};
const Os = new Uint8Array(512),
    vi = new Uint8Array(256);
(function() {
    let e = 1;
    for (let n = 0; n < 255; n++) Os[n] = e, vi[e] = n, e <<= 1, e & 256 && (e ^= 285);
    for (let n = 255; n < 512; n++) Os[n] = Os[n - 255]
})();
ao.log = function(e) {
    if (e < 1) throw new Error("log(" + e + ")");
    return vi[e]
};
ao.exp = function(e) {
    return Os[e]
};
ao.mul = function(e, n) {
    return e === 0 || n === 0 ? 0 : Os[vi[e] + vi[n]]
};
(function(t) {
    const e = ao;
    t.mul = function(s, r) {
        const i = new Uint8Array(s.length + r.length - 1);
        for (let o = 0; o < s.length; o++)
            for (let a = 0; a < r.length; a++) i[o + a] ^= e.mul(s[o], r[a]);
        return i
    }, t.mod = function(s, r) {
        let i = new Uint8Array(s);
        for (; i.length - r.length >= 0;) {
            const o = i[0];
            for (let c = 0; c < r.length; c++) i[c] ^= e.mul(r[c], o);
            let a = 0;
            for (; a < i.length && i[a] === 0;) a++;
            i = i.slice(a)
        }
        return i
    }, t.generateECPolynomial = function(s) {
        let r = new Uint8Array([1]);
        for (let i = 0; i < s; i++) r = t.mul(r, new Uint8Array([1, e.exp(i)]));
        return r
    }
})(xg);
const Lg = xg;

function el(t) {
    this.genPoly = void 0, this.degree = t, this.degree && this.initialize(this.degree)
}
el.prototype.initialize = function(e) {
    this.degree = e, this.genPoly = Lg.generateECPolynomial(this.degree)
};
el.prototype.encode = function(e) {
    if (!this.genPoly) throw new Error("Encoder not initialized");
    const n = new Uint8Array(e.length + this.degree);
    n.set(e);
    const s = Lg.mod(n, this.genPoly),
        r = this.degree - s.length;
    if (r > 0) {
        const i = new Uint8Array(this.degree);
        return i.set(s, r), i
    }
    return s
};
var QT = el,
    Og = {},
    en = {},
    tl = {};
tl.isValid = function(e) {
    return !isNaN(e) && e >= 1 && e <= 40
};
var Nt = {};
const Fg = "[0-9]+",
    JT = "[A-Z $%*+\\-./:]+";
let sr = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
sr = sr.replace(/u/g, "\\u");
const ZT = "(?:(?![A-Z0-9 $%*+\\-./:]|" + sr + `)(?:.|[\r
]))+`;
Nt.KANJI = new RegExp(sr, "g");
Nt.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
Nt.BYTE = new RegExp(ZT, "g");
Nt.NUMERIC = new RegExp(Fg, "g");
Nt.ALPHANUMERIC = new RegExp(JT, "g");
const eb = new RegExp("^" + sr + "$"),
    tb = new RegExp("^" + Fg + "$"),
    nb = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
Nt.testKanji = function(e) {
    return eb.test(e)
};
Nt.testNumeric = function(e) {
    return tb.test(e)
};
Nt.testAlphanumeric = function(e) {
    return nb.test(e)
};
(function(t) {
    const e = tl,
        n = Nt;
    t.NUMERIC = {
        id: "Numeric",
        bit: 1 << 0,
        ccBits: [10, 12, 14]
    }, t.ALPHANUMERIC = {
        id: "Alphanumeric",
        bit: 1 << 1,
        ccBits: [9, 11, 13]
    }, t.BYTE = {
        id: "Byte",
        bit: 1 << 2,
        ccBits: [8, 16, 16]
    }, t.KANJI = {
        id: "Kanji",
        bit: 1 << 3,
        ccBits: [8, 10, 12]
    }, t.MIXED = {
        bit: -1
    }, t.getCharCountIndicator = function(i, o) {
        if (!i.ccBits) throw new Error("Invalid mode: " + i);
        if (!e.isValid(o)) throw new Error("Invalid version: " + o);
        return o >= 1 && o < 10 ? i.ccBits[0] : o < 27 ? i.ccBits[1] : i.ccBits[2]
    }, t.getBestModeForData = function(i) {
        return n.testNumeric(i) ? t.NUMERIC : n.testAlphanumeric(i) ? t.ALPHANUMERIC : n.testKanji(i) ? t.KANJI : t.BYTE
    }, t.toString = function(i) {
        if (i && i.id) return i.id;
        throw new Error("Invalid mode")
    }, t.isValid = function(i) {
        return i && i.bit && i.ccBits
    };

    function s(r) {
        if (typeof r != "string") throw new Error("Param is not a string");
        switch (r.toLowerCase()) {
            case "numeric":
                return t.NUMERIC;
            case "alphanumeric":
                return t.ALPHANUMERIC;
            case "kanji":
                return t.KANJI;
            case "byte":
                return t.BYTE;
            default:
                throw new Error("Unknown mode: " + r)
        }
    }
    t.from = function(i, o) {
        if (t.isValid(i)) return i;
        try {
            return s(i)
        } catch {
            return o
        }
    }
})(en);
(function(t) {
    const e = lt,
        n = oo,
        s = io,
        r = en,
        i = tl,
        o = 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0,
        a = e.getBCHDigit(o);

    function c(f, g, m) {
        for (let w = 1; w <= 40; w++)
            if (g <= t.getCapacity(w, m, f)) return w
    }

    function l(f, g) {
        return r.getCharCountIndicator(f, g) + 4
    }

    function u(f, g) {
        let m = 0;
        return f.forEach(function(w) {
            m += l(w.mode, g) + w.getBitsLength()
        }), m
    }

    function h(f, g) {
        for (let m = 1; m <= 40; m++)
            if (u(f, m) <= t.getCapacity(m, g, r.MIXED)) return m
    }
    t.from = function(g, m) {
        return i.isValid(g) ? parseInt(g, 10) : m
    }, t.getCapacity = function(g, m, w) {
        if (!i.isValid(g)) throw new Error("Invalid QR Code version");
        typeof w == "undefined" && (w = r.BYTE);
        const C = e.getSymbolTotalCodewords(g),
            v = n.getTotalCodewordsCount(g, m),
            _ = (C - v) * 8;
        if (w === r.MIXED) return _;
        const R = _ - l(w, g);
        switch (w) {
            case r.NUMERIC:
                return Math.floor(R / 10 * 3);
            case r.ALPHANUMERIC:
                return Math.floor(R / 11 * 2);
            case r.KANJI:
                return Math.floor(R / 13);
            case r.BYTE:
            default:
                return Math.floor(R / 8)
        }
    }, t.getBestVersionForData = function(g, m) {
        let w;
        const C = s.from(m, s.M);
        if (Array.isArray(g)) {
            if (g.length > 1) return h(g, C);
            if (g.length === 0) return 1;
            w = g[0]
        } else w = g;
        return c(w.mode, w.getLength(), C)
    }, t.getEncodedBits = function(g) {
        if (!i.isValid(g) || g < 7) throw new Error("Invalid QR Code version");
        let m = g << 12;
        for (; e.getBCHDigit(m) - a >= 0;) m ^= o << e.getBCHDigit(m) - a;
        return g << 12 | m
    }
})(Og);
var Bg = {};
const Da = lt,
    Ug = 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0,
    sb = 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1,
    Qu = Da.getBCHDigit(Ug);
Bg.getEncodedBits = function(e, n) {
    const s = e.bit << 3 | n;
    let r = s << 10;
    for (; Da.getBCHDigit(r) - Qu >= 0;) r ^= Ug << Da.getBCHDigit(r) - Qu;
    return (s << 10 | r) ^ sb
};
var Vg = {};
const rb = en;

function ns(t) {
    this.mode = rb.NUMERIC, this.data = t.toString()
}
ns.getBitsLength = function(e) {
    return 10 * Math.floor(e / 3) + (e % 3 ? e % 3 * 3 + 1 : 0)
};
ns.prototype.getLength = function() {
    return this.data.length
};
ns.prototype.getBitsLength = function() {
    return ns.getBitsLength(this.data.length)
};
ns.prototype.write = function(e) {
    let n, s, r;
    for (n = 0; n + 3 <= this.data.length; n += 3) s = this.data.substr(n, 3), r = parseInt(s, 10), e.put(r, 10);
    const i = this.data.length - n;
    i > 0 && (s = this.data.substr(n), r = parseInt(s, 10), e.put(r, i * 3 + 1))
};
var ib = ns;
const ob = en,
    Po = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];

function ss(t) {
    this.mode = ob.ALPHANUMERIC, this.data = t
}
ss.getBitsLength = function(e) {
    return 11 * Math.floor(e / 2) + 6 * (e % 2)
};
ss.prototype.getLength = function() {
    return this.data.length
};
ss.prototype.getBitsLength = function() {
    return ss.getBitsLength(this.data.length)
};
ss.prototype.write = function(e) {
    let n;
    for (n = 0; n + 2 <= this.data.length; n += 2) {
        let s = Po.indexOf(this.data[n]) * 45;
        s += Po.indexOf(this.data[n + 1]), e.put(s, 11)
    }
    this.data.length % 2 && e.put(Po.indexOf(this.data[n]), 6)
};
var ab = ss,
    cb = function(e) {
        for (var n = [], s = e.length, r = 0; r < s; r++) {
            var i = e.charCodeAt(r);
            if (i >= 55296 && i <= 56319 && s > r + 1) {
                var o = e.charCodeAt(r + 1);
                o >= 56320 && o <= 57343 && (i = (i - 55296) * 1024 + o - 56320 + 65536, r += 1)
            }
            if (i < 128) {
                n.push(i);
                continue
            }
            if (i < 2048) {
                n.push(i >> 6 | 192), n.push(i & 63 | 128);
                continue
            }
            if (i < 55296 || i >= 57344 && i < 65536) {
                n.push(i >> 12 | 224), n.push(i >> 6 & 63 | 128), n.push(i & 63 | 128);
                continue
            }
            if (i >= 65536 && i <= 1114111) {
                n.push(i >> 18 | 240), n.push(i >> 12 & 63 | 128), n.push(i >> 6 & 63 | 128), n.push(i & 63 | 128);
                continue
            }
            n.push(239, 191, 189)
        }
        return new Uint8Array(n).buffer
    };
const lb = cb,
    ub = en;

function rs(t) {
    this.mode = ub.BYTE, this.data = new Uint8Array(lb(t))
}
rs.getBitsLength = function(e) {
    return e * 8
};
rs.prototype.getLength = function() {
    return this.data.length
};
rs.prototype.getBitsLength = function() {
    return rs.getBitsLength(this.data.length)
};
rs.prototype.write = function(t) {
    for (let e = 0, n = this.data.length; e < n; e++) t.put(this.data[e], 8)
};
var hb = rs;
const fb = en,
    db = lt;

function is(t) {
    this.mode = fb.KANJI, this.data = t
}
is.getBitsLength = function(e) {
    return e * 13
};
is.prototype.getLength = function() {
    return this.data.length
};
is.prototype.getBitsLength = function() {
    return is.getBitsLength(this.data.length)
};
is.prototype.write = function(t) {
    let e;
    for (e = 0; e < this.data.length; e++) {
        let n = db.toSJIS(this.data[e]);
        if (n >= 33088 && n <= 40956) n -= 33088;
        else if (n >= 57408 && n <= 60351) n -= 49472;
        else throw new Error("Invalid SJIS character: " + this.data[e] + `
Make sure your charset is UTF-8`);
        n = (n >>> 8 & 255) * 192 + (n & 255), t.put(n, 13)
    }
};
var gb = is,
    $g = {
        exports: {}
    };
(function(t) {
    var e = {
        single_source_shortest_paths: function(n, s, r) {
            var i = {},
                o = {};
            o[s] = 0;
            var a = e.PriorityQueue.make();
            a.push(s, 0);
            for (var c, l, u, h, f, g, m, w, C; !a.empty();) {
                c = a.pop(), l = c.value, h = c.cost, f = n[l] || {};
                for (u in f) f.hasOwnProperty(u) && (g = f[u], m = h + g, w = o[u], C = typeof o[u] == "undefined", (C || w > m) && (o[u] = m, a.push(u, m), i[u] = l))
            }
            if (typeof r != "undefined" && typeof o[r] == "undefined") {
                var v = ["Could not find a path from ", s, " to ", r, "."].join("");
                throw new Error(v)
            }
            return i
        },
        extract_shortest_path_from_predecessor_list: function(n, s) {
            for (var r = [], i = s; i;) r.push(i), i = n[i];
            return r.reverse(), r
        },
        find_path: function(n, s, r) {
            var i = e.single_source_shortest_paths(n, s, r);
            return e.extract_shortest_path_from_predecessor_list(i, r)
        },
        PriorityQueue: {
            make: function(n) {
                var s = e.PriorityQueue,
                    r = {},
                    i;
                n = n || {};
                for (i in s) s.hasOwnProperty(i) && (r[i] = s[i]);
                return r.queue = [], r.sorter = n.sorter || s.default_sorter, r
            },
            default_sorter: function(n, s) {
                return n.cost - s.cost
            },
            push: function(n, s) {
                var r = {
                    value: n,
                    cost: s
                };
                this.queue.push(r), this.queue.sort(this.sorter)
            },
            pop: function() {
                return this.queue.shift()
            },
            empty: function() {
                return this.queue.length === 0
            }
        }
    };
    t.exports = e
})($g);
(function(t) {
    const e = en,
        n = ib,
        s = ab,
        r = hb,
        i = gb,
        o = Nt,
        a = lt,
        c = $g.exports;

    function l(v) {
        return unescape(encodeURIComponent(v)).length
    }

    function u(v, _, R) {
        const A = [];
        let K;
        for (;
            (K = v.exec(R)) !== null;) A.push({
            data: K[0],
            index: K.index,
            mode: _,
            length: K[0].length
        });
        return A
    }

    function h(v) {
        const _ = u(o.NUMERIC, e.NUMERIC, v),
            R = u(o.ALPHANUMERIC, e.ALPHANUMERIC, v);
        let A, K;
        return a.isKanjiModeEnabled() ? (A = u(o.BYTE, e.BYTE, v), K = u(o.KANJI, e.KANJI, v)) : (A = u(o.BYTE_KANJI, e.BYTE, v), K = []), _.concat(R, A, K).sort(function(U, ie) {
            return U.index - ie.index
        }).map(function(U) {
            return {
                data: U.data,
                mode: U.mode,
                length: U.length
            }
        })
    }

    function f(v, _) {
        switch (_) {
            case e.NUMERIC:
                return n.getBitsLength(v);
            case e.ALPHANUMERIC:
                return s.getBitsLength(v);
            case e.KANJI:
                return i.getBitsLength(v);
            case e.BYTE:
                return r.getBitsLength(v)
        }
    }

    function g(v) {
        return v.reduce(function(_, R) {
            const A = _.length - 1 >= 0 ? _[_.length - 1] : null;
            return A && A.mode === R.mode ? (_[_.length - 1].data += R.data, _) : (_.push(R), _)
        }, [])
    }

    function m(v) {
        const _ = [];
        for (let R = 0; R < v.length; R++) {
            const A = v[R];
            switch (A.mode) {
                case e.NUMERIC:
                    _.push([A, {
                        data: A.data,
                        mode: e.ALPHANUMERIC,
                        length: A.length
                    }, {
                        data: A.data,
                        mode: e.BYTE,
                        length: A.length
                    }]);
                    break;
                case e.ALPHANUMERIC:
                    _.push([A, {
                        data: A.data,
                        mode: e.BYTE,
                        length: A.length
                    }]);
                    break;
                case e.KANJI:
                    _.push([A, {
                        data: A.data,
                        mode: e.BYTE,
                        length: l(A.data)
                    }]);
                    break;
                case e.BYTE:
                    _.push([{
                        data: A.data,
                        mode: e.BYTE,
                        length: l(A.data)
                    }])
            }
        }
        return _
    }

    function w(v, _) {
        const R = {},
            A = {
                start: {}
            };
        let K = ["start"];
        for (let X = 0; X < v.length; X++) {
            const U = v[X],
                ie = [];
            for (let oe = 0; oe < U.length; oe++) {
                const we = U[oe],
                    Ie = "" + X + oe;
                ie.push(Ie), R[Ie] = {
                    node: we,
                    lastCount: 0
                }, A[Ie] = {};
                for (let Ne = 0; Ne < K.length; Ne++) {
                    const Pe = K[Ne];
                    R[Pe] && R[Pe].node.mode === we.mode ? (A[Pe][Ie] = f(R[Pe].lastCount + we.length, we.mode) - f(R[Pe].lastCount, we.mode), R[Pe].lastCount += we.length) : (R[Pe] && (R[Pe].lastCount = we.length), A[Pe][Ie] = f(we.length, we.mode) + 4 + e.getCharCountIndicator(we.mode, _))
                }
            }
            K = ie
        }
        for (let X = 0; X < K.length; X++) A[K[X]].end = 0;
        return {
            map: A,
            table: R
        }
    }

    function C(v, _) {
        let R;
        const A = e.getBestModeForData(v);
        if (R = e.from(_, A), R !== e.BYTE && R.bit < A.bit) throw new Error('"' + v + '" cannot be encoded with mode ' + e.toString(R) + `.
 Suggested mode is: ` + e.toString(A));
        switch (R === e.KANJI && !a.isKanjiModeEnabled() && (R = e.BYTE), R) {
            case e.NUMERIC:
                return new n(v);
            case e.ALPHANUMERIC:
                return new s(v);
            case e.KANJI:
                return new i(v);
            case e.BYTE:
                return new r(v)
        }
    }
    t.fromArray = function(_) {
        return _.reduce(function(R, A) {
            return typeof A == "string" ? R.push(C(A, null)) : A.data && R.push(C(A.data, A.mode)), R
        }, [])
    }, t.fromString = function(_, R) {
        const A = h(_, a.isKanjiModeEnabled()),
            K = m(A),
            X = w(K, R),
            U = c.find_path(X.map, "start", "end"),
            ie = [];
        for (let oe = 1; oe < U.length - 1; oe++) ie.push(X.table[U[oe]].node);
        return t.fromArray(g(ie))
    }, t.rawSplit = function(_) {
        return t.fromArray(h(_, a.isKanjiModeEnabled()))
    }
})(Vg);
const co = lt,
    Mo = io,
    pb = WT,
    mb = YT,
    yb = Pg,
    wb = Mg,
    Pa = kg,
    Ma = oo,
    vb = QT,
    Ei = Og,
    Eb = Bg,
    Tb = en,
    ko = Vg;

function bb(t, e) {
    const n = t.size,
        s = wb.getPositions(e);
    for (let r = 0; r < s.length; r++) {
        const i = s[r][0],
            o = s[r][1];
        for (let a = -1; a <= 7; a++)
            if (!(i + a <= -1 || n <= i + a))
                for (let c = -1; c <= 7; c++) o + c <= -1 || n <= o + c || (a >= 0 && a <= 6 && (c === 0 || c === 6) || c >= 0 && c <= 6 && (a === 0 || a === 6) || a >= 2 && a <= 4 && c >= 2 && c <= 4 ? t.set(i + a, o + c, !0, !0) : t.set(i + a, o + c, !1, !0))
    }
}

function Cb(t) {
    const e = t.size;
    for (let n = 8; n < e - 8; n++) {
        const s = n % 2 === 0;
        t.set(n, 6, s, !0), t.set(6, n, s, !0)
    }
}

function Ib(t, e) {
    const n = yb.getPositions(e);
    for (let s = 0; s < n.length; s++) {
        const r = n[s][0],
            i = n[s][1];
        for (let o = -2; o <= 2; o++)
            for (let a = -2; a <= 2; a++) o === -2 || o === 2 || a === -2 || a === 2 || o === 0 && a === 0 ? t.set(r + o, i + a, !0, !0) : t.set(r + o, i + a, !1, !0)
    }
}

function Sb(t, e) {
    const n = t.size,
        s = Ei.getEncodedBits(e);
    let r, i, o;
    for (let a = 0; a < 18; a++) r = Math.floor(a / 3), i = a % 3 + n - 8 - 3, o = (s >> a & 1) === 1, t.set(r, i, o, !0), t.set(i, r, o, !0)
}

function xo(t, e, n) {
    const s = t.size,
        r = Eb.getEncodedBits(e, n);
    let i, o;
    for (i = 0; i < 15; i++) o = (r >> i & 1) === 1, i < 6 ? t.set(i, 8, o, !0) : i < 8 ? t.set(i + 1, 8, o, !0) : t.set(s - 15 + i, 8, o, !0), i < 8 ? t.set(8, s - i - 1, o, !0) : i < 9 ? t.set(8, 15 - i - 1 + 1, o, !0) : t.set(8, 15 - i - 1, o, !0);
    t.set(s - 8, 8, 1, !0)
}

function _b(t, e) {
    const n = t.size;
    let s = -1,
        r = n - 1,
        i = 7,
        o = 0;
    for (let a = n - 1; a > 0; a -= 2)
        for (a === 6 && a--;;) {
            for (let c = 0; c < 2; c++)
                if (!t.isReserved(r, a - c)) {
                    let l = !1;
                    o < e.length && (l = (e[o] >>> i & 1) === 1), t.set(r, a - c, l), i--, i === -1 && (o++, i = 7)
                }
            if (r += s, r < 0 || n <= r) {
                r -= s, s = -s;
                break
            }
        }
}

function Ab(t, e, n) {
    const s = new pb;
    n.forEach(function(c) {
        s.put(c.mode.bit, 4), s.put(c.getLength(), Tb.getCharCountIndicator(c.mode, t)), c.write(s)
    });
    const r = co.getSymbolTotalCodewords(t),
        i = Ma.getTotalCodewordsCount(t, e),
        o = (r - i) * 8;
    for (s.getLengthInBits() + 4 <= o && s.put(0, 4); s.getLengthInBits() % 8 !== 0;) s.putBit(0);
    const a = (o - s.getLengthInBits()) / 8;
    for (let c = 0; c < a; c++) s.put(c % 2 ? 17 : 236, 8);
    return Nb(s, t, e)
}

function Nb(t, e, n) {
    const s = co.getSymbolTotalCodewords(e),
        r = Ma.getTotalCodewordsCount(e, n),
        i = s - r,
        o = Ma.getBlocksCount(e, n),
        a = s % o,
        c = o - a,
        l = Math.floor(s / o),
        u = Math.floor(i / o),
        h = u + 1,
        f = l - u,
        g = new vb(f);
    let m = 0;
    const w = new Array(o),
        C = new Array(o);
    let v = 0;
    const _ = new Uint8Array(t.buffer);
    for (let U = 0; U < o; U++) {
        const ie = U < c ? u : h;
        w[U] = _.slice(m, m + ie), C[U] = g.encode(w[U]), m += ie, v = Math.max(v, ie)
    }
    const R = new Uint8Array(s);
    let A = 0,
        K, X;
    for (K = 0; K < v; K++)
        for (X = 0; X < o; X++) K < w[X].length && (R[A++] = w[X][K]);
    for (K = 0; K < f; K++)
        for (X = 0; X < o; X++) R[A++] = C[X][K];
    return R
}

function Rb(t, e, n, s) {
    let r;
    if (Array.isArray(t)) r = ko.fromArray(t);
    else if (typeof t == "string") {
        let l = e;
        if (!l) {
            const u = ko.rawSplit(t);
            l = Ei.getBestVersionForData(u, n)
        }
        r = ko.fromString(t, l || 40)
    } else throw new Error("Invalid data");
    const i = Ei.getBestVersionForData(r, n);
    if (!i) throw new Error("The amount of data is too big to be stored in a QR Code");
    if (!e) e = i;
    else if (e < i) throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: ` + i + `.
`);
    const o = Ab(e, n, r),
        a = co.getSymbolSize(e),
        c = new mb(a);
    return bb(c, e), Cb(c), Ib(c, e), xo(c, n, 0), e >= 7 && Sb(c, e), _b(c, o), isNaN(s) && (s = Pa.getBestMask(c, xo.bind(null, c, n))), Pa.applyMask(s, c), xo(c, n, s), {
        modules: c,
        version: e,
        errorCorrectionLevel: n,
        maskPattern: s,
        segments: r
    }
}
Rg.create = function(e, n) {
    if (typeof e == "undefined" || e === "") throw new Error("No input text");
    let s = Mo.M,
        r, i;
    return typeof n != "undefined" && (s = Mo.from(n.errorCorrectionLevel, Mo.M), r = Ei.from(n.version), i = Pa.from(n.maskPattern), n.toSJISFunc && co.setToSJISFunction(n.toSJISFunc)), Rb(e, r, s, i)
};
var jg = {},
    nl = {};
(function(t) {
    function e(n) {
        if (typeof n == "number" && (n = n.toString()), typeof n != "string") throw new Error("Color should be defined as hex string");
        let s = n.slice().replace("#", "").split("");
        if (s.length < 3 || s.length === 5 || s.length > 8) throw new Error("Invalid hex color: " + n);
        (s.length === 3 || s.length === 4) && (s = Array.prototype.concat.apply([], s.map(function(i) {
            return [i, i]
        }))), s.length === 6 && s.push("F", "F");
        const r = parseInt(s.join(""), 16);
        return {
            r: r >> 24 & 255,
            g: r >> 16 & 255,
            b: r >> 8 & 255,
            a: r & 255,
            hex: "#" + s.slice(0, 6).join("")
        }
    }
    t.getOptions = function(s) {
        s || (s = {}), s.color || (s.color = {});
        const r = typeof s.margin == "undefined" || s.margin === null || s.margin < 0 ? 4 : s.margin,
            i = s.width && s.width >= 21 ? s.width : void 0,
            o = s.scale || 4;
        return {
            width: i,
            scale: i ? 4 : o,
            margin: r,
            color: {
                dark: e(s.color.dark || "#000000ff"),
                light: e(s.color.light || "#ffffffff")
            },
            type: s.type,
            rendererOpts: s.rendererOpts || {}
        }
    }, t.getScale = function(s, r) {
        return r.width && r.width >= s + r.margin * 2 ? r.width / (s + r.margin * 2) : r.scale
    }, t.getImageWidth = function(s, r) {
        const i = t.getScale(s, r);
        return Math.floor((s + r.margin * 2) * i)
    }, t.qrToImageData = function(s, r, i) {
        const o = r.modules.size,
            a = r.modules.data,
            c = t.getScale(o, i),
            l = Math.floor((o + i.margin * 2) * c),
            u = i.margin * c,
            h = [i.color.light, i.color.dark];
        for (let f = 0; f < l; f++)
            for (let g = 0; g < l; g++) {
                let m = (f * l + g) * 4,
                    w = i.color.light;
                if (f >= u && g >= u && f < l - u && g < l - u) {
                    const C = Math.floor((f - u) / c),
                        v = Math.floor((g - u) / c);
                    w = h[a[C * o + v] ? 1 : 0]
                }
                s[m++] = w.r, s[m++] = w.g, s[m++] = w.b, s[m] = w.a
            }
    }
})(nl);
(function(t) {
    const e = nl;

    function n(r, i, o) {
        r.clearRect(0, 0, i.width, i.height), i.style || (i.style = {}), i.height = o, i.width = o, i.style.height = o + "px", i.style.width = o + "px"
    }

    function s() {
        try {
            return document.createElement("canvas")
        } catch {
            throw new Error("You need to specify a canvas element")
        }
    }
    t.render = function(i, o, a) {
        let c = a,
            l = o;
        typeof c == "undefined" && (!o || !o.getContext) && (c = o, o = void 0), o || (l = s()), c = e.getOptions(c);
        const u = e.getImageWidth(i.modules.size, c),
            h = l.getContext("2d"),
            f = h.createImageData(u, u);
        return e.qrToImageData(f.data, i, c), n(h, l, u), h.putImageData(f, 0, 0), l
    }, t.renderToDataURL = function(i, o, a) {
        let c = a;
        typeof c == "undefined" && (!o || !o.getContext) && (c = o, o = void 0), c || (c = {});
        const l = t.render(i, o, c),
            u = c.type || "image/png",
            h = c.rendererOpts || {};
        return l.toDataURL(u, h.quality)
    }
})(jg);
var Hg = {};
const Db = nl;

function Ju(t, e) {
    const n = t.a / 255,
        s = e + '="' + t.hex + '"';
    return n < 1 ? s + " " + e + '-opacity="' + n.toFixed(2).slice(1) + '"' : s
}

function Lo(t, e, n) {
    let s = t + e;
    return typeof n != "undefined" && (s += " " + n), s
}

function Pb(t, e, n) {
    let s = "",
        r = 0,
        i = !1,
        o = 0;
    for (let a = 0; a < t.length; a++) {
        const c = Math.floor(a % e),
            l = Math.floor(a / e);
        !c && !i && (i = !0), t[a] ? (o++, a > 0 && c > 0 && t[a - 1] || (s += i ? Lo("M", c + n, .5 + l + n) : Lo("m", r, 0), r = 0, i = !1), c + 1 < e && t[a + 1] || (s += Lo("h", o), o = 0)) : r++
    }
    return s
}
Hg.render = function(e, n, s) {
    const r = Db.getOptions(n),
        i = e.modules.size,
        o = e.modules.data,
        a = i + r.margin * 2,
        c = r.color.light.a ? "<path " + Ju(r.color.light, "fill") + ' d="M0 0h' + a + "v" + a + 'H0z"/>' : "",
        l = "<path " + Ju(r.color.dark, "stroke") + ' d="' + Pb(o, i, r.margin) + '"/>',
        u = 'viewBox="0 0 ' + a + " " + a + '"',
        h = r.width ? 'width="' + r.width + '" height="' + r.width + '" ' : "",
        f = '<svg xmlns="http://www.w3.org/2000/svg" ' + h + u + ' shape-rendering="crispEdges">' + c + l + `</svg>
`;
    return typeof s == "function" && s(null, f), f
};
const Mb = zT,
    ka = Rg,
    Kg = jg,
    kb = Hg;

function sl(t, e, n, s, r) {
    const i = [].slice.call(arguments, 1),
        o = i.length,
        a = typeof i[o - 1] == "function";
    if (!a && !Mb()) throw new Error("Callback required as last argument");
    if (a) {
        if (o < 2) throw new Error("Too few arguments provided");
        o === 2 ? (r = n, n = e, e = s = void 0) : o === 3 && (e.getContext && typeof r == "undefined" ? (r = s, s = void 0) : (r = s, s = n, n = e, e = void 0))
    } else {
        if (o < 1) throw new Error("Too few arguments provided");
        return o === 1 ? (n = e, e = s = void 0) : o === 2 && !e.getContext && (s = n, n = e, e = void 0), new Promise(function(c, l) {
            try {
                const u = ka.create(n, s);
                c(t(u, e, s))
            } catch (u) {
                l(u)
            }
        })
    }
    try {
        const c = ka.create(n, s);
        r(null, t(c, e, s))
    } catch (c) {
        r(c)
    }
}
ro.create = ka.create;
ro.toCanvas = sl.bind(null, Kg.render);
ro.toDataURL = sl.bind(null, Kg.renderToDataURL);
ro.toString = sl.bind(null, function(t, e, n) {
    return kb.render(t, n)
});
export {
    qb as A, Kb as B, sC as C, eC as D, ro as E, ft as F, Bb as G, nC as H, Xb as I, Yb as J, Gb as K, Wb as L, tC as P, d0 as R, tf as a, Qe as b, Ub as c, $b as d, Dm as e, Vb as f, y0 as g, jb as h, Ob as i, St as j, Fb as k, Hb as l, Or as m, Oa as n, Qh as o, Lb as p, Zb as q, Th as r, Qb as s, xb as t, _s as u, zb as v, jp as w, Jb as x, Bh as y, Vh as z
};