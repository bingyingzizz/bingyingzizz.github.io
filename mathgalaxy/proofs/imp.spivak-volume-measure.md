# 行列式的平方 $\implies$ 密度不依赖定向
`imp.spivak-volume-measure` · 推出 · strong 边 · 根 `../`

`def.volume-density` 体积密度与体积形式 + `def.riemannian-metric` Riemann 度量 → `prop.volume-density-well-defined` 密度与定向无关

**（1）局部变换。** 设 $y$ 是另一张卡，$J := \partial x/\partial y$。由 $\partial_{y^{i}} = \sum_{k}J_{ki}\,\partial_{x^{k}}$ 与度量的双线性得 $g^{y} = J^{\mathsf T}g^{x}J$，取行列式：$\det g^{y} = (\det J)^{2}\det g^{x}$。两边开方（$\det g>0$，因为 $g$ 正定），

$$\sqrt{\det g^{y}} = |\det J|\,\sqrt{\det g^{x}} .$$

**（2）与体积元配平。** 换元公式给出 $\mathrm{d}y^{1}\cdots\mathrm{d}y^{n} = |\det(\partial y/\partial x)|\,\mathrm{d}x^{1}\cdots\mathrm{d}x^{n} = |\det J|^{-1}\mathrm{d}x^{1}\cdots\mathrm{d}x^{n}$。两式相乘，$|\det J|$ 抵消，故

> 续见 proofs/imp.spivak-volume-measure.2.md
