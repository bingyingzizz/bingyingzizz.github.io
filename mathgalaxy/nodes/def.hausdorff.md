# Hausdorff 空间　`def.hausdorff`
Hausdorff 空间 / $T_{2}$
layer 5 · 定义 · 拓扑空间 · 拓扑学
[在星图里打开](../#n=def.hausdorff)　·　[节点索引](../index.md)

拓扑空间 $X$ 叫 **Hausdorff 空间**（或 **$T_{2}$ 空间**），如果任意两个不同点都**可以被开集分开**：

$$\forall x \ne y \in X,\ \exists U \ni x,\ V \ni y \ \text{开},\quad U \cap V = \emptyset$$

## 为什么成立（入边，证明在 proofs/）
- [`def.topology`](../nodes/def.topology.md) 拓扑空间与开集：用到了定义 拓扑空间与开集　[proofs/dep.topology-hausdorff.md](../proofs/dep.topology-hausdorff.md)

## 它能推出什么 / 谁在用它
- 被 [`thm.paracompact-hausdorff-normal`](../nodes/thm.paracompact-hausdorff-normal.md) 仿紧 Hausdorff 空间正规 用

- …另有出边，续页见 [nodes/def.hausdorff.2.md](./def.hausdorff.2.md)

refs: Munkres, Topology

> 说明见 `notes/def.hausdorff.md`

引用：`def.hausdorff`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
