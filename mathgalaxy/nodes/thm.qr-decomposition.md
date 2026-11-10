# QR 分解　`thm.qr-decomposition`
QR 分解：把列正交化写成三角矩阵
layer 19 · 定理 · 矩阵分解与最小二乘 · 抽象代数
[在星图里打开](../#n=thm.qr-decomposition)　·　[节点索引](../index.md)

**在做什么**：Gram–Schmidt 正交化其实也是在乘一串矩阵 —— 把结果记成 $R$、正交化后的基记成 $Q$，就得到 $A = QR$。

设 $A \in M_{m\times n}(\mathbb{R})$ 的列线性无关（$m \ge n$）。则存在**唯一**的分解

$$A = QR ,$$
> 陈述续见 [nodes/thm.qr-decomposition.2.md](./thm.qr-decomposition.2.md)


## 它能推出什么 / 谁在用它
- ⇒ [`thm.least-squares`](../nodes/thm.least-squares.md) 最小二乘

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/thm.qr-decomposition.3.md](./thm.qr-decomposition.3.md)

refs: Hoffman–Kunze, Linear Algebra, 「Operators on Inner Product Spaces」· Gram–Schmidt；Horn–Johnson, Matrix Analysis

> 说明见 `notes/thm.qr-decomposition.md`

引用：`thm.qr-decomposition`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
