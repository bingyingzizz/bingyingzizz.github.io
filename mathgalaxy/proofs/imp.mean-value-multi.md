# 一维 MVT + 链式法则 $\implies$ 多元中值定理
`imp.mean-value-multi` · 推出 · strong 边 · 根 `../`

`thm.mvt` Lagrange 中值定理 + `thm.chain-rule-multi` 多元链式法则 → `thm.mean-value-multi` 多元中值定理

**等号版本（值域为 $\mathbb{R}$）**：令 $\gamma(t) := a + th$（$t \in [0, 1]$），$\varphi := f \circ \gamma$。由链式法则（`thm.chain-rule-multi`）$\varphi$ 在 $(0,1)$ 上可导且

$$\varphi'(t) = Df(a + th)(h)$$

由一维中值定理（`thm.mvt`），存在 $\theta \in (0,1)$ 使 $\varphi(1) - \varphi(0) = \varphi'(\theta)$，即 $f(a+h) - f(a) = Df(a + \theta h)(h)$。∎

**不等式版本（值域为 $\mathbb{R}^{m}$）**：等号版本对向量值函数**不成立**（反例见节点说明），所以改用积分 / 逼近论证。对 $\varphi(t) = f(a+th)$ 有

$$f(a+h) - f(a) = \int_0^1 \varphi'(t)\,dt = \int_0^1 Df(a + th)(h)\,dt$$

> 续见 proofs/imp.mean-value-multi.2.md
