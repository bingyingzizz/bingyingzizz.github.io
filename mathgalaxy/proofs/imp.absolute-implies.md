# 级数的 Cauchy 准则 $\implies$ 绝对收敛蕴含收敛
`imp.absolute-implies` · 推出 · strong 边 · 根 `../`

`thm.cauchy-criterion-series` 级数的 Cauchy 准则 → `thm.absolute-implies-convergent` 绝对收敛 ⟹ 收敛

设 $\sum |a_n|$ 收敛。由级数的 Cauchy 准则，给定 $\varepsilon > 0$ 存在 $N$ 使 $n > m \ge N$ 时 $\sum_{k=m+1}^{n} |a_k| < \varepsilon$。由三角不等式

$$\Bigl| \sum_{k=m+1}^{n} a_k \Bigr| \le \sum_{k=m+1}^{n} |a_k| < \varepsilon$$

再一次用 Cauchy 准则，$\sum a_n$ 收敛。

关于和的不等式：对每个 $N$ 有 $|\sum_{n \le N} a_n| \le \sum_{n \le N} |a_n|$，两边令 $N \to \infty$ 并注意绝对值函数连续即得。∎

> 证明里**没有任何关于正负的假设** —— 这也是为什么它能同时对实级数和复级数成立。
