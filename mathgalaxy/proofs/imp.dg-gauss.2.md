# 结构方程拆出 $k=3$ 项 $\implies$ Gauss 方程
`imp.dg-gauss` · 推出 · strong 边 · 根 `../`

`thm.structure-equations` 结构方程 + `lem.adapted-frame` 适配标架 + `lem.second-form-symmetric` 第二基本形式对称 → `thm.gauss-equation` Gauss 方程

代入 $\omega^{i}_{\ 3} = \sum_{j}c_{ij}\omega^{j}$ 并用 $c_{12} = c_{21}$：

$$\omega^{1}_{\ 3}\wedge\omega^{2}_{\ 3} = (c_{11}c_{22}-c_{12}^{2})\,\omega^{1}\wedge\omega^{2}.$$

按定义 $\mathrm{d}\omega^{1}_{\ 2} = K\omega^{1}\wedge\omega^{2}$，故 $K = \det(c_{ij})$。又 $h = -c$，而 $\det(-c) = \det c$（$2\times2$），故 $K = \det(h_{ij})$。在参数网 $\{r_{u}, r_{v}\}$ 下 $h$ 与 $g$ 是同一对基下的两个矩阵，于是 $K = \det h/\det g = (LN-M^{2})/(EG-F^{2})$。

> 续见 proofs/imp.dg-gauss.3.md
