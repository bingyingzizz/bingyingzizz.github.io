# 带余除法 $\implies$ 唯一分解
`imp.poly-ufd` · 推出 · strong 边 · 根 `../`

`thm.division-algorithm` 带余除法 → `thm.poly-ufd` K[x] 是唯一分解整环

记 $R := K[x]$，它是整环（$\deg(fg) = \deg f + \deg g$）。

**第一步：辗转相除与 Bézout 等式。** 对 $f, g \ne 0$ 反复用带余除法（$f = qg + r$，$\deg r < \deg g$），次数严格下降故必停：最后非零余式 $d$ 满足 $d \mid f$、$d \mid g$，且存在 $a, b \in R$ 使

$$a f + b g = d$$

（把除法的每一步回代即得。）$d$ 就是 $\gcd(f, g)$（首一化之后唯一）。

> 续见 proofs/imp.poly-ufd.2.md
