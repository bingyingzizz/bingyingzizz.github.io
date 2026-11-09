# 局部平凡化给出上闭链 $\implies$ 丛的同构类 $=$ $1$-上闭链模等价
`imp.mf2-bundle-classification` · 推出 · strong 边 · 根 `../`

`def.vector-bundle` 向量丛 + `def.cech-cohomology` Čech 上同调 + `prop.bundle-metric` 纤维度量 → `thm.bundle-classification` 丛的分类

$$g^{\prime}_{\alpha\beta} = h_{\alpha}\,g_{\alpha\beta}\,h_{\beta}^{-1}$$

（左侧与右侧在同一点作用 $v$ 相同）。反之给定这样的 $h_{\alpha}$，逐块 $h_{\alpha}$ 在重叠处一致（正是那条等式），故拼成整体同构。

**覆盖与加细。** 换覆盖时把 $g_{\alpha\beta}$ 限制到细块的像上，得 $\check{H}^{1}(\mathfrak{U}) \to \check{H}^{1}(\mathfrak{V})$；

两个加细有公共加细，于是三角形交换、余极限有意义（这一步是形式的，只用到覆盖族的有向性）。

仿紧性保证可以只取局部有限的覆盖（`def.paracompact`），本条的构造在任何情形都不需要单位分解 —— 单位分解出场的地方是「把局部截面拼成整体截面」那类问题，不是分类。

∎

> 续见 proofs/imp.mf2-bundle-classification.4.md
