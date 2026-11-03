# 正定矩阵　`def.positive-definite-matrix`　·　续页（第 4 页）
[在星图里打开](../#n=def.positive-definite-matrix)　·　第 1 页 [nodes/def.positive-definite-matrix.md](./def.positive-definite-matrix.md)　·　上一页 [nodes/def.positive-definite-matrix.3.md](./def.positive-definite-matrix.3.md)

## 陈述（续）
」才是半正定的判据（两者不是一回事，半正定情形顺序主子式可以为零）。这一条**不用谱定理**，只用配方法 —— 所以它是纯代数的，在任意有序域上都成立。
- (2) $\implies$ (定义)：**需要实（或 Hermite）对称**
。做法是分块高斯消元（LDL 分解）：顺序主子式非零保证消元可行，得到的对角元正是主子式之比。
- (定义) $\iff$ (3)：**这一步用谱定理或 Cholesky**。$A = P^{*}P$ 时 $x^{*}Ax = \lVert Px\rVert^{2}$，可逆 $P$ 给出严格正；反

> 续见 [nodes/def.positive-definite-matrix.5.md](./def.positive-definite-matrix.5.md)
