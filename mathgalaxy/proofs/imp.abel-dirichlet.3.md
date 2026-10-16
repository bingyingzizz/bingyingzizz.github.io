# Cauchy 准则 + 分部求和 $\implies$ Abel–Dirichlet 判别法
`imp.abel-dirichlet` · 推出 · strong 边 · 根 `../`

`thm.cauchy-criterion-series` 级数的 Cauchy 准则 → `thm.abel-dirichlet-series` Abel–Dirichlet 判别法

**Abel 支**：$b_n$ 单调有界时令 $b := \lim b_n$，则 $\{b_n - b\}$ 单调趋于 $0$，对 $\sum a_n (b_n - b)$ 用 Dirichlet 支；又 $\sum a_n b$ 收敛，两者相加即得。∎

> 分部求和是这一族判别法的引擎 —— 它把「$\sum a_n b_n$ 的尾巴」换成了「$A_k$ 与 $b$ 的增量」，于是**部分和有界**（$A$）与**单调趋于零**（$b$）各自发挥一次作用。Leibniz 判别法取 $a_n = (-1)^{n}$ 即得。
