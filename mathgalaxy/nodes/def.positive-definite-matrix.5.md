# 正定矩阵　`def.positive-definite-matrix`　·　续页（第 5 页）
[在星图里打开](../#n=def.positive-definite-matrix)　·　第 1 页 [nodes/def.positive-definite-matrix.md](./def.positive-definite-matrix.md)　·　上一页 [nodes/def.positive-definite-matrix.4.md](./def.positive-definite-matrix.4.md)

## 陈述（续）
向取 $P = \Lambda^{1/2}U^{*}$。**注意这里必须允许复/实矩阵用共轭转置**，写成 $A = P^{T}P$ 只在实对称时对。
- (3) $\iff$ (4)：**三角不等式验证**即得（$\sqrt{x^{*}Ax} = \lVert Px\rVert$ 是范数）。反向用 $x^{*}Ax$ 的平方根定义 
—— 需要先证它是二次型。
⚠️ **三处最容易错的地方**：(a) 忘掉「Hermite/实对称」这个前提（复情形要用 $x^{*}$，用 $x^{T}Ax > 0$ 讨论复矩阵是没有意义的，它可能不是实数）；(b) 把「顺序主子式全正」换成「所有主子式全正」—— 后者是**

> 续见 [nodes/def.positive-definite-matrix.6.md](./def.positive-definite-matrix.6.md)
