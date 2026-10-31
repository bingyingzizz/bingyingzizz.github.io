# 转移映射的微分光滑 $\implies$ 切丛是 $2n$ 维流形
`imp.mf-tangent-bundle-smooth` · 推出 · strong 边 · 根 `../`

`def.manifold-chart` 图卡 + `def.tangent-space-manifold` 切空间 → `def.tangent-bundle` 切丛

**造卡。** 对 $M$ 的图册里每张 $(U_{\alpha},\varphi_{\alpha})$，令 $\Phi_{\alpha}(v) := \bigl(\varphi_{\alpha}(\pi(v)), \mathrm{d}(\varphi_{\alpha})_{\pi(v)}(v)\bigr)$。$\Phi_{\alpha}$ 是双射（纤维上 $\mathrm{d}(\varphi_{\alpha})_{p} : T_{p}M \to \mathbb{R}^{n}$ 是线性同构），像集是 $\varphi_{\alpha}(U_{\alpha}) \times \mathbb{R}^{n}$（开）。

**转移映射。** 在 $\pi^{-1}(U_{\alpha} \cap U_{\beta})$ 上，从 $\Phi_{\alpha}$ 换到 $\Phi_{\beta}$：

$$\Phi_{\beta} \circ \Phi_{\alpha}^{-1}(x,\xi) = \bigl(\psi\varphi^{-1}(x),\ \mathrm{d}(\psi\varphi^{-1})_{x}(\xi)\bigr),$$

> 续见 proofs/imp.mf-tangent-bundle-smooth.2.md
