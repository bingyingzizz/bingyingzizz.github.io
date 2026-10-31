# Poisson 积分公式在圆心处退化成均值性质
`imp.derived-mean-value-poisson` · 推出 · strong 边 · 根 `../`

`thm.poisson-formula` Poisson 积分公式 + `thm.harmonic-conjugate` 调和函数的共轭 → `thm.harmonic-mean-value` 调和函数的均值性质

**先取得全纯函数。** 圆盘 $D(a,r)$ 单连通，由调和函数的共轭，$D(a,r)$ 上的调和 $u$ 是某个全纯函数 $f$ 的实部。

**把原点搬到 $a$。** 令 $v(h) := u(a+h)$，则 $v$ 在 $D(0,r)$ 上调和，且仍是全纯函数的实部（取 $f(a+h)$）。

**Poisson 公式**（对 $v$，$0 < \rho < r$、$|z| < \rho$）：

$$v(z) = \frac{1}{2\pi}\int_{0}^{2\pi} \frac{\rho^{2}-|z|^{2}}{|\rho e^{i\theta}-z|^{2}}\, v(\rho e^{i\theta})\,\mathrm{d}\theta .$$

**取 $z = 0$：** 核变成 $\dfrac{\rho^{2}-0}{\rho^{2}} = 1$，于是

$$u(a) = v(0) = \frac{1}{2\pi}\int_{0}^{2\pi} u\bigl(a + \rho e^{i\theta}\bigr)\,\mathrm{d}\theta ,$$

> 续见 proofs/imp.derived-mean-value-poisson.2.md
