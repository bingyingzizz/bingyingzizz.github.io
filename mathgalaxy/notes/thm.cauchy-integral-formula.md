# Cauchy 积分公式　`thm.cauchy-integral-formula`　·　说明
根 `../`

⭐ **核心是挖洞**：被积函数 $g(\zeta) = f(\zeta)/(\zeta - z)$ 在 $\zeta = z$ 处没有定义，所以不能把 Cauchy 定理直接用在整块 $\Omega$ 上。固定 $z \in \Omega$，令 $d = \operatorname{dist}(z, \partial\Omega) > 0$，取 $0 < r < d$，挖去闭圆盘 $\overline{B(z,r)}$，得二连通区域 $\Omega_{r} = \Omega \setminus \overline{B(z,r)}$。$g$ 在 $\Omega_{r}$ 上全纯（分母处处非零），由多连通 Cauchy–Goursat 定理（`thm.cauchy-goursat`）$\oint_{\partial\Omega_{r}} g\,\mathrm{d}\zeta = 0$。边界 $\partial\Omega_{r}$ 由外边界 $\partial\Omega$（正向）与内圆 $|\zeta - z| = r$（负向）组成，移项得 $\oint_{\partial\Omega} \frac{f(\zeta)}{\zeta - z}\,\mathrm{d}\zeta = \oint_{|\zeta - z| = r} \frac{f(\zeta)}{\zeta - z}\,\mathrm{d}\zeta.$

> 续见 notes/thm.cauchy-integral-formula.2.md
