# 素数定理　`thm.prime-number-theorem`　·　说明
根 `../`

**从 $\int f$ 收敛到 $\psi(x)\sim x$（完整初等收尾）。** 记 $h(t)=\psi(e^t)e^{-t}$，则 $f=h-1$。对任意固定 $\varepsilon>0$，由 $\int_0^\infty f$ 收敛得 $\int_T^{T+\varepsilon}f\to0$，即 $\frac1\varepsilon\int_T^{T+\varepsilon}h(t)\,\mathrm{d}t\longrightarrow1 .$ 由 $\psi$ 单调不减：当 $t\in[T,T+\varepsilon]$ 时 $e^{-\varepsilon}h(T)\le h(t)\le e^{\varepsilon}h(T+\varepsilon)$。把两边对 $t$ 平均并令 $T\to\infty$：由 $e^{-\varepsilon}h(T)\le\frac1\varepsilon\int_T^{T+\varepsilon}h$ 得 $h(T)\le e^{\varepsilon}(1+o(1))$，故 $\limsup h\le e^{\varepsilon}$；由 $\frac1\varepsilon\int_T^{T+\varepsilon}h\le e^{\varepsilon}h(T+\varepsilon)$ 得 $h(T+\varepsilon)\ge e^{-\varepsilon}(1+o(1))$，故 $\liminf h\ge e^{-\varepsilon}$。令 $\varepsilon\to0$ 得 $\limsup h\le1\le\liminf h$，故 $h(t)\to1$，即 $\psi(x)/x\to1$。再由引理 1–4 得 $\theta(x)\sim x$、$\pi(x)\sim x/\log x$

> 续见 notes/thm.prime-number-theorem.9.md
