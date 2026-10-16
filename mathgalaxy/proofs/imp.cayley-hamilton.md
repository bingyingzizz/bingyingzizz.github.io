# 特征多项式 + 伴随矩阵 $\implies$ Cayley–Hamilton
`imp.cayley-hamilton` · 推出 · strong 边 · 根 `../`

`def.char-poly` 特征多项式 + `prop.det-laplace` Laplace 展开 → `thm.cayley-hamilton` Cayley–Hamilton

记 $A \in M_n(K)$，考虑**多项式矩阵** $B(x) := xI - A \in M_n(K[x])$，以及它的伴随矩阵

$$\operatorname{adj} B(x) = \bigl( C_{ji}(x) \bigr), \qquad \deg C_{ji} \le n - 1$$

1. 由伴随矩阵的基本等式（见「Laplace 展开」）$B(x) \operatorname{adj} B(x) = \det B(x)\, I = \chi_A(x)\, I$。
2. 把 $\operatorname{adj} B(x)$ 按 $x$ 的幂展开：$\operatorname{adj} B(x) = \sum_{k=0}^{n-1} B_k\, x^{k}$（$B_k \in M_n(K)$）。代入第 1 步并比较 $x$ 的各次系数，得到一串矩阵等式

$$B_0 = -A B_0, \qquad B_k = -A B_k + B_{k-1}, \qquad \cdots$$
3. 把第 $k$ 个等式左乘 $A^{k}$ 并全部相加 —— 中间项**全部相消**，只剩

> 续见 proofs/imp.cayley-hamilton.2.md
