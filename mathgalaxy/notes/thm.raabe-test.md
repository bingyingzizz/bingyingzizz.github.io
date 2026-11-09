# 拉阿伯判别法（Raabe）　`thm.raabe-test`　·　说明
根 `../`

**与 Kummer 判别法的关系**：在 Kummer 判别法中取 $c_n=n$，则

$$K_n=c_n\frac{a_n}{a_{n+1}}-c_{n+1}=n\frac{a_n}{a_{n+1}}-(n+1)=n\Bigl(\frac{a_n}{a_{n+1}}-1\Bigr)-1\to R-1 .$$

$R>1$ 时 $K_n\ge\delta>0$，且 $\sum 1/c_n=\sum 1/n$ 发散，故收敛；$R<1$ 时 $K_n\le-\delta$，故发散（见 `thm.kummer`）。

**$R=1$ 的两个例子**：$\sum 1/n$ 有 $R=1$ 且发散；$\sum 1/n^2$ 有 $n\bigl(((n+1)/n)^2-1\bigr)=2+1/n\to2$，即 $R=2$，收敛。

📌 比值判别法失效（$q=1$）时可用 Raabe；Raabe 仍失效时用 Bertrand 或 Gauss（`thm.bertrand-test`、`thm.gauss-test`）。
