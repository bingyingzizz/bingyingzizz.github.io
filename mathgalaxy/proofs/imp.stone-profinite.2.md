# Stone 空间 $\iff$ 投射有限空间
`imp.stone-profinite` · 推出 · strong 边 · 根 `../`

`def.stone-space` 全不连通与 Stone 空间 + `def.profinite` 投射有限空间 + `prop.stone-reflective` Stone 空间是 CHaus 的反射子范畴 + `def.topology-base` 基与子基 → `thm.stone-profinite` Stone ⟺ 投射有限

取 $x \in S$ 与开邻域 $O \ni x$。令 $\mathcal{F} = \{K : K \text{ 闭开},\ x \in K\} \cup \{\, O^{c} \,\}$，则 $\bigcap \mathcal{F} = \emptyset$：$O^{c}$ 与「含 $x$ 的闭开集」的交为空，因为 $x \notin O^{c}$。由 $S$ 紧，存在有限个 $K_{1}, \ldots, K_{n}$ 使

$$(K_{1} \cap \ldots \cap K_{n}) \cap O^{c} = \emptyset$$

令 $U := K_{1} \cap \ldots \cap K_{n}$，它是闭开的、含 $x$、且 $U \subseteq O$。所以闭开集构成基。

> 续见 proofs/imp.stone-profinite.3.md
