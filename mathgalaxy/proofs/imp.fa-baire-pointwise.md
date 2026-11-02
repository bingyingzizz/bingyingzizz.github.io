# Baire $\implies$ 连续点集是稠密 $G_\delta$
`imp.fa-baire-pointwise` · 推出 · strong 边 · 根 `../`

`thm.baire` Baire 纲定理 + `lem.countable-closed-cover` 闭覆盖的内点 → `thm.pointwise-limit-continuity` 连续点集是稠密 G_δ

对每个 $k$，令 $F_{n,k} := \{x : \|f_i(x) - f_j(x)\| \le 1/k,\ \forall i, j \ge n\}$，是闭集（连续函数集的交）。由「$f_n(x)$ 收敛 $\implies$ Cauchy」得 $X = \bigcup_n F_{n,k}$。
由 Baire（闭覆盖有内点），$O_k := \bigcup_n \operatorname{int}F_{n,k}$ 是稠密开集；$O := \bigcap_k O_k$ 是稠密 $G_\delta$。
在 $x \in O$：给 $\varepsilon$，取 $k$ 使 $1/k < \varepsilon/3$；$x \in \operatorname{int}F_{n,k}$ 对某个 $n$，取邻域 $U$ 在其内；

再取 $m \ge n$ 使 $\|f_m(x) - f(x)\| < \varepsilon/3$、取小邻域 $V \subseteq U$ 使 $f_m$ 在 $V$ 上变化 $< \varepsilon/3$。

则 $y \in V$ 时

> 续见 proofs/imp.fa-baire-pointwise.2.md
