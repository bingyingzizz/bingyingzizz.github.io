# σ-代数　`def.sigma-algebra`　·　续页（第 2 页）
[在星图里打开](../#n=def.sigma-algebra)　·　第 1 页 [nodes/def.sigma-algebra.md](./def.sigma-algebra.md)

## 陈述（续）
1. **含全集**：$X \in \mathfrak{A}$
2. **对补封闭**：$A \in \mathfrak{A} \implies A^c := X \setminus A \in \mathfrak{A}$
3. **对可数并封闭**：$A_1, A_2, \ldots \in \mathfrak{A} \implies \bigcup_{n=1}^{\infty} A_n \in \mathfrak{A}$
二元组 $(X, \mathfrak{A})$ 称为**可测空间**（measurable space），$\mathfrak{A}$ 的元素称为**可测集**（measurable set）。
**三条公理之间其实只有一条“硬”的**（其余两条几乎可以互相换）：
- **含全集 $\iff$ 含空集**：由对补封闭即得（$\emptyset = X^{c}$）。所以写成「含 $\emptyset$」或「含 $X$」等价，**只要同时有对补封闭**。
- **对可数并封闭 $\iff$ 对可数交封闭**：**用两次 de Morgan**：$\bigcap_{n} A_{n} = \bigl(\bigcup_{n} A_{n}^{c}\bigr)^{c}$。所以「可数并对」与「可数交」两条只留一条即可 —— **但必须配「对补封闭」**，缺了它

> 续见 [nodes/def.sigma-algebra.3.md](./def.sigma-algebra.3.md)
