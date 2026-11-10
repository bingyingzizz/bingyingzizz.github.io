# 素数定理的组装：ζ 延拓 + Re s=1 无零点 + Newman + 等价链
`imp.nt-newman` · 推出 · strong 边 · 根 `../`

`lem.newman-tauberian` Newman 解析定理 + `thm.chebyshev-estimate` Чебышёв 估计 + `thm.euler-product` Euler 乘积 + `prop.zeta-continuation` ζ 的亚纯延拓（到 Re s>0） + `thm.zeta-no-zeros-line1` ζ 在 Re s=1 上无零点 + `lem.psi-theta-asymptotic` ψ 与 θ 的差是 o(x) + `lem.theta-pi-equivalence` θ~x 与 π~x/log x 等价 → `thm.prime-number-theorem` 素数定理

记 $h(t)=\psi(e^{t})e^{-t}$，则 $f=h-1$。由 $\int_{0}^{\infty}f$ 收敛，$\int_{T}^{T+\varepsilon}f\to0$，即 $\frac1\varepsilon\int_{T}^{T+\varepsilon}h\to1$。由 $\psi$ 单调不减，$e^{-\varepsilon}h(T)\le\frac1\varepsilon\int_{T}^{T+\varepsilon}h\le e^{\varepsilon}h(T+\varepsilon)$；令 $T\to\infty$ 得 $\limsup h\le e^{\varepsilon}$、$\liminf h\ge e^{-\varepsilon}$，再令 $\varepsilon\to0$ 得 $h\to1$，即 $\psi(x

> 续见 proofs/imp.nt-newman.4.md
