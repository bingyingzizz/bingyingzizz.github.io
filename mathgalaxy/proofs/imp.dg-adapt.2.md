# 沿曲面取 $e_{3} = n$ $\implies$ $\omega^{3} = 0$
`imp.dg-adapt` · 推出 · strong 边 · 根 `../`

`thm.structure-equations` 结构方程 + `def.regular-surface` 曲面与参数化 → `lem.adapted-frame` 适配标架

这条恒等式把 $\omega^{1}_{\ 3}, \omega^{2}_{\ 3}$ 锁在 $\{\omega^{1}, \omega^{2}\}$ 张成的二维空间里：写出 $\omega^{3}_{\ i} = a_{i}\omega^{1}+b_{i}\omega^{2}+c_{i}\omega^{3}$ 代进去，比较 $\omega^{1}\wedge\omega^{3}$ 与 $\omega^{2}\wedge\omega^{3}$ 的系数即得 $c_{1} = c_{2} = 0$，于是 $\omega^{i}_{\ 3} = \sum_{j}c_{ij}\omega^{j}$。剩下的 $\omega^{1}\wedge\omega^{2}$ 系数给出 $b_{1} = a_{2}$，即系数的对称性（见 `lem.second-form-symmetric`）。∎
