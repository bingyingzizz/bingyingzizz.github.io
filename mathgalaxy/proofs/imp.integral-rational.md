# 留数定理 $\implies$ 实轴上有理函数的积分
`imp.integral-rational` · 推出 · strong 边 · 根 `../`

`thm.residue` 留数定理 → `thm.integral-rational` 实轴上有理函数的积分

**第一步：围道。** 取 $\Gamma_R$ 为 $[-R, R]$ 加以上半平面的半圆弧 $C_R$（逆时针）。$R$ 充分大时 $\Gamma_R$ 围住 $R(z)$ 的全部上半平面极点。

**第二步：$C_R$ 上一致趋零。** $\deg Q \ge \deg P + 2$ $\implies$ 存在 $C$、$R_0$ 使 $|R(z)| \le C/|z|^2$（$|z| \ge R_0$）。于是

$$\left| \int_{C_R} R(z)\,\mathrm{d}z \right| \le \frac{C}{R^2}\cdot \pi R = \frac{\pi C}{R} \to 0.$$

**第三步：留数定理。** 由留数定理

$$\int_{-R}^{R} R(x)\,\mathrm{d}x + \int_{C_R} R(z)\,\mathrm{d}z = 2\pi i \sum_{\operatorname{Im} a_k > 0} \operatorname{Res}(R, a_k).$$

> 续见 proofs/imp.integral-rational.2.md
