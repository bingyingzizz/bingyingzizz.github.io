# 紧 $\iff$ 列紧 $\iff$ 完备且全有界
`imp.metric-compact-equiv-proof` · 推出 · strong 边 · 根 `../`

`def.metric-space` 距离空间 + `def.compact` 紧 + `def.sequentially-compact` 列紧 + `def.complete` 完备 + `def.totally-bounded` 全有界 + `def.lebesgue-number` 勒贝格数 → `thm.metric-compact-equiv` 紧的三个等价刻画

记 $d$ 为 $X$ 上的度量。

**(a)$\implies$(b)**：设 $X$ 紧而 $(x_n)$ 无收敛子列。则每点 $x$ 有开球 $B(x,r_x)$ 只含有限多个 $x_n$（否则取 $r=1/k$ 可抽出收敛于 $x$ 的子列）。这些球覆盖 $X$，紧性给有限子覆盖，故 $(x_n)$ 只有有限多项，矛盾。

> 续见 proofs/imp.metric-compact-equiv-proof.2.md
