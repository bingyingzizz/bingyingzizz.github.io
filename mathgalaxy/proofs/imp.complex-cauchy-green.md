# 拆实部虚部 + Green 公式 $\implies$ Cauchy–Green 恒等式
`imp.complex-cauchy-green` · 推出 · strong 边 · 根 `../`

`def.contour-integral` 复围道积分 + `thm.cauchy-riemann` Cauchy–Riemann 方程 → `lem.cauchy-green` Cauchy–Green 恒等式

**第一步：拆成两条实线积分。** $f = u + iv$，$\mathrm{d}z = \mathrm{d}x + i\,\mathrm{d}y$，于是

$$\int_{\partial\Omega} f\,\mathrm{d}z = \int_{\partial\Omega}(u\,\mathrm{d}x - v\,\mathrm{d}y) + i\int_{\partial\Omega}(v\,\mathrm{d}x + u\,\mathrm{d}y).$$

**第二步：两条都套 Green 公式** $\oint_{\partial\Omega}(P\,\mathrm{d}x + Q\,\mathrm{d}y) = \iint_\Omega (Q_x - P_y)\,\mathrm{d}x\mathrm{d}y$（$\partial\Omega$ 取正向）。

第一条：$P = u$、$Q = -v$，得 $\iint(-v_x - u_y)$。第二条：$P = v$、$Q = u$，得 $\iint(u_x - v_y)$。合起来

> 续见 proofs/imp.complex-cauchy-green.2.md
