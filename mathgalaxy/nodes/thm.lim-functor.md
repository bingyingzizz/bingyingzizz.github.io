# 极限的函子性　`thm.lim-functor`
极限是函子（Limits as a Functor）
layer 12 · 定理 · 图与极限 · 范畴论

设 $\mathcal{C}$ 具有所有以 $I$ 为索引的极限。给定图 $F, G : I \to \mathcal{C}$ 与自然变换 $\alpha : F \implies G$，族

$$\{\, \alpha_i \circ \pi^{F}_{i} : \lim F \to G(i) \,\}_{i \in I}$$

是 $\lim F$ 到 $G$ 的一个锥，于是泛性给出**唯一**的态射

$$\lim \alpha : \lim F \longrightarrow \lim G, \qquad \pi^{G}_{i} \circ \lim \alpha = \alpha_i \circ \pi^{F}_{i}$$
> 陈述续见 `nodes/thm.lim-functor.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.limit` 极限：用到了定义 极限　proofs/def-dep.limit-functoriality.md
- `def.natural-transformation` 自然变换：用到了定义 自然变换　proofs/def-dep.nat-limfunctor.md

> 说明见 `notes/thm.lim-functor.md`
