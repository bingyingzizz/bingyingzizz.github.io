# 完备性（确界原理）$\implies \mathbb{R}$ 不可数（闭区间套 + 对角线）
`imp.real-uncountable` · 推出 · strong 边 · 根 `../`

`thm.real-ordered-field` ℝ 是完备有序域 → `thm.real-uncountable` ℝ 不可数

**$a \in I_n$ 对每个 $n$ 成立**：一方面 $a \ge a_n$（上界）；另一方面对 $k \ge n$ 有 $a_k \le b_k \le b_n$，故 $b_n$ 是 $A$ 的上界，于是 $a \le b_n$。

**③ 矛盾。** 由 ① 知 $x_n \notin I_n$，由 ② 知 $a \in I_n$，所以 $a \ne x_n$ 对**一切** $n$ 成立 —— 但 $a \in \mathbb{R} = \{x_1, x_2, \ldots\}$，与序列穷尽了 $\mathbb{R}$ 矛盾。故 $\mathbb{R}$ 不可数。$\blacksquare$

> 续见 proofs/imp.real-uncountable.3.md
