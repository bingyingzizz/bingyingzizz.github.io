# Cauchy 积分公式　`thm.cauchy-integral-formula`　·　说明
根 `../`

**拆出主项**：在右端把被积函数写成 $\frac{f(\zeta)}{\zeta - z} = \frac{f(z)}{\zeta - z} + \frac{f(\zeta) - f(z)}{\zeta - z}.$ 第一项的积分用 $\zeta = z + re^{i\theta}$ 直接算：$\oint_{|\zeta - z| = r} \frac{\mathrm{d}\zeta}{\zeta - z} = \int_{0}^{2\pi} \frac{ire^{i\theta}}{re^{i\theta}}\,\mathrm{d}\theta = 2\pi i$，故贡献 $2\pi i\,f(z)$。

**第二项随 $r \to 0$ 消失**：$f$ 在 $z$ 全纯，故 $\lim_{\zeta \to z}\frac{f(\zeta) - f(z)}{\zeta - z} = f'(z)$；特别地存在 $M$ 与 $\rho > 0$，使 $|\zeta - z| < \rho$ 时该商有界 $\le M$。于是对 $0 < r < \min(\rho, d)$，由 ML 不等式 $\left|\oint_{|\zeta - z| = r} \frac{f(\zeta) - f(z)}{\zeta - z}\,\mathrm{d}\zeta\right| \le M\cdot 2\pi r \longrightarrow 0.$

> 续见 notes/thm.cauchy-integral-formula.3.md
