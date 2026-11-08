# 素数定理　`thm.prime-number-theorem`　·　说明
根 `../`

**命题 B 用在本节点。** 取 $f(t)=\psi(e^t)e^{-t}-1$。由 Chebyshev 估计 $0\le\psi(x)\le Cx$ 知 $f$ 有界。对 $\operatorname{Re}z>0$， $g(z)=\int_0^\infty\psi(e^t)e^{-(1+z)t}\,\mathrm{d}t-\frac{1}{z}=\frac{-\zeta'(1+z)/\zeta(1+z)}{1+z}-\frac{1}{z}$ 其中第一个等号是换元 $u=e^t$，第二个用 $-ζ'/ζ(s)=s\int_1^\infty \psi(u)u^{-s-1}\,\mathrm{d}u$（$s=1+z$）。由 $\zeta$ 在 $s=1$ 有单极点、留数 $1$，有 $-\zeta'(1+z)/\zeta(1+z)=1/z-\gamma+O(z)$；代入得 $g(z)=-(1+\gamma)+O(z)\qquad(z\to0)$ 故 $g$ 在 $z=0$ 的极点可去。结合命题 A（$\zeta$ 在 $\operatorname{Re}s=1$ 无零点），$g$ 在 $\{\operatorname{Re}z\ge0\}$ 的邻域全纯。由 `lem.newman-tauberian`（命题 B）得 $\int_0^\infty f$ 收敛。

> 续见 notes/thm.prime-number-theorem.8.md
