# 最值定理 + 介值定理 + 因式定理 $\implies$ 代数基本定理
`imp.fundamental-algebra` · 推出 · strong 边 · 根 `../`

`thm.evt` 最值定理 + `thm.ivt` 介值定理 + `thm.factor-theorem` 因式定理与根 → `thm.fundamental-algebra` 代数基本定理

1. **在某个闭圆盘上取到最小模**：由 $|p(z)| \ge |a_n||z|^{n} - \sum_{k < n} |a_k||z|^{k}$，当 $|z| \to \infty$ 时 $|p(z)| \to +\infty$；特别地存在 $R$ 使 $|z| > R$ 时 $|p(z)| > |p(0)|$。于是 $z \mapsto |p(z)|$ 在紧集 $\{|z| \le R\}$ 上取到最小值（**最值定理**，用到 $\mathbb{R}$ 的完备性 + 紧性），而它在盘外不可能更小。记最小值点为 $z_0$，$m := |p(z_0)|$。
2. **若 $m > 0$ 则矛盾**：记 $w := z - z_0$，把 $p$ 在 $z_0$ 处展开成 $w$ 的多项式：

> 续见 proofs/imp.fundamental-algebra.3.md
