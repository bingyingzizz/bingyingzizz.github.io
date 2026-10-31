# 有序域　`def.ordered-field`
有序域
layer 8 · 定义 · 代数结构 · 抽象代数+序理论
[在星图里打开](../#n=def.ordered-field)　·　[节点索引](../index.md)

设 $(F, +, \cdot)$ 是**域**，$\le$ 是 $F$ 上的**全序**（偏序，且任意两元可比）。若 $\le$ 与两个运算**相容**：

$$a \le b \implies a + c \le b + c, \qquad a \le b,\ 0 \le c \implies ac \le bc$$

则称 $(F, +, \cdot, \le)$ 是一个**有序域**。照搬 $\mathbb{Q}$ 上的说法：$a > 0$ 叫**正元**，$a < 0$ 叫**负元**；两者拼起来就是绝对值

$$|a| := \begin{cases} a, & a \ge 0 \\ -a, & a < 0 \end{cases}$$

## 它能推出什么 / 谁在用它
- ⇒ [`prop.order-rules`](../nodes/prop.order-rules.md) 序与四则运算

- …另有出边，续页见 [nodes/def.ordered-field.3.md](./def.ordered-field.3.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.ordered-field.2.md](./def.ordered-field.2.md)

refs: Lang, Algebra, Ch. VI；Rudin, Principles of Mathematical Analysis, Ch. 1

> 说明见 `notes/def.ordered-field.md`

引用：`def.ordered-field`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
