# 复偏导数的定义 $\implies$ 运算法则
`imp.complex-partial-rules` · 推出 · strong 边 · 根 `../`

`def.complex-partial` 复偏导数 → `prop.complex-partial-rules` 复偏导数的运算法则

五条全部由「实偏导的对应法则 + 线性组合」直接得到，没有新的分析内容。举两条容易看错的。

**(1) 坐标。** $z = x + iy$ 给出 $z_x = 1$、$z_y = i$，故 $\partial z/\partial z = \frac{1}{2}(1 - i \cdot i) = \frac{1}{2}(1 + 1) = 1$，$\partial z/\partial \bar z = \frac{1}{2}(1 + i \cdot i) = 0$；$\bar z = x - iy$ 给出 $\bar z_x = 1$、$\bar z_y = -i$，同样算得 $\partial \bar z/\partial \bar z = 1$、$\partial \bar z/\partial z = 0$。

**(5) 复合。** 这一步真要算。设 $w = f(z)$，由 $g$ 的实可微性

$$g(w_0 + \Delta w) - g(w_0) = \frac{\partial g}{\partial w}\,\Delta w + \frac{\partial g}{\partial \bar w}\,\overline{\Delta w} + o(\Delta w).$$

> 续见 proofs/imp.complex-partial-rules.2.md
