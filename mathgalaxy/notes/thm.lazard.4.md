# 平坦模的结构定理　`thm.lazard`　·　说明
根 `../`

**证明（对 $m$ 归纳）。** $m=0$ 时取 $k=n$、$z_\ell=y_\ell$、$b_{\ell i}=\delta_{\ell i}$。设 $m\ge 1$。对第一式用引理 1，得 $z_\ell,b_{\ell i}$ 使 $y_i=\sum_\ell z_\ell b_{\ell i}$ 且 $\sum_i b_{\ell i}a_{i1}=0$。对 $j\ge 2$， $0=\sum_i y_i a_{ij}=\sum_\ell z_\ell\Bigl(\sum_i b_{\ell i}a_{ij}\Bigr)=\sum_\ell z_\ell d_{\ell j},\qquad d_{\ell j}:=\sum_i b_{\ell i}a_{ij}.$ 对 $z_\ell$ 与 $(d_{\ell j})_{j\ge2}$ 用归纳假设（$m-1$ 个方程），得 $w_r,e_{r\ell}$ 使 $z_\ell=\sum_r w_r e_{r\ell}$ 且 $\sum_\ell e_{r\ell}d_{\ell j}=0$（$j\ge2$）。令 $c_{ri}=\sum_\ell e_{r\ell}b_{\ell i}$。则 $y_i=\sum_r w_r c_{ri}$，并且 $\sum_i c_{ri}a_{i1}=\sum_\ell e_{r\ell}\Bigl(\sum_i b_{\ell i}a_{i1}\Bigr)=0,\qquad \sum_i c_{ri}a_{ij}=\sum_\ell e_{r\ell}d_{\ell j}=0\ (j\ge2).$ ∎

> 续见 notes/thm.lazard.5.md
