# Runge 定理与 Weierstrass 分解 $\implies$ Mittag-Leffler
`imp.mittag-leffler` · 推出 · strong 边 · 根 `../`

`def.entire-meromorphic` 整函数与亚纯函数 + `thm.runge` Runge 逼近定理 + `thm.weierstrass-convergence` Weierstrass 收敛性定理 → `thm.mittag-leffler` Mittag-Leffler 定理

$$|P_k-T_k|<2\cdot 2^{-k}\qquad(z\in K_{n_k}).$$

**第四步：级数与主部。** 令 $f=\sum_k(P_k-T_k)$。在 $K_m$ 上只有有限多个 $k$ 满足 $n_k<m$；其余项由 $K_m\subset K_{n_k}$ 得 $|P_k-T_k|<2\cdot2^{-k}$，故级数在 $K_m$ 上一致收敛（Weierstrass 判别法）。在 $a_k$ 处，$T_k$ 与所有 $P_j$（$j\ne k$）全纯，故 $f-P_k$ 全纯，主部正是 $P_k$。

**第五步：唯一性。** 两个解之差在 $\Omega$ 上无极点，是整函数。$\blacksquare$

> 证明只引用本图的 `thm.runge`（其陈述已包含「极点预先指定」）与紧集穷竭。目标节点注里有逐步展开，并指出两处常见错误（在 $a_k$ 处取 Taylor 多项式、用多项式在绕 $a_k$ 的圆周上逼近 $1/(z-a_k)$）。
