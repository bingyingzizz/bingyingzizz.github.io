# Carathéodory + 预测度 $\implies$ 原代数上的值不变
`imp.carath-extension` · 推出 · strong 边 · 根 `../`

`thm.caratheodory` Carathéodory 定理 + `prop.outer-measure-induced` 由预测度诱导外测度 → `prop.caratheodory-extension` 预测度还原

由 ②，$\mu _{0}(E_{j}) = \mu^{*}(E_{j})$；又 $\mathfrak{A}$ 是代数，$E_{j} \cap A$ 与 $E_{j} \cap A^{c}$ 都在 $\mathfrak{A}$ 中且不交、并为 $E_{j}$，于是

$$\mu^*(E \cap A) + \mu^*(E \cap A^c) \le \sum_j \mu_0(E_j \cap A) + \sum_j \mu_0(E_j \cap A^c) = \sum_j \mu_0(E_j) < \mu^*(E) + \varepsilon$$

令 $\varepsilon \to 0$ 即得。所以 $\mathfrak{A} \subseteq \mathcal{M}$；而 $\mathcal{M}$ 是 $\sigma$代数（Carathéodory），故 $\mathcal{M}(\mathfrak{A}) \subseteq \mathcal{M}$。∎
