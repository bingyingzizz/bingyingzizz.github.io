# 紧 Hausdorff 中连通分量是闭开邻域之交
`imp.component-clopen` · 推出 · strong 边 · 根 `../`

`def.connected` 连通与连通分量 + `def.clopen` 闭开集 + `def.chaus` 紧 Hausdorff 空间范畴 → `prop.component-clopen` 连通分量是闭开邻域之交

**$C$ 连通。** 反设 $C = F \sqcup G$，其中 $F, G$ 在 $C$ 中闭、不交、非空，并设 $x \in F$。$C$ 是闭集之交因而闭，于是 $F, G$ 在 $S$ 中闭。紧 Hausdorff 空间正规，取不交开集 $U \supseteq F$、$V \supseteq G$。令 $K := (U \cup V)^{c}$，它闭且 $K \cap C = \emptyset$。

> 续见 proofs/imp.component-clopen.3.md
