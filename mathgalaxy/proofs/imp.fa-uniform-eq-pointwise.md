# 一致等度连续 $\implies$ 逐点等度连续
`imp.fa-uniform-eq-pointwise` · 推出 · strong 边 · 根 `../`

`def.uniformly-equicontinuous` 一致等度连续 → `def.equicontinuous` 等度连续

设 $\mathcal{H}$ 一致等度连续，取定 $x_0 \in K$ 与 $\varepsilon > 0$。
由定义存在 $\eta > 0$，使得 $\delta(x, x_0) < \eta$ 时对一切 $f$ 有 $d(f(x), f(x_0)) < \varepsilon$。
取邻域 $U = B(x_0, \eta)$，即满足逐点等度连续的定义。$\blacksquare$

> 源头是特例或更强的条件、目标是独立的一般定义，这条只作逻辑包含、不分层。反向不成立（见 `def.uniformly-equicontinuous` 的反例）；紧性才是反向往回的工具。
