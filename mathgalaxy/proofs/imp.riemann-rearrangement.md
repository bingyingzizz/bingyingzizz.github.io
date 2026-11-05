# 条件收敛 $\implies$ 重排可以任意指定和
`imp.riemann-rearrangement` · 推出 · strong 边 · 根 `../`

`def.conditional-convergence` 条件收敛 → `thm.riemann-rearrangement` Riemann 重排定理

设 $\sum a_n$ 条件收敛。记 $p_n := a_n^{+}$、$q_n := a_n^{-}$（正部与负部），则 $\sum a_n = \sum p_n - \sum q_n$ 收敛。

1. **两个非负级数都发散**：若 $\sum p_n$ 与 $\sum q_n$ 都收敛，则 $\sum |a_n| = \sum p_n + \sum q_n$ 收敛，与条件收敛矛盾；

若只有一个收敛，则另一个必须也收敛（因为 $\sum a_n$ 收敛），同样矛盾。

故 $\sum p_n = \sum q_n = +\infty$。
2. **构造重排**：给定实数 $s$。规则是「**每步取最早尚未使用的那一项**」：先把正项按下标顺序逐项加到部分和上，一越过 $s$ 就停；再按同样的规则取负项，一低于 $s$ 就停；如此循环。

> 续见 proofs/imp.riemann-rearrangement.2.md
