# 左不变性 $+$ 括号在左不变场上封闭 $\implies$ Maurer–Cartan 方程
`imp.mf2-maurer-cartan` · 推出 · strong 边 · 根 `../`

`def.left-invariant-form` 左不变形式 + `def.exterior-derivative` 外微分 + `prop.left-invariant-fields` 左不变向量场 → `thm.maurer-cartan` Maurer–Cartan 方程

$$-\frac{1}{2}\sum_{a,b}c^{i}_{\ ab}\bigl(\omega^{a}\wedge\omega^{b}\bigr)(\tilde e_{j},\tilde e_{k}) = -\frac{1}{2}\bigl(c^{i}_{\ jk} - c^{i}_{\ kj}\bigr) = -c^{i}_{\ jk},$$

最后一步用了反称性 $c^{i}_{\ kj} = -c^{i}_{\ jk}$。两个左不变 $2$-形式在每点的基 $(\tilde e_{j}\wedge\tilde e_{k})_{j<k}$ 上取值处处相同，故相等。

> 续见 proofs/imp.mf2-maurer-cartan.5.md
