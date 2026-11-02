# 正交相似　`def.orthogonally-similar`　·　续页（第 2 页）
[在星图里打开](../#n=def.orthogonally-similar)　·　第 1 页 [nodes/def.orthogonally-similar.md](./def.orthogonally-similar.md)

## 陈述（续）
设 $A, B \in M_{n}(\mathbb{R})$。称 $A$ 与 $B$ **正交相似**，若存在**正交**矩阵 $Q$ 使

$$B = Q^{T} A\, Q = Q^{-1} A\, Q .$$
复情形把 $Q$ 换成**酉**矩阵 $U$，得到**酉相似** $B = U^{*}AU = U^{-1}AU$。

**为什么这一格重要**：正交/酉矩阵同时满足 $P^{-1} = P^{T}$（或 $P^{*}$），所以
正交相似 = 相似 + 合同（三者的区别见 `def.orthogonally-similar` 的注）
它既保持特征值（相似的性质），又保持内积结构（合同的性质）—— 所以它是**稳定**的相似，条件数为 $1$。

> 续见 [nodes/def.orthogonally-similar.3.md](./def.orthogonally-similar.3.md)
