# 同伦不变性　`thm.homotopy-invariance`　·　说明
根 `../`

$$\partial P(\sigma) = g \circ \sigma - f \circ \sigma + P(\partial \sigma),$$

即 $\partial P + P\partial = g_{\#} - f_{\#}$。由 `def.chain-homotopy`，$f$ 与 $g$ 在同调上诱导同一同态。∎

⭐ **这一步正是整条链缺的那环**：`thm.sphere-homology` 的归纳法（把 $S^{n}$ 拆成两个半球）要用「两个半球各自可缩 $\implies$ 它们的恒等映射与常值映射在同调上相同」。没有这条，那个归纳只能算「算出来是 0 和 $\mathbb{Z}$」，不能说「所以球面同调就是这样」。

⚠️ 本节点写的是**完整构造 + 关键抵消**；那一步「内部面两两抵消」在书上是逐个下标验算的，这里给的是可复现的骨架（每个面的定向按 $(-1)^{i}$ 交替，抵消的机制写清楚了）。
