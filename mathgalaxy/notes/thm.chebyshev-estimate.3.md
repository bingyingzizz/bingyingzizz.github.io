# Чебышёв 估计　`thm.chebyshev-estimate`　·　说明
根 `../`

$$\theta(2r+1) - \theta(r+1) \le 2r\log 2.$$

两式合起来给出 $\theta(n) \le n\log 4$（对 $n$ 归纳，基础情形 $n = 1, 2$ 直接检查）。现在数素数：$\pi(\sqrt{x}) \le \sqrt{x}$；而每个 $\sqrt{x} < p \le x$ 满足 $\log p \ge \tfrac12\log x$，这样的 $p$ 至多 $(\theta(x) - \theta(\sqrt{x}))/\tfrac12\log x$ 个。于是对整数 $x \ge 2$，

$$\pi(x) \le \sqrt{x} + \frac{2\theta(x)}{\log x} \le \sqrt{x} + \frac{4x\log 2}{\log x}.$$

对 $x \ge 16$，$\log x \le \sqrt{x}$，故 $\sqrt{x} \le x/\log x$，从而 $\pi(x) \le (1 + 4\log 2)\,x/\log x < 6\,x/\log x$。对 $2 \le x < 16$，$6x/\log x > 6$，而 $\pi(x) \le 6$，结论当然成立。

> 续见 notes/thm.chebyshev-estimate.4.md
