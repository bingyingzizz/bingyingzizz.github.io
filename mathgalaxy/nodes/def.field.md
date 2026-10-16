# 域　`def.field`
域 $F$（Field）
layer 7 · 定义 · 代数结构 · 抽象代数
[在星图里打开](../#n=def.field)　·　[节点索引](../index.md)

设 $F$ 是一个**集合**，$+$ 与 $\cdot$ 是 $F$ 上的两个**二元运算**（即两个函数 $F \times F \to F$）。称 $(F, +, \cdot)$ 是一个**域**，当且仅当：

- $(F, +)$ 是**阿贝尔群**；
- $(F \setminus \{0\}, \cdot)$ 是**阿贝尔群**（这里 $0$ 是加法群的单位元）；
- **分配律** $a (b + c) = ab + ac$ 对一切 $a, b, c \in F$ 成立。

一句话：**加减乘除（除以非零元）都封闭，且满足结合、交换、分配律**。

## 为什么成立（入边，证明在 proofs/）
- [`def.function`](../nodes/def.function.md) 映射：用到了定义 映射　[proofs/dep.function-field.md](../proofs/dep.function-field.md)

- …另有入边，续页见 [nodes/def.field.2.md](./def.field.2.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.field.3.md](./def.field.3.md)

refs: Lang, Algebra, Ch. I；Dummit & Foote, Abstract Algebra, §13.1

> 说明见 `notes/def.field.md`

引用：`def.field`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
