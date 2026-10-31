# 函数绝对连续 ⟺ 测度绝对连续　`prop.ac-iff-measure-ac`　·　说明
根 `../`

**$(\Longleftarrow )$** 由测度的绝对连续的 $\varepsilon$–$\delta$ 刻画：$\mu_F \ll  m$ 给出「$m(E) < \delta \implies |\mu_F(E)| < \varepsilon$」。取 $E$ 为区间的有限不交并，就直接得到函数版的绝对连续性。

**$(\implies )$** 设 $E \in \mathfrak{B}_\mathbb{R}$ 且 $m(E) = 0$。要证 $\mu_F(E) = 0$。取递减开集列 $U_1 \supseteq U_2 \supseteq \cdots \supseteq E$ 使 $m(U_k) < \delta$（由正则性）。每个 $U_k$ 是区间的可数不交并，由函数的绝对连续性与 $m(U_k) < \delta$ 得 $|\mu_F(U_j)| < \varepsilon$；再由测度的上连续性与 $\bigcap U_k = E$ 得 $|\mu_F(E)| \le \varepsilon$。由 $\varepsilon$ 任意，$\mu_F(E) = 0$。∎

⭐ 这条把两个「绝对连续」**接上了**：函数的和测度的。从此「绝对连续函数」这个微积分里的概念有了测度论的解释。
