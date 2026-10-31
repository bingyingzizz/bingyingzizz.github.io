# 全纯的定义 + 复偏导数 $\implies$ Cauchy–Riemann 方程
`imp.cauchy-riemann` · 推出 · strong 边 · 根 `../`

`def.holomorphic` 全纯函数 + `def.complex-partial` 复偏导数 → `thm.cauchy-riemann` Cauchy–Riemann 方程

故 $\partial f/\partial \bar z = 0$ 等价于 $u_x = v_y$ 且 $v_x = -u_y$ —— 正是 Cauchy–Riemann 方程。

**(iii) 推出 (i)。** 若 $\partial f/\partial \bar z(z_0) = 0$，则增量展开退化为 $\Delta f = f_z(z_0)\,\Delta z + o(\Delta z)$，两边除以 $\Delta z$ 并令 $\Delta z \to 0$，得差商极限存在，即 $f'(z_0) = f_z(z_0)$。

**导数的分量形式。** 同一次计算给出

$$\frac{\partial f}{\partial z} = \frac{1}{2}\left[ (u_x + i v_x) - i(u_y + i v_y) \right] = \frac{1}{2}\left[ (u_x + v_y) + i(v_x - u_y) \right] = u_x + i v_x,$$

最后一步用了 CR 方程。

> 续见 proofs/imp.cauchy-riemann.3.md
