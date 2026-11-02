# T0 空间　`def.t0-space`
T0 空间（Kolmogorov）：点可被开集区分
layer 6 · 定义 · 拓扑空间 · 拓扑学
[在星图里打开](../#n=def.t0-space)　·　[节点索引](../index.md)

**在做什么**：分离公理里最弱的一条 —— 只要求「任意两个不同点，存在某个开集恰好只含其中一个」。它保证拓扑能**看见**点是不同的。

拓扑空间 $X$ 叫 **$T_{0}$ 空间**（或 **Kolmogorov 空间**），若对任意 $x \ne y \in X$，存在开集 $U$ 使

$$x \in U,\ y \notin U \qquad \text{或} \qquad y \in U,\ x \notin U .$$
> 陈述续见 [nodes/def.t0-space.2.md](./def.t0-space.2.md)


## 它能推出什么 / 谁在用它
- 被 [`def.t1-space`](../nodes/def.t1-space.md) T1 空间 用

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.t0-space.3.md](./def.t0-space.3.md)

refs: Munkres, Topology（⚠️ 章节未核实，只记书名）· 分离公理；Engelking, General Topology（⚠️ 章节未核实，只记书名）

> 说明见 `notes/def.t0-space.md`

引用：`def.t0-space`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
