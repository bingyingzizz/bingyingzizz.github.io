# 群扩张 + $2$-上圈 $\implies$ $H^{2}$ 分类扩张
`imp.h2-extensions` · 推出 · strong 边 · 根 `../`

`def.group-extension` 群扩张 + `def.cocycle-2` 二维上圈与上边界 + `def.group-cohomology` 群上同调 → `thm.h2-group-extensions` 二维上同调分类群扩张

**两个方向互逆。** 从扩张读出的 $c$ 再按方向二造 $E_{c}$，则 $(a, g) \mapsto i(a)\sigma(g)$ 是群同构 $E_{c} \to E$（直接验乘法：$i(a_{1})\sigma(g_{1})\, i(a_{2})\sigma(g_{2}) = i(a_{1} + g_{1}a_{2} + c(g_{1},g_{2}))\sigma(g_{1}g_{2})$）；反之从 $c$ 出发造 $E_{c}$ 再取截面 $g \mapsto (0, g)$ 读回 $c$。于是等价类与 $H^{2}(G, A)$ 一一对应。∎

**零类**：$c \in B^{2}$ $\iff$ 可换截面使 $c = 0$ $\iff$ 该截面 $\sigma$ 本身是同态 $\iff$ 扩张分裂。∎

> 「结合律 = 上圈条件」「换截面 = 上边界」这两句是整条定理的全部：前者给存在性，后者给唯一性。
