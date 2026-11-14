# 可逆矩阵　`def.invertible-matrix`
可逆矩阵与 $\operatorname{GL}_n(K)$
layer 14 · 定义 · 矩阵与行列式 · 抽象代数
[在星图里打开](../#n=def.invertible-matrix)　·　[节点索引](../index.md)

方阵 $A \in M_n(K)$ 叫**可逆**，当且仅当存在 $B \in M_n(K)$ 使

$$AB = BA = I_n$$

此时 $B$ 唯一，记 $A^{-1}$。全体可逆 $n$ 阶矩阵在乘法下构成群，记

$$\operatorname{GL}_n(K) := \{\, A \in M_n(K) : A \text{ is invertible} \,\}$$

叫**一般线性群**。

## 它能推出什么 / 谁在用它
- 被 [`def.equivalent-matrices`](../nodes/def.equivalent-matrices.md) 相抵矩阵（等价矩阵） 用

- …另有出边，续页见 [nodes/def.invertible-matrix.3.md](./def.invertible-matrix.3.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.invertible-matrix.2.md](./def.invertible-matrix.2.md)

refs: Horn–Johnson, Matrix Analysis, 2nd ed., Ch. 1；Hoffman–Kunze, Linear Algebra, Ch. 1

> 说明见 `notes/def.invertible-matrix.md`

引用：`def.invertible-matrix`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
