# Cauchy 积分公式 + 几何级数 $\implies$ Taylor 展开
`imp.complex-taylor` · 推出 · strong 边 · 根 `../`

`thm.cauchy-integral-formula` Cauchy 积分公式 → `thm.taylor-complex` 全纯函数的 Taylor 展开

**取一个稍小的圆。** 固定 $z \in D(a, R)$，取 $\rho$ 使 $|z - a| < \rho < R$。由 Cauchy 积分公式（在 $D(a, \rho)$ 上）

$$f(z) = \frac{1}{2\pi i}\oint_{|\zeta - a| = \rho}\frac{f(\zeta)}{\zeta - z}\,\mathrm{d}\zeta.$$

**几何级数。** $\zeta$ 在圆周上、$z$ 在圆内，故 $\left| \dfrac{z - a}{\zeta - a} \right| = \dfrac{|z - a|}{\rho} =: q < 1$，且这个界与 $\zeta$ 无关。于是

$$\frac{1}{\zeta - z} = \frac{1}{(\zeta - a) - (z - a)} = \frac{1}{\zeta - a}\cdot\frac{1}{1 - \frac{z - a}{\zeta - a}} = \sum_{n=0}^{\infty} \frac{(z - a)^n}{(\zeta - a)^{n+1}},$$

右端关于 $\zeta \in \partial D(a, \rho)$ **一致收敛**（优级数 $\sum q^n/\rho$）。

> 续见 proofs/imp.complex-taylor.2.md
