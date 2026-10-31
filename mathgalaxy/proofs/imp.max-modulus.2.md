# Cauchy 积分公式 $\implies$ 平均值公式 $\implies$ 最大模原理
`imp.max-modulus` · 推出 · strong 边 · 根 `../`

`thm.cauchy-integral-formula` Cauchy 积分公式 → `thm.max-modulus` 最大模原理

$$M = |f(z_0)| = \left| \frac{1}{2\pi}\int_0^{2\pi} f(z_0 + re^{i\theta})\mathrm{d}\theta \right| \le \frac{1}{2\pi}\int_0^{2\pi} |f(z_0 + re^{i\theta})|\,\mathrm{d}\theta \le M.$$

两端都是 $M$，中间被夹住；而 $M - |f| \ge 0$ 连续且积分为零，故 $|f| \equiv M$ 在整个圆周上。

**传播到全区域。** 令 $E = \{ z \in \Omega : |f(z)| = M \}$。$E$ 非空（含 $z_0$）；$E$ 在 $\Omega$ 中**开**（上面刚证：$z \in E$ 时整个小圆周都在 $E$ 里）；$E$ 在 $\Omega$ 中**闭**（$|f|$ 连续）。$\Omega$ 连通，故 $E = \Omega$。

> 续见 proofs/imp.max-modulus.3.md
