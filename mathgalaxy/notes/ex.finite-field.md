# 有限域 F_p　`ex.finite-field`　·　说明
根 `../`

**为什么 $\mathbb{Z}/p\mathbb{Z}$ 是域**：$p$ 素 $\iff$ $\mathbb{Z}/p\mathbb{Z}$ 没有非平凡理想 $\iff$ 每个非零元可逆。逆元是可以直接算的：$a^{p-1} \equiv 1 \pmod p$（Fermat 小定理），所以 $a^{-1} = a^{p-2}$。

**$\mathbb{Z}/n\mathbb{Z}$ 什么时候只是环**：$n = 6$ 时 $2 \cdot 3 = 0$，两个非零元乘出 $0$ —— 有零因子，不是整环，更不是域。$\mathbb{Z}/4\mathbb{Z}$ 里 $2$ 没有逆（$2b \equiv 1$ 无解）。

⚠ **「含 $q$ 个元素的域」只在 $q$ 是素数幂时存在**：$\mathbb{F}_{6}$ 不存在。原因是乘法群 $\mathbb{F}_{q}^{\times}$ 是 $q-1$ 阶循环群，而 $\mathbb{F}_{q}$ 的加法群是 $\mathbb{F}_{p}$ 上的 $n$ 维向量空间 $implies$ $q = p^{n}$。

📌 **$\mathbb{F}_{4}$ 的乘法表**：记 $\omega = x$，则 $\omega^{2} = \omega + 1$、$\omega^{3} = 1$。于是 $\mathbb{F}_{4} = \{0, 1, \omega, \omega+1\}$，非零元构成 3 阶循环群。
