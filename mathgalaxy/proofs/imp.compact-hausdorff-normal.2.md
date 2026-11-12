# imp.compact-hausdorff-normal
`imp.compact-hausdorff-normal` · 推出 · strong 边 · 根 `../`

`def.compact` 紧 + `def.hausdorff` Hausdorff 空间 → `def.normal-space` 正规空间

族 $\{U_{a}\}_{a \in A}$ 覆盖紧集 $A$，取有限个 $a_{1}, \ldots, a_{m}$ 使 $A \subseteq U := U_{a_{1}} \cup \cdots \cup U_{a_{m}}$。令 $V := V_{a_{1}} \cap \cdots \cap V_{a_{m}}$。则 $U, V$ 开、$A \subseteq U$、$B \subseteq V$，且 $U \cap V = \emptyset$：若 $x \in U_{a_{j}}$ 对某个 $j$，则 $x \notin V_{a_{j}} \supseteq V$。

所以任意不交闭集都能被开集分离，配合 $T_{1}$ 得 $X$ 正规。∎

⭐ 这是**直接证明**，没有走 那条（紧 $\implies$ 仿紧 $\implies$ 正规）：那条（紧 $\implies$ 仿紧 $\implies$ 正规）当然也对，但这里只用了紧性取有限子覆盖与 Hausdorff 分点，两步都是定义级别的操作。

> 源头是特例或更强的条件、目标是独立的一般定义，这条只作逻辑包含、不分层。
