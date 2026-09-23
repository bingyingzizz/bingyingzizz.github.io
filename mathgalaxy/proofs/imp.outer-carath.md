# 外测度 + 可切集 $\implies$ σ-代数与完备测度
`imp.outer-carath` · 推出 · strong 边 · 根 `../`

`def.outer-measure` 外测度 + `def.caratheodory-measurable` μ*-可测集 → `thm.caratheodory` Carathéodory 定理

设 $\mu^{*}$ 是外测度，$\mathcal{M} = \{ A : \forall E, \mu^{*}(E) = \mu^{*}(E\cap A) + \mu^{*}(E\cap A^{c}) \}$。

**① $\mathcal{M}$ 是代数。** 条件关于 $A$ 与 $A^{c}$ 对称，故 $A \in \mathcal{M} \implies A^{c} \in \mathcal{M}$；$\emptyset$ 与 $X$ 显然在 $\mathcal{M}$ 中。若 $A, B \in \mathcal{M}$，要证 $A \cup B \in \mathcal{M}$：对任意 $E$，把 $E$ 依 $A$ 切开、再依 $B$ 切开，

$$\mu^*(E) = \mu^*(E\cap A) + \mu^*(E\cap A^c) = \mu^*(E\cap A\cap B) + \mu^*(E\cap A\cap B^c) + \mu^*(E\cap A^c\cap B) + \mu^*(E\cap A^c\cap B^c)$$

> 续见 proofs/imp.outer-carath.2.md
