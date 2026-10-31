# 自伴性 + 紧性 $\implies$ 谱定理（实对称）
`imp.spectral-theorem` · 推出 · strong 边 · 根 `../`

`def.normal-operator` 正规算子 + `thm.diagonalizable` 可对角化判据 + `thm.evt` 最值定理 + `def.orthogonal-complement` 正交补 → `thm.spectral-theorem` 谱定理（实对称）

1. **存在实特征值**：单位球面 $S := \{v : \|v\| = 1\}$ 是紧集，函数 $f(v) := \langle Tv, v\rangle$ 连续，故在某点 $v_0$ 取到最大值 $\lambda$（**最值定理**）。用 Lagrange 乘子（或直接对 $v_0$ 附近扰动求导）可得 $Tv_0 = \lambda v_0$：即在约束 $\|v\|^{2} = 1$ 下 $f$ 的极值点满足 $\nabla f = \lambda \nabla(\|v\|^{2})$，而两个梯度分别是 $2Tv_0$ 与 $2v_0$。于是 $\lambda$ 是特征值，且由 $\lambda = \langle Tv_0, v_0\rangle \in \mathbb{R}$ 知它是实数。
2

> 续见 proofs/imp.spectral-theorem.3.md
