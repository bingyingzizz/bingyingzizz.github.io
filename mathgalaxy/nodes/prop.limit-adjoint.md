# 极限即伴随　`prop.limit-adjoint`
极限 $\iff$ 常图函子有伴随
layer 12 · 命题 · 伴随与反射 · 范畴论

$\mathcal{C}$ 中所有以 $I$ 为索引的极限存在 $\iff$ 常图函子 $\Delta : \mathcal{C} \to \mathcal{C}^{I}$ 有**右伴随**，且该右伴随由

$$D \mapsto \lim D$$

给出。对偶地，所有以 $I$ 为索引的余极限存在 $\iff$ $\Delta$ 有左伴随，由 $D \mapsto \operatorname{colim} D$ 给出。

## 为什么成立（入边，证明在 proofs/）
- `def.limit` 极限：用到了定义 极限　proofs/def-link.limit-adjoint-criterion.md
- `def.commutative-diagram` 交换图：用到了定义 交换图　proofs/def-dep.diagram-limit-adjoint.md

> 说明见 `notes/prop.limit-adjoint.md`
