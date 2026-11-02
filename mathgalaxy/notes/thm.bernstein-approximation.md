# Bernstein 多项式逼近　`thm.bernstein-approximation`　·　说明
根 `../`

这是 Weierstrass 逼近定理的**显式**证明：$B_n f(x) = \mathbb{E}[f(S_n/n)]$（$S_n$ 服从参数 $x$ 的二项分布），用三条恒等式（$\sum \binom nk x^k(1-x)^{n-k} = 1$、$\sum k\binom nk x^k(1-x)^{n-k} = nx$、方差 $\le n/4$）加 $f$ 的一致连续性把误差压住。

⭐ 与 Stone–Weierstrass 分工：这条给「一个显式算子列」，只对 $[0,1]$、只对实值；S-W 给「只要代数性质就够」，不管构造。两者互相印证，也互相不能替代。
