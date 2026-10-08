# Hausdorff 极大原理 $\iff$ Tukey 引理
`eq.hausdorff-tukey` · 等价 · strong 边 · 根 `../`

`thm.hausdorff` Hausdorff 极大原理 → `lem.tukey` Tukey 引理

**Tukey 引理 ⇒ Hausdorff 极大原理**

设 $(P, \preceq )$ 是偏序集，$C_{0} \subseteq P$ 是链。令 $\mathcal{C} = \{ C \subseteq P : C$ 是链 }。

1. **$\mathcal{C}$ 具有有限特征**：对任意 $X \subseteq P$，

$X$ 是链 $\iff X$ 中任两元素可比 $\iff X$ 的每个有限子集是链 $\iff X$ 的每个有限子集属于 $\mathcal{C}$。

（最后一个 $\Longleftarrow$ 方向：任取 $x, y \in X$，则 {x, y} 是 $X$ 的有限子集，属于 $\mathcal{C}$，故 $x$ 与 $y$ 可比。）

> 续见 proofs/eq.hausdorff-tukey.2.md
