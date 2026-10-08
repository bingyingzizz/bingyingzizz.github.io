# Lebesgue 微分定理　`thm.lebesgue-differentiation`
Lebesgue 微分定理：$A_{r} f(x) \to f(x) \text{a.e.}$
layer 23 · 定理 · 微分定理 · 分析学

设 $f \in L^1_{loc}$。则

$$\lim_{r\to0} A_r f(x) = f(x)\quad \text{ 对} \text{a.e.} x \in \mathbb{R}^n$$

## 为什么成立（入边，证明在 proofs/）
- `thm.maximal-theorem` 极大定理 + `thm.approximation-L1` L¹ 里的逼近 + `lem.average-continuous` 平均算子联合连续：极大定理 + 连续函数逼近 $\implies$ Lebesgue 微分定理　proofs/imp.lebesgue-differentiation.md

## 它能推出什么 / 谁在用它
- ⇒ `thm.lebesgue-set-full` Lebesgue 集几乎处处

refs: Folland, Real Analysis, Theorem 3.18

> 说明见 `notes/thm.lebesgue-differentiation.md`
