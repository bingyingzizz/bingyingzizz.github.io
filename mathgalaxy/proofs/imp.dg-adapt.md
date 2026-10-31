# 沿曲面取 $e_{3} = n$ $\implies$ $\omega^{3} = 0$
`imp.dg-adapt` · 推出 · strong 边 · 根 `../`

`thm.structure-equations` 结构方程 + `def.regular-surface` 曲面与参数化 → `lem.adapted-frame` 适配标架

对任意切向量 $v$：$\omega^{3}(v) = \langle \mathrm{d}r(v), e_{3}\rangle = \langle \mathrm{d}r(v), n\rangle = 0$ —— $\mathrm{d}r(v)$ 是曲面的切向量（$r$ 的像落在 $S$ 里），与法向正交。故 $\omega^{3}$ 沿曲面为零，于是 $\mathrm{d}\omega^{3} = 0$。

把 $i = 3$ 代入第一结构方程（含 $\omega^{3}$ 的项全部消失）：

$$0 = \mathrm{d}\omega^{3} = \omega^{1}\wedge\omega^{3}_{\ 1}+\omega^{2}\wedge\omega^{3}_{\ 2}.$$

> 续见 proofs/imp.dg-adapt.2.md
