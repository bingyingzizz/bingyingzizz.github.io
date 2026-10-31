# 结构方程　`thm.structure-equations`　·　说明
根 `../`

**为什么叫「结构」**：这两条方程决定「标架怎么动」的全部约束。给定余标架与联络，曲面的形状连同它在 $\mathbb{R}^{3}$ 里的位置就定了；反过来要检查的相容性只有 $\mathrm{d}^{2}=0$。曲面论基本定理就是把这句话做成定理。

**曲率形式**：一般流形上第二式的右端不为零，那一项叫曲率形式 $\Omega^{i}_{\ j} := \mathrm{d}\omega^{i}_{\ j}+\sum_{k}\omega^{i}_{\ k}\wedge\omega^{k}_{\ j}$；$\mathbb{R}^{3}$ 上 $\Omega \equiv 0$。限制到曲面上时它变成 $\Omega^{i}_{\ j} = \omega^{i}_{\ 3}\wedge\omega^{j}_{\ 3}$ —— 这就是 Gauss 方程。

把同一件事写成「$r_{ij} = \Gamma^{k}_{\ ij}r_{k}+h_{ij}n$、$n_{i} = -h^{j}_{\ i}r_{j}$ 的混合偏导可交换（可积性条件）」。这里只是把「混合偏导」换成 $\mathrm{d}^{2}=0$、把 $\Gamma$ 换成 $\omega$：同一个相容性，写法更短。

> 续见 notes/thm.structure-equations.2.md
