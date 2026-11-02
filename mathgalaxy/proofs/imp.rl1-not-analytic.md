# 解析性要求 $\operatorname{Ext}^1 = 0$ $\implies$ $\mathbb{R}_{\ell^1}$ 不是解析环
`imp.rl1-not-analytic` · 推出 · strong 边 · 根 `../`

`def.analytic-ring` 解析环 → `prop.rl1-not-analytic` R_{ℓ¹} 不是解析环

若 $\mathcal{A}$ 是解析环，则对 extremally disconnected 的 $S, T$ 与 $i > 0$，由解析性取 $C = \mathcal{A}[T]$ 得

$$\operatorname{Ext}^i_{\mathcal{A}}(\mathcal{A}[S], \mathcal{A}[T]) = H^i(S, \mathcal{A}[T]) = 0,$$

因为 $\mathcal{A}[T]$ 是 $\prod$ 形（见 `cor.free-solid-product` 的相对版本），而 $S$ 上常层的高次上同调消没。

但对 $\mathbb{R}_{\ell^1}$，Ribe 扩张定理给出无限 extremally disconnected $S$ 上的非零类

$$0 \ne \operatorname{Ext}^1_{\mathbb{R}}(\mathbb{R}_{\ell^1}[S], \mathbb{R}_{\ell^1}[S]),$$

与解析性矛盾。$\blacksquare$
