# 紧 $\iff$ 列紧 $\iff$ 完备且全有界
`imp.metric-compact-equiv-proof` · 推出 · strong 边 · 根 `../`

`def.metric-space` 距离空间 + `def.compact` 紧 + `def.sequentially-compact` 列紧 + `def.complete` 完备 + `def.totally-bounded` 全有界 + `def.lebesgue-number` 勒贝格数 → `thm.metric-compact-equiv` 紧的三个等价刻画

**(c)$\implies$(a)**：先证 Lebesgue 数引理：对开覆盖 $\mathcal U$，存在 $\varepsilon>0$ 使每个 $\varepsilon$-球含于某个 $U\in\mathcal U$。否则对每个 $n$ 取 $x_n$ 使 $B(x_n,1/n)$ 不含于任何 $U$；全有界给 Cauchy 子列（从而收敛子列）$x_{n_k}\to x$，取 $U_0\ni x$ 与 $r>0$ 使 $B(x,r)\subseteq U_0$；$k$ 充分大时 $d(x_{n_k},x)<r/2$、$1/n_k<r/2$，于是 $B(x_{n_k},1/n_k)\subseteq B(x,r)\subseteq U_0$，矛盾。

> 续见 proofs/imp.metric-compact-equiv-proof.4.md
