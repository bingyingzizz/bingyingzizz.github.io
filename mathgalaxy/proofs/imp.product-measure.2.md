# 矩形上的预测度 $\implies$ Carathéodory 扩张得到乘积测度
`imp.product-measure` · 推出 · strong 边 · 根 `../`

`def.premeasure` 预测度 + `thm.caratheodory` Carathéodory 定理 → `def.product-measure` 乘积测度

**③ 用 Carathéodory 扩张。** 由「预测度 $\to$ 外测度 $\to$ 可测集 $\to$ 扩张测度」那一整套：$\mu_{0}$ 诱导出 $X \times Y$ 上的外测度 $\mu^{*}$，全体 $\mu^{*}$-可测集构成 $\sigma$代数，$\mu^{*}$ 在其上成为测度；而代数 $\mathcal{A}$ 中每个集合都是 $\mu^{*}$-可测的，且 $\mu^{*}|_\mathcal{A} = \mu_{0}$。

**④ 落到 $\mathcal{M} \otimes \mathcal{N}$ 上。** $\mathcal{A}$ 含所有矩形，故 $\mathcal{A}$ 生成 $\mathcal{M} \otimes \mathcal{N} \subseteq (\mu^{*}$-可测集)；把 $\mu^{*}$ 限制在 $\mathcal{M} \otimes \mathcal{N}$ 上，就是所要的测度 $\mu \times \nu$，它在矩形上取值 $\mu \times \nu(A \times B) = \mu(A) \nu(B)$。∎

> 续见 proofs/imp.product-measure.3.md
