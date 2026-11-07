# 素数定理　`thm.prime-number-theorem`　·　说明
根 `../`

$$0 \le \psi(x) - \theta(x) = \sum_{k=2}^{\lfloor \log_{2} x \rfloor} \theta\big(x^{1/k}\big) \le \sum_{k=2}^{\lfloor \log_{2} x \rfloor} x^{1/k}\log x \le (\log_{2} x)\,\sqrt{x}\,\log x = o(x).$$

所以 $\psi(x) = \theta(x) + o(x)$，两者相差 $o(x)$，故 $\psi(x) \sim x$ 与 $\theta(x) \sim x$ 等价。∎

**引理 3（Abel 变换）**：

$$\theta(x) = \pi(x)\log x - \int_{2}^{x} \frac{\pi(t)}{t}\,\mathrm{d}t,\qquad \pi(x) = \frac{\theta(x)}{\log x} + \int_{2}^{x} \frac{\theta(t)}{t\log^{2} t}\,\mathrm{d}t.$$

证明：对 Stieltjes 积分 $\sum_{p \le x} f(p) = \pi(x)f(x) - \int_{2}^{x} \pi(t)\,\mathrm{d}f(t)$ 分别取 $f = \log$ 与 $f = 1/\log$，分部积分即得。∎

**引理 4（$\theta \sim x \iff \pi \sim x/\log x$）**：

> 续见 notes/thm.prime-number-theorem.3.md
