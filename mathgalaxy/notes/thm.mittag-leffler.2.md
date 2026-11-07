# Mittag-Leffler 定理　`thm.mittag-leffler`　·　说明
根 `../`

（约定 $\operatorname{dist}(z,\emptyset)=+\infty$，故 $\Omega=\mathbb{C}$ 时 $K_n=\overline{B}(0,n)$）。则每个 $K_n$ 紧、$K_n$ 含于 $K_{n+1}$ 的内部、$\bigcup_n K_n=\Omega$。由无聚点性，每个 $K_n$ 只含有限多个 $a_k$。令 $L_k=\min\{\,n:\ a_k\in K_n\,\}$，则 $L_k\to\infty$。记 $n_k=L_k-1$（约定 $K_0=\emptyset$；$L_k=1$ 时 $n_k=0$，$a_k\notin K_0$ 自动成立），就有

$$a_k\notin K_{n_k},\qquad n_k\to\infty.$$

**引理（穷竭的几何性质）。** $\mathbb{C}\setminus K_n$ 的每个**有界**连通分支都含 $\partial\Omega$ 的点。

> 续见 notes/thm.mittag-leffler.3.md
