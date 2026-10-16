# 连通与连通分量　`def.connected`
连通空间与连通分量（Connectedness）
layer 5 · 定义 · 拓扑空间 · 拓扑学
[在星图里打开](../#n=def.connected)　·　[节点索引](../index.md)

拓扑空间 $X$ 叫**不连通的**，如果它可以写成两个不交非空开集之并 $X = U \sqcup V$；否则叫**连通的**。

固定 $x \in X$，包含 $x$ 的**连通分量** $C(x)$ 是所有含 $x$ 的连通子集的并 —— 它本身连通，且是极大的。

## 为什么成立（入边，证明在 proofs/）
- [`def.topology`](../nodes/def.topology.md) 拓扑空间与开集：用到了定义 拓扑空间与开集　[proofs/dep.topology-connected.md](../proofs/dep.topology-connected.md)

## 它能推出什么 / 谁在用它
- ⇒ [`prop.component-clopen`](../nodes/prop.component-clopen.md) 连通分量是闭开邻域之交

- …另有出边，续页见 [nodes/def.connected.2.md](./def.connected.2.md)

refs: Munkres, Topology

> 说明见 `notes/def.connected.md`

引用：`def.connected`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
