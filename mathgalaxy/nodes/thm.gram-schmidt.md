# Gram–Schmidt 正交化　`thm.gram-schmidt`
定理：Gram–Schmidt 正交化（标准正交基存在）
layer 13 · 定理 · 内积空间与正交性 · 抽象代数
[在星图里打开](../#n=thm.gram-schmidt)　·　[节点索引](../index.md)

设 $(v_1, \ldots, v_k)$ 是内积空间 $V$ 中线性无关的向量组。则存在标准正交组 $(e_1, \ldots, e_k)$ 与上三角的可逆系数关系，使

$$\operatorname{span}(e_1, \ldots, e_j) = \operatorname{span}(v_1, \ldots, v_j), \qquad j = 1, \ldots, k$$

特别地：**每个有限维内积空间都有标准正交基**（任一基都可以被正交化）。

## 它能推出什么 / 谁在用它
- ⇒ [`thm.projection-formula`](../nodes/thm.projection-formula.md) 最佳逼近与投影公式

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/thm.gram-schmidt.2.md](./thm.gram-schmidt.2.md)

refs: Hoffman–Kunze, Linear Algebra, Ch. 8

> 说明见 `notes/thm.gram-schmidt.md`

引用：`thm.gram-schmidt`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
