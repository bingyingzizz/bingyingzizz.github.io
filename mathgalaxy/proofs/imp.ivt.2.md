# 确界原理 + 连续的定义 $\implies$ 介值定理
`imp.ivt` · 推出 · strong 边 · 根 `../`

`thm.real-ordered-field` ℝ 是完备有序域 + `def.continuous` 连续（ε-δ 判据） → `thm.ivt` 介值定理

但 $x > \xi$ 与 $\xi = \sup S$ 矛盾（当 $\xi = b$ 时第 2 步已给出 $f(b) \le c$，而 $f(b) > c$，矛盾）。
4. 两步合起来：$f(\xi) = c$。∎

> 证明里 $S$ 取了「$f \le c$」而不是「$f < c$」：这样第 2 步可以直接用保序性，不必先证「取到上确界的点仍在 $S$ 里」。
