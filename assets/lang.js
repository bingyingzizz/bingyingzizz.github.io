/* ==========================================================================
   站点 · 共享语言层（site/assets/lang.js）
   --------------------------------------------------------------------------
   一个 classic <script>（⛔ 不用 ES module），零依赖、零网络请求、零外部字体。
   它负责四件事：
     ① 检测语言，并把结果写成 <html data-lang="zh|en" lang="zh-CN|en">；
     ② 绑「中文 / EN」开关（按钮或链接），点一下切页内两套文案；
     ③ 点击时写 localStorage + 更新 URL 的 `?lang=`（保留 hash 与其它 query）；
     ④ 广播 `mg:lang` 事件，让页面自己的脚本（比如阅读页的「原文」链接）跟着改。

   检测顺序（与 src/core/i18n.js 完全一致，站点与星图共用同一个 localStorage key）：
     ① URL `?lang=en|zh` —— 显式选择，优先级最高
     ② localStorage `mathgalaxy.read.lang` —— 上次点的
     ③ navigator.language 以 en 开头
     ④ 默认中文

   ⚠️ 首屏之前定 data-lang 的那几行 **内联在每个页面的 <head> 里**（见各模板）。
      原因：等这个文件下载完再定，英文用户会先看到一屏中文。
      这里在 DOMContentLoaded 时再按同一套规则对账一次 —— detect() 是唯一真源，
      head 里那段是它的「首屏前副本」，改规则要两处一起改（#LANG_BOOT in tools/sitepages.mjs）。

   ⛔ 本文件不读 IP，也不可能读到：GitHub Pages 是纯静态托管，没有服务端。
      所以「按访客语言」= 浏览器语言（navigator.language），不是地理位置。
   ========================================================================== */
