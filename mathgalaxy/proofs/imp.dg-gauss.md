# 结构方程拆出 $k=3$ 项 $\implies$ Gauss 方程
`imp.dg-gauss` · 推出 · strong 边 · 根 `../`

`thm.structure-equations` 结构方程 + `lem.adapted-frame` 适配标架 + `lem.second-form-symmetric` 第二基本形式对称 → `thm.gauss-equation` Gauss 方程

第二结构方程 $\mathrm{d}\omega^{i}_{\ j} = \sum_{k=1}^{3}\omega^{k}_{\ j}\wedge\omega^{i}_{\ k}$ 取 $i, j \in \{1,2\}$，把 $k$ 拆成 $1,2,3$：

$$\mathrm{d}\omega^{1}_{\ 2} = \omega^{1}_{\ 2}\wedge\omega^{1}_{\ 1}+\omega^{2}_{\ 2}\wedge\omega^{1}_{\ 2}+\omega^{3}_{\ 2}\wedge\omega^{1}_{\ 3}.$$

前两项因 $\omega^{1}_{\ 1} = \omega^{2}_{\ 2} = 0$ 消失（`prop.connection-antisymmetric`）；最后一项用 $\omega^{3}_{\ 2} = -\omega^{2}_{\ 3}$：

$$\mathrm{d}\omega^{1}_{\ 2} = \omega^{1}_{\ 3}\wedge\omega^{2}_{\ 3}.$$

> 续见 proofs/imp.dg-gauss.2.md
