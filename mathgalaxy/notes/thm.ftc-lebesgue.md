# 微积分基本定理（Lebesgue 版）　`thm.ftc-lebesgue`　·　说明
根 `../`

⭐ 这是 **Newton–Leibniz 公式在 Lebesgue 积分下的完整版本**。对比 Riemann 积分：那里「$F'$ 可积且公式成立」要求 $F'$ 连续（或至少 Riemann 可积），这里只需要「$F$ 绝对连续」。

三个条件的分工：(a) 是「函数侧」的条件（用区间划分刻画），(b) 是「积分侧」，(c) 是「导数侧」。定理说它们是同一件事。

⚠ 若去掉绝对连续，公式**会失效**：Cantor 函数满足 (c) 的「a.e. 可导 $F' \in L^{1}$」但 $\int _{0}^{1} F' = 0 \ne F(1) - F(0) = 1$。

证明链条：$(a) \implies (b)$：由 $AC \subseteq BV$ 与「$\mu _F \ll m$」；$(b) \implies (c)$：微积分基本定理的直接推论；$(c) \implies (a)$：由「$F(x) = \int F'$」的形式给出绝对连续性。
