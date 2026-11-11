# 完美配对 $\implies$ Riesz 表示框架（含 Hilbert 与 $L^{p}$ 两个特例）
`imp.fa-perfectpairing-riesz` · 推出 · strong 边 · 根 `../`

`def.perfect-pairing` 完美配对 + `def.reflexive-space` 自反空间 + `thm.projection-subspace` 闭子空间的正交投影 + `thm.lebesgue-radon-nikodym` Lebesgue–Radon–Nikodym 定理 → `thm.riesz-perfect-pairing` Riesz 表示的配对版

唯一）。$\blacksquare$

> 这条边把框架定理的三部分一起证完：(a) 只用完美配对的三条公理；(b) 另需自反性：$Y$ 自反时用 $J_Y$；对称地用 $J_X$；(c) 的两个特例分别用投影定理（`thm.projection-subspace`）与 Radon–Nikodym（`thm.lebesgue-radon-nikodym`）直接证明，不引用 `thm.riesz-hilbert` 或 `thm.riesz-representation-lp`。因 (c) 使用了层号高于本定理的分析结果，本边标 `layer:false`：它是推出，但不参与层号排序。
