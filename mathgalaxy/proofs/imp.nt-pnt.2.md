# 素数定理：$\zeta$ 在 $\operatorname{Re}\,s = 1$ 上无零点
`imp.nt-pnt` · 推出 · strong 边 · 根 `../`

`def.prime-counting` 素数计数函数 → `thm.prime-number-theorem` 素数定理

**④ 收尾。** 由 ②，每个非平凡零点满足 $\operatorname{Re}\rho < 1$（准确说是 $0 < \operatorname{Re}\rho < 1$）。⚠️ 注意 $\lvert\rho\rvert$ 本身**没有上界** —— 高度 $\le T$ 的零点个数是 $\frac{T}{2\pi}\log\frac{T}{2\pi e}+O(\log T)$，随 $T$ 增长；所以不能用 $\lvert\rho\rvert\le 1$。每项 $x^{\rho} = x^{\operatorname{Re}\rho}$（乘一个模长因子）确实严格低于 $x$，但「每项都 $o(x)$」推不出「求和也是 $o(x)$」：必须按高度把零点分段、用上面那个计数把段内项数与 $\lvert\rho\rvert$ 一起压住（这一步才是本条的真正难点，本图不展开）。得 $\sum_{\rho}x^{\rho}/\rho = o(x)$，于是 $\psi(x) \sim x$；

> 续见 proofs/imp.nt-pnt.3.md
