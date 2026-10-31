# 逆映射定理 + 隐函数定理 $\implies$ 常秩定理
`imp.rank-theorem` · 推出 · strong 边 · 根 `../`

`thm.inverse-function` 逆映射定理 + `thm.implicit-function` 隐函数定理 → `cor.rank-theorem` 常秩定理

**第四步：再用一次逆映射定理把 $h$ 拉直。** $m - r$ 个分量 $\widehat f_1, \ldots, \widehat f_{m-r}$ 由第二步的秩条件知它们在 $y' = a'$ 处的 Jacobi 矩阵秩为 $m - r$（否则整体秩会超过 $r$）；重排后可设 $h$ 的前 $m-r$ 个分量构成满秩。在值域上取坐标变换 $\psi(y', z', z'') := (y',\ h_1(y'), \ldots, h_{m-r}(y'),\ z'')$，其导数可逆（块结构同上），于是 $\psi \circ f \circ \Phi^{-1}$ 就是 $(y', y'') \mapsto (y', 0, \ldots, 0)$。

> 续见 proofs/imp.rank-theorem.6.md
