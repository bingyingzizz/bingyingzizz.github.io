# 简单多边形的对角线　`lem.polygon-diagonal`　·　说明
根 `../`

**第二步：旋转射线。** 让方向 $\theta$ 从 $\overrightarrow{va}$ 连续转到 $\overrightarrow{vb}$，对每个 $\theta \in (\theta_a,\theta_b)$ 令 $\rho(\theta) = \sup\{\,t>0 : v + t\,u(\theta) \in \operatorname{int}K\,\}$。由第一步 $\rho > 0$ 在 $\theta_a$ 附近成立；$\{\rho > 0\}$ 是开集，故它是若干个开区间之并。令 $\theta^{*}$ 是含 $\theta_a$ 的那个区间的右端点。

**第三步：$\theta^{*} < \theta_b$ 时一定有对角线（这一段给出证明）。** 设 $\theta^{*} < \theta_b$。取 $\theta \to \theta^{*-}$ 时射线的出界点 $z(\theta)$（即 $v + \rho(\theta)u(\theta)$）。$z(\theta)$ 在 $\partial K = P$ 上，且当 $\theta$ 靠近 $\theta^{*}$、出界点落在某条边的**内部**时，由连续性，$\theta$ 再大一点也仍从这条边出界，即 $\rho > 0$ —— 与 $\theta^{*}$ 是端点矛盾。所以 $z(\theta^{*})$ 必是 $P$ 的一个**顶点** $p$。令 $\theta \to \theta^{*-}$ 还说明 $\rho(\theta) \to |vp|$。

> 续见 notes/lem.polygon-diagonal.4.md
