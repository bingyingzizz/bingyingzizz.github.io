# 留数定理　`thm.residue`　·　说明
根 `../`

⭐ 证明：以每个 $z_k$ 为心挖去半径 $\varepsilon$ 的闭圆盘（互不相交、都含在 $\Omega$ 内），得 $\Omega_\varepsilon = \Omega \setminus \bigcup_k \overline{D(z_k, \varepsilon)}$。$f$ 在 $\Omega_\varepsilon$ 上全纯，由**多连通** Cauchy–Goursat，$\oint_{\partial\Omega_\varepsilon} f = 0$，也就是

$$\oint_{\partial\Omega} f\,\mathrm{d}z = \sum_{k=1}^{n} \oint_{|\zeta - z_k| = \varepsilon} f\,\mathrm{d}\zeta = 2\pi i \sum_{k=1}^{n} \operatorname{Res}(f, z_k),$$

最后一步就是留数的定义。

⭐ 这是复分析里最能打的一条：书第 23、24 章那一整批实积分（$\int_0^{2\pi} Q(\sin\theta, \cos\theta)\,\mathrm{d}\theta$、$\int_{-\infty}^{\infty} f(x)\,\mathrm{d}x$、$\int_{-\infty}^{\infty} e^{iax}f(x)\,\mathrm{d}x$、$\int_0^{\infty} x^{a-1}f(x)\,\mathrm{d}x$、级数求和）全靠它，都变成留数计算。

⚠ 闭曲线必须**正向**（逆时针）；反向要整体变号。曲线**外**的奇点对积分没有贡献 —— 也可以改用无穷远点的留数来算。
