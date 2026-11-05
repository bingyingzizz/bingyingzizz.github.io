# 映射锥 $\implies$ 三角可旋转、可延拓
`imp.triangle-rotation` · 推出 · strong 边 · 根 `../`

`def.mapping-cone` 映射锥 + `def.distinguished-triangle` 导出三角 → `prop.triangle-rotation` 三角的旋转与延拓

**旋转。** 按定义，导出三角就是**某个映射锥三角的同构像**，而「旋转」在链同构下保持，所以只需对锥三角验证：设 $M = M(f)$，三角是 $K \xrightarrow{\ f\ } L \to M(f) \to K[1]$。

要证 $L \to M(f) \to K[1] \xrightarrow{\ -f[1]\ } L[1]$ 导出。

把 $g : L \to M(f)$ 取成含入 $(0, 1)^{\mathrm{T}}$，则它的映射锥是

$$M(g)^{n} = M(f)^{n+1} \oplus L^{n} = L^{n+2} \oplus K^{n+1} \oplus L^{n}$$

> 续见 proofs/imp.triangle-rotation.2.md
