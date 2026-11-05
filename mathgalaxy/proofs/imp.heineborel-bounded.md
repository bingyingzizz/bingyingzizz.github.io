# 闭区间紧（Heine–Borel）$\implies$ 闭区间上的连续函数有界
`imp.heineborel-bounded` · 推出 · strong 边 · 根 `../`

`cor.heine-borel` 有界闭 ⟺ 紧（ℝⁿ） → `prop.continuous-bounded-on-compact` 紧集上连续 ⟹ 有界

设 $X$ 紧、$f : X \to \mathbb{R}$ 连续。**① $f(X)$ 是紧的。** 取 $f(X)$ 在 $\mathbb{R}$ 中的任一开覆盖 $\{U_{i}\}_{i \in I}$，则 $\{f^{-1}(U_{i})\}$ 是 $X$ 的开覆盖（$f$ 连续 $\implies$ 每个原像是开集）；$X$ 紧 $\implies$ 存在有限 $J \subseteq I$ 使 $X = \bigcup_{i \in J} f^{-1}(U_{i})$，于是 $f(X) \subseteq \bigcup_{i \in J} U_{i}$ —— 这有限个已经覆盖 $f(X)$。所以 $f(X)$ 紧。**② 有界。** 由 `cor.heine-borel`（$\mathbb{R}$ 中紧 $\iff$ 有界且闭），$f(X)$ 有界，即存在 $M$ 使 $|f(x)| \le M$ 对一切 $x \in X$ 成立。∎

> 这条边的方向是「一般 $\implies$ 特例」：命题是紧度量空间的版本，$[a, b]$ 是它的一个实例。图上把它标出来，是因为初等微积分里大家用的都是这个特例。
