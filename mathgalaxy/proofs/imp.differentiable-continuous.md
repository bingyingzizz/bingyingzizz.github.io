# 导数定义 $\implies$ 可导蕴含连续
`imp.differentiable-continuous` · 推出 · strong 边 · 根 `../`

`def.derivative` 导数 + `prop.limit-arithmetic` 极限的四则运算与保序性 → `prop.differentiable-implies-continuous` 可导 ⟹ 连续

对 $x \ne x_0$，

$$f(x) - f(x_0) = \frac{f(x) - f(x_0)}{x - x_0}\,(x - x_0).$$

由可导性，第一个因子当 $x \to x_0$ 时趋于 $f'(x_0)$；第二个因子趋于 $0$。由极限的乘积法则（`prop.limit-arithmetic`），$f(x) - f(x_0) \to 0$，即 $f(x) \to f(x_0)$。$\blacksquare$
