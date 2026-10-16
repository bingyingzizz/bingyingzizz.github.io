# 存在唯一性 $\implies$ 乘性
`imp.det-multiplicative` · 推出 · strong 边 · 根 `../`

`thm.det-exists-unique` 行列式的存在唯一性 + `def.determinant` 行列式 → `thm.det-multiplicative` 行列式的乘性

**转置**：$\det A^{\mathsf{T}} = \det A$ —— 用存在唯一性，$A \mapsto \det A^{\mathsf{T}}$ 也满足三条公理（转置把列换成行，交错性与规范性不变），故两者相等。

**可逆判据**：$A$ 可逆时 $1 = \det I = \det(A A^{-1}) = \det A \cdot \det(A^{-1})$，故 $\det A \ne 0$。反之若 $A$ 不可逆，则其列向量线性相关，$\det A = 0$（由交错性把线性相关性代入展开）。∎

> 第 3 步「只差常数倍」是**唯一性定理**最漂亮的一次使用：不必计算，只要说明一个新函数满足同一套公理就自动成比例。
