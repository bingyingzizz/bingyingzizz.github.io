# 谱定理（复正规）　`cor.spectral-normal`
推论：复正规算子可酉对角化
layer 21 · 推论 · 内积空间与正交性 · 抽象代数
[在星图里打开](../#n=cor.spectral-normal)　·　[节点索引](../index.md)

设 $V$ 是有限维**复**内积空间，$T : V \to V$ **正规**（$T^{\ast}T = TT^{\ast}$）。则存在 $V$ 的**标准正交基**使 $T$ 是对角阵：

$$T = U \Lambda\, U^{\dagger}, \qquad U^{\dagger}U = I,\ \Lambda = \operatorname{diag}(\lambda_1, \ldots, \lambda_n)$$

并且：

- $T$ 自伴 $\iff$ 所有特征值**实**；
- $T$ 酉 $\iff$ 所有特征值**模长为 1**；
- $T$ 是正交投影 $\iff$ 特征值全在 $\{0, 1\}$ 中且 $T$ 自伴。

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/cor.spectral-normal.2.md](./cor.spectral-normal.2.md)

refs: Roman, Advanced Linear Algebra, Ch. 11

> 说明见 `notes/cor.spectral-normal.md`

引用：`cor.spectral-normal`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
