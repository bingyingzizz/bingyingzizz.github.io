# 逗号范畴　`def.comma-category`
逗号范畴（Comma Category）
layer 12 · 定义 · 伴随与反射 · 范畴论

设 $G : \mathcal{D} \to \mathcal{C}$ 是函子，$X \in \mathcal{C}$。**逗号范畴** $X \downarrow G$ 以

$$\bigl\{(Y, f) : Y \in \mathcal{D},\ f : X \to G(Y)\bigr\}$$

为对象，从 $(Y, f)$ 到 $(Y', f')$ 的态射取使 $G(g) \circ f = f'$ 的 $g : Y \to Y'$。

## 为什么成立（入边，证明在 proofs/）
- `def.function` 函数：用到了定义 函数　proofs/def-dep.function-comma.md
- `def.functor` 函子：用到了定义 函子　proofs/def-dep.functor-comma.md
- `def.elements-category` 元素范畴：用到了定义 元素范畴　proofs/def-dep.el-comma.md

## 它能推出什么 / 谁在用它
- ⇒ `thm.saft` 伴随函子定理
- 被 `thm.saft` 伴随函子定理 用
- 被 `thm.saft` 伴随函子定理 用

> 说明见 `notes/def.comma-category.md`
