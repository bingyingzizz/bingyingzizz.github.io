# 矩阵　`def.matrix`
矩阵（Matrix）
layer 9 · 定义 · 矩阵与行列式 · 抽象代数
[在星图里打开](../#n=def.matrix)　·　[节点索引](../index.md)

设 $K$ 是域，$m, n \ge 1$。一个 $m \times n$ 的**矩阵**是 $K$ 中元素排成的长方形阵列

$$A = (a_{ij}) = \begin{pmatrix} a_{11} & \cdots & a_{1n} \\ \vdots & & \vdots \\ a_{m1} & \cdots & a_{mn} \end{pmatrix}, \qquad a_{ij} \in K$$

（$i$ 是行指标、$j$ 是列指标，都从 $1$ 数起。）全体 $m \times n$ 矩阵记 $M_{m \times n}(K)$，方阵记 $M_n(K) := M_{n \times n}(K)$。

$A$ 的第 $j$ **列**是 $K^{m}$ 中的列向量，第 $i$ **行**是 $K^{n}$ 中的行向量。

## 它能推出什么 / 谁在用它
- 被 [`def.matrix-operations`](../nodes/def.matrix-operations.md) 矩阵的加法与乘法 用

- …另有出边，续页见 [nodes/def.matrix.3.md](./def.matrix.3.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.matrix.2.md](./def.matrix.2.md)

refs: Hoffman–Kunze, Linear Algebra, Ch. 1；Lang, Linear Algebra

> 说明见 `notes/def.matrix.md`

引用：`def.matrix`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
