# Rolle / Cauchy 中值定理 $\implies$ Taylor 公式
`imp.taylor` · 推出 · strong 边 · 根 `../`

`thm.rolle` Rolle 中值定理 + `thm.cauchy-mvt` Cauchy 中值定理 → `thm.taylor` Taylor 公式

于是 $\Phi$ 在 $x_0$ 与 $x$ 之间有 $n+2$ 个零点（$x_0$ 处按重数算 $n+1$ 阶）。反复用 Rolle 定理 $n+1$ 次：$\Phi'$ 有 $n+1$ 个零点，$\Phi''$ 有 $n$ 个……最后 $\Phi^{(n+1)}$ 在 $x_0$ 与 $x$ 之间有零点 $\xi$。

而 $\Phi^{(n+1)}(t) = f^{(n+1)}(t) - M\,(n+1)!$（$P$ 是 $n$ 次多项式，$n+1$ 阶导数为零），故 $0 = \Phi^{(n+1)}(\xi) = f^{(n+1)}(\xi) - M(n+1)!$，即 $M = f^{(n+1)}(\xi)/(n+1)!$。代回 $M$ 的定义即得结论。∎

$n = 0$ 时这一串退化成 $f(x) = f(x_0) + f'(\xi)(x - x_0)$，正是 Lagrange 中值定理。

> 「$\Phi^{(n+1)}$ 有零点」这一步用的是 Rolle 定理被反复套用的形式：一个函数若有 $m$ 个零点，它的导函数在相邻零点之间各有一个零点 —— 每套一次零点数减一。
