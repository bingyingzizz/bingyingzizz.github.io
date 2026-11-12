# $B(E,F)$ 在 $F$ 完备时完备
`imp.bounded-operators-banach-proof` · 推出 · strong 边 · 根 `../`

`def.bounded-operator` 有界线性算子 + `def.banach-space` Banach 空间 + `def.complete` 完备 → `thm.bounded-operators-banach` B(E,F) 完备

收敛：给定 $\varepsilon>0$，取 $N$ 使 $k,l\ge N$ 时 $\lVert u_k-u_l\rVert<\varepsilon$。对任意 $x$ 与 $k\ge N$，
$$\lVert u_kx-ux\rVert=\lim_l\lVert u_kx-u_lx\rVert\le\varepsilon\lVert x\rVert ,$$
故 $\lVert u_k-u\rVert\le\varepsilon$（$k\ge N$）。于是 $u_k\to u$。

特别地 $E^*=B(E,\mathbb K)$ 中 $\mathbb K$ 完备，故对偶空间总是 Banach。∎

> 完整证明见本条边；节点注只保留动机与缺口。
