# 投射对象 $\iff$ Stonean 空间
`imp.gleason` · 推出 · strong 边 · 根 `../`

`def.projective-object` 投射 / 内射对象 + `def.stone-space` 全不连通与 Stone 空间 + `def.chaus` 紧 Hausdorff 空间范畴 → `thm.gleason` Gleason 定理

$f(x) = f(x') \in V \cap V'$，所以 $V \cap V' \ne \emptyset$。又 $U, U'$ 不交，故 $f(U) \cap f(U')$ 中的点只有可能来自交叠，于是 $V \cap V' \subseteq \overline{f(U)} \cap \overline{f(U')}$。而 $V \cap V'$ 非空是开集、$S$ 极端不连通意味着不交开集的闭包不交（前一条性质），矛盾。

所以 $f$ 是单射，从而是同胚，于是它有截面。∎

> 两个方向用的是**同一条投射性**的两种面貌：一面是「把对象从它的两块拼回来」（$U \sqcup F \to S$ 有截面），另一面是「每个满射有截面」。
