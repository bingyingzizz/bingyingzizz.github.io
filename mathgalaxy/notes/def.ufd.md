# 唯一分解整环　`def.ufd`　·　说明
根 `../`

$\mathbb{Z}$ 与 $K[x]$ 都是 UFD（后者见 `thm.poly-ufd`），而 $\mathbb{Z}[\sqrt{-5}]$ 不是：

$$6 = 2 \cdot 3 = (1+\sqrt{-5})(1-\sqrt{-5}),$$

四个因子都不可约，且互不相伴 —— 所以分解不唯一。

UFD 的判别：**UFD $\iff$（分解存在）且（不可约 = 素）**。三条常被并列的性质都不单独等价于 UFD：①「不可约 = 素」（`def.irreducible-element`）只在**分解存在性**已经成立时才够（去掉存在性就弱了 —— 全体代数整数构成的环里没有不可约元，条件空真成立，却不是 UFD）；② 任意两元素有 $\gcd$ 是 **gcd 整环**（`def.gcd-domain`）的条件，严格弱于 UFD（本图只给了 UFD $\implies$ gcd 整环 的方向，即 `imp.ring-ufd-gcd`；反向不成立，例如非离散的赋值环）；③ 没有无限下降的因子链是 **ACCP**，也严格弱于 UFD（$\mathbb{Z}[\sqrt{-5}]$ 是 Noether 环、故有 ACCP，却不是 UFD）。

> 续见 notes/def.ufd.2.md
