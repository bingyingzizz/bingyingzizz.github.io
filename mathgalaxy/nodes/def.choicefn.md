# 选择函数　`def.choicefn`
选择函数
layer 6 · 定义 · 选择原理 · 序理论+集合论
[在星图里打开](../#n=def.choicefn)　·　[节点索引](../index.md)

设 $F$ 是一个集合族，且 $\emptyset \notin F$。

$f$ 是 $F$ 的**选择函数**，当且仅当

$f$ 是函数，$\operatorname{dom} f = F$；
$\forall X \in F, f(X) \in X$。

即：$f$ 从 $F$ 的每一个成员里各挑出一个元素。

于是选择公理可以简洁地写成：**每个满足 $\emptyset \notin F$ 的集合族 $F$ 都有选择函数**。

## 为什么成立（入边，证明在 proofs/）
- [`def.function`](../nodes/def.function.md) 映射：用到了定义 映射　[proofs/def-link.choicefn-rel.md](../proofs/def-link.choicefn-rel.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.choicefn.2.md](./def.choicefn.2.md)

refs: Jech, The Axiom of Choice

## 说明
若 $F$ 有限，逐个挑选即可，无需 AC。难点只在无穷族，尤其是不可数族。

引用：`def.choicefn`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
