# 坐标　`def.coordinate`
坐标与有序基（Coordinates）
layer 9 · 定义 · 向量空间的基 · 抽象代数
[在星图里打开](../#n=def.coordinate)　·　[节点索引](../index.md)

设 $\mathcal{B} = (v_1, \ldots, v_n)$ 是 $V$ 的**有序**基（顺序算进去）。由「基」的定义，每个 $v \in V$ 都能**唯一**地写成

$$v = c_1 v_1 + \cdots + c_n v_n, \qquad c_i \in K$$

把系数排成列

$$[v]_{\mathcal{B}} := \begin{pmatrix} c_1 \\ \vdots \\ c_n \end{pmatrix} \in K^{n}$$

叫 $v$ 在基 $\mathcal{B}$ 下的**坐标**。于是

$$v \mapsto [v]_{\mathcal{B}}$$

是 $V \to K^{n}$ 的双射，而且是线性的（保持加法与数乘）。

## 它能推出什么 / 谁在用它
- ⇒ [`thm.matrix-linear-map`](../nodes/thm.matrix-linear-map.md) 线性映射 ⟷ 矩阵

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.coordinate.2.md](./def.coordinate.2.md)

refs: Lang, Linear Algebra；Hoffman–Kunze, Linear Algebra, Ch. 3

> 说明见 `notes/def.coordinate.md`

引用：`def.coordinate`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
