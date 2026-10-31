# 相容性传递 $\implies$ 极大图册存在且唯一
`imp.mf-maximal-atlas` · 推出 · strong 边 · 根 `../`

`def.manifold-chart` 图卡 → `prop.maximal-atlas` 极大图册

**(2) 包含与覆盖。** $(V,\psi) \in \mathcal{A}$ 时它与 $\mathcal{A}$ 中每张卡相容（$\mathcal{A}$ 本身相容），故 $\mathcal{A} \subseteq \mathcal{A}^{+}$；$\mathcal{A}^{+}$ 覆盖 $M$ 因为它含覆盖的 $\mathcal{A}$。由 (1) 它是图册。

**(3) 极大。** 设 $\mathcal{B} \supseteq \mathcal{A}^{+}$ 是图册，取 $(V,\theta) \in \mathcal{B}$。由 $\mathcal{A} \subseteq \mathcal{A}^{+} \subseteq \mathcal{B}$ 与 $\mathcal{B}$ 内两两相容，$(V,\theta)$ 与 $\mathcal{A}$ 中每张卡相容，故 $(V,\theta) \in \mathcal{A}^{+}$。于是 $\mathcal{B} = \mathcal{A}^{+}$。

> 续见 proofs/imp.mf-maximal-atlas.3.md
