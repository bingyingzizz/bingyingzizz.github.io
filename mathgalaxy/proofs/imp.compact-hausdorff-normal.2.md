# imp.compact-hausdorff-normal
`imp.compact-hausdorff-normal` · 推出 · strong 边 · 根 `../`

`def.compact` 紧 + `def.hausdorff` Hausdorff 空间 → `thm.compact-hausdorff-normal` 紧 Hausdorff 空间正规

则 $U$ 开（有限个闭集之并闭）、$V$ 开、$F \subseteq V$；且 $x \notin \overline{G_{y_{i}}}$ 给出 $x \in U$；最后由 $G_{y_{i}} \subseteq \overline{G_{y_{i}}}$ 得 $U \cap V = \emptyset$。所以 $x$ 与 $F$ 被不交开集分开 ✓。

**第 2 步：$X$ 满足 $T_{4}$（闭集 vs 闭集）。** 设 $A, B$ 不交闭。对每个 $x \in A$，用第 1 步（把闭集 $B$ 与点 $x$ 分开）得到不交开集 $O_{x} \ni x$、$W_{x} \supseteq B$。族 $\{\, O_{x} : x \in A \,\}$ 覆盖紧集 $A$，取有限子覆盖 $O_{x_{1}}, \ldots, O_{x_{m}}$。令

$$U := O_{x_{1}} \cup \cdots \cup O_{x_{m}}, \qquad V := W_{x_{1}} \cap \cdots \cap W_{x_{m}} .$$

> 续见 proofs/imp.compact-hausdorff-normal.3.md
