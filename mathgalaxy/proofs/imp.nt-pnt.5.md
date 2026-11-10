# 素数定理：历史路线（$\zeta$ 延拓 + $\operatorname{Re}s = 1$ 无零点 + 零点分段）；Newman 版见 `imp.nt-newman`
`imp.nt-pnt` · 推出 · strong 边 · 根 `../`

`def.prime-counting` 素数计数函数 + `def.riemann-zeta` 黎曼 ζ 函数 + `thm.euler-product` Euler 乘积 + `lem.newman-tauberian` Newman 解析定理 + `thm.chebyshev-estimate` Чебышёв 估计 → `thm.prime-number-theorem` 素数定理

再由 $\psi \sim \theta$（Abel 部分求和）与 $\theta(x) = \sum_{p\le x}\log p \sim \pi(x)\log x$（因为 $\sum_{p\le x}\log p = \pi(x)\log x - \int_{2}^{x}\frac{\pi(t)}{t}\,\mathrm{d}t$ 再分部求和）得 $\pi(x) \sim x/\log x$。

**说明**：本边保留为历史路线概述（显式公式 + 零点分段）；完整的两条组装见 `imp.nt-newman`（Newman 收尾）与 `thm.prime-number-theorem` 节点注（引理 1–4 与命题 A 的完整证明）。不要在需要完整证明的地方单独引用本边。
