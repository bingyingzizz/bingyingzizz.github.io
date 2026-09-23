# 扩张的最大性与 σ-有限唯一性
`imp.carath-unique` · 推出 · strong 边 · 根 `../`

`prop.caratheodory-extension` 预测度还原 → `thm.caratheodory-uniqueness` 扩张的唯一性

沿用上一条的记号，设 $\nu$ 是 $\mathcal{M}(\mathfrak{A})$ 上另一个扩张 $\mu _{0}$ 的测度。

**① $\nu \le \mu^{*}$。** 设 $E \in \mathcal{M}(\mathfrak{A})$，$\{E_{j}\} \subseteq \mathfrak{A}$ 是 $E$ 的覆盖。由 $\nu$ 的次可加性与 $\nu |_\mathfrak{A} = \mu _{0}$，

$$\nu(E) \le \sum_j \nu(E_j) = \sum_j \mu_0(E_j)$$

对所有这样的覆盖取下确界，右边给出 $\mu^{*}(E) = \mu (E)$。故 $\nu (E) \le \mu (E)$。

> 续见 proofs/imp.carath-unique.2.md
