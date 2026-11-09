# T0 空间　`def.t0-space`
T0 空间（Kolmogorov）：点可被开集区分
layer 6 · 定义 · 分离公理 · 拓扑学
[在星图里打开](../#n=def.t0-space)　·　[节点索引](../index.md)

**在做什么**：分离公理里最弱的一条 —— 只要求「任意两个不同点，存在某个开集恰好只含其中一个」。它保证拓扑能**看见**点是不同的。

拓扑空间 $X$ 叫 **$T_{0}$ 空间**（或 **Kolmogorov 空间**），若对任意 $x \ne y \in X$，存在开集 $U$ 使

$$x \in U,\ y \notin U \qquad \text{或} \qquad y \in U,\ x \notin U .$$

**等价说法**：任意两个不同点的**邻域族不同**，即 $x, y$ 不可能有完全相同的开邻域集。

所以 $T_{0}$ 的含义是：**拓扑能分辨点**。

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.t0-space.2.md](./def.t0-space.2.md)

refs: Munkres, Topology；Engelking, General Topology

> 说明见 `notes/def.t0-space.md`

引用：`def.t0-space`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
