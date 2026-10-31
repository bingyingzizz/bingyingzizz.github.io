# Stokes 定理　`thm.stokes`　·　说明
根 `../`

**证明路线**：用单位分解化到半空间 $\mathbb{H}^{n} = \{x^{n}\le 0\}$ 里的方块；把 $\omega$ 写成 $\sum_{i}(-1)^{i-1}f_{i}\,\mathrm{d}x^{1}\wedge\cdots\widehat{\mathrm{d}x^{i}}\wedge\cdots\wedge\mathrm{d}x^{n}$（带帽表示略去该因子），于是 $\mathrm{d}\omega = \sum_{i}\partial_{i}f_{i}\,\mathrm{d}x^{1}\wedge\cdots\wedge\mathrm{d}x^{n}$。对 $i<n$ 的分量在对应坐标方向有紧支、积分为零；只剩 $i = n$ 的分量，用一元微积分基本定理积出 $f_{n}(x^{1},\ldots,x^{n-1},0)$ —— 那正是 $\omega$ 在边界上的积分。

**特例清单**：$n = 1$ 是微积分基本定理；$n = 2$ 是 Green 公式；$n = 3$ 的两种样子分别是 Gauss–Ostrogradsky（通量）与 Kelvin–Stokes（环量）。它们不是四条定理，是同一条。

**与 Gauss–Bonnet 的关系**：曲面上 $K\,\mathrm{d}A = \mathrm{d}\omega^{1}_{\ 2}$（Gauss 方程，`thm.gauss-equation`），于是 Gauss–Bonnet 的整体形式可以看成 Stokes 加上边界项 $\int k_{g}\,\mathrm{d}s$ —— 两条定理在这一层同源。

> 续见 notes/thm.stokes.2.md
