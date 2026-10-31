# 外延公理　`ax.ext`
外延公理
layer 0 · 公理 · ZFC 公理系统 · 集合论
[在星图里打开](../#n=ax.ext)　·　[节点索引](../index.md)

集合由它的元素唯一决定：

$$\forall A \forall B [ \forall x ( x \in A \leftrightarrow  x \in B ) \to A = B ]$$

反方向（$A = B \to$ 元素完全相同）由等词逻辑自动成立，所以常写成 $\leftrightarrow$。
这条公理保证了「用条件刻画集合」时结果是唯一的，因此 $\{ x \in A : \varphi (x) \}$ 这种写法不会产生歧义。

## 它能推出什么 / 谁在用它
- 被 [`def.subset`](../nodes/def.subset.md) 子集 用

refs: Kunen, Set Theory, I.2；Jech, Set Theory, 1.2

- …另有出边，续页见 [nodes/ax.ext.2.md](./ax.ext.2.md)

## 说明
它是「集合」这个名字的全部含义：一个集合 $=$ 一个外延（一堆元素），与「怎么描述它」无关。

去掉它，就可以有元素完全相同却彼此不同的对象（例如带原子 ur-element 的集合论）。

引用：`ax.ext`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
