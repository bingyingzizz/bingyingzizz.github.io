# 连续的定义 + 极限四则运算 $\implies$ 连续函数的运算
`imp.continuous-arithmetic` · 推出 · strong 边 · 根 `../`

`def.continuous` 连续 + `prop.limit-arithmetic` 极限的四则运算与保序性 → `prop.continuous-arithmetic` 连续函数的运算

前五条：连续等价于 $\lim_{x \to x_0} f(x) = f(x_0)$，把 `prop.limit-arithmetic` 的结论逐条翻译过来即可（和、差、数乘、积、绝对值）。

**商。** 由 $g(x_0) \ne 0$ 与保号性，$g$ 在 $x_0$ 附近不为零，再用极限的商法则。

**复合。** 给定 $\varepsilon > 0$。$g$ 在 $y_0 := f(x_0)$ 连续，故存在 $\eta > 0$ 使 $|y - y_0| < \eta \implies |g(y) - g(y_0)| < \varepsilon$。$f$ 在 $x_0$ 连续，故存在 $\delta > 0$ 使 $|x - x_0| < \delta \implies |f(x) - f(x_0)| < \eta$。于是 $|x - x_0| < \delta \implies |g(f(x)) - g(f(x_0))| < \varepsilon$。$\blacksquare$
