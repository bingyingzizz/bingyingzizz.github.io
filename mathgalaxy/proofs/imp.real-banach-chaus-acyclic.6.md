# imp.real-banach-chaus-acyclic
`imp.real-banach-chaus-acyclic` · 推出 · strong 边 · 根 `../`

`def.chaus` 紧 Hausdorff 空间范畴 + `def.cech-complex` Čech 复形 + `def.cech-cohomology` Čech 上同调 + `def.banach-space` Banach 空间 → `thm.real-banach-chaus-acyclic` 实 Banach 在紧 Hausdorff 上零调

由 $\sum_{i}(\varphi_{i}\circ\pi_{n}) = 1$ 得 $f = \sum_{i}(\varphi_{i}\circ\pi_{n}) f$，又 $dg = \sum_{i}(\varphi_{i}\circ\pi_{n})\, dG_{i}$，两式相减：
$$\|f - dg\| = \Bigl\|\sum_{i} (\varphi_{i}\circ\pi_{n})\,(f - dG_{i})\Bigr\| \le \max_{i} \|f - dG_{i}\| \le \|df\| + \varepsilon,$$
最后一步是「凸组合的范数不超过最大范数」（$\varphi_{i} \ge 0$、$\sum\varphi_{i} = 1$）。这正是 $K = 1$ 的 $K$-有界正合。

∎
