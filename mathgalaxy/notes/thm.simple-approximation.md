# 简单函数逼近　`thm.simple-approximation`　·　说明
根 `../`

**证明。**
**(a)** 对 $n \ge 1$、$k = 0, 1, \ldots, 2^{n}n - 1$ 令
$$E_{n,k} := f^{-1}\bigl((k2^{-n}, (k+1)2^{-n}]\bigr), \qquad F_{n} := f^{-1}\bigl((n, +\infty]\bigr),$$
$$\varphi_{n} := \sum_{k} k\,2^{-n}\,\chi_{E_{n,k}} \;+\; n\,\chi_{F_{n}} \;+\; 0\cdot\chi_{f^{-1}(\{0\})}.$$
- **简单**：每个 $E_{n,k}$、$F_{n}$ 可测（$f$ 可测 + 区间是 Borel 集），只有有限多个取值 ✓；
- **$0 \le \varphi_{n} \le f$**：在 $E_{n,k}$ 上 $k2^{-n} < f \le (k+1)2^{-n}$ ✓；在 $F_{n}$ 上 $n < f$ ✓；其余为零 ✓；
- **单调**：$n \to n+1$ 时区间按 $2^{-(n+1)}$ 加细、上限从 $n$ 升到 $n+1$，逐点算一遍即知 $\varphi_{n} \le \varphi_{n+1}$ ✓；
- **逐点收敛**：若 $f(x) < \infty$，取 $n > f(x)$ 后 $0 \le f(x)-\varphi_{n}(x) \le 2^{-n} \to 0$；若 $f(x) = +\infty$ 则 $\varphi_{n}(x) = n \to \infty$ ✓；
- **在有界集上一致**：$f \le M$ 时取 $n > M$，同样得 $|f-\varphi_{n}| \le 2^{-n}$，与 $x$ 无关 ✓。


> 续见 notes/thm.simple-approximation.2.md
