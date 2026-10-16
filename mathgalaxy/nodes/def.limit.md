# 极限　`def.limit`
极限与余极限（Limit / Colimit）
layer 11 · 定义 · 图与极限 · 范畴论
[在星图里打开](../#n=def.limit)　·　[节点索引](../index.md)

图 $D : I \to \mathcal{C}$ 的**极限**是对 $D$ 上的锥具有泛性质的那一个：锥 $(\lim D,\ p_i)$ 使得对任意锥 $(Y,\ g_i)$，存在**唯一**的态射 $g : Y \to \lim D$ 使

$$p_i \circ g = g_i \qquad (i \in I)$$

等价地，锥函子被 $\lim D$ 表示：

$$\operatorname{Hom}_{\mathcal{C}^{I}}(\Delta Y, D) \;\cong\; \operatorname{Hom}_{\mathcal{C}}(Y, \lim D)$$
> 陈述续见 [nodes/def.limit.2.md](./def.limit.2.md)


## 为什么成立（入边，证明在 proofs/）
- [`def.commutative-diagram`](../nodes/def.commutative-diagram.md) 图与交换图：用到了定义 图与交换图　[proofs/def-dep.diagram-limit.md](../proofs/def-dep.diagram-limit.md)

- …另有入边，续页见 [nodes/def.limit.3.md](./def.limit.3.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.limit.4.md](./def.limit.4.md)

refs: Le Stum, An introduction to condensed mathematics, §1.3

> 说明见 `notes/def.limit.md`

引用：`def.limit`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
