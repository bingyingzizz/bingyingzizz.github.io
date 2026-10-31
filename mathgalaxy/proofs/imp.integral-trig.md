# 留数定理 $\implies$ 三角有理函数的积分
`imp.integral-trig` · 推出 · strong 边 · 根 `../`

`thm.residue` 留数定理 → `thm.integral-trig` 三角有理函数的积分

**第一步：代换。** 令 $z = e^{i\theta}$，$\theta$ 从 $0$ 走到 $2\pi$ 时 $z$ 逆时针走完单位圆一圈。此时

$$\cos\theta = \frac{z + z^{-1}}{2}, \qquad \sin\theta = \frac{z - z^{-1}}{2 i}, \qquad \mathrm{d}\theta = \frac{\mathrm{d}z}{i z}.$$

**第二步：化成有理函数的围道积分。** 代入得

$$\int_0^{2\pi} R(\cos\theta, \sin\theta)\,\mathrm{d}\theta = \oint_{|z| = 1} R\left( \frac{z + z^{-1}}{2}, \frac{z - z^{-1}}{2i} \right)\frac{\mathrm{d}z}{i z},$$

被积函数是 $z$ 的有理函数（$z^{\pm 1}$ 的有限和）。

**第三步：用留数定理。** 把代换后的被积函数记作 $g(z)$。若 $g$ 在单位圆上无极点，则积分 $= 2\pi i \sum_{|a_k| < 1} \operatorname{Res}(g, a_k)$，只对**圆内**的极点求和。

**第四步：检验一个算例。** 对 $a > 1$，代换后

> 续见 proofs/imp.integral-trig.2.md
