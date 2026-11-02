# Stone 空间 $\iff$ 投射有限空间
`imp.stone-profinite` · 推出 · strong 边 · 根 `../`

`def.stone-space` 全不连通与 Stone 空间 + `def.profinite` 投射有限空间 + `prop.stone-reflective` Stone 空间是紧 Hausdorff 空间的反射子范畴 + `def.topology-base` 基与子基 → `thm.stone-profinite` Stone ⟺ 投射有限

**（$\Longleftarrow$）** 投射有限空间是 Stone 空间的有向极限。Stone 空间对极限封闭（Stone 空间是反射子范畴的推论），而有限离散空间显然是 Stone 空间，所以极限仍是 Stone。∎

**（$\Longrightarrow$）** 设 $S$ 是 Stone 空间。先证**闭开集构成拓扑基**。

取 $x \in S$ 与开邻域 $O \ni x$。

令 $\mathcal{F} = \{K : K \text{ 闭开},\ x \in K\} \cup \{\, O^{c} \,\}$，则 $\bigcap \mathcal{F} = \emptyset$：$O^{c}$ 与「含 $x$ 的闭开集」的交为空，因为 $x \notin O^{c}$。

> 续见 proofs/imp.stone-profinite.2.md
