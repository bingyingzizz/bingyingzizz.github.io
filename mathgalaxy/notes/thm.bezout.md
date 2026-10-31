# Bézout 恒等式　`thm.bezout`　·　说明
根 `../`

推论：$a$ 与 $b$ 互素 $\iff$ 存在 $u, v$ 使 $ua + vb = 1$。



这是解一次同余方程 $ax \equiv b \pmod n$ 的唯一工具：它有解 $\iff$ $\gcd(a, n) \mid b$，且解集是模 $n / \gcd(a, n)$ 的一个同余类。



$\mathbb{Z}[x]$ 里没有 Bézout（$\gcd(2, x) = 1$ 但 $2u + xv = 1$ 无解），所以「Bézout 整环」是一个专门的名字。
