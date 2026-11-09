# imp.compact-hausdorff-normal
`imp.compact-hausdorff-normal` · 推出 · strong 边 · 根 `../`

`def.compact` 紧 + `def.hausdorff` Hausdorff 空间 → `def.normal-space` 正规空间

设 $X$ 紧 Hausdorff，$A, B \subseteq X$ 是不交闭集。先注意 $X$ 是 $T_{1}$：Hausdorff 空间中单点闭（`def.hausdorff`）。

**分离 $A, B$。** 对每个 $a \in A$ 与 $b \in B$，由 Hausdorff 取不交开集 $U_{a,b} \ni a$、$V_{a,b} \ni b$。固定 $a$：族 $\{V_{a,b}\}_{b \in B}$ 覆盖 $B$，而 $B$ 是紧空间 $X$ 的闭子集，故紧；取有限个 $b_{1}, \ldots, b_{n}$ 使 $B \subseteq V_{a} := V_{a,b_{1}} \cup \cdots \cup V_{a,b_{n}}$。令 $U_{a} := U_{a,b_{1}} \cap \cdots \cap U_{a,b_{n}}$，则 $a \in U_{a}$ 开，且 $U_{a} \cap V_{a} = \emptyset$。

> 续见 proofs/imp.compact-hausdorff-normal.2.md
