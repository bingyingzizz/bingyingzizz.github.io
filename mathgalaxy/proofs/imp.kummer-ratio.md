# 比值判别法：Kummer 取 $c_n=1$
`imp.kummer-ratio` · 推出 · strong 边 · 根 `../`

`thm.kummer` Kummer 判别法 → `thm.ratio-test` 比值判别法（d'Alembert）

在 Kummer 判别法（`thm.kummer`）中取 $c_n=1$。则 $K_n=\frac{a_n}{a_{n+1}}-1\to q-1$。
$q>1$：$\liminf K_n=q-1>0$，由 Kummer 的收敛支得 $\sum a_n$ 收敛。
$q<1$：$K_n\to q-1<0$，故最终 $K_n\le0$；又 $\sum 1/c_n=\sum1$ 发散，由 Kummer 的发散支得发散。
$q=1$：$K_n\to0$，Kummer 两支都不适用（$\sum1/n$ 与 $\sum1/n^2$ 都是 $q=1$ 而敛散不同）。$\blacksquare$
