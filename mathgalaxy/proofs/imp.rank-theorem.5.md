# 逆映射定理 + 隐函数定理 $\implies$ 常秩定理
`imp.rank-theorem` · 推出 · strong 边 · 根 `../`

`thm.inverse-function` 逆映射定理 + `thm.implicit-function` 隐函数定理 → `cor.rank-theorem` 常秩定理

在值域上取坐标变换 $\psi(y', z', z'') := (y',\ h_1(y'), \ldots, h_{m-r}(y'),\ z'')$，其导数可逆（块结构同上），于是 $\psi \circ f \circ \Phi^{-1}$ 就是 $(y', y'') \mapsto (y', 0, \ldots, 0)$。

**第五步：整理。** 把 $\varphi := \Phi^{-1}$（定义域坐标）、$\psi$（值域坐标）代入即得结论。∎

> ⚠ 第三步用到「邻域连通 + 导数为零 $\implies$ 常值」；这里可以取球邻域（凸、连通）规避讨论。⭐ 整条证明就是**三次换坐标**：把 $f'$ 变成坐标、把 $\widehat f$ 说成不依赖 $y''$、把 $h$ 拉直。
