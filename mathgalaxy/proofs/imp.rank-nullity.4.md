# 第一同构定理 + 维数 $\implies$ 秩-零化度定理
`imp.rank-nullity` · 推出 · strong 边 · 根 `../`

`thm.first-iso-vs` 第一同构定理（向量空间版） + `thm.dimension` 维数良定义 + `def.rank` 秩 + `def.nullity` 零化度 → `thm.rank-nullity` 秩-零化度定理

$$\dim V = \operatorname{rank} T + \operatorname{null} T$$

（另一条路：由第一同构定理 $\operatorname{im} T \cong V/\ker T$，而 $\dim(V/U) = \dim V - \dim U$ 由第 1 步的扩充直接得到 —— 两条路是同一件事的两种说法。）∎

> 第 2 步的「无关」是最容易漏的一半：**把无关性从 $V$ 的基搬到像上**，用的是「$\ker T$ 已经作为基的一部分被单独列出」。
