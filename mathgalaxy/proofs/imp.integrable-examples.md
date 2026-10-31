# 振幅判据 + 一致连续 $\implies$ 可积性三例
`imp.integrable-examples` · 推出 · strong 边 · 根 `../`

`thm.riemann-criterion` 可积的振幅判据 + `thm.uniform-continuity-compact` 紧集上连续 ⟹ 一致连续 + `thm.evt` 最值定理 → `prop.integrable-examples` 哪些函数可积

**① 连续 $\implies$ 可积。** 设 $f$ 在 $[a, b]$ 上连续，令 $M := \sup |f|$。由 Cantor 定理，$f$ 在 $[a, b]$ 上**一致连续**：对 $\varepsilon > 0$ 取 $\delta > 0$，使 $|x - y| < \delta$ 时 $|f(x) - f(y)| < \dfrac{\varepsilon}{b - a}$。

取分割 $P$ 使 $\|P\| < \delta$，则每段上 $\omega_i \le \dfrac{\varepsilon}{b - a}$，于是

$$U(f, P) - L(f, P) = \sum_i \omega_i \Delta x_i \le \frac{\varepsilon}{b - a} \sum_i \Delta x_i = \varepsilon$$

由振幅判据可积。

> 续见 proofs/imp.integrable-examples.2.md
