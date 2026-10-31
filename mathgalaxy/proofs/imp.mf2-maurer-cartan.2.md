# 左不变性 $+$ 括号在左不变场上封闭 $\implies$ Maurer–Cartan 方程
`imp.mf2-maurer-cartan` · 推出 · strong 边 · 根 `../`

`def.left-invariant-form` 左不变形式 + `def.exterior-derivative` 外微分 + `prop.left-invariant-fields` 左不变向量场 → `thm.maurer-cartan` Maurer–Cartan 方程

**两边都是左不变的 $2$-形式。** 左边：$\mathrm{d}(L_{h}^{\ast}\omega^{i}) = L_{h}^{\ast}\mathrm{d}\omega^{i}$（拉回与外微分交换，`prop.pullback-forms`），而 $L_{h}^{\ast}\omega^{i} = \omega^{i}$，故 $L_{h}^{\ast}\mathrm{d}\omega^{i} = \mathrm{d}\omega^{i}$。右边：$\omega^{j}\wedge\omega^{k}$ 由左不变形式组成，也左不变。所以只需在一点（或在一组左不变基上）比较。

**取左不变向量场比较。** 令 $X = \tilde e_{j}$、$Y = \tilde e_{k}$。$\omega^{i}(\tilde e_{l}) = \delta^{i}_{\ l}$ 是常数，故预备公式前两项为零，

> 续见 proofs/imp.mf2-maurer-cartan.3.md
