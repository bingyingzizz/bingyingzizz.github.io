# Wilson 定理：把单位群的元素两两配对成逆
`imp.nt-wilson` · 推出 · strong 边 · 根 `../`

`def.zmodn` 剩余类环 → `cor.wilson` Wilson 定理

$p$ 素时 $G = (\mathbb{Z}/p\mathbb{Z})^{\times}$ 有 $p-1$ 个元素。方程 $x^{2} = 1$ 在域 $\mathbb{F}_{p}$ 里至多两个根，即 $[1]$ 与 $[-1]$。



其余 $p-3$ 个元素按「$x \leftrightarrow x^{-1}$」配对，每对乘积为 $1$（且每对的两个元素不同，否则 $x = x^{-1}$ 即 $x^{2} = 1$）。



于是 $(p-1)! \equiv 1^{p-3 \over 2} \cdot 1 \cdot (-1) \equiv -1 \pmod p$。



反过来若 $n$ 合数（$n > 4$），写 $n = ab$ 且 $1 < a, b < n$，则 $a \mid (n-1)!$ 与 $b \mid (n-1)!$，在 $\gcd(a,b) = 1$ 时得 $n \mid (n-1)!$；$\gcd(a,b) > 1$ 的情形改用 $n$ 的一个真因子与 $n/\text{它}$ 同样论证，仍得 $n \mid (n-1)!$。故不可能 $\equiv -1$。
