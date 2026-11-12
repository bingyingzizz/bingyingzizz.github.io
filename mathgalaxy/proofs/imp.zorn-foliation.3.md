# Zorn 引理：把局部叶片粘成极大叶
`imp.zorn-foliation` · 推出 · strong 边 · 根 `../`

`lem.zorn` Zorn 引理 + `def.involutive-distribution` 对合分布 + `def.integral-manifold` 积分流形 → `thm.foliation-existence` 叶状结构存在定理

**第四步：叶与叶互不相交。** 设 $L_{1}, L_{2}$ 是两片极大叶且有公共点 $p$。由局部唯一性（同一分布过同一点的两块积分流形在公共点附近重合，这是 Frobenius 平坦坐标的推论），$L_{1} \cup L_{2}$ 在 $p$ 附近仍是积分流形；两者都连通且交于 $p$，故并连通且是积分流形 —— 与极大性矛盾。所以或 $L_{1} = L_{2}$，或 $L_{1} \cap L_{2} = \emptyset$。

**收尾。** 每点属于某片极大叶（第三步），叶两两不交或相等（第四步），故全体叶覆盖 $M$ 并构成叶状结构。∎
