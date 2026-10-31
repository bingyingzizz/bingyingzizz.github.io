# 闭链上的积分 $\implies$ de Rham 上同调与奇异上同调同构
`imp.mf2-de-rham` · 推出 · strong 边 · 根 `../`

`def.de-rham-complex` de Rham 上同调 + `def.singular-chain` 奇异链 + `def.integral-on-chain` 链上的积分 → `thm.de-rham` de Rham 定理

**第一步：配对良定义（唯一真正要做计算的地方）。** 对 $[\omega] \in H^{k}_{\mathrm{dR}}(M)$、$[c] \in H^{\mathrm{sing}}_{k}(M;\mathbb{R})$ 令

$$\langle[\omega],[c]\rangle := \int_{c}\omega .$$

换 $c$ 为 $c + \partial b$：$\int_{\partial b}\omega = \int_{b}\mathrm{d}\omega = 0$（`thm.stokes-chain`，用 $\omega$ 闭）。换 $\omega$ 为 $\omega + \mathrm{d}\eta$：$\int_{c}\mathrm{d}\eta = \int_{\partial c}\eta = 0$（$c$ 闭）。所以这是良定义的配对 $H^{k}_{\mathrm{dR}} \otimes H^{\mathrm{sing}}_{k} \to \mathbb{R}$，等价地一个线性映射 $\Phi^{k} : H^{k}_{\mathrm{dR}} \to (H^{\mathrm{sing}}_{k})^{\ast} = H^{k}_{\mathrm{sing}}$。

> 续见 proofs/imp.mf2-de-rham.2.md
