# Newman 解析定理闭合素数定理的最后一步
`imp.nt-newman` · 推出 · strong 边 · 根 `../`

`lem.newman-tauberian` Newman 解析定理 + `thm.chebyshev-estimate` Чебышёв 估计 + `thm.euler-product` Euler 乘积 → `thm.prime-number-theorem` 素数定理

由 $\zeta$ 在 $s=1$ 有单极点、留数 $1$，有 $-\zeta'(1+z)/\zeta(1+z)=1/z-\gamma+O(z)$，故 $g(z)=-(1+\gamma)+O(z)$，$z=0$ 是可去奇点。命题 A（$\zeta$ 在 $\operatorname{Re}s=1$ 上无零点，见 `thm.prime-number-theorem` 的注）保证 $g$ 在每个闭半圆盘 $\{|z|\le R,\ \operatorname{Re}z\ge0\}$ 的某个邻域上全纯：$\zeta$ 在 $\operatorname{Re}s>1$ 无零点，在 $\operatorname{Re}s=1$ 上已证无零点，紧性给出正距离。

> 续见 proofs/imp.nt-newman.3.md
