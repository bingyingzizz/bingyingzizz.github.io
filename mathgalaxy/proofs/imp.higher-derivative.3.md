# Cauchy 积分公式 $\implies$ 高阶导数公式（在积分号下求导）
`imp.higher-derivative` · 推出 · strong 边 · 根 `../`

`thm.cauchy-integral-formula` Cauchy 积分公式 → `thm.cauchy-higher-derivative` 高阶导数公式

$$f^{(n)}(z) = \frac{n!}{2\pi i}\oint_{\partial\Omega}\frac{f(\zeta)}{(\zeta - z)^{n+1}}\,\mathrm{d}\zeta.$$

**注意循环论证的风险。** 上面只用到了 $f$ 在 $\partial\Omega$ 上连续（来自 Cauchy 积分公式的成立），**没有**预设 $f'$ 连续 —— 连续性是从结论里赚回来的。$\blacksquare$
