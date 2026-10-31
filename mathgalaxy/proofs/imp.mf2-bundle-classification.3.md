# 局部平凡化给出上闭链 $\implies$ 丛的同构类 $=$ $1$-上闭链模等价
`imp.mf2-bundle-classification` · 推出 · strong 边 · 根 `../`

`def.vector-bundle` 向量丛 + `def.cech-cohomology` Čech 上同调 → `thm.bundle-classification` 丛的分类

**覆盖与加细。** 换覆盖时把 $g_{\alpha\beta}$ 限制到细块的像上，得 $\check{H}^{1}(\mathfrak{U}) \to \check{H}^{1}(\mathfrak{V})$；两个加细有公共加细，于是三角形交换、余极限有意义（这一步是形式的，只用到覆盖族的有向性）。仿紧性保证可以只取局部有限的覆盖（`def.paracompact`），本条的构造在任何情形都不需要单位分解 —— 单位分解出场的地方是「把局部截面拼成整体截面」那类问题，不是分类。∎

⚠️ 余极限的逐字证明（以及「$\check{H}^{1}$ 与层上同调 $H^{1}$ 在非阿贝尔系数下的关系」）本图不给，只给到「构造 + 相容」这一层；与深定理的折衷口径一致。
