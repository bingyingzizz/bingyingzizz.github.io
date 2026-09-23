# 基与子基　`def.topology-base`
拓扑的基 / 子基（Basis, Subbasis）
layer 5 · 定义 · 拓扑空间 · 拓扑学

设 $(X, \mathcal{T})$ 是拓扑空间，$\mathcal{B} \subseteq \mathcal{T}$。$\mathcal{B}$ 是拓扑 $\mathcal{T}$ 的一组**基**，当且仅当每个开集都是 $\mathcal{B}$ 中若干成员之并；等价条件：

1. $\bigcup \mathcal{B} = X$；
2. 对 $B_1, B_2 \in \mathcal{B}$ 与 $x \in B_1 \cap B_2$，存在 $B_3 \in \mathcal{B}$ 使 $x \in B_3 \subseteq B_1 \cap B_2$。
> 陈述续见 `nodes/def.topology-base.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.topology` 拓扑空间与开集：用到了定义 拓扑空间与开集　proofs/dep.topology-base.md

## 它能推出什么 / 谁在用它
- 被 `def.metric-space` 距离空间 用

refs: Munkres, Topology, Ch. 2

> 说明见 `notes/def.topology-base.md`
