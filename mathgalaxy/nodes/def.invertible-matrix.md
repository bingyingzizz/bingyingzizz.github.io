# 可逆矩阵　`def.invertible-matrix`
可逆矩阵与 $\operatorname{GL}_n(K)$
layer 11 · 定义 · 矩阵与行列式 · 抽象代数
[在星图里打开](../#n=def.invertible-matrix)　·　[节点索引](../index.md)

方阵 $A \in M_n(K)$ 叫**可逆**，当且仅当存在 $B \in M_n(K)$ 使

$$AB = BA = I_n$$

此时 $B$ 唯一，记 $A^{-1}$。全体可逆 $n$ 阶矩阵在乘法下构成群，记

$$\operatorname{GL}_n(K) := \{\, A \in M_n(K) : A \text{ is invertible} \,\}$$

叫**一般线性群**。

## 为什么成立（入边，证明在 proofs/）
- [`def.matrix-operations`](../nodes/def.matrix-operations.md) 矩阵的加法与乘法：用到了定义 矩阵的加法与乘法　[proofs/dep.matrixops-invertible.md](../proofs/dep.matrixops-invertible.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.invertible-matrix.2.md](./def.invertible-matrix.2.md)

refs: Hoffman–Kunze, Linear Algebra, Ch. 1

> 说明见 `notes/def.invertible-matrix.md`

引用：`def.invertible-matrix`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
