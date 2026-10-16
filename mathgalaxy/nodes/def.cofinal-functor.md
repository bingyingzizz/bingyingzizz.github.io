# 共尾函子　`def.cofinal-functor`
共尾函子（Cofinal Functor）
layer 13 · 定义 · 图与极限 · 范畴论
[在星图里打开](../#n=def.cofinal-functor)　·　[节点索引](../index.md)

设 $F : J \to I$ 是函子。对 $i \in I$，记 $i \downarrow F$ 为逗号范畴，它的对象是 $\{\, f : i \to F(j) \,\}$（$j \in J$）。

称 $F$ 是**共尾的**（cofinal，也写作 **final**），如果对每个 $i \in I$：

$$i \downarrow F \quad \text{非空，且连通。}$$

## 为什么成立（入边，证明在 proofs/）
- [`def.comma-category`](../nodes/def.comma-category.md) 逗号范畴：用到了定义 逗号范畴　[proofs/def-dep.cofinal-comma.md](../proofs/def-dep.cofinal-comma.md)

- …另有入边，续页见 [nodes/def.cofinal-functor.2.md](./def.cofinal-functor.2.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.cofinal-functor.3.md](./def.cofinal-functor.3.md)

refs: Le Stum, An introduction to condensed mathematics, §1.3

> 说明见 `notes/def.cofinal-functor.md`

引用：`def.cofinal-functor`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
