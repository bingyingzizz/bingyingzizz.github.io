# 算子版谱定理 $\iff$ 矩阵版谱定理（实对称）
`dep.ln-spectral-old` · 等价 · strong 边 · 根 `../`

`thm.spectral-matrix` 谱定理（矩阵版） → `thm.spectral-theorem` 谱定理（实对称）

**算子版 $\implies$ 矩阵版**

设 $A$ 实对称，它定义 $\mathbb{R}^{n}$（标准正交基）上的自伴算子 $T$。谱定理给 $T$ 的一组标准正交特征基 $u_1,\ldots,u_n$，以它们为列得正交矩阵 $Q$；由 $T u_i = \lambda_i u_i$ 得 $AQ = Q\Lambda$，即 $Q^{\mathsf{T}}AQ = \Lambda$ 为实对角阵。

**矩阵版 $\implies$ 算子版**

> 续见 proofs/dep.ln-spectral-old.2.md
