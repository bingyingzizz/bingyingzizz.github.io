# 子空间拓扑　`def.subspace-topology`
子空间拓扑（Subspace Topology）
layer 5 · 定义 · 拓扑空间 · 拓扑学
[在星图里打开](../#n=def.subspace-topology)　·　[节点索引](../index.md)

设 $(X, \mathcal{T})$ 是拓扑空间，$Y \subseteq X$。$Y$ 上的**子空间拓扑**取

$$\mathcal{T}_{Y} := \{\, U \cap Y : U \in \mathcal{T} \,\}$$

这样得到的拓扑是使含入映射 $Y \hookrightarrow X$ 连续的最粗拓扑。

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.subspace-topology.2.md](./def.subspace-topology.2.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.subspace-topology.3.md](./def.subspace-topology.3.md)

refs: Munkres, Topology

## 说明
直观：**子空间的开集就是「大空间的开集切一刀」**。所以「$Y$ 中闭」「$Y$ 中紧」都要按切出来的那片来判断，不能直接看大空间里的样子 —— 例如 $(0, 1) \subseteq \mathbb{R}$ 在自身中是闭的，在 $\mathbb{R}$ 中不是。

引用：`def.subspace-topology`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
