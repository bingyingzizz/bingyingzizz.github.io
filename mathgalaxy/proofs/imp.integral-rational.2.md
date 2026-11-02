# 留数定理 $\implies$ 实轴上有理函数的积分
`imp.integral-rational` · 推出 · strong 边 · 根 `../`

`thm.residue` 留数定理 → `thm.integral-rational` 实轴上有理函数的积分

**第四步：令 $R \to \infty$。** 第二项趋零，第一项趋所要的积分，右端是常数 —— 于是

$$\int_{-\infty}^{\infty} R(x)\,\mathrm{d}x = 2\pi i \sum_{\operatorname{Im} a_k > 0} \operatorname{Res}(R, a_k).$$

**第五步：为什么右边是实数。** $R$ 取实值 $\implies$ 左边是实数；也可以从共轭对称性直接看：实系数多项式使非实极点与留数成共轭对出现，$2\pi i$ 乘虚部就落到实数上。$\blacksquare$

> 两个关键条件各管一件事：$\deg Q \ge \deg P + 2$ 让大弧上的估计有 $1/R$ 的余量；$Q$ 在实轴上无零点让积分真的收敛（否则要绕小半圆取主值）。
