# Hadamard 分解定理　`thm.hadamard-factorization`　·　说明
根 `../`

• $|a_{n}|\le4r$：$|z-a_{n}|\ge\delta$（$|a_{n}|\in[r/2,4r]$ 时由 $R$ 的选法；$|a_{n}|<r/2$ 时 $|z-a_{n}|\ge R-r/2\ge r/2$），故 $\log|1-z/a_{n}|=\log|z-a_{n}|-\log|a_{n}|\ge\log(\delta/(4r))$；由（i）每项 $\ge\log(\delta/(4r))-C(R/|a_{n}|)^{p}$。对至多 $N\le C r^{\rho+\varepsilon}$ 项求和，并注意 $\sum_{|a_{n}|\le4r}(R/|a_{n}|)^{p}\le C r^{\rho+\varepsilon}$（分部求和），得 $\sum_{|a_{n}|\le4r}\log|E_{p}(z/a_{n})|\ge-C\,r^{\rho+\varepsilon}\log r$。

合并：$\log|\mathcal{P}(z)|\ge-C\,r^{\rho+\varepsilon}\log r$。于是 $\log|\Phi(z)|=\log|f(z)|-m\log R-\log|\mathcal{P}(z)|\le C\,r^{\rho+\varepsilon}+C\,r^{\rho+\varepsilon}\log r\le C_{1}\,r^{\rho+\varepsilon_{1}}$（任何 $\varepsilon_{1}>\varepsilon$）。

> 续见 notes/thm.hadamard-factorization.6.md
