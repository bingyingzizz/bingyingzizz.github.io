# 秩定理取 $r = n = m$ 就是逆映射定理
`imp.derived-inverse-from-rank` · 推出 · strong 边 · 根 `../`

`cor.rank-theorem` 常秩定理 → `thm.inverse-function` 逆映射定理

**② 代入 $r = n = m$。** 标准形里没有零尾巴，于是

$$\psi \circ f \circ \varphi^{-1} = \mathrm{id} \qquad \Longrightarrow \qquad f = \psi^{-1} \circ \varphi \quad (\text{在 } a \text{ 的邻域上}) .$$

两个坐标变换都是微分同胚，所以 $f$ 局部是微分同胚：存在开邻域 $V \ni a$ 与 $W \ni f(a)$ 使 $f|_{V} : V \to W$ 是双射，且 $g := (f|_{V})^{-1} = \varphi^{-1} \circ \psi$ 也光滑。

**③ 导数。** 由 $g \circ f = \mathrm{id}$ 与链式法则，$Dg(f(x)) \circ Df(x) = I$，取 $x = g(y)$ 即

$$Dg(y) = \bigl( Df(g(y)) \bigr)^{-1}. \qquad \blacksquare$$

> 黑边 `imp.rank-theorem` 走的是反方向（逆映射定理 $+$ 隐函数定理 $\implies$ 秩定理）—— 两条都在，正好把「秩定理是全家桶、逆映射定理是 $r=n=m$ 那一格」这件事画出来。粉边不进分层，不构成环。
