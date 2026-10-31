# 结构方程 $+$ Gauss–Codazzi $\implies$ 曲面论基本定理
`imp.dg-fundamental` · 推出 · strong 边 · 根 `../`

`thm.structure-equations` 结构方程 + `thm.gauss-equation` Gauss 方程 + `thm.codazzi-mainardi` Codazzi–Mainardi 方程 → `thm.fundamental-theorem-surfaces` 曲面论基本定理

 都成立。
3. 于是线性方程组 $\mathrm{d}e_{i} = \sum_{j}\omega^{j}_{\ i}e_{j}$ 满足 Frobenius 可积性条件，在单连通 $U$ 上局部有解；因 $\omega^{i}_{\ j}$ 反称，$\langle e_{i}, e_{j}\rangle$ 的导数全为零，初值取标准正交即保证解处处正交。
4. 再解 $\mathrm{d}r = \sum_{i}\omega^{i}e_{i}$：相容性 $\mathrm{d}(\omega^{i}e_{i}) = 0$ 正是第一结构方程，已成立；单连通给出 $r$。
5. 验证：$I = \sum_{i}(\omega^{i})^{2} = g$（第 1 步的取法），$II = -\sum_{i}\omega^{i}\omega^{i}_{\ 3} = \sum_{i,j}h_{ij}\omega^{i}\omega^{j} = h$（第 2 步的取法 $c = -h$）。

> 续见 proofs/imp.dg-fundamental.4.md
