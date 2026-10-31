# 逐项积完一元导数 $\implies$ 方块上的 Stokes 公式
`imp.spivak-cube-stokes` · 推出 · strong 边 · 根 `../`

`def.boundary-operator` 边界算子 + `def.exterior-derivative` 外微分 → `lem.single-cube-stokes` 方块上的 Stokes 公式

其中每个 $I^{k-1}$ 用剩下的 $k-1$ 个坐标的原次序。

**（3）右边。** 按 $\partial I^{k}$ 的定义逐面拉回。在第 $(i,\alpha)$ 面上，$\mathrm{d}x^{i}$ 的拉回为零，所以只有 $j = i$ 的那一项活着；而面少了一个坐标，$\mathrm{d}x^{1}\wedge\cdots\widehat{\mathrm{d}x^{i}}\cdots\wedge\mathrm{d}x^{k}$ 拉回后正好是面上的 $\mathrm{d}y^{1}\wedge\cdots\wedge\mathrm{d}y^{k-1}$。于是

$$\int_{\partial I^{k}}\eta = \sum_{i=1}^{k}\sum_{\alpha=0}^{1}(-1)^{i+\alpha}(-1)^{i-1}\int_{I^{k-1}}f_{i}\big|_{x^{i}=\alpha} = \sum_{i=1}^{k}\Bigl[\int_{I^{k-1}}f_{i}\big|_{x^{i}=1}-\int_{I^{k-1}}f_{i}\big|_{x^{i}=0}\Bigr],$$

> 续见 proofs/imp.spivak-cube-stokes.3.md
