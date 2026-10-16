# 特征多项式 + 伴随矩阵 $\implies$ Cayley–Hamilton
`imp.cayley-hamilton` · 推出 · strong 边 · 根 `../`

`def.char-poly` 特征多项式 + `prop.det-laplace` Laplace 展开 → `thm.cayley-hamilton` Cayley–Hamilton

$$0 = A^{n} + c_{n-1}A^{n-1} + \cdots + c_0 I = \chi_A(A)$$

（其中 $\chi_A(x) = x^{n} + c_{n-1}x^{n-1} + \cdots + c_0$。）∎

一般算子 $T$ 的情形：取一组基把它写成 $A$，把上式翻译回算子语言即可。

> 第 3 步「中间项全部相消」是全部技巧：那一串等式被设计成望远镜式（$A^{k} B_k - A^{k+1}B_{k-1}$ 型），所以相加之后只剩两头。
