# 行列式的平方 $\implies$ 密度不依赖定向
`imp.spivak-volume-measure` · 推出 · strong 边 · 根 `../`

`def.volume-density` 体积密度与体积形式 + `def.riemannian-metric` 黎曼度量 → `prop.volume-density-well-defined` 密度与定向无关

**（4）与 $\mathrm{d}V$ 对照。** 有定向时 $\mathrm{d}V = \sqrt{\det g}\,\mathrm{d}x^{1}\wedge\cdots\wedge\mathrm{d}x^{n}$ 与 $\mathrm{d}\mu_{g}$ 逐卡同系数，只差「楔积（带符号）」与「Lebesgue（不带符号）」，故 $\mu_{g} = |\mathrm{d}V|$，且紧流形上 $\int_{M}\mathrm{d}V = \mu_{g}(M) = \operatorname{vol}_{g}(M)$。∎
