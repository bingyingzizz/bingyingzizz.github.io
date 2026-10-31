# Cauchy–Riemann 方程 $\implies$ 保角性即全纯且导数非零
`imp.conformal` · 推出 · strong 边 · 根 `../`

`thm.cauchy-riemann` Cauchy–Riemann 方程 + `def.holomorphic` 全纯函数 → `prop.conformal-iff` 保角性

**(ii) 保角推出 CR。** 设 $f$ 在 $z_0$ 实可微，增量映射是实线性的 $T(\Delta z) = A\Delta z + B\overline{\Delta z}$。$T$ 保持（有向）夹角，等价于 $T$ 是「乘一个非零复数」，即 $B = 0$。若 $B \ne 0$，$T$ 会把圆映成椭圆，两条互相垂直的直径像的长度比不再是 $1$，夹角也会变。而 $B = \partial f/\partial \bar z(z_0) = 0$ 正是 CR 方程。

**(iii) 反例。** $f(z) = z^2$ 在 $0$ 处：$f'(0) = 0$，取过 $0$ 的两条射线 $\arg z = 0$ 与 $\arg z = \pi/4$，像的辐角变成 $0$ 与 $\pi/2$ —— 夹角从 $\pi/4$ 变成 $\pi/2$，**加倍**。$f(z) = \bar z$ 保角但把定向翻过来（$\partial f/\partial \bar z = 1 \ne 0$），所以不在「保向」含义的保角范围内。$\blacksquare$
