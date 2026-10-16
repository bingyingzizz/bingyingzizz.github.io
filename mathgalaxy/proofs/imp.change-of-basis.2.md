# 矩阵表示 + 乘法对应复合 $\implies$ 相似
`imp.change-of-basis` · 推出 · strong 边 · 根 `../`

`thm.matrix-linear-map` 线性映射 ⟷ 矩阵 → `thm.change-of-basis` 基变换与相似

**相似是等价关系**：自反（$P = I$）、对称（$A \sim B \implies B = P^{-1}AP \implies A = (P^{-1})^{-1} B P^{-1}$）、传递（$P^{-1}AP = B$、$Q^{-1}BQ = C \implies (PQ)^{-1}A(PQ) = C$）。∎

> 整条证明里**没有做任何计算**，只是把「换基」写成三个映射的复合再用矩阵表示的乘性 —— 这是把矩阵论建立在线性映射语言上的最大红利。
