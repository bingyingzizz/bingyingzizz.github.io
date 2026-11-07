# 素数定理　`thm.prime-number-theorem`　·　说明
根 `../`

**命题 A（已证）：** $\zeta(s)=\sum_{n\ge1}n^{-s}$（$\operatorname{Re}s>1$）亚纯延拓到 $\operatorname{Re}s>0$，在 $s=1$ 有单极点、留数 $1$，且对一切 $t\in\mathbb{R}$ 有 $\zeta(1+it)\ne0$。

**命题 A 的第一部分（解析延拓）**：对 $\operatorname{Re}s>1$，分部求和给 $\sum_{n\le N}n^{-s}=N^{1-s}+s\int_{1}^{N}\lfloor x\rfloor x^{-s-1}\,\mathrm{d}x$。令 $N\to\infty$（$N^{1-s}\to0$），并写 $\lfloor x\rfloor=x-\{x\}$：

$$\zeta(s)=\frac{s}{s-1}-s\int_{1}^{\infty}\{x\}\,x^{-s-1}\,\mathrm{d}x\qquad(\operatorname{Re}s>1).$$

右端积分对 $\operatorname{Re}s>0$ 绝对收敛（$|\{x\}x^{-s-1}|\le x^{-\operatorname{Re}s-1}$），故它给出 $\operatorname{Re}s>0$ 上的亚纯延拓；唯一极点在 $s=1$，来自 $s/(s-1)$，留数 $1$。

> 续见 notes/thm.prime-number-theorem.4.md
