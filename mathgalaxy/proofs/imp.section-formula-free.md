# 截面公式（$M = \mathbb{Z}$）$\implies$ 自由模的导出 Hom 是截面
`imp.section-formula-free` · 推出 · strong 边 · 根 `../`

`lem.ext-stonean-section` Stonean 上 Ext 的截面公式 → `prop.rhom-zs-sections` Stonean 空间上自由模的导出 Hom

截面公式说 $\operatorname{Ext}^{n}_{\mathbb{Z}}(M,N)(S) \cong \operatorname{Ext}^{n}_{\mathbb{Z}}(M\cdot S,\ N)$，其中 $M \cdot S = M \otimes_{\mathbb{Z}} \mathbb{Z}[S]$。取 $M = \mathbb{Z}$：

$$\operatorname{Ext}^{n}_{\mathbb{Z}}(\mathbb{Z}, N)(S) \;\cong\; \operatorname{Ext}^{n}_{\mathbb{Z}}(\mathbb{Z}[S],\ N).$$

左边是**常层** $\underline{\operatorname{Ext}^{n}(\mathbb{Z},N)}$ 在 $S$ 上的截面，而 $\mathbb{Z}$ 自由（投射）$\implies$ $\operatorname{Ext}^{n}(\mathbb{Z},N) = 0$（$n > 0$）、$\operatorname{Ext}^{0} = N$，于是左边 $= N(S)$。

所以 $\operatorname{RHom}_{\mathbb{Z}}(\mathbb{Z}[S], N) \cong N(S)$，集中在 $0$ 次。
