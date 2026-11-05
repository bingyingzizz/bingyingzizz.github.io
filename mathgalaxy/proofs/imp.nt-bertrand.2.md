# Bertrand 假设：Чебышёв 估计的区间版
`imp.nt-bertrand` · 推出 · strong 边 · 根 `../`

`thm.chebyshev-estimate` Чебышёв 估计 → `thm.bertrand` Bertrand 假设

- $2n/3 < p \le n$：这一段**不贡献任何因子** —— $p$ 在 $n!$ 里出现一次（$p\cdot1$），在 $(n+1)\cdots(2n)$ 里也出现一次（$2p \le 2n$，而 $3p > 2n$），两个 $v_{p}$ 正好抵消：$v_{p}\bigl(\binom{2n}{n}\bigr) = 1-1 = 0$。⚠️ 原文写「$p \mid N$ 且只出现一次」是**错的**：$n = 5$ 时 $\binom{10}{5} = 252$ 不被 $5$ 整除。这一段要单列，是为了说明它**根本不出现**，所以前两段给出的界就是全部的界。

两段合起来给出

$$N = \binom{2n}{n} \le (2n)^{\sqrt{2n}}\cdot 4^{2n/3},$$

（第二段用 $\prod_{p\le x}p \le 4^{x}$，取 $x = 2n/3$）。另一边，$\sum_{k=0}^{2n}\binom{2n}{k} = 4^{2n}$ 且中间那一项最大，故 $N \ge 4^{n}/(2n+1)$。两边一夹：

$$\frac{4^{n}}{2n+1} \le (2n)^{\sqrt{2n}}\,4^{2n/3} \iff 4^{n/3} \le (2n)^{\sqrt{2n}+1},$$

> 续见 proofs/imp.nt-bertrand.3.md
