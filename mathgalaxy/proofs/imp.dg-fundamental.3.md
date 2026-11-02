# 结构方程 $+$ Gauss–Codazzi $\implies$ 曲面论基本定理
`imp.dg-fundamental` · 推出 · strong 边 · 根 `../`

`thm.structure-equations` 结构方程 + `thm.gauss-equation` Gauss 方程 + `thm.codazzi-mainardi` Codazzi–Mainardi 方程 → `thm.fundamental-theorem-surfaces` 曲面论基本定理

因 $\omega^{i}_{\ j}$ 反称，$\langle e_{i}, e_{j}\rangle$ 的导数全为零，初值取标准正交即保证解处处正交。
4. 再解 $\mathrm{d}r = \sum_{i}\omega^{i}e_{i}$：相容性 $\mathrm{d}(\omega^{i}e_{i}) = 0$ 正是第一结构方程，已成立；单连通给出 $r$。
5. 验证：$I = \sum_{i}(\omega^{i})^{2} = g$（第 1 步的取法），$II = -\sum_{i}\omega^{i}\omega^{i}_{\ 3} = \sum_{i,j}h_{ij}\omega^{i}\omega^{j} = h$（第 2 步的取法 $c = -h$）。

**唯一性**：两解 $(r, e_{i})$ 与 $(\tilde r, \tilde e_{i})$ 的 $\omega$ 相同，故它们的相对变换是常数（平行的正交变换），再配一次平移即重合。∎
