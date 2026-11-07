# Hadamard 分解定理　`thm.hadamard-factorization`　·　说明
根 `../`

**第四步：$\Phi$ 的阶 $\le\rho$（缺口已钉到一条引理）。** 记 $\mathcal{P}(z):=\prod_{n}E_{p}(z/a_{n})$（避免与陈述里的多项式 $P$ 混用）。需要 $|z|=r$ 上的两条估计 $\log|\prod_{n}E_{p}(z/a_{n})|\le C\,r^{\rho+\varepsilon}$ 与 $\ge -C\,r^{\rho+\varepsilon}$。**上界（离零点）可写全**：按 $|a_{n}|\le 2r$、$|a_{n}|>2r$ 拆分；$|w|\le 1/2$ 时 $\log|E_{p}(w)|\le C|w|^{p+1}$，$|w|\ge 1/2$ 时 $\log|E_{p}(w)|=\log|1-w|+\operatorname{Re}\sum_{j\le p}w^{j}/j$ 且后一项 $\le C|w|^{p}$；再用 $\sum_{|a_{n}|\le 2r}(r/|a_{n}|)^{p}\le C\,r^{\rho}$（分部求和 + $n(t)\le Ct^{\rho+\varepsilon}$）与尾部 $\sum_{|a_{n}|>2r}(r/|a_{n}|)^{p+1}\le C\,r^{\rho-(p+1)}$，得 $\log|\mathcal{P}(z)|\le C\,r^{\rho+\varepsilon}+\sum_{|a_{n}|\le 2r}\log\frac{r}{|z-a_{n}|}$。**下界正是缺口**：需要典范乘积下界引理（Hadamard）：存在 $C$ 使 $\log|\mathcal{P}(z)|\ge -C\,r^{\rho+\varepsilon}$（$|z|=r$，$z$ 离开零点的小邻域）。局部化

> 续见 notes/thm.hadamard-factorization.4.md
