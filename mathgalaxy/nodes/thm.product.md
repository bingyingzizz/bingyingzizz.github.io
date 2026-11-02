# 笛卡尔积存在　`thm.product`
笛卡尔积 $A \times B$ 存在
layer 5 · 定理 · 集合的构造 · 集合论
[在星图里打开](../#n=thm.product)　·　[节点索引](../index.md)

任给两个集合，全体有序对构成一个集合：

$$\forall A \forall B \exists C \forall z [ z \in C \leftrightarrow  \exists a \in A, \exists b \in B, z = (a, b) ]$$

记作 $A \times B = \{ (a, b) : a \in A, b \in B \}$。

## 它能推出什么 / 谁在用它
- ⇒ [`def.section`](../nodes/def.section.md) 截口
- ～弱边 [`thm.omega`](../nodes/thm.omega.md) 自然数集存在
- 被 [`def.category`](../nodes/def.category.md) 范畴 用
- 被 [`def.product`](../nodes/def.product.md) 积 / 余积 用

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/thm.product.2.md](./thm.product.2.md)

refs: Kunen, Set Theory, I.5

## 说明
它是「关系」「函数」得以定义为集合的前提：没有 $A \times B$，就没有 $R \subseteq A \times B$ 这个说法。

引用：`thm.product`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
