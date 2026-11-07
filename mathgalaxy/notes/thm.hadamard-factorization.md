# Hadamard 分解定理　`thm.hadamard-factorization`　·　说明
根 `../`

**约定**：$f$ 整、有限阶 $\rho$；零点 $a_{n}\ne 0$（按重数计），$z=0$ 处的零点重数为 $m$；$n(r)$ 是模 $\le r$ 的零点个数，$M(r)=\max_{|z|=r}|f(z)|$，$E_{p}(w)=(1-w)e^{w+w^{2}/2+\cdots+w^{p}/p}$。取 $p=\lfloor\rho\rfloor$（$\rho<1$ 时 $p=0$），于是 $p+1>\rho$；固定 $\varepsilon>0$ 使 $p+1>\rho+\varepsilon$。

**第一步：零点密度（完整）。** 对 $f/z^{m}$ 用 Jensen 公式（`prop.jensen`，此时原点值非零）：$n(R)\log 2\le\log M(2R)-\log|f(0)|+O(1)$。有限阶给 $\log M(2R)\le C\,R^{\rho+\varepsilon}$，故 $n(R)\le C\,R^{\rho+\varepsilon}$。于是对任何 $\sigma>\rho$，分部求和给 $\sum_{n}|a_{n}|^{-\sigma}=\sigma\int_{0}^{\infty}n(r)\,r^{-\sigma-1}\,\mathrm{d}r<\infty$（$n(r)$ 在 $r<|a_{1}|$ 时为 $0$，无边界项）。特别地 $\sum_{n}|a_{n}|^{-(p+1)}<\infty$。

> 续见 notes/thm.hadamard-factorization.2.md
