# Carathéodory + 预测度 $\implies$ 原代数上的值不变
`imp.carath-extension` · 推出 · strong 边 · 根 `../`

`thm.caratheodory` Carathéodory 定理 + `prop.outer-measure-induced` 由预测度诱导外测度 → `prop.caratheodory-extension` 预测度还原

设 $\mathfrak{A}$ 是代数，$\mu _{0}$ 是 $\mathfrak{A}$ 上的预测度，$\mu^{*}$ 是由 $\mu _{0}$ 诱导的外测度，$\mathcal{M}$ 是全体 $\mu^{*}$-可测集。

**① $\mu^{*}|_\mathfrak{A} \le \mu _{0}$。** 取 $A \in \mathfrak{A}$，则 $A \subseteq A$ 是一个（只含一层的）覆盖，故

$$\mu^*(A) \le \mu_0(A) + 0 + 0 + \cdots = \mu_0(A)$$

**② $\mu^{*}|_\mathfrak{A} \ge \mu _{0}$。** 设 $\{E_{j}\} \subseteq \mathfrak{A}$ 是 $A$ 的覆盖。令 $F_{j} = E_{j} \setminus (E_{1} \cup \cdots \cup E_\{j-1\})$，则 $F_{j} \in \mathfrak{A}$ 两两不交且 $\bigcup F_{j} \supseteq A$、$F_{j} \subseteq E_{j}$。于是

> 续见 proofs/imp.carath-extension.2.md
