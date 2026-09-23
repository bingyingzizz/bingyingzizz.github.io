# 极大定理 + 连续函数逼近 $\implies$ Lebesgue 微分定理
`imp.lebesgue-differentiation` · 推出 · strong 边 · 根 `../`

`thm.maximal-theorem` 极大定理 + `thm.approximation-L1` L¹ 里的逼近 + `lem.average-continuous` 平均算子联合连续 → `thm.lebesgue-differentiation` Lebesgue 微分定理

**④ 把差值压住。** 对任意 $x$，

$$\sup_{r>0} |A_r f(x) - f(x)| = \sup_r |A_r(f - g)(x) + (A_r g - g)(x) + (g - f)(x)| \le H(f - g)(x) + |f - g|(x)$$

（第一项用 $|A_r(f-g)| \le A_r|f-g| \le H(f-g)$，第二项由 ③ 取 $r \to 0$）。

**⑤ 估计坏集。** 令

$$E_\alpha = \{x : \sup_{r>0} |A_r f(x) - f(x)| > \alpha\}$$

由 ④，$E_\alpha \subseteq F_{\alpha/2} \cup \{x : H(f-g)(x) > \alpha/2\}$，其中 $F_{\alpha/2} = \{|f - g| > \alpha/2\}$。于是

> 续见 proofs/imp.lebesgue-differentiation.3.md
