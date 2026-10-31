# 矩阵表示 $\implies$ 行秩 = 列秩
`imp.rank-row-col` · 推出 · strong 边 · 根 `../`

`thm.matrix-linear-map` 线性映射 ⟷ 矩阵 + `def.rank` 秩 → `thm.rank-row-col` 行秩 = 列秩

把 $A$ 看成映射 $T : K^{n} \to K^{m}$、$x \mapsto Ax$（取标准基）。

1. **列秩**：$A$ 的列向量正是 $T(e_1), \ldots, T(e_n)$，所以列秩 $= \dim \operatorname{im} T = \operatorname{rank} A$。
2. **行秩**：$A$ 的转置 $A^{\mathsf{T}}$ 对应的映射 $T^{\mathsf{T}} : K^{m} \to K^{n}$ 就是 $T$ 的对偶（取标准基，见「对偶基」里的 $[T^{\ast}] = [T]^{\mathsf{T}}$）。$A$ 的行向量是 $A^{\mathsf{T}}$ 的列向量，故行秩 $= \operatorname{rank} A^{\mathsf{T}}$。
3. 只需再证 $\operatorname{rank} A^{\mathsf{T}} = \operatorname{rank} A$：由 $\operatorname{im} T^{\mathsf{T}} = (\ker T)^{0}$（零化子）与 $\dim U^{0} = \dim V - \dim U$，

> 续见 proofs/imp.rank-row-col.2.md
