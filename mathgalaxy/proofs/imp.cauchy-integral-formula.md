# Cauchy–Goursat（多连通版）$\implies$ Cauchy 积分公式
`imp.cauchy-integral-formula` · 推出 · strong 边 · 根 `../`

`thm.cauchy-goursat` Cauchy–Goursat 积分定理 → `thm.cauchy-integral-formula` Cauchy 积分公式

**挖洞。** 固定 $z \in \Omega$，令 $d = \operatorname{dist}(z, \partial\Omega) > 0$，取 $0 < r < d$，令 $\Omega_r = \Omega \setminus \overline{D(z, r)}$。$\Omega_r$ 是二连通区域，而 $g(\zeta) := f(\zeta)/(\zeta - z)$ 在 $\Omega_r$ 上全纯（分母在 $\Omega_r$ 上不为零）。由多连通 Cauchy–Goursat，$\oint_{\partial\Omega_r} g = 0$，即

$$\oint_{\partial\Omega} \frac{f(\zeta)}{\zeta - z}\,\mathrm{d}\zeta = \oint_{|\zeta - z| = r} \frac{f(\zeta)}{\zeta - z}\,\mathrm{d}\zeta.$$

**拆出所求的那一项。** 在内圆上把被积函数拆成

$$\frac{f(\zeta)}{\zeta - z} = \frac{f(z)}{\zeta - z} + \frac{f(\zeta) - f(z)}{\zeta - z}.$$

> 续见 proofs/imp.cauchy-integral-formula.2.md
