# 条件收敛 $\implies$ 重排可以任意指定和
`imp.riemann-rearrangement` · 推出 · strong 边 · 根 `../`

`def.conditional-convergence` 条件收敛 → `thm.riemann-rearrangement` Riemann 重排定理

1. **两个非负级数都发散**：若 $\sum p_n$ 与 $\sum q_n$ 都收敛，则 $\sum |a_n| = \sum p_n + \sum q_n$ 收敛，与条件收敛矛盾；若只有一个收敛，则另一个必须也收敛（因为 $\sum a_n$ 收敛），同样矛盾。故 $\sum p_n = \sum q_n = +\infty$。
2. **构造重排**：给定实数 $s$，先把正项按原顺序取出、逐项加到部分和上，直到部分和 $> s$ 为止（可以做到，因为正项之和发散）；再把负项逐项取来，直到部分和 $< s$（同样可以做到）。如此反复。
3. **收敛到 $s$**：每次「越界」的那一步所加的项，其绝对值不超过「跨过 $s$ 之前与 $s$ 的距离」，而由

> 续见 proofs/imp.riemann-rearrangement.3.md
