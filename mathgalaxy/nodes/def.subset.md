# 子集　`def.subset`
子集 / 真子集（Subset）
layer 1 · 定义 · 集合的构造 · 集合论
[在星图里打开](../#n=def.subset)　·　[节点索引](../index.md)

设 $A$、$B$ 是集合。

- **$A$ 是 $B$ 的子集**（记 $A \subseteq B$）：$\forall x ( x \in A \to x \in B )$
- **$A$ 是 $B$ 的真子集**（记 $A \subset B$）：$A \subseteq B$ 且 $A \ne B$。

基本性质：$\subseteq$ 自反、传递；并且由外延公理，

$$A = B \iff A \subseteq B \wedge  B \subseteq A$$

这是证明两个集合相等最常用的套路：**两边互包**。

## 为什么成立（入边，证明在 proofs/）
- [`ax.ext`](../nodes/ax.ext.md) 外延公理：用到了定义 外延公理　[proofs/def-link.ext-subset.md](../proofs/def-link.ext-subset.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.subset.2.md](./def.subset.2.md)

refs: Kunen, Set Theory, I.2

## 说明
$\emptyset \subseteq A$ 对一切 $A$ 成立（空泛真）。

引用：`def.subset`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
