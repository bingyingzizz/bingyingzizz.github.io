# 最值定理 + 复数的 $k$ 次方根 + 因式定理 $\implies$ 代数基本定理
`imp.fundamental-algebra` · 推出 · strong 边 · 根 `../`

`thm.evt` 最值定理 + `thm.factor-theorem` 因式定理与根 → `thm.fundamental-algebra` 代数基本定理

设 $p(z) = a_n z^{n} + \cdots + a_0$，$n \ge 1$，$a_n \ne 0$。

1. **在某个闭圆盘上取到最小模**：由 $|p(z)| \ge |a_n||z|^{n} - \sum_{k < n} |a_k||z|^{k}$，当 $|z| \to \infty$ 时 $|p(z)| \to +\infty$；

特别地存在 $R$ 使 $|z| > R$ 时 $|p(z)| > |p(0)|$。

于是 $z \mapsto |p(z)|$ 在紧集 $\{|z| \le R\}$ 上取到最小值（**最值定理**，用到 $\mathbb{R}$ 的完备性 + 紧性），而它在盘外不可能更小。

> 续见 proofs/imp.fundamental-algebra.2.md
