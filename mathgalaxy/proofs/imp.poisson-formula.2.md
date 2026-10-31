# Cauchy 积分公式 + 调和 $\implies$ Poisson 公式
`imp.poisson-formula` · 推出 · strong 边 · 根 `../`

`thm.cauchy-integral-formula` Cauchy 积分公式 + `def.harmonic` 调和函数 → `thm.poisson-formula` Poisson 积分公式

**第三步：相减，算核。** 在 $|\zeta| = r$ 上 $\zeta\overline{\zeta} = r^2$，故 $r^2/\overline{z} = \zeta\overline{\zeta}/\overline{z}$，于是 $\dfrac{\zeta}{\zeta - r^2/\overline{z}} = \dfrac{\overline{z}}{\overline{z} - \overline{\zeta}}$。通分得

$$\frac{\zeta}{\zeta - z} - \frac{\overline{z}}{\overline{z} - \overline{\zeta}} = \frac{\zeta(\overline{z} - \overline{\zeta}) - \overline{z}(\zeta - z)}{(\zeta - z)(\overline{z} - \overline{\zeta})} = \frac{|z|^2 - r^2}{-|\zeta - z|^2} = \frac{r^2 - |z|^2}{|\zeta - z|^2},$$

> 续见 proofs/imp.poisson-formula.3.md
