# Lebesgue 判据 $\implies$ Riemann 积分是 Lebesgue 积分的特例
`imp.riemann-implies-lebesgue` · 推出 · strong 边 · 根 `../`

`thm.riemann-lebesgue-criterion` 可积 ⟺ 不连续点零测 + `def.integrable` 可积 / L¹ → `prop.riemann-implies-lebesgue` Riemann 可积蕴含 Lebesgue 可积

较得 $\int \bar{f} = \int_a^b f$。
3. 同理对上简单函数 $\psi_n$ 用控制收敛（或单调下降）得 $\int \underline{f} = \int_a^b f$，其中 $\underline{f} := \inf_n \psi_n$。
4. 由 $\underline{f} \le f \le \bar{f}$ 与两者积分相等，得 $f = \bar{f}$ a.e.，于是 $f$ Lebesgue 可积且 $\int_{[a, b]} f\,dm = \int_a^b f$。

> 续见 proofs/imp.riemann-implies-lebesgue.4.md
