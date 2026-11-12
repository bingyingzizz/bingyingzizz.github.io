# 紧　`def.compact`
紧空间（开覆盖定义）
layer 16 · 定义 · 拓扑空间的基本语汇 · 拓扑学
[在星图里打开](../#n=def.compact)　·　[节点索引](../index.md)

设 $X$ 是**拓扑空间**。$X$ **紧**，当且仅当它的每个**开覆盖**都有有限子覆盖：若族 $\{U_{i}\}_{i \in I}$ 满足「每个 $U_{i}$ 都是开集」且 $X = \bigcup_{i \in I} U_{i}$，则存在有限个下标使

$$X = \bigcup_{k=1}^{n} U_{i_{k}}.$$

子集 $K \subseteq X$ 叫**紧集**，如果 $K$ 配子空间拓扑后是紧空间。

## 为什么成立（入边，证明在 proofs/）
- [`def.sequentially-compact`](../nodes/def.sequentially-compact.md) 列紧：紧 $\iff$ 列紧　[proofs/eq.compact-seqcompact.md](../proofs/eq.compact-seqcompact.md)

- …另有入边，续页见 [nodes/def.compact.2.md](./def.compact.2.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.compact.3.md](./def.compact.3.md)

refs: Engelking, General Topology, Ch. 3 §3.1；Munkres, Topology, §26（紧空间）

> 说明见 `notes/def.compact.md`

引用：`def.compact`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
