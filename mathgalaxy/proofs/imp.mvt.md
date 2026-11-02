# Rolle 定理 $\implies$ Lagrange 中值定理
`imp.mvt` · 推出 · strong 边 · 根 `../`

`thm.rolle` Rolle 中值定理 → `thm.mvt` Lagrange 中值定理

令

$$g(x) := f(x) - \frac{f(b) - f(a)}{b - a}\,(x - a)$$

即把 $f$ 减去那条弦。$g$ 在 $[a, b]$ 上连续、在 $(a, b)$ 内可导（差一个线性函数），且

$$g(a) = f(a), \qquad g(b) = f(b) - (f(b) - f(a)) = f(a)$$

故 $g(a) = g(b)$。由 Rolle 定理，存在 $\xi \in (a, b)$ 使 $g'(\xi) = 0$，即

$$f'(\xi) = \frac{f(b) - f(a)}{b - a}$$

整理即得 $f(b) - f(a) = f'(\xi)(b - a)$。∎

> 「减去弦」这个手法（找一个辅助函数让它满足 Rolle 的条件）在中值定理家族里是标准动作，下面 Cauchy 版也是同一招。
