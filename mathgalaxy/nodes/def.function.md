# 映射　`def.function`
映射
layer 5 · 定义 · 关系与函数 · 集合论
[在星图里打开](../#n=def.function)　·　[节点索引](../index.md)

设 $f$ 是 $A$ 到 $B$ 的关系。$f$ 是一个**映射**（记 $f : A \to B$），当且仅当对每个输入恰有一个输出：

$$\forall a \in A, \exists! b \in B, (a, b) \in f$$

唯一性使 $f(a) = b$ 这个记号不会歧义；此时 $\operatorname{dom} f = A$，$f$ 的**像**是 $f(A) = \{ f(a) : a \in A \}$。

单射 / 满射 / 双射见另一条节点；取值落在数集里的映射另有一个名字，叫**函数**。

## 为什么成立（入边，证明在 proofs/）
- [`def.rel`](../nodes/def.rel.md) 关系：用到了定义 关系　[proofs/def-dep.rel-function.md](../proofs/def-dep.rel-function.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.function.2.md](./def.function.2.md)

refs: Kunen, Set Theory, I.5

> 说明见 `notes/def.function.md`

引用：`def.function`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
