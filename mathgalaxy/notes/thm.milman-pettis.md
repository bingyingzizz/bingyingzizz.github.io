# Milman–Pettis 定理　`thm.milman-pettis`　·　说明
根 `../`

**证明**。设 $X$ 一致凸（`def.uniformly-convex`），$\delta(\varepsilon)$ 是其模。要证 $J_X : X \to X^{**}$ 满射。$\xi = 0$ 显然；设 $\|\xi\| = 1$。取 $\varepsilon \in (0,2]$，令 $\delta = \delta(\varepsilon)$。

**第一步：造弱*收敛到 $\xi$ 的网。** 由 `thm.goldstine`，$J_X(B_X)$ 在 $B_{X^{**}}$ 的弱*拓扑下稠密，故存在网 $(x_\alpha) \subset B_X$ 使 $x_\alpha \to \xi$（弱*）。

**第二步：$\|x_\alpha\| \to 1$。** 由 $\|\xi\| = \sup\{\,|\xi(\varphi)| : \varphi \in X^{*},\ \|\varphi\| \le 1\,\}$ 取 $\varphi \in X^{*}$、$\|\varphi\| = 1$ 使 $\operatorname{Re}\varphi(\xi) > 1 - \delta/2$。弱*收敛给 $\operatorname{Re}\varphi(x_\alpha) \to \operatorname{Re}\varphi(\xi)$；而 $\operatorname{Re}\varphi(x_\alpha) \le \|x_\alpha\| \le 1$，故最终 $\|x_\alpha\| > 1 - \delta/2$，即 $\|x_\alpha\| \to 1$。

> 续见 notes/thm.milman-pettis.2.md
