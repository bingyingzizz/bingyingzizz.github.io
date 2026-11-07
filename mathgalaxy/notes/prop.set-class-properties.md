# 集合族的基本性质　`prop.set-class-properties`　·　说明
根 `../`

**证明。**
(1) $\emptyset$ 是**空的不交并**（$n = 0$），按 (5) 的定义直接属于 $\mathfrak{A}$ ✓。⚠️ 不能取 $A \in \mathfrak{A}$ 用 $A \setminus A$ 来证：基本类只要求「差能拆成有限不交并」，并不对差封闭，而且基本类本身根本不必含空集。
(2) 代数：$A_{1}, \ldots, A_{n} \in \mathfrak{A}$ 时 $A_{1}\cap\cdots\cap A_{n} = X \setminus \bigl(\bigcup_{i}(X\setminus A_{i})\bigr) \in \mathfrak{A}$（补 + 有限并）✓；

可数交由 $\sigma$代数的定义直接给出，可数交再用一次 De Morgan ✓。

> 续见 notes/prop.set-class-properties.2.md
