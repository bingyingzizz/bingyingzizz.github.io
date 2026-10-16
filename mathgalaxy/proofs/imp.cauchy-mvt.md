# Rolle 定理 $\implies$ Cauchy 中值定理
`imp.cauchy-mvt` · 推出 · strong 边 · 根 `../`

`thm.rolle` Rolle 中值定理 → `thm.cauchy-mvt` Cauchy 中值定理

先注意 $g(b) \ne g(a)$：若 $g(b) = g(a)$，由 Rolle 定理存在内点使 $g' = 0$，与 $g' \ne 0$ 矛盾。于是下面的分母不为零。

令

$$h(x) := \bigl( f(b) - f(a) \bigr) g(x) - \bigl( g(b) - g(a) \bigr) f(x)$$

$h$ 在 $[a, b]$ 上连续、在 $(a, b)$ 内可导，且

$$h(a) = (f(b) - f(a)) g(a) - (g(b) - g(a)) f(a), \qquad h(b) = (f(b) - f(a)) g(b) - (g(b) - g(a)) f(b)$$

两式相减得 $h(b) - h(a) = (f(b) - f(a))(g(b) - g(a)) - (g(b) - g(a))(f(b) - f(a)) = 0$。由 Rolle 定理存在 $\xi \in (a, b)$ 使 $h'(\xi) = 0$，即

$$\bigl( f(b) - f(a) \bigr) g'(\xi) = \bigl( g(b) - g(a) \bigr) f'(\xi)$$

两边同除 $g'(\xi)\,(g(b) - g(a))$（都不为零）即得结论。∎

> 辅助函数 $h$ 是「弦」的推广：$g(x) = x$ 时 $h$ 就是 Lagrange 版里那个 $g$ 的常数倍。
