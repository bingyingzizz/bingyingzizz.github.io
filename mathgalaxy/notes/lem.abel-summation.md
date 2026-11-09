# 阿贝尔求和（分部求和）　`lem.abel-summation`　·　说明
根 `../`

**证明**：由 $a_k=A_k-A_{k-1}$，

$$\sum_{k=1}^{n}a_kb_k=\sum_{k=1}^{n}(A_k-A_{k-1})b_k=\sum_{k=1}^{n}A_kb_k-\sum_{k=1}^{n-1}A_kb_{k+1}=A_nb_n-\sum_{k=1}^{n-1}A_k(b_{k+1}-b_k).$$

**推论的证明**：设 $|A_n|\le M$、$b_n\downarrow0$。对 $n>m$，

$$\Bigl|\sum_{k=m+1}^{n}a_kb_k\Bigr|=\Bigl|A_nb_n-A_mb_m+\sum_{k=m+1}^{n-1}A_k(b_k-b_{k+1})\Bigr|\le M\Bigl(b_n+b_m+\sum_{k=m+1}^{n-1}(b_k-b_{k+1})\Bigr)\le3Mb_{m+1}\to0,$$

由 Cauchy 准则得收敛（`thm.cauchy-criterion-series`）。

📌 这条是 `thm.abel-dirichlet-series` 里 Dirichlet 判别法的离散原型：后者把 $A_n$ 换成部分和、$b_n$ 换成 $b(x)$，连续情形用第二中值定理。
