# Cauchy 积分公式 $\implies$ 高阶导数公式（在积分号下求导）
`imp.higher-derivative` · 推出 · strong 边 · 根 `../`

`thm.cauchy-integral-formula` Cauchy 积分公式 → `thm.cauchy-higher-derivative` 高阶导数公式

**$n = 1$：算出差商与形式导数之差。** 记 $F(z) = \dfrac{1}{2\pi i}\oint_{\partial\Omega}\dfrac{f(\zeta)}{\zeta - z}\mathrm{d}\zeta$，则 $F = f$。对 $h \ne 0$ 且 $|h| < \delta/2$（$\delta = \operatorname{dist}(z, \partial\Omega)$），有

$$\frac{1}{\zeta - z - h} - \frac{1}{\zeta - z} = \frac{h}{(\zeta - z - h)(\zeta - z)},$$

所以差商与「形式导数」$\dfrac{1}{2\pi i}\oint \dfrac{f(\zeta)}{(\zeta - z)^2}\mathrm{d}\zeta$ 之差是

> 续见 proofs/imp.higher-derivative.2.md
