# 可积的定义 $\implies$ Darboux 判据
`imp.darboux-criterion` · 推出 · strong 边 · 根 `../`

`def.riemann-integrable` Riemann 可积 → `thm.darboux-criterion` Darboux 判据

设 $P = \{ x_0 < \cdots < x_n \}$，取 $\delta := $ 比「$P$ 中相邻分割点的最小间距」更小的正数（$n = 0$ 时平凡）。对任意模小于 $\delta$ 的分割 $Q$ 与任意标记 $\xi$：每个 $Q$ 的小区间至多**跨过一个** $P$ 的分割点，于是把 $Q$ 的小区间按「是否含 $P$ 的分割点」分类求和，可得

$$L(f, P) - 2M\,\|Q\|\cdot n \le L(f, Q) \le S(f, Q, \xi) \le U(f, Q) \le U(f, P) + 2M\,\|Q\| \cdot n$$

其中 $M := \sup |f|$（跨过分割点的那几段振幅不超过 $2M$）。令 $\|Q\| \to 0$，两侧都趋于 $I$，故 $S(f, Q, \xi) \to I$。

> 续见 proofs/imp.darboux-criterion.3.md
