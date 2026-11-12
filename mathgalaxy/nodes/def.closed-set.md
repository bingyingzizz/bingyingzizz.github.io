# 闭集与闭包　`def.closed-set`
闭集 / 闭包 / 稠密
layer 5 · 定义 · 拓扑空间的基本语汇 · 拓扑学
[在星图里打开](../#n=def.closed-set)　·　[节点索引](../index.md)

设 $(X, \mathcal{T})$ 是拓扑空间。

- $F \subseteq X$ 是**闭集**：$X \setminus F$ 是开集；
- $A \subseteq X$ 的**闭包** $\overline{A}$：一切包含 $A$ 的闭集之交（最小的那个闭集）；
- $A$ **稠密**：$\overline{A} = X$；
- $x$ 的**邻域**：任何含 $x$ 的开集（的包含者）。

由 De Morgan 律，开集的三条公理翻译成闭集就是：$\emptyset, X$ 闭；**任意**交闭；**有限**并闭。

## 它能推出什么 / 谁在用它
- 被 [`prop.compact-subset-closed`](../nodes/prop.compact-subset-closed.md) 紧子集是闭的 用

- …另有出边，续页见 [nodes/def.closed-set.3.md](./def.closed-set.3.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.closed-set.2.md](./def.closed-set.2.md)

refs: Engelking, General Topology, Ch. 1 §1.1；Munkres, Topology, Ch. 2

> 说明见 `notes/def.closed-set.md`

引用：`def.closed-set`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
