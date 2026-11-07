# 素数定理　`thm.prime-number-theorem`　·　说明
根 `../`

**引理 3（Abel 变换）**：$\theta(x)=\pi(x)\log x-\int_{2}^{x}\frac{\pi(t)}{t}\,\mathrm{d}t$，$\pi(x)=\frac{\theta(x)}{\log x}+\int_{2}^{x}\frac{\theta(t)}{t\log^{2}t}\,\mathrm{d}t$。证明：对 Stieltjes 积分 $\sum_{p\le x}f(p)=\pi(x)f(x)-\int_{2}^{x}\pi(t)\,\mathrm{d}f(t)$ 分别取 $f=\log t$ 与 $f=1/\log t$ 即得。

**引理 4（$\theta\sim x\iff\pi\sim x/\log x$）**：若 $\theta\sim x$，由引理 3 第二式 $\pi(x)=\frac{x(1+o(1))}{\log x}+\int_{2}^{x}\frac{t(1+o(1))}{t\log^{2}t}\,\mathrm{d}t=\frac{x}{\log x}(1+o(1))$（用 $\int_{2}^{x}\mathrm{d}t/\log^{2}t=o(x/\log x)$）。反向由第一式：$\theta(x)=\pi(x)\log x-\int_{2}^{x}\frac{\pi(t)}{t}\mathrm{d}t$，代入 $\pi(t)=t(1+o(1))/\log t$ 得 $\theta(x)=x(1+o(1))$。于是 $\pi(x)\sim x/\log x\iff\psi(x)\sim x$。

> 续见 notes/thm.prime-number-theorem.3.md
