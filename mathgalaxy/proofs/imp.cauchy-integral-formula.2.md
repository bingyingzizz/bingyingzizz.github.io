# Cauchy–Goursat（多连通版）$\implies$ Cauchy 积分公式
`imp.cauchy-integral-formula` · 推出 · strong 边 · 根 `../`

`thm.cauchy-goursat` Cauchy–Goursat 积分定理 → `thm.cauchy-integral-formula` Cauchy 积分公式

第一项贡献 $f(z) \cdot 2\pi i$，因为 $\oint_{|\zeta - z| = r} \dfrac{\mathrm{d}\zeta}{\zeta - z} = 2\pi i$（代 $\zeta - z = re^{i\theta}$ 直接算）。

**第二项趋于零。** 由 $f$ 在 $z$ 处可微，$\dfrac{f(\zeta) - f(z)}{\zeta - z} \to f'(z)$（$\zeta \to z$），故在 $|\zeta - z| = r$ 上有界；圆周总长 $2\pi r$，于是由 ML 不等式

$$\left| \oint_{|\zeta - z| = r} \frac{f(\zeta) - f(z)}{\zeta - z}\,\mathrm{d}\zeta \right| \le (\text{有界量}) \cdot 2\pi r \longrightarrow 0 \qquad (r \to 0).$$

**收尾。** 左端与 $r$ 无关（上面的等式对一切 $r \in (0, d)$ 成立），故

$$\oint_{\partial\Omega} \frac{f(\zeta)}{\zeta - z}\,\mathrm{d}\zeta = 2\pi i f(z) + 0.$$

> 续见 proofs/imp.cauchy-integral-formula.3.md
