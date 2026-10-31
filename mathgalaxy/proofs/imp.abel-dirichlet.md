# Cauchy 准则 + 分部求和 $\implies$ Abel–Dirichlet 判别法
`imp.abel-dirichlet` · 推出 · strong 边 · 根 `../`

`thm.cauchy-criterion-series` 级数的 Cauchy 准则 → `thm.abel-dirichlet-series` Abel–Dirichlet 判别法

记 $A_n := \sum_{k \le n} a_k$，$A_{-1} := 0$，并设 $|A_n| \le M$ 对一切 $n$ 成立。

**分部求和（Abel 求和）**：对 $m < n$，

$$\sum_{k=m+1}^{n} a_k b_k = \sum_{k=m+1}^{n} (A_k - A_{k-1}) b_k = A_n b_n - A_m b_{m+1} - \sum_{k=m+1}^{n-1} A_k (b_{k+1} - b_k)$$

（把 $A_k b_k - A_{k-1} b_k$ 重排并与下一项合并。）

**Dirichlet 支**：$b_n \downarrow 0$ 单调时 $b_{k+1} - b_k \le 0$，于是右边三项的绝对值分别被下式控制：

> 续见 proofs/imp.abel-dirichlet.2.md