(function () {
  'use strict';

  var KEY = 'mathgalaxy.read.lang';
  var root = document.documentElement;
  /* 单语言页（nodes/<id>.html、<id>.en.html、论文详情页）把语言写在 URL 上，
     页面本身没有第二套文案可换 —— 它们带 `data-lang-lock`：这里只记选择，
     不覆盖 <html lang>，否则中文页会被标成 en（那是错的，a11y 与 SEO 都会错）。 */
  var LOCKED = root.hasAttribute('data-lang-lock');

  function norm(v) {
    v = String(v == null ? '' : v).trim().toLowerCase();
    return v === 'en' ? 'en' : v === 'zh' ? 'zh' : null;
  }
  function paramLang() {
    try { return norm(new URLSearchParams(location.search).get('lang')); } catch (e) { return null; }
  }
  function storedLang() {
    try { return norm(localStorage.getItem(KEY)); } catch (e) { return null; }
  }
  function browserLang() {
    var l = String(navigator.language || navigator.userLanguage || '').toLowerCase();
    return l.indexOf('en') === 0 ? 'en' : 'zh';
  }
  function detect() { return paramLang() || storedLang() || browserLang(); }
  function current() { return root.getAttribute('data-lang') === 'en' ? 'en' : 'zh'; }

  /* --- 属性类文案：placeholder / aria-label / title（文本节点换不了这些） --- */
  var ATTRS = [
    ['data-ph-zh', 'data-ph-en', 'placeholder'],
    ['data-label-zh', 'data-label-en', 'aria-label'],
    ['data-tt-zh', 'data-tt-en', 'title']
  ];
  function syncAttrs(l) {
    for (var i = 0; i < ATTRS.length; i++) {
      var a = ATTRS[i];
      var els = document.querySelectorAll('[' + a[0] + ']');
      for (var j = 0; j < els.length; j++) {
        var v = els[j].getAttribute(l === 'en' ? a[1] : a[0]);
        if (v) els[j].setAttribute(a[2], v);
      }
    }
  }

  /* --- <title> 与 meta description：英文值写在 data-* 上，中文值首次从 DOM 里抓 --- */
  function syncMeta(l) {
    var t = document.querySelector('title[data-title-en]');
    if (t) {
      if (!t.getAttribute('data-title-zh')) t.setAttribute('data-title-zh', t.textContent);
      var tv = t.getAttribute(l === 'en' ? 'data-title-en' : 'data-title-zh');
      if (tv) t.textContent = tv;
    }
    var d = document.querySelector('meta[name="description"][data-desc-en]');
    if (d) {
      if (!d.getAttribute('data-desc-zh')) d.setAttribute('data-desc-zh', d.getAttribute('content') || '');
      var dv = d.getAttribute(l === 'en' ? 'data-desc-en' : 'data-desc-zh');
      if (dv) d.setAttribute('content', dv);
    }
  }

  /* --- 开关的选中态：按钮给 aria-pressed，链接给 aria-current --- */
  function syncSwitch(l) {
    var els = document.querySelectorAll('[data-lang-set]');
    for (var i = 0; i < els.length; i++) {
      var on = norm(els[i].getAttribute('data-lang-set')) === l;
      if (els[i].tagName === 'A') {
        if (on) els[i].setAttribute('aria-current', 'true');
        else els[i].removeAttribute('aria-current');
      } else {
        els[i].setAttribute('aria-pressed', on ? 'true' : 'false');
      }
    }
  }

  function apply(l) {
    root.setAttribute('data-lang', l);
    root.lang = l === 'en' ? 'en' : 'zh-CN';
    syncAttrs(l);
    syncMeta(l);
    syncSwitch(l);
  }

  /* URL：只动 lang 参数，其它 query 与 hash 原样带走 */
  function syncUrl(l) {
    try {
      var u = new URL(location.href);
      if (l === 'en') u.searchParams.set('lang', 'en');
      else u.searchParams.delete('lang');
      history.replaceState(null, '', u.pathname + (u.search || '') + (u.hash || ''));
    } catch (e) { /* 老浏览器 / 特殊环境：URL 不同步也不是功能故障 */ }
  }

  function announce(l) {
    try {
      document.dispatchEvent(new CustomEvent('mg:lang', { detail: { lang: l } }));
    } catch (e) {
      /* 极老的浏览器没有 CustomEvent 构造器：页面自己的同步逻辑走静态默认值 */
    }
  }

  /** 切换语言。opts.persist=false 时不写 localStorage；opts.url=false 时不动 URL。 */
  function set(l, opts) {
    l = norm(l) || 'zh';
    opts = opts || {};
    if (opts.persist !== false) {
      try { localStorage.setItem(KEY, l); } catch (e) { /* 隐私模式：忽略 */ }
    }
    if (opts.url !== false) syncUrl(l);
    apply(l);
    announce(l);
  }

  /* --- 点击委托：按钮与链接同一套（链接是给无 JS 时的回退） ---
     分两种：
       data-lang-set  页内切换（这个页面有两套文案）
       data-lang-go   跨页切换（另一个 URL 才是那种语言）：只记住选择，放行跳转 */
  function closestLangEl(el, attr) {
    while (el && el !== document) {
      if (el.getAttribute && el.getAttribute(attr)) return el;
      el = el.parentNode;
    }
    return null;
  }
  function onClick(e) {
    var go = closestLangEl(e.target, 'data-lang-go');
    if (go) {
      var g = norm(go.getAttribute('data-lang-go'));
      if (!g) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button) return;
      try { localStorage.setItem(KEY, g); } catch (err) { /* 隐私模式：忽略 */ }
      return; /* ⛔ 不拦：跳转本身就是「切语言」 */
    }
    var el = closestLangEl(e.target, 'data-lang-set');
    if (!el) return;
    var v = norm(el.getAttribute('data-lang-set'));
    if (!v) return;
    if (el.tagName === 'A') {
      /* 修饰键 = 用户想在新标签打开，别拦 */
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button) return;
      e.preventDefault();
    }
    if (v === current()) return;
    set(v, { persist: true });
  }

  /* --- 首屏后对账：把 head 里那段的结果与这里的唯一真源再核一次 --- */
  function init() {
    var p = paramLang();
    /* URL 里显式写了 lang ⇒ 记住它（和 src/core/i18n.js 的行为一致）；
       仅由浏览器语言推断出来的**不**落盘 —— 否则自动检测就被冻住了。 */
    if (p) { try { localStorage.setItem(KEY, p); } catch (e) {} }
    /* 单语言页：<html lang> 是内容真实的语言，别拿访问者的偏好去改它 */
    if (LOCKED) return;
    apply(p || storedLang() || browserLang());
    /* 首屏那条也给页面脚本一次机会（阅读页要按语言换「原文」链接与标题） */
    announce(current());
  }

  window.MGLang = {
    detect: detect,
    get: current,
    set: function (l) { set(l, { persist: true }); },
    toggle: function () { set(current() === 'en' ? 'zh' : 'en', { persist: true }); }
  };

  document.addEventListener('click', onClick, false);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, false);
  else init();
})();
