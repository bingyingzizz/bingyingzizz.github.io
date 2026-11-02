# 存在唯一性 $\implies$ 乘性
`imp.det-multiplicative` · 推出 · strong 边 · 根 `../`

`thm.det-exists-unique` 行列式的存在唯一性 + `def.determinant` 行列式 → `thm.det-multiplicative` 行列式的乘性

1. **多重线性**：$AB$ 的第 $j$ 列是 $A \cdot (B$ 的第 $j$ 列$)$，即 $\sum_i b_{ij} a_i$。所以固定其他列时，$\det(AB)$ 关于第 $j$ 列是线性的（先把 $a_j$ 的线性组合拉出来，再用 $\det$ 的多重线性）。
2. **交错**：若 $a_i = a_j$（$i \ne j$），则 $AB$ 的第 $i$、$j$ 列也相等（同样的线性组合），于是 $\det(AB) = 0$。
3. 由存在唯一性，$\det(AB) = c \cdot \det A$ 对某个常数 $c$ 成立（同一条公理系下的函数只差常数倍）。取 $A = I$ 得 $c = \det B$。故 $\det(AB) = \det A \det B$。

> 续见 proofs/imp.det-multiplicative.3.md
