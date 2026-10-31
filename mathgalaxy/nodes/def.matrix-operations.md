# 矩阵的加法与乘法　`def.matrix-operations`
矩阵的加法、数乘与乘法
layer 10 · 定义 · 矩阵与行列式 · 抽象代数
[在星图里打开](../#n=def.matrix-operations)　·　[节点索引](../index.md)

设 $A = (a_{ij})$、$B = (b_{ij})$ 同型（都是 $m \times n$）。

**加法与数乘**（逐分量）：

$$(A + B)_{ij} := a_{ij} + b_{ij}, \qquad (cA)_{ij} := c\,a_{ij}$$

**乘法**：设 $A \in M_{m \times n}(K)$、$B \in M_{n \times p}(K)$，则 $AB \in M_{m \times p}(K)$ 定义为

$$(AB)_{ij} := \sum_{k=1}^{n} a_{ik} b_{kj}$$

（$A$ 的列数必须等于 $B$ 的行数，否则不定义。）

## 它能推出什么 / 谁在用它
- 被 [`def.invertible-matrix`](../nodes/def.invertible-matrix.md) 可逆矩阵 用

- …另有出边，续页见 [nodes/def.matrix-operations.3.md](./def.matrix-operations.3.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.matrix-operations.2.md](./def.matrix-operations.2.md)

refs: Hoffman–Kunze, Linear Algebra, Ch. 1

> 说明见 `notes/def.matrix-operations.md`

引用：`def.matrix-operations`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
