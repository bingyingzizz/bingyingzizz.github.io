# Cauchy 积分公式 + 调和 $\implies$ 均值性质
`imp.harmonic-mean-value` · 推出 · strong 边 · 根 `../`

`thm.cauchy-integral-formula` Cauchy 积分公式 + `def.harmonic` 调和函数 → `thm.harmonic-mean-value` 调和函数的均值性质

**第一步：把 $u$ 写成全纯函数的实部。** 圆盘单连通，由「调和函数的共轭」那条定理，存在全纯 $f$ 使 $u = \operatorname{Re} f$（这一步只用圆盘，不需要 $\Omega$ 单连通）。

**第二步：Cauchy 积分公式 + 圆周参数化。** 取 $\zeta = a + r e^{i\theta}$，$\mathrm{d}\zeta = i r e^{i\theta}\mathrm{d}\theta$，于是 $\dfrac{\mathrm{d}\zeta}{\zeta - a} = i\,\mathrm{d}\theta$：

$$f(a) = \frac{1}{2\pi i}\oint_{|\zeta - a| = r} \frac{f(\zeta)}{\zeta - a}\,\mathrm{d}\zeta = \frac{1}{2\pi}\int_0^{2\pi} f(a + r e^{i\theta})\,\mathrm{d}\theta.$$

**第三步：取实部。** 左端 $f(a) = u(a) + i v(a)$，右端实部是 $u$ 的平均，得

$$u(a) = \frac{1}{2\pi}\int_0^{2\pi} u(a + r e^{i\theta})\,\mathrm{d}\theta.$$

> 续见 proofs/imp.harmonic-mean-value.2.md
