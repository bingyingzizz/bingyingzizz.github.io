# 素数定理的组装：ζ 延拓 + Re s=1 无零点 + Newman + 等价链
`imp.nt-newman` · 推出 · strong 边 · 根 `../`

`lem.newman-tauberian` Newman 解析定理 + `thm.chebyshev-estimate` Чебышёв 估计 + `thm.euler-product` Euler 乘积 + `prop.zeta-continuation` ζ 的亚纯延拓（到 Re s>0） + `thm.zeta-no-zeros-line1` ζ 在 Re s=1 上无零点 + `lem.psi-theta-asymptotic` ψ 与 θ 的差是 o(x) + `lem.theta-pi-equivalence` θ~x 与 π~x/log x 等价 → `thm.prime-number-theorem` 素数定理

由 `prop.zeta-continuation`，$\zeta$ 在 $s=1$ 有单极点、留数 $1$，故 $-\zeta'(1+z)/\zeta(1+z)=1/z-\gamma+O(z)$，从而 $g(z)=-(1+\gamma)+O(z)$：$z=0$ 是可去奇点。由 `thm.zeta-no-zeros-line1`，$\zeta$ 在 $\operatorname{Re}s=1$ 上无零点；与 $\zeta$ 在 $\operatorname{Re}s>1$ 无零点合起来，紧性给出每个闭半圆盘 $\{|z|\le R,\operatorname{Re}z\ge0\}$ 的邻域上 $g$ 全纯。于是 `lem.newman-tauberian` 适用，$\int_{0}^{\infty}f$ 收敛且等于 $g(0)$。

> 续见 proofs/imp.nt-newman.3.md
