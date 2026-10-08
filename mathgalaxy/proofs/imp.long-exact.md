# 短正合列 $\implies$ 长正合列
`imp.long-exact` · 推出 · strong 边 · 根 `../`

`def.distinguished-triangle` 导出三角 + `def.cohomology` 同调 + `prop.triangle-rotation` 三角的旋转与延拓 → `thm.long-exact` 长正合列

设 $0 \to K \xrightarrow{\ f\ } L \xrightarrow{\ g\ } M \to 0$ 是复形的短正合列。

**第一步：短正合列给出导出三角。** 考虑 $f$ 的映射锥的含入 $L \to M(f)$。由 $g \circ f = 0$ 与短正合列的泛性质，有一条自然映射

$$M(f) \longrightarrow M, \qquad (k^{n+1}, l^{n}) \mapsto g^{n}(l^{n})$$

它是复形态射（与微分交换，因为 $g \circ d_{L} = d_{M} \circ g$ 且 $g \circ f = 0$）。由短正合列上逐项的正合性（五引理），这条映射是**拟同构**，于是三角

$$K \xrightarrow{\ f\ } L \xrightarrow{\ g\ } M \xrightarrow{\ \delta\ } K[1]$$

在 $\mathbf{K}(\mathcal{A})$ 中是**导出的**。∎

> 续见 proofs/imp.long-exact.2.md
