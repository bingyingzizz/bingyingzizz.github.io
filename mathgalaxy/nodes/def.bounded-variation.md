# 有界变差 BV　`def.bounded-variation`
全变差与有界变差函数（Total Variation, BV）
layer 15 · 定义 · 有界变差与绝对连续 · 分析学

设 $F : \mathbb{R} \to \mathbb{C}$。定义它的**全变差函数**

$$T_F(x) := \sup \{ \sum_{j=1}^{n} |F(x_j) - F(x_{j-1})| : n \in \mathbb{N}, -\infty < x_0 < \cdots < x_n = x \}$$
> 陈述续见 `nodes/def.bounded-variation.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.derivative` 导数：用到了定义 导数　proofs/dep.derivative-bv.md

## 它能推出什么 / 谁在用它
- 被 `prop.bv-examples` BV 的例子与基本性质 用
- 被 `lem.variation-monotone` T_F ± F 递增 用
- 被 `thm.bv-jordan` BV 的 Jordan 分解 用
- 被 `prop.bv-regularity` BV 函数的正则性 用
- 被 `thm.borel-measure-nbv` 测度 ↔ NBV 的一一对应 用
- 被 `lem.ac-subset-bv` AC ⊆ BV 用
- 被 `def.nbv` NBV 用

refs: Folland, Real Analysis, §3.5；Rudin, Real and Complex Analysis, Ch. 7

> 说明见 `notes/def.bounded-variation.md`
