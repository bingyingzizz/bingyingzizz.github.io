# 调和 + Cauchy–Riemann $\implies$ 局部是全纯函数的实部
`imp.harmonic-conjugate` · 推出 · strong 边 · 根 `../`

`def.harmonic` 调和函数 + `thm.cauchy-riemann` Cauchy–Riemann 方程 → `thm.harmonic-conjugate` 调和函数的共轭

**第一步：造 1-形式。** 令

$$\omega := -u_y\,\mathrm{d}x + u_x\,\mathrm{d}y.$$

它是**闭**的：$\mathrm{d}\omega = \left( \dfrac{\partial u_x}{\partial x} + \dfrac{\partial u_y}{\partial y} \right)\mathrm{d}x \wedge \mathrm{d}y = \Delta u\,\mathrm{d}x \wedge \mathrm{d}y = 0$。

**第二步：单连通给出原函数。** 闭 1-形式在单连通区域上恰当，故存在 $v \in C^1(\Omega)$ 使 $\mathrm{d}v = \omega$，也就是

$$v_x = -u_y, \qquad v_y = u_x.$$

**第三步：验证 Cauchy–Riemann。** 这两式正是 $u_x = v_y$、$u_y = -v_x$。$u, v \in C^1$，故 $f := u + iv$ 在 $\Omega$ 上全纯，且 $\operatorname{Re} f = u$。

> 续见 proofs/imp.harmonic-conjugate.2.md
