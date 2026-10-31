# Euler 定理：Lagrange 定理在单位群上的特例
`imp.nt-lagrange-euler` · 推出 · strong 边 · 根 `../`

`thm.lagrange` Lagrange 定理 → `thm.euler-theorem` Euler 定理

设 $G = (\mathbb{Z}/n\mathbb{Z})^{\times}$，$|G| = \varphi(n)$（因为 $[a]$ 可逆 $\iff$ $\gcd(a, n) = 1$）。



对任意 $[a] \in G$，考虑由 $[a]$ 生成的循环子群 $H = \langle [a] \rangle$。由 Lagrange 定理（`thm.lagrange`），$|H| \mid |G|$，即 $|G| = |H| \cdot m$。



而 $[a]^{|H|} = 1$（循环群的阶就是元素的阶），故 $[a]^{|G|} = ([a]^{|H|})^{m} = 1$。换回同余语言：$a^{\varphi(n)} \equiv 1 \pmod n$。
