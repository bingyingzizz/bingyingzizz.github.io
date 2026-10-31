# 三角有理函数的积分　`thm.integral-trig`　·　说明
根 `../`

$$\frac{2}{i}\cdot 2\pi i \cdot \frac{1}{2\sqrt{a^2 - 1}} = \frac{4\pi}{2\sqrt{a^2 - 1}} = \frac{2\pi}{\sqrt{a^2 - 1}}. \checkmark$$

⭐ 立刻的检验：$a = 2$ 时得 $2\pi/\sqrt{3}$，与直接查表一致。

⚠ 条件 $a > 1$ 是为了「分母在整圈上不为零」；$a = 1$ 时 $\theta = \pi$ 处分母为零，积分发散（$\int \mathrm{d}\theta/(1 + \cos\theta)$ 在 $\pi$ 附近像 $\mathrm{d}\theta/\theta^2$）。

📌 这类积分的通病：代换后分子分母可能同乘 $z^{n}$，必须先乘开看清楚有几个根在单位圆内 —— 只有内部的极点才进留数。
