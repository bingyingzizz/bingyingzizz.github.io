# 相似　`def.similarity`　·　说明
根 `../`

⭐ 相似是**等价关系**（自反 / 对称 / 传递），所以 $M_n(K)$ 被分成相似类；**分类问题就是「描述所有相似类」**。

⭐ 两个世界对同一个问题的两种说法：矩阵侧是「$B = P^{-1}AP$」，映射侧是「同一个 $T$、两组基」。图上两条边（`thm.change-of-basis` 与 `dep.linearmap-similarity`）说的就是这件事。

⚠ 相似比**等价**（$B = PAQ$）严格：等价只要求秩相同，相似还要求特征多项式相同。$\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$ 与 $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ 等价但不相似。
