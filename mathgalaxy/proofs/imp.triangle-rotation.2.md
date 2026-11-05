# 映射锥 $\implies$ 三角可旋转、可延拓
`imp.triangle-rotation` · 推出 · strong 边 · 根 `../`

`def.mapping-cone` 映射锥 + `def.distinguished-triangle` 导出三角 → `prop.triangle-rotation` 三角的旋转与延拓

再消掉一个**可缩直和项**：锥里带着 $L$ 的两次平移 $L^{n+2}\oplus L^{n+1}$，其中那一段的微分是恒等（可缩），消掉后剩下的正好是 $K[1]$。把这两步写成显式的链映射 $\varphi : K[1] \to M(g)$ 与 $\psi : M(g) \to K[1]$，配上同伦 $s$ 使 $\psi\varphi \sim 1$、$\varphi\psi \sim 1$，就得到两个三角在同伦范畴里同构，于是旋转后的三角也是导出的。

⚠️ $\varphi, \psi, s$ 的矩阵本图**没有逐项写出**（$3\times3$ 分块、带符号），这里只说明**可以**显式消去；细节属于「矩阵硬算」。∎

> 续见 proofs/imp.triangle-rotation.3.md
