# Lagrange 恒等式：面积平方的坐标展开
`imp.lagrange-identity-proof` · 推出 · strong 边 · 根 `../`

`def.inner-product` 内积 + `def.gram-matrix` Gram 矩阵 + `def.determinant` 行列式 + `def.orthonormal-set` 正交基 → `thm.lagrange-identity` Lagrange 恒等式

取 $u,w$ 张成的子空间的一组正交归一基 $e_1,\ldots,e_m$（由 Gram–Schmidt 得到；$m\le2$）。写 $u=\sum u_i e_i$、$w=\sum w_i e_i$，则 $\langle u,w\rangle=\sum u_i w_i$、$\lVert u\rVert^{2}=\sum u_i^{2}$、$\lVert w\rVert^{2}=\sum w_i^{2}$。

展开：
$$\lVert u\rVert^{2}\lVert w\rVert^{2}-\langle u,w\rangle^{2}=\Bigl(\sum_i u_i^{2}\Bigr)\Bigl(\sum_j w_j^{2}\Bigr)-\Bigl(\sum_i u_i w_i\Bigr)^{2}=\sum_{i<j}(u_i w_j-u_j w_i)^{2}.$$
（右端展开后 $\sum u_i^2w_j^2$ 全部保留，交叉项 $2\sum_{i<j}u_iu_jw_iw_j$ 与左端平方展开的交叉项相消。）

> 续见 proofs/imp.lagrange-identity-proof.2.md
