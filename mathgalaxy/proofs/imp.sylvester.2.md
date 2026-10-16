# 谱定理 $\implies$ Sylvester 判据
`imp.sylvester` · 推出 · strong 边 · 根 `../`

`def.quadratic-form` 二次型 + `thm.spectral-theorem` 谱定理（实对称） → `thm.sylvester-criterion` Sylvester 判据

**($\implies$)** 若 $A$ 正定，则每个左上角主子矩阵 $A_k$ 也正定（对 $A_k$ 上的 $x$ 补零得 $x^{\mathsf{T}}A_kx = \tilde x^{\mathsf{T}}A\tilde x > 0$）。由谱定理 $A_k = Q\Lambda Q^{\mathsf{T}}$（$\Lambda$ 对角且对角元 $> 0$），故 $D_k = \det A_k = \prod_i \lambda_i > 0$。∎

> 两个方向的分量不同：($\Longleftarrow$) 是**归纳 + Schur 补**（纯代数），($\implies$) 用的是**谱定理**（特征值全正 $\implies$ 行列式为正）。
