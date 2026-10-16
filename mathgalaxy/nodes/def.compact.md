# 紧　`def.compact`
紧空间（Compact Space）
layer 14 · 定义 · 度量空间 · 拓扑学
[在星图里打开](../#n=def.compact)　·　[节点索引](../index.md)

距离空间 (X, d) **紧**，当且仅当 $X$ 的每个**开覆盖**都有有限子覆盖：

$$\forall\{U_i\}_{i \in I} (\text{ 每个} U_i\text{ 开且} X = \bigcup_{i \in I} U_i ) \implies \exists i_1, \ldots , i_n : X = \bigcup_{k=1}^{n} U_{i_k}$$

## 为什么成立（入边，证明在 proofs/）
- [`def.sequentially-compact`](../nodes/def.sequentially-compact.md) 列紧：列紧 $\implies$ 紧　[proofs/imp.seqcompact-compact.md](../proofs/imp.seqcompact-compact.md)

- …另有入边，续页见 [nodes/def.compact.2.md](./def.compact.2.md)

## 它能推出什么 / 谁在用它
- ⇒ [`def.sequentially-compact`](../nodes/def.sequentially-compact.md) 列紧

- …另有出边，续页见 [nodes/def.compact.3.md](./def.compact.3.md)

refs: Munkres, Topology, §26

> 说明见 `notes/def.compact.md`

引用：`def.compact`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
