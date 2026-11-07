# Runge 定理与 Weierstrass 分解 $\implies$ Mittag-Leffler
`imp.mittag-leffler` · 推出 · strong 边 · 根 `../`

`def.entire-meromorphic` 整函数与亚纯函数 + `thm.runge` Runge 逼近定理 + `thm.weierstrass-convergence` Weierstrass 收敛性定理 → `thm.mittag-leffler` Mittag-Leffler 定理

**第三步：用 Runge 造修正项。** 固定 $k$。$P_k(1/(z-a_k))$ 在 $K_{n_k}$ 的邻域全纯。对 $\mathbb{C}\setminus K_{n_k}$ 的每个分支取一点：有界分支取 $\partial\Omega$ 上的点；无界分支任取一点。由 `thm.runge`（极点可预先指定在 $\mathbb{C}\setminus K$ 各分支），存在有理函数 $R_k$，极点在所取的点上，且 $|P_k-R_k|<2^{-k}$ 于 $K_{n_k}$。无界分支的极点可去掉：它的贡献形如 $c/(z-s)^j$，

> 续见 proofs/imp.mittag-leffler.6.md
