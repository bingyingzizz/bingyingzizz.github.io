# $\mu_F \ll m$ 的 $\varepsilon$–$\delta$ 刻画 $\implies$ 函数绝对连续 $\iff$ 测度绝对连续
`imp.ac-measure` · 推出 · strong 边 · 根 `../`

`prop.nbv-derivative` NBV 函数的导数与测度的关系 + `thm.ac-epsilon-delta` 绝对连续的 ε–δ 刻画 → `prop.ac-iff-measure-ac` 函数绝对连续 ⟺ 测度绝对连续

**$(\implies )$** 设 $F$ 绝对连续，$E \in \mathfrak{B}_\mathbb{R}$、$m(E) = 0$，要证 $\mu_F(E) = 0$。由 $\mu _F$ 的正则性取递减开集列 $U_1 \supseteq U_2 \supseteq \cdots \supseteq E$ 使 $m(U_k) < \delta$、$\bigcap_k U_k = E$。每个 $U_{k}$ 是区间的可数不交并，把函数绝对连续性的条件用在 $U_{k}$ 的有限截断上，得到 $|\mu_F(U_j)| < \varepsilon$；再由测度的上连续性（递减列，首项有限）得

$$|\mu_F(E)| = \lim_j |\mu_F(U_j)| \le \varepsilon$$

由 $\varepsilon$ 任意，$\mu_F(E) = 0$。故 $\mu_F \ll  m$。∎
