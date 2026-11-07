# 方块上的 Stokes 公式　`lem.single-cube-stokes`　·　说明
根 `../`

**证明**：把 $\eta$ 按缺哪个 $\mathrm{d}x^{j}$ 唯一地写成

$$\eta = \sum_{j=1}^{k}(-1)^{j-1} f_{j}\,\mathrm{d}x^{1}\wedge\cdots\wedge\widehat{\mathrm{d}x^{j}}\wedge\cdots\wedge\mathrm{d}x^{k},$$

其中 $f_{j}$ 是含 $I^{k}$ 的开集上的光滑函数（带帽表示略去该因子）。

**左边。** 逐项求外微分：$\mathrm{d}f_{j}$ 与其余因子相楔时，只有 $\mathrm{d}x^{j}$ 那一项存活，且

$$\mathrm{d}\left((-1)^{j-1} f_{j}\,\mathrm{d}x^{1}\wedge\cdots\widehat{\mathrm{d}x^{j}}\cdots\wedge\mathrm{d}x^{k}\right) = \partial_{j} f_{j}\,\mathrm{d}x^{1}\wedge\cdots\wedge\mathrm{d}x^{k},$$

故 $\mathrm{d}\eta = \sum_{j=1}^{k}\partial_{j} f_{j}\,\mathrm{d}x^{1}\wedge\cdots\wedge\mathrm{d}x^{k}$。由 Fubini 与一元微积分基本定理（先对 $x^{j}$ 积分，其余坐标记作 $y$）：

$$\int_{I^{k}}\mathrm{d}\eta = \sum_{j=1}^{k}\int_{I^{k-1}}\left[f_{j}\big|_{x^{j}=1} - f_{j}\big|_{x^{j}=0}\right]\mathrm{d}y.$$

> 续见 notes/lem.single-cube-stokes.2.md
