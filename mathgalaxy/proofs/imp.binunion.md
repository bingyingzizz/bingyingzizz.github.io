# 配对公理 + 并集公理 $\implies$ 二元并存在
`imp.binunion` · 推出 · strong 边 · 根 `../`

`ax.pair` 配对公理 + `ax.union` 并集公理 → `thm.binunion` 二元并存在

任给 $a$、$b$。

1. 由配对公理，{ a, b } 是集合。
2. 由并集公理，$\bigcup \{ a, b \}$ 是集合，且

$$x \in \bigcup\{ a, b \} \iff \exists Y ( Y \in \{ a, b \} \wedge  x \in Y ) \iff ( x \in a \vee  x \in b )$$

取 $A = \bigcup \{ a, b \}$ 即为所求。∎
