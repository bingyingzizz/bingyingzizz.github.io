# 区间可加 + 基本估计 $\implies$ 变上限积分的导数
`imp.ftc-part1` · 推出 · strong 边 · 根 `../`

`prop.integral-linear` 积分的线性与区间可加 + `prop.integral-order` 积分的保序与估计 + `def.continuous` 连续 → `thm.ftc-riemann-part1` 变上限积分的导数

设 $|f| \le M$。

**(a)** 对 $x < y$，由区间可加性 $F(y) - F(x) = \int_x^y f$，再由基本估计 $|F(y) - F(x)| \le M(y - x)$。故 $F$ 是 Lipschitz 的，特别地连续（给定 $\varepsilon > 0$ 取 $\delta = \varepsilon / M$，$M = 0$ 时平凡）。

**(b)** 设 $f$ 在 $x_0$ 连续，给定 $\varepsilon > 0$，取 $\delta > 0$ 使 $|x - x_0| < \delta$ 时 $|f(x) - f(x_0)| < \varepsilon$。则对 $0 < h < \delta$

$$\frac{F(x_0 + h) - F(x_0)}{h} - f(x_0) = \frac{1}{h}\int_{x_0}^{x_0 + h} \bigl( f - f(x_0) \bigr)$$

> 续见 proofs/imp.ftc-part1.2.md
