# 面积形式的整体选取 $\iff$ 可定向
`imp.tu-area-orientation` · 推出 · strong 边 · 根 `../`

`def.regular-surface` 曲面与参数化 + `def.area-element` 面积元 → `def.orientable-surface` 可定向曲面

设 $S$ 被参数化族 $\{r_{\alpha}\}$ 覆盖。每张卡上有单位法向 $n_{\alpha} = (r_{u}\times r_{v})/\lVert r_{u}\times r_{v}\rVert$ 与面积形式 $\omega^{1}_{\alpha}\wedge\omega^{2}_{\alpha}$。

**（$\Longleftarrow$）** 若有整体单位法向 $n$：在每张卡上 $n = \varepsilon_{\alpha}n_{\alpha}$，而 $\varepsilon_{\alpha}$ 在连通重叠处连续且只取 $\pm1$，故为常数。把每张卡的面积形式乘上 $\varepsilon_{\alpha}$，就得到一个整体不换号的 $2$-形式，于是参数变换的 Jacobi 行列式处处同号 —— 可定向。

> 续见 proofs/imp.tu-area-orientation.2.md
