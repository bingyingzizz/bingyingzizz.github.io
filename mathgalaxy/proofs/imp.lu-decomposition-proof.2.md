# 顺序主子式非零 $\implies$ 唯一的 $LU$ 分解
`imp.lu-decomposition-proof` · 推出 · strong 边 · 根 `../`

`def.matrix` 矩阵 + `def.elementary-matrix` 初等变换与初等矩阵 + `def.invertible-matrix` 可逆矩阵 → `thm.lu-decomposition` LU 分解

于是
$$A=E^{-1}\begin{pmatrix}1&0\\ 0&L_S\end{pmatrix}\begin{pmatrix}a&b^{T}\\ 0&U_S\end{pmatrix},$$
两个因子分别是单位下三角与上三角，乘起来即 $A=LU$。

唯一性：若 $L_1U_1=L_2U_2$，则 $L_2^{-1}L_1=U_2U_1^{-1}$。左边是单位下三角，右边是上三角；一个矩阵同时是两者必为对角矩阵，而单位下三角的对角元全为 $1$，故两边都是 $I$，$L_1=L_2$、$U_1=U_2$。

置换版本：对可逆 $A$ 做带行交换的高斯消元（部分主元法）；每次交换第 $i,j$ 行等于左乘置换矩阵 $P_{ij}$，消元步左乘初等矩阵。累积得 $PA=LU$，$P$ 为置换矩阵之积。∎

> 完整证明见本条边；节点注只保留动机与缺口。
