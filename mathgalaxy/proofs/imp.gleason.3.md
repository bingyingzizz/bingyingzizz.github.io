# 投射对象 $\iff$ Stonean 空间
`imp.gleason` · 推出 · strong 边 · 根 `../`

`def.projective-object` 投射 / 内射对象 + `def.stone-space` 全不连通与 Stone 空间 + `def.chaus` 紧 Hausdorff 空间范畴 → `thm.gleason` Gleason 定理

$f$ 是闭映射（紧到 Hausdorff 的连续映射把闭集送到闭集），所以 $S_{1} := f(U^{c})$ 与 $S_{1}' := f(U'^{c})$ 是 $S$ 中的闭集。

由 $f$ 的极小满性，$f|_{U^{c}}$ 与 $f|_{U'^{c}}$ 都不满，故 $S_{1}, S_{1}' \subset S$；

于是它们各自的补 $V := S \setminus S_{1}$、$V' := S \setminus S_{1}'$ 是非空开集，且 $V \subseteq f(U)$、$V' \subseteq f(U')$。

$f(x) = f(x') \in V \cap V'$，所以 $V \cap V' \ne \emptyset$。

又 $U, U'$ 不交，故 $f(U) \cap f(U')$ 中的点只有可能来自交叠，于是 $V \cap V' \subseteq \overline{f(U)} \cap \overline{f(U')}$。

> 续见 proofs/imp.gleason.4.md
