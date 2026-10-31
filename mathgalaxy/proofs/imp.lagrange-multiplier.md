# 切空间 = $\ker Dg(a)$ + 极值 $\implies$ 乘子存在
`imp.lagrange-multiplier` · 推出 · strong 边 · 根 `../`

`thm.regular-value` 正则值原像定理 → `thm.lagrange-multiplier` Lagrange 乘子法

记 $M := g^{-1}(0)$。由假设 $\operatorname{rank} Dg(a) = m$，$a$ 是 $M$ 的正则点，于是由 `thm.regular-value`，$M$ 在 $a$ 附近是 $(n-m)$ 维子流形。

**第一步：切空间 = $\ker Dg(a)$。** $M$ 是 $g$ 的水平集，故 $M$ 上任何一条过 $a$ 的曲线的速度向量 $\gamma'(0)$ 都满足 $Dg(a)\gamma'(0) = 0$（对 $g \circ \gamma \equiv 0$ 求导）。两个维度都对：$\dim \ker Dg(a) = n - m = \dim M$，所以

$$T_a M = \ker Dg(a)$$

> 续见 proofs/imp.lagrange-multiplier.2.md
