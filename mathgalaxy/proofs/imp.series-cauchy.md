# 实数的 Cauchy 准则 $\implies$ 级数的 Cauchy 准则
`imp.series-cauchy` · 推出 · strong 边 · 根 `../`

`thm.cauchy-criterion` Cauchy 收敛准则 + `def.series` 级数收敛 → `thm.cauchy-criterion-series` 级数的 Cauchy 准则

设 $s_N = \sum_{n \le N} a_n$。由定义，$\sum a_n$ 收敛 $\iff$ 数列 $\{s_N\}$ 收敛；而由实数的 Cauchy 收敛准则，$\{s_N\}$ 收敛 $\iff$ $\{s_N\}$ 是 Cauchy 列，即

$$\forall \varepsilon > 0,\ \exists N,\ \forall n > m \ge N :\ |s_n - s_m| < \varepsilon$$

把 $s_n - s_m = \sum_{k=m+1}^{n} a_k$ 代进去即得所证。

**必要条件**：$\sum a_n$ 收敛时 $a_n = s_n - s_{n-1} \to 0$（两个收敛数列之差）。∎

> 这条准则里**唯一**的外来输入是实数的完备性 —— 换句话说，级数收敛的判别本质上是在用 $\mathbb{R}$ 没有洞。
