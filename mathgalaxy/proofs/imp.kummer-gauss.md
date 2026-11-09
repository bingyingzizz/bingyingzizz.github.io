# Gauss 判别法：由 Raabe 处理 $\mu\ne1$，$\mu=1$ 单独比较
`imp.kummer-gauss` · 推出 · strong 边 · 根 `../`

`thm.raabe-test` 拉阿伯判别法（Raabe） + `thm.p-series` p-级数 → `thm.gauss-test` 高斯判别法（Gauss）

设 $\frac{a_n}{a_{n+1}}=1+\frac{\mu}{n}+O(n^{-1-\delta})$，$\delta>0$。
$\mu\ne1$：Raabe 量 $n\bigl(\frac{a_n}{a_{n+1}}-1\bigr)=\mu+O(n^{-\delta})\to\mu$，故 $\mu>1$ 收敛、$\mu<1$ 发散（`thm.raabe-test`）。
$\mu=1$：令 $b_n=na_n>0$。由展开
$$\frac{b_n}{b_{n+1}}=\frac{n}{n+1}\Bigl(1+\frac1n+O(n^{-1-\delta})\Bigr)=1+O(n^{-1-\delta}).$$
因为 $\sum n^{-1-\delta}<\infty$，无穷乘积 $\prod b_n/b_{n+1}$ 收敛到正数，故 $b_n\to b>0$，即 $a_n\sim b/n$。由 $p$-级数 $p=1$ 发散（`thm.p-series`）得 $\sum a_n$ 发散。$\blacksquare$
