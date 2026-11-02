# 行秩 = 列秩　`thm.rank-row-col`
定理：行秩等于列秩，都等于矩阵的秩
layer 12 · 定理 · 矩阵与行列式 · 抽象代数
[在星图里打开](../#n=thm.rank-row-col)　·　[节点索引](../index.md)

设 $A \in M_{m \times n}(K)$。把 $A$ 的 $m$ 个行向量看成 $K^{n}$ 中的向量，其张成的子空间的维数叫**行秩**；同理定义**列秩**（$A$ 的 $n$ 个列向量在 $K^{m}$ 中张成的维数）。则

行秩 $=$ 列秩 $= \operatorname{rank} A$，即

$$\operatorname{rank}_{\text{row}} A = \operatorname{rank}_{\text{col}} A = \operatorname{rank} A$$

其中 $\operatorname{rank} A$ 是线性映射 $x \mapsto Ax$ 的秩（见「秩」）。

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/thm.rank-row-col.2.md](./thm.rank-row-col.2.md)

refs: Hoffman–Kunze, Linear Algebra, Ch. 4

> 说明见 `notes/thm.rank-row-col.md`

引用：`thm.rank-row-col`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
