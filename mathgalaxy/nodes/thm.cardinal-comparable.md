# 基数可比定理　`thm.cardinal-comparable`
基数可比定理（需要选择公理）
layer 10 · 定理 · 基数与等势 · 集合论

在**选择公理**下：对任意两个集合 $A$、$B$，必有

$$|A| \le |B| \quad \text{或} \quad |B| \le |A|$$

即任意两个基数都可以比较大小。

## 为什么成立（入边，证明在 proofs/）
- `thm.wellordering` 良序定理：良序定理 $\implies$ 任意两个基数可比　proofs/imp.cardinal-comparable.md
- `def.cardinal` 基数 |A|：用到了定义 基数 |A|　proofs/dep.cardinal-comparable-thm.md
- `def.ordinal` 序数：用到了定义 序数　proofs/def-link.ordinal-cardinal-comparable.md
- `ax.choice` 选择公理：用到了定义 选择公理　proofs/def-link.choice-cardinal-comparable.md

refs: Jech, The Axiom of Choice, Ch. 3

> 说明见 `notes/thm.cardinal-comparable.md`
