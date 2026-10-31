# 谱定理 $\implies$ Sylvester 判据
`imp.sylvester` · 推出 · strong 边 · 根 `../`

`def.quadratic-form` 二次型 + `thm.spectral-theorem` 谱定理（实对称） → `thm.sylvester-criterion` Sylvester 判据

设 $A$ 实对称。

**($\Longleftarrow$)** 设所有顺序主子式 $D_k > 0$。对 $k$ 归纳证明 $A$ 的前 $k$ 阶主子矩阵正定：$k = 1$ 显然（$a_{11} = D_1 > 0$）。归纳步：把 $A_k$ 分块 $\begin{pmatrix} A_{k-1} & b \\ b^{\mathsf{T}} & a_{kk}\end{pmatrix}$，由 $D_{k} = D_{k-1}\cdot(a_{kk} - b^{\mathsf{T}}A_{k-1}^{-1}b) > 0$（**分块行列式公式**）与归纳假设 $D_{k-1} > 0$ 得 Schur 补 $a_{kk} - b^{\mathsf{T}}A_{k-1}^{-1}b > 0$；由 Schur 补正定 $\implies A_k$ 正定。

> 续见 proofs/imp.sylvester.2.md
