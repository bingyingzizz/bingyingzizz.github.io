# 配对公理　`ax.pair`
配对公理（Axiom of Pairing）
layer 0 · 公理 · ZFC 公理系统 · 集合论

任给两个集合，可以打包成「只含这两个元素的集合」：

$$\forall a \forall b \exists A \forall x [ x \in A \leftrightarrow  ( x = a \vee  x = b ) ]$$

由外延公理 $A$ 唯一，记作 { a, b }（无序对）。取 $a = b$ 即得单点集 { a }。

## 它能推出什么 / 谁在用它
- ⇒ `thm.noself` 无自属集合
- ⇒ `thm.binunion` 二元并存在
- ⇒ `thm.product` 笛卡尔积存在
- 被 `def.pair` 有序对 用

refs: Kunen, Set Theory, I.3

## 说明
有了配对公理，「{a, b}」才是集合；它也是构造有序对 $(a,b) = \{\{a\},\{a,b\}\}$ 的第一步。
