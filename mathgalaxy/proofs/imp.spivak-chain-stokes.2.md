# 拉回到方块 + 方块上的公式 $\implies$ 链上的 Stokes
`imp.spivak-chain-stokes` · 推出 · strong 边 · 根 `../`

`lem.single-cube-stokes` 方块上的 Stokes 公式 + `prop.pullback-forms` 拉回 + `def.integral-on-chain` 链上的积分 → `thm.stokes-chain` 链上的 Stokes 定理

$$\int_{\partial I^{k}}c^{\ast}\omega = \sum_{i,\alpha}(-1)^{i+\alpha}\int_{I^{k-1}}(I^{k}_{(i,\alpha)})^{\ast}c^{\ast}\omega = \sum_{i,\alpha}(-1)^{i+\alpha}\int_{c_{(i,\alpha)}}\omega = \int_{\partial c}\omega .$$

三处等号依次是：$\partial I^{k}$ 的定义、链上积分的定义、$\partial c$ 的定义。拼起来得 $\int_{c}\mathrm{d}\omega = \int_{\partial c}\omega$。

**链情形。** 设 $c = \sum_{l}n_{l}c_{l}$。由 $\partial$ 与 $\int$ 在链上都线性（`prop.integral-chain-linear`）：

> 续见 proofs/imp.spivak-chain-stokes.3.md
