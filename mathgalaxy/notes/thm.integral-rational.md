# 实轴上有理函数的积分　`thm.integral-rational`　·　说明
根 `../`

⭐ 完整计算一：

$$\int_{-\infty}^{\infty} \frac{\mathrm{d}x}{(x^2 + 1)^2} = \frac{\pi}{2}.$$

上半平面只有一个极点 $i$，阶为 $2$。用极点留数公式（$m = 2$）：

$$\operatorname{Res}\left( \frac{1}{(z^2+1)^2},\, i \right) = \frac{\mathrm{d}}{\mathrm{d}z}\left[ \frac{(z - i)^2}{(z^2+1)^2} \right]_{z=i} = \frac{\mathrm{d}}{\mathrm{d}z}\left[ \frac{1}{(z+i)^2} \right]_{z=i} = \frac{-2}{(2i)^3} = \frac{1}{4i}.$$

于是积分 $= 2\pi i \cdot \dfrac{1}{4i} = \dfrac{\pi}{2}$。$\checkmark$

⭐ 完整计算二：

$$\int_{-\infty}^{\infty} \frac{\mathrm{d}x}{x^4 + 1} = \frac{\pi}{\sqrt{2}}.$$

$x^4 + 1$ 的根是 $e^{i\pi/4}, e^{3i\pi/4}$（上半平面两个）与它们的共轭。一阶极点的留数：由 $R = 1/(z^4+1)$、$R = p/q$ 且 $q$ 在一阶零点 $a$ 处，$\operatorname{Res}(R, a) = 1/(4a^3) = -a/4$（因为 $a^4 = -1$）。两只相加：

> 续见 notes/thm.integral-rational.2.md
