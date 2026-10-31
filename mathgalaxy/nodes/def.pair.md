# 有序对　`def.pair`
有序对
layer 3 · 定义 · 集合的构造 · 集合论
[在星图里打开](../#n=def.pair)　·　[节点索引](../index.md)

Kuratowski 定义：

$$(a, b) := \{ \{a\}, \{a, b\} \}$$

它由配对公理与幂集公理保证是集合。

**特征性质**（这才是「有序」的全部含义）：

$$(a, b) = (c, d) \iff a = c \wedge  b = d$$

$n$ 元组递归定义为 $(a_{1}$ …$a_{n}) = ( (a_{1}$ …$a_{n-1}), a_{n} )$。

## 为什么成立（入边，证明在 proofs/）
- [`ax.pair`](../nodes/ax.pair.md) 配对公理：用到了定义 配对公理　[proofs/def-link.pair-pairing.md](../proofs/def-link.pair-pairing.md)
- [`ax.power`](../nodes/ax.power.md) 幂集公理：用到了定义 幂集公理　[proofs/def-link.pair-power.md](../proofs/def-link.pair-power.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.pair.2.md](./def.pair.2.md)

refs: Kunen, Set Theory, I.5

## 说明
用集合「编码」有序对之后，关系、函数、序型等等才都能在 ZFC 内部说清楚。

引用：`def.pair`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
