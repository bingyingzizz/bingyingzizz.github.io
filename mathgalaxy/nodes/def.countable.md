# 可数与不可数　`def.countable`
可数 / 至多可数
layer 8 · 定义 · 基数与等势 · 集合论
[在星图里打开](../#n=def.countable)　·　[节点索引](../index.md)

设 $\mathbb{N} = \{0, 1, 2, \ldots\}$ 是自然数集。

集合 $A$ **可数**，当且仅当存在双射 $A \to \mathbb{N}$（即能把 $A$ 排成一个无穷序列 $a_0, a_1, a_2, \ldots$，一个不漏、一个不重）。

**有限或可数**的情形合起来叫**至多可数**：$A$ 至多可数 $\iff$ 存在单射 $A \to \mathbb{N}$。（有限集没有到 $\mathbb{N}$ 的双射，所以按上面的定义它**不**可数，但它是至多可数 —— 两个词不能混。）

不是至多可数的集合叫**不可数**。

## 它能推出什么 / 谁在用它
- 被 [`thm.real-uncountable`](../nodes/thm.real-uncountable.md) ℝ 不可数 用

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.countable.2.md](./def.countable.2.md)

refs: Kunen, Set Theory, I.6

> 说明见 `notes/def.countable.md`

引用：`def.countable`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
