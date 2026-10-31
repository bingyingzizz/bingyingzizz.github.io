# 商集与等价类　`def.quotient-set`
商集 / 等价类
layer 5 · 定义 · 关系与函数 · 集合论
[在星图里打开](../#n=def.quotient-set)　·　[节点索引](../index.md)

设 $\sim$ 是集合 $A$ 上的一个**等价关系**。对 $a \in A$，称

$$[a] := \{ b \in A : b \sim a \}$$

为 $a$ 的**等价类**；称

$$A / \sim\ := \{ [a] : a \in A \}$$

为 $A$ 关于 $\sim$ 的**商集**。三条基本事实：

- $a \in [a]$；
- $[a] = [b] \iff a \sim b$；
- 不同的等价类**两两不交**，且全体之并恰为 $A$ —— 也就是说，等价关系把 $A$ **划分**成一块块。

## 为什么成立（入边，证明在 proofs/）
- [`def.rel`](../nodes/def.rel.md) 关系：用到了定义 关系　[proofs/dep.rel-quotient.md](../proofs/dep.rel-quotient.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.quotient-set.2.md](./def.quotient-set.2.md)

refs: Kunen, Set Theory, I.5

> 说明见 `notes/def.quotient-set.md`

引用：`def.quotient-set`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
