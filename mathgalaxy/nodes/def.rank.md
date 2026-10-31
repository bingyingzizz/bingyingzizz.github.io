# 秩　`def.rank`
秩 $\operatorname{rank} T$
layer 11 · 定义 · 线性映射与秩 · 抽象代数
[在星图里打开](../#n=def.rank)　·　[节点索引](../index.md)

设 $T : V \to W$ 线性。$T$ 的**秩**定义为像的维数：

$$\operatorname{rank} T := \dim \operatorname{im} T$$

矩阵 $A \in M_{m \times n}(K)$ 的秩定义为它作为 $K^{n} \to K^{m}$ 的线性映射（$x \mapsto Ax$）的秩。

## 为什么成立（入边，证明在 proofs/）
- [`def.kernel-image-vs`](../nodes/def.kernel-image-vs.md) 核与像：用到了定义 核与像　[proofs/dep.kernelimage-rank.md](../proofs/dep.kernelimage-rank.md)

## 它能推出什么 / 谁在用它
- 被 [`thm.rank-nullity`](../nodes/thm.rank-nullity.md) 秩-零化度定理 用
- ⇒ [`thm.rank-nullity`](../nodes/thm.rank-nullity.md) 秩-零化度定理

- …另有出边，续页见 [nodes/def.rank.2.md](./def.rank.2.md)

refs: Hoffman–Kunze, Linear Algebra, Ch. 3

> 说明见 `notes/def.rank.md`

引用：`def.rank`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
