# Lebesgue 判据 $\implies$ Riemann 积分是 Lebesgue 积分的特例
`imp.riemann-implies-lebesgue` · 推出 · strong 边 · 根 `../`

`thm.riemann-lebesgue-criterion` 可积 ⟺ 不连续点零测 + `def.integrable` 可积 / L¹ → `prop.riemann-implies-lebesgue` Riemann 可积蕴含 Lebesgue 可积

反之：Dirichlet 函数 Lebesgue 可积（积分为 $0$）而 Riemann 不可积（见「哪些函数可积」），故不反向成立。∎

> 第 1 步里「两个积分对简单函数一致」是可以直接验算的：简单函数的 Lebesgue 积分就是 $\sum c_j m(E_j)$，而 $E_j$ 是有限个区间之并、$m(E_j)$ 就是长度之和 —— 与 Riemann 侧逐段求和相同。
