# 投射对象 $\iff$ Stonean 空间
`imp.gleason` · 推出 · strong 边 · 根 `../`

`def.projective-object` 投射 / 内射对象 + `def.stone-space` 全不连通与 Stone 空间 + `def.chaus` 紧 Hausdorff 空间范畴 → `thm.gleason` Gleason 定理

反设 $x \ne x' \in T$ 且 $f(x) = f(x')$。取不交邻域 $U \ni x$、$U' \ni x'$。$f$ 是闭映射（紧到 Hausdorff 的连续映射把闭集送到闭集），所以 $S_{1} := f(U^{c})$ 与 $S_{1}' := f(U'^{c})$ 是 $S$ 中的闭集。由 $f$ 的极小满性，$f|_{U^{c}}$ 与 $f|_{U'^{c}}$ 都不满，故 $S_{1}, S_{1}' \subset S$；于是它们各自的补 $V := S \setminus S_{1}$、$V' := S \setminus S_{1}'$ 是非空开集，且 $V \subseteq f(U)$、$V' \subseteq f(U')$。

> 续见 proofs/imp.gleason.5.md
