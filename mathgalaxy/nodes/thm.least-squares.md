# 最小二乘　`thm.least-squares`
最小二乘：无解时求最近的解
layer 21 · 定理 · 矩阵分解与最小二乘 · 抽象代数
[在星图里打开](../#n=thm.least-squares)　·　[节点索引](../index.md)

**在做什么**：$Ax = b$ 可能无解（$b$ 不在列空间里）。那就退一步：找一个 $x$ 让 $Ax$ 离 $b$ 最近 —— 这就是最小二乘。

设 $A \in M_{m\times n}(\mathbb{R})$ 列满秩、$b \in \mathbb{R}^{m}$。**最小二乘解**是使

$$\lVert Ax - b\rVert_{2}$$

取最小的 $x$。它由**法方程**（normal equation）唯一确定：
> 陈述续见 [nodes/thm.least-squares.2.md](./thm.least-squares.2.md)


## 它能推出什么 / 谁在用它
- ⇒ [`def.pseudoinverse`](../nodes/def.pseudoinverse.md) 伪逆

- …另有出边，续页见 [nodes/thm.least-squares.5.md](./thm.least-squares.5.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/thm.least-squares.3.md](./thm.least-squares.3.md)

refs: Hoffman–Kunze, Linear Algebra, 「Operators on Inner Product Spaces」· 最佳逼近；Horn–Johnson, Matrix Analysis

> 说明见 `notes/thm.least-squares.md`

引用：`thm.least-squares`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
