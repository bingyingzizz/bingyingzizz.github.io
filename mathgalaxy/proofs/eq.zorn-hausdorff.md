# 佐恩引理 $\iff$ Hausdorff 极大原理
`eq.zorn-hausdorff` · 等价 · strong 边 · 根 `../`

`lem.zorn` Zorn 引理 → `thm.hausdorff` Hausdorff 极大原理

**佐恩引理 ⇒ Hausdorff 极大原理（路线 2⟹3）**

设 $(P, \preceq )$ 是偏序集，$C_{0} \subseteq P$ 是链。令

$$\mathcal{C} = \{ C \subseteq P : C\text{ 是链} \}$$

按包含关系 $\subseteq$ 排序。给定 $C_{0}$ 时改用 $\mathcal{C}_{0} = \{ C \in \mathcal{C} : C \supseteq C_{0} \}$，它非空（$C_{0} \in \mathcal{C}_{0}$）。

1. **$\mathcal{C}_{0}$ 中每个链有上界**：设 $\mathcal{D} \subseteq \mathcal{C}_{0}$ 是（$\subseteq$）链，即 $\mathcal{D}$ 是一族两两可比较的链。

令 $U = \bigcup \mathcal{D}$。

任取 $x, y \in U$，则有 $D_{1}, D_{2} \in \mathcal{D}$ 使 $x \in D_{1}$、$y \in D_{2}$；

因 $\mathcal{D}$ 是链，不妨设 $D_{1} \subseteq D_{2}$，于是 $x, y \in D_{2}$，而 $D_{2}$ 是链，故 $x$ 与 $y$ 可比。

所以 $U$ 是链。

> 续见 proofs/eq.zorn-hausdorff.2.md
