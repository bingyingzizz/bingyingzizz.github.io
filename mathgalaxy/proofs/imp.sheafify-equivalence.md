# imp.sheafify-equivalence
`imp.sheafify-equivalence` · 推出 · strong 边 · 根 `../`

`def.effective-equivalence` 有效等价关系 + `def.topos` 拓扑斯 + `def.equalizer` 等化子 / 余等化子 → `prop.sheafify-equivalence` 层化与等价关系交换

**证明。** 记层化为 $(-)^{\sharp}$：它是到层范畴的反射，故左伴随。
- 左伴随保**余极限** ✓；它同时又**左正合**（保有限极限，因为拓扑斯都是左正合的）✓。
- **等价关系的条件都是有限极限条件**：$R \rightrightarrows T$ 是等价关系 $\iff$ 存在 $R \to T\times T$ 使其为单态射（自反、对称、传递三条用对角、交换与拉回表达）。

> 续见 proofs/imp.sheafify-equivalence.2.md
