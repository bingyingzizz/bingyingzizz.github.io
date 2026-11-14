# Stokes 定理　`thm.stokes`　·　说明
根 `../`

**证明路线**：用单位分解化到半空间 $\mathbb{H}^{n} = \{x^{n}\le 0\}$ 里的方块；把 $\omega$ 写成 $\sum_{i}(-1)^{i-1}f_{i}\,\mathrm{d}x^{1}\wedge\cdots\widehat{\mathrm{d}x^{i}}\wedge\cdots\wedge\mathrm{d}x^{n}$（带帽表示略去该因子），于是 $\mathrm{d}\omega = \sum_{i}\partial_{i}f_{i}\,\mathrm{d}x^{1}\wedge\cdots\wedge\mathrm{d}x^{n}$。

对 $i<n$ 的分量在对应坐标方向有紧支、积分为零；

只剩 $i = n$ 的分量，用一元微积分基本定理积出 $f_{n}(x^{1},\ldots,x^{n-1},0)$ —— 那正是 $\omega$ 在边界上的积分。

> 续见 notes/thm.stokes.2.md
