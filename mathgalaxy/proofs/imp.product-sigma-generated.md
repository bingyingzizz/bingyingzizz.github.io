# imp.product-sigma-generated
`imp.product-sigma-generated` · 推出 · strong 边 · 根 `../`

`def.product-sigma` 积 σ-代数 → `prop.product-sigma-generated` 可数积的生成集

**证明。** 记 $\mathcal{R} := \{\, \prod_{\alpha \in A} E_{\alpha} : E_{\alpha} \in \mathcal{M}_{\alpha} \,\}$（矩形全体），$\mathcal{M} := \bigotimes_{\alpha \in A} \mathcal{M}_{\alpha}$（柱集生成的 $\sigma$代数）。
- **$\mathcal{M} \subseteq \mathcal{M}(\mathcal{R})$**：柱集 $\pi_{\alpha}^{-1}(E_{\alpha})$ 就是矩形（其余坐标取全空间 $X_{\beta}$）✓；
- **$\mathcal{R} \subseteq \mathcal{M}$**：$A$ **可数**时，每个矩形是可数多个柱集之交
$$\prod_{\alpha \in A} E_{\alpha} = \bigcap_{\alpha \in A} \pi_{\alpha}^{-1}(E_{\alpha}),$$
而 $\mathcal{M}$ 对可数交封闭 ✓；
- 两边互包，故 $\mathcal{M}(\mathcal{R}) = \mathcal{M}$ ✓。∎
