# imp.polygon-diagonal
`imp.polygon-diagonal` · 推出 · strong 边 · 根 `../`

`def.jordan-curve` Jordan 曲线 + `def.convex-set` 凸集 → `lem.polygon-diagonal` 简单多边形的对角线

**第四步：$[v,p]$ 的内部在 $\operatorname{int}K$ 里。** 设 $t < |vp|$。取 $\theta < \theta^{*}$ 充分接近，使 $\rho(\theta) > t$；则 $v + t\,u(\theta) \in \operatorname{int}K$。令 $\theta \to \theta^{*-}$，这些点收敛到 $v + t\,u(\theta^{*})$，故后者在 $\overline{\operatorname{int}K}$ 中。若它落在 $\partial K = P$ 上，则它就是射线 $\theta^{*}$ 的出界点，距离为 $|vp|$，与 $t < |vp|$ 矛盾。既在闭包又不在边界，故它属于 $\operatorname{int}K$。所以 $[v,p]$ 是以 $v$ 为端点的对角线（$p \ne a,b$ 由 $\theta^{*} < \theta_b$ 且 $\theta^{*} > \theta_a$ 保证）。

> 续见 proofs/imp.polygon-diagonal.6.md
