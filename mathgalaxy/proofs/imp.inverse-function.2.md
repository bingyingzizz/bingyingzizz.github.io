# 压缩映射原理 $\implies$ 逆映射定理（有限维）
`imp.inverse-function` · 推出 · strong 边 · 根 `../`

`thm.banach-fixed-point` 压缩映射原理 + `thm.mean-value-multi` 多元中值定理 + `thm.chain-rule-multi` 多元链式法则 → `thm.inverse-function` 逆映射定理

**第二步：$\Phi(x) := x - f(x)$ 在小球上是压缩。** 由 $D\Phi(0) = I - I = 0$ 与 $D\Phi$ 的连续性，存在 $r > 0$ 使 $\|x\| \le r$ 时 $\|D\Phi(x)\| \le \frac{1}{2}$。于是对 $\|x\|, \|y\| \le r$，由中值不等式（`thm.mean-value-multi`）

$$\|\Phi(x) - \Phi(y)\| \le \tfrac{1}{2}\|x - y\|$$

> 续见 proofs/imp.inverse-function.3.md
