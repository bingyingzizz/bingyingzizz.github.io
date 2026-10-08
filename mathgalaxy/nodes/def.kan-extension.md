# Kan 延拓　`def.kan-extension`
Kan 延拓（Kan Extension）
layer 10 · 定义 · 伴随与反射 · 范畴论

设 $p : \mathcal{C} \to \mathcal{C}'$ 是小范畴之间的函子，$F : \mathcal{C} \to \mathcal{D}$。$F$ 沿 $p$ 的**左 Kan 延拓**是一个函子 $p_{!}F : \mathcal{C}' \to \mathcal{D}$ 连同一个自然变换

$$\alpha : F \implies p_{!}F \circ p$$

使得对任意 $G : \mathcal{C}' \to \mathcal{D}$ 与任意 $\gamma : F \implies G \circ p$，存在**唯一**的 $\widetilde{\gamma} : p_{!}F \implies G$ 使
> 陈述续见 `nodes/def.kan-extension.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.adjoint` 伴随函子：用到了定义 伴随函子　proofs/def-dep.adjoint-kan.md
- `def.functor` 函子：用到了定义 函子　proofs/def-dep.functor-kan.md
- `def.natural-transformation` 自然变换：用到了定义 自然变换　proofs/def-dep.nat-kan.md

## 它能推出什么 / 谁在用它
- ⇒ `ex.kan-extension` Kan 延拓的两个例子
- 被 `ex.kan-extension` Kan 延拓的两个例子 用

> 说明见 `notes/def.kan-extension.md`
