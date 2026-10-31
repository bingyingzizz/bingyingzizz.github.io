# 拆实部虚部 + Green 公式 $\implies$ Cauchy–Green 恒等式
`imp.complex-cauchy-green` · 推出 · strong 边 · 根 `../`

`def.contour-integral` 复围道积分 + `thm.cauchy-riemann` Cauchy–Riemann 方程 → `lem.cauchy-green` Cauchy–Green 恒等式

$$\int_{\partial\Omega} f\,\mathrm{d}z = \iint_{\Omega}\left[ -(u_y + v_x) \right]\mathrm{d}x\mathrm{d}y + i\iint_{\Omega}(u_x - v_y)\,\mathrm{d}x\mathrm{d}y.$$

**第三步：认出右边就是 $2i f_{\bar z}$。** 由复偏导数的公式

$$2i\,\frac{\partial f}{\partial \bar z} = 2i \cdot \frac{1}{2}\left[ (u_x - v_y) + i(v_x + u_y) \right] = -(v_x + u_y) + i(u_x - v_y),$$

与上式的实部、虚部逐项相同。

**第四步：用 CR 得为零。** 全纯时 $u_x = v_y$、$u_y = -v_x$，两对被积函数都恒等于 $0$，故 $\oint_{\partial\Omega} f\,\mathrm{d}z = 0$。$\blacksquare$
