# 最小二乘　`thm.least-squares`　·　续页（第 2 页）
[在星图里打开](../#n=thm.least-squares)　·　第 1 页 [nodes/thm.least-squares.md](./thm.least-squares.md)

## 陈述（续）
$$\lVert Ax - b\rVert_{2}$$

取最小的 $x$。它由**法方程**（normal equation）唯一确定：

$$A^{T}A\, x = A^{T} b .$$

由于列满秩时 $A^{T}A$ 正定（可逆），解为 $x = (A^{T}A)^{-1}A^{T}b$。
**几何意义**：$Ax^{*}$ 是 $b$ 在 $A$ 的列空间上的**正交投影**，残差 $b - Ax^{*}$ 与列空间正交。

> 续见 [nodes/thm.least-squares.3.md](./thm.least-squares.3.md)
