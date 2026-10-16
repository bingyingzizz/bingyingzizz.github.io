# L^p ∩ L^r ⊆ L^q　`prop.lp-inter-lr-in-lq`　·　说明
根 `../`

这是 **Riesz–Thorin 插值定理**的初等特例：$L^q$ 范数被两端的 $L^p$、$L^r$ 范数「对数凸」地控制住。

证明：$r = \infty$ 的情形最干净 —— 此时 $\lambda = p/q$，从 $|f|^q \le \|f\|_\infty^{\,q-p} |f|^p$ 出发，



$$\|f\|_q \le \|f\|_p^{p/q} \|f\|_\infty^{1-p/q} = \|f\|_p^{\lambda} \|f\|_\infty^{1-\lambda}$$

一般 $r < \infty$ 时对



$$|f|^q = |f|^{\lambda q} \cdot |f|^{(1-\lambda)q}$$

用 Hölder，指数取 $p/(\lambda q)$ 与 $r/((1-\lambda)q)$（它们的倒数和恰好是 $1$，这正是 $\lambda$ 的定义），得到



$$\|f\|_q^q \le \left[ \int |f|^p \right]^{\lambda q/p} \left[ \int |f|^r \right]^{(1-\lambda)q/r} = \|f\|_p^{\lambda q} \|f\|_r^{(1-\lambda)q}$$

两边开 $q$ 次方即可。∎
