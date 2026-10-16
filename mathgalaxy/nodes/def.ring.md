# 环　`def.ring`
环与交换环（Ring）
layer 7 · 定义 · 代数结构 · 抽象代数
[在星图里打开](../#n=def.ring)　·　[节点索引](../index.md)

设 $A$ 是**集合**，$+$ 与 $\cdot$ 是 $A$ 上的两个**二元运算**。称 $(A, +, \cdot)$ 是一个**环**，当且仅当：

- $(A, +)$ 是**阿贝尔群**；
- $(A, \cdot)$ 满足**结合律**（不要求单位元，也不要求交换）；
- **分配律** $a(b + c) = ab + ac$、$(a + b)c = ac + bc$ 成立。

乘法还交换的环叫**交换环**；再要求有乘法单位元 $1 \ne 0$ 的环叫**含幺环**。

## 为什么成立（入边，证明在 proofs/）
- [`def.group`](../nodes/def.group.md) 群：用到了定义 群　[proofs/def-dep.ring-group.md](../proofs/def-dep.ring-group.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.ring.2.md](./def.ring.2.md)

refs: Lang, Algebra, Ch. II；Dummit & Foote, Abstract Algebra, §7.1

> 说明见 `notes/def.ring.md`

引用：`def.ring`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
