# 压缩映射原理 $\implies$ 逆映射定理（有限维）
`imp.inverse-function` · 推出 · strong 边 · 根 `../`

`thm.banach-fixed-point` 压缩映射原理 + `thm.mean-value-multi` 多元中值定理 + `thm.chain-rule-multi` 多元链式法则 → `thm.inverse-function` 逆映射定理

**第五步：逆映射连续。** 对 $y_1, y_2 \in W$，记 $x_i := g(y_i)$。由第三步的论证

$$\|x_1 - x_2\| = \|f(x_1) - f(x_2) + \Phi(x_2) - \Phi(x_1)\| \le \|y_1 - y_2\| + \tfrac{1}{2}\|x_1 - x_2\|$$

故 $\|g(y_1) - g(y_2)\| \le 2\|y_1 - y_2\|$：$g$ 甚至 Lipschitz。

**第六步：$g$ 可导且 $Dg(y) = (Df(g(y)))^{-1}$。** 对 $y, y + k \in W$ 记 $x := g(y)$、$x + h := g(y + k)$（即 $h = g(y+k) - g(y)$）。由 $f$ 在 $x$ 可微

$$k = f(x + h) - f(x) = Df(x)(h) + o(\|h\|)$$

> 续见 proofs/imp.inverse-function.7.md
