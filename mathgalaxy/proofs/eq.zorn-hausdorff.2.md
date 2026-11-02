# 佐恩引理 $\iff$ Hausdorff 极大原理
`eq.zorn-hausdorff` · 等价 · strong 边 · 根 `../`

`lem.zorn` Zorn 引理 → `thm.hausdorff` Hausdorff 极大原理

又每个 $D \in \mathcal{D}$ 都 $\supseteq C_{0}$，故 $U \supseteq C_{0}$，即 $U \in \mathcal{C}_{0}$，它是 $\mathcal{D}$ 的上界。
2. 由佐恩引理，$\mathcal{C}_{0}$ 有极大元 $M$。$M$ 是包含 $C_{0}$ 的链，且不能再变大，即 $M$ 是包含 $C_{0}$ 的极大链。∎

**Hausdorff 极大原理 ⇒ 佐恩引理（路线 3⟹2）**

设 $(P, \preceq )$ 是非空偏序集，且 $P$ 的每个链都有上界。

1. 由 Hausdorff 极大原理（取 $C_{0} = \emptyset$），$P$ 存在极大链 $M$。
2. M 是链，故由题设有上界 $u \in P$。
3. **断言 $u$ 是极大元**：若不然，存在 $v \in P$ 使 $u \prec v$。

则 $M \cup \{v\}$ 仍是链——任取 $m \in M$，由 $m \preceq u \prec v$ 及传递性得 $m \preceq v$，故 $m$ 与 $v$ 可比。

于是 $M \subset M \cup \{v\}$ 是一个更大的链，与 $M$ 的极大性矛盾。

故 $u$ 是 $P$ 的极大元。∎
