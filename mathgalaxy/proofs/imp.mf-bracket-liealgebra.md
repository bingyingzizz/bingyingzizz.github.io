# 反称 $+$ Jacobi $\implies$ 向量场的括号是一个 Lie 代数
`imp.mf-bracket-liealgebra` · 推出 · strong 边 · 根 `../`

`def.lie-bracket` Lie 括号 → `def.lie-algebra` Lie 代数

取 $\mathfrak{g} := \mathfrak{X}(M)$（作为实向量空间），括号取 $[\cdot,\cdot]$。逐条核对 `def.lie-algebra` 的公理：

- **是实向量空间**：向量场逐点相加、乘实数仍是向量场；
- **双线性**：来自 $[X,Y]f = X(Yf) - Y(Xf)$ 对两个变元的线性；
- **反称**：$[X,Y] = -[Y,X]$；
- **Jacobi**：$[X,[Y,Z]] + [Y,[Z,X]] + [Z,[X,Y]] = 0$。

四条都已在上一条边（`imp.mf-bracket-properties`）里逐项验过，这里只是把它们打包成「$(\mathfrak{X}(M),[\cdot,\cdot])$ 是 Lie 代数」这一句话。

**这个例子的地位**：它是 Lie 代数的**原型** —— 抽象定义里的两条公理就是从这里抄下来的。所以「Lie 代数」不是新发明的代数结构，而是把向量场括号的性质抄成一页纸。

> 续见 proofs/imp.mf-bracket-liealgebra.2.md
