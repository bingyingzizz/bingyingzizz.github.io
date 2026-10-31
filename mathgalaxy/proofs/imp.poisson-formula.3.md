# Cauchy 积分公式 + 调和 $\implies$ Poisson 公式
`imp.poisson-formula` · 推出 · strong 边 · 根 `../`

`thm.cauchy-integral-formula` Cauchy 积分公式 + `def.harmonic` 调和函数 → `thm.poisson-formula` Poisson 积分公式

其中 $(\zeta - z)(\overline{z} - \overline{\zeta}) = -(\zeta - z)\overline{(\zeta - z)} = -|\zeta - z|^2$。所以核是**实值**的，且

$$f(z) = \frac{1}{2\pi}\int_0^{2\pi} \frac{r^2 - |z|^2}{|r e^{i\theta} - z|^2}\, f(r e^{i\theta})\,\mathrm{d}\theta.$$

**第四步：取实部。** 核实值 $\implies$ 逐点取实部即得 $u$ 的公式。

**第五步：核的两条性质。** $r^2 - |z|^2 > 0$ 给 $P_r \ge 0$；把 $f \equiv 1$ 代入（此时 $u \equiv 1$）得 $\dfrac{1}{2\pi}\int P_r = 1$。$\blacksquare$
