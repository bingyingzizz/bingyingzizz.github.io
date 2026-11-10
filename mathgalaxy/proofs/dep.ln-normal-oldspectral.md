# 正规矩阵可酉对角化 $\iff$ 正规算子可酉对角化
`dep.ln-normal-oldspectral` · 等价 · strong 边 · 根 `../`

`thm.spectral-matrix` 谱定理（矩阵版） → `cor.spectral-normal` 谱定理（复正规）

**算子版 $\implies$ 矩阵版**

设 $A$ 正规。取 $\mathbb{C}^{n}$ 的标准正交基，$A$ 定义的算子 $T$ 满足 $T^{*}T = TT^{*}$。复谱定理给标准正交特征基，以之为列得酉矩阵 $U$；由 $AU = U\Lambda$ 得 $U^{*}AU = \Lambda$ 对角。

**矩阵版 $\implies$ 算子版**

设 $T$ 是有限维复内积空间上的正规算子。取标准正交基把 $T$ 写成 $A$，正规性逐项传递：$A^{*}A = AA^{*}$。矩阵版给酉 $U$ 使 $U^{*}AU = \Lambda$；$U$ 的列是标准正交基，$AU = U\Lambda$ 说明第 $i$ 列是特征值 $\lambda_i$ 的特征向量。

> 原记 analogy，FIX-065 改 equivalence：两个方向都归结为「标准正交基下的矩阵 + $AU = U\Lambda$」这一条事实。
