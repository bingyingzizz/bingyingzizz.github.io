# Riemann 和　`def.riemann-sum`
Riemann 和（标记和）
layer 15 · 定义 · Riemann 积分 · 分析学
[在星图里打开](../#n=def.riemann-sum)　·　[节点索引](../index.md)

设 $f : [a, b] \to \mathbb{R}$ 有界，$P = \{ x_0 < \cdots < x_n \}$ 是分割，并在每个小区间里各取一个**标记点** $\xi_i \in I_i$。**Riemann 和**是

$$S(f, P, \xi) := \sum_{i=1}^{n} f(\xi_i)\,\Delta x_i$$

它依赖三样东西：$f$、分割 $P$、以及标记点 $\xi_1, \ldots, \xi_n$ 的取法。

## 为什么成立（入边，证明在 proofs/）
- [`def.partition`](../nodes/def.partition.md) 分割：用到了定义 分割　[proofs/dep.partition-riemannsum.md](../proofs/dep.partition-riemannsum.md)

refs: Rudin, Principles of Mathematical Analysis, Ch. 6

> 说明见 `notes/def.riemann-sum.md`

引用：`def.riemann-sum`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
