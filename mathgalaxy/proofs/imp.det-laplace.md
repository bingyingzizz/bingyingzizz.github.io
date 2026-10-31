# 置换展开 $\implies$ Laplace 展开
`imp.det-laplace` · 推出 · strong 边 · 根 `../`

`def.determinant` 行列式 + `thm.det-exists-unique` 行列式的存在唯一性 → `prop.det-laplace` Laplace 展开

把 $\det A$ 按第 $i$ 行拆开：$A$ 的每一列 $a_j$ 都含 $a_{ij} e_i$ 这一项，由多重线性可把 $\det$ 展成 $n$ 项之和，第 $j$ 项是「把第 $j$ 列换成 $a_{ij} e_i$、其余列不动」的行列式。

该行列式 $= a_{ij} \cdot \det(\ldots, e_i, \ldots)$，其中 $e_i$ 在第 $j$ 位。把 $e_i$ 通过 $|i - j|$ 次相邻列交换移到第 $1$ 位（每次变号），再按第一列展开，剩下的 $(n-1)$ 阶行列式正是划掉第 $i$ 行、第 $j$ 列后的 $A_{ij}$，符号累计为 $(-1)^{i+j}$。于是

$$\det A = \sum_j a_{ij}\,(-1)^{i+j} \det A_{ij} = \sum_j a_{ij}\, C_{ij}$$

> 续见 proofs/imp.det-laplace.2.md
