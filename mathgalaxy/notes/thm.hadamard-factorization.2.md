# Hadamard 分解定理　`thm.hadamard-factorization`　·　说明
根 `../`

**第二步：乘积收敛（完整）。** 记 $\mathcal{P}(z):=\prod_{n}E_{p}(z/a_{n})$。对 $|w|\le1/2$，$\log E_{p}(w)=-\sum_{k>p}w^{k}/k$，故 $|E_{p}(w)-1|\le C_{p}|w|^{p+1}$。给定 $R$：只有有限个 $|a_{n}|\le2R$；对其余项 $|z/a_{n}|\le1/2$，于是 $\sum_{|a_{n}|>2R}|z/a_{n}|^{p+1}\le R^{p+1}\sum_{n}|a_{n}|^{-(p+1)}<\infty$。故 $\mathcal{P}$ 在 $|z|\le R$ 上一致收敛，定义出一个整函数。

**第三步：商无零点（完整）。** 令 $\Phi(z):=f(z)\big/\bigl(z^{m}\mathcal{P}(z)\bigr)$。每个 $a_{n}$ 处 $E_{p}(z/a_{n})$ 恰有一阶零点，与 $f$ 的零点相消；其它点 $f\ne0$ 而乘积非零。故 $\Phi$ 整、处处非零。

> 续见 notes/thm.hadamard-factorization.3.md
