# 三角有理函数的积分　`thm.integral-trig`　·　说明
根 `../`

⭐ 代换的三个要素：$z = e^{i\theta}$、$\cos\theta = \dfrac{z + z^{-1}}{2}$、$\sin\theta = \dfrac{z - z^{-1}}{2i}$、$\mathrm{d}\theta = \dfrac{\mathrm{d}z}{i z}$。于是整圈 $\theta$ 变成单位圆一圈（逆时针），三角有理式变成 $z$ 的有理函数。

⭐ 完整计算：对 $a > 1$，

$$\int_0^{2\pi} \frac{\mathrm{d}\theta}{a + \cos\theta} = \frac{2\pi}{\sqrt{a^2 - 1}}.$$

代换后

$$\int_0^{2\pi} \frac{\mathrm{d}\theta}{a + \cos\theta} = \oint_{|z|=1} \frac{1}{a + (z + z^{-1})/2}\cdot\frac{\mathrm{d}z}{i z} = \frac{2}{i}\oint_{|z|=1} \frac{\mathrm{d}z}{z^2 + 2 a z + 1}.$$

分母的根是 $z_{\pm} = -a \pm \sqrt{a^2 - 1}$，乘积为 $1$，故恰有一个在单位圆内：$z_{+} = -a + \sqrt{a^2 - 1}$（$|z_{+}| < 1$）。一阶留数

$$\operatorname{Res}\left( \frac{1}{z^2 + 2az + 1},\, z_{+} \right) = \frac{1}{2 z_{+} + 2a} = \frac{1}{2\sqrt{a^2 - 1}}.$$

于是

> 续见 notes/thm.integral-trig.2.md
