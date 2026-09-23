# Hausdorff 极大原理 $\iff$ Tukey 引理
`eq.hausdorff-tukey` · 等价 · strong 边 · 根 `../`

`thm.hausdorff` Hausdorff 极大原理 → `lem.tukey` Tukey 引理

3. 若要包含给定的 $C_{0}$：注意 $\mathcal{C}_{0} = \{ C \in \mathcal{C} : C \supseteq C_{0} \}$ 同样具有有限特征——「$X$ 含 $C_{0}$ 且 $X$ 的每个有限子集是链」正是有限特征的形状（含 $C_{0}$ 是整体性质，不对有限子集设限）。对 $\mathcal{C}_{0}$ 用 Tukey 引理即得包含 $C_{0}$ 的极大链。∎

**Hausdorff 极大原理 ⇒ Tukey 引理**

设 $\mathcal{A}$ 是具有有限特征的非空集合族。把 Hausdorff 极大原理用在偏序集 $(\mathcal{A}, \subseteq )$ 上，得到 $\mathcal{A}$ 的一个**极大链** $\mathcal{C}$（即 $\mathcal{A}$ 中一族在 $\subseteq$ 下两两可比较、且不能再扩大成员的子族）。

令

$$U = \bigcup \{ A : A \in \mathcal{C} \}$$

> 续见 proofs/eq.hausdorff-tukey.3.md
