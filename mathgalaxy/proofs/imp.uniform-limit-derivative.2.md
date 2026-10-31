# 中值定理 + 一致收敛 $\implies$ 导数与极限可交换
`imp.uniform-limit-derivative` · 推出 · strong 边 · 根 `../`

`def.uniform-convergence` 一致收敛 + `thm.mvt` Lagrange 中值定理 + `thm.uniform-limit-continuous` 一致收敛保连续 → `thm.uniform-limit-derivative` 导数与极限交换

右端与 $x$ 无关且（由 $f_n(x_0)$ 收敛与 $f_n'$ 一致 Cauchy）可以任意小，故 $\{f_n\}$ 一致 Cauchy，因而一致收敛到某个 $f$；再由上一条 $f$ 连续。

2. **求导**：固定 $x$，对 $h \ne 0$ 定义 $\varphi_n(h) := \frac{f_n(x + h) - f_n(x)}{h}$。由中值定理 $\varphi_n(h) = f_n'(\xi_n)$ 对某个 $\xi_n$；又对 $n \to \infty$，$\varphi_n(h) \to \frac{f(x+h) - f(x)}{h} =: \varphi(h)$。

> 续见 proofs/imp.uniform-limit-derivative.3.md
