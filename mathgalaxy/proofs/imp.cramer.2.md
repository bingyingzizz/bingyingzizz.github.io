# 伴随矩阵 + 行列式 $\implies$ Cramer 法则
`imp.cramer` · 推出 · strong 边 · 根 `../`

`def.determinant` 行列式 + `prop.det-laplace` Laplace 展开 + `def.invertible-matrix` 可逆矩阵 → `thm.cramer` Cramer 法则

而 $\sum_i C_{ij} b_i$ 恰好是「把 $A$ 的第 $j$ 列换成 $b$」之后按第 $j$ 列做 Laplace 展开的结果，即 $\det A_j$。故 $x_j = \det A_j / \det A$。∎

> 证明的组织方式值得记住：**Laplace 展开 + 错位展开 = 伴随矩阵**，于是 Cramer 法则不过是「$A^{-1} = \operatorname{adj}A / \det A$」写在分量上。
