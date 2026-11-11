# 简单多边形的对角线　`lem.polygon-diagonal`
引理：$n \ge 4$ 的简单多边形必有一条对角线
layer 19 · 引理 · 拓扑空间的基本语汇 · 拓扑学
[在星图里打开](../#n=lem.polygon-diagonal)　·　[节点索引](../index.md)

设 $P = v_0v_1\cdots v_{n-1}$ 是简单闭多边形（`def.jordan-curve` 的多边形特例），$K$ 是它围成的多边形区域。若 $n \ge 4$，则存在两个**不相邻**的顶点 $v_i, v_j$，使开线段 $(v_i, v_j)$ 落在 $\operato
> 陈述续见 [nodes/lem.polygon-diagonal.2.md](./lem.polygon-diagonal.2.md)


## 它能推出什么 / 谁在用它
- 被 [`thm.jordan-polygon`](../nodes/thm.jordan-polygon.md) 多边形 Jordan 定理 用

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/lem.polygon-diagonal.3.md](./lem.polygon-diagonal.3.md)

refs: O'Rourke, Computational Geometry in C, §1.3（对角线引理；该节的耳定理路线本图不采用）；Munkres, Topology, §64（多边形与三角剖分）

> 说明见 `notes/lem.polygon-diagonal.md`

引用：`lem.polygon-diagonal`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
