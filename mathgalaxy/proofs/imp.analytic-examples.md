# 固态群的相对化 $\implies$ 两个解析环
`imp.analytic-examples` · 推出 · strong 边 · 根 `../`

`thm.solid-abelian` 固态群构成阿贝尔子范畴 + `def.analytic-ring` 解析环 → `prop.analytic-examples` 解析环的例子

两种情形统一处理：设 $\mathcal{A}$ 是 $\mathbb{Z}_{p,\blacksquare}$ 或 $(A,\mathbb{Z})_\blacksquare$，则

$$\mathcal{A}[S] = \mathbb{Z}_\blacksquare[S] \otimes^{L}_{\mathbb{Z}_\blacksquare} \mathcal{A}.$$

取复形 $C$（各项为 $\mathcal{A}[T]$ 的直和），它是 $D(\mathbf{Solid})$ 里的 $\mathcal{A}$-模。于是

$$\operatorname{RHom}(\mathbb{Z}_\blacksquare[S], C) \cong \operatorname{RHom}_{\mathcal{A}}\bigl(\mathbb{Z}_\blacksquare[S] \otimes^{L}_{\mathbb{Z}_\blacksquare} \mathcal{A},\ C\bigr) = \operatorname{RHom}_{\mathcal{A}}(\mathcal{A}[S], C).$$

左边由 $C$ 固态等于 $\operatorname{RHom}(\mathbb{Z}[S], C)$，正是解析环定义要求的同构。$\blacksquare$
