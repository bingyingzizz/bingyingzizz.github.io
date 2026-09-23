# 符号测度 + 正集的封闭性 $\implies$ Hahn 分解
`imp.hahn` · 推出 · strong 边 · 根 `../`

`def.signed-measure` 符号测度 + `prop.positive-set-closure` 正集的封闭性 → `thm.hahn-decomposition` Hahn 分解定理

$$\nu(B) = \nu(A) - \sum_k \nu(A_k) > 0$$

说明 $P \cup B$ 是正集且 $\nu(P \cup B) = m + \nu(B) > m$，与 $m$ 的定义矛盾。故 $N$ 必为负集，$X = P \sqcup  N$ 就是 Hahn 分解，**存在性得证**。

**⑧ 唯一性。** 设 $P' \sqcup  N'$ 是另一对。则 $P \setminus P' \subseteq P$（正集）且 $\subseteq N'$（负集），所以它既是正集又是负集 —— 只能是零集；同理 $P' \setminus P$ 也是零集。故 $P \triangle  P' = N \triangle  N'$ 是 $\nu$零集。∎

> ⭐ 「取最小的 $n$」是整段证明的技术核心：因为 $n$ 取最小，后面才能让 $\nu(F) \ge -1/n_{k-1}$ 一路通过 $k \to \infty$ 得到 $\nu(F) \ge 0$。
