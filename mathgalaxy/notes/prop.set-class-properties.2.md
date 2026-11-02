# 集合族的基本性质　`prop.set-class-properties`　·　说明
根 `../`

（只含「对不交并封闭」的环上，把「补」换成**相对补** $A \setminus \bigcup B_{j}$ 即可。）
(3) $\sigma$代数 = 对可数并封闭的代数，而对可数并封闭 + 对补封闭 $\implies$ 对可数交封闭（De Morgan），反之亦然 —— 两条说法等价 ✓。
(5) 设 $\mathcal{E}$ 是基本类，$\mathfrak{A} := \{ \mathcal{E} \text{ 中有限多个两两不交的集合之并} \}$。
- **对有限并封闭**：把两个有限不交并摆在一起，相交的块用 $A = (A\cap B)\sqcup(A\setminus B)$ 逐块拆开（基本类对差封闭），仍写成有限不交并 ✓；
- **对差封闭**：$A \setminus B$ 逐块做差，同样拆成有限不交并 ✓；
- 含 $\emptyset$（空并）✓。于是 $\mathfrak{A}$ 是一个**环** ✓。∎

(1)：取 $A \in \mathfrak{A}$，则 $A \setminus A = \emptyset$ 要能被拆成不交并，只能是空并。

> 续见 notes/prop.set-class-properties.3.md
