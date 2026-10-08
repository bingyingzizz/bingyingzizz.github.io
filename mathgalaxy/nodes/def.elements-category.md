# 元素范畴　`def.elements-category`
元素范畴（Category of Elements）
layer 11 · 定义 · 单满、子对象与像 · 范畴论

函子 $F : \mathcal{C} \to \mathbf{Set}$ 的**元素范畴** $\operatorname{el}(F)$ 以

$$\bigl\{(Y, t) : Y \in \mathcal{C},\ t \in F(Y)\bigr\}$$

为对象，从 $(Y, t)$ 到 $(Z, u)$ 的态射取使 $F(f)(t) = u$ 的 $f : Y \to Z$。

称 $(X, s)$ 是 $F$ 的**泛元素**，如果它是 $\operatorname{el}(F)$ 的始对象。

## 为什么成立（入边，证明在 proofs/）
- `def.function` 函数：用到了定义 函数　proofs/def-dep.function-el.md
- `def.cone` 锥：用到了定义 锥　proofs/def-dep.cone-el.md

## 它能推出什么 / 谁在用它
- 被 `def.representable` 表示函子 用
- 被 `def.slice-category` 切片范畴 用
- 被 `def.comma-category` 逗号范畴 用

> 说明见 `notes/def.elements-category.md`
