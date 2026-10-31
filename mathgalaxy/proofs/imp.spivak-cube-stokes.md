# 逐项积完一元导数 $\implies$ 方块上的 Stokes 公式
`imp.spivak-cube-stokes` · 推出 · strong 边 · 根 `../`

`def.boundary-operator` 边界算子 + `def.exterior-derivative` 外微分 → `lem.single-cube-stokes` 方块上的 Stokes 公式

**（1）写法。** 把 $\eta$ 按缺哪个 $\mathrm{d}x^{j}$ 唯一地写成

$$\eta = \sum_{j=1}^{k}(-1)^{j-1}f_{j}\,\mathrm{d}x^{1}\wedge\cdots\wedge\widehat{\mathrm{d}x^{j}}\wedge\cdots\wedge\mathrm{d}x^{k},$$

（带帽表示略去该因子）。按外微分的定义逐项求导、并把 $\mathrm{d}f_{j}$ 与其余因子楔起来，只剩 $\partial_{j}f_{j}$ 那一项不死，于是

$$\mathrm{d}\eta = \sum_{j=1}^{k}\partial_{j}f_{j}\,\mathrm{d}x^{1}\wedge\cdots\wedge\mathrm{d}x^{k}.$$

**（2）左边。** 用 Fubini 把 $x^{j}$ 那一层单独积完，再用一元微积分基本定理：

$$\int_{I^{k}}\mathrm{d}\eta = \sum_{j=1}^{k}\Bigl[\int_{I^{k-1}}f_{j}\big|_{x^{j}=1}-\int_{I^{k-1}}f_{j}\big|_{x^{j}=0}\Bigr],$$

> 续见 proofs/imp.spivak-cube-stokes.2.md
