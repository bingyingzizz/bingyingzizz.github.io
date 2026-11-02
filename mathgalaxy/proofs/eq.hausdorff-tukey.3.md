# Hausdorff 极大原理 $\iff$ Tukey 引理
`eq.hausdorff-tukey` · 等价 · strong 边 · 根 `../`

`thm.hausdorff` Hausdorff 极大原理 → `lem.tukey` Tukey 引理

把 Hausdorff 极大原理用在偏序集 $(\mathcal{A}, \subseteq )$ 上，得到 $\mathcal{A}$ 的一个**极大链** $\mathcal{C}$（即 $\mathcal{A}$ 中一族在 $\subseteq$ 下两两可比较、且不能再扩大成员的子族）。

令

$$U = \bigcup \{ A : A \in \mathcal{C} \}$$

1. **$U \in \mathcal{A}$**：由有限特征，只需证 $U$ 的每个有限子集属于 $\mathcal{A}$。

设 $S \subseteq U$ 有限，则每个 $s \in S$ 落在某个 $A_s \in \mathcal{C}$ 中；

$\mathcal{C}$ 是 $\subseteq$链而 $S$ 有限，故其中必有最大的 $A_{0}$ 包含 $S$（即 $S \subseteq A_{0}$）。

> 续见 proofs/eq.hausdorff-tukey.4.md
