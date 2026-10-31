# Cauchy 积分公式 + 调和 $\implies$ Poisson 公式
`imp.poisson-formula` · 推出 · strong 边 · 根 `../`

`thm.cauchy-integral-formula` Cauchy 积分公式 + `def.harmonic` 调和函数 → `thm.poisson-formula` Poisson 积分公式

设 $f$ 在 $D(0, R)$ 的邻域上全纯，$|z| < r < R$，记 $u = \operatorname{Re} f$。

**第一步：把圆周积分写成 $\theta$。** 在 $|\zeta| = r$ 上 $\mathrm{d}\zeta = i\zeta\,\mathrm{d}\theta$，故

$$f(z) = \frac{1}{2\pi i}\oint_{|\zeta| = r} \frac{f(\zeta)}{\zeta - z}\,\mathrm{d}\zeta = \frac{1}{2\pi}\int_0^{2\pi} \frac{\zeta\, f(\zeta)}{\zeta - z}\,\mathrm{d}\theta.$$

**第二步：凑一个零积分。** 点 $r^2/\overline{z}$ 在圆**外**（$r^2/|z| > r$），故 $\dfrac{f(\zeta)}{\zeta - r^2/\overline{z}}$ 在 $|\zeta| \le r$ 上全纯，积分为零：

$$0 = \frac{1}{2\pi}\int_0^{2\pi} \frac{\zeta\, f(\zeta)}{\zeta - r^2/\overline{z}}\,\mathrm{d}\theta.$$

> 续见 proofs/imp.poisson-formula.2.md
