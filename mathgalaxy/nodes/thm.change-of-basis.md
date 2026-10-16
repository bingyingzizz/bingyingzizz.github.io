# 基变换与相似　`thm.change-of-basis`
定理：换基给出相似矩阵
layer 11 · 定理 · 矩阵与行列式 · 抽象代数
[在星图里打开](../#n=thm.change-of-basis)　·　[节点索引](../index.md)

设 $T : V \to V$ 线性，$\mathcal{B}, \mathcal{B}'$ 是 $V$ 的两组有序基。记 $P := [\mathrm{id}]_{\mathcal{B}'}^{\mathcal{B}}$（**过渡矩阵**，第 $j$ 列是 $\mathcal{B}'$ 的第 $j$ 个向量在 $\mathcal{B}$ 下的坐标）。则 $P$ 可逆，且

$$[T]_{\mathcal{B}'} = P^{-1}\,[T]_{\mathcal{B}}\,P$$

此时称两个矩阵**相似**（记 $A \sim B$）。相似是一个等价关系。

## 它能推出什么 / 谁在用它
- 被 [`def.similarity`](../nodes/def.similarity.md) 相似 用

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/thm.change-of-basis.2.md](./thm.change-of-basis.2.md)

refs: Hoffman–Kunze, Linear Algebra, Ch. 4

> 说明见 `notes/thm.change-of-basis.md`

引用：`thm.change-of-basis`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
