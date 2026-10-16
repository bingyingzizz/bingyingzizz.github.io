# 紧 $\implies$ 列紧
`imp.compact-seqcompact` · 推出 · strong 边 · 根 `../`

`def.compact` 紧 → `def.sequentially-compact` 列紧

其中 $U_{n}$ 是 ② 中给 $x_{n}$ 的那个邻域（只含有限个 $x_{m}$）。再补上闭集的余集，$\mathcal{U}$ 就是 $X$ 的开覆盖。

**④ 由紧性取有限子覆盖** $\mathcal{V} \subseteq \mathcal{U}$。若 $\mathcal{V}$ 包含那个余集，则没盖住任何 $x_{n}$；若只含有限个 $U_{n}$，而每个 $U_{n}$ 只含有限个 $x_{m}$，则 $\mathcal{V}$ 总共只盖住**有限多个** $x_{m}$ —— 与 $\{x_{n}\}$ 是无限集矛盾（没有收敛子列迫使它无限）。

故 $\{x_{n}\}$ 必有收敛子列，$X$ 列紧。∎

> 只有这一步不需要选择公理。
