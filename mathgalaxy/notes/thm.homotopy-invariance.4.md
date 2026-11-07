# 同伦不变性　`thm.homotopy-invariance`　·　说明
根 `../`

即 $\partial P_{n} + P_{n-1}\partial = g_{\#} - f_{\#}$（约定 $P_{-1} = 0$；$n = 0$ 时 $\tau_{0} = [v_{0}, w_{0}]$，①③ 都不出现，公式直接给出 $g\sigma - f\sigma$）。由 `def.chain-homotopy`，$f$ 与 $g$ 在同调上诱导同一同态。∎

**同伦等价的情形**：若 $f : X \to Y$ 与 $h : Y \to X$ 满足 $h \circ f \simeq \mathrm{id}_{X}$、$f \circ h \simeq \mathrm{id}_{Y}$，则 $h_{*}f_{*} = \mathrm{id}$、$f_{*}h_{*} = \mathrm{id}$，故 $f_{*}$ 是同构。

⭐ **这一步是球面同调归纳的支点**：`thm.sphere-homology` 把 $S^{n}$ 拆成两个可缩半球，需要「恒等映射与常值映射在同调上相同」——那正是本定理的直接推论（可缩空间里 $\mathrm{id} \simeq \text{常值}$）。

⚠️ 上面 ③ 的两行就是「内部面抵消」的逐下标验算；$n = 1$ 时可以手验：正方形剖成两块三角形，四个侧面正好是 $\partial\sigma$ 的两块棱柱。
