# 可数与不可数　`def.countable`
可数 / 至多可数（Countable）
layer 8 · 定义 · 基数与等势 · 集合论

设 $\mathbb{N} = \{0, 1, 2, \ldots\}$ 是自然数集。

集合 $A$ **可数**，当且仅当存在双射 $A \to \mathbb{N}$（即能把 $A$ 排成一个无穷序列 $a_0, a_1, a_2, \ldots$，一个不漏、一个不重）。

既有限又可数的情形合起来叫**至多可数**：$A$ 至多可数 $\iff$ 存在单射 $A \to \mathbb{N}$。

不是至多可数的集合叫**不可数**。

## 为什么成立（入边，证明在 proofs/）
- `def.bijection` 单射 / 满射 / 双射：用到了定义 单射 / 满射 / 双射　proofs/dep.bijection-countable.md
- `thm.omega` 自然数集存在：用到了定义 自然数集存在　proofs/dep.nat-countable.md
- `def.equinumerous` 等势：用到了定义 等势　proofs/dep.equinumerous-countable.md

## 它能推出什么 / 谁在用它
- 被 `thm.real-uncountable` ℝ 不可数 用

refs: Kunen, Set Theory, I.6

> 说明见 `notes/def.countable.md`
