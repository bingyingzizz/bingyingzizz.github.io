# 依测度 Cauchy $\implies$ 依测度收敛且有一子列 a.e. 收敛
`imp.cauchy-in-measure` · 推出 · strong 边 · 根 `../`

`def.cauchy-in-measure` 依测度 Cauchy → `thm.cauchy-in-measure` 依测度 Cauchy ⟹ 收敛

$$\{|f_n - f| \ge \varepsilon\} \subseteq \{|f_n - g_j| \ge \varepsilon/2\} \cup \{|g_j - f| \ge \varepsilon/2\}$$

右边第一项由 Cauchy 性（取 $g_j = f_{N_j}$ 足够靠后）任意小，第二项由 ⑤ 任意小。故 $f_n \to f$ 依测度。∎

> ② 里 $\sum 2^{-k} < \infty$ 是关键 —— 正是这一条让「坏集合的尾并」趋于零，也就是 Borel–Cantelli 的精神。
