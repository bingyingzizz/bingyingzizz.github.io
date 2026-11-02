# 中值定理 + 一致收敛 $\implies$ 导数与极限可交换
`imp.uniform-limit-derivative` · 推出 · strong 边 · 根 `../`

`def.uniform-convergence` 一致收敛 + `thm.mvt` Lagrange 中值定理 + `thm.uniform-limit-continuous` 一致收敛保连续 → `thm.uniform-limit-derivative` 导数与极限交换

设 $f_n' \rightrightarrows g$ 且 $f_n(x_0)$ 收敛。

1. **$\{f_n\}$ 一致收敛**：对 $x \in [a, b]$，由中值定理存在 $\xi$ 介于 $x$ 与 $x_0$ 之间使 $f_n(x) - f_n(x_0) = f_n'(\xi)(x - x_0)$，于是

$$|f_m(x) - f_n(x)| \le |f_m(x_0) - f_n(x_0)| + |x - x_0| \cdot \sup_{t}|f_m'(t) - f_n'(t)| \le |f_m(x_0) - f_n(x_0)| + (b - a)\|f_m' - f_n'\|_{\infty}$$

> 续见 proofs/imp.uniform-limit-derivative.2.md
