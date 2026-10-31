# M-判别法 + 导数交换 $\implies$ 幂级数可逐项求导
`imp.power-series-analytic` · 推出 · strong 边 · 根 `../`

`thm.uniform-limit-derivative` 导数与极限交换 + `prop.weierstrass-m-test` Weierstrass 判别法 + `thm.convergence-radius` 收敛半径 → `thm.power-series-analytic` 幂级数的逐项运算

设 $r < R$，取 $r < \rho < R$。

1. **在 $[x_0 - r, x_0 + r]$ 上一致收敛**：$|a_n (x - x_0)^{n}| \le |a_n| \rho^{n}$，而 $\sum |a_n| \rho^{n}$ 收敛（因为 $\rho < R$），由 Weierstrass 判别法一致收敛。再由「一致收敛保连续」，$f$ 在每个这样的区间上连续，从而在 $|x - x_0| < R$ 内连续。
2. **逐项求导后的级数**：$\sum n a_n (x - x_0)^{n-1}$ 的收敛半径是

$$\frac{1}{\limsup \sqrt[n]{n|a_n|}} = \frac{1}{\limsup \sqrt[n]{|a_n|}} = R$$

> 续见 proofs/imp.power-series-analytic.2.md
