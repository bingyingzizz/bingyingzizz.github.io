# 范畴　`def.category`
范畴（Category）
layer 7 · 定义 · 范畴与图 · 范畴论
[在星图里打开](../#n=def.category)　·　[节点索引](../index.md)

一个**范畴**是一个六元组

$$( \mathcal{O}, M, s, t, \circ, i )$$

其中 $(\mathcal{O}, M, s, t)$ 是一个**图**：$\mathcal{O}$ 是**对象**，$M$ 是**态射**，$s, t : M \to \mathcal{O}$ 给出每条态射的**源**与**靶**，记 $f : X \to Y$ 表示 $s(f) = X$、$t(f) = Y$。此外还有两个映射：

**复合** $\circ$ 定义在可复合的态射对上。记

$$M \times_{s,t} M = \{ (f, g) \in M \times M : s(f) = t(g) \}$$
> 陈述续见 [nodes/def.category.2.md](./def.category.2.md)


## 为什么成立（入边，证明在 proofs/）
- [`def.graph`](../nodes/def.graph.md) 图：用到了定义 图　[proofs/def-dep.graph-category.md](../proofs/def-dep.graph-category.md)

- …另有入边，续页见 [nodes/def.category.3.md](./def.category.3.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.category.4.md](./def.category.4.md)

refs: Le Stum, An introduction to condensed mathematics, §1.1

> 说明见 `notes/def.category.md`

引用：`def.category`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
