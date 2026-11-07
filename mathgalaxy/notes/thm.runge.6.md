# Runge 逼近定理　`thm.runge`　·　说明
根 `../`

**第三步：无洞时得到多项式**。若 $\mathbb{C}\setminus K$ 连通，它是无界连通开集。取 $b^{\prime}$ 使 $|b^{\prime}| > 2\max_{z\in K}|z|$。对 $z\in K$，$|z/b^{\prime}| \le 1/2$，故 $\frac{1}{b^{\prime} - z} = \frac{1}{b^{\prime}}\sum_{k=0}^{\infty}\Bigl(\frac{z}{b^{\prime}}\Bigr)^{k}$ 在 $K$ 上一致收敛，截断即多项式。于是 $f$ 在 $K$ 上被多项式一致逼近到 $\varepsilon$。

**一般情形**：$\mathbb{C}\setminus K$ 的每个连通分支 $\Omega$ 里预先取一点 $b_{\Omega}$。第一步给极点在 $\Gamma$ 上的有理函数 $R$；$\Gamma\subset\mathbb{C}\setminus K$，每个极点落在某个分支 $\Omega$ 里，用第二步把它搬到 $b_{\Omega}$。有限个极点、每步误差任意小，故 $R$ 被极点在 $\{b_{\Omega}\}$ 的有理函数一致逼近到 $\varepsilon/2$，与第一步的 $\varepsilon/2$ 合并即得结论。∎

> 续见 notes/thm.runge.7.md
