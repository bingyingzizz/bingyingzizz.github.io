# 结构方程 $+$ Gauss–Codazzi $\implies$ 曲面论基本定理
`imp.dg-fundamental` · 推出 · strong 边 · 根 `../`

`thm.structure-equations` 结构方程 + `thm.gauss-equation` Gauss 方程 + `thm.codazzi-mainardi` Codazzi–Mainardi 方程 → `thm.fundamental-theorem-surfaces` 曲面论基本定理

⚠️ 这一步不能省：定理给的是相对 $\mathrm{d}u^{i}\mathrm{d}u^{j}$ 的分量，$\tilde h$ 一般**不等于** $h$（除非 $g_{ij} = \delta_{ij}$）。例：$g = 4\,\mathrm{d}u^{2}+\mathrm{d}v^{2}$、$h = \mathrm{diag}(1,1)$ 时 $\omega^{1} = 2\,\mathrm{d}u$，$\tilde h = \mathrm{diag}(1/4,1)$。
2. 定 $\omega^{i}_{\ 3}$：取 $c_{ij} := -\tilde h_{ij}$、$\omega^{i}_{\ 3} := \sum_{j}c_{ij}\omega^{j}$（于是 $II = -\sum_{i}\omega^{i}\omega^{i}_{\ 3} = \sum_{ij}\tilde h_{ij}\omega^{i}\omega^{j}$，与第二基本形式那条定义的口径一致）。

要验证的只有「$\mathbb{R}^{3}$ 是平的」在标架上的表现，即**环境**曲率形式

> 续见 proofs/imp.dg-fundamental.4.md
