# Weierstrass 乘积定理　`thm.weierstrass-product`　·　说明
根 `../`

**引理 2（乘积收敛）**：若 $u_{n}$ 在区域上全纯、$\sum_{n}|u_{n}|$ 在每个紧集上一致收敛，则 $\prod_{n}(1+u_{n})$ 在每个紧集上一致收敛到一个全纯函数 $F$，且 $F$ 的零点恰为各因子 $1+u_{n}$ 的零点（重数相加）。理由：部分乘积一致 Cauchy（望远镜估计 $|\prod_{n\le N}-\prod_{n\le M}| \le \prod(1+|u_{n}|)\bigl(e^{\sum_{n>\min}|u_{n}|}-1\bigr)$），极限全纯由 `thm.weierstrass-convergence`；在非零点处最终 $|u_{n}|\le 1/2$，故 $|1+u_{n}|\ge 1/2$，乘积不为零。

**第一步：选 $p_{n}$ 使乘积收敛**。取 $p_{n} = n$。任给 $R>0$，因 $a_{n}\to\infty$，存在 $N$ 使 $n\ge N$ 时 $|a_{n}|\ge 2R$；则 $|z|\le R$、$n\ge N$ 时 $|z/a_{n}|\le 1/2$，由引理 1 $\bigl|1 - E_{n}(z/a_{n})\bigr| \le 4\Bigl(\frac{R}{|a_{n}|}\Bigr)^{n+1} \le 4\cdot 2^{-(n+1)},$ 故 $\sum_{n}\bigl|1 - E_{n}(z/a_{n})\bigr|$ 在 $|z|\le R$ 上一致收敛。由引理 2，$F(z) := \prod_{n=1}^{\infty} E_{n}(z/a_{n})$ 是整函数，零点恰为各 $a_{n}$、重数等于 $a_{n}$ 在序列中的重数。

> 续见 notes/thm.weierstrass-product.3.md
