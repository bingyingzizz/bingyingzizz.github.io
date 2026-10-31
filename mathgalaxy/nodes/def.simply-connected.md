# 单连通　`def.simply-connected`
单连通：道路连通且基本群平凡
layer 14 · 定义 · 基本群 · 拓扑学
[在星图里打开](../#n=def.simply-connected)　·　[节点索引](../index.md)

拓扑空间 $X$ 叫**单连通的**，如果

1. $X$ 道路连通，且
2. $\pi_{1}(X, x_{0}) = 1$ 对某个（等价地：对每个）$x_{0} \in X$ 成立。

由 `prop.pi1-basepoint`，条件 2 挑哪个基点都一样（道路连通保证换基点给出同构，而「平凡」是同构不变的）。
> 陈述续见 [nodes/def.simply-connected.2.md](./def.simply-connected.2.md)


## 它能推出什么 / 谁在用它
- 被 [`cor.pi1-sphere`](../nodes/cor.pi1-sphere.md) 高维球面的基本群 用

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.simply-connected.3.md](./def.simply-connected.3.md)

refs: Munkres, Topology (2nd ed.), Ch. 9 · The Fundamental Group（simply connected）；Hatcher, Algebraic Topology, Ch. 1 §1.1 · simply-connected spaces

> 说明见 `notes/def.simply-connected.md`

引用：`def.simply-connected`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
