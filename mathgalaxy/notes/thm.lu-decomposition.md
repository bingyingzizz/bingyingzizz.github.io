# LU 分解　`thm.lu-decomposition`　·　说明
根 `../`

**「顺序主子式全非零」不能去掉**：$\begin{pmatrix} 0 & 1 \\ 1 & 0\end{pmatrix}$ 的顺序主子式第一个是 $0$，它没有不带置换的 $LU$ 分解（但 $PA = LU$ 有）。这条前提就是「消元时主元不为零」的矩阵语言。

⭐ **它和初等变换的关系**：`def.elementary-matrix` 里那三类初等矩阵，把「第三类（行加倍数）」按顺序乘起来就是 $L^{-1}$。所以 $LU$ 分解 = 高斯消元的矩阵形式，**没有新东西**，只是记账。

**与 Cholesky 的关系**：若 $A$ 还是**对称正定**，则 $LU$ 可以写成 $A = LL^{T}$（$L$ 下三角），叫 Cholesky 分解。本图未单独收录，它是正定矩阵的直接推论：正定 $\implies$ 顺序主子式全正（`thm.sylvester-criterion`）$\implies$ 可做 Cholesky。

⚠️ 有 $PA = LU$ 之后不要再写 $A = LU$：行交换改变了矩阵，$P$ 必须写出来。
