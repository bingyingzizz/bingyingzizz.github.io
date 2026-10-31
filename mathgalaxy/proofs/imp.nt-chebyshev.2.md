# Чебышёв 估计：$\binom{2n}{n}$ 的上下界
`imp.nt-chebyshev` · 推出 · strong 边 · 根 `../`

`thm.divisor-formula` τ 与 σ 的乘积公式 → `thm.chebyshev-estimate` Чебышёв 估计

**上界**：对 $n < p \le 2n$ 的素数，$p$ 整除 $N$ 而 $p > n$ 保证 $p^{2} \nmid N$（$v_{p}(N) = \lfloor 2n/p\rfloor - 2\lfloor n/p\rfloor \le 1$）。于是 $\prod_{n<p\le 2n}p \le N \le 4^{n}$，取对数得 $\theta(2n) - \theta(n) \le 2n\log 2$；把它沿 $n, n/2, n/4, \cdots$ 累加得 $\theta(x) \le C x$，再由 $\theta \ge (\log x)\,\pi(\sqrt{x}) + \cdots$ 的初等关系得 $\pi(x) \le C' x/\log x$。

⚠ 这是骨架：常数都没优化，第四步的拼接（$2n$  推出  一般 $x$）省了细节。完整证明见华罗庚《数论导引》第九章。
