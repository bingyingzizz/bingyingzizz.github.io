# 环域上的 Cauchy 积分公式 + 两个几何级数 $\implies$ Laurent 展开
`imp.laurent` · 推出 · strong 边 · 根 `../`

`thm.cauchy-integral-formula` Cauchy 积分公式 + `thm.cauchy-goursat` Cauchy–Goursat 积分定理 → `thm.laurent` Laurent 展开定理

**环域上的积分公式。** 取 $r < \rho_1 < |z - a| < \rho_2 < R$。在环域 $A_{\rho_1, \rho_2}(a)$ 上用 Cauchy 积分公式（边界是外圆减内圆，方向由多连通 Cauchy–Goursat 定）：

$$f(z) = \frac{1}{2\pi i}\oint_{|\zeta - a| = \rho_2}\frac{f(\zeta)}{\zeta - z}\,\mathrm{d}\zeta - \frac{1}{2\pi i}\oint_{|\zeta - a| = \rho_1}\frac{f(\zeta)}{\zeta - z}\,\mathrm{d}\zeta.$$

**外圆那一项：正幂次。** 在 $|\zeta - a| = \rho_2$ 上 $|z - a| < \rho_2$，照 Taylor 那条边展开

$$\frac{1}{\zeta - z} = \sum_{n=0}^{\infty}\frac{(z - a)^n}{(\zeta - a)^{n+1}} \quad (\text{一致收敛}),$$

> 续见 proofs/imp.laurent.2.md
