# 标准拓扑　`def.canonical-topology`
标准拓扑与次标准拓扑
layer 15 · 定义 · 层与拓扑 · 范畴论
[在星图里打开](../#n=def.canonical-topology)　·　[节点索引](../index.md)

在任何范畴 $\mathcal{C}$ 上，存在**最细**的拓扑使得所有可表示预层都是层：规定 $X$ 上的筛 $R$ 是覆盖筛，当且仅当

$$\forall f : Y \to X,\ \forall Z \in \mathcal{C}, \qquad \operatorname{Hom}_{\mathcal{C}}(Y, Z) \;\cong\; \operatorname{Hom}\bigl(f^{-1}(R),\ h_{Z}\bigr)$$

这个拓扑叫 $\mathcal{C}$ 上的**标准拓扑**。比标准拓扑**粗**的拓扑叫**次标准的**（subcanonical）。

## 它能推出什么 / 谁在用它
- ⇒ [`thm.giraud`](../nodes/thm.giraud.md) Giraud 定理

- …另有出边，续页见 [nodes/def.canonical-topology.3.md](./def.canonical-topology.3.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.canonical-topology.2.md](./def.canonical-topology.2.md)

refs: Le Stum, An introduction to condensed mathematics, §3.1–3.2

> 说明见 `notes/def.canonical-topology.md`

引用：`def.canonical-topology`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
