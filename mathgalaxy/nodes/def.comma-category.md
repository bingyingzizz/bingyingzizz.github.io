# 逗号范畴　`def.comma-category`
逗号范畴（Comma Category）
layer 12 · 定义 · 伴随与反射 · 范畴论

设 $F : \mathcal{A} \to \mathcal{C}$、$G : \mathcal{B} \to \mathcal{C}$ 是两个**靶相同**的函子。**逗号范畴** $F \downarrow G$ 以

$$\bigl\{(A, B, f) : A \in \mathcal{A},\ B \in \mathcal{B},\ f : F(A) \to G(B)\bigr\}$$

为对象，从 $(A, B, f)$ 到 $(A', B', f')$ 的态射是一对 $(a : A \to A',\ b : B \to B')$，使方块交换：
> 陈述续见 `nodes/def.comma-category.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.function` 函数：用到了定义 函数　proofs/def-dep.function-comma.md
- `def.functor` 函子：用到了定义 函子　proofs/def-dep.functor-comma.md
- `def.elements-category` 元素范畴：用到了定义 元素范畴　proofs/def-dep.el-comma.md

## 它能推出什么 / 谁在用它
- ⇒ `thm.saft` 伴随函子定理
- 被 `thm.saft` 伴随函子定理 用
- 被 `def.cofinal-functor` 共尾函子 用

> 说明见 `notes/def.comma-category.md`
