# 图的态射　`def.graph-morphism`
图的态射（Morphism of Graphs）
layer 7 · 定义 · 范畴与图 · 范畴论

从图 $(V, E, s, t)$ 到图 $(V', E', s', t')$ 的**态射**是一对函数

$$\varphi_1 : V \to V', \qquad \varphi_2 : E \to E'$$

使得下面两个方块都交换：

$$s' \circ \varphi_2 = \varphi_1 \circ s, \qquad t' \circ \varphi_2 = \varphi_1 \circ t$$
> 陈述续见 `nodes/def.graph-morphism.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.graph` 图：用到了定义 图　proofs/def-dep.graph-graph-morphism.md
- `def.function` 函数：用到了定义 函数　proofs/def-dep.function-graph-morphism.md

## 说明
两条等式各管一头。把它们画成方块就是「图的态射」这个名字的全部内容 —— 顶点那层与边那层各自连续，并且方向对得上。
