# Gauss 方程 + 结构方程 $\implies$ 高斯曲率只依赖第一基本形式
`imp.gauss-egregium` · 推出 · strong 边 · 根 `../`

`thm.gauss-equation` Gauss 方程 + `thm.structure-equations` 结构方程 → `thm.theorema-egregium` 绝妙定理

（$\mathbb{R}^{3}$ 的曲率形式为零，$\Omega^{1}{}_{2}=0$，于是 $\mathrm{d}\omega^{1}{}_{2}+\omega^{1}_{\ 3}\wedge\omega^{3}_{\ 2}=0$，而 $\omega^{3}_{\ 2}=-\omega^{2}_{\ 3}$。）又 $\omega^{1}_{\ 3} = h_{11}\omega^{1}+h_{12}\omega^{2}$、$\omega^{2}_{\ 3} = h_{21}\omega^{1}+h_{22}\omega^{2}$，故

$$\mathrm{d}\omega^{1}{}_{2} = \bigl(h_{11}h_{22}-h_{12}h_{21}\bigr)\,\omega^{1}\wedge\omega^{2} = \det(h_{ij})\,\omega^{1}\wedge\omega^{2}.$$

**第三步：读出来。** Gauss 方程把右边认成 $K\,\omega^{1}\wedge\omega^{2}$，所以 $K = \det(h_{ij})$。

> 续见 proofs/imp.gauss-egregium.4.md
