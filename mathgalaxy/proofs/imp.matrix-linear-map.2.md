# 坐标 + 线性 $\implies$ 线性映射与矩阵一一对应
`imp.matrix-linear-map` · 推出 · strong 边 · 根 `../`

`def.coordinate` 坐标 + `def.linear-map` 线性映射 + `def.matrix` 矩阵 → `thm.matrix-linear-map` 线性映射 ⟷ 矩阵

**线性**：$[T + cS]$ 的第 $j$ 列 $= (T + cS)(v_j)$ 的坐标 $= T(v_j)$ 的坐标 $+ c \cdot S(v_j)$ 的坐标 $=$ 相应两列之和再加数乘。

**复合对应乘法**：设 $T : V \to W$、$S : W \to U$，$S$ 在 $\mathcal{C}, \mathcal{E}$ 下的矩阵为 $B$、$T$ 在 $\mathcal{B}, \mathcal{C}$ 下的矩阵为 $A$。则

$$(S \circ T)(v_j) = S\Bigl( \sum_i a_{ij} w_i \Bigr) = \sum_i a_{ij} S(w_i) = \sum_i a_{ij} \sum_k b_{ki} u_k = \sum_k \Bigl( \sum_i b_{ki} a_{ij} \Bigr) u_k$$

括号里正是 $(BA)_{kj}$，故 $[S \circ T] = BA$。∎

> 「良定义」那一步用到了**坐标的唯一性**（即基的定义）。这正是整条定理的地基 —— 若基不是基，$T$ 就定义不出来。
