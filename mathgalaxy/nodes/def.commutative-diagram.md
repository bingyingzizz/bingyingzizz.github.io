# 图与交换图　`def.commutative-diagram`
图与交换图（Diagram / Commutative Diagram）
layer 9 · 定义 · 图与极限 · 范畴论
[在星图里打开](../#n=def.commutative-diagram)　·　[节点索引](../index.md)

设 $I$ 是一个**小范畴**（只有一个小集合那么多对象与态射）。$\mathcal{C}$ 中**以 $I$ 为索引范畴的图**就是一个函子

$$D : I \longrightarrow \mathcal{C}$$

所有这样的图以自然变换为态射，组成范畴

$$\mathcal{C}^{I} := \operatorname{Hom}(I, \mathcal{C})$$

若 $I$ 里任意两个对象之间**至多一个态射**（这样的 $I$ 叫**预序**），则称 $D$ 为 $I$ 上的**交换图**。

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.commutative-diagram.2.md](./def.commutative-diagram.2.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.commutative-diagram.3.md](./def.commutative-diagram.3.md)

refs: Le Stum, An introduction to condensed mathematics, §1.3

> 说明见 `notes/def.commutative-diagram.md`

引用：`def.commutative-diagram`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
