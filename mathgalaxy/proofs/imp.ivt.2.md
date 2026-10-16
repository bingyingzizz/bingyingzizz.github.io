# 确界原理 + 连续的定义 $\implies$ 介值定理
`imp.ivt` · 推出 · strong 边 · 根 `../`

`thm.real-ordered-field` ℝ 是完备有序域 + `def.continuous` 连续 → `thm.ivt` 介值定理

1. $a \in S$，$b \notin S$，所以 $S$ 非空且有上界 $b$。由确界原理，$\xi := \sup S$ 存在，且 $\xi \in [a, b]$。
2. **$f(\xi) \le c$**：由上确界的定义，存在 $s_n \in S$ 且 $s_n \to \xi$；$f$ 连续给出 $f(s_n) \to f(\xi)$，而 $f(s_n) \le c$，由保序性得 $f(\xi) \le c$。
3. **$f(\xi) \ge c$**：若 $f(\xi) < c$，取 $\eta := (c - f(\xi)) / 2 > 0$ 在连续性里，得到 $\delta > 0$ 使 $|x - \xi| < \delta$ 时 $f(x) < c$。于是 $x := \min\{\xi + \delta / 2,\ b\}$ 满足 $f(x) < c$，即 $x \in S$；但 $x > \xi$ 与 $\xi = \sup S$ 矛盾（当 $\xi = b$ 时第 2 步已给出 $f(b) \le c$，而 $f(b) > c$，矛盾）。
4. 两步合起来：$f(\xi) = c$。∎

> 证明里 $S$ 取了「$f \le c$」而不是「$f < c$」：这样第 2 步可以直接用保序性，不必先证「取到上确界的点仍在 $S$ 里」。
