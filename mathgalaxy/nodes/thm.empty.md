# 空集存在　`thm.empty`
空集存在且唯一
layer 5 · 定理 · 集合的构造 · 集合论
[在星图里打开](../#n=thm.empty)　·　[节点索引](../index.md)

存在一个不含任何元素的集合：

$$\exists B \forall x ( x \notin B )$$

由外延公理，这样的 $B$ 唯一，记作 $\emptyset$。

## 为什么成立（入边，证明在 proofs/）
- [`ax.sep`](../nodes/ax.sep.md) 分离公理模式：分离公理模式 $\implies$ 空集存在　[proofs/imp.sep-to-empty.md](../proofs/imp.sep-to-empty.md)
- [`def.empty`](../nodes/def.empty.md) 空集 ∅：用到了定义 空集 ∅　[proofs/dep.ext-empty.md](../proofs/dep.ext-empty.md)
- [`ax.ext`](../nodes/ax.ext.md) 外延公理：用到了定义 外延公理　[proofs/def-link.ext-empty.md](../proofs/def-link.ext-empty.md)

refs: Kunen, Set Theory, I.4

> 说明见 `notes/thm.empty.md`

引用：`thm.empty`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
