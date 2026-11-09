# 滤子　`def.filter`
滤子与超滤子：收敛的另一套语言
layer 17 · 定义 · 收敛与紧性 · 拓扑学
[在星图里打开](../#n=def.filter)　·　[节点索引](../index.md)

**在做什么**：把「收敛」改写成**集合族**的语言。滤子把「最终落进某个集合」这件事抽象出来，于是极限可以不提指标、只谈族 —­— 这是集合论与拓扑学交界处最顺手的工具。

设 $X$ 是拓扑空间。非空族 $\mathcal{F} \subseteq \mathcal{P}(X)$ 叫**滤子**（filter），若

1. $\emptyset \notin \mathcal{F}$、$X \in \mathcal{F}$；
2. 上闭：$F \in \mathcal{F}$ 且 $F \subseteq G$ $\implies$ $G \in \mathcal{F}$；
3. 对有限交封闭：$F, G \in \mathcal{F}$ $\implies$ $F \cap G \in \mathcal{F}$。
> 陈述续见 [nodes/def.filter.2.md](./def.filter.2.md)


## 它能推出什么 / 谁在用它
- ⟺ [`def.net`](../nodes/def.net.md) 网

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.filter.3.md](./def.filter.3.md)

refs: Munkres, Topology；Engelking, General Topology

> 说明见 `notes/def.filter.md`

引用：`def.filter`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
