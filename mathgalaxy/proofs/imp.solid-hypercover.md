# 常层上同调消没 $\implies$ 固态化正合
`imp.solid-hypercover` · 推出 · strong 边 · 根 `../`

`thm.csz-free` 连续函数群是自由的 + `def.cond-measure` 整值测度 → `prop.solid-hypercover` 固态化把超覆盖变成正合列

对 hypercover $S_\bullet \to S$，有正合列

$$0 \to C(S,\mathbb{Z}) \to C(S_0,\mathbb{Z}) \to C(S_1,\mathbb{Z}) \to \cdots,$$

因为 $H^i(S,\mathbb{Z}) = 0$（$i > 0$，profinite 集上常层上同调）。由 `thm.csz-free` 每一项都自由，取 $\operatorname{RHom}(-,\mathbb{Z})$ 得

$$\cdots \to \operatorname{Hom}(C(S_1,\mathbb{Z}),\mathbb{Z}) \to \operatorname{Hom}(C(S_0,\mathbb{Z}),\mathbb{Z}) \to \operatorname{Hom}(C(S,\mathbb{Z}),\mathbb{Z}) \to 0,$$

即 $\cdots \to Z[S_1]^{\blacksquare} \to Z[S_0]^{\blacksquare} \to Z[S]^{\blacksquare} \to 0$ 正合。$\blacksquare$
