# Lebesgue 判据 $\implies$ Riemann 积分是 Lebesgue 积分的特例
`imp.riemann-implies-lebesgue` · 推出 · strong 边 · 根 `../`

`thm.riemann-lebesgue-criterion` 可积 ⟺ 不连续点零测 + `def.integrable` 可积 / L¹ → `prop.riemann-implies-lebesgue` Riemann 可积蕴含 Lebesgue 可积

设 $f$ 在 $[a, b]$ 上有界且 Riemann 可积。

1. **可测性**：Riemann 可积给出上、下简单函数序列

$$\varphi_n := \sum_i m_i \chi_{I_i}, \qquad \psi_n := \sum_i M_i \chi_{I_i}$$

（对一列模趋于零的分割），满足 $\varphi_n \le f \le \psi_n$ 且 $\int (\psi_n - \varphi_n) = U(f, P_n) - L(f, P_n) \to 0$（这里 $\int$ 是 Lebesgue 积分，对简单函数与 Riemann 积分一致）。

> 续见 proofs/imp.riemann-implies-lebesgue.2.md
