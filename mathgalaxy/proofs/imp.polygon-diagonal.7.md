# imp.polygon-diagonal
`imp.polygon-diagonal` · 推出 · strong 边 · 根 `../`

`def.jordan-curve` Jordan 曲线 + `def.convex-set` 凸集 → `lem.polygon-diagonal` 简单多边形的对角线

**端点极限。** $\theta \to \theta_a^{+}$ 时 $z(\theta)$ 收敛到射线 $\theta_a$ 上的某点 $z_a \in P$，而射线 $\theta_a$ 与 $P$ 的交正是线段 $va$，故 $z_a \in [v,a]$；同理 $\theta \to \theta_b^{-}$ 时 $z_b \in [v,b]$。

**于是有对角线。** $z$ 连续，故像连通；像含 $z_a$（在边 $va$ 上）与 $z_b$（在边 $vb$ 上），两条不同的边。若像里没有 $P$ 的顶点，则像落在 $P$ 去掉顶点后的若干开边之一里（连通集落在互不相交开集之并，故只落在一个里），与它同时碰到 $va,vb$ 矛盾。故存在 $\theta$ 使 $z(\theta)$ 是顶点 $p$；$p \ne v$（因为 $\rho>0$），$p \ne a,b$（否则射线方向就是 $va$ 或 $vb$，不在开区间内）。对这条射线重复第四步的闭包论证，$[v,p]$ 的内部全在 $\operatorname{int}K$ 里，即 $[v,p]$ 是对角线。

> 续见 proofs/imp.polygon-diagonal.8.md
