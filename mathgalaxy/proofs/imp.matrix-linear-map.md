# 坐标 + 线性 $\implies$ 线性映射与矩阵一一对应
`imp.matrix-linear-map` · 推出 · strong 边 · 根 `../`

`def.coordinate` 坐标 + `def.linear-map` 线性映射 + `def.matrix` 矩阵 → `thm.matrix-linear-map` 线性映射 ⟷ 矩阵

记 $\mathcal{B} = (v_1, \ldots, v_n)$、$\mathcal{C} = (w_1, \ldots, w_m)$。

**构造**：给定 $T$，它在每个基向量上的值 $T(v_j) \in W$ 有唯一坐标 $(a_{1j}, \ldots, a_{mj})^{\mathsf{T}}$，排成矩阵 $[T]_{\mathcal{B}}^{\mathcal{C}} := (a_{ij})$。

**反过来**：给定矩阵 $A = (a_{ij})$，定义 $T(v_j) := \sum_i a_{ij} w_i$，再线性地延拓到整个 $V$（每个 $v = \sum_j c_j v_j$ 令 $T(v) := \sum_j c_j T(v_j)$）。**良定义**：因为坐标 $c_j$ 唯一（基的定义）。

**互逆**：两个构造显然互相还原，故 $T \mapsto [T]$ 是双射。

> 续见 proofs/imp.matrix-linear-map.2.md
