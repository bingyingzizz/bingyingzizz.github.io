# 锥　`def.cone`
锥与余锥（Cone / Cocone）
layer 10 · 定义 · 图与极限 · 范畴论

设 $D : I \to \mathcal{C}$ 是一个图。$D$ 上的**锥**是一个对象 $X \in \mathcal{C}$ 连同一族态射

$$p_i : X \longrightarrow D(i) \qquad (i \in I)$$

使得对 $I$ 中每条 $\alpha : i \to j$ 都有

$$D(\alpha) \circ p_i = p_j$$

等价地说，锥就是从常图 $\Delta X$ 到 $D$ 的一个自然变换。把其中的箭头全部反向，得到**余锥**。

## 为什么成立（入边，证明在 proofs/）
- `def.function` 函数：用到了定义 函数　proofs/def-dep.function-cone.md
- `def.natural-transformation` 自然变换：用到了定义 自然变换　proofs/def-dep.nat-cone.md

## 它能推出什么 / 谁在用它
- 被 `def.limit` 极限 用
- 被 `def.elements-category` 元素范畴 用

> 说明见 `notes/def.cone.md`
