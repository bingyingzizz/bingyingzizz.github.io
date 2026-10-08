# 投射对象 $\iff$ Stonean 空间
`imp.gleason` · 推出 · strong 边 · 根 `../`

`def.projective-object` 投射 / 内射对象 + `def.stone-space` 全不连通与 Stone 空间 + `def.chaus` 紧 Hausdorff 空间范畴 → `thm.gleason` Gleason 定理

**（投射 $\Longrightarrow$ Stonean）** 设 $S$ 是 $\mathbf{CHaus}$ 的投射对象，要证 $S$ 极端不连通，即任一开集 $U$ 的闭包闭开。

令 $F := U^{c}$，考虑 $p : U \sqcup F \to S$（$U \sqcup F$ 取不交并拓扑，$p$ 在 $U$ 与 $F$ 上取含入）—— 它是连续满射。由投射性，$p$ 有连续截面 $s : S \to U \sqcup F$，即 $p \circ s = 1_{S}$。

> 续见 proofs/imp.gleason.2.md
