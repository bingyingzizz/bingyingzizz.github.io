# 调和 + Cauchy–Riemann $\implies$ 局部是全纯函数的实部
`imp.harmonic-conjugate` · 推出 · strong 边 · 根 `../`

`def.harmonic` 调和函数 + `thm.cauchy-riemann` Cauchy–Riemann 方程 → `thm.harmonic-conjugate` 调和函数的共轭

**第四步：唯一性。** 若 $\operatorname{Re} f_1 = \operatorname{Re} f_2 = u$，令 $g = f_1 - f_2 = i y$（$y$ 实值）。对 $(0, y)$ 用 Cauchy–Riemann 方程：$0 = y_y$ 与 $0 = -y_x$，故 $y$ 是常数，$g$ 是纯虚常数。

**第五步：单连通不能去掉。** $u(z) = \ln|z|$ 在 $\mathbb{C}^{\times}$ 上调和，但它不是任何单值全纯函数的实部 —— 那需要 $\operatorname{Log}$，而 $\operatorname{Log}$ 多值。等价地：$\oint_{|z| = 1} \omega = 2\pi \ne 0$，闭形式在这里不恰当。$\blacksquare$
