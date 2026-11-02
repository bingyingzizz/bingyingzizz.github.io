# 逆映射定理 + 隐函数定理 $\implies$ 常秩定理
`imp.rank-theorem` · 推出 · strong 边 · 根 `../`

`thm.inverse-function` 逆映射定理 + `thm.implicit-function` 隐函数定理 → `cor.rank-theorem` 常秩定理

（若某点 $D_{y''}\widehat f \ne 0$，则该点的秩 $> r$，与常秩矛盾。）于是 $\widehat f$ 在连通邻域上只依赖 $y'$：$\widehat f = h(y')$。

**第四步：再用一次逆映射定理把 $h$ 拉直。** $m - r$ 个分量 $\widehat f_1, \ldots, \widehat f_{m-r}$ 由第二步的秩条件知它们在 $y' = a'$ 处的 Jacobi 矩阵秩为 $m - r$（否则整体秩会超过 $r$）；

重排后可设 $h$ 的前 $m-r$ 个分量构成满秩。

> 续见 proofs/imp.rank-theorem.5.md
