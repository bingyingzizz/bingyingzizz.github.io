# 三角剖分　`def.triangulation`
三角剖分（可剖分空间）
layer 19 · 定义 · 曲面的地形 · 拓扑学
[在星图里打开](../#n=def.triangulation)　·　[节点索引](../index.md)

设 $X$ 是拓扑空间。$X$ 的一个**三角剖分**是一对 $(K, h)$：

- $K$ 是**单纯复形**（`def.simplicial-complex`），$|K|$ 是它的几何实现；
- $h : |K| \to X$ 是一个**同胚**。

若这样的 $(K, h)$ 存在，称 $X$ **可三角剖分**。把每个单形在 $h$ 下的像叫 $X$ 的一个**面**
（顶点 / 边 / 三角形），于是 $X$ 被写成一堆三角形的并，任意两个三角形只沿**整条边**或一个顶点相交。

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.triangulation.2.md](./def.triangulation.2.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.triangulation.3.md](./def.triangulation.3.md)

refs: Munkres, Topology, Ch. 12；Hatcher, Algebraic Topology, §2.1

> 说明见 `notes/def.triangulation.md`

引用：`def.triangulation`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
