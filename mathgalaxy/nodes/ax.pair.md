# 配对公理　`ax.pair`
配对公理
layer 0 · 公理 · ZFC 公理系统 · 集合论
[在星图里打开](../#n=ax.pair)　·　[节点索引](../index.md)

任给两个集合，可以打包成「只含这两个元素的集合」：

$$\forall a \forall b \exists A \forall x [ x \in A \leftrightarrow  ( x = a \vee  x = b ) ]$$

由外延公理 $A$ 唯一，记作 { a, b }（无序对）。取 $a = b$ 即得单点集 { a }。

## 它能推出什么 / 谁在用它
- ⇒ [`thm.noself`](../nodes/thm.noself.md) 无自属集合
- ⇒ [`thm.binunion`](../nodes/thm.binunion.md) 二元并存在
- ⇒ [`thm.product`](../nodes/thm.product.md) 笛卡尔积存在
- 被 [`def.pair`](../nodes/def.pair.md) 有序对 用

refs: Kunen, Set Theory, I.3

## 说明
有了配对公理，「{a, b}」才是集合；它也是构造有序对 $(a,b) = \{\{a\},\{a,b\}\}$ 的第一步。

引用：`ax.pair`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
