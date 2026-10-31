# Rodrigues 定理 $\implies$ 曲率线网的判别法
`imp.dg-curvlines` · 推出 · strong 边 · 根 `../`

`thm.rodrigues` Rodrigues 定理 + `def.principal-curvature` 主曲率 → `prop.curvature-lines` 曲率线网

以下都在非脐点处（$k_{1} \ne k_{2}$）。

**($\Longleftarrow$)** 设 $F = M = 0$。$F = 0$ 给出 $r_{u}\perp r_{v}$；$M = II(r_{u}, r_{v}) = 0$ 说明交叉项为零。记 $\varepsilon_{1}, \varepsilon_{2}$ 为 $r_{u}, r_{v}$ 单位化后的向量，则 $\{\varepsilon_{1}, \varepsilon_{2}\}$ 是正交基且 $II(\varepsilon_{1}, \varepsilon_{2}) = 0$，即 $\langle W(\varepsilon_{1}), \varepsilon_{2}\rangle = 0$，故 $W(\varepsilon_{1})\parallel\varepsilon_{1}$；同理 $W(\varepsilon_{2})\parallel\varepsilon_{2}$。两条坐标曲线都是曲率线（`thm.rodrigues` 的 (1)$\iff$(2)）。

**($\implies$)** 设 $r_{u}, r_{v}$ 都是主方向。非脐点处两个主方向对应不同特征值，谱定理给出正交性，故 $F = \langle r_{u}, r_{v}\rangle = 0$；又

> 续见 proofs/imp.dg-curvlines.2.md
