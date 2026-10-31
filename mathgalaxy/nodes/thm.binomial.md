# 二项式定理　`thm.binomial`
定理：二项式定理
layer 9 · 定理 · 实数的运算与不等式 · 数学分析
[在星图里打开](../#n=thm.binomial)　·　[节点索引](../index.md)

设 $A$ 是交换环，$a, b \in A$，$n \in \mathbb{N}$。则

$$(a + b)^{n} = \sum_{k=0}^{n} \binom{n}{k} a^{k}\, b^{n-k}, \qquad \binom{n}{k} := \frac{n!}{k!\,(n-k)!}.$$

系数满足 **Pascal 递推**

$$\binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k},$$

从而是自然数（$\binom{n}{k}$ 就是「从 $n$ 个里挑 $k$ 个」的个数）。

## 为什么成立（入边，证明在 proofs/）
- [`def.power`](../nodes/def.power.md) 整数幂 + [`thm.induction`](../nodes/thm.induction.md) 归纳原理与递推定义：归纳 $\implies$ 二项式定理　[proofs/imp.binomial.md](../proofs/imp.binomial.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/thm.binomial.2.md](./thm.binomial.2.md)

refs: Lang, Algebra, Ch. I

> 说明见 `notes/thm.binomial.md`

引用：`thm.binomial`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
