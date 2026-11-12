# 紧 $\iff$ 列紧 $\iff$ 完备且全有界
`imp.metric-compact-equiv-proof` · 推出 · strong 边 · 根 `../`

`def.metric-space` 距离空间 + `def.compact` 紧 + `def.sequentially-compact` 列紧 + `def.complete` 完备 + `def.totally-bounded` 全有界 + `def.lebesgue-number` 勒贝格数 → `thm.metric-compact-equiv` 紧的三个等价刻画

**(b)$\implies$(c)**：完备性——若 $(x_n)$ 是 Cauchy 列，列紧给收敛子列 $x_{n_k}\to x$；对 $\varepsilon>0$ 取 $N$ 使 $m,n\ge N$ 时 $d(x_m,x_n)<\varepsilon/2$，再取 $k$ 使 $n_k\ge N$ 且 $d(x_{n_k},x)<\varepsilon/2$，则 $n\ge N$ 时 $d(x_n,x)<\varepsilon$。全有界性——若某 $\varepsilon>0$ 不能用有限个 $\varepsilon$-球覆盖，归纳取 $x_{n+1}\notin\bigcup_{k\le n}B(x_k,\varepsilon)$，则 $m\ne n$ 时 $d(x_m,x_n)\ge\varepsilon$，此列无 Cauchy 子列，与 (b) 矛盾。

> 续见 proofs/imp.metric-compact-equiv-proof.3.md
