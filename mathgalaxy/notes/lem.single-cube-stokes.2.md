# 方块上的 Stokes 公式　`lem.single-cube-stokes`　·　说明
根 `../`

**右边。** 按 `def.boundary-operator`，$\partial I^{k} = \sum_{i=1}^{k}\sum_{\alpha=0}^{1}(-1)^{i+\alpha} I^{k}_{(i,\alpha)}$。在第 $(i,\alpha)$ 面上 $\mathrm{d}x^{i}$ 的拉回为 $0$，故只有 $j = i$ 的项存活：

$$I^{k}_{(i,\alpha)}{}^{*}\eta = (-1)^{i-1} f_{i}\big|_{x^{i}=\alpha}\,\mathrm{d}y^{1}\wedge\cdots\wedge\mathrm{d}y^{k-1},$$

其中 $y$ 是面上剩余的 $k-1$ 个坐标（按原次序）。于是

$$\int_{\partial I^{k}}\eta = \sum_{i=1}^{k}\sum_{\alpha=0}^{1}(-1)^{i+\alpha}(-1)^{i-1}\int_{I^{k-1}} f_{i}\big|_{x^{i}=\alpha}\,\mathrm{d}y = \sum_{i=1}^{k}\int_{I^{k-1}}\left[f_{i}\big|_{x^{i}=1} - f_{i}\big|_{x^{i}=0}\right]\mathrm{d}y,$$

最后一步用了 $(-1)^{i+\alpha+i-1} = (-1)^{\alpha+1}$：$\alpha=1$ 给 $+1$、$\alpha=0$ 给 $-1$。

> 续见 notes/lem.single-cube-stokes.3.md
