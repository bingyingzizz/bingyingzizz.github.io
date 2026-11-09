# 伯努利数　`def.bernoulli-number`　·　说明
根 `../`

**递推的来历**：$\frac{t}{e^t-1}\cdot\frac{e^t-1}{t}=1$，而 $\frac{e^t-1}{t}=\sum_{n\ge0}\frac{t^n}{(n+1)!}$；比较 $t^n$ 系数即得递推。

**Bernoulli 多项式**：$B_n(x)=\sum_{k=0}^{n}\binom{n}{k}B_k x^{n-k}$，满足 $B_n'(x)=nB_{n-1}(x)$ 与 $B_n(x+1)-B_n(x)=nx^{n-1}$；Euler–Maclaurin 公式里的周期函数是 $B_n(\{x\})$。

**约定警告**：不同教材对 $B_1$ 取 $+\frac12$ 或 $-\frac12$；本图取 $B_1=-\frac12$，与生成函数 $t/(e^t-1)$ 一致。

📌 用途：Euler–Maclaurin 求和（`thm.euler-maclaurin`）、$\zeta(2n)$ 的闭式、Stirling 公式的渐近展开、数值积分中的梯形修正。
