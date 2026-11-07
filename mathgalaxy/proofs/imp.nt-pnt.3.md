# 素数定理：$\zeta$ 在 $\operatorname{Re}\,s = 1$ 上无零点
`imp.nt-pnt` · 推出 · strong 边 · 根 `../`

`def.prime-counting` 素数计数函数 + `def.riemann-zeta` 黎曼 ζ 函数 + `thm.euler-product` Euler 乘积 → `thm.prime-number-theorem` 素数定理

再由 $\psi \sim \theta$（Abel 部分求和）与 $\theta(x) = \sum_{p\le x}\log p \sim \pi(x)\log x$（因为 $\sum_{p\le x}\log p = \pi(x)\log x - \int_{2}^{x}\frac{\pi(t)}{t}\,\mathrm{d}t$ 再分部求和）得 $\pi(x) \sim x/\log x$。

⛔ 本节点注已补出完整的 $\psi$/$\theta$/$\pi$ 等价链与 Abel 求和；边 proof 仍是骨架，真正缺的是命题 A（$\zeta$ 延拓 $+$ $\operatorname{Re} s = 1$ 无零点）与命题 B（Tauber 收尾），故这里不勾 ∎。
