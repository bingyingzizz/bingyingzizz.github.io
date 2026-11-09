# 度量连续 $\iff$ $\varepsilon$-$\delta$ 判据
`eq.real-continuity-epsilon-delta` · 等价 · strong 边 · 根 `../`

`def.metric-continuity` 度量空间的连续 → `def.continuous` 连续（ε-δ 判据）

**度量连续 ⇒ ε-δ**

在 $(\mathbb{R}, d)$、$d(x, y) = |x - y|$ 中，$d(x, x_0) < \delta$ 就是 $|x - x_0| < \delta$，$d(f(x), f(x_0)) < \varepsilon$ 就是 $|f(x) - f(x_0)| < \varepsilon$。
把 `def.metric-continuity` 的定义逐字代入即得 $\varepsilon$-$\delta$ 式。$\blacksquare$

**ε-δ ⇒ 度量连续**

反之，若 $\varepsilon$-$\delta$ 式成立，则取度量定义中的 $\delta$ 为同一个 $\delta$，即满足 `def.metric-continuity` 的每点连续定义。$\blacksquare$

> 两个方向都只是把 $|\cdot|$ 改写成度量 $d$，没有实质数学内容；但它把「$\mathbb{R}$ 上的 $\varepsilon$-$\delta$」与「一般度量空间的连续性」正式接上。
