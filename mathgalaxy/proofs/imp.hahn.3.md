# 符号测度 + 正集的封闭性 $\implies$ Hahn 分解
`imp.hahn` · 推出 · strong 边 · 根 `../`

`def.signed-measure` 符号测度 + `prop.positive-set-closure` 正集的封闭性 → `thm.hahn-decomposition` Hahn 分解定理

**⑤ 若操作终止**，剩下的 $B = A \setminus \bigcup_k A_k$ 就是正集（因为已经没有负子集可以挖了）。
**⑥ 若操作不终止**，取 $B = A \setminus \bigcup_k A_k$。由可数可加性

$$\nu(A) = \nu(B) + \sum_k \nu(A_k)$$

而 $\sum_k |\nu(A_k)| < \infty$（因为左边有限），特别地 $\nu(A_k) \to 0$，这迫使 $n_k \to \infty$，从而对任意 $F \subseteq B$：若 $\nu(F) < -1/n_{k-1}$，就与 $n_k$ 的**最小性**矛盾。于是 $\nu(F) \ge -1/n_{k-1}$ 对一切 $k$ 成立，令 $k \to \infty$ 得 $\nu(F) \ge 0$。故 $B$ 也是正集。

**⑦ 矛盾。** 由 ⑤⑥，$A$ 中含正集 $B$。于

> 续见 proofs/imp.hahn.4.md
