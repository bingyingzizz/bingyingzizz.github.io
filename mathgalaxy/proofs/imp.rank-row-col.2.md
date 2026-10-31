# 矩阵表示 $\implies$ 行秩 = 列秩
`imp.rank-row-col` · 推出 · strong 边 · 根 `../`

`thm.matrix-linear-map` 线性映射 ⟷ 矩阵 + `def.rank` 秩 → `thm.rank-row-col` 行秩 = 列秩

$$\operatorname{rank} A^{\mathsf{T}} = \dim \operatorname{im} T^{\mathsf{T}} = \dim (\ker T)^{0} = n - \dim \ker T = \dim \operatorname{im} T = \operatorname{rank} A$$

（最后一步用了秩-零化度定理。）∎

> 这条证明把「行秩 = 列秩」化归成对偶那一段的零化子维数公式 —— 也就是说：**转置不改变秩**，而那是零化子与秩-零化度的共同推论。
