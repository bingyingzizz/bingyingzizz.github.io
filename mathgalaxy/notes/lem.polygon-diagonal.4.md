# 简单多边形的对角线　`lem.polygon-diagonal`　·　说明
根 `../`

**第四步：$[v,p]$ 的内部在 $\operatorname{int}K$ 里。** 设 $t < |vp|$。取 $\theta < \theta^{*}$ 充分接近，使 $\rho(\theta) > t$；则 $v + t\,u(\theta) \in \operatorname{int}K$。令 $\theta \to \theta^{*-}$，这些点收敛到 $v + t\,u(\theta^{*})$，故后者在 $\overline{\operatorname{int}K}$ 中。若它落在 $\partial K = P$ 上，则它就是射线 $\theta^{*}$ 的出界点，距离为 $|vp|$，与 $t < |vp|$ 矛盾。既在闭包又不在边界，故它属于 $\operatorname{int}K$。所以 $[v,p]$ 是以 $v$ 为端点的对角线（$p \ne a,b$ 由 $\theta^{*} < \theta_b$ 且 $\theta^{*} > \theta_a$ 保证）。

**第五步：$\theta^{*} = \theta_b$ 的情形（第三条的补充，同样完整）。** 这时「$\rho>0$」在整段 $(\theta_a,\theta_b)$ 上成立，于是每个方向都有唯一的第一撞击点 $z(\theta) = v + \rho(\theta)u(\theta) \in P$：唯一性是因为一条射线上不同点到 $v$ 的距离互不相同，最近的那个交点不可能有两个。

> 续见 notes/lem.polygon-diagonal.5.md
