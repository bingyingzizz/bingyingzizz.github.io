# 部分和公式 + Bernoulli $\implies$ 几何级数
`imp.geometric-series` · 推出 · strong 边 · 根 `../`

`def.series` 级数收敛 + `thm.bernoulli` Bernoulli 不等式 + `cor.archimedean-epsilon` Archimedes 的 ε 形式与取整 → `thm.geometric-series` 几何级数

**$|q| < 1$。** 部分和（$q \ne 1$）

$$s_N = \sum_{n=0}^{N} q^{n} = \frac{1 - q^{N+1}}{1 - q}.$$

要证 $q^{N} \to 0$。写 $1/|q| = 1 + h$（$h > 0$）。由 Bernoulli，$(1 + h)^{N} \ge 1 + Nh$，故

$$|q|^{N} \le \frac{1}{1 + Nh} \le \frac{1}{Nh}.$$

给定 $\varepsilon > 0$，由 `cor.archimedean-epsilon` 取 $N$ 使 $1/(Nh) < \varepsilon$。于是 $s_N \to 1/(1-q)$。

**$|q| \ge 1$。** 此时 $|q^{n}| \ge 1$，通项不趋于 $0$，由级数收敛的必要条件（`thm.cauchy-criterion-series`）发散。$\blacksquare$
