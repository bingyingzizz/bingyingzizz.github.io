# 调和函数的共轭　`thm.harmonic-conjugate`　·　说明
根 `../`

⭐ 证明是「闭 1-形式必恰当」：令 $\omega = -u_y\,\mathrm{d}x + u_x\,\mathrm{d}y$，则

$$\mathrm{d}\omega = (u_{xx} + u_{yy})\,\mathrm{d}x \wedge \mathrm{d}y = 0,$$

$\Omega$ 单连通 $\implies$ 存在 $v$ 使 $\mathrm{d}v = \omega$，即 $v_x = -u_y$、$v_y = u_x$；这两式正是 $(u, v)$ 的 Cauchy–Riemann 方程，故 $f = u + iv$ 全纯。

⭐ 唯一性：若 $\operatorname{Re} f_1 = \operatorname{Re} f_2 = u$，则 $g = f_1 - f_2$ 纯虚且全纯；写 $g = iy$（$y$ 实值），Cauchy–Riemann 给 $y_x = y_y = 0$，故 $y$ 是常数。

⚠ 单连通**不能去掉**：$u(z) = \ln|z|$ 在 $\mathbb{C}^{\times}$ 上调和，但它不是任何单值全纯函数的实部 —— 那需要 $\operatorname{Log}$ 本身，而 $\operatorname{Log}$ 是多值的。绕原点一圈，$\oint \omega = 2\pi \ne 0$。

📌 反方向（全纯 $\implies$ 实部调和）**不需要**单连通，只要 Cauchy–Riemann 方程。所以「调和」比「全纯的实部」宽一点点，缺的正是拓扑条件。
