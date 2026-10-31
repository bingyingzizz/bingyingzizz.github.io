# Cauchy 积分公式 $\implies$ 平均值公式 $\implies$ 最大模原理
`imp.max-modulus` · 推出 · strong 边 · 根 `../`

`thm.cauchy-integral-formula` Cauchy 积分公式 → `thm.max-modulus` 最大模原理

**常数。** $|f| \equiv M$ 且 $f$ 全纯：由 CR 方程与 $|f|^2 = u^2 + v^2$ 为常数，得 $u u_x + v v_x = 0$、$u u_y + v v_y = 0$，与 $u_x = v_y$、$u_y = -v_x$ 联立解得 $u_x = u_y = v_x = v_y = 0$，故 $f$ 局部为常数、再由连通性为常数。

所以非常数全纯函数的模在内部取不到上确界 —— 这正是要证的。$\blacksquare$
