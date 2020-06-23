class Comp {
    get version() {
        return .2
    }
    constructor(e) {
        let t;
        switch (typeof e) {
            case "string":
                t = document.querySelectorAll(e);
                break;
            case "object":
                t = void 0 === e.length ? [e] : e;
                break;
            default:
                throw new TypeError(this.constructor.name + " - bĹÄdny selektor: " + e)
        }
        this.length = t.length, Object.assign(this, t)
    }
    test(e, t, r) {
        if (e) throw t;
        return r
    }
    addClass(e) {
        let t = this.length;
        for (this.test("string" != typeof e, new TypeError("Do metody addClass zostaĹ przekazany argument niebÄdÄcy ciÄgiem znakĂłw, przekazany argument to: " + e)); t--;) this[t].classList.add(...e.split(" "));
        return this
    }
    removeClass(e) {
        let t = this.length;
        for (this.test("string" != typeof e, new TypeError("Do metody removeClass zostaĹ przekazany argument niebÄdÄcy ciÄgiem znakĂłw, przekazany argument to: " + e)); t--;) this[t].classList.remove(...e.split(" "));
        return this
    }
    on(e, t) {
        let r = this.length;
        for (this.test("string" != typeof e, new TypeError("Do metody on zostaĹ przekazany argument niebÄdÄcy ciÄgiem znakĂłw, przekazany argument to: " + e)), this.test("function" != typeof t, new TypeError("Do metody on zostaĹ przekazany argument niebÄdÄcy funkcjÄ, przekazany argument to: " + t)); r--;) this[r].addEventListener(e, t);
        return this
    }
    html(e) {
        let t = this.length;
        if (!e) return this.test(e.length > 1, new TypeError("Do metody html zostaĹ przekazany argument zawierajÄcy wiÄcej niĹź jeden element, przekazany argument to: " + e)), this[0].innerHTML;
        for (this.test("string" != typeof e, new TypeError("Do metody html zostaĹ przekazany argument niebÄdÄcy ciÄgiem znakĂłw, przekazany argument to: " + e)); t--;) this[t].innerHTML = e;
        return this
    }
    index() {
        let e = this[0].parentElement,
            t = e.children.length,
            r = -1;
        for (this.test(this.length > 1, new TypeError("WywoĹano metodÄ index na obiekcie posiadajÄcym wiÄcej niĹź jeden element.")); t--;) e.children[t] === this[0] && (r = t);
        return r
    }
    foreach(e) {
        for (let t = 0; t < this.length; t++) e.apply(this[t]);
        return this
    }
    ajax(e) {
        let t = new XMLHttpRequest,
            r = this.test("string" != typeof e.type, new TypeError("Do metody ajax zostaĹ przekazany argument niebÄdÄcy ciÄgiem znakĂłw, przekazany argument to: " + e.type), e.type),
            n = this.test("string" != typeof e.url, new TypeError("Do metody ajax zostaĹ przekazany argument niebÄdÄcy ciÄgiem znakĂłw, przekazany argument to: " + e.url), e.url),
            a = e.data,
            s = e.success ? this.test("function" != typeof e.success, new TypeError("Do metody ajax zostaĹ przekazany argument niebÄdÄcy funkcjÄ, przekazany argument to: " + e.success), e.success) : () => {},
            o = e.error ? this.test("function" != typeof e.error, new TypeError("Do metody ajax zostaĹ przekazany argument niebÄdÄcy funkcjÄ, przekazany argument to: " + e.error), e.error) : () => {};
        if ("GET" === r) {
            if (!n) throw new TypeError(this.ajax.name + " - adres do pobrania danych jest wymagany");
            t.open(r, n, !0), t.onload = function () {
                t.status >= 200 && t.status < 400 ? s(t.responseText) : (console.warn("Podany adres serwera zwraca bĹÄd"), o())
            }, t.onerror = function () {
                o()
            }, t.send()
        } else if ("POST" === r) {
            if (!n) throw new TypeError(this.ajax.name + " - adres do wysĹania danych jest wymagany");
            if (!a) throw new TypeError(this.ajax.name + " - dane do wysĹania sÄ wymagane");
            t.open(r, n, !0), t.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"), t.send(a)
        }
        return this
    }
}