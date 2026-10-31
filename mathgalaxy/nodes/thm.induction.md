# 归纳原理与递推定义　`thm.induction`
归纳原理 / 递推定义
layer 6 · 定理 · 数系的构造 · 集合论
[在星图里打开](../#n=thm.induction)　·　[节点索引](../index.md)

设 $\omega$ 是最小归纳集（即 $\mathbb{N}$）。

**(i) 归纳原理**：若 $S \subseteq \omega$ 满足

$$\emptyset \in S, \qquad x \in S \implies x \cup \{x\} \in S$$

则 $S = \omega$。

**(ii) 递推定义**：给定集合 $A$、元素 $a_0 \in A$ 与函数 $F : A \to A$，存在**唯一**的函数 $g : \omega \to A$ 使

$$g(\emptyset) = a_0, \qquad g(x \cup \{x\}) = F(g(x)) \quad \forall x \in \omega$$

## 为什么成立（入边，证明在 proofs/）
- [`thm.omega`](../nodes/thm.omega.md) 自然数集存在：用到了定义 自然数集存在　[proofs/dep.omega-induction.md](../proofs/dep.omega-induction.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/thm.induction.2.md](./thm.induction.2.md)

refs: Kunen, Set Theory, I.5

> 说明见 `notes/thm.induction.md`

引用：`thm.induction`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
