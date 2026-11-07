# Stone–Weierstrass（复情形）　`thm.stone-weierstrass-complex`　·　说明
根 `../`

**第三步：拼回复值函数**。任取 $f \in C(K, \mathbb{C})$，写 $f = \operatorname{Re} f + i\operatorname{Im} f$，其中 $\operatorname{Re} f, \operatorname{Im} f \in C(K, \mathbb{R})$。取 $g_n, h_n \in B$ 使 $g_n \to \operatorname{Re} f$、$h_n \to \operatorname{Im} f$ 一致。则 $g_n + i h_n \in A$（$A$ 对复标量乘法与加法封闭），且 

$$\lVert f - (g_n + i h_n)\rVert_\infty \le \lVert \operatorname{Re} f - g_n\rVert_\infty + \lVert \operatorname{Im} f - h_n\rVert_\infty \to 0 .$$

 故 $f \in \overline A$，即 $\overline A = C(K, \mathbb{C})$。∎

> 续见 notes/thm.stone-weierstrass-complex.3.md
