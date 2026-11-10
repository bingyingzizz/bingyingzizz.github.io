# 凸组合　`def.convex-combination`
凸组合：系数非负且和为 1 的有限线性组合
layer 11 · 定义 · Hilbert 空间 · 泛函分析
[在星图里打开](../#n=def.convex-combination)　·　[节点索引](../index.md)

设 $V$ 是实向量空间，$x_{1}, \ldots, x_{n} \in V$。若 $\lambda_{i} \ge 0$ 且 $\sum_{i=1}^{n} \lambda_{i} = 1$，称

$\sum_{i=1}^{n} \lambda_{i} x_{i}$

为这些点的一个**凸组合**。等价地，凸组合就是「先取线段、再反复取线段」得到的点；$n=2$ 时就是两点间的线段。

## 为什么成立（入边，证明在 proofs/）
- [`def.convex-set`](../nodes/def.convex-set.md) 凸集：用到了定义 凸集　[proofs/e172.definition.md](../proofs/e172.definition.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.convex-combination.2.md](./def.convex-combination.2.md)

refs: Conway, A Course in Functional Analysis · Hilbert 空间与正交基

> 说明见 `notes/def.convex-combination.md`

引用：`def.convex-combination`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
