# 伴随矩阵 + 行列式 $\implies$ Cramer 法则
`imp.cramer` · 推出 · strong 边 · 根 `../`

`def.determinant` 行列式 + `prop.det-laplace` Laplace 展开 + `def.invertible-matrix` 可逆矩阵 → `thm.cramer` Cramer 法则

由 Laplace 展开与错位展开，定义**伴随矩阵** $\operatorname{adj} A := (C_{ji})$（代数余子式的转置），则两条展开合起来就是

$$A \cdot \operatorname{adj} A = (\det A)\, I_n = \operatorname{adj} A \cdot A$$

（$(i,j)$ 元素是 $\sum_k a_{ik} C_{jk}$：$i = j$ 时按第 $i$ 行展开 $= \det A$，$i \ne j$ 时错位展开 $= 0$。）

若 $\det A \ne 0$，则 $A^{-1} = (\det A)^{-1} \operatorname{adj} A$，于是 $x = A^{-1} b$ 的唯一解可以写成

$$x_j = \frac{1}{\det A} \sum_i C_{ij} b_i$$

> 续见 proofs/imp.cramer.2.md
