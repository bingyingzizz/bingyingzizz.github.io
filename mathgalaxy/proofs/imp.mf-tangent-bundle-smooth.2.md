# 转移映射的微分光滑 $\implies$ 切丛是 $2n$ 维流形
`imp.mf-tangent-bundle-smooth` · 推出 · strong 边 · 根 `../`

`def.manifold-chart` 图卡 + `def.tangent-space-manifold` 切空间 → `def.tangent-bundle` 切丛

其中 $\varphi = \varphi_{\alpha}$、$\psi = \varphi_{\beta}$。理由：$\mathrm{d}(\psi)_{p} = \mathrm{d}(\psi\varphi^{-1})_{\varphi(p)} \circ \mathrm{d}(\varphi)_{p}$（链式法则），而 $\xi = \mathrm{d}(\varphi)_{p}(v)$，于是 $\mathrm{d}(\psi)_{p}(v) = \mathrm{d}(\psi\varphi^{-1})_{x}(\xi)$。

**光滑。** 第一分量 $\psi\varphi^{-1}$ 光滑（图册相容）；第二分量是「光滑矩阵值函数 $\mathrm{d}(\psi\varphi^{-1})$ 与 $\xi$ 的乘积」，在 $(x,\xi)$ 上光滑。故转移映射 $C^{\infty}$，且它的逆（交换 $\alpha,\beta$）也 $C^{\infty}$。

> 续见 proofs/imp.mf-tangent-bundle-smooth.3.md
