# 秩定理的淹没情形 $r = m$ 就是隐函数定理
`imp.derived-implicit-from-rank` · 推出 · strong 边 · 根 `../`

`cor.rank-theorem` 常秩定理 → `thm.implicit-function` 隐函数定理

**④ 换成「$y = g(x)$」。** 记 $\pi_{x}$ 为投影到前 $n$ 个原坐标。由 ③，$\pi_{x}|_{S}$ 的微分在每点单射，而两侧维数都是 $n$，故是同构。再对 $\pi_{x} : S \to \mathbb{R}^{n}$ 用一次逆映射定理：它在 $(a,b)$ 附近是 $C^{1}$ 微分同胚，故 $S$ 是一张图像 $y = g(x)$，$g(a) = b$，$g$ 为 $C^{1}$。

**⑤ 导数。** 把 $F(x, g(x)) \equiv 0$ 对 $x$ 求导：$D_{x}F + D_{y}F \cdot Dg = 0$，即 $Dg = -(D_{y}F)^{-1}D_{x}F$。$\blacksquare$

> 课本里那条短路线是「对 $\Phi(x,y) = (x, F(x,y))$ 用逆映射定理」（黑边 `imp.implicit-function`）；这里走的是秩定理的**淹没情形**，路长一点，但把「隐函数定理也是秩定理的一格」说清楚了。⚠ ④ 用了一次逆映射定理 —— 与黑边那条构成环，粉边的规矩允许（黑边已保证骨架无环）。
