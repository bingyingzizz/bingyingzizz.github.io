# 行阶梯形与行简化阶梯形　`def.row-echelon-form`
行阶梯形：消元法化出的标准形状
layer 14 · 定义 · 矩阵与行列式 · 抽象代数
[在星图里打开](../#n=def.row-echelon-form)　·　[节点索引](../index.md)

设 $R \in M_{m \times n}(K)$。若

- 所有零行都排在非零行之下；
- 每个非零行的首个非零元（称为**主元**）所在的列，严格在上一行主元的右侧，

则称 $R$ 为**行阶梯形**（row echelon form）。若进一步每个主元都等于 $1$、且主元所在列的其他元素全为 $0$，则称 $R$ 为**行简化阶梯形**（reduced row echelon form，RREF）。
> 陈述续见 [nodes/def.row-echelon-form.2.md](./def.row-echelon-form.2.md)


## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.row-echelon-form.3.md](./def.row-echelon-form.3.md)

refs: Horn–Johnson, Matrix Analysis, 2nd ed., Ch. 0；Hoffman–Kunze, Linear Algebra, Ch. 1

> 说明见 `notes/def.row-echelon-form.md`

引用：`def.row-echelon-form`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
