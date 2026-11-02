# 极大定理 + 连续函数逼近 $\implies$ Lebesgue 微分定理
`imp.lebesgue-differentiation` · 推出 · strong 边 · 根 `../`

`thm.maximal-theorem` 极大定理 + `thm.approximation-L1` L¹ 里的逼近 + `lem.average-continuous` 平均算子联合连续 → `thm.lebesgue-differentiation` Lebesgue 微分定理

$$m(E_\alpha) \le 2\varepsilon / \alpha + 2C\varepsilon / \alpha$$

（第一项用 Markov 不等式，第二项用**极大定理**。）

**⑥ 令 $\varepsilon \to 0$。** 右边对**任意** $\varepsilon > 0$ 成立，故 $m(E_\alpha) = 0$ 对一切 $\alpha > 0$ 成立。于是

$$\lim_{r\to0} A_r f(x) = f(x)\quad \text{ 对一切} x \notin \bigcup_{m\in\mathbb{N}} E_{1/m}$$

而右边是可数个零集之并，仍是零集。∎

> ⭐ 这是分析里最漂亮的标准套路之一：**用「连续函数是稠密的」把问题搬到好情形，再用极大不等式把误差控制住**。两边一夹，坏集测度为零。
