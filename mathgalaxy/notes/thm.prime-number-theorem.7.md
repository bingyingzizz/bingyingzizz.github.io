# 素数定理　`thm.prime-number-theorem`　·　说明
根 `../`

**命题 B 的证明为何不在本图**：它是 Newman（1980）的复分析论证：对 $B(x)=\int_{1}^{x}\psi(t)\,\mathrm{d}t/t$ 用 Mellin 反演写成 $\frac{1}{2\pi i}\int_{c-i\infty}^{c+i\infty}F(s)\,x^{s}\,\mathrm{d}s/s$，把围道移到 $\operatorname{Re}s=1-\delta$（$s=1$ 的小圆贡献留数 $x$），用 $F$ 在 $\operatorname{Re}s\ge1$ 邻域的全纯性与 Phragmén–Lindelöf 控制竖线，得 $B(x)=x+o(x)$；再由 $\psi$ 单调，对 $x<y<x(1+\varepsilon)$ 用 $\psi(x)\log(y/x)\le\int_{x}^{y}\psi(t)\,\mathrm{d}t/t$ 夹逼得 $\psi(x)\sim x$。本图没有 Newman 定理、Phragmén–Lindelöf 与 Mellin 反演的节点，故保留 skeleton、不勾 ∎。

⭐ **为什么这值得单列一个节点**：素数定理的「等价变形」几乎全是初等的（引理 1–4），真正困难的是复分析的两块——$\zeta$ 在 $\operatorname{Re}s=1$ 无零点（本注已证）与 Tauber 收尾（命题 B）。这一版把前者钉死，缺口只剩后者的一个标准定理。

> 续见 notes/thm.prime-number-theorem.8.md
