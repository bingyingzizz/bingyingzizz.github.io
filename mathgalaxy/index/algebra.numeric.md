# 矩阵分解与最小二乘 / Matrix Factorizations and Least Squares（algebra.numeric）· 节点清单（第 1/1 页）

「真的把 $Ax = b$ 解出来」的四件工具，**靠团外的结果接起来**：矩阵范数（量「大小」）· LU（消元的矩阵形式，靠初等矩阵）· QR（Gram–Schmidt 的矩阵形式）· **最小二乘**（无解时求最近的解，即正交投影）与伪逆（连「解不唯一」也能挑出规范的那个）。团内**真有的链条只有两条**：QR $\implies$ 最小二乘（法方程化成上三角回代）、最小二乘（列满秩）$\implies$ 伪逆就是 $(A^{T}A)^{-1}A^{T}$。矩阵范数与 LU 的依赖都在团外。⛔ 只写数学（存在性/唯一性/变分刻画），不写数值算法。
中心天体 thm.least-squares　·　5 个节点　·　根 `../`

- thm.qr-decomposition　QR 分解　layer 20
- thm.lu-decomposition　LU 分解　layer 21
- thm.least-squares　最小二乘　layer 22
- def.matrix-norm　矩阵范数　layer 32
- def.pseudoinverse　伪逆　layer 32
