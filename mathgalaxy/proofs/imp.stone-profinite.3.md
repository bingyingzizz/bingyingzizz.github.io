# Stone 空间 $\iff$ 投射有限空间
`imp.stone-profinite` · 推出 · strong 边 · 根 `../`

`def.stone-space` 全不连通与 Stone 空间 + `def.profinite` 投射有限空间 + `prop.stone-reflective` Stone 空间是 CHaus 的反射子范畴 + `def.topology-base` 基与子基 → `thm.stone-profinite` Stone ⟺ 投射有限

现在看**有限闭开划分**的集合：$\mathcal{E} := \{\, E \subseteq \operatorname{Open}(S) \setminus \{\emptyset\} : E \text{ 有限},\ E \text{ 中元素两两不交且闭开},\ \bigcup E = S \,\}$，按「加细」构成一个逆向系统（加细是部分序，任意两个划分都有公共加细，所以它是有向的）。每个划分 $E$ 给出商映射 $S \to E$（送 $x$ 到包含它的那一块），目标有限离散。

> 续见 proofs/imp.stone-profinite.4.md
