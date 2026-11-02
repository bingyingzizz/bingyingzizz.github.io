# 确界原理 + 二项式 $\implies$ n 次方根存在
`imp.nth-root` · 推出 · strong 边 · 根 `../`

`thm.real-ordered-field` ℝ 是完备有序域 + `def.power` 整数幂 + `thm.binomial` 二项式定理 + `thm.bernoulli` Bernoulli 不等式 → `thm.nth-root` n 次方根

故 $t \mapsto t^{n}$ 在 $[0, +\infty)$ 上严格递增；$b^{n} = c^{n}$ 且 $b, c > 0$ 迫使 $b = c$。于是 $\sqrt[n]{a}$ 是唯一确定的，且 $a < a' \implies \sqrt[n]{a} < \sqrt[n]{a'}$。

**乘法。** $(\sqrt[n]{a}\,\sqrt[n]{b})^{n} = ab$，两边都是正数，由唯一性得 $\sqrt[n]{ab} = \sqrt[n]{a}\,\sqrt[n]{b}$。$\blacksquare$
