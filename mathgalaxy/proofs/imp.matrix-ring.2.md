# 矩阵运算的定义 $\implies$ $M_n(K)$ 是环
`imp.matrix-ring` · 推出 · strong 边 · 根 `../`

`def.matrix-operations` 矩阵的加法与乘法 + `thm.matrix-linear-map` 线性映射 ⟷ 矩阵 → `thm.matrix-ring` M_n(K) 是环

**非交换**（$n \ge 2$）：取 $A = E_{12}$（只有 $(1,2)$ 位是 $1$）、$B = E_{21}$，则 $AB = E_{11}$ 而 $BA = E_{22}$，不等。∎

（另一条路更短：由「线性映射 $\leftrightarrow$ 矩阵」把加法读成映射的加法、乘法读成复合，于是环公理就是 $\operatorname{End}(K^{n})$ 的环公理，逐条显然。）

> 第 5 步「$c(AB) = A(cB)$」是 $K$-代数定义里唯一不平凡的一条 —— 它说明数乘可以从任何一个因子里提出来。
