# Bolzano–Weierstrass $\implies$ Cauchy 收敛准则
`imp.bw-cauchy` · 推出 · strong 边 · 根 `../`

`thm.bolzano-weierstrass` Bolzano–Weierstrass 定理 → `thm.cauchy-criterion` Cauchy 收敛准则

「$\implies$」：设 $x_n \to x$。给定 $\varepsilon > 0$，取 $N$ 使 $n \ge N$ 时 $|x_n - x| < \varepsilon / 2$。则 $m, n \ge N$ 时

$$|x_m - x_n| \le |x_m - x| + |x_n - x| < \varepsilon$$

故 $\{x_n\}$ 是 Cauchy 列。

「$\Longleftarrow$」：设 $\{x_n\}$ 是 Cauchy 列。

> 续见 proofs/imp.bw-cauchy.2.md
