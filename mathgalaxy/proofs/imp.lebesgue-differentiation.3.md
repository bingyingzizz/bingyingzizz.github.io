# 极大定理 + 连续函数逼近 $\implies$ Lebesgue 微分定理
`imp.lebesgue-differentiation` · 推出 · strong 边 · 根 `../`

`thm.maximal-theorem` 极大定理 + `thm.approximation-L1` L¹ 里的逼近 + `lem.average-continuous` 平均算子联合连续 → `thm.lebesgue-differentiation` Lebesgue 微分定理

$$E_{\alpha} = \bigl\{x : \limsup_{r\to0^{+}} |A_{r}f(x) - f(x)| > \alpha\bigr\}$$

由 ④，$E_\alpha \subseteq F_{\alpha/2} \cup \{x : H(f-g)(x) > \alpha/2\}$，其中 $F_{\alpha/2} = \{|f - g| > \alpha/2\}$。于是

$$m(E_\alpha) \le 2\varepsilon / \alpha + 2C\varepsilon / \alpha$$

（第一项用 Markov 不等式，第二项用**极大定理**。）

**⑥ 令 $\varepsilon \to 0$。** 右边对**任意** $\varepsilon > 0$ 成立，故 $m(E_\alpha) = 0$ 对一切 $\alpha > 0$ 成立。于是

> 续见 proofs/imp.lebesgue-differentiation.4.md
