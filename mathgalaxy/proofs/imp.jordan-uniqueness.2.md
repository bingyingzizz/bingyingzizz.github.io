# Jordan 形 $\implies$ 相似分类
`imp.jordan-uniqueness` · 推出 · strong 边 · 根 `../`

`thm.jordan-canonical-form` Jordan 标准形 + `def.similarity` 相似 → `cor.jordan-uniqueness` Jordan 型的唯一性

是相似不变量（由 $T$ 本身决定，与基无关），而「尺寸 $\ge k$ 的 Jordan 块个数」正好等于 $\dim \ker(T - \lambda I)^{k} - \dim \ker (T - \lambda I)^{k-1}$。
2. **唯一性**：由第 1 步，Jordan 块的尺寸分布 $\mu(\lambda)$ 完全由这些核的维数决定，因此不依赖基的选取；反过来，若两个算子有相同的 $\mu(\lambda)$（对一切 $\lambda$），则它们可以配成同一个 Jordan 型的两个写本，从而是同一个算子在两组基下的矩阵，即相似。∎

> 证明的思路是「**先造一个不变量，再证明它把类分完**」—— 这也是所有分类定理的标准套路（与「基的势是唯一的」那条如出一辙）。
