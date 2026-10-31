# 连续函子（景之间）　`def.continuous-functor`
连续函子
layer 16 · 定义 · 拓扑斯 · 范畴论
[在星图里打开](../#n=def.continuous-functor)　·　[节点索引](../index.md)

设 $\mathcal{C}, \mathcal{C}'$ 是两个景。函子

$$f^{-1} := g : \mathcal{C} \longrightarrow \mathcal{C}'$$
叫**连续的**，如果沿 $g$ 的预复合把 $\mathcal{C}'$ 上的层拉回成 $\mathcal{C}$ 上的层：

$$g^{*} : \widetilde{\mathcal{C}'} \longrightarrow \widetilde{\mathcal{C}}, \qquad F \longmapsto F \circ g, \qquad \text{落在层范畴里。}$$

## 它能推出什么 / 谁在用它
- 被 [`def.morphism-of-sites`](../nodes/def.morphism-of-sites.md) 景的态射 用

- …另有出边，续页见 [nodes/def.continuous-functor.3.md](./def.continuous-functor.3.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.continuous-functor.2.md](./def.continuous-functor.2.md)

refs: Le Stum, An introduction to condensed mathematics, §3.3

> 说明见 `notes/def.continuous-functor.md`

引用：`def.continuous-functor`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
