# 平坦模的结构定理　`thm.lazard`　·　说明
根 `../`

**证明。** 取有限表现 $R^m\xrightarrow{A}R^n\xrightarrow{\pi}P\to 0$，其中 $A e_j=\sum_i e_i a_{ij}$。令 $y_i=\varphi(\pi(e_i))\in F$。由 $\pi(Ae_j)=0$ 得 $\sum_i y_i a_{ij}=0$（$j=1,\ldots,m$）。引理 2 给出 $z_\ell\in F$、$b_{\ell i}\in R$ 使 $y_i=\sum_\ell z_\ell b_{\ell i}$ 且 $\sum_i b_{\ell i}a_{ij}=0$。定义右线性映射 $\tilde\psi:R^n\to R^k$，$\tilde\psi(e_i)=\sum_\ell b_{\ell i}e_\ell$。则 $\tilde\psi(Ae_j)=\sum_i a_{ij}\tilde\psi(e_i)=\sum_\ell\Bigl(\sum_i b_{\ell i}a_{ij}\Bigr)e_\ell=0,$ 故 $\tilde\psi$ 过 $\operatorname{im}A$、诱导 $\psi:P\to R^k$。再令 $\chi:R^k\to F$，$\chi(e_\ell)=z_\ell$。则 $\chi\psi(\pi e_i)=\sum_\ell z_\ell b_{\ell i}=y_i=\varphi(\pi e_i)$，故 $\varphi=\chi\psi$。∎

> 续见 notes/thm.lazard.7.md
