# 转置　`def.transpose`
矩阵的转置与它的性质
layer 13 · 定义 · 内积空间与正交性 · 抽象代数
[在星图里打开](../#n=def.transpose)　·　[节点索引](../index.md)

**在做什么**：把矩阵沿主对角线翻过来。看起来只是个记号操作，但它正是**对偶空间上诱导的映射**在矩阵语言里的样子。

设 $A = (a_{ij}) \in M_{m\times n}(K)$。**转置** $A^{T} \in M_{n\times m}(K)$ 由 $(A^{T})_{ij} := a_{ji}$ 定义。

**基本性质**：$(A+B)^{T} = A^{T} + B^{T}$、$(cA)^{T} = cA^{T}$、$(A^{T})^{T} = A$，以及最要紧的一条

$$(AB)^{T} = B^{T} A^{T}$$
> 陈述续见 [nodes/def.transpose.2.md](./def.transpose.2.md)


## 它能推出什么 / 谁在用它
- 被 [`def.conjugate-transpose`](../nodes/def.conjugate-transpose.md) 共轭转置 用

- …另有出边，续页见 [nodes/def.transpose.4.md](./def.transpose.4.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.transpose.3.md](./def.transpose.3.md)

refs: Hoffman–Kunze, Linear Algebra, 「Linear Transformations」· 转置与对偶；北大《高等代数》· 矩阵的转置

> 说明见 `notes/def.transpose.md`

引用：`def.transpose`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
