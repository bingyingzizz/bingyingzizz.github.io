# 高斯判别法（Gauss）　`thm.gauss-test`　·　说明
根 `../`

**证明**：$\mu\ne1$ 时 Raabe 量 $n(a_n/a_{n+1}-1)=\mu+O(n^{-\delta})\to\mu$，故 $\mu>1$ 收敛、$\mu<1$ 发散（`thm.raabe-test`）。

$\mu=1$ 时令 $b_n=n a_n>0$。由展开，

$$\frac{b_n}{b_{n+1}}=\frac{n}{n+1}\Bigl(1+\frac1n+O(n^{-1-\delta})\Bigr)=1+O(n^{-1-\delta}).$$

于是 $\prod (b_n/b_{n+1})$ 收敛（因为 $\sum n^{-1-\delta}<\infty$），即 $b_n\to b>0$；故 $a_n\sim b/n$，由 $p$-级数（$p=1$）发散。

**例**：$\sum 1/n$（$\mu=1$，发散）；$\sum 1/n^{1+\varepsilon}$（$\mu=1+\varepsilon>1$，收敛）。

⚠ 展开中的 $O(n^{-1-\delta})$ 不能放宽成 $O(1/n\log n)$：后者正是 Bertrand 判别法处理的情形（`thm.bertrand-test`）。
