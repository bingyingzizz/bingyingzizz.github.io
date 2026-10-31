# 单调类定理　`thm.monotone-class`　·　说明
根 `../`

**这一条是「标准版 + 加强版」合起来的那一个版本。**

**标准版**（Halmos §6 / Folland 2.37）：$\mathcal{A}$ 是**代数** $\implies \mathfrak{m}(\mathcal{A}) = \mathcal{M}(\mathcal{A})$。

上面陈述的是**加强版**：把「$\mathcal{E}$ 是代数」换成两条更弱的条件——$\mathcal{E}$ 中集合的**补**与**并**落进 $\mathfrak{m}(\mathcal{E})$ 就行。证明仍是单调类定理那三步：

**①** 令 $\mathcal{K}_{1} = \{A \in \mathfrak{m} : A^{c} \in \mathfrak{m}\}$。它含 $\mathcal{E}$（第一条条件），且本身是单调类（$\mathfrak{m}$ 单调 $\implies$ 极限仍在 $\mathfrak{m}$；补用一次递减极限）$\implies \mathcal{K}_{1} = \mathfrak{m}$，即 $\mathfrak{m}$ 对**补**封闭。

**②** 固定 $A \in \mathcal{E}$，令 $\mathcal{K}_{2} = \{B \in \mathfrak{m} : A \cup B \in \mathfrak{m}\}$。由第二条条件 $\mathcal{K}_{2} \supseteq \mathcal{E} \implies \mathcal{K}_{2} = \mathfrak{m}$。

> 续见 notes/thm.monotone-class.2.md
