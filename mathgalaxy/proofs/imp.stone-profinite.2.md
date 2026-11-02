# Stone 空间 $\iff$ 投射有限空间
`imp.stone-profinite` · 推出 · strong 边 · 根 `../`

`def.stone-space` 全不连通与 Stone 空间 + `def.profinite` 投射有限空间 + `prop.stone-reflective` Stone 空间是紧 Hausdorff 空间的反射子范畴 + `def.topology-base` 基与子基 → `thm.stone-profinite` Stone ⟺ 投射有限

由 $S$ 紧，存在有限个 $K_{1}, \ldots, K_{n}$ 使

$$(K_{1} \cap \ldots \cap K_{n}) \cap O^{c} = \emptyset$$

令 $U := K_{1} \cap \ldots \cap K_{n}$，它是闭开的、含 $x$、且 $U \subseteq O$。所以闭开集构成基。

现在看**有限闭开划分**的集合：$\mathcal{E} := \{\, E \subseteq \operatorname{Open}(S) \setminus \{\emptyset\} : E \text{ 有限},\ E \text{ 中元素两两不交且闭开},\ \bigcup E = S \,\}$，按「加细」构成一个逆向系统（加细是部分序，任意两个划分都有公共加细，所以它是有向的）。

> 续见 proofs/imp.stone-profinite.3.md
