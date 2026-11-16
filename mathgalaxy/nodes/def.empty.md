# 空集 ∅　`def.empty`
空集
layer 5 · 定义 · 集合的构造 · 集合论
[在星图里打开](../#n=def.empty)　·　[节点索引](../index.md)

**空集**是不含任何元素的集合，记作 $\emptyset$：

$$\emptyset := \{ x : x \ne x \}$$

「$x \ne x$」对任何 $x$ 都不成立，所以这个集合里一个元素也没有。它是**语言里就给出的原始对象**，与外延公理、一阶语言同级。

于是对一切集合 $A$：$\emptyset \subseteq A$（空泛真），且 $\emptyset$ 是 $\subseteq$ 的最小元。

## 为什么成立（入边，证明在 proofs/）
- [`ax.sep`](../nodes/ax.sep.md) 分离公理模式：用到了定义 分离公理模式　[proofs/dep.empty-sep.md](../proofs/dep.empty-sep.md)

## 它能推出什么 / 谁在用它
- 被 [`thm.empty`](../nodes/thm.empty.md) 空集存在 用

- …另有出边，续页见 [nodes/def.empty.2.md](./def.empty.2.md)

refs: Kunen, Set Theory, I.5

> 说明见 `notes/def.empty.md`

引用：`def.empty`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
