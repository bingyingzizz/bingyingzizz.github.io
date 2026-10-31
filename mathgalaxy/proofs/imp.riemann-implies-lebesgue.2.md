# Lebesgue 判据 $\implies$ Riemann 积分是 Lebesgue 积分的特例
`imp.riemann-implies-lebesgue` · 推出 · strong 边 · 根 `../`

`thm.riemann-lebesgue-criterion` 可积 ⟺ 不连续点零测 + `def.integrable` 可积 / L¹ → `prop.riemann-implies-lebesgue` Riemann 可积蕴含 Lebesgue 可积

（对一列模趋于零的分割），满足 $\varphi_n \le f \le \psi_n$ 且 $\int (\psi_n - \varphi_n) = U(f, P_n) - L(f, P_n) \to 0$（这里 $\int$ 是 Lebesgue 积分，对简单函数与 Riemann 积分一致）。于是 $f$ 是简单函数的上确界，因而可测。
2. **两个积分相等**：$\int \varphi_n \to \int_a^b f$（Riemann 侧，由下和的性质），而 $\varphi_n \uparrow \bar{f} \le f$ 点态单调上升，由单调收敛定理 $\int \varphi_n \to \int \bar{f}$，其中 $\bar{f} := \sup_n \varphi_n$。两式比

> 续见 proofs/imp.riemann-implies-lebesgue.3.md
