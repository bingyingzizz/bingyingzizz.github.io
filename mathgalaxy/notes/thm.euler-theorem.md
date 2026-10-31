# Euler 定理　`thm.euler-theorem`　·　说明
根 `../`

证明只有一行，但是群论的：$[a]$ 落在单位群 $G = (\mathbb{Z}/n\mathbb{Z})^{\times}$ 里，$|G| = \varphi(n)$，由 Lagrange 定理（`thm.lagrange`）得 $[a]^{|G|} = 1$。



所以这条定理的真正内容是「单位群是个有限群」—— 同余只是它的坐标写法。



$\gcd(a, n) > 1$ 时结论一般不成立：$2^{2} = 4 \equiv 0 \pmod 4$，而 $\varphi(4) = 2$。
