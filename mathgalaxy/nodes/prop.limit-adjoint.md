# 极限即伴随　`prop.limit-adjoint`
极限 $\iff$ 常图函子有伴随
layer 12 · 命题 · 伴随与反射 · 范畴论
[在星图里打开](../#n=prop.limit-adjoint)　·　[节点索引](../index.md)

$\mathcal{C}$ 中所有以 $I$ 为索引的极限存在 $\iff$ 常图函子 $\Delta : \mathcal{C} \to \mathcal{C}^{I}$ 有**右伴随**，且该右伴随由

$$D \mapsto \lim D$$

给出。对偶地，所有以 $I$ 为索引的余极限存在 $\iff$ $\Delta$ 有左伴随，由 $D \mapsto \operatorname{colim} D$ 给出。

## 为什么成立（入边，证明在 proofs/）
- [`def.limit`](../nodes/def.limit.md) 极限：用到了定义 极限　[proofs/def-link.limit-adjoint-criterion.md](../proofs/def-link.limit-adjoint-criterion.md)

- …另有入边，续页见 [nodes/prop.limit-adjoint.2.md](./prop.limit-adjoint.2.md)

refs: Mac Lane, Categories for the Working Mathematician, V.5

> 说明见 `notes/prop.limit-adjoint.md`

引用：`prop.limit-adjoint`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
