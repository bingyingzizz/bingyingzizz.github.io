# imp.ind-reflective
`imp.ind-reflective` · 推出 · strong 边 · 根 `../`

`def.ind-object` Ind-对象 + `def.reflective-subcategory` 反射子范畴 → `prop.ind-reflective` C 是 Ind(C) 的反射子范畴

**证明。** 记嵌入为 $i : \mathcal{C} \hookrightarrow \operatorname{Ind}(\mathcal{C})$，它把 $X$ 看成常图的形式余极限。
- **反射函子**取 $F\bigl(\varinjlim_{i}X_{i}\bigr) := \varinjlim_{i}X_{i}$（在 $\mathcal{C}$ 里真实存在的那个，由假设存在；$\operatorname{Ind}$ 里形式余极限的表示在同构意义下唯一，故良定义）✓。
- **伴随**：对 $X \in \mathcal{C}$ 与形式余极限 $\varinjlim_{j}Y_{j}$，$\operatorname{Ind}$ 里的 Hom 由余极限定义，而 $X$ 是**紧**的（在 $\mathcal{C}$ 里可表示），故
$$\operatorname{Hom}_{\operatorname{Ind}}\bigl(X, \varinjlim_{j}Y_{j}\bigr) \;=\; \varinjlim_{j}\operatorname{Hom}_{\mathcal{C}}(X, Y_{j}) \;=\; \operatorname{Hom}_{\mathcal{C}}\bigl(X, \varinjlim_{j}Y_{j}\bigr) \;=\; \op

> 续见 proofs/imp.ind-reflective.2.md
