# 绝对收敛 $\implies$ 重排不变
`imp.rearrangement` · 推出 · strong 边 · 根 `../`

`def.absolute-convergence` 绝对收敛 + `thm.absolute-implies-convergent` 绝对收敛 ⟹ 收敛 → `thm.rearrangement` 重排不变性

**先设 $a_n \ge 0$。** 记 $S := \sum a_n \in [0, +\infty]$。任取双射 $\sigma$。

1. 对每个 $N$，$\sum_{n \le N} a_{\sigma(n)} \le S$（有限个项是原级数的一个有限部分）。取上确界得 $\sum_n a_{\sigma(n)} \le S$。
2. 反过来把 $\sigma^{-1}$ 代进去（同一条推理用在 $\sigma^{-1}$ 上，把 $\sum a_n$ 看成 $\sum a_{\sigma(n)}$ 的重排）得 $S \le \sum_n a_{\sigma(n)}$。
3. 故两者相等（有限或同时为 $+\infty$）；特别地 $\sum a_n < \infty$ 时重排也收敛且和相同。

> 续见 proofs/imp.rearrangement.2.md
