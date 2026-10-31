# 导数定义 + 极限四则运算 $\implies$ 求导法则
`imp.derivative-rules` · 推出 · strong 边 · 根 `../`

`def.derivative` 导数 + `prop.limit-arithmetic` 极限的四则运算与保序性 + `prop.differentiable-implies-continuous` 可导 ⟹ 连续 → `thm.derivative-rules` 求导法则

**线性。** 差商 $(f \pm g)(x) - (f \pm g)(x_0)$ 拆成两个差商之和，取极限。

**乘积。** 加一项减一项：

$$\frac{(fg)(x) - (fg)(x_0)}{x - x_0} = \frac{f(x) - f(x_0)}{x - x_0}\,g(x) + f(x_0)\,\frac{g(x) - g(x_0)}{x - x_0}.$$

第一项：差商 $\to f'(x_0)$，$g(x) \to g(x_0)$（可导 $\implies$ 连续），乘积 $\to f'(x_0)g(x_0)$。第二项 $\to f(x_0)g'(x_0)$。

**倒数。** 对 $g(x_0) \ne 0$，$x$ 靠近 $x_0$ 时 $g(x) \ne 0$，且

$$\frac{1}{g(x)} - \frac{1}{g(x_0)} = -\frac{g(x) - g(x_0)}{g(x)\,g(x_0)},$$

除以 $x - x_0$ 后两个因子分别趋于 $g'(x_0)$ 与 $-1/g(x_0)^{2}$。商法则再由乘积法则合成。

> 续见 proofs/imp.derivative-rules.2.md
