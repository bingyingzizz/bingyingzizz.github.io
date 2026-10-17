# 混合偏导相等　`thm.mixed-partials`
定理（Schwarz）：混合偏导数与次序无关
layer 22 · 定理 · 多元微分 · 分析学
[在星图里打开](../#n=thm.mixed-partials)　·　[节点索引](../index.md)

设 $U \subseteq \mathbb{R}^{n}$ 开，$f : U \to \mathbb{R}$ 的二阶偏导 $\partial_i \partial_j f$ 与 $\partial_j \partial_i f$ 都在 $a$ 的某邻域里存在，且在 $a$ 处连续。则

$$\partial_i \partial_j f(a) = \partial_j \partial_i f(a)$$

特别地，$f \in C^{2}$ 时 $H_f(a)$ 是对称矩阵。

## 它能推出什么 / 谁在用它
- ⇒ [`thm.morse-lemma`](../nodes/thm.morse-lemma.md) Morse 引理

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/thm.mixed-partials.2.md](./thm.mixed-partials.2.md)

refs: Rudin, Principles of Mathematical Analysis, Ch. 9；Spivak, Calculus on Manifolds, Ch. 2

> 说明见 `notes/thm.mixed-partials.md`

引用：`thm.mixed-partials`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
