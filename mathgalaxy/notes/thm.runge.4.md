# Runge 逼近定理　`thm.runge`　·　说明
根 `../`

**第一步：离散化积分**。$\Gamma$ 是紧集且 $\Gamma\cap K = \emptyset$，故 $g(\zeta,z) := f(\zeta)/(\zeta - z)$ 在 $\Gamma\times K$ 上连续，从而一致连续。把 $\Gamma$ 的每条边等分成小段，小段长 $<\delta$，取中点 $\zeta_{j}$、增量 $\Delta\zeta_{j}$，作 Riemann 和 $R(z) := \frac{1}{2\pi i}\sum_{j}\frac{f(\zeta_{j})}{\zeta_{j} - z}\,\Delta\zeta_{j}.$ 由一致连续性，取 $\delta$ 足够小可使 $\sup_{z\in K}\Bigl|\frac{1}{2\pi i}\int_{\Gamma} g(\zeta,z)\,\mathrm{d}\zeta - R(z)\Bigr| < \frac{\varepsilon}{2}.$ $R$ 是有理函数，极点只在中点 $\zeta_{j}\in\Gamma\subset\mathbb{C}\setminus K$。

> 续见 notes/thm.runge.5.md
