# 链　`def.chain`
链 / 反链
layer 6 · 定义 · 序结构 · 序理论
[在星图里打开](../#n=def.chain)　·　[节点索引](../index.md)

设 $(P, \preceq )$ 是偏序集，$C \subseteq P$。

**$C$ 是链**（也叫全序子集），当且仅当 $C$ 中任意两个元素都可比：

$$\forall x, y \in C ( x \preceq y \vee  y \preceq x )$$

**$C$ 是反链**，当且仅当 $C$ 中任意两个不同元素都不可比。

约定：$\emptyset$ 与单点集都算链。

## 为什么成立（入边，证明在 proofs/）
- [`def.poset`](../nodes/def.poset.md) 偏序集：用到了定义 偏序集　[proofs/def-link.chain-poset.md](../proofs/def-link.chain-poset.md)

- …另有入边，续页见 [nodes/def.chain.2.md](./def.chain.2.md)

## 它能推出什么 / 谁在用它
- 被 [`def.finchar`](../nodes/def.finchar.md) 有限特征 用

refs: Kunen, Set Theory, I.11

- …另有出边，续页见 [nodes/def.chain.3.md](./def.chain.3.md)

## 说明
「链」这个词是佐恩引理、Hausdorff 极大原理的中心概念——它们说的都是「链能长到多大」。

引用：`def.chain`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
