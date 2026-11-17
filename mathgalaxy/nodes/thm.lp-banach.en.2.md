# Banach　`thm.lp-banach`
English entry · root `../`
[in graph](../#n=thm.lp-banach)　·　[Chinese page (authoritative)](./thm.lp-banach.md)

Let $\{f_k\} \subseteq L^p$ and $\sum_{k} \|f_k\|_p = B < \infty$. It suffices to prove that $\sum_k f_k$ converges in the $L^p$ norm.

The trick is to treat “pointwise convergence” and “norm convergence” separately: set $G_n = \sum_{k \le n} |f_k|$, $G = \sum_k |f_k|$; then by the MCT

$$\|G_n\|_p \le \sum_{k \le n} \|f_k\|_p \le B \quad \implies \quad \int G^p = \lim_n \int G_n^p \le B^p$$

Hence $G \in L^p$, in particular $G < \infty$ a.e., so $\sum_k f_k$ **converges absolutely a.e.** Denote the limit by $F$.

> continued in nodes/thm.lp-banach.en.3.md
