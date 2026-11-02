# 边界函数 $A_\infty$ $\implies$ $A_\blacksquare$ 是解析环
`imp.za-analytic` · 推出 · strong 边 · 根 `../`

`prop.analytic-examples` 解析环的例子 + `def.analytic-ring` 解析环 + `thm.solid-abelian` 固态群构成阿贝尔子范畴 → `thm.za-analytic` 有限生成代数的解析环

**⑤ 解析性。** 设 $C$ 连通、各项为 $\prod_I A$ 的直和。由 $C \in D((A,\mathbb{Z})^{\blacksquare})$，
$$\operatorname{RHom}_A(A[S], C) \cong \operatorname{RHom}_A((A,\mathbb{Z})^{\blacksquare}[S], C),$$
且 $(A,\mathbb{Z})^{\blacksquare}[S] = \prod_I\mathbb{Z} \otimes A$、$A^{\blacksquare}[S] = \prod_I A$。要证的
$$\operatorname{RHom}_A(\textstyle\prod_I \mathbb{Z} \otimes A, C) \cong \operatorname{RHom}_A(\prod_I A, C)$$
来自 ④（余核是 $A_\infty$-模）与 ③（$A_\infty$-模上 $\operatorname{RHom}$ 消没）。

> 续见 proofs/imp.za-analytic.5.md
