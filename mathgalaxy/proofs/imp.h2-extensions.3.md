# 群扩张 + $2$-上圈 $\implies$ $H^{2}$ 分类扩张
`imp.h2-extensions` · 推出 · strong 边 · 根 `../`

`def.group-extension` 群扩张 + `def.cocycle-2` 二维上圈与上边界 + `def.group-cohomology` 群上同调 → `thm.h2-group-extensions` 二维上同调分类群扩张

**换截面只改一个上边界。** 另一截面 $\sigma^{\prime}(g) = i(u(g))\sigma(g)$（$u : G \to A$，因 $\pi\sigma^{\prime} = \pi\sigma$ 必是此形状）。把 $\sigma^{\prime}$ 塞进定义式，展开 $i(u(g_{1}))\sigma(g_{1}) i(u(g_{2}))\sigma(g_{2})$ 并用共轭恒等式，得

$$c^{\prime}(g_{1}, g_{2}) = c(g_{1}, g_{2}) + g_{1}\cdot u(g_{2}) - u(g_{1}g_{2}) + u(g_{1}) = c + \delta^{1}u ,$$

即 $[c^{\prime}] = [c]$。所以类 $[c] \in H^{2}(G, A)$ 只依赖扩张。扩张同构的映射取同一个截面时读出的 $c$ 相同，故类也不变。

**方向二：上圈 $\mapsto$ 扩张。** 给定 $c \in Z^{2}$，在 $A \times G$ 上定义

> 续见 proofs/imp.h2-extensions.4.md
