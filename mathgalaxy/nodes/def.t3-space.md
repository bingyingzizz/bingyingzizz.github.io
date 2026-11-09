# T3 空间　`def.t3-space`
T3：单点与闭集可以分开
layer 7 · 定义 · 分离公理 · 拓扑学
[在星图里打开](../#n=def.t3-space)　·　[节点索引](../index.md)

**在做什么**：这是「点 vs 不含它的闭集」这条性质**本身** —— 注意它**不含 $T_{1}$**，所以连「单点是闭集」都不保证。

拓扑空间 $X$ 叫 **$T_{3}$ 空间**，若对任意闭集 $F$ 与任意 $x \notin F$，存在不交开集 $U, V$ 使

$$x \in U, \qquad F \subseteq V .$$

**等价说法**（更好用）：对任意 $x$ 与它的开邻域 $W \ni x$，存在开集 $U$ 使

$$x \in U \subseteq \overline{U} \subseteq W ,$$

即**每个开邻域里还夹着一个开集的闭包**。
> 陈述续见 [nodes/def.t3-space.2.md](./def.t3-space.2.md)


## 它能推出什么 / 谁在用它
- 被 [`def.regular-space`](../nodes/def.regular-space.md) 正则空间 用

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.t3-space.3.md](./def.t3-space.3.md)

refs: Munkres, Topology；Engelking, General Topology

> 说明见 `notes/def.t3-space.md`

引用：`def.t3-space`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
