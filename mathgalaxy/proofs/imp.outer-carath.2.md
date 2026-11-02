# 外测度 + 可切集 $\implies$ σ-代数与完备测度
`imp.outer-carath` · 推出 · strong 边 · 根 `../`

`def.outer-measure` 外测度 + `def.caratheodory-measurable` μ*-可测集 → `thm.caratheodory` Carathéodory 定理

而右边前三项合起来 $\ge \mu^{*}(E\cap (A\cup B))$（次可加），最后一项 $= \mu^{*}(E\cap (A\cup B)^{c})$。反向不等式由次可加自动成立，故 $A \cup B \in \mathcal{M}$。

**② $\mathcal{M}$ 是 $\sigma$代数。** 设 $A_{j} \in \mathcal{M}$ 两两不交，$A = \bigcup A_{j}$。对任意 $E$ 归纳得到

$$\mu^*(E \cap \bigcup_{j\le n} A_j) = \sum_{j\le n} \mu^*(E \cap A_j)$$

（每一步用 $A_{n}$ 把 $E$ 切开，丢掉的那块弃掉即可。）令 $n \to \infty$，用次可加性与单调性，

$$\mu^*(E) = \mu^*(E\cap A) + \mu^*(E\cap A^c)$$

故 $A \in \mathcal{M}$。结合 ①，$\mathcal{M}$ 是可数并封闭的代数，即 $\sigma$代数（可数不交并由 ②，一般可数并再换成不交并）。

> 续见 proofs/imp.outer-carath.3.md
