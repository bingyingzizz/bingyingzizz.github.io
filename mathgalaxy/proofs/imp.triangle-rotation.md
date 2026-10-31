# 映射锥 $\implies$ 三角可旋转、可延拓
`imp.triangle-rotation` · 推出 · strong 边 · 根 `../`

`def.mapping-cone` 映射锥 + `def.distinguished-triangle` 导出三角 → `prop.triangle-rotation` 三角的旋转与延拓

**旋转。** 不妨设 $M = M(f)$，即三角是 $K \xrightarrow{\ f\ } L \to M(f) \to K[1]$。要证 $L \to M(f) \to K[1] \to L[1]$ 导出。把 $g : L \to M(f)$ 取成含入 $(0, 1)^{\mathrm{T}}$，则它的映射锥是

$$M(g)^{n} = L^{n+1} \oplus M(f)^{n} = L^{n+1} \oplus K^{n+1} \oplus L^{n}$$

再给出 $K[1]$ 与 $M(g)$ 之间的两个互逆（同伦意义下）映射 $\varphi, \psi$，以及同伦 $s$ 使 $s \circ \varphi \sim 1$。逐项算完即得两个三角在同伦范畴里同构，于是旋转后的三角也是导出的。∎

**反复旋转**就得到整条长序列 $\cdots \to K \to L \to M \to K[1] \to L[1] \to \cdots$。∎

> 续见 proofs/imp.triangle-rotation.2.md
