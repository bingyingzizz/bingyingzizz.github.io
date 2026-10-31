# 实谱定理 + 复化 $\implies$ 复正规可酉对角化
`imp.spectral-normal` · 推出 · strong 边 · 根 `../`

`thm.spectral-theorem` 谱定理（实对称） + `def.normal-operator` 正规算子 → `cor.spectral-normal` 谱定理（复正规）

1. **自伴的情形**：复自伴算子（Hermite）的实谱定理版本：把 $V$ 看作实向量空间，$T$ 作为实算子是实对称的，由上一条得到实特征值与正交分解；再把实结构复化即得复情形。
2. **正规的情形**：$T$ 正规时写 $T = A + iB$，其中 $A := (T + T^{\ast})/2$、$B := (T - T^{\ast})/(2i)$ 都自伴；正规性等价于 $AB = BA$（直接展开 $T^{\ast}T = TT^{\ast}$ 即得）。
3. 由 $AB = BA$，它们**同时**可正交对角化：对 $A$ 的每个特征子空间 $E_\lambda$，由 $AB = BA$ 得 $B(E_\lambda) \subseteq E_\lambda$；在 $E_\lambda$ 上对 $B$ 用实谱定理（同理复化），把所有这样的

> 续见 proofs/imp.spectral-normal.2.md
