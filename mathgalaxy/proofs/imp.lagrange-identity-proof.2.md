# Lagrange 恒等式：面积平方的坐标展开
`imp.lagrange-identity-proof` · 推出 · strong 边 · 根 `../`

`def.inner-product` 内积 + `def.gram-matrix` Gram 矩阵 + `def.determinant` 行列式 + `def.orthonormal-set` 正交基 → `thm.lagrange-identity` Lagrange 恒等式

另一方面，$u,w$ 的 Gram 矩阵
$$G=\begin{pmatrix}\langle u,u\rangle&\langle u,w\rangle\\ \langle w,u\rangle&\langle w,w\rangle\end{pmatrix}$$
的行列式正是 $\lVert u\rVert^{2}\lVert w\rVert^{2}-\langle u,w\rangle^{2}$（实情形 $\langle w,u\rangle=\langle u,w\rangle$），故左边 $=\det G$。∎

> 完整证明见本条边；节点注只保留动机与缺口。
