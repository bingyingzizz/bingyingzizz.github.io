# 拉回到方块 + 方块上的公式 $\implies$ 链上的 Stokes
`imp.spivak-chain-stokes` · 推出 · strong 边 · 根 `../`

`lem.single-cube-stokes` 方块上的 Stokes 公式 + `prop.pullback-forms` 拉回 + `def.integral-on-chain` 链上的积分 → `thm.stokes-chain` 链上的 Stokes 定理

**方块情形。** 设 $c$ 是 $k$-方块，$\omega$ 是 $(k-1)$-形式，都在 $c(I^{k})$ 的某个邻域上有定义。令 $\eta := c^{\ast}\omega$。由拉回与外微分交换（$c^{\ast}\mathrm{d} = \mathrm{d}c^{\ast}$），

$$\int_{c}\mathrm{d}\omega = \int_{I^{k}}c^{\ast}\mathrm{d}\omega = \int_{I^{k}}\mathrm{d}(c^{\ast}\omega) = \int_{I^{k}}\mathrm{d}\eta .$$

按 `lem.single-cube-stokes`，它等于 $\int_{\partial I^{k}}\eta$。再把 $\int_{\partial I^{k}}\eta$ 翻译回 $c$ 的语言：由 $\partial$ 的定义与拉回的复合律 $(c\circ I^{k}_{(i,\alpha)})^{\ast} = (I^{k}_{(i,\alpha)})^{\ast}c^{\ast}$，

> 续见 proofs/imp.spivak-chain-stokes.2.md
