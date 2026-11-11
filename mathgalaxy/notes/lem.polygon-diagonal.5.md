# 简单多边形的对角线　`lem.polygon-diagonal`　·　说明
根 `../`

**$z$ 连续。** 若 $\theta_n \to \theta$ 而 $z(\theta_n) \to z' \ne z(\theta)$，则 $z' \in P$（$P$ 闭）、$z'$ 在射线 $\theta$ 上、且 $|vz'| \ge |vz(\theta)|$（$z(\theta)$ 是最近交点）。若严格大于，取 $\theta_n$ 充分接近 $\theta$：其第一撞击点必须落在 $z(\theta)$ 附近（否则射线要先穿过 $P$ 上 $z(\theta)$ 与 $z'$ 之间的部分），与 $z(\theta_n) \to z'$ 矛盾。故 $z$ 连续。

**端点极限。** $\theta \to \theta_a^{+}$ 时 $z(\theta)$ 收敛到射线 $\theta_a$ 上的某点 $z_a \in P$，而射线 $\theta_a$ 与 $P$ 的交正是线段 $va$，故 $z_a \in [v,a]$；同理 $\theta \to \theta_b^{-}$ 时 $z_b \in [v,b]$。

> 续见 notes/lem.polygon-diagonal.6.md
