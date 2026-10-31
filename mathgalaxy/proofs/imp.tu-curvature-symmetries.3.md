# 保度量 $+$ 无挠 $\implies$ 曲率张量的四条对称性
`imp.tu-curvature-symmetries` · 推出 · strong 边 · 根 `../`

`def.curvature-tensor` Riemann 曲率张量 + `def.affine-connection` 仿射联络 → `prop.curvature-tensor-symmetries` 曲率张量的对称性

$$\nabla^{2}Z(X,Y)-\nabla^{2}Z(Y,X) = \nabla_{X}\nabla_{Y}Z-\nabla_{Y}\nabla_{X}Z-\nabla_{[X,Y]}Z = R(X,Y)Z ,$$

而 $\nabla^{2}Z$ 关于 $X,Y$ 对称。对三个变元做循环求和时，两个对称项互换位置、逐项抵消，故 $R(X,Y)Z+R(Y,Z)X+R(Z,X)Y = 0$。

(4) **两对指标可交换**：把 (3) 的三种循环取法写出、用 (1)(2) 把符号搬正再相加，剩下的正是 $R_{ijk\ell}-R_{k\ell ij}$（这一条是纯指标记账，不含几何）。

**计数**：(1)(2) 说明 $R$ 可看成 $\bigwedge^{2}T_{p}M$ 上的双线性型，(4) 说明它对称，故有 $\frac{N(N+1)}{2}$ 个分量（$N = \binom{n}{2}$）；再扣掉 (3) 给出的 $\binom{n}{3}$ 个独立关系，得 $\frac{n^{2}(n^{2}-1)}{12}$。∎
