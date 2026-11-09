# Milman–Pettis 定理　`thm.milman-pettis`　·　说明
根 `../`

记 $y_\alpha = x_\alpha / \|x_\alpha\|$（当 $\|x_\alpha\| > 0$；最终成立），则 $y_\alpha \in S_X$、$\|y_\alpha - x_\alpha\| \to 0$，且 $\operatorname{Re}\varphi(y_\alpha) \to \operatorname{Re}\varphi(\xi) > 1 - \delta/2$。对充分大的 $\alpha, \beta$：若 $\|y_\alpha - y_\beta\| \ge \varepsilon$，由一致凸性 $\|(y_\alpha + y_\beta)/2\| \le 1 - \delta$，但 $\operatorname{Re}\varphi((y_\alpha + y_\beta)/2) > 1 - \delta/2 > 1 - \delta$，与 $\|\cdot\|$ 是范数矛盾；故最终 $\|y_\alpha - y_\beta\| < \varepsilon$。于是 $(y_\alpha)$ 是范数 Cauchy，$(x_\alpha)$ 也是（因两者差趋于 0）。

由 $X$ 完备，$x_\alpha \to x \in X$。范数收敛蕴含弱*收敛（$J_X x_\alpha \to J_X x$），而 $J_X x_\alpha = x_\alpha \to \xi$ 弱*；弱*极限唯一，故 $\xi = J_X x$。对 $\xi = 0$ 显然；对一般 $\xi \ne 0$ 用 $\xi/\|\xi\|$ 缩放。于是 $J_X$ 满射，$X$ 自反。$\blacksquare$（在 Goldstine 的前提下）

> 续见 notes/thm.milman-pettis.4.md
