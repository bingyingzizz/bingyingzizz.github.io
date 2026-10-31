# 仿紧 Hausdorff 空间正规　`thm.paracompact-hausdorff-normal`　·　说明
根 `../`

X \setminus \operatorname{cl} W \ni x$ 是分开 $F$ 与 $x$ 的不交开集。
**第 2 步：正则 $+$ 仿紧 $\implies$ 正规。** 设 $A, B$ 是不交闭集。对每个 $x \in A$，正则性（$x \notin B$）给出开集 $O_{x} \ni x$ 使 $\operatorname{cl} O_{x} \cap B = \emptyset$。于是 $\mathcal{A} := \{\, X \setminus A \,\} \cup \{\, O_{x} : x \in A \,\}$ 是开覆盖，取局部有限开加细 $\mathcal{D}$，令 $U := \bigcup \{\, D \in \mathcal{D} : D \cap A \ne \emptyset \,\}$。同上：$A \subseteq U$，且每个这样的 $D$ 含于某个 $O_{x}$，给出 $\operatorname{cl} D \cap B = \emptyset$，故 $\operatorname{cl} U \cap B = \emptyset$。于是 $U \supseteq A$ 与 $X \setminus \operatorname{cl} U \supseteq B$ 是分开 $A, B$ 的不交开集。∎

> 续见 notes/thm.paracompact-hausdorff-normal.3.md
