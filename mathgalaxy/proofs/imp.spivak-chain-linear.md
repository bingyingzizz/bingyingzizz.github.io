# 逐项定义 $\implies$ 对形式与对链都线性
`imp.spivak-chain-linear` · 推出 · strong 边 · 根 `../`

`def.integral-on-chain` 链上的积分 → `prop.integral-chain-linear` 链上积分的双线性

**对形式线性。** 固定方块 $c$。拉回是线性的：$c^{\ast}(a\omega+b\eta) = a\,c^{\ast}\omega+b\,c^{\ast}\eta$。按定义 $c^{\ast}\omega = f\,\mathrm{d}x^{1}\wedge\cdots\wedge\mathrm{d}x^{k}$、$c^{\ast}\eta = h\,\mathrm{d}x^{1}\wedge\cdots\wedge\mathrm{d}x^{k}$（$k$ 维区域的顶次形式只有一个分量），故 $c^{\ast}(a\omega+b\eta) = (af+bh)\mathrm{d}x^{1}\wedge\cdots\wedge\mathrm{d}x^{k}$。于是

$$\int_{c}(a\omega+b\eta) = \int_{I^{k}}(af+bh) = a\int_{I^{k}}f+b\int_{I^{k}}h = a\int_{c}\omega+b\int_{c}\eta ,$$

中间一步是通常积分的线性。

> 续见 proofs/imp.spivak-chain-linear.2.md
