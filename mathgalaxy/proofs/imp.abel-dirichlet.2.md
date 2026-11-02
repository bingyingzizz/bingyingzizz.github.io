# Cauchy 准则 + 分部求和 $\implies$ Abel–Dirichlet 判别法
`imp.abel-dirichlet` · 推出 · strong 边 · 根 `../`

`thm.cauchy-criterion-series` 级数的 Cauchy 准则 → `thm.abel-dirichlet-series` Abel–Dirichlet 判别法

$$|A_n b_n| + |A_m b_{m+1}| + \sum_{k=m+1}^{n-1} |A_k|\,|b_{k+1} - b_k| \le M\Bigl( |b_n| + |b_{m+1}| + \sum_{k=m+1}^{n-1} (b_k - b_{k+1}) \Bigr) \le M\bigl( b_n + b_{m+1} + b_{m+1} - b_n \bigr) \le 4M\, b_{m+1}$$

最后一步用了**望远镜和** $\sum_{k=m+1}^{n-1}(b_k - b_{k+1}) = b_{m+1} - b_n$。由 $b \to 0$，给定 $\varepsilon > 0$ 取 $m$ 足够大便可使尾巴 $< \varepsilon$；由级数的 Cauchy 准则，$\sum a_n b_n$ 收敛。

> 续见 proofs/imp.abel-dirichlet.3.md
