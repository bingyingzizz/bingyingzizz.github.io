# imp.polygon-diagonal
`imp.polygon-diagonal` · 推出 · strong 边 · 根 `../`

`def.jordan-curve` Jordan 曲线 + `def.convex-set` 凸集 → `lem.polygon-diagonal` 简单多边形的对角线

**第五步：$\theta^{*} = \theta_b$ 的情形（第三条的补充，同样完整）。** 这时「$\rho>0$」在整段 $(\theta_a,\theta_b)$ 上成立，于是每个方向都有唯一的第一撞击点 $z(\theta) = v + \rho(\theta)u(\theta) \in P$：唯一性是因为一条射线上不同点到 $v$ 的距离互不相同，最近的那个交点不可能有两个。

**$z$ 连续。** 若 $\theta_n \to \theta$ 而 $z(\theta_n) \to z' \ne z(\theta)$，则 $z' \in P$（$P$ 闭）、$z'$ 在射线 $\theta$ 上、且 $|vz'| \ge |vz(\theta)|$（$z(\theta)$ 是最近交点）。若严格大于，取 $\theta_n$ 充分接近 $\theta$：其第一撞击点必须落在 $z(\theta)$ 附近（否则射线要先穿过 $P$ 上 $z(\theta)$ 与 $z'$ 之间的部分），与 $z(\theta_n) \to z'$ 矛盾。故 $z$ 连续。

> 续见 proofs/imp.polygon-diagonal.7.md
