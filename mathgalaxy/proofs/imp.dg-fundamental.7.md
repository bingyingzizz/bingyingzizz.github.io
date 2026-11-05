# 结构方程 $+$ Gauss–Codazzi $\implies$ 曲面论基本定理
`imp.dg-fundamental` · 推出 · strong 边 · 根 `../`

`thm.structure-equations` 结构方程 + `thm.gauss-equation` Gauss 方程 + `thm.codazzi-mainardi` Codazzi–Mainardi 方程 → `thm.fundamental-theorem-surfaces` 曲面论基本定理

因 $\omega^{i}_{\ j}$ 反称，$\langle e_{i}, e_{j}\rangle$ 的导数全为零，初值取标准正交即保证解处处正交。
4. 再解 $\mathrm{d}r = \sum_{i}\omega^{i}e_{i}$：相容性 $\mathrm{d}(\omega^{i}e_{i}) = 0$ 正是第一结构方程，已成立；单连通给出 $r$。
5. 验证：$I = \sum_{i}(\omega^{i})^{2} = \sum_{ij}g_{ij}\mathrm{d}u^{i}\mathrm{d}u^{j}$ ✓（第 1 步取法就是这么定的）。至于 $II$，由第 2 步

$$II = -\sum_{i=1}^{2}\omega^{i}\omega^{i}_{\ 3} = \sum_{ij}\tilde h_{ij}\omega^{i}\omega^{j} = \sum_{ij}h_{ij}\mathrm{d}u^{i}\mathrm{d}u^{j},$$

最后一步把 $\omega^{i} = \sum_{k}A^{i}_{\ k}\mathrm{d}u^{k}$ 代回即可 —— $\tilde h$ 正是为这一步定义的。

> 续见 proofs/imp.dg-fundamental.8.md
