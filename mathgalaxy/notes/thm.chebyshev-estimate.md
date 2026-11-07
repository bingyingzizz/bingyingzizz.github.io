# Чебышёв 估计　`thm.chebyshev-estimate`　·　说明
根 `../`

**证明**：只用人均一次的二项式系数估计。记 $\theta(x) := \sum_{p \le x} \log p$（和只取素数 $p \le x$）。下面先对整数 $x$ 证明 $0.3\,x/\log x < \pi(x) < 6\,x/\log x$；推到实数时下界降为 $0.28\,x/\log x$，上界不变。

**下界。** 对整数 $n \ge 1$ 令 $N := \binom{2n}{n}$。由 $\sum_{k=0}^{2n}\binom{2n}{k} = 4^{n}$、且 $\binom{2n}{n}$ 是其中最大的一项，得

$$\frac{4^{n}}{2n+1} \le N \le 4^{n}.$$

另一方面，把 $N$ 按素因子分解。由勒让德公式

$$v_{p}(N) = \sum_{k \ge 1}\left(\left\lfloor\frac{2n}{p^{k}}\right\rfloor - 2\left\lfloor\frac{n}{p^{k}}\right\rfloor\right),$$

每一项只能是 $0$ 或 $1$，而满足 $p^{k} \le 2n$ 的 $k$ 至多 $\log(2n)/\log p$ 个，故 $v_{p}(N) \le \log(2n)/\log p$，即 $p^{v_{p}(N)} \le 2n$。于是

$$N = \prod_{p \le 2n} p^{v_{p}(N)} \le (2n)^{\pi(2n)}.$$

与 $N \ge 4^{n}/(2n+1)$ 合并、取对数：

> 续见 notes/thm.chebyshev-estimate.2.md
