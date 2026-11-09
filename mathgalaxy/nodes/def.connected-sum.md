# 连通和　`def.connected-sum`
连通和 $M \# N$（挖球再沿边界粘）
layer 20 · 定义 · 曲面的地形 · 拓扑学
[在星图里打开](../#n=def.connected-sum)　·　[节点索引](../index.md)

设 $M$、$N$ 是两个 $n$ 维**连通**拓扑流形（$n \ge 1$）。在 $M$ 里取一个开球 $B_{M}$、在 $N$ 里取一个开球 $B_{N}$，挖掉它们的内部，得到两个带边界球面的流形

$$M^{\circ} := M \setminus \operatorname{int} B_{M}, \qquad N^{\circ} := N \setminus \operatorname{int} B_{N},$$

它们的边界都是 $S^{n-1}$。任取一个同胚 $h : \partial M^{\circ} \to \partial N^{\circ}$，把两者沿边界粘起来：
> 陈述续见 [nodes/def.connected-sum.2.md](./def.connected-sum.2.md)


## 它能推出什么 / 谁在用它
- 被 [`def.genus`](../nodes/def.genus.md) 亏格 用

- …另有出边，续页见 [nodes/def.connected-sum.4.md](./def.connected-sum.4.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.connected-sum.3.md](./def.connected-sum.3.md)

refs: Munkres, Topology, Ch. 12（分类定理前的准备）；Hatcher, Algebraic Topology, Ch. 0

> 说明见 `notes/def.connected-sum.md`

引用：`def.connected-sum`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
