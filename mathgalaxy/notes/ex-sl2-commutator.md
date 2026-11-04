# sl₂ 的交换子　`ex-sl2-commutator`　·　说明
根 `../`

**逐条验**：$EF = \begin{pmatrix}1&0\\0&0\end{pmatrix}$、$FE = \begin{pmatrix}0&0\\0&1\end{pmatrix}$，相减正是 $H$；$HE = E$、$EH = -E$ $\implies$ $[H,E] = 2E$；同理 $[H,F] = -2F$。

⭐ **为什么这三个是标准例子**：它们就是 $\mathfrak{sl}_{2}$ 的**标准基** —— 「特征值 $2, 0, -2$」的伴随作用让整个表示论可以画在一张图上。本图的 `def.lie-bracket` 说「反称 + Jacobi」，这里能直接看到反称（$[E,E] = 0$）与 Jacobi 恒等式在三元组上成立。

📌 **括号是「换位子的无穷小版」**：对矩阵群，$\exp(tA)\exp(tB)\exp(-tA)\exp(-tB) = I + t^{2}[A,B] + O(t^{3})$ —— 所以交换子测的正是「两个流在多大程度上不交换」。这条式子本图没有节点（`def.lie-group` 的注里提了线性化，没给这条路），这里只作为读法。

> 续见 notes/ex-sl2-commutator.2.md
