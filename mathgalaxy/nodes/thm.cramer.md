# Cramer 法则　`thm.cramer`
定理（Cramer）：用行列式解方程组
layer 14 · 定理 · 矩阵与行列式 · 抽象代数
[在星图里打开](../#n=thm.cramer)　·　[节点索引](../index.md)

设 $A \in M_n(K)$ 且 $\det A \ne 0$，$b \in K^{n}$。则方程组 $Ax = b$ 有唯一解，且

$$x_j = \frac{\det A_j}{\det A}, \qquad j = 1, \ldots, n$$

其中 $A_j$ 是把 $A$ 的第 $j$ 列换成 $b$ 得到的矩阵。

## 为什么成立（入边，证明在 proofs/）
- [`def.determinant`](../nodes/def.determinant.md) 行列式 + [`prop.det-laplace`](../nodes/prop.det-laplace.md) Laplace 展开 + [`def.invertible-matrix`](../nodes/def.invertible-matrix.md) 可逆矩阵：伴随矩阵 + 行列式 $\implies$ Cramer 法则　[proofs/imp.cramer.md](../proofs/imp.cramer.md)

refs: Hoffman–Kunze, Linear Algebra, Ch. 5；Lang, Linear Algebra

> 说明见 `notes/thm.cramer.md`

引用：`thm.cramer`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
