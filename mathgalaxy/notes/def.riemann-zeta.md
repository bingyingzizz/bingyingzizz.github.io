# 黎曼 ζ 函数　`def.riemann-zeta`　·　说明
根 `../`

**为什么 $\operatorname{Re}s > 1$ 就够**：$|n^{-s}| = n^{-\operatorname{Re}s}$，而 $\sum n^{-\sigma}$ 在 $\sigma > 1$ 收敛（$p$-判别法）。于是 Weierstrass 判别法给出内闭一致收敛 $\implies$ 逐项求导合法 $\implies$ 全纯。

⭐ **延拓（只记结论）**：$\zeta$ 可以延拓成 $\mathbb{C}$ 上的亚纯函数，唯一极点是一阶极点 $s = 1$，留数 $1$；并且有函数方程 $\zeta(s) = 2^{s}\pi^{s-1}\sin(\pi s/2)\,\Gamma(1-s)\,\zeta(1-s)$。⚠ **这一段本图标骨架**：延拓的标准做法（Euler–Maclaurin 或 theta 函数的 Mellin 变换）在本图没有节点，所以这里只把它当**已知结论**引用，不给证明。

📌 **$s = 2$ 的值**：$\zeta(2) = \pi^{2}/6$（Euler）；偶数处的值都由 Bernoulli 数给出，奇数处至今只知道 $\zeta(3)$ 无理（Apéry）。

> 续见 notes/def.riemann-zeta.2.md
