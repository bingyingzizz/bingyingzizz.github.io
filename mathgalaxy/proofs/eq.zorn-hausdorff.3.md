# 佐恩引理 $\iff$ Hausdorff 极大原理
`eq.zorn-hausdorff` · 等价 · strong 边 · 根 `../`

`lem.zorn` 佐恩引理 → `thm.hausdorff` Hausdorff 极大原理

1. 由 Hausdorff 极大原理（取 $C_{0} = \emptyset$），$P$ 存在极大链 $M$。

2. M 是链，故由题设有上界 $u \in P$。

3. **断言 $u$ 是极大元**：若不然，存在 $v \in P$ 使 $u \prec v$。则 $M \cup \{v\}$ 仍是链——任取 $m \in M$，由 $m \preceq u \prec v$ 及传递性得 $m \preceq v$，故 $m$ 与 $v$ 可比。于是 $M \subset M \cup \{v\}$ 是一个更大的链，与 $M$ 的极大性矛盾。

故 $u$ 是 $P$ 的极大元。∎
