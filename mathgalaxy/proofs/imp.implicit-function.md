# 对 $\Phi(x,y) = (x, F(x,y))$ 用逆映射定理 $\implies$ 隐函数定理
`imp.implicit-function` · 推出 · strong 边 · 根 `../`

`thm.inverse-function` 逆映射定理 → `thm.implicit-function` 隐函数定理

**第一步：造 $\Phi$。** 令

$$\Phi : U \to \mathbb{R}^{n} \times \mathbb{R}^{m}, \qquad \Phi(x, y) := \bigl( x,\ F(x, y) \bigr)$$

则 $\Phi$ 是 $C^{1}$，$\Phi(a, b) = (a, 0)$。

**第二步：$D\Phi(a,b)$ 可逆。** 写成块矩阵（按 $x$ 与 $y$ 分块）：

$$D\Phi(a, b) = \begin{pmatrix} I_n & 0 \\ D_x F(a,b) & D_y F(a,b) \end{pmatrix}$$

这是块上三角矩阵，故 $\det D\Phi(a,b) = \det D_y F(a,b) \ne 0$。

> 续见 proofs/imp.implicit-function.2.md
