# 实情形 $\implies$ 复情形（多一条共轭封闭）
`imp.fa-sw-complex` · 推出 · strong 边 · 根 `../`

`thm.stone-weierstrass` Stone–Weierstrass 定理 → `thm.stone-weierstrass-complex` Stone–Weierstrass（复情形）

)$，用 $\operatorname{Im} f \in B$。这里 $\operatorname{Re} f = (f + \bar f)/2$、$\operatorname{Im} f = (f - \bar f)/(2i)$ 由共轭封闭落在 $A$ 里，且实值。
**实情形。** 由实 Stone–Weierstrass（`thm.stone-weierstrass`），$B$ 在 $C(K, \mathbb{R})$ 中稠密。
**拼回。** 任取 $f \in C(K, \mathbb{C})$，则 $\operatorname{Re} f, \operatorname{Im} f \in B$（上面已证它们是 $A$ 中的实值函数），故存在 $g_n, h_n \in B$ 使 $g_n \to \operatorname{Re} f$、$h_n \to \operatorname{Im} f$ 一致；$g_n + i h_n \in A$ 且一致收敛到 $f$。所以 $f 

> 续见 proofs/imp.fa-sw-complex.3.md
