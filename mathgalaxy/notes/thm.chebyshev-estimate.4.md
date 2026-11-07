# Чебышёв 估计　`thm.chebyshev-estimate`　·　说明
根 `../`

**从整数到实数。** 设 $x \ge 2$ 实，令 $m := \lfloor x \rfloor$。$\pi(x) = \pi(m)$。当 $m \ge 16$ 时，$t/\log t$ 在 $[16, \infty)$ 上递增，故 $m/\log m \le x/\log x$，上界直接迁移；下界不能这样搬（只能得 $\pi(x) \ge 0.3\,m/\log m$），改用 $x/\log x \le (1+1/m)\,m/\log m$（由 $x < m+1$）：$m \ge 16$ 时因子 $1+1/m < 1.07$，故 $\pi(x) > \frac{0.3}{1.07}\,x/\log x > 0.28\,x/\log x$。当 $m < 16$ 时逐个整数检查即可（$\pi$ 分段常数，$t/\log t$ 在 $[3, \infty)$ 上递增）。∎

**为什么够用**：这两个常数只用于「$\pi(x)$ 与 $x/\log x$ 同阶」这一定性结论；把常数改进到任意精度是 Chebyshev 原始论文的工作，把上界推到 $\pi(x) \sim x/\log x$ 则需要复分析（素数定理，见 `thm.prime-number-theorem`）。
