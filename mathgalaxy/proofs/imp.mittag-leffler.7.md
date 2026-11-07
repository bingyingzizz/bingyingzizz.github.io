# Runge 定理与 Weierstrass 分解 $\implies$ Mittag-Leffler
`imp.mittag-leffler` · 推出 · strong 边 · 根 `../`

`def.entire-meromorphic` 整函数与亚纯函数 + `thm.runge` Runge 逼近定理 + `thm.weierstrass-convergence` Weierstrass 收敛性定理 → `thm.mittag-leffler` Mittag-Leffler 定理

$$|P_k-T_k|<2\cdot 2^{-k}\qquad(z\in K_{n_k}).$$

**第四步：级数与主部。** 令 $f=\sum_k(P_k-T_k)$。在 $K_m$ 上只有有限多个 $k$ 满足 $n_k<m$；其余项由 $K_m\subset K_{n_k}$ 得 $|P_k-T_k|<2\cdot2^{-k}$，故级数在 $K_m$ 上一致收敛（Weierstrass 判别法）。在 $a_k$ 处，$T_k$ 与所有 $P_j$（$j\ne k$）全纯，故 $f-P_k$ 全纯，主部正是 $P_k$。

> 续见 proofs/imp.mittag-leffler.8.md
