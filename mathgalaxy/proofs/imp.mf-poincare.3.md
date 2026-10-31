# 链同伦 $\mathrm{d}K + K\mathrm{d} = \operatorname{id}$ $\implies$ 闭形式恰当
`imp.mf-poincare` · 推出 · strong 边 · 根 `../`

`def.de-rham-complex` de Rham 上同调 + `def.exterior-derivative` 外微分 → `lem.poincare-lemma` Poincaré 引理

**$k = 0$ 为什么不行。** 此时 $i_{0}^{\ast}f = f(0)$ 是常数函数而不是 $0$，公式变成 $\mathrm{d}K f + K\mathrm{d}f = f - f(0)$，只能得到「$f$ 差一个常数是恰当的」，而 $0$-形式没有 $-1$-形式可恰当 —— 这正是 $H^{0} = \mathbb{R}$。

**可缩版本。** 把 $H$ 换成任意的收缩同伦（$H(\cdot,1) = \operatorname{id}$、$H(\cdot,0) = \text{const}$）逐字重复，故「星形」可放宽为「可缩」。∎
