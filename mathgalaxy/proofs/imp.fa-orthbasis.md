# 正交分解 $\implies$ 正交基存在（Zorn）
`imp.fa-orthbasis` · 推出 · strong 边 · 根 `../`

`thm.projection-subspace` 闭子空间的正交投影 → `thm.orthonormal-basis-exists` 正交基存在

令 $\mathcal{S} := \{A \subseteq H : A$ 标准正交$\}$，按包含成偏序。

若 $\mathcal{T}$ 全序，令 $A := \bigcup_{B \in \mathcal{T}} B$：任取 $x, y \in A$，它们分别落在某个 $B_1 \subseteq B_2$ 里，故正交且单位长；

所以 $A \in \mathcal{S}$ 且是上界。
Zorn 给极大元 $M$。

若 $\overline{\operatorname{span} M} \ne H$，由正交分解取 $0 \ne z \perp \overline{\operatorname{span} M}$，则 $M \cup \{z/\|z\|\}$ 仍标准正交且严格更大，矛盾。

$\blacksquare$

> Zorn 在这里只干一件事：把「不断加向量」这个超限过程一次走完。
