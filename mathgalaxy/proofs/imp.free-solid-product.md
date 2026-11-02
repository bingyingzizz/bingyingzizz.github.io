# $C(S,\mathbb{Z})$ 自由 $\implies$ $Z[S]^{\blacksquare} \cong \prod_I\mathbb{Z}$
`imp.free-solid-product` · 推出 · strong 边 · 根 `../`

`thm.csz-free` 连续函数群是自由的 → `cor.free-solid-product` 自由固态群是大乘积

由 `thm.csz-free` 取同构 $C(S,\mathbb{Z}) \cong \bigoplus_I \mathbb{Z}$，则

$$Z[S]^{\blacksquare} = \varprojlim_i \mathbb{Z}[S_i] = \varprojlim_i \operatorname{Hom}(C(S_i,\mathbb{Z}), \mathbb{Z}) = \operatorname{Hom}\Bigl(\varinjlim_i C(S_i,\mathbb{Z}),\ \mathbb{Z}\Bigr),$$

而 $\varinjlim_i C(S_i,\mathbb{Z}) = C(S,\mathbb{Z})$（连续函数由有限商决定）。于是

$$Z[S]^{\blacksquare} \cong \operatorname{Hom}\Bigl(\bigoplus_I \mathbb{Z},\ \mathbb{Z}\Bigr) \cong \prod_I \mathbb{Z}. \blacksquare$$
