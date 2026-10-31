# 形式的积分　`def.integral-form`　·　续页（第 2 页）
[在星图里打开](../#n=def.integral-form)　·　第 1 页 [nodes/def.integral-form.md](./def.integral-form.md)

## 陈述（续）
设 $U\subseteq\mathbb{R}^{n}$ 开，$\omega = f\,\mathrm{d}x^{1}\wedge\cdots\wedge\mathrm{d}x^{n}$ 是紧支的 $n$-形式。定义

$$\int_{U}\omega := \int_{U}f(x)\,\mathrm{d}x^{1}\cdots\mathrm{d}x^{n},$$
右边是通常的（Lebesgue 或 Riemann）积分，$\mathrm{d}x^{1}\cdots\mathrm{d}x^{n}$ 记 Lebesgue 测度。**良定性**：若 $y = \psi(x)$ 是保向微分同胚，则
$$\omega = (f\circ\psi^{-1})\det\Bigl(\frac{\partial x}{\partial y}\Bigr)\,\mathrm{d}y^{1}\wedge\cdots\wedge\mathrm{d}y^{n},$$
而换元公式里出现的正是同一个 $\det$（**不是** $\lvert\det\rvert$），所以积分不变。于是在**定向**流形 $M$ 上取保向图册与单位分解 $\{\rho_{\alpha}\}$，可整体定义
$$\int_{M}\omega := \sum_{\alpha}\int_{U_{\alpha}}\rho_{\alpha}\,\omega .$$

> 续见 [nodes/def.integral-form.3.md](./def.integral-form.3.md)
