# 振幅判据 + 零测集 $\implies$ Lebesgue 判据
`imp.riemann-lebesgue` · 推出 · strong 边 · 根 `../`

`thm.riemann-criterion` 可积的振幅判据 + `def.null-set` 零集与完备 → `thm.riemann-lebesgue-criterion` 可积 ⟺ 不连续点零测

1. 取开区间族 $\{ J_k \}$ 覆盖 $D$，且 $\sum_k |J_k| < \varepsilon / (4M + 1)$。
2. 令 $K := [a, b] \setminus \bigcup_k J_k$ —— 这是**紧集**，且 $f$ 在 $K$ 上每点连续。由一致性（$K$ 紧）可得：存在 $\delta > 0$，使 $|x - y| < \delta$、$x, y \in K$ 时 $|f(x) - f(y)| < \varepsilon / (2(b - a))$。
3. 取分割，使每个小区间要么整个落在某个 $J_k$ 里（第一类），要么长度 $< \delta$（第二类）。第一类上 $\omega_i \le 2M$，共占长度 $< \varepsilon /(4M + 1)$；第二类上 $\omega_i \le \varepsilon / (2(b -

> 续见 proofs/imp.riemann-lebesgue.3.md
