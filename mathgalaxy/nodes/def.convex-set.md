# 凸集　`def.convex-set`
凸集：任意两点的连线不跑出集合
layer 10 · 定义 · Hilbert 空间 · 泛函分析
[在星图里打开](../#n=def.convex-set)　·　[节点索引](../index.md)

设 $V$ 是实向量空间，$C \subseteq V$。称 $C$ 为**凸集**，若 对任意 $x, y \in C$、$t \in [0,1]$，

$$(1-t)x + ty \in C.$$

等价地：$C$ 包含任意两点之间的整条线段。

## 为什么成立（入边，证明在 proofs/）
- [`def.vector-space`](../nodes/def.vector-space.md) 向量空间：用到了定义 向量空间　[proofs/e169.definition.md](../proofs/e169.definition.md)

## 它能推出什么 / 谁在用它
- 被 [`thm.projection-convex`](../nodes/thm.projection-convex.md) 凸闭集的最近点 用
- ⇒ [`def.star-shaped`](../nodes/def.star-shaped.md) 星形集

- …另有出边，续页见 [nodes/def.convex-set.2.md](./def.convex-set.2.md)

refs: Conway, A Course in Functional Analysis · Hilbert 空间与正交基

> 说明见 `notes/def.convex-set.md`

引用：`def.convex-set`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
