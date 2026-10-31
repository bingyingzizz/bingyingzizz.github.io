# 留数定理 $\implies$ 三角有理函数的积分
`imp.integral-trig` · 推出 · strong 边 · 根 `../`

`thm.residue` 留数定理 → `thm.integral-trig` 三角有理函数的积分

$$\int_0^{2\pi}\frac{\mathrm{d}\theta}{a + \cos\theta} = \frac{2}{i}\oint_{|z|=1}\frac{\mathrm{d}z}{z^2 + 2az + 1}.$$

分母两根之积为 $1$，故恰有一根 $z_{+} = -a + \sqrt{a^2 - 1}$ 在圆内，其留数为 $\dfrac{1}{2\sqrt{a^2 - 1}}$。于是积分 $= \dfrac{2}{i}\cdot\dfrac{2\pi i}{2\sqrt{a^2 - 1}} = \dfrac{2\pi}{\sqrt{a^2 - 1}}$，与标准答案相符。$\blacksquare$
