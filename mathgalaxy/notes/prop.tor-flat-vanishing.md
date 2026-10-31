# 平坦与挠积消失　`prop.tor-flat-vanishing`　·　说明
根 `../`

**证明。**
$(1) \implies (3)$：取 $F$ 的一个投射消解 $P_{\bullet} \to F$。$F$ 平坦时 $\operatorname{Tor}_{n}$ 还可以改用 $N$ 的消解来算，于是取 $N$ 的投射消解 $Q_{\bullet}$：$N$ 一侧的消解给出 $\operatorname{Tor}_{n}(F, N) = H_{n}(F\otimes Q_{\bullet})$；而 $F\otimes -$ 正合、$Q_{\bullet} \to N$ 正合，故 $F\otimes Q_{\bullet}$ 只在 $0$ 次有同调，高次为零 ✓。
$(3) \implies (2)$：取 $n = 1$ ✓。
$(2) \implies (1)$：任取单射 $f : M_{1} \rightarrowtail M$，要证 $F\otimes M_{1} \to F\otimes M$ 单。把它塞进短正合列 $0 \to M_{1} \to M \to M/M_{1} \to 0$，张量 $F$ 取长正合列
$$\operatorname{Tor}_{1}^{R}(F,\ M/M_{1}) \to F\otimes M_{1} \to F\otimes M \to F\otimes M/M_{1} \to 0 ,$$
左端为零（条件 2），故 $F\otimes M_{1} \to F\otimes M$ 是**单射** ✓，即 $F\otimes -$ 正合 ✓。∎

> 续见 notes/prop.tor-flat-vanishing.2.md
