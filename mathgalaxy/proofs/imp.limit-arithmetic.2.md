# 极限的定义 $\implies$ 四则运算与保序性
`imp.limit-arithmetic` · 推出 · strong 边 · 根 `../`

`def.function-limit` 函数极限 → `prop.limit-arithmetic` 极限的四则运算与保序性

右边两项各自可小于 $\varepsilon / 2$，取相应的 $\delta$ 之小者即可。

**(iii) 倒数。** 由 $B \ne 0$，取 $\delta_0$ 使 $0 < |x - x_0| < \delta_0$ 时 $|g(x) - B| < |B| / 2$，于是 $|g(x)| > |B| / 2$，从而

$$\Bigl| \frac{1}{g(x)} - \frac{1}{B} \Bigr| = \frac{|g(x) - B|}{|g(x)|\,|B|} \le \frac{2}{|B|^{2}}\,|g(x) - B|$$

**(iv) 保序性。** 设 $f(x) \le g(x)$ 在去心邻域上成立而 $A > B$。取 $\varepsilon = (A - B) / 2$，则充分靠近 $x_0$ 时 $f(x) > A - \varepsilon > B + \varepsilon > g(x)$，与 $f \le g$ 矛盾。故 $A \le B$。∎

**(v) 绝对值。** 由 $|\,|f(x)| - |A|\,| \le |f(x) - A|$（三角不等式的变形）直接得到。

> 「保序性」之所以结论是 $\le$ 而不是 $<$，看证明的最后一步就明白了：反证法只排除了 $A > B$。
