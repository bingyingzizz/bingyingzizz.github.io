# 条件收敛 $\implies$ 重排可以任意指定和
`imp.riemann-rearrangement` · 推出 · strong 边 · 根 `../`

`def.conditional-convergence` 条件收敛 → `thm.riemann-rearrangement` Riemann 重排定理

设 $\sum a_n$ 条件收敛。记 $p_n := a_n^{+}$、$q_n := a_n^{-}$（正部与负部），则 $\sum a_n = \sum p_n - \sum q_n$ 收敛。

1. **两个非负级数都发散**：若 $\sum p_n$ 与 $\sum q_n$ 都收敛，则 $\sum |a_n| = \sum p_n + \sum q_n$ 收敛，与条件收敛矛盾；

若只有一个收敛，则另一个必须也收敛（因为 $\sum a_n$ 收敛），同样矛盾。

> 续见 proofs/imp.riemann-rearrangement.2.md
