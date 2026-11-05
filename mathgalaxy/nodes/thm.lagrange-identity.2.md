# Lagrange 恒等式　`thm.lagrange-identity`　·　续页（第 2 页）
[在星图里打开](../#n=thm.lagrange-identity)　·　第 1 页 [nodes/thm.lagrange-identity.md](./thm.lagrange-identity.md)

## 陈述（续）
对 $u, w \in \mathbb{R}^{n}$（或**取了一组正交归一基**的实内积空间）有**Lagrange 恒等式**（⚠ 右边那串坐标式只在正交归一基下才等于左边：取 $\langle x,y\rangle = 4x_{1}y_{1} + x_{2}y_{2}$、$u = (1,0)$、$w = (0,1)$，左边 $= 4$ 而右边 $= 1$；一般基下要
用 Gram 矩阵 $G$ 修正）
$$\lVert u\rVert^{2}\lVert w\rVert^{2} - \langle u, w\rangle^{2} = \sum_{1 \le i < j \le n}\bigl(u_{i}w_{j} - u_{j}w_{i}\bigr)^{2} .$$

左边正是两者 Gram 矩阵的行列式
$$\det\begin{pmatrix} \langle u,u\rangle & \langle u,w\rangle \\ \langle w,u\rangle & \langle w,w\rangle\end{pmatrix} ,$$

所以几何上它说的是：**Gram 行列式 = 平行四边形的面积的平方**（`def.gram-matrix`）。

> 续见 [nodes/thm.lagrange-identity.3.md](./thm.lagrange-identity.3.md)
