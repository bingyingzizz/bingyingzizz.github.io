# 域　`def.field`
域 $F$（Field）
layer 7 · 定义 · 代数结构 · 抽象代数

设 $F$ 是一个**集合**，$+$ 与 $\cdot$ 是 $F$ 上的两个**二元运算**（即两个函数 $F \times F \to F$）。称 $(F, +, \cdot)$ 是一个**域**，当且仅当：

- $(F, +)$ 是**阿贝尔群**；
- $(F \setminus \{0\}, \cdot)$ 是**阿贝尔群**（这里 $0$ 是加法群的单位元）；
- **分配律** $a (b + c) = ab + ac$ 对一切 $a, b, c \in F$ 成立。
> 陈述续见 `nodes/def.field.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.function` 函数：用到了定义 函数　proofs/dep.function-field.md
- `def.group` 群：用到了定义 群　proofs/def-dep.field-group.md

## 它能推出什么 / 谁在用它
- 被 `def.ordered-field` 有序域 用
- 被 `def.vs` 向量空间的基 用

refs: Lang, Algebra, Ch. I；Dummit & Foote, Abstract Algebra, §13.1

> 说明见 `notes/def.field.md`
