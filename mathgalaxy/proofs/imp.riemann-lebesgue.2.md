# 振幅判据 + 零测集 $\implies$ Lebesgue 判据
`imp.riemann-lebesgue` · 推出 · strong 边 · 根 `../`

`thm.riemann-criterion` 可积的振幅判据 + `def.null-set` 零集与完备 → `thm.riemann-lebesgue-criterion` 可积 ⟺ 不连续点零测

由一致性（$K$ 紧）可得：存在 $\delta > 0$，使 $|x - y| < \delta$、$x, y \in K$ 时 $|f(x) - f(y)| < \varepsilon / (2(b - a))$。
3. 取分割，使每个小区间要么整个落在某个 $J_k$ 里（第一类），要么长度 $< \delta$（第二类）。第一类上 $\omega_i \le 2M$，共占长度 $< \varepsilon /(4M + 1)$；第二类上 $\omega_i \le \varepsilon / (2(b - a))$。于是

$$\sum_i \omega_i \Delta x_i \le 2M \cdot \frac{\varepsilon}{4M + 1} + \frac{\varepsilon}{2(b - a)} \cdot (b - a) < \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon$$

> 续见 proofs/imp.riemann-lebesgue.3.md
