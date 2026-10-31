# 素数计数函数　`def.prime-counting`　·　说明
根 `../`

为什么要有三个：$\pi$ 是最想知道的，但它对求导/求和极不友好；$\psi$ 最好用 ——



$$\psi(x) = \sum_{n \le x} \Lambda(n), \qquad \Lambda(n) = \begin{cases}\log p, & n = p^{k},\\ 0, & \text{否则}\end{cases}$$



（$\Lambda$ 叫 von Mangoldt 函数），而 $\log n! = \sum_{n \le x}\Lambda(n)\lfloor x/n\rfloor$ 把 $\psi$ 与阶乘直接连起来。三者的关系是 $\theta \le \psi \le \theta + O(\sqrt{x}\log x)$ 与 $\pi(x) \sim \theta(x)/\log x$ —— 所以「三者同阶」这句话本身就是定理。



⭐ 人名按原文字母写：**Чебышёв**（不用音译，也不用英文拼法 Chebyshev）—— 这是本项目的口径。
