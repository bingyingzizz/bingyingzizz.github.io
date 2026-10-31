# Bolzano–Weierstrass $\implies$ Cauchy 收敛准则
`imp.bw-cauchy` · 推出 · strong 边 · 根 `../`

`thm.bolzano-weierstrass` Bolzano–Weierstrass 定理 → `thm.cauchy-criterion` Cauchy 收敛准则

1. **先证有界**：取 $\varepsilon = 1$ 得 $N_0$，使 $m, n \ge N_0$ 时 $|x_m - x_n| < 1$。于是 $n \ge N_0$ 时 $|x_n| \le |x_{N_0}| + 1$，而前 $N_0 - 1$ 项有限，故 $\{x_n\}$ 有界。
2. 由 Bolzano–Weierstrass，存在子列 $x_{n_k} \to x$。
3. **证原列也收敛到 $x$**：给定 $\varepsilon > 0$，取 $N_1$ 使 $m, n \ge N_1$ 时 $|x_m - x_n| < \varepsilon / 2$（Cauchy 性），再取 $k$ 使 $n_k \ge N_1$ 且 $|x_{n_k} - x| < \varepsilon / 2$。则 $n \ge N_1$ 时

$$|x_n - x| \le |x_n - x_{n_k}| + |x_{n_k} - x| < \varepsilon$$

注意第 3 步里 $n_k \ge N_1$ 是关键 —— 它保证 $|x_n - x_{n_k}|$ 可以按 Cauchy 性来估。∎

> 第 1 步（Cauchy 列必有界）是最容易被忽略、但必须写出来的一步 —— 没有它就用不上 Bolzano–Weierstrass。
