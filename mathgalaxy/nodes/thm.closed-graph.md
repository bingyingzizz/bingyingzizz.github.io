# 闭图像定理　`thm.closed-graph`
闭图像定理
layer 26 · 定理 · Baire 纲与三大定理 · 泛函分析
[在星图里打开](../#n=thm.closed-graph)　·　[节点索引](../index.md)

设 $E, F$ 都是 Banach 空间，$u : E \to F$ 线性。若 $u$ 的图像

$$G(u) := \{(x, u(x)) : x \in E\}$$

在 $E \times F$ 中**闭**，则 $u \in B(E, F)$。

## 为什么成立（入边，证明在 proofs/）
- [`thm.bounded-inverse`](../nodes/thm.bounded-inverse.md) 逆算子定理：逆算子定理 $\implies$ 闭图像定理　[proofs/imp.fa-closed-graph.md](../proofs/imp.fa-closed-graph.md)
- [`def.banach-space`](../nodes/def.banach-space.md) Banach 空间：用到了定义 Banach 空间　[proofs/def-link.fa-banach-closedgraph.md](../proofs/def-link.fa-banach-closedgraph.md)

refs: Rudin, Functional Analysis, 2.15

> 说明见 `notes/thm.closed-graph.md`

引用：`thm.closed-graph`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
