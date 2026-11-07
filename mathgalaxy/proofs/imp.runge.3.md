# Cauchy–Goursat 造引理 A，Cauchy 积分 + 有理逼近推 Runge
`imp.runge` · 推出 · strong 边 · 根 `../`

`thm.cauchy-goursat` Cauchy–Goursat 积分定理 + `thm.cauchy-integral-formula` Cauchy 积分公式 → `thm.runge` Runge 逼近定理

**离散化积分 $\to$ 有理函数**：把 $\Gamma$ 分段，用 Riemann 和逼近上面的积分，得 $R(z) = \frac{1}{2\pi i}\sum_{j}\frac{f(\zeta_{j})}{\zeta_{j}-z}\,\Delta\zeta_{j}$；$f(\zeta)/(\zeta-z)$ 在 $\Gamma\times K$ 上一致连续，故 $\sup_{z\in K}|f(z)-R(z)|$ 可任意小。$R$ 是以 $\zeta_{j}\in\Gamma\subset\mathbb{C}\setminus K$ 为极点的有理函数。

> 续见 proofs/imp.runge.4.md
