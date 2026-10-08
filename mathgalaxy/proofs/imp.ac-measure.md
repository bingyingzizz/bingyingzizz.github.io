# $\mu_F \ll m$ 的 $\varepsilon$–$\delta$ 刻画 $\implies$ 函数绝对连续 $\iff$ 测度绝对连续
`imp.ac-measure` · 推出 · strong 边 · 根 `../`

`prop.nbv-derivative` NBV 函数的导数与测度的关系 + `thm.ac-epsilon-delta` 绝对连续的 ε–δ 刻画 → `prop.ac-iff-measure-ac` 函数绝对连续 ⟺ 测度绝对连续

**$(\Longleftarrow )$** 设 $\mu_F \ll  m$。应用测度版绝对连续的 $\varepsilon$–$\delta$ 刻画（注意 $\mu _F$ 有限，符合前提）：给定 $\varepsilon > 0$ 取 $\delta > 0$ 使

$$m(E) < \delta\quad  \implies\quad  |\mu_F(E)| < \varepsilon$$

现在取有限个两两不交的区间 $(a_j, b_j) \subseteq [a, b]$ 且 $\sum(b_j - a_j) < \delta$，令 $E = \bigsqcup_j (a_j, b_j)$。则 $m(E) < \delta$，于是

$$\sum_j |F(b_j) - F(a_j)| = \sum_j |\mu_F((a_j, b_j])| \le |\mu_F|(E) < \varepsilon$$

这正是函数绝对连续的定义。

> 续见 proofs/imp.ac-measure.2.md
