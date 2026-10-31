# 确界原理 + 二项式 $\implies$ n 次方根存在
`imp.nth-root` · 推出 · strong 边 · 根 `../`

`thm.real-ordered-field` ℝ 是完备有序域 + `def.power` 整数幂 + `thm.binomial` 二项式定理 + `thm.bernoulli` Bernoulli 不等式 → `thm.nth-root` n 次方根

若 $b^{n} > a$：取 $0 < h < b$ 且 $n h b^{n-1} < b^{n} - a$。由 Bernoulli（$x = -h/b \ge -1$），

$$(b-h)^{n} = b^{n}\left(1 - \frac{h}{b}\right)^{n} \ge b^{n}\left(1 - \frac{nh}{b}\right) = b^{n} - n h b^{n-1} > a.$$

于是任何 $t \in S$ 都满足 $t^{n} \le a < (b-h)^{n}$，故 $t < b - h$（$t \ge 0$，正数上 $t \mapsto t^{n}$ 严格增）。即 $b - h$ 是 $S$ 的上界，与 $b$ 最小矛盾。

**唯一性与单调性。** $0 \le u < v$ 时

$$v^{n} - u^{n} = (v - u)\,(v^{n-1} + v^{n-2}u + \cdots + u^{n-1}) > 0,$$

> 续见 proofs/imp.nth-root.3.md
