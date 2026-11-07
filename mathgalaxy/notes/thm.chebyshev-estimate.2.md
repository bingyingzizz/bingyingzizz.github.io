# Чебышёв 估计　`thm.chebyshev-estimate`　·　说明
根 `../`

$$\pi(2n) \ge \frac{n\log 4 - \log(2n+1)}{\log(2n)} = \frac{\log 4}{2}\cdot\frac{2n}{\log(2n)} - \frac{\log(2n+1)}{\log(2n)}.$$

对 $x := 2n \ge 16$，有 $\log(2n+1)/\log(2n) \le 2$，而 $2\log x/x \le 2\log 16/16 < 0.7$；于是 $\pi(x) \ge 1.386\,x/\log x - 2 \ge (1.386 - 0.693)\,x/\log x > 0.3\,x/\log x$。对奇数 $x = 2n+1 \ge 17$，$\pi(x) \ge \pi(2n) \ge 0.3\cdot 2n/\log(2n)$；又 $x/\log x \le \frac{x}{2n}\cdot\frac{2n}{\log(2n)}$ 且 $\frac{x}{2n} = 1+\frac{1}{2n} < 1.07$，故 $\pi(x) > \frac{0.3}{1.07}\,x/\log x > 0.28\,x/\log x$。

**上界。** 先估计 $\theta$。对偶数 $n = 2r$，区间 $(r, 2r]$ 里的素数之积整除 $\binom{2r}{r} \le 4^{r}$，故

$$\theta(2r) - \theta(r) \le 2r\log 2.$$

对奇数 $n = 2r+1$，区间 $(r+1, 2r+1]$ 里的素数之积整除 $\binom{2r+1}{r}$；因为奇次二项式系数成对相等，$2\binom{2r+1}{r} \le 2^{2r+1}$，故 $\binom{2r+1}{r} \le 2^{2r}$，即

> 续见 notes/thm.chebyshev-estimate.3.md
