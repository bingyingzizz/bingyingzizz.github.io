# Taylor 公式取 $n=0$ 就是 Lagrange 中值定理
`imp.derived-mvt-from-taylor` · 推出 · strong 边 · 根 `../`

`thm.taylor` Taylor 公式 → `thm.mvt` Lagrange 中值定理

**Taylor 公式的高阶情形。** 若 $f$ 在 $[a,b]$ 上有 $n$ 阶连续导数、在 $(a,b)$ 内 $n+1$ 阶可导，则对 $x_0, x \in [a,b]$（$x \ne x_0$）存在介于 $x_0$ 与 $x$ 之间的 $\xi$，使

$$f(x) = \sum_{k=0}^{n} \frac{f^{(k)}(x_0)}{k!}\,(x-x_0)^{k} + \frac{f^{(n+1)}(\xi)}{(n+1)!}\,(x-x_0)^{n+1}.$$

**取 $n = 0$、$x_0 = a$、$x = b$。** 求和只剩 $k = 0$ 那一项 $f(a)$，余项分母是 $(0+1)! = 1$，于是

$$f(b) = f(a) + f^{\prime}(\xi)\,(b-a), \qquad \xi \in (a,b),$$

即 $f(b)-f(a) = f^{\prime}(\xi)\,(b-a)$。前提也对得上：$n = 0$ 时「$0$ 阶连续导数」就是 $f$ 在 $[a,b]$ 上连续，「在 $(a,b)$ 内 $1$ 阶可导」就是在 $(a,b)$ 内可导 —— 正是中值定理的假设。$\blacksquare$

> $n = 0$ 是 Taylor 公式里最低的一档，所以中值定理不必另立门户：它是同一族定理的退化情形。
