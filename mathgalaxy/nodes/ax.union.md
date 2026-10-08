# 并集公理　`ax.union`
并集公理（Axiom of Union）
layer 0 · 公理 · ZFC 公理系统 · 集合论

一个集合族的所有成员的元素，仍然构成一个集合：

$$\forall F \exists A \forall x [ x \in A \leftrightarrow  \exists Y ( Y \in F \wedge  x \in Y ) ]$$

记作 $\bigcup F$。配合配对公理可得二元并 $a \cup b = \bigcup \{ a, b \}$。

## 它能推出什么 / 谁在用它
- ⇒ `thm.binunion` 二元并存在
- ⇒ `thm.product` 笛卡尔积存在

refs: Kunen, Set Theory, I.3

## 说明
注意 $\bigcup F$ 是「$F$ 中元素的元素」，不是 $F$ 自身；$\bigcup \{a,b\} = a \cup b$ 正是我们要的二元并。
