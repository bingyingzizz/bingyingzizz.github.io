# $B(E,F)$ 在 $F$ 完备时完备
`imp.bounded-operators-banach-proof` · 推出 · strong 边 · 根 `../`

`def.bounded-operator` 有界线性算子 + `def.banach-space` Banach 空间 + `def.complete` 完备 → `thm.bounded-operators-banach` B(E,F) 完备

设 $(u_k)$ 是 $B(E,F)$ 中的 Cauchy 列。对每个 $x\in E$，
$$\lVert u_kx-u_lx\rVert\le\lVert u_k-u_l\rVert\,\lVert x\rVert ,$$
故 $(u_kx)$ 是 $F$ 中的 Cauchy 列；$F$ 完备，定义 $ux=\lim_k u_kx$。

$u$ 线性：$u(\lambda x+\mu y)=\lim_k(\lambda u_kx+\mu u_ky)=\lambda ux+\mu uy$。

有界：$(u_k)$ 是 Cauchy 列故有界，设 $\lVert u_k\rVert\le C$。则 $\lVert ux\rVert=\lim_k\lVert u_kx\rVert\le C\lVert x\rVert$，故 $u\in B(E,F)$。

> 续见 proofs/imp.bounded-operators-banach-proof.2.md
