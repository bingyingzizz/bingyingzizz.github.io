# 素数定理　`thm.prime-number-theorem`　·　说明
根 `../`

**为什么只差这一步**：$\zeta$ 的 Euler 乘积取对数再求导给 $-\zeta'(s)/\zeta(s)=\sum_{n\ge1}\Lambda(n)n^{-s}=s\int_{1}^{\infty}\psi(t)\,t^{-s-1}\,\mathrm{d}t$（$\operatorname{Re}s>1$）。命题 A 说明右端的 Mellin 变换满足命题 B 的解析延拓条件（$s=1$ 单极点留数 $1$、其余全纯），于是 $\psi(x)\sim x$；再由引理 1–4（$\psi\sim x\implies\theta\sim x\implies\pi\sim x/\log x$）即得素数定理。

> 续见 notes/thm.prime-number-theorem.7.md
