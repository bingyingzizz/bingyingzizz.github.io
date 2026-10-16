# 闭开集　`def.clopen`
闭开集（Clopen Set）
layer 6 · 定义 · 拓扑空间 · 拓扑学
[在星图里打开](../#n=def.clopen)　·　[节点索引](../index.md)

$X$ 的子集 $K$ 叫**闭开集**，如果它同时是开集与闭集。等价地：$K$ 与它的补 $K^{c}$ 都是开集，即 $X = K \sqcup K^{c}$ 是一个不交非空开集之并（$K$ 非平凡时）。

## 为什么成立（入边，证明在 proofs/）
- [`def.closed-set`](../nodes/def.closed-set.md) 闭集与闭包：用到了定义 闭集与闭包　[proofs/dep.topology-clopen.md](../proofs/dep.topology-clopen.md)

## 它能推出什么 / 谁在用它
- ⇒ [`prop.component-clopen`](../nodes/prop.component-clopen.md) 连通分量是闭开邻域之交
- 被 [`prop.stone-clopen-refinement`](../nodes/prop.stone-clopen-refinement.md) Stone 空间的闭开加细 用

- …另有出边，续页见 [nodes/def.clopen.2.md](./def.clopen.2.md)

refs: Munkres, Topology

> 说明见 `notes/def.clopen.md`

引用：`def.clopen`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
