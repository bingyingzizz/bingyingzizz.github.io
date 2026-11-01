# 共轭转置　`def.conjugate-transpose`　·　续页（第 2 页）
[在星图里打开](../#n=def.conjugate-transpose)　·　第 1 页 [nodes/def.conjugate-transpose.md](./def.conjugate-transpose.md)

## 陈述（续）
设 $A \in M_{m\times n}(\mathbb{C})$。**共轭转置**（也叫**伴随矩阵**）是
$$A^{*} := \overline{A}^{T} = \bigl(\overline{A^{T}}\bigr), \qquad (A^{*})_{ij} := \overline{a_{ji}} .$$
性质：$(A+B)^{*} = A^{*} + B^{*}$、$(cA)^{*} = \overline{c}\,A^{*}$、$(AB)^{*} = B^{*}A^{*}$、$(A^{*})^{*} = A$。

**与内积的关系（这才是它的定义性性质）**：对一切 $x, y$ 有
$$\langle Ax, y\rangle = \langle x, A^{*}y\rangle .$$

实矩阵时 $A^{*} = A^{T}$，两个概念重合。

> 续见 [nodes/def.conjugate-transpose.3.md](./def.conjugate-transpose.3.md)
