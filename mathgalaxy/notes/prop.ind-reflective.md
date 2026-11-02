# C 是 Ind(C) 的反射子范畴　`prop.ind-reflective`　·　说明
根 `../`

**证明。** 记嵌入为 $i : \mathcal{C} \hookrightarrow \operatorname{Ind}(\mathcal{C})$，它把 $X$ 看成常图的形式余极限。
- **反射函子**取 $F\bigl(\varinjlim_{i}X_{i}\bigr) := \varinjlim_{i}X_{i}$（在 $\mathcal{C}$ 里真实存在的那个，由假设存在；$\operatorname{Ind}$ 里形式余极限的表示在同构意义下唯一，故良定义）✓。
- **伴随**：对 $X \in \mathcal{C}$ 与形式余极限 $\varinjlim_{j}Y_{j}$，$\operatorname{Ind}$ 里的 Hom 由余极限定义，而 $X$ 是**紧**的（在 $\mathcal{C}$ 里可表示），故
$$\operatorname{Hom}_{\operatorname{Ind}}\bigl(X, \varinjlim_{j}Y_{j}\bigr) \;=\; \varinjlim_{j}\operatorname{Hom}_{\mathcal{C}}(X, Y_{j}) \;=\; \operatorname{Hom}_{\mathcal{C}}\bigl(X, \varinjlim_{j}Y_{j}\bigr) \;=\; \operatorname{Hom}_{\mathcal{C}}\bigl(X, F(\varinjlim_{j}Y_{j})\bigr),$$
对 $X$ 自然 —— 即 $i \dashv F$（等价地 $F$ 是反射）✓。
- **余单位是同构**：$\varepsilon : F\,i(X) = X \to X$ 就是恒等 ✓；对一般的 $\varinjlim Y_{

> 续见 notes/prop.ind-reflective.2.md
