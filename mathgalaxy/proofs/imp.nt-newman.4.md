# Newman 解析定理闭合素数定理的最后一步
`imp.nt-newman` · 推出 · strong 边 · 根 `../`

`lem.newman-tauberian` Newman 解析定理 + `thm.chebyshev-estimate` Чебышёв 估计 + `thm.euler-product` Euler 乘积 → `thm.prime-number-theorem` 素数定理

再由 $\int_{T}^{T+\varepsilon}f\to0$ 与 $\psi$ 单调：令 $h(t)=\psi(e^{t})e^{-t}$，则 $e^{-\varepsilon}h(T)\le\frac1\varepsilon\int_{T}^{T+\varepsilon}h\le e^{\varepsilon}h(T+\varepsilon)$，令 $T\to\infty$ 得 $\limsup h\le e^{\varepsilon}$、$\liminf h\ge e^{-\varepsilon}$，再令 $\varepsilon\to0$ 得 $h\to1$，即 $\psi(x)\sim x$。最后用引理 1–4（$\psi\sim x\iff\theta\sim x\iff\pi\sim x/\log x$）得 $\pi(x)\s

> 续见 proofs/imp.nt-newman.5.md
