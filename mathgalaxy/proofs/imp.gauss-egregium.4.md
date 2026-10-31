# Gauss 方程 + 结构方程 $\implies$ 高斯曲率只依赖第一基本形式
`imp.gauss-egregium` · 推出 · strong 边 · 根 `../`

`thm.gauss-equation` Gauss 方程 + `thm.structure-equations` 结构方程 → `thm.theorema-egregium` 绝妙定理

$$\mathrm{d}\omega^{1}{}_{2} = \bigl(h_{11}h_{22}-h_{12}h_{21}\bigr)\,\omega^{1}\wedge\omega^{2} = \det(h_{ij})\,\omega^{1}\wedge\omega^{2}.$$

**第三步：读出来。** Gauss 方程把右边认成 $K\,\omega^{1}\wedge\omega^{2}$，所以 $K = \det(h_{ij})$。右边是 $I$-侧的量（第一步只用了 $I$），左边 $\det h$ 是外蕴的主曲率之积 —— 两者相等即「$K$ 只依赖 $I$」。$\blacksquare$

> 这条把两个包接上：曲率形式这条路**不需要** Christoffel 符号的坐标计算，只需要第一、第二结构方程与 $\omega^{3}=0$。
