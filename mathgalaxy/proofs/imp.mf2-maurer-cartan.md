# 左不变性 $+$ 括号在左不变场上封闭 $\implies$ Maurer–Cartan 方程
`imp.mf2-maurer-cartan` · 推出 · strong 边 · 根 `../`

`def.left-invariant-form` 左不变形式 + `def.exterior-derivative` 外微分 + `prop.left-invariant-fields` 左不变向量场 → `thm.maurer-cartan` Maurer–Cartan 方程

**预备公式**：对任意 $1$-形式 $\theta$ 与向量场 $X, Y$，

$$\mathrm{d}\theta(X,Y) = X\bigl(\theta(Y)\bigr) - Y\bigl(\theta(X)\bigr) - \theta\bigl([X,Y]\bigr).$$

这是 $\mathrm{d}$ 的坐标无关刻画：在卡里把 $\theta = \sum a_{i}\mathrm{d}x^{i}$ 与 $X, Y$ 的分量代入 $\mathrm{d}\theta = \sum\partial_{j}a_{i}\,\mathrm{d}x^{j}\wedge\mathrm{d}x^{i}$，与上式逐项吻合（`def.exterior-derivative` 的定义式加 Leibniz 律）。

> 续见 proofs/imp.mf2-maurer-cartan.2.md
