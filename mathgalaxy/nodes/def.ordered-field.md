# 有序域　`def.ordered-field`
有序域（Ordered Field）
layer 7 · 定义 · 代数结构 · 抽象代数+序理论

设 $(F, +, \cdot)$ 是**域**，$\le$ 是 $F$ 上的**全序**（偏序，且任意两元可比）。若 $\le$ 与两个运算**相容**：

$$a \le b \implies a + c \le b + c, \qquad a \le b,\ 0 \le c \implies ac \le bc$$
> 陈述续见 `nodes/def.ordered-field.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.field` 域：用到了定义 域　proofs/dep.field-ordered.md
- `def.poset` 偏序集：用到了定义 偏序集　proofs/dep.poset-ordered.md

## 它能推出什么 / 谁在用它
- 被 `def.rat` 有理数 ℚ 用
- 被 `def.abs` 绝对值 |x| 用
- 被 `thm.triangle` 三角不等式 用
- 被 `thm.real-ordered-field` ℝ 是完备有序域 用
- 被 `lem.archimedean` 阿基米德性质 用
- 被 `thm.real-unique` 完备有序域的唯一性 用

refs: Lang, Algebra, Ch. VI；Rudin, Principles of Mathematical Analysis, Ch. 1

> 说明见 `notes/def.ordered-field.md`
