# Runge 逼近定理　`thm.runge`　·　说明
根 `../`

**第二步：推极点**。设 $b,b^{\prime}$ 在 $\mathbb{C}\setminus K$ 的同一连通分支 $\Omega$ 内。取 $\Omega$ 中的折线连接 $b$ 到 $b^{\prime}$，在折线上取点 $b = b_{0}, b_{1}, \ldots, b_{N} = b^{\prime}$，使 $|b_{i+1} - b_{i}| < \operatorname{dist}(b_{i},K)$。对 $z\in K$，$|b_{i}-z| \ge \operatorname{dist}(b_{i},K) > |b_{i+1}-b_{i}|$，故几何级数 $\frac{1}{b_{i+1} - z} = \frac{1}{b_{i} - z}\cdot\frac{1}{1 - \frac{b_{i}-b_{i+1}}{b_{i}-z}} = \sum_{k=0}^{\infty}\frac{(b_{i}-b_{i+1})^{k}}{(b_{i}-z)^{k+1}}$ 在 $K$ 上一致收敛（公比 $\le q_{i} < 1$）。截断到 $k\le N_{i}$ 即把 $1/(b_{i+1}-z)$ 用「极点只在 $b_{i}$」的有理函数一致逼近到任意精度。逐步搬运，$1/(b-z)$ 可被「极点只在 $b^{\prime}$」的有理函数一致逼近；对这些基本项线性组合，即得任意有理函数在 $K$ 上的一致逼近（极点逐次搬完）。

> 续见 notes/thm.runge.6.md
