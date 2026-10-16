# 数列极限　`def.sequence-limit`
数列极限 $x_n \to x$（Limit of a Sequence）
layer 13 · 定义 · 实数与极限 · 分析学
[在星图里打开](../#n=def.sequence-limit)　·　[节点索引](../index.md)

数列 $\{x_n\} \subseteq \mathbb{R}$ **收敛到** $x$（记 $x_n \to x$ 或 $\lim_{n \to \infty} x_n = x$），当且仅当

$$\forall \varepsilon > 0, \exists N, \forall n \ge N : |x_n - x| < \varepsilon$$

即：不管给出多小的 $\varepsilon$，从某一项之后，所有项都落在 $x$ 的 $\varepsilon$ 邻域里。

不收敛的数列叫**发散**。

## 为什么成立（入边，证明在 proofs/）
- [`def.real`](../nodes/def.real.md) 实数系 ℝ：用到了定义 实数系 ℝ　[proofs/dep.real-sequence.md](../proofs/dep.real-sequence.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.sequence-limit.2.md](./def.sequence-limit.2.md)

refs: Rudin, Principles of Mathematical Analysis, Ch. 3

> 说明见 `notes/def.sequence-limit.md`

引用：`def.sequence-limit`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
