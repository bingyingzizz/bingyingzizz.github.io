# 边界函数 $A_\infty$ $\implies$ $A_\blacksquare$ 是解析环
`imp.za-analytic` · 推出 · strong 边 · 根 `../`

`prop.analytic-examples` 解析环的例子 + `def.analytic-ring` 解析环 + `thm.solid-abelian` 固态群构成阿贝尔子范畴 → `thm.za-analytic` 有限生成代数的解析环

设 $A = \mathbb{Z}[T]$，$A_\infty = \mathbb{Z}((T^{-1}))$。

**① $A_\infty$ 紧。** 有短正合列
$$0 \to \mathbb{Z}[[U]] \otimes A \xrightarrow{U \mapsto T^{-1}} \mathbb{Z}[[U]] \otimes A \to A_\infty \to 0,$$
前两项在 $\operatorname{Mod}^{cond}_{(A,\mathbb{Z})^{\blacksquare}}$ 中紧投射（它们是 $\prod_I \mathbb{Z} \otimes A$ 的形状），故 $A_\infty$ 紧。

**② $A_\infty$ 幂等。** 由 ① 的表现直接算 $A_\infty \otimes^L A_\infty \cong A_\infty$。于是「$A_\infty$-模」构成 $D((A,\mathbb{Z})^{\blacksquare})$ 的全子范畴，$\mathbb{Z}((T^{-1})) \otimes A$ 是其中的紧生成元。

> 续见 proofs/imp.za-analytic.2.md
