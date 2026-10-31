# 离散族　`def.discrete-family`
离散的集合族
layer 5 · 定义 · 仿紧与单位分解 · 拓扑学
[在星图里打开](../#n=def.discrete-family)　·　[节点索引](../index.md)

$X$ 的一族子集 $\mathcal{A} = \{ A_{s} \}_{s \in S}$ 叫**离散的**，如果每个点都有开邻域至多与**一个**成员相交：

$$\forall x \in X,\ \exists U \ni x \text{ 开}:\quad \#\{\, s \in S : U \cap A_{s} \ne \emptyset \,\} \le 1.$$

离散 $\implies$ 局部有限 $\implies$ 点有限；两个反向都不成立。

## 它能推出什么 / 谁在用它
- 被 [`def.locally-finite-family`](../nodes/def.locally-finite-family.md) 局部有限族 用

- …另有出边，续页见 [nodes/def.discrete-family.3.md](./def.discrete-family.3.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.discrete-family.2.md](./def.discrete-family.2.md)

refs: Munkres, Topology (2nd ed.), Section 39；Engelking, General Topology, Ch. 5

> 说明见 `notes/def.discrete-family.md`

引用：`def.discrete-family`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
