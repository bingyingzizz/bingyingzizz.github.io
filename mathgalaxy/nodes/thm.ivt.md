# 介值定理　`thm.ivt`
介值定理（Intermediate Value Theorem）
layer 15 · 定理 · 连续与紧性 · 分析学
[在星图里打开](../#n=thm.ivt)　·　[节点索引](../index.md)

设 $f$ 在 $[a, b]$ 上连续，$c$ 是介于 $f(a)$ 与 $f(b)$ 之间的**任意**实数。则存在 $\xi \in [a, b]$ 使

$$f(\xi) = c$$

## 为什么成立（入边，证明在 proofs/）
- [`thm.real-ordered-field`](../nodes/thm.real-ordered-field.md) ℝ 是完备有序域 + [`def.continuous`](../nodes/def.continuous.md) 连续：确界原理 + 连续的定义 $\implies$ 介值定理　[proofs/imp.ivt.md](../proofs/imp.ivt.md)

## 它能推出什么 / 谁在用它
- ⇒ [`cor.zero-point`](../nodes/cor.zero-point.md) 零点定理
- ⇒ [`thm.monotone-inverse`](../nodes/thm.monotone-inverse.md) 反函数连续

refs: Rudin, Principles of Mathematical Analysis, Ch. 4

> 说明见 `notes/thm.ivt.md`

引用：`thm.ivt`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
