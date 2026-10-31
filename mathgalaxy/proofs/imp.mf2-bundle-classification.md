# 局部平凡化给出上闭链 $\implies$ 丛的同构类 $=$ $1$-上闭链模等价
`imp.mf2-bundle-classification` · 推出 · strong 边 · 根 `../`

`def.vector-bundle` 向量丛 + `def.cech-cohomology` Čech 上同调 → `thm.bundle-classification` 丛的分类

**丛 $\mapsto$ 上闭链。** 取局部平凡化 $\Phi_{\alpha} : \pi^{-1}(U_{\alpha}) \to U_{\alpha}\times\mathbb{R}^{k}$，令 $g_{\alpha\beta} := \Phi_{\alpha}\circ\Phi_{\beta}^{-1}$。它光滑、取值 $\operatorname{GL}(k,\mathbb{R})$，且

$$g_{\alpha\beta}\,g_{\beta\gamma} = \bigl(\Phi_{\alpha}\Phi_{\beta}^{-1}\bigr)\bigl(\Phi_{\beta}\Phi_{\gamma}^{-1}\bigr) = \Phi_{\alpha}\Phi_{\gamma}^{-1} = g_{\alpha\gamma}$$

在 $U_{\alpha\beta\gamma}$ 上成立（`def.vector-bundle` 的上闭链条件）。

**上闭链 $\mapsto$ 丛。** 给定 $g_{\alpha\beta}$，在 $\bigsqcup_{\alpha}U_{\alpha}\times\mathbb{R}^{k}$ 上令

> 续见 proofs/imp.mf2-bundle-classification.2.md
