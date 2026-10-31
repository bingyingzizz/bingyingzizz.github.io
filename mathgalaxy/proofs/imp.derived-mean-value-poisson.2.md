# Poisson 积分公式在圆心处退化成均值性质
`imp.derived-mean-value-poisson` · 推出 · strong 边 · 根 `../`

`thm.poisson-formula` Poisson 积分公式 + `thm.harmonic-conjugate` 调和函数的共轭 → `thm.harmonic-mean-value` 调和函数的均值性质

对每个 $0 < \rho < r$ 成立 —— 这就是圆周均值性质（把 $\rho$ 改回 $r$ 只是换字母）。

**面积平均。** 对 $s \in (0,r)$ 用一圈的均值 $u(a) = \frac{1}{2\pi}\int_{0}^{2\pi}u(a+se^{i\theta})\,\mathrm{d}\theta$，再乘 $2\pi s$ 对 $s$ 积分并用极坐标：

$$\iint_{D(a,r)} u\,\mathrm{d}x\,\mathrm{d}y = \int_{0}^{r} 2\pi s\, u(a)\,\mathrm{d}s = \pi r^{2} u(a).$$

两条合起来就是均值性质。$\blacksquare$

> Poisson 公式在 $z = 0$ 处权函数恒为 $1$，所以「核是一个单位分解」这件事在圆心退化成一句最朴素的平均。
