# Zorn 引理：把局部叶片粘成极大叶
`imp.zorn-foliation` · 推出 · strong 边 · 根 `../`

`lem.zorn` Zorn 引理 + `def.involutive-distribution` 对合分布 + `def.integral-manifold` 积分流形 → `thm.foliation-existence` 叶状结构存在定理

设 $\mathcal{D}$ 是 $M$ 上的对合 $k$ 阶光滑分布。**局部输入**：对合分布在每点附近有积分流形（Frobenius 定理的 (1)$\iff$(3)）；本条的职责是把它整体化，这一步当已知。

**第一步：取候选族。** 令

$$\mathcal{S} := \{\, L \subseteq M : L \text{ 是连通积分流形，且 } T L = \mathcal{D}|_{L} \,\},$$

按包含排序；$\mathcal{S} \ne \emptyset$（每点附近的局部积分流形都在里面）。

> 续见 proofs/imp.zorn-foliation.2.md
