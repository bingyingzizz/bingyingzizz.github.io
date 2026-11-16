# 列空间　`def.column-space`
列空间：矩阵各列张成的子空间（线性映射的像）
layer 15 · 定义 · 矩阵与行列式 · 抽象代数
[在星图里打开](../#n=def.column-space)　·　[节点索引](../index.md)

设 $A \in M_{m \times n}(K)$，列向量为 $c_1, \ldots, c_n \in K^{m}$。它们张成的子空间

$\operatorname{Col}(A) := \operatorname{span}\{c_1, \ldots, c_n\} = \{\, A x : x \in K^{n} \,\} \subseteq K^{m}$

称为 $A$ 的**列空间**，即线性映射 $T_A : K^{n} \to K^{m}$、$T_A(x) = Ax$ 的**像**。其维数称为**列秩**，等于 $\operatorname{rank} A$。
> 陈述续见 [nodes/def.column-space.2.md](./def.column-space.2.md)


## 它能推出什么 / 谁在用它
- ～弱边 [`def.row-space`](../nodes/def.row-space.md) 行空间

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.column-space.3.md](./def.column-space.3.md)

refs: Horn–Johnson, Matrix Analysis, 2nd ed., Ch. 0；Hoffman–Kunze, Linear Algebra, Ch. 4

> 说明见 `notes/def.column-space.md`

引用：`def.column-space`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
