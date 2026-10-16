# 闭区间紧（Heine–Borel）$\implies$ 闭区间上的连续函数有界
`imp.heineborel-bounded` · 推出 · strong 边 · 根 `../`

`cor.heine-borel` 有界闭 ⟺ 紧（ℝⁿ） → `prop.continuous-bounded-on-compact` 紧集上连续 ⟹ 有界

在 $\mathbb{R}$ 上取 $X = [a, b]$。由 Heine–Borel，$[a, b]$ 是 $\mathbb{R}$ 的有界闭子集，从而是紧的。于是「紧空间上的连续实值函数有界」这条命题**原封不动地**适用于 $X = [a, b]$，结论就是：$[a, b]$ 上的连续函数有界。∎

> 这条边的方向是「一般 $\implies$ 特例」：命题是紧度量空间的版本，$[a, b]$ 是它的一个实例。图上把它标出来，是因为初等微积分里大家用的都是这个特例。
