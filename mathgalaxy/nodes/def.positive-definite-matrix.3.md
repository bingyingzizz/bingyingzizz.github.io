# 正定矩阵　`def.positive-definite-matrix`　·　续页（第 3 页）
[在星图里打开](../#n=def.positive-definite-matrix)　·　第 1 页 [nodes/def.positive-definite-matrix.md](./def.positive-definite-matrix.md)　·　上一页 [nodes/def.positive-definite-matrix.2.md](./def.positive-definite-matrix.2.md)

## 陈述（续）
- (定义) $\iff$ (1)：**要用谱定理**（Hermite 矩阵可正交对角化，`thm.spectral-matrix`）。对角化后 $x^{*}Ax = \sum \lambda_{i}\lvert y_{i}\rvert^{2}$，于是「恒正」$\iff$「每个 $\lambda_{i} > 0$」。**这一条只在 Hermite（实对称）时成立*
*：非对称矩阵可以有正的特征值却不正定（$x^{T}Ax$ 里混着反对称部分）。
- (1) $\implies$ (2)：**只对**顺序主子式**成立，不对「所有主子式」**。Sylvester 判据说的是「$n$ 个顺序主子式全正」；而「所有主子式非负

> 续见 [nodes/def.positive-definite-matrix.4.md](./def.positive-definite-matrix.4.md)
