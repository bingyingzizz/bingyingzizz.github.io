# 素数定理的组装：ζ 延拓 + Re s=1 无零点 + Newman + 等价链
`imp.nt-newman` · 推出 · strong 边 · 根 `../`

`lem.newman-tauberian` Newman 解析定理 + `thm.chebyshev-estimate` Чебышёв 估计 + `thm.euler-product` Euler 乘积 + `prop.zeta-continuation` ζ 的亚纯延拓（到 Re s>0） + `thm.zeta-no-zeros-line1` ζ 在 Re s=1 上无零点 + `lem.psi-theta-asymptotic` ψ 与 θ 的差是 o(x) + `lem.theta-pi-equivalence` θ~x 与 π~x/log x 等价 → `thm.prime-number-theorem` 素数定理

取 $f(t)=\psi(e^{t})e^{-t}-1$。由 Chebyshev 估计 $0\le\psi(x)\le Cx$，$f$ 有界、局部可积。对 $\operatorname{Re}z>0$，换元 $u=e^{t}$ 并用 $-\zeta'/\zeta(s)=s\int_{1}^{\infty}\psi(u)u^{-s-1}\mathrm{d}u$（$s=1+z$）得

$$g(z)=\int_{0}^{\infty}f(t)e^{-zt}\,\mathrm{d}t=\frac{-\zeta'(1+z)/\zeta(1+z)}{1+z}-\frac{1}{z}.$$

> 续见 proofs/imp.nt-newman.2.md
