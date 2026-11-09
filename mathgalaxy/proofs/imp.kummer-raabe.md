# Raabe 判别法：Kummer 取 $c_n=n$
`imp.kummer-raabe` · 推出 · strong 边 · 根 `../`

`thm.kummer` Kummer 判别法 → `thm.raabe-test` 拉阿伯判别法（Raabe）

在 Kummer 判别法中取 $c_n=n$。则
$$K_n=n\frac{a_n}{a_{n+1}}-(n+1)=n\Bigl(\frac{a_n}{a_{n+1}}-1\Bigr)-1\to R-1 .$$
$R>1$：$\liminf K_n=R-1>0$，由收敛支得收敛；且 $\sum1/c_n=\sum1/n$ 发散，符合 Kummer 的假设（收敛支只需要 $c_n>0$，此处仍可用）。
$R<1$：$K_n\to R-1<0$，最终 $K_n\le0$；$\sum1/n$ 发散，由发散支得发散。
$R=1$：$\sum1/n$ 与 $\sum1/n^2$ 都给出 $R=1$（前者收敛性相反），故无结论。$\blacksquare$
