# 拉回到方块 + 方块上的公式 $\implies$ 链上的 Stokes
`imp.spivak-chain-stokes` · 推出 · strong 边 · 根 `../`

`lem.single-cube-stokes` 方块上的 Stokes 公式 + `prop.pullback-forms` 拉回 + `def.integral-on-chain` 链上的积分 → `thm.stokes-chain` 链上的 Stokes 定理

$$\int_{\partial c}\omega = \sum_{l}n_{l}\int_{\partial c_{l}}\omega = \sum_{l}n_{l}\int_{c_{l}}\mathrm{d}\omega = \int_{c}\mathrm{d}\omega .$$

∎

⭐ 注意全程没有用到 $M$ 的定向、紧致性，也没有让 $\omega$ 有紧支：这三件事都被「换成链」吃掉了。
