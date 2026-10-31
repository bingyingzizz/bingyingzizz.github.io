# 群扩张 + $2$-上圈 $\implies$ $H^{2}$ 分类扩张
`imp.h2-extensions` · 推出 · strong 边 · 根 `../`

`def.group-extension` 群扩张 + `def.cocycle-2` 二维上圈与上边界 + `def.group-cohomology` 群上同调 → `thm.h2-group-extensions` 二维上同调分类群扩张

**方向一：扩张 $\mapsto$ 上圈类。** 设 $1 \to A \xrightarrow{i} E \xrightarrow{\pi} G \to 1$。取集合论截面 $\sigma : G \to E$，$\pi\sigma = \operatorname{id}$、$\sigma(1) = 1$。由 $\pi$ 的核是 $i(A)$，存在唯一的 $c(g_{1}, g_{2}) \in A$ 使

$$\sigma(g_{1})\, \sigma(g_{2}) = i\bigl(c(g_{1}, g_{2})\bigr)\, \sigma(g_{1}g_{2}) .$$

**结合律给上圈条件。** 把 $(\sigma(g_{1})\sigma(g_{2}))\sigma(g_{3})$ 与 $\sigma(g_{1})(\sigma(g_{2})\sigma(g_{3}))$ 各算一遍：

> 续见 proofs/imp.h2-extensions.2.md
