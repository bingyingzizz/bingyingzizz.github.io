# 奇异值分解　`thm.svd`
奇异值分解定理：$A = U\Sigma V^{\mathsf{T}}$
layer 21 · 定理 · 内积空间与正交性 · 抽象代数
[在星图里打开](../#n=thm.svd)　·　[节点索引](../index.md)

设 $A \in M_{m \times n}(\mathbb{R})$（或 $\mathbb{C}$），秩为 $r$。则存在正交（酉）矩阵 $U \in M_m$、$V \in M_n$ 与「对角」矩阵 $\Sigma$（只有前 $r$ 个对角元非零）使

$$A = U \Sigma V^{\dagger}, \qquad \Sigma = \operatorname{diag}(\sigma_1, \ldots, \sigma_r, 0, \ldots), \quad \sigma_1 \ge \cdots \ge \sigma_r > 0$$

$\sigma_i$ 叫 $A$ 的**奇异值**，它们是 $A^{\dagger}A$（或 $AA^{\dagger}$）的特征值的平方根。

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/thm.svd.2.md](./thm.svd.2.md)

refs: Horn–Johnson, Matrix Analysis, Ch. 7；Roman, Advanced Linear Algebra, Ch. 11

> 说明见 `notes/thm.svd.md`

引用：`thm.svd`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
