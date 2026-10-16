# Rolle / Cauchy 中值定理 $\implies$ Taylor 公式
`imp.taylor` · 推出 · strong 边 · 根 `../`

`thm.rolle` Rolle 中值定理 + `thm.cauchy-mvt` Cauchy 中值定理 → `thm.taylor` Taylor 公式

固定 $x \ne x_0$，记多项式部分为

$$P(t) := \sum_{k=0}^{n} \frac{f^{(k)}(x_0)}{k!}\,(t - x_0)^{k}$$

待定的常数 $M$ 由方程 $f(x) = P(x) + M (x - x_0)^{n+1}$ 确定，即 $M := \dfrac{f(x) - P(x)}{(x - x_0)^{n+1}}$。要证的就是 $M = \dfrac{f^{(n+1)}(\xi)}{(n+1)!}$ 对某个介于 $x_0$ 与 $x$ 之间的 $\xi$ 成立。

令辅助函数

$$\Phi(t) := f(t) - P(t) - M (t - x_0)^{n+1}$$

则 $\Phi$ 有 $n+1$ 阶导数，且 $\Phi^{(k)}(x_0) = 0$（$k = 0, 1, \ldots, n$，因为 $P$ 逐项消掉了 $f$ 在 $x_0$ 的各阶导数），而 $\Phi(x) = 0$（$M$ 的定义）。

> 续见 proofs/imp.taylor.2.md
