# imp.compact-hausdorff-normal
`imp.compact-hausdorff-normal` · 推出 · strong 边 · 根 `../`

`def.compact` 紧 + `def.hausdorff` Hausdorff 空间 → `thm.compact-hausdorff-normal` 紧 Hausdorff 空间正规

**第 0 步（预备）**：紧空间的闭子集紧（`prop.compact-basic-operations`）。

**第 1 步：$X$ 满足 $T_{3}$（点 vs 闭集）。** 设 $F \subseteq X$ 闭、$x \notin F$。对每个 $y \in F$，由 $T_{2}$ 取不交开集 $U_{y} \ni y$、$W_{y} \ni x$；令 $G_{y} := U_{y}$，则 $\overline{G_{y}} \subseteq X \setminus W_{y}$，故 $x \notin \overline{G_{y}}$。

族 $\{\, G_{y} : y \in F \,\}$ 是紧集 $F$ 的开覆盖（$F$ 闭于紧空间 $\implies$ 紧），取有限子覆盖 $G_{y_{1}}, \ldots, G_{y_{n}}$。令

$$V := G_{y_{1}} \cup \cdots \cup G_{y_{n}}, \qquad U := X \setminus (\overline{G_{y_{1}}} \cup \cdots \cup \overline{G_{y_{n}}}) .$$

> 续见 proofs/imp.compact-hausdorff-normal.2.md
