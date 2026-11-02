# 实情形 $\implies$ 复情形（多一条共轭封闭）
`imp.fa-sw-complex` · 推出 · strong 边 · 根 `../`

`thm.stone-weierstrass` Stone–Weierstrass 定理 → `thm.stone-weierstrass-complex` Stone–Weierstrass（复情形）

令 $A_{\mathbb{R}} := \{\operatorname{Re}\,f : f \in A\}$。对共轭封闭 $\implies$ $\operatorname{Re}\,f = (f + \bar f)/2 \in A$、$\operatorname{Im}\,f \in A$；而 $f = \operatorname{Re}\,f + i\,\operatorname{Im}\,f$。
$A_{\mathbb{R}}$ 是含单位的实子代数（$\operatorname{Re}(fg)$ 是实部的多项式组合）且分离点。由实情形 $\overline{A_{\mathbb{R}}} = C(K,\mathbb{R})$。
于是任意 $f \in C(K,\mathbb{C})$ 的实部、虚部都能被 $A$ 中元素逼近，故 $f \in \overline A$。$\blacksquare$

> 反例（圆盘代数 $\mathrm{Alg}(z)$）缺的正是「对共轭封闭」：$\bar z$ 不在闭包里。
