# Cauchy 中值定理 $\implies$ L'Hôpital 法则
`imp.lhopital` · 推出 · strong 边 · 根 `../`

`thm.cauchy-mvt` Cauchy 中值定理 → `thm.lhopital` L'Hôpital 法则

$$\frac{f(x)}{g(x)} - L = \Bigl(\frac{f^{\prime}(\xi)}{g^{\prime}(\xi)} - L\Bigr)\cdot\frac{g(x)-g(y)}{g(x)} + L\cdot\frac{-g(y)}{g(x)} + \frac{f(y)}{g(x)} .$$

三项分别压住：① 系数 $< \varepsilon/3$，而 $\frac{g(x)-g(y)}{g(x)} = 1 - \frac{g(y)}{g(x)} \to 1$，故 $x$ 够靠近 $x_0$ 时该因子 $\le 2$（**这就是「控制常数项」那一步**）；②③ 的分子 $f(y), g(y)$ 是**固定的**，而 $\lvert g(x)\rvert \to \infty$，故两项各自 $< \varepsilon/6$。

于是 $x_0 < x < x_0+\delta$ 时 $\lvert f(x)/g(x) - L\rvert < 2\varepsilon/3 + \varepsilon/3 = \varepsilon$。∎

> 续见 proofs/imp.lhopital.4.md
