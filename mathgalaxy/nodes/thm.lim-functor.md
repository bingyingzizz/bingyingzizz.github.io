# 极限的函子性　`thm.lim-functor`
极限是函子（Limits as a Functor）
layer 12 · 定理 · 图与极限 · 范畴论
[在星图里打开](../#n=thm.lim-functor)　·　[节点索引](../index.md)

设 $\mathcal{C}$ 具有所有以 $I$ 为索引的极限。给定图 $F, G : I \to \mathcal{C}$ 与自然变换 $\alpha : F \implies G$，族

$$\{\, \alpha_i \circ \pi^{F}_{i} : \lim F \to G(i) \,\}_{i \in I}$$

是 $\lim F$ 到 $G$ 的一个锥，于是泛性给出**唯一**的态射

$$\lim \alpha : \lim F \longrightarrow \lim G, \qquad \pi^{G}_{i} \circ \lim \alpha = \alpha_i \circ \pi^{F}_{i}$$

这样得到的 $\lim : \mathcal{C}^{I} \to \mathcal{C}$ 是一个函子。

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/thm.lim-functor.2.md](./thm.lim-functor.2.md)

refs: Le Stum, An introduction to condensed mathematics, §1.3

> 说明见 `notes/thm.lim-functor.md`

引用：`thm.lim-functor`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
