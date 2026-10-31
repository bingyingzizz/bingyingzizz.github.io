# imp.pcp-paracompact-hausdorff-normal
`imp.pcp-paracompact-hausdorff-normal` · 推出 · strong 边 · 根 `../`

`def.paracompact` 仿紧空间 + `def.hausdorff` Hausdorff 空间 → `thm.paracompact-hausdorff-normal` 仿紧豪斯多夫空间正规

由局部有限族的并的闭包等于闭包之并，$\operatorname{cl} W$ 是这些 $\operatorname{cl} C$ 的并，不含 $x$。
所以 $W \ni F$ 与 $X \setminus \operatorname{cl} W \ni x$ 是不交开集：正则 ✓。
**再证正规。** 设 $A, B$ 不交闭。对 $x \in A$ 用正则性取开集 $O_{x} \ni x$ 使 $\operatorname{cl} O_{x} \cap B = \emptyset$。开覆盖 $\{\, X \setminus A \,\} \cup \{\, O_{x} \,\}$ 有局部有限开加细 $\mathcal{D}$；令 $U := \bigcup \{\, D \in \mathcal{D} : D \cap A \ne \emptyset \,\}$。同上 $A \subseteq U$，且每个计入的 $D \subseteq O_{x}$ 给出 $\operatorname{cl} D \cap B = \emptyset$，由局部有限性得 $\operatorname{cl} U \cap B = \emptyset$。于是 $U$ 与 $X \setminus \operatorname{cl} U$ 分开 $A, 

> 续见 proofs/imp.pcp-paracompact-hausdorff-normal.3.md
