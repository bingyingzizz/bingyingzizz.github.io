# Runge 逼近定理　`thm.runge`　·　说明
根 `../`

**证明思路（骨架）**：先把「在紧集上逼近」化归成「用 Cauchy 积分表示 + 离散化积分」。由 Cauchy 积分公式（`thm.cauchy-integral-formula`），$f(z) = \frac{1}{2\pi i}\oint_{\Gamma}\frac{f(\zeta)}{\zeta - z}\,\mathrm{d}\zeta$，把积分用 Riemann 和逼近，得到形如 $\sum_{j} \frac{c_{j}}{\zeta_{j} - z}$ 的有理函数（极点在 $\Gamma$ 上）。

第二步是**把极点挪出去**：$\frac{1}{\zeta - z}$ 关于 $z$ 在 $K$ 上可以展开成幂级数（$|z| < |\zeta|$），于是「极点在洞外」的有理函数能用多项式一致逼近 —— 这一步靠「$\mathbb{C}\setminus K$ 连通」保证洞外的点可以被「推到无穷远」。有洞时推不出去，只能停在有理函数。∎

⭐ **它和 Mittag-Leffler（`thm.mittag-leffler`）、Weierstrass 乘积（`thm.weierstrass-product`）是三兄弟**：Runge 管「逼近」、Mittag-Leffler 管「造指定主部」、Weierstrass 管「造指定零点」。三者都回答同一个问题：**在区域上能造出什么样的全纯/亚纯函数**。

> 续见 notes/thm.runge.2.md
