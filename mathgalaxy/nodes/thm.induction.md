# 归纳原理与递推定义　`thm.induction`
归纳原理 / 递推定义（Induction & Recursion）
layer 6 · 定理 · 数系的构造 · 集合论

设 $\omega$ 是最小归纳集（即 $\mathbb{N}$）。

**(i) 归纳原理**：若 $S \subseteq \omega$ 满足

$$\emptyset \in S, \qquad x \in S \implies x \cup \{x\} \in S$$

则 $S = \omega$。

**(ii) 递推定义**：给定集合 $A$、元素 $a_0 \in A$ 与函数 $F : A \to A$，存在**唯一**的函数 $g : \omega \to A$ 使
> 陈述续见 `nodes/thm.induction.2.md`


## 为什么成立（入边，证明在 proofs/）
- `thm.omega` 自然数集存在：用到了定义 自然数集存在　proofs/dep.omega-induction.md

## 它能推出什么 / 谁在用它
- 被 `def.int` 整数 ℤ 用

refs: Kunen, Set Theory, I.5

> 说明见 `notes/thm.induction.md`
