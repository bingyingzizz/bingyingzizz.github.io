# 连续 + 沿闭三角形积分为零 $\implies$ 全纯
`imp.morera` · 推出 · strong 边 · 根 `../`

`def.contour-integral` 复围道积分 + `def.holomorphic` 全纯函数 → `thm.morera` Morera 定理

要说明它与折线的具体走法无关：两条从 $a$ 到 $z$ 的折线围成一个多边形，把多边形三角剖分，每个三角形的边界积分都是零（假设），内部边两两抵消，故两条折线的积分相等。（这就是「矩形假设」的用处：矩形沿对角线分成两个三角形。）

**第二步：$F' = f$。** 沿水平方向把终点挪 $h$（$h$ 为实数）：

$$F(z + h) - F(z) = \int_{x}^{x + h} f(t + i y)\,\mathrm{d}t,$$

除以 $h$ 后用 $f$ 的**连续性**：$\dfrac{1}{h}\displaystyle\int_x^{x+h} f(t + iy)\,\mathrm{d}t \to f(x + iy) = f(z)$（$h \to 0$）。竖直方向同理。所以 $F$ 在 $D(a, r)$ 内复可微且 $F' = f$。

> 续见 proofs/imp.morera.3.md
