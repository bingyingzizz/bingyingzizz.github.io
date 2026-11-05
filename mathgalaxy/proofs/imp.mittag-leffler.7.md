# 亚纯函数的定义 $\implies$ Mittag-Leffler 定理（只给证明骨架）
`imp.mittag-leffler` · 推出 · strong 边 · 根 `../`

`def.entire-meromorphic` 整函数与亚纯函数 → `thm.mittag-leffler` Mittag-Leffler 定理

**第四步：收敛与主部。** 修正后的级数 $\sum_k (P_k - T_k)$ 在每个 $K_n$ 上一致收敛（从第 $n$ 项起每项都 $\le 2^{-k}$）。而减去的 $T_k$ 在 $a_k$ 处全纯、不影响主部，故极限函数在 $a_k$ 处的主部仍是 $P_k$。

**第五步：唯一性。** 两个解之差处处全纯（极点与主部都被消掉），是 $\Omega$ 上的整函数。$\blacksquare$

> ⚠ 这条边给的是「结构 $+$ 关键构造」：第三步的存在性依赖 **Runge 逼近定理**（这里只引不证），「把极点从 $\Omega$ 内挪到 $\hat{\mathbb{C}}\setminus\Omega$」那一步也没有展开。
