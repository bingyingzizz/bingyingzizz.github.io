# Hausdorff 极大原理 $\iff$ Tukey 引理
`eq.hausdorff-tukey` · 等价 · strong 边 · 根 `../`

`thm.hausdorff` Hausdorff 极大原理 → `lem.tukey` Tukey 引理

2. **$U$ 是极大元**：若存在 $B \in \mathcal{A}$ 使 $U \subset B$，则 $\mathcal{C} \cup \{B\}$ 仍是 $\subseteq$链（每个 $A \in \mathcal{C}$ 满足 $A \subseteq U \subseteq B$），与 $\mathcal{C}$ 的极大性矛盾。

故 $U$ 是 $(\mathcal{A}, \subseteq )$ 的极大元。∎

> 这一对证明很典型：先看出「链」这个概念本身具有有限特征，就把 Hausdorff 原理换成了用起来更省事的 Tukey 引理。
