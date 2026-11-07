# 平坦模的结构定理　`thm.lazard`　·　说明
根 `../`

**记号与约定。** 固定环 $R$；$F$ 是右 $R$-模，未加说明时「模」指左 $R$-模。$F$ 平坦指 $F\otimes_R -$ 是左 $R$-模范畴上的正合函子。对左理想 $I\subseteq R$，包含 $I\to R$ 张量 $F$ 后仍单，即 $F\otimes_R I\to F$ 单——这是下面唯一用到的平坦性输入。

**$(\Longleftarrow)$ 平坦性。** 有限生成自由模 $R^n$ 平坦（$R^n\otimes_R -$ 就是 $(-)^{\oplus n}$，正合）；张量积保余极限，故 $F\otimes_R\varinjlim_i M_i=\varinjlim_i(F\otimes_R M_i)$；正合列取滤过余极限仍正合。于是若 $F=\varinjlim_i F_i$、每个 $F_i$ 有限自由，则对任意左模正合列，张量后是滤过余极限个正合列，仍正合。故 $F$ 平坦。∎

**引理 1（单方程）。** 设 $y_1,\ldots,y_n\in F$、$a_1,\ldots,a_n\in R$ 满足 $\sum_i y_i a_i=0$。则存在 $k\ge 0$、$z_1,\ldots,z_k\in F$ 与 $b_{\ell i}\in R$（$1\le\ell\le k$，$1\le i\le n$）使得 $y_i=\sum_{\ell=1}^k z_\ell b_{\ell i}\quad(1\le i\le n),\qquad \sum_{i=1}^n b_{\ell i}a_i=0\quad(1\le\ell\le k).$

> 续见 notes/thm.lazard.2.md
