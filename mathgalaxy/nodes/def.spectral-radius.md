# 谱半径　`def.spectral-radius`
谱半径：特征值模长的最大值
layer 12 · 定义 · 内积空间与正交性 · 抽象代数
[在星图里打开](../#n=def.spectral-radius)　·　[节点索引](../index.md)

**在做什么**：用一个数概括「谱有多大」。它决定 $A^{k}$ 会不会爆炸，也决定迭代法收不收敛。

设 $A \in M_{n}(\mathbb{C})$。**谱半径**是

$\rho(A) := \max\bigl\{\, \lvert\lambda\rvert : \lambda$ 是 $A$ 的特征值 $\, \bigr\}$

**基本性质**：
> 陈述续见 [nodes/def.spectral-radius.2.md](./def.spectral-radius.2.md)


## 它能推出什么 / 谁在用它
- 被 [`def.trace`](../nodes/def.trace.md) 迹 用
- 被 [`def.matrix-norm`](../nodes/def.matrix-norm.md) 矩阵范数 用

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.spectral-radius.3.md](./def.spectral-radius.3.md)

refs: Hoffman–Kunze, Linear Algebra, 「Operators on Inner Product Spaces」· 谱；北大《高等代数》· 特征值与谱

> 说明见 `notes/def.spectral-radius.md`

引用：`def.spectral-radius`（内容 v0.9.2）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
