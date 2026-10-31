# $\mathrm{d}\omega^{3} = 0$ $\implies$ 第二基本形式的系数对称
`imp.dg-hsym` · 推出 · strong 边 · 根 `../`

`lem.adapted-frame` 适配标架 + `thm.structure-equations` 结构方程 → `lem.second-form-symmetric` 第二基本形式对称

记 $\omega^{i}_{\ 3} = \sum_{j}c_{ij}\omega^{j}$（$i, j = 1,2$；因为 $\omega^{3} = 0$，这两个形式只能落在 $\omega^{1}, \omega^{2}$ 张成的空间里）。代入 $\mathrm{d}\omega^{3} = \omega^{1}\wedge\omega^{3}_{\ 1}+\omega^{2}\wedge\omega^{3}_{\ 2} = 0$：

$$0 = \omega^{1}\wedge(c_{11}\omega^{1}+c_{12}\omega^{2})+\omega^{2}\wedge(c_{21}\omega^{1}+c_{22}\omega^{2}) = (c_{12}-c_{21})\,\omega^{1}\wedge\omega^{2}.$$

$\omega^{1}\wedge\omega^{2} \ne 0$（两个独立的 $1$-形式之外积非零），故 $c_{12} = c_{21}$。取 $h_{ij} := -c_{ij}$，则 $(h_{ij})$ 对称，$II = \sum_{i,j}h_{ij}\omega^{i}\omega^{j}$ 也就成了对称双线性形式。∎
