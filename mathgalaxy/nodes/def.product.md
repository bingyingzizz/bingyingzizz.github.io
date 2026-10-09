# 积 / 余积　`def.product`
积与余积（Product / Coproduct）
layer 12 · 定义 · 图与极限 · 范畴论

取 $I$ 为**离散范畴**（只有对象，没有非恒等的态射），图 $D : I \to \mathcal{C}$ 就只是一族对象 $(X_i)_{i \in I}$。它的极限叫**积** $\prod_{i} X_i$，余极限叫**余积** $\coprod_{i} X_i$。泛性质写成同构集就是

$$\operatorname{Hom}_{\mathcal{C}}\Bigl(Y, \prod_{i} X_i\Bigr) \;\cong\; \prod_{i} \operatorname{Hom}_{\mathcal{C}}(Y, X_i)$$

## 为什么成立（入边，证明在 proofs/）
- `def.limit` 极限：用到了定义 极限　proofs/def-dep.limit-product.md
- `thm.product` 笛卡尔积存在：用到了定义 笛卡尔积存在　proofs/def-dep.product-set.md

## 它能推出什么 / 谁在用它
- 被 `def.ab-axioms` Grothendieck 的 AB 公理 用
- 被 `def.internal-hom` 内 Hom 用
- 被 `def.monoid-object` 幺半群对象 用
- 被 `def.group-object` 群对象与阿贝尔群对象 用

> 说明见 `notes/def.product.md`
