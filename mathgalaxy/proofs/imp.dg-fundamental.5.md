# 结构方程 $+$ Gauss–Codazzi $\implies$ 曲面论基本定理
`imp.dg-fundamental` · 推出 · strong 边 · 根 `../`

`thm.structure-equations` 结构方程 + `thm.gauss-equation` Gauss 方程 + `thm.codazzi-mainardi` Codazzi–Mainardi 方程 → `thm.fundamental-theorem-surfaces` 曲面论基本定理

逐块拆开：由 $\omega^{3}_{\ 2} = -\omega^{2}_{\ 3}$ 得 $\Omega^{1}_{\ 2} = \mathrm{d}\omega^{1}_{\ 2}-\omega^{1}_{\ 3}\wedge\omega^{2}_{\ 3}$，故 $\Omega^{1}_{\ 2} = 0$ **就是** Gauss 方程 $\mathrm{d}\omega^{1}_{\ 2} = \omega^{1}_{\ 3}\wedge\omega^{2}_{\ 3}$；而 $\Omega^{i}_{\ 3} = \mathrm{d}\omega^{i}_{\ 3}+\sum_{j=1}^{2}\omega^{i}_{\ j}\wedge\omega^{j}_{\ 3} = 0$ **就是** Codazzi 方程。$\Omega^{i}_{\ i} = 0$ 自动成立，切指标里只剩 $(1,2)$ 一个独立分量。

> 续见 proofs/imp.dg-fundamental.6.md
