# Fermat 小定理　`thm.fermat-little`　·　说明
根 `../`

由 `thm.euler-theorem` 取 $n = p$、$\varphi(p) = p - 1$ 即得。也有不绕群的证明：$(1 + \cdots + 1)^{p}$ 展开后中间的二项式系数 $\binom{p}{k}$ 都被 $p$ 整除（$1 \le k \le p-1$）。



⛔ 反过来不成立：$a^{n-1} \equiv 1 \pmod n$ 对一切 $\gcd(a, n) = 1$ 的 $a$ 成立，并不推出 $n$ 是素数 —— Carmichael 数（最小的 $561 = 3\cdot 11\cdot 17$）就是这样。



用处遍地都是：求逆元 $a^{-1} \equiv a^{p-2}$、证明 $\mathbb{F}_{p}$ 里 $x^{p} = x$、以及 RSA 的正确性。
