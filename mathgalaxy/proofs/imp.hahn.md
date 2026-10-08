# 符号测度 + 正集的封闭性 $\implies$ Hahn 分解
`imp.hahn` · 推出 · strong 边 · 根 `../`

`def.signed-measure` 符号测度 + `prop.positive-set-closure` 正集的封闭性 → `thm.hahn-decomposition` Hahn 分解定理

**① 先把 $\nu$ 的无穷值甩掉。** 不妨设 $\nu$ 不取 $\infty$（若 $\nu$ 不取 $-\infty$ 就改证 $-\nu$）。于是 $\nu(X) < \infty$ 中的「上方」是安全的。

**② 挑一个「最大的正集」。** 令

$$m := \sup\{ \nu(E) : E\text{ 是正集} \}, $$

则 $m < \infty$（因为 $\nu$ 不取 $\infty$ 而 $\nu (E) \le \nu (X)$ 型估计受控）。取一列正集 $\{P_j\}$ 使 $\nu(P_j) \to m$，令

$$P = \bigcup_j P_j$$

由正集的可数并仍是正集，$P$ 是正集；且 $\nu(P) = m$（正集的不交化 + 可数可加）。

> 续见 proofs/imp.hahn.2.md
