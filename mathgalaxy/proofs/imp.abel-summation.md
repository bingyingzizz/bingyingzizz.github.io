# Abel 分部求和与 Dirichlet 判别法
`imp.abel-summation` · 推出 · strong 边 · 根 `../`

`def.series` 级数收敛 + `thm.cauchy-criterion-series` 级数的 Cauchy 准则 → `lem.abel-summation` 阿贝尔求和（分部求和）

**恒等式**：由 $a_k=A_k-A_{k-1}$（$A_0=0$），
$$\sum_{k=1}^{n}a_kb_k=\sum_{k=1}^{n}(A_k-A_{k-1})b_k=\sum_{k=1}^{n}A_kb_k-\sum_{k=1}^{n-1}A_kb_{k+1}=A_nb_n-\sum_{k=1}^{n-1}A_k(b_{k+1}-b_k).$$
**Dirichlet 判别法**：设 $|A_n|\le M$、$b_n\downarrow0$。对 $n>m$，
$$\sum_{k=m+1}^{n}a_kb_k=A_nb_n-A_mb_m+\sum_{k=m+1}^{n-1}A_k(b_k-b_{k+1}),$$
故
$$\Bigl|\sum_{k=m+1}^{n}a_kb_k\Bigr|\le M\Bigl(b_n+b_m+\sum_{k=m+1}^{n-1}(b_k-b_{k+1})\Bigr)\le3Mb_{m+1}\to0\qquad(m\to\infty).$$
由 Cauchy 准则（`thm.cauchy-criterion-series`）得 $\sum a_nb_n$ 收敛。$\blacksquare$
