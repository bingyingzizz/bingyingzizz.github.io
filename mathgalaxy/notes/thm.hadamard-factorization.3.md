# Hadamard 分解定理　`thm.hadamard-factorization`　·　说明
根 `../`

**第四步：$\Phi$ 的阶 $\le\rho$（完整）。** 记 $h$ 为 $\Phi$ 的整对数（第五步；那里只用 $\Phi$ 处处非零，与本步的估计互不依赖，先取后用），则 $\operatorname{Re}h=\log|\Phi|$。只需证：对每个大 $r$，存在 $R\in[r,2r]$ 使 $|z|=R$ 上 $\log|\Phi(z)|\le C\,r^{\rho+\varepsilon}$；再由最大模原理（$\operatorname{Re}h$ 调和）与第六步的 Borel–Carathéodory 即得 $|h|\le C\,R^{\rho+\varepsilon}$，从而用 Cauchy 估计得 $h$ 是多项式。

**（i）$E_{p}$ 的两条初等估计。** 对 $|w|\le1/2$：$\log|E_{p}(w)|=\operatorname{Re}\bigl(-\sum_{k>p}w^{k}/k\bigr)$，故 $|\log|E_{p}(w)||\le2|w|^{p+1}$。对 $|w|\ge1/2$：$\log|E_{p}(w)|=\log|1-w|+\operatorname{Re}\sum_{j\le p}w^{j}/j\ge\log|1-w|-C_{p}|w|^{p}$。

> 续见 notes/thm.hadamard-factorization.4.md
