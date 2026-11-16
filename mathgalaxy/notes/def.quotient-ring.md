# 商环　`def.quotient-ring`　·　说明
根 `../`

⭐ 为什么必须是理想：要让 $(a+x)(b+y) \equiv ab \pmod I$，需要 $ay, xb, xy \in I$；$x, y \in I$ 而 $a, b$ 任意，所以 $I$ 必须从两边吸收乘法。

⭐ 例：$\mathbb{Z}/n\mathbb{Z}$、$K[x]/(f)$（$f$ 不可约时是域）、$\mathbb{F}_p[x]/(x^{2}+1)$。

⭐ 若 $A$ 是含幺**交换**环，则 $A/I$ 是整环当且仅当 $I$ 是素理想；$A/I$ 是域当且仅当 $I$ 是极大理想（两个对象见后续节点，本包先给商环的构造）。交换性不能省：$M_2(\mathbb{R})$ 的零理想 $(0)$ 是极大双边理想，但 $M_2(\mathbb{R})/(0)\cong M_2(\mathbb{R})$ 既不是整环也不是域。
