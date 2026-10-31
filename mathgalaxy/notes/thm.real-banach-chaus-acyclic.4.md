# 实 Banach 在紧 Hausdorff 上零调　`thm.real-banach-chaus-acyclic`　·　说明
根 `../`

ots, V_{r}$ 覆盖 $S$（**紧性**），配从属的单位分解 $\{\varphi_{i}\}$，令 $g := \sum_{i} (\varphi_{i}\circ\pi_{n+1})\,G_{i}$。由 $\sum_{i}(\varphi_{i}\circ\pi_{n}) = 1$ 得 $f = \sum_{i}(\varphi_{i}\circ\pi_{n}) f$，又 $dg = \sum_{i}(\varphi_{i}\circ\pi_{n})\, dG_{i}$，两式相减：
$$\|f - dg\| = \Bigl\|\sum_{i} (\varphi_{i}\circ\pi_{n})\,(f - dG_{i})\Bigr\| \le \max_{i} \|f - dG_{i}\| \le \|df\| + \varepsilon,$$
最后一步是「凸组合的范数不超过最大范数」（$\varphi_{i} \ge 0$、$\sum\varphi_{i} = 1$）。这正是 $K = 1$ 的 $K$-有界正合。∎
