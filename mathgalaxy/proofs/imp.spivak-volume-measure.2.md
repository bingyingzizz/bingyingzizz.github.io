# 行列式的平方 $\implies$ 密度不依赖定向
`imp.spivak-volume-measure` · 推出 · strong 边 · 根 `../`

`def.volume-density` 体积密度与体积形式 + `def.riemannian-metric` 黎曼度量 → `prop.volume-density-well-defined` 密度与定向无关

$$\sqrt{\det g^{y}}\,\mathrm{d}y^{1}\cdots\mathrm{d}y^{n} = \sqrt{\det g^{x}}\,\mathrm{d}x^{1}\cdots\mathrm{d}x^{n} .$$

**关键**：开方给出 $|\det J|$ 而不是 $\det J$ —— 这一步就是「密度不换号」的全部来源。若换成 $n$-形式版，$\mathrm{d}x^{1}\wedge\cdots$ 的变换因子是 $\det J$（无绝对值），于是乘积只在保向时不变、反向时变号。

**（3）拼成整体。** 局部密度在重叠处相等，故用从属于卡族的单位分解 $\{\rho_{\alpha}\}$ 定义 $\mu_{g}(f) := \sum_{\alpha}\int_{\mathbb{R}^{n}}(\rho_{\alpha}f)\circ x_{\alpha}^{-1}\,\sqrt{\det g}\ \mathrm{d}x$。每一项非负（$f\ge 0$ 时）、和有限，且由 (2) 与卡选取无关；于是 $\mu_{g}$ 是 $M$ 上良定、正、可数可加的 Radon 测度。

> 续见 proofs/imp.spivak-volume-measure.3.md
