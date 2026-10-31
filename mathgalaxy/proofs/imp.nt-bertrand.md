# Bertrand 假设：Чебышёв 估计的区间版
`imp.nt-bertrand` · 推出 · strong 边 · 根 `../`

`thm.chebyshev-estimate` Чебышёв 估计 → `thm.bertrand` Bertrand 假设

要证：对 $n > 1$ 存在素数 $p \in (n, 2n)$。

反设没有这样的素数。取 $N = \binom{2n}{n}$，则 $N$ 的每个素因子 $p \le n$（因为 $p > 2n$ 不可能，$n < p < 2n$ 被假设排除，$p = 2n$ 不是素数）。

把 $p \le n$ 的贡献拆成两段：

- $p \le \sqrt{2n}$：由 $v_{p}(N) \le \log(2n)/\log p$ 得总贡献 $\le (2n)^{\pi(\sqrt{2n})} \le (2n)^{\sqrt{2n}}$；

- $\sqrt{2n} < p \le 2n/3$：这样的 $p$ 在 $N$ 里最多出现一次（$p^{2} > 2n$），且 $p \le 2n/3$ 的素数乘积可以用归纳假设的界估计；

- $2n/3 < p \le n$：若出现，则 $p \mid N$ 而 $p$ 只出现一次，且 $2p > 4n/3 > n$ 使 $\binom{2n}{n}$ 中只有一个这样的因子 —— 这段要单独数。

> 续见 proofs/imp.nt-bertrand.2.md
