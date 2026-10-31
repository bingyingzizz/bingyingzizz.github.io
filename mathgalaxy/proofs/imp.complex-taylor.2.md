# Cauchy 积分公式 + 几何级数 $\implies$ Taylor 展开
`imp.complex-taylor` · 推出 · strong 边 · 根 `../`

`thm.cauchy-integral-formula` Cauchy 积分公式 → `thm.taylor-complex` 全纯函数的 Taylor 展开

**逐项积分。** $f$ 在紧集 $\partial D(a, \rho)$ 上有界，一致收敛允许交换求和与积分：

$$f(z) = \sum_{n=0}^{\infty}\left( \frac{1}{2\pi i}\oint_{|\zeta - a| = \rho}\frac{f(\zeta)}{(\zeta - a)^{n+1}}\,\mathrm{d}\zeta \right)(z - a)^n = \sum_{n=0}^{\infty}\frac{f^{(n)}(a)}{n!}(z - a)^n,$$

最后一步是高阶导数公式（把 $z$ 换成 $a$）。

**一致收敛。** 对任意紧集 $K \subset D(a, R)$，取 $\rho$ 使 $K \subset D(a, \rho) \subset D(a, R)$，则 $|c_n| \le \|f\|_{\partial D(a,\rho)}/\rho^n$，优级数在 $K$ 上收敛。$\blacksquare$
