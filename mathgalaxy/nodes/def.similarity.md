# 相似　`def.similarity`
相似
layer 12 · 定义 · 特征值与 Jordan 型 · 抽象代数
[在星图里打开](../#n=def.similarity)　·　[节点索引](../index.md)

两个方阵 $A, B \in M_n(K)$ 叫**相似**，记 $A \sim B$，当且仅当存在可逆矩阵 $P$ 使

$$B = P^{-1} A\, P$$

$P$ 叫**过渡矩阵**。相似的**等价**说法：$A$ 与 $B$ 是同一个线性映射在两组基下的矩阵。

相似的不变量：秩、迹、行列式、特征多项式（从而特征值与它们的代数重数）、极小多项式。

## 为什么成立（入边，证明在 proofs/）
- [`thm.change-of-basis`](../nodes/thm.change-of-basis.md) 基变换与相似：用到了定义 基变换与相似　[proofs/dep.changeofbasis-similarity.md](../proofs/dep.changeofbasis-similarity.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.similarity.2.md](./def.similarity.2.md)

refs: Hoffman–Kunze, Linear Algebra, Ch. 6

> 说明见 `notes/def.similarity.md`

引用：`def.similarity`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
