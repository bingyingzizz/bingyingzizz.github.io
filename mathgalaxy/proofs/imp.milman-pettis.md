# Goldstine + 一致凸 $\implies$ 自反
`imp.milman-pettis` · 推出 · strong 边 · 根 `../`

`thm.goldstine` Goldstine 定理 + `def.uniformly-convex` 一致凸 → `thm.milman-pettis` Milman–Pettis 定理

设 $\xi \in B_{X^{**}}$。Goldstine 给网 $(x_\alpha) \subset B_X$ 弱*收敛到 $\xi$；取 $\varphi$ 使 $\operatorname{Re}\varphi(\xi) > 1 - \delta/2$ 得 $\|x_\alpha\| \to 1$；归一化后由一致凸知 $(y_\alpha)$ 是范数 Cauchy，故 $x_\alpha \to x \in X$；弱*极限唯一给出 $\xi = J_X x$，$J_X$ 满射。详见节点注。∎

> 本条把 Milman–Pettis 归到 Goldstine（`thm.goldstine`）这一个外部定理上；Goldstine 自身由 `thm.hahn-banach` 与 `thm.banach-alaoglu` 支撑。
