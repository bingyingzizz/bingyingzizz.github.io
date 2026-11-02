# imp.pcp-paracompact-hausdorff-normal
`imp.pcp-paracompact-hausdorff-normal` · 推出 · strong 边 · 根 `../`

`def.paracompact` 仿紧空间 + `def.hausdorff` Hausdorff 空间 → `thm.paracompact-hausdorff-normal` 仿紧 Hausdorff 空间正规

令 $W := \bigcup \{\, C \in \mathcal{C} : C \cap F \ne \emptyset \,\}$。
- $F \subseteq W$：$y \in F$ 落在某个 $C$ 里，而 $C \subseteq X \setminus F$ 不可能，故 $C \subseteq G_{y}$，于是 $C$ 计入 $W$；
- $x \notin \overline{W}$：计入的每个 $C$ 都含于某个 $G_{y}$，故 $x \notin \overline{C}$；由局部有限族的并的闭包等于闭包之并，$\overline{W}$ 是这些 $\overline{C}$ 的并，不含 $x$。
所以 $W \ni F$ 与 $X \setminus \overline{W} \ni x$ 是不交开集：正则 ✓。
**再证正规。** 设 $A, B$ 不交闭。

对 $x \in A$ 用正则性取开集 $O_{x} \ni x$ 使 $\overline{O_{x}} \cap B = \emptyset$。

开覆盖 $\{\, X \setminus A \,\} \cup \{\, O_{x} \,\}$ 有局部有限开加细 $\mathcal{D}$；

> 续见 proofs/imp.pcp-paracompact-hausdorff-normal.3.md
