# 星形集　`def.star-shaped`
星形集：存在一个能看见全集合的点
layer 11 · 定义 · Hilbert 空间 · 泛函分析
[在星图里打开](../#n=def.star-shaped)　·　[节点索引](../index.md)

设 $V$ 是实向量空间，$S \subseteq V$。称 $S$ 为**星形集**，若存在 $x_{0} \in S$，使对每个 $x \in S$ 与 $t \in [0,1]$，

$$(1-t)x_{0} + t x \in S.$$

这样的 $x_{0}$ 叫 $S$ 的一个**星点**（star center）。

## 为什么成立（入边，证明在 proofs/）
- [`def.convex-set`](../nodes/def.convex-set.md) 凸集：非空凸集 $\implies$ 星形集　[proofs/e172.implication.md](../proofs/e172.implication.md)

## 它能推出什么 / 谁在用它
- 被 [`lem.poincare-lemma`](../nodes/lem.poincare-lemma.md) Poincaré 引理 用

refs: Conway, A Course in Functional Analysis · Hilbert 空间与正交基

> 说明见 `notes/def.star-shaped.md`

引用：`def.star-shaped`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
