# Cauchy 积分公式 $\implies$ 高阶导数公式（在积分号下求导）
`imp.higher-derivative` · 推出 · strong 边 · 根 `../`

`thm.cauchy-integral-formula` Cauchy 积分公式 → `thm.cauchy-higher-derivative` 高阶导数公式

$$\frac{1}{2\pi i}\oint f(\zeta)\left[ \frac{1}{(\zeta - z - h)(\zeta - z)} - \frac{1}{(\zeta - z)^2} \right]\mathrm{d}\zeta = \frac{h}{2\pi i}\oint \frac{f(\zeta)\,\mathrm{d}\zeta}{(\zeta - z - h)(\zeta - z)^2}.$$

**统一下界。** $\zeta \in \partial\Omega$ 时 $|\zeta - z| \ge \delta$ 且 $|\zeta - z - h| \ge \delta - |h| \ge \delta/2$。故被积函数的模不超过 $\dfrac{\|f\|_{\partial\Omega}}{(\delta/2)\delta^2}$，与 $\zeta$、$h$ 无关。由 ML 不等式，整个积分的模不超过 $|h| \cdot \dfrac{\|f\|_{\partial\Omega}\, L(\partial\Omega)}{\delta^3/2} \to 0$。

于是 $f'(z)$ 存在且等于那个形式导数 —— 一个**对 $z$ 连续**的表达式。所以 $f'$ 连续，可以对它重做一遍同样的论证得到 $f''$，归纳得

> 续见 proofs/imp.higher-derivative.3.md
