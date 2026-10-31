# Cauchy 积分公式 $\implies$ 平均值公式 $\implies$ 最大模原理
`imp.max-modulus` · 推出 · strong 边 · 根 `../`

`thm.cauchy-integral-formula` Cauchy 积分公式 → `thm.max-modulus` 最大模原理

**平均值公式。** 设 $\overline{D(z, r)} \subset \Omega$。在 Cauchy 积分公式里取 $\partial\Omega = \partial D(z, r)$，参数化 $\zeta = z + re^{i\theta}$（$\mathrm{d}\zeta = ire^{i\theta}\mathrm{d}\theta$）：

$$f(z) = \frac{1}{2\pi i}\int_0^{2\pi} \frac{f(z + re^{i\theta})}{re^{i\theta}}\, i r e^{i\theta}\,\mathrm{d}\theta = \frac{1}{2\pi}\int_0^{2\pi} f(z + re^{i\theta})\,\mathrm{d}\theta.$$

即：**函数在中心的值 = 它在圆周上的平均值**。

**取最大值的点附近。** 设 $M = \sup_\Omega |f|$ 在**内点** $z_0$ 被取到（即 $|f(z_0)| = M$，且 $M < \infty$）。对任意 $r$ 使 $\overline{D(z_0, r)} \subset \Omega$：

> 续见 proofs/imp.max-modulus.2.md
