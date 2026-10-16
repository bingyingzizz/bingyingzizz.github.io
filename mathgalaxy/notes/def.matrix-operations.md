# 矩阵的加法与乘法　`def.matrix-operations`　·　说明
根 `../`

⭐ 乘法为什么长这样：把 $B$ 的每一列看成 $K^{n}$ 中的向量，则 $AB$ 的第 $j$ 列 $= A \cdot (B$ 的第 $j$ 列$)$ —— **矩阵乘法就是线性映射的复合**（见「线性映射 $\leftrightarrow$ 矩阵」）。不是「行列逐条相乘」的偶然配方。

⚠ 乘法**不交换**：$AB \ne BA$（连形状都可能不合）。例 $A = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$、$B = \begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix}$ 给 $AB = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix} \ne BA$。

⚠ $AB = 0$ 不必有 $A = 0$ 或 $B = 0$ —— 这就是「$M_n(K)$ 是环但不是整环」的意思，也解释了行列式为什么必要（det 把这件事管住了）。
