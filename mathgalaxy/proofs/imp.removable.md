# Cauchy 积分公式 $\implies$ Riemann 可去奇点定理
`imp.removable` · 推出 · strong 边 · 根 `../`

`thm.cauchy-integral-formula` Cauchy 积分公式 → `thm.riemann-removable` Riemann 可去奇点定理

**把 $f$ 写成两个 Cauchy 型积分之差。** 取 $0 < \varepsilon < |z - a| < r$。在环域 $\{\varepsilon < |\zeta - a| < r\}$ 上用 Cauchy 积分公式：

$$f(z) = \frac{1}{2\pi i}\oint_{|\zeta - a| = r}\frac{f(\zeta)}{\zeta - z}\mathrm{d}\zeta - \frac{1}{2\pi i}\oint_{|\zeta - a| = \varepsilon}\frac{f(\zeta)}{\zeta - z}\mathrm{d}\zeta =: I_r(z) - I_\varepsilon(z).$$

**$I_r$ 是好的。** 分母 $\zeta - z$ 在 $|\zeta - a| = r$ 上不为零（因为 $|z - a| < r$），故 $I_r$ 在 $D(a, r)$ 上定义且全纯（在积分号下求导，做法与高阶导数那条边相同）。

**$I_\varepsilon$ 趋零。** 在 $|\zeta - a| = \varepsilon$ 上 $|\zeta - z| \ge |z - a| - \varepsilon > 0$，于是

> 续见 proofs/imp.removable.2.md
