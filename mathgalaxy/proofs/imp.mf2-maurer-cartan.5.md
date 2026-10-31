# 左不变性 $+$ 括号在左不变场上封闭 $\implies$ Maurer–Cartan 方程
`imp.mf2-maurer-cartan` · 推出 · strong 边 · 根 `../`

`def.left-invariant-form` 左不变形式 + `def.exterior-derivative` 外微分 + `prop.left-invariant-fields` 左不变向量场 → `thm.maurer-cartan` Maurer–Cartan 方程

**$\mathfrak{g}$-值版本**：把上式按 $\omega = \sum\omega^{i}e_{i}$ 组装，右端是 $-\frac{1}{2}\sum_{j,k}\omega^{j}\wedge\omega^{k}\,(\sum_{i}c^{i}_{\ jk}e_{i}) = -\frac{1}{2}\sum_{j,k}\omega^{j}\wedge\omega^{k}\,[e_{j},e_{k}] = -\frac{1}{2}[\omega\wedge\omega]$，正是 $\mathrm{d}\omega = -\frac{1}{2}[\omega\wedge\omega]$。∎

⭐ 证明里没有一处用到「群的具体样子」：只用左不变性（把 $\omega^{i}(\tilde e_{l})$ 变成常数）与括号在左不变场上封闭。所以这条公式是纯结构常数的事 —— 也正是它能把「群」与「Lie 代数」直接对上的原因。
