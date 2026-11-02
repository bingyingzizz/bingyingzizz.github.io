# 谱定理 $\implies$ 奇异值分解
`imp.svd` · 推出 · strong 边 · 根 `../`

`thm.spectral-theorem` 谱定理（实对称） + `def.operator-adjoint` 伴随算子 → `thm.svd` 奇异值分解

设 $A \in M_{m \times n}(\mathbb{R})$，秩 $r$。

1. $A^{\mathsf{T}}A \in M_n$ 是**对称半正定**的（$x^{\mathsf{T}}A^{\mathsf{T}}Ax = \|Ax\|^{2} \ge 0$），故由谱定理存在标准正交基 $v_1, \ldots, v_n$ 与 $\lambda_1 \ge \cdots \ge \lambda_n \ge 0$ 使 $A^{\mathsf{T}}A v_i = \lambda_i v_i$。
2. 令 $\sigma_i := \sqrt{\lambda_i}$，设 $\sigma_1 \ge \cdots \ge \sigma_r > 0 = \sigma_{r+1} = \cdots$。

> 续见 proofs/imp.svd.2.md
