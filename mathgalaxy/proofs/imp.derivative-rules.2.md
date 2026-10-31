# 导数定义 + 极限四则运算 $\implies$ 求导法则
`imp.derivative-rules` · 推出 · strong 边 · 根 `../`

`def.derivative` 导数 + `prop.limit-arithmetic` 极限的四则运算与保序性 + `prop.differentiable-implies-continuous` 可导 ⟹ 连续 → `thm.derivative-rules` 求导法则

**链式。** 记 $y_0 = f(x_0)$。由 $g$ 在 $y_0$ 可导，存在函数 $\varepsilon$ 使 $\varepsilon(y) \to 0$（$y \to y_0$）且

$$g(y) - g(y_0) = \bigl(g'(y_0) + \varepsilon(y)\bigr)(y - y_0).$$

取 $y = f(x)$、$y_0 = f(x_0)$，除以 $x - x_0$：

$$\frac{g(f(x)) - g(f(x_0))}{x - x_0} = \bigl(g'(f(x_0)) + \varepsilon(f(x))\bigr)\,\frac{f(x) - f(x_0)}{x - x_0}.$$

因 $f$ 连续，$x \to x_0$ 时 $f(x) \to f(x_0)$，故 $\varepsilon(f(x)) \to 0$；第二个因子 $\to f'(x_0)$。取极限得 $(g \circ f)'(x_0) = g'(f(x_0))f'(x_0)$。$\blacksquare$
