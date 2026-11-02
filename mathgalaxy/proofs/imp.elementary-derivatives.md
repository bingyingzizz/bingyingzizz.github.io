# 求导法则 + 幂级数逐项求导 $\implies$ 初等函数导数表
`imp.elementary-derivatives` · 推出 · strong 边 · 根 `../`

`def.power` 整数幂 + `thm.derivative-rules` 求导法则 + `thm.power-series-analytic` 幂级数的逐项运算 + `def.log-function` 对数函数与 e → `thm.elementary-derivatives` 初等函数的导数

**$x^{n}$（$n \ge 0$）**：对 $n$ 归纳，$n = 0$ 时为常函数；归纳步用乘积法则与 $(x)' = 1$。$n < 0$ 时用商法则 $(x^{n})' = \left(1/x^{-n}\right)'$。

**$\exp$、$\sin$、$\cos$**：三者都由收敛半径 $+\infty$ 的幂级数定义，由 `thm.power-series-analytic` 可在收敛区间内逐项求导：

$$(\exp x)' = \sum_{n \ge 1} \frac{n x^{n-1}}{n!} = \sum_{m \ge 0} \frac{x^{m}}{m!} = \exp x,$$

$$(\sin x)' = \sum_{k \ge 0} \frac{(-1)^{k}(2k+1)x^{2k}}{(2k+1)!} = \cos x, \qquad (\cos x)' = -\sin x \ \text{同理}.$$

**$\ln$**：由 $\exp(\ln y) = y$（$y > 0$）两边求导，链式法则给 $\exp(\ln y)\,(\ln y)' = 1$，即 $y\,(\ln y)' = 1$。

> 续见 proofs/imp.elementary-derivatives.2.md
