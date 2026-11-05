# 极大定理 + 连续函数逼近 $\implies$ Lebesgue 微分定理
`imp.lebesgue-differentiation` · 推出 · strong 边 · 根 `../`

`thm.maximal-theorem` 极大定理 + `thm.approximation-L1` L¹ 里的逼近 + `lem.average-continuous` 平均算子联合连续 → `thm.lebesgue-differentiation` Lebesgue 微分定理

**④ 把差值压住。** 对任意 $x$，

$$\limsup_{r\to0^{+}} |A_{r}f(x) - f(x)| \le \limsup_{r\to0^{+}}\bigl(|A_{r}(f-g)(x)| + |A_{r}g(x)-g(x)| + |(g-f)(x)|\bigr) \le H(f-g)(x) + |f-g|(x),$$

（第一项用 $|A_r(f-g)| \le A_r|f-g| \le H(f-g)$，它对**一切** $r>0$ 成立；第二项由 ③ 得 $A_r g(x) \to g(x)$（$r \to 0^{+}$），于是在 $\limsup$ 里消失）。⚠️ 这里必须是 $\limsup_{r\to0^{+}}$ 而**不是** $\sup_{r>0}$：$r$ 大时 $A_r g(x)$ 与 $g(x)$ 没有关系，$\sup$ 版本的上界是假的。

**⑤ 估计坏集。** 令

> 续见 proofs/imp.lebesgue-differentiation.3.md
