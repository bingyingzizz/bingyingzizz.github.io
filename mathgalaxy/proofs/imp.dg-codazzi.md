# 结构方程拆出混合分量 $\implies$ Codazzi–Mainardi 方程
`imp.dg-codazzi` · 推出 · strong 边 · 根 `../`

`thm.structure-equations` 结构方程 + `lem.adapted-frame` 适配标架 → `thm.codazzi-mainardi` Codazzi–Mainardi 方程

**结构形式。** 第二结构方程取 $j = 3$：

$$\mathrm{d}\omega^{i}_{\ 3} = \sum_{k=1}^{3}\omega^{k}_{\ 3}\wedge\omega^{i}_{\ k} = \omega^{1}_{\ 3}\wedge\omega^{i}_{\ 1}+\omega^{2}_{\ 3}\wedge\omega^{i}_{\ 2},$$

最后一步丢掉 $k = 3$（$\omega^{3}_{\ 3} = 0$）。

**为什么等价于 $\nabla II$ 对称。** 设 $\bar\nabla$ 是 $\mathbb{R}^{3}$ 的平坦联络、$\nabla$ 是曲面的 Levi-Civita 联络。Gauss 公式与 Weingarten 公式为

$$\bar\nabla_{X}Y = \nabla_{X}Y+II(X,Y)n,\qquad \bar\nabla_{X}n = \mathrm{d}n(X) = -W(X).$$

> 续见 proofs/imp.dg-codazzi.2.md
