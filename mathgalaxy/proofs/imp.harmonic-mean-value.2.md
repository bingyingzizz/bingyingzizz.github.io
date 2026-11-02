# Cauchy 积分公式 + 调和 $\implies$ 均值性质
`imp.harmonic-mean-value` · 推出 · strong 边 · 根 `../`

`thm.cauchy-integral-formula` Cauchy 积分公式 + `def.harmonic` 调和函数 → `thm.harmonic-mean-value` 调和函数的均值性质

**第四步：面积平均。** 把上式中的 $r$ 换成 $\rho$ 再乘 $\rho$，在 $0 < \rho < r$ 上积分：

$$\int_0^{r} 2\pi u(a)\,\rho\,\mathrm{d}\rho = \int_0^{r}\int_0^{2\pi} u(a + \rho e^{i\theta})\,\rho\,\mathrm{d}\theta\,\mathrm{d}\rho = \iint_{D(a, r)} u\,\mathrm{d}A.$$

左边 $= \pi r^2 u(a)$，两边除以 $\pi r^2$ 即得面积形式。$\blacksquare$
