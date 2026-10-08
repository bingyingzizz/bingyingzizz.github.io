# 子对象　`def.subobject`
子对象（Subobject）
layer 14 · 定义 · 图与极限 · 范畴论

把单态射 $Y \rightarrowtail X$ 看作 $X$ 的一个**子对象**，记 $Y \subseteq X$。两个子对象的**交**与原像都用拉回定义：

$$Y \cap Z := Y \times_{X} Z, \qquad f^{-1}(Y) := Y \times_{X} X'$$

（对 $Y, Z \subseteq X$ 与任意 $f : X' \to X$；存在时才有定义）。

## 为什么成立（入边，证明在 proofs/）
- `def.mono` 单态射 / 满态射：用到了定义 单态射 / 满态射　proofs/def-dep.mono-subobject.md
- `def.fibered-product` 纤维积 / 纤维余积：用到了定义 纤维积 / 纤维余积　proofs/def-dep.fibered-subobject.md

## 它能推出什么 / 谁在用它
- 被 `def.image` 像 / 余像 用
- 被 `prop.subobject-lattice` 子对象构成有界格 用
- 被 `def.filtration` 过滤 用

> 说明见 `notes/def.subobject.md`
