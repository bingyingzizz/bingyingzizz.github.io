# 素数定理　`thm.prime-number-theorem`　·　说明
根 `../`

- 若 $\theta(x) \sim x$：由引理 3 第二式，$\pi(x) = \frac{x(1+o(1))}{\log x} + \int_{2}^{x}\frac{t(1+o(1))}{t\log^{2}t}\,\mathrm{d}t$。主项是 $x/\log x$；积分 $\int_{2}^{x}\frac{\mathrm{d}t}{\log^{2} t} = o\big(\frac{x}{\log x}\big)$（因为 $\log^{2} t$ 增长比 $\log t$ 快），故 $\pi(x) \sim x/\log x$。

- 若 $\pi(x) \sim x/\log x$：由引理 3 第一式，$\theta(x) = \pi(x)\log x - \int_{2}^{x}\frac{\pi(t)}{t}\,\mathrm{d}t = x + o(x) - \int_{2}^{x}\frac{(1+o(1))\,\mathrm{d}t}{\log t}$。而 $\int_{2}^{x}\frac{\mathrm{d}t}{\log t} = o(x)$（对数积分 $\operatorname{li}(x) = O(x/\log x)$），故 $\theta(x) \sim x$。∎

于是素数定理 $\pi(x) \sim x/\log x$ 与 $\psi(x) \sim x$ 等价（引理 2 + 引理 4）。

**剩下的解析主定理（本图未展开，正是 skeleton 的原因）**：

> 续见 notes/thm.prime-number-theorem.4.md
