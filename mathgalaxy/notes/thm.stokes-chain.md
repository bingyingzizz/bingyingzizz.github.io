# 链上的 Stokes 定理　`thm.stokes-chain`　·　说明
根 `../`

**证明只有三行**：$\int_{c}\mathrm{d}\omega = \int_{I^{k}}c^{\ast}\mathrm{d}\omega = \int_{I^{k}}\mathrm{d}(c^{\ast}\omega) = \int_{\partial I^{k}}c^{\ast}\omega = \int_{\partial c}\omega$。四步分别用：链上积分的定义、$c^{\ast}$ 与 $\mathrm{d}$ 交换、`lem.single-cube-stokes`、$\partial$ 的定义与线性。难点全在引理里，这里是翻译。

**不需要定向的原因**：链这一侧把定向吃进了参数化（`def.integral-on-chain`），所以整条定理里没有出现「可定向」这个词。要把链版换回流形版时才需要定向 —— 那时符号由 `prop.boundary-sign-convention` 提供。

**四合一**：$k = 1$ 是微积分基本定理；$k = 2$ 是 Green 公式；$k = 3$ 的两种样子分别是 Gauss–Ostrogradsky（通量，也就是散度定理 `thm.divergence-theorem`）与 Kelvin–Stokes（环量）。它们不是四条定理，是同一条在不同 $k$ 上的读法。

> 续见 notes/thm.stokes-chain.2.md
