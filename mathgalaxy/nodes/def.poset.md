# 偏序集　`def.poset`
偏序集 / 全序集（Partially Ordered Set）
layer 5 · 定义 · 序结构 · 序理论
[在星图里打开](../#n=def.poset)　·　[节点索引](../index.md)

设 $\preceq$ 是集合 $A$ 上的二元关系。$\preceq$ 是 **$A$ 上的偏序**，当且仅当：

- **自反**：$\forall x \in A, x \preceq x$；
- **反对称**：$\forall x, y \in A ( x \preceq y \wedge y \preceq x \to x = y )$；
- **传递**：$\forall x, y, z \in A ( x \preceq y \wedge y \preceq z \to x \preceq z )$。
> 陈述续见 [nodes/def.poset.2.md](./def.poset.2.md)


## 为什么成立（入边，证明在 proofs/）
- [`def.rel`](../nodes/def.rel.md) 关系：用到了定义 关系　[proofs/def-dep.rel-poset.md](../proofs/def-dep.rel-poset.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.poset.3.md](./def.poset.3.md)

refs: Kunen, Set Theory, I.11；Davey & Priestley, Introduction to Lattices and Order

> 说明见 `notes/def.poset.md`

引用：`def.poset`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
