# Laplace 展开　`prop.det-laplace`
命题：Laplace 展开（按一行或一列展开）
layer 13 · 命题 · 矩阵与行列式 · 抽象代数
[在星图里打开](../#n=prop.det-laplace)　·　[节点索引](../index.md)

设 $A = (a_{ij}) \in M_n(K)$，记 $A_{ij}$ 为划掉第 $i$ 行与第 $j$ 列后得到的 $(n-1)$ 阶矩阵，$M_{ij} := \det A_{ij}$（**余子式**），$C_{ij} := (-1)^{i+j} M_{ij}$（**代数余子式**）。则对每个固定的 $i$：

$$\det A = \sum_{j=1}^{n} a_{ij}\, C_{ij}$$

（**按第 $i$ 行展开**；按列同理。）并且「错位展开」给出零：$\sum_j a_{kj} C_{ij} = 0$（$k \ne i$）。

## 它能推出什么 / 谁在用它
- ⇒ [`thm.cramer`](../nodes/thm.cramer.md) Cramer 法则
- ⇒ [`thm.cayley-hamilton`](../nodes/thm.cayley-hamilton.md) Cayley–Hamilton

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/prop.det-laplace.2.md](./prop.det-laplace.2.md)

refs: Hoffman–Kunze, Linear Algebra, Ch. 5

> 说明见 `notes/prop.det-laplace.md`

引用：`prop.det-laplace`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
