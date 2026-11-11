# $\chi$ 的两种算法给出 $\chi=2-2g$
`dep.eulerchar-eulerchargenus` · 推出 · strong 边 · 根 `../`

`thm.euler-characteristic` Euler 示性数 → `prop.eulerchar-genus` Euler 示性数与亏格

命题先由任一三角剖分数出 $\chi(S)$，再由 $g=\tfrac12\operatorname{rank}H_{1}(S;\mathbb{Z})$ 得 $\beta_{0}=1$、$\beta_{1}=2g$、$\beta_{2}=1$，于是 $\chi=2-2g$。把两种算法接起来靠的正是 `thm.euler-characteristic` 的 $\chi=\sum_{p}(-1)^{p}\alpha_{p}=\sum_{p}(-1)^{p}\beta_{p}$；没有它，组合侧的数与同调侧的 $g$ 无法对齐，「与剖分无关」也无从谈起。∎

> $\chi$ 的两种算法（数单纯形 / 数 Betti 数）相等，正是这条定理的内容。
