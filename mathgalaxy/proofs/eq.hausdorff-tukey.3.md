# Hausdorff 极大原理 $\iff$ Tukey 引理
`eq.hausdorff-tukey` · 等价 · strong 边 · 根 `../`

`thm.hausdorff` Hausdorff 极大原理 → `lem.tukey` Tukey 引理

1. **$U \in \mathcal{A}$**：由有限特征，只需证 $U$ 的每个有限子集属于 $\mathcal{A}$。设 $S \subseteq U$ 有限，则每个 $s \in S$ 落在某个 $A_s \in \mathcal{C}$ 中；$\mathcal{C}$ 是 $\subseteq$链而 $S$ 有限，故其中必有最大的 $A_{0}$ 包含 $S$（即 $S \subseteq A_{0}$）。因为 $A_{0} \in \mathcal{A}$ 且 $\mathcal{A}$ 具有有限特征，$A_{0}$ 的每个有限子集都属于 $\mathcal{A}$，特别地 $S \in \mathcal{A}$。故 $U$ 的每个有限子集属于 $\mathcal{A}$，从而 $U \in \mathcal{A}$。

> 续见 proofs/eq.hausdorff-tukey.4.md
