# 内部　`def.interior`
内部：闭包的对偶
layer 6 · 定义 · 拓扑空间的基本语汇 · 拓扑学
[在星图里打开](../#n=def.interior)　·　[节点索引](../index.md)

**在做什么**：闭包的反面。闭包是「把 $A$ 撑到最小闭集」，内部是「把 $A$ 缩到最大开集」—— 两者由取补互相翻译。

设 $(X, \mathcal{T})$ 是拓扑空间，$A \subseteq X$。$A$ 的**内部**（interior，也叫开核）是

$$\mathring{A} := \bigcup\{\, U : U \subseteq A,\ U\ \text{开} \,\} ,$$

即「一切含于 $A$ 的开集之并」，也就是**包含在 $A$ 里的最大开集**。

**与闭包的对偶**（把闭包的公理照抄一遍、开闭互换即可得到）：
> 陈述续见 [nodes/def.interior.2.md](./def.interior.2.md)


## 它能推出什么 / 谁在用它
- 被 [`def.t3-space`](../nodes/def.t3-space.md) T3 空间 用

- …另有出边，续页见 [nodes/def.interior.4.md](./def.interior.4.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.interior.3.md](./def.interior.3.md)

refs: Munkres, Topology；Engelking, General Topology, Ch. 1 §1.3

> 说明见 `notes/def.interior.md`

引用：`def.interior`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
