# 实轴上有理函数的积分　`thm.integral-rational`　·　续页（第 2 页）
[在星图里打开](../#n=thm.integral-rational)　·　第 1 页 [nodes/thm.integral-rational.md](./thm.integral-rational.md)

## 陈述（续）
设 $R(x) = P(x)/Q(x)$，$P, Q$ 是实系数多项式，$\deg Q \ge \deg P + 2$，且 $Q$ 在 $\mathbb{R}$ 上无零点。则

$$\int_{-\infty}^{\infty} R(x)\,\mathrm{d}x = 2\pi i \sum_{\operatorname{Im} a_k > 0} \operatorname{Res}(R, a_k),$$
右端对上半平面内的全部极点求和。因为 $R$ 取实值、左边的积分是**实数**，所以那个留数之和自动是**纯虚数**（要乘上 $2\pi i$ 才回到实轴）。例：$R = 1/(1+x^{2})$ 在上半平面的唯一极点是 $i$，$\operatorname{Res}(R,\, i) = 1/(2i) = -i/2$ 确实
是纯虚的，而 $2\pi i\cdot(-i/2) = \pi$。

> 续见 [nodes/thm.integral-rational.3.md](./thm.integral-rational.3.md)
