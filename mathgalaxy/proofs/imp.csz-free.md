# profinite 集的结构 $\implies$ $C(S,\mathbb{Z})$ 自由
`imp.csz-free` · 推出 · strong 边 · 根 `../`

`def.profinite` 投射有限空间 + `def.cond-measure` 整值测度 → `thm.csz-free` 连续函数群是自由的

把 $S$ 嵌入某个乘积 $\prod_{I}\{0,1\}$，并给 $I$ 一个良序，写成序数 $\lambda$。对 $\lambda$ 作超限归纳。

**极限序数。** $S$ 是诸 $S_\mu$（$\mu < \lambda$）的滤过极限，$C(S,\mathbb{Z}) = \varinjlim_\mu C(S_\mu,\mathbb{Z})$ 是自由群的滤过余极限，仍自由。

**后继序数 $\lambda = \rho + 1$。** 设 $S \subset S_\rho \times \{0,1\}$，令 $S_i = S \cap (S_\rho \times \{i\})$（$i = 0,1$），$S' = S_0 \cap S_1$。有短正合列

$$0 \longrightarrow C(S_\rho, \mathbb{Z}) \longrightarrow C(S_\rho, \mathbb{Z}) \longrightarrow C(S', \mathbb{Z}) \longrightarrow 0,$$

> 续见 proofs/imp.csz-free.2.md
