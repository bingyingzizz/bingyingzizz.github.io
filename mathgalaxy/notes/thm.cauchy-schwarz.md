# Cauchy–Schwarz 不等式　`thm.cauchy-schwarz`　·　说明
根 `../`

⭐ 它是「内积 $\implies$ 范数」这条路上唯一需要证明的一步（三角不等式由它推出）。

⭐ 证明技巧：对一切 $t \in K$ 令 $f(t) := \|u - t v\|^{2} \ge 0$，展开后是关于 $t$ 的二次式；取 $t = \langle v, u \rangle / \|v\|^{2}$ 即得结论。

⭐ 它是分析里最常用的不等式之一：$L^{2}$ 上就是 $|\int f\bar{g}| \le \|f\|_{2}\|g\|_{2}$，概率论里就是 $|\operatorname{Cov}| \le \sigma_X\sigma_Y$。名字与「数列形式的 Cauchy–Schwarz」（`analysis.lp` 团里的 Hölder 在 $p = q = 2$ 的情形）是同一个。
