# 行空间　`def.row-space`
行空间：矩阵各行张成的子空间
layer 15 · 定义 · 矩阵与行列式 · 抽象代数
[在星图里打开](../#n=def.row-space)　·　[节点索引](../index.md)

设 $A \in M_{m \times n}(K)$，其 $m$ 个行向量为 $a_1, \ldots, a_m \in K^{n}$。它们张成的子空间

$\operatorname{Row}(A) := \operatorname{span}\{a_1, \ldots, a_m\} \subseteq K^{n}$

称为 $A$ 的**行空间**，其维数称为**行秩**。等价地，$\operatorname{Row}(A) = \operatorname{Col}(A^{\mathsf T})$，即 $A^{\mathsf T}$ 的列空间。
> 陈述续见 [nodes/def.row-space.2.md](./def.row-space.2.md)


## 为什么成立（入边，证明在 proofs/）
- [`def.matrix`](../nodes/def.matrix.md) 矩阵：用到了定义 矩阵　[proofs/dep.rowspace-matrix.md](../proofs/dep.rowspace-matrix.md)

- …另有入边，续页见 [nodes/def.row-space.3.md](./def.row-space.3.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.row-space.4.md](./def.row-space.4.md)

refs: Horn–Johnson, Matrix Analysis, 2nd ed., Ch. 0；Hoffman–Kunze, Linear Algebra, Ch. 4

> 说明见 `notes/def.row-space.md`

引用：`def.row-space`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
