# 紧　`def.compact`
紧空间
layer 14 · 定义 · 度量空间 · 拓扑学
[在星图里打开](../#n=def.compact)　·　[节点索引](../index.md)

距离空间 (X, d) **紧**，当且仅当 $X$ 的每个**开覆盖**都有有限子覆盖：

$$\forall\{U_i\}_{i \in I} (\text{ 每个} U_i\text{ 开且} X = \bigcup_{i \in I} U_i ) \implies \exists i_1, \ldots , i_n : X = \bigcup_{k=1}^{n} U_{i_k}$$

## 为什么成立（入边，证明在 proofs/）
- [`def.sequentially-compact`](../nodes/def.sequentially-compact.md) 列紧：紧 $\iff$ 列紧　[proofs/eq.compact-seqcompact.md](../proofs/eq.compact-seqcompact.md)
- [`def.metric-space`](../nodes/def.metric-space.md) 距离空间：用到了定义 距离空间　[proofs/def-dep.metric-compact.md](../proofs/def-dep.metric-compact.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.compact.2.md](./def.compact.2.md)

refs: Munkres, Topology, §26

> 说明见 `notes/def.compact.md`

引用：`def.compact`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
