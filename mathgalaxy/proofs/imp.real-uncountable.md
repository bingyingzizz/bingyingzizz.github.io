# 完备性（确界原理）$\implies \mathbb{R}$ 不可数（闭区间套 + 对角线）
`imp.real-uncountable` · 推出 · strong 边 · 根 `../`

`thm.real-ordered-field` ℝ 是完备有序域 → `thm.real-uncountable` ℝ 不可数

反设 $\mathbb{R} = \{x_1, x_2, x_3, \ldots\}$ 可以排成一个序列。下面造一个不属于这个序列的实数。

**① 二分法造出一串闭区间。** 取 $I_0 := [0, 1]$。已知 $I_{n-1} = [a_{n-1}, b_{n-1}]$ 后，令 $m_n := (a_{n-1} + b_{n-1})/2$，取

$$I_n := \begin{cases} [a_{n-1}, m_n], & x_n > m_n \\ [m_n, b_{n-1}], & x_n \le m_n \end{cases}$$

于是 $x_n \notin I_n$，且 $I_0 \supseteq I_1 \supseteq I_2 \supseteq \cdots$，长度 $b_n - a_n = 2^{-n} \to 0$。

**② 完备性给出公共点。** 令 $A := \{a_n\}$。$A$ 非空（$a_0 = 0$）且有上界（$1$ 就是上界），故由**确界原理** $a := \sup A$ 存在。

> 续见 proofs/imp.real-uncountable.2.md
