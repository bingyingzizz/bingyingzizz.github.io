# Mittag-Leffler 定理　`thm.mittag-leffler`　·　说明
根 `../`

**第 3 步：造修正项。** 固定 $k$。$P_k\bigl(1/(z-a_k)\bigr)$ 在 $K_{n_k}$ 的邻域全纯（因为 $a_k\notin K_{n_k}$）。对 $\mathbb{C}\setminus K_{n_k}$ 的每个分支取一点：有界分支由引理取 $s\in\partial\Omega\subset\mathbb{C}\setminus\Omega$；无界分支任取一点。由第 2 步，存在有理函数 $R_k$，极点在所取的点上，且

$$\left|P_k\!\left(\frac{1}{z-a_k}\right)-R_k(z)\right|<2^{-k}\qquad(z\in K_{n_k}).$$

无界分支那个极点可以去掉：设它是 $s$、对应的部分分式项为 $c/(z-s)^{j}$，令 $|s|\to\infty$，则 $|c|/|z-s|^{j}\to0$ 在 $K_{n_k}$ 上一致成立；把 $s$ 取得足够大再去掉该项，误差仍小于 $2^{-k}$。于是得到有理函数 $T_k$，它的极点全在 $\mathbb{C}\setminus\Omega$ 里，因而 $T_k$ 在 $\Omega$ 上全纯，且

$$|P_k-T_k|<2\cdot2^{-k}\qquad(z\in K_{n_k}).$$

> 续见 notes/thm.mittag-leffler.5.md
