# Milman–Pettis 定理　`thm.milman-pettis`　·　说明
根 `../`

但 $\operatorname{Re}\varphi\left(\frac{y_\alpha + y_\beta}{2}\right) > 1 - \delta/2$，而 $\operatorname{Re}\varphi(z) \le \|\varphi\|\,\|z\| = \|z\|$，故 $\|(y_\alpha + y_\beta)/2\| > 1 - \delta/2 > 1 - \delta$，矛盾。所以最终 $\|y_\alpha - y_\beta\| < \varepsilon$，$(y_\alpha)$ 是范数 Cauchy。由 $\|y_\alpha - x_\alpha\| \to 0$，$(x_\alpha)$ 也是范数 Cauchy。

**第五步：极限落在 $X$ 里。** $X$ 完备，故存在 $x \in X$ 使 $\|x_\alpha - x\| \to 0$。范数收敛蕴含弱*收敛：$J_X x_\alpha \to J_X x$。另一方面 $J_X x_\alpha = x_\alpha \to \xi$（弱*）。弱*拓扑 Hausdorff，极限唯一，故 $\xi = J_X x$。于是 $J_X$ 满射，$X$ 自反。∎

**用到的外部输入**：只有 `thm.goldstine`（它由 `thm.hahn-banach` 与 `thm.banach-alaoglu` 推出，见各自的注释）。弱*拓扑与网收敛的语言在 `thm.goldstine` 与 `thm.banach-alaoglu` 的注释里给出，本条不再另立定义节点。

> 续见 notes/thm.milman-pettis.4.md
