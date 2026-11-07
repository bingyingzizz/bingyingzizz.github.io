# 平坦模的结构定理　`thm.lazard`　·　说明
根 `../`

**证明。** 令 $I=Ra_1+\cdots+Ra_n\subseteq R$，这是左理想。取左模满射 $\pi:R^n\to I$，$\pi(e_i)=a_i$，核 $K=\ker\pi$；于是 $0\to K\to R^n\to I\to 0$ 正合。张量 $F$ 得正合列 $F\otimes_R K\longrightarrow F\otimes_R R^n\longrightarrow F\otimes_R I\longrightarrow 0 .$ 把 $\theta=\sum_i y_i\otimes a_i\in F\otimes_R I$ 沿 $F\otimes I\to F\otimes R=F$ 的像是 $\sum_i y_i a_i=0$；由平坦性 $F\otimes I\to F$ 单，故 $\theta=0$。另一方面 $\theta$ 是 $(y_1,\ldots,y_n)\in F\otimes_R R^n=F^n$ 的像，正合性给出 $(y_i)\in\operatorname{im}(F\otimes K\to F^n)$：存在 $k$、$z_\ell\in F$ 与 $k^{(\ell)}=(b_{\ell 1},\ldots,b_{\ell n})\in K$ 使 $y_i=\sum_\ell z_\ell b_{\ell i}$。又 $k^{(\ell)}\in K$ 即 $\sum_i b_{\ell i}a_i=0$。∎

> 续见 notes/thm.lazard.3.md
