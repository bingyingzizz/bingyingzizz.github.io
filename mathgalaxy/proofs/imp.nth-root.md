# 确界原理 + 二项式 $\implies$ n 次方根存在
`imp.nth-root` · 推出 · strong 边 · 根 `../`

`thm.real-ordered-field` ℝ 是完备有序域 + `def.power` 整数幂 + `thm.binomial` 二项式定理 + `thm.bernoulli` Bernoulli 不等式 → `thm.nth-root` n 次方根

令 $S := \{ t \in K : t \ge 0,\ t^{n} \le a \}$。$0 \in S$；且 $t > \max\{1, a\}$ 时 $t^{n} \ge t > a$，故 $\max\{1,a\}$ 是上界。由确界原理，$b := \sup S$ 存在。又 $t_{0} := \min\{a,1\}/2$ 满足 $t_{0} > 0$、$t_{0}^{n} \le t_{0} < a$，故 $t_{0} \in S$，从而 $b \ge t_{0} > 0$。

**断言 $b^{n} = a$。** 反设 $b^{n} \ne a$。

若 $b^{n} < a$：取 $0 < h < 1$ 且 $h(b+1)^{n} < a - b^{n}$。由二项式定理，

$$(b+h)^{n} = \sum_{k=0}^{n} \binom{n}{k} b^{n-k} h^{k} \le b^{n} + h \sum_{k=1}^{n} \binom{n}{k} b^{n-k} \le b^{n} + h(b+1)^{n} < a,$$

故 $b + h \in S$，与 $b = \sup S$ 矛盾。

> 续见 proofs/imp.nth-root.2.md
