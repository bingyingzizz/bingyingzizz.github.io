# 拓扑空间与开集　`def.topology`
拓扑空间 / 开集（Topological Space）
layer 4 · 定义 · 拓扑空间 · 拓扑学
[在星图里打开](../#n=def.topology)　·　[节点索引](../index.md)

设 $X$ 是集合，$\mathcal{T} \subseteq \mathcal{P}(X)$ 是 $X$ 的一族子集。$(X, \mathcal{T})$ 是一个**拓扑空间**，$\mathcal{T}$ 叫作 $X$ 上的一个**拓扑**，当且仅当：

1. **含两端**：$\emptyset \in \mathcal{T}$ 且 $X \in \mathcal{T}$；
2. **任意并封闭**：$\{ U_i \}_{i \in I} \subseteq \mathcal{T} \implies \bigcup_{i \in I} U_i \in \mathcal{T}$（$I$ 任意，可以不可数）；
3. **有限交封闭**：$U, V \in \mathcal{T} \implies U \cap V \in \mathcal{T}$。

$\mathcal{T}$ 的成员称为**开集**，它们的补集称为**闭集**。

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.topology.2.md](./def.topology.2.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.topology.3.md](./def.topology.3.md)

refs: Munkres, Topology, Ch. 2

> 说明见 `notes/def.topology.md`

引用：`def.topology`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
