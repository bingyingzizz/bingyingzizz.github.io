# Carathéodory + 预测度 $\implies$ 原代数上的值不变
`imp.carath-extension` · 推出 · strong 边 · 根 `../`

`thm.caratheodory` Carathéodory 定理 + `prop.outer-measure-induced` 由预测度诱导外测度 → `prop.caratheodory-extension` 预测度还原

$$\mu_0(A) = \mu_0( \bigcup_j (A \cap F_j) ) = \sum_j \mu_0(A \cap F_j) \le \sum_j \mu_0(F_j) \le \sum_j \mu_0(E_j)$$

（第一个等号用 $A$ 是那些不交集合之并；第二个用 $\mu _{0}$ 可数可加；不等号用单调性。）对所有覆盖取下确界得 $\mu _{0}(A) \le \mu^{*}$(A)。

**③ $\mathfrak{A} \subseteq \mathcal{M}$。** 设 $A \in \mathfrak{A}$，$E \subseteq X$，要证 $\mu^{*}(E) \ge \mu^{*}(E\cap A) + \mu^{*}(E\cap A^{c})$。给定 $\varepsilon > 0$，取 $\mathfrak{A}$ 中 $\{E_{j}\}$ 覆盖 $E$ 使

$$\sum_j \mu_0(E_j) < \mu^*(E) + \varepsilon$$

> 续见 proofs/imp.carath-extension.3.md
