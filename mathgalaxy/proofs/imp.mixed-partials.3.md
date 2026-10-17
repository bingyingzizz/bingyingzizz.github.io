# 一元中值定理用两次 $\implies$ 混合偏导可交换
`imp.mixed-partials` · 推出 · strong 边 · 根 `../`

`thm.mvt` Lagrange 中值定理 + `def.partial-derivative` 偏导数 → `thm.mixed-partials` 混合偏导相等

$$\partial_2\partial_1 f(\xi, \eta) = \partial_1\partial_2 f(\xi', \eta')$$
令 $h, k \to 0$：此时 $\xi, \xi' \to a_1$、$\eta, \eta' \to a_2$，由两个混合偏导**在 $a$ 处连续**，两边分别趋于 $\partial_2\partial_1 f(a)$ 与 $\partial_1\partial_2 f(a)$，故两者相等。∎

> ⚠ 连续性只用在最后一步（取极限）。这也解释了为什么去掉连续性就有反例 —— 中间那两个点 $(\xi, \eta)$ 与 $(\xi', \eta')$ **不同**，没有连续性就没法把两个不同的点上的值拉到一起。
