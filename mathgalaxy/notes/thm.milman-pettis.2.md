# Milman–Pettis 定理　`thm.milman-pettis`　·　说明
根 `../`

**第三步：归一化。** 令 $y_\alpha = x_\alpha / \|x_\alpha\|$（最终有定义），则 $y_\alpha \in S_X$ 且 $\|y_\alpha - x_\alpha\| = |1 - \|x_\alpha\|| \to 0$。于是 $\operatorname{Re}\varphi(y_\alpha) \to \operatorname{Re}\varphi(\xi) > 1 - \delta/2$。

**第四步：$(y_\alpha)$ 是范数 Cauchy。** 取 $\alpha, \beta$ 充分大。若 $\|y_\alpha - y_\beta\| \ge \varepsilon$，由一致凸（两个单位向量距离 $\ge \varepsilon$）得

$$\left\| \frac{y_\alpha + y_\beta}{2} \right\| \le 1 - \delta.$$

> 续见 notes/thm.milman-pettis.3.md
