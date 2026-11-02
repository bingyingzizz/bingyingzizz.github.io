# 矩阵运算的定义 $\implies$ $M_n(K)$ 是环
`imp.matrix-ring` · 推出 · strong 边 · 根 `../`

`def.matrix-operations` 矩阵的加法与乘法 + `thm.matrix-linear-map` 线性映射 ⟷ 矩阵 → `thm.matrix-ring` M_n(K) 是环

逐条验证。

1. **加法群**：逐分量加法继承 $K$ 的加法群结构，零元是零矩阵，$-A$ 是逐分量取负。
2. **乘法结合**：$(AB)C$ 与 $A(BC)$ 的 $(i,j)$ 元素都是 $\sum_{k,l} a_{ik} b_{kl} c_{lj}$（两次求和次序可换，因为都是有限和）。
3. **分配律**：$(A + B)C$ 与 $AC + BC$ 的 $(i,j)$ 元素都是 $\sum_k (a_{ik} + b_{ik}) c_{kj}$。
4. **单位元**：$(I_n A)_{ij} = \sum_k \delta_{ik} a_{kj} = a_{ij}$，同理 $A I_n = A$。
5. **$K$-代数**：数乘与加法的相容（向量空间公理）逐分量成立，且 $c(AB) = (cA)B = A(cB)$ 由有限和的线性性得到。

> 续见 proofs/imp.matrix-ring.2.md
