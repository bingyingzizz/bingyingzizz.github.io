# Stone–Weierstrass（复情形）　`thm.stone-weierstrass-complex`　·　说明
根 `../`

**证明**。关键是取 $A$ 的**实值部分**，把问题交回实情形。令 

$$B := \{f \in A : f = \bar f\} = A \cap C(K, \mathbb{R}).$$

**第一步：$B$ 是含单位的实子代数、分离点**。$1 \in A$ 且实值，故 $1 \in B$；$B$ 对加法、乘法与实标量乘法封闭（实值函数的运算仍在 $A$ 里且仍实值）。分离点：任取 $x \ne y$，由 $A$ 分离点存在 $f \in A$ 使 $f(x) \ne f(y)$；若 $\operatorname{Re} f(x) \ne \operatorname{Re} f(y)$，用 $\operatorname{Re} f \in B$；否则必有 $\operatorname{Im} f(x) \ne \operatorname{Im} f(y)$，用 $\operatorname{Im} f \in B$。而 $\operatorname{Re} f = (f + \bar f)/2$、$\operatorname{Im} f = (f - \bar f)/(2i)$ 由共轭封闭落在 $A$ 里，且是实值函数，故在 $B$ 里。于是 $B$ 分离 $K$ 上的点。

**第二步：用实情形**。$B$ 是 $C(K, \mathbb{R})$ 的含单位、分离点的子代数，由 `thm.stone-weierstrass`（实 Stone–Weierstrass）得 $\overline B = C(K, \mathbb{R})$（上确界范数）。

> 续见 notes/thm.stone-weierstrass-complex.2.md
