# 左不变性 $+$ 括号在左不变场上封闭 $\implies$ Maurer–Cartan 方程
`imp.mf2-maurer-cartan` · 推出 · strong 边 · 根 `../`

`def.left-invariant-form` 左不变形式 + `def.exterior-derivative` 外微分 + `prop.left-invariant-fields` 左不变向量场 → `thm.maurer-cartan` Maurer–Cartan 方程

$$\mathrm{d}\omega^{i}(\tilde e_{j},\tilde e_{k}) = -\omega^{i}\bigl([\tilde e_{j},\tilde e_{k}]\bigr) = -\omega^{i}\Bigl(\sum_{l}c^{l}_{\ jk}\tilde e_{l}\Bigr) = -c^{i}_{\ jk},$$

其中第二个等号用了 $[\tilde e_{j},\tilde e_{k}]$ 左不变（`prop.left-invariant-fields` 第 2 条），因而可以按 $\mathfrak{g}$ 的基展开。

**右边同一点的值。** 由 $(\omega^{a}\wedge\omega^{b})(\tilde e_{j},\tilde e_{k}) = \delta^{a}_{\ j}\delta^{b}_{\ k} - \delta^{a}_{\ k}\delta^{b}_{\ j}$，

> 续见 proofs/imp.mf2-maurer-cartan.4.md
