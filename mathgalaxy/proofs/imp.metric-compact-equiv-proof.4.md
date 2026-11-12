# 紧 $\iff$ 列紧 $\iff$ 完备且全有界
`imp.metric-compact-equiv-proof` · 推出 · strong 边 · 根 `../`

`def.metric-space` 距离空间 + `def.compact` 紧 + `def.sequentially-compact` 列紧 + `def.complete` 完备 + `def.totally-bounded` 全有界 + `def.lebesgue-number` 勒贝格数 → `thm.metric-compact-equiv` 紧的三个等价刻画

取上述 $\varepsilon$，用全有界性取有限 $\varepsilon$-网 $y_1,\ldots,y_m$，并取 $U_i\in\mathcal U$ 使 $B(y_i,\varepsilon)\subseteq U_i$。对任意 $x\in X$ 有 $d(x,y_i)<\varepsilon$ 的 $i$，故 $x\in B(y_i,\varepsilon)\subseteq U_i$。于是 $U_1,\ldots,U_m$ 覆盖 $X$，$X$ 紧。∎

> 紧性、列紧性与完备+全有界是同一性质的不同表述；证明用到 Lebesgue 数引理，各概念同处基础层，故本边不参与分层。
