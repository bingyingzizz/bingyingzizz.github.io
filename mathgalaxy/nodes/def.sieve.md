# 筛　`def.sieve`
筛
layer 10 · 定义 · 层与拓扑 · 范畴论
[在星图里打开](../#n=def.sieve)　·　[节点索引](../index.md)

设 $X \in \mathcal{C}$。$X$ 上的**筛**是预层 $h_{X} = \operatorname{Hom}_{\mathcal{C}}(-, X)$ 的一个子函子 $R \subseteq h_{X}$：对每个 $X'$ 给一个子集 $R(X') \subseteq \operatorname{Hom}_{\mathcal{C}}(X', X)$，使得只要 $f \in R(X')$，任何 $g : X'' \to X'$ 都满足 $f \circ g \in R(X'')$。

一族态射 $(f_{i} : X_{i} \to X)_{i \in I}$ **生成的筛**是
> 陈述续见 [nodes/def.sieve.2.md](./def.sieve.2.md)


## 它能推出什么 / 谁在用它
- ⇒ [`thm.sheaf-descent`](../nodes/thm.sheaf-descent.md) 层的下降条件

- …另有出边，续页见 [nodes/def.sieve.4.md](./def.sieve.4.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.sieve.3.md](./def.sieve.3.md)

refs: Le Stum, An introduction to condensed mathematics, §3.1–3.2

## 说明
直觉：**$X$ 上一族「允许的映射」，而且凡是能再往下接的都算进来**。所以筛不是随便一族箭头，它「对预复合封闭」—— 这正是一个子函子该有的样子。

引用：`def.sieve`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
