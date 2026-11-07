# Cauchy–Goursat 造引理 A，Cauchy 积分 + 有理逼近推 Runge
`imp.runge` · 推出 · strong 边 · 根 `../`

`thm.cauchy-goursat` Cauchy–Goursat 积分定理 + `thm.cauchy-integral-formula` Cauchy 积分公式 → `thm.runge` Runge 逼近定理

**推极点**：同一连通分支内用折线把极点逐步搬运：取 $b_{0},\ldots,b_{N}$ 使 $|b_{i+1}-b_{i}| < \operatorname{dist}(b_{i},K)$，则几何级数 $\frac{1}{b_{i+1}-z} = \sum_{k\ge0}\frac{(b_{i}-b_{i+1})^{k}}{(b_{i}-z)^{k+1}}$ 在 $K$ 上一致收敛，截断即得一致逼近。于是极点可搬到 $\mathbb{C}\setminus K$ 每个分支里预先指定的点；无洞时搬到 $\infty$ 并用 $\frac{1}{b'-z}=\sum_{k\ge0}\frac{z^{k}}{(b')^{k+1}}$ 截断成多项式。有洞时同一条路走不通，只能停在有理函数。∎

> Runge 与 Mittag-Leffler、Weierstrass 乘积是三兄弟：逼近 / 造主部 / 造零点 —— 这只是类比、不是定理依赖，故 Mittag-Leffler 不在 sources 里。
