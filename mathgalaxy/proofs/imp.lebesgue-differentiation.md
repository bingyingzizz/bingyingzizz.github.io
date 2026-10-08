# 极大定理 + 连续函数逼近 $\implies$ Lebesgue 微分定理
`imp.lebesgue-differentiation` · 推出 · strong 边 · 根 `../`

`thm.maximal-theorem` 极大定理 + `thm.approximation-L1` L¹ 里的逼近 + `lem.average-continuous` 平均算子联合连续 → `thm.lebesgue-differentiation` Lebesgue 微分定理

**① 先局部化。** 由 $L^{1}_{l}oc$ 的定义与测度的可数可加性，只需对每个 $N \in \mathbb{N}$ 证明在球 $\{|x| \le N\}$ 上几乎处处成立；把 $f$ 换成 $f\cdot\chi_{B(N+1, 0)}$ 后即可**设 $f \in L^1$**。

**② 用连续函数逼近。** 给定 $\varepsilon > 0$，由「$L^{1}$ 里的逼近」，取**连续函数** $g$ 使

$$\int |g(y) - f(y)| dy < \varepsilon$$

**③ 连续情形是白送的。** 若 $g$ 连续，则对**每一个** $x$ 都有 $A_r g(x) \to g(x)$（$r \to 0$）—— 因为 $g$ 在 $x$ 附近近似为常数。

> 续见 proofs/imp.lebesgue-differentiation.2.md
