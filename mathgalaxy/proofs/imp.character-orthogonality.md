# 特征标正交性
`imp.character-orthogonality` · 推出 · strong 边 · 根 `../`

`prop.character-inner-product-hom` 特征标内积与 Hom 维数 + `thm.schur-lemma` Schur 引理 + `cor.schur-scalar` 代数闭域上的 Schur 推论 + `def.irreducible-representation` 不可约表示 → `thm.character-orthogonality` 不可约特征标的正交性

由 prop.character-inner-product-hom，$\langle\chi_{V_1},\chi_{V_2}\rangle=\dim\operatorname{Hom}_G(V_1,V_2)$。
Schur 引理给出：若 $V_1\not\cong V_2$，则 $\operatorname{Hom}_G(V_1,V_2)=0$；若同构，则 $\operatorname{End}_G(V_1)=F$（cor.schur-scalar，$F$ 代数闭），维数为 1。
故内积为 $\delta_{12}$。$\blacksquare$
