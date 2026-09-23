# 空集 ∅　`def.empty`
空集（Empty Set）
layer 0 · 定义 · 集合的构造 · 集合论

**空集**是不含任何元素的集合，记作 $\emptyset$：

$$\emptyset := \{ x : x \ne x \}$$

「$x \ne x$」对任何 $x$ 都不成立，所以这个集合里一个元素也没有。它是**语言里就给出的原始对象**，与外延公理、一阶语言同级。

于是对一切集合 $A$：$\emptyset \subseteq A$（空泛真），且 $\emptyset$ 是 $\subseteq$ 的最小元。

## 它能推出什么 / 谁在用它
- 被 `thm.empty` 空集存在 用
- 被 `def.union-inter` 并集与交集 用

refs: Kunen, Set Theory, I.5

> 说明见 `notes/def.empty.md`
