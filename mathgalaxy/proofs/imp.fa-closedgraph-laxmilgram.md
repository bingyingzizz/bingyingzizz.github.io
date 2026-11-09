# 闭图像定理 $\implies$ Lax–Milgram 的逆有界
`imp.fa-closedgraph-laxmilgram` · 推出 · strong 边 · 根 `../`

`thm.closed-graph` 闭图像定理 → `thm.lax-milgram` Lax–Milgram 定理

强制性给出 $\|A x\| \ge \delta \|x\|$；由此 $A$ 单射、像闭，再用正交分解证满射，故 $A$ 是 Banach 空间之间的有界双射。
考察 $A^{-1}$ 的图像：若 $y_n \to y$ 且 $A^{-1} y_n \to x$，则 $A(A^{-1} y_n) = y_n \to y$，由 $A$ 连续得 $A x = y$，即 $x = A^{-1} y$。图像闭，由闭图像定理 $A^{-1}$ 有界。

> 这里用的是闭图像定理（而不是开映射定理）；两者等价，但闭图像形式在「逆映射」上更直接。
