# 极限的定义 $\implies$ 四则运算与保序性
`imp.limit-arithmetic` · 推出 · strong 边 · 根 `../`

`def.function-limit` 函数极限 → `prop.limit-arithmetic` 极限的四则运算与保序性

以函数版为例（数列版把 $\delta$ 换成 $N$ 即可），记 $A = \lim_{x \to x_0} f(x)$，$B = \lim_{x \to x_0} g(x)$，给定 $\varepsilon > 0$。

**(i) 加法。** 取 $\delta_1, \delta_2$ 分别使 $0 < |x - x_0| < \delta_1$ 时 $|f(x) - A| < \varepsilon / 2$、$0 < |x - x_0| < \delta_2$ 时 $|g(x) - B| < \varepsilon / 2$。取 $\delta = \min\{\delta_1, \delta_2\}$，则

$$|(f + g)(x) - (A + B)| \le |f(x) - A| + |g(x) - B| < \varepsilon$$

**(ii) 乘法。** 先注意 $f$ 在 $x_0$ 附近有界：存在 $\delta_0$ 与 $M$ 使 $|f(x)| \le M$。于是

$$|f(x)g(x) - AB| \le |f(x)|\,|g(x) - B| + |B|\,|f(x) - A| \le M\,|g(x) - B| + |B|\,|f(x) - A|$$

> 续见 proofs/imp.limit-arithmetic.2.md
