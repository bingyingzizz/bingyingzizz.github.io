# 行列式的存在唯一性　`thm.det-exists-unique`
定理：交错 $n$ 重线性规范函数存在且唯一
layer 11 · 定理 · 矩阵与行列式 · 抽象代数
[在星图里打开](../#n=thm.det-exists-unique)　·　[节点索引](../index.md)

设 $\dim_K V = n$。则存在**唯一**的函数

$$D : V^{n} \longrightarrow K$$

满足：

**(i) 多重线性**：对每个变元分别线性；

**(ii) 交错**：任两个变元相等时取值为 $0$；

**(iii) 规范化**：$D(e_1, \ldots, e_n) = 1$（$(e_i)$ 是任一固定的有序基）。

## 它能推出什么 / 谁在用它
- 被 [`def.determinant`](../nodes/def.determinant.md) 行列式 用
- ⇒ [`thm.det-multiplicative`](../nodes/thm.det-multiplicative.md) 行列式的乘性

- …另有出边，续页见 [nodes/thm.det-exists-unique.3.md](./thm.det-exists-unique.3.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/thm.det-exists-unique.2.md](./thm.det-exists-unique.2.md)

refs: Lang, Linear Algebra；Hoffman–Kunze, Linear Algebra, Ch. 5

> 说明见 `notes/thm.det-exists-unique.md`

引用：`thm.det-exists-unique`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
