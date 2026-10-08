# 表示函子　`def.representable`
表示函子与万有元素（Representable Functor）
layer 12 · 定义 · 预层与米田 · 范畴论

设 $F : \mathcal{C} \to \mathbf{Set}$ 是函子。

**（一）万有元素。** 对象 $X \in \mathcal{C}$ 连同一个元素 $s \in F(X)$ 叫对 $F$ **万有**，如果

$$\forall Y \in \mathcal{C},\ \forall t \in F(Y),\ \exists! \, f : X \to Y,\qquad F(f)(s) = t$$

这时也说 $F$ 被 $(X, s)$ **表示**。

**（二）可表示。** 若 $F \cong \operatorname{Hom}_{\mathcal{C}}(X, -)$，就说 $F$ 被 $X$ **表示**，$X$ 叫 $F$ 的**表示对象**。

## 为什么成立（入边，证明在 proofs/）
- `def.functor` 函子：用到了定义 函子　proofs/def-dep.functor-representable.md
- `def.category` 范畴：用到了定义 范畴　proofs/def-dep.category-representable.md
- `def.function` 函数：用到了定义 函数　proofs/def-dep.function-representable.md
- `def.natural-transformation` 自然变换：用到了定义 自然变换　proofs/def-dep.nat-representable.md

> 说明见 `notes/def.representable.md`

- …另有入边，续页见 `nodes/def.representable.2.md`

## 它能推出什么 / 谁在用它
- …另有出边，续页见 `nodes/def.representable.3.md`
