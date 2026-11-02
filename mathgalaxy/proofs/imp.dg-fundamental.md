# 结构方程 $+$ Gauss–Codazzi $\implies$ 曲面论基本定理
`imp.dg-fundamental` · 推出 · strong 边 · 根 `../`

`thm.structure-equations` 结构方程 + `thm.gauss-equation` Gauss 方程 + `thm.codazzi-mainardi` Codazzi–Mainardi 方程 → `thm.fundamental-theorem-surfaces` 曲面论基本定理

**必要性**：任何曲面都满足 Gauss 与 Codazzi（前面两条定理），因为 $\mathbb{R}^{3}$ 的曲率形式恒为零。

**充分性（构造）**：给定 $g, h$。

1. 由 $g$ 取正交余标架 $\omega^{1}, \omega^{2}$（使 $g = (\omega^{1})^{2}+(\omega^{2})^{2}$，代数地可取），第一结构方程 $\mathrm{d}\omega^{1} = \omega^{2}\wedge\omega^{1}_{\ 2}$、$\mathrm{d}\omega^{2} = -\omega^{1}\wedge\omega^{1}_{\ 2}$ 唯一确定 $\omega^{1}_{\ 2}$。
2. 令 $c := -h$、$\omega^{i}_{\ 3} := \sum_{j}c_{ij}\omega^{j}$。

Gauss 方程保证 $\Omega^{1}_{\ 2} = \omega^{1}_{\ 3}\wedge\omega^{2}_{\ 3}$（即 $\Omega^{1}_{\ 2}$ 与曲率一致），Codazzi 保证 $\Omega^{i}_{\ 3} = 0$；

> 续见 proofs/imp.dg-fundamental.2.md
