# 局部平凡化给出上闭链 $\implies$ 丛的同构类 $=$ $1$-上闭链模等价
`imp.mf2-bundle-classification` · 推出 · strong 边 · 根 `../`

`def.vector-bundle` 向量丛 + `def.cech-cohomology` Čech 上同调 → `thm.bundle-classification` 丛的分类

$$(p, v) \sim \bigl(p,\ g_{\beta\alpha}(p)\,v\bigr)\qquad (p \in U_{\alpha\beta}),$$

上闭链条件保证它是等价关系（自反：$g_{\alpha\alpha} = 1$；传递：$g_{\alpha\beta}g_{\beta\gamma} = g_{\alpha\gamma}$），商空间 $E$ 带自然投影与逐纤维线性结构，各块嵌入即局部平凡化 —— 于是 $E \to M$ 是秩 $k$ 向量丛。

**同构 $\iff$ 上边界。** 若 $\Psi : E \to E^{\prime}$ 是丛同构，在 $U_{\alpha}$ 上读成 $\mathbb{R}^{k}$ 的自同构 $h_{\alpha}(p) \in \operatorname{GL}(k,\mathbb{R})$，则

$$g^{\prime}_{\alpha\beta} = h_{\alpha}\,g_{\alpha\beta}\,h_{\beta}^{-1}$$

（左侧与右侧在同一点作用 $v$ 相同）。反之给定这样的 $h_{\alpha}$，逐块 $h_{\alpha}$ 在重叠处一致（正是那条等式），故拼成整体同构。

> 续见 proofs/imp.mf2-bundle-classification.3.md
