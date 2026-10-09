# 终对象 / 始对象　`def.final-initial`
终对象与始对象（Terminal / Initial Object）
layer 12 · 定义 · 图与极限 · 范畴论

$\mathcal{C}$ 的**终对象** $\mathbf{1}_{\mathcal{C}}$ 是空图 $\emptyset \to \mathcal{C}$ 的极限，**始对象** $\mathbf{0}_{\mathcal{C}}$ 是它的余极限。用同构集来刻画：

$$\operatorname{Hom}_{\mathcal{C}}(X, \mathbf{1}_{\mathcal{C}}) = \{*\}, \qquad \operatorname{Hom}_{\mathcal{C}}(\mathbf{0}_{\mathcal{C}}, X) = \{*\}$$

（对每个对象 $X$ 都恰好只有一个态射）。二者同时存在且同构时，叫**零对象**。

## 为什么成立（入边，证明在 proofs/）
- `def.empty` 空集 ∅：用到了定义 空集 ∅　proofs/def-dep.empty-final.md
- `def.limit` 极限：用到了定义 极限　proofs/def-dep.limit-final.md

## 它能推出什么 / 谁在用它
- 被 `def.monoid-object` 幺半群对象 用
- 被 `def.zero-object` 零对象与直和 用

> 说明见 `notes/def.final-initial.md`
