# imp.pcp-paracompact-hausdorff-normal
`imp.pcp-paracompact-hausdorff-normal` · 推出 · strong 边 · 根 `../`

`def.paracompact` 仿紧空间 + `def.hausdorff` Hausdorff 空间 → `thm.paracompact-hausdorff-normal` 仿紧豪斯多夫空间正规

**先证正则。** 设 $x \notin F$、$F$ 闭。对每个 $y \in F$ 取不交开集 $O_{1} \ni y$、$O_{2} \ni x$ 并令 $G_{y} := O_{1}$：由 $O_{1} \subseteq X \setminus O_{2}$ 得 $\operatorname{cl} G_{y} \cap O_{2} = \emptyset$，故 $x \notin \operatorname{cl} G_{y}$。开覆盖 $\{\, X \setminus F \,\} \cup \{\, G_{y} \,\}$ 由仿紧性有局部有限开加细 $\mathcal{C}$；令 $W := \bigcup \{\, C \in \mathcal{C} : C \cap F \ne \emptyset \,\}$。
- $F \subseteq W$：$y \in F$ 落在某个 $C$ 里，而 $C \subseteq X \setminus F$ 不可能，故 $C \subseteq G_{y}$，于是 $C$ 计入 $W$；
- $x \notin \operatorname{cl} W$：计入的每个 $C$ 都含于某个 $G_{y}$，故 $x \notin \operatorname{cl} C$；

> 续见 proofs/imp.pcp-paracompact-hausdorff-normal.2.md
