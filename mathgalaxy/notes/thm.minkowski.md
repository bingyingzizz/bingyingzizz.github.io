# Minkowski 不等式　`thm.minkowski`　·　说明
根 `../`

$p = 1$ 就是积分的三角不等式，显然。

一般 $p$ 的证明：



$$\int |f+g|^p = \int |f+g| \cdot |f+g|^{p-1} \le \int (|f| + |g|) |f+g|^{p-1} \le \left( \|f\|_p + \|g\|_p \right) \left\| |f+g|^{p-1} \right\|_q$$



其中最后一步是对 $|f| \cdot |f+g|^{p-1}$ 与 $|g| \cdot |f+g|^{p-1}$ 各用一次 Hölder。再注意



$$\left\| |f+g|^{p-1} \right\|_q^{\,q} = \int |f+g|^{(p-1)q} = \int |f+g|^p$$



两边约掉一个 $\|f+g\|_p^{p/q}$ 即得。∎

⭐ 有了它，$\|\cdot\|_p$ 才真的成为**范数** —— 这是下面「$L^p$ 是 Banach 空间」的前提。
