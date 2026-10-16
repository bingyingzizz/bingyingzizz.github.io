# 集合族的基本性质　`prop.set-class-properties`　·　说明
根 `../`

**证明。**
(1) 取 $A \in \mathfrak{A}$，则 $A \setminus A = \emptyset \in \mathfrak{A}$（基本类对差封闭），故空集可写成空的不交并 ✓。
(2) 代数：$A_{1}, \ldots, A_{n} \in \mathfrak{A}$ 时 $A_{1}\cap\cdots\cap A_{n} = X \setminus \bigl(\bigcup_{i}(X\setminus A_{i})\bigr) \in \mathfrak{A}$（补 + 有限并）✓；可数交由 $\sigma$代数的定义直接给出，可数交再用一次 De Morgan ✓。（只含「对不交并封闭」的环上，把「补」换成**相对补** $A \setminus \bigcup B_{j}$ 即可。）
(3) $\sigma$代数 = 对可数并封闭的代数，而对可数并封闭 + 对补封闭 $\implies$ 对可数交封闭（De Morgan），反之亦然 —— 两条说法等价 ✓。
(5) 设 $\mathcal{E}$ 是基本类，$\mathfrak{A} := \{ \mathcal{E} \text{ 中有限多个两两不交的集合之并} \}$。
- **对有限并封闭**：把两个有限不交并摆在一起，相交的块用 $A = (A\cap B)\sqcup(A\setminus B)$ 逐块拆开（基本类对差封闭），仍写成有限不交并 ✓；
- **对差封闭**：$A \setminus B$ 逐块

> 续见 notes/prop.set-class-properties.2.md
