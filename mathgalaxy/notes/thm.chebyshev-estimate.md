# Чебышёв 估计　`thm.chebyshev-estimate`　·　说明
根 `../`

**证明骨架**（只靠二项式系数，不用复分析）：



1. 取 $N = \binom{2n}{n}$。它在 $\dfrac{4^{n}}{2n+1} \le N \le 4^{n}$ 之间（中间项最大 + 二项式和为 $4^{n}$）。

2. 把 $N$ 分解：$n < p \le 2n$ 的素数都整除 $N$（它们在分子里出现、分母里不出现），于是 $\prod_{n < p \le 2n} p \le N \le 4^{n}$ —— 取对数得 $\theta(2n) - \theta(n) \le 2n\log 2$。

3. 反方向用 $N$ 的 $p$-进指数：$v_{p}(N) = \sum_{k}\left(\lfloor 2n/p^{k}\rfloor - 2\lfloor n/p^{k}\rfloor\right) \le \log(2n)/\log p$，累乘得 $N \le (2n)^{\pi(2n)}$，与下界 $N \ge 4^{n}/(2n+1)$ 合并即得 $\pi(2n) \ge c\,n/\log n$。

4. 从 $2n$ 过渡到一般的 $x$：用 $\theta$ 的单调性与 $\pi$ 的分段常数性质夹住。



⚠ 这是**骨架**：每一步的常数没有仔细优化，第四步的区间处理也略去了。完整证明见华罗庚《数论导引》第九章。
