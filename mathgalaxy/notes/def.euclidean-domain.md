# Euclid 整环　`def.euclidean-domain`　·　说明
根 `../`

三个例子，三种 $N$：$\mathbb{Z}$ 取 $N(a) = |a|$；$K[x]$ 取 $N(f) = \deg f$（这就是 `thm.division-algorithm`）；$\mathbb{Z}[i]$（Gauss 整数）取 $N(a+bi) = a^{2}+b^{2}$。



为什么它值钱：后面所有算术（$\gcd$、Bézout、唯一分解）的证明**只用到「余数下降」**这一条，所以整条链在 Euclid 整环里一次性成立（`imp.ring-euclid-pid` 起）。



Euclid 整环 $\implies$ PID 的证明要点：取理想 $I \ne 0$，在其中选 $N$ 最小的 $b$，则任何 $a \in I$ 除以 $b$ 的余数 $r = a - qb \in I$ 满足 $N(r) < N(b)$，只能 $r = 0$，故 $I = (b)$。
