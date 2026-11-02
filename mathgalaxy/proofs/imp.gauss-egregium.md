# Gauss 方程 + 结构方程 $\implies$ 高斯曲率只依赖第一基本形式
`imp.gauss-egregium` · 推出 · strong 边 · 根 `../`

`thm.gauss-equation` Gauss 方程 + `thm.structure-equations` 结构方程 → `thm.theorema-egregium` 绝妙定理

**第一步：$\omega^{1}{}_{2}$ 由 $I$ 决定。** 取适配标架（$e_{3}=n$），则 $\omega^{3}=0$。第一结构方程给出

$$\mathrm{d}\omega^{1} = \omega^{1}{}_{2}\wedge\omega^{2}, \qquad \mathrm{d}\omega^{2} = \omega^{2}_{\ 1}\wedge\omega^{1} = -\omega^{1}{}_{2}\wedge\omega^{1}.$$

把 $\omega^{1}, \omega^{2}$ 看成 $I = (\omega^{1})^{2}+(\omega^{2})^{2}$ 给出的余标架，这两条方程就是关于 $\omega^{1}{}_{2}$ 的线性方程组。

若 $\tilde\omega^{1}{}_{2}$ 是另一解，则 $(\omega^{1}{}_{2}-\tilde\omega^{1}{}_{2})\wedge\omega^{1} = (\omega^{1}{}_{2}-\tilde\omega^{1}{}_{2})\wedge\omega^{2} = 0$；

> 续见 proofs/imp.gauss-egregium.2.md
