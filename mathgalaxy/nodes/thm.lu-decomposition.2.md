# LU 分解　`thm.lu-decomposition`　·　续页（第 2 页）
[在星图里打开](../#n=thm.lu-decomposition)　·　第 1 页 [nodes/thm.lu-decomposition.md](./thm.lu-decomposition.md)

## 陈述（续）
其中 $L$ 是**单位下三角**（对角元全为 $1$）、$U$ 是**上三角**。

**置换版本（总是存在）**：对任意可逆 $A$ 都存在置换矩阵 $P$ 使 $PA = LU$（行交换让主元非零）。
**用途**：解 $Ax = b$ 变成「解 $Ly = b$（前代）+ 解 $Ux = y$（回代）」，两个都是 $O(n^{2})$；而且 $A$ 不变时 $L, U$ 可以反复用。

> 续见 [nodes/thm.lu-decomposition.3.md](./thm.lu-decomposition.3.md)
