# 基与子基　`def.topology-base`
拓扑的基 / 子基
layer 5 · 定义 · 拓扑空间 · 拓扑学
[在星图里打开](../#n=def.topology-base)　·　[节点索引](../index.md)

设 $(X, \mathcal{T})$ 是拓扑空间，$\mathcal{B} \subseteq \mathcal{T}$。$\mathcal{B}$ 是拓扑 $\mathcal{T}$ 的一组**基**，当且仅当每个开集都是 $\mathcal{B}$ 中若干成员之并；等价条件：

1. $\bigcup \mathcal{B} = X$；
2. 对 $B_1, B_2 \in \mathcal{B}$ 与 $x \in B_1 \cap B_2$，存在 $B_3 \in \mathcal{B}$ 使 $x \in B_3 \subseteq B_1 \cap B_2$。

$\mathcal{S} \subseteq \mathcal{P}(X)$ 是**子基**，当且仅当它的**有限交**全体构成一组基。

## 它能推出什么 / 谁在用它
- 被 [`def.second-countable`](../nodes/def.second-countable.md) 第二可数空间 用

- …另有出边，续页见 [nodes/def.topology-base.3.md](./def.topology-base.3.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.topology-base.2.md](./def.topology-base.2.md)

refs: Munkres, Topology, Ch. 2

> 说明见 `notes/def.topology-base.md`

引用：`def.topology-base`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
