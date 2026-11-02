# L'Hôpital 法则 $\implies$ Peano 余项
`imp.taylor-peano` · 推出 · strong 边 · 根 `../`

`thm.lhopital` L'Hôpital 法则 → `prop.taylor-peano` Taylor 公式（Peano 余项）

记 $R(x) := f(x) - \sum_{k=0}^{n} \frac{f^{(k)}(x_0)}{k!}(x - x_0)^{k}$。要证 $R(x) = o((x - x_0)^{n})$，即

$$\lim_{x \to x_0} \frac{R(x)}{(x - x_0)^{n}} = 0$$

对分子分母反复用 L'Hôpital 法则 $n$ 次：每次求导后分母降一阶、分子把多项式部分再消掉一项。$n$ 次之后

$$\frac{R^{(n)}(x)}{n!} = \frac{f^{(n)}(x) - f^{(n)}(x_0)}{n!}$$

由 $f^{(n)}$ 在 $x_0$ 连续，这个商当 $x \to x_0$ 时趋于 $0$。∎

> 所以「Peano 余项」这件事的代价是**第 $n$ 阶导数在 $x_0$ 连续**（否则 L'Hôpital 的头几步代价太大）；而 Lagrange 余项要求的是 $n+1$ 阶可导，两者是不同方向的条件。
