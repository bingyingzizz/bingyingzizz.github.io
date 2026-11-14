# Gauss 引理 + 结构方程给出测地极坐标的度量形式
`dep-cgc-geo` · 推出 · strong 边 · 根 `../`

`lem.gauss-lemma` Gauss 引理 + `thm.structure-equations` 结构方程 + `thm.gauss-equation` Gauss 方程 → `thm.constant-gauss-curvature` 常 Gauss 曲率曲面

**第二步（二阶，要曲率方程）**：把 $g = \mathrm{d}r^{2}+f^{2}\mathrm{d}\theta^{2}$ 代入 **Gauss 方程**（`thm.gauss-equation`，即第二结构方程在曲面上的分量）$\mathrm{d}\omega^{1}_{\ 2} = K\,\omega^{1}\wedge\omega^{2}$，两边都是 $\omega^{1}\wedge\omega^{2} = f\,\mathrm{d}r\wedge\mathrm{d}\theta$ 的倍数，比较系数得 $f_{rr} + Kf = 0$ —— 这是 $f$ 的**二阶**线性 ODE（只靠一阶的 $\mathrm{d}\omega^{2}$ 得不到它）。

> 续见 proofs/dep-cgc-geo.4.md
