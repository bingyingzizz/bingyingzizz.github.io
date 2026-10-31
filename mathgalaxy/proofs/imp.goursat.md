# 三角形上的积分为零 $\implies$ 任意闭曲线上的积分为零
`imp.goursat` · 推出 · strong 边 · 根 `../`

`lem.goursat-triangle` Goursat 三角形引理 → `thm.cauchy-goursat` Cauchy–Goursat 积分定理

**三角形推出多边形。** 设 $P$ 是由折线围成的简单多边形，内部含于 $\Omega$。把 $P$ 三角剖分，每条对角线被两个三角形共用、方向相反，于是 $\oint_{\partial P} f = \sum_j \oint_{\partial T_j} f = 0$（每个三角形由引理为零）。

**多边形推出一股闭曲线。** 设 $\gamma$ 分段光滑闭曲线。任给 $\varepsilon > 0$：$\gamma$ 的像 $K$ 是紧集，$f$ 在 $K$ 的某个邻域上一致连续。取足够细的内接多边形 $P$ 逼近 $\gamma$，使折线上的积分与 $\gamma$ 上的积分之差小于 $\varepsilon$（按参数分割，每小段用 $f$ 的近似常值代替，误差由一致连续性控制）。故 $|\oint_\gamma f| \le \varepsilon$ 对一切 $\varepsilon$ 成立，得 $\oint_\gamma f = 0$。

> 续见 proofs/imp.goursat.2.md
