# 图的态射　`def.graph-morphism`
图的态射（Morphism of Graphs）
layer 7 · 定义 · 范畴与图 · 范畴论
[在星图里打开](../#n=def.graph-morphism)　·　[节点索引](../index.md)

从图 $(V, E, s, t)$ 到图 $(V', E', s', t')$ 的**态射**是一对函数

$$\varphi_1 : V \to V', \qquad \varphi_2 : E \to E'$$

使得下面两个方块都交换：

$$s' \circ \varphi_2 = \varphi_1 \circ s, \qquad t' \circ \varphi_2 = \varphi_1 \circ t$$

也就是说：$\varphi_1$ 把一条边的起点送到这条边的像的起点，把终点送到终点。

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.graph-morphism.2.md](./def.graph-morphism.2.md)

refs: Le Stum, An introduction to condensed mathematics, §1.1

## 说明
两条等式各管一头。把它们画成方块就是「图的态射」这个名字的全部内容 —— 顶点那层与边那层各自连续，并且方向对得上。

引用：`def.graph-morphism`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
