# 佐恩引理 $\iff$ Hausdorff 极大原理
`eq.zorn-hausdorff` · 等价 · strong 边 · 根 `../`

`lem.zorn` 佐恩引理 → `thm.hausdorff` Hausdorff 极大原理

1. **$\mathcal{C}_{0}$ 中每个链有上界**：设 $\mathcal{D} \subseteq \mathcal{C}_{0}$ 是（$\subseteq$）链，即 $\mathcal{D}$ 是一族两两可比较的链。令 $U = \bigcup \mathcal{D}$。任取 $x, y \in U$，则有 $D_{1}, D_{2} \in \mathcal{D}$ 使 $x \in D_{1}$、$y \in D_{2}$；因 $\mathcal{D}$ 是链，不妨设 $D_{1} \subseteq D_{2}$，于是 $x, y \in D_{2}$，而 $D_{2}$ 是链，故 $x$ 与 $y$ 可比。所以 $U$ 是链。又每个 $D \in \mathcal{D}$ 都 $\supseteq C_{0}$，故 $U \supseteq C_{0}$，即 $U \in \mathcal{C}_{0}$，它是 $\mathcal{D}$ 的上界。

2. 由佐恩引理，$\mathcal{C}_{0}$ 有极大元 $M$。$M$ 是包含 $C_{0}$ 的链，且不能再变大，即 $M$ 是包含 $C_{0}$ 的极大链。∎

**Hausdorff 极大原理 ⇒ 佐恩引理（路线 3⟹2）**

设 $(P, \preceq )$ 是非空偏序集，且 $P$ 的每个链都有上界。

> 续见 proofs/eq.zorn-hausdorff.3.md
