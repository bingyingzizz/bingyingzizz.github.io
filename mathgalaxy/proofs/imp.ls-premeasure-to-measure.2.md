# F 的预测度 $\implies \mathbb{R}$ 上的 Borel 测度
`imp.ls-premeasure-to-measure` · 推出 · strong 边 · 根 `../`

`prop.ls-premeasure` F 给出的预测度 + `thm.caratheodory-uniqueness` 扩张的唯一性 → `thm.ls-exists` F ↔ Borel 测度

**③ 唯一性。** $F$ 递增实值 $\implies \mu _F((-n, n]) = F(n) - F(-n) < \infty$，所以 $\mu _F$ 是 $\sigma$有限的（$\mathbb{R} = \bigcup _{n} (-n, n]$）。由 $\sigma$有限时的唯一性，扩张唯一。

**④ 「差常数」的来源。** $\mu _F$ 只看增量：把 $F$ 换成 F + c，对一切 (a, b] 有 $F(b) - F(a)$ 不变，故预测度不变、扩张不变。反过来若 $\mu _F = \mu _G$，则对一切 $a < b$，$F(b) - F(a) = G(b) - G(a)$，固定 $a$ 即得 $F - G$ 是常数。∎
