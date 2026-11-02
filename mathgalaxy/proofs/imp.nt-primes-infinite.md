# 素数无穷：乘积加一必带新素因子
`imp.nt-primes-infinite` · 推出 · strong 边 · 根 `../`

`thm.int-division` 整数的带余除法 → `thm.euclid-infinite-primes` 素数有无穷多个

反设素数只有 $p_{1}, \cdots, p_{n}$，令 $N = p_{1}\cdots p_{n} + 1 > 1$。



$N$ 有素因数 $p$（这一步用的是「$>1$ 的整数必有素因数」，本质是 $\mathbb{N}$ 的良序 + 带余除法）。



若 $p = p_{i}$，则 $p \mid N$ 且 $p \mid p_{1}\cdots p_{n}$，相减得 $p \mid 1$，与 $p$ 是素数矛盾。故 $p$ 是新的素数。
