# 有限维 $\implies$ 单位球紧
`imp.fa-findim-riesz` · 推出 · strong 边 · 根 `../`

`thm.norm-equiv-finite-dim` 有限维范数等价 → `thm.riesz-ball-compact` 单位球紧 ⟺ 有限维

由范数等价，$\alpha\|x\|_\infty \le \|x\| \le \beta\|x\|_\infty$，故 $B_E \subseteq \{x : \|x\|_\infty \le 1/\alpha\}$，右端按坐标范数有界闭，由 Heine–Borel 紧；$B_E$ 是其闭子集（$\|\cdot\|$ 连续），故紧。$\blacksquare$

> 只要「有限维 $implies$ 范数等价」，剩下全是 Heine–Borel。
