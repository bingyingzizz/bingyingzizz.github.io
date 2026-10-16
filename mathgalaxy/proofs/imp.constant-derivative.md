# Lagrange 中值定理 $\implies$ 导数为零 $\implies$ 常函数
`imp.constant-derivative` · 推出 · strong 边 · 根 `../`

`thm.mvt` Lagrange 中值定理 → `cor.constant-iff-zero-derivative` 导数为零 ⟺ 常函数

「$\Longleftarrow$」平凡：常数函数的导数为零。

「$\implies$」设 $f' = 0$ 在区间 $I$ 上处处成立。任取 $x < y \in I$，对 $[x, y]$ 用 Lagrange 中值定理：存在 $\xi \in (x, y)$ 使

$$f(y) - f(x) = f'(\xi)\,(y - x) = 0$$

故 $f(y) = f(x)$。由 $x, y$ 任意，$f$ 在 $I$ 上是常数。∎

> $I$ 必须是区间（任意两点之间都落在 $I$ 里）—— 这正是证明里要能对 $[x, y]$ 用中值定理的原因。
