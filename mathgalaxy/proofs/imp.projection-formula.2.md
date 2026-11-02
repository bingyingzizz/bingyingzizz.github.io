# 正交投影 + 标准正交基 $\implies$ 最佳逼近与显式公式
`imp.projection-formula` · 推出 · strong 边 · 根 `../`

`def.orthogonal-projection` 正交投影 + `thm.gram-schmidt` Gram–Schmidt 正交化 → `thm.projection-formula` 最佳逼近与投影公式

**Bessel**：把 $v = P_U v + (v - P_U v)$ 用勾股定理，并注意 $\|P_U v\|^{2} = \sum_i |\langle e_i, v\rangle|^{2}$（对标准正交组合直接展开）。∎

> 证明里「$v - P_Uv \perp U$ 且 $P_Uv - u' \in U$」这两条是勾股定理能用的全部理由 —— 也是「正交投影」比一般射影好的地方。
