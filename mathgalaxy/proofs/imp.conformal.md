# Cauchy–Riemann 方程 $\implies$ 保角性即全纯且导数非零
`imp.conformal` · 推出 · strong 边 · 根 `../`

`thm.cauchy-riemann` Cauchy–Riemann 方程 + `def.holomorphic` 全纯函数 → `prop.conformal-iff` 保角性

**(i) 全纯 + 导数非零推出保角。** 设 $\gamma_1, \gamma_2$ 是过 $z_0$ 的两条光滑曲线，切向量 $\gamma_1'(0), \gamma_2'(0)$ 都非零。由复可微，

$$(f \circ \gamma_j)'(0) = f'(z_0)\,\gamma_j'(0).$$

两式相除（$f'(z_0) \ne 0$）：

$$\frac{(f \circ \gamma_1)'(0)}{(f \circ \gamma_2)'(0)} = \frac{\gamma_1'(0)}{\gamma_2'(0)}.$$

两个复数的商相等，当且仅当它们相差一个正实数倍；而商的辐角就是两切向量的夹角。所以像曲线的夹角与原来**大小和方向都相同** —— 保角。

> 续见 proofs/imp.conformal.2.md
