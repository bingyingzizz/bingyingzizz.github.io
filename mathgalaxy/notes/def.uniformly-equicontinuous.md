# 一致等度连续　`def.uniformly-equicontinuous`　·　说明
根 `../`

一致等度连续 $\implies$ 逐点等度连续（取 $y = x_0$ 即得逐点定义），见 `imp.fa-uniform-eq-pointwise`。

反向在 $K$ 紧时成立：`thm.equicontinuous-uniform`（证明用有限覆盖 / Lebesgue 数）。

⚠️ 非紧时反向不成立：$K = \mathbb{R}$、$f_n(x) = x/n$ 的族逐点等度连续（每点附近振幅一致小），但在 $\mathbb{R}$ 上不一致等度连续（$|f_n(n) - f_n(n+1)| = 1/n$，$\eta$ 需随 $n$ 变）。

⭐ Arzelà–Ascoli 的「等度连续」在紧度量空间上就是这一条；`thm.equicontinuous-uniform` 是把逐点版本升级成它的桥。
