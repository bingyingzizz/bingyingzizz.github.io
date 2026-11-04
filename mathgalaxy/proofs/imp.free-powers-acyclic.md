# 离散指标的自由模 $\implies$ 离散空间上零调
`imp.free-powers-acyclic` · 推出 · strong 边 · 根 `../`

`prop.rhom-ze-powers` 离散空间上自由模的导出 Hom → `prop.condab-discrete-acyclic` 离散空间上零调

第 1 条直接由 $\operatorname{RHom}_{\mathbb{Z}}(\mathbb{Z}[E], N) \cong N^{E}$（$E$ 离散）落在 $0$ 次得到：$H^{n}_{\mathrm{cond}}(E,M) = \operatorname{Ext}^{n}(\mathbb{Z}[E],M) = 0$（$n>0$）。

第 2 条（$E \times S$，$S$ Stonean）是同一台机器配上截面公式：$\operatorname{Ext}^{n}(\mathbb{Z}[E\times S], M) \cong \operatorname{Ext}^{n}(\mathbb{Z}[E], M)(S) = 0$。

⚠ **本图没有单独立节点**的是「$\mathbb{Z}[E \times S] = \mathbb{Z}[E]\otimes_{\mathbb{Z}}\mathbb{Z}[S]$ 与截面公式的合成」这一步，它在凝聚态理论里是标准的张量积相容性。
