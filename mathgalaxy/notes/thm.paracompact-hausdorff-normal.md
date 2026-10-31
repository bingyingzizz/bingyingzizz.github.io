# 仿紧 Hausdorff 空间正规　`thm.paracompact-hausdorff-normal`　·　说明
根 `../`

**第 1 步：仿紧 Hausdorff $\implies$ 正则。** 设 $x \in X$、$F \subseteq X$ 闭、$x \notin F$。对每个 $y \in F$，Hausdorff 性给出不交开集 $O_{1} \ni y$、$O_{2} \ni x$；取 $G_{y} := O_{1}$，由 $O_{1} \subseteq X \setminus O_{2}$ 得 $\operatorname{cl} G_{y} \subseteq X \setminus O_{2}$，故 $x \notin \operatorname{cl} G_{y}$。于是
$$\mathcal{A} := \{\, X \setminus F \,\} \cup \{\, G_{y} : y \in F \,\}$$
是开覆盖。取它的局部有限开加细 $\mathcal{C}$，令 $W := \bigcup \{\, C \in \mathcal{C} : C \cap F \ne \emptyset \,\}$。则 $F \subseteq W$：$F$ 的点 $y$ 落在某个 $C$ 里，而 $C \subseteq X \setminus F$ 不可能（它含 $y$），故 $C \subseteq G_{y}$，于是 $C$ 被计入 $W$。另一方面，每个计入 $W$ 的 $C$ 都落在某个 $G_{y}$ 里，故 $x \notin \operatorname{cl} C$；由局部有限族的「并的闭包等于闭包之并」，$\operatorname{cl} W = \bigcup \{\, \operatorname{cl} C : C \cap F \ne \emptyset \,\}$ 不含 $x$。所以 $W \ni F$ 与 $

> 续见 notes/thm.paracompact-hausdorff-normal.2.md
