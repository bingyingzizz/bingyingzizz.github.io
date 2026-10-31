# 全纯的定义 + 复偏导数 $\implies$ Cauchy–Riemann 方程
`imp.cauchy-riemann` · 推出 · strong 边 · 根 `../`

`def.holomorphic` 全纯函数 + `def.complex-partial` 复偏导数 → `thm.cauchy-riemann` Cauchy–Riemann 方程

**(i) 推出 (iii)。** 设 $f$ 在 $z_0$ 复可微，$A = f'(z_0)$。复可微的定义就是

$$f(z_0 + \Delta z) - f(z_0) = A\,\Delta z + o(\Delta z).$$

这已经是一个形如 $A\Delta z + B\overline{\Delta z} + o(\Delta z)$ 的展开，其中 $B = 0$。比较两个表示的系数（分别取 $\Delta z = t$ 与 $\Delta z = it$，令实数 $t \to 0$）得 $\partial f/\partial z(z_0) = A$、$\partial f/\partial \bar z(z_0) = 0$。同时这也说明 $f$ 实可微（因为 $A\Delta z$ 是 $\Delta z$ 的实线性函数）。

**(iii) 与 (ii) 等价。** 把定义逐项算出来：

$$\frac{\partial f}{\partial \bar z} = \frac{1}{2}\left[ (u_x + i v_x) + i(u_y + i v_y) \right] = \frac{1}{2}\left[ (u_x - v_y) + i(v_x + u_y) \right].$$

> 续见 proofs/imp.cauchy-riemann.2.md
