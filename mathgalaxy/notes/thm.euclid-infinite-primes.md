# 素数有无穷多个　`thm.euclid-infinite-primes`　·　说明
根 `../`

证明只用带余除法：若素数只有 $p_{1}, \cdots, p_{n}$，令 $N = p_{1}\cdots p_{n} + 1$。$N > 1$ 必有素因数 $p$，而 $p \ne p_{i}$（否则 $p \mid N$ 且 $p \mid p_{1}\cdots p_{n}$，于是 $p \mid 1$），矛盾。



这条证明是**非构造**的：它没说第 $n+1$ 个素数是谁，也没给出 $\pi(x)$ 的任何估计。定量版本（Chebyshev 的 $\pi(x) \asymp x/\log x$）要用 Stirling 公式与组合恒等式，属于解析数论。



同一手法可证 $\mathbb{F}_{p}[x]$ 里不可约多项式无穷：把 $+1$ 换成「所有不可约多项式的乘积加一」。
