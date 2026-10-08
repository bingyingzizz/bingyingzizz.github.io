# 自然变换　`def.natural-transformation`
自然变换（Natural Transformation）
layer 9 · 定义 · 函子与自然变换 · 范畴论

设 $F, G : \mathcal{C} \to \mathcal{D}$ 是两个函子。从 $F$ 到 $G$ 的**自然变换** $\alpha : F \implies G$ 是一族态射

$$\alpha_X : F(X) \to G(X) \qquad (X \in \mathcal{C})$$

使得对每条 $f : X \to Y$，方块交换：

$$G(f) \circ \alpha_X = \alpha_Y \circ F(f)$$

每个 $\alpha_X$ 都是同构时，$\alpha$ 叫**自然同构**，记 $F \cong G$。

## 为什么成立（入边，证明在 proofs/）
- `def.functor` 函子：用到了定义 函子　proofs/def-dep.functor-nat.md
- `def.category` 范畴：用到了定义 范畴　proofs/def-dep.category-nat.md

## 它能推出什么 / 谁在用它
- 被 `thm.lim-functor` 极限的函子性 用
- 被 `lem.yoneda` 米田引理 用
- 被 `prop.yoneda-embedding` 米田嵌入 用
- 被 `def.cat-equivalence` 范畴等价 用
- 被 `def.cone` 锥 用
- 被 `def.presheaf-cat` 预层范畴 用
- 被 `def.representable` 表示函子 用

> 说明见 `notes/def.natural-transformation.md`

- …另有出边，续页见 `nodes/def.natural-transformation.2.md`
