# 正定矩阵　`def.positive-definite-matrix`　·　说明
根 `../`

- (定义) $\iff$ (1)：**要用谱定理**（Hermite 矩阵可正交对角化，`thm.spectral-matrix`）。对角化后 $x^{*}Ax = \sum \lambda_{i}\lvert y_{i}\rvert^{2}$，于是「恒正」$\iff$「每个 $\lambda_{i} > 0$」。**这一条只在 Hermite（实对称）时成立**：非对称矩阵可以有正的特征值却不正定（$x^{T}Ax$ 里混着反对称部分）。
- (1) $\implies$ (2)：**只对**顺序主子式**成立，不对「所有主子式」**。Sylvester 判据说的是「$n$ 个顺序主子式全正」；而「所有主子式非负」才是半正定的判据（两者不是一回事，半正定情形顺序主子式可以为零）。这一条**不用谱定理**，只用配方法 —— 所以它是纯代数的，在任意有序域上都成立。
- (2) $\implies$ (定义)：**需要实（或 Hermite）对称**。做法是分块高斯消元（LDL 分解）：顺序主子式非零保证消元可行，得到的对角元正是主子式之比。
- (定义) $\iff$ (3)：**这一步用谱定理或 Cholesky**。$A = P^{*}P$ 时 $x^{*}Ax = \lVert Px\rVert^{2}$，可逆 $P$ 给出

> 续见 notes/def.positive-definite-matrix.4.md
